"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Layers, Target, Camera, X, Smartphone, User, ShoppingBag } from "lucide-react";
import { toPng } from "html-to-image";
import { useAura, FashionItem } from "../../hooks/useAura";
import ArchiveModal from "../components/ArchiveModal";
import LoginModal from "../components/LoginModal"; 
import ActionMenuModal from "../components/ActionMenuModal";
import UploadModal from "../components/UploadModal";
import AdminModal from "../components/AdminModal"; 
import { supabase } from "../../lib/supabase"; 
import TutorialOverlay from "../components/TutorialOverlay"; 
import InstallPrompt from "../components/InstallPrompt";
import DeepDiveModal from "../components/DeepDiveModal"; 
import RankingModal from "../components/RankingModal";
import ProfileModal from "../components/ProfileModal";
import DynamicIsland from "../components/DynamicIsland";
import FashionCard from "../components/FashionCard";
import FloatingDock from "../components/FloatingDock";
import ExploreGrid from "../components/ExploreGrid";
import MyAuraReport from "../components/MyAuraReport";
import { useGyroscope } from "../../hooks/useGyroscope";
import VibeMatch from "../components/VibeMatch";
import ShopModal from "../components/ShopModal";
import { useGatekeeper } from "@/hooks/useGatekeeper";
import LockModal from "../components/LockModal";
import { track } from '@vercel/analytics/react';
import imageCompression from 'browser-image-compression';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation'; // 🌟 [NEW] 이 줄을 추가하세요!


export default function Home() {
  const t = useTranslations('Home');
  const router = useRouter();
  const aura = useAura();
  const { isApproved, loading, verifyCode } = useGatekeeper(aura.user?.id);

  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [swipeKey, setSwipeKey] = useState(0);
  const [viewMode, setViewMode] = useState<'recommend' | 'explore'>('recommend');
  const [isMissionDismissed, setIsMissionDismissed] = useState(false); // 🌟 미션 배너 닫기 상태
  
  // 🌟 슬라이드 메뉴 상태
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [archiveCount, setArchiveCount] = useState(0);
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [exploreSelectedItem, setExploreSelectedItem] = useState<FashionItem | null>(null);

  // 🌟 (매우 중요) 여기에 당신의 구글 로그인 이메일을 정확히 입력하십시오!
  const ADMIN_EMAIL = "cto@yeahplus.co.kr"; 
  const isAdmin = aura.user?.email === ADMIN_EMAIL;

  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const rotateX = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [10, -10]);
  const rotateY = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [-10, 10]);
  const x = useMotionValue(0);
  const imageX = useTransform(x, [-200, 200], [20, -20]);

  // 자이로스코프 커스텀 훅 사용
  const { showGyroButton, requestGyroPermission } = useGyroscope(mouseX, mouseY);
  const currentItem = aura.fashionItems[aura.currentIndex];

  // 🌟 [NEW] 오토 패스(Auto-Pass) 엔진
  useEffect(() => {
    // 유저가 구글 로그인을 완료했고 && 아직 승인 전(자물쇠 상태)일 때
    if (aura.user && isApproved === false) {
      const pendingCode = localStorage.getItem("aura_pending_code");
      
      if (pendingCode) {
        // 주머니에 코드가 있으면 문지기에게 자동으로 제출!
        verifyCode(pendingCode).then((res) => {
          if (res.success) {
            alert(t('welcome_cult'));
          } else {
            alert(t('invalid_code'));
          }
          // 쓴 코드는 주머니에서 버림
          localStorage.removeItem("aura_pending_code"); 
        });
      }
    }
  }, [aura.user, isApproved]);

  // 🌟 [추가] EXPLORE 탭에 진입할 때마다 AI 매칭 유저를 실시간으로 검색합니다.
  useEffect(() => {
    // styleReport가 존재하고, vibeKey가 있을 때만 호출
    if (viewMode === 'explore' && aura.styleReport?.vibeKey) {
      aura.loadMatchedUsers(
        aura.styleReport.vibeKey, // 🌟 '절제미를 아는...' 대신 'MINIMALIST'가 넘어갑니다.
        aura.user?.id || 'guest-id'
      );
    }
  }, [viewMode, aura.styleReport?.vibeKey, aura]);

  // 🌟 [핵심 로직] EXPLORE 모드로 바뀔 때만 데이터를 새로 가져옵니다.
  useEffect(() => {
    if (viewMode === 'explore') {
      aura.fetchTrendingItems(); // 탭을 누르는 순간 호출!
      aura.triggerHaptic(10);    // 가벼운 진동으로 피드백
    }
  }, [viewMode]); // viewMode가 변할 때마다 실행

  // 🌟 현재 카드가 '보관함(Archive)'에 담긴 총 횟수를 긁어옵니다.
  useEffect(() => {
    if (!currentItem) return;
    const fetchArchiveCount = async () => {
      const { count } = await supabase
        .from('aura_saved_looks') // 맞습니다! 아카이브 테이블에서 세어야 합니다.
        .select('*', { count: 'exact', head: true })
        .eq('look_id', currentItem.id);
      setArchiveCount(count || 0);
    };
    fetchArchiveCount();
  }, [currentItem]);

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

  // 🌟 2. 스탬프 완성본을 API(route.ts)로 쏘아 올리는 진짜 함수!
  const handleUploadSubmit = async (file: File) => {
    setIsAnalyzing(true); // AI 로딩 화면 켜기!
    
    try {
      // 무식하게 깎아내지 않고, 화질(Quality)은 최상으로 유지하되 불필요한 메타데이터만 날립니다.
      const options = {
        maxSizeMB: 0.5,          // 🌟 0.5 -> 1.5로 대폭 상향 (최대 1.5MB 허용)
        maxWidthOrHeight: 2048,  // 🌟 1920 -> 2048로 상향 (아이폰 프로 Max, 최신 갤럭시 초고해상도 대응)
        initialQuality: 0.95,    // 🌟 [핵심 추가] 초기 화질 보존율 95% 강제 지정! (뭉개짐 방지)
        alwaysKeepResolution: true, // 🌟 [핵심 추가] 억지로 해상도를 줄이지 않도록 방어
        useWebWorker: true,
      };
      
      console.log(`압축 전 원본 크기: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
      const compressedFile = await imageCompression(file, options);
      console.log(`압축 후 최적화 크기: ${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`);

      // API가 요구하는 데이터(FormData) 조립
      const formData = new FormData();
      formData.append('image', compressedFile); // 스탬프가 찍힌 1.1MB 파일!
      
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
  // 🌟 1. 다운로드 버튼용: 텍스트 밀림 방지 + 스마트 타겟팅
  const exportPhotocard = async () => {
    // 🌟 커스텀 이벤트 추적: 누가 어떤 옷(ID)을 다운받았는지 기록!
    track('Download_Photocard', { look_id: currentItem?.id || 'unknown' });
    const targetNode = getCaptureElement();
    if (!targetNode) return alert("캡처할 수 있는 카드를 찾을 수 없습니다. (새로고침 후 다시 시도해주세요)");

    aura.triggerHaptic([50, 100, 50]);
    setIsExporting(true); // 버튼 숨김 처리

    // 🌟 다운로드는 시간이 넉넉하므로 폰트/레이아웃이 자리 잡을 때까지 0.15초 대기
    await new Promise(resolve => setTimeout(resolve, 150));

    try {
      const dataUrl = await toPng(targetNode, { 
        quality: 1.0, 
        pixelRatio: 2, 
        cacheBust: true,
        style: { transform: 'none', transition: 'none' }
      });
      const link = document.createElement('a');
      link.download = `AURA_Look_${new Date().getTime()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) { 
      console.error(error);
      alert('포토카드 캡처 실패. 네트워크나 이미지 정책을 확인해주세요.'); 
    } finally { 
      setIsExporting(false); 
    }
  };

  // 🌟 [NEW] 캡처 대상을 스마트하게 찾는 레이더 함수
  const getCaptureElement = () => {
    // 1순위: 딥다이브 모달이 열려있다면 '현재 보고 있는 면(앞/뒤)'을 정밀 타겟팅
    if (aura.isDetailOpen) return document.getElementById('aura-deepdive-target');
    
    // 2순위: 메인 추천 피드라면 기본 카드를 타겟팅
    if (viewMode === 'recommend') return document.getElementById('aura-main-card');
    
    return null;
  };

  // 🌟 2. 공유 버튼용: 브라우저 타임아웃 차단 우회 엔진
  const sharePhotocard = async () => {
    // 🌟 커스텀 이벤트 추적: 어떤 옷이 제일 많이 공유되는지 기록!
    track('Share_Look', { look_id: currentItem?.id || 'unknown' });
    const targetNode = getCaptureElement();
    if (!targetNode) return alert("공유할 수 있는 카드를 찾을 수 없습니다.");

    aura.triggerHaptic(50);
    setIsExporting(true);

    // 🌟 [핵심 보수] 모바일 브라우저의 '공유 차단'을 막기 위해 대기 시간을 10ms로 극단적 단축!
    await new Promise(resolve => setTimeout(resolve, 10));

    try {
      const dataUrl = await toPng(targetNode, { 
        quality: 0.8, // 🌟 캡처 속도를 올리기 위해 화질을 살짝만 타협
        pixelRatio: 2, 
        cacheBust: true,
        style: { transform: 'none', transition: 'none' }
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
        throw new Error("Device does not support file sharing");
      }
    } catch (err) {
      console.log("공유 시스템 에러(주소 복사로 대체):", err);
      // 공유 창 띄우기에 실패하면 즉시 주소 복사로 대체
      navigator.clipboard.writeText(window.location.href);
      alert(t('share_link_copied'));
    } finally {
      setIsExporting(false);
    }
  };

  if (aura.fashionItems.length === 0) return (
    <div className="flex h-[100dvh] w-screen items-center justify-center bg-black"><div className="h-6 w-6 animate-spin rounded-full border-[3px] border-white/20 border-t-white" /></div>
  );

  const paginate = (newDirection: number) => {
    console.log("🚨 [물리 엔진] 카드가 스와이프 되었습니다! 방향:", newDirection);
    aura.triggerHaptic(40);
    aura.setDirection(newDirection);
    aura.setCurrentIndex((prev) => (prev + newDirection + aura.fashionItems.length) % aura.fashionItems.length);
    setSwipeKey(prev => prev + 1);
    x.set(0);
  };

  // 1. 시스템 로딩 중에는 검은 배경 유지
  if (loading || (aura.user && isApproved === null)) {
    return <div className="min-h-screen bg-black" />;
  }

  // 2. [NEW] 로그인이 안 된 상태 (기존 멤버 재접속 or 신규 유저)
  if (!aura.user) {
    return (
      <main className="relative min-h-screen bg-[#050505] flex flex-col items-center justify-center selection:bg-[#ff3b30] selection:text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
        <div className="relative z-10 text-center">
          <h2 className="text-[10vw] md:text-7xl font-serif italic font-black text-white mb-6 uppercase tracking-tighter mix-blend-difference">Aura.</h2>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-10">
          {t('login_prompt')}
          </p>
          <button 
            onClick={() => aura.setIsLoginModalOpen(true)}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#ff3b30] hover:text-white transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            {t('verify_identity')}
          </button>
        </div>

        {/* 🌟 여기에 로그인 모달을 반드시 렌더링해 주어야 버튼을 눌렀을 때 창이 뜹니다! */}
        <LoginModal 
          isOpen={aura.isLoginModalOpen} 
          onClose={() => aura.setIsLoginModalOpen(false)} 
          onSignIn={(provider) => {
            aura.signIn(provider);
            aura.setIsLoginModalOpen(false);
          }} 
        />
      </main>
    );
  }

  // 3. 로그인은 했지만 승인이 안 된 유저 (초대 코드 입력)
  if (isApproved === false) {
    return (
      <main className="min-h-screen bg-black relative">
        <LockModal isOpen={true} onVerify={verifyCode} />
        
        {/* 🌟 [NEW] 잘못된 구글 계정으로 로그인한 경우를 대비한 탈출(로그아웃) 버튼 */}
        <button 
          onClick={aura.signOut} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-[10px] tracking-[0.3em] uppercase hover:text-white transition-colors z-[9999]"
        >
          {t('switch_account')}
        </button>
      </main>
    );
  }
  return (
    <div 
      onMouseMove={(e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); }} 
      className="relative flex h-[100dvh] w-screen flex-col items-center justify-center overflow-hidden bg-black font-sans selection:bg-white/30"
      style={{ perspective: 1000 }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div key={`bg-${currentItem.id}-${swipeKey}`} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={currentItem.imageUrl} crossOrigin="anonymous" className="h-full w-full object-cover blur-[80px] saturate-150" alt="background blur" />
        </motion.div>
      </AnimatePresence>

      {/* 상단 탭 (모드 전환) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 flex bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
        <button 
          onClick={() => setViewMode('recommend')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${viewMode === 'recommend' ? 'bg-white text-black' : 'text-white/50'}`}
        >
          {t('for_you')}
        </button>
        <button 
          onClick={() => setViewMode('explore')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${viewMode === 'explore' ? 'bg-white text-black' : 'text-white/50'}`}
        >
          {t('explore')}
        </button>
        {/* 매거진 탭 버튼 추가 */}
        <button 
          onClick={() => {
            aura.triggerHaptic(20); // 터치 시 가벼운 진동
            router.push('/magazine'); // 매거진 페이지로 이동!
          }}
          className="px-4 py-1.5 rounded-full text-xs font-bold transition-all text-white/50 hover:text-white"
        >
          {t('magazine')}
        </button>

      </div>


      {/* 🌟 [수정된 핵심 영역] 뷰 모드에 따라 카드와 그리드를 전환합니다. */}
      <main className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {viewMode === 'recommend' ? (
          /* 추천 모드: 기존 3D 카드 */
          <AnimatePresence initial={false} custom={aura.direction} mode="popLayout">
            <FashionCard 
              key={`card-${currentItem.id}-${swipeKey}`}
              item={currentItem}
              aura={aura}
              ref={cardRef}
              rotateX={rotateX}
              rotateY={rotateY}
              imageX={imageX}
              isExporting={isExporting}
              archiveCount={archiveCount}
              x={x}
              paginate={paginate}
              onToggleSave={() => {
                const isCurrentlySaved = aura.savedItems.some(i => String(i.id) === String(currentItem.id));
                aura.toggleArchive(String(currentItem.id));
                setArchiveCount(prev => isCurrentlySaved ? Math.max(0, prev - 1) : prev + 1);
              }}
            />
          </AnimatePresence>
        ) : (
          /* 탐색 모드: 갤러리 그리드 */
          <motion.div 
            key="explore"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 overflow-y-auto bg-[#0A0A0A]" // 배경색 통일
          >
          <div className="w-full h-full overflow-y-auto pt-36 px-6 custom-scrollbar">
            <VibeMatch 
            report={aura.styleReport}
            matchedUsers={aura.matchedUsers}
            />
            <ExploreGrid 
              items={aura.trendingItems} 
              onSelect={(idx) => {
                setExploreSelectedItem(aura.trendingItems[idx]); // 🌟 누른 카드의 데이터를 임시 저장!
                aura.setIsDetailOpen(true); // 🌟 화면 전환 없이 바로 딥다이브 모달 오픈!
                aura.triggerHaptic(20);
              }} 
            />
          </div>
          </motion.div>
        )}
      </main>


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
        
        {/* 🏆 랭킹 버튼 (트로피) 
        <button 
          onClick={() => { aura.triggerHaptic(30); setIsRankingOpen(true); }} 
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" 
          title="명예의 전당"
        >
          <Trophy className="h-5 w-5 text-yellow-400" />
        </button>
        */}
        

        {/* 🌟 쇼핑백 버튼 연결부: 클릭 시 해당 Look의 ID로 DB를 찌른 후, 모달을 엽니다! */}
        <button 
          onClick={() => {
            // 🌟 이미 선언해두신 currentItem을 바로 가져다 씁니다!
            if (currentItem?.id) {
              aura.loadShoppableItems(Number(currentItem.id));
            }
            setIsShopModalOpen(true);
          }}
          className="flex flex-col items-center gap-1 group"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-9">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
          <span className="text-[10px] font-bold text-white/80 drop-shadow-md"></span>
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

      <DynamicIsland weather={aura.localWeather} />

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

      {/* 🌟 [AURA DIRECTIVE] 데일리 날씨 미션 배너 */}
      <AnimatePresence>
        {!isMissionDismissed && viewMode === 'recommend' && aura.localWeather && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.5 }}
            // 🌟 1. 정렬 문제 해결: left-0 right-0 mx-auto로 화면 정중앙에 완벽하게 고정합니다.
            className="absolute bottom-32 left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-md z-40"
          >
            <div 
              onClick={() => setIsUploadModalOpen(true)}
              className="relative overflow-hidden rounded-[2rem] bg-black/60 backdrop-blur-2xl border border-white/10 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group cursor-pointer transition-transform active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* 🌟 2. 닫기 버튼 터치 영역 확장 및 독립성 보장 */}
              <button 
                onClick={(e) => { 
                  e.preventDefault();   // 기본 동작 차단
                  e.stopPropagation();  // 부모(업로드 창)로 클릭이 번지는 것을 완벽 차단
                  setIsMissionDismissed(true); 
                }} 
                // p-4를 주어 실제 눈에 보이는 X보다 터치할 수 있는 영역(Hitbox)을 훨씬 넓게 만들었습니다.
                className="absolute top-1 right-1 p-4 text-white/40 hover:text-white transition-colors z-50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 flex items-center gap-4 pr-8"> {/* pr-8: 텍스트가 X버튼을 침범하지 않게 여백 확보 */}
                {/* 🎯 타겟 아이콘 */}
                <div className="w-12 h-12 shrink-0 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-6 h-6 text-indigo-400" />
                </div>

                {/* 미션 텍스트 정보 */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-black tracking-[0.2em] text-indigo-400 uppercase">Aura Directive</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <span className="text-sm font-black text-white leading-tight uppercase tracking-tight">
                    {aura.localWeather?.temp}°C {aura.localWeather?.condition || "TODAY'S"} VIBE
                  </span>
                  <span className="text-[10px] text-white/50 mt-1 font-bold leading-snug">
                    {t('mission_desc')}
                  </span>
                </div>

                {/* 카메라 진입 버튼 */}
                <div className="w-10 h-10 shrink-0 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors hidden sm:flex">
                  <Camera className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🛡️ Gatekeeper 모달: 승인되지 않았을 때만 열림 */}
      <LockModal 
        isOpen={!isApproved} 
        onVerify={verifyCode} 
      />

      {/* 3. 하단 도크 */}
      <FloatingDock 
        showGyroButton={showGyroButton}
        onRequestGyro={requestGyroPermission}
        onUpload={() => setIsUploadModalOpen(true)}
        onExport={exportPhotocard}
        onOpenMenu={() => setIsActionMenuOpen(true)}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        isExporting={isExporting}
        isAdmin={isAdmin}
      />

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
          unsubscribeFromPush={aura.unsubscribeFromPush || (() => {})} 
          sendTestPush={aura.sendTestPush || (() => {})} 
          isPushEnabled={aura.isPushEnabled} // 🌟 [NEW] 구독 상태 전달!
        />
      )}

      {/* 🌟 딥다이브(상세보기) 모달 복원 완.벽. */}
      <DeepDiveModal 
        isOpen={aura.isDetailOpen} 
        onClose={() => {
          aura.setIsDetailOpen(false);
          setTimeout(() => setExploreSelectedItem(null), 500); 
        }} 
        // 🌟 currentItem 뒤에 느낌표(!) 추가
        item={exploreSelectedItem || currentItem!} 
        triggerHaptic={aura.triggerHaptic} 
      />

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

      <ShopModal 
        isOpen={isShopModalOpen} 
        onClose={() => setIsShopModalOpen(false)} 
        lookTitle="AURA NO.1 VIBE" 
        items={aura.shoppableItems}
      />

      <ProfileModal 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
        user={aura.user} 
        onLogout={aura.signOut} 
        uploadedCount={aura.uploadedItems.length} 
        bestLook={aura.uploadedItems[0]}
        onSaveInstagram={aura.saveInstagram}
        onOpenReport={() => setIsReportOpen(true)}
      />
      <MyAuraReport 
        isOpen={isReportOpen} 
        onClose={() => setIsReportOpen(false)} 
        report={aura.styleReport} 
        user={aura.user}
      />
      {/* 🌟 강력한 리텐션 유도 컴포넌트들 */}
      <TutorialOverlay />
      <InstallPrompt />
    </div>
  );
}
