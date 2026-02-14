// app/api/push/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

// 🌟 1. Supabase 관리자 권한 연결
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 🌟 2. VAPID 키 세팅 (이메일은 본인 이메일 아무거나 적으시면 됩니다)
webpush.setVapidDetails(
  'mailto:aura-admin@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: Request) {
  try {
    const { userId, title, body } = await req.json();

    // 1. Supabase 명부에서 해당 유저의 스마트폰 주소(Subscription) 찾기
    const { data, error } = await supabase
      .from('aura_push_subscriptions')
      .select('subscription')
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: '구독 정보를 찾을 수 없습니다.' }, { status: 404 });
    }

    // 2. 구글/애플 서버를 향해 푸시 알림 발사! 🚀
    await webpush.sendNotification(
      data.subscription,
      JSON.stringify({ title, body, url: '/' })
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Push Error:', error);
    return NextResponse.json({ error: '푸시 발송 실패' }, { status: 500 });
  }
}