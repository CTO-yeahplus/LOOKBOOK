// hooks/useFeed.ts
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { getPersonalizedFeed } from "../lib/recommendation";
import { FashionItem } from "./useAura";

export function useFeed(
  currentTemp: number, 
  savedItems: FashionItem[], 
  isPaused: boolean = false,
  injectedItem: FashionItem | null = null
) {
  const [rawItems, setRawItems] = useState<FashionItem[]>([]);
  const [fashionItems, setFashionItems] = useState<FashionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [trendingItems, setTrendingItems] = useState<FashionItem[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [shoppableItems, setShoppableItems] = useState<any[]>([]);

  // 1. 전체 데이터 로드 (서버 API)
  useEffect(() => {
    // 🌟 정지 상태일 때: VIP 아이템이 있으면 그것만 보여주고 종료!
    if (isPaused) {
      if (injectedItem) {
        setFashionItems([injectedItem]);
      }
      return; 
    }

    const fetchItems = async () => {
      try {
        const response = await fetch(`/api/fashion?timestamp=${new Date().getTime()}`, { cache: 'no-store' });
        const data = await response.json();
        setRawItems(data);
      } catch (e) { console.error(e); }
    };
    fetchItems();
  }, [isPaused, injectedItem]); // 👈 의존성 추가

  // 2. 추천 알고리즘 및 합치기 (Merging)
  useEffect(() => {
    // 정지 상태면 계산하지 않음
    if (isPaused) return;
    if (rawItems.length === 0) return;

    // 1. 기본 추천 알고리즘 실행
    let finalItems = getPersonalizedFeed(rawItems, savedItems, currentTemp);

    // 🌟 2. [핵심] VIP 아이템이 있다면 맨 앞에 '자연스럽게' 합치기
    if (injectedItem) {
      // 중복 제거: 리스트에 이미 같은 옷이 있으면 빼버림
      finalItems = finalItems.filter(item => String(item.id) !== String(injectedItem.id));
      // 맨 앞에 VIP 모시기
      finalItems = [injectedItem, ...finalItems];
    }

    setFashionItems(finalItems);
  }, [rawItems, currentTemp, savedItems.length, isPaused, injectedItem]);

  // 3. 글로벌 랭킹 페칭
  const fetchTrendingItems = async () => {
    const { data } = await supabase.from('aura_fashion_items').select('*').order('likes_count', { ascending: false }).limit(50);
    if (data) setTrendingItems(data.map((d: any) => ({ id: d.id, imageUrl: d.image_url, weather: d.weather, temperature: d.temperature, tags: d.tags, uploaderName: d.uploader_name, uploaderIg: d.uploader_ig, likes: d.likes_count || 0 })));
  };

  // 4. 쇼핑 아이템 페칭
  const loadShoppableItems = async (lookId: number) => {
    const { data } = await supabase.from('aura_shoppable_items').select('*').eq('look_id', lookId);
    if (data) setShoppableItems(data);
  };

  // 5. 좋아요 UI 즉각 업데이트용 헬퍼 함수
  const updateFeedLikes = (lookId: string, isLiked: boolean) => {
    setFashionItems(prev => prev.map(item => 
      String(item.id) === lookId ? { ...item, likes: isLiked ? Math.max(0, (item.likes || 0) - 1) : (item.likes || 0) + 1 } : item
    ));
  };

  return { fashionItems, setFashionItems, currentIndex, setCurrentIndex, direction, setDirection, trendingItems, fetchTrendingItems, shoppableItems, loadShoppableItems, updateFeedLikes };
}