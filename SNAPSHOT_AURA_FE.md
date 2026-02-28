# 🧠 Deep Context Snapshot

**Generated at:** 2026-02-28 20:05:17
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
**Total Files Scanned:** 70

```text
.
│   ├── vercel.json
│   ├── SNAPSHOT_AURA_FE_0217.md
│   ├── i18n.ts
│   ├── next-env.d.ts
│   ├── tailwind.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── .eslintrc.json
│   messages/
│   │   ├── en.json
│   │   ├── ko.json
│   app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   home/
│   │   │   ├── page.tsx
│   │   privacy/
│   │   │   ├── page.tsx
│   │   ir/
│   │   │   ├── page.tsx
│   │   terms/
│   │   │   ├── page.tsx
│   │   admin/
│   │   │   blog/
│   │   │   │   ├── page.tsx
│   │   │   magazine/
│   │   │   │   ├── page.tsx
│   │   invite/
│   │   │   ├── page.tsx
│   │   components/
│   │   │   ├── DynamicIsland.tsx
│   │   │   ├── LoginModal.tsx
│   │   │   ├── LegalModal.tsx
│   │   │   ├── MyAuraReport.tsx
│   │   │   ├── NotificationModal.tsx
│   │   │   ├── ArchiveModal.tsx
│   │   │   ├── DeepDiveModal.tsx
│   │   │   ├── LocationSelector.tsx
│   │   │   ├── ActionMenuModal.tsx
│   │   │   ├── StampEditor.tsx
│   │   │   ├── InstallPrompt.tsx
│   │   │   ├── VibeMatch.tsx
│   │   │   ├── LockModal.tsx
│   │   │   ├── ProfileModal.tsx
│   │   │   ├── FloatingDock.tsx
│   │   │   ├── TutorialOverlay.tsx
│   │   │   ├── FashionCard.tsx
│   │   │   ├── RankingModal.tsx
│   │   │   ├── ShopModal.tsx
│   │   │   ├── ShareButton.tsx
│   │   │   ├── AdminModal.tsx
│   │   │   ├── ExploreGrid.tsx
│   │   │   ├── UploadModal.tsx
│   │   magazine/
│   │   │   ├── page.tsx
│   │   │   [slug]/
│   │   │   │   ├── page.tsx
│   │   api/
│   │   │   waitlist/
│   │   │   │   ├── route.ts
│   │   │   admin/
│   │   │   │   blog/
│   │   │   │   │   ├── page.tsx
│   │   │   │   approve/
│   │   │   │   │   ├── route.ts
│   │   │   fashion/
│   │   │   │   ├── route.ts
│   │   │   generate-editorial/
│   │   │   │   ├── route.ts
│   │   │   generate-blog/
│   │   │   │   ├── route.ts
│   │   │   push/
│   │   │   │   ├── route.ts
│   │   │   broadcast/
│   │   │   │   ├── route.ts
│   │   │   upload/
│   │   │   │   ├── route.ts
│   │   │   cron/
│   │   │   │   ├── route.ts
│   │   fonts/
│   │   [username]/
│   │   │   ├── page.tsx
│   images/
│   public/
│   │   ├── manifest.json
│   │   ├── sw.js
│   │   images/
│   hooks/
│   │   ├── useAura.ts
│   │   ├── useSocial.ts
│   │   ├── useGyroscope.ts
│   │   ├── useAuth.ts
│   │   ├── useWeather.ts
│   │   ├── useGatekeeper.ts
│   │   ├── useFeed.ts
│   lib/
│   │   ├── affiliate.ts
│   │   ├── recommendation.ts
│   │   ├── constants.ts
│   │   ├── supabase.ts
│   services/
│   │   ├── locale.ts
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
        ### 📄 SNAPSHOT_AURA_FE_0217.md
        > **Context Summary**
        * (No structural elements detected)

        ```md
        # 🧠 Deep Context Snapshot

**Generated at:** 2026-02-17 14:50:40
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
**Total Files Scanned:** 51

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
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   home/
│   │   │   ├── page.tsx
│   │   ir/
│   │   │   ├── page.tsx
│   │   invite/
│   │   │   ├── page.tsx
│   │   components/
│   │   │   ├── DynamicIsland.tsx
│   │   │   ├── LoginModal.tsx
│   │   │   ├── MyAuraReport.tsx
│   │   │   ├── ArchiveModal.tsx
│   │   │   ├── DeepDiveModal.tsx
│   │   │   ├── ActionMenuModal.tsx
│   │   │   ├── StampEditor.tsx
│   │   │   ├── InstallPrompt.tsx
│   │   │   ├── VibeMatch.tsx
│   │   │   ├── LockModal.tsx
│   │   │   ├── ProfileModal.tsx
│   │   │   ├── FloatingDock.tsx
│   │   │   ├── TutorialOverlay.tsx
│   │   │   ├── FashionCard.tsx
│   │   │   ├── RankingModal.tsx
│   │   │   ├── ShopModal.tsx
│   │   │   ├── ShareButton.tsx
│   │   │   ├── AdminModal.tsx
│   │   │   ├── ExploreGrid.tsx
│   │   │   ├── UploadModal.tsx
│   │   api/
│   │   │   waitlist/
│   │   │   │   ├── route.ts
│   │   │   admin/
│   │   │   │   approve/
│   │   │   │   │   ├── route.ts
│   │   │   fashion/
│   │   │   │   ├── route.ts
│   │   │   push/
│   │   │   │   ├── route.ts
│   │   │   upload/
│   │   │   │   ├── route.ts
│   │   │   cron/
│   │   │   │   ├── route.ts
│   │   fonts/
│   │   [username]/
│   │   │   ├── page.tsx
│   images/
│   public/
│   │   ├── manifest.json
│   │   ├── sw.js
│   │   images/
│   hooks/
│   │   ├── useAura.ts
│   │   ├── useSocial.ts
│   │   ├── useGyroscope.ts
│   │   ├── useAuth.ts
│   │   ├── useWeather.ts
│   │   ├── useGatekeeper.ts
│   │   ├── useFeed.ts
│   lib/
│   │   ├── affiliate.ts
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
    "react-dropzone": "^15.0.0",
    "resend": "^6.9.2",
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
  title: 'Aura. | AI-Powered Ambient Lookbook',
  description: '검색창을 없앴습니다. 지금 당신이 있는 곳의 날씨와 취향에 완벽히 동기화된 룩을 스와이프하세요.',
  
  // 🌟 카카오톡, 페이스북, 슬랙 링크 공유 시 뜨는 썸네일 (Open Graph)
  openGraph: {
    title: 'Aura. | 당신의 바이브를 깨우는 AI 룩북',
    description: '날씨와 패션 DNA가 교차하는 지점. 지금 바로 AURA를 경험하세요.',
    url: 'https://aura.style', // 나중에 실제 도메인으로 교체
    siteName: 'Aura.',
    images: [
      {
        url: '/images/aura_brand.png', // 대표님이 만드신 OG 이미지!
        width: 1200,
        height: 630,
        alt: 'Aura Brand Official',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },

  // 🌟 브라우저 탭 및 북마크 아이콘 설정
  icons: {
    icon: '/images/icon_192.png',
    apple: '/images/icon_512.png', // 아이폰 바탕화면 추가 시 사용될 고화질 아이콘
  },
  
  // 🌟 PWA(모바일 앱 설치) 설정 파일 연결
  manifest: '/manifest.json', 
  themeColor: '#000000',
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

        ### 📄 app/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, next/link, react`
* 🧩 **Component (Default):** `LandingPage`
* ww **Hooks:** `useTransform, useRef, useEffect, useScroll, useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, Sparkles, CloudSun, Fingerprint, Lock, 
  CheckCircle, Smartphone, Zap, Globe, Crown, 
  ShieldCheck, Eye, MousePointer2, CreditCard, Mail
} from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function LandingPage() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: containerRef });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const textX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // 🌟 [NEW] 목업 슬라이드쇼 상태 관리
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  // 🌟 [NEW] 앱 스크린샷 리스트 (나중에 실제 앱 캡쳐 화면으로 교체하세요!)
  const appScreens = [
    "/images/aura_brand.png", // Screen 1: 메인 홈 (예시)
    "/images/aura_brand_01.png", // Screen 2: AI 분석 결과 (예시 - 실제론 다른 이미지)
    "/images/aura_brand_02.png", // Screen 3: 프로필 화면 (예시 - 실제론 다른 이미지)
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
    } catch (e) {
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
            <span className="text-[#ff3b30] text-[10px] font-black tracking-[0.5em] uppercase">Ambient Intelligence</span>
          </motion.div>
          <h1 className="text-[12vw] md:text-[10rem] font-serif italic font-black tracking-tighter mb-8 leading-[0.75] uppercase mix-blend-difference">
            Aura<span className="text-[#ff3b30]">.</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/60 mb-12 max-w-2xl mx-auto font-light tracking-tight italic">
            "검색의 시대는 끝났습니다. 이제 당신의 <span className="text-white border-b border-white/30">분위기</span>만 남습니다."
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/home" className="group relative overflow-hidden bg-[#ff3b30] text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,59,48,0.4)]">
              <span className="relative z-10">ENTER THE SYSTEM</span>
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <style jsx>{`.group:hover span { color: black; }`}</style>
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap opacity-20">
          <motion.div style={{ x: textX }} className="text-[10vh] font-black tracking-tighter uppercase inline-block">
             Aura Vision Engine / Atmospheric Curation / Digital DNA Match / No Search Needed / 
          </motion.div>
        </div>
      </section>

      {/* 🌟 2. Feature Section (유지) */}
      <section className="py-60 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-40 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-none uppercase">
              The Engine<br/>of Aura.
            </h2>
            <div className="space-y-20">
              <div className="group cursor-default">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-[#ff3b30] group-hover:w-24 transition-all" />
                  <span className="text-[#ff3b30] font-mono text-sm uppercase tracking-widest">01. AURA Environmental Sync</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Atmospheric Reading</h3>
                <p className="text-white/40 text-lg leading-relaxed">
                  AURA는 당신이 숨 쉬는 공기의 데이터를 읽습니다. 기온, 습도, 풍향을 넘어 현재 도시의 미묘한 색채 변화까지 실시간으로 패션 룩에 동기화합니다.
                </p>
              </div>
              <div className="group cursor-default">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-[#ff3b30] group-hover:w-24 transition-all" />
                  <span className="text-[#ff3b30] font-mono text-sm uppercase tracking-widest">02. AURA Vision Intelligence</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">DNA Deconstruction</h3>
                <p className="text-white/40 text-lg leading-relaxed">
                  AURA AI는 단순한 이미지가 아닌 스타일의 근원을 봅니다. 업로드된 사진 속 소재의 질감, 실루엣의 곡선, 컬러의 파동을 분석하여 당신만의 패션 아키타입을 완성합니다.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 bg-gradient-to-tr from-[#111] to-[#222] p-2 rounded-[4rem] border border-white/10 shadow-2xl">
              <div className="aspect-[9/19] bg-black rounded-[3.8rem] overflow-hidden relative">
                 <img src="/images/aura_brand.png" className="h-full w-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" alt="App Preview" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌟 3. Cult of 1,000 (🔥 힙스터 에고 자극 & VVIP 카드 업그레이드) */}
      <section id="ambassador" className="py-60 px-6 bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 pointer-events-none">
           <Crown className="w-40 h-40 text-black/5 rotate-12" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-32">
            <span className="font-mono text-xs font-black uppercase tracking-[0.5em] mb-4 block text-[#ff3b30]">Invite-Only Collective</span>
            <h2 className="text-[9vw] md:text-[7rem] font-serif italic font-black tracking-tighter leading-[0.85] uppercase">
              Define the Scene.<br/>Become the Standard.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* 왼쪽: 힙스터 자극 멘트 */}
            <div className="space-y-12 text-2xl font-light leading-snug order-2 md:order-1">
              <p className="text-black/60">
                트렌드를 따르는 팔로워는 중요합니다. <b className="text-black font-black underline decoration-[#ff3b30]">그들을 확실하게 이끌면서, 자신의 바이브가 곧 장르인 1,000명</b>의 오리지널을 찾습니다.
              </p>
              <div className="space-y-8">
                {[
                  { title: "The Style Originator", desc: "당신의 룩은 단순한 데이터가 아닙니다. AURA AI가 '힙함'을 정의하는 기준점이 됩니다." },
                  { title: "Verified Taste Authority", desc: "당신의 프로필에 부여되는 'Founder' 배지는 이 구역에서 가장 확실한 안목의 증명서입니다." },
                  { title: "Curator of the Future", desc: "대중에게 공개되기 전, 가장 먼저 새로운 기능을 경험하고 방향성을 결정합니다." }
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
                 {/* 카드 질감 및 홀로그램 효과 */}
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay" />
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-[length:200%_200%] animate-gradient-xy pointer-events-none" />

                 <div className="relative h-full p-10 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                       {/* IC 칩 */}
                       <div className="w-14 h-10 rounded-md bg-gradient-to-br from-[#d4af37] to-[#f2e6a3] border border-[#b39020] shadow-inner flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#b39020_2px,#b39020_4px)]" />
                          <CreditCard className="w-6 h-6 text-black/40" />
                       </div>
                       <div className="text-right">
                          <h3 className="text-3xl font-serif italic font-black uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ff3b30]">Aura<br/>Black.</h3>
                          <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.2em]">Private Access Key</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div>
                          <span className="text-[9px] font-mono text-white/30 uppercase block mb-1">Authorized Code</span>
                          <p className="text-4xl font-mono font-black tracking-widest text-white/90" style={{textShadow: "0 0 20px rgba(255,59,48,0.5)"}}>AURA-7777</p>
                       </div>
                       <div className="flex justify-between items-end">
                          <div>
                             <span className="text-[9px] font-mono text-white/30 uppercase block mb-1">Member Status</span>
                             <p className="text-sm font-bold tracking-widest uppercase text-white/80">Founding Originator</p>
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

      {/* 🌟 [UPDATE] Waitlist Section (심사 접수 & 심사 중 상태) */}
      <section className="py-40 px-6 bg-[#111] text-center relative border-t border-white/5">
         <div className="max-w-2xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
               <Mail className="w-10 h-10 text-white/30 mx-auto mb-6" />
               <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 uppercase">Request Access</h2>
               
               {!isSubmitted ? (
                 // 📝 1. 신청 폼
                 <>
                   <p className="text-white/50 mb-10 text-lg">
                      AURA는 엄격한 심사를 통해 커뮤니티의 감도를 유지합니다.<br/>
                      당신의 <span className="text-white">Instagram ID</span>를 제출하여 심사를 대기하십시오.
                   </p>
                   <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <input 
                        type="text" 
                        value={igHandle}
                        onChange={(e) => setIgHandle(e.target.value)}
                        placeholder="INSTAGRAM @HANDLE" 
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full text-center font-mono text-sm focus:border-[#ff3b30] outline-none transition-all uppercase"
                      />
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="YOUR EMAIL ADDRESS" 
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full text-center font-mono text-sm focus:border-white/30 outline-none transition-all uppercase"
                      />
                      <button 
                        onClick={handleWaitlistSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-white text-black px-8 py-4 rounded-full font-black hover:bg-[#ff3b30] hover:text-white transition-all whitespace-nowrap disabled:opacity-50"
                      >
                         {isSubmitting ? "TRANSMITTING..." : "SUBMIT FOR AUDIT"}
                      </button>
                   </div>
                   <p className="mt-8 text-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">
                      Current Waitlist: <span className="text-[#ff3b30]">12,402</span> People
                   </p>
                 </>
               ) : (
                 // 🎫 2. 신청 완료 (심사 중 티켓)
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                   className="mt-10 bg-black border border-[#ff3b30]/30 p-8 rounded-2xl max-w-md mx-auto shadow-[0_0_40px_rgba(255,59,48,0.15)]"
                 >
                   <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                     <span className="text-[10px] font-mono text-[#ff3b30] tracking-[0.3em] uppercase">Vibe Audit</span>
                     <span className="text-[10px] font-mono text-white/40">{new Date().toLocaleDateString()}</span>
                   </div>
                   <div className="text-center space-y-2 mb-8">
                     <h3 className="text-3xl font-serif italic font-black uppercase text-white">Under Review.</h3>
                     <p className="text-sm text-white/50">AURA 크리에이티브 팀에서 당신의 DNA를 분석 중입니다.</p>
                   </div>
                   <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-left space-y-2">
                     <div className="flex justify-between text-white/40"><span>TARGET</span> <span className="text-white">@{igHandle.replace('@', '')}</span></div>
                     <div className="flex justify-between text-white/40"><span>STATUS</span> <span className="text-yellow-400 animate-pulse">PENDING</span></div>
                   </div>
                   <p className="mt-6 text-[9px] text-white/30 uppercase tracking-widest">
                     심사가 완료되면 입력하신 이메일로 초대 코드가 발송됩니다.
                   </p>

                   {/* 🌟 [NEW] 닫기 & 초기화 버튼 */}
                   <button 
                     onClick={() => {
                       setIsSubmitted(false);
                       setIgHandle("");
                       setEmail("");
                     }}
                     className="mt-8 w-full py-4 border border-white/20 text-white/60 hover:text-white hover:bg-white/10 font-mono text-[10px] tracking-[0.3em] uppercase transition-all"
                   >
                     Close Receipt
                   </button>
                 </motion.div>
               )}
            </motion.div>
         </div>
      </section>

      {/* 🌟 4. Final CTA (코드 입력) */}
      <section className="py-60 px-6 text-center bg-[#050505] relative overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-5xl md:text-9xl font-bold tracking-tighter mb-20 leading-none">
            EXPECT<br/>THE UNEXPECTED.
          </h2>
          <div className="max-w-xl mx-auto flex flex-col gap-6">
            <input 
              type="text" 
              placeholder="ENTER CODE TO ACCESS" 
              className="w-full bg-white/5 border border-white/10 px-10 py-6 rounded-full text-center font-mono text-2xl tracking-[0.5em] focus:border-[#ff3b30] outline-none transition-all placeholder:text-white/10 uppercase"
            />
            <button className="w-full bg-[#ff3b30] text-white py-6 rounded-full font-black text-2xl hover:bg-white hover:text-black transition-all">
              GRANT ACCESS
            </button>
          </div>
          <p className="mt-12 text-white/20 font-mono text-xs uppercase tracking-[0.4em]">
             Membership Spots Remaining: <span className="text-[#ff3b30] font-bold">158</span> / 1,000
          </p>
        </motion.div>
      </section>

      <footer className="py-20 text-center text-[10px] text-white/20 border-t border-white/5 uppercase tracking-[0.8em]">
        &copy; 2026 AURA / Beyond Fashion / All Rights Reserved.
      </footer>
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

        ### 📄 app/home/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, html-to-image, @/hooks/useGatekeeper`
* 🧩 **Component (Default):** `Home`
* ww **Hooks:** `useTransform, useMotionValue, useEffect, useAura, useState, useGyroscope, useGatekeeper`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Layers, Target, Camera, X, Smartphone, User, ShoppingBag, Lock, ArrowRight } from "lucide-react";
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
import LockModal from "../components/LockModal"; // 🌟 모달 임포트


export default function Home() {
  const aura = useAura();
  const { isApproved, loading, verifyCode } = useGatekeeper(aura.user?.id);
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
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
            Identify yourself to access the archive.
          </p>
          <button 
            onClick={() => aura.setIsLoginModalOpen(true)}
            className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#ff3b30] hover:text-white transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Verify Identity
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
          Switch Account
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
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-50 flex bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10">
        <button 
          onClick={() => setViewMode('recommend')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${viewMode === 'recommend' ? 'bg-white text-black' : 'text-white/50'}`}
        >
          FOR YOU
        </button>
        <button 
          onClick={() => setViewMode('explore')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${viewMode === 'explore' ? 'bg-white text-black' : 'text-white/50'}`}
        >
          EXPLORE
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
                    오늘 이 날씨를 완벽하게 정복한 당신의 OOTD를 세상에 증명하십시오.
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
          sendTestPush={aura.sendTestPush || (() => {})} 
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

        ### 📄 app/ir/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, next/link, react`
* 🧩 **Component (Default):** `IRPage`
* ww **Hooks:** `useTransform, useRef, useScroll`

        ```typescript
        "use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight, CloudRain, Fingerprint, ShoppingBag, Layers, Crown, Database, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// 🌟 New Component: 성장 지표 차트 (framer-motion 활용)
function GrowthChart() {
  const data = [
    { phase: "P1", user: 10, revenue: 5, profit: 3 },
    { phase: "P2", user: 50, revenue: 25, profit: 18 },
    { phase: "P3", user: 100, revenue: 90, profit: 65 },
    { phase: "P4", user: 250, revenue: 250, profit: 180 }, // (스케일 조정을 위한 가상의 값)
  ];

  const maxUser = 250;
  const maxFinance = 250;

  return (
    <div className="w-full bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-[#ff3b30]/20 relative overflow-hidden mb-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff3b30]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-[#ff3b30] p-2 rounded-full">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">Projected Growth</h3>
      </div>
      
      <div className="relative h-64 flex items-end justify-between gap-4 pt-10 pl-4 border-l border-white/10 border-b">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 bottom-0 -translate-x-full flex flex-col justify-between text-xs text-white/30 py-2 pr-2 h-full">
          <span>Scale</span><span>Mid</span><span>Start</span>
        </div>

        {data.map((d, i) => (
          <div key={i} className="relative flex-1 flex flex-col items-center h-full justify-end group">
            {/* User Line Point */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }} whileInView={{ y: `${100 - (d.user / maxUser) * 100}%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              className="absolute w-3 h-3 bg-white rounded-full border-2 border-[#0a0a0a] z-20 group-hover:scale-150 transition-transform"
              style={{ left: '50%', marginLeft: '-6px' }}
            >
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{d.user}0K Users</div>
            </motion.div>
             {/* Connecting Line (가상 구현) */}
            {i < data.length - 1 && (
               <svg className="absolute top-0 left-1/2 w-full h-full z-0 pointer-events-none" style={{ overflow: 'visible' }}>
                 <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                    x1="0" y1={`${100 - (d.user / maxUser) * 100}%`} x2="100%" y2={`${100 - (data[i+1].user / maxUser) * 100}%`} stroke="white" strokeWidth={2} strokeOpacity={0.5}
                 />
               </svg>
            )}

            {/* Revenue & Profit Bars */}
            <div className="relative w-full max-w-[40px] flex flex-col justify-end h-full gap-1 z-10">
              <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.revenue / maxFinance) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }} className="w-full bg-[#ff3b30] rounded-t-sm relative group-hover:bg-[#ff5b50] transition-colors">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-[10px] text-[#ff3b30] font-bold opacity-0 group-hover:opacity-100 transition-opacity">${d.revenue}M</div>
              </motion.div>
              <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.profit / maxFinance) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 + 0.4 }} className="w-full bg-[#ff3b30]/40 rounded-t-sm relative group-hover:bg-[#ff3b30]/60 transition-colors">
                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] text-white/50 font-bold opacity-0 group-hover:opacity-100 transition-opacity">${d.profit}M</div>
              </motion.div>
            </div>

            <span className="text-xs text-white/40 mt-4 font-mono uppercase tracking-wider">{d.phase}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-6 text-xs text-white/50">
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white"/>Users (Line)</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-[#ff3b30]"/>Revenue</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-[#ff3b30]/40"/>Profit</div>
      </div>
    </div>
  );
}

export default function IRPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const businessPhases = [
    { 
      phase: "Phase 1", title: "Affiliate Commerce", subtitle: "Discovery to Ownership", icon: ShoppingBag,
      users: "100K MAU", partners: "SSENSE, FARFETCH, KREAM", revenue: "$0.5M", profit: "$0.3M",
      desc: "유저의 감각적인 발견을 즉각적인 소유로 연결합니다. 재고 부담 없이 글로벌 하이엔드 부티크의 트래픽을 중개하며 초기 현금 흐름을 창출합니다."
    },
    { 
      phase: "Phase 2", title: "Native Sponsorship", subtitle: "The Contextual Canvas", icon: Layers,
      users: "500K MAU", partners: "LVMH, Gentle Monster", revenue: "$2.5M", profit: "$1.8M",
      desc: "비가 오는 날에는 레인 코트를, 영하의 날씨에는 프리미엄 아우터를. AURA의 카드는 브랜드가 가장 돋보일 수 있는 완벽한 컨텍스트 캔버스가 됩니다."
    },
    { 
      phase: "Phase 3", title: "AURA CULT+", subtitle: "The Premium Tier", icon: Crown,
      users: "1M+ MAU", partners: "Stripe, Exclusive Brands", revenue: "$9.0M", profit: "$6.5M",
      desc: "단순한 유저를 넘어 '컬트(Cult)' 팬덤을 구축합니다. 심층 AI 스타일 리포트와 프라이빗 큐레이션을 제공하는 월정액 구독 모델로 강력한 MRR을 확보합니다."
    },
    { 
      phase: "Phase 4", title: "Data as a Service", subtitle: "The Fashion Oracle", icon: Database,
      users: "5M+ MAU", partners: "Global Fashion Houses", revenue: "$25.0M+", profit: "$18.0M+",
      desc: "전 세계 유저의 기상 환경과 취향이 교차하는 수십억 건의 데이터를 분석합니다. 패션 하우스와 트렌드 예측 기관에 독보적인 인사이트를 제공합니다."
    }
  ];

  return (
    // 🌟 Color Update: 배경색을 순수 블랙(#000)에 가깝게 하고, 텍스트 색상을 조정하여 대비감을 높였습니다.
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-[#f5f5f7] selection:bg-[#ff3b30] selection:text-white font-sans overflow-x-hidden">
      
      {/* 🎬 1. Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ opacity, y }} className="absolute inset-0 z-0">
          {/* 🌟 Color Update: 붉은색 그라데이션으로 열정적인 분위기 연출 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,59,48,0.15)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
        </motion.div>

        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">
          {/* 🌟 Color Update: 타이틀 끝에 포인트 컬러 점(.) 추가 */}
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-6xl md:text-8xl lg:text-[11rem] font-serif italic font-black tracking-tighter mb-8 leading-[0.8] text-white">
            Aura<span className="text-[#ff3b30]">.</span>
          </motion.h1>
          
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-2xl md:text-4xl font-semibold tracking-tight text-white/90 mb-4">
            Technology becomes invisible.<br/>Only your <span className="text-[#ff3b30]">vibe</span> remains.
          </motion.p>
          
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl font-light tracking-tight text-white/50 mb-12 max-w-2xl">
            세상에서 가장 직관적인 AI 앰비언트 룩북. 검색창을 없애고, 오직 당신의 현재 환경과 취향에 완벽히 동기화된 영감만을 제공합니다.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}>
            {/* 🌟 Color Update: 버튼에 포인트 컬러 적용 */}
            <Link href="/" className="group flex items-center gap-2 bg-[#ff3b30] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#ff5b50] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,59,48,0.3)]">
              Experience the Vibe <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 💡 2. The Philosophy */}
      <section className="py-40 px-6 max-w-5xl mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 text-white">Silence the noise.</h2>
            <p className="text-xl text-white/60 leading-relaxed mb-6 font-light">
              현재의 커머스는 무의미한 정보의 홍수입니다. 우리는 유저에게 피로를 강요하고 있었습니다.
            </p>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              AURA는 질문을 바꿨습니다. "무엇을 찾으십니까?" 대신 <b className="text-[#ff3b30]">"지금 당신이 있는 곳의 공기는 어떻습니까?"</b>를 묻습니다. 환경 데이터를 읽고 AI가 큐레이션 한 화보를 그저 스와이프하는 것만으로, 발견의 기쁨은 극대화됩니다.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#121212] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center gap-6 transform translate-y-12 hover:border-[#ff3b30]/30 transition-colors">
              <CloudRain className="w-12 h-12 text-[#ff3b30]" strokeWidth={1.5} />
              <div><h3 className="font-semibold text-white mb-2">Ambient Data</h3><p className="text-sm text-white/50">기상청 초정밀 환경 동기화</p></div>
            </div>
            <div className="bg-[#121212] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center gap-6 hover:border-[#ff3b30]/30 transition-colors">
              <Fingerprint className="w-12 h-12 text-[#ff3b30]" strokeWidth={1.5} />
              <div><h3 className="font-semibold text-white mb-2">AI DNA Match</h3><p className="text-sm text-white/50">비전 컴퓨팅 기반 취향 분석</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 💸 3. Financial Projections (The Business) */}
      <section className="py-40 px-6 bg-[#0a0a0a] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,59,48,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
            <span className="text-[#ff3b30] font-mono text-sm tracking-widest uppercase mb-4 block">The Growth Engine</span>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">Financial Projections.</h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">경험을 해치지 않으면서도, 거대한 수익을 창출하는 4단계의 치밀한 비즈니스 로드맵입니다.</p>
          </motion.div>

          {/* 🌟 New Chart Added Here */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <GrowthChart />
          </motion.div>

          <div className="space-y-6">
            {businessPhases.map((bm, idx) => (
              <motion.div 
                key={bm.phase}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: idx * 0.1 }}
                className="group bg-[#121212] p-8 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center hover:bg-[#1a1a1a] hover:border-[#ff3b30]/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff3b30]/0 via-[#ff3b30]/0 to-[#ff3b30]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-[#ff3b30]/10 rounded-full group-hover:scale-110 group-hover:bg-[#ff3b30] transition-all duration-500">
                  <bm.icon className="w-8 h-8 text-[#ff3b30] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 relative z-10">
                  <span className="text-sm font-semibold tracking-widest text-[#ff3b30] uppercase block mb-2">{bm.phase}</span>
                  <h3 className="text-3xl font-bold text-white mb-2">{bm.title}</h3>
                  <p className="text-lg text-white/50 font-light mb-4">{bm.subtitle}</p>
                  <p className="text-white/80 leading-relaxed">{bm.desc}</p>
                </div>

                {/* 🌟 Key Metrics Table with Color Accent */}
                <div className="w-full lg:w-auto flex flex-wrap lg:flex-col gap-4 lg:gap-6 shrink-0 bg-[#0a0a0a] p-6 rounded-2xl lg:min-w-[280px] border border-white/5 relative z-10 group-hover:border-[#ff3b30]/20 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Target Users</span>
                    <span className="font-mono text-lg text-white group-hover:text-[#ff3b30] transition-colors">{bm.users}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Est. Revenue / Profit</span>
                    <span className="font-mono text-lg text-white">{bm.revenue} / <span className="text-[#ff3b30]">{bm.profit}</span></span>
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Key Partners</span>
                    <span className="text-sm text-white/80">{bm.partners}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 4. Outro & Contact */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center relative overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff3b30]/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif italic font-black text-white mb-8">This is just the beginning.</h2>
          <p className="text-2xl text-white/60 font-light mb-16">
            소프트웨어와 패션이 결합하는 방식을 재정의할 파트너를 찾습니다.
          </p>
          <a href="mailto:cto@yeahplus.co.kr" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#ff3b30] text-white font-bold text-lg hover:bg-[#ff5b50] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_40px_rgba(255,59,48,0.4)]">
            Connect with Leadership
          </a>
        </motion.div>
      </section>

      <footer className="py-12 text-center text-sm text-white/30 border-t border-white/5">
        Copyright © 2026 AURA Inc. All rights reserved.
      </footer>
    </div>
  );
}
        ### 📄 app/invite/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `InvitationPage`

        ```typescript
        "use client";

import { motion } from "framer-motion";
import { Share2, Crown, Sparkles } from "lucide-react";

export default function InvitationPage() {
  const code = "AURA-7777"; // 🌟 나중에 서버에서 동적으로 가져올 코드

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="relative w-full max-w-sm aspect-[3/4] bg-gradient-to-b from-[#1a1a1a] to-[#050505] rounded-[3rem] p-1 border border-white/20 shadow-2xl overflow-hidden">
        {/* 카드 배경 장식 */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,59,48,0.2),transparent_70%)]" />
        
        <div className="relative h-full border border-white/10 rounded-[2.8rem] flex flex-col items-center justify-between p-12 text-center">
          <div className="space-y-4">
            <Crown className="w-10 h-10 text-[#ff3b30] mx-auto" />
            <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/40">Exclusive Invitation</h2>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-serif italic font-black text-white">Aura.</h1>
            <p className="text-sm text-white/60 leading-relaxed">
              당신은 AURA 앰버서더로부터<br/>
              특별한 초대를 받았습니다.
            </p>
            <div className="bg-white/5 border border-white/10 py-4 px-8 rounded-xl">
              <span className="text-xs font-mono text-white/30 block mb-1">YOUR CODE</span>
              <span className="text-3xl font-mono font-bold tracking-tighter text-[#ff3b30]">{code}</span>
            </div>
          </div>

          <button 
            onClick={() => navigator.share({ title: 'AURA Invitation', text: `초대 코드: ${code}`, url: window.location.href })}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest">Share Invitation</span>
          </button>
        </div>
      </div>
      <p className="mt-8 text-white/20 text-[10px] uppercase tracking-[0.5em]">Membership Reserved</p>
    </div>
  );
}
        ### 📄 app/components/DynamicIsland.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `DynamicIsland`

        ```typescript
        // components/DynamicIsland.tsx
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// 날씨 데이터의 정확한 규격을 만들어 줍니다.
interface WeatherData {
  city: string;
  temp: number;
  condition?: string;
}
export default function DynamicIsland({ weather }: { weather: WeatherData | null }) {
  if (!weather) return null;

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className="absolute top-9 left-0 right-12 z-30 flex justify-center pointer-events-none px-16"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="pointer-events-auto flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-black/60 pl-2.5 pr-3 py-1.5 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 hover:bg-black/80 max-w-[260px]">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
          <MapPin className="h-3 w-3 text-blue-400" />
        </div>
        <div className="flex min-w-0 items-center gap-1.5 text-[12px] font-bold tracking-tight text-white/90">
          <span className="truncate opacity-60">{weather.city}</span>
          <span className="shrink-0 h-2 w-[1px] bg-white/10" />
          <span className="shrink-0 text-blue-400">{weather.temp}°C</span>
        </div>
        <div className="flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
        </div>
      </motion.div>
    </motion.div>
  );
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
        ### 📄 app/components/MyAuraReport.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, html-to-image`
* 🧩 **Component (Default):** `MyAuraReport`
* ww **Hooks:** `useState`

        ```typescript
        import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Download, Hexagon } from "lucide-react";
import { toPng } from "html-to-image";

// 🌟 props에 user 추가
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyAuraReport({ isOpen, onClose, report, user }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!report) return null;

  // 🌟 인스타 아이디 or 닉네임 추출 로직
  const igHandle = user?.user_metadata?.instagram;
  const fallbackName = user?.user_metadata?.name || user?.email?.split('@')[0] || 'GUEST';
  const displayId = igHandle ? `@${igHandle}` : `@${fallbackName}`;

  const handleCapture = async (type: 'download' | 'share') => {
    if (!cardRef.current) return;
    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      const dataUrl = await toPng(cardRef.current, { 
        quality: 1.0, 
        pixelRatio: 3, 
        cacheBust: true,
      });
      if (type === 'download') {
        const link = document.createElement('a');
        link.download = `AURA_EDITORIAL_${report.vibeTitle.replace(/\s/g, '_')}.png`;
        link.href = dataUrl;
        link.click();
      } else {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], 'AURA_ART.png', { type: 'image/png' });
        if (navigator.share) await navigator.share({ files: [file] });
      }
    } catch (err) { console.error(err); } 
    finally { setIsProcessing(false); }
  };

  // 🌟 [엔진 1] 기하학 레이더 차트 (SVG 폴리곤) 생성기
  const renderRadarChart = () => {
    const tags = report.topTags.slice(0, 5);
    while (tags.length < 5) tags.push(["VAR", 1]); 
    const maxVal = Math.max(...tags.map((t: [string, number]) => t[1]));

    const points = tags.map((t: [string, number], i: number) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const r = (t[1] / maxVal) * 40; 
      return `${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`;
    }).join(' ');

    return (
      <div className="relative w-full aspect-square flex items-center justify-center mb-8">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <polygon points="50,10 88,38 73,82 27,82 12,38" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
          <polygon points="50,30 69,44 62,66 38,66 31,44" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
          {[0, 1, 2, 3, 4].map(i => {
            const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
            return <line key={i} x1="50" y1="50" x2={50 + 40 * Math.cos(angle)} y2={50 + 40 * Math.sin(angle)} stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />;
          })}
          <polygon points={points} fill="rgba(255,59,48,0.2)" stroke="#FF3B30" strokeWidth="1" />
          <polygon points={points} fill="none" stroke="#000000" strokeWidth="0.2" className="mix-blend-overlay" />
        </svg>
        {tags.map((t: [string, number], i: number) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          const x = 50 + 55 * Math.cos(angle);
          const y = 50 + 55 * Math.sin(angle);
          return (
            <div key={i} className="absolute text-[6px] font-mono font-black uppercase tracking-widest text-black/60"
                 style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
              {t[0].substring(0, 5)}
            </div>
          );
        })}
      </div>
    );
  };

  // 🌟 [엔진 2] 시그니처 컬러 팔레트
  const palettes = [
    { name: "CORE BLACK", hex: "#0F0F0F" },
    { name: "RAW CANVAS", hex: "#EBE6DD" },
    { name: "AURA RED", hex: "#FF3B30" },
    { name: "STEEL GREY", hex: "#8A8A8E" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/95 overflow-y-auto"
        >
          <div className="flex flex-col items-center gap-6 w-full max-w-sm my-auto py-8">
            
            <div 
              ref={cardRef}
              className="relative w-full bg-[#F4F4F2] text-[#0A0A0A] overflow-hidden flex flex-col p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: 'serif', minHeight: '600px' }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

              {/* 🌟 Header & 아이디 표기 (MUSE) */}
              <div className="relative z-10 flex justify-between items-start border-b-[1px] border-black/20 pb-4 mb-8">
                <div>
                  <h3 className="text-[12px] font-black tracking-[0.3em] uppercase mb-1">AURA.STYLE</h3>
                  <p className="text-[7px] font-mono text-black/50 tracking-widest uppercase">Diagnostic Identity Report</p>
                </div>
                <div className="text-right flex flex-col items-end gap-1.5">
                  <span className="text-[8px] font-mono uppercase bg-black text-white px-2 py-0.5">CONFIDENTIAL</span>
                  {/* 🌟 여기에 유저 아이디가 들어갑니다! */}
                  <span className="text-[7px] font-mono font-bold tracking-widest uppercase text-black/70">MUSE. {displayId}</span>
                </div>
              </div>

              <div className="relative z-10 mb-6">
                <span className="text-[8px] p-6font-mono font-bold tracking-[0.4em] text-[#FF3B30] uppercase mb-2 block flex items-center gap-1">
                  <Hexagon className="w-2 h-2 fill-[#FF3B30]" /> THE ARCHETYPE
                </span>
                <p className="text-[34px] font-black italic tracking-tighter leading-[0.9] break-keep uppercase">
                  {report.vibeTitleKo}<br></br>({report.vibeTitleEn})
                </p>
              </div>

              <div className="relative p-1 z-10 grid grid-cols-2 gap-4 mb-8">
                <div className="col-span-1">
                  {renderRadarChart()}
                </div>
                <div className="col-span-1 flex flex-col justify-center space-y-4">
                {report.topTags.slice(0, 3).map(([tag, count]: [string, number], idx: number) => (
                    <div key={tag} className="border-b-[0.5px] border-black/10 pb-2">
                    <div className="text-[6px] font-mono text-black/40 mb-1">COMP. 0{idx + 1}</div>
                    <div className="flex justify-between items-baseline">
                    <span className="text-[11px] font-black uppercase tracking-tight">{tag}</span>
                    <span className="text-[11px] font-mono italic text-[#FF3B30]">{Math.round((count / report.totalSaved) * 100)}%</span>
                    </div>
                </div>
                ))}
                </div>
              </div>
              
              <div className="relative z-10 mb-auto">
                <span className="text-[7px] font-mono font-bold tracking-[0.2em] text-black/40 uppercase mb-3 block">Extracted Color Palette</span>
                <div className="grid grid-cols-4 h-16 border-[0.5px] border-black/20">
                  {palettes.map((color, idx) => (
                    <div key={idx} className="flex flex-col h-full border-r-[0.5px] border-black/20 last:border-r-0">
                      <div className="flex-1 w-full" style={{ backgroundColor: color.hex }} />
                      <div className="h-6 bg-white flex flex-col justify-center items-center border-t-[0.5px] border-black/20">
                        <span className="text-[4px] font-black tracking-widest">{color.name}</span>
                        <span className="text-[4px] font-mono text-black/50">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Stamp */}
              <div className="relative z-10 mt-10 pt-4 border-t-[1px] border-black/20 flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="text-[7px] font-mono uppercase text-black/50">Issued by</span>
                  <span className="text-[12px] font-serif italic font-bold">Aura Creative Dept.</span>
                </div>
                <div className="w-12 h-12 rounded-full border-[2px] border-[#FF3B30] flex items-center justify-center -rotate-12 opacity-80 mix-blend-multiply">
                   <div className="text-[#FF3B30] font-black text-center leading-[0.8]">
                      <span className="text-[6px] tracking-tighter block">AURA</span>
                      <span className="text-[10px]">VERIFIED</span>
                   </div>
                </div>
              </div>
            </div>

            {/* 외부 액션 버튼 */}
            <div className="flex flex-col gap-3 w-full px-2">
              <button 
                onClick={() => handleCapture('share')} disabled={isProcessing}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#FF3B30] text-white text-[11px] tracking-widest font-black uppercase active:scale-95 transition-all shadow-[0_5px_20px_rgba(255,59,48,0.3)]"
              >
                {isProcessing ? "GENERATING..." : <><Share2 className="w-4 h-4" /> Share to Instagram</>}
              </button>
              <button 
                onClick={() => handleCapture('download')} disabled={isProcessing}
                className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 text-white text-[11px] tracking-widest font-black uppercase border border-white/20 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" /> Save Report
              </button>
              <button onClick={onClose} className="text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase py-3 mt-2">Close Document</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/ArchiveModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, react`
* 🧩 **Component (Default):** `ArchiveModal`

        ```typescript
        // components/ArchiveModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Heart, ImageIcon } from "lucide-react";
import { useState } from "react";
import { FashionItem } from "../../hooks/useAura";

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  archiveData: FashionItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  triggerHaptic: (pattern: number | number[]) => void;
  uploadedData: FashionItem[]; // 🌟 유지
}

const appleSpring = { type: "spring" as const, stiffness: 300, damping: 25 };

export default function ArchiveModal({ isOpen, onClose, archiveData, searchQuery, setSearchQuery, triggerHaptic, uploadedData }: ArchiveModalProps) {
  // 🌟 탭 상태 추가
  const [activeTab, setActiveTab] = useState<'saved' | 'uploaded'>('saved');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { triggerHaptic(20); onClose(); }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={appleSpring} className="fixed bottom-0 left-0 right-0 z-50 flex h-[90vh] flex-col rounded-t-[32px] bg-[#1c1c1e] shadow-2xl md:h-[80vh]">
            <div className="flex w-full cursor-grab justify-center pb-4 pt-3"><div className="h-1.5 w-12 rounded-full bg-white/20" /></div>
            
            <div className="flex flex-col border-b border-white/5 px-8 pb-4 md:px-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-white">My Space</h2>
                <button onClick={() => { triggerHaptic(20); onClose(); }} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 active:scale-95"><X className="h-5 w-5 text-white/80" /></button>
              </div>

              {/* 🌟 탭 버튼 UI */}
              <div className="flex w-full rounded-2xl bg-white/5 p-1 mb-6">
                <button onClick={() => { triggerHaptic(10); setActiveTab('saved'); }} className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${activeTab === 'saved' ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}>
                  <Heart className="w-4 h-4" /> 찜한 룩 ({archiveData.length})
                </button>
                {/* 🌟 수정: (준비중) 텍스트를 지우고 실제 업로드한 사진 개수 표시 */}
                <button onClick={() => { triggerHaptic(10); setActiveTab('uploaded'); }} className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${activeTab === 'uploaded' ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}>
                  <ImageIcon className="w-4 h-4" /> 내 옷장 ({uploadedData?.length || 0})
                </button>
              </div>

              {activeTab === 'saved' && (
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="text" placeholder="비 오는 날, 더운 날, OOTD..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:bg-white/10 transition-colors" />
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto px-8 pb-20 pt-6 md:px-12">
              {activeTab === 'saved' ? (
                // 기존 저장된 룩 렌더링
                archiveData.length === 0 ? (
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
                )
              ) : (
                // 🌟 수정: 업로드 탭 렌더링 (준비중 화면을 교체하고 실제 데이터 매핑)
                !uploadedData || uploadedData.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-white/30">
                    <ImageIcon className="mb-4 h-12 w-12 opacity-50" strokeWidth={1} />
                    <p>아직 올린 옷이 없습니다.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
                    {uploadedData.map((item) => (
                      <div key={`upload-${item.id}`} className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer">
                        <img src={item.imageUrl} crossOrigin="anonymous" alt="Uploaded look" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-sm font-medium text-white">{item.weather} {item.temperature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/DeepDiveModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react`
* 🧩 **Component (Default):** `DeepDiveModal`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        // components/DeepDiveModal.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion"; // 🌟 Transition 타입 유지!
import { X, Volume2, Palette, Instagram, ArrowDownRight, Ticket, Heart, RefreshCw } from "lucide-react";
import { FashionItem } from "../../hooks/useAura"; 

interface DeepDiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FashionItem;
  triggerHaptic: (pattern: number | number[]) => void;
}

// 🌟 타입스크립트 에러 완벽 해결 유지
const flipTransition: Transition = { 
  type: "tween", 
  ease: [0.25, 0.1, 0.25, 1], 
  duration: 0.55 
};

export default function DeepDiveModal({ isOpen, onClose, item, triggerHaptic }: DeepDiveModalProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (isOpen) setIsFlipped(false);
  }, [isOpen]);

  const today = new Date();
  const dateString = `${today.getFullYear().toString().slice(-2)}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
  
  const likesCount = item.likes || 0;
  const isTrendsetter = likesCount >= 10; 
  const hasIgHandle = !!item.uploaderIg;  
  const isNotEditor = item.uploaderName !== 'AURA Editor'; 

  const showSocial = isTrendsetter && hasIgHandle && isNotEditor;
  const igHandle = item.uploaderIg?.replace('@', '');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md perspective-[2000px]"
          onClick={() => { triggerHaptic(20); onClose(); }}
        >

          {/* ========================================================= */}
          {/* 🌟 실제 유저가 보는 3D 양면 포토카드 본체 */}
          {/* ========================================================= */}
          <motion.div 
            onClick={(e) => { 
              e.stopPropagation(); 
              setIsFlipped(!isFlipped); 
              triggerHaptic(15);
            }}
            initial={{ scale: 0.95, y: 20, opacity: 0 }} 
            animate={{ rotateY: isFlipped ? 180 : 0, scale: 1, y: 0, opacity: 1 }} 
            exit={{ scale: 0.95, y: 20, opacity: 0 }} 
            transition={flipTransition} 
            className="relative w-[96vw] md:max-w-[420px] h-[80vh] rounded-xl shadow-2xl cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }} 
          >
            
            {/* ================= [앞면 (FRONT): 순수 이미지] ================= */}
            <div 
              className="absolute inset-0 w-full h-full rounded-xl overflow-hidden border-[5px] border-[#F4F0EA] bg-[#F4F0EA]"
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden', 
                zIndex: isFlipped ? 0 : 20 
            }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.imageUrl} alt="Look Front" className="w-full h-full object-cover filter contrast-110" />
              
              {/* 앞면 하단 힌트 텍스트 */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#EBE6DD]/90 font-mono text-[10px] tracking-[0.2em] uppercase bg-black/50 px-5 py-2 rounded-full backdrop-blur-sm shadow-xl border border-white/10">
                <RefreshCw className="w-3 h-3" /> Tap to Flip
              </div>
            </div>

            {/* ================= [뒷면 (BACK): 순수 디테일 정보] ================= */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#EBE6DD] text-black overflow-hidden rounded-xl flex flex-col shadow-inner border-[5px] border-[#F4F0EA]"
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                zIndex: isFlipped ? 20 : 0
              }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] filter contrast-120" />

              {/* 뒷면 헤더 */}
              <div className="pt-8 px-6 pb-4 relative z-10 overflow-hidden shrink-0">
                <span className="absolute -top-4 -left-4 text-[10rem] font-black italic text-black/5 pointer-events-none select-none leading-none font-serif">No.02</span>
                <div className="relative flex justify-between items-end border-b-[3px] border-black pb-2">
                  <div className="relative z-10">
                    <h2 className="text-6xl font-serif italic font-black tracking-tighter uppercase leading-[0.8] mix-blend-hard-light">Curator<br/>Note<span className="text-red-600">.</span></h2>
                    <div className="flex items-center gap-2 mt-3 font-mono text-[10px] font-bold uppercase tracking-widest bg-black text-[#EBE6DD] inline-block px-2 py-1 transform -rotate-2 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                      <span>Issue {dateString}</span><span className="h-3 w-[1px] bg-white/30"/><span>Archived</span>
                    </div>
                  </div>
                  <div className="flex gap-3 relative z-10 items-center mb-2">
                    <Volume2 className="w-5 h-5 text-black animate-pulse" />
                    <button 
                      onClick={(e) => { e.stopPropagation(); triggerHaptic(20); onClose(); }} 
                      className="group relative p-1 z-50 hover:scale-110 transition-transform"
                    >
                      <div className="absolute inset-0 bg-black transform rotate-6 group-hover:rotate-12 transition-transform shadow-[2px_2px_0px_rgba(0,0,0,0.3)]" />
                      <X className="h-6 w-6 text-[#EBE6DD] relative z-10" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 뒷면 컨텐츠 스크롤 */}
              <div className="flex-1 overflow-y-auto p-6 relative z-10 custom-scrollbar">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-1.5 bg-black text-[#EBE6DD] w-fit px-3 py-1 font-mono text-xs shadow-[2px_2px_0px_rgba(200,0,0,0.8)] transform -rotate-2">
                    <Heart className="w-3 h-3 fill-current text-red-500" /><span>{likesCount} Aura Impact</span>
                  </div>
                  <div className="relative w-[90%]">
                    <span className="absolute -top-8 -left-6 text-9xl font-serif text-black/10 pointer-events-none">“</span>
                    <h3 className="flex items-center gap-2 text-[10px] font-bold text-black uppercase tracking-widest mb-3 font-mono border-b border-black/20 pb-1 w-fit"><ArrowDownRight className="w-3 h-3 text-red-600" /> Mood Notes</h3>
                    <p className="text-lg font-serif italic font-bold text-black leading-snug relative z-10 mix-blend-multiply pl-4 border-l-4 border-red-600/50">현재 날씨 <span className="bg-black text-[#EBE6DD] px-1 font-mono not-italic text-[10px] mx-1">{item.weather}</span> 와 완벽하게 공명하는 무드. 이 룩의 날것의 텍스처를 느껴보세요.</p>
                  </div>
                  <div className="self-end w-[90%] relative pl-8">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-black/30 transform rotate-3 pointer-events-none" />
                    <h3 className="flex items-center justify-end gap-2 text-[10px] font-bold text-black uppercase tracking-widest mb-4 font-mono text-right relative z-10">Extracted DNA <Palette className="w-3 h-3 text-red-600"/></h3>
                    <div className="flex justify-end relative h-20 items-center z-10 pl-10 pr-2">
                      {(item.colors || ["#E5E0D8", "#2C2C2C", "#8A7B6E"]).map((colorHex, idx) => (
                        <div key={idx} className="w-14 h-16 bg-white border-[3px] border-black p-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 absolute" style={{ backgroundColor: colorHex, right: `${idx * 30}px`, zIndex: 10 - idx, transform: `rotate(${idx % 2 === 0 ? -4 : 4}deg)` }}>
                          <span className="absolute bottom-0 right-0.5 font-mono text-[6px] font-bold text-black/50 bg-white/80 px-0.5 backdrop-blur-sm mix-blend-hard-light">{colorHex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-32" /> 
              </div>

              {/* 소셜 티켓 */}
              {showSocial && (
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 w-[85%]">
                  <div onClick={(e) => { e.stopPropagation(); triggerHaptic(30); window.open(`https://instagram.com/${igHandle}`, '_blank'); }} className="bg-black text-[#EBE6DD] p-1 shadow-[8px_8px_0px_rgba(200,0,0,0.8)] border-2 border-[#EBE6DD] relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                    <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#EBE6DD] rounded-full border-2 border-black" /><div className="absolute top-1/2 -right-2 w-4 h-4 bg-[#EBE6DD] rounded-full border-2 border-black" />
                    <div className="border border-dashed border-[#EBE6DD]/30 p-3 flex justify-between items-center relative z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1"><Ticket className="w-3 h-3 text-red-500 animate-pulse" /><span className="font-mono text-[8px] font-bold tracking-[0.2em] uppercase text-red-500">Curator Pass</span></div>
                        <h3 className="text-xl font-black italic font-serif tracking-tighter truncate max-w-[120px]">{item.uploaderName}</h3><p className="font-mono text-[9px] opacity-60">ID: {igHandle?.toUpperCase()}</p>
                      </div>
                      <button className="group flex items-center gap-1.5 bg-red-600 text-black font-black text-[10px] px-3 py-2 tracking-widest uppercase border-2 border-[#EBE6DD] hover:bg-red-500 transition-colors active:scale-95 shadow-[3px_3px_0px_rgba(235,230,221,1)]"><Instagram className="w-3 h-3 group-hover:rotate-12 transition-transform" /> GO</button>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-black/30 font-mono text-[8px] tracking-[0.2em] uppercase pointer-events-none">
                Tap anywhere to flip back
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/ActionMenuModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, @/lib/affiliate`
* 🧩 **Component (Default):** `ActionMenuModal`

        ```typescript
        // components/ActionMenuModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Bell, Send, ShoppingCart } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";
import { generateTrackingLink } from "@/lib/affiliate";

interface ActionMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FashionItem;
  onShare: () => void;
  subscribeToPush: () => void;
  sendTestPush: () => void;
}

export default function ActionMenuModal({ isOpen, onClose, item, onShare, subscribeToPush, sendTestPush }: ActionMenuModalProps) {
  // 🌟 쇼핑몰 검색 이동 함수 (수익화 버전으로 업그레이드)
  const handleShopNow = () => {
    if (!item || !item.tags) return;
    // 1. 태그에서 #을 제거하고 검색어 조립 (예: "미니멀 블랙자켓")
    const query = item.tags.map(t => t.replace('#', '')).join(' ');
    // 2. 💸 AURA 어필리에이트 라우터를 통해 트래킹 링크 발급!
    const trackingUrl = generateTrackingLink('musinsa', query);
    // 3. 새 창으로 열기 (여기서부터 구매 발생 시 AURA 계좌로 수수료 적립)
    window.open(trackingUrl, '_blank');
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
        ### 📄 app/components/StampEditor.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, html-to-image`
* 🧩 **Component (Default):** `StampEditor`
* ww **Hooks:** `useState, useEffect, useMotionValue`

        ```typescript
        // components/StampEditor.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Check, X, Type, Circle, Stamp as StampIcon, Trash2, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';
import { toBlob } from 'html-to-image';

type StampType = 'CULT' | 'AURA_CLB' | 'ARCHIVED';

interface StampData {
  id: string;
  type: StampType;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface StampEditorProps {
  imageFile: File;
  onFinish: (editedImageBlob: Blob) => void;
  onCancel: () => void;
}

export default function StampEditor({ imageFile, onFinish, onCancel }: StampEditorProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [stamps, setStamps] = useState<StampData[]>([]);
  const [selectedStampId, setSelectedStampId] = useState<string | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => setImageUrl(e.target?.result as string);
    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  const addStamp = (type: StampType) => {
    const newStamp: StampData = {
      id: Date.now().toString(),
      type,
      x: 50,
      y: 50,
      scale: 1,
      rotation: 0,
    };
    setStamps([...stamps, newStamp]);
    setSelectedStampId(newStamp.id);
  };

  const updateStamp = (id: string, updates: Partial<StampData>) => {
    setStamps(stamps.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteStamp = (id: string) => {
    setStamps(stamps.filter(s => s.id !== id));
    setSelectedStampId(null);
  };

  const handleFinish = async () => {
    if (!editorRef.current || isSaving) return;
    setIsSaving(true);
    setSelectedStampId(null); // 🌟 캡처 전 모서리 조절자 숨기기

    setTimeout(async () => {
      try {
        const blob = await toBlob(editorRef.current!, {
          cacheBust: true,
          pixelRatio: 2,
          backgroundColor: 'transparent',
        });

        if (blob) {
          onFinish(blob);
        }
      } catch (error) {
        console.error("Stamping failed:", error);
      } finally {
        setIsSaving(false);
      }
    }, 150);
  };

  if (!imageUrl) return null;

  return (
    <div className="fixed inset-0 z-[300] bg-black flex flex-col">
      {/* 헤더 */}
      <div className="h-16 px-4 flex items-center justify-between bg-black z-20 shrink-0">
        <button onClick={onCancel} className="text-white/60 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-white font-mono text-sm uppercase tracking-widest">Stamping Phase</h2>
        <button 
          onClick={handleFinish} 
          disabled={isSaving}
          className="bg-red-600 text-white px-4 py-2 font-black text-sm uppercase tracking-widest skew-x-[-10deg] shadow-[3px_3px_0px_black] border border-white/20 flex items-center gap-2"
        >
          {isSaving ? 'Merging...' : <><Check className="w-4 h-4" /> Done</>}
        </button>
      </div>

      {/* 에디터 메인 영역 */}
      <div 
        className="flex-1 relative bg-[#1A1A1A] overflow-hidden flex items-center justify-center p-4"
        onClick={() => setSelectedStampId(null)} // 빈 공간 클릭 시 조절자 해제
      >
        <div ref={editorRef} className="relative shadow-2xl inline-block max-h-full max-w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} className="max-h-[75vh] object-contain pointer-events-none" alt="Editing Base" />          
          {stamps.map((stamp) => (
            <DraggableStamp 
              key={stamp.id} 
              stamp={stamp} 
              containerRef={editorRef} 
              isSelected={selectedStampId === stamp.id}
              onSelect={() => setSelectedStampId(stamp.id)}
              onUpdate={updateStamp}
              onDelete={deleteStamp}
            />
          ))}
        </div>
      </div>

      {/* 하단 스탬프 추가 툴바 */}
      <div className="h-24 bg-[#1A1A1A] border-t border-white/10 flex items-center justify-center gap-6 z-20 shrink-0">
        <ToolbarButton icon={<Type className="w-5 h-5" />} label="CULT BOX" onClick={() => addStamp('CULT')} color="bg-red-600" />
        <ToolbarButton icon={<Circle className="w-5 h-5" />} label="AURA CLB" onClick={() => addStamp('AURA_CLB')} color="bg-black" />
        <ToolbarButton icon={<StampIcon className="w-5 h-5" />} label="ARCHIVED" onClick={() => addStamp('ARCHIVED')} color="bg-blue-600" stroke={true} />
      </div>
    </div>
  );
}

interface ToolbarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color: string;
  stroke?: boolean;
}

const ToolbarButton = ({ icon, label, onClick, color, stroke = false }: ToolbarButtonProps) => (
    <button onClick={onClick} className="flex flex-col items-center group active:scale-95 transition-transform">
    <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center border-2 border-[#EBE6DD] shadow-[3px_3px_0px_rgba(0,0,0,0.5)] group-hover:-translate-y-1 transition-transform ${stroke ? 'text-transparent bg-clip-text border-blue-500' : 'text-[#EBE6DD]'}`}>
      {icon}
    </div>
    <span className="text-[8px] font-mono font-bold text-white/60 uppercase tracking-widest mt-2">{label}</span>
  </button>
);

interface DraggableStampProps {
  stamp: StampData;
  containerRef: React.RefObject<HTMLDivElement>;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (id: string, updates: Partial<StampData>) => void;
  onDelete: (id: string) => void;
}

// 🌟 마우스 트래킹 및 튕김 현상 완벽 해결판
const DraggableStamp = ({ stamp, containerRef, isSelected, onSelect, onUpdate, onDelete }: DraggableStampProps) => {
  const x = useMotionValue(stamp.x);
  const y = useMotionValue(stamp.y);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragMomentum={false}
      onClick={(e) => e.stopPropagation()} 
      onPointerDown={() => onSelect()}
      
      // 🌟 [해결 1] 드래그가 끝나는 순간, 현재 프레이머 모션의 좌표를 React 부모 상태에 저장! (제자리 튕김 완벽 방지)
      onDragEnd={() => {
        onUpdate(stamp.id, { x: x.get(), y: y.get() });
      }}
      
      // 🌟 [해결 2] 'transition-all' 제거! (드래그 위치 변화에 딜레이를 주어 마우스를 버벅이게 만든 주범)
      className={`absolute top-0 left-0 cursor-move ${isSelected ? 'ring-1 ring-red-500/50 rounded-sm shadow-2xl' : ''}`}
      
      style={{ x, y, touchAction: 'none', zIndex: isSelected ? 50 : 10 }}
    >
      {/* 선택되었을 때만 모서리에 나타나는 다이렉트 조절자 */}
      {isSelected && (
        <>
          {/* 좌측 상단: 삭제 */}
          <button
            onPointerDown={(e) => e.stopPropagation()} // 조절자를 누를 땐 드래그 발동 차단
            onClick={(e) => { e.stopPropagation(); onDelete(stamp.id); }}
            className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors z-20"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          {/* 우측 상단: 회전 (15도씩) */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onUpdate(stamp.id, { rotation: stamp.rotation + 15 }); }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          {/* 좌측 하단: 축소 */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onUpdate(stamp.id, { scale: Math.max(0.5, stamp.scale - 0.15) }); }}
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* 우측 하단: 확대 */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onUpdate(stamp.id, { scale: Math.min(3, stamp.scale + 0.15) }); }}
            className="absolute -bottom-4 -right-4 w-8 h-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </>
      )}

      {/* 내부 스탬프 디자인 영역 */}
      <div style={{ transform: `scale(${stamp.scale}) rotate(${stamp.rotation}deg)`, transformOrigin: 'center' }}>
        
        {stamp.type === 'CULT' && (
          <div className="bg-red-600 text-[#EBE6DD] px-3 py-1 font-black font-serif italic text-xl uppercase tracking-tighter -rotate-6 border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.4)] pointer-events-none">
            CULT.
          </div>
        )}
        
        {stamp.type === 'AURA_CLB' && (
          <div className="w-20 h-20 rounded-full bg-black border-[4px] border-[#EBE6DD] flex items-center justify-center rotate-12 shadow-[4px_4px_0px_rgba(255,0,0,0.6)] pointer-events-none">
             <div className="text-center leading-[0.8]">
               <span className="block text-[8px] font-mono text-[#EBE6DD]">THE</span>
               <span className="block text-xl font-black font-serif italic text-red-600">AURA</span>
               <span className="block text-[10px] font-mono font-bold text-[#EBE6DD] tracking-widest">CLB.</span>
             </div>
          </div>
        )}
        
        {stamp.type === 'ARCHIVED' && (
          <div className="border-[4px] border-blue-600 text-blue-600 px-4 py-2 font-mono font-bold text-lg uppercase tracking-[0.2em] rotate-3 mix-blend-hard-light opacity-80 bg-blue-600/10 backdrop-blur-sm rounded-sm pointer-events-none" style={{borderStyle: 'dashed'}}>
            ARCHIVED
            <span className="block text-[8px] text-center border-t border-blue-600 mt-1 pt-1">Verified.</span>
          </div>
        )}
        
      </div>
    </motion.div>
  );
};
        ### 📄 app/components/InstallPrompt.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react`
* 🧩 **Component (Default):** `InstallPrompt`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        // components/InstallPrompt.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Share, MoreVertical } from "lucide-react";

export default function InstallPrompt() {
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone;
    const hasDismissed = localStorage.getItem("aura_install_dismissed");
    
    if (isStandalone || hasDismissed) return;

    // 기기 판별
    const ua = window.navigator.userAgent;
    const isIOSDevice = /iPad|iPhone|iPod/.test(ua);
    setIsIOS(isIOSDevice);

    const timer = setTimeout(() => setShow(true), 3000); // 3초 뒤에 자연스럽게 팝업
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem("aura_install_dismissed", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-28 left-4 right-4 z-[150] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#2a2a2c]/95 to-[#1c1c1e]/95 p-6 shadow-2xl backdrop-blur-xl">
          <button onClick={dismiss} className="absolute right-4 top-4 rounded-full bg-white/10 p-1.5 text-white/50 hover:text-white"><X className="w-4 h-4" /></button>
          
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight mb-1">AURA 앱 설치하기</h3>
              <p className="text-sm text-white/70 mb-3">바탕화면에 설치하고 더 빠르고 매끄럽게 매일의 룩을 확인하세요.</p>
              
              {/* 기기별 맞춤 안내 */}
              <div className="rounded-xl bg-black/30 p-3 text-sm text-white/90 border border-white/5">
                {isIOS ? (
                  <div className="flex items-center gap-2">
                    하단의 <Share className="w-4 h-4 text-blue-400" /> <b>공유 버튼</b>을 누르고<br/><b>&apos;홈 화면에 추가&apos;</b>를 선택하세요.
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    상단의 <MoreVertical className="w-4 h-4 text-white" /> <b>메뉴 버튼</b>을 누르고<br/><b>&apos;앱 설치&apos;</b>를 선택하세요.
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/VibeMatch.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, next/image`
* 🧩 **Component (Default):** `VibeMatch`

        ```typescript
        
// components/VibeMatch.tsx
import { motion } from "framer-motion";
import { Fingerprint, Zap, UserPlus } from "lucide-react";
import Image from 'next/image'; // 🌟 추가

interface VibeUser {
    id: string;
    name: string;
    ig: string;
    matchRate: number;
    img: string;
  }

interface VibeMatchProps {
    report: {
        topTags: [string, number][];
        vibeTitleKo: string;
        vibeTitleEn: string;
    } | null;
    matchedUsers: VibeUser[];
}

export default function VibeMatch({ report, matchedUsers }: VibeMatchProps) {
  // 리포트가 없거나, 매칭된 유저가 한 명도 없으면 렌더링하지 않습니다.
  if (!report || !matchedUsers || matchedUsers.length === 0) return null;

  return (
    <div className="w-full mb-8 pt-4">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center gap-2">
          <Fingerprint className="w-5 h-5 text-indigo-400 animate-pulse" />
          <h2 className="text-[11px] font-black tracking-[0.2em] text-white uppercase">
            Vibe Match <span className="text-white/40 font-mono">/ SYNC</span>
          </h2>
        </div>
        <span className="text-[9px] font-mono text-indigo-400 border border-indigo-400/30 px-2 py-0.5 rounded-full">
          BASED ON &quot;{report.topTags[0]?.[0] || 'YOUR'}&quot; DNA
        </span>
      </div>

      {/* 🌟 진짜 DB에서 받아온 matchedUsers 배열을 순회합니다! */}
      <div className="flex gap-4 overflow-x-auto px-4 pb-6 snap-x snap-mandatory hide-scrollbar">
        {matchedUsers.map((user, idx) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
            className="snap-center shrink-0 w-[140px] relative rounded-[1.5rem] overflow-hidden group border border-white/10 bg-white/5"
          >
            <div className="aspect-[3/4] w-full overflow-hidden relative">
              <Image src={user.img} alt={user.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] font-mono font-black text-white">{user.matchRate}%</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-black text-white truncate">{user.name}</span>
                <span className="text-[9px] font-mono text-white/50 truncate">@{user.ig}</span>
              </div>
              <button className="w-full py-2 bg-indigo-600 rounded-xl text-[9px] font-black text-white flex items-center justify-center gap-1 active:scale-95">
                <UserPlus className="w-3 h-3" /> CONNECT
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}} />
    </div>
  );
}
        ### 📄 app/components/LockModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, @/hooks/useGatekeeper`
* 🧩 **Component (Default):** `LockModal`
* ww **Hooks:** `useState`

        ```typescript
        "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight, Sparkles } from "lucide-react";
import { VerifyResult } from "@/hooks/useGatekeeper";

interface LockModalProps {
  isOpen: boolean;
  onVerify: (code: string) => Promise<VerifyResult>;
}

export default function LockModal({ isOpen, onVerify }: LockModalProps) {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    if (!code) return;
    setIsVerifying(true);
    const res = await onVerify(code);
    if (!res.success) {
      setMsg(res.message || "오류가 발생했습니다.");
      setIsVerifying(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/90"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
            className="max-w-md w-full bg-[#111] border border-white/10 p-10 rounded-[2.5rem] text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-[#ff3b30]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#ff3b30]/20 text-[#ff3b30]">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-2 italic font-serif text-white uppercase tracking-tighter">Aura Cult.</h2>
            <p className="text-white/40 text-sm mb-8">멤버십 전용 공간입니다. 초대 코드를 입력하십시오.</p>
            <div className="space-y-4">
              <input 
                value={code} onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="ENTER CODE"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-center font-mono tracking-[0.3em] focus:border-[#ff3b30] outline-none transition-all text-white"
                onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
              />
              <button 
                onClick={handleVerify} disabled={isVerifying}
                className="w-full bg-[#ff3b30] text-white py-4 rounded-2xl font-bold hover:bg-[#ff5b50] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isVerifying ? "Verifying..." : "Access Granted"}
                {!isVerifying && <ArrowRight className="w-4 h-4" />}
              </button>
              {msg && <p className="text-[#ff3b30] text-xs font-medium">{msg}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/ProfileModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, @supabase/supabase-js`
* 🧩 **Component (Default):** `ProfileModal`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        // components/ProfileModal.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LogOut, Share2, Volume2, VolumeX, Sparkles, Instagram, Check, Link } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { FashionItem } from "../../hooks/useAura";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onLogout: () => void;
  uploadedCount: number;
  bestLook?: FashionItem;
  onSaveInstagram: (handle: string) => Promise<void> | void; 
  onOpenReport: () => void;
}

export default function ProfileModal({ isOpen, onClose, user, onLogout, uploadedCount, bestLook, onSaveInstagram, onOpenReport }: ProfileModalProps) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isIgSaved, setIsIgSaved] = useState(false); 
  
  const [igHandle, setIgHandle] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false); // 🌟 저장 중 상태 추가

  const isElite = uploadedCount >= 5; 

  useEffect(() => {
    if (user?.user_metadata?.instagram) {
      setIgHandle(user.user_metadata.instagram);
    }
  }, [user]);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => setIsMuted(true));
      setIsMuted(false);
    } else if (!isOpen && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isOpen]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) audioRef.current.play();
    else audioRef.current.pause();
    setIsMuted(!isMuted);
  };

  // 🌟 닉네임 추출 (이메일 앞부분)
  const nickname = user?.email ? user.email.split('@')[0].toLowerCase() : 'aura_user';

  // 🌟 아이디 저장 로직 (@ 기호 제거 후 저장)
  const handleSaveId = async () => {
    if (!igHandle.trim() || isSaving) return;
    setIsSaving(true);
    const cleanHandle = igHandle.replace('@', '').trim();
    
    await onSaveInstagram(cleanHandle);
    
    setIsSaving(false);
    setIsIgSaved(true);
    setTimeout(() => setIsIgSaved(false), 2000);
  };

  const getShowcaseUrl = () => {
    const targetId = igHandle ? igHandle.replace('@', '').trim() : nickname;
    return `${window.location.origin}/@${targetId}`;
  };

  // 🌟 1. [SHARE] 버튼: 시스템 기본 공유 창 띄우기
  const handlePublish = async () => {
    const shareData = {
      title: 'AURA Editorial',
      text: `Check out my AURA Archive.`,
      url: getShowcaseUrl(),
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // PC 등에서 공유 창을 지원하지 않으면 복사 기능으로 대체
        handleCopyLink();
      }
    } catch (error) {
      console.log('Share failed:', error);
    }
  };

  // 🌟 2. [COPY LINK] 버튼: 주소만 클립보드에 복사
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShowcaseUrl());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.log('Copy failed:', error);
      alert(`Copy this URL:\n${getShowcaseUrl()}`);
    }
  };

  if (!user) return null;

  const today = new Date();
  const dateString = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm" />
          
          <motion.div initial={{ opacity: 0, y: 50, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: 50, rotate: 2 }} transition={{ type: "spring", damping: 20 }} className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            
            <div className="relative w-full max-w-sm bg-[#EBE6DD] text-black shadow-2xl flex flex-col pointer-events-auto overflow-hidden rounded-sm">
              
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-multiply"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
              />

              <audio ref={audioRef} loop src="/ambient.mp3" />

              <div className="absolute top-4 right-4 flex items-center gap-2 z-50">
                <button onClick={toggleMute} className="p-2 rounded-full hover:bg-black/10 transition-colors">
                  {isMuted ? <VolumeX className="w-5 h-5 text-black" /> : <Volume2 className="w-5 h-5 text-black" />}
                </button>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-black/10 transition-colors">
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              <div className="pt-10 px-6 pb-2 border-b-2 border-black relative">
                <h1 className="text-6xl font-serif italic font-black tracking-tighter text-black uppercase">Aura.</h1>
                <p className="font-mono text-[10px] tracking-[0.2em] mt-2 uppercase text-black/60">Editorial Issue 02 — {dateString}</p>
                
                <div className="absolute top-8 right-8 transform rotate-[15deg] border-[3px] border-red-600 text-red-600 px-3 py-1 text-2xl font-black tracking-widest opacity-80 mix-blend-multiply pointer-events-none">
                  {isElite ? 'CULT\nSTATUS' : 'NEW\nFACE'}
                </div>
              </div>

              <div className="px-6 py-8 relative">
                <div className="relative w-full aspect-[4/5] bg-zinc-300 transform -rotate-2 shadow-xl border-[10px] border-white">
                  {bestLook ? (
                    <img src={bestLook.imageUrl} alt="Editorial" className="w-full h-full object-cover grayscale-[0.3] contrast-110 sepia-[0.2]" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-serif text-4xl text-black/20 italic bg-[#d9d4cb]">No Archive</div>
                  )}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-md transform rotate-3 shadow-sm border border-black/5 mix-blend-screen" />
                </div>
                
                <h2 className="absolute bottom-4 -left-2 text-6xl font-serif italic text-white mix-blend-difference font-black drop-shadow-md z-10 pointer-events-none">
                  {igHandle ? igHandle.replace('@', '') : nickname}
                </h2>
              </div>

              <div className="px-6 py-5 bg-[#F8F5F0] border-t border-dashed border-black/30 font-mono text-xs shadow-inner">
                <p className="text-center mb-4 font-bold tracking-widest uppercase">*** Archive Receipt ***</p>
                
                <div className="flex justify-between mb-1.5 border-b border-black/10 pb-1.5">
                  <span className="text-black/60">CURATOR</span>
                  <span className="font-bold">{nickname}</span>
                </div>
                <div className="flex justify-between mb-1.5 border-b border-black/10 pb-1.5">
                  <span className="text-black/60">LOOKS_UPLOADED</span>
                  <span className="font-bold">{String(uploadedCount).padStart(3, '0')}</span>
                </div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-black/60">AURA_IMPACT</span>
                  <span className="font-bold">99.9%</span>
                </div>

                {/* 🌟 쇼케이스 아이디 설정 (모든 유저에게 노출하여 바이럴 유도) */}
                <div className="mt-3 pt-3 border-t border-dotted border-black/30">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <Instagram className="w-3 h-3 text-black/60" />
                      <span className="text-black/60 tracking-widest uppercase">SHOWCASE_ID</span>
                    </div>
                    <span className="text-[8px] text-black/40 tracking-widest italic">PRESS ENTER</span>
                  </div>
                  <div className="flex items-center bg-transparent border-b border-black/30 pb-1">
                    <span className="font-bold text-black mr-1">@</span>
                    <input 
                      type="text" 
                      placeholder="your_id" 
                      value={igHandle}
                      onChange={(e) => setIgHandle(e.target.value.toLowerCase())}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveId();
                      }}
                      className="bg-transparent outline-none w-full font-bold text-black placeholder:text-black/20"
                    />
                    <button 
                      onClick={handleSaveId}
                      disabled={isSaving}
                      className={`text-[10px] font-bold tracking-widest transition-colors ${isIgSaved ? 'text-green-600' : 'text-black hover:text-red-600'}`}
                    >
                      {isSaving ? '[...]' : isIgSaved ? '[SAVED]' : '[SAVE]'}
                    </button>
                  </div>
                </div>
                
                <div className="my-4 border-t border-dotted border-black/30" />
                
                <div className="flex justify-center gap-[2px] h-8 mb-6 opacity-80 mix-blend-multiply">
                  {[...Array(35)].map((_, i) => (
                    <div key={i} className="bg-black" style={{ width: (Math.random() * 3 + 1) + 'px' }} />
                  ))}
                </div>

                <div className="flex gap-2 font-sans">
                  {/* 🌟 1. COPY LINK 버튼 (주소 복사) */}
                  <button onClick={handleCopyLink} className={`flex-1 py-3.5 border border-black font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 transition-colors active:scale-95 ${isCopied ? 'bg-green-50 text-green-600 border-green-600' : 'text-black hover:bg-black/5'}`}>
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Link className="w-3.5 h-3.5" />} 
                    {isCopied ? 'COPIED!' : 'COPY'}
                  </button>
                  {/* 🌟 2. 공유 버튼 (주소 복사) */}
                  <button onClick={handlePublish} className="flex-1 py-3.5 bg-black text-white font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors active:scale-95">
                    {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />} 
                    {isCopied ? 'URL COPIED!' : 'SHARE'}
                  </button>

                  {/* 🌟 'AI 스타일 분석' 버튼 추가 */}
                  <button 
                    onClick={() => {
                      onOpenReport(); // AI 리포트 모달 열기
                      onClose();      // 현재 프로필 모달은 닫기 (선택 사항)
                    }}
                    className="flex-1 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors active:scale-95"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    STYLE
                  </button>

                  <button onClick={onLogout} className="px-5 py-3.5 border bg-red-400 text-black font-bold flex justify-center items-center hover:bg-black/5 transition-colors active:scale-95">
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/FloatingDock.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `FloatingDock`

        ```typescript
        // components/FloatingDock.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Download, MoreHorizontal, Crown, Smartphone } from "lucide-react";

interface FloatingDockProps {
  showGyroButton: boolean;
  onRequestGyro: () => void;
  onUpload: () => void;
  onExport: () => void;
  onOpenMenu: () => void;
  onOpenAdmin: () => void;
  isExporting: boolean;
  isAdmin: boolean;
}

export default function FloatingDock({ showGyroButton, onRequestGyro, onUpload, onExport, onOpenMenu, onOpenAdmin, isExporting, isAdmin }: FloatingDockProps) {
  return (
    <>
      <AnimatePresence>
        {showGyroButton && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute bottom-28 left-1/2 z-40 flex -translate-x-1/2">
            <button onClick={onRequestGyro} className="group flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-[10px] font-bold tracking-widest text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md transition-all active:scale-95">
              <Smartphone className="h-4 w-4 animate-pulse group-hover:animate-none group-hover:rotate-12 transition-transform" />
              ENABLE 3D VIBE
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/40 p-2 shadow-2xl backdrop-blur-2xl">
        <button onClick={onUpload} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95">
          <Plus className="h-5 w-5" />
        </button>
        <div className="mx-1 h-8 w-[1px] bg-white/15" />
        <button onClick={onExport} disabled={isExporting} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95 disabled:opacity-50">
          {isExporting ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" /> : <Download className="h-5 w-5" />}
        </button>
        <div className="mx-1 h-8 w-[1px] bg-white/15" />
        <button onClick={onOpenMenu} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95">
          <MoreHorizontal className="h-5 w-5" />
        </button>
        {isAdmin && (
          <>
            <div className="mx-1 h-8 w-[1px] bg-white/15" />
            <button onClick={onOpenAdmin} className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-600/20 text-yellow-500 border border-yellow-500/30">
              <Crown className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </>
  );
}
        ### 📄 app/components/TutorialOverlay.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react`
* 🧩 **Component (Default):** `TutorialOverlay`
* ww **Hooks:** `useState, useEffect`

        ```typescript
        // components/TutorialOverlay.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand } from "lucide-react";

export default function TutorialOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에 기록이 없으면 튜토리얼을 켭니다.
    const hasSeen = localStorage.getItem("aura_tutorial_seen");
    if (!hasSeen) {
      const timer = setTimeout(() => setShow(true), 1000); // 1초 뒤 등장
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissTutorial = () => {
    localStorage.setItem("aura_tutorial_seen", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={dismissTutorial}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer"
        >
          <motion.div 
            animate={{ x: [-50, 50, -50] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mb-8 rounded-full bg-white/20 p-6 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
          >
            <Hand className="w-16 h-16 text-white" strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Swipe to Explore</h2>
          <p className="text-white/70">좌우로 넘겨 새로운 룩을 확인하세요</p>
          <p className="mt-8 rounded-full border border-white/30 px-6 py-2 text-sm text-white/50 animate-pulse">
            화면을 터치하여 시작
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/FashionCard.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, react`

        ```typescript
        import { motion, MotionValue } from "framer-motion";
import { Heart, Bookmark, Instagram, Crown, Sparkles, Compass, ChevronUp, ArrowUpRight } from "lucide-react";
import { forwardRef } from "react"; // 🌟 React에서 forwardRef 불러오기
import { FashionItem } from "../../hooks/useAura";

interface FashionCardProps {
  item: FashionItem; 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  aura: any;
  // cardRef: React.RefObject<HTMLDivElement>; ❌ 이건 이제 지웁니다!
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  imageX: MotionValue<number>;
  isExporting: boolean;
  //currentLikes: number;
  archiveCount: number; // ✅ 아카이브 숫자로 교체
  x: MotionValue<number>;
  paginate: (newDirection: number) => void;
  onToggleSave: () => void;
}

// 🌟 스와이프 파워를 계산하는 물리 공식
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const FashionCard = forwardRef<HTMLDivElement, FashionCardProps>(({ 
  item, aura, rotateX, rotateY, imageX, isExporting, archiveCount, x, paginate, onToggleSave
}, ref) => {
  
  const isSaved = aura.savedItems.some((i: FashionItem) => String(i.id) === String(item.id));
  const isSponsored = item.isSponsored;

  return (
    <motion.div
      style={{ x, rotateX, rotateY }}
      drag={isExporting ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
      ref={ref} // 🌟 [중요] 받은 ref를 motion.div에 정확히 달아줍니다!
      // 🌟 스폰서 카드일 경우 테두리에 은은한 플래티넘/골드 글로우 효과를 줍니다.
      className={`relative bottom-4 z-10 flex h-[79vh] md:h-[85vh] w-[95vw] max-w-[420px] flex-col overflow-hidden rounded-[2.5rem] bg-white/5 shadow-2xl aspect-[2/3] transform-gpu transition-all duration-700 ${
        isSponsored ? 'border-[2px] border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'border border-white/20'
      }`}
    >
      {/* 백그라운드 이미지 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/20">
        <motion.img style={{ x: imageX, scale: 1.15 }} src={item.imageUrl} crossOrigin="anonymous" className="pointer-events-none h-full w-full object-cover" />
        <div className={`absolute inset-0 ${isSponsored ? 'bg-gradient-to-t from-black via-black/20 to-black/40' : 'bg-gradient-to-t from-black/90 via-black/10 to-transparent'} pointer-events-none`} />
      </div>

      {/* 🌟 [NEW] 스폰서 전용 상단 뱃지 */}
      {isSponsored && (
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20 pointer-events-none">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-mono font-bold tracking-[0.4em] uppercase text-white/60">
              Presented By
            </span>
            <span className="text-xl font-serif italic font-black text-white tracking-tighter mix-blend-overlay">
              {item.sponsorBrand || "AURA EXCLUSIVE"}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center bg-white/10">
            <Crown className="w-4 h-4 text-white" />
          </div>
        </div>
      )}

      {/* 하단 정보 영역 */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col justify-end p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className={`whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md transition-all duration-500 ${
            item.uploaderName === 'AURA Editor' ? 'border-amber-500/30 bg-amber-500/20 text-amber-300' : archiveCount >= 10 ? 'border-indigo-400/40 bg-indigo-500/20 text-indigo-300' : 'border-white/10 bg-white/10 text-white/80'
          }`}>
            {item.uploaderName === 'AURA Editor' ? <Crown className="h-3 w-3" /> : archiveCount >= 10 ? <Sparkles className="h-3 w-3" /> : <Compass className="h-3 w-3" />}
            {item.uploaderName === 'AURA Editor' ? 'AURA EXCLUSIVE' : archiveCount >= 10 ? 'AURA TRENDSETTER' : 'AURA DISCOVER'}
          </span>
          
          <span className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white/60 backdrop-blur-md">
            {item.uploaderIg ? (
              <><Instagram className="w-3 h-3 text-white/80" /><span className="text-white/90">@{item.uploaderIg.replace('@', '')}</span></>
            ) : (
              <>by <span className="text-white/90">{item.uploaderName || 'AURA'}</span></>
            )}
          </span>
        </div>

        <h1 className="flex items-center gap-3 text-[3.5rem] md:text-6xl font-semibold tracking-tighter text-white leading-none">
          <span>{item.weather}</span><span>{item.temperature}</span>
        </h1> 
        <div className="flex flex-wrap gap-2"> {/* 태그가 많아질 경우를 대비해 flex-wrap과 gap을 추가했습니다 */}
          {item.tags?.map((tag: string, index: number) => (
            <span 
              key={index} // 리액트가 각 요소를 구분하기 위해 고유한 key가 필요합니다.
              className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/20 px-2.5 py-1 text-[15px] font-bold text-white/90 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pointer-events-auto flex gap-6 items-center mt-6">
          {/* 🌟 AURA IMPACT (좋아요) 버튼 */}
          <button 
            onPointerDown={(e) => e.stopPropagation()} // 1차 방어
            onTouchStart={(e) => e.stopPropagation()}  // 2차 방어
            onClick={(e) => { e.stopPropagation(); aura.toggleLike?.(String(item.id), item.likes || 0); }} 
            className="flex items-center gap-1.5 group"
          >
            <Heart className={`w-7 h-7 transition-transform group-active:scale-75 ${aura.likedItems?.includes(String(item.id)) ? 'fill-red-500 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'text-white hover:text-red-400 drop-shadow-md'}`} />
            <span className="font-mono text-sm font-bold text-white drop-shadow-md">{item.likes || 0}</span>
          </button>

          {/* 🌟 ARCHIVE (저장/북마크) 버튼 */}
          <button 
            onPointerDown={(e) => e.stopPropagation()} // 1차 방어
            onTouchStart={(e) => e.stopPropagation()}  // 2차 방어
            onClick={(e) => { e.stopPropagation(); onToggleSave(); }} 
            className="flex items-center gap-1.5 group ml-auto"
          >
            <Bookmark className={`w-7 h-7 transition-transform group-active:scale-75 ${isSaved ? 'fill-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'text-white hover:text-gray-300 drop-shadow-md'}`} />
            <span className="font-mono text-sm font-bold text-white drop-shadow-md">{archiveCount || 0}</span>
          </button>
        </div>

        {/* 🌟 딥다이브 (상세보기) OR 스폰서 콜투액션(CTA) 버튼 */}
        <div className={`pointer-events-auto mt-8 flex items-center justify-between transition-opacity duration-300 ${isExporting ? 'opacity-0' : 'opacity-100'}`}>
          {isSponsored ? (
             // 💎 스폰서 전용 아웃링크 버튼
             <button 
               onPointerDownCapture={(e) => e.stopPropagation()} 
               onClick={(e) => { e.stopPropagation(); window.open(item.sponsorUrl || 'https://aura.style', '_blank'); }} 
               className="w-full relative flex items-center justify-between px-6 py-4 overflow-hidden rounded-2xl bg-white text-black active:scale-95 transition-transform group"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                 </div>
                 <div className="flex flex-col items-start leading-tight">
                   <span className="text-[10px] font-mono font-bold text-black/50 tracking-[0.2em] uppercase">Exclusive Access</span>
                   <p className="text-xl font-bold tracking-tighter uppercase">Explore Collection</p>
                 </div>
               </div>
             </button>
          ) : (
            // 🔎 기존 일반 유저 딥다이브 버튼
            <button onPointerDownCapture={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); aura.triggerHaptic(20); aura.setIsDetailOpen(true); }} className="group relative flex items-center gap-3 px-6 py-3 overflow-hidden active:scale-95">
              <div className="absolute inset-0 skew-x-[-12deg] group-hover:bg-red-500 transition-colors" />
              <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-black rounded-full border border-white/20 transition-transform duration-700">
                <Sparkles className="h-4 w-4 text-red-500 fill-current" />
              </div>
              <div className="relative z-10 flex flex-col items-start leading-none">
                <span className="text-[8px] font-mono font-bold text-black/60 tracking-[0.2em] mb-0.5 uppercase">Uncover The Vibe</span>
                <p className="text-xl font-serif italic font-black text-white tracking-tighter uppercase">Deep Dive.</p>
              </div>
              <ChevronUp className="relative z-10 h-5 w-5 text-white animate-bounce ml-1" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// 🌟 [핵심 보수] 파일 맨 밑에 이 두 줄이 정확히 있어야 합니다!
FashionCard.displayName = "FashionCard"; // 리액트 개발자 도구를 위한 이름표
export default FashionCard; // 진짜로 밖으로 내보내는 문장!
        ### 📄 app/components/RankingModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `RankingModal`

        ```typescript
        import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Heart } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";

interface RankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: FashionItem[];
}

export default function RankingModal({ isOpen, onClose, items }: RankingModalProps) {
  // 💡 하트 순으로 정렬 (실제로는 서버에서 하트 카운트를 조인해서 가져오는 API가 유리하지만, 현재는 로컬 정렬)
  const rankedItems = [...items].slice(0, 10); 

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md" />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed inset-4 z-[111] m-auto max-w-lg h-fit max-h-[80vh] overflow-hidden rounded-[32px] border border-white/10 bg-[#1c1c1e] p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3"><Trophy className="text-yellow-400" /> Hall of Fame</h2>
              <button onClick={onClose} className="p-2 rounded-full bg-white/5 text-white/50"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
              {rankedItems.map((item, index) => (
                <div key={item.id} className="flex items-center gap-4 rounded-2xl bg-white/5 p-3 border border-white/5 transition-transform active:scale-[0.98]">
                  <span className={`text-xl font-black w-8 text-center ${index < 3 ? 'text-yellow-400' : 'text-white/20'}`}>{index + 1}</span>
                  <img src={item.imageUrl} className="w-16 h-20 rounded-xl object-cover" alt="Rank item" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white/90">{item.uploaderName}</p>
                    <p className="text-xs text-white/40">{item.weather} {item.temperature}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold">TOP</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/ShopModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `ShopModal`

        ```typescript
        // components/ShopModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Tag } from "lucide-react";

// 🌟 아이템 타입 정의
interface ShoppableItem {
    id: number;
    brand: string;
    item_name: string;
    price: string;
    category: string;
    image_url: string;
    product_url: string;
  }

// 🌟 items 배열을 Props로 받습니다.
interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  lookTitle?: string;
  items: ShoppableItem[];
}

export default function ShopModal({ isOpen, onClose, lookTitle, items }: ShopModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[101] flex flex-col max-h-[85vh] bg-[#0A0A0A] rounded-t-[2rem] border-t border-white/10 shadow-2xl md:max-w-md md:mx-auto"
          >
            <div className="w-full flex justify-center pt-4 pb-2" onClick={onClose}><div className="w-12 h-1.5 bg-white/20 rounded-full" /></div>

            <div className="flex items-center justify-between px-6 pb-6 pt-2 border-b border-white/5">
              <div className="flex flex-col">
                <span className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase"><Tag className="w-3 h-3" /> Shop the Vibe</span>
                <span className="text-xl font-serif italic font-bold text-white tracking-tight mt-1">{lookTitle}</span>
              </div>
              <button onClick={onClose} className="p-2 text-white/40 hover:text-white bg-white/5 rounded-full"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 hide-scrollbar">
              {/* 🌟 DB에 등록된 아이템이 없을 경우의 처리 */}
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-white/40">
                  <span className="text-xs font-mono uppercase tracking-widest">No Items Tagged</span>
                </div>
              ) : (
                /* 🌟 진짜 DB 데이터를 순회합니다! */
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 group hover:border-white/20 transition-all">
                    <div className="w-20 h-24 shrink-0 rounded-xl overflow-hidden bg-white/10 relative">
                      <img src={item.image_url} alt={item.item_name} className="w-full h-full object-cover" />
                      <div className="absolute top-1 left-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-mono text-white">{item.category}</div>
                    </div>

                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <h3 className="text-xs font-black tracking-widest uppercase text-white/90">{item.brand}</h3>
                        <p className="text-[11px] font-medium text-white/50 leading-tight mt-1 line-clamp-2">{item.item_name}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-mono font-black text-indigo-400">{item.price}</span>
                        {/* 🌟 실제 구매 링크(product_url) 연결 */}
                        <a href={item.product_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-lg text-[9px] font-black uppercase active:scale-95 transition-transform hover:bg-indigo-50 hover:text-indigo-600">
                          GET <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="px-6 py-5 border-t border-white/5 flex items-center justify-center gap-2 bg-black/50">
              <ShieldCheck className="w-4 h-4 text-white/30" />
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Verified Links by AURA</span>
            </div>
          </motion.div>
        </>
      )}
      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`}} />
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
* ww **Hooks:** `useState, useEffect`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        // components/AdminModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Crown, Activity, Image as ImageIcon, Heart, 
  Send, Eye, ArrowUpRight, LayoutDashboard, Users, 
  UserCheck, Radio, Search, Megaphone, UploadCloud, Sparkles
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabase";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

type TabType = 'overview' | 'audit' | 'members' | 'broadcast' | 'sponsors';

export default function AdminModal({ isOpen, onClose, triggerHaptic }: AdminModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [stats, setStats] = useState({ items: 0, saves: 0, users: 0, waitlist: 0 });
  
  const [waitlist, setWaitlist] = useState<any[]>([]);
  const [members, setMembers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [pushMessage, setPushMessage] = useState("");
  const [isSending, setIsSending] = useState(false);


  // ==========================================
  // 🌟 [NEW] Sponsor Ads 업로드 & AI 오토필 상태 관리
  // ==========================================
  const [sponsorFile, setSponsorFile] = useState<File | null>(null);
  const [sponsorPreview, setSponsorPreview] = useState<string | null>(null);
  const [isAnalyzingVibe, setIsAnalyzingVibe] = useState(false);
  
  const [sponsorData, setSponsorData] = useState({
    brand: "", 
    message: "", 
    url: "", 
    tags: "", 
    weather: "", 
    temp: "", 
    colors: [] as string[],
    igHandle: "", 
  });
  const [isUploadingAd, setIsUploadingAd] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🌟 1. 파일 선택 시 -> AI 분석만 실행 (mode: 'analyzeOnly')
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSponsorFile(file);
      setSponsorPreview(URL.createObjectURL(file));

      setIsAnalyzingVibe(true);
      try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('mode', 'analyzeOnly'); // 💡 핵심: DB 저장 금지 명령!
        
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        
        if (data.success) {
          // AI 분석 결과로 폼 오토필
          setSponsorData(prev => ({
            ...prev,
            weather: data.ai.weather,
            temp: data.ai.temperature,
            tags: data.ai.tags.join(', '),
            colors: data.ai.colors || ["#111", "#FFF", "#FF3B30"]
          }));
          triggerHaptic([30, 50]); 
        }
      } catch (error) {
        console.error("AI 분석 실패:", error);
      } finally {
        setIsAnalyzingVibe(false);
      }
    }
  };

  // 🚀 스폰서 광고 로켓 발사 (Auto User ID 탑재)
  const handleLaunchSponsorAd = async () => {
    if (!sponsorFile || !sponsorData.brand || !sponsorData.url) {
      return alert("이미지, 브랜드명, 아웃링크는 필수입니다.");
    }
    
    setIsUploadingAd(true);
    try {
      // 🌟 [NEW] 현재 이 버튼을 누른 관리자(로그인된 유저)의 ID를 가져옵니다.
      const { data: { user } } = await supabase.auth.getUser();

      const formData = new FormData();
      formData.append('image', sponsorFile);
      formData.append('isSponsored', 'true');
      formData.append('sponsorBrand', sponsorData.brand);
      formData.append('sponsorMessage', sponsorData.message);
      formData.append('sponsorUrl', sponsorData.url);
      
      if (sponsorData.igHandle) formData.append('uploaderIg', sponsorData.igHandle);
      
      // 🌟 [NEW] 직접 타이핑하지 않고, 시스템에서 뽑아낸 관리자 ID를 은밀하게 첨부합니다.
      if (user) formData.append('userId', user.id); 
      
      formData.append('weather', sponsorData.weather);
      formData.append('temperature', sponsorData.temp);
      formData.append('tags', sponsorData.tags);
      formData.append('colors', JSON.stringify(sponsorData.colors)); 

      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();

      if (!data.success) throw new Error(data.error);

      alert("💎 스폰서 에디토리얼이 성공적으로 라이브 되었습니다!");
      setSponsorFile(null); setSponsorPreview(null);
      setSponsorData({ brand: "", message: "", url: "", tags: "", weather: "", temp: "", colors: [], igHandle: "" });
      
    } catch (error) {
      console.error(error);
      alert("업로드 중 오류가 발생했습니다.");
    } finally {
      setIsUploadingAd(false);
    }
  };

  // 🌟 통합 데이터 로더
  useEffect(() => {
    if (!isOpen) return;

    const fetchAllData = async () => {
      // 1. 통계 집계
      const { count: itemsCount } = await supabase.from('aura_fashion_items').select('*', { count: 'exact', head: true });
      const { count: savesCount } = await supabase.from('aura_saved_looks').select('*', { count: 'exact', head: true });
      const { count: usersCount } = await supabase.from('aura_user_profiles').select('*', { count: 'exact', head: true }).eq('is_approved', true);
      const { count: waitlistCount } = await supabase.from('aura_waitlist').select('*', { count: 'exact', head: true }).eq('status', 'pending');
      
      setStats({ 
        items: itemsCount || 0, saves: savesCount || 0, 
        users: usersCount || 0, waitlist: waitlistCount || 0 
      });

      // 2. 대기자 명단 (Audit)
      const { data: waitData } = await supabase.from('aura_waitlist').select('*').eq('status', 'pending').order('created_at', { ascending: true });
      if (waitData) setWaitlist(waitData);

      // 3. 승인된 멤버 목록 (CRM)
      const { data: memberData } = await supabase.from('aura_user_profiles').select('*').eq('is_approved', true).order('updated_at', { ascending: false }).limit(100); // 1만명 대비 limit 처리
      if (memberData) setMembers(memberData);
    };

    fetchAllData();
  }, [isOpen]);

  // 🌟 [NEW] 유저 강제 탈퇴 (Ban)
  const handleBanUser = async (userId: string, email: string) => {
    const confirmBan = window.confirm(`${email || '이 유저'}님의 앱 접근을 영구 차단하시겠습니까?`);
    if (!confirmBan) return;
    
    triggerHaptic(50);
    // is_approved를 false로 돌려 문지기(Gatekeeper)가 밖으로 쫓아내게 만듭니다.
    const { error } = await supabase.from('aura_user_profiles').update({ is_approved: false }).eq('id', userId);
    
    if (!error) {
      alert("🚫 Ban 처리되었습니다. 해당 유저는 더 이상 앱에 접근할 수 없습니다.");
      setMembers(members.filter(m => m.id !== userId)); // 목록에서 즉시 제거
      setStats(prev => ({ ...prev, users: prev.users - 1 }));
    }
  };

  // 🌟 관리자 권한 상승 (Make Admin)
  const handleMakeAdmin = async (userId: string, email: string) => {
    const confirmAdmin = window.confirm(`${email || '이 유저'}님에게 최고 관리자 권한을 부여하시겠습니까?`);
    if (!confirmAdmin) return;
    
    triggerHaptic(50);
    const { error } = await supabase.from('aura_user_profiles').update({ is_admin: true }).eq('id', userId);
    
    if (!error) {
      alert("👑 관리자 권한이 부여되었습니다.");
      // 목록 UI 즉시 업데이트
      setMembers(members.map(m => m.id === userId ? { ...m, is_admin: true } : m));
    }
  };

  // 🌟 승인 로직 (기존과 동일)
  const handleApprove = async (user: any) => {
    const confirmApprove = window.confirm(`@${user.instagram_id}님을 승인하시겠습니까? (합격 이메일 자동 발송)`);
    if (!confirmApprove) return;
    
    triggerHaptic(50);
    const res = await fetch('/api/admin/approve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ waitlistId: user.id, email: user.email, instagram: user.instagram_id })
    });
    
    if (res.ok) {
      alert("✅ 승인 및 초대 코드 발송 완료!");
      setWaitlist(waitlist.filter(w => w.id !== user.id)); // UI 업데이트
      setStats(prev => ({ ...prev, waitlist: prev.waitlist - 1, users: prev.users + 1 }));
    } else {
      alert("❌ 처리 중 오류가 발생했습니다.");
    }
  };

  // 🌟 푸시 발송 로직
  const handleBroadcastPush = async () => {
    if (!pushMessage.trim()) return;
    const confirmSend = window.confirm(`전체 유저에게 푸시를 발송하시겠습니까?`);
    if (!confirmSend) return;

    setIsSending(true);
    try {
      const { data: subscribers } = await supabase.from('aura_push_subscriptions').select('user_id');
      if (!subscribers?.length) {
        alert("푸시를 구독한 유저가 없습니다.");
        return;
      }
      const pushPromises = subscribers.map(sub => 
        fetch('/api/push', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: sub.user_id, title: "AURA CEO 👑", body: pushMessage })
        })
      );
      await Promise.all(pushPromises);
      alert(`[SYSTEM] 총 ${subscribers.length}명에게 푸시 발송 완료!`);
      setPushMessage("");
    } catch (e) { alert("오류 발생"); } finally { setIsSending(false); }
  };

  // 🌟 검색 필터링 (안전망 추가)
  const filteredWaitlist = waitlist.filter(u => {
    if (!searchQuery) return true; // 검색어가 없으면 모두 통과
    const q = searchQuery.toLowerCase();
    return (u.instagram_id || '').toLowerCase().includes(q) || 
          (u.email || '').toLowerCase().includes(q);
  });

  const filteredMembers = members.filter(m => {
    if (!searchQuery) return true; // 검색어가 없으면 모두 통과
    const q = searchQuery.toLowerCase();
    return (m.email || '').toLowerCase().includes(q) || 
          (m.used_invite_code || '').toLowerCase().includes(q);
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          {/* 🌟 10,000 유저 스케일을 감당할 Command Center UI */}
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} transition={{ type: "spring", damping: 25 }} 
            className="w-full h-full max-w-[1400px] bg-[#0A0A0A] border border-white/10 rounded-[2rem] shadow-2xl flex overflow-hidden"
          >
            
            {/* LNB (좌측 사이드바) */}
            <div className="w-20 md:w-64 bg-[#111] border-r border-white/5 flex flex-col justify-between shrink-0">
              <div>
                <div className="h-20 flex items-center justify-center md:justify-start md:px-8 border-b border-white/5">
                  <Crown className="w-6 h-6 text-[#ff3b30] md:mr-3" />
                  <span className="hidden md:block font-serif italic font-black text-xl tracking-tighter">Aura<span className="text-[#ff3b30]">.</span></span>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <NavButton icon={<LayoutDashboard/>} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
                  <NavButton icon={<UserCheck/>} label={`Audit Board (${stats.waitlist})`} active={activeTab === 'audit'} onClick={() => setActiveTab('audit')} badge={stats.waitlist} />
                  <NavButton icon={<Users/>} label="Members CRM" active={activeTab === 'members'} onClick={() => setActiveTab('members')} />
                  <NavButton icon={<Radio/>} label="Broadcast" active={activeTab === 'broadcast'} onClick={() => setActiveTab('broadcast')} />
                  <NavButton icon={<Megaphone/>} label="Sponsor Ads" active={activeTab === 'sponsors'} onClick={() => setActiveTab('sponsors')} />
                </div>
              </div>
              <div className="p-4 border-t border-white/5">
                <button onClick={onClose} className="w-full flex items-center justify-center md:justify-start gap-3 p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  <X className="w-5 h-5" />
                  <span className="hidden md:block text-sm font-bold">Close Center</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col bg-[#050505] overflow-hidden">
              {/* Header */}
              <div className="h-20 border-b border-white/5 flex items-center justify-between px-8 shrink-0">
                <h2 className="text-xl font-bold uppercase tracking-widest text-white/80">
                  {activeTab === 'overview' && 'System Overview'}
                  {activeTab === 'audit' && 'Vibe Audit Board'}
                  {activeTab === 'members' && 'Member CRM'}
                  {activeTab === 'broadcast' && 'Comms & Broadcast'}
                </h2>
                {(activeTab === 'audit' || activeTab === 'members') && (
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input 
                      type="text" placeholder="Search ID or Email..." 
                      value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#111] border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs text-white focus:border-[#ff3b30] outline-none transition-all"
                    />
                  </div>
                )}
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                
                {/* 탭 1: OVERVIEW */}
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-in fade-in">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <StatCard title="Total Approved" value={stats.users} icon={<Crown className="text-yellow-400"/>} trend="+12 this week" />
                      <StatCard title="Pending Audit" value={stats.waitlist} icon={<UserCheck className="text-[#ff3b30]"/>} trend="Action Required" isAlert />
                      <StatCard title="Total Looks" value={stats.items} icon={<ImageIcon className="text-blue-400"/>} trend="DB Growing" />
                      <StatCard title="Aura Impacts" value={stats.saves} icon={<Heart className="text-rose-400"/>} trend="High Engagement" />
                    </div>
                    {/* Placeholder for future charts */}
                    <div className="w-full h-64 bg-[#111] border border-white/5 rounded-2xl flex items-center justify-center flex-col gap-2">
                       <Activity className="w-8 h-8 text-white/20" />
                       <span className="text-white/20 font-mono text-xs tracking-widest uppercase">Data Visualization Ready</span>
                    </div>
                  </div>
                )}

                {/* 탭 2: AUDIT BOARD (심사 대기열) */}
                {activeTab === 'audit' && (
                  <div className="animate-in fade-in bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-white/40 font-mono text-[10px] uppercase tracking-wider">
                        <tr>
                          <th className="p-4 font-normal">Instagram Handle</th>
                          <th className="p-4 font-normal">Contact Email</th>
                          <th className="p-4 font-normal">Applied Date</th>
                          <th className="p-4 font-normal text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredWaitlist.length === 0 ? (
                          <tr><td colSpan={4} className="p-8 text-center text-white/30">No pending audits.</td></tr>
                        ) : (
                          filteredWaitlist.map((user) => (
                            <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                              <td className="p-4">
                                <a href={`https://instagram.com/${user.instagram_id.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#ff3b30] flex items-center gap-2">
                                  @{user.instagram_id.replace('@', '')} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                              </td>
                              <td className="p-4 text-white/60 font-mono text-xs">{user.email}</td>
                              <td className="p-4 text-white/40 text-xs">{new Date(user.created_at).toLocaleDateString()}</td>
                              <td className="p-4 text-right">
                                <button onClick={() => handleApprove(user)} className="bg-[#ff3b30]/10 text-[#ff3b30] hover:bg-[#ff3b30] hover:text-white px-4 py-1.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all border border-[#ff3b30]/20">
                                  Approve
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 탭 3: MEMBERS CRM (합격자 관리) */}
                {activeTab === 'members' && (
                  <div className="animate-in fade-in bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-white/40 font-mono text-[10px] uppercase tracking-wider">
                        <tr>
                          <th className="p-4 font-normal">Identity</th>
                          <th className="p-4 font-normal">Invite Code</th>
                          {/* 🌟 [NEW] 가입일 컬럼 헤더 추가 */}
                          <th className="p-4 font-normal">Joined Date</th>
                          <th className="p-4 font-normal">Status</th>
                          <th className="p-4 font-normal text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredMembers.length === 0 ? (
                          <tr><td colSpan={5} className="p-8 text-center text-white/30">No members found.</td></tr>
                        ) : (
                          filteredMembers.map((member) => (
                            <tr key={member.id} className="hover:bg-white/[0.02] transition-colors group">
                              <td className="p-4 font-bold text-white flex items-center gap-2">
                                {member.is_admin && <Crown className="w-4 h-4 text-yellow-400" />}
                                {member.email || 'AURA Cult Member'}
                              </td>
                              <td className="p-4 text-[#ff3b30] font-mono text-xs font-bold">{member.used_invite_code || 'MASTER-KEY'}</td>
                              
                              {/* 🌟 [NEW] 가입일 데이터 렌더링 (가입일이 없으면 최근 수정일로 대체) */}
                              <td className="p-4 text-white/60 font-mono text-xs">
                                {member.created_at 
                                  ? new Date(member.created_at).toLocaleDateString() 
                                  : (member.updated_at ? new Date(member.updated_at).toLocaleDateString() : 'Unknown')}
                              </td>

                              <td className="p-4">
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                                  Verified
                                </span>
                              </td>
                              <td className="p-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                  {!member.is_admin && (
                                    <button 
                                      onClick={() => handleMakeAdmin(member.id, member.email)}
                                      className="bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white px-3 py-1.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all"
                                    >
                                      Admin
                                    </button>
                                  )}
                                  <button 
                                    onClick={() => handleBanUser(member.id, member.email)}
                                    className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all"
                                  >
                                    Ban
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 탭 4: BROADCAST (푸시 & 시스템 메시지) */}
                {activeTab === 'broadcast' && (
                  <div className="max-w-2xl animate-in fade-in space-y-6">
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-[#ff3b30]/10 rounded-xl"><Send className="w-6 h-6 text-[#ff3b30]" /></div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Global Push Notification</h3>
                          <p className="text-xs text-white/40">구독 중인 모든 유저의 디바이스로 즉시 알림을 전송합니다.</p>
                        </div>
                      </div>
                      <textarea 
                        value={pushMessage} onChange={(e) => setPushMessage(e.target.value)}
                        placeholder="전파할 메시지를 입력하세요. (예: 오늘 성수동 팝업스토어 티켓이 오픈되었습니다.)"
                        className="w-full h-32 bg-black border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/30 focus:border-[#ff3b30] outline-none resize-none mb-4 transition-colors"
                      />
                      <button 
                        onClick={handleBroadcastPush} disabled={isSending || !pushMessage.trim()}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest hover:bg-[#ff3b30] hover:text-white transition-all disabled:opacity-50 disabled:grayscale"
                      >
                        {isSending ? "Transmitting..." : "Initiate Broadcast"}
                      </button>
                    </div>
                  </div>
                )}

                {/* 탭 5: SPONSOR ADS (네이티브 광고 집행) */}
                {activeTab === 'sponsors' && (
                  <div className="animate-in fade-in grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* 좌측: 비주얼 업로드 및 미리보기 */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                        <ImageIcon className="w-4 h-4"/> Editorial Visual
                      </h3>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="relative w-full aspect-[2/3] bg-[#111] border-2 border-dashed border-white/20 rounded-[2rem] flex items-center justify-center cursor-pointer hover:border-[#ff3b30] transition-colors overflow-hidden group"
                      >
                        <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
                        {sponsorPreview ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={sponsorPreview} alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="bg-black/80 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">Change Image</span>
                            </div>
                          </>
                        ) : (
                          <div className="text-center flex flex-col items-center text-white/30 group-hover:text-[#ff3b30] transition-colors">
                            <UploadCloud className="w-12 h-12 mb-4" />
                            <span className="font-mono text-sm tracking-widest uppercase">Click to Upload</span>
                            <span className="text-[10px] mt-2">High-Res JPG/PNG</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 우측: 메타데이터 입력 폼 */}
                    <div className="flex flex-col gap-6">
                      <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center gap-2 mb-2">
                        <Megaphone className="w-4 h-4"/> Campaign Meta
                      </h3>
                      {/* 🌟 AI 분석 중일 때 빛나는 이펙트 */}
                      <AnimatePresence>
                          {isAnalyzingVibe && (
                            <motion.span 
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              className="text-[10px] font-bold text-[#ff3b30] flex items-center gap-1.5 animate-pulse"
                            >
                              <Sparkles className="w-3 h-3" /> AURA VISION ANALYZING...
                            </motion.span>
                          )}
                        </AnimatePresence>
                      
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Sponsor Brand (필수)</label>
                          <input type="text" placeholder="e.g. GENTLE MONSTER" value={sponsorData.brand} onChange={e => setSponsorData({...sponsorData, brand: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white font-bold focus:border-[#ff3b30] outline-none" />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Campaign Message</label>
                          <input type="text" placeholder="e.g. 2026 BOLD COLLECTION" value={sponsorData.message} onChange={e => setSponsorData({...sponsorData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-[#ff3b30] outline-none" />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Target URL (필수)</label>
                          <input type="url" placeholder="https://..." value={sponsorData.url} onChange={e => setSponsorData({...sponsorData, url: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-[#ff3b30] font-mono text-sm focus:border-[#ff3b30] outline-none" />
                        </div>
                        {/* 🌟 [NEW] 브랜드 인스타 계정 & User ID 입력창 추가 */}
                        <div className="grid grid-cols-1 gap-4">
                          {/* 🌟 수정된 브랜드 인스타 계정 입력창 (단독 배치) */}
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Brand Instagram</label>
                          <input 
                            type="text" 
                            placeholder="e.g. @gentlemonster" 
                            value={sponsorData.igHandle} 
                            onChange={e => setSponsorData({...sponsorData, igHandle: e.target.value})} 
                            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white font-bold focus:border-[#ff3b30] outline-none" 
                          />
                        </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Target Weather</label>
                            <input type="text" value={sponsorData.weather} onChange={e => setSponsorData({...sponsorData, weather: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white text-center text-xl focus:border-[#ff3b30] outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Target Temp</label>
                            <input type="text" value={sponsorData.temp} onChange={e => setSponsorData({...sponsorData, temp: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white text-center font-bold focus:border-[#ff3b30] outline-none" />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Style Tags (쉼표로 구분)</label>
                          <input type="text" value={sponsorData.tags} onChange={e => setSponsorData({...sponsorData, tags: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white/70 font-mono text-xs focus:border-[#ff3b30] outline-none" />
                        </div>
                      </div>

                      <button 
                        onClick={handleLaunchSponsorAd}
                        disabled={isUploadingAd || !sponsorFile || !sponsorData.brand || !sponsorData.url}
                        className="mt-auto w-full py-5 rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ff5b50] text-white font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,59,48,0.3)] disabled:opacity-50 disabled:grayscale"
                      >
                        {isUploadingAd ? "Transmitting..." : "Launch Editorial"}
                      </button>
                    </div>

                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- 보조 컴포넌트들 ---

function NavButton({ icon, label, active, onClick, badge }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl transition-all ${
        active ? 'bg-[#ff3b30] text-white shadow-[0_0_20px_rgba(255,59,48,0.3)]' : 'text-white/50 hover:bg-white/5 hover:text-white'
      }`}
    >
      <div className="w-5 h-5 flex items-center justify-center shrink-0">{icon}</div>
      <span className="hidden md:block text-sm font-bold truncate">{label}</span>
      {badge > 0 && (
        <span className={`hidden md:flex ml-auto w-5 h-5 items-center justify-center rounded-full text-[10px] font-black ${active ? 'bg-white text-[#ff3b30]' : 'bg-[#ff3b30] text-white'}`}>
          {badge}
        </span>
      )}
    </button>
  );
}

function StatCard({ title, value, icon, trend, isAlert }: any) {
  return (
    <div className={`p-6 rounded-2xl border ${isAlert ? 'bg-[#ff3b30]/10 border-[#ff3b30]/30' : 'bg-[#111] border-white/5'}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest">{title}</span>
        {icon}
      </div>
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className={`text-[10px] font-bold tracking-widest uppercase ${isAlert ? 'text-[#ff3b30] animate-pulse' : 'text-white/30'}`}>{trend}</div>
    </div>
  );
}
        ### 📄 app/components/ExploreGrid.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `ExploreGrid`

        ```typescript
        import { motion } from "framer-motion";
import { Heart, Crown, Sparkles, Trophy } from "lucide-react";
import { FashionItem } from "../../hooks/useAura"; // 🌟 FashionItem 규격서를 불러옵니다.

interface ExploreGridProps {
  items: FashionItem[];
  onSelect: (index: number) => void;
}

export default function ExploreGrid({ items, onSelect }: ExploreGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 pb-40 px-4">
      {items.map((item, idx) => {
        // 🌟 상위 3인을 위한 특별 테마 설정
        const isTop3 = idx < 3;
        const rankThemes = [
          { 
            color: "text-yellow-400", 
            bg: "bg-yellow-400", 
            border: "border-yellow-400/50", 
            shadow: "shadow-[0_0_30px_rgba(250,204,21,0.4)]",
            label: "THE VIBE KING" 
          },
          { 
            color: "text-slate-300", 
            bg: "bg-slate-300", 
            border: "border-slate-300/40", 
            shadow: "shadow-[0_0_20px_rgba(203,213,225,0.3)]",
            label: "ELITE" 
          },
          { 
            color: "text-amber-600", 
            bg: "bg-amber-600", 
            border: "border-amber-600/40", 
            shadow: "shadow-[0_0_15px_rgba(180,83,9,0.2)]",
            label: "TRENDSETTER" 
          }
        ];

        const theme = rankThemes[idx] || null;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ delay: idx * 0.02, type: "spring", stiffness: 300 }}
            onClick={() => onSelect(idx)}
            className={`relative aspect-[2/3] overflow-hidden rounded-[2.2rem] border transition-all duration-500 group cursor-pointer ${
              isTop3 ? `${theme?.border} ${theme?.shadow}` : "border-white/10 bg-white/5"
            }`}
          >
            {/* 🏆 상위 3인 전용 뱃지 라벨 */}
            {isTop3 && (
              <div className={`absolute top-0 right-0 z-30 ${theme?.bg} px-3 py-1 rounded-bl-2xl shadow-lg`}>
                <span className="text-[9px] font-black text-black tracking-tighter leading-none">
                  {theme?.label}
                </span>
              </div>
            )}

            {/* 👑 랭킹 랭크 숫자 배지 */}
            <div className={`absolute top-3 left-3 z-20 flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-black shadow-xl backdrop-blur-md border ${
              idx === 0 ? "bg-yellow-400 text-black border-yellow-200" :
              idx === 1 ? "bg-slate-300 text-black border-white" :
              idx === 2 ? "bg-amber-600 text-white border-amber-400" :
              "bg-black/50 text-white border-white/10"
            }`}>
              {idx === 0 ? <Crown className="h-4 w-4" /> : idx === 1 ? <Trophy className="h-4 w-4" /> : idx + 1}
            </div>

            {/* 메인 이미지 (1위에겐 은은한 스케일 애니메이션 추가) */}
            <motion.img 
              src={item.imageUrl} 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              animate={idx === 0 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* 하단 정보 영역 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex flex-col gap-0.5 max-w-[65%]">
                <span className={`text-[10px] font-black tracking-tight ${isTop3 ? theme?.color : "text-white/80"}`}>
                  {idx === 0 ? "GLOBAL NO.1" : idx === 1 ? "RUNNER UP" : idx === 2 ? "TOP TIER" : "AURA LOOK"}
                </span>
                <span className="text-[11px] font-bold text-white truncate">
                  @{item.uploaderIg || item.uploaderName || 'AURA'}
                </span>
              </div>
              
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    {/* 🌟 item.likes 양옆에 괄호를 치고 || 0 을 추가했습니다! */}
                    <Heart className={`h-3 w-3 ${(item.likes || 0) > 0 ? 'fill-red-500 text-red-500' : 'text-white/60'}`} />
                    <span className="text-[11px] font-black text-white font-mono">{item.likes || 0}</span>
                </div>
              </div>
            </div>

            {/* 1위 전용 반짝임 효과 (Sparkles) */}
            {idx === 0 && (
              <div className="absolute inset-0 pointer-events-none">
                <Sparkles className="absolute top-1/4 left-1/4 h-4 w-4 text-yellow-200/40 animate-pulse" />
                <Sparkles className="absolute bottom-1/3 right-1/4 h-3 w-3 text-yellow-200/60 animate-bounce" />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
        ### 📄 app/components/UploadModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, react-dropzone, lucide-react`
* 🧩 **Component (Default):** `UploadModal`
* ww **Hooks:** `useState, useDropzone, useCallback`

        ```typescript
        // components/UploadModal.tsx
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { X, Upload, Loader2, Sparkles } from "lucide-react";
import StampEditor from "./StampEditor"; 

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
  isAnalyzing: boolean;
  triggerHaptic: (pattern: number | number[]) => void;
}

export default function UploadModal({ 
  isOpen, 
  onClose, 
  onUpload, 
  isAnalyzing, 
  triggerHaptic,
}: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isStamping, setIsStamping] = useState(false);
  const [fileForStamping, setFileForStamping] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.[0]) {
      triggerHaptic(20); // 🌟 파일 드롭 시 가벼운 진동 피드백
      setFileForStamping(acceptedFiles[0]);
      setIsStamping(true);
    }
  }, [triggerHaptic]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
    multiple: false,
  });

  const handleStampingFinished = (editedImageBlob: Blob) => {
    const editedFile = new File([editedImageBlob], "aura_stamped_image.png", { type: "image/png" });
    setFile(editedFile);
    setIsStamping(false);
    setFileForStamping(null);
    // 🌟 안전 장치: onUpload가 전달되었을 때만 실행하여 크래시 방지
    if (onUpload) {
      onUpload(editedFile); 
    } else {
      console.error("onUpload 함수가 app/page.tsx에서 전달되지 않았습니다!");
    }
  };

  const handleClose = () => {
    triggerHaptic(10); // 🌟 모달 닫을 때 햅틱 피드백
    setFile(null);
    setIsStamping(false);
    setFileForStamping(null);
    onClose();
  };

  // 1. 분석 중일 때의 로딩 화면
  if (isAnalyzing) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            <div className="flex flex-col items-center text-[#EBE6DD]">
               <div className="relative mb-6">
                  <div className="absolute inset-0 bg-red-600 blur-xl opacity-50 animate-pulse"></div>
                  <Loader2 className="w-16 h-16 animate-spin relative z-10" />
               </div>
               <h3 className="text-2xl font-black font-serif italic tracking-tighter animate-pulse">ANALYZING VIBE...</h3>
               <p className="font-mono text-xs mt-2 opacity-60 tracking-widest">AURA Editor is deconstructing your look.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  
  // 2. 스탬프 에디터 화면 표시
  if (isStamping && fileForStamping) {
    return (
       <AnimatePresence>
         {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200]">
              <StampEditor 
                imageFile={fileForStamping}
                onFinish={handleStampingFinished}
                onCancel={() => setIsStamping(false)}
              />
            </motion.div>
         )}
       </AnimatePresence>
    );
  }

  // 3. 초기 업로드 드롭존 화면
  return (
    <AnimatePresence>
      {isOpen && !file && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#EBE6DD] w-full max-w-md rounded-xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] border-[4px] border-black relative"
          >
             <div className="p-6 pt-12">
              <div 
                {...getRootProps()} 
                className={`border-[3px] border-dashed rounded-lg h-64 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer group relative overflow-hidden ${isDragActive ? 'border-red-600 bg-red-600/5' : 'border-black/30 hover:border-black hover:bg-black/5'}`}
              >
                <input {...getInputProps()} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-30 pointer-events-none" />
                
                <motion.div animate={{ y: isDragActive ? [0, -10, 0] : 0 }} transition={{ repeat: Infinity, duration: 1.5 }}>
                   {isDragActive ? <Sparkles className="w-16 h-16 text-red-600" /> : <Upload className="w-12 h-12 text-black/40 group-hover:text-black transition-colors" />}
                </motion.div>
                
                <div className="text-center relative z-10">
                  <p className={`text-xl font-black font-serif italic tracking-tighter ${isDragActive ? 'text-red-600' : 'text-black'}`}>
                    {isDragActive ? "DROP IT LIKE IT'S HOT!" : "UPLOAD YOUR FIT Check."}
                  </p>
                  <p className="font-mono text-xs font-bold text-black/50 mt-2 tracking-widest uppercase">
                    Tap or Drag & Drop <br/>Supports JPG, PNG
                  </p>
                </div>
              </div>
            </div>
            {/* 닫기 버튼 */}
            <button onClick={handleClose} className="absolute top-2 right-2 p-2 hover:bg-black/10 rounded-full transition-colors z-10">
              <X className="w-6 h-6 text-black" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/api/waitlist/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @supabase/supabase-js`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/waitlist/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { instagram, email } = await req.json();

    if (!instagram || !email) {
      return NextResponse.json({ error: '정보가 누락되었습니다.' }, { status: 400 });
    }

    // DB에 신청 정보 저장
    const { error } = await supabase
      .from('aura_waitlist')
      .insert([{ instagram_id: instagram, email }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist Error:', error);
    return NextResponse.json({ error: '신청 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
        ### 📄 app/api/admin/approve/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @supabase/supabase-js, resend`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/admin/approve/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { waitlistId, email, instagram } = await req.json();

    // 1. 고유 초대 코드 생성 (AURA-XXXXXX 포맷)
    const uniqueCode = `AURA-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // 2. DB에 초대 코드 등록 (1회만 사용 가능하도록 max_uses: 1 설정)
    const { error: codeError } = await supabase
      .from('invite_codes')
      .insert([{ code: uniqueCode, max_uses: 1 }]);
    if (codeError) throw codeError;

    // 3. 대기자 명단 상태를 'approved'로 변경
    const { error: updateError } = await supabase
      .from('aura_waitlist')
      .update({ status: 'approved' })
      .eq('id', waitlistId);
    if (updateError) throw updateError;

    // 4. 💌 힙스터 감성의 다크모드 이메일 발송
    const { error: emailError } = await resend.emails.send({
      from: 'AURA CEO <ceo@auraootd.com>', // 🌟 도메인 연결 전에는 테스트용 발신자 사용
      to: email,
      subject: '[AURA] Vibe Audit Passed. Access Granted.',
      html: `
        <div style="background-color: #050505; color: #ffffff; padding: 40px; font-family: Helvetica, Arial, sans-serif; text-align: center;">
          <h1 style="font-size: 40px; font-style: italic; color: #ffffff; margin-bottom: 10px;">Aura<span style="color: #ff3b30;">.</span></h1>
          <p style="font-family: monospace; color: #ff3b30; letter-spacing: 4px; font-size: 12px; margin-bottom: 40px;">VIBE AUDIT: PASSED</p>
          
          <p style="font-size: 16px; color: #aaaaaa; line-height: 1.6; margin-bottom: 30px;">
            축하합니다, @${instagram.replace('@', '')} 님.<br/>
            AURA 크리에이티브 팀의 심사 결과, 당신의 감도가 기준을 충족하여<br/>
            <strong>Founding Originator (초기 1,000인)</strong>으로 선정되었습니다.
          </p>
          
          <div style="background-color: #111111; border: 1px solid #333333; padding: 30px; border-radius: 10px; margin-bottom: 40px;">
            <p style="font-family: monospace; color: #666666; font-size: 10px; text-transform: uppercase; margin: 0 0 10px 0;">Your Exclusive Access Code</p>
            <p style="font-family: monospace; font-size: 28px; font-weight: bold; color: #ff3b30; margin: 0; letter-spacing: 2px;">
              ${uniqueCode}
            </p>
          </div>
          
          <a href="https://aura.style" style="background-color: #ffffff; color: #000000; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 30px; font-size: 14px;">ENTER THE SYSTEM</a>
          
          <p style="margin-top: 50px; font-family: monospace; font-size: 10px; color: #444444; letter-spacing: 2px;">
            이 코드는 1회만 사용 가능하며, 타인에게 양도할 수 없습니다.<br/>
            © 2026 AURA Inc.
          </p>
        </div>
      `,
    });

    if (emailError) throw emailError;

    return NextResponse.json({ success: true, code: uniqueCode });
  } catch (error) {
    console.error('Approve Error:', error);
    return NextResponse.json({ error: '승인 처리 중 오류 발생' }, { status: 500 });
  }
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
        tags: Array.isArray(item.tags) ? item.tags : [],
        colors: Array.isArray(item.colors) ? item.colors : ["#E5E0D8", "#2C2C2C", "#8A7B6E"],
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
export const maxDuration = 60;

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;
    
    // 🌟 [NEW] 모드 스위치 및 스폰서 데이터 받기
    const mode = formData.get('mode') as string; // 'analyzeOnly'가 들어오면 분석만 함
    const isSponsored = formData.get('isSponsored') === 'true';
    const sponsorBrand = formData.get('sponsorBrand') as string;
    const sponsorMessage = formData.get('sponsorMessage') as string;
    const sponsorUrl = formData.get('sponsorUrl') as string;
    
    const userId = formData.get('userId') as string; 
    const uploaderName = formData.get('uploaderName') as string; 
    const uploaderIg = formData.get('uploaderIg') as string; 

    if (!file) throw new Error("파일이 없습니다.");

    // 1. 이미지를 버퍼로 변환
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. 🌟 Gemini Vision AI 호출 (모든 모드에서 공통 실행)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
    const prompt = `
      당신은 세계 최고의 패션 디렉터입니다. 사진의 옷을 분석하여 아래 JSON 형식으로만 완벽하게 대답해주세요. 다른 말은 절대 하지마. 마크다운(\`\`\`json 등)은 절대 포함하지 마세요.
        {
          "weather": "어울리는 날씨 이모지 1개 (☀️, ☁️, ☔️, ❄️ 중 택 1)",
          "temperature": "어울리는 온도 (예: 15°C, 28°C 등)",
          "tags": ["#스타일태그1", "#스타일태그2", "#스타일태그3"],
          "colors": ["#HexCode1", "#HexCode2", "#HexCode3"]
        }
    `;

    const base64Data = buffer.toString("base64");
    const imagePart = { inlineData: { data: base64Data, mimeType: file.type } };

    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text().trim().replace(/```json/g, '').replace(/```/g, '');
    const aiData = JSON.parse(responseText);

    // 🌟 [핵심] 'analyzeOnly' 모드면 여기서 바로 AI 결과만 던져주고 퇴근합니다! (DB 저장 안 함)
    if (mode === 'analyzeOnly') {
      return NextResponse.json({ success: true, ai: aiData });
    }

    // 3. 일반 업로드 및 스폰서 업로드 처리 (스토리지 저장)
    const fileName = `${isSponsored ? 'sponsors' : 'user_uploads'}/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const { error: uploadError } = await supabase.storage
      .from('aura_images')
      .upload(fileName, buffer, { contentType: file.type });
    
    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage.from('aura_images').getPublicUrl(fileName);

    // 4. DB 저장
    // 관리자가 오토필된 데이터를 수정했을 수 있으므로, 폼데이터로 넘어온 값을 우선시합니다.
    const customWeather = formData.get('weather') as string;
    const customTemp = formData.get('temperature') as string;
    const customTags = formData.get('tags') as string;
    const customColors = formData.get('colors') as string; // JSON string으로 받음

    const finalTags = customTags ? customTags.split(',').map(t => t.trim()) : aiData.tags;
    const finalColors = customColors ? JSON.parse(customColors) : (aiData.colors || ["#111111", "#FFFFFF", "#FF3B30"]);

    const { data: dbItem, error: dbError } = await supabase
      .from('aura_fashion_items')
      .insert([{
        user_id: userId || null, 
        uploader_name: isSponsored ? 'AURA AD' : (uploaderName || '@AURA'), 
        uploader_ig: uploaderIg || null, 
        likes_count: 0, 
        image_url: publicUrl,
        weather: customWeather || aiData.weather || "☀️",
        temperature: customTemp || aiData.temperature || "20°C",
        tags: finalTags || ["#OOTD"],
        colors: finalColors,
        
        // 🌟 스폰서 전용 데이터 삽입
        is_sponsored: isSponsored,
        sponsor_brand: sponsorBrand || null,
        sponsor_message: sponsorMessage || null,
        sponsor_url: sponsorUrl || null,
      }])
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({ success: true, item: dbItem });

  } catch (error) { 
    console.error("Upload/AI Error:", error);
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
        ### 📄 app/[username]/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@supabase/supabase-js, next, lucide-react`

        ```typescript
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
        ### 📄 public/manifest.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
    "name": "Aura",
    "short_name": "Aura.",
    "description": "AI-Powered Ambient Lookbook",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#000000",
    "theme_color": "#ff3b30",
    "icons": [
      {
        "src": "/images/icon_192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "/images/icon_512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable"
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
* ww **Hooks:** `useAuth, useWeather, useFeed, useAura, useState, useSocial`

        ```ts
        // hooks/useAura.ts
import { useState } from "react";
import { useAuth } from "./useAuth";
import { useWeather } from "./useWeather";
import { useSocial } from "./useSocial";
import { useFeed } from "./useFeed";

export interface FashionItem {
  id: string | number;
  imageUrl: string;
  weather: string;
  temperature: string;
  tags: string[];
  colors?: string[];
  uploaderName?: string;
  uploaderIg?: string;
  likes?: number;
  // 🌟 [NEW] Phase 2: 스폰서십 전용 데이터
  isSponsored?: boolean;      // 스폰서 카드 여부 (true/false)
  sponsorBrand?: string;      // 브랜드명 (예: GENTLE MONSTER)
  sponsorUrl?: string;        // 아웃링크 (컬렉션 구매 페이지)
  sponsorMessage?: string;    // 브랜드 메시지
}

export function useAura() {
  // 🌟 UI 상태 전용 관리 (모달창 등)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const triggerHaptic = (pattern: number | number[] = 50) => {
    if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(pattern);
  };

  // 🌟 4개의 엔진 가동! (서로 데이터를 주고받습니다)
  const auth = useAuth();
  const weather = useWeather();
  const social = useSocial(auth.user, () => setIsLoginModalOpen(true), triggerHaptic);
  const feed = useFeed(weather.localWeather.temp, social.savedItems);

  // 🌟 기존 UI와 완벽 호환되도록 파라미터 랩핑
  const toggleArchiveWrapper = (lookId: string) => social.toggleArchive(lookId, feed.fashionItems);
  const toggleLikeWrapper = (lookId: string, currentLikes: number) => social.toggleLike(lookId, currentLikes, feed.updateFeedLikes);

  return {
    ...auth,
    ...weather,
    ...social,
    ...feed,
    
    // 덮어씌운 래퍼 함수들 전달
    toggleArchive: toggleArchiveWrapper,
    toggleLike: toggleLikeWrapper,

    // UI 상태 전달
    isLoginModalOpen, setIsLoginModalOpen,
    isModalOpen, setIsModalOpen,
    isDetailOpen, setIsDetailOpen,
    triggerHaptic,

    // (기존 코드 호환용 빈 함수 - 푸시 구현 전까지 에러 방지용)
    subscribeToPush: () => alert("푸시 기능이 분리되었습니다."),
    sendTestPush: () => console.log("푸시 테스트"),
  };
}
        ### 📄 hooks/useSocial.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wf **Function:** `useSocial`
* ww **Hooks:** `useState, useEffect, useSocial, useMemo`

        ```ts
        // hooks/useSocial.ts
import { useState, useEffect, useMemo } from "react";
import { supabase } from "../lib/supabase";
import { FashionItem } from "./useAura";

export function useSocial(user: any, onRequireLogin: () => void, triggerHaptic: (pattern: number | number[]) => void) {
  const [savedItems, setSavedItems] = useState<FashionItem[]>([]);
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [uploadedItems, setUploadedItems] = useState<FashionItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [matchedUsers, setMatchedUsers] = useState<any[]>([]);

  // 1. 유저 데이터 동기화
  useEffect(() => {
    if (!user) {
      setSavedItems([]); setUploadedItems([]); setLikedItems([]);
      return;
    }
    const fetchSaved = async () => {
      const { data } = await supabase.from('aura_saved_looks').select('look_id, aura_fashion_items(*)').eq('user_id', user.id);
      if (data) setSavedItems(data.map((d: any) => ({
        id: d.aura_fashion_items.id, imageUrl: d.aura_fashion_items.image_url, weather: d.aura_fashion_items.weather, temperature: d.aura_fashion_items.temperature, tags: d.aura_fashion_items.tags, uploaderName: d.aura_fashion_items.uploader_name, uploaderIg: d.aura_fashion_items.uploader_ig, likes: d.aura_fashion_items.likes_count || 0,
      })));
    };
    const fetchUploaded = async () => {
      const { data } = await supabase.from('aura_fashion_items').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
      if (data) setUploadedItems(data.map((d: any) => ({
        id: d.id, imageUrl: d.image_url, weather: d.weather, temperature: d.temperature, tags: d.tags, uploaderName: d.uploader_name, uploaderIg: d.uploader_ig, likes: d.likes_count || 0,
      })));
    };
    const fetchLikes = async () => {
      const { data } = await supabase.from('aura_liked_looks').select('look_id').eq('user_id', user.id);
      if (data) setLikedItems(data.map(item => String(item.look_id)));
    };
    fetchSaved(); fetchUploaded(); fetchLikes();
  }, [user]);

  // 2. 액션 로직 (Optimistic UI 적용)
  const toggleArchive = async (lookId: string, currentItems: FashionItem[]) => {
    if (!user) return onRequireLogin();
    const isSaved = savedItems.some(item => String(item.id) === String(lookId));
    triggerHaptic(isSaved ? 30 : [30, 50, 40]);

    if (isSaved) setSavedItems(prev => prev.filter(item => String(item.id) !== String(lookId)));
    else {
      const itemToSave = currentItems.find(item => String(item.id) === String(lookId));
      if (itemToSave) setSavedItems(prev => [...prev, itemToSave]);
    }
    try {
      if (isSaved) await supabase.from('aura_saved_looks').delete().match({ user_id: user.id, look_id: lookId });
      else await supabase.from('aura_saved_looks').insert([{ user_id: user.id, look_id: lookId }]);
    } catch (e) { console.error(e); }
  };

  const toggleLike = async (lookId: string, currentLikes: number, updateFeedLikes: (id: string, isLiked: boolean) => void) => {
    if (!user) return onRequireLogin();
    const targetId = String(lookId);
    const isLiked = likedItems.includes(targetId);
    triggerHaptic([50, 100]);
    
    setLikedItems(prev => isLiked ? prev.filter(id => id !== targetId) : [...prev, targetId]);
    updateFeedLikes(targetId, isLiked); // 피드 UI 즉시 업데이트

    try {
      if (isLiked) await supabase.from('aura_liked_looks').delete().match({ user_id: user.id, look_id: lookId });
      else await supabase.from('aura_liked_looks').insert([{ user_id: user.id, look_id: lookId }]);
      await supabase.from('aura_fashion_items').update({ likes_count: isLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1 }).eq('id', lookId);
    } catch (e) { console.error(e); }
  };

  // 3. AI 리포트 및 Vibe Match
  const styleReport = useMemo(() => {
    if (savedItems.length === 0) return null;
    const allTags = savedItems.flatMap(item => (item.tags as string[]) || []);
    const tagCounts = allTags.reduce((acc: Record<string, number>, tag: string) => { acc[tag] = (acc[tag] || 0) + 1; return acc; }, {});
    const sortedTags = Object.entries(tagCounts).sort(([, a]: any, [, b]: any) => b - a).slice(0, 5);

    const VIBE_MAP: Record<string, any> = {
      Minimal: { key: "MINIMALIST", ko: "절제미를 아는 미니멀리스트", en: "THE REFINED MINIMALIST" },
      Street: { key: "STREET_SETTER", ko: "자유로운 스트릿 세터", en: "THE STREET TRENDSETTER" },
      Office: { key: "URBAN_PROFESSIONAL", ko: "지적인 어반 프로페셔널", en: "URBAN PROFESSIONAL" },
      Default: { key: "EXPLORER", ko: "새로운 스타일을 탐험하는 중", en: "STYLE EXPLORER" }
    };
    const selectedVibe = VIBE_MAP[sortedTags[0]?.[0]] || VIBE_MAP.Default;

    return { topTags: sortedTags, vibeKey: selectedVibe.key, vibeTitleKo: selectedVibe.ko, vibeTitleEn: selectedVibe.en, totalSaved: savedItems.length, impactScore: likedItems.length * 10 + savedItems.length * 20 };
  }, [savedItems, likedItems.length]);

  const loadMatchedUsers = async (myVibeKey: string, myUserId: string) => {
    const { data } = await supabase.from('aura_user_profiles').select('id, display_name, ig_handle').eq('vibe_title', myVibeKey).neq('id', myUserId).limit(5);
    if (data) setMatchedUsers(data.map((u) => ({ id: u.id, name: u.display_name || "MUSE", ig: u.ig_handle || "aura_user", matchRate: Math.floor(Math.random() * 11) + 85, img: "https://images.unsplash.com/photo-1506159904225-fbc51df093b5?q=80&w=500&auto=format&fit=crop" })));
  };

  const filteredArchive = useMemo(() => {
    if (!searchQuery) return savedItems;
    const lowerQ = searchQuery.toLowerCase();
    return savedItems.filter(item => item.tags.some(tag => tag.toLowerCase().includes(lowerQ)) || item.temperature.includes(lowerQ));
  }, [searchQuery, savedItems]);

  return { savedItems, setSavedItems, likedItems, uploadedItems, setUploadedItems, toggleArchive, toggleLike, styleReport, matchedUsers, loadMatchedUsers, filteredArchive, searchQuery, setSearchQuery };
}
        ### 📄 hooks/useGyroscope.ts
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion`
* wf **Function:** `useGyroscope`
* ww **Hooks:** `useState, useEffect, useGyroscope`

        ```ts
        // hooks/useGyroscope.ts
import { useState, useEffect } from "react";
import { MotionValue } from "framer-motion";

export function useGyroscope(mouseX: MotionValue<number>, mouseY: MotionValue<number>) {
  const [showGyroButton, setShowGyroButton] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' && 
      typeof (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission === 'function'
    ) {
      setShowGyroButton(true);
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      if (beta === null || gamma === null) return;

      const maxGamma = 30;
      const clampedGamma = Math.max(-maxGamma, Math.min(maxGamma, gamma));
      const mappedX = ((clampedGamma + maxGamma) / (maxGamma * 2)) * window.innerWidth;

      const minBeta = 20;
      const maxBeta = 70;
      const clampedBeta = Math.max(minBeta, Math.min(maxBeta, beta));
      const mappedY = ((clampedBeta - minBeta) / (maxBeta - minBeta)) * window.innerHeight;

      mouseX.set(mappedX);
      mouseY.set(mappedY);
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [mouseX, mouseY]);

  const requestGyroPermission = async () => {
    try {
      const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
      if (permission === 'granted') {
        setShowGyroButton(false);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Gyro Permission Error:", error);
      return false;
    }
  };

  return { showGyroButton, requestGyroPermission };
}
        ### 📄 hooks/useAuth.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wf **Function:** `useAuth`
* ww **Hooks:** `useEffect, useAuth`

        ```ts
        // hooks/useAuth.ts
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export function useAuth() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (provider: 'google' | 'github' | 'kakao' | 'twitter') => {
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: { redirectTo: typeof window !== "undefined" ? window.location.origin : "/" }
    });
  };

  const signOut = async () => { await supabase.auth.signOut(); };

  const saveInstagram = async (handle: string) => {
    if (!user) return;
    const { data, error } = await supabase.auth.updateUser({ data: { instagram: handle } });
    if (data?.user) setUser(data.user); 
    
    if (!error) {
      // 과거 게시물 아이디 동기화
      await supabase.from('aura_fashion_items').update({ uploader_ig: handle }).eq('user_id', user.id);
    }
  };

  return { user, setUser, signIn, signOut, login: signIn, logout: signOut, saveInstagram };
}
        ### 📄 hooks/useWeather.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wf **Function:** `useWeather`
* ww **Hooks:** `useWeather, useState, useEffect`

        ```ts
        // hooks/useWeather.ts
import { useState, useEffect } from "react";

export function useWeather() {
  const [localWeather, setLocalWeather] = useState({temp: 15, city: "Seoul", condition: "URBAN" });

  const getAuraVibe = (weatherCode: number) => {
    if (weatherCode === 0) return "SUNNY";
    if (weatherCode >= 1 && weatherCode <= 3) return "CHILL";
    if (weatherCode === 45 || weatherCode === 48) return "MIST";
    if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82)) return "GLOOMY";
    if ((weatherCode >= 71 && weatherCode <= 77) || weatherCode === 85 || weatherCode === 86) return "FROST";
    if (weatherCode >= 95) return "WILD";
    return "URBAN";
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if ("geolocation" in navigator) {
          const pos = await new Promise<GeolocationPosition>((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`);
          const weatherData = await weatherRes.json();
          
          setLocalWeather({ 
            temp: Math.round(weatherData.current_weather.temperature), 
            city: "Current Location",
            condition: getAuraVibe(weatherData.current_weather.weathercode)
          });
        }
      } catch (e) { 
        console.warn("위치 권한 없음. 기본 날씨를 사용합니다."); 
      }
    };
    fetchWeather();
  }, []);

  return { localWeather };
}
        ### 📄 hooks/useGatekeeper.ts
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase`
* wb **Type/Intf:** `VerifyResult`
* wf **Function:** `useGatekeeper`
* ww **Hooks:** `useState, useEffect, useGatekeeper`

        ```ts
        import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface VerifyResult {
  success: boolean;
  message?: string;
}

export function useGatekeeper(userId: string | undefined) {
  const [isApproved, setIsApproved] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsApproved(false);
      setLoading(false);
      return;
    }

    const checkStatus = async () => {
      const { data } = await supabase
        .from('aura_user_profiles')
        .select('is_approved')
        .eq('id', userId)
        .single();

      setIsApproved(data?.is_approved === true);
      setLoading(false);
    };

    checkStatus();
  }, [userId]);

  const verifyCode = async (code: string): Promise<VerifyResult> => {
    try {
      const { data: codeData, error: codeError } = await supabase
        .from('invite_codes')
        .select('*')
        .eq('code', code.toUpperCase())
        .single();

      if (codeError || !codeData || codeData.used_count >= codeData.max_uses) {
        return { success: false, message: "유효하지 않거나 만료된 코드입니다." };
      }

      const { error: updateError } = await supabase
        .from('aura_user_profiles')
        .update({ is_approved: true, used_invite_code: code.toUpperCase() })
        .eq('id', userId);

      if (updateError) return { success: false, message: "승인 처리 중 오류 발생" };

      await supabase
        .from('invite_codes')
        .update({ used_count: codeData.used_count + 1 })
        .eq('code', code.toUpperCase());

      setIsApproved(true);
      return { success: true };
    } catch (e) {
      return { success: false, message: "시스템 오류가 발생했습니다." };
    }
  };

  return { isApproved, loading, verifyCode };
}
        ### 📄 hooks/useFeed.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wf **Function:** `useFeed`
* ww **Hooks:** `useState, useEffect, useFeed`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // hooks/useFeed.ts
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { getPersonalizedFeed } from "../lib/recommendation";
import { FashionItem } from "./useAura";

export function useFeed(currentTemp: number, savedItems: FashionItem[]) {
  const [rawItems, setRawItems] = useState<FashionItem[]>([]);
  const [fashionItems, setFashionItems] = useState<FashionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [trendingItems, setTrendingItems] = useState<FashionItem[]>([]);
  const [shoppableItems, setShoppableItems] = useState<any[]>([]);

  // 1. 전체 데이터 로드
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`/api/fashion?timestamp=${new Date().getTime()}`, { cache: 'no-store' });
        const data = await response.json();
        setRawItems(data);
      } catch (e) { console.error(e); }
    };
    fetchItems();
  }, []);

  // 2. 추천 알고리즘 적용 (온도나 저장한 룩이 바뀔 때마다 섞어줌)
  useEffect(() => {
    if (rawItems.length === 0) return;
    setFashionItems(getPersonalizedFeed(rawItems, savedItems, currentTemp));
  }, [rawItems, currentTemp, savedItems.length]); // 🌟 의존성 최적화

  // 3. 글로벌 랭킹 페칭
  const fetchTrendingItems = async () => {
    const { data } = await supabase.from('aura_fashion_items').select('*').order('likes_count', { ascending: false }).limit(50);
    if (data) setTrendingItems(data.map((d: any) => ({ id: d.id, imageUrl: d.image_url, weather: d.weather, temperature: d.temperature, tags: d.tags, uploaderName: d.uploader_name, uploaderIg: d.uploader_ig, likes: d.likes_count || 0 })));
  };

  // 4. 쇼핑 아이템 페칭
  const loadShoppableItems = async (lookId: number) => {
    const { data } = await supabase.from('aura_shoppable_items').select('*').eq('look_id', lookId);
    if (data) setShoppableItems(data);
  };

  // 5. 좋아요 UI 즉각 업데이트용 헬퍼 함수
  const updateFeedLikes = (lookId: string, isLiked: boolean) => {
    setFashionItems(prev => prev.map(item => 
      String(item.id) === lookId ? { ...item, likes: isLiked ? Math.max(0, (item.likes || 0) - 1) : (item.likes || 0) + 1 } : item
    ));
  };

  return { fashionItems, currentIndex, setCurrentIndex, direction, setDirection, trendingItems, fetchTrendingItems, shoppableItems, loadShoppableItems, updateFeedLikes };
}
        ### 📄 lib/affiliate.ts
        > **Context Summary**
        * wf **Function:** `generateTrackingLink`

        ```ts
        // lib/affiliate.ts

// 🌟 제휴 마케팅사에서 발급받을 매체사(Publisher) ID
// 추후 Vercel 환경 변수(.env)에 등록하여 보안을 유지합니다.
const AFFILIATE_IDS = {
    linkprice_musinsa: process.env.NEXT_PUBLIC_LINKPRICE_ID || "AURA_TEST_ID",
    rakuten_ssense: process.env.NEXT_PUBLIC_RAKUTEN_ID || "AURA_TEST_ID",
  };
  
  /**
   * 💸 AURA Affiliate Router
   * 일반 링크나 검색어를 돈이 되는 '트래킹 링크'로 변환해주는 엔진입니다.
   */
  export function generateTrackingLink(platform: 'musinsa' | 'ssense' | 'farfetch', queryOrUrl: string) {
    switch (platform.toLowerCase()) {
      case 'musinsa':
        // 무신사 검색 결과를 링크프라이스 딥링크로 감싸는 로직 (예시 구조)
        const rawMusinsaUrl = `https://www.musinsa.com/search/musinsa/integration?q=${encodeURIComponent(queryOrUrl)}`;
        // 💡 실제 링크프라이스 가입 후, 제공받는 포맷으로 아래 URL을 교체합니다.
        return `https://click.linkprice.com/click.php?m=musinsa&a=${AFFILIATE_IDS.linkprice_musinsa}&url=${encodeURIComponent(rawMusinsaUrl)}`;
        
      case 'ssense':
        // 센스, 파페치 등 글로벌 부티크 라쿠텐 어필리에이트 로직
        return `https://click.rakuten.com/click.php?id=${AFFILIATE_IDS.rakuten_ssense}&url=${encodeURIComponent(queryOrUrl)}`;
        
      default:
        return queryOrUrl;
    }
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
        ### 📄 i18n.ts
        > **Context Summary**
        * 🔗 **Imports:** `next-intl/server`

        ```ts
        import {getRequestConfig} from 'next-intl/server';
import {getUserLocale} from './services/locale'; // 유저 설정 저장 서비스 (추후 생성)

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
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
    "browser-image-compression": "^2.0.2",
    "dotenv": "^17.3.1",
    "framer-motion": "^12.34.0",
    "googleapis": "^171.4.0",
    "html-to-image": "^1.11.13",
    "lucide-react": "^0.564.0",
    "next": "14.2.35",
    "next-intl": "^4.8.3",
    "react": "^18",
    "react-dom": "^18",
    "react-dropzone": "^15.0.0",
    "resend": "^6.9.2",
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

        ### 📄 messages/en.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
    "Index": {
      "title": "AURA : PRIVATE FITTING",
      "description": "High-end outfit curator in perfect resonance with tomorrow's weather.",
      "invite_code": "Enter your invite code",
      "enter": "ENTER SYSTEM"
    },
    "Menu": {
      "sync_active": "AURA SYNC : ACTIVE",
      "sync_off": "SYNC WITH AURA",
      "sync_desc_on": "Frequency synced. Awaiting tomorrow's inspiration.",
      "sync_desc_off": "Every 7 AM, receive a VIBE DROP synced with the weather.",
      "bug_report": "BUG REPORT & FEEDBACK"
    },


    "Home": {
        "verify_identity": "VERIFY IDENTITY",
        "switch_account": "SWITCH ACCOUNT",
        "for_you": "FOR YOU",
        "explore": "EXPLORE",
        "magazine": "MAGAZINE",
        "aura_directive": "AURA DIRECTIVE",
        "mission_desc": "Prove your OOTD that perfectly conquered today's weather.",
        "login_prompt": "Identify yourself to access the archive.",
        "welcome_cult": "Welcome to AURA CULT.",
        "invalid_code": "Expired or invalid code.",
        "share_link_copied": "Direct sharing is not supported, so the link has been copied."
    },
    "ActionMenu": {
        "share_title": "Share this Look",
        "share_desc": "Send lookbook image to Kakao/Instagram",
        "shop_title": "Shop this Style",
        "shop_desc": "Search similar items on Musinsa",
        "sync_active": "AURA SYNC : ACTIVE",
        "sync_off": "SYNC WITH AURA",
        "sync_desc_on": "Frequency synced. Awaiting tomorrow's inspiration.",
        "sync_desc_off": "Every 7 AM, receive a VIBE DROP synced with the weather.",
        "bug_report": "Bug Report & Feedback",
        "bug_desc": "Send opinions directly to AURA team",
        "test_push": "Send Test Push (Dev)"
    },

    "Archive": {
        "title": "My Space",
        "tab_saved": "Saved Looks",
        "tab_uploaded": "My Closet",
        "search_placeholder": "Rainy day, Hot day, OOTD...",
        "empty_saved": "No looks match your search.",
        "empty_uploaded": "No clothes uploaded yet."
    },
    "Profile": {
        "editorial_issue": "Editorial Issue 02",
        "no_archive": "No Archive",
        "receipt_title": "*** Archive Receipt ***",
        "curator": "CURATOR",
        "looks_uploaded": "LOOKS_UPLOADED",
        "aura_impact": "AURA_IMPACT",
        "showcase_id": "SHOWCASE_ID",
        "press_enter": "PRESS ENTER",
        "btn_copy": "COPY",
        "btn_copied": "COPIED!",
        "btn_share": "SHARE",
        "btn_style": "STYLE"
    },

    "Login": {
        "title": "Join AURA",
        "description": "Log in to create your own archive.",
        "continue_google": "Continue with Google",
        "continue_kakao": "Continue with Kakao",
        "continue_github": "Continue with GitHub",
        "continue_x": "Continue with X"
    },
    "Upload": {
        "analyzing_title": "ANALYZING VIBE...",
        "analyzing_desc": "AURA Editor is deconstructing your look.",
        "drop_active": "DROP IT LIKE IT'S HOT!",
        "upload_prompt": "UPLOAD YOUR FIT Check.",
        "upload_support_1": "Tap or Drag & Drop",
        "upload_support_2": "Supports JPG, PNG"
    },
    "Shop": {
        "title": "Shop the Vibe",
        "empty": "No Items Tagged",
        "get_btn": "GET",
        "verified": "Verified Links by AURA"
    },
    "DeepDive": {
        "tap_flip": "Tap to Flip",
        "curator": "Curator",
        "note": "Note",
        "issue": "Issue",
        "archived": "Archived",
        "aura_impact": "Aura Impact",
        "mood_notes": "Mood Notes",
        "mood_desc_pre": "A mood perfectly resonating with today's weather: ",
        "mood_desc_post": ". Feel the raw texture of this look.",
        "extracted_dna": "Extracted DNA",
        "curator_pass": "Curator Pass",
        "tap_back": "Tap anywhere to flip back"
    },
    
    "MagazineDetail": {
        "back_to_index": "BACK TO INDEX",
        "published_on": "PUBLISHED",
        "written_by": "CURATOR",
        "shop_editorial": "SHOP THE EDITORIAL",
        "shop_desc": "Discover the key pieces selected by our editor.",
        "get_item": "GET",
        "article_not_found": "Article not found.",
        "cult_only_msg": "This editorial is exclusively for AURA CULT members.",
        "cult_only_desc_1": "Prove your style by uploading at least 5 looks",
        "cult_only_desc_2": "to unlock access to the hidden archive.",
        "go_to_upload": "GO TO UPLOAD",
        "go_back": "GO BACK",
        "footer": "© 2026 AURA EDITORIAL. ALL RIGHTS RESERVED."
    },
    "Magazine": {
        "editorial_issue": "Editorial Issue",
        "description": "High-end outfit journal in perfect resonance with tomorrow's weather.",
        "empty_state": "No issues published yet."
    },

    "Landing": {
        "hero_badge": "Ambient Intelligence",
        "hero_quote_1": "\"The era of search is over. Only your ",
        "hero_quote_highlight": "Vibe",
        "hero_quote_2": " remains.\"",
        "hero_btn": "ENTER THE SYSTEM",
        "hero_ticker": "Aura Vision Engine / Atmospheric Curation / Digital DNA Match / No Search Needed / ",
        "engine_title_1": "The Engine",
        "engine_title_2": "of Aura.",
        "engine_01_badge": "01. AURA Environmental Sync",
        "engine_01_title": "Atmospheric Reading",
        "engine_01_desc": "AURA reads the data of the air you breathe. Beyond temperature and humidity, it syncs the subtle color shifts of the city to your fashion looks in real-time.",
        "engine_02_badge": "02. AURA Vision Intelligence",
        "engine_02_title": "DNA Deconstruction",
        "engine_02_desc": "AURA AI looks at the source of style, not just images. It analyzes textures, silhouettes, and color waves in your uploaded photos to complete your unique fashion archetype.",
        "mag_bg": "Editorial",
        "mag_badge": "Aura Editorial",
        "mag_title_1": "The",
        "mag_title_2": "Curator.",
        "mag_desc_1": "By analyzing real-time lookbook data and tomorrow's weather, AURA's AI editor publishes the most high-end journal.",
        "mag_desc_2": "Beyond reading, instantly own the core pieces that inspired you.",
        "mag_li_1": "Weather-Synced Curation",
        "mag_li_2": "Shoppable Lookbooks",
        "mag_li_3": "Cult-Exclusive Archives (🔒)",
        "mag_btn": "Read The Issues",
        "cult_badge": "Invite-Only Collective",
        "cult_title_1": "Define the Scene.",
        "cult_title_2": "Become the Standard.",
        "cult_desc_1": "Followers who follow trends are important. We are looking for the ",
        "cult_desc_highlight": "1,000 originals whose vibe is the genre itself, leading them definitively.",
        "cult_desc_2": "",
        "cult_f1_title": "The Style Originator",
        "cult_f1_desc": "Your look is not just data. It becomes the standard by which AURA AI defines 'hip'.",
        "cult_f2_title": "Verified Taste Authority",
        "cult_f2_desc": "The 'Founder' badge on your profile is the most definitive proof of your discerning eye in this space.",
        "cult_f3_title": "Curator of the Future",
        "cult_f3_desc": "Experience new features and determine the direction before they are revealed to the public.",
        "card_title": "Aura Black.",
        "card_sub": "Private Access Key",
        "card_auth": "Authorized Code",
        "card_status": "Member Status",
        "card_role": "Founding Originator",
        "wait_title": "Request Access",
        "wait_desc_1": "AURA maintains community sensitivity through rigorous screening.",
        "wait_desc_2": "Submit your ",
        "wait_desc_highlight": "Instagram ID",
        "wait_desc_3": " to wait for review.",
        "wait_ph_ig": "INSTAGRAM @HANDLE",
        "wait_ph_email": "YOUR EMAIL ADDRESS",
        "wait_btn": "SUBMIT FOR AUDIT",
        "wait_btn_ing": "TRANSMITTING...",
        "wait_count_1": "Current Waitlist: ",
        "wait_count_2": " People",
        "audit_badge": "Vibe Audit",
        "audit_title": "Under Review.",
        "audit_desc": "The AURA Creative Team is analyzing your DNA.",
        "audit_target": "TARGET",
        "audit_status": "STATUS",
        "audit_pending": "PENDING",
        "audit_guide": "Once the review is complete, an invitation code will be sent to the email provided.",
        "audit_close": "Close Receipt",
        "footer": "© 2026 AURA / Beyond Fashion / All Rights Reserved.",
        "alert_empty": "Please enter both Instagram ID and email.",
        "alert_error": "An error occurred. Please try again.",
        "alert_network": "Network error occurred.",
        "footer_terms": "TERMS OF SERVICE",
        "footer_privacy": "PRIVACY POLICY",
        "footer_contact": "CONTACT US",
        "footer_company": "COMPANY: YEAHPLUS CO., LTD. | CEO: JAEHYUK KO",
        "footer_biz_num": "BIZ REG NO: 283-88-02519 | E-COMMERCE REG: 2022-GYEONGGIPAJU-2995",
        "footer_address": "ADDRESS: A318, 304, 3F, 33 Gyoha-ro 159beon-gil, Paju-si, Gyeonggi-do, Republic of Korea",
        "footer_email": "EMAIL: contact@auraootd.com | TEL: +82-10-4490-0518",
        "footer_copyright": "© 2026 AURA / YEAHPLUS CO., LTD. / ALL RIGHTS RESERVED."
    }
  }
        ### 📄 messages/ko.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
    "Index": {
      "title": "AURA : PRIVATE FITTING",
      "description": "내일의 날씨와 완벽히 공명하는 하이엔드 아웃핏 큐레이터",
      "invite_code": "초대 코드를 입력하세요",
      "enter": "시스템 접속"
    },
    "Menu": {
      "sync_active": "AURA SYNC : ACTIVE",
      "sync_off": "SYNC WITH AURA",
      "sync_desc_on": "주파수 동기화 완료. 내일의 영감을 대기 중입니다.",
      "sync_desc_off": "매일 아침 7시, 날씨와 완벽히 공명하는 VIBE DROP",
      "bug_report": "버그 제보 및 피드백"
    },

    "Home": {
        "verify_identity": "VERIFY IDENTITY",
        "switch_account": "SWITCH ACCOUNT",
        "for_you": "FOR YOU",
        "explore": "EXPLORE",
        "magazine": "MAGAZINE",
        "aura_directive": "AURA DIRECTIVE",
        "mission_desc": "오늘 이 날씨를 완벽하게 정복한 당신의 OOTD를 세상에 증명하십시오.",
        "login_prompt": "Identify yourself to access the archive.",
        "welcome_cult": "AURA CULT에 오신 것을 환영합니다.",
        "invalid_code": "만료되었거나 잘못된 코드입니다.",
        "share_link_copied": "이 기기는 이미지 직접 공유를 지원하지 않아 링크가 복사되었습니다."
    },
    "ActionMenu": {
        "share_title": "이 룩 공유하기",
        "share_desc": "룩북 이미지를 카카오톡/인스타로 전송",
        "shop_title": "이 스타일 쇼핑하기",
        "shop_desc": "무신사에서 비슷한 옷 검색",
        "sync_active": "AURA SYNC : ACTIVE",
        "sync_off": "SYNC WITH AURA",
        "sync_desc_on": "주파수 동기화 완료. 내일의 영감을 대기 중입니다.",
        "sync_desc_off": "매일 아침 7시, 날씨와 완벽히 공명하는 VIBE DROP",
        "bug_report": "버그 제보 및 피드백",
        "bug_desc": "AURA 개발팀에게 직접 의견 보내기",
        "test_push": "알림 테스트 발송 (Dev)"
    },

    "Archive": {
        "title": "My Space",
        "tab_saved": "찜한 룩",
        "tab_uploaded": "내 옷장",
        "search_placeholder": "비 오는 날, 더운 날, OOTD...",
        "empty_saved": "검색 조건에 맞는 룩이 없습니다.",
        "empty_uploaded": "아직 올린 옷이 없습니다."
    },
    
    "Profile": {
        "editorial_issue": "Editorial Issue 02",
        "no_archive": "No Archive",
        "receipt_title": "*** Archive Receipt ***",
        "curator": "CURATOR",
        "looks_uploaded": "LOOKS_UPLOADED",
        "aura_impact": "AURA_IMPACT",
        "showcase_id": "SHOWCASE_ID",
        "press_enter": "PRESS ENTER",
        "btn_copy": "COPY",
        "btn_copied": "COPIED!",
        "btn_share": "SHARE",
        "btn_style": "STYLE"
    },

    "Login": {
        "title": "Join AURA",
        "description": "로그인하고 나만의 옷장을 만드세요.",
        "continue_google": "Continue with Google",
        "continue_kakao": "Continue with Kakao",
        "continue_github": "Continue with GitHub",
        "continue_x": "Continue with X"
    },
    "Upload": {
        "analyzing_title": "ANALYZING VIBE...",
        "analyzing_desc": "AURA Editor가 당신의 룩을 디테일하게 분석 중입니다.",
        "drop_active": "DROP IT LIKE IT'S HOT!",
        "upload_prompt": "당신의 룩을 보여주세요.",
        "upload_support_1": "터치하거나 이미지를 끌어다 놓으세요",
        "upload_support_2": "지원 포맷: JPG, PNG"
    },

    "Shop": {
        "title": "Shop the Vibe",
        "empty": "No Items Tagged",
        "get_btn": "GET",
        "verified": "Verified Links by AURA"
    },
    "DeepDive": {
        "tap_flip": "Tap to Flip",
        "curator": "Curator",
        "note": "Note",
        "issue": "Issue",
        "archived": "Archived",
        "aura_impact": "Aura Impact",
        "mood_notes": "Mood Notes",
        "mood_desc_pre": "현재 날씨 ",
        "mood_desc_post": " 와 완벽하게 공명하는 무드. 이 룩의 날것의 텍스처를 느껴보세요.",
        "extracted_dna": "Extracted DNA",
        "curator_pass": "Curator Pass",
        "tap_back": "Tap anywhere to flip back"
    },
    "MagazineDetail": {
        "back_to_index": "BACK TO INDEX",
        "published_on": "PUBLISHED",
        "written_by": "CURATOR",
        "shop_editorial": "SHOP THE EDITORIAL",
        "shop_desc": "에디터가 셀렉한 이 룩의 핵심 피스들을 확인하세요.",
        "get_item": "GET",
        "article_not_found": "기사를 찾을 수 없습니다.",
        "cult_only_msg": "이 매거진은 AURA CULT 멤버에게만 허락됩니다.",
        "cult_only_desc_1": "당신의 룩을 5번 이상 증명(업로드)하고",
        "cult_only_desc_2": "숨겨진 아카이브의 접근 권한을 획득하십시오.",
        "go_to_upload": "증명하러 가기 (Upload)",
        "go_back": "뒤로 가기",
        "footer": "© 2026 AURA EDITORIAL. ALL RIGHTS RESERVED."
    },
    "Magazine": {
        "editorial_issue": "Editorial Issue",
        "description": "내일의 날씨와 완벽히 공명하는 하이엔드 아웃핏 저널.",
        "empty_state": "아직 발행된 기사가 없습니다."
    },

    "Landing": {
        "hero_badge": "Ambient Intelligence",
        "hero_quote_1": "\"검색의 시대는 끝났습니다. 이제 당신의 ",
        "hero_quote_highlight": "분위기",
        "hero_quote_2": "만 남습니다.\"",
        "hero_btn": "ENTER THE SYSTEM",
        "hero_ticker": "Aura Vision Engine / Atmospheric Curation / Digital DNA Match / No Search Needed / ",
        "engine_title_1": "The Engine",
        "engine_title_2": "of Aura.",
        "engine_01_badge": "01. AURA Environmental Sync",
        "engine_01_title": "Atmospheric Reading",
        "engine_01_desc": "AURA는 당신이 숨 쉬는 공기의 데이터를 읽습니다. 기온, 습도, 풍향을 넘어 현재 도시의 미묘한 색채 변화까지 실시간으로 패션 룩에 동기화합니다.",
        "engine_02_badge": "02. AURA Vision Intelligence",
        "engine_02_title": "DNA Deconstruction",
        "engine_02_desc": "AURA AI는 단순한 이미지가 아닌 스타일의 근원을 봅니다. 업로드된 사진 속 소재의 질감, 실루엣의 곡선, 컬러의 파동을 분석하여 당신만의 패션 아키타입을 완성합니다.",
        "mag_bg": "Editorial",
        "mag_badge": "Aura Editorial",
        "mag_title_1": "The",
        "mag_title_2": "Curator.",
        "mag_desc_1": "유저들의 실시간 룩북 데이터와 내일의 날씨를 분석하여, AURA의 AI 에디터가 가장 감도 높은 하이엔드 저널을 발행합니다.",
        "mag_desc_2": "단순히 읽는 것을 넘어, 영감을 준 핵심 피스(Piece)들을 즉시 소유하십시오.",
        "mag_li_1": "Weather-Synced Curation",
        "mag_li_2": "Shoppable Lookbooks",
        "mag_li_3": "Cult-Exclusive Archives (🔒)",
        "mag_btn": "Read The Issues",
        "cult_badge": "Invite-Only Collective",
        "cult_title_1": "Define the Scene.",
        "cult_title_2": "Become the Standard.",
        "cult_desc_1": "트렌드를 따르는 팔로워는 중요합니다. ",
        "cult_desc_highlight": "그들을 확실하게 이끌면서, 자신의 바이브가 곧 장르인 1,000명",
        "cult_desc_2": "의 오리지널을 찾습니다.",
        "cult_f1_title": "The Style Originator",
        "cult_f1_desc": "당신의 룩은 단순한 데이터가 아닙니다. AURA AI가 '힙함'을 정의하는 기준점이 됩니다.",
        "cult_f2_title": "Verified Taste Authority",
        "cult_f2_desc": "당신의 프로필에 부여되는 'Founder' 배지는 이 구역에서 가장 확실한 안목의 증명서입니다.",
        "cult_f3_title": "Curator of the Future",
        "cult_f3_desc": "대중에게 공개되기 전, 가장 먼저 새로운 기능을 경험하고 방향성을 결정합니다.",
        "card_title": "Aura Black.",
        "card_sub": "Private Access Key",
        "card_auth": "Authorized Code",
        "card_status": "Member Status",
        "card_role": "Founding Originator",
        "wait_title": "Request Access",
        "wait_desc_1": "AURA는 엄격한 심사를 통해 커뮤니티의 감도를 유지합니다.",
        "wait_desc_2": "당신의 ",
        "wait_desc_highlight": "Instagram ID",
        "wait_desc_3": "를 제출하여 심사를 대기하십시오.",
        "wait_ph_ig": "INSTAGRAM @HANDLE",
        "wait_ph_email": "YOUR EMAIL ADDRESS",
        "wait_btn": "SUBMIT FOR AUDIT",
        "wait_btn_ing": "TRANSMITTING...",
        "wait_count_1": "Current Waitlist: ",
        "wait_count_2": " People",
        "audit_badge": "Vibe Audit",
        "audit_title": "Under Review.",
        "audit_desc": "AURA 크리에이티브 팀에서 당신의 DNA를 분석 중입니다.",
        "audit_target": "TARGET",
        "audit_status": "STATUS",
        "audit_pending": "PENDING",
        "audit_guide": "심사가 완료되면 입력하신 이메일로 초대 코드가 발송됩니다.",
        "audit_close": "Close Receipt",
        "footer": "© 2026 AURA / Beyond Fashion / All Rights Reserved.",
        "alert_empty": "인스타그램 ID와 이메일을 모두 입력해주세요.",
        "alert_error": "오류가 발생했습니다. 다시 시도해주세요.",
        "alert_network": "네트워크 오류가 발생했습니다.",
        "footer_terms": "이용약관",
        "footer_privacy": "개인정보처리방침",
        "footer_contact": "고객센터",
        "footer_company": "상호: 주식회사 예아플러스 (YEAHPLUS) | 대표자: 고재혁",
        "footer_biz_num": "사업자등록번호: 283-88-02519 | 통신판매신고번호: 2022-경기파주-2995",
        "footer_address": "주소: 경기도 파주시 교하로159번길 33, 3층 304호 에이318 (목동동, 목동프라자)",
        "footer_email": "이메일: contact@auraootd.com | 연락처: 010-4490-0518",
        "footer_copyright": "© 2026 AURA / YEAHPLUS CO., LTD. / ALL RIGHTS RESERVED."
    }

  }
        ### 📄 app/layout.tsx
        > **Context Summary**
        * 🔗 **Imports:** `@vercel/analytics/react, @vercel/speed-insights/next, next/font/google, next-intl, next-intl/server`

        ```typescript
        // app/layout.tsx 파일 상단
import type { Metadata, Viewport } from "next"; // 🌟 Viewport 임포트 추가
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// 🌟 2. Inter 폰트 초기화
const inter = Inter({ subsets: ["latin"] });
// 1. 순수한 메타데이터 (기존 코드에서 themeColor 뺌)
export const metadata: Metadata = {
  title: 'Aura. | AI-Powered Ambient Lookbook',
  description: '검색창을 없앴습니다. 지금 당신이 있는 곳의 날씨와 취향에 완벽히 동기화된 룩을 스와이프하세요.',
  
  // 🌟 카카오톡, 페이스북, 슬랙 링크 공유 시 뜨는 썸네일 (Open Graph)
  openGraph: {
    title: 'Aura. | 당신의 바이브를 깨우는 AI 룩북',
    description: '날씨와 패션 DNA가 교차하는 지점. 지금 바로 AURA를 경험하세요.',
    url: 'https://auraootd.com', // 나중에 실제 도메인으로 교체
    siteName: 'Aura.',
    images: [
      {
        url: '/images/aura_brand.png', // 대표님이 만드신 OG 이미지!
        width: 1200,
        height: 630,
        alt: 'Aura Brand Official',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },

  // 🌟 브라우저 탭 및 북마크 아이콘 설정
  icons: {
    icon: '/images/icon_192.png',
    apple: '/images/icon_512.png', // 아이폰 바탕화면 추가 시 사용될 고화질 아이콘
  },
  
  // 🌟 PWA(모바일 앱 설치) 설정 파일 연결
  manifest: '/manifest.json', 
  themeColor: '#000000',
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="ko">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* 🌟 기존 children 아래에 레이더 컴포넌트를 달아줍니다! */}
        {/* 🌟 3. 우리 앱 전체를 NextIntlClientProvider로 감싸줍니다! */}
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

        ### 📄 app/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `lucide-react, next/link, react, framer-motion, next-intl`
* 🧩 **Component (Default):** `LandingPage`
* ww **Hooks:** `useTransform, useRef, useState, useScroll, useEffect, useTranslations`
* ⚡ **API Route / Server Action Detected**

        ```typescript
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
              <img src="/images/aura_brand_12.png" alt="Magazine Cover" className="w-full h-full object-cover filter grayscale-[0.3] contrast-125 group-hover:scale-105 transition-transform duration-1000" />
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

        ### 📄 app/home/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, html-to-image, @/hooks/useGatekeeper`...
* 🧩 **Component (Default):** `Home`
* ww **Hooks:** `useTransform, useState, useMotionValue, useGatekeeper, useRouter, useGyroscope, useSearchParams`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        // app/home/page.tsx

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Layers, Target, Camera, X, Smartphone, User, ShoppingBag, Bell } from "lucide-react";
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
import NotificationModal from "../components/NotificationModal"; // 경로 확인!
import { useSearchParams, useRouter } from 'next/navigation';

export default function Home() {
  const t = useTranslations('Home');
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  const [isExporting, setIsExporting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [swipeKey, setSwipeKey] = useState(0);
  const [viewMode, setViewMode] = useState<'recommend' | 'explore'>('recommend');
  const [isMissionDismissed, setIsMissionDismissed] = useState(false); // 🌟 미션 배너 닫기 상태
  const deepLinkItemId = searchParams.get('item_id');
  
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



  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  const rotateX = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1000], [10, -10]);
  const rotateY = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1000], [-10, 10]);
  const x = useMotionValue(0);
  const imageX = useTransform(x, [-200, 200], [20, -20]);

  // 자이로스코프 커스텀 훅 사용
  const { showGyroButton, requestGyroPermission } = useGyroscope(mouseX, mouseY);
  
  // 1. VIP 아이템 데이터 보관소
  const [vipItem, setVipItem] = useState<FashionItem | null>(null);
  
  // 2. 피드 정지 여부 (딥링크가 있으면 true로 시작)
  const [isFeedPaused, setIsFeedPaused] = useState(!!deepLinkItemId);

  // 🌟 [핵심] 싸우지 말고, 매개변수로 정중하게 부탁합니다.
  const aura = useAura({ 
    isPaused: isFeedPaused, 
    injectedItem: vipItem 
  });
  const { isApproved, loading, verifyCode } = useGatekeeper(aura.user?.id);
  const currentItem = aura.fashionItems[aura.currentIndex];
  // 🌟 (매우 중요) 여기에 당신의 구글 로그인 이메일을 정확히 입력하십시오!
  const ADMIN_EMAIL = "cto@yeahplus.co.kr"; 
  const isAdmin = aura.user?.email === ADMIN_EMAIL;

  useEffect(() => {
    // 딥링크 ID가 있고, 아직 데이터를 안 가져왔다면 실행
    if (deepLinkItemId && !vipItem) {
      const fetchVip = async () => {
        const { data: dbItem } = await supabase
          .from('aura_fashion_items')
          .select('*')
          .eq('id', deepLinkItemId)
          .single();

        if (dbItem) {
          // 데이터 매핑
          const mappedItem = {
            id: dbItem.id,
            imageUrl: dbItem.image_url,
            weather: dbItem.weather,
            temperature: dbItem.temperature,
            tags: dbItem.tags || [],
            uploaderName: dbItem.uploader_name || 'AURA Editor',
            uploaderIg: dbItem.uploader_ig,
            likes: dbItem.likes_count || 0,
            isSponsored: dbItem.is_sponsored || false,
            sponsorBrand: dbItem.sponsor_brand,
            sponsorUrl: dbItem.sponsor_url,
            colors: dbItem.colors,
            category: 'daily',
          };

          // 🌟 상태에 저장 -> useAura가 이걸 감지하고 useFeed에 전달함
          setVipItem(mappedItem);
          
          // 모달 즉시 오픈
          if (aura.setIsDetailOpen) aura.setIsDetailOpen(true);

          // 🌟 5초 타이머 시작 (7초는 너무 깁니다. 5초 추천)
          setTimeout(() => {
            console.log("⏰ 5초 경과: 배경 피드 로딩 시작");
            setIsFeedPaused(false); // -> useFeed가 깨어나서 배경을 채움 (VIP는 유지됨)
          }, 5000);
        }
      };
      
      fetchVip();
      
      // 주소창 청소
      window.history.replaceState({}, '', '/home');
    }
  }, [deepLinkItemId]);

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

  // 🌟 [통합 로직] EXPLORE 모드 진입 시 데이터 동기화 및 햅틱 피드백
  useEffect(() => {
    if (viewMode === 'explore') {
      // 1. 기본 트렌딩 아이템 로드
      aura.fetchTrendingItems();

      // 2. AI 매칭 유저 실시간 검색 (스타일 리포트가 있을 경우에만)
      if (aura.styleReport?.vibeKey) {
        aura.loadMatchedUsers(
          aura.styleReport.vibeKey, 
          aura.user?.id || 'guest-id'
        );
      }

      // 3. 사용자 경험(UX) 피드백
      aura.triggerHaptic(10); 
    }
  }, [viewMode, aura.styleReport?.vibeKey, aura.user?.id]); 

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
        pixelRatio: 3, 
        cacheBust: true,
        style: { 
          transform: 'none', 
          transition: 'none',
        }
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
          className={`px-4 py-1.5 whitespace-nowrap rounded-full text-xs font-bold transition-all ${viewMode === 'recommend' ? 'bg-white text-black' : 'text-white/50'}`}
        >
          {t('for_you')}
        </button>
        <button 
          onClick={() => setViewMode('explore')}
          className={`px-4 py-1.5 whitespace-nowrap rounded-full text-xs font-bold transition-all ${viewMode === 'explore' ? 'bg-white text-black' : 'text-white/50'}`}
        >
          {t('explore')}
        </button>
        {/* 매거진 탭 버튼 추가 */}
        <button 
          onClick={() => {
            aura.triggerHaptic(20); // 터치 시 가벼운 진동
            router.push('/magazine'); // 매거진 페이지로 이동!
          }}
          className="px-4 py-1.5 whitespace-nowrap rounded-full text-xs font-bold transition-all text-white/50 hover:text-white"
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
      <div className="absolute right-4 top-8 z-40 flex items-center gap-1 md:right-8 md:top-8">
        
        {/* 🏆 랭킹 버튼 (트로피) 
        <button 
          onClick={() => { aura.triggerHaptic(30); setIsRankingOpen(true); }} 
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" 
          title="명예의 전당"
        >
          <Trophy className="h-5 w-5 text-yellow-400" />
        </button>
        */}
        {/* 🌟 [NEW] 시스템 로그 버튼 */}
        <button 
          onClick={() => {
            console.log("Bell Clicked"); // 🌟 디버깅용: 콘솔에 찍히는지 확인
            setIsNotiOpen(true);
            aura.triggerHaptic(10); // 햅틱 피드백 추가
          }}
          className="h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl relative p-2 rounded-full hover:bg-white/10 transition-colors group"
        >
          <Bell className="w-6 h-6 text-white" />
          {/* 알림 표시용 레드 닷 */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#ff3b30] rounded-full border border-black" />
        </button>

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
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-9">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
        </button>

        {/* 📂 아카이브 버튼 (레이어) */}
        <button 
          onClick={() => { aura.triggerHaptic(30); aura.setIsModalOpen(true); }} 
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-2xl transition-all hover:bg-white/20 active:scale-95" 
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

      <NotificationModal 
        isOpen={isNotiOpen} 
        onClose={() => setIsNotiOpen(false)} 
      />
      {/* 🌟 강력한 리텐션 유도 컴포넌트들 */}
      <TutorialOverlay />
      <InstallPrompt />
    </div>
  );
}

        ### 📄 app/privacy/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/link, lucide-react, next-intl`
* 🧩 **Component (Default):** `PrivacyPolicy`
* ww **Hooks:** `useLocale`

        ```typescript
        "use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl"; // 🌟 다국어 감지 훅 추가

export default function PrivacyPolicy() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ff3b30] selection:text-white pb-32">
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center gap-2 group hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
          <span className="font-mono text-[10px] tracking-widest uppercase">BACK</span>
        </Link>
        <h1 className="text-xl font-serif italic font-black uppercase tracking-tighter">
          Aura<span className="text-[#ff3b30]">.</span>
        </h1>
      </header>

      <div className="pt-32 px-6 md:px-12 max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ff3b30] uppercase block mb-4">Legal Document</span>
          <h1 className="text-4xl md:text-5xl font-serif italic font-black uppercase tracking-tighter mb-4">Privacy Policy</h1>
          <p className="font-mono text-xs text-white/40 tracking-widest uppercase">
            {locale === 'ko' ? '시행일자: 2026년 1월 1일' : 'Effective Date: January 1, 2026'}
          </p>
        </div>

        <article className="prose prose-invert prose-sm md:prose-base max-w-none font-serif leading-loose text-white/70 break-keep">
          {locale === 'ko' ? (
            /* 🇰🇷 한글 개인정보처리방침 */
            <>
              <p>주식회사 예아플러스(&quot;회사&quot;)는 AURA 서비스 이용자의 개인정보를 매우 중요하게 생각하며, 관련 법령을 준수하고 있습니다. 본 방침을 통해 회사가 어떤 개인정보를 수집하고 어떻게 보호하는지 안내해 드립니다.</p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">1. 수집하는 개인정보 항목 및 목적</h3>
              <p>
                <strong>[가입 및 CULT 심사 대기 (Waitlist)]</strong><br/>
                - 수집항목: 이메일 주소, 인스타그램 ID (@Handle)<br/>
                - 수집목적: 서비스 초대권 발송, 유저 감도(Vibe) 심사 및 고객 식별<br/><br/>
                <strong>[AURA 엔진 및 룩북 업로드]</strong><br/>
                - 수집항목: 업로드된 사진 이미지 메타데이터<br/>
                - 수집목적: AI 비전 엔진을 통한 스타일 분석, 개인화된 패션 피드 제공<br/><br/>
                <strong>[날씨 연동 기반 큐레이션]</strong><br/>
                - 수집항목: 접속 위치 데이터 (위도/경도 또는 접속 지역)<br/>
                - 수집목적: 유저가 위치한 지역의 실시간 날씨 및 온도에 최적화된 아웃핏 제안
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">2. 개인정보의 보유 및 이용기간</h3>
              <p>
                회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 관련 법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">3. 개인정보 제3자 제공 및 위탁</h3>
              <p>
                회사는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, AI 이미지 분석 및 클라우드 데이터베이스(Supabase 등) 운영을 위해 글로벌 파트너사의 서버를 이용할 수 있으며, 이 경우 안전한 데이터 암호화 통신을 거칩니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">4. 개인정보 보호책임자</h3>
              <p>
                이용자는 서비스를 이용하며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자에게 신고하실 수 있습니다.<br/><br/>
                - 책임자: 고재혁<br/>
                - 소속: 주식회사 예아플러스 (YEAHPLUS)<br/>
                - 연락처: 010-4490-0518<br/>
                - 이메일: contact@auraootd.com
              </p>
            </>
          ) : (
            /* 🇺🇸 영문 개인정보처리방침 */
            <>
              <p>YEAHPLUS CO., LTD. (&quot;Company&quot;) highly values the personal information of AURA Service Users and complies with relevant laws. This policy informs you of what personal information the Company collects and how it is protected.</p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">1. Items of Personal Information Collected and Purpose</h3>
              <p>
                <strong>[Registration and CULT Waitlist]</strong><br/>
                - Items: Email address, Instagram ID (@Handle)<br/>
                - Purpose: Sending service invitations, Vibe screening, and user identification<br/><br/>
                <strong>[AURA Engine and Lookbook Uploads]</strong><br/>
                - Items: Uploaded photo image metadata<br/>
                - Purpose: Style analysis via AI vision engine, providing personalized fashion feeds<br/><br/>
                <strong>[Weather-synced Curation]</strong><br/>
                - Items: Connection location data (Latitude/Longitude or access region)<br/>
                - Purpose: Proposing outfits optimized for real-time weather and temperature in the User&apos;s area
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">2. Retention and Use Period of Personal Information</h3>
              <p>
                In principle, the Company destroys the information without delay after the purpose of collection and use is achieved. However, if preservation is required by relevant laws, the Company retains user information for a certain period specified by law.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">3. Provision and Delegation of Personal Information to Third Parties</h3>
              <p>
                The Company does not provide personal information to outside parties without the User&apos;s consent. However, global partner servers (e.g., Supabase) may be used for AI image analysis and cloud database operation, in which case secure encrypted communication is utilized.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">4. Chief Privacy Officer</h3>
              <p>
                Users may report any privacy-related complaints arising from using the Service to the Chief Privacy Officer.<br/><br/>
                - Officer: Jaehyuk Ko<br/>
                - Company: YEAHPLUS CO., LTD.<br/>
                - Tel: +82-10-4490-0518<br/>
                - Email: contact@auraootd.com
              </p>
            </>
          )}
        </article>
      </div>
    </main>
  );
}
        ### 📄 app/ir/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, next/link, react`
* 🧩 **Component (Default):** `IRPage`
* ww **Hooks:** `useScroll, useRef, useTransform`

        ```typescript
        "use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight, CloudRain, Fingerprint, ShoppingBag, Layers, Crown, Database, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// 🌟 New Component: 성장 지표 차트 (framer-motion 활용)
function GrowthChart() {
  const data = [
    { phase: "P1", user: 10, revenue: 5, profit: 3 },
    { phase: "P2", user: 50, revenue: 25, profit: 18 },
    { phase: "P3", user: 100, revenue: 90, profit: 65 },
    { phase: "P4", user: 250, revenue: 250, profit: 180 }, // (스케일 조정을 위한 가상의 값)
  ];

  const maxUser = 250;
  const maxFinance = 250;

  return (
    <div className="w-full bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-[#ff3b30]/20 relative overflow-hidden mb-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff3b30]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-[#ff3b30] p-2 rounded-full">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">Projected Growth</h3>
      </div>
      
      <div className="relative h-64 flex items-end justify-between gap-4 pt-10 pl-4 border-l border-white/10 border-b">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 bottom-0 -translate-x-full flex flex-col justify-between text-xs text-white/30 py-2 pr-2 h-full">
          <span>Scale</span><span>Mid</span><span>Start</span>
        </div>

        {data.map((d, i) => (
          <div key={i} className="relative flex-1 flex flex-col items-center h-full justify-end group">
            {/* User Line Point */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }} whileInView={{ y: `${100 - (d.user / maxUser) * 100}%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              className="absolute w-3 h-3 bg-white rounded-full border-2 border-[#0a0a0a] z-20 group-hover:scale-150 transition-transform"
              style={{ left: '50%', marginLeft: '-6px' }}
            >
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{d.user}0K Users</div>
            </motion.div>
             {/* Connecting Line (가상 구현) */}
            {i < data.length - 1 && (
               <svg className="absolute top-0 left-1/2 w-full h-full z-0 pointer-events-none" style={{ overflow: 'visible' }}>
                 <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                    x1="0" y1={`${100 - (d.user / maxUser) * 100}%`} x2="100%" y2={`${100 - (data[i+1].user / maxUser) * 100}%`} stroke="white" strokeWidth={2} strokeOpacity={0.5}
                 />
               </svg>
            )}

            {/* Revenue & Profit Bars */}
            <div className="relative w-full max-w-[40px] flex flex-col justify-end h-full gap-1 z-10">
              <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.revenue / maxFinance) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }} className="w-full bg-[#ff3b30] rounded-t-sm relative group-hover:bg-[#ff5b50] transition-colors">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-[10px] text-[#ff3b30] font-bold opacity-0 group-hover:opacity-100 transition-opacity">${d.revenue}M</div>
              </motion.div>
              <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.profit / maxFinance) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 + 0.4 }} className="w-full bg-[#ff3b30]/40 rounded-t-sm relative group-hover:bg-[#ff3b30]/60 transition-colors">
                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] text-white/50 font-bold opacity-0 group-hover:opacity-100 transition-opacity">${d.profit}M</div>
              </motion.div>
            </div>

            <span className="text-xs text-white/40 mt-4 font-mono uppercase tracking-wider">{d.phase}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-6 text-xs text-white/50">
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white"/>Users (Line)</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-[#ff3b30]"/>Revenue</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-[#ff3b30]/40"/>Profit</div>
      </div>
    </div>
  );
}

export default function IRPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const businessPhases = [
    { 
      phase: "Phase 1", title: "Affiliate Commerce", subtitle: "Discovery to Ownership", icon: ShoppingBag,
      users: "100K MAU", partners: "SSENSE, FARFETCH, KREAM", revenue: "$0.5M", profit: "$0.3M",
      desc: "유저의 감각적인 발견을 즉각적인 소유로 연결합니다. 재고 부담 없이 글로벌 하이엔드 부티크의 트래픽을 중개하며 초기 현금 흐름을 창출합니다."
    },
    { 
      phase: "Phase 2", title: "Native Sponsorship", subtitle: "The Contextual Canvas", icon: Layers,
      users: "500K MAU", partners: "LVMH, Gentle Monster", revenue: "$2.5M", profit: "$1.8M",
      desc: "비가 오는 날에는 레인 코트를, 영하의 날씨에는 프리미엄 아우터를. AURA의 카드는 브랜드가 가장 돋보일 수 있는 완벽한 컨텍스트 캔버스가 됩니다."
    },
    { 
      phase: "Phase 3", title: "AURA CULT+", subtitle: "The Premium Tier", icon: Crown,
      users: "1M+ MAU", partners: "Stripe, Exclusive Brands", revenue: "$9.0M", profit: "$6.5M",
      desc: "단순한 유저를 넘어 '컬트(Cult)' 팬덤을 구축합니다. 심층 AI 스타일 리포트와 프라이빗 큐레이션을 제공하는 월정액 구독 모델로 강력한 MRR을 확보합니다."
    },
    { 
      phase: "Phase 4", title: "Data as a Service", subtitle: "The Fashion Oracle", icon: Database,
      users: "5M+ MAU", partners: "Global Fashion Houses", revenue: "$25.0M+", profit: "$18.0M+",
      desc: "전 세계 유저의 기상 환경과 취향이 교차하는 수십억 건의 데이터를 분석합니다. 패션 하우스와 트렌드 예측 기관에 독보적인 인사이트를 제공합니다."
    }
  ];

  return (
    // 🌟 Color Update: 배경색을 순수 블랙(#000)에 가깝게 하고, 텍스트 색상을 조정하여 대비감을 높였습니다.
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-[#f5f5f7] selection:bg-[#ff3b30] selection:text-white font-sans overflow-x-hidden">
      
      {/* 🎬 1. Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ opacity, y }} className="absolute inset-0 z-0">
          {/* 🌟 Color Update: 붉은색 그라데이션으로 열정적인 분위기 연출 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,59,48,0.15)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
        </motion.div>

        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">
          {/* 🌟 Color Update: 타이틀 끝에 포인트 컬러 점(.) 추가 */}
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-6xl md:text-8xl lg:text-[11rem] font-serif italic font-black tracking-tighter mb-8 leading-[0.8] text-white">
            Aura<span className="text-[#ff3b30]">.</span>
          </motion.h1>
          
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-2xl md:text-4xl font-semibold tracking-tight text-white/90 mb-4">
            Technology becomes invisible.<br/>Only your <span className="text-[#ff3b30]">vibe</span> remains.
          </motion.p>
          
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl font-light tracking-tight text-white/50 mb-12 max-w-2xl">
            세상에서 가장 직관적인 AI 앰비언트 룩북. 검색창을 없애고, 오직 당신의 현재 환경과 취향에 완벽히 동기화된 영감만을 제공합니다.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}>
            {/* 🌟 Color Update: 버튼에 포인트 컬러 적용 */}
            <Link href="/" className="group flex items-center gap-2 bg-[#ff3b30] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#ff5b50] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,59,48,0.3)]">
              Experience the Vibe <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 💡 2. The Philosophy */}
      <section className="py-40 px-6 max-w-5xl mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 text-white">Silence the noise.</h2>
            <p className="text-xl text-white/60 leading-relaxed mb-6 font-light">
              현재의 커머스는 무의미한 정보의 홍수입니다. 우리는 유저에게 피로를 강요하고 있었습니다.
            </p>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              AURA는 질문을 바꿨습니다. &quot;무엇을 찾으십니까?&quot; 대신 <b className="text-[#ff3b30]">&quot;지금 당신이 있는 곳의 공기는 어떻습니까?&quot;</b>를 묻습니다. 환경 데이터를 읽고 AI가 큐레이션 한 화보를 그저 스와이프하는 것만으로, 발견의 기쁨은 극대화됩니다.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#121212] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center gap-6 transform translate-y-12 hover:border-[#ff3b30]/30 transition-colors">
              <CloudRain className="w-12 h-12 text-[#ff3b30]" strokeWidth={1.5} />
              <div><h3 className="font-semibold text-white mb-2">Ambient Data</h3><p className="text-sm text-white/50">기상청 초정밀 환경 동기화</p></div>
            </div>
            <div className="bg-[#121212] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center gap-6 hover:border-[#ff3b30]/30 transition-colors">
              <Fingerprint className="w-12 h-12 text-[#ff3b30]" strokeWidth={1.5} />
              <div><h3 className="font-semibold text-white mb-2">AI DNA Match</h3><p className="text-sm text-white/50">비전 컴퓨팅 기반 취향 분석</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 💸 3. Financial Projections (The Business) */}
      <section className="py-40 px-6 bg-[#0a0a0a] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,59,48,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
            <span className="text-[#ff3b30] font-mono text-sm tracking-widest uppercase mb-4 block">The Growth Engine</span>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">Financial Projections.</h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">경험을 해치지 않으면서도, 거대한 수익을 창출하는 4단계의 치밀한 비즈니스 로드맵입니다.</p>
          </motion.div>

          {/* 🌟 New Chart Added Here */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <GrowthChart />
          </motion.div>

          <div className="space-y-6">
            {businessPhases.map((bm, idx) => (
              <motion.div 
                key={bm.phase}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: idx * 0.1 }}
                className="group bg-[#121212] p-8 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center hover:bg-[#1a1a1a] hover:border-[#ff3b30]/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff3b30]/0 via-[#ff3b30]/0 to-[#ff3b30]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-[#ff3b30]/10 rounded-full group-hover:scale-110 group-hover:bg-[#ff3b30] transition-all duration-500">
                  <bm.icon className="w-8 h-8 text-[#ff3b30] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 relative z-10">
                  <span className="text-sm font-semibold tracking-widest text-[#ff3b30] uppercase block mb-2">{bm.phase}</span>
                  <h3 className="text-3xl font-bold text-white mb-2">{bm.title}</h3>
                  <p className="text-lg text-white/50 font-light mb-4">{bm.subtitle}</p>
                  <p className="text-white/80 leading-relaxed">{bm.desc}</p>
                </div>

                {/* 🌟 Key Metrics Table with Color Accent */}
                <div className="w-full lg:w-auto flex flex-wrap lg:flex-col gap-4 lg:gap-6 shrink-0 bg-[#0a0a0a] p-6 rounded-2xl lg:min-w-[280px] border border-white/5 relative z-10 group-hover:border-[#ff3b30]/20 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Target Users</span>
                    <span className="font-mono text-lg text-white group-hover:text-[#ff3b30] transition-colors">{bm.users}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Est. Revenue / Profit</span>
                    <span className="font-mono text-lg text-white">{bm.revenue} / <span className="text-[#ff3b30]">{bm.profit}</span></span>
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Key Partners</span>
                    <span className="text-sm text-white/80">{bm.partners}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 4. Outro & Contact */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center relative overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff3b30]/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif italic font-black text-white mb-8">This is just the beginning.</h2>
          <p className="text-2xl text-white/60 font-light mb-16">
            소프트웨어와 패션이 결합하는 방식을 재정의할 파트너를 찾습니다.
          </p>
          <a href="mailto:cto@yeahplus.co.kr" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#ff3b30] text-white font-bold text-lg hover:bg-[#ff5b50] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_40px_rgba(255,59,48,0.4)]">
            Connect with Leadership
          </a>
        </motion.div>
      </section>

      <footer className="py-12 text-center text-sm text-white/30 border-t border-white/5">
        Copyright © 2026 AURA Inc. All rights reserved.
      </footer>
    </div>
  );
}
        ### 📄 app/terms/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next/link, lucide-react, next-intl`
* 🧩 **Component (Default):** `TermsOfService`
* ww **Hooks:** `useLocale`

        ```typescript
        "use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl"; // 🌟 다국어 감지 훅 추가

export default function TermsOfService() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ff3b30] selection:text-white pb-32">
      {/* 헤더 */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center gap-2 group hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
          <span className="font-mono text-[10px] tracking-widest uppercase">BACK</span>
        </Link>
        <h1 className="text-xl font-serif italic font-black uppercase tracking-tighter">
          Aura<span className="text-[#ff3b30]">.</span>
        </h1>
      </header>

      {/* 본문 */}
      <div className="pt-32 px-6 md:px-12 max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ff3b30] uppercase block mb-4">Legal Document</span>
          <h1 className="text-4xl md:text-5xl font-serif italic font-black uppercase tracking-tighter mb-4">Terms of Service</h1>
          <p className="font-mono text-xs text-white/40 tracking-widest uppercase">
            {locale === 'ko' ? '시행일자: 2026년 1월 1일' : 'Effective Date: January 1, 2026'}
          </p>
        </div>

        <article className="prose prose-invert prose-sm md:prose-base max-w-none font-serif leading-loose text-white/70 break-keep">
          {locale === 'ko' ? (
            /* 🇰🇷 한글 약관 */
            <>
              <p>주식회사 예아플러스(이하 &quot;회사&quot;)가 제공하는 AURA(이하 &quot;서비스&quot;)에 오신 것을 환영합니다. 본 약관은 회원이 서비스에 접속하고 이를 이용함에 있어 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">제 1 조 (서비스의 핵심 및 AI 분석)</h3>
              <p>
                1. 본 서비스는 회원이 업로드한 패션 사진(Lookbook), 위치, 날씨 데이터를 기반으로 AI 비전 엔진이 스타일을 분석하고 큐레이션 및 매거진을 발행하는 플랫폼입니다.<br/>
                2. 회원이 업로드한 사진은 AURA의 AI 학습 및 트렌드 분석 목적으로 활용될 수 있으며, 회원은 사진 업로드 시 이에 동의한 것으로 간주합니다.<br/>
                3. AI 분석 결과나 날씨 기반 추천은 알고리즘에 의한 제안이며, 회사는 추천 결과의 절대적 정확성을 보증하지 않습니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">제 2 조 (회원 권한 및 CULT 멤버십)</h3>
              <p>
                1. 회사는 회원의 서비스 기여도(사진 업로드 횟수 등)에 따라 특정 콘텐츠(CULT ONLY 매거진, 숨겨진 아카이브 등)에 대한 접근 권한을 차등 부여할 수 있습니다.<br/>
                2. 시스템 조작, 타인의 사진 도용 등 부정한 방법으로 권한을 획득한 경우, 회사는 사전 통보 없이 멤버십 자격을 박탈하고 서비스 이용을 영구 제한할 수 있습니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">제 3 조 (지적재산권 및 저작물)</h3>
              <p>
                1. 회원이 서비스 내에 게시한 사진의 저작권은 회원 본인에게 있습니다.<br/>
                2. 단, 회사는 회원의 게시물을 바탕으로 AI 에디터가 가공, 편집하여 생성한 2차적 저작물(Aura Editorial 매거진 등)을 서비스 내외의 마케팅 및 프로모션 목적으로 무상 사용할 권리를 가집니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">제 4 조 (면책조항)</h3>
              <p>
                회사는 천재지변, AI 서버의 일시적 통신 장애, 회원의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.
              </p>
              
              <div className="mt-20 p-6 bg-white/5 border border-white/10 rounded-xl font-mono text-xs">
                <p>상호: 주식회사 예아플러스 (YEAHPLUS)</p>
                <p>이메일: contact@auraootd.com</p>
              </div>
            </>
          ) : (
            /* 🇺🇸 영문 약관 */
            <>
              <p>Welcome to AURA (hereinafter referred to as the &quot;Service&quot;) provided by YEAHPLUS CO., LTD. (hereinafter referred to as the &quot;Company&quot;). These Terms of Service aim to stipulate the rights, obligations, and responsibilities between the Company and the User.</p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">Article 1 (Core of Service and AI Analysis)</h3>
              <p>
                1. The Service is a platform where the AI vision engine analyzes style and publishes curated magazines based on fashion photos (Lookbooks), location, and weather data uploaded by Users.<br/>
                2. Photos uploaded by Users may be used for AURA&apos;s AI learning and trend analysis purposes. By uploading a photo, the User is deemed to have consented to this.<br/>
                3. AI analysis results or weather-based recommendations are algorithmic suggestions, and the Company does not guarantee absolute accuracy.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">Article 2 (User Privileges & CULT Membership)</h3>
              <p>
                1. The Company may grant differential access to certain content (CULT ONLY magazines, hidden archives, etc.) based on the User&apos;s contribution to the Service (e.g., number of photo uploads).<br/>
                2. If a User acquires privileges through unfair means, such as system manipulation or theft of another person&apos;s photos, the Company may revoke membership and permanently restrict Service use without prior notice.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">Article 3 (Intellectual Property & Derivative Works)</h3>
              <p>
                1. The copyright of photos posted within the Service belongs to the User.<br/>
                2. However, the Company reserves the right to use secondary derivative works (such as Aura Editorial magazines) processed and edited by the AI Editor based on User posts, free of charge, for marketing and promotional purposes inside and outside the Service.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">Article 4 (Disclaimer)</h3>
              <p>
                The Company is not liable for service disruptions caused by natural disasters, temporary communication failures of AI servers, or reasons attributable to the User.
              </p>
              
              <div className="mt-20 p-6 bg-white/5 border border-white/10 rounded-xl font-mono text-xs">
                <p>COMPANY: YEAHPLUS CO., LTD.</p>
                <p>EMAIL: contact@auraootd.com</p>
              </div>
            </>
          )}
        </article>
      </div>
    </main>
  );
}
        ### 📄 app/admin/blog/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, lucide-react, @/lib/supabase`
* 🧩 **Component (Default):** `BlogAdmin`
* ww **Hooks:** `useEffect, useRouter, useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PenTool, Loader2, Copy, Check, FileText, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function BlogAdmin() {
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState<"medium" | "substack">("medium");
  const [language, setLanguage] = useState<"ko" | "en">("en");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [result, setResult] = useState<{ title: string; content: string } | null>(null);
  const [copied, setCopied] = useState(false);

  // 🌟 보안 검사 (기존 어드민과 동일)
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user || session.user.email !== 'cto@yeahplus.co.kr') {
        router.replace('/');
      }
    };
    checkAuth();
  }, [router]);

  const handleGenerate = async () => {
    if (!topic) return alert("주제를 입력해주세요.");
    setIsGenerating(true);
    setResult(null);

    try {
      const res = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, platform, language })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResult(data);
    } catch {
      alert("생성 실패");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const fullText = `# ${result.title}\n\n${result.content}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-[#ff3b30]">
      <header className="mb-12 flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <button onClick={() => router.back()} className="flex items-center gap-2 text-white/50 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-4xl font-serif italic font-black uppercase tracking-tighter text-[#ff3b30]">Aura Think Tank.</h1>
          <p className="font-mono text-xs text-white/50 mt-2 uppercase tracking-widest">Global Thought Leadership Generator</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* 입력 패널 */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-6">
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">Target Platform</label>
              <div className="flex gap-2">
                <button onClick={() => setPlatform("medium")} className={`flex-1 py-3 rounded-lg font-bold border transition-all ${platform === 'medium' ? 'bg-white text-black border-white' : 'border-white/20 text-white/40 hover:bg-white/5'}`}>Medium (Tech Blog)</button>
                <button onClick={() => setPlatform("substack")} className={`flex-1 py-3 rounded-lg font-bold border transition-all ${platform === 'substack' ? 'bg-[#ff3b30] text-white border-[#ff3b30]' : 'border-white/20 text-white/40 hover:bg-white/5'}`}>Substack (Newsletter)</button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">Language</label>
              <div className="flex gap-2">
                <button onClick={() => setLanguage("en")} className={`flex-1 py-2 rounded-lg font-mono text-xs border transition-all ${language === 'en' ? 'bg-white text-black border-white' : 'border-white/20 text-white/40'}`}>English (Global)</button>
                <button onClick={() => setLanguage("ko")} className={`flex-1 py-2 rounded-lg font-mono text-xs border transition-all ${language === 'ko' ? 'bg-white text-black border-white' : 'border-white/20 text-white/40'}`}>Korean (Domestic)</button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">Topic / Keyword</label>
              <textarea 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)} 
                placeholder="Ex: Why AI curation is better than human stylists, The future of OOTD..." 
                className="w-full h-32 bg-black/50 border border-white/20 p-4 rounded-xl text-white resize-none focus:border-[#ff3b30] outline-none transition-colors"
              />
            </div>

            <button 
              onClick={handleGenerate} 
              disabled={isGenerating || !topic}
              className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <PenTool className="w-5 h-5" />}
              Generate Draft
            </button>
          </div>
        </div>

        {/* 결과 패널 */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[500px]">
          {result ? (
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                <h2 className="text-xl font-bold leading-tight max-w-[80%]">{result.title}</h2>
                <button onClick={copyToClipboard} className="p-2 bg-white/10 rounded-lg hover:bg-white text-black hover:text-black transition-colors">
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-white" />}
                </button>
              </div>
              <div className="prose prose-invert prose-sm max-w-none font-serif leading-relaxed opacity-80 whitespace-pre-wrap overflow-y-auto custom-scrollbar flex-1">
                {result.content}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-white/20 space-y-4">
              <FileText className="w-16 h-16 opacity-20" />
              <p className="font-mono text-xs uppercase tracking-widest">Waiting for Input...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
        ### 📄 app/admin/magazine/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, lucide-react, next/navigation`
* 🧩 **Component (Default):** `MagazineAdmin`
* ww **Hooks:** `useEffect, useRouter, useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";

import { useState, useEffect } from "react";
import { Sparkles, Upload, FileText, Send, Image as ImageIcon, Loader2, DatabaseZap, Edit3, Trash2, Lock } from "lucide-react";
import { supabase } from "../../../lib/supabase"; 
import { useRouter } from "next/navigation"; // 🌟 추가

interface MagazineArticle {
    id: string;
    title: string;
    slug: string;
    tags: string[] | null; // DB에서 가져올 땐 배열일 수 있음
    content: string;
    cover_image_url: string;
    locale: string;
    is_premium: boolean;
    created_at: string;
    is_published: boolean;
    author: string;
  }

export default function MagazineAdmin() {
  const router = useRouter(); // 🌟 라우터 추가
  
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");
  const [locale, setLocale] = useState("en");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);

  // 🌟 [NEW] 발행된 기사 리스트 & 수정 모드 상태
  const [savedArticles, setSavedArticles] = useState<MagazineArticle[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [article, setArticle] = useState({
    title: "",
    slug: "",
    tags: "",
    content: "",
    is_premium: false 
  });

  // 🌟 [NEW] 관리자 확인 로딩 상태 추가
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  // 🌟 [NEW] 화면이 켜지면 DB에서 작성된 기사들을 긁어옵니다.
  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('aura_magazine')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data && !error) setSavedArticles(data);
  };

  // 🌟 [핵심 보안] 화면이 켜지자마자 유저가 누구인지 검사합니다.
  useEffect(() => {
    const verifyAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      // 1. 로그인이 안 되어 있거나
      // 2. 이메일이 대표님(ADMIN) 계정이 아니라면!
      if (!session?.user || session.user.email !== 'cto@yeahplus.co.kr') {
        alert("🔒 접근 거부: AURA 수석 에디터(Admin) 권한이 필요합니다.");
        router.replace('/'); // 메인 화면으로 가차 없이 쫓아냅니다.
        return;
      }

      // 무사히 통과했다면 로딩을 풀고 기사 리스트를 불러옵니다.
      setIsCheckingAuth(false);
      fetchArticles();
    };

    verifyAdmin();
  }, [router]);

  // 🌟 [NEW] 검문 중일 때 보여줄 간지나는 로딩 화면 (return 렌더링 시작 부분)
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-red-600 font-mono">
        <Loader2 className="w-10 h-10 animate-spin mb-4" />
        <p className="tracking-[0.3em] text-xs uppercase font-bold">Verifying Admin Clearance...</p>
      </div>
    );
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  // 트렌드 추출 (유지)
  const handleExtractTrends = async () => {
    setIsExtracting(true);
    try {
      const { data: topLooks, error } = await supabase
        .from('aura_fashion_items') // 🌟 대표님이 찾으신 진짜 테이블 이름!
        .select('tags, weather, temperature')
        .order('likes_count', { ascending: false }) // 🌟 진짜 컬럼 이름!
        .limit(5);

      if (error) throw error;

      if (topLooks && topLooks.length > 0) {
        const allTags = topLooks.flatMap(look => look.tags || []);
        const dominantWeather = topLooks[0].weather || "흐림"; 
        const dominantTemp = topLooks[0].temperature || "5°C"; 
        
        const uniqueTags = Array.from(new Set(allTags)).slice(0, 3).join(", ");
        const trendKeyword = `현재 날씨 ${dominantWeather}(${dominantTemp})에 유저들이 가장 열광한 스타일: ${uniqueTags}`;
        
        setKeyword(trendKeyword);
        alert("🔥 데이터 싱크 완료!");
      } else {
        setKeyword("영하 5도 한파, 맥코트 코디, 미니멀리즘, 레이어드 룩");
        alert("DB 데이터 부족으로 72시간 트렌드 시뮬레이션 키워드가 적용되었습니다.");
      }
    } catch (error) {
      console.error("트렌드 추출 실패:", error);
      alert("데이터를 가져오는 중 문제가 발생했습니다.");
    } finally {
      setIsExtracting(false);
    }
  };

  const handleGenerateAI = async () => {
    if (!file && !previewUrl && !keyword) return alert("이미지와 키워드를 먼저 입력해주세요.");
    
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/generate-editorial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword, locale })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to generate');

      setArticle({
        title: data.title,
        slug: data.slug,
        tags: data.tags,
        content: data.content,
        is_premium: data.is_premuim
      });

    } catch (error) {
      const message = error instanceof Error ? error.message : "알 수 없는 오류";
      alert("작업 실패: " + message);
    } finally {
      setIsGenerating(false);
    }
  };

  // 🌟 [NEW] 기사 수정 모드 진입
  const handleEdit = (item: MagazineArticle) => { /* 🌟 수정됨: is_premium 불러오기 */
    setEditingId(item.id); setLocale(item.locale); setPreviewUrl(item.cover_image_url); setFile(null); setKeyword("");
    setArticle({ title: item.title, slug: item.slug, tags: item.tags ? item.tags.join(', ') : '', content: item.content, is_premium: item.is_premium || false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🌟 [NEW] 기사 삭제 로직
  const handleDelete = async (id: string) => {
    if (!window.confirm("정말로 이 매거진 기사를 삭제하시겠습니까?")) return;

    try {
      const { error } = await supabase.from('aura_magazine').delete().eq('id', id);
      if (error) throw error;
      
      alert("삭제되었습니다.");
      fetchArticles(); // 리스트 새로고침
    } catch (error) {
        const message = error instanceof Error ? error.message : "알 수 없는 오류";
        alert("삭제 실패: " + message);
    }
  };

  // 🌟 [NEW] 발행 (신규 작성 OR 기존 수정)
  const handlePublish = async () => {
    if (!article.title || !article.content) return alert("원고가 비어있습니다.");
    setIsPublishing(true);

    try {
      let cover_image_url = previewUrl || 'https://via.placeholder.com/800x1200'; 

      // 파일이 새로 등록되었다면 (사진을 바꿨다면) 업로드 진행
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;

        const { error: uploadError } = await supabase.storage.from('magazine_covers').upload(fileName, file);
        if (uploadError) throw new Error("이미지 클라우드 업로드에 실패했습니다.");

        const { data: publicUrlData } = supabase.storage.from('magazine_covers').getPublicUrl(fileName);
        cover_image_url = publicUrlData.publicUrl;
      }

      const payload = {
        title: article.title,
        slug: article.slug,
        content: article.content,
        tags: article.tags.split(',').map(t => t.trim()), 
        locale: locale,
        cover_image_url: cover_image_url, 
        is_published: true, 
        author: 'AURA AI Editor',
        is_premium: Boolean(article.is_premium)
      };

      if (editingId) {
        // 🌟 수정(Update) 모드
        const { error } = await supabase.from('aura_magazine').update(payload).eq('id', editingId);
        if (error) throw error;
        alert("🔥 기사가 성공적으로 수정되었습니다!");
      } else {
        // 🌟 신규(Insert) 모드
        const { error } = await supabase.from('aura_magazine').insert([payload]);
        if (error) throw error;
        alert("🔥 매거진 발행 및 이미지 업로드 완료!");
      }
      
      // 초기화 및 리스트 새로고침
      setEditingId(null);
      setArticle({ title: "", slug: "", tags: "", content: "", is_premium:false });
      setFile(null);
      setPreviewUrl(null);
      fetchArticles(); 
      
    } catch (error: unknown) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "알 수 없는 에러가 발생했습니다.";
        alert("작업 실패: " + errorMessage);
    } finally {
      setIsPublishing(false);
    }
  };

  // 🌟 [NEW] 수정 취소 (신규 작성 모드로 복귀)
  const cancelEdit = () => {
    setEditingId(null);
    setArticle({ title: "", slug: "", tags: "", content: "", is_premium:false  });
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 md:p-12 font-sans selection:bg-red-600">
      <header className="mb-12 border-b border-white/10 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif italic font-black uppercase tracking-tighter text-red-600">AURA Editor Desk</h1>
          <p className="font-mono text-[10px] tracking-widest text-white/50 uppercase mt-2">Data-Driven Command Center</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setLocale('ko')} className={`px-3 py-1 font-mono text-xs font-bold border ${locale === 'ko' ? 'bg-white text-black border-white' : 'border-white/20 text-white/50'}`}>KR</button>
          <button onClick={() => setLocale('en')} className={`px-3 py-1 font-mono text-xs font-bold border ${locale === 'en' ? 'bg-white text-black border-white' : 'border-white/20 text-white/50'}`}>EN</button>
        </div>
      </header>

      {editingId && (
        <div className="max-w-7xl mx-auto mb-6 bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 p-4 rounded-xl flex justify-between items-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest">⚠️ You are editing an existing article.</span>
          <button onClick={cancelEdit} className="text-[10px] uppercase font-black tracking-widest bg-white text-black px-4 py-2 hover:bg-white/80 transition-colors">Cancel Edit</button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
        
        {/* ================= LEFT: Source Input ================= */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><ImageIcon className="w-4 h-4 text-red-500"/> Cover Image</h2>
            <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/20 hover:border-red-500/50 transition-colors cursor-pointer bg-black/50 relative overflow-hidden">
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              ) : (
                <div className="flex flex-col items-center text-white/30 group-hover:text-white/60">
                  <Upload className="w-8 h-8 mb-2" />
                  <span className="font-mono text-[10px] tracking-widest uppercase">Drop 룩북 이미지</span>
                </div>
              )}
            </label>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Sparkles className="w-4 h-4 text-red-500"/> AI Directive</h2>
              <button 
                onClick={handleExtractTrends}
                disabled={isExtracting}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-md font-mono text-[9px] uppercase tracking-widest transition-colors active:scale-95"
              >
                {isExtracting ? <Loader2 className="w-3 h-3 animate-spin" /> : <DatabaseZap className="w-3 h-3" />}
                Sync DB Trends
              </button>
            </div>

            <input 
              type="text" 
              placeholder="직접 입력하거나 Sync 버튼으로 데이터를 불러오세요." 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full bg-black/50 border border-white/20 p-4 text-sm font-bold text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors mb-4"
            />
            <button 
              onClick={handleGenerateAI}
              disabled={isGenerating || (!file && !previewUrl) || (!keyword && !editingId)}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-white/10 disabled:text-white/30 text-white font-black uppercase tracking-widest py-4 flex justify-center items-center gap-2 transition-colors active:scale-95"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {isGenerating ? "Extracting Vibe..." : "Generate Editorial"}
            </button>
          </div>
        </div>

        {/* ================= RIGHT: Generated Editorial ================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-red-500" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest">Editorial Draft</h2>
          </div>
          
          <input 
            type="text" value={article.title} onChange={e => setArticle({...article, title: e.target.value})} placeholder="Title"
            className="w-full bg-transparent border-b border-white/20 py-3 text-3xl font-serif italic font-bold focus:outline-none focus:border-red-500 placeholder-white/20"
          />
          <input 
            type="text" value={article.slug} onChange={e => setArticle({...article, slug: e.target.value})} placeholder="url-slug-example"
            className="w-full bg-transparent py-2 text-xs font-mono text-white/50 focus:outline-none focus:text-white"
          />
          <input 
            type="text" value={article.tags} onChange={e => setArticle({...article, tags: e.target.value})} placeholder="Tags (comma separated)"
            className="w-full bg-transparent border-b border-white/20 py-2 text-sm font-mono text-indigo-400 focus:outline-none"
          />
          <textarea 
            value={article.content} onChange={e => setArticle({...article, content: e.target.value})} placeholder="AI가 작성한 원고가 이곳에 표시됩니다..."
            className="w-full h-80 bg-white/5 border border-white/10 p-4 mt-4 text-sm leading-relaxed focus:outline-none focus:border-white/30 custom-scrollbar resize-none"
          />

          {/* 🌟 [NEW] CULT ONLY 토글 버튼 */}
          <label className="flex items-center gap-3 cursor-pointer mt-4 border border-red-500/30 bg-red-500/5 p-4 rounded-xl hover:bg-red-500/10 transition-colors">
            <input type="checkbox" checked={!!article.is_premium} onChange={e => setArticle({...article, is_premium: e.target.checked})} className="w-5 h-5 accent-red-600" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2"><Lock className="w-4 h-4"/> Set as &quot;CULT ONLY&quot; (Premium)</span>
          </label>

          <button 
            onClick={handlePublish}
            disabled={isPublishing || !article.title}
            className={`w-full font-black uppercase tracking-widest py-5 mt-4 flex justify-center items-center gap-2 transition-colors active:scale-[0.98] ${editingId ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-black hover:bg-gray-200'} disabled:bg-white/10 disabled:text-white/30`}
          >
            {isPublishing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            {isPublishing ? "Publishing..." : editingId ? "Update Article" : "Publish to AURA"}
          </button>
        </div>
      </div>

      {/* ================= BOTTOM: Article Manager ================= */}
      <div className="max-w-7xl mx-auto pt-16 border-t border-white/10">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-8"><DatabaseZap className="w-5 h-5 text-red-500"/> Published Archives</h2>
        
        {savedArticles.length === 0 ? (
          <p className="text-white/30 font-mono text-xs uppercase tracking-widest">No articles found in DB.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {savedArticles.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-16 bg-black rounded-md overflow-hidden shrink-0">
                    <img src={item.cover_image_url} alt="cover" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-white/40 uppercase mb-1">
                    {item.locale === 'ko' ? 'KOREAN' : 'ENGLISH'} • {new Date(item.created_at).toLocaleDateString()}
                    {item.is_premium && <span className="text-red-500 font-bold ml-2">🔒 CULT</span>}
                    </span>
                    
                    <h3 className="font-serif italic font-bold text-lg leading-tight">{item.title}</h3>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => handleEdit(item)} className="p-2 bg-white/10 text-white hover:bg-indigo-500 hover:text-white rounded-md transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 bg-white/10 text-white hover:bg-red-600 hover:text-white rounded-md transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
        ### 📄 app/invite/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `lucide-react`
* 🧩 **Component (Default):** `InvitationPage`

        ```typescript
        "use client";

import { Share2, Crown } from "lucide-react";

export default function InvitationPage() {
  const code = "AURA-7777"; // 🌟 나중에 서버에서 동적으로 가져올 코드

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="relative w-full max-w-sm aspect-[3/4] bg-gradient-to-b from-[#1a1a1a] to-[#050505] rounded-[3rem] p-1 border border-white/20 shadow-2xl overflow-hidden">
        {/* 카드 배경 장식 */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,59,48,0.2),transparent_70%)]" />
        
        <div className="relative h-full border border-white/10 rounded-[2.8rem] flex flex-col items-center justify-between p-12 text-center">
          <div className="space-y-4">
            <Crown className="w-10 h-10 text-[#ff3b30] mx-auto" />
            <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/40">Exclusive Invitation</h2>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-serif italic font-black text-white">Aura.</h1>
            <p className="text-sm text-white/60 leading-relaxed">
              당신은 AURA 앰버서더로부터<br/>
              특별한 초대를 받았습니다.
            </p>
            <div className="bg-white/5 border border-white/10 py-4 px-8 rounded-xl">
              <span className="text-xs font-mono text-white/30 block mb-1">YOUR CODE</span>
              <span className="text-3xl font-mono font-bold tracking-tighter text-[#ff3b30]">{code}</span>
            </div>
          </div>

          <button 
            onClick={() => navigator.share({ title: 'AURA Invitation', text: `초대 코드: ${code}`, url: window.location.href })}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest">Share Invitation</span>
          </button>
        </div>
      </div>
      <p className="mt-8 text-white/20 text-[10px] uppercase tracking-[0.5em]">Membership Reserved</p>
    </div>
  );
}
        ### 📄 app/components/DynamicIsland.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `DynamicIsland`

        ```typescript
        // components/DynamicIsland.tsx
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// 날씨 데이터의 정확한 규격을 만들어 줍니다.
interface WeatherData {
  city: string;
  temp: number;
  condition?: string;
}
export default function DynamicIsland({ weather }: { weather: WeatherData | null }) {
  if (!weather) return null;

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className="absolute top-9 left-0 right-16 z-30 flex justify-center pointer-events-none px-16"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="pointer-events-auto flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-black/60 pl-2.5 pr-3 py-1.5 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 hover:bg-black/80 max-w-[260px]">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
          <MapPin className="h-3 w-3 text-blue-400" />
        </div>
        <div className="flex min-w-0 items-center gap-1.5 text-[12px] font-bold tracking-tight text-white/90">
          <span className="truncate opacity-60">{weather.city}</span>
          <span className="shrink-0 h-2 w-[1px] bg-white/10" />
          <span className="shrink-0 text-blue-400">{weather.temp}°C</span>
        </div>
        <div className="flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
        </div>
      </motion.div>
    </motion.div>
  );
}
        ### 📄 app/components/LoginModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, next-intl`
* 🧩 **Component (Default):** `LoginModal`
* ww **Hooks:** `useTranslations`

        ```typescript
        // components/LoginModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from 'next-intl'; // 🌟 추가

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (provider: 'google' | 'github' | 'kakao' | 'twitter') => void;
}

export default function LoginModal({ isOpen, onClose, onSignIn }: LoginModalProps) {
  const t = useTranslations('Login');
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-[#1c1c1e]/90 p-8 shadow-2xl backdrop-blur-2xl">
            <button onClick={onClose} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors"><X className="h-5 w-5" /></button>
            
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Join AURA</h2>
              <p className="text-sm text-white/50">{t('description')}</p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Google */}
              <button onClick={() => onSignIn('google')} className="flex items-center justify-center gap-3 rounded-xl bg-white p-4 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95">
                <GoogleIcon /><span>{t('continue_google')}</span>
              </button>
              {/* Kakao */}
              <button onClick={() => onSignIn('kakao')} className="flex items-center justify-center gap-3 rounded-xl bg-[#FEE500] p-4 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95">
              <KakaoIcon /><span>{t('continue_kakao')}</span>
              </button>
              {/* GitHub */}
              <button onClick={() => onSignIn('github')} className="flex items-center justify-center gap-3 rounded-xl bg-[#24292E] p-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 border border-white/10">
                <GithubIcon /><span>{t('continue_github')}</span>
              </button>
              {/* X (Twitter) */}
              <button onClick={() => onSignIn('twitter')} className="flex items-center justify-center gap-3 rounded-xl bg-black p-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 border border-white/20">
               <XIcon /><span>{t('continue_x')}</span>
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
        ### 📄 app/components/LegalModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, next-intl`
* 🧩 **Component (Default):** `LegalModal`
* ww **Hooks:** `useTranslations`

        ```typescript
        "use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Building2, Scale, Mail } from "lucide-react"; // 아이콘 추가
import { useTranslations } from "next-intl";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
  const t = useTranslations('Landing');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="fixed inset-0 z-[200] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-0"
        onClick={onClose}
      >
        <motion.div 
          initial={{ y: "100%", opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: "100%", opacity: 0 }} 
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* 🌟 헤더 */}
          <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#ff3b30]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">Legal & Business Info</span>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 🌟 컨텐츠 스크롤 영역 */}
          <div className="p-6 md:p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
            
            {/* 1. 회사 정보 */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                <Building2 className="w-3 h-3" /> Company Details
              </h3>
              <div className="font-mono text-xs text-white/70 space-y-2 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                <p>{t('footer_company')}</p>
                <p>{t('footer_biz_num')}</p>
                <p>{t('footer_address')}</p>
                <div className="flex items-center gap-2 pt-2 text-[#ff3b30]">
                  <Mail className="w-3 h-3" />
                  <a href={`mailto:cto@yeahplus.co.kr`} className="hover:underline">{t('footer_email').replace('EMAIL: ', '')}</a>
                </div>
              </div>
            </div>

            {/* 2. 약관 및 정책 */}
            <div className="space-y-4">
               <h3 className="flex items-center gap-2 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                <Scale className="w-3 h-3" /> Terms & Policy
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="/terms" className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer">
                  <span className="font-mono text-[10px] font-bold text-white uppercase">{t('footer_terms')}</span>
                  <span className="text-white/20 group-hover:text-white transition-colors">↗</span>
                </a>
                <a href="/privacy" className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer">
                  <span className="font-mono text-[10px] font-bold text-white uppercase">{t('footer_privacy')}</span>
                  <span className="text-white/20 group-hover:text-white transition-colors">↗</span>
                </a>
              </div>
            </div>

            {/* 3. 카피라이트 */}
            <div className="pt-4 border-t border-white/5 text-center">
              <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em]">
                {t('footer_copyright')}
              </p>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
        ### 📄 app/components/MyAuraReport.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, html-to-image`
* 🧩 **Component (Default):** `MyAuraReport`
* ww **Hooks:** `useState`

        ```typescript
        // components/MyAuraReport.tsx
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Download, Hexagon } from "lucide-react";
import { toPng } from "html-to-image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyAuraReport({ isOpen, onClose, report, user }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!report) return null;

  // 인스타 아이디 or 닉네임 추출 로직
  const igHandle = user?.user_metadata?.instagram;
  const fallbackName = user?.user_metadata?.name || user?.email?.split('@')[0] || 'GUEST';
  const displayId = igHandle ? `@${igHandle}` : `@${fallbackName}`;

  const handleCapture = async (type: 'download' | 'share') => {
    if (!cardRef.current) return;
    setIsProcessing(true);

    try {
      // 렌더링 안정화를 위한 짧은 대기
      await new Promise(resolve => setTimeout(resolve, 100));

      const dataUrl = await toPng(cardRef.current, { 
        quality: 0.95, 
        pixelRatio: 2, // 모바일 안정성
        cacheBust: true,
      });

      if (type === 'download') {
        const link = document.createElement('a');
        
        // 🌟 [핵심 수정] vibeTitle이 없을 때 'STYLE_REPORT'라는 기본값을 씁니다.
        const safeTitle = report?.vibeTitle 
          ? report.vibeTitle.replace(/\s/g, '_') 
          : 'STYLE_REPORT';
          
        link.download = `AURA_EDITORIAL_${safeTitle}.png`;
        link.href = dataUrl;
        
        // 브라우저 호환성을 위해 body에 붙였다가 클릭 후 제거
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], 'AURA_ART.png', { type: 'image/png' });
        
        if (navigator.share) {
          await navigator.share({ files: [file] });
        } else {
          alert("공유하기를 지원하지 않는 브라우저입니다. 이미지 저장을 이용해주세요.");
        }
      }
    } catch (err) { 
      console.error("Image generation failed:", err);
      alert("이미지 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally { 
      setIsProcessing(false); 
    }
  };

  // [엔진 1] 기하학 레이더 차트 (SVG 폴리곤) 생성기
  const renderRadarChart = () => {
    // report.topTags가 없으면 빈 배열로 처리
    const tags = (report.topTags || []).slice(0, 5);
    while (tags.length < 5) tags.push(["VAR", 1]); 
    const maxVal = Math.max(...tags.map((t: [string, number]) => t[1])) || 1; // 0 나누기 방지

    const points = tags.map((t: [string, number], i: number) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const r = (t[1] / maxVal) * 40; 
      return `${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`;
    }).join(' ');

    return (
      <div className="relative w-full aspect-square flex items-center justify-center mb-8">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <polygon points="50,10 88,38 73,82 27,82 12,38" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
          <polygon points="50,30 69,44 62,66 38,66 31,44" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
          {[0, 1, 2, 3, 4].map(i => {
            const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
            return <line key={i} x1="50" y1="50" x2={50 + 40 * Math.cos(angle)} y2={50 + 40 * Math.sin(angle)} stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />;
          })}
          <polygon points={points} fill="rgba(255,59,48,0.2)" stroke="#FF3B30" strokeWidth="1" />
          <polygon points={points} fill="none" stroke="#000000" strokeWidth="0.2" className="mix-blend-overlay" />
        </svg>
        {tags.map((t: [string, number], i: number) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          const x = 50 + 55 * Math.cos(angle);
          const y = 50 + 55 * Math.sin(angle);
          return (
            <div key={i} className="absolute text-[6px] font-mono font-black uppercase tracking-widest text-black/60"
                 style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
              {t[0].substring(0, 5)}
            </div>
          );
        })}
      </div>
    );
  };

  // [엔진 2] 시그니처 컬러 팔레트
  const palettes = [
    { name: "CORE BLACK", hex: "#0F0F0F" },
    { name: "RAW CANVAS", hex: "#EBE6DD" },
    { name: "AURA RED", hex: "#FF3B30" },
    { name: "STEEL GREY", hex: "#8A8A8E" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/95 overflow-y-auto"
        >
          <div className="flex flex-col items-center gap-6 w-full max-w-sm my-auto py-8">
            
            <div 
              ref={cardRef}
              className="relative w-full bg-[#F4F4F2] text-[#0A0A0A] overflow-hidden flex flex-col p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: 'serif', minHeight: '600px' }}
            >
              {/* 배경 패턴 (외부 이미지) */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

              {/* Header & 아이디 표기 */}
              <div className="relative z-10 flex justify-between items-start border-b-[1px] border-black/20 pb-4 mb-8">
                <div>
                  <h3 className="text-[12px] font-black tracking-[0.3em] uppercase mb-1">AURA.STYLE</h3>
                  <p className="text-[7px] font-mono text-black/50 tracking-widest uppercase">Diagnostic Identity Report</p>
                </div>
                <div className="text-right flex flex-col items-end gap-1.5">
                  <span className="text-[8px] font-mono uppercase bg-black text-white px-2 py-0.5">CONFIDENTIAL</span>
                  <span className="text-[7px] font-mono font-bold tracking-widest uppercase text-black/70">MUSE. {displayId}</span>
                </div>
              </div>

              <div className="relative z-10 mb-6">
                <span className="text-[8px] font-mono font-bold tracking-[0.4em] text-[#FF3B30] uppercase mb-2 block flex items-center gap-1">
                  <Hexagon className="w-2 h-2 fill-[#FF3B30]" /> THE ARCHETYPE
                </span>
                <p className="text-[34px] font-black italic tracking-tighter leading-[0.9] break-keep uppercase">
                  {report.vibeTitleKo || "UNKNOWN VIBE"}<br></br>({report.vibeTitleEn || "Unknown"})
                </p>
              </div>

              <div className="relative p-1 z-10 grid grid-cols-2 gap-4 mb-8">
                <div className="col-span-1">
                  {renderRadarChart()}
                </div>
                <div className="col-span-1 flex flex-col justify-center space-y-4">
                {(report.topTags || []).slice(0, 3).map(([tag, count]: [string, number], idx: number) => (
                    <div key={tag} className="border-b-[0.5px] border-black/10 pb-2">
                    <div className="text-[6px] font-mono text-black/40 mb-1">COMP. 0{idx + 1}</div>
                    <div className="flex justify-between items-baseline">
                    <span className="text-[11px] font-black uppercase tracking-tight">{tag}</span>
                    <span className="text-[11px] font-mono italic text-[#FF3B30]">
                      {report.totalSaved ? Math.round((count / report.totalSaved) * 100) : 0}%
                    </span>
                    </div>
                </div>
                ))}
                </div>
              </div>
              
              <div className="relative z-10 mb-auto">
                <span className="text-[7px] font-mono font-bold tracking-[0.2em] text-black/40 uppercase mb-3 block">Extracted Color Palette</span>
                <div className="grid grid-cols-4 h-16 border-[0.5px] border-black/20">
                  {palettes.map((color, idx) => (
                    <div key={idx} className="flex flex-col h-full border-r-[0.5px] border-black/20 last:border-r-0">
                      <div className="flex-1 w-full" style={{ backgroundColor: color.hex }} />
                      <div className="h-6 bg-white flex flex-col justify-center items-center border-t-[0.5px] border-black/20">
                        <span className="text-[4px] font-black tracking-widest">{color.name}</span>
                        <span className="text-[4px] font-mono text-black/50">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Stamp */}
              <div className="relative z-10 mt-10 pt-4 border-t-[1px] border-black/20 flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="text-[7px] font-mono uppercase text-black/50">Issued by</span>
                  <span className="text-[12px] font-serif italic font-bold">Aura Creative Dept.</span>
                </div>
                <div className="w-12 h-12 rounded-full border-[2px] border-[#FF3B30] flex items-center justify-center -rotate-12 opacity-80 mix-blend-multiply">
                   <div className="text-[#FF3B30] font-black text-center leading-[0.8]">
                      <span className="text-[6px] tracking-tighter block">AURA</span>
                      <span className="text-[10px]">VERIFIED</span>
                   </div>
                </div>
              </div>
            </div>

            {/* 외부 액션 버튼 */}
            <div className="flex flex-col gap-3 w-full px-2">
              <button 
                onClick={() => handleCapture('share')} disabled={isProcessing}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#FF3B30] text-white text-[11px] tracking-widest font-black uppercase active:scale-95 transition-all shadow-[0_5px_20px_rgba(255,59,48,0.3)]"
              >
                {isProcessing ? "GENERATING..." : <><Share2 className="w-4 h-4" /> Share to Instagram</>}
              </button>
              <button 
                onClick={() => handleCapture('download')} disabled={isProcessing}
                className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 text-white text-[11px] tracking-widest font-black uppercase border border-white/20 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" /> Save Report
              </button>
              <button onClick={onClose} className="text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase py-3 mt-2">Close Document</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/NotificationModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react`
* 🧩 **Component (Default):** `NotificationModal`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        "use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, Terminal, ExternalLink, Clock } from "lucide-react";
import { supabase } from "../../lib/supabase";

interface Notification {
  id: number;
  title: string;
  body: string;
  type: string;
  link_url?: string;
  created_at: string;
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationModal({ isOpen, onClose }: NotificationModalProps) {
  const [logs, setLogs] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  // 🌟 알림 데이터 가져오기
  useEffect(() => {
    if (isOpen) {
      const fetchLogs = async () => {
        setLoading(true);
        const { data, error } = await supabase
          .from('notifications')
          .select('*')
          .order('created_at', { ascending: false }) // 최신순
          .limit(20); // 최근 20개만

        if (!error && data) setLogs(data);
        setLoading(false);
      };
      fetchLogs();
    }
  }, [isOpen]);

  // 날짜 포맷팅 (예: 02.18 14:30)
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return `${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 (클릭 시 닫힘) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* 메인 모달 (오른쪽에서 슬라이드) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-[100] flex flex-col shadow-2xl"
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-[#ff3b30]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">SYSTEM LOGS</h2>
                  <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Encrypted Transmission</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* 본문 (스크롤 영역) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-40 gap-4 text-white/30">
                  <div className="w-6 h-6 border-2 border-t-[#ff3b30] border-white/10 rounded-full animate-spin" />
                  <span className="text-xs font-mono animate-pulse">DECRYPTING DATA...</span>
                </div>
              ) : logs.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-60 text-white/30 text-center">
                  <Bell className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-sm font-bold">NO SIGNALS</p>
                  <p className="text-xs mt-1">수신된 시스템 로그가 없습니다.</p>
                </div>
              ) : (
                logs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all active:scale-[0.98]"
                    onClick={() => log.link_url && window.open(log.link_url, '_blank')}
                  >
                    {/* 날짜 뱃지 */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono text-white/30 group-hover:text-[#ff3b30] transition-colors">
                      <Clock className="w-3 h-3" />
                      {formatTime(log.created_at)}
                    </div>

                    {/* 아이콘 및 제목 */}
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full ${log.type === 'alert' ? 'bg-[#ff3b30] animate-pulse' : 'bg-green-500'}`} />
                      <h3 className="text-sm font-bold text-white pr-12">{log.title}</h3>
                    </div>

                    {/* 내용 */}
                    <p className="text-xs text-white/60 leading-relaxed pl-4 border-l border-white/10 ml-0.5">
                      {log.body}
                    </p>

                    {/* 링크가 있으면 표시 */}
                    {log.link_url && (
                      <div className="mt-3 pl-4 flex items-center gap-1 text-[10px] font-mono text-[#ff3b30] uppercase tracking-wider">
                        Access Link <ExternalLink className="w-3 h-3" />
                      </div>
                    )}
                  </motion.div>
                ))
              )}
            </div>
            
            {/* 하단 장식 */}
            <div className="p-4 border-t border-white/10 bg-black/50 text-center">
               <span className="text-[9px] text-white/20 font-mono">END OF TRANSMISSION</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/ArchiveModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, react, next-intl`
* 🧩 **Component (Default):** `ArchiveModal`
* ww **Hooks:** `useTranslations`

        ```typescript
        // components/ArchiveModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Heart, ImageIcon } from "lucide-react";
import { useState } from "react";
import { FashionItem } from "../../hooks/useAura";
import { useTranslations } from 'next-intl'; // 🌟 추가

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  archiveData: FashionItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  triggerHaptic: (pattern: number | number[]) => void;
  uploadedData: FashionItem[]; // 🌟 유지
}

const appleSpring = { type: "spring" as const, stiffness: 300, damping: 25 };

export default function ArchiveModal({ isOpen, onClose, archiveData, searchQuery, setSearchQuery, triggerHaptic, uploadedData }: ArchiveModalProps) {
  const t = useTranslations('Archive');
  const [activeTab, setActiveTab] = useState<'saved' | 'uploaded'>('saved');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { triggerHaptic(20); onClose(); }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={appleSpring} className="fixed bottom-0 left-0 right-0 z-50 flex h-[90vh] flex-col rounded-t-[32px] bg-[#1c1c1e] shadow-2xl md:h-[80vh]">
            <div className="flex w-full cursor-grab justify-center pb-4 pt-3"><div className="h-1.5 w-12 rounded-full bg-white/20" /></div>
            
            <div className="flex flex-col border-b border-white/5 px-8 pb-4 md:px-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-white">{t('title')}</h2>
                <button onClick={() => { triggerHaptic(20); onClose(); }} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 active:scale-95"><X className="h-5 w-5 text-white/80" /></button>
              </div>

              {/* 🌟 탭 버튼 UI */}
              <div className="flex w-full rounded-2xl bg-white/5 p-1 mb-6">
                <button onClick={() => { triggerHaptic(10); setActiveTab('saved'); }} className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${activeTab === 'saved' ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}>
                  <Heart className="w-4 h-4" /> {t('tab_saved')} ({archiveData.length})
                </button>
                {/* 🌟 수정: (준비중) 텍스트를 지우고 실제 업로드한 사진 개수 표시 */}
                <button onClick={() => { triggerHaptic(10); setActiveTab('uploaded'); }} className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${activeTab === 'uploaded' ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}>
                  <ImageIcon className="w-4 h-4" /> {t('tab_uploaded')} ({uploadedData?.length || 0})
                </button>
              </div>

              {activeTab === 'saved' && (
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="text" placeholder="비 오는 날, 더운 날, OOTD..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:bg-white/10 transition-colors" />
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto px-8 pb-20 pt-6 md:px-12">
              {activeTab === 'saved' ? (
                // 기존 저장된 룩 렌더링
                archiveData.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-white/30"><Search className="mb-4 h-12 w-12 opacity-50" strokeWidth={1} /><p>{t('empty_saved')}</p></div>
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
                )
              ) : (
                // 🌟 수정: 업로드 탭 렌더링 (준비중 화면을 교체하고 실제 데이터 매핑)
                !uploadedData || uploadedData.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-white/30">
                    <ImageIcon className="mb-4 h-12 w-12 opacity-50" strokeWidth={1} />
                    <p>{t('empty_uploaded')}</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
                    {uploadedData.map((item) => (
                      <div key={`upload-${item.id}`} className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer">
                        <img src={item.imageUrl} crossOrigin="anonymous" alt="Uploaded look" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-sm font-medium text-white">{item.weather} {item.temperature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/DeepDiveModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, next-intl`
* 🧩 **Component (Default):** `DeepDiveModal`
* ww **Hooks:** `useEffect, useState, useTranslations`

        ```typescript
        // components/DeepDiveModal.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion"; // 🌟 Transition 타입 유지!
import { X, Volume2, Palette, Instagram, ArrowDownRight, Ticket, Heart, RefreshCw } from "lucide-react";
import { FashionItem } from "../../hooks/useAura"; 
import { useTranslations } from 'next-intl'; // 🌟 추가

interface DeepDiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FashionItem;
  triggerHaptic: (pattern: number | number[]) => void;
}

// 🌟 타입스크립트 에러 완벽 해결 유지
const flipTransition: Transition = { 
  type: "tween", 
  ease: [0.25, 0.1, 0.25, 1], 
  duration: 0.55 
};

export default function DeepDiveModal({ isOpen, onClose, item, triggerHaptic }: DeepDiveModalProps) {
  const t = useTranslations('DeepDive');
  
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (isOpen) setIsFlipped(false);
  }, [isOpen]);

  const today = new Date();
  const dateString = `${today.getFullYear().toString().slice(-2)}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
  
  const likesCount = item.likes || 0;
  const isTrendsetter = likesCount >= 10; 
  const hasIgHandle = !!item.uploaderIg;  
  const isNotEditor = item.uploaderName !== 'AURA Editor'; 

  const showSocial = isTrendsetter && hasIgHandle && isNotEditor;
  const igHandle = item.uploaderIg?.replace('@', '');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[30] flex items-center justify-center bg-black/80 backdrop-blur-md perspective-[2000px]"
          onClick={() => { triggerHaptic(20); onClose(); }}
        >

          {/* ========================================================= */}
          {/* 🌟 실제 유저가 보는 3D 양면 포토카드 본체 */}
          {/* ========================================================= */}
          <motion.div 
            id="aura-deepdive-card"
            onClick={(e) => { 
              e.stopPropagation(); 
              setIsFlipped(!isFlipped); 
              triggerHaptic(15);
            }}
            initial={{ scale: 0.95, y: 20, opacity: 0 }} 
            animate={{ rotateY: isFlipped ? 180 : 0, scale: 1, y: 0, opacity: 1 }} 
            exit={{ scale: 0.95, y: 20, opacity: 0 }} 
            transition={flipTransition} 
            className="relative w-[96vw] md:max-w-[420px] h-[80vh] rounded-xl shadow-2xl cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }} 
          >
            
            {/* ================= [앞면 (FRONT): 순수 이미지] ================= */}
            <div 
              id={!isFlipped ? "aura-deepdive-target" : undefined} // 🌟 [NEW] 카드가 안 뒤집혔을 때 캡처 타겟 지정
              className="absolute inset-0 w-full h-full rounded-xl overflow-hidden border-[5px] border-[#F4F0EA] bg-[#F4F0EA]"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', zIndex: isFlipped ? 0 : 20 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.imageUrl} crossOrigin="anonymous" alt="Look Front" className="w-full h-full object-cover filter contrast-110" />
              
              {/* 앞면 하단 힌트 텍스트 */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#EBE6DD]/90 font-mono text-[10px] tracking-[0.2em] uppercase bg-black/50 px-5 py-2 rounded-full backdrop-blur-sm shadow-xl border border-white/10">
                <RefreshCw className="w-3 h-3" /> {t('tap_flip')}
              </div>
            </div>

            {/* ================= [뒷면 (BACK): 순수 디테일 정보] ================= */}
            <div 
              id={isFlipped ? "aura-deepdive-target" : undefined} // 🌟 [NEW] 카드가 뒤집혔을 때 캡처 타겟 지정
              className="absolute inset-0 w-full h-full bg-[#EBE6DD] text-black overflow-hidden rounded-xl flex flex-col shadow-inner border-[5px] border-[#F4F0EA]"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', zIndex: isFlipped ? 20 : 0 }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] filter contrast-120" />

              {/* 뒷면 헤더 */}
              <div className="pt-8 px-6 pb-4 relative z-10 overflow-hidden shrink-0">
                <span className="absolute -top-4 -left-4 text-[10rem] font-black italic text-black/5 pointer-events-none select-none leading-none font-serif">No.02</span>
                <div className="relative flex justify-between items-end border-b-[3px] border-black pb-2">
                  <div className="relative z-10">
                    <h2 className="text-6xl font-serif italic font-black tracking-tighter uppercase leading-[0.8] mix-blend-hard-light">Curator<br/>Note<span className="text-red-600">.</span></h2>
                    <div className="flex items-center gap-2 mt-3 font-mono text-[10px] font-bold uppercase tracking-widest bg-black text-[#EBE6DD] inline-block px-2 py-1 transform -rotate-2 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                      <span>Issue {dateString}</span><span className="h-3 w-[1px] bg-white/30"/><span>{t('archived')}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 relative z-10 items-center mb-2">
                    <Volume2 className="w-5 h-5 text-black animate-pulse" />
                    <button 
                      onClick={(e) => { e.stopPropagation(); triggerHaptic(20); onClose(); }} 
                      className="group relative p-1 z-50 hover:scale-110 transition-transform"
                    >
                      <div className="absolute inset-0 bg-black transform rotate-6 group-hover:rotate-12 transition-transform shadow-[2px_2px_0px_rgba(0,0,0,0.3)]" />
                      <X className="h-6 w-6 text-[#EBE6DD] relative z-10" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 뒷면 컨텐츠 스크롤 */}
              <div className="flex-1 overflow-y-auto p-6 relative z-10 custom-scrollbar">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-1.5 bg-black text-[#EBE6DD] w-fit px-3 py-1 font-mono text-xs shadow-[2px_2px_0px_rgba(200,0,0,0.8)] transform -rotate-2">
                    <Heart className="w-3 h-3 fill-current text-red-500" /><span>{likesCount} {t('aura_impact')}</span>
                  </div>
                  <div className="relative w-[90%]">
                    <span className="absolute -top-8 -left-6 text-9xl font-serif text-black/10 pointer-events-none">“</span>
                    <h3 className="flex items-center gap-2 text-[10px] font-bold text-black uppercase tracking-widest mb-3 font-mono border-b border-black/20 pb-1 w-fit"><ArrowDownRight className="w-3 h-3 text-red-600" /> {t('mood_notes')}</h3>
                    <p className="text-lg font-serif italic font-bold text-black leading-snug relative z-10 mix-blend-multiply pl-4 border-l-4 border-red-600/50">{t('mood_desc_pre')} <span className="bg-black text-[#EBE6DD] px-1 font-mono not-italic text-[10px] mx-1">{item.weather}</span> {t('mood_desc_post')}</p>
                  </div>
                  <div className="self-end w-[90%] relative pl-8">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-black/30 transform rotate-3 pointer-events-none" />
                    <h3 className="flex items-center justify-end gap-2 text-[10px] font-bold text-black uppercase tracking-widest mb-4 font-mono text-right relative z-10">{t('extracted_dna')} <Palette className="w-3 h-3 text-red-600"/></h3>
                    <div className="flex justify-end relative h-20 items-center z-10 pl-10 pr-2">
                      {(item.colors || ["#E5E0D8", "#2C2C2C", "#8A7B6E"]).map((colorHex, idx) => (
                        <div key={idx} className="w-14 h-16 bg-white border-[3px] border-black p-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 absolute" style={{ backgroundColor: colorHex, right: `${idx * 30}px`, zIndex: 10 - idx, transform: `rotate(${idx % 2 === 0 ? -4 : 4}deg)` }}>
                          <span className="absolute bottom-0 right-0.5 font-mono text-[6px] font-bold text-black/50 bg-white/80 px-0.5 backdrop-blur-sm mix-blend-hard-light">{colorHex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-32" /> 
              </div>

              {/* 소셜 티켓 */}
              {showSocial && (
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 w-[85%]">
                  <div onClick={(e) => { e.stopPropagation(); triggerHaptic(30); window.open(`https://instagram.com/${igHandle}`, '_blank'); }} className="bg-black text-[#EBE6DD] p-1 shadow-[8px_8px_0px_rgba(200,0,0,0.8)] border-2 border-[#EBE6DD] relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                    <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#EBE6DD] rounded-full border-2 border-black" /><div className="absolute top-1/2 -right-2 w-4 h-4 bg-[#EBE6DD] rounded-full border-2 border-black" />
                    <div className="border border-dashed border-[#EBE6DD]/30 p-3 flex justify-between items-center relative z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1"><Ticket className="w-3 h-3 text-red-500 animate-pulse" /><span className="font-mono text-[8px] font-bold tracking-[0.2em] uppercase text-red-500">Curator Pass</span></div>
                        <h3 className="text-xl font-black italic font-serif tracking-tighter truncate max-w-[120px]">{item.uploaderName}</h3><p className="font-mono text-[9px] opacity-60">ID: {igHandle?.toUpperCase()}</p>
                      </div>
                      <button className="group flex items-center gap-1.5 bg-red-600 text-black font-black text-[10px] px-3 py-2 tracking-widest uppercase border-2 border-[#EBE6DD] hover:bg-red-500 transition-colors active:scale-95 shadow-[3px_3px_0px_rgba(235,230,221,1)]"><Instagram className="w-3 h-3 group-hover:rotate-12 transition-transform" /> GO</button>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-black/30 font-mono text-[8px] tracking-[0.2em] uppercase pointer-events-none">
                {t('tap_back')}
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/LocationSelector.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, lucide-react, @/lib/supabase, @supabase/supabase-js`
* 🧩 **Component (Default):** `LocationSelector`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        // components/LocationSelector.tsx
import { useState, useEffect } from "react";
import { Search, MapPin, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase"; // 경로에 맞게 수정해주세요
import { User } from "@supabase/supabase-js";

interface LocationSelectorProps {
  user: User | null;
  locale?: string; // 검색 언어 설정용
}

interface SearchResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

export default function LocationSelector({ user, locale = 'en' }: LocationSelectorProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. 내 현재 설정 불러오기
  useEffect(() => {
    if (!user) return;
    const loadMyCity = async () => {
      const { data } = await supabase
        .from('aura_push_subscriptions')
        .select('location_name')
        .eq('user_id', user.id)
        .single();
      
      if (data?.location_name) {
        setCurrentLocation(data.location_name);
      }
    };
    loadMyCity();
  }, [user]);

  // 2. OpenStreetMap 검색 (Nominatim API)
  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setResults([]);

    try {
      // API 호출 (언어 설정 적용)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&accept-language=${locale}&limit=5`
      );
      const data = await response.json();
      setResults(data);
      setIsMenuOpen(true);
    } catch (error) {
      console.error("Location search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  // 3. 위치 선택 및 저장
  const handleSelect = async (place: SearchResult) => {
    if (!user) return;
    
    // 표시용 이름 간단하게 정리 (앞부분만 사용)
    const simpleName = place.display_name.split(',')[0];
    
    try {
      const { error } = await supabase
        .from('aura_push_subscriptions')
        .update({
          location_name: simpleName,
          latitude: parseFloat(place.lat),
          longitude: parseFloat(place.lon)
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setCurrentLocation(simpleName);
      setQuery("");
      setResults([]);
      setIsMenuOpen(false);
      
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to save location.");
    }
  };

  return (
    <div className="relative">
      {/* 현재 설정된 위치 표시 */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-black/60" />
          <span className="text-black/60 tracking-widest uppercase text-[10px]">LOCAL_WEATHER</span>
        </div>
        <span className="text-[10px] font-bold text-black truncate max-w-[120px]">
          {currentLocation || "NOT SET"}
        </span>
      </div>

      {/* 검색 입력창 */}
      <div className="flex items-center bg-transparent border-b border-black/30 pb-1 relative">
        <input 
          type="text" 
          placeholder="Search City (e.g. Paris)" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="bg-transparent outline-none w-full font-bold text-black placeholder:text-black/20 text-xs uppercase"
        />
        <button 
          onClick={handleSearch}
          disabled={isSearching}
          className="text-black hover:opacity-70 transition-opacity"
        >
          {isSearching ? <Loader2 className="w-3 h-3 animate-spin" /> : <Search className="w-3 h-3" />}
        </button>
      </div>

      {/* 검색 결과 드롭다운 (영수증 스타일) */}
      {isMenuOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#F8F5F0] border border-black shadow-xl z-50 max-h-40 overflow-y-auto">
          {results.map((place) => (
            <button
              key={place.place_id}
              onClick={() => handleSelect(place)}
              className="w-full text-left px-2 py-2 text-[10px] font-mono border-b border-dashed border-black/10 hover:bg-black hover:text-white transition-colors truncate"
            >
              {place.display_name}
            </button>
          ))}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-1 text-[8px] uppercase hover:bg-black/5"
          >
            [CLOSE]
          </button>
        </div>
      )}
      
      {/* 검색 결과 없음 */}
      {isMenuOpen && results.length === 0 && !isSearching && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#F8F5F0] border border-black p-2 text-[10px] text-center">
          NO RESULTS
        </div>
      )}
    </div>
  );
}
        ### 📄 app/components/ActionMenuModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, @/lib/affiliate, @vercel/analytics/react, next-intl`
* 🧩 **Component (Default):** `ActionMenuModal`
* ww **Hooks:** `useTranslations`

        ```typescript
        // components/ActionMenuModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Bell, Send, ShoppingCart, MessageSquareWarning } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";
import { generateTrackingLink } from "@/lib/affiliate";
import { track } from '@vercel/analytics/react';
import { useTranslations } from 'next-intl'; // 🌟 추가

interface ActionMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FashionItem;
  onShare: () => void;
  subscribeToPush: () => void;
  sendTestPush: () => void;
  isPushEnabled: boolean; 
  unsubscribeFromPush: () => void; 
}

export default function ActionMenuModal({ isOpen, onClose, item, onShare, unsubscribeFromPush, subscribeToPush, sendTestPush, isPushEnabled }: ActionMenuModalProps) {
  const t = useTranslations('ActionMenu');
  // 🌟 쇼핑몰 검색 이동 함수 (수익화 버전으로 업그레이드)
  const handleShopNow = () => {
    if (!item || !item.tags) return;
    // 1. 태그에서 #을 제거하고 검색어 조립 (예: "미니멀 블랙자켓")
    const query = item.tags.map(t => t.replace('#', '')).join(' ');

    // 2. 커스텀 이벤트 추적: 무신사/쇼핑몰로 넘어간 전환율(CTR) 기록!
    track('Shop_Link_Clicked', { search_query: query, look_id: item.id });

    // 3. 💸 AURA 어필리에이트 라우터를 통해 트래킹 링크 발급!
    const trackingUrl = generateTrackingLink('musinsa', query);
    // 4. 새 창으로 열기 (여기서부터 구매 발생 시 AURA 계좌로 수수료 적립)
    window.open(trackingUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[260] bg-black/60 backdrop-blur-sm" />
          
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed bottom-0 left-0 right-0 z-[261] rounded-t-3xl border-t border-white/20 bg-[#1c1c1e]/95 p-6 pb-12 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
            <div className="mx-auto mb-8 h-1.5 w-12 rounded-full bg-white/20" />
            
            <div className="flex flex-col gap-3">
              {/* 🌟 1. 공유 버튼 (누르면 포토카드를 캡처해서 보냄) */}
              <button 
                onClick={() => { onShare(); onClose(); }} 
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Share2 className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">{t('share_title')}</span>
                  <span className="text-[12px] text-white/50">{t('share_desc')}</span>
                </div>
              </button>

              {/* 🌟 쇼핑하기 버튼 */}
              <button 
                onClick={handleShopNow} 
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95 border border-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"><ShoppingCart className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">{t('shop_title')}</span>
                  <span className="text-[12px] text-white/50">{t('shop_desc')}</span>
                </div>
              </button>

              {/* 🌟 2. 푸시 알림 버튼을 다이내믹하게 교체! */}
              <button 
                onClick={() => { 
                  // 켜져 있으면 끄고, 꺼져 있으면 켭니다!
                  if (isPushEnabled) {
                    unsubscribeFromPush();
                  } else {
                    subscribeToPush(); 
                  }
                  onClose(); 
                }}
                className={`flex items-center gap-4 rounded-2xl p-4 transition-all active:scale-95 border ${
                  isPushEnabled 
                    ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' // 켜졌을 때 (영롱한 보라색)
                    : 'bg-white/5 text-white hover:bg-white/10 border-transparent' // 꺼졌을 때 (기본 흰색)
                }`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isPushEnabled ? 'bg-indigo-500/20' : 'bg-white/10'}`}>
                  <Bell className={`h-5 w-5 ${isPushEnabled ? 'fill-current' : ''}`} />
                </div>
                <div className="flex flex-col items-start text-left">
                  {/* 🌟 힙스터 타이포그래피 적용 (대문자, 자간 넓게, 굵게) */}
                  <span className="text-[14px] font-black tracking-widest uppercase">
                    {isPushEnabled ? t('sync_active') : t('sync_off')}
                  </span>
                  {/* 🌟 시크한 서브 텍스트 */}
                  <span className="text-[11px] opacity-70 mt-0.5">
                    {isPushEnabled ? t('sync_desc_on') : t('sync_desc_off')}
                  </span>
                </div>
              </button>

              {process.env.NODE_ENV === 'development' && (
                <button onClick={() => { sendTestPush(); onClose(); }} className="flex items-center gap-4 rounded-2xl bg-emerald-500/10 p-4 text-emerald-400 transition-all hover:bg-emerald-500/20 active:scale-95">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20"><Send className="h-5 w-5" /></div>
                  <span className="text-[15px] font-bold">{t('test_push')}</span>
                </button>
              )}
            </div>
              
            {/* 🌟 버그 제보 및 피드백 수집 핫라인 */}
            <button 
              onClick={() => { 
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSco8ivWlB4bSQ0LpvXRgDIMh77EFxL2hM1CmsBsuZ_p0-MjBg/viewform?usp=header', '_blank'); 
                onClose(); 
              }} 
              className="w-full flex items-center gap-4 rounded-2xl bg-red-500/10 p-4 text-red-400 transition-all hover:bg-red-500/20 active:scale-95 border border-red-500/20 mt-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                <MessageSquareWarning className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[15px] font-bold">{t('bug_report')}</span>
                <span className="text-[12px] text-red-400/70">{t('bug_desc')}</span>
              </div>
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/StampEditor.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, html-to-image`
* 🧩 **Component (Default):** `StampEditor`
* ww **Hooks:** `useMotionValue, useEffect, useState`

        ```typescript
        // components/StampEditor.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Check, X, Type, Circle, Stamp as StampIcon, Trash2, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';
import { toBlob } from 'html-to-image';

type StampType = 'CULT' | 'AURA_CLB' | 'ARCHIVED';

interface StampData {
  id: string;
  type: StampType;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface StampEditorProps {
  imageFile: File;
  onFinish: (editedImageBlob: Blob) => void;
  onCancel: () => void;
}

export default function StampEditor({ imageFile, onFinish, onCancel }: StampEditorProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [stamps, setStamps] = useState<StampData[]>([]);
  const [selectedStampId, setSelectedStampId] = useState<string | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => setImageUrl(e.target?.result as string);
    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  const addStamp = (type: StampType) => {
    const newStamp: StampData = {
      id: Date.now().toString(),
      type,
      x: 50,
      y: 50,
      scale: 1,
      rotation: 0,
    };
    setStamps([...stamps, newStamp]);
    setSelectedStampId(newStamp.id);
  };

  const updateStamp = (id: string, updates: Partial<StampData>) => {
    setStamps(stamps.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteStamp = (id: string) => {
    setStamps(stamps.filter(s => s.id !== id));
    setSelectedStampId(null);
  };

  const handleFinish = async () => {
    if (!editorRef.current || isSaving) return;
    setIsSaving(true);
    setSelectedStampId(null); // 🌟 캡처 전 모서리 조절자 숨기기

    setTimeout(async () => {
      try {
        const blob = await toBlob(editorRef.current!, {
          cacheBust: true,
          pixelRatio: 2,
          backgroundColor: 'transparent',
        });

        if (blob) {
          onFinish(blob);
        }
      } catch (error) {
        console.error("Stamping failed:", error);
      } finally {
        setIsSaving(false);
      }
    }, 150);
  };

  if (!imageUrl) return null;

  return (
    <div className="fixed inset-0 z-[300] bg-black flex flex-col">
      {/* 헤더 */}
      <div className="h-16 px-4 flex items-center justify-between bg-black z-20 shrink-0">
        <button onClick={onCancel} className="text-white/60 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-white font-mono text-sm uppercase tracking-widest">Stamping Phase</h2>
        <button 
          onClick={handleFinish} 
          disabled={isSaving}
          className="bg-red-600 text-white px-4 py-2 font-black text-sm uppercase tracking-widest skew-x-[-10deg] shadow-[3px_3px_0px_black] border border-white/20 flex items-center gap-2"
        >
          {isSaving ? 'Merging...' : <><Check className="w-4 h-4" /> Done</>}
        </button>
      </div>

      {/* 에디터 메인 영역 */}
      <div 
        className="flex-1 relative bg-[#1A1A1A] overflow-hidden flex items-center justify-center p-4"
        onClick={() => setSelectedStampId(null)} // 빈 공간 클릭 시 조절자 해제
      >
        <div ref={editorRef} className="relative shadow-2xl inline-block max-h-full max-w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} className="max-h-[75vh] object-contain pointer-events-none" alt="Editing Base" />          
          {stamps.map((stamp) => (
            <DraggableStamp 
              key={stamp.id} 
              stamp={stamp} 
              containerRef={editorRef} 
              isSelected={selectedStampId === stamp.id}
              onSelect={() => setSelectedStampId(stamp.id)}
              onUpdate={updateStamp}
              onDelete={deleteStamp}
            />
          ))}
        </div>
      </div>

      {/* 하단 스탬프 추가 툴바 */}
      <div className="h-24 bg-[#1A1A1A] border-t border-white/10 flex items-center justify-center gap-6 z-20 shrink-0">
        <ToolbarButton icon={<Type className="w-5 h-5" />} label="CULT BOX" onClick={() => addStamp('CULT')} color="bg-red-600" />
        <ToolbarButton icon={<Circle className="w-5 h-5" />} label="AURA CLB" onClick={() => addStamp('AURA_CLB')} color="bg-black" />
        <ToolbarButton icon={<StampIcon className="w-5 h-5" />} label="ARCHIVED" onClick={() => addStamp('ARCHIVED')} color="bg-blue-600" stroke={true} />
      </div>
    </div>
  );
}

interface ToolbarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color: string;
  stroke?: boolean;
}

const ToolbarButton = ({ icon, label, onClick, color, stroke = false }: ToolbarButtonProps) => (
    <button onClick={onClick} className="flex flex-col items-center group active:scale-95 transition-transform">
    <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center border-2 border-[#EBE6DD] shadow-[3px_3px_0px_rgba(0,0,0,0.5)] group-hover:-translate-y-1 transition-transform ${stroke ? 'text-transparent bg-clip-text border-blue-500' : 'text-[#EBE6DD]'}`}>
      {icon}
    </div>
    <span className="text-[8px] font-mono font-bold text-white/60 uppercase tracking-widest mt-2">{label}</span>
  </button>
);

interface DraggableStampProps {
  stamp: StampData;
  containerRef: React.RefObject<HTMLDivElement>;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (id: string, updates: Partial<StampData>) => void;
  onDelete: (id: string) => void;
}

// 🌟 마우스 트래킹 및 튕김 현상 완벽 해결판
const DraggableStamp = ({ stamp, containerRef, isSelected, onSelect, onUpdate, onDelete }: DraggableStampProps) => {
  const x = useMotionValue(stamp.x);
  const y = useMotionValue(stamp.y);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragMomentum={false}
      onClick={(e) => e.stopPropagation()} 
      onPointerDown={() => onSelect()}
      
      // 🌟 [해결 1] 드래그가 끝나는 순간, 현재 프레이머 모션의 좌표를 React 부모 상태에 저장! (제자리 튕김 완벽 방지)
      onDragEnd={() => {
        onUpdate(stamp.id, { x: x.get(), y: y.get() });
      }}
      
      // 🌟 [해결 2] 'transition-all' 제거! (드래그 위치 변화에 딜레이를 주어 마우스를 버벅이게 만든 주범)
      className={`absolute top-0 left-0 cursor-move ${isSelected ? 'ring-1 ring-red-500/50 rounded-sm shadow-2xl' : ''}`}
      
      style={{ x, y, touchAction: 'none', zIndex: isSelected ? 50 : 10 }}
    >
      {/* 선택되었을 때만 모서리에 나타나는 다이렉트 조절자 */}
      {isSelected && (
        <>
          {/* 좌측 상단: 삭제 */}
          <button
            onPointerDown={(e) => e.stopPropagation()} // 조절자를 누를 땐 드래그 발동 차단
            onClick={(e) => { e.stopPropagation(); onDelete(stamp.id); }}
            className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors z-20"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          {/* 우측 상단: 회전 (15도씩) */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onUpdate(stamp.id, { rotation: stamp.rotation + 15 }); }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          {/* 좌측 하단: 축소 */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onUpdate(stamp.id, { scale: Math.max(0.5, stamp.scale - 0.15) }); }}
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* 우측 하단: 확대 */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onUpdate(stamp.id, { scale: Math.min(3, stamp.scale + 0.15) }); }}
            className="absolute -bottom-4 -right-4 w-8 h-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </>
      )}

      {/* 내부 스탬프 디자인 영역 */}
      <div style={{ transform: `scale(${stamp.scale}) rotate(${stamp.rotation}deg)`, transformOrigin: 'center' }}>
        
        {stamp.type === 'CULT' && (
          <div className="bg-red-600 text-[#EBE6DD] px-3 py-1 font-black font-serif italic text-xl uppercase tracking-tighter -rotate-6 border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.4)] pointer-events-none">
            CULT.
          </div>
        )}
        
        {stamp.type === 'AURA_CLB' && (
          <div className="w-20 h-20 rounded-full bg-black border-[4px] border-[#EBE6DD] flex items-center justify-center rotate-12 shadow-[4px_4px_0px_rgba(255,0,0,0.6)] pointer-events-none">
             <div className="text-center leading-[0.8]">
               <span className="block text-[8px] font-mono text-[#EBE6DD]">THE</span>
               <span className="block text-xl font-black font-serif italic text-red-600">AURA</span>
               <span className="block text-[10px] font-mono font-bold text-[#EBE6DD] tracking-widest">CLB.</span>
             </div>
          </div>
        )}
        
        {stamp.type === 'ARCHIVED' && (
          <div className="border-[4px] border-blue-600 text-blue-600 px-4 py-2 font-mono font-bold text-lg uppercase tracking-[0.2em] rotate-3 mix-blend-hard-light opacity-80 bg-blue-600/10 backdrop-blur-sm rounded-sm pointer-events-none" style={{borderStyle: 'dashed'}}>
            ARCHIVED
            <span className="block text-[8px] text-center border-t border-blue-600 mt-1 pt-1">Verified.</span>
          </div>
        )}
        
      </div>
    </motion.div>
  );
};
        ### 📄 app/components/InstallPrompt.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react`
* 🧩 **Component (Default):** `InstallPrompt`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        // components/InstallPrompt.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Share, MoreVertical } from "lucide-react";

export default function InstallPrompt() {
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone;
    const hasDismissed = localStorage.getItem("aura_install_dismissed");
    
    if (isStandalone || hasDismissed) return;

    // 기기 판별
    const ua = window.navigator.userAgent;
    const isIOSDevice = /iPad|iPhone|iPod/.test(ua);
    setIsIOS(isIOSDevice);

    const timer = setTimeout(() => setShow(true), 3000); // 3초 뒤에 자연스럽게 팝업
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem("aura_install_dismissed", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-28 left-4 right-4 z-[150] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#2a2a2c]/95 to-[#1c1c1e]/95 p-6 shadow-2xl backdrop-blur-xl">
          <button onClick={dismiss} className="absolute right-4 top-4 rounded-full bg-white/10 p-1.5 text-white/50 hover:text-white"><X className="w-4 h-4" /></button>
          
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight mb-1">AURA 앱 설치하기</h3>
              <p className="text-sm text-white/70 mb-3">바탕화면에 설치하고 더 빠르고 매끄럽게 매일의 룩을 확인하세요.</p>
              
              {/* 기기별 맞춤 안내 */}
              <div className="rounded-xl bg-black/30 p-3 text-sm text-white/90 border border-white/5">
                {isIOS ? (
                  <div className="flex items-center gap-2">
                    하단의 <Share className="w-4 h-4 text-blue-400" /> <b>공유 버튼</b>을 누르고<br/><b>&apos;홈 화면에 추가&apos;</b>를 선택하세요.
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    상단의 <MoreVertical className="w-4 h-4 text-white" /> <b>메뉴 버튼</b>을 누르고<br/><b>&apos;앱 설치&apos;</b>를 선택하세요.
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/VibeMatch.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, next/image`
* 🧩 **Component (Default):** `VibeMatch`

        ```typescript
        
// components/VibeMatch.tsx
import { motion } from "framer-motion";
import { Fingerprint, Zap, UserPlus } from "lucide-react";
import Image from 'next/image'; // 🌟 추가

interface VibeUser {
    id: string;
    name: string;
    ig: string;
    matchRate: number;
    img: string;
  }

interface VibeMatchProps {
    report: {
        topTags: [string, number][];
        vibeTitleKo: string;
        vibeTitleEn: string;
    } | null;
    matchedUsers: VibeUser[];
}

export default function VibeMatch({ report, matchedUsers }: VibeMatchProps) {
  // 리포트가 없거나, 매칭된 유저가 한 명도 없으면 렌더링하지 않습니다.
  if (!report || !matchedUsers || matchedUsers.length === 0) return null;

  return (
    <div className="w-full mb-8 pt-4">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center gap-2">
          <Fingerprint className="w-5 h-5 text-indigo-400 animate-pulse" />
          <h2 className="text-[11px] font-black tracking-[0.2em] text-white uppercase">
            Vibe Match <span className="text-white/40 font-mono">/ SYNC</span>
          </h2>
        </div>
        <span className="text-[9px] font-mono text-indigo-400 border border-indigo-400/30 px-2 py-0.5 rounded-full">
          BASED ON &quot;{report.topTags[0]?.[0] || 'YOUR'}&quot; DNA
        </span>
      </div>

      {/* 🌟 진짜 DB에서 받아온 matchedUsers 배열을 순회합니다! */}
      <div className="flex gap-4 overflow-x-auto px-4 pb-6 snap-x snap-mandatory hide-scrollbar">
        {matchedUsers.map((user, idx) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
            className="snap-center shrink-0 w-[140px] relative rounded-[1.5rem] overflow-hidden group border border-white/10 bg-white/5"
          >
            <div className="aspect-[3/4] w-full overflow-hidden relative">
              <Image src={user.img} alt={user.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] font-mono font-black text-white">{user.matchRate}%</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-black text-white truncate">{user.name}</span>
                <span className="text-[9px] font-mono text-white/50 truncate">@{user.ig}</span>
              </div>
              <button className="w-full py-2 bg-indigo-600 rounded-xl text-[9px] font-black text-white flex items-center justify-center gap-1 active:scale-95">
                <UserPlus className="w-3 h-3" /> CONNECT
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}} />
    </div>
  );
}
        ### 📄 app/components/LockModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, @/hooks/useGatekeeper`
* 🧩 **Component (Default):** `LockModal`
* ww **Hooks:** `useState`

        ```typescript
        "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import { VerifyResult } from "@/hooks/useGatekeeper";

interface LockModalProps {
  isOpen: boolean;
  onVerify: (code: string) => Promise<VerifyResult>;
}

export default function LockModal({ isOpen, onVerify }: LockModalProps) {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    if (!code) return;
    setIsVerifying(true);
    const res = await onVerify(code);
    if (!res.success) {
      setMsg(res.message || "오류가 발생했습니다.");
      setIsVerifying(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/90"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
            className="max-w-md w-full bg-[#111] border border-white/10 p-10 rounded-[2.5rem] text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-[#ff3b30]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#ff3b30]/20 text-[#ff3b30]">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-2 italic font-serif text-white uppercase tracking-tighter">Aura Cult.</h2>
            <p className="text-white/40 text-sm mb-8">멤버십 전용 공간입니다. 초대 코드를 입력하십시오.</p>
            <div className="space-y-4">
              <input 
                value={code} onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="ENTER CODE"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-center font-mono tracking-[0.3em] focus:border-[#ff3b30] outline-none transition-all text-white"
                onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
              />
              <button 
                onClick={handleVerify} disabled={isVerifying}
                className="w-full bg-[#ff3b30] text-white py-4 rounded-2xl font-bold hover:bg-[#ff5b50] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isVerifying ? "Verifying..." : "Access Granted"}
                {!isVerifying && <ArrowRight className="w-4 h-4" />}
              </button>
              {msg && <p className="text-[#ff3b30] text-xs font-medium">{msg}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/ProfileModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, @supabase/supabase-js, next-intl`...
* 🧩 **Component (Default):** `ProfileModal`
* ww **Hooks:** `useEffect, useLocale, useState, useTranslations`

        ```typescript
        // components/ProfileModal.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LogOut, Share2, Volume2, VolumeX, Sparkles, Instagram, Check, Link, Languages, Download, Loader2 } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { FashionItem } from "../../hooks/useAura";
import { useTranslations, useLocale } from 'next-intl';
import LocationSelector from "./LocationSelector"; 
import { toPng } from "html-to-image";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onLogout: () => void;
  uploadedCount: number;
  bestLook?: FashionItem;
  onSaveInstagram: (handle: string) => Promise<void> | void; 
  onOpenReport: () => void;
}

export default function ProfileModal({ isOpen, onClose, user, onLogout, uploadedCount, bestLook, onSaveInstagram, onOpenReport }: ProfileModalProps) {
  const t = useTranslations('Profile');
  const locale = useLocale();

  // 🌟 캡처 영역 Ref
  const cardRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isIgSaved, setIsIgSaved] = useState(false); 
  
  const [igHandle, setIgHandle] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false); 

  const isElite = uploadedCount >= 5; 
  const nickname = user?.email ? user.email.split('@')[0].toLowerCase() : 'aura_user';
  const today = new Date();
  const dateString = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  useEffect(() => {
    if (user?.user_metadata?.instagram) {
      setIgHandle(user.user_metadata.instagram);
    }
  }, [user]);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => setIsMuted(true));
      setIsMuted(false);
    } else if (!isOpen && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isOpen]);

  // 🌟 이미지 다운로드 함수 (스크롤 전체 영역 캡처 수정)
  const handleDownload = async () => {
    const element = cardRef.current;
    if (!element || isProcessing) return;
    setIsProcessing(true);

    try {
      // 렌더링 안정화를 위한 짧은 대기
      await new Promise(resolve => setTimeout(resolve, 100));

      // 🌟 핵심: 스크롤된 전체 높이와 너비를 계산하여 설정
      const dataUrl = await toPng(element, { 
        quality: 0.95, 
        pixelRatio: 2, 
        cacheBust: true,
        skipAutoScale: true,
        // 현재 보이는 영역이 아닌 전체 스크롤 영역의 크기를 지정
        width: element.scrollWidth,
        height: element.scrollHeight,
        style: {
           // 캡처 시에는 스크롤바를 숨기고 전체 내용을 다 보여주도록 스타일 강제 적용
           overflow: 'visible',
           maxHeight: 'none',
           // 메인 컨테이너의 배경색을 적용하여 투명하지 않게 함
           backgroundColor: '#EBE6DD',
        }
      });

      const link = document.createElement('a');
      link.download = `AURA_PROFILE_${nickname}_${dateString.replace(/\./g, '')}.png`;
      link.href = dataUrl;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) { 
      console.error("Profile image generation failed:", err);
      alert("이미지 저장에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally { 
      setIsProcessing(false); 
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) audioRef.current.play();
    else audioRef.current.pause();
    setIsMuted(!isMuted);
  };

  const toggleLanguage = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000;`;
    window.location.reload(); 
  };

  const handleSaveId = async () => {
    if (!igHandle.trim() || isSaving) return;
    setIsSaving(true);
    const cleanHandle = igHandle.replace('@', '').trim();
    
    await onSaveInstagram(cleanHandle);
    
    setIsSaving(false);
    setIsIgSaved(true);
    setTimeout(() => setIsIgSaved(false), 2000);
  };

  const getShowcaseUrl = () => {
    const targetId = igHandle ? igHandle.replace('@', '').trim() : nickname;
    return `${window.location.origin}/@${targetId}`;
  };

  const handlePublish = async () => {
    const shareData = {
      title: 'AURA Editorial',
      text: `Check out my AURA Archive.`,
      url: getShowcaseUrl(),
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        handleCopyLink();
      }
    } catch (error) {
      console.log('Share failed:', error);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShowcaseUrl());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.log('Copy failed:', error);
      alert(`Copy this URL:\n${getShowcaseUrl()}`);
    }
  };

  if (!user) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm" />
          
          <motion.div initial={{ opacity: 0, y: 50, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: 50, rotate: 2 }} transition={{ type: "spring", damping: 20 }} className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            
            {/* 메인 컨테이너 (여기서 ref 제거됨) */}
            <div className="relative w-full max-w-sm bg-[#EBE6DD] text-black shadow-2xl flex flex-col pointer-events-auto overflow-hidden rounded-sm max-h-[85vh]">
              
              <audio ref={audioRef} loop src="/ambient.mp3" />

              {/* 상단 고정 버튼들 (캡처 제외) */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-50">
                <button onClick={toggleMute} className="p-2 rounded-full hover:bg-black/10 transition-colors bg-[#EBE6DD]/50 backdrop-blur-sm">
                  {isMuted ? <VolumeX className="w-5 h-5 text-black" /> : <Volume2 className="w-5 h-5 text-black" />}
                </button>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-black/10 transition-colors bg-[#EBE6DD]/50 backdrop-blur-sm">
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* 🌟 스크롤 영역 (캡처 대상: 여기에 ref 연결) */}
              <div ref={cardRef} className="overflow-y-auto flex-1 z-10 custom-scrollbar relative">
                
                {/* 🌟 배경 노이즈 (캡처 영역 내부로 이동) */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-multiply z-0"
                  style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
                />

                {/* 헤더 */}
                <div className="pt-10 px-6 pb-2 border-b-2 border-black relative shrink-0 z-10">
                  <h1 className="text-6xl font-serif italic font-black tracking-tighter text-black uppercase">Aura.</h1>
                  <p className="font-mono text-[10px] tracking-[0.2em] mt-2 uppercase text-black/60">{t('editorial_issue')} — {dateString}</p>
                  
                  <div className="absolute top-8 right-8 transform rotate-[15deg] border-[3px] border-red-600 text-red-600 px-3 py-1 text-2xl font-black tracking-widest opacity-80 mix-blend-multiply pointer-events-none">
                    {isElite ? 'CULT\nSTATUS' : 'NEW\nFACE'}
                  </div>
                </div>

                {/* 이미지 */}
                <div className="px-6 py-8 relative shrink-0 z-10">
                  <div className="relative w-full aspect-[4/5] bg-zinc-300 transform -rotate-2 shadow-xl border-[10px] border-white">
                    {bestLook ? (
                      <img src={bestLook.imageUrl} alt="Editorial" className="w-full h-full object-cover grayscale-[0.3] contrast-110 sepia-[0.2]" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-serif text-4xl text-black/20 italic bg-[#d9d4cb]">{t('no_archive')}</div>
                    )}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-md transform rotate-3 shadow-sm border border-black/5 mix-blend-screen" />
                  </div>
                  
                  <h2 className="absolute bottom-4 -left-2 text-6xl font-serif italic text-white mix-blend-difference font-black drop-shadow-md z-10 pointer-events-none break-all max-w-full">
                    {igHandle ? igHandle.replace('@', '') : nickname}
                  </h2>
                </div>

                {/* 상세 정보 (영수증 부분) */}
                <div className="px-6 pt-5 pb-8 bg-[#F8F5F0] border-t border-dashed border-black/30 font-mono text-xs shadow-inner min-h-[300px] z-10 relative">
                  <p className="text-center mb-4 font-bold tracking-widest uppercase">{t('receipt_title')}</p>
                  
                  <div className="flex justify-between mb-1.5 border-b border-black/10 pb-1.5">
                    <span className="text-black/60">{t('curator')}</span>
                    <span className="font-bold truncate max-w-[120px]">{nickname}</span>
                  </div>
                  <div className="flex justify-between mb-1.5 border-b border-black/10 pb-1.5">
                    <span className="text-black/60">{t('looks_uploaded')}</span>
                    <span className="font-bold">{String(uploadedCount).padStart(3, '0')}</span>
                  </div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-black/60">{t('aura_impact')}</span>
                    <span className="font-bold">99.9%</span>
                  </div>

                  {/* 인스타그램 ID */}
                  <div className="mt-3 pt-3 border-t border-dotted border-black/30">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1">
                        <Instagram className="w-3 h-3 text-black/60" />
                        <span className="text-black/60 tracking-widest uppercase">{t('showcase_id')}</span>
                      </div>
                      <span className="text-[8px] text-black/40 tracking-widest italic">{t('press_enter')}</span>
                    </div>
                    <div className="flex items-center bg-transparent border-b border-black/30 pb-1">
                      <span className="font-bold text-black mr-1">@</span>
                      <input 
                        type="text" 
                        placeholder="your_id" 
                        value={igHandle}
                        onChange={(e) => setIgHandle(e.target.value.toLowerCase())}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveId();
                        }}
                        className="bg-transparent outline-none w-full font-bold text-black placeholder:text-black/20"
                      />
                      <button 
                        onClick={handleSaveId}
                        disabled={isSaving}
                        className={`text-[10px] font-bold tracking-widest transition-colors ${isIgSaved ? 'text-green-600' : 'text-black hover:text-red-600'}`}
                      >
                        {isSaving ? '[...]' : isIgSaved ? '[SAVED]' : '[SAVE]'}
                      </button>
                    </div>
                  </div>

                  {/* 위치 설정 */}
                  <div className="mt-3 pt-3 border-t border-dotted border-black/30">
                    <LocationSelector user={user} locale={locale} />
                  </div>

                  {/* 언어 설정 */}
                  <div className="mt-3 pt-3 border-t border-dotted border-black/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        <Languages className="w-3 h-3 text-black/60" />
                        <span className="text-black/60 tracking-widest uppercase">LANGUAGE_SETTING</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {['ko', 'en'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => toggleLanguage(lang)}
                          className={`flex-1 py-2 border border-black text-[10px] font-black tracking-widest transition-all ${
                            locale === lang 
                              ? 'bg-black text-white' 
                              : 'bg-transparent text-black opacity-40 hover:opacity-100'
                          }`}
                        >
                          {lang === 'ko' ? 'KOREAN' : 'ENGLISH'}
                          {locale === lang && <Check className="inline-block w-3 h-3 ml-1" />}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* 하단 바코드 효과 및 여백 */}
                  <div className="mt-6 mb-2 border-t border-black border-dotted border-black/30 pt-4">
                     <div className="flex justify-center gap-[2px] h-8 opacity-80 mix-blend-multiply">
                      {[...Array(55)].map((_, i) => (
                        <div key={i} className="bg-black" style={{ width: (Math.random() * 3 + 1) + 'px' }} />
                      ))}
                    </div>
                  </div>
                  <div className="h-4 border-t"></div>
                </div>
              </div>

              {/* 하단 고정 버튼 영역 (Footer - 캡처 제외) */}
              <div className="shrink-0 px-6 py-4 bg-[#F8F5F0] border-t border-black/10 z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] flex flex-col gap-3">
                {/* 기존 버튼 그룹 */}
                <div className="flex gap-2 font-sans ">
                  <button onClick={handleCopyLink} className={`flex-1 py-3.5 border border-black font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 transition-colors active:scale-95 ${isCopied ? 'bg-green-50 text-green-600 border-green-600' : 'text-black hover:bg-black/5'}`}>
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Link className="w-3.5 h-3.5" />} 
                  </button>

                  <button onClick={handlePublish} className="flex-1 py-3.5 border border-black font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 transition-colors active:scale-95 hover:bg-black/5 ">
                    { <Share2 className="w-3.5 h-3.5" />} 
                  </button>

                  {/* 이미지 다운로드 버튼 */}
                  <button 
                    onClick={handleDownload} 
                    disabled={isProcessing}
                    className="flex-1 py-3.5 border border-black font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 transition-colors active:scale-95 hover:bg-black/5"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <button 
                    onClick={() => {
                      onOpenReport(); 
                      onClose();      
                    }}
                    className="flex-1 py-3.5 bg-black text-white font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors active:scale-95 "
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>

                  <button onClick={onLogout} className="px-5 py-3.5 border bg-red-400 text-black font-bold flex justify-center items-center hover:bg-red-600/90 transition-colors active:scale-95">
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </AnimatePresence>
  );
}
        ### 📄 app/components/FloatingDock.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `FloatingDock`

        ```typescript
        // components/FloatingDock.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Download, MoreHorizontal, Crown, Smartphone } from "lucide-react";

interface FloatingDockProps {
  showGyroButton: boolean;
  onRequestGyro: () => void;
  onUpload: () => void;
  onExport: () => void;
  onOpenMenu: () => void;
  onOpenAdmin: () => void;
  isExporting: boolean;
  isAdmin: boolean;
}

export default function FloatingDock({ showGyroButton, onRequestGyro, onUpload, onExport, onOpenMenu, onOpenAdmin, isExporting, isAdmin }: FloatingDockProps) {
  return (
    <>
      <AnimatePresence>
        {showGyroButton && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute bottom-28 left-1/2 z-[100] flex -translate-x-1/2">
            <button onClick={onRequestGyro} className="group flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-[10px] font-bold tracking-widest text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md transition-all active:scale-95">
              <Smartphone className="h-4 w-4 animate-pulse group-hover:animate-none group-hover:rotate-12 transition-transform" />
              ENABLE 3D VIBE
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/40 p-2 shadow-2xl backdrop-blur-2xl">
      <button onClick={onUpload} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95">
          <Plus className="h-5 w-5" />
        </button>
        <div className="mx-1 h-8 w-[1px] bg-white/15" />
        <button onClick={onExport} disabled={isExporting} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95 disabled:opacity-50">
          {isExporting ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" /> : <Download className="h-5 w-5" />}
        </button>
        <div className="mx-1 h-8 w-[1px] bg-white/15" />
        <button onClick={onOpenMenu} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95">
          <MoreHorizontal className="h-5 w-5" />
        </button>
        {isAdmin && (
          <>
            <div className="mx-1 h-8 w-[1px] bg-white/15" />
            <button onClick={onOpenAdmin} className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-600/20 text-yellow-500 border border-yellow-500/30">
              <Crown className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </>
  );
}
        ### 📄 app/components/TutorialOverlay.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react`
* 🧩 **Component (Default):** `TutorialOverlay`
* ww **Hooks:** `useEffect, useState`

        ```typescript
        // components/TutorialOverlay.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand } from "lucide-react";

export default function TutorialOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에 기록이 없으면 튜토리얼을 켭니다.
    const hasSeen = localStorage.getItem("aura_tutorial_seen");
    if (!hasSeen) {
      const timer = setTimeout(() => setShow(true), 1000); // 1초 뒤 등장
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissTutorial = () => {
    localStorage.setItem("aura_tutorial_seen", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={dismissTutorial}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer"
        >
          <motion.div 
            animate={{ x: [-50, 50, -50] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mb-8 rounded-full bg-white/20 p-6 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
          >
            <Hand className="w-16 h-16 text-white" strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Swipe to Explore</h2>
          <p className="text-white/70">좌우로 넘겨 새로운 룩을 확인하세요</p>
          <p className="mt-8 rounded-full border border-white/30 px-6 py-2 text-sm text-white/50 animate-pulse">
            화면을 터치하여 시작
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/FashionCard.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, react`

        ```typescript
        import { motion, MotionValue } from "framer-motion";
import { Heart, Bookmark, Instagram, Crown, Sparkles, Compass, ChevronUp, ArrowUpRight } from "lucide-react";
import { forwardRef } from "react"; // 🌟 React에서 forwardRef 불러오기
import { FashionItem } from "../../hooks/useAura";

interface FashionCardProps {
  item: FashionItem; 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  aura: any;
  // cardRef: React.RefObject<HTMLDivElement>; ❌ 이건 이제 지웁니다!
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  imageX: MotionValue<number>;
  isExporting: boolean;
  //currentLikes: number;
  archiveCount: number; // ✅ 아카이브 숫자로 교체
  x: MotionValue<number>;
  paginate: (newDirection: number) => void;
  onToggleSave: () => void;
}

// 🌟 스와이프 파워를 계산하는 물리 공식
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const FashionCard = forwardRef<HTMLDivElement, FashionCardProps>(({ 
  item, aura, rotateX, rotateY, imageX, isExporting, archiveCount, x, paginate, onToggleSave
}, ref) => {
  
  const isSaved = aura.savedItems.some((i: FashionItem) => String(i.id) === String(item.id));
  const isSponsored = item.isSponsored;

  return (
    <motion.div
      id="aura-main-card" // 🌟 [추가] 메인 카드 이름표
      style={{ x, rotateX, rotateY }}
      drag={isExporting ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
      ref={ref} // 🌟 [중요] 받은 ref를 motion.div에 정확히 달아줍니다!
      // 🌟 스폰서 카드일 경우 테두리에 은은한 플래티넘/골드 글로우 효과를 줍니다.
      className={`relative z-10 flex h-[79vh] md:h-[85vh] w-[95vw] max-w-[420px] flex-col overflow-hidden rounded-[2.5rem] bg-white/5 shadow-2xl aspect-[2/3] transform-gpu transition-all duration-700 ${
        isSponsored ? 'border-[2px] border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'border border-white/20'
      }`}
    >
      {/* 백그라운드 이미지 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/20">
        <motion.img style={{ x: imageX, scale: 1.15 }} src={item.imageUrl} crossOrigin="anonymous" className="pointer-events-none h-full w-full object-cover" />
        <div className={`absolute inset-0 ${isSponsored ? 'bg-gradient-to-t from-black via-black/20 to-black/40' : 'bg-gradient-to-t from-black/90 via-black/10 to-transparent'} pointer-events-none`} />
      </div>

      {/* 🌟 [NEW] 스폰서 전용 상단 뱃지 */}
      {isSponsored && (
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20 pointer-events-none">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-mono font-bold tracking-[0.4em] uppercase text-white/60">
              Presented By
            </span>
            <span className="text-xl font-serif italic font-black text-white tracking-tighter mix-blend-overlay">
              {item.sponsorBrand || "AURA EXCLUSIVE"}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center bg-white/10">
            <Crown className="w-4 h-4 text-white" />
          </div>
        </div>
      )}

      {/* 하단 정보 영역 */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col justify-end p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className={`whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md transition-all duration-500 ${
            item.uploaderName === 'AURA Editor' ? 'border-amber-500/30 bg-amber-500/20 text-amber-300' : archiveCount >= 10 ? 'border-indigo-400/40 bg-indigo-500/20 text-indigo-300' : 'border-white/10 bg-white/10 text-white/80'
          }`}>
            {item.uploaderName === 'AURA Editor' ? <Crown className="h-3 w-3" /> : archiveCount >= 10 ? <Sparkles className="h-3 w-3" /> : <Compass className="h-3 w-3" />}
            {item.uploaderName === 'AURA Editor' ? 'AURA EXCLUSIVE' : archiveCount >= 10 ? 'AURA TRENDSETTER' : 'AURA DISCOVER'}
          </span>
          
          <span className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white/60 backdrop-blur-md">
            {item.uploaderIg ? (
              <><Instagram className="w-3 h-3 text-white/80" /><span className="text-white/90">@{item.uploaderIg.replace('@', '')}</span></>
            ) : (
              <>by <span className="text-white/90">{item.uploaderName || 'AURA'}</span></>
            )}
          </span>
        </div>

        <h1 className="flex items-center gap-3 text-[3.5rem] md:text-6xl font-semibold tracking-tighter text-white leading-none">
          <span>{item.weather}</span><span>{item.temperature}</span>
        </h1> 
        <div className="flex flex-wrap gap-2"> {/* 태그가 많아질 경우를 대비해 flex-wrap과 gap을 추가했습니다 */}
          {item.tags?.map((tag: string, index: number) => (
            <span 
              key={index} // 리액트가 각 요소를 구분하기 위해 고유한 key가 필요합니다.
              className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/20 px-2.5 py-1 text-[15px] font-bold text-white/90 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pointer-events-auto flex gap-6 items-center mt-6">
          {/* 🌟 AURA IMPACT (좋아요) 버튼 */}
          <button 
            onPointerDown={(e) => e.stopPropagation()} // 1차 방어
            onTouchStart={(e) => e.stopPropagation()}  // 2차 방어
            onClick={(e) => { e.stopPropagation(); aura.toggleLike?.(String(item.id), item.likes || 0); }} 
            className="flex items-center gap-1.5 group"
          >
            <Heart className={`w-7 h-7 transition-transform group-active:scale-75 ${aura.likedItems?.includes(String(item.id)) ? 'fill-red-500 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'text-white hover:text-red-400 drop-shadow-md'}`} />
            <span className="font-mono text-sm font-bold text-white drop-shadow-md">{item.likes || 0}</span>
          </button>

          {/* 🌟 ARCHIVE (저장/북마크) 버튼 */}
          <button 
            onPointerDown={(e) => e.stopPropagation()} // 1차 방어
            onTouchStart={(e) => e.stopPropagation()}  // 2차 방어
            onClick={(e) => { e.stopPropagation(); onToggleSave(); }} 
            className="flex items-center gap-1.5 group ml-auto"
          >
            <Bookmark className={`w-7 h-7 transition-transform group-active:scale-75 ${isSaved ? 'fill-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'text-white hover:text-gray-300 drop-shadow-md'}`} />
            <span className="font-mono text-sm font-bold text-white drop-shadow-md">{archiveCount || 0}</span>
          </button>
        </div>

        {/* 🌟 딥다이브 (상세보기) OR 스폰서 콜투액션(CTA) 버튼 */}
        <div className={`pointer-events-auto mt-8 flex items-center justify-between transition-opacity duration-300 ${isExporting ? 'opacity-0' : 'opacity-100'}`}>
          {isSponsored ? (
             // 💎 스폰서 전용 아웃링크 버튼
             <button 
               onPointerDownCapture={(e) => e.stopPropagation()} 
               onClick={(e) => { e.stopPropagation(); window.open(item.sponsorUrl || 'https://auraootd.com', '_blank'); }} 
               className="w-full relative flex items-center justify-between px-6 py-4 overflow-hidden rounded-2xl bg-white text-black active:scale-95 transition-transform group"
             >
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                 </div>
                 <div className="flex flex-col items-start leading-tight">
                   <span className="text-[10px] font-mono font-bold text-black/50 tracking-[0.2em] uppercase">Exclusive Access</span>
                   <p className="text-xl font-bold tracking-tighter uppercase">Explore Collection</p>
                 </div>
               </div>
             </button>
          ) : (
            // 🔎 기존 일반 유저 딥다이브 버튼
            <button onPointerDownCapture={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); aura.triggerHaptic(20); aura.setIsDetailOpen(true); }} className="group relative flex items-center gap-3 px-6 py-3 overflow-hidden active:scale-95">
              <div className="absolute inset-0 skew-x-[-12deg] group-hover:bg-red-500 transition-colors" />
              <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-black rounded-full border border-white/20 transition-transform duration-700">
                <Sparkles className="h-4 w-4 text-red-500 fill-current" />
              </div>
              <div className="relative z-10 flex flex-col items-start leading-none">
                <span className="text-[8px] font-mono font-bold text-black/60 tracking-[0.2em] mb-0.5 uppercase">Uncover The Vibe</span>
                <p className="text-xl font-serif italic font-black text-white tracking-tighter uppercase">Deep Dive.</p>
              </div>
              <ChevronUp className="relative z-10 h-5 w-5 text-white animate-bounce ml-1" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// 🌟 [핵심 보수] 파일 맨 밑에 이 두 줄이 정확히 있어야 합니다!
FashionCard.displayName = "FashionCard"; // 리액트 개발자 도구를 위한 이름표
export default FashionCard; // 진짜로 밖으로 내보내는 문장!
        ### 📄 app/components/RankingModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `RankingModal`

        ```typescript
        import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Heart } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";

interface RankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: FashionItem[];
}

export default function RankingModal({ isOpen, onClose, items }: RankingModalProps) {
  // 💡 하트 순으로 정렬 (실제로는 서버에서 하트 카운트를 조인해서 가져오는 API가 유리하지만, 현재는 로컬 정렬)
  const rankedItems = [...items].slice(0, 10); 

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md" />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed inset-4 z-[111] m-auto max-w-lg h-fit max-h-[80vh] overflow-hidden rounded-[32px] border border-white/10 bg-[#1c1c1e] p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3"><Trophy className="text-yellow-400" /> Hall of Fame</h2>
              <button onClick={onClose} className="p-2 rounded-full bg-white/5 text-white/50"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
              {rankedItems.map((item, index) => (
                <div key={item.id} className="flex items-center gap-4 rounded-2xl bg-white/5 p-3 border border-white/5 transition-transform active:scale-[0.98]">
                  <span className={`text-xl font-black w-8 text-center ${index < 3 ? 'text-yellow-400' : 'text-white/20'}`}>{index + 1}</span>
                  <img src={item.imageUrl} className="w-16 h-20 rounded-xl object-cover" alt="Rank item" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white/90">{item.uploaderName}</p>
                    <p className="text-xs text-white/40">{item.weather} {item.temperature}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold">TOP</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/components/ShopModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react, next-intl`
* 🧩 **Component (Default):** `ShopModal`
* ww **Hooks:** `useTranslations`

        ```typescript
        // components/ShopModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Tag } from "lucide-react";
import { useTranslations } from 'next-intl'; // 🌟 추가

// 🌟 아이템 타입 정의
interface ShoppableItem {
    id: number;
    brand: string;
    item_name: string;
    price: string;
    category: string;
    image_url: string;
    product_url: string;
  }

// 🌟 items 배열을 Props로 받습니다.
interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  lookTitle?: string;
  items: ShoppableItem[];
}

export default function ShopModal({ isOpen, onClose, lookTitle, items }: ShopModalProps) {
  const t = useTranslations('Shop');
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[101] flex flex-col max-h-[85vh] bg-[#0A0A0A] rounded-t-[2rem] border-t border-white/10 shadow-2xl md:max-w-md md:mx-auto"
          >
            <div className="w-full flex justify-center pt-4 pb-2" onClick={onClose}><div className="w-12 h-1.5 bg-white/20 rounded-full" /></div>

            <div className="flex items-center justify-between px-6 pb-6 pt-2 border-b border-white/5">
              <div className="flex flex-col">
                <span className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase"><Tag className="w-3 h-3" /> {t('title')}</span>
                <span className="text-xl font-serif italic font-bold text-white tracking-tight mt-1">{lookTitle}</span>
              </div>
              <button onClick={onClose} className="p-2 text-white/40 hover:text-white bg-white/5 rounded-full"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 hide-scrollbar">
              {/* 🌟 DB에 등록된 아이템이 없을 경우의 처리 */}
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-white/40">
                  <span className="text-xs font-mono uppercase tracking-widest">{t('empty')}</span>
                </div>
              ) : (
                /* 🌟 진짜 DB 데이터를 순회합니다! */
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 group hover:border-white/20 transition-all">
                    <div className="w-20 h-24 shrink-0 rounded-xl overflow-hidden bg-white/10 relative">
                      <img src={item.image_url} alt={item.item_name} className="w-full h-full object-cover" />
                      <div className="absolute top-1 left-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-mono text-white">{item.category}</div>
                    </div>

                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <h3 className="text-xs font-black tracking-widest uppercase text-white/90">{item.brand}</h3>
                        <p className="text-[11px] font-medium text-white/50 leading-tight mt-1 line-clamp-2">{item.item_name}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-mono font-black text-indigo-400">{item.price}</span>
                        {/* 🌟 실제 구매 링크(product_url) 연결 */}
                        <a href={item.product_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-lg text-[9px] font-black uppercase active:scale-95 transition-transform hover:bg-indigo-50 hover:text-indigo-600">
                        {t('get_btn')} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="px-6 py-5 border-t border-white/5 flex items-center justify-center gap-2 bg-black/50">
              <ShieldCheck className="w-4 h-4 text-white/30" />
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{t('verified')}</span>
            </div>
          </motion.div>
        </>
      )}
      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`}} />
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
        * 🔗 **Imports:** `framer-motion, lucide-react, react, next/navigation`
* 🧩 **Component (Default):** `AdminModal`
* ww **Hooks:** `useEffect, useRouter, useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        // components/AdminModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Crown, Activity, Image as ImageIcon, Heart, 
  Send, ArrowUpRight, LayoutDashboard, Users, PenTool, BookOpen,
  UserCheck, Radio, Search, Megaphone, UploadCloud, Sparkles
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

type TabType = 'overview' | 'audit' | 'members' | 'broadcast' | 'sponsors' | 'magazine' | 'blog';

export default function AdminModal({ isOpen, onClose, triggerHaptic }: AdminModalProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [stats, setStats] = useState({ items: 0, saves: 0, users: 0, waitlist: 0 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [waitlist, setWaitlist] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [members, setMembers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [pushMessage, setPushMessage] = useState("");
  const [isSending, setIsSending] = useState(false);


  // ==========================================
  // 🌟 [NEW] Sponsor Ads 업로드 & AI 오토필 상태 관리
  // ==========================================
  const [sponsorFile, setSponsorFile] = useState<File | null>(null);
  const [sponsorPreview, setSponsorPreview] = useState<string | null>(null);
  const [isAnalyzingVibe, setIsAnalyzingVibe] = useState(false);
  
  const [sponsorData, setSponsorData] = useState({
    brand: "", 
    message: "", 
    url: "", 
    tags: "", 
    weather: "", 
    temp: "", 
    colors: [] as string[],
    igHandle: "", 
  });
  const [isUploadingAd, setIsUploadingAd] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🌟 1. 파일 선택 시 -> AI 분석만 실행 (mode: 'analyzeOnly')
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSponsorFile(file);
      setSponsorPreview(URL.createObjectURL(file));

      setIsAnalyzingVibe(true);
      try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('mode', 'analyzeOnly'); // 💡 핵심: DB 저장 금지 명령!
        
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        
        if (data.success) {
          // AI 분석 결과로 폼 오토필
          setSponsorData(prev => ({
            ...prev,
            weather: data.ai.weather,
            temp: data.ai.temperature,
            tags: data.ai.tags.join(', '),
            colors: data.ai.colors || ["#111", "#FFF", "#FF3B30"]
          }));
          triggerHaptic([30, 50]); 
        }
      } catch (error) {
        console.error("AI 분석 실패:", error);
      } finally {
        setIsAnalyzingVibe(false);
      }
    }
  };

  // 🚀 스폰서 광고 로켓 발사 (Auto User ID 탑재)
  const handleLaunchSponsorAd = async () => {
    if (!sponsorFile || !sponsorData.brand || !sponsorData.url) {
      return alert("이미지, 브랜드명, 아웃링크는 필수입니다.");
    }
    
    setIsUploadingAd(true);
    try {
      // 🌟 [NEW] 현재 이 버튼을 누른 관리자(로그인된 유저)의 ID를 가져옵니다.
      const { data: { user } } = await supabase.auth.getUser();

      const formData = new FormData();
      formData.append('image', sponsorFile);
      formData.append('isSponsored', 'true');
      formData.append('sponsorBrand', sponsorData.brand);
      formData.append('sponsorMessage', sponsorData.message);
      formData.append('sponsorUrl', sponsorData.url);
      
      if (sponsorData.igHandle) formData.append('uploaderIg', sponsorData.igHandle);
      
      // 🌟 [NEW] 직접 타이핑하지 않고, 시스템에서 뽑아낸 관리자 ID를 은밀하게 첨부합니다.
      if (user) formData.append('userId', user.id); 
      
      formData.append('weather', sponsorData.weather);
      formData.append('temperature', sponsorData.temp);
      formData.append('tags', sponsorData.tags);
      formData.append('colors', JSON.stringify(sponsorData.colors)); 

      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();

      if (!data.success) throw new Error(data.error);

      alert("💎 스폰서 에디토리얼이 성공적으로 라이브 되었습니다!");
      setSponsorFile(null); setSponsorPreview(null);
      setSponsorData({ brand: "", message: "", url: "", tags: "", weather: "", temp: "", colors: [], igHandle: "" });
      
    } catch (error) {
      console.error(error);
      alert("업로드 중 오류가 발생했습니다.");
    } finally {
      setIsUploadingAd(false);
    }
  };

  // 🌟 통합 데이터 로더
  useEffect(() => {
    if (!isOpen) return;

    const fetchAllData = async () => {
      // 1. 통계 집계
      const { count: itemsCount } = await supabase.from('aura_fashion_items').select('*', { count: 'exact', head: true });
      const { count: savesCount } = await supabase.from('aura_saved_looks').select('*', { count: 'exact', head: true });
      const { count: usersCount } = await supabase.from('aura_user_profiles').select('*', { count: 'exact', head: true }).eq('is_approved', true);
      const { count: waitlistCount } = await supabase.from('aura_waitlist').select('*', { count: 'exact', head: true }).eq('status', 'pending');
      
      setStats({ 
        items: itemsCount || 0, saves: savesCount || 0, 
        users: usersCount || 0, waitlist: waitlistCount || 0 
      });

      // 2. 대기자 명단 (Audit)
      const { data: waitData } = await supabase.from('aura_waitlist').select('*').eq('status', 'pending').order('created_at', { ascending: true });
      if (waitData) setWaitlist(waitData);

      // 3. 승인된 멤버 목록 (CRM)
      const { data: memberData } = await supabase.from('aura_user_profiles').select('*').eq('is_approved', true).order('updated_at', { ascending: false }).limit(100); // 1만명 대비 limit 처리
      if (memberData) setMembers(memberData);
    };

    fetchAllData();
  }, [isOpen]);

  // 🌟 [NEW] 유저 강제 탈퇴 (Ban)
  const handleBanUser = async (userId: string, email: string) => {
    const confirmBan = window.confirm(`${email || '이 유저'}님의 앱 접근을 영구 차단하시겠습니까?`);
    if (!confirmBan) return;
    
    triggerHaptic(50);
    // is_approved를 false로 돌려 문지기(Gatekeeper)가 밖으로 쫓아내게 만듭니다.
    const { error } = await supabase.from('aura_user_profiles').update({ is_approved: false }).eq('id', userId);
    
    if (!error) {
      alert("🚫 Ban 처리되었습니다. 해당 유저는 더 이상 앱에 접근할 수 없습니다.");
      setMembers(members.filter(m => m.id !== userId)); // 목록에서 즉시 제거
      setStats(prev => ({ ...prev, users: prev.users - 1 }));
    }
  };

  // 🌟 관리자 권한 상승 (Make Admin)
  const handleMakeAdmin = async (userId: string, email: string) => {
    const confirmAdmin = window.confirm(`${email || '이 유저'}님에게 최고 관리자 권한을 부여하시겠습니까?`);
    if (!confirmAdmin) return;
    
    triggerHaptic(50);
    const { error } = await supabase.from('aura_user_profiles').update({ is_admin: true }).eq('id', userId);
    
    if (!error) {
      alert("👑 관리자 권한이 부여되었습니다.");
      // 목록 UI 즉시 업데이트
      setMembers(members.map(m => m.id === userId ? { ...m, is_admin: true } : m));
    }
  };

  // 🌟 승인 로직 (기존과 동일)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleApprove = async (user: any) => {
    const confirmApprove = window.confirm(`@${user.instagram_id}님을 승인하시겠습니까? (합격 이메일 자동 발송)`);
    if (!confirmApprove) return;
    
    triggerHaptic(50);
    const res = await fetch('/api/admin/approve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ waitlistId: user.id, email: user.email, instagram: user.instagram_id })
    });
    
    if (res.ok) {
      alert("✅ 승인 및 초대 코드 발송 완료!");
      setWaitlist(waitlist.filter(w => w.id !== user.id)); // UI 업데이트
      setStats(prev => ({ ...prev, waitlist: prev.waitlist - 1, users: prev.users + 1 }));
    } else {
      alert("❌ 처리 중 오류가 발생했습니다.");
    }
  };

  // 🌟 푸시 발송 로직
  const handleBroadcastPush = async () => {
    if (!pushMessage.trim()) return;
    const confirmSend = window.confirm(`전체 유저에게 푸시를 발송하시겠습니까?`);
    if (!confirmSend) return;

    setIsSending(true);
    try {
      // 🌟 [변경] 개별 호출 대신 단일 'broadcast' API를 호출합니다.
      const response = await fetch('/api/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: "AURA EDITOR", 
          body: pushMessage,
          url: '/' 
        })
      });

      if (!response.ok) throw new Error("Broadcast failed");

      const result = await response.json();
      alert(`[SYSTEM] 총 ${result.count || 0}명에게 푸시 발송 및 로그 기록 완료!`);
      setPushMessage("");
    } catch (err) { 
      console.error(err);
      alert("전송 중 오류 발생"); 
    } finally { 
      setIsSending(false); 
    }
  };

  // 🌟 검색 필터링 (안전망 추가)
  const filteredWaitlist = waitlist.filter(u => {
    if (!searchQuery) return true; // 검색어가 없으면 모두 통과
    const q = searchQuery.toLowerCase();
    return (u.instagram_id || '').toLowerCase().includes(q) || 
          (u.email || '').toLowerCase().includes(q);
  });

  const filteredMembers = members.filter(m => {
    if (!searchQuery) return true; // 검색어가 없으면 모두 통과
    const q = searchQuery.toLowerCase();
    return (m.email || '').toLowerCase().includes(q) || 
          (m.used_invite_code || '').toLowerCase().includes(q);
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          {/* 🌟 10,000 유저 스케일을 감당할 Command Center UI */}
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} transition={{ type: "spring", damping: 25 }} 
            className="w-full h-full max-w-[1400px] bg-[#0A0A0A] border border-white/10 rounded-[2rem] shadow-2xl flex overflow-hidden"
          >
            
            {/* LNB (좌측 사이드바) */}
            <div className="w-20 md:w-64 bg-[#111] border-r border-white/5 flex flex-col justify-between shrink-0">
              <div>
                <div className="h-20 flex items-center justify-center md:justify-start md:px-8 border-b border-white/5">
                  <Crown className="w-6 h-6 text-[#ff3b30] md:mr-3" />
                  <span className="hidden md:block font-serif italic font-black text-xl tracking-tighter">Aura<span className="text-[#ff3b30]">.</span></span>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <NavButton icon={<LayoutDashboard/>} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
                  <NavButton icon={<UserCheck/>} label={`Audit Board (${stats.waitlist})`} active={activeTab === 'audit'} onClick={() => setActiveTab('audit')} badge={stats.waitlist} />
                  <NavButton icon={<Users/>} label="Members CRM" active={activeTab === 'members'} onClick={() => setActiveTab('members')} />
                  <NavButton icon={<Radio/>} label="Broadcast" active={activeTab === 'broadcast'} onClick={() => setActiveTab('broadcast')} />
                  <NavButton icon={<Megaphone/>} label="Sponsor Ads" active={activeTab === 'sponsors'} onClick={() => setActiveTab('sponsors')} />
                  <NavButton icon={<BookOpen/>} label="Magazine Desk" active={activeTab === 'magazine'} onClick={() => setActiveTab('magazine')} />
                  <NavButton icon={<BookOpen/>} label="Blog Desk" active={activeTab === 'blog'} onClick={() => setActiveTab('blog')} />
                </div>
              </div>
              <div className="p-4 border-t border-white/5">
                <button onClick={onClose} className="w-full flex items-center justify-center md:justify-start gap-3 p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  <X className="w-5 h-5" />
                  <span className="hidden md:block text-sm font-bold">Close Center</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col bg-[#050505] overflow-hidden">
              {/* Header */}
              <div className="h-20 border-b border-white/5 flex items-center justify-between px-8 shrink-0">
                <h2 className="text-xl font-bold uppercase tracking-widest text-white/80">
                  {activeTab === 'overview' && 'System Overview'}
                  {activeTab === 'audit' && 'Vibe Audit Board'}
                  {activeTab === 'members' && 'Member CRM'}
                  {activeTab === 'broadcast' && 'Comms & Broadcast'}
                </h2>
                {(activeTab === 'audit' || activeTab === 'members') && (
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input 
                      type="text" placeholder="Search ID or Email..." 
                      value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#111] border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs text-white focus:border-[#ff3b30] outline-none transition-all"
                    />
                  </div>
                )}
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                
                {/* 탭 1: OVERVIEW */}
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-in fade-in">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <StatCard title="Total Approved" value={stats.users} icon={<Crown className="text-yellow-400"/>} trend="+12 this week" />
                      <StatCard title="Pending Audit" value={stats.waitlist} icon={<UserCheck className="text-[#ff3b30]"/>} trend="Action Required" isAlert />
                      <StatCard title="Total Looks" value={stats.items} icon={<ImageIcon className="text-blue-400"/>} trend="DB Growing" />
                      <StatCard title="Aura Impacts" value={stats.saves} icon={<Heart className="text-rose-400"/>} trend="High Engagement" />
                    </div>
                    {/* Placeholder for future charts */}
                    <div className="w-full h-64 bg-[#111] border border-white/5 rounded-2xl flex items-center justify-center flex-col gap-2">
                       <Activity className="w-8 h-8 text-white/20" />
                       <span className="text-white/20 font-mono text-xs tracking-widest uppercase">Data Visualization Ready</span>
                    </div>
                  </div>
                )}

                {/* 탭 2: AUDIT BOARD (심사 대기열) */}
                {activeTab === 'audit' && (
                  <div className="animate-in fade-in bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-white/40 font-mono text-[10px] uppercase tracking-wider">
                        <tr>
                          <th className="p-4 font-normal">Instagram Handle</th>
                          <th className="p-4 font-normal">Contact Email</th>
                          <th className="p-4 font-normal">Applied Date</th>
                          <th className="p-4 font-normal text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredWaitlist.length === 0 ? (
                          <tr><td colSpan={4} className="p-8 text-center text-white/30">No pending audits.</td></tr>
                        ) : (
                          filteredWaitlist.map((user) => (
                            <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                              <td className="p-4">
                                <a href={`https://instagram.com/${user.instagram_id.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#ff3b30] flex items-center gap-2">
                                  @{user.instagram_id.replace('@', '')} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                              </td>
                              <td className="p-4 text-white/60 font-mono text-xs">{user.email}</td>
                              <td className="p-4 text-white/40 text-xs">{new Date(user.created_at).toLocaleDateString()}</td>
                              <td className="p-4 text-right">
                                <button onClick={() => handleApprove(user)} className="bg-[#ff3b30]/10 text-[#ff3b30] hover:bg-[#ff3b30] hover:text-white px-4 py-1.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all border border-[#ff3b30]/20">
                                  Approve
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 탭 3: MEMBERS CRM (합격자 관리) */}
                {activeTab === 'members' && (
                  <div className="animate-in fade-in bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-white/40 font-mono text-[10px] uppercase tracking-wider">
                        <tr>
                          <th className="p-4 font-normal">Identity</th>
                          <th className="p-4 font-normal">Invite Code</th>
                          {/* 🌟 [NEW] 가입일 컬럼 헤더 추가 */}
                          <th className="p-4 font-normal">Joined Date</th>
                          <th className="p-4 font-normal">Status</th>
                          <th className="p-4 font-normal text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredMembers.length === 0 ? (
                          <tr><td colSpan={5} className="p-8 text-center text-white/30">No members found.</td></tr>
                        ) : (
                          filteredMembers.map((member) => (
                            <tr key={member.id} className="hover:bg-white/[0.02] transition-colors group">
                              <td className="p-4 font-bold text-white flex items-center gap-2">
                                {member.is_admin && <Crown className="w-4 h-4 text-yellow-400" />}
                                {member.email || 'AURA Cult Member'}
                              </td>
                              <td className="p-4 text-[#ff3b30] font-mono text-xs font-bold">{member.used_invite_code || 'MASTER-KEY'}</td>
                              
                              {/* 🌟 [NEW] 가입일 데이터 렌더링 (가입일이 없으면 최근 수정일로 대체) */}
                              <td className="p-4 text-white/60 font-mono text-xs">
                                {member.created_at 
                                  ? new Date(member.created_at).toLocaleDateString() 
                                  : (member.updated_at ? new Date(member.updated_at).toLocaleDateString() : 'Unknown')}
                              </td>

                              <td className="p-4">
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                                  Verified
                                </span>
                              </td>
                              <td className="p-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                  {!member.is_admin && (
                                    <button 
                                      onClick={() => handleMakeAdmin(member.id, member.email)}
                                      className="bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white px-3 py-1.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all"
                                    >
                                      Admin
                                    </button>
                                  )}
                                  <button 
                                    onClick={() => handleBanUser(member.id, member.email)}
                                    className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all"
                                  >
                                    Ban
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 탭 4: BROADCAST (푸시 & 시스템 메시지) */}
                {activeTab === 'broadcast' && (
                  <div className="max-w-2xl animate-in fade-in space-y-6">
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-[#ff3b30]/10 rounded-xl"><Send className="w-6 h-6 text-[#ff3b30]" /></div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Global Push Notification</h3>
                          <p className="text-xs text-white/40">구독 중인 모든 유저의 디바이스로 즉시 알림을 전송합니다.</p>
                        </div>
                      </div>
                      <textarea 
                        value={pushMessage} onChange={(e) => setPushMessage(e.target.value)}
                        placeholder="전파할 메시지를 입력하세요. (예: 오늘 성수동 팝업스토어 티켓이 오픈되었습니다.)"
                        className="w-full h-32 bg-black border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/30 focus:border-[#ff3b30] outline-none resize-none mb-4 transition-colors"
                      />
                      <button 
                        onClick={handleBroadcastPush} disabled={isSending || !pushMessage.trim()}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest hover:bg-[#ff3b30] hover:text-white transition-all disabled:opacity-50 disabled:grayscale"
                      >
                        {isSending ? "Transmitting..." : "Initiate Broadcast"}
                      </button>
                    </div>
                  </div>
                )}

                {/* 탭 5: SPONSOR ADS (네이티브 광고 집행) */}
                {activeTab === 'sponsors' && (
                  <div className="animate-in fade-in grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* 좌측: 비주얼 업로드 및 미리보기 */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                        <ImageIcon className="w-4 h-4"/> Editorial Visual
                      </h3>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="relative w-full aspect-[2/3] bg-[#111] border-2 border-dashed border-white/20 rounded-[2rem] flex items-center justify-center cursor-pointer hover:border-[#ff3b30] transition-colors overflow-hidden group"
                      >
                        <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
                        {sponsorPreview ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={sponsorPreview} alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="bg-black/80 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">Change Image</span>
                            </div>
                          </>
                        ) : (
                          <div className="text-center flex flex-col items-center text-white/30 group-hover:text-[#ff3b30] transition-colors">
                            <UploadCloud className="w-12 h-12 mb-4" />
                            <span className="font-mono text-sm tracking-widest uppercase">Click to Upload</span>
                            <span className="text-[10px] mt-2">High-Res JPG/PNG</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 우측: 메타데이터 입력 폼 */}
                    <div className="flex flex-col gap-6">
                      <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center gap-2 mb-2">
                        <Megaphone className="w-4 h-4"/> Campaign Meta
                      </h3>
                      {/* 🌟 AI 분석 중일 때 빛나는 이펙트 */}
                      <AnimatePresence>
                          {isAnalyzingVibe && (
                            <motion.span 
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              className="text-[10px] font-bold text-[#ff3b30] flex items-center gap-1.5 animate-pulse"
                            >
                              <Sparkles className="w-3 h-3" /> AURA VISION ANALYZING...
                            </motion.span>
                          )}
                        </AnimatePresence>
                      
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Sponsor Brand (필수)</label>
                          <input type="text" placeholder="e.g. GENTLE MONSTER" value={sponsorData.brand} onChange={e => setSponsorData({...sponsorData, brand: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white font-bold focus:border-[#ff3b30] outline-none" />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Campaign Message</label>
                          <input type="text" placeholder="e.g. 2026 BOLD COLLECTION" value={sponsorData.message} onChange={e => setSponsorData({...sponsorData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-[#ff3b30] outline-none" />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Target URL (필수)</label>
                          <input type="url" placeholder="https://..." value={sponsorData.url} onChange={e => setSponsorData({...sponsorData, url: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-[#ff3b30] font-mono text-sm focus:border-[#ff3b30] outline-none" />
                        </div>
                        {/* 🌟 [NEW] 브랜드 인스타 계정 & User ID 입력창 추가 */}
                        <div className="grid grid-cols-1 gap-4">
                          {/* 🌟 수정된 브랜드 인스타 계정 입력창 (단독 배치) */}
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Brand Instagram</label>
                          <input 
                            type="text" 
                            placeholder="e.g. @gentlemonster" 
                            value={sponsorData.igHandle} 
                            onChange={e => setSponsorData({...sponsorData, igHandle: e.target.value})} 
                            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white font-bold focus:border-[#ff3b30] outline-none" 
                          />
                        </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Target Weather</label>
                            <input type="text" value={sponsorData.weather} onChange={e => setSponsorData({...sponsorData, weather: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white text-center text-xl focus:border-[#ff3b30] outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Target Temp</label>
                            <input type="text" value={sponsorData.temp} onChange={e => setSponsorData({...sponsorData, temp: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white text-center font-bold focus:border-[#ff3b30] outline-none" />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Style Tags (쉼표로 구분)</label>
                          <input type="text" value={sponsorData.tags} onChange={e => setSponsorData({...sponsorData, tags: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white/70 font-mono text-xs focus:border-[#ff3b30] outline-none" />
                        </div>
                      </div>

                      <button 
                        onClick={handleLaunchSponsorAd}
                        disabled={isUploadingAd || !sponsorFile || !sponsorData.brand || !sponsorData.url}
                        className="mt-auto w-full py-5 rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ff5b50] text-white font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,59,48,0.3)] disabled:opacity-50 disabled:grayscale"
                      >
                        {isUploadingAd ? "Transmitting..." : "Launch Editorial"}
                      </button>
                    </div>

                  </div>
                )}

                {/* 탭 6: MAGAZINE (매거진 에디터 데스크 게이트웨이) */}
                {activeTab === 'magazine' && (
                  <div className="animate-in fade-in flex flex-col items-center justify-center py-16 gap-6">
                    <div className="relative w-24 h-24 bg-red-600/10 rounded-full flex items-center justify-center mb-2 border border-red-500/30">
                      <div className="absolute inset-0 rounded-full border border-red-500/10 animate-ping" />
                      <BookOpen className="w-10 h-10 text-red-500" />
                    </div>
                    
                    <div className="text-center">
                      <h2 className="text-3xl font-serif italic font-black uppercase tracking-tighter text-white mb-3">
                        Aura Editorial
                      </h2>
                      <p className="font-mono text-xs uppercase tracking-widest text-white/50 max-w-sm leading-relaxed mb-10">
                        AI 기반 데이터 매거진 발행 및<br/>
                        CULT 멤버 전용 프리미엄 아카이브 관리.
                      </p>
                    </div>

                    <button 
                      onClick={() => {
                        // triggerHaptic이 선언되어 있다면 사용
                        if (typeof triggerHaptic === 'function') triggerHaptic(20);
                        onClose(); // 모달 닫기
                        router.push('/admin/magazine'); // 🌟 매거진 어드민으로 강제 이동!
                      }}
                      className="group relative overflow-hidden flex items-center justify-center gap-3 w-full max-w-sm py-5 rounded-2xl bg-gradient-to-r from-red-600 to-[#ff3b30] text-white font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,59,48,0.3)]"
                    >
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                      <PenTool className="w-5 h-5 transition-transform group-hover:rotate-12" />
                      Enter Editor Desk
                    </button>
                  </div>
                )}

                {/* 탭 7: BLOG (본사에서 활동하는 묵직한 AURA 철학이야기) */}
                {activeTab === 'blog' && (
                  <div className="flex flex-col items-center justify-center py-16 gap-6 animate-in fade-in">
                    <PenTool className="w-10 h-10 text-white mb-2" />
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black uppercase text-white">Think Tank</h2>
                      <p className="text-xs text-white/50 uppercase tracking-widest">AI Blog & Newsletter Generator</p>
                    </div>
                    <button 
                      onClick={() => { onClose(); router.push('/admin/blog'); }}
                      className="w-full max-w-xs py-4 bg-white text-black font-bold uppercase rounded-xl hover:scale-105 transition-transform"
                    >
                      Open Generator
                    </button>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- 보조 컴포넌트들 ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavButton({ icon, label, active, onClick, badge }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl transition-all ${
        active ? 'bg-[#ff3b30] text-white shadow-[0_0_20px_rgba(255,59,48,0.3)]' : 'text-white/50 hover:bg-white/5 hover:text-white'
      }`}
    >
      <div className="w-5 h-5 flex items-center justify-center shrink-0">{icon}</div>
      <span className="hidden md:block text-sm font-bold truncate">{label}</span>
      {badge > 0 && (
        <span className={`hidden md:flex ml-auto w-5 h-5 items-center justify-center rounded-full text-[10px] font-black ${active ? 'bg-white text-[#ff3b30]' : 'bg-[#ff3b30] text-white'}`}>
          {badge}
        </span>
      )}
    </button>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StatCard({ title, value, icon, trend, isAlert }: any) {
  return (
    <div className={`p-6 rounded-2xl border ${isAlert ? 'bg-[#ff3b30]/10 border-[#ff3b30]/30' : 'bg-[#111] border-white/5'}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest">{title}</span>
        {icon}
      </div>
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className={`text-[10px] font-bold tracking-widest uppercase ${isAlert ? 'text-[#ff3b30] animate-pulse' : 'text-white/30'}`}>{trend}</div>
    </div>
  );
}
        ### 📄 app/components/ExploreGrid.tsx
        > **Context Summary**
        * 🔗 **Imports:** `framer-motion, lucide-react`
* 🧩 **Component (Default):** `ExploreGrid`

        ```typescript
        import { motion } from "framer-motion";
import { Heart, Crown, Sparkles, Trophy } from "lucide-react";
import { FashionItem } from "../../hooks/useAura"; // 🌟 FashionItem 규격서를 불러옵니다.

interface ExploreGridProps {
  items: FashionItem[];
  onSelect: (index: number) => void;
}

export default function ExploreGrid({ items, onSelect }: ExploreGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 pb-40 px-4">
      {items.map((item, idx) => {
        // 🌟 상위 3인을 위한 특별 테마 설정
        const isTop3 = idx < 3;
        const rankThemes = [
          { 
            color: "text-yellow-400", 
            bg: "bg-yellow-400", 
            border: "border-yellow-400/50", 
            shadow: "shadow-[0_0_30px_rgba(250,204,21,0.4)]",
            label: "THE VIBE KING" 
          },
          { 
            color: "text-slate-300", 
            bg: "bg-slate-300", 
            border: "border-slate-300/40", 
            shadow: "shadow-[0_0_20px_rgba(203,213,225,0.3)]",
            label: "ELITE" 
          },
          { 
            color: "text-amber-600", 
            bg: "bg-amber-600", 
            border: "border-amber-600/40", 
            shadow: "shadow-[0_0_15px_rgba(180,83,9,0.2)]",
            label: "TRENDSETTER" 
          }
        ];

        const theme = rankThemes[idx] || null;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ delay: idx * 0.02, type: "spring", stiffness: 300 }}
            onClick={() => onSelect(idx)}
            className={`relative aspect-[2/3] overflow-hidden rounded-[2.2rem] border transition-all duration-500 group cursor-pointer ${
              isTop3 ? `${theme?.border} ${theme?.shadow}` : "border-white/10 bg-white/5"
            }`}
          >
            {/* 🏆 상위 3인 전용 뱃지 라벨 */}
            {isTop3 && (
              <div className={`absolute top-0 right-0 z-30 ${theme?.bg} px-3 py-1 rounded-bl-2xl shadow-lg`}>
                <span className="text-[9px] font-black text-black tracking-tighter leading-none">
                  {theme?.label}
                </span>
              </div>
            )}

            {/* 👑 랭킹 랭크 숫자 배지 */}
            <div className={`absolute top-3 left-3 z-20 flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-black shadow-xl backdrop-blur-md border ${
              idx === 0 ? "bg-yellow-400 text-black border-yellow-200" :
              idx === 1 ? "bg-slate-300 text-black border-white" :
              idx === 2 ? "bg-amber-600 text-white border-amber-400" :
              "bg-black/50 text-white border-white/10"
            }`}>
              {idx === 0 ? <Crown className="h-4 w-4" /> : idx === 1 ? <Trophy className="h-4 w-4" /> : idx + 1}
            </div>

            {/* 메인 이미지 (1위에겐 은은한 스케일 애니메이션 추가) */}
            <motion.img 
              src={item.imageUrl} 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              animate={idx === 0 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* 하단 정보 영역 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex flex-col gap-0.5 max-w-[65%]">
                <span className={`text-[10px] font-black tracking-tight ${isTop3 ? theme?.color : "text-white/80"}`}>
                  {idx === 0 ? "GLOBAL NO.1" : idx === 1 ? "RUNNER UP" : idx === 2 ? "TOP TIER" : "AURA LOOK"}
                </span>
                <span className="text-[11px] font-bold text-white truncate">
                  @{item.uploaderIg || item.uploaderName || 'AURA'}
                </span>
              </div>
              
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    {/* 🌟 item.likes 양옆에 괄호를 치고 || 0 을 추가했습니다! */}
                    <Heart className={`h-3 w-3 ${(item.likes || 0) > 0 ? 'fill-red-500 text-red-500' : 'text-white/60'}`} />
                    <span className="text-[11px] font-black text-white font-mono">{item.likes || 0}</span>
                </div>
              </div>
            </div>

            {/* 1위 전용 반짝임 효과 (Sparkles) */}
            {idx === 0 && (
              <div className="absolute inset-0 pointer-events-none">
                <Sparkles className="absolute top-1/4 left-1/4 h-4 w-4 text-yellow-200/40 animate-pulse" />
                <Sparkles className="absolute bottom-1/3 right-1/4 h-3 w-3 text-yellow-200/60 animate-bounce" />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
        ### 📄 app/components/UploadModal.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, react-dropzone, lucide-react, next-intl`
* 🧩 **Component (Default):** `UploadModal`
* ww **Hooks:** `useDropzone, useCallback, useState, useTranslations`

        ```typescript
        // components/UploadModal.tsx
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { X, Upload, Loader2, Sparkles } from "lucide-react";
import StampEditor from "./StampEditor"; 
import { useTranslations } from 'next-intl'; // 🌟 추가

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
  isAnalyzing: boolean;
  triggerHaptic: (pattern: number | number[]) => void;
}

export default function UploadModal({ 
  isOpen, 
  onClose, 
  onUpload, 
  isAnalyzing, 
  triggerHaptic,
}: UploadModalProps) {
  const t = useTranslations('Upload');
  const [file, setFile] = useState<File | null>(null);
  const [isStamping, setIsStamping] = useState(false);
  const [fileForStamping, setFileForStamping] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.[0]) {
      triggerHaptic(20); // 🌟 파일 드롭 시 가벼운 진동 피드백
      setFileForStamping(acceptedFiles[0]);
      setIsStamping(true);
    }
  }, [triggerHaptic]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
    multiple: false,
  });

  const handleStampingFinished = (editedImageBlob: Blob) => {
    const editedFile = new File([editedImageBlob], "aura_stamped_image.png", { type: "image/png" });
    setFile(editedFile);
    setIsStamping(false);
    setFileForStamping(null);
    // 🌟 안전 장치: onUpload가 전달되었을 때만 실행하여 크래시 방지
    if (onUpload) {
      onUpload(editedFile); 
    } else {
      console.error("onUpload 함수가 app/page.tsx에서 전달되지 않았습니다!");
    }
  };

  const handleClose = () => {
    triggerHaptic(10); // 🌟 모달 닫을 때 햅틱 피드백
    setFile(null);
    setIsStamping(false);
    setFileForStamping(null);
    onClose();
  };

  // 1. 분석 중일 때의 로딩 화면
  if (isAnalyzing) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            <div className="flex flex-col items-center text-[#EBE6DD]">
               <div className="relative mb-6">
                  <div className="absolute inset-0 bg-red-600 blur-xl opacity-50 animate-pulse"></div>
                  <Loader2 className="w-16 h-16 animate-spin relative z-10" />
               </div>
               <h3 className="text-2xl font-black font-serif italic tracking-tighter animate-pulse">{t('analyzing_title')}</h3>
               <p className="font-mono text-xs mt-2 opacity-60 tracking-widest">{t('analyzing_desc')}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  
  // 2. 스탬프 에디터 화면 표시
  if (isStamping && fileForStamping) {
    return (
       <AnimatePresence>
         {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200]">
              <StampEditor 
                imageFile={fileForStamping}
                onFinish={handleStampingFinished}
                onCancel={() => setIsStamping(false)}
              />
            </motion.div>
         )}
       </AnimatePresence>
    );
  }

  // 3. 초기 업로드 드롭존 화면
  return (
    <AnimatePresence>
      {isOpen && !file && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#EBE6DD] w-full max-w-md rounded-xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] border-[4px] border-black relative"
          >
             <div className="p-6 pt-12">
              <div 
                {...getRootProps()} 
                className={`border-[3px] border-dashed rounded-lg h-64 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer group relative overflow-hidden ${isDragActive ? 'border-red-600 bg-red-600/5' : 'border-black/30 hover:border-black hover:bg-black/5'}`}
              >
                <input {...getInputProps()} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-30 pointer-events-none" />
                
                <motion.div animate={{ y: isDragActive ? [0, -10, 0] : 0 }} transition={{ repeat: Infinity, duration: 1.5 }}>
                   {isDragActive ? <Sparkles className="w-16 h-16 text-red-600" /> : <Upload className="w-12 h-12 text-black/40 group-hover:text-black transition-colors" />}
                </motion.div>
                
                <div className="text-center relative z-10">
                  <p className={`text-xl font-black font-serif italic tracking-tighter ${isDragActive ? 'text-red-600' : 'text-black'}`}>
                    {isDragActive ? t('drop_active') : t('upload_prompt')}
                  </p>
                  <p className="font-mono text-xs font-bold text-black/50 mt-2 tracking-widest uppercase">
                    {t('upload_support_1')} <br/>{t('upload_support_2')}
                  </p>
                </div>
              </div>
            </div>
            {/* 닫기 버튼 */}
            <button onClick={handleClose} className="absolute top-2 right-2 p-2 hover:bg-black/10 rounded-full transition-colors z-10">
              <X className="w-6 h-6 text-black" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
        ### 📄 app/magazine/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion, lucide-react, next/link, next-intl`
* 🧩 **Component (Default):** `MagazineIndex`
* ww **Hooks:** `useEffect, useLocale, useState, useTranslations`

        ```typescript
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
        ### 📄 app/magazine/[slug]/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, framer-motion, lucide-react, next-intl`
* 🧩 **Component (Default):** `MagazineDetailPage`
* ww **Hooks:** `useState, useLocale, useRouter, useEffect, useParams, useTranslations`

        ```typescript
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
        ### 📄 app/api/waitlist/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @/lib/supabase`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/waitlist/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { instagram, email } = await req.json();

    if (!instagram || !email) {
      return NextResponse.json({ error: '정보가 누락되었습니다.' }, { status: 400 });
    }

    // DB에 신청 정보 저장
    const { error } = await supabase
      .from('aura_waitlist')
      .insert([{ instagram_id: instagram, email }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist Error:', error);
    return NextResponse.json({ error: '신청 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
        ### 📄 app/api/admin/blog/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `react, next/navigation, lucide-react, @/lib/supabase`
* 🧩 **Component (Default):** `BlogAdmin`
* ww **Hooks:** `useEffect, useRouter, useState`
* ⚡ **API Route / Server Action Detected**

        ```typescript
        "use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PenTool, Loader2, Copy, Check, FileText, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function BlogAdmin() {
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState<"medium" | "substack">("medium");
  const [language, setLanguage] = useState<"ko" | "en">("en");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [result, setResult] = useState<{ title: string; content: string } | null>(null);
  const [copied, setCopied] = useState(false);

  // 🌟 보안 검사 (기존 어드민과 동일)
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user || session.user.email !== 'cto@yeahplus.co.kr') {
        router.replace('/');
      }
    };
    checkAuth();
  }, [router]);

  const handleGenerate = async () => {
    if (!topic) return alert("주제를 입력해주세요.");
    setIsGenerating(true);
    setResult(null);

    try {
      const res = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, platform, language })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResult(data);
    } catch {
      alert("생성 실패");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const fullText = `# ${result.title}\n\n${result.content}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-[#ff3b30]">
      <header className="mb-12 flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <button onClick={() => router.back()} className="flex items-center gap-2 text-white/50 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-4xl font-serif italic font-black uppercase tracking-tighter text-[#ff3b30]">Aura Think Tank.</h1>
          <p className="font-mono text-xs text-white/50 mt-2 uppercase tracking-widest">Global Thought Leadership Generator</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* 입력 패널 */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-6">
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">Target Platform</label>
              <div className="flex gap-2">
                <button onClick={() => setPlatform("medium")} className={`flex-1 py-3 rounded-lg font-bold border transition-all ${platform === 'medium' ? 'bg-white text-black border-white' : 'border-white/20 text-white/40 hover:bg-white/5'}`}>Medium (Tech Blog)</button>
                <button onClick={() => setPlatform("substack")} className={`flex-1 py-3 rounded-lg font-bold border transition-all ${platform === 'substack' ? 'bg-[#ff3b30] text-white border-[#ff3b30]' : 'border-white/20 text-white/40 hover:bg-white/5'}`}>Substack (Newsletter)</button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">Language</label>
              <div className="flex gap-2">
                <button onClick={() => setLanguage("en")} className={`flex-1 py-2 rounded-lg font-mono text-xs border transition-all ${language === 'en' ? 'bg-white text-black border-white' : 'border-white/20 text-white/40'}`}>English (Global)</button>
                <button onClick={() => setLanguage("ko")} className={`flex-1 py-2 rounded-lg font-mono text-xs border transition-all ${language === 'ko' ? 'bg-white text-black border-white' : 'border-white/20 text-white/40'}`}>Korean (Domestic)</button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">Topic / Keyword</label>
              <textarea 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)} 
                placeholder="Ex: Why AI curation is better than human stylists, The future of OOTD..." 
                className="w-full h-32 bg-black/50 border border-white/20 p-4 rounded-xl text-white resize-none focus:border-[#ff3b30] outline-none transition-colors"
              />
            </div>

            <button 
              onClick={handleGenerate} 
              disabled={isGenerating || !topic}
              className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <PenTool className="w-5 h-5" />}
              Generate Draft
            </button>
          </div>
        </div>

        {/* 결과 패널 */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[500px]">
          {result ? (
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                <h2 className="text-xl font-bold leading-tight max-w-[80%]">{result.title}</h2>
                <button onClick={copyToClipboard} className="p-2 bg-white/10 rounded-lg hover:bg-white text-black hover:text-black transition-colors">
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-white" />}
                </button>
              </div>
              <div className="prose prose-invert prose-sm max-w-none font-serif leading-relaxed opacity-80 whitespace-pre-wrap overflow-y-auto custom-scrollbar flex-1">
                {result.content}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-white/20 space-y-4">
              <FileText className="w-16 h-16 opacity-20" />
              <p className="font-mono text-xs uppercase tracking-widest">Waiting for Input...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
        ### 📄 app/api/admin/approve/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @/lib/supabase, resend`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/admin/approve/route.ts
import { NextResponse } from 'next/server';
import { supabase } from "@/lib/supabase";

import { Resend } from 'resend';



const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { waitlistId, email, instagram } = await req.json();

    // 1. 고유 초대 코드 생성 (AURA-XXXXXX 포맷)
    const uniqueCode = `AURA-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // 2. DB에 초대 코드 등록 (1회만 사용 가능하도록 max_uses: 1 설정)
    const { error: codeError } = await supabase
      .from('invite_codes')
      .insert([{ code: uniqueCode, max_uses: 1 }]);
    if (codeError) throw codeError;

    // 3. 대기자 명단 상태를 'approved'로 변경
    const { error: updateError } = await supabase
      .from('aura_waitlist')
      .update({ status: 'approved' })
      .eq('id', waitlistId);
    if (updateError) throw updateError;

    // 4. 💌 힙스터 감성의 다크모드 이메일 발송
    const { error: emailError } = await resend.emails.send({
      from: 'AURA CEO <ceo@auraootd.com>', // 🌟 도메인 연결 전에는 테스트용 발신자 사용
      to: email,
      subject: '[AURA] Vibe Audit Passed. Access Granted.',
      html: `
        <div style="background-color: #050505; color: #ffffff; padding: 40px; font-family: Helvetica, Arial, sans-serif; text-align: center;">
          <h1 style="font-size: 40px; font-style: italic; color: #ffffff; margin-bottom: 10px;">Aura<span style="color: #ff3b30;">.</span></h1>
          <p style="font-family: monospace; color: #ff3b30; letter-spacing: 4px; font-size: 12px; margin-bottom: 40px;">VIBE AUDIT: PASSED</p>
          
          <p style="font-size: 16px; color: #aaaaaa; line-height: 1.6; margin-bottom: 30px;">
            축하합니다, @${instagram.replace('@', '')} 님.<br/>
            AURA 크리에이티브 팀의 심사 결과, 당신의 감도가 기준을 충족하여<br/>
            <strong>Founding Originator (초기 1,000인)</strong>으로 선정되었습니다.
          </p>
          
          <div style="background-color: #111111; border: 1px solid #333333; padding: 30px; border-radius: 10px; margin-bottom: 40px;">
            <p style="font-family: monospace; color: #666666; font-size: 10px; text-transform: uppercase; margin: 0 0 10px 0;">Your Exclusive Access Code</p>
            <p style="font-family: monospace; font-size: 28px; font-weight: bold; color: #ff3b30; margin: 0; letter-spacing: 2px;">
              ${uniqueCode}
            </p>
          </div>
          
          <a href="https://auraootd.com" style="background-color: #ffffff; color: #000000; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 30px; font-size: 14px;">ENTER THE SYSTEM</a>
          
          <p style="margin-top: 50px; font-family: monospace; font-size: 10px; color: #444444; letter-spacing: 2px;">
            이 코드는 1회만 사용 가능하며, 타인에게 양도할 수 없습니다.<br/>
            © 2026 AURA Inc.
          </p>
        </div>
      `,
    });

    if (emailError) throw emailError;

    return NextResponse.json({ success: true, code: uniqueCode });
  } catch (error) {
    console.error('Approve Error:', error);
    return NextResponse.json({ error: '승인 처리 중 오류 발생' }, { status: 500 });
  }
}
        ### 📄 app/api/fashion/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @supabase/supabase-js`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js'; 

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const dynamic = 'force-dynamic';
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
        ### 📄 app/api/generate-editorial/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @google/generative-ai`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/generate-editorial/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// 환경변수에 저장된 Gemini API 키를 가져옵니다.
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || '');

export async function POST(req: NextRequest) {
  if (!apiKey) {
    return NextResponse.json({ error: 'API 키가 설정되지 않았습니다.' }, { status: 500 });
  }

  try {
    const { keyword, locale } = await req.json();

    const modelName = process.env.GEMINI_MODEL_NAME || "gemini-2.5-flash-lite";
    // 모델 초기화
    const model = genAI.getGenerativeModel({ model: modelName });

    // 🌟 AI에게 부여하는 '수석 에디터' 페르소나 프롬프트
    const prompt = `
      You are the Editor-in-Chief of a high-end, minimalist fashion magazine called 'AURA'.
      Write a compelling, poetic, and trendy fashion editorial based on the following keyword: "${keyword}".
      
      Language Requirement: MUST be written in ${locale === 'ko' ? 'Korean (한국어)' : 'English'}.

      Tone & Manner: 
      - Chic, avant-garde, and confident.
      - Use rich sensory details (textures, weather, lighting).
      - Do not use generic AI-sounding words. Keep it raw and editorial.

      Output Format (Strictly return a valid JSON object without markdown code blocks):
      {
        "title": "A catchy, high-end editorial title",
        "slug": "url-friendly-slug-in-english-only-like-this",
        "tags": "3 to 4 comma separated tags, lowercase",
        "content": "The main editorial body. Use 2-3 short paragraphs. Include newlines (\\n\\n) for formatting."
      }
    `;

    // AI 원고 생성
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // 🌟 마크다운 잔재(```json 등)를 제거하고 순수 JSON 객체로 파싱
    const cleanJsonString = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    const editorialData = JSON.parse(cleanJsonString);

    return NextResponse.json(editorialData);

  } catch (error) { // ⭕ 타입을 지우거나 unknown으로 처리
    console.error("OpenAI Error:", error);
    // 에러가 Error 객체인지 확인 후 메시지 추출
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
        ### 📄 app/api/generate-blog/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @google/generative-ai`
* ⚡ **API Route / Server Action Detected**

        ```ts
        import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const { topic, platform, language } = await req.json();

    // 1. API KEY 가져오기
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
      throw new Error("API Key is missing");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // 🌟 [KEY UPDATE] 환경 변수에서 모델명을 가져옵니다. (없으면 'gemini-1.5-flash'를 기본값으로 사용)
    const modelName = process.env.GEMINI_MODEL_NAME || "gemini-2.5-flash-lite";
    
    // 모델 초기화
    const model = genAI.getGenerativeModel({ model: modelName });

    // (디버깅용 로그: 현재 어떤 모델이 작동 중인지 서버 로그로 확인 가능)
    console.log(`[Blog Generator] Running with model: ${modelName}`);

    const platformStrategy = platform === 'medium' 
      ? "Write a high-end, analytical, and thought-provoking 'Tech & Fashion' column. Focus on future trends, data, and AI. Use subheadings and bullet points. Tone: Professional, Insightful, Visionary."
      : "Write a personal, secretive, and engaging 'Newsletter' for a private community. Use a storytelling approach. Tone: Exclusive, Cult-like, Intimate.";

    const prompt = `
      You are the Chief Editor of 'AURA', a private AI fashion platform.
      
      [Your Persona]
      1. Minimalist yet powerful.
      2. Slightly arrogant but logically convincing.
      3. Use terms like 'Ambient Intelligence', 'Data-Driven', 'Vibe', 'Cult', 'Archive'.
      4. Never sound like a cheap sales ad. Sound like a manifesto.
      
      [Task]
      Generate a blog post based on the user's topic.
      
      - Topic: ${topic}
      - Platform: ${platform === 'medium' ? 'Medium (Tech Blog)' : 'Substack (Newsletter)'}
      - Language: ${language === 'ko' ? 'Korean (High-end Magazine Style)' : 'English (Silicon Valley Tech Writer Style)'}
      - Strategy: ${platformStrategy}

      [Output Format]
      Please output ONLY the JSON format below, without any markdown code blocks (like \`\`\`json).
      {
        "title": "Your creative title here",
        "content": "Your full blog content here (use markdown for formatting)"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();

    // JSON 파싱 및 정제
    const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    let jsonResponse;
    try {
      jsonResponse = JSON.parse(cleanedText);
    } catch (e) {
      console.error("JSON Parse Error:", e);
      // 파싱 실패 시 원본 텍스트라도 반환하여 내용 확인
      jsonResponse = { title: "Draft Generated (Raw Text)", content: cleanedText };
    }

    return NextResponse.json(jsonResponse);

  } catch (error) {
    console.error("Gemini Blog Gen Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
        ### 📄 app/api/push/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, web-push, @supabase/supabase-js`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/cron/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js'; // 🌟 createClient 직접 가져오기

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 👈 이게 핵심입니다! (RLS 우회)
);

webpush.setVapidDetails(
  'mailto:contact@auraootd.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function GET() {
  try {
    // 1. 모든 구독 정보 가져오기
    const { data: subscriptions, error } = await supabase
      .from('aura_push_subscriptions')
      .select('id, subscription');

    if (error || !subscriptions) throw error;

    const title = "AURA 모닝 브리핑 🌤️";
    const body = "좋은 아침입니다! 오늘 날씨에 어울리는 완벽한 룩이 준비되었습니다.";

    // 🌟 [해결책 1] 푸시 발송 전, SYSTEM LOGS에 기록을 먼저 남깁니다.
    // 루프 밖에서 한 번만 호출하므로 중복 저장이 방지됩니다.
    const { error: dbError } = await supabase
      .from('notifications')
      .insert([{ 
        title, 
        body, 
        type: 'system', 
        link_url: '/', 
        is_public: true 
      }]);

    if (dbError) console.error('❌ DB Logging Error:', dbError);
    else console.log('✅ SYSTEM LOGS 기록 성공');

    // 2. 푸시 메시지 설정
    const payload = JSON.stringify({ title, body, url: '/' });

    // 🌟 [해결책 2] 발송 및 만료된(410) 구독 정보 자동 삭제 (자가 치유)
    const sendPromises = subscriptions.map(async (sub) => {
      try {
        await webpush.sendNotification(sub.subscription, payload);
      } catch (e: unknown) {
        const pushError = e as { statusCode?: number }; // 에러의 형태를 임시로 지정
        // 410(Gone) 또는 404(Not Found) 에러 시 DB에서 해당 유령 구독자 삭제
        if (pushError.statusCode === 410 || pushError.statusCode === 404) {
          console.log(`🗑️ 유효하지 않은 구독 삭제: ID ${sub.id}`);
          await supabase.from('aura_push_subscriptions').delete().eq('id', sub.id);
        } else {
          console.error("발송 실패:", e);
        }
      }
    });

    await Promise.all(sendPromises);

    return NextResponse.json({ 
      success: true, 
      logged: !dbError,
      processedCount: subscriptions.length 
    });

  } catch (error) {
    console.error('🔥 Cron Critical Error:', error);
    return NextResponse.json({ error: '시스템 오류' }, { status: 500 });
  }
}
        ### 📄 app/api/broadcast/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, web-push, @supabase/supabase-js`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // app/api/broadcast/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // 관리자 권한
);

webpush.setVapidDetails(
  'mailto:contact@auraootd.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(req: Request) {
  try {
    const { title, body, url } = await req.json();

    // 🌟 [STEP 1] DB에 로그를 '딱 한 번만' 기록합니다.
    const { error: dbError } = await supabase
      .from('notifications')
      .insert([{ title, body, type: 'system', link_url: url || '/', is_public: true }]);

    if (dbError) console.error('DB Log Error:', dbError);

    // 🌟 [STEP 2] 모든 구독 정보를 가져옵니다.
    const { data: subscriptions } = await supabase
      .from('aura_push_subscriptions')
      .select('subscription');

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ message: "No subscribers found" });
    }

    // 🌟 [STEP 3] 모든 유저에게 병렬로 푸시 발송
    const payload = JSON.stringify({ title, body, url: url || '/' });
    const sendPromises = subscriptions.map((sub) =>
      webpush.sendNotification(sub.subscription, payload).catch(e => console.error("발송 실패:", e))
    );

    await Promise.all(sendPromises);

    return NextResponse.json({ success: true, count: subscriptions.length });
  } catch (error) {
    console.error('Broadcast Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
        ### 📄 app/api/upload/route.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/server, @google/generative-ai, @supabase/supabase-js`
* ⚡ **API Route / Server Action Detected**

        ```ts
        
// app/api/upload/route.ts

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';

// Supabase 설정
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
const apiKey = process.env.GEMINI_API_KEY || "비어있음(UNDEFINED)";
export const maxDuration = 60;

export async function POST(req: Request) {
  try {    
    if (!apiKey) {
      console.error("Vercel 환경변수에 GEMINI_API_KEY가 없습니다!");
      return NextResponse.json({ success: false, error: "서버 API 키 설정 오류" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const formData = await req.formData();
    const file = formData.get('image') as File;
    
    // 모드 스위치 및 스폰서 데이터 받기
    const mode = formData.get('mode') as string;
    const isSponsored = formData.get('isSponsored') === 'true';
    const sponsorBrand = formData.get('sponsorBrand') as string;
    const sponsorMessage = formData.get('sponsorMessage') as string;
    const sponsorUrl = formData.get('sponsorUrl') as string;
    
    const userId = formData.get('userId') as string; 
    const uploaderName = formData.get('uploaderName') as string; 
    const uploaderIg = formData.get('uploaderIg') as string; 

    if (!file) throw new Error("파일이 없습니다.");

    // 🌟 [추가] 브라우저 쿠키에서 사용자가 설정한 언어(NEXT_LOCALE) 읽어오기
    const cookieHeader = req.headers.get('cookie') || '';
    const isEnglish = cookieHeader.includes('NEXT_LOCALE=en');
    
    // 언어에 따른 프롬프트 지시문 동적 생성
    const tagInstruction = isEnglish 
      ? "반드시 '영어(English)'로 작성해 (예: #Streetwear, #Minimal)" 
      : "반드시 '한국어'로 작성해 (예: #스트릿룩, #미니멀룩)";

    // 1. 이미지를 버퍼로 변환
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. Gemini Vision AI 호출
    const modelName = process.env.GEMINI_MODEL_NAME || "gemini-2.5-flash-lite";
    const model = genAI.getGenerativeModel({ model: modelName });

    // 🌟 [수정] 프롬프트에 동적 언어 지시문(tagInstruction) 삽입
    const prompt = `
      당신은 세계 최고의 패션 디렉터입니다. 사진의 옷을 분석하여 아래 JSON 형식으로만 완벽하게 대답해주세요. 다른 말은 절대 하지마. 마크다운(\`\`\`json 등)은 절대 포함하지 마세요.
        {
          "weather": "어울리는 날씨 이모지 1개 (☀️, ☁️, ☔️, ❄️ 중 택 1)",
          "temperature": "어울리는 온도 (예: 15°C, 28°C 등)",
          "tags": ["#태그1", "#태그2", "#태그3"], // ${tagInstruction}
          "colors": ["#HexCode1", "#HexCode2", "#HexCode3"]
        }
    `;

    const base64Data = buffer.toString("base64");
    const imagePart = { inlineData: { data: base64Data, mimeType: file.type } };

    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text().trim().replace(/```json/g, '').replace(/```/g, '');
    const aiData = JSON.parse(responseText);

    // 'analyzeOnly' 모드면 여기서 바로 AI 결과만 던져주고 퇴근합니다! (DB 저장 안 함)
    if (mode === 'analyzeOnly') {
      return NextResponse.json({ success: true, ai: aiData });
    }

    // 3. 일반 업로드 및 스폰서 업로드 처리 (스토리지 저장)
    const fileName = `${isSponsored ? 'sponsors' : 'user_uploads'}/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const { error: uploadError } = await supabase.storage
      .from('aura_images')
      .upload(fileName, buffer, { contentType: file.type });
    
    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage.from('aura_images').getPublicUrl(fileName);

    // 4. DB 저장
    const customWeather = formData.get('weather') as string;
    const customTemp = formData.get('temperature') as string;
    const customTags = formData.get('tags') as string;
    const customColors = formData.get('colors') as string;

    const finalTags = customTags ? customTags.split(',').map(t => t.trim()) : aiData.tags;
    const finalColors = customColors ? JSON.parse(customColors) : (aiData.colors || ["#111111", "#FFFFFF", "#FF3B30"]);

    const { data: dbItem, error: dbError } = await supabase
      .from('aura_fashion_items')
      .insert([{
        user_id: userId || null, 
        uploader_name: isSponsored ? 'AURA AD' : (uploaderName || '@AURA'), 
        uploader_ig: uploaderIg || null, 
        likes_count: 0, 
        image_url: publicUrl,
        weather: customWeather || aiData.weather || "☀️",
        temperature: customTemp || aiData.temperature || "20°C",
        tags: finalTags || ["#OOTD"],
        colors: finalColors,
        
        // 스폰서 전용 데이터 삽입
        is_sponsored: isSponsored,
        sponsor_brand: sponsorBrand || null,
        sponsor_message: sponsorMessage || null,
        sponsor_url: sponsorUrl || null,
      }])
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({ success: true, item: dbItem });

  } catch (error) { 
    console.error("Upload/AI Error:", error);
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

// Supabase 설정
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

webpush.setVapidDetails(
  'mailto:contact@auraootd.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

// 1. 날씨 API 호출 (도시 단위 캐싱 효과)
async function getCityWeather(lat: number, lon: number) {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia%2FSeoul`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    // 소수점 반올림 (예: 12.7 -> 13)
    return Math.round(data.current_weather.temperature);
  } catch (e) {
    console.error("Weather API Error:", e);
    return null;
  }
}

// 2. 최적의 옷 찾기 (온도 매칭)
function findBestMatchItem(items: { temperature?: string | number; [key: string]: unknown }[], targetTemp: number) {
  if (!items || items.length === 0) return null;
  return items.reduce((prev, curr) => {
    // DB의 문자열(예: "25°C")에서 숫자만 추출
    const prevTemp = parseFloat(String(prev.temperature).replace(/[^0-9.-]/g, '')) || 20;
    const currTemp = parseFloat(String(curr.temperature).replace(/[^0-9.-]/g, '')) || 20;
    
    // 현재 기온과의 차이가 더 적은 쪽을 선택
    return Math.abs(currTemp - targetTemp) < Math.abs(prevTemp - targetTemp) ? curr : prev;
  });
}

export async function GET() {
  try {
    // 1. 오늘의 전략 선정
    const strategies = ['weather', 'trend_tag', 'trend_look'];
    const selectedStrategy = strategies[Math.floor(Math.random() * strategies.length)];
    // const selectedStrategy = 'weather'; // 테스트 시 주석 해제

    console.log(`🚀 [Cron Start] 전략: ${selectedStrategy}`);

    // 2. 구독자 전체 조회
    const { data: subscriptions } = await supabase
      .from('aura_push_subscriptions')
      .select('id, subscription, location_name, latitude, longitude');

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ success: true, message: "구독자가 없습니다." });
    }

    const sendPromises: Promise<unknown>[] = [];

    // ============================================================
    // [CASE A] 날씨 전략 (최적화: 도시별 그룹핑)
    // ============================================================
    if (selectedStrategy === 'weather') {
      
      // 1) 도시별 그룹핑 (Grouping)
      const groups: Record<string, typeof subscriptions> = {};
      
      subscriptions.forEach(sub => {
        const city = sub.location_name || '서울';
        if (!groups[city]) groups[city] = [];
        groups[city].push(sub);
      });

      // 2) 후보 아이템 조회 (인기순 30개)
      const { data: candidates } = await supabase
        .from('aura_fashion_items')
        .select('*')
        .order('likes_count', { ascending: false })
        .limit(30);

      const items = candidates || [];

      // 3) 도시별 루프 (도시 개수만큼만 API 호출)
      const cityNames = Object.keys(groups);
      console.log(`🏙️ 총 ${cityNames.length}개 도시 날씨 조회 시작`);

      for (const city of cityNames) {
        const cityUsers = groups[city];
        // 대표 좌표 (모두 같은 도시이므로 0번째 유저 좌표 사용)
        const lat = cityUsers[0].latitude || 37.5665;
        const lon = cityUsers[0].longitude || 126.9780;

        // 🌟 [핵심] API 호출 (1번)
        const realTemp = await getCityWeather(lat, lon);
        const currentTemp = realTemp !== null ? realTemp : 20; // 실패 시 20도
        
        // 🌟 [핵심] 이 도시에 맞는 옷 선정
        const targetItem = findBestMatchItem(items, currentTemp);

        if (targetItem) {
          // 변수를 밖으로 빼서 푸시와 DB 양쪽에서 쓸 수 있게 함
          const title = "AURA 모닝 브리핑 🌤️";
          const body = `현재 ${city} ${currentTemp}°C. 이 날씨엔 이런 스타일이 딱이죠!`;
          const url = `/home?item_id=${targetItem.id}&source=morning_weather`;

          const payload = JSON.stringify({ type: 'weather', title, body, url });

          // 🌟 [추가된 부분 1] 날씨 전략 DB 저장 (도시별로 한 번씩 저장)
          const { error: dbError } = await supabase
            .from('notifications')
            .insert([{ 
              title, 
              body, 
              type: 'system', 
              link_url: url, // 동적 url 적용
              is_public: true 
            }]);
            
          if (dbError) console.error(`DB Insert Error (${city}):`, dbError);

          // 해당 도시 유저들에게 일괄 발송
          const pushTasks = cityUsers.map(user => 
            webpush.sendNotification(user.subscription, payload)
              .catch(async (e) => {
                if (e.statusCode === 410 || e.statusCode === 404) {
                   await supabase.from('aura_push_subscriptions').delete().eq('id', user.id);
                }
              })
          );
          sendPromises.push(...pushTasks);
        }
      }
    } 
    
    // ============================================================
    // [CASE B] 트렌드 전략 (전체 동일 발송)
    // ============================================================
    else {
      // 1등 아이템 조회
      const { data: targetItem } = await supabase
        .from('aura_fashion_items')
        .select('*')
        .order('likes_count', { ascending: false })
        .limit(1)
        .single();

      if (targetItem) {
        let title = "", body = "", url = "";

        if (selectedStrategy === 'trend_tag') {
          const hotTag = targetItem.tags?.[0] || 'OOTD';
          title = `오늘의 키워드: #${hotTag}`;
          body = `#${hotTag} 스타일이 트렌드입니다.`;
          url = `/home?item_id=${targetItem.id}&tag=${hotTag}`;
        } else {
          title = `🔥 지금 가장 핫한 룩`;
          body = `현재 ${targetItem.likes_count}명이 주목하고 있습니다.`;
          url = `/home?item_id=${targetItem.id}&source=morning_trend`;
        }

        const payload = JSON.stringify({ type: selectedStrategy, title, body, url });
        // 🌟 [추가된 부분 2] 트렌드 전략 DB 저장 (모두 동일하므로 한 번만 저장)
        const { error: dbError } = await supabase
        .from('notifications')
        .insert([{ 
          title, 
          body, 
          type: 'system', 
          link_url: url, // 동적 url 적용
          is_public: true 
        }]);
        if (dbError) console.error("DB Insert Error (Trend):", dbError);
        // 전체 발송
        const pushTasks = subscriptions.map(sub => 
          webpush.sendNotification(sub.subscription, payload)
            .catch(async (e) => {
              if (e.statusCode === 410 || e.statusCode === 404) {
                 await supabase.from('aura_push_subscriptions').delete().eq('id', sub.id);
              }
            })
        );
        sendPromises.push(...pushTasks);
      }
    }


    // 4. 모든 발송 대기
    await Promise.all(sendPromises);
    console.log(`✅ [Cron Finish] 총 ${sendPromises.length}건 처리 완료`);

    return NextResponse.json({ success: true, strategy: selectedStrategy });

  } catch (error) {
    console.error("Cron Fatal Error:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
        ### 📄 app/[username]/page.tsx
        > **Context Summary**
        * 🔗 **Imports:** `next, lucide-react, @/lib/supabase`

        ```typescript
        // app/[username]/page.tsx
import { Metadata } from 'next';
import { Heart, Grid3X3, ArrowDownRight, Sparkles } from 'lucide-react';
import { supabase } from "@/lib/supabase"; 

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
        ### 📄 public/manifest.json
        > **Context Summary**
        * (No structural elements detected)

        ```json
        {
    "name": "Aura",
    "short_name": "Aura.",
    "description": "AI-Powered Ambient Lookbook",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#000000",
    "theme_color": "#ff3b30",
    "icons": [
      {
        "src": "/images/icon_192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "/images/icon_512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable"
      }
    ]
  }
        ### 📄 public/sw.js
        > **Context Summary**
        * (No structural elements detected)

        ```js
        // public/sw.js

self.addEventListener('install', (event) => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('push', function (event) {
  if (!event.data) return;
  const payload = event.data.json();
  const options = {
    body: payload.body,
    icon: '/icon.png',
    badge: '/icon.png',
    data: { url: payload.url || '/' }, // URL 저장
  };
  event.waitUntil(self.registration.showNotification(payload.title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  // 1. 이동할 목표 URL (절대 경로 변환)
  const targetUrl = new URL(event.notification.data.url, self.location.origin).href;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      // 2. 이미 열려있는 우리 앱 탭이 있는지 확인
      for (const client of clientList) {
        // 내 도메인(origin)으로 시작하는 탭이 있다면?
        if (client.url.startsWith(self.location.origin) && 'focus' in client) {
          client.focus(); // 그 탭을 활성화하고
          return client.navigate(targetUrl); // 그 탭에서 페이지 이동!
        }
      }
      // 3. 없으면 새 창 열기
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
        ### 📄 hooks/useAura.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wb **Type/Intf:** `FashionItem`
* wf **Function:** `useAura`
* ww **Hooks:** `useSocial, useState, useFeed, useWeather, useAuth, useEffect, useAura`

        ```ts
        // hooks/useAura.ts

import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { useWeather } from "./useWeather";
import { useSocial } from "./useSocial";
import { useFeed } from "./useFeed";
import { supabase } from "../lib/supabase";

export interface FashionItem {
  id: string | number;
  imageUrl: string;
  weather: string;
  temperature: string;
  tags: string[];
  colors?: string[];
  uploaderName?: string;
  uploaderIg?: string;
  likes?: number;
  // 🌟 [NEW] Phase 2: 스폰서십 전용 데이터
  isSponsored?: boolean;      // 스폰서 카드 여부 (true/false)
  sponsorBrand?: string;      // 브랜드명 (예: GENTLE MONSTER)
  sponsorUrl?: string;        // 아웃링크 (컬렉션 구매 페이지)
  sponsorMessage?: string;    // 브랜드 메시지
}

export function useAura(options?: { isPaused?: boolean; injectedItem?: FashionItem | null }) {
  const isPaused = options?.isPaused ?? false;
  const injectedItem = options?.injectedItem ?? null;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  
  const triggerHaptic = (pattern: number | number[] = 50) => {
    if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(pattern);
  };

  // 🌟 4개의 엔진 가동! (서로 데이터를 주고받습니다)
  const auth = useAuth();
  const weather = useWeather();
  const social = useSocial(auth.user, () => setIsLoginModalOpen(true), triggerHaptic);
  const feed = useFeed(weather.localWeather.temp, social.savedItems, isPaused, injectedItem);
  // 🌟 기존 UI와 완벽 호환되도록 파라미터 랩핑
  const toggleArchiveWrapper = (lookId: string) => social.toggleArchive(lookId, feed.fashionItems);
  const toggleLikeWrapper = (lookId: string, currentLikes: number) => social.toggleLike(lookId, currentLikes, feed.updateFeedLikes);

    // 🌟 2. useEffect들이 모여있는 곳에 구독 상태 체크 로직 추가
  useEffect(() => {
    const checkPushStatus = async () => {
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          const subscription = await registration.pushManager.getSubscription();
          setIsPushEnabled(!!subscription); // 구독 정보가 있으면 true, 없으면 false
        }
      }
    };
    checkPushStatus();
  }, []);
  // 🌟 [수정된 실제 웹 푸시 구독 엔진]
  const subscribeToPush = async () => {
    if (!auth.user) return alert("푸시 알림을 받으려면 로그인이 필요합니다.");
    
    // 1. 브라우저 지원 여부 확인
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      return alert("현재 사용 중인 브라우저는 푸시 알림을 지원하지 않습니다.");
    }

    try {
      // 2. 권한 요청
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') return alert("알림 권한이 거부되었습니다.");

      // 🌟 [핵심 수정 1] 무한 대기를 막기 위해 서비스 워커를 명시적으로 먼저 등록합니다!
      const registration = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready; // 등록 완료될 때까지 대기

      // 3. VAPID 키 확인 및 구독
      const applicationServerKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!applicationServerKey) return alert("푸시 서버(VAPID) 설정이 누락되었습니다.");

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      });

      // 🌟 [핵심 수정 2] onConflict 옵션을 명시하여 user_id 기준으로 완벽하게 upsert 되도록 지정!
      const { error } = await supabase
        .from('aura_push_subscriptions')
        .upsert(
          { 
            user_id: auth.user.id, 
            subscription: subscription.toJSON() 
          },
          { onConflict: 'user_id' } // 👈 이 코드가 있어야 고유 키 충돌 에러가 나지 않습니다.
        );

      if (error) {
        console.error("DB Upsert Error:", error);
        throw error;
      }
      
      triggerHaptic([50, 100, 50]);
      alert("AURA와 주파수 동기화가 시작되었습니다! 🚀");
      
    } catch (error) {
      console.error("Push Subscription Error:", error);
      alert("주파수동기화 설정 중 오류가 발생했습니다. 네트워크 상태를 확인해주세요.");
    }
  };
  
  // 🌟 [NEW] 웹 푸시 구독 해제 엔진
  const unsubscribeFromPush = async () => {
    try {
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          const subscription = await registration.pushManager.getSubscription();
          if (subscription) {
            // 1. 브라우저에서 알림 구독 해제
            await subscription.unsubscribe();
            
            // 2. Supabase DB에서 내 기기 주소 삭제
            if (auth.user) {
              await supabase
                .from('aura_push_subscriptions')
                .delete()
                .eq('user_id', auth.user.id);
            }

            // 3. 상태 업데이트 및 피드백
            setIsPushEnabled(false);
            triggerHaptic([50, 50]); // 해제될 때는 짧은 진동 두 번
            alert("AURA 주파수 동기화가 해제되었습니다. 언제든 다시 연결해주세요.");
          }
        }
      }
    } catch (error) {
      console.error("Push Unsubscribe Error:", error);
    }
  };

  return {
    ...auth,
    ...weather,
    ...social,
    ...feed,
    
    toggleArchive: toggleArchiveWrapper,
    toggleLike: toggleLikeWrapper,

    isLoginModalOpen, setIsLoginModalOpen,
    isModalOpen, setIsModalOpen,
    isDetailOpen, setIsDetailOpen,
    triggerHaptic,
    
    isPushEnabled,
    subscribeToPush: subscribeToPush,
    unsubscribeFromPush, 
    sendTestPush: () => console.log("푸시 테스트"),
  };
}
        ### 📄 hooks/useSocial.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wf **Function:** `useSocial`
* ww **Hooks:** `useSocial, useEffect, useMemo, useState`

        ```ts
        // hooks/useSocial.ts
import { useState, useEffect, useMemo } from "react";
import { supabase } from "../lib/supabase";
import { FashionItem } from "./useAura";

export function useSocial(user: any, onRequireLogin: () => void, triggerHaptic: (pattern: number | number[]) => void) {
  const [savedItems, setSavedItems] = useState<FashionItem[]>([]);
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [uploadedItems, setUploadedItems] = useState<FashionItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [matchedUsers, setMatchedUsers] = useState<any[]>([]);

  // 1. 유저 데이터 동기화
  useEffect(() => {
    if (!user) {
      setSavedItems([]); setUploadedItems([]); setLikedItems([]);
      return;
    }
    const fetchSaved = async () => {
      const { data } = await supabase.from('aura_saved_looks').select('look_id, aura_fashion_items(*)').eq('user_id', user.id);
      if (data) setSavedItems(data.map((d: any) => ({
        id: d.aura_fashion_items.id, imageUrl: d.aura_fashion_items.image_url, weather: d.aura_fashion_items.weather, temperature: d.aura_fashion_items.temperature, tags: d.aura_fashion_items.tags, uploaderName: d.aura_fashion_items.uploader_name, uploaderIg: d.aura_fashion_items.uploader_ig, likes: d.aura_fashion_items.likes_count || 0,
      })));
    };
    const fetchUploaded = async () => {
      const { data } = await supabase.from('aura_fashion_items').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
      if (data) setUploadedItems(data.map((d: any) => ({
        id: d.id, imageUrl: d.image_url, weather: d.weather, temperature: d.temperature, tags: d.tags, uploaderName: d.uploader_name, uploaderIg: d.uploader_ig, likes: d.likes_count || 0,
      })));
    };
    const fetchLikes = async () => {
      const { data } = await supabase.from('aura_liked_looks').select('look_id').eq('user_id', user.id);
      if (data) setLikedItems(data.map(item => String(item.look_id)));
    };
    fetchSaved(); fetchUploaded(); fetchLikes();
  }, [user]);

  // 2. 액션 로직 (Optimistic UI 적용)
  const toggleArchive = async (lookId: string, currentItems: FashionItem[]) => {
    if (!user) return onRequireLogin();
    const isSaved = savedItems.some(item => String(item.id) === String(lookId));
    triggerHaptic(isSaved ? 30 : [30, 50, 40]);

    if (isSaved) setSavedItems(prev => prev.filter(item => String(item.id) !== String(lookId)));
    else {
      const itemToSave = currentItems.find(item => String(item.id) === String(lookId));
      if (itemToSave) setSavedItems(prev => [...prev, itemToSave]);
    }
    try {
      if (isSaved) await supabase.from('aura_saved_looks').delete().match({ user_id: user.id, look_id: lookId });
      else await supabase.from('aura_saved_looks').insert([{ user_id: user.id, look_id: lookId }]);
    } catch (e) { console.error(e); }
  };

  const toggleLike = async (lookId: string, currentLikes: number, updateFeedLikes: (id: string, isLiked: boolean) => void) => {
    if (!user) return onRequireLogin();
    const targetId = String(lookId);
    const isLiked = likedItems.includes(targetId);
    triggerHaptic([50, 100]);
    
    setLikedItems(prev => isLiked ? prev.filter(id => id !== targetId) : [...prev, targetId]);
    updateFeedLikes(targetId, isLiked); // 피드 UI 즉시 업데이트

    try {
      if (isLiked) await supabase.from('aura_liked_looks').delete().match({ user_id: user.id, look_id: lookId });
      else await supabase.from('aura_liked_looks').insert([{ user_id: user.id, look_id: lookId }]);
      await supabase.from('aura_fashion_items').update({ likes_count: isLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1 }).eq('id', lookId);
    } catch (e) { console.error(e); }
  };

  // 3. AI 리포트 및 Vibe Match
  const styleReport = useMemo(() => {
    if (savedItems.length === 0) return null;
    const allTags = savedItems.flatMap(item => (item.tags as string[]) || []);
    const tagCounts = allTags.reduce((acc: Record<string, number>, tag: string) => { acc[tag] = (acc[tag] || 0) + 1; return acc; }, {});
    const sortedTags = Object.entries(tagCounts).sort(([, a]: any, [, b]: any) => b - a).slice(0, 5);

    const VIBE_MAP: Record<string, any> = {
      Minimal: { key: "MINIMALIST", ko: "절제미를 아는 미니멀리스트", en: "THE REFINED MINIMALIST" },
      Street: { key: "STREET_SETTER", ko: "자유로운 스트릿 세터", en: "THE STREET TRENDSETTER" },
      Office: { key: "URBAN_PROFESSIONAL", ko: "지적인 어반 프로페셔널", en: "URBAN PROFESSIONAL" },
      Default: { key: "EXPLORER", ko: "새로운 스타일을 탐험하는 중", en: "STYLE EXPLORER" }
    };
    const selectedVibe = VIBE_MAP[sortedTags[0]?.[0]] || VIBE_MAP.Default;

    return { topTags: sortedTags, vibeKey: selectedVibe.key, vibeTitleKo: selectedVibe.ko, vibeTitleEn: selectedVibe.en, totalSaved: savedItems.length, impactScore: likedItems.length * 10 + savedItems.length * 20 };
  }, [savedItems, likedItems.length]);

  const loadMatchedUsers = async (myVibeKey: string, myUserId: string) => {
    const { data } = await supabase.from('aura_user_profiles').select('id, display_name, ig_handle').eq('vibe_title', myVibeKey).neq('id', myUserId).limit(5);
    if (data) setMatchedUsers(data.map((u) => ({ id: u.id, name: u.display_name || "MUSE", ig: u.ig_handle || "aura_user", matchRate: Math.floor(Math.random() * 11) + 85, img: "https://images.unsplash.com/photo-1506159904225-fbc51df093b5?q=80&w=500&auto=format&fit=crop" })));
  };

  const filteredArchive = useMemo(() => {
    if (!searchQuery) return savedItems;
    const lowerQ = searchQuery.toLowerCase();
    return savedItems.filter(item => item.tags.some(tag => tag.toLowerCase().includes(lowerQ)) || item.temperature.includes(lowerQ));
  }, [searchQuery, savedItems]);

  return { savedItems, setSavedItems, likedItems, uploadedItems, setUploadedItems, toggleArchive, toggleLike, styleReport, matchedUsers, loadMatchedUsers, filteredArchive, searchQuery, setSearchQuery };
}
        ### 📄 hooks/useGyroscope.ts
        > **Context Summary**
        * 🔗 **Imports:** `react, framer-motion`
* wf **Function:** `useGyroscope`
* ww **Hooks:** `useEffect, useGyroscope, useState`

        ```ts
        // hooks/useGyroscope.ts
import { useState, useEffect } from "react";
import { MotionValue } from "framer-motion";

export function useGyroscope(mouseX: MotionValue<number>, mouseY: MotionValue<number>) {
  const [showGyroButton, setShowGyroButton] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' && 
      typeof (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission === 'function'
    ) {
      setShowGyroButton(true);
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      if (beta === null || gamma === null) return;

      const maxGamma = 30;
      const clampedGamma = Math.max(-maxGamma, Math.min(maxGamma, gamma));
      const mappedX = ((clampedGamma + maxGamma) / (maxGamma * 2)) * window.innerWidth;

      const minBeta = 20;
      const maxBeta = 70;
      const clampedBeta = Math.max(minBeta, Math.min(maxBeta, beta));
      const mappedY = ((clampedBeta - minBeta) / (maxBeta - minBeta)) * window.innerHeight;

      mouseX.set(mappedX);
      mouseY.set(mappedY);
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [mouseX, mouseY]);

  const requestGyroPermission = async () => {
    try {
      const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
      if (permission === 'granted') {
        setShowGyroButton(false);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Gyro Permission Error:", error);
      return false;
    }
  };

  return { showGyroButton, requestGyroPermission };
}
        ### 📄 hooks/useAuth.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wf **Function:** `useAuth`
* ww **Hooks:** `useEffect, useAuth`

        ```ts
        // hooks/useAuth.ts
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export function useAuth() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (provider: 'google' | 'github' | 'kakao' | 'twitter') => {
    // 🌟 현재 접속 중인 브라우저 주소(origin)를 파악해서 정확히 /home을 붙여줍니다.
    const redirectUrl = typeof window !== "undefined" 
      ? `${window.location.origin}/home` 
      : "http://localhost:3000/home";

    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: { 
        redirectTo: redirectUrl // 🌟 알아서 똑똑하게 찾아가도록 변수 삽입
      }
    });
  };

  const signOut = async () => { await supabase.auth.signOut(); };

  const saveInstagram = async (handle: string) => {
    if (!user) return;
    const { data, error } = await supabase.auth.updateUser({ data: { instagram: handle } });
    if (data?.user) setUser(data.user); 
    
    if (!error) {
      // 과거 게시물 아이디 동기화
      await supabase.from('aura_fashion_items').update({ uploader_ig: handle }).eq('user_id', user.id);
    }
  };

  return { user, setUser, signIn, signOut, login: signIn, logout: signOut, saveInstagram };
}
        ### 📄 hooks/useWeather.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wf **Function:** `useWeather`
* ww **Hooks:** `useEffect, useWeather, useState`

        ```ts
        // hooks/useWeather.ts
import { useState, useEffect } from "react";

export function useWeather() {
  const [localWeather, setLocalWeather] = useState({temp: 15, city: "Seoul", condition: "URBAN" });

  const getAuraVibe = (weatherCode: number) => {
    if (weatherCode === 0) return "SUNNY";
    if (weatherCode >= 1 && weatherCode <= 3) return "CHILL";
    if (weatherCode === 45 || weatherCode === 48) return "MIST";
    if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82)) return "GLOOMY";
    if ((weatherCode >= 71 && weatherCode <= 77) || weatherCode === 85 || weatherCode === 86) return "FROST";
    if (weatherCode >= 95) return "WILD";
    return "URBAN";
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if ("geolocation" in navigator) {
          const pos = await new Promise<GeolocationPosition>((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`);
          const weatherData = await weatherRes.json();
          
          setLocalWeather({ 
            temp: Math.round(weatherData.current_weather.temperature), 
            city: "Current Location",
            condition: getAuraVibe(weatherData.current_weather.weathercode)
          });
        }
      } catch (e) { 
        console.warn("위치 권한 없음. 기본 날씨를 사용합니다."); 
      }
    };
    fetchWeather();
  }, []);

  return { localWeather };
}
        ### 📄 hooks/useGatekeeper.ts
        > **Context Summary**
        * 🔗 **Imports:** `react, @/lib/supabase`
* wb **Type/Intf:** `VerifyResult`
* wf **Function:** `useGatekeeper`
* ww **Hooks:** `useGatekeeper, useEffect, useState`

        ```ts
        import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface VerifyResult {
  success: boolean;
  message?: string;
}

export function useGatekeeper(userId: string | undefined) {
  const [isApproved, setIsApproved] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsApproved(false);
      setLoading(false);
      return;
    }

    const checkStatus = async () => {
      const { data } = await supabase
        .from('aura_user_profiles')
        .select('is_approved')
        .eq('id', userId)
        .single();

      setIsApproved(data?.is_approved === true);
      setLoading(false);
    };

    checkStatus();
  }, [userId]);

  const verifyCode = async (code: string): Promise<VerifyResult> => {
    // 🌟 방어벽: 로그인 안 한 유저는 코드 검증 불가!
    if (!userId) {
      return { success: false, message: "구글 로그인이 먼저 필요합니다." };
    }
    try {
      const { data: codeData, error: codeError } = await supabase
        .from('invite_codes')
        .select('*')
        .eq('code', code.toUpperCase())
        .single();

      if (codeError || !codeData || codeData.used_count >= codeData.max_uses) {
        return { success: false, message: "유효하지 않거나 만료된 코드입니다." };
      }

      const { error: updateError } = await supabase
        .from('aura_user_profiles')
        .update({ is_approved: true, used_invite_code: code.toUpperCase() })
        .eq('id', userId);

      if (updateError) return { success: false, message: "승인 처리 중 오류 발생" };

      await supabase
        .from('invite_codes')
        .update({ used_count: codeData.used_count + 1 })
        .eq('code', code.toUpperCase());

      setIsApproved(true);
      return { success: true };
    } catch (e) {
      return { success: false, message: "시스템 오류가 발생했습니다." };
    }
  };

  return { isApproved, loading, verifyCode };
}
        ### 📄 hooks/useFeed.ts
        > **Context Summary**
        * 🔗 **Imports:** `react`
* wf **Function:** `useFeed`
* ww **Hooks:** `useEffect, useFeed, useState`
* ⚡ **API Route / Server Action Detected**

        ```ts
        // hooks/useFeed.ts
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { getPersonalizedFeed } from "../lib/recommendation";
import { FashionItem } from "./useAura";

export function useFeed(
  currentTemp: number, 
  savedItems: FashionItem[], 
  isPaused: boolean = false,
  injectedItem: FashionItem | null = null
) {
  const [rawItems, setRawItems] = useState<FashionItem[]>([]);
  const [fashionItems, setFashionItems] = useState<FashionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [trendingItems, setTrendingItems] = useState<FashionItem[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [shoppableItems, setShoppableItems] = useState<any[]>([]);

  // 1. 전체 데이터 로드 (서버 API)
  useEffect(() => {
    // 🌟 정지 상태일 때: VIP 아이템이 있으면 그것만 보여주고 종료!
    if (isPaused) {
      if (injectedItem) {
        setFashionItems([injectedItem]);
      }
      return; 
    }

    const fetchItems = async () => {
      try {
        const response = await fetch(`/api/fashion?timestamp=${new Date().getTime()}`, { cache: 'no-store' });
        const data = await response.json();
        setRawItems(data);
      } catch (e) { console.error(e); }
    };
    fetchItems();
  }, [isPaused, injectedItem]); // 👈 의존성 추가

  // 2. 추천 알고리즘 및 합치기 (Merging)
  useEffect(() => {
    // 정지 상태면 계산하지 않음
    if (isPaused) return;
    if (rawItems.length === 0) return;

    // 1. 기본 추천 알고리즘 실행
    let finalItems = getPersonalizedFeed(rawItems, savedItems, currentTemp);

    // 🌟 2. [핵심] VIP 아이템이 있다면 맨 앞에 '자연스럽게' 합치기
    if (injectedItem) {
      // 중복 제거: 리스트에 이미 같은 옷이 있으면 빼버림
      finalItems = finalItems.filter(item => String(item.id) !== String(injectedItem.id));
      // 맨 앞에 VIP 모시기
      finalItems = [injectedItem, ...finalItems];
    }

    setFashionItems(finalItems);
  }, [rawItems, currentTemp, savedItems.length, isPaused, injectedItem]);

  // 3. 글로벌 랭킹 페칭
  const fetchTrendingItems = async () => {
    const { data } = await supabase.from('aura_fashion_items').select('*').order('likes_count', { ascending: false }).limit(50);
    if (data) setTrendingItems(data.map((d: any) => ({ id: d.id, imageUrl: d.image_url, weather: d.weather, temperature: d.temperature, tags: d.tags, uploaderName: d.uploader_name, uploaderIg: d.uploader_ig, likes: d.likes_count || 0 })));
  };

  // 4. 쇼핑 아이템 페칭
  const loadShoppableItems = async (lookId: number) => {
    const { data } = await supabase.from('aura_shoppable_items').select('*').eq('look_id', lookId);
    if (data) setShoppableItems(data);
  };

  // 5. 좋아요 UI 즉각 업데이트용 헬퍼 함수
  const updateFeedLikes = (lookId: string, isLiked: boolean) => {
    setFashionItems(prev => prev.map(item => 
      String(item.id) === lookId ? { ...item, likes: isLiked ? Math.max(0, (item.likes || 0) - 1) : (item.likes || 0) + 1 } : item
    ));
  };

  return { fashionItems, setFashionItems, currentIndex, setCurrentIndex, direction, setDirection, trendingItems, fetchTrendingItems, shoppableItems, loadShoppableItems, updateFeedLikes };
}
        ### 📄 lib/affiliate.ts
        > **Context Summary**
        * wf **Function:** `generateTrackingLink`

        ```ts
        // lib/affiliate.ts

// 🌟 제휴 마케팅사에서 발급받을 매체사(Publisher) ID
// 추후 Vercel 환경 변수(.env)에 등록하여 보안을 유지합니다.
const AFFILIATE_IDS = {
    linkprice_musinsa: process.env.NEXT_PUBLIC_LINKPRICE_ID || "AURA_TEST_ID",
    rakuten_ssense: process.env.NEXT_PUBLIC_RAKUTEN_ID || "AURA_TEST_ID",
  };
  
  /**
   * 💸 AURA Affiliate Router
   * 일반 링크나 검색어를 돈이 되는 '트래킹 링크'로 변환해주는 엔진입니다.
   */
  export function generateTrackingLink(platform: 'musinsa' | 'ssense' | 'farfetch', queryOrUrl: string) {
    switch (platform.toLowerCase()) {
      case 'musinsa':
        // 무신사 검색 결과를 링크프라이스 딥링크로 감싸는 로직 (예시 구조)
        const rawMusinsaUrl = `https://www.musinsa.com/search/musinsa/integration?q=${encodeURIComponent(queryOrUrl)}`;
        // 💡 실제 링크프라이스 가입 후, 제공받는 포맷으로 아래 URL을 교체합니다.
        return `https://click.linkprice.com/click.php?m=musinsa&a=${AFFILIATE_IDS.linkprice_musinsa}&url=${encodeURIComponent(rawMusinsaUrl)}`;
        
      case 'ssense':
        // 센스, 파페치 등 글로벌 부티크 라쿠텐 어필리에이트 로직
        return `https://click.rakuten.com/click.php?id=${AFFILIATE_IDS.rakuten_ssense}&url=${encodeURIComponent(queryOrUrl)}`;
        
      default:
        return queryOrUrl;
    }
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
        ### 📄 lib/constants.ts
        > **Context Summary**
        * (No structural elements detected)

        ```ts
        // lib/constants.ts
export const KOREA_CITIES = [
    { name: 'Seoul', lat: 37.5665, lon: 126.9780 },
    { name: '경기/인천', lat: 37.4563, lon: 126.7052 },
    { name: '부산', lat: 35.1796, lon: 129.0756 },
    { name: '대구', lat: 35.8714, lon: 128.6014 },
    { name: '광주', lat: 35.1595, lon: 126.8526 },
    { name: '대전', lat: 36.3504, lon: 127.3845 },
    { name: '강원', lat: 37.8228, lon: 128.1555 },
    { name: '제주', lat: 33.4996, lon: 126.5312 },
    // 필요하면 더 추가하세요
  ];
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
        ### 📄 services/locale.ts
        > **Context Summary**
        * 🔗 **Imports:** `next/headers`

        ```ts
        // services/locale.ts
'use server';

import {cookies} from 'next/headers';

const COOKIE_NAME = 'NEXT_LOCALE';
const DEFAULT_LOCALE = 'ko';

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || DEFAULT_LOCALE;
}

export async function setUserLocale(locale: string) {
  cookies().set(COOKIE_NAME, locale);
}