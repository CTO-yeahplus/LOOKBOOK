"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Lock } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { supabase } from "../../lib/supabase"; 

interface MagazineArticle {
  id: string;
  slug: string;
  title: string;
  cover_image_url: string;
  author: string;
  tags: string[];
  created_at: string;
  is_premium?: boolean;
}

export default function MagazineIndex() {
  const t = useTranslations('Magazine'); 
  const locale = useLocale(); 
  
  const [articles, setArticles] = useState<MagazineArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from('aura_magazine')
        .select('*')
        .eq('is_published', true)
        .eq('locale', locale) 
        .order('created_at', { ascending: false });

      if (!error && data) {
        setArticles(data);
      }
      setIsLoading(false);
    };

    fetchArticles();
  }, [locale]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* 🌟 매거진 헤더 */}
    <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center">
    <Link href="/home" className="text-2xl font-serif italic font-black uppercase tracking-tighter hover:opacity-70 transition-opacity">
        Aura<span className="text-red-600">.</span>
    </Link>
    <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
        {t('editorial_issue')}
    </span>
    </header>

      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* 🌟 메인 타이틀 구역 */}
        <div className="mb-20">
          <h2 className="text-[12vw] md:text-[8rem] font-serif italic font-black leading-none tracking-tighter uppercase text-white/90">
            The <br/> <span className="text-red-600">Curator</span>
          </h2>
          <p className="font-mono text-sm md:text-base mt-6 tracking-widest text-white/50 max-w-md uppercase">
            {/* 🌟 다국어 사전 연결 완료 */}
            {t('description')}
          </p>
        </div>

        {/* 🌟 기사가 없을 때의 화면 */}
        {articles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 border-t border-white/10">
            <BookOpen className="w-12 h-12 text-white/20 mb-4" />
            <p className="font-mono text-sm tracking-widest text-white/40 uppercase">{t('empty_state')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {articles.map((article, index) => (
              <Link href={`/magazine/${article.slug}`} key={article.id}>
                <motion.article 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`group cursor-pointer flex flex-col ${index % 2 === 1 ? 'md:mt-32' : ''}`}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-white/5">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={article.cover_image_url || 'https://via.placeholder.com/600x800'} 
                      alt={article.title}
                      className="w-full h-full object-cover filter grayscale-[0.2] contrast-125 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {article.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-mono tracking-widest uppercase border border-white/10 text-white">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* 🌟 [아키텍트 수정] 뱃지가 이미지 밖으로 탈출하지 않도록 relative 안으로 집어넣었습니다. */}
                    {article.is_premium && (
                        <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-black tracking-widest uppercase text-white flex items-center gap-1 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        <Lock className="w-3 h-3" /> CULT ONLY
                        </div>
                    )}
                  </div>
                  
                  <div className="mt-6 flex justify-between items-start">
                    <div className="flex-1 pr-8">
                      <p className="font-mono text-[10px] tracking-widest text-white/40 mb-3 uppercase">
                        {new Date(article.created_at).toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-serif italic font-bold tracking-tight leading-snug group-hover:text-white/70 transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}