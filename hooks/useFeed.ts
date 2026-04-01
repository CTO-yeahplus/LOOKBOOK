// hooks/useFeed.ts
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { getPersonalizedFeed } from "../lib/recommendation";
import { FashionItem } from "./useAura";
import { getApiUrl } from "@/utils/api";

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
        // 1. 주머니(localStorage) 캐시 로드 (오프라인의 생명줄)
        const cachedData = localStorage.getItem('aura_feed_cache');
        if (cachedData) {
          setRawItems(JSON.parse(cachedData));
        }
    
        // 2. 뒤에서 조용히 최신 데이터 호출 시도 fetch(getApiUrl('/api/fashion'))
        //const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fashion`, {
        const response = await fetch(getApiUrl('/api/fashion'), { 
          //next: { revalidate: 3600 },
          signal: AbortSignal.timeout(5000) // 🌟 [핵심] 5초 안에 응답 안 오면 인터넷 끊긴 걸로 간주하고 바로 포기!
        });
        
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('aura_feed_cache', JSON.stringify(data));
          setRawItems(data);
        } else {
          const errorText = await response.text();
          throw new Error(`[${response.status}] 서버 응답 오류: ${errorText}`);
        }
      } catch (e) { 
        console.warn("오프라인 상태이거나 네트워크가 불안정합니다. 캐시된 데이터를 유지합니다.", e);
        // 🌟 [UX 디테일] 만약 캐시된 데이터마저 없다면? (앱 처음 켰는데 인터넷 없을 때)
        if (!localStorage.getItem('aura_feed_cache')) {
          alert("네트워크 연결이 불안정합니다. 연결 회복 후 다시 시도해주세요.");
          // 추후 alert 대신 우아한 Toast UI로 변경하시면 완벽합니다.
        }
      }
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

  // 3. 글로벌 랭킹 페칭 (데이터 누락 복구 및 캐싱 최적화)
  const fetchTrendingItems = async () => {
    // 🌟 [최적화 1] 이미 랭킹 데이터를 한 번 불러왔다면, 다시 서버를 찌르지 않고 함수를 종료합니다! (불필요한 과금/부하 완벽 차단)
    // (만약 trendingItems 상태 변수 이름이 다르다면 그 이름에 맞춰주세요)
    if (trendingItems && trendingItems.length > 0) return; 

    const { data, error } = await supabase
      .from('aura_fashion_items')
      .select('*')
      .order('likes_count', { ascending: false })
      .limit(50);

    if (error) {
      console.error("Explore Load Error:", error);
      return;
    }

    if (data) {
      setTrendingItems(data.map((d: any) => ({ 
        id: d.id, 
        imageUrl: d.image_url, 
        weather: d.weather, 
        temperature: d.temperature, 
        tags: d.tags, 
        uploaderName: d.uploader_name, 
        uploaderIg: d.uploader_ig, 
        likes: d.likes_count || 0,
        
        // 🌟 [핵심 해결] 큐레이터 노트와 컬러칩 누락 복구!
        curatorNote: d.curator_note, 
        colors: d.colors 
      })));
    }
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