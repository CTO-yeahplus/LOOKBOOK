// app/api/waitlist/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { instagram, email } = await req.json();

    if (!instagram || !email) {
      return NextResponse.json({ error: '정보가 누락되었습니다.' }, { status: 400 });
    }

    // DB에 신청 정보 저장
    const { error } = await supabase
      .from('aura_waitlist')
      .insert([{ instagram_id: instagram, email }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist Error:', error);
    return NextResponse.json({ error: '신청 중 오류가 발생했습니다.' }, { status: 500 });
  }
}