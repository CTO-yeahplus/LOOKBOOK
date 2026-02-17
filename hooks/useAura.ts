// hooks/useAura.ts
import { useState } from "react";
import { useAuth } from "./useAuth";
import { useWeather } from "./useWeather";
import { useSocial } from "./useSocial";
import { useFeed } from "./useFeed";

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

  return {
    ...auth,
    ...weather,
    ...social,
    ...feed,
    
    // 덮어씌운 래퍼 함수들 전달
    toggleArchive: toggleArchiveWrapper,
    toggleLike: toggleLikeWrapper,

    // UI 상태 전달
    isLoginModalOpen, setIsLoginModalOpen,
    isModalOpen, setIsModalOpen,
    isDetailOpen, setIsDetailOpen,
    triggerHaptic,

    // (기존 코드 호환용 빈 함수 - 푸시 구현 전까지 에러 방지용)
    subscribeToPush: () => alert("푸시 기능이 분리되었습니다."),
    sendTestPush: () => console.log("푸시 테스트"),
  };
}