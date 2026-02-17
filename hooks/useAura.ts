// hooks/useAura.ts

import { useState } from "react";
import { useAuth } from "./useAuth";
import { useWeather } from "./useWeather";
import { useSocial } from "./useSocial";
import { useFeed } from "./useFeed";
import { supabase } from "../lib/supabase";

export interface FashionItem {
  id: string | number;
  imageUrl: string;
  weather: string;
  temperature: string;
  tags: string[];
  colors?: string[];
  uploaderName?: string;
  uploaderIg?: string;
  likes?: number;
  // 🌟 [NEW] Phase 2: 스폰서십 전용 데이터
  isSponsored?: boolean;      // 스폰서 카드 여부 (true/false)
  sponsorBrand?: string;      // 브랜드명 (예: GENTLE MONSTER)
  sponsorUrl?: string;        // 아웃링크 (컬렉션 구매 페이지)
  sponsorMessage?: string;    // 브랜드 메시지
}

export function useAura() {
  // 🌟 UI 상태 전용 관리 (모달창 등)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const triggerHaptic = (pattern: number | number[] = 50) => {
    if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(pattern);
  };

  // 🌟 4개의 엔진 가동! (서로 데이터를 주고받습니다)
  const auth = useAuth();
  const weather = useWeather();
  const social = useSocial(auth.user, () => setIsLoginModalOpen(true), triggerHaptic);
  const feed = useFeed(weather.localWeather.temp, social.savedItems);

  // 🌟 기존 UI와 완벽 호환되도록 파라미터 랩핑
  const toggleArchiveWrapper = (lookId: string) => social.toggleArchive(lookId, feed.fashionItems);
  const toggleLikeWrapper = (lookId: string, currentLikes: number) => social.toggleLike(lookId, currentLikes, feed.updateFeedLikes);

  // 🌟 [수정된 실제 웹 푸시 구독 엔진]
  const subscribeToPush = async () => {
    if (!auth.user) return alert("푸시 알림을 받으려면 로그인이 필요합니다.");
    
    // 1. 브라우저 지원 여부 확인
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      return alert("현재 사용 중인 브라우저는 푸시 알림을 지원하지 않습니다.");
    }

    try {
      // 2. 권한 요청
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') return alert("알림 권한이 거부되었습니다.");

      // 🌟 [핵심 수정 1] 무한 대기를 막기 위해 서비스 워커를 명시적으로 먼저 등록합니다!
      const registration = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready; // 등록 완료될 때까지 대기

      // 3. VAPID 키 확인 및 구독
      const applicationServerKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!applicationServerKey) return alert("푸시 서버(VAPID) 설정이 누락되었습니다.");

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      });

      // 🌟 [핵심 수정 2] onConflict 옵션을 명시하여 user_id 기준으로 완벽하게 upsert 되도록 지정!
      const { error } = await supabase
        .from('aura_push_subscriptions')
        .upsert(
          { 
            user_id: auth.user.id, 
            subscription: subscription.toJSON() 
          },
          { onConflict: 'user_id' } // 👈 이 코드가 있어야 고유 키 충돌 에러가 나지 않습니다.
        );

      if (error) {
        console.error("DB Upsert Error:", error);
        throw error;
      }
      
      triggerHaptic([50, 100, 50]);
      alert("푸시 알림이 성공적으로 활성화되었습니다! 🚀");
      
    } catch (error) {
      console.error("Push Subscription Error:", error);
      alert("알림 설정 중 오류가 발생했습니다. 네트워크 상태를 확인해주세요.");
    }
  };

  return {
    ...auth,
    ...weather,
    ...social,
    ...feed,
    
    toggleArchive: toggleArchiveWrapper,
    toggleLike: toggleLikeWrapper,

    isLoginModalOpen, setIsLoginModalOpen,
    isModalOpen, setIsModalOpen,
    isDetailOpen, setIsDetailOpen,
    triggerHaptic,

    // 🌟 [수정] 방금 만든 진짜 엔진을 연결해 줍니다!
    subscribeToPush: subscribeToPush, 
    sendTestPush: () => console.log("푸시 테스트"),
  };
}