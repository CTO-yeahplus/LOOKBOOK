"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Tag, ShoppingBag, ExternalLink, Lock } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { supabase } from "../../../lib/supabase"; 

interface Article {
  id: string;
  title: string;
  content: string;
  cover_image_url: string;
  author: string;
  tags: string[];
  created_at: string;
  is_premium?: boolean;
}

const mockShoppableItems = [
  { id: 1, brand: "AURA ARCHIVE", name: "Heavy Weight Oversized Blazer", price: "₩239,000", url: "#" },
  { id: 2, brand: "SEOUL VIBE", name: "Raw Edge Wide Denim", price: "₩129,000", url: "#" }
];

export default function MagazineDetailPage() {
  const t = useTranslations('MagazineDetail');
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [isCultMember, setIsCultMember] = useState(false);

  useEffect(() => {
  const checkCultStatus = async () => {
    // 1. 현재 접속한 유저 정보 가져오기 (Supabase Auth 기준)
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user) return; // 비로그인 유저는 무조건 false

    // 2. 이 유저가 'aura_fashion_items' 테이블에 올린 옷 개수 세기
    const { count, error } = await supabase
    .from('aura_fashion_items') // 🌟 실제 사용 중인 테이블 이름
    .select('*', { count: 'exact', head: true })
    .eq('user_id', session.user.id); // 🌟 유저를 식별하는 컬럼 이름 (필요시 수정)

    // 3. 5개 이상 올렸다면 CULT 권한 부여!
    if (!error && count !== null && count >= 5) {
    setIsCultMember(true);
    }
  };

checkCultStatus();
}, []);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      
      const { data, error } = await supabase
        .from('aura_magazine')
        .select('*')
        .eq('slug', slug)
        .single();

      if (data && !error) {
        setArticle(data);
      }
      setIsLoading(false);
    };

    fetchArticle();
  }, [slug]);

  if (isLoading) {
    return <div className="min-h-screen bg-[#050505] flex items-center justify-center"><div className="w-8 h-8 border-t-2 border-red-600 rounded-full animate-spin" /></div>;
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white">
        <h1 className="font-serif italic text-2xl mb-4">{t('article_not_found')}</h1>
        <button onClick={() => router.push('/magazine')} className="border-b border-white pb-1">{t('back_to_index')}</button>
      </div>
    );
  }

  // 🌟 [NEW] 프리미엄 글 접근 거부 뷰 (다국어 적용 완)
  if (article.is_premium && !isCultMember) {
    return (
      <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white px-6 text-center relative overflow-hidden selection:bg-red-600">
        <div className="absolute inset-0 opacity-20 filter blur-2xl scale-110 pointer-events-none">
          <img src={article.cover_image_url} alt="blur bg" className="w-full h-full object-cover" />
        </div>
        
        <Lock className="w-16 h-16 text-red-600 mb-6 relative z-10 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-serif italic font-black uppercase tracking-tighter mb-4 relative z-10">
          Cult Only<span className="text-red-600">.</span>
        </h1>
        
        <div className="relative z-10 font-mono text-xs tracking-widest text-white/60 max-w-md leading-relaxed mb-10 border border-white/10 bg-black/50 backdrop-blur-md p-6">
          <p className="mb-4 text-white">{t('cult_only_msg')}</p>
          <p className="opacity-70">{t('cult_only_desc_1')}<br/>{t('cult_only_desc_2')}</p>
        </div>

        <div className="flex flex-col gap-4 relative z-10 w-full max-w-xs">
          <button onClick={() => router.push('/')} className="w-full bg-red-600 text-white px-8 py-4 font-black text-[10px] tracking-[0.2em] uppercase active:scale-95 transition-transform hover:bg-red-700 shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
            {t('go_to_upload')}
          </button>
          <button onClick={() => router.push('/magazine')} className="w-full text-[10px] font-mono tracking-widest uppercase text-white/40 border-b border-white/10 pb-2 hover:text-white transition-colors mt-2">
            {t('go_back')}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white">
      
      {/* 🌟 1. 헤더 (뒤로가기 & Aura. 마침표 디테일) */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 flex justify-between items-center">
        <button onClick={() => router.push('/magazine')} className="flex items-center gap-2 group hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
          <span className="font-mono text-[10px] tracking-widest uppercase">{t('back_to_index')}</span>
        </button>
        <h1 className="text-xl font-serif italic font-black uppercase tracking-tighter">
          Aura<span className="text-red-600">.</span>
        </h1>
      </header>

      {/* 🌟 2. 히어로 섹션 */}
      <div className="relative w-full h-[70vh] md:h-[85vh]">
        <motion.img 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={article.cover_image_url} 
          alt={article.title} 
          className="w-full h-full object-cover filter contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-16 max-w-5xl mx-auto">
          <div className="flex gap-2 mb-6 flex-wrap">
            {article.tags?.map(tag => (
              <span key={tag} className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase border border-white/20 text-white rounded-sm">
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-7xl font-serif italic font-black tracking-tighter leading-none mb-6 text-white"
          >
            {article.title}
          </motion.h1>
        </div>
      </div>

      {/* 🌟 3. 본문 영역 */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <div className="flex justify-between items-center border-y border-white/10 py-6 mb-16 font-mono text-[10px] tracking-widest uppercase text-white/50">
          <div className="flex flex-col gap-1">
            <span className="text-white">{t('written_by')}</span>
            <span>{article.author}</span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="text-white">{t('published_on')}</span>
            <span>{new Date(article.created_at).toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        <article className="prose prose-invert prose-lg md:prose-xl max-w-none font-serif leading-relaxed text-white/80">
          {article.content.split('\n\n').map((paragraph, index) => (
            <motion.p 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-8"
            >
              {paragraph}
            </motion.p>
          ))}
        </article>
      </div>

      {/* 🌟 4. [BM 종착지] SHOP THE EDITORIAL */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24 border-t border-white/10">
        <div className="flex flex-col items-center mb-16 text-center">
          <ShoppingBag className="w-8 h-8 text-red-600 mb-4" />
          <h2 className="text-3xl md:text-5xl font-serif italic font-black uppercase tracking-tighter mb-4">{t('shop_editorial')}</h2>
          <p className="font-mono text-xs tracking-widest text-white/50">{t('shop_desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockShoppableItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex items-center gap-6 p-4 bg-white/5 border border-white/10 hover:border-white/30 transition-colors group cursor-pointer"
            >
              <div className="w-24 h-32 bg-white/10 overflow-hidden shrink-0 relative">
                <img src={article.cover_image_url} alt="Item" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-mono text-[10px] font-bold text-red-500 tracking-widest mb-1">{item.brand}</span>
                <h3 className="text-lg font-serif italic font-bold mb-2 group-hover:text-white/80">{item.name}</h3>
                <span className="font-mono text-sm tracking-wider text-white/60 mb-4">{item.price}</span>
                <button className="flex items-center gap-2 w-fit bg-white text-black px-4 py-2 font-black text-[10px] tracking-widest uppercase active:scale-95 transition-transform">
                  {t('get_item')} <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* 🌟 5. 푸터 다국어 적용 */}
      <footer className="py-12 border-t border-white/10 text-center font-mono text-[10px] tracking-widest uppercase text-white/30">
        {t('footer')}
      </footer>
    </main>
  );
}