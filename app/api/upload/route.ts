
// app/api/upload/route.ts

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';

// Supabase 설정
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
const apiKey = process.env.GEMINI_API_KEY || "비어있음(UNDEFINED)";
export const maxDuration = 60;

export async function POST(req: Request) {
  try {    
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
          "temperature": "이 옷의 소재와 두께를 분석하여 입기 가장 완벽한 온도를 1도 단위로 정밀하게 예측할 것. (예: 12°C, 17°C, 23°C 등)",
          "tags": ["#태그1", "#태그2", "#태그3"], // ${tagInstruction}
          "colors": ["#HexCode1", "#HexCode2", "#HexCode3"],
          "curatorNote": "이 사진의 스타일(미니멀, 스트릿, 아방가르드 등)을 분석하여, 그와 가장 잘 어울리는 유명 패션 디자이너(마르지엘라, 르메르, 질 샌더, 요지 야마모토 등)의 실제 명언이나 패션 철학을 하나 인용하고,  반드시 줄바꿈(\\n\\n)을 두 번 한 뒤에 이 룩을 평가하는 에디터의 코멘트를 작성해. 명언과 코멘트를 시각적으로 확실히 분리할 것. (예시: '우아함은 거절의 예술이다.' - 코코 샤넬\\n\\n불필요한 레이어드를 걷어내고 떨어지는 캐시미어의 질감만으로 오늘의 서늘한 바람을 완벽하게 통제했습니다.) (${isEnglish ? '반드시 영어로' : '반드시 한국어로'})"
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
        curator_note: aiData.curatorNote || null, // 🌟 [NEW] AI가 뽑아낸 명언을 DB에 저장!
        
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