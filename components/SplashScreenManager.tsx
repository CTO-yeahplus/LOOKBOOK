"use client";

import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';

export default function SplashScreenManager() {
  useEffect(() => {
    const hideSplash = async () => {
      // 네이티브 앱일 때만 스플래시 화면을 숨깁니다.
      if (Capacitor.isNativePlatform()) {
        await SplashScreen.hide();
        console.log('⚡️ 스플래시 화면 숨김 완료');
      }
    };

    hideSplash();
  }, []);

  return null;
}