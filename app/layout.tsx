import type { Metadata } from "next";
import "./globals.css";

// 🌟 AURA 브랜딩 적용
export const metadata: Metadata = {
  title: "AURA | Your Spatial AI Stylist",
  description: "현재 날씨와 당신의 무드에 완벽하게 동기화되는 나만의 AI 룩북",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
