// services/locale.ts

// 🚨 'use server'와 next/headers 삭제 완료 (앱 환경 호환)

const COOKIE_NAME = 'NEXT_LOCALE';
const DEFAULT_LOCALE = 'ko';

export async function getUserLocale() {
  // 1. Next.js가 빌드할 때(서버 환경)는 가짜 기본값을 던져서 에러 없이 통과시킵니다.
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }
  
  // 2. 실제 유저의 폰(앱)에서 켜졌을 때는 폰의 로컬 저장소에서 언어를 꺼내옵니다.
  return localStorage.getItem(COOKIE_NAME) || DEFAULT_LOCALE;
}

export async function setUserLocale(locale: string) {
  if (typeof window !== 'undefined') {
    // 폰 내부의 영구 저장소에 언어 설정을 저장합니다.
    localStorage.setItem(COOKIE_NAME, locale);
    
    // 혹시 웹 브라우저 호환성을 타는 라이브러리를 위해 클라이언트 쿠키에도 심어둡니다.
    document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000`;
  }
}