import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js'; 

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

//export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('aura_fashion_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // 🌟 프론트엔드가 절대 뻗지 않도록 데이터 안전망(Fallback) 씌우기
    const formattedData = (data || []).map(item => ({
        id: item.id,
        imageUrl: item.image_url || '',
        weather: item.weather || '☀️',
        temperature: item.temperature || '20°C',
        tags: Array.isArray(item.tags) ? item.tags : [],
        colors: Array.isArray(item.colors) ? item.colors : ["#E5E0D8", "#2C2C2C", "#8A7B6E"],
        curatorNote: item.curator_note, // 🌟 이 줄 추가!
        uploaderName: item.uploader_name || 'AURA Editor', // 🌟 DB에서 가져온 이름표 세팅 
        uploaderIg: item.uploader_ig, // 🌟 
        likes: item.likes_count || 0, // 🌟
      }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Supabase Error:", error);
    return NextResponse.json([]); // 최악의 경우에도 앱은 켜지도록 방어
  }
}