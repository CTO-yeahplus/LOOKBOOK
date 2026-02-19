// bulk-upload.mjs
import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// 🌟 .env.local 파일을 읽어오라고 명령합니다.
dotenv.config({ path: '.env.local' });

// 🔑 환경 변수에서 열쇠를 안전하게 꺼내옵니다.
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!GEMINI_API_KEY || !SUPABASE_URL || !SUPABASE_KEY) {
  console.error("🚨 에러: .env.local 파일에 키가 누락되었습니다!");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const IMAGES_DIR = './images'; 

// 이미지를 제미나이가 읽을 수 있게 변환하는 함수
function fileToGenerativePart(filePath, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
      mimeType
    },
  };
}

async function processImages() {
  const files = fs.readdirSync(IMAGES_DIR).filter(file => file.match(/\.(jpg|jpeg|png|webp)$/i));
  console.log(`총 ${files.length}장의 사진을 발견했습니다. AI 분석 및 업로드를 시작합니다... 🚀\n`);

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    console.log(`👀 분석 중: ${file}`);

    try {
      // 🌟 [STEP 1] 제미나이 AI에게 사진을 보여주고 패션 분석 지시
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
      const prompt = `
        당신은 세계 최고의 패션 디렉터입니다. 사진의 옷을 분석하여 아래 JSON 형식으로만 완벽하게 대답해주세요. 다른 말은 절대 하지마. 마크다운(\`\`\`json 등)은 절대 포함하지 마세요.
        {
          "weather": "어울리는 날씨 이모지 1개 (☀️, ☁️, ☔️, ❄️ 중 택 1)",
          "temperature": "어울리는 온도 (예: 15°C, 28°C 등)",
          "tags": ["#스타일태그1", "#스타일태그2", "#스타일태그3"],
          "colors": ["#HexCode1", "#HexCode2", "#HexCode3"]
        }
      `;
      const imagePart = fileToGenerativePart(filePath, "image/jpeg");
      const result = await model.generateContent([prompt, imagePart]);
      
      // AI의 답변에서 JSON만 깔끔하게 추출 (정규식 강화)
      const responseText = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
      const aiData = JSON.parse(responseText);
      
      console.log(`   ✨ AI 판단 결과: ${aiData.weather} | ${aiData.temperature} | ${(aiData.tags || []).join(', ')}`);

      // 🌟 [STEP 2] Supabase 스토리지(창고)에 사진 업로드
      const fileBuffer = fs.readFileSync(filePath);
      const fileName = `user_uploads/${Date.now()}_${file.replace(/[^a-zA-Z0-9.]/g, '')}`;
      
      const ext = path.extname(file).toLowerCase();
      const mimeType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
      
      const { error: uploadError } = await supabase.storage
        .from('aura_images')
        .upload(fileName, fileBuffer, { contentType: mimeType });

      if (uploadError) {
        console.error(`\n🚨 Supabase 스토리지 에러 상세 정보:`, uploadError);
        throw new Error("스토리지 업로드 실패");
      }

      // 🌟 [STEP 3] 업로드된 사진의 URL 획득
      const { data: publicUrlData } = supabase.storage.from('aura_images').getPublicUrl(fileName);
      const finalImageUrl = publicUrlData.publicUrl;

      // 🌟 [STEP 4] Supabase DB에 완벽한 규격으로 저장
      const { error: dbError } = await supabase
        .from('aura_fashion_items')
        .insert([{
            image_url: finalImageUrl,
            weather: aiData.weather || "☀️",
            temperature: aiData.temperature || "20°C",
            tags: aiData.tags || ["#AURA_PICK"],
            colors: aiData.colors || ["#111111", "#FFFFFF", "#FF3B30"], // 🌟 400 에러 방지용 안전망
            
            // 🌟 AURA 시스템 메타데이터 
            uploader_name: 'AURA Editor', // 에디터 공식 업로드로 표시됨
            likes_count: Math.floor(Math.random() * 40) + 10, // 10~50 사이의 랜덤 좋아요 수 부여 (핫해보이게!)
            is_sponsored: false // 일반 룩북임을 명시
        }]);

      if (dbError) {
        console.error(`\n🚨 DB 저장 에러:`, dbError);
        throw new Error("DB 저장 실패");
      }

      console.log(`   ✅ 완료! 클라우드에 성공적으로 등재되었습니다.\n`);

      // AI API 속도 제한(Rate Limit)을 피하기 위해 2.5초 휴식
      await new Promise(resolve => setTimeout(resolve, 2500));

    } catch (error) {
      console.error(`   ❌ 에러 발생 (${file}):`, error.message);
    }
  }
  
  console.log(`🎉 모든 작업이 끝났습니다! AURA 앱을 새로고침 해보세요.`);
}

processImages();