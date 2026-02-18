"use client";

import { Crown, CreditCard, Mail, BookOpen, Lock } from "lucide-react"; // 🌟 Lock 추가
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl"; 
import LegalModal from "./components/LegalModal"; 

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function LandingPage() {
  const t = useTranslations('Landing');
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false); // 🌟 모달 상태

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const textX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // 🌟 목업 슬라이드쇼 상태 관리
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  // 🌟 앱 스크린샷 리스트 (나중에 실제 앱 캡쳐 화면으로 교체하세요!)
  const appScreens = [
    "/images/aura_brand_03.png",
    "/images/aura_brand_01.png", 
    "/images/aura_brand_02.png",
    "/images/aura_brand_04.png",
    "/images/aura_brand_05.png", 
    "/images/aura_brand_06.png", 
    "/images/aura_brand_07.png", 
    "/images/aura_brand_08.png", 
  ];
  // 🌟 [NEW] 웨이팅 리스트 상태 관리
  const [igHandle, setIgHandle] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 🌟 [NEW] 제출 함수
  const handleWaitlistSubmit = async () => {
    if (!igHandle || !email) return alert("인스타그램 ID와 이메일을 모두 입력해주세요.");
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ instagram: igHandle, email })
      });
      if (res.ok) setIsSubmitted(true);
      else alert("오류가 발생했습니다. 다시 시도해주세요.");
    } catch {
      alert("네트워크 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🌟 [NEW] 3초마다 자동으로 화면 전환 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenIndex((prevIndex) => (prevIndex + 1) % appScreens.length);
    }, 3000); // 3000ms = 3초

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050505] text-[#f5f5f7] overflow-x-hidden selection:bg-[#ff3b30] selection:text-white font-sans">
      
      {/* 🌑 Global Visual FX */}
      <div className="fixed inset-0 z-[999] pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <motion.div 
        className="fixed w-[600px] h-[600px] bg-[#ff3b30]/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen"
        animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
      />

      {/* 🌟 1. Hero Section (유지) */}
      <section className="relative h-[110vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505] z-10" />
          <img src="/images/aura_brand.png" className="w-full h-full object-cover opacity-60" alt="Aura Brand Lifestyle" />
        </motion.div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-20">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="mb-6 inline-block border border-[#ff3b30] px-4 py-1 rounded-full">
            <span className="text-[#ff3b30] text-[10px] font-black tracking-[0.5em] uppercase">{t('hero_badge')}</span>
          </motion.div>
          <h1 className="text-[12vw] md:text-[10rem] font-serif italic font-black tracking-tighter mb-8 leading-[0.75] uppercase mix-blend-difference">
            Aura<span className="text-[#ff3b30]">.</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/60 mb-12 max-w-2xl mx-auto font-light tracking-tight italic">
          {t('hero_quote_1')} <span className="text-white border-b border-white/30">{t('hero_quote_highlight')}</span>{t('hero_quote_2')}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/home" className="group relative overflow-hidden bg-[#ff3b30] text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,59,48,0.4)]">
              <span className="relative z-10">{t('hero_btn')}</span>
              <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <style jsx>{`.group:hover span { color: black; }`}</style>
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap opacity-20">
          <motion.div style={{ x: textX }} className="text-[10vh] font-black tracking-tighter uppercase inline-block">
          {t('hero_ticker').repeat(3)}
          </motion.div>
        </div>
      </section>

      {/* 🌟 2. Feature Section (유지) */}
      <section className="py-60 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-40 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-none uppercase">
            {t('engine_title_1')}<br/>{t('engine_title_2')}
            </h2>
            <div className="space-y-20">
              <div className="group cursor-default">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-[#ff3b30] group-hover:w-24 transition-all" />
                  <span className="text-[#ff3b30] font-mono text-sm uppercase tracking-widest">{t('engine_01_badge')}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{t('engine_01_title')}</h3>
                <p className="text-white/40 text-lg leading-relaxed">
                  {t('engine_01_desc')}
                </p>
              </div>
              <div className="group cursor-default">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-[#ff3b30] group-hover:w-24 transition-all" />
                  <span className="text-[#ff3b30] font-mono text-sm uppercase tracking-widest">{t('engine_02_badge')}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{t('engine_02_title')}</h3>
                <p className="text-white/40 text-lg leading-relaxed">
                  {t('engine_02_desc')}
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* 🌟 수정된 목업 슬라이드쇼 영역 */}
          <div className="relative">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }} className="relative z-10 bg-gradient-to-tr from-[#111] to-[#222] p-2 rounded-[4rem] border border-white/10 shadow-2xl">
              <div className="aspect-[9/19] bg-black rounded-[3.8rem] overflow-hidden relative">
                
                {/* 🌟 [핵심 수정 1] mode="popLayout" 제거 (Absolute 요소들끼리 자연스럽게 겹치도록 냅둡니다) */}
                <AnimatePresence>
                  <motion.img 
                    key={currentScreenIndex}
                    src={appScreens[currentScreenIndex]}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    // 🌟 텐션이 너무 통통 튀지 않고 묵직하게 밀어내도록 tween 모드로 변경!
                    transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
                    // 🌟 [핵심 수정 2] transition-all duration-700 제거! (Framer Motion만 애니메이션을 통제하게 만듭니다)
                    className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal" 
                    alt={`App Preview ${currentScreenIndex + 1}`} 
                  />
                </AnimatePresence>

              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 🌟 3. [NEW] Magazine / Editorial Section */}
      <section className="py-40 px-6 bg-[#0a0a0a] relative border-y border-white/5 overflow-hidden">
        {/* 배경 타이포그래피 포인트 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02]">
          <span className="text-[20vw] font-serif italic font-black uppercase whitespace-nowrap">{t('mag_bg')}</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            {/* 📱 Left: Magazine Visual Mockup (매거진 커버 티징) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto md:max-w-none rounded-sm overflow-hidden group border border-white/10 shadow-2xl">
              {/* 대표님의 앱 스크린샷 중 하나를 커버로 사용합니다 */}
              <img src="/images/aura_brand_08.png" alt="Magazine Cover" className="w-full h-full object-cover filter grayscale-[0.3] contrast-125 group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              
              {/* 🔒 Cult Only 자물쇠 뱃지 */}
              <div className="absolute top-6 right-6 bg-[#ff3b30]/90 backdrop-blur-md px-4 py-2 text-[10px] font-mono font-black tracking-widest uppercase text-white flex items-center gap-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <Lock className="w-3 h-3" /> Cult Only
              </div>

              {/* 매거진 타이틀 */}
              <div className="absolute bottom-10 left-8 right-8">
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase block mb-4">Issue No.01 / Data-Driven</span>
                <h3 className="text-4xl md:text-5xl font-serif italic font-black text-white leading-tight">The Silent<br/>Monolith.</h3>
              </div>
            </motion.div>

            {/* ✍️ Right: Copy & CTA */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-[#ff3b30]" />
                <span className="text-[#ff3b30] font-mono text-sm uppercase tracking-widest">{t('mag_badge')}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
                {t('mag_title_1')} <br/>{t('mag_title_2')}
              </h2>
              <p className="text-white/40 text-xl leading-relaxed font-light">
                {t('mag_desc_1')}
                <br/><br/>
                {t('mag_desc_2')}
              </p>
              
              <ul className="space-y-4 font-mono text-sm tracking-widest uppercase text-white/60 py-6">
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-[#ff3b30] rounded-full" /> {t('mag_li_1')}</li>
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-[#ff3b30] rounded-full" /> {t('mag_li_2')}</li>
                <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-[#ff3b30] rounded-full" /> {t('mag_li_3')}</li>
              </ul>

              <div className="pt-4">
                <Link href="/magazine" className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 hover:border-[#ff3b30] hover:text-[#ff3b30] transition-colors uppercase font-black tracking-widest text-sm text-white">
                  <BookOpen className="w-4 h-4 group-hover:animate-pulse" />
                    {t('mag_btn')}
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 🌟 4. Cult of 1,000 (🔥 힙스터 에고 자극 & VVIP 카드 업그레이드) */}
      <section id="ambassador" className="py-60 px-6 bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 pointer-events-none">
           <Crown className="w-40 h-40 text-black/5 rotate-12" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-32">
            <span className="font-mono text-xs font-black uppercase tracking-[0.5em] mb-4 block text-[#ff3b30]">Invite-Only Collective</span>
            <h2 className="text-[9vw] md:text-[7rem] font-serif italic font-black tracking-tighter leading-[0.85] uppercase">
              {t('cult_title_1')}<br/>{t('cult_title_2')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* 왼쪽: 힙스터 자극 멘트 */}
            <div className="space-y-12 text-2xl font-light leading-snug order-2 md:order-1">
              <p className="text-black/60">
                {t('cult_desc_1')} <b className="text-black font-black underline decoration-[#ff3b30]">{t('cult_desc_highlight')}</b>{t('cult_desc_2')}
              </p>
              <div className="space-y-8">
                {[
                  { title: t('cult_f1_title'), desc: t('cult_f1_desc') },
                  { title: t('cult_f2_title'), desc: t('cult_f2_desc') },
                  { title: t('cult_f3_title'), desc: t('cult_f3_desc') }
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }} className="border-l-2 border-black/10 pl-6">
                    <h4 className="text-lg font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                       {item.title}
                    </h4>
                    <p className="text-lg text-black/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* 오른쪽: VVIP 하이엔드 블랙 카드 (업그레이드됨) */}
            <div className="perspective-1000 order-1 md:order-2">
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
                initial={{ rotateY: -15, rotateX: 10 }}
                whileInView={{ rotateY: -5, rotateX: 5 }}
                transition={{ type: "spring", damping: 20 }}
                className="w-full aspect-[1.58/1] rounded-[2rem] relative overflow-hidden shadow-2xl transform-gpu transition-all duration-500 group"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
                }}
              >
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay" />
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-[length:200%_200%] animate-gradient-xy pointer-events-none" />

                 <div className="relative h-full p-10 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                       <div className="w-14 h-10 rounded-md bg-gradient-to-br from-[#d4af37] to-[#f2e6a3] border border-[#b39020] shadow-inner flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#b39020_2px,#b39020_4px)]" />
                          <CreditCard className="w-6 h-6 text-black/40" />
                       </div>
                       <div className="text-right">
                          <h3 className="text-3xl font-serif italic font-black uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ff3b30]">{t('card_title')}</h3>
                          <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.2em]">{t('card_sub')}</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div>
                          <span className="text-[9px] font-mono text-white/30 uppercase block mb-1">{t('card_auth')}</span>
                          <p className="text-4xl font-mono font-black tracking-widest text-white/90" style={{textShadow: "0 0 20px rgba(255,59,48,0.5)"}}>{t('card_role') === 'Founding Originator' ? 'AURA-VVIP' : 'AURA-VVIP'}</p>
                       </div>
                       <div className="flex justify-between items-end">
                          <div>
                             <span className="text-[9px] font-mono text-white/30 uppercase block mb-1">{t('card_status')}</span>
                             <p className="text-sm font-bold tracking-widest uppercase text-white/80">{t('card_role')}</p>
                          </div>
                          <Crown className="w-8 h-8 text-[#ff3b30]" />
                       </div>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 5. Waitlist Section */}
      <section className="py-40 px-6 bg-[#111] text-center relative border-t border-white/5">
         <div className="max-w-2xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
               <Mail className="w-10 h-10 text-white/30 mx-auto mb-6" />
               <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 uppercase">{t('wait_title')}</h2>
               
               {!isSubmitted ? (
                 <>
                   <p className="text-white/50 mb-10 text-lg">
                      {t('wait_desc_1')}<br/>
                      {t('wait_desc_2')}<span className="text-white">{t('wait_desc_highlight')}</span>{t('wait_desc_3')}
                   </p>
                   <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <input 
                        type="text" 
                        value={igHandle}
                        onChange={(e) => setIgHandle(e.target.value)}
                        placeholder={t('wait_ph_ig')}
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full text-center font-mono text-sm focus:border-[#ff3b30] outline-none transition-all uppercase"
                      />
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('wait_ph_email')} 
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full text-center font-mono text-sm focus:border-white/30 outline-none transition-all uppercase"
                      />
                      <button 
                        onClick={handleWaitlistSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-white text-black px-8 py-4 rounded-full font-black hover:bg-[#ff3b30] hover:text-white transition-all whitespace-nowrap disabled:opacity-50"
                      >
                         {isSubmitting ? t('wait_btn_ing') : t('wait_btn')}
                      </button>
                   </div>
                   <p className="mt-8 text-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">
                      {t('wait_count_1')}<span className="text-[#ff3b30]">12,402</span>{t('wait_count_2')}
                   </p>
                 </>
               ) : (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                   className="mt-10 bg-black border border-[#ff3b30]/30 p-8 rounded-2xl max-w-md mx-auto shadow-[0_0_40px_rgba(255,59,48,0.15)]"
                 >
                   <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                     <span className="text-[10px] font-mono text-[#ff3b30] tracking-[0.3em] uppercase">{t('audit_badge')}</span>
                     <span className="text-[10px] font-mono text-white/40">{new Date().toLocaleDateString()}</span>
                   </div>
                   <div className="text-center space-y-2 mb-8">
                     <h3 className="text-3xl font-serif italic font-black uppercase text-white">{t('audit_title')}</h3>
                     <p className="text-sm text-white/50">{t('audit_desc')}</p>
                   </div>
                   <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-left space-y-2">
                     <div className="flex justify-between text-white/40"><span>{t('audit_target')}</span> <span className="text-white">@{igHandle.replace('@', '')}</span></div>
                     <div className="flex justify-between text-white/40"><span>{t('audit_status')}</span> <span className="text-yellow-400 animate-pulse">{t('audit_pending')}</span></div>
                   </div>
                   <p className="mt-6 text-[9px] text-white/30 uppercase tracking-widest">
                     {t('audit_guide')}
                   </p>

                   <button 
                     onClick={() => {
                       setIsSubmitted(false);
                       setIgHandle("");
                       setEmail("");
                     }}
                     className="mt-8 w-full py-4 border border-white/20 text-white/60 hover:text-white hover:bg-white/10 font-mono text-[10px] tracking-[0.3em] uppercase transition-all"
                   >
                     {t('audit_close')}
                   </button>
                 </motion.div>
               )}
            </motion.div>
         </div>
      </section>

      {/* 🌟 6. Minimal Footer & Legal Modal Trigger */}
      <footer className="py-12 border-t border-white/5 bg-[#050505] relative z-10 flex justify-center">
        <button 
          onClick={() => setIsLegalModalOpen(true)}
          className="group flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-300"
        >
          <span className="font-serif italic font-black text-lg text-white tracking-tighter">
            Aura<span className="text-[#ff3b30] group-hover:animate-pulse">.</span>
          </span>
          <span className="font-mono text-[9px] text-white uppercase tracking-[0.3em] border-b border-transparent group-hover:border-[#ff3b30] pb-0.5 transition-all">
            Legal & Business Info
          </span>
        </button>
      </footer>

      {/* 🌟 법적 정보 모달 컴포넌트 삽입 */}
      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
    </div>
  );
}