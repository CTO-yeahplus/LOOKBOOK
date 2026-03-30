// app/api/broadcast/route.ts
import { NextResponse } from 'next/server';
import apn from '@parse/node-apn';
import { createClient } from '@supabase/supabase-js';

// 🌟 관리자 모드 Supabase (RLS 무시하고 모든 기기 토큰 조회용)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { title, body, url } = await req.json();

    // 🌟 [STEP 1] 알림 로그 기록 (유저들이 나중에 앱 내 알림함에서 볼 수 있도록)
    const { error: dbError } = await supabaseAdmin
      .from('notifications')
      .insert([{ 
        title, 
        body, 
        type: 'system', 
        link_url: url || '/home', 
        is_public: true 
      }]);

    if (dbError) console.error('🚨 DB 로그 기록 실패:', dbError);

    // 🌟 [STEP 2] 모든 아이폰 기기 토큰 가져오기
    const { data: deviceTokens, error: tokenError } = await supabaseAdmin
      .from('aura_device_tokens')
      .select('token')
      .eq('platform', 'ios');

    if (tokenError || !deviceTokens || deviceTokens.length === 0) {
      return NextResponse.json({ success: false, message: "발송할 아이폰 유저가 없습니다." });
    }

    // 🌟 [STEP 3] APNs 엔진 설정
    const apnProvider = new apn.Provider({
      token: {
        key: process.env.APPLE_P8_KEY!.replace(/\\n/g, '\n'),
        keyId: process.env.APPLE_KEY_ID!,
        teamId: process.env.APPLE_TEAM_ID!,
      },
      production: false // 🛠️ TestFlight 기간에는 false, 정식 출시 후 true로 변경
    });

    // 🌟 [STEP 4] 알림 내용 구성
    let note = new apn.Notification();
    note.expiry = Math.floor(Date.now() / 1000) + 3600; // 1시간 동안 유효
    note.badge = 1;
    note.sound = "ping.aiff";
    note.topic = process.env.APPLE_BUNDLE_ID!;

    // TypeScript 에러 방지를 위한 객체 할당
    note.alert = {
      title: title || "AURA 공지",
      body: body || "새로운 소식이 도착했습니다."
    };

    note.payload = { url: url || '/home' };

    // 🌟 [STEP 5] 병렬 발송 시작
    const tokens = deviceTokens.map(d => d.token);
    const result = await apnProvider.send(note, tokens);

    // 엔진 종료
    apnProvider.shutdown();

    return NextResponse.json({ 
      success: true, 
      sentCount: result.sent.length, 
      failedCount: result.failed.length 
    });

  } catch (error) {
    console.error('🔥 Broadcast Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}