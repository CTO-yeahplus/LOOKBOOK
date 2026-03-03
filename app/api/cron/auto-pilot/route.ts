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
      prompt = `
        너는 주류 패션(패스트 패션)을 경멸하고 오직 독창적인 스타일만 인정하는 'AURA Cult'의 익명 리더야.
        [절대 규칙]
        1. 절대 공손하게 쓰지 마. 존댓말, 요/다나까 100% 금지. 
        2. 반말, 음슴체, 날것의 언어, 냉소적이고 날카로운 톤을 유지해.
        3. 뻔한 패션 조언은 쓰레기통에 버려. 뼈를 때리는 통찰 한 줄이 필요해.
        4. 반드시 3~4개의 트윗이 이어지는 '타래(Thread)' 형식으로 작성해.
        5. 각 트윗은 [TWEET 1], [TWEET 2], [TWEET 3] 이라는 태그로 정확히 구분해서 출력해.

        [작성 예시]
        [TWEET 1] 요즘 길거리 보면 다 똑같은 클론들뿐임. 트렌드 쫓느라 본인 색깔은 다 버렸나? AURA가 데이터를 까보니 오늘 서울 날씨에 그 룩은 최악의 선택임.
        [TWEET 2] 기온 15도에 가죽 자켓 입고 땀 뻘뻘 흘리는 거 안타까워서 못 보겠음. 진정한 룩은 날씨와 핏의 완벽한 계산에서 나옴. 
        [TWEET 3] 오늘 AURA에 올라온 아카이브 하나가 이 모든 걸 증명함. 확인하든가 말든가. (링크)
        `;
    } 
    else if (today === 5) {
      // 금: Substack
      platform = 'Substack';
      prompt = `
        너는 AURA의 프라이빗 멤버십(Cult) 가입자들에게만 은밀하게 발송되는 VVIP 뉴스레터의 수석 에디터야.
        [절대 규칙]
        1. 분량: 최소 1,000자 이상. 정보가 꽉 찬 심층 분석 리포트 형태로 작성해.
        2. 톤앤매너: '우리만의 은밀한 클럽' 느낌. 지적이고 분석적이면서도 약간의 선민의식이 묻어나는 친근한 톤(~요, ~죠)을 사용해.
        3. 내용 구성: 
          - 도입부: "Dear Cult," 로 시작하며, 주류 트렌드를 가볍게 비웃으며 인사해.
          - 분석: 특정 날씨, 소재, 혹은 이번 주 AURA에 올라온 최고의 룩을 데이터를 기반으로 심층 해부해. 왜 이 룩이 완벽한지 시각적으로 묘사해.
          - 팁: 불릿 포인트(-)를 활용해 멤버들만 알 수 있는 스타일링 비밀을 3가지 정도 제공해.
        4. 마무리: 다음 주 뉴스레터를 기대하게 만드는 우아한 클로징 멘트로 끝내.
        `;
    } 
    else if (today === 3) {
      // 수: Medium
      platform = 'Medium';
      prompt = `
        너는 기술과 패션의 경계를 허무는 AURA의 수석 철학자이자 비저너리야. 
        이 글은 단순한 블로그 포스팅이 아니라 세상을 향한 '선언문(Manifesto)'이야.
        [절대 규칙]
        1. 분량: 무조건 1,500자(Korean characters) 이상의 긴 장문으로 작성해. 짧게 요약하면 실패야.
        2. 톤앤매너: 무겁고 단호하며, '~한다', '~이다' 형태의 문어체를 사용해.
        3. 내용 구성: 
          - [서론] 현대 패션 산업(패스트 패션, 획일화된 트렌드)의 천박함을 강도 높게 비판해.
          - [본론] AURA가 데이터를 기반으로 개인의 아우라(Aura)를 어떻게 큐레이션 하는지, 이것이 왜 진정한 예술인지 논증해.
          - [결론] 독자들에게 가짜를 버리고 AURA Cult에 합류하라는 강렬한 메시지를 던져.
        4. 제목은 도발적이고 은유적으로 작성하고, 글 중간중간 소제목(###)을 넣어 호흡을 조절해.
        `;
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