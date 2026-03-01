// app/api/cron/auto-pilot/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "@/lib/supabase";
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function GET(req: Request) {
  try {
    // 🌟 1. 보안 검사: Vercel Cron에서 보낸 정상적인 요청인지 확인 (외부 공격 차단)
    const authHeader = req.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // 🌟 2. 마스터 스위치 확인: 어드민에서 Auto-Pilot이 켜져 있는지 체크
    const { data: settings } = await supabase
      .from('aura_system_settings')
      .select('auto_pilot_enabled')
      .single();

    if (!settings?.auto_pilot_enabled) {
      return NextResponse.json({ message: "Auto-Pilot is OFF. Skipping generation." });
    }

    // 🌟 3. 오늘 요일 파악 (UTC 기준 00:00 = 한국 시간 오전 9시)
    const today = new Date().getDay(); // 0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
    
    let platform = '';
    let prompt = '';

    // 🌟 4. AURA의 전략적 배포 스케줄 (The Golden Cadence)
    if (today === 2 || today === 4 || today === 6) {
      // 화, 목, 토: X (Twitter)
      platform = 'X';
      prompt = `Write a short, provocative fashion tweet (max 280 chars) for a high-end platform called 'AURA'. 
      Include a quote from a legendary fashion designer (like Margiela, Jil Sander, etc). 
      Focus on minimalism, textures, and rejecting loud logos. 
      End with 3 english hashtags. Korean language.`;
    } 
    else if (today === 5) {
      // 금: Substack
      platform = 'Substack';
      prompt = `Write an exclusive, secretive weekly newsletter intro for 'AURA CULT' members.
      The tone should be private, arrogant yet elegant. 
      Review the high-end minimalist looks uploaded this week. 
      Make them feel special for being part of this underground fashion archiving system. Korean language. Use 2-3 paragraphs.`;
    } 
    else if (today === 3) {
      // 수: Medium
      platform = 'Medium';
      prompt = `Write an authoritative tech and fashion philosophy article intro for 'AURA' on Medium.
      Discuss how AI vision analysis intersects with high-end fashion design.
      Explore the philosophical deconstruction of modern streetwear using tech. 
      Tone: Deep, intellectual, and professional. Korean language. Use 3-4 paragraphs.`;
    } 
    else {
      // 일, 월: 휴식 (작성 안 함)
      return NextResponse.json({ message: "No scheduled content for today." });
    }

    // 🌟 5. Gemini AI에게 원고 집필 명령
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const content = result.response.text();

    // 🌟 6. 작성된 원고를 DB (Distribution Center의 Draft 열)에 조용히 꽂아넣기
    const { error } = await supabase
      .from('aura_content_pipeline')
      .insert([{ 
        platform: platform, 
        content: content.trim(), 
        status: 'draft' 
      }]);

    if (error) throw error;

    return NextResponse.json({ success: true, platform, message: `Generated draft for ${platform}` });

  } catch (error) {
    console.error("Auto-Pilot Cron Error:", error);
    return NextResponse.json({ error: "Failed to run auto-pilot" }, { status: 500 });
  }
}