// app/api/cron/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

webpush.setVapidDetails(
  'mailto:aura-admin@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function GET(req: Request) {
  try {
    // 1. Supabase 명부에서 알림을 허락한 '모든 유저'의 주소 가져오기
    const { data: subscriptions, error } = await supabase
      .from('aura_push_subscriptions')
      .select('subscription');

    if (error || !subscriptions) throw error;

    // 2. 아침에 보낼 메시지 작성 (추후 날씨 API를 붙이면 더 완벽해집니다)
    const payload = JSON.stringify({
      title: "AURA 모닝 브리핑 🌤️",
      body: "좋은 아침입니다! 오늘 날씨에 어울리는 완벽한 룩이 준비되었습니다.",
      url: '/'
    });

    // 3. 모든 유저에게 동시다발적으로 알림 쏘기 (Promise.all로 빛의 속도로 처리)
    const sendPromises = subscriptions.map((sub) =>
      webpush.sendNotification(sub.subscription, payload).catch((e) => console.error("발송 실패:", e))
    );

    await Promise.all(sendPromises);

    return NextResponse.json({ success: true, sentCount: subscriptions.length });
  } catch (error) {
    console.error('Cron Error:', error);
    return NextResponse.json({ error: '크론 발송 실패' }, { status: 500 });
  }
}