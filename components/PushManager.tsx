"use client";

import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { AppTrackingTransparency } from '@capgo/capacitor-app-tracking-transparency'; // 🌟 ATT 플러그인 추가
import { supabase } from '@/lib/supabase';

export default function PushManager() {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    // 1. 푸시 알림 리스너 세팅 (기존과 동일)
    PushNotifications.addListener('registration', async (token) => {
      console.log('🔥 [성공] APNs 기기 토큰 획득:', token.value);
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { error } = await supabase
          .from('aura_device_tokens')
          .upsert({ user_id: session.user.id, token: token.value, platform: 'ios' }, { onConflict: 'token' });
        
        if (error) console.error('🚨 [DB 에러] 토큰 저장 실패:', error);
        else console.log('✅ [DB 성공] 기기 토큰 안전 보관 완료.');
      }
    });

    PushNotifications.addListener('registrationError', (error) => console.error('🚨 등록 실패:', error));
    PushNotifications.addListener('pushNotificationReceived', (n) => console.log('✉️ 알림 도착', n.title));
    PushNotifications.addListener('pushNotificationActionPerformed', (n) => console.log('👆 알림 클릭', n.actionId));

    // =========================================================
    // 🌟 2. [핵심] 로그인 성공 시 권한 팝업 연속(Sequence) 호출
    // =========================================================
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        console.log('🔄 로그인 감지됨! 권한 팝업 시퀀스를 시작합니다.');

        // 🎬 시퀀스 1: ATT (활동 추적) 팝업 먼저 띄우기
        if (Capacitor.getPlatform() === 'ios') {
          console.log('⚡️ ATT: 팝업 띄우기 시도...');
          const attResponse = await AppTrackingTransparency.requestPermission();
          console.log('⚡️ ATT: 최종 상태 ->', attResponse.status);
        }

        // 🎬 시퀀스 2: 유저가 ATT 팝업에 응답하고 나면, 이어서 푸시 알림 팝업 띄우기
        let permStatus = await PushNotifications.checkPermissions();
        if (permStatus.receive === 'prompt') {
          permStatus = await PushNotifications.requestPermissions();
        }
        
        if (permStatus.receive === 'granted') {
          await PushNotifications.register();
        } else {
          console.log('🚨 유저가 푸시 알림을 거절했습니다.');
        }
      }
    });

    return () => {
      PushNotifications.removeAllListeners();
      authListener.subscription.unsubscribe();
    };
  }, []);

  return null;
}