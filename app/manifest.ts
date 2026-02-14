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