// app/api/admin/approve/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// 🌟 [핵심 해결책] 일반 유저용(Anon) 키가 아닌, 시스템 최상위 권한(Service Role) 키를 사용해 관리자 전용 클라이언트를 만듭니다.
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 이 키는 RLS 보안 정책을 모두 무시하는 God Mode 키입니다.
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { waitlistId, email, instagram } = await req.json();

    // 1. 고유 초대 코드 생성 (AURA-XXXXXX 포맷)
    const uniqueCode = `AURA-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // 2. DB에 초대 코드 등록 (🌟 supabase 사용)
    const { error: codeError } = await supabase
      .from('invite_codes')
      .insert([{ code: uniqueCode, max_uses: 1 }]);
      
    if (codeError) {
      console.error("🚨 DB Invite Code Insert Error:", codeError);
      throw new Error(`초대 코드 생성 실패: ${codeError.message}`);
    }

    // 3. 대기자 명단 상태를 'approved'로 변경 (🌟 supabase 사용)
    const { error: updateError } = await supabase
      .from('aura_waitlist')
      .update({ status: 'approved' })
      .eq('id', waitlistId);
      
    if (updateError) {
      console.error("🚨 DB Waitlist Update Error:", updateError);
      throw new Error(`대기자 상태 업데이트 실패: ${updateError.message}`);
    }

    // 4. 💌 힙스터 감성의 다크모드 이메일 발송
    const { error: emailError } = await resend.emails.send({
      from: 'AURA CEO <ceo@auraootd.com>', 
      to: email,
      subject: '[AURA] Vibe Audit Passed. Access Granted.',
      html: `
        <div style="background-color: #050505; color: #ffffff; padding: 40px; font-family: Helvetica, Arial, sans-serif; text-align: center;">
          <h1 style="font-size: 40px; font-style: italic; color: #ffffff; margin-bottom: 10px;">Aura<span style="color: #ff3b30;">.</span></h1>
          <p style="font-family: monospace; color: #ff3b30; letter-spacing: 4px; font-size: 12px; margin-bottom: 40px;">VIBE AUDIT: PASSED</p>
          
          <p style="font-size: 16px; color: #aaaaaa; line-height: 1.6; margin-bottom: 30px;">
            축하합니다, @${instagram.replace('@', '')} 님.<br/>
            AURA 크리에이티브 팀의 심사 결과, 당신의 감도가 기준을 충족하여<br/>
            <strong>Founding Originator (초기 1,000인)</strong>으로 선정되었습니다.
          </p>
          
          <div style="background-color: #111111; border: 1px solid #333333; padding: 30px; border-radius: 10px; margin-bottom: 40px;">
            <p style="font-family: monospace; color: #666666; font-size: 10px; text-transform: uppercase; margin: 0 0 10px 0;">Your Exclusive Access Code</p>
            <p style="font-family: monospace; font-size: 28px; font-weight: bold; color: #ff3b30; margin: 0; letter-spacing: 2px;">
              ${uniqueCode}
            </p>
          </div>
          
          <a href="https://auraootd.com" style="background-color: #ffffff; color: #000000; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 30px; font-size: 14px;">ENTER THE SYSTEM</a>
          
          <p style="margin-top: 50px; font-family: monospace; font-size: 10px; color: #444444; letter-spacing: 2px;">
            이 코드는 1회만 사용 가능하며, 타인에게 양도할 수 없습니다.<br/>
            © 2026 AURA Inc.
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error('🚨 Resend Email Error:', emailError);
      throw new Error(`이메일 발송 실패: ${emailError.message}`);
    }

    return NextResponse.json({ success: true, code: uniqueCode });
    
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('🚨 Fatal Approve Error:', error);
    // 💡 에러의 정확한 이유를 터미널과 네트워크 창에 던져줍니다.
    return NextResponse.json({ error: error.message || '승인 처리 중 오류 발생' }, { status: 500 });
  }
}