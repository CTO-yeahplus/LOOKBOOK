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

    // 🌟 AI 모델 선택 (가장 빠르고 성능 좋은 모델)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

    // 🌟 AI에게 부여하는 '수석 에디터' 페르소나 프롬프트
    const prompt = `
      You are the Editor-in-Chief of a high-end, minimalist fashion magazine called 'AURA'.
      Write a compelling, poetic, and trendy fashion editorial based on the following keyword: "${keyword}".
      
      Language Requirement: MUST be written in ${locale === 'ko' ? 'Korean (한국어)' : 'English'}.

      Tone & Manner: 
      - Chic, avant-garde, and confident.
      - Use rich sensory details (textures, weather, lighting).
      - Do not use generic AI-sounding words. Keep it raw and editorial.

      Output Format (Strictly return a valid JSON object without markdown code blocks):
      {
        "title": "A catchy, high-end editorial title",
        "slug": "url-friendly-slug-in-english-only-like-this",
        "tags": "3 to 4 comma separated tags, lowercase",
        "content": "The main editorial body. Use 2-3 short paragraphs. Include newlines (\\n\\n) for formatting."
      }
    `;

    // AI 원고 생성
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // 🌟 마크다운 잔재(```json 등)를 제거하고 순수 JSON 객체로 파싱
    const cleanJsonString = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const editorialData = JSON.parse(cleanJsonString);

    return NextResponse.json(editorialData);

  } catch (error: any) {
    console.error('AI Editorial Generation Error:', error);
    return NextResponse.json({ error: '원고 작성에 실패했습니다.', details: error.message }, { status: 500 });
  }
}