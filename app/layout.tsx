// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

// 🌟 방금 만든 스플래시 매니저 부품을 가져옵니다.
import SplashScreenManager from "@/components/SplashScreenManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Aura. | AI-Powered Ambient Lookbook',
  description: '검색창을 없앴습니다. 지금 당신이 있는 곳의 날씨와 취향에 완벽히 동기화된 룩을 스와이프하세요.',
  openGraph: {
    title: 'Aura. | 당신의 바이브를 깨우는 AI 룩북',
    description: '날씨와 패션 DNA가 교차하는 지점. 지금 바로 AURA를 경험하세요.',
    url: 'https://auraootd.com', 
    siteName: 'Aura.',
    images: [
      {
        url: '/images/aura_brand.png', 
        width: 1200,
        height: 630,
        alt: 'Aura Brand Official',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: '/images/icon_192.png',
    apple: '/images/icon_512.png', 
  },
  manifest: '/manifest.json', 
};

export const viewport: Viewport = {
  themeColor: "#1c1c1e",
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
        {/* 🌟 여기에 투명한 스플래시 매니저를 달아줍니다! (UI에는 안 보이지만 뒤에서 일합니다) */}
        <SplashScreenManager />
        
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}