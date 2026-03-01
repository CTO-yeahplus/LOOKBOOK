// app/api/admin/extract-tags/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || '');

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) return NextResponse.json({ error: '이미지가 없습니다.' }, { status: 400 });

    // 이미지를 Gemini가 읽을 수 있는 버퍼로 변환
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString('base64');

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 🌟 핵심 프롬프트: 아이템과 무드를 영어 해시태그로 추출
    const prompt = `
      Analyze this fashion image. 
      Extract 1) the specific fashion items (e.g., #TrenchCoat, #LeatherBoots) and 2) the overall mood/style (e.g., #Minimalism, #AvantGarde, #DarkWear). 
      Return ONLY a JSON object with a 'tags' array containing 7 to 9 English hashtags.
      Do not include markdown or any other text.
      Example: {"tags": ["#BlackTrenchCoat", "#Minimalism", "#LeatherBoots", "#Chic"]}
    `;

    const result = await model.generateContent([
      prompt,
      { inlineData: { data: base64Image, mimeType: file.type } }
    ]);

    const responseText = result.response.text();
    const cleanJsonString = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const data = JSON.parse(cleanJsonString);

    return NextResponse.json(data);

  } catch (error) {
    console.error("Vision Tag Extraction Error:", error);
    return NextResponse.json({ error: '이미지 분석에 실패했습니다.' }, { status: 500 });
  }
}