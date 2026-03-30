// app/api/cron/route.ts
export const revalidate = 0; // 캐시 방지

import { NextResponse } from 'next/server';
import apn from '@parse/node-apn';
import { createClient } from '@supabase/supabase-js';

// 🌟 관리자 모드 Supabase (보안 RLS를 뚫고 토큰을 가져와야 함)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// 패션 거장의 어록 리스트
const FASHION_QUOTES = [
  `"단순함은 궁극의 정교함이다." - 질 샌더`,
  `"침묵은 가장 완벽한 핏이다." - 마틴 마르지엘라`,
  `"우아함은 거절의 예술이다." - 코코 샤넬`,
  `"패션은 사라지지만 스타일은 영원하다." - 이브 생 로랑`,
  `"완벽함은 더 이상 보탤 것이 없을 때가 아니라, 빼낼 것이 없을 때 완성된다." - 앙투안 드 생텍쥐페리`
];

// 1. 날씨 API 호출 (아이폰 유저용)
async function getCityWeather(lat: number, lon: number, isEvening: boolean) {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max&timezone=Asia%2FSeoul`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    if (isEvening && data.daily?.temperature_2m_max?.[1]) return Math.round(data.daily.temperature_2m_max[1]);
    return Math.round(data.current_weather.temperature);
  } catch (_e) {
    return 20; // 에러 시 기본 온도
  }
}

export async function GET() {
  try {
    // 🌟 KST 기준 시간 파악
    const kstDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
    const currentHour = kstDate.getHours();
    const currentDay = kstDate.getDay();
    const isEvening = currentHour >= 18; 
    const shouldAddQuote = (currentDay === 2 || currentDay === 4);
    const randomQuote = FASHION_QUOTES[Math.floor(Math.random() * FASHION_QUOTES.length)];

    // 1. 아이폰 토큰 DB 조회 (과거 aura_push_subscriptions 대신 aura_device_tokens 사용)
    const { data: deviceTokens, error: tokenError } = await supabaseAdmin
      .from('aura_device_tokens')
      .select('token, user_id');

    if (tokenError || !deviceTokens || deviceTokens.length === 0) {
      return NextResponse.json({ success: true, message: "발송할 아이폰 유저가 없습니다." });
    }

    // 2. APNs 엔진 초기화
    const apnProvider = new apn.Provider({
      token: {
        key: process.env.APPLE_P8_KEY!.replace(/\\n/g, '\n'),
        keyId: process.env.APPLE_KEY_ID!,
        teamId: process.env.APPLE_TEAM_ID!,
      },
      production: false // 🌟 TestFlight/실기기 테스트 시점엔 false, 앱스토어 정식 출시 시 true
    });

    // 3. 알림 발송 루프
    const sendResults = await Promise.all(deviceTokens.map(async (device) => {
      // (간소화를 위해 서울 기준으로 예시 작성, 필요시 유저별 위치 연동 가능)
      const temp = await getCityWeather(37.5665, 126.9780, isEvening);
      
      const note = new apn.Notification();
      note.expiry = Math.floor(Date.now() / 1000) + 3600;
      note.badge = 1;
      note.sound = "ping.aiff";
      note.topic = process.env.APPLE_BUNDLE_ID!;
      
      // 🌟 [수정 부위] note.title 대신 객체 형태의 note.alert를 사용합니다.
      const displayTitle = isEvening ? "내일 뭐 입지? 🌙" : "AURA 모닝 브리핑 🌤️";
      let bodyText = isEvening 
        ? `내일 서울 최고 ${temp}°C 예상. 미리 준비하는 완벽한 룩.` 
        : `현재 서울 ${temp}°C. 이 날씨엔 이런 스타일이 딱이죠!`;
      
      if (shouldAddQuote) bodyText += `\n\n${randomQuote}`;

      // 🌟 핵심: 제목(title)과 본문(body)을 이렇게 묶어줘야 빨간 줄이 사라집니다.
      note.alert = {
        title: displayTitle,
        body: bodyText
      };

      note.payload = { url: '/home' };

      return apnProvider.send(note, device.token);
    }));

    apnProvider.shutdown();

    // 4. 오래된 알림 로그 청소
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    await supabaseAdmin.from('notifications').delete().lt('created_at', sevenDaysAgo);

    return NextResponse.json({ success: true, sentCount: sendResults.length });

  } catch (error) {
    console.error("Cron Error:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}