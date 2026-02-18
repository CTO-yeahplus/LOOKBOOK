// app/api/cron/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

// 1. 환경변수 검증 및 클라이언트 생성
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Supabase 환경변수가 설정되지 않았습니다.");
}

// 🌟 [핵심] Service Role Key를 사용하여 RLS(보안정책)를 우회하고 기록 권한을 확보합니다.
const supabase = createClient(supabaseUrl, supabaseServiceKey);

webpush.setVapidDetails(
  'mailto:contact@auraootd.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function GET() {
  try {
    const title = "AURA 모닝 브리핑 🌤️";
    const body = "좋은 아침입니다! 오늘 날씨에 어울리는 완벽한 룩이 준비되었습니다.";

    // 🌟 [개선 1] 로그 기록을 '가장 먼저' 수행합니다.
    // (구독자 조회 실패 여부와 상관없이 시스템 가동 기록을 남기기 위함)
    const { data: insertData, error: insertError } = await supabase
      .from('notifications')
      .insert([
        { 
          title, 
          body, 
          type: 'system', 
          link_url: '/home', 
          is_public: true 
        }
      ])
      .select(); // 🌟 [핵심 해결책] .select()를 붙여야 데이터가 확실하게 반환되고 저장됩니다.

    if (insertError) {
      console.error('❌ DB Logging Error:', insertError);
    } else {
      console.log('✅ SYSTEM LOGS 기록 성공:', insertData);
    }

    // 2. 모든 구독 정보 가져오기
    const { data: subscriptions, error: subError } = await supabase
      .from('aura_push_subscriptions')
      .select('id, subscription');

    if (subError || !subscriptions) {
      console.error('구독자 조회 실패:', subError);
      throw subError;
    }

    // 3. 푸시 메시지 설정 및 발송
    const payload = JSON.stringify({ title, body, url: '/home' });

    // [개선 2] 발송 및 만료된(410) 구독 정보 자동 삭제 (자가 치유)
    const sendPromises = subscriptions.map(async (sub) => {
      try {
        await webpush.sendNotification(sub.subscription, payload);
      } catch (e: any) {
        // 410(Gone) 또는 404(Not Found) 에러 시 DB에서 해당 유령 구독자 삭제
        if (e.statusCode === 410 || e.statusCode === 404) {
          console.log(`🗑️ 유효하지 않은 구독 삭제: ID ${sub.id}`);
          await supabase.from('aura_push_subscriptions').delete().eq('id', sub.id);
        } else {
          console.error(`발송 실패 (ID: ${sub.id}):`, e);
        }
      }
    });

    await Promise.all(sendPromises);

    return NextResponse.json({ 
      success: true, 
      logged: !insertError,
      processedCount: subscriptions.length 
    });

  } catch (error) {
    console.error('🔥 Cron Critical Error:', error);
    return NextResponse.json({ error: '시스템 오류' }, { status: 500 });
  }
}