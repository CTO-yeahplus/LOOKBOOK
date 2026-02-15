// app/api/upload/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 1. 클라우드 및 AI 연결
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    // 1. 프론트엔드에서 보낸 파일(사진) 꺼내기
    const formData = await req.formData();
    const file = formData.get('image') as File;
    const userId = formData.get('userId') as string; // 🌟 추가됨!
    const uploaderName = formData.get('uploaderName') as string; // 🌟 추가!
    const uploaderIg = formData.get('uploaderIg') as string; // 🌟 프론트에서 보낸 인스타 ID 받기!
    if (!file) throw new Error("파일이 없습니다.");

    // 2. 파일을 버퍼(Buffer)로 변환
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 3. Supabase Storage(창고)에 사진 업로드
    const fileName = `user_uploads/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const { error: uploadError } = await supabase.storage
      .from('aura_images')
      .upload(fileName, buffer, { contentType: file.type });
    
    if (uploadError) throw uploadError;

    // 업로드된 사진의 영구 접속 주소 획득
    const { data: { publicUrl } } = supabase.storage.from('aura_images').getPublicUrl(fileName);

    // 4. 🌟 Gemini Vision AI 호출 (이미지 분석 지시)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    const prompt = `
      당신은 세계 최고의 패션 디렉터입니다. 사진의 옷을 분석하여 아래 JSON 형식으로만 완벽하게 대답해주세요. 다른 말은 절대 하지마. 마크다운(\`\`\`json 등)은 절대 포함하지 마세요.
        {
          "weather": "어울리는 날씨 이모지 1개 (☀️, ☁️, ☔️, ❄️ 중 택 1)",
          "temperature": "어울리는 온도 (예: 15°C, 28°C 등)",
          "tags": ["스타일 태그1", "스타일 태그2", "스타일 태그3"],
          "colors": ["#HexCode1", "#HexCode2", "#HexCode3"]
        }
    `;

    // 이미지를 AI가 읽을 수 있는 Base64 형태로 변환
    const base64Data = buffer.toString("base64");
    const imagePart = { inlineData: { data: base64Data, mimeType: file.type } };

    // AI 격발!
    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text().trim().replace(/```json/g, '').replace(/```/g, '');
    const aiData = JSON.parse(responseText);

    // 🌟 디버깅용: 터미널에서 AI가 진짜로 뭐라고 대답했는지 확인합니다.
    console.log("🤖 AI가 분석한 원본 데이터:", aiData);

    // 5. AI가 분석한 데이터를 Supabase DB(aura_fashion_items)에 저장
    const { data: dbItem, error: dbError } = await supabase
      .from('aura_fashion_items')
      .insert([{
        user_id: userId || null, // 🌟 이 옷의 주인을 명시합니다!
        uploader_name: uploaderName || '@AURA', // 🌟 작성자 이름 저장!
        uploader_ig: uploaderIg || null, // 🌟 DB에 인스타 ID 저장
        likes_count: 0, // 🌟 (테스트용) 0~15개의 랜덤 하트 자동 부여!
        image_url: publicUrl,
        weather: aiData.weather || "☀️",
        temperature: aiData.temperature || "20°C",
        tags: aiData.tags || ["#OOTD"],
        colors: aiData.colors || aiData.color || ["#E5E0D8", "#2C2C2C", "#8A7B6E"]
      }])
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({ success: true, item: dbItem });

  } catch (error) { // 🌟 ': any'를 지웁니다!
    console.error("Upload/AI Error:", error);
    // 🌟 Error 객체인지 확인하고 안전하게 메시지를 뽑아냅니다.
    const errorMessage = error instanceof Error ? error.message : "알 수 없는 에러가 발생했습니다.";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}