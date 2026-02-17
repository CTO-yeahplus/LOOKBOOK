import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // 외부 이미지(Unsplash 등)를 사용하기 위한 도메인 허용 설정
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: '*.supabase.co', // 본인의 Supabase 주소에 맞춰 최적화
        },
      ],
    },
  };
  
  export default withNextIntl(nextConfig);