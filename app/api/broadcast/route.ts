// app/api/broadcast/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 관리자 권한
);

webpush.setVapidDetails(
  'mailto:contact@auraootd.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: Request) {
  try {
    const { title, body, url } = await req.json();

    // 🌟 [STEP 1] DB에 로그를 '딱 한 번만' 기록합니다.
    const { error: dbError } = await supabase
      .from('notifications')
      .insert([{ title, body, type: 'system', link_url: url || '/', is_public: true }]);

    if (dbError) console.error('DB Log Error:', dbError);

    // 🌟 [STEP 2] 모든 구독 정보를 가져옵니다.
    const { data: subscriptions } = await supabase
      .from('aura_push_subscriptions')
      .select('subscription');

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ message: "No subscribers found" });
    }

    // 🌟 [STEP 3] 모든 유저에게 병렬로 푸시 발송
    const payload = JSON.stringify({ title, body, url: url || '/' });
    const sendPromises = subscriptions.map((sub) =>
      webpush.sendNotification(sub.subscription, payload).catch(e => console.error("발송 실패:", e))
    );

    await Promise.all(sendPromises);

    return NextResponse.json({ success: true, count: subscriptions.length });
  } catch (error) {
    console.error('Broadcast Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}