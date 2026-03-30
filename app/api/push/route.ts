// app/api/test-push/route.ts
import { NextResponse } from 'next/server';
import apn from '@parse/node-apn';
import { createClient } from '@supabase/supabase-js';

// =========================================================
// 🌟 [핵심 수술] RLS 보안을 뚫고 지나가는 관리자(God Mode) 클라이언트 생성
// =========================================================
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 일반 ANON 키가 아닌 서비스 롤 키 사용!
);

export async function GET() {
  try {
    // 1. 관리자 권한으로 아이폰 토큰 싹쓸이 조회
    const { data: tokens, error } = await supabaseAdmin
      .from('aura_device_tokens')
      .select('token')
      .eq('platform', 'ios');

    if (error || !tokens || tokens.length === 0) {
      console.error("DB 조회 에러 또는 토큰 없음:", error);
      return NextResponse.json({ success: false, message: 'DB에 저장된 토큰이 없습니다.' });
    }

    // 2. 애플 APNs 통신 엔진 세팅
    const options = {
      token: {
        key: process.env.APPLE_P8_KEY!.replace(/\\n/g, '\n'), 
        keyId: process.env.APPLE_KEY_ID!,
        teamId: process.env.APPLE_TEAM_ID!
      },
      production: false // 엑스코드 테스트 중이므로 sandbox 모드
    };
    
    const apnProvider = new apn.Provider(options);

    // 3. 발송할 알림 내용
    let note = new apn.Notification();
    note.expiry = Math.floor(Date.now() / 1000) + 3600;
    note.badge = 1;
    note.sound = "ping.aiff";
    note.alert = "AURA 시스템: 첫 번째 네이티브 푸시 알림 발사 성공! 🚀";
    note.payload = { 'custom_link': '/home' };
    note.topic = process.env.APPLE_BUNDLE_ID!;

    // 4. 장전된 모든 토큰으로 발사!
    const deviceTokens = tokens.map(t => t.token);
    const result = await apnProvider.send(note, deviceTokens);

    apnProvider.shutdown();

    return NextResponse.json({ 
      success: true, 
      sent: result.sent.length, 
      failed: result.failed.length,
      details: result
    });

  } catch (error) {
    console.error('🔥 Push Error:', error);
    return NextResponse.json({ error: '시스템 오류' }, { status: 500 });
  }
}