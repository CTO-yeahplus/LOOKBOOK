import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('import('next').NextConfig')} */
const nextConfig = {
  // 🌟 [추가 1] 모바일 앱(Capacitor) 껍데기에 담기 위해 HTML/JS/CSS 정적 파일로 강제 추출합니다.
  output: 'export', 
  
  images: {
    // 기존 설정 유지 (외부 도메인 이미지 허용)
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
    // 🌟 [추가 2] 정적 추출 환경(앱 내부)에서는 Next.js 고유의 이미지 최적화 서버가 작동하지 않으므로, 에러 방지를 위해 꺼줍니다.
    unoptimized: true, 
  },
};

export default withNextIntl(nextConfig);