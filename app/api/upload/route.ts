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
          "tags": ["스타일 태그1", "스타일 태그2", "스타일 태그3"]
        }
    `;

    // 이미지를 AI가 읽을 수 있는 Base64 형태로 변환
    const base64Data = buffer.toString("base64");
    const imagePart = { inlineData: { data: base64Data, mimeType: file.type } };

    // AI 격발!
    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text().trim().replace(/```json/g, '').replace(/```/g, '');
    const aiData = JSON.parse(responseText);

    // 5. AI가 분석한 데이터를 Supabase DB(aura_fashion_items)에 저장
    const { data: dbItem, error: dbError } = await supabase
      .from('aura_fashion_items')
      .insert([{
        image_url: publicUrl,
        weather: aiData.weather,
        temperature: aiData.temperature,
        tags: aiData.tags
      }])
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({ success: true, item: dbItem });

  } catch (error: any) {
    console.error("Upload/AI Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}