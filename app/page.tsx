"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Compass, Heart, Bookmark, Layers, Plus, Trophy, Sparkles,Instagram, Smartphone, MapPin, Crown, Download, ChevronUp, MoreHorizontal, User } from "lucide-react";
import { toPng } from "html-to-image";
import { useAura } from "../hooks/useAura";
import ArchiveModal from "./components/ArchiveModal";
import LoginModal from "./components/LoginModal"; 
import ActionMenuModal from "./components/ActionMenuModal";
import UploadModal from "./components/UploadModal";
import AdminModal from "./components/AdminModal"; 
import { supabase } from "../lib/supabase"; 
import TutorialOverlay from "./components/TutorialOverlay"; 
import InstallPrompt from "./components/InstallPrompt";
import DeepDiveModal from "./components/DeepDiveModal"; 
import RankingModal from "./components/RankingModal";
import ProfileModal from "./components/ProfileModal";

const appleSpring = { type: "spring" as const, stiffness: 300, damping: 25 };

export default function Home() {
  const aura = useAura();
  
  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [swipeKey, setSwipeKey] = useState(0);
  
  // 🌟 슬라이드 메뉴 상태
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(0);
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

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

  // 🌟 iOS 3D 모션 권한 상태
  const [showGyroButton, setShowGyroButton] = useState(false);

  // 🌟 처음에 기기가 아이폰(iOS 13+)인지 검사하여 버튼을 띄울지 결정합니다.
  useEffect(() => {
    // ✅ [수정 후] 인터페이스를 인라인으로 정의하여 우회합니다.
    if (
      typeof window !== 'undefined' && 
      typeof (DeviceOrientationEvent as unknown as { requestPermission: Function }).requestPermission === 'function'
    ) {
      setShowGyroButton(true);
    }
  }, []);

  // 🌟 유저가 버튼을 눌렀을 때 애플의 보안 창을 띄우는 함수
  const requestGyroPermission = async () => {
    try {
      const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();      if (permission === 'granted') {
      setShowGyroButton(false); // 허용되었으니 버튼을 숨깁니다!
      aura.triggerHaptic([50, 100, 50]); // 성공 진동!
      } else {
        alert("3D 입체 효과를 보려면 기기 모션 접근 권한이 필요합니다.");
      }
    } catch (error) {
      console.error("모션 권한 요청 실패:", error);
    }
  };

  // 🌟 2. 스탬프 완성본을 API(route.ts)로 쏘아 올리는 진짜 함수!
  const handleUploadSubmit = async (file: File) => {
    setIsAnalyzing(true); // AI 로딩 화면 켜기!
    
    try {
      // API가 요구하는 데이터(FormData) 조립
      const formData = new FormData();
      formData.append('image', file); // 스탬프가 찍힌 1.1MB 파일!
      
      // 유저 정보가 있다면 같이 보냅니다 (route.ts가 기다리고 있음)
      if (aura.user) {
        formData.append('userId', aura.user.id);
        
        // 이메일 앞부분을 닉네임으로 쓰거나 메타데이터 이름 사용
        const userName = aura.user.user_metadata?.name || aura.user.email?.split('@')[0] || 'AURA Editor';
        formData.append('uploaderName', userName);
        
        // 인스타 아이디가 연동되어 있다면 추가
        if (aura.user.user_metadata?.instagram) {
          formData.append('uploaderIg', aura.user.user_metadata.instagram);
        }
      }

      // 우리 앱의 백엔드 심장(route.ts)으로 전송!
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log("🔥 AI 분석 및 DB 저장 완료:", data.item);
        
        // 🌟 업로드 성공 후 처리
        setIsUploadModalOpen(false); // 모달 닫기
        aura.triggerHaptic([50, 100, 50]); // 성공 진동!
        
        // (선택) 방금 올린 아이템을 내 피드 맨 앞에 즉시 추가하여 화면 갱신
        if (aura.setUploadedItems) {
          aura.setUploadedItems([data.item, ...aura.uploadedItems]);
        }

        // 🌟 [추가] 새로고침을 통해 피드를 최신 상태로 강제 업데이트!
        window.location.reload();
        
      } else {
        console.error("서버 에러:", data.error);
        alert("업로드에 실패했습니다: " + data.error);
      }
    } catch (error) {
      console.error("업로드 통신 실패:", error);
      alert("네트워크 에러가 발생했습니다.");
    } finally {
      setIsAnalyzing(false); // AI 로딩 화면 끄기
    }
  };
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
    } catch { 
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
  }, [currentItem, isSaved]); // 카드가 넘어가거나, 내가 하트를 누를 때마다 갱신  

  // 🌟 모바일 자이로스코프 (DeviceOrientation) 3D 입체 효과 연동
  useEffect(() => {
    // 모바일 환경인지 가볍게 체크 (터치 지원 기기)
    const isMobile = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (!isMobile) return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      if (beta === null || gamma === null) return;

      // 1. 좌우 기울기 (Gamma: 보통 -90 ~ 90도)
      // 스마트폰을 살짝만 기울여도 반응하도록 범위를 -30 ~ 30도로 좁힙니다.
      const maxGamma = 30;
      const clampedGamma = Math.max(-maxGamma, Math.min(maxGamma, gamma));
      // 기울기를 화면 가로 픽셀(0 ~ innerWidth)로 변환!
      const mappedX = ((clampedGamma + maxGamma) / (maxGamma * 2)) * window.innerWidth;

      // 2. 앞뒤 기울기 (Beta: 스마트폰을 들고 있는 각도, 보통 20도 ~ 70도 사이)
      const minBeta = 20;
      const maxBeta = 70;
      const clampedBeta = Math.max(minBeta, Math.min(maxBeta, beta));
      // 기울기를 화면 세로 픽셀(0 ~ innerHeight)로 변환!
      const mappedY = ((clampedBeta - minBeta) / (maxBeta - minBeta)) * window.innerHeight;

      // 🌟 기존 PC용 마우스 변수에 자이로 값을 덮어씌웁니다! (마법이 일어나는 곳)
      mouseX.set(mappedX);
      mouseY.set(mappedY);
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [mouseX, mouseY]);

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
      {/* 상단 좌측: 프로필/로그인 버튼 */}
      <div className="absolute left-6 top-8 z-40 md:left-8 md:top-8">
        {aura.user ? (
          // 🌟 로그인 된 경우: 내 프로필 버튼 (아바타 스타일)
          <button 
            onClick={() => { aura.triggerHaptic(20); setIsProfileOpen(true); }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" 
            >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-xs font-bold shadow-inner border border-white/10">
              {aura.user.email?.[0].toUpperCase()}
            </div>
          </button>
        ) : (
          // 🌟 로그인 안 된 경우: 기존 로그인 유도 버튼
          <button 
          onClick={() => { 
            console.log("Login Clicked!"); // 👈 테스트용 로그: 브라우저 콘솔(F12)에 찍히는지 확인하세요.
            setIsLoginModalOpen(true); 
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" 
          >
          <User />
          </button>
        )}
      </div>

      {/* 🌟 2. 상단 우측: 버튼 그룹 (랭킹 & 아카이브) */}
      <div className="absolute right-6 top-8 z-40 flex items-center gap-2 md:right-8 md:top-8">
        
        {/* 🏆 랭킹 버튼 (트로피) */}
        <button 
          onClick={() => { aura.triggerHaptic(30); setIsRankingOpen(true); }} 
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" 
          title="명예의 전당"
        >
          <Trophy className="h-5 w-5 text-yellow-400" />
        </button>

        {/* 📂 아카이브 버튼 (레이어) */}
        <button 
          onClick={() => { aura.triggerHaptic(30); aura.setIsModalOpen(true); }} 
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" 
          title="보관함"
        >
          <Layers className="h-5 w-5 opacity-80" strokeWidth={2} />
          {aura.savedItems.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black shadow-lg">
              {aura.savedItems.length}
            </span>
          )}
        </button>

        

      </div>

      <AnimatePresence mode="popLayout">
        <motion.div key={`bg-${currentItem.id}-${swipeKey}`} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={currentItem.imageUrl} crossOrigin="anonymous" className="h-full w-full object-cover blur-[80px] saturate-150" alt="background blur" />
        </motion.div>
      </AnimatePresence>

      {/*

      {aura.localWeather && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="absolute top-10 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
          <MapPin className="h-4 w-4 text-blue-400" />
          <span>{aura.localWeather.city}, {aura.localWeather.temp}°C 기준</span>
        </motion.div>
      )}

      */}

      {/* 🏝️ AURA 다이내믹 아일랜드: 슬림 & 버튼 간섭 방지 버전 */}
      {aura.localWeather && (
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-9 left-0 right-12 z-30 flex justify-center pointer-events-none px-16" // 좌우 여백(px-16)을 주어 버튼 공간 확보
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="pointer-events-auto flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-black/60 pl-2.5 pr-3 py-1.5 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 hover:bg-black/80 max-w-[260px] md:max-w-[240px]" // 최대 너비 제한
          >
            {/* 위치 핀 */}
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
              <MapPin className="h-3 w-3 text-blue-400" />
            </div>

            {/* 정보 텍스트: 긴 도시 이름을 자동으로 생략함 */}
            <div className="flex min-w-0 items-center gap-1.5 text-[12px] font-bold tracking-tight text-white/90">
              <span className="truncate opacity-60">{aura.localWeather.city}</span>
              <span className="shrink-0 h-2 w-[1px] bg-white/10" />
              <span className="shrink-0 text-blue-400">{aura.localWeather.temp}°C</span>
            </div>

            {/* 라이브 상태 표시등 */}
            <div className="flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            </div>
          </motion.div>
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
          className="relative cursor-pointer bottom-4 z-10 flex h-[79vh] md:h-[85vh] w-[95vw] max-w-[420px] cursor-grab active:cursor-grabbing flex-col overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 shadow-2xl aspect-[2/3] transform-gpu"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/20">
            <motion.img style={{ x: imageX, scale: 1.15 }} src={currentItem.imageUrl} crossOrigin="anonymous" alt="Fashion look" className="pointer-events-none h-full w-full object-cover" draggable="false" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
          
          
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col justify-end p-8">
            {/* 🌟 핵심 수정: gap-2를 주고 뱃지들을 하나의 div 안으로 모두 모았습니다! */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className={`whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md transition-all duration-500 ${
              currentItem.uploaderName === 'AURA Editor'
                ? 'border-amber-500/30 bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                : currentLikes >= 10 
                  ? 'border-indigo-400/40 bg-indigo-500/20 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.3)]' // 🌟 트렌드세터 승급!
                  : 'border-white/10 bg-white/10 text-white/80'
            }`}>
              {currentItem.uploaderName === 'AURA Editor' ? <Crown className="h-3 w-3" /> : currentLikes >= 10 ? <Sparkles className="h-3 w-3" /> : <Compass className="h-3 w-3" />}
              {currentItem.uploaderName === 'AURA Editor' ? 'AURA EXCLUSIVE' : currentLikes >= 10 ? 'AURA TRENDSETTER' : 'AURA DISCOVER'}
            </span>
              
              {/* 🌟 힙한 매거진 스타일의 크레딧 뱃지 추가! */}
              <span className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white/60 backdrop-blur-md transition-all duration-500 shadow-sm">
                {currentItem.uploaderIg ? (
                  // 🌟 1. 인스타 아이디가 연동되어 있는 경우
                  <>
                    <Instagram className="w-3 h-3 text-white/80" />
                    <span className="text-white/90">
                      @{currentItem.uploaderIg.replace('@', '')}
                    </span>
                  </>
                ) : (
                  // 🌟 2. 인스타 아이디가 없는 경우 (기존 이름 노출)
                  <>
                    by <span className="text-white/90">{currentItem.uploaderName || 'AURA'}</span>
                  </>
                )}
              </span>
            </div>
            <h1 className="flex items-center gap-3 text-[3.5rem] md:text-6xl font-semibold tracking-tighter text-white leading-none drop-shadow-lg"><span>{currentItem.weather}</span><span>{currentItem.temperature}</span></h1>
            <div className="mt-4 flex flex-wrap gap-2">
              {currentItem.tags?.map((tag: string, idx: number) => (<span key={idx} className="whitespace-nowrap inline-block rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white backdrop-blur-xl shadow-sm">{tag.replace('#', '')}</span>))}
            </div>

            {/* 🌟 2. currentItem이 존재할 때만 버튼을 보여줍니다 */}
            {currentItem && (
              <div className="pointer-events-auto flex gap-6 items-center mt-6">
                
                {/* 🌟 AURA IMPACT (좋아요) 버튼 */}
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    aura.toggleLike?.(String(currentItem.id), currentItem.likes || 0);
                  }}
                  className="flex items-center gap-1.5 group"
                >
                  <Heart 
                    className={`w-7 h-7 transition-transform group-active:scale-75 ${aura.likedItems?.includes(String(currentItem.id)) ? 'fill-red-500 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'text-white hover:text-red-400 drop-shadow-md'}`} 
                  />
                  <span className="font-mono text-sm font-bold text-white drop-shadow-md">
                    {currentItem.likes || 0}
                  </span>
                </button>

                {/* 🌟 ARCHIVE (저장) 버튼 */}
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    toggleSave(); // 안전장치
                  }}
                  className="flex items-center gap-1.5 group ml-auto"
                >
                  <Bookmark 
                    className={`w-7 h-7 transition-transform group-active:scale-75 ${isSaved ? 'fill-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'text-white hover:text-gray-300 drop-shadow-md'}`} 
                  />
                  {/* 🌟 북마크를 저장한 사람들의 숫자 표시! */}
                  <span className="font-mono text-sm font-bold text-white drop-shadow-md">
                    {currentLikes || 0}
                  </span>
                </button>
              </div>
            )}

            <div className={`pointer-events-auto mt-8 flex items-center justify-between transition-opacity duration-300 ${isExporting ? 'opacity-0' : 'opacity-100'}`}>
            
            <button 
              onClick={() => { aura.triggerHaptic(20); aura.setIsDetailOpen(true); }} 
              className="group relative flex items-center gap-3 px-6 py-3 overflow-hidden transition-all active:scale-95"
            >
              {/* 1. 버튼 배경: 강렬한 레드와 유리 질감의 조화 */}
              <div className="absolute inset-0 skew-x-[-12deg] group-hover:bg-red-500 transition-colors" />

              {/* 2. 픽토그램: 원형 프레임 안의 움직이는 아이콘 */}
              <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-black rounded-full border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
                <Sparkles className="h-4 w-4 text-red-500 fill-current" />
              </div>

              {/* 3. 텍스트: 더 굵고 선명한 에디토리얼 타이포그래피 */}
              <div className="relative z-10 flex flex-col items-start leading-none">
                <span className="text-[8px] font-mono font-bold text-black/60 tracking-[0.2em] mb-0.5 uppercase">
                  Uncover The Vibe
                </span>
                <p className="text-xl font-serif italic font-black text-white tracking-tighter uppercase">
                  Deep Dive.
                </p>
              </div>

              {/* 4. 화살표 디테일 */}
              <ChevronUp className="relative z-10 h-5 w-5 text-white animate-bounce ml-1" />
            </button>
          </div>
          </div>
          
          {/* 🌟 기존의 거대한 코드가 이 아름다운 한 줄로 압축되었습니다! */}
          <DeepDiveModal 
            isOpen={aura.isDetailOpen} 
            onClose={() => aura.setIsDetailOpen(false)} 
            item={currentItem} 
            triggerHaptic={aura.triggerHaptic} 
          />
        </motion.div>
      </AnimatePresence>

      {/* 🌟 기존 하단 플로팅 툴바 코드 바로 위쪽에 이 코드를 넣어주세요! */}
      <AnimatePresence>
        {showGyroButton && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-28 left-1/2 z-40 flex -translate-x-1/2"
          >
            <button
              onClick={requestGyroPermission}
              className="group flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-[10px] font-bold tracking-widest text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md transition-all active:scale-95"
            >
              <Smartphone className="h-4 w-4 animate-pulse group-hover:animate-none group-hover:rotate-12 transition-transform" />
              ENABLE 3D VIBE
            </button>
          </motion.div>
        )}
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
        archiveData={aura.filteredArchive} 
        uploadedData={aura.uploadedItems} // 🌟 추가
        searchQuery={aura.searchQuery} setSearchQuery={aura.setSearchQuery} 
        triggerHaptic={aura.triggerHaptic} 
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
      {/* app/page.tsx 내부 */}

      {/* 🌟 나만의 옷장 업로드 모달 (app/page.tsx 내부) */}
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
        triggerHaptic={aura.triggerHaptic}
        
        // 🌟 방금 위에서 만든 상태와 함수를 드디어 연결합니다!
        isAnalyzing={isAnalyzing} 
        onUpload={handleUploadSubmit} 
      />
      {/* 🌟 기존 모달들 아래에 추가 */}
      <AdminModal 
      isOpen={isAdminModalOpen} 
      onClose={() => setIsAdminModalOpen(false)} 
      triggerHaptic={aura.triggerHaptic} />

      <RankingModal 
      isOpen={isRankingOpen} 
      onClose={() => setIsRankingOpen(false)} 
      items={aura.fashionItems}
      />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onSignIn={(provider) => {
          aura.signIn(provider);
          setIsLoginModalOpen(false); // 로그인 시도 후 모달 닫기
        }} 
      />

      <ProfileModal 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        user={aura.user} 
        onLogout={aura.signOut} 
        uploadedCount={aura.uploadedItems.length} 
        bestLook={aura.uploadedItems[0]}
        onSaveInstagram={aura.saveInstagram} // 🌟 파이프라인 연결 완료!
      />
      {/* 🌟 강력한 리텐션 유도 컴포넌트들 */}
      <TutorialOverlay />
      <InstallPrompt />
    </div>
  );
}