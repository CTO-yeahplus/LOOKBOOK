// app/api/upload/route.ts
export const maxDuration = 60;
import { supabase } from "@/lib/supabase";
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;
    
    // 🌟 [NEW] 모드 스위치 및 스폰서 데이터 받기
    const mode = formData.get('mode') as string; // 'analyzeOnly'가 들어오면 분석만 함
    const isSponsored = formData.get('isSponsored') === 'true';
    const sponsorBrand = formData.get('sponsorBrand') as string;
    const sponsorMessage = formData.get('sponsorMessage') as string;
    const sponsorUrl = formData.get('sponsorUrl') as string;
    
    const userId = formData.get('userId') as string; 
    const uploaderName = formData.get('uploaderName') as string; 
    const uploaderIg = formData.get('uploaderIg') as string; 

    if (!file) throw new Error("파일이 없습니다.");

    // 1. 이미지를 버퍼로 변환
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. 🌟 Gemini Vision AI 호출 (모든 모드에서 공통 실행)
    const modelName = process.env.GEMINI_MODEL_NAME || "gemini-2.5-flash-lite";
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `
      당신은 세계 최고의 패션 디렉터입니다. 사진의 옷을 분석하여 아래 JSON 형식으로만 완벽하게 대답해주세요. 다른 말은 절대 하지마. 마크다운(\`\`\`json 등)은 절대 포함하지 마세요.
        {
          "weather": "어울리는 날씨 이모지 1개 (☀️, ☁️, ☔️, ❄️ 중 택 1)",
          "temperature": "어울리는 온도 (예: 15°C, 28°C 등)",
          "tags": ["#스타일태그1", "#스타일태그2", "#스타일태그3"],
          "colors": ["#HexCode1", "#HexCode2", "#HexCode3"]
        }
    `;

    const base64Data = buffer.toString("base64");
    const imagePart = { inlineData: { data: base64Data, mimeType: file.type } };

    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text().trim().replace(/```json/g, '').replace(/```/g, '');
    const aiData = JSON.parse(responseText);

    // 🌟 [핵심] 'analyzeOnly' 모드면 여기서 바로 AI 결과만 던져주고 퇴근합니다! (DB 저장 안 함)
    if (mode === 'analyzeOnly') {
      return NextResponse.json({ success: true, ai: aiData });
    }

    // 3. 일반 업로드 및 스폰서 업로드 처리 (스토리지 저장)
    const fileName = `${isSponsored ? 'sponsors' : 'user_uploads'}/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const { error: uploadError } = await supabase.storage
      .from('aura_images')
      .upload(fileName, buffer, { contentType: file.type });
    
    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage.from('aura_images').getPublicUrl(fileName);

    // 4. DB 저장
    // 관리자가 오토필된 데이터를 수정했을 수 있으므로, 폼데이터로 넘어온 값을 우선시합니다.
    const customWeather = formData.get('weather') as string;
    const customTemp = formData.get('temperature') as string;
    const customTags = formData.get('tags') as string;
    const customColors = formData.get('colors') as string; // JSON string으로 받음

    const finalTags = customTags ? customTags.split(',').map(t => t.trim()) : aiData.tags;
    const finalColors = customColors ? JSON.parse(customColors) : (aiData.colors || ["#111111", "#FFFFFF", "#FF3B30"]);

    const { data: dbItem, error: dbError } = await supabase
      .from('aura_fashion_items')
      .insert([{
        user_id: userId || null, 
        uploader_name: isSponsored ? 'AURA AD' : (uploaderName || '@AURA'), 
        uploader_ig: uploaderIg || null, 
        likes_count: 0, 
        image_url: publicUrl,
        weather: customWeather || aiData.weather || "☀️",
        temperature: customTemp || aiData.temperature || "20°C",
        tags: finalTags || ["#OOTD"],
        colors: finalColors,
        
        // 🌟 스폰서 전용 데이터 삽입
        is_sponsored: isSponsored,
        sponsor_brand: sponsorBrand || null,
        sponsor_message: sponsorMessage || null,
        sponsor_url: sponsorUrl || null,
      }])
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({ success: true, item: dbItem });

  } catch (error) { 
    console.error("Upload/AI Error:", error);
    const errorMessage = error instanceof Error ? error.message : "알 수 없는 에러가 발생했습니다.";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}