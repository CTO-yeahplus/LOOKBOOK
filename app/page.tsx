"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Heart, Send, Layers, X, Sparkles, MapPin, Download, ChevronUp, Palette, Volume2, Bell} from "lucide-react";
import { toPng } from "html-to-image";
import { useAura } from "../hooks/useAura";
import ArchiveModal from "./components/ArchiveModal";
import LoginModal from "./components/LoginModal"; // 🌟 추가

const appleSpring = { type: "spring" as const, stiffness: 300, damping: 25 };
const slowSpring = { type: "spring" as const, stiffness: 200, damping: 30 };



export default function Home() {
  const aura = useAura();
  
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  // 🌟 [추가] 1. 스와이프할 때마다 증가하는 고유 키
  const [swipeKey, setSwipeKey] = useState(0);

  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const rotateX = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [10, -10]);
  const rotateY = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [-10, 10]);
  const x = useMotionValue(0);
  const imageX = useTransform(x, [-200, 200], [20, -20]);

  const exportPhotocard = async () => {
    if (!cardRef.current) return;
    aura.triggerHaptic([50, 100, 50]);
    setIsExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, { quality: 1.0, pixelRatio: 2, cacheBust: true });
      const link = document.createElement('a');
      link.download = `Aura_Look_${new Date().getTime()}.png`;
      link.href = dataUrl;
      link.click();
    } catch { alert('포토카드 생성 실패 (보안 정책 문제일 수 있습니다)'); } 
    finally { setIsExporting(false); }
  };

  if (aura.fashionItems.length === 0) return (
    <div className="flex h-[100dvh] w-screen items-center justify-center bg-black"><div className="h-6 w-6 animate-spin rounded-full border-[3px] border-white/20 border-t-white" /></div>
  );

  const currentItem = aura.fashionItems[aura.currentIndex];
  const isSaved = aura.savedItems.some(i => i.id === currentItem.id);

  const paginate = (newDirection: number) => {
    aura.triggerHaptic(40);
    aura.setDirection(newDirection);
    aura.setCurrentIndex((prev) => (prev + newDirection + aura.fashionItems.length) % aura.fashionItems.length);
    setSwipeKey(prev => prev + 1);
    x.set(0);
  };

  const toggleSave = async () => {
    // 🌟 로그인이 안 되어있으면 하트를 못 누르게 하고 로그인을 띄움
    if (!aura.user) {
      aura.triggerHaptic([50, 50]);
      alert("나만의 옷장을 만들려면 로그인이 필요합니다!");
      return;
    }

    aura.triggerHaptic(isSaved ? 30 : [30, 50, 40]);
    
    if (isSaved) {
      // 클라우드에서 삭제
      await import('../lib/supabase').then(m => m.supabase.from('aura_saved_looks').delete().match({ user_id: aura.user.id, look_id: currentItem.id }));
      aura.setSavedItems(prev => prev.filter(i => i.id !== currentItem.id));
    } else {
      // 클라우드에 추가
      await import('../lib/supabase').then(m => m.supabase.from('aura_saved_looks').insert([{ user_id: aura.user.id, look_id: currentItem.id }]));
      aura.setSavedItems(prev => [...prev, currentItem]);
    }
  };

  return (
    <div 
      onMouseMove={(e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); }} 
      className="relative flex h-[100dvh] w-screen flex-col items-center justify-center overflow-hidden bg-black font-sans selection:bg-white/30"
      style={{ perspective: 1000 }}
    >
      {/* 🌟 로그인 및 계정 버튼 (기존) */}
      <div className="absolute left-6 top-8 z-40 md:left-12 md:top-12 flex items-center gap-3">
        {aura.user ? (
          <>
            <button onClick={aura.signOut} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[14px] font-medium text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Logout
            </button>
            
            {/* 🌟 알림 구독 버튼 & 테스트 발송 버튼 */}
            <button onClick={aura.subscribeToPush} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" title="모닝 알림 받기">
              <Bell className="h-4 w-4" />
            </button>
            <button onClick={aura.sendTestPush} className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/20 text-emerald-400 backdrop-blur-2xl transition-all hover:bg-emerald-500/30 active:scale-95" title="알림 테스트 발송">
              <Send className="h-4 w-4" />
            </button>
          </>
        ) : (
          <button onClick={() => aura.setIsLoginModalOpen(true)} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[14px] font-medium text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95">
            <span className="font-bold">Login</span> to Save
          </button>
        )}
      </div>

      <div className="absolute right-6 top-8 z-40 md:right-12 md:top-12">
        <button onClick={() => { aura.triggerHaptic(30); aura.setIsModalOpen(true); }} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-[15px] font-medium text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95">
          <Layers className="h-4 w-4 opacity-80" strokeWidth={2} /> <span>Archive</span>
          {aura.savedItems.length > 0 && <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-black">{aura.savedItems.length}</span>}
        </button>
      </div>

      {/* 🌟 수정: 프록시 제거 및 직결 */}
      <AnimatePresence mode="popLayout">
        <motion.div key={`bg-${currentItem.id}-${swipeKey}`} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 z-0">
          <img src={currentItem.imageUrl} crossOrigin="anonymous" className="h-full w-full object-cover blur-[80px] saturate-150" alt="background blur" />
        </motion.div>
      </AnimatePresence>

      {aura.localWeather && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-10 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
          <MapPin className="h-4 w-4 text-blue-400" />
          <span>{aura.localWeather.city}, {aura.localWeather.temp}°C 기준</span>
        </motion.div>
      )}

      <AnimatePresence initial={false} custom={aura.direction} mode="popLayout">
        <motion.div
          key={`card-${currentItem.id}-${swipeKey}`} custom={aura.direction} style={{ x, rotateX, rotateY }}
          initial={{ x: aura.direction > 0 ? 300 : -300, opacity: 0, scale: 0.9 }} animate={{ x: 0, opacity: 1, scale: 1, transition: appleSpring }} exit={{ x: aura.direction < 0 ? 300 : -300, opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          drag={aura.isDetailOpen ? false : "x"} dragConstraints={{ left: 0, right: 0 }} dragElastic={1}
          onDragEnd={(e, { offset }) => {
            if (aura.fashionItems.length <= 1) return; 
            if (offset.x > 50) paginate(-1); else if (offset.x < -50) paginate(1);
          }}
          ref={cardRef} 
          className="relative z-10 flex h-[75vh] md:h-[80vh] w-[85vw] max-w-[420px] cursor-grab active:cursor-grabbing flex-col overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 shadow-2xl backdrop-blur-2xl aspect-[2/3] transform-gpu"
        >
          {/* 🌟 수정: 프록시 제거 및 직결 */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/20">
            <motion.img style={{ x: imageX, scale: 1.15 }} src={currentItem.imageUrl} crossOrigin="anonymous" alt="Fashion look" className="pointer-events-none h-full w-full object-cover" draggable="false" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col justify-end p-8">
            <div className="mb-4 flex"><span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-md"><Sparkles className="h-3 w-3" /> Aura AI</span></div>
            <h1 className="flex items-center gap-3 text-[3.5rem] md:text-6xl font-semibold tracking-tighter text-white leading-none drop-shadow-lg"><span>{currentItem.weather}</span><span>{currentItem.temperature}</span></h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {/* 🌟 수정: 안전한 태그 렌더링 (? 추가) */}
              {currentItem.tags?.map((tag: string, idx: number) => (<span key={idx} className="rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white backdrop-blur-xl shadow-sm">{tag.replace('#', '')}</span>))}
            </div>

            <div className={`pointer-events-auto mt-8 flex items-center justify-between transition-opacity duration-300 ${isExporting ? 'opacity-0' : 'opacity-100'}`}>
              <button onClick={() => { aura.triggerHaptic(20); aura.setIsDetailOpen(true); }} className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                <ChevronUp className="h-4 w-4 animate-bounce" /> Deep Dive
              </button>
              <div className="flex gap-3">
                <button onClick={exportPhotocard} className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-90"><Download className="h-5 w-5" strokeWidth={2} /></button>
                <button onClick={toggleSave} className={`flex h-14 w-14 items-center justify-center rounded-full backdrop-blur-2xl transition-all active:scale-90 ${isSaved ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'}`}><Heart className={`h-6 w-6 transition-transform ${isSaved ? 'fill-black scale-110' : ''}`} strokeWidth={isSaved ? 0 : 1.5} /></button>
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            {aura.isDetailOpen && (
              <motion.div initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={slowSpring} className="absolute inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-3xl p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold tracking-tight text-white">Editorial</h2>
                    <Volume2 className="w-4 h-4 text-white/50 animate-pulse" />
                  </div>
                  <button onClick={() => { aura.triggerHaptic(20); aura.setIsDetailOpen(false); }} className="p-2 rounded-full bg-white/10 active:scale-90"><X className="h-5 w-5 text-white" /></button>
                </div>
                <div className="flex-1 overflow-y-auto space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-2">Atmosphere</h3>
                    <p className="text-lg font-medium text-white/90 leading-relaxed">현재 날씨({currentItem.weather})와 완벽한 조화를 이루는 무드입니다. 주변의 소리에 귀 기울이며 이 룩이 선사하는 감각적인 텍스처를 상상해 보세요.</p>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-white/50 uppercase tracking-widest mb-4"><Palette className="w-4 h-4"/> Extracted Colors</h3>
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#E5E0D8] shadow-inner border border-white/10" />
                      <div className="w-12 h-12 rounded-full bg-[#2C2C2C] shadow-inner border border-white/10" />
                      <div className="w-12 h-12 rounded-full bg-[#8A7B6E] shadow-inner border border-white/10" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <ArchiveModal 
        isOpen={aura.isModalOpen} onClose={() => aura.setIsModalOpen(false)} 
        archiveData={aura.filteredArchive} searchQuery={aura.searchQuery} setSearchQuery={aura.setSearchQuery} 
        triggerHaptic={aura.triggerHaptic} 
      />

      {/* 🌟 완전히 분리된 로그인 컴포넌트 */}
      <LoginModal 
        isOpen={aura.isLoginModalOpen} 
        onClose={() => aura.setIsLoginModalOpen(false)} 
        onSignIn={aura.signIn} 
      />
      
    </div>
  );
}