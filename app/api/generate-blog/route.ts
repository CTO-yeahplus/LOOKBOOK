import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const { topic, platform, language } = await req.json();

    // 1. API KEY 가져오기
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
      throw new Error("API Key is missing");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // 🌟 [KEY UPDATE] 환경 변수에서 모델명을 가져옵니다. (없으면 'gemini-1.5-flash'를 기본값으로 사용)
    const modelName = process.env.GEMINI_MODEL_NAME || "gemini-2.5-flash-lite";
    
    // 모델 초기화
    const model = genAI.getGenerativeModel({ model: modelName });

    // (디버깅용 로그: 현재 어떤 모델이 작동 중인지 서버 로그로 확인 가능)
    console.log(`[Blog Generator] Running with model: ${modelName}`);

    const platformStrategy = platform === 'medium' 
      ? "Write a high-end, analytical, and thought-provoking 'Tech & Fashion' column. Focus on future trends, data, and AI. Use subheadings and bullet points. Tone: Professional, Insightful, Visionary."
      : "Write a personal, secretive, and engaging 'Newsletter' for a private community. Use a storytelling approach. Tone: Exclusive, Cult-like, Intimate.";

    const prompt = `
      You are the Chief Editor of 'AURA', a private AI fashion platform.
      
      [Your Persona]
      1. Minimalist yet powerful.
      2. Slightly arrogant but logically convincing.
      3. Use terms like 'Ambient Intelligence', 'Data-Driven', 'Vibe', 'Cult', 'Archive'.
      4. Never sound like a cheap sales ad. Sound like a manifesto.
      
      [Task]
      Generate a blog post based on the user's topic.
      
      - Topic: ${topic}
      - Platform: ${platform === 'medium' ? 'Medium (Tech Blog)' : 'Substack (Newsletter)'}
      - Language: ${language === 'ko' ? 'Korean (High-end Magazine Style)' : 'English (Silicon Valley Tech Writer Style)'}
      - Strategy: ${platformStrategy}

      [Output Format]
      Please output ONLY the JSON format below, without any markdown code blocks (like \`\`\`json).
      {
        "title": "Your creative title here",
        "content": "Your full blog content here (use markdown for formatting)"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();

    // JSON 파싱 및 정제
    const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    let jsonResponse;
    try {
      jsonResponse = JSON.parse(cleanedText);
    } catch (e) {
      console.error("JSON Parse Error:", e);
      // 파싱 실패 시 원본 텍스트라도 반환하여 내용 확인
      jsonResponse = { title: "Draft Generated (Raw Text)", content: cleanedText };
    }

    return NextResponse.json(jsonResponse);

  } catch (error) {
    console.error("Gemini Blog Gen Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}