// app/[username]/page.tsx
import { createClient } from '@supabase/supabase-js';
import { Metadata } from 'next';
import { Heart, Grid3X3, ArrowDownRight, Sparkles } from 'lucide-react';

// Supabase 서버 사이드 연결
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Props {
  params: { username: string };
}

// 🌟 [핵심] 인스타/카톡 공유 시 썸네일과 제목을 만들어주는 SEO 메타데이터 엔진
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const handle = decodeURIComponent(params.username).replace('@', '');
  return {
    title: `${handle.toUpperCase()} | AURA ARCHIVE`,
    description: `Explore the editorial fashion archive curated by @${handle}.`,
    openGraph: {
      title: `${handle}'s Editorial Archive`,
      description: `Uncover the vibe. Curated by @${handle}.`,
      images: ['/default-aura-cover.png'], // 기본 커버 이미지 (public 폴더에 예쁜 로고 하나 넣어주세요!)
    },
  };
}

export default async function ProfileShowcasePage({ params }: Props) {
  // 1. URL에서 아이디 추출 (예: /@gdragon -> gdragon)
  const handle = decodeURIComponent(params.username).replace('@', '');

  // 2. Supabase에서 해당 유저(uploader_ig)의 데이터만 최신순으로 가져오기
  const { data: looks, error } = await supabase
    .from('aura_fashion_items')
    .select('*')
    .ilike('uploader_ig', handle) // 대소문자 무시하고 매칭
    .order('created_at', { ascending: false });

  if (error || !looks || looks.length === 0) {
    return (
      <div className="min-h-screen bg-[#EBE6DD] flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-serif italic font-black text-black">NO ARCHIVE FOUND.</h1>
        <p className="font-mono text-sm opacity-50 mt-2">존재하지 않거나 아직 옷장이 비어있는 큐레이터입니다.</p>
      </div>
    );
  }

  // 총 누적 아우라(좋아요) 계산
  const totalAura = looks.reduce((sum, item) => sum + (item.likes_count || 0), 0);
  const uploaderName = looks[0].uploader_name || handle;

  return (
    <div className="min-h-screen bg-[#EBE6DD] text-black overflow-x-hidden selection:bg-red-600 selection:text-[#EBE6DD]">
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] fixed" />

      {/* ================= [HEADER: 매거진 타이틀] ================= */}
      <header className="relative pt-24 pb-12 px-6 md:px-12 border-b-[10px] border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6 font-mono text-[10px] font-bold uppercase tracking-widest bg-black text-[#EBE6DD] inline-block px-3 py-1.5 transform -rotate-2 shadow-[4px_4px_0px_rgba(220,38,38,1)]">
            <Sparkles className="w-3 h-3 inline mr-1 text-red-500" /> CURATOR PASS
          </div>
          
          <h1 className="text-7xl md:text-[9rem] font-serif italic font-black uppercase leading-[0.85] tracking-tighter mix-blend-hard-light break-words">
            {uploaderName}
            <span className="text-red-600">.</span>
          </h1>
          
          <div className="mt-8 flex flex-wrap gap-6 items-end justify-between">
            <div className="font-mono text-sm tracking-[0.2em] uppercase font-bold text-black/60">
              ID: @{handle}
            </div>
            <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <Heart className="w-4 h-4 fill-current" />
              <span className="font-black text-lg">{totalAura} AURA IMPACT</span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= [MAIN: 아카이브 갤러리 (Masonry/Grid)] ================= */}
      <main className="max-w-6xl mx-auto py-12 px-4 md:px-12 relative z-10">
        <div className="flex items-center gap-2 mb-8 border-b-2 border-black/10 pb-4">
          <Grid3X3 className="w-5 h-5 text-red-600" />
          <h2 className="font-mono font-bold uppercase tracking-widest text-sm">Editorial Archive ({looks.length})</h2>
        </div>

        {/* 하이엔드 룩북 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {looks.map((look: any, index: number) => (
            <div key={look.id} className="group relative">
              <div className="absolute -inset-2 bg-red-600 transform rotate-2 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
              
              <div className="relative z-10 bg-[#F4F0EA] border-[4px] border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">
                {/* 상단 라벨 */}
                <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm px-2 py-1 border border-black font-mono text-[10px] font-bold uppercase mix-blend-hard-light">
                  NO.{String(looks.length - index).padStart(3, '0')}
                </div>
                
                {/* 이미지 */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                  <img 
                    src={look.image_url} 
                    alt="Look" 
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* 하단 정보 (메타데이터) */}
                <div className="p-4 bg-white border-t-[4px] border-black">
                  <div className="flex justify-between items-start mb-4">
                    <p className="font-serif italic font-black text-2xl truncate">
                      {look.weather} VIBE
                    </p>
                    <div className="flex gap-1">
                      {(look.colors || []).slice(0, 3).map((color: string, i: number) => (
                        <div key={i} className="w-4 h-4 rounded-full border border-black" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {(look.tags || []).slice(0, 3).map((tag: string, i: number) => (
                      <span key={i} className="text-[9px] font-mono bg-black text-white px-1.5 py-0.5 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="py-12 text-center border-t-[10px] border-black mt-20 bg-black text-[#EBE6DD]">
        <h2 className="text-4xl font-serif italic font-black tracking-tighter uppercase mb-4">Create Your Own.</h2>
        <a href="/" className="inline-flex items-center gap-2 bg-red-600 text-white font-mono font-bold text-sm px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black">
          Join AURA <ArrowDownRight className="w-4 h-4" />
        </a>
      </footer>
    </div>
  );
}