# 🧠 Deep Context Snapshot

**Generated at:** 2026-02-15 11:40:24
**Project:** aura-v2 (0.1.0)
**Tech Stack:** Next.js, React, Tailwind CSS, Supabase, Framer Motion

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
**Total Files Scanned:** 25

```text
.
│   ├── vercel.json
│   ├── next-env.d.ts
│   ├── tailwind.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .eslintrc.json
│   app/
│   │   ├── layout.tsx
│   │   ├── manifest.ts
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   components/
│   │   │   ├── LoginModal.tsx
│   │   │   ├── ArchiveModal.tsx
│   │   │   ├── ActionMenuModal.tsx
│   │   │   ├── ShareButton.tsx
│   │   │   ├── AdminModal.tsx
│   │   │   ├── UploadModal.tsx
│   │   api/
│   │   │   fashion/
│   │   │   │   ├── route.ts
│   │   │   push/
│   │   │   │   ├── route.ts
│   │   │   upload/
│   │   │   │   ├── route.ts
│   │   │   cron/
│   │   │   │   ├── route.ts
│   │   fonts/
│   images/
│   public/
│   │   ├── manifest.json
│   │   ├── sw.js
│   hooks/
│   │   ├── useAura.ts
│   lib/
│   │   ├── recommendation.ts
│   │   ├── supabase.ts
```

---

## 💻 Source Details

        ### 📄 vercel.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
    "crons": [
      {
        "path": "/api/cron",
        "schedule": "0 22 * * *"
      }
    ]
  }
        ### 📄 next-env.d.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        /// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

        ### 📄 tailwind.config.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

        ### 📄 package.json
        > **Context Summary**
        * 📦 **Package Config** (See Project Overview)

        ```json
        {
  "name": "aura-v2",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@google/generative-ai": "^0.24.1",
    "@supabase/supabase-js": "^2.95.3",
    "@vercel/analytics": "^1.6.1",
    "@vercel/speed-insights": "^1.3.1",
    "dotenv": "^17.3.1",
    "framer-motion": "^12.34.0",
    "googleapis": "^171.4.0",
    "html-to-image": "^1.11.13",
    "lucide-react": "^0.564.0",
    "next": "14.2.35",
    "react": "^18",
    "react-dom": "^18",
    "web-push": "^3.6.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/web-push": "^3.6.4",
    "eslint": "^8",
    "eslint-config-next": "14.2.35",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

        ### 📄 tsconfig.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

        ### 📄 .eslintrc.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
  "extends": ["next/core-web-vitals", "next/typescript"]
}

        ### 📄 app/layout.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@vercel/analytics/react, @vercel/speed-insights/next, next/font/google`
* 🧩 **Component (Default):** `RootLayout`

        ```typescript
        // app/layout.tsx 파일 상단
import type { Metadata, Viewport } from "next"; // 🌟 Viewport 임포트 추가
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
// 🌟 2. Inter 폰트 초기화
const inter = Inter({ subsets: ["latin"] });
// 1. 순수한 메타데이터 (기존 코드에서 themeColor 뺌)
export const metadata: Metadata = {
  title: "AURA | Ambient Lookbook",
  description: "AI 기반 초개인화 날씨 맞춤 룩북",
  manifest: "/manifest.json",
};

// 2. 🌟 뷰포트 설정 분리 (Next.js 최신 규격 반영)
export const viewport: Viewport = {
  themeColor: "#1c1c1e",
  // 💡 아키텍트의 보너스: 모바일에서 웹페이지처럼 줌(Zoom)되는 현상을 막아 완벽한 앱처럼 보이게 만듭니다.
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* 🌟 기존 children 아래에 레이더 컴포넌트를 달아줍니다! */}
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

        ### 📄 app/manifest.ts
        > **Context Summary**
        * 🔗 **Imports:** `next`
* 🧩 **Component (Default):** `manifest`

        ```ts
        import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AURA Lookbook',
    short_name: 'AURA', // 🌟 스마트폰 바탕화면에 표시될 깔끔한 이름
    description: '나만을 위한 공간 스타일리스트',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
    ],
  };
}
        ### 📄 app/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, html-to-image`
* 🧩 **Component (Default):** `Home`
* ww **Hooks:** `useTransform, useEffect, useState, useAura, useMotionValue`

        ```typescript
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
        ### 📄 app/globals.css
        > **Context Summary**
        * (No structural elements detected)

        ```css
        @tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

        ### 📄 app/components/LoginModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `LoginModal`

        ```typescript
        // components/LoginModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (provider: 'google' | 'github' | 'kakao' | 'twitter') => void;
}

export default function LoginModal({ isOpen, onClose, onSignIn }: LoginModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-[#1c1c1e]/90 p-8 shadow-2xl backdrop-blur-2xl">
            <button onClick={onClose} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors"><X className="h-5 w-5" /></button>
            
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Join AURA</h2>
              <p className="text-sm text-white/50">로그인하고 나만의 옷장을 만드세요.</p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Google */}
              <button onClick={() => onSignIn('google')} className="flex items-center justify-center gap-3 rounded-xl bg-white p-4 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95">
                <GoogleIcon /><span>Continue with Google</span>
              </button>
              {/* Kakao */}
              <button onClick={() => onSignIn('kakao')} className="flex items-center justify-center gap-3 rounded-xl bg-[#FEE500] p-4 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95">
              <KakaoIcon /><span>Continue with Kakao</span>
              </button>
              {/* GitHub */}
              <button onClick={() => onSignIn('github')} className="flex items-center justify-center gap-3 rounded-xl bg-[#24292E] p-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 border border-white/10">
                <GithubIcon /><span>Continue with GitHub</span>
              </button>
              {/* X (Twitter) */}
              <button onClick={() => onSignIn('twitter')} className="flex items-center justify-center gap-3 rounded-xl bg-black p-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 border border-white/20">
               <XIcon /><span>Continue with X</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Icons (유지) ---
const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
);
const KakaoIcon = () => (
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.58 3 4 5.79 4 9.24c0 2.21 1.48 4.18 3.73 5.3l-.74 2.74c-.06.22.18.41.37.29l3.17-2.11c.48.06.97.09 1.47.09 4.42 0 8-2.79 8-6.24C20 5.79 16.42 3 12 3z" /></svg>
);
const XIcon = () => (
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const GithubIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
);
        ### 📄 app/components/ArchiveModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `ArchiveModal`

        ```typescript
        // components/ArchiveModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  archiveData: FashionItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

const appleSpring = { type: "spring" as const, stiffness: 300, damping: 25 };

export default function ArchiveModal({ isOpen, onClose, archiveData, searchQuery, setSearchQuery, triggerHaptic }: ArchiveModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { triggerHaptic(20); onClose(); }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={appleSpring} className="fixed bottom-0 left-0 right-0 z-50 flex h-[90vh] flex-col rounded-t-[32px] bg-[#1c1c1e] shadow-2xl md:h-[80vh]">
            <div className="flex w-full cursor-grab justify-center pb-4 pt-3"><div className="h-1.5 w-12 rounded-full bg-white/20" /></div>
            
            <div className="flex flex-col border-b border-white/5 px-8 pb-4 md:px-12">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Archive</h2>
                  <p className="mt-1 text-sm text-white/50">{archiveData.length} looks found</p>
                </div>
                <button onClick={() => { triggerHaptic(20); onClose(); }} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 active:scale-95"><X className="h-5 w-5 text-white/80" /></button>
              </div>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" placeholder="비 오는 날, 더운 날, OOTD..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:bg-white/10 transition-colors"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 pb-20 pt-6 md:px-12">
              {archiveData.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-white/30"><Search className="mb-4 h-12 w-12 opacity-50" strokeWidth={1} /><p>검색 조건에 맞는 룩이 없습니다.</p></div>
              ) : (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
                  {archiveData.map((item) => (
                    <div key={`saved-${item.id}`} className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer">
                      <img src={item.imageUrl} crossOrigin="anonymous" alt="Saved look" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sm font-medium text-white">{item.weather} {item.temperature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/ActionMenuModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `ActionMenuModal`

        ```typescript
        // components/ActionMenuModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Bell, Send, ShoppingCart } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";

interface ActionMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FashionItem;
  onShare: () => void;
  subscribeToPush: () => void;
  sendTestPush: () => void;
}

export default function ActionMenuModal({ isOpen, onClose, item, onShare, subscribeToPush, sendTestPush }: ActionMenuModalProps) {
  // 🌟 쇼핑몰 검색 이동 함수 추가
  const handleShopNow = () => {
    if (!item || !item.tags) return;
    const query = encodeURIComponent(item.tags.map(t => t.replace('#', '')).join(' '));
    const shopUrl = `https://www.musinsa.com/search/musinsa/integration?q=${query}`;
    window.open(shopUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed bottom-0 left-0 right-0 z-[101] rounded-t-3xl border-t border-white/20 bg-[#1c1c1e]/95 p-6 pb-12 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
            <div className="mx-auto mb-8 h-1.5 w-12 rounded-full bg-white/20" />
            
            <div className="flex flex-col gap-3">
              {/* 🌟 1. 공유 버튼 (누르면 포토카드를 캡처해서 보냄) */}
              <button 
                onClick={() => { onShare(); onClose(); }} 
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Share2 className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">이 룩 공유하기</span>
                  <span className="text-[12px] text-white/50">룩북 이미지를 카카오톡/인스타로 전송</span>
                </div>
              </button>

              {/* 🌟 쇼핑하기 버튼 */}
              <button 
                onClick={handleShopNow} 
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95 border border-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"><ShoppingCart className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">이 스타일 쇼핑하기</span>
                  <span className="text-[12px] text-white/50">무신사에서 비슷한 옷 검색</span>
                </div>
              </button>

              <button onClick={() => { subscribeToPush(); onClose(); }} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Bell className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">모닝 푸시 알림 켜기</span>
                  <span className="text-[12px] text-white/50">매일 아침 날씨 맞춤 룩 받아보기</span>
                </div>
              </button>

              {process.env.NODE_ENV === 'development' && (
                <button onClick={() => { sendTestPush(); onClose(); }} className="flex items-center gap-4 rounded-2xl bg-emerald-500/10 p-4 text-emerald-400 transition-all hover:bg-emerald-500/20 active:scale-95">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20"><Send className="h-5 w-5" /></div>
                  <span className="text-[15px] font-bold">알림 테스트 발송 (Dev)</span>
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/ShareButton.tsx
        > **Context Summary**
        * 🔗 **Imports:** `lucide-react`
* 🧩 **Component (Default):** `ShareButton`

        ```typescript
        import { Share2 } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";

interface ShareButtonProps {
  item: FashionItem;
}

export default function ShareButton({ item }: ShareButtonProps) {
  const handleShare = async () => {
    const shareData = {
      title: "AURA: 오늘의 추천 룩 🌤️",
      text: `AURA가 추천하는 날씨 맞춤 룩을 확인해보세요! 태그: ${item.tags.join(', ')}`,
      url: window.location.href, // 현재 접속 중인 Vercel 주소
    };

    try {
      if (navigator.share) {
        // 스마트폰 네이티브 공유창 띄우기 (카카오톡, 인스타, 메시지 등)
        await navigator.share(shareData);
      } else {
        // PC 등에서 지원 안 할 경우 클립보드 복사
        await navigator.clipboard.writeText(shareData.url);
        alert("링크가 클립보드에 복사되었습니다. 친구에게 공유해보세요!");
      }
    } catch (err) {
      console.log("공유가 취소되었거나 실패했습니다.", err);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-[14px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
    >
      <Share2 className="h-4 w-4" /> Share Look
    </button>
  );
}
        ### 📄 app/components/AdminModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, react`
* 🧩 **Component (Default):** `AdminModal`
* ww **Hooks:** `useEffect, useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        // components/AdminModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Crown, Activity, Image as ImageIcon, Heart, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

export default function AdminModal({ isOpen, onClose, triggerHaptic }: AdminModalProps) {
  const [stats, setStats] = useState({ items: 0, saves: 0 });
  const [pushMessage, setPushMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // 🌟 관리자 창이 열릴 때마다 실시간 DB 통계를 긁어옵니다.
  useEffect(() => {
    if (isOpen) {
      const fetchStats = async () => {
        const { count: itemsCount } = await supabase.from('aura_fashion_items').select('*', { count: 'exact', head: true });
        const { count: savesCount } = await supabase.from('aura_saved_looks').select('*', { count: 'exact', head: true });
        setStats({ items: itemsCount || 0, saves: savesCount || 0 });
      };
      fetchStats();
    }
  }, [isOpen]);

  // 🌟 (진짜 엔진) 전체 유저에게 푸시 알림 쏘기
  const handleBroadcastPush = async () => {
    if (!pushMessage.trim()) return;
    
    const confirmSend = window.confirm(`전체 유저에게 "${pushMessage}" 메시지를 발송하시겠습니까?`);
    if (!confirmSend) return;

    triggerHaptic(50);
    setIsSending(true);
    
    try {
      // 1. Supabase에서 알림을 구독한 모든 유저의 ID를 가져옵니다.
      const { data: subscribers } = await supabase.from('aura_push_subscriptions').select('user_id');
      
      if (!subscribers || subscribers.length === 0) {
        alert("알림을 구독한 유저가 없습니다.");
        setIsSending(false);
        return;
      }

      // 2. 모든 유저에게 푸시를 쏘도록 백엔드 API(/api/push) 반복 호출 
      // (💡 실제 상용화 시에는 한 번의 API 호출로 처리하는 /api/broadcast 라우트를 만드는 것이 좋습니다)
      const pushPromises = subscribers.map(sub => 
        fetch('/api/push', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: sub.user_id,
            title: "AURA CEO 알림 👑",
            body: pushMessage
          })
        })
      );

      await Promise.all(pushPromises);
      
      alert(`[SYSTEM] 발송 완료! 총 ${subscribers.length}명의 유저에게 푸시 알림이 전송되었습니다.`);
      setPushMessage("");

    } catch (error) {
      console.error(error);
      alert("푸시 발송 중 오류가 발생했습니다.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" />
          
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed bottom-0 left-0 right-0 z-[101] flex h-[85vh] flex-col rounded-t-[32px] bg-gradient-to-b from-[#2a2a2c] to-[#1c1c1e] shadow-[0_-10px_50px_rgba(0,0,0,0.8)] border-t border-yellow-500/20">
            <div className="flex w-full justify-center pb-6 pt-4"><div className="h-1.5 w-12 rounded-full bg-white/20" /></div>
            
            <div className="flex items-center justify-between px-8 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200 flex items-center gap-2">
                  <Crown className="w-6 h-6 text-yellow-400"/> CEO Dashboard
                </h2>
                <p className="text-sm text-white/50 mt-1">AURA 글로벌 관제탑에 오신 것을 환영합니다.</p>
              </div>
              <button onClick={onClose} className="rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 active:scale-90 transition-all"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">
              {/* 1. 실시간 통계 (Real-time Stats) */}
              <section>
                <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2"><Activity className="w-4 h-4"/> System Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col bg-white/5 rounded-2xl p-6 border border-white/10">
                    <ImageIcon className="w-6 h-6 text-blue-400 mb-2" />
                    <span className="text-3xl font-bold text-white">{stats.items}</span>
                    <span className="text-xs text-white/50 mt-1">Total Looks in DB</span>
                  </div>
                  <div className="flex flex-col bg-white/5 rounded-2xl p-6 border border-white/10">
                    <Heart className="w-6 h-6 text-rose-400 mb-2" />
                    <span className="text-3xl font-bold text-white">{stats.saves}</span>
                    <span className="text-xs text-white/50 mt-1">Total Saved Actions</span>
                  </div>
                </div>
              </section>

              {/* 2. 전파 통신망 (Broadcast Push) */}
              <section>
                <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2"><Send className="w-4 h-4"/> Broadcast Message</h3>
                <div className="flex flex-col gap-3 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <textarea 
                    value={pushMessage}
                    onChange={(e) => setPushMessage(e.target.value)}
                    placeholder="전체 유저에게 보낼 푸시 알림 내용을 입력하세요. (예: 오늘 비가 옵니다! 우산 챙기세요 ☔️)"
                    className="w-full h-24 bg-black/50 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 resize-none transition-colors"
                  />
                  <button 
                    onClick={handleBroadcastPush}
                    disabled={isSending || !pushMessage.trim()}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
                  >
                    {isSending ? "발송 중..." : "🚀 전체 유저에게 발송하기"}
                  </button>
                </div>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/UploadModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, react`
* 🧩 **Component (Default):** `UploadModal`
* ww **Hooks:** `useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        // components/UploadModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud, Sparkles, Loader2 } from "lucide-react";
import { useState, useRef } from "react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

export default function UploadModal({ isOpen, onClose, triggerHaptic }: UploadModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 파일 선택 시 미리보기 생성
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      triggerHaptic(20);
    }
  };

  // 🌟 (진짜 엔진) 사진을 백엔드 API로 전송하고 결과를 기다리는 함수
  const handleUpload = async () => {
    if (!selectedFile) return;
    triggerHaptic(50);
    setIsUploading(true);
    
    try {
      // 1. 사진을 택배 상자(FormData)에 포장
      const formData = new FormData();
      formData.append('image', selectedFile);

      // 2. 우리가 만든 백엔드 API로 전송
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const result = await res.json();
      
      if (!res.ok) throw new Error(result.error || "업로드 실패");

      // 3. 성공 시 축하 알림 및 화면 새로고침 (피드에 즉시 반영)
      triggerHaptic([50, 100, 50]);
      alert(`✨ 성공! AI 분석 완료:\n날씨: ${result.item.weather}\n태그: ${result.item.tags.join(', ')}`);
      
      // 모달 닫기 및 초기화 후 새로고침
      onClose();
      setSelectedFile(null);
      setPreviewUrl(null);
      window.location.reload(); // 새로고침하여 앱 메인 화면에 내 옷이 뜨게 만듭니다!

    } catch (error) {
      const msg = error instanceof Error ? error.message : "업로드 실패";
      alert(`에러가 발생했습니다: ${msg}`);
      setIsUploading(false);
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md" />
          
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed bottom-0 left-0 right-0 z-[101] flex h-[85vh] flex-col rounded-t-[32px] bg-[#1c1c1e] shadow-[0_-10px_50px_rgba(0,0,0,0.5)]">
            <div className="flex w-full justify-center pb-6 pt-4"><div className="h-1.5 w-12 rounded-full bg-white/20" /></div>
            
            <div className="flex items-center justify-between px-8 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Sparkles className="w-5 h-5 text-amber-300"/> Add to Lookbook</h2>
                <p className="text-sm text-white/50 mt-1">AI가 사진을 분석하여 날씨와 태그를 자동 부여합니다.</p>
              </div>
              <button onClick={onClose} className="rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 active:scale-90 transition-all"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center">
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
              
              {!previewUrl ? (
                <button onClick={() => fileInputRef.current?.click()} className="flex w-full max-w-sm flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-white/20 bg-white/5 py-16 transition-all hover:bg-white/10 hover:border-white/40 active:scale-95">
                  <div className="rounded-full bg-white/10 p-4"><UploadCloud className="w-8 h-8 text-white/80" /></div>
                  <div className="text-center">
                    <span className="font-bold text-white">사진 선택하기</span>
                    <p className="text-xs text-white/50 mt-1">내 옷장의 옷을 찍어 올려보세요</p>
                  </div>
                </button>
              ) : (
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  <button onClick={() => { setPreviewUrl(null); setSelectedFile(null); }} className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white backdrop-blur-md hover:bg-black/70 transition-all"><X className="w-4 h-4" /></button>
                </div>
              )}

              {previewUrl && (
                <button onClick={handleUpload} disabled={isUploading} className="mt-8 flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-white py-4 text-[16px] font-bold text-black transition-all hover:bg-white/90 active:scale-95 disabled:opacity-50">
                  {isUploading ? <><Loader2 className="w-5 h-5 animate-spin" /> AI Analyzing...</> : "✨ AI 분석 및 등록하기"}
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/api/fashion/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `@supabase/supabase-js, next/server`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    // 키가 없으면 에러 대신 빈 배열을 던져서 앱 크래시 방지
    if (!supabaseUrl || !supabaseKey) return NextResponse.json([]);

    const supabase = createClient(supabaseUrl, supabaseKey);

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
      tags: Array.isArray(item.tags) ? item.tags : [], // 태그가 깨져도 무조건 배열로 보장
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Supabase Error:", error);
    return NextResponse.json([]); // 최악의 경우에도 앱은 켜지도록 방어
  }
}
        ### 📄 app/api/push/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, web-push, @supabase/supabase-js`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/push/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

// 🌟 1. Supabase 관리자 권한 연결
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 🌟 2. VAPID 키 세팅 (이메일은 본인 이메일 아무거나 적으시면 됩니다)
webpush.setVapidDetails(
  'mailto:aura-admin@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: Request) {
  try {
    const { userId, title, body } = await req.json();

    // 1. Supabase 명부에서 해당 유저의 스마트폰 주소(Subscription) 찾기
    const { data, error } = await supabase
      .from('aura_push_subscriptions')
      .select('subscription')
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: '구독 정보를 찾을 수 없습니다.' }, { status: 404 });
    }

    // 2. 구글/애플 서버를 향해 푸시 알림 발사! 🚀
    await webpush.sendNotification(
      data.subscription,
      JSON.stringify({ title, body, url: '/' })
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Push Error:', error);
    return NextResponse.json({ error: '푸시 발송 실패' }, { status: 500 });
  }
}
        ### 📄 app/api/upload/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @supabase/supabase-js, @google/generative-ai`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/upload/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 1. 클라우드 및 AI 연결
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    // 1. 프론트엔드에서 보낸 파일(사진) 꺼내기
    const formData = await req.formData();
    const file = formData.get('image') as File;
    if (!file) throw new Error("파일이 없습니다.");

    // 2. 파일을 버퍼(Buffer)로 변환
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 3. Supabase Storage(창고)에 사진 업로드
    const fileName = `user_uploads/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const { error: uploadError } = await supabase.storage
      .from('aura_images')
      .upload(fileName, buffer, { contentType: file.type });
    
    if (uploadError) throw uploadError;

    // 업로드된 사진의 영구 접속 주소 획득
    const { data: { publicUrl } } = supabase.storage.from('aura_images').getPublicUrl(fileName);

    // 4. 🌟 Gemini Vision AI 호출 (이미지 분석 지시)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    const prompt = `
      당신은 세계 최고의 패션 디렉터입니다. 사진의 옷을 분석하여 아래 JSON 형식으로만 완벽하게 대답해주세요. 다른 말은 절대 하지마. 마크다운(\`\`\`json 등)은 절대 포함하지 마세요.
        {
          "weather": "어울리는 날씨 이모지 1개 (☀️, ☁️, ☔️, ❄️ 중 택 1)",
          "temperature": "어울리는 온도 (예: 15°C, 28°C 등)",
          "tags": ["스타일 태그1", "스타일 태그2", "스타일 태그3"]
        }
    `;

    // 이미지를 AI가 읽을 수 있는 Base64 형태로 변환
    const base64Data = buffer.toString("base64");
    const imagePart = { inlineData: { data: base64Data, mimeType: file.type } };

    // AI 격발!
    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text().trim().replace(/```json/g, '').replace(/```/g, '');
    const aiData = JSON.parse(responseText);

    // 5. AI가 분석한 데이터를 Supabase DB(aura_fashion_items)에 저장
    const { data: dbItem, error: dbError } = await supabase
      .from('aura_fashion_items')
      .insert([{
        image_url: publicUrl,
        weather: aiData.weather,
        temperature: aiData.temperature,
        tags: aiData.tags
      }])
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({ success: true, item: dbItem });

  } catch (error) { // 🌟 ': any'를 지웁니다!
    console.error("Upload/AI Error:", error);
    // 🌟 Error 객체인지 확인하고 안전하게 메시지를 뽑아냅니다.
    const errorMessage = error instanceof Error ? error.message : "알 수 없는 에러가 발생했습니다.";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
        ### 📄 app/api/cron/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, web-push, @supabase/supabase-js`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/cron/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

webpush.setVapidDetails(
  'mailto:aura-admin@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function GET() {
  try {
    // 1. Supabase 명부에서 알림을 허락한 '모든 유저'의 주소 가져오기
    const { data: subscriptions, error } = await supabase
      .from('aura_push_subscriptions')
      .select('subscription');

    if (error || !subscriptions) throw error;

    // 2. 아침에 보낼 메시지 작성 (추후 날씨 API를 붙이면 더 완벽해집니다)
    const payload = JSON.stringify({
      title: "AURA 모닝 브리핑 🌤️",
      body: "좋은 아침입니다! 오늘 날씨에 어울리는 완벽한 룩이 준비되었습니다.",
      url: '/'
    });

    // 3. 모든 유저에게 동시다발적으로 알림 쏘기 (Promise.all로 빛의 속도로 처리)
    const sendPromises = subscriptions.map((sub) =>
      webpush.sendNotification(sub.subscription, payload).catch((e) => console.error("발송 실패:", e))
    );

    await Promise.all(sendPromises);

    return NextResponse.json({ success: true, sentCount: subscriptions.length });
  } catch (error) {
    console.error('Cron Error:', error);
    return NextResponse.json({ error: '크론 발송 실패' }, { status: 500 });
  }
}
        ### 📄 public/manifest.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
    "name": "AURA Lookbook",
    "short_name": "AURA",
    "description": "AI-Powered Ambient Lookbook",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#1c1c1e",
    "theme_color": "#1c1c1e",
    "icons": [
      {
        "src": "/icon.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icon.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  }
        ### 📄 public/sw.js
        > **Context Summary**
        * (No structural elements detected)

        ```js
        // public/sw.js
self.addEventListener('push', function (event) {
    if (event.data) {
      const data = event.data.json();
      const options = {
        body: data.body,
        icon: '/icon.png', // 앱 아이콘 (나중에 public 폴더에 추가하면 됩니다)
        badge: '/icon.png',
        vibrate: [100, 50, 100], // 징-징- 진동 패턴
        data: { url: data.url || '/' },
      };
      
      // 알림을 잠금화면에 띄웁니다!
      event.waitUntil(self.registration.showNotification(data.title, options));
    }
  });
  
  self.addEventListener('notificationclick', function (event) {
    event.notification.close(); // 알림을 누르면 알림창 닫기
    event.waitUntil(clients.openWindow(event.notification.data.url)); // AURA 앱 열기
  });
        ### 📄 hooks/useAura.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `FashionItem`
* wf **Function:** `useAura`
* ww **Hooks:** `useEffect, useState, useMemo, useAura`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // hooks/useAura.ts
import { useState, useEffect, useRef, useMemo } from "react";
import { supabase } from "../lib/supabase"; 
import { getPersonalizedFeed } from "../lib/recommendation"; 

export interface FashionItem {
  id: string | number;
  imageUrl: string;
  weather: string;
  temperature: string;
  tags: string[];
}

const sounds = {
  sunny: "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3",
  rain: "https://assets.mixkit.co/active_storage/sfx/2391/2391-preview.mp3",
  default: "https://assets.mixkit.co/active_storage/sfx/123/123-preview.mp3",
};

export function useAura() {
  const [user, setUser] = useState<any>(null);

  // 🌟 [핵심 변경] 원본 데이터 캐싱용 상태 추가
  const [rawItems, setRawItems] = useState<FashionItem[]>([]); 
  const [fashionItems, setFashionItems] = useState<FashionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const [savedItems, setSavedItems] = useState<FashionItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [localWeather, setLocalWeather] = useState<{ temp: number; city: string } | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const triggerHaptic = (pattern: number | number[] = 50) => {
    if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(pattern);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchSavedLooks(session.user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchSavedLooks(session.user.id);
      else setSavedItems([]); 
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchSavedLooks = async (userId: string) => {
    const { data, error } = await supabase
      .from('aura_saved_looks')
      .select('look_id, aura_fashion_items(*)')
      .eq('user_id', userId);
      
    if (!error && data) {
      const looks = data.map((d: any) => ({
        id: d.aura_fashion_items.id,
        imageUrl: d.aura_fashion_items.image_url,
        weather: d.aura_fashion_items.weather,
        temperature: d.aura_fashion_items.temperature,
        tags: d.aura_fashion_items.tags,
      }));
      setSavedItems(looks);
    }
  };

  const signIn = async (provider: 'google' | 'github' | 'kakao' | 'twitter') => {
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: { redirectTo: typeof window !== "undefined" ? window.location.origin : "/" }
    });
  };

  const signOut = async () => { await supabase.auth.signOut(); };

  // 🌟 [최적화 1] 네트워크 호출은 무조건 앱 켤 때 1번만 수행
  useEffect(() => {
    const fetchWeatherAndData = async () => {
      let currentTemp = 15; let currentCity = "Seoul";

      try {
        if ("geolocation" in navigator) {
          const pos = await new Promise<GeolocationPosition>((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`);
          const weatherData = await weatherRes.json();
          currentTemp = weatherData.current_weather.temperature; currentCity = "Current Location";
        }
      } catch (e) { console.warn("위치 권한 없음. 기본 날씨를 사용합니다."); }
      
      setLocalWeather({ temp: currentTemp, city: currentCity });

      try {
        const response = await fetch(`/api/fashion?timestamp=${new Date().getTime()}`, { 
          cache: 'no-store', headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
        });
        const data: FashionItem[] = await response.json();
        setRawItems(data); // 데이터 다운로드는 여기서 끝! 원본 저장.
      } catch (error) { console.error("데이터 로드 실패:", error); }
    };
    fetchWeatherAndData();
  }, []); // 의존성 배열을 비워서 무한 호출 차단

  // 🌟 [최적화 2] 하트를 누를 때마다 '로컬 연산'으로만 피드 재정렬 (서버 부하 제로)
  useEffect(() => {
    if (rawItems.length === 0) return;
    const personalizedData = getPersonalizedFeed(rawItems, savedItems, localWeather?.temp || 15);
    setFashionItems(personalizedData);
  }, [rawItems, savedItems.length, localWeather?.temp]); 

  // 오디오 제어
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isDetailOpen && fashionItems.length > 0) {
      const weather = fashionItems[currentIndex]?.weather || "";
      let soundUrl = sounds.default;
      if (weather.includes("☀️")) soundUrl = sounds.sunny;
      if (weather.includes("☔️") || weather.includes("🌧")) soundUrl = sounds.rain;

      if (!audioRef.current) { audioRef.current = new Audio(soundUrl); audioRef.current.loop = true; } 
      else { audioRef.current.src = soundUrl; }
      
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        let vol = 0; const fade = setInterval(() => { if (vol < 0.3 && audioRef.current) { vol += 0.05; audioRef.current.volume = vol; } else clearInterval(fade); }, 100);
      }).catch(e => console.log("오디오 자동 재생 제한"));
    } else if (audioRef.current) {
      let vol = audioRef.current.volume;
      const fade = setInterval(() => { if (vol > 0.05 && audioRef.current) { vol -= 0.05; audioRef.current.volume = vol; } else { clearInterval(fade); if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; } } }, 50);
    }
  }, [isDetailOpen, currentIndex, fashionItems]);

  const filteredArchive = useMemo(() => {
    if (!searchQuery) return savedItems;
    const lowerQ = searchQuery.toLowerCase();
    return savedItems.filter(item => {
      const isRain = lowerQ.includes("비") || lowerQ.includes("rain");
      const isSunny = lowerQ.includes("맑") || lowerQ.includes("해") || lowerQ.includes("sun");
      const tempValue = parseInt(item.temperature.replace(/[^0-9.-]+/g, "")) || 20;

      if (isRain && (item.weather.includes("☔️") || item.weather.includes("🌧"))) return true;
      if (isSunny && item.weather.includes("☀️")) return true;
      if (lowerQ.includes("더") && tempValue >= 25) return true;
      if (lowerQ.includes("추") && tempValue <= 10) return true;
      
      return item.tags.some(tag => tag.toLowerCase().includes(lowerQ)) || item.temperature.includes(lowerQ);
    });
  }, [searchQuery, savedItems]);

  const subscribeToPush = async () => {
    if (!user) { alert("알림을 받으려면 먼저 로그인해주세요!"); return setIsLoginModalOpen(true); }
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return alert("이 브라우저는 푸시 알림을 지원하지 않습니다.");

    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') throw new Error("알림 권한이 거부되었습니다.");

      const register = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;

      const publicVapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!;
      const padding = '='.repeat((4 - publicVapidKey.length % 4) % 4);
      const base64 = (publicVapidKey + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) { outputArray[i] = rawData.charCodeAt(i); }

      const subscription = await register.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: outputArray });

      const { error } = await supabase.from('aura_push_subscriptions').upsert({ user_id: user.id, subscription: subscription }, { onConflict: 'user_id' });
      if (error) throw error;
      
      triggerHaptic([50, 100, 50]);
      alert("✅ 모닝 알림 구독이 완료되었습니다!");
    } catch (error) { console.error("푸시 구독 실패:", error); alert("알림 설정에 실패했습니다."); }
  };

  const sendTestPush = async () => {
    if (!user) return;
    try {
      // 🌟 [최적화 3] 실제 위치와 날씨를 반영한 다이내믹 푸시 알림
      const temp = localWeather?.temp || 15;
      const city = localWeather?.city || "Seoul";
      const weatherIcon = temp > 20 ? "☀️" : "☔️";

      await fetch('/api/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userId: user.id, 
          title: "AURA 모닝 알림 🌤️", 
          body: `오늘 ${city} ${temp}°C ${weatherIcon}, AURA가 추천하는 당신만의 룩을 확인하세요.` 
        })
      });
    } catch (e) { console.error(e); }
  };

  return {
    user, signIn, signOut,
    isLoginModalOpen, setIsLoginModalOpen,
    fashionItems, currentIndex, setCurrentIndex, direction, setDirection,
    savedItems, setSavedItems,
    isModalOpen, setIsModalOpen,
    isDetailOpen, setIsDetailOpen,
    searchQuery, setSearchQuery,
    localWeather, filteredArchive, triggerHaptic,
    subscribeToPush, sendTestPush
  };
}
        ### 📄 lib/recommendation.ts
        > **Context Summary**
        * wf **Function:** `getPersonalizedFeed`

        ```ts
        import { FashionItem } from "../hooks/useAura";

export function getPersonalizedFeed(
  allItems: FashionItem[], 
  savedItems: FashionItem[], 
  currentTemp: number
): FashionItem[] {
  // 1. 유저의 취향(태그) 학습: 하트를 누른 옷들에서 가장 많이 등장한 태그 추출
  const userPreferences: Record<string, number> = {};
  savedItems.forEach(item => {
    item.tags.forEach(tag => {
      userPreferences[tag] = (userPreferences[tag] || 0) + 1;
    });
  });

  // 2. 점수(Score) 기반 정렬 알고리즘
  return [...allItems].sort((a, b) => {
    // 🌡️ 날씨 적합도 점수 (현재 온도와의 차이가 적을수록 높은 점수)
    const tempA = parseInt(a.temperature.replace(/[^0-9.-]+/g, "")) || 20;
    const tempB = parseInt(b.temperature.replace(/[^0-9.-]+/g, "")) || 20;
    const weatherScoreA = 100 - Math.abs(tempA - currentTemp) * 5;
    const weatherScoreB = 100 - Math.abs(tempB - currentTemp) * 5;

    // 💖 취향 적합도 점수 (유저가 좋아하는 태그가 몇 개나 포함되어 있는지)
    let tasteScoreA = 0;
    let tasteScoreB = 0;
    a.tags.forEach(tag => { if (userPreferences[tag]) tasteScoreA += userPreferences[tag] * 10; });
    b.tags.forEach(tag => { if (userPreferences[tag]) tasteScoreB += userPreferences[tag] * 10; });

    // 최종 점수 = 날씨(70%) + 개인취향(30%)
    const finalScoreA = (weatherScoreA * 0.7) + (tasteScoreA * 0.3);
    const finalScoreB = (weatherScoreB * 0.7) + (tasteScoreB * 0.3);

    // 내림차순 정렬 (점수가 높은 것이 먼저 나오게)
    return finalScoreB - finalScoreA;
  });
}
        ### 📄 lib/supabase.ts
        > **Context Summary**
        * 🔗 **Imports:** `@supabase/supabase-js`

        ```ts
        // lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 프론트엔드 전용 클라이언트 엔진
export const supabase = createClient(supabaseUrl, supabaseKey);