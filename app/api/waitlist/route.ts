// app/api/waitlist/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { instagram, email } = await req.json();

    if (!instagram || !email) {
      return NextResponse.json({ error: '정보가 누락되었습니다.' }, { status: 400 });
    }

    // 🌟 1단계에서 세운 DB 철벽이 있으므로 바로 Insert를 때립니다.
    const { error } = await supabase
      .from('aura_waitlist')
      .insert([{ 
        instagram_id: instagram, 
        email: email,
        status: 'pending' // 🌟 누락되었던 상태값 강제 주입!
      }]);

    // 🌟 에러 코드가 '23505' (Unique violation) 이면 중복 가입 에러로 판단하고 유저에게 알립니다.
    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: '이미 심사 대기 중이거나 승인된 계정/이메일입니다.' }, { status: 409 });
      }
      throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist Error:', error);
    return NextResponse.json({ error: '신청 중 오류가 발생했습니다. (이미 등록된 계정일 수 있습니다.)' }, { status: 500 });
  }
}