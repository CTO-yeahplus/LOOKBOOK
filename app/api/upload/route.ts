
// app/api/upload/route.ts

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';

// Supabase 설정
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY || "비어있음(UNDEFINED)";
    
    // 🚨 [엑스레이 진단] 구글에 보내기 전에, Vercel이 들고 있는 키 상태를 강제로 에러로 뱉어냅니다!
    throw new Error(`[엑스레이 결과] 길이: ${apiKey.length}자 | 앞4글자: ${apiKey.substring(0, 4)} | 뒤3글자: ${apiKey.substring(apiKey.length - 3)}`);
    
    // 키가 없으면 아예 구글에 요청도 하지 않고 에러를 반환하게 만듭니다.
    if (!apiKey) {
      console.error("Vercel 환경변수에 GEMINI_API_KEY가 없습니다!");
      return NextResponse.json({ success: false, error: "서버 API 키 설정 오류" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const formData = await req.formData();
    const file = formData.get('image') as File;
    
    // 모드 스위치 및 스폰서 데이터 받기
    const mode = formData.get('mode') as string;
    const isSponsored = formData.get('isSponsored') === 'true';
    const sponsorBrand = formData.get('sponsorBrand') as string;
    const sponsorMessage = formData.get('sponsorMessage') as string;
    const sponsorUrl = formData.get('sponsorUrl') as string;
    
    const userId = formData.get('userId') as string; 
    const uploaderName = formData.get('uploaderName') as string; 
    const uploaderIg = formData.get('uploaderIg') as string; 

    if (!file) throw new Error("파일이 없습니다.");

    // 🌟 [추가] 브라우저 쿠키에서 사용자가 설정한 언어(NEXT_LOCALE) 읽어오기
    const cookieHeader = req.headers.get('cookie') || '';
    const isEnglish = cookieHeader.includes('NEXT_LOCALE=en');
    
    // 언어에 따른 프롬프트 지시문 동적 생성
    const tagInstruction = isEnglish 
      ? "반드시 '영어(English)'로 작성해 (예: #Streetwear, #Minimal)" 
      : "반드시 '한국어'로 작성해 (예: #스트릿룩, #미니멀룩)";

    // 1. 이미지를 버퍼로 변환
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. Gemini Vision AI 호출
    const modelName = process.env.GEMINI_MODEL_NAME || "gemini-2.5-flash-lite";
    const model = genAI.getGenerativeModel({ model: modelName });

    // 🌟 [수정] 프롬프트에 동적 언어 지시문(tagInstruction) 삽입
    const prompt = `
      당신은 세계 최고의 패션 디렉터입니다. 사진의 옷을 분석하여 아래 JSON 형식으로만 완벽하게 대답해주세요. 다른 말은 절대 하지마. 마크다운(\`\`\`json 등)은 절대 포함하지 마세요.
        {
          "weather": "어울리는 날씨 이모지 1개 (☀️, ☁️, ☔️, ❄️ 중 택 1)",
          "temperature": "어울리는 온도 (예: 15°C, 28°C 등)",
          "tags": ["#태그1", "#태그2", "#태그3"], // ${tagInstruction}
          "colors": ["#HexCode1", "#HexCode2", "#HexCode3"]
        }
    `;

    const base64Data = buffer.toString("base64");
    const imagePart = { inlineData: { data: base64Data, mimeType: file.type } };

    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text().trim().replace(/```json/g, '').replace(/```/g, '');
    const aiData = JSON.parse(responseText);

    // 'analyzeOnly' 모드면 여기서 바로 AI 결과만 던져주고 퇴근합니다! (DB 저장 안 함)
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
    const customWeather = formData.get('weather') as string;
    const customTemp = formData.get('temperature') as string;
    const customTags = formData.get('tags') as string;
    const customColors = formData.get('colors') as string;

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
        
        // 스폰서 전용 데이터 삽입
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