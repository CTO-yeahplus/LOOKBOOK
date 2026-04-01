import { Capacitor } from '@capacitor/core';

export const getApiUrl = (endpoint: string) => {
  // 1. 서버 사이드 렌더링(SSR) 중일 때
  if (typeof window === 'undefined') {
    return `https://auraootd.com${endpoint}`;
  }
  
  // 2. iOS/Android 네이티브 앱 내부에서 실행 중일 때 (절대 경로 필수)
  if (Capacitor.isNativePlatform()) {
    return `https://auraootd.com${endpoint}`;
  }
  
  // 3. 웹 브라우저(어드민 등)에서 실행 중일 때 (CORS 방지용 상대 경로)
  return endpoint;
};