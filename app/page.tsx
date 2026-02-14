"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
// 🌟 MoreHorizontal 아이콘 추가 및 미사용 아이콘 정리
import { Heart, Layers, X, Plus, Sparkles, MapPin, Crown, Download, ChevronUp, Palette, Volume2, MoreHorizontal, User } from "lucide-react";
import { toPng } from "html-to-image";
import { useAura } from "../hooks/useAura";
import ArchiveModal from "./components/ArchiveModal";
import LoginModal from "./components/LoginModal"; 
import ActionMenuModal from "./components/ActionMenuModal";
import UploadModal from "./components/UploadModal";
import AdminModal from "./components/AdminModal"; // 🌟 추가
import { supabase } from "../lib/supabase"; // 상단 임포트 확인

const appleSpring = { type: "spring" as const, stiffness: 300, damping: 25 };
const slowSpring = { type: "spring" as const, stiffness: 200, damping: 30 };

export default function Home() {
  const aura = useAura();
  
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [swipeKey, setSwipeKey] = useState(0);
  
  // 🌟 슬라이드 메뉴 상태
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false); // 🌟 업로드 모달 상태 추가
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false); // 🌟 어드민 모달 상태
  const [currentLikes, setCurrentLikes] = useState(0);

  // 🌟 (매우 중요) 여기에 당신의 구글 로그인 이메일을 정확히 입력하십시오!
  const ADMIN_EMAIL = "cto@yeahplus.co.kr"; 
  const isAdmin = aura.user?.email === ADMIN_EMAIL;

  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const rotateX = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [10, -10]);
  const rotateY = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [-10, 10]);
  const x = useMotionValue(0);
  const imageX = useTransform(x, [-200, 200], [20, -20]);

  const currentItem = aura.fashionItems[aura.currentIndex];
  const isSaved = aura.savedItems.some(i => i.id === currentItem?.id);

  // 🌟 1. 다운로드 버튼용: 텍스트 밀림 현상을 완벽히 잡은 캡처 엔진
  const exportPhotocard = async () => {
    if (!cardRef.current) return;
    aura.triggerHaptic([50, 100, 50]);
    setIsExporting(true); // 1. 버튼들을 화면에서 숨김 처리

    // 🌟 [핵심 보수] UI가 숨겨지고 폰트/레이아웃이 완벽히 자리를 잡을 때까지 0.15초 대기
    await new Promise(resolve => setTimeout(resolve, 150));

    try {
      const dataUrl = await toPng(cardRef.current, { 
        quality: 1.0, 
        pixelRatio: 2, 
        cacheBust: true,
        // 🌟 [핵심 보수] 캡처하는 순간에만 Framer Motion의 3D 기울기를 평면으로 강제 고정!
        style: { 
          transform: 'none', 
          transition: 'none'
        }
      });
      const link = document.createElement('a');
      link.download = `AURA_Look_${new Date().getTime()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) { 
      alert('포토카드 캡처 실패. 네트워크 상태를 확인해주세요!'); 
    } finally { 
      setIsExporting(false); 
    }
  };

  // 🌟 2. 공유 버튼용: 텍스트 밀림 현상을 완벽히 잡은 공유 엔진
  const sharePhotocard = async () => {
    if (!cardRef.current) return;
    aura.triggerHaptic(50);
    setIsExporting(true);

    // 🌟 [핵심 보수] 대기 시간 부여
    await new Promise(resolve => setTimeout(resolve, 150));

    try {
      const dataUrl = await toPng(cardRef.current, { 
        quality: 1.0, 
        pixelRatio: 2, 
        cacheBust: true,
        // 🌟 [핵심 보수] 3D 효과 무력화
        style: { 
          transform: 'none', 
          transition: 'none'
        }
      });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'AURA_Look.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'AURA: 오늘의 추천 룩 🌤️',
          text: 'AURA가 추천하는 날씨 맞춤 룩을 확인해보세요!',
          files: [file],
        });
      } else {
        alert("이 기기는 이미지 직접 공유를 지원하지 않아 링크가 복사되었습니다.");
        navigator.clipboard.writeText(window.location.href);
      }
    } catch (err) {
      console.log("공유 실패:", err);
    } finally {
      setIsExporting(false);
    }
  };
    // 🌟 현재 카드의 총 하트 수를 실시간으로 긁어옵니다.
    useEffect(() => {
      if (!currentItem) return;
      const fetchLikes = async () => {
        const { count } = await supabase
          .from('aura_saved_looks')
          .select('*', { count: 'exact', head: true })
          .eq('look_id', currentItem.id);
        setCurrentLikes(count || 0);
      };
      fetchLikes();
    }, [currentItem?.id, isSaved]); // 카드가 넘어가거나, 내가 하트를 누를 때마다 갱신  

  if (aura.fashionItems.length === 0) return (
    <div className="flex h-[100dvh] w-screen items-center justify-center bg-black"><div className="h-6 w-6 animate-spin rounded-full border-[3px] border-white/20 border-t-white" /></div>
  );



  const paginate = (newDirection: number) => {
    aura.triggerHaptic(40);
    aura.setDirection(newDirection);
    aura.setCurrentIndex((prev) => (prev + newDirection + aura.fashionItems.length) % aura.fashionItems.length);
    setSwipeKey(prev => prev + 1);
    x.set(0);
  };

  const toggleSave = async () => {
    if (!aura.user) {
      aura.triggerHaptic([50, 50]);
      alert("나만의 옷장을 만들려면 로그인이 필요합니다!");
      return;
    }

    aura.triggerHaptic(isSaved ? 30 : [30, 50, 40]);
    
    if (isSaved) {
      await import('../lib/supabase').then(m => m.supabase.from('aura_saved_looks').delete().match({ user_id: aura.user.id, look_id: currentItem.id }));
      aura.setSavedItems(prev => prev.filter(i => i.id !== currentItem.id));
    } else {
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
      {/* 🌟 1. 초미니멀 상단 좌측: 로그인/프로필 버튼 */}
      <div className="absolute left-6 top-8 z-40 md:left-8 md:top-8">
        {aura.user ? (
          <button onClick={aura.signOut} className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" title="로그아웃">
            <User className="h-5 w-5 opacity-80" />
            <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-[#1c1c1e] bg-green-400" />
          </button>
        ) : (
          <button onClick={() => aura.setIsLoginModalOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" title="로그인">
            <User className="h-5 w-5 opacity-80" />
          </button>
        )}
      </div>

      {/* 🌟 2. 초미니멀 상단 우측: 아카이브 버튼 */}
      <div className="absolute right-6 top-8 z-40 md:right-8 md:top-8">
        <button onClick={() => { aura.triggerHaptic(30); aura.setIsModalOpen(true); }} className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" title="보관함">
          <Layers className="h-5 w-5 opacity-80" strokeWidth={2} />
          {aura.savedItems.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
              {aura.savedItems.length}
            </span>
          )}
        </button>
      </div>

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
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/20">
            <motion.img style={{ x: imageX, scale: 1.15 }} src={currentItem.imageUrl} crossOrigin="anonymous" alt="Fashion look" className="pointer-events-none h-full w-full object-cover" draggable="false" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col justify-end p-8">
            <div className="mb-4 flex"><span className="whitespace-nowrap inline-block flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-md"><Sparkles className="h-3 w-3" /> Aura AI</span></div>
            {/* 🌟 실시간 글로벌 하트 카운터 뱃지 */}
            {currentLikes > 0 && (
                <span className="flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-300 backdrop-blur-md">
                  <Heart className="h-3 w-3 fill-current" /> {currentLikes}
                </span>
              )}
            <h1 className="flex items-center gap-3 text-[3.5rem] md:text-6xl font-semibold tracking-tighter text-white leading-none drop-shadow-lg"><span>{currentItem.weather}</span><span>{currentItem.temperature}</span></h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {currentItem.tags?.map((tag: string, idx: number) => (<span key={idx} className="whitespace-nowrap inline-block rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white backdrop-blur-xl shadow-sm">{tag.replace('#', '')}</span>))}
            </div>

            <div className={`pointer-events-auto mt-8 flex items-center justify-between transition-opacity duration-300 ${isExporting ? 'opacity-0' : 'opacity-100'}`}>
              <button onClick={() => { aura.triggerHaptic(20); aura.setIsDetailOpen(true); }} className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                <ChevronUp className="h-4 w-4 animate-bounce" /> Deep Dive
              </button>
            
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
      {/* 🌟 3. 완벽한 비율의 하단 중앙 플로팅 툴바 */}
      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/40 p-2 shadow-2xl backdrop-blur-2xl">
        <button 
          onClick={() => { aura.triggerHaptic(30); setIsUploadModalOpen(true); }} 
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95"
        >
          <Plus className="h-5 w-5" />
        </button>

        <div className="mx-1 h-8 w-[1px] bg-white/15" />

        {/* 왼쪽: 다운로드 버튼 (새로 이사옴) */}
        <button 
          onClick={exportPhotocard} 
          disabled={isExporting}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95 disabled:opacity-50"
        >
          {isExporting ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" /> : <Download className="h-5 w-5" />}
        </button>
        
        <div className="mx-1 h-8 w-[1px] bg-white/15" />

        {/* 중앙: 메인 액션 하트 (가장 큼) */}
        <button 
          onClick={toggleSave} 
          className={`flex h-14 w-14 items-center justify-center rounded-full transition-all active:scale-95 ${
            isSaved ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <Heart className={`h-6 w-6 transition-transform ${isSaved ? 'fill-current scale-110' : ''}`} strokeWidth={isSaved ? 0 : 1.5} />
        </button>
        
        <div className="mx-1 h-8 w-[1px] bg-white/15" />

        {/* 오른쪽: 더보기(메뉴) 버튼 */}
        <button 
          onClick={() => setIsActionMenuOpen(true)} 
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95"
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>

        {/* 🌟 CEO 전용: 최고 관리자 왕관 버튼 (일반 유저에겐 안 보임) */}
        {isAdmin && (
          <>
            <div className="mx-1 h-8 w-[1px] bg-white/15" />
            <button 
              onClick={() => { aura.triggerHaptic([30, 50]); setIsAdminModalOpen(true); }} 
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-600/20 text-yellow-500 transition-all hover:bg-yellow-500/30 active:scale-95 border border-yellow-500/30"
            >
              <Crown className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <ArchiveModal 
        isOpen={aura.isModalOpen} onClose={() => aura.setIsModalOpen(false)} 
        archiveData={aura.filteredArchive} searchQuery={aura.searchQuery} setSearchQuery={aura.setSearchQuery} 
        triggerHaptic={aura.triggerHaptic} 
      />

      <LoginModal 
        isOpen={aura.isLoginModalOpen} 
        onClose={() => aura.setIsLoginModalOpen(false)} 
        onSignIn={aura.signIn} 
      />

      {/* 🌟 수정된 모달 호출부 */}
      {aura.fashionItems.length > 0 && (
        <ActionMenuModal 
          isOpen={isActionMenuOpen} 
          onClose={() => setIsActionMenuOpen(false)} 
          item={currentItem} 
          onShare={sharePhotocard} // 🌟 새로 만든 공유 함수 전달
          subscribeToPush={aura.subscribeToPush || (() => {})} 
          sendTestPush={aura.sendTestPush || (() => {})} 
        />
      )}
      {/* 🌟 나만의 옷장 업로드 모달 */}
      <UploadModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} triggerHaptic={aura.triggerHaptic} />
      {/* 🌟 기존 모달들 아래에 추가 */}
      <AdminModal isOpen={isAdminModalOpen} onClose={() => setIsAdminModalOpen(false)} triggerHaptic={aura.triggerHaptic} />
    </div>
  );
}