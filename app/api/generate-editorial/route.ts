// app/api/generate-editorial/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 환경변수에 저장된 Gemini API 키를 가져옵니다.
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || '');

export async function POST(req: NextRequest) {
  if (!apiKey) {
    return NextResponse.json({ error: 'API 키가 설정되지 않았습니다.' }, { status: 500 });
  }

  try {
    const { keyword, locale } = await req.json();

    const modelName = process.env.GEMINI_MODEL_NAME || "gemini-2.5-flash-lite";
    // 모델 초기화
    const model = genAI.getGenerativeModel({ model: modelName });

    // 🌟 AI에게 부여하는 '수석 에디터' 페르소나 및 극강의 감성 프롬프트
    const prompt = `
      You are the Editor-in-Chief of a high-end, minimalist fashion magazine called 'AURA'.
      Write a compelling, poetic, and trendy fashion editorial based on the following keyword: "${keyword}".
      
      Language Requirement: MUST be written in ${locale === 'ko' ? 'Korean (한국어)' : 'English'}.

      Tone & Manner: 
      - Chic, avant-garde, and confident.
      - Use rich sensory details (textures, weather, lighting).
      - Do not use generic AI-sounding words. Keep it raw and editorial.

      [🌟 CRITICAL NEW INSTRUCTION: Heritage & Outfit-Centric Praise]
      - The VERY FIRST LINE of the editorial content MUST be a famous quote or core philosophy from a legendary fashion designer (e.g., Martin Margiela, Yves Saint Laurent, Jil Sander, Yohji Yamamoto, Phoebe Philo, Coco Chanel).
      - After the quote, leave a blank line (\\n\\n), and then begin the main editorial text.
      - Beautifully connect this historical philosophy to the featured LOOKS (the outfits themselves, NOT the people wearing them).
      - NEVER praise the wearer or the person. Focus ALL praise entirely on the FASHION ITSELF.
      - Treat the ensemble as a standalone masterpiece of modern archiving.

      [🌟 NEW INSTRUCTION: Hashtags in Content]
      - At the very end of the editorial body, leave a blank line (\\n\\n) and append the relevant English hashtags extracted from the keyword (e.g., #AvantGarde #BlackCoat #Minimalism).
      
      Output Format (Strictly return a valid JSON object without markdown code blocks):
      {
        "title": "A catchy, high-end editorial title",
        "slug": "url-friendly-slug-in-english-only-like-this",
        "tags": "Extract 3 to 5 english hashtags from the keyword and context (e.g., #AvantGarde, #BlackCoat). Format as a comma separated string.",
        "content": "\\"Quote here\\" - Designer Name\\n\\nThe first paragraph beautifully connecting the quote to the outfits...\\n\\nThe second paragraph analyzing the textures, silhouettes, and mood. (NO HASHTAGS AT THE END OF THIS CONTENT)"
      }
    `;

    // AI 원고 생성
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // 🌟 마크다운 잔재(\`\`\`json 등)를 제거하고 순수 JSON 객체로 파싱
    const cleanJsonString = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const editorialData = JSON.parse(cleanJsonString);

    return NextResponse.json(editorialData);

  } catch (error) {
    console.error("Gemini Error:", error);
    // 에러가 Error 객체인지 확인 후 메시지 추출
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}