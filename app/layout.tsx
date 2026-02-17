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
