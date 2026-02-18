// app/api/push/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

// 🌟 [변경] 서버 사이드에서는 SERVICE_ROLE_KEY를 사용하여 RLS를 우회합니다.
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 'ANON' 대신 'SERVICE_ROLE' 사용
);

webpush.setVapidDetails(
  'mailto:contact@auraootd.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: Request) {
  try {
    const { userId, title, body, url } = await req.json();

    // --- [STEP 1: DB 기록 저장 강화] ---
    console.log(`[DB Logging] Attempting to save notification: ${title}`);
    
    const { data: dbData, error: dbError } = await supabase
      .from('notifications')
      .insert([
        { 
          title: title, 
          body: body, 
          type: 'system', 
          link_url: url || '/', 
          is_public: true 
        }
      ])
      .select(); // 🌟 저장된 데이터를 다시 불러와서 확인

    if (dbError) {
      // 🔴 에러 상세 분석 (필드명 불일치 등 확인)
      console.error('❌ DB Insert Error Detail:', {
        message: dbError.message,
        details: dbError.details,
        hint: dbError.hint
      });
    } else {
      console.log('✅ DB Insert Success:', dbData);
    }

    // --- [STEP 2: 푸시 발송] ---
    const { data: subData, error: subError } = await supabase
      .from('aura_push_subscriptions')
      .select('subscription')
      .eq('user_id', userId)
      .single();

    if (subError || !subData) {
      return NextResponse.json({ error: '구독 정보 없음' }, { status: 404 });
    }

    await webpush.sendNotification(
      subData.subscription,
      JSON.stringify({ title, body, url: url || '/' })
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('🔥 Final Catch Error:', error);
    return NextResponse.json({ error: '발송 실패' }, { status: 500 });
  }
}