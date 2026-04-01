import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🌟 [핵심 수술] Vercel 환경에서는 서버(undefined)로 작동하여 /api 폴더를 살리고,
  // 내 맥북(TestFlight 앱 빌드용)에서는 정적 파일(export)로 작동하도록 지능형 분기!
  output: process.env.VERCEL ? undefined : 'export', 
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
    // 🌟 [유지] Vercel이든 앱이든 이미지 최적화 끄기 (Capacitor와 호환성을 위해 유지)
    unoptimized: true, 
  },
};

export default withNextIntl(nextConfig);