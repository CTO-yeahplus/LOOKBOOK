// components/SplashScreenManager.tsx
'use client'; // 이 부품만 클라이언트(브라우저/앱)에서 돌아가도록 격리합니다.

import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';

export default function SplashScreenManager() {
  useEffect(() => {
    // 📱 현재 기기가 네이티브 앱(아이폰/안드로이드)일 때만 작동
    if (Capacitor.isNativePlatform()) {
      // 렌더링이 끝나고 0.5초 뒤에 스플래시 막을 부드럽게 걷어냅니다.
      setTimeout(async () => {
        await SplashScreen.hide();
      }, 500);
    }
  }, []);

  // 화면에는 아무것도 그리지 않는 '투명한' 컴포넌트입니다.
  return null;
}