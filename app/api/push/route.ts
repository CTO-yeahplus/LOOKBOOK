// app/api/cron/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js'; // 🌟 createClient 직접 가져오기

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 👈 이게 핵심입니다! (RLS 우회)
);

webpush.setVapidDetails(
  'mailto:contact@auraootd.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function GET() {
  try {
    // 1. 모든 구독 정보 가져오기
    const { data: subscriptions, error } = await supabase
      .from('aura_push_subscriptions')
      .select('id, subscription');

    if (error || !subscriptions) throw error;

    const title = "AURA 모닝 브리핑 🌤️";
    const body = "좋은 아침입니다! 오늘 날씨에 어울리는 완벽한 룩이 준비되었습니다.";

    // 🌟 [해결책 1] 푸시 발송 전, SYSTEM LOGS에 기록을 먼저 남깁니다.
    // 루프 밖에서 한 번만 호출하므로 중복 저장이 방지됩니다.
    const { error: dbError } = await supabase
      .from('notifications')
      .insert([{ 
        title, 
        body, 
        type: 'system', 
        link_url: '/', 
        is_public: true 
      }]);

    if (dbError) console.error('❌ DB Logging Error:', dbError);
    else console.log('✅ SYSTEM LOGS 기록 성공');

    // 2. 푸시 메시지 설정
    const payload = JSON.stringify({ title, body, url: '/' });

    // 🌟 [해결책 2] 발송 및 만료된(410) 구독 정보 자동 삭제 (자가 치유)
    const sendPromises = subscriptions.map(async (sub) => {
      try {
        await webpush.sendNotification(sub.subscription, payload);
      } catch (e: unknown) {
        const pushError = e as { statusCode?: number }; // 에러의 형태를 임시로 지정
        // 410(Gone) 또는 404(Not Found) 에러 시 DB에서 해당 유령 구독자 삭제
        if (pushError.statusCode === 410 || pushError.statusCode === 404) {
          console.log(`🗑️ 유효하지 않은 구독 삭제: ID ${sub.id}`);
          await supabase.from('aura_push_subscriptions').delete().eq('id', sub.id);
        } else {
          console.error("발송 실패:", e);
        }
      }
    });

    await Promise.all(sendPromises);

    return NextResponse.json({ 
      success: true, 
      logged: !dbError,
      processedCount: subscriptions.length 
    });

  } catch (error) {
    console.error('🔥 Cron Critical Error:', error);
    return NextResponse.json({ error: '시스템 오류' }, { status: 500 });
  }
}