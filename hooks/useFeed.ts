// hooks/useFeed.ts
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { getPersonalizedFeed } from "../lib/recommendation";
import { FashionItem } from "./useAura";

export function useFeed(currentTemp: number, savedItems: FashionItem[]) {
  const [rawItems, setRawItems] = useState<FashionItem[]>([]);
  const [fashionItems, setFashionItems] = useState<FashionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [trendingItems, setTrendingItems] = useState<FashionItem[]>([]);
  const [shoppableItems, setShoppableItems] = useState<any[]>([]);

  // 1. 전체 데이터 로드
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`/api/fashion?timestamp=${new Date().getTime()}`, { cache: 'no-store' });
        const data = await response.json();
        setRawItems(data);
      } catch (e) { console.error(e); }
    };
    fetchItems();
  }, []);

  // 2. 추천 알고리즘 적용 (온도나 저장한 룩이 바뀔 때마다 섞어줌)
  useEffect(() => {
    if (rawItems.length === 0) return;
    setFashionItems(getPersonalizedFeed(rawItems, savedItems, currentTemp));
  }, [rawItems, currentTemp, savedItems.length]); // 🌟 의존성 최적화

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

  return { fashionItems, currentIndex, setCurrentIndex, direction, setDirection, trendingItems, fetchTrendingItems, shoppableItems, loadShoppableItems, updateFeedLikes };
}