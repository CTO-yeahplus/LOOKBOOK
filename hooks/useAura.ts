// hooks/useAura.ts
import { useState, useEffect, useRef, useMemo } from "react";
import { supabase } from "../lib/supabase"; 
import { getPersonalizedFeed } from "../lib/recommendation"; 

export interface FashionItem {
  id: string | number;
  imageUrl: string;
  weather: string;
  temperature: string;
  tags: string[];
  colors?: string[];
  uploaderName?: string;
  uploaderIg?: string; // 🌟 추가됨
  likes?: number;      // 🌟 추가됨
}

const sounds = {
  sunny: "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3",
  rain: "https://assets.mixkit.co/active_storage/sfx/2391/2391-preview.mp3",
  default: "https://assets.mixkit.co/active_storage/sfx/123/123-preview.mp3",
};

export function useAura() {
  const [user, setUser] = useState<any>(null);

  const [rawItems, setRawItems] = useState<FashionItem[]>([]); 
  const [fashionItems, setFashionItems] = useState<FashionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const [savedItems, setSavedItems] = useState<FashionItem[]>([]);
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [uploadedItems, setUploadedItems] = useState<FashionItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [trendingItems, setTrendingItems] = useState<FashionItem[]>([]); // 🌟 실시간 랭킹 데이터 전용
  
  const [localWeather, setLocalWeather] = useState({temp: 15, city: "Seoul", condition: "URBAN" });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [shoppableItems, setShoppableItems] = useState<any[]>([]);
  const [matchedUsers, setMatchedUsers] = useState<any[]>([]);
  const allTags = savedItems.flatMap(item => (item.tags as string[]) || []);

  const triggerHaptic = (pattern: number | number[] = 50) => {
    if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(pattern);
  };

  // ---------------------------------------------------------
  // 🛒 1. Shop the Vibe 로직: 특정 룩(사진)에 달린 구매 링크 가져오기
  // ---------------------------------------------------------
  const loadShoppableItems = async (lookId: number) => {
    try {
      const { data, error } = await supabase
        .from('aura_shoppable_items')
        .select('*')
        .eq('look_id', lookId);
        
      if (error) throw error;
      setShoppableItems(data || []);
    } catch (error) {
      console.error("커머스 아이템 로드 실패:", error);
    }
  };

  // ---------------------------------------------------------
  // ⚡ 2. Vibe Match 로직: 이제 '영어 키값'으로 정밀 매칭합니다.
  // ---------------------------------------------------------
  const loadMatchedUsers = async (myVibeKey: string, myUserId: string) => {
    try {
      // 🌟 핵심 변경: .eq('vibe_title', myVibeKey) 
      // 이제 DB의 vibe_title 컬럼에는 'MINIMALIST' 같은 키값이 저장되어 있어야 합니다.
      const { data, error } = await supabase
        .from('aura_user_profiles')
        .select('id, display_name, ig_handle, vibe_title, dna_tags')
        .eq('vibe_title', myVibeKey) 
        .neq('id', myUserId) 
        .limit(5);
        
      if (error) throw error;
      
      const formattedUsers = data?.map((user) => ({
        id: user.id,
        name: user.display_name || "MUSE",
        ig: user.ig_handle || "aura_user",
        // 🌟 추후 실제 dna_tags 비교 로직을 여기에 넣으면 매칭률이 더 정확해집니다.
        matchRate: Math.floor(Math.random() * 11) + 85, 
        img: `https://images.unsplash.com/photo-${user.id.includes('1') ? '1506159904225-fbc51df093b5' : '1534528741775-53994a69daeb'}?q=80&w=500&auto=format&fit=crop`
      })) || [];

      setMatchedUsers(formattedUsers);
    } catch (error) {
      console.error("매칭 유저 로드 실패:", error);
    }
  };

  const tagCounts = allTags.reduce((acc: Record<string, number>, tag: string) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>); // 👈 핵심: 초기값에 타입을 강제(Casting)합니다.

  // 🌟 3. AI 스타일 분석 엔진 (My AURA)
  const styleReport = useMemo(() => {
    if (savedItems.length === 0) return null;
    
    const sortedTags = Object.entries(tagCounts)
      .sort(([, a]: any, [, b]: any) => b - a)
      .slice(0, 5);

    // 🌟 1. 바이브 메타데이터 정의 (내부 키, 국문명, 영문명)
    const VIBE_MAP: Record<string, { key: string; ko: string; en: string }> = {
      Minimal: { 
        key: "MINIMALIST", 
        ko: "절제미를 아는 미니멀리스트", 
        en: "THE REFINED MINIMALIST" 
      },
      Street: { 
        key: "STREET_SETTER", 
        ko: "자유로운 스트릿 세터", 
        en: "THE STREET TRENDSETTER" 
      },
      Office: { 
        key: "URBAN_PROFESSIONAL", 
        ko: "지적인 어반 프로페셔널", 
        en: "URBAN PROFESSIONAL" 
      },
      Default: { 
        key: "EXPLORER", 
        ko: "새로운 스타일을 탐험하는 중", 
        en: "STYLE EXPLORER" 
      }
    };

    // 🌟 2. 매칭되는 바이브 추출
    const topTag = sortedTags[0]?.[0];
    const selectedVibe = VIBE_MAP[topTag] || VIBE_MAP.Default;

    return {
      topTags: sortedTags,
      vibeKey: selectedVibe.key,     // 🔍 DB 매칭용 (영어 키값)
      vibeTitleKo: selectedVibe.ko,  // 🇰🇷 UI 출력용 (한국어)
      vibeTitleEn: selectedVibe.en,  // 🇺🇸 UI 출력용 (영어)
      totalSaved: savedItems.length,
      impactScore: likedItems.length * 10 + savedItems.length * 20,
    };
  }, [savedItems, likedItems.length]);

  // 🔥 전 세계 실시간 좋아요 TOP 50 가져오는 함수
  const fetchTrendingItems = async () => {
    try {
      const { data, error } = await supabase
        .from('aura_fashion_items')
        .select('*')
        .order('likes_count', { ascending: false }) // 좋아요 많은 순서대로
        .limit(50); // 상위 50개만

      if (error) throw error;

      if (data) {
        const formatted = data.map((d: any) => ({
          id: d.id,
          imageUrl: d.image_url,
          weather: d.weather,
          temperature: d.temperature,
          tags: d.tags,
          uploaderName: d.uploader_name,
          uploaderIg: d.uploader_ig,
          likes: d.likes_count || 0,
        }));
        setTrendingItems(formatted);
      }
    } catch (error) {
      console.error("랭킹 데이터 로드 실패:", error);
    }
  };


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchSavedLooks(session.user.id);
        fetchUploadedLooks(session.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchSavedLooks(session.user.id);
        fetchUploadedLooks(session.user.id);
      } else {
        setSavedItems([]); 
        setUploadedItems([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchSavedLooks = async (userId: string) => {
    const { data, error } = await supabase
      .from('aura_saved_looks')
      .select('look_id, aura_fashion_items(*)')
      .eq('user_id', userId);
      
    if (!error && data) {
      const looks = data.map((d: any) => ({
        id: d.aura_fashion_items.id,
        imageUrl: d.aura_fashion_items.image_url,
        weather: d.aura_fashion_items.weather,
        temperature: d.aura_fashion_items.temperature,
        tags: d.aura_fashion_items.tags,
        uploaderName: d.aura_fashion_items.uploader_name,
        uploaderIg: d.aura_fashion_items.uploader_ig, 
        likes: d.aura_fashion_items.likes_count || 0, 
      }));
      setSavedItems(looks);
    }
  };

  const fetchUploadedLooks = async (userId: string) => {
    const { data, error } = await supabase
      .from('aura_fashion_items')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
      
    if (!error && data) {
      setUploadedItems(data.map((d: any) => ({
        id: d.id, imageUrl: d.image_url, weather: d.weather, temperature: d.temperature, tags: d.tags,
        uploaderName: d.uploader_name,
        uploaderIg: d.uploader_ig, // 🌟 
        likes: d.likes_count || 0, // 🌟
      })));
    }
  };

  const signIn = async (provider: 'google' | 'github' | 'kakao' | 'twitter') => {
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: { redirectTo: typeof window !== "undefined" ? window.location.origin : "/" }
    });
  };

  const signOut = async () => { await supabase.auth.signOut(); };

  // hooks/useAura.ts 내부에 있는 saveInstagram 함수 수정
  const saveInstagram = async (handle: string) => {
    if (!user) return;
    
    // 1. 유저 메타데이터에 새 아이디 저장
    const { data, error } = await supabase.auth.updateUser({
      data: { instagram: handle }
    });
    
    if (data?.user) {
      setUser(data.user); 
    }
    
    if (error) {
      console.error("아이디 저장 실패:", error);
      return;
    }

    // 🌟 2. 이 유저가 과거에 올린 모든 화보의 'uploader_ig'를 새 아이디로 싹 바꿔줍니다!
    const { error: updateError } = await supabase
      .from('aura_fashion_items')
      .update({ uploader_ig: handle })
      .eq('user_id', user.id);

    if (updateError) {
      console.error("과거 게시물 아이디 업데이트 실패:", updateError);
    }
  };

  // 🌟 1. 아카이브 (저장) 함수 - 완벽 보수 완료
  const toggleArchive = async (lookId: string) => {
    if (!user) return setIsLoginModalOpen(true);

    // ✅ [핵심 1] 무조건 문자로 변환해서 비교! (409 에러의 원인 해결)
    const isAlreadySaved = savedItems.some(item => String(item.id) === String(lookId));
    triggerHaptic(isAlreadySaved ? 30 : [30, 50, 40]);

    // ✅ [핵심 2] Optimistic UI: 서버 응답 기다리지 않고 화면부터 즉각 변경
    if (isAlreadySaved) {
      setSavedItems(prev => prev.filter(item => String(item.id) !== String(lookId)));
    } else {
      const itemToSave = fashionItems.find(item => String(item.id) === String(lookId));
      if (itemToSave) setSavedItems(prev => [...prev, itemToSave]);
    }

    try {
      if (isAlreadySaved) {
        await supabase.from('aura_saved_looks').delete().match({ user_id: user.id, look_id: lookId });
      } else {
        const { error } = await supabase.from('aura_saved_looks').insert([{ user_id: user.id, look_id: lookId }]);
        // ✅ [핵심 3] 중복 에러(PostgreSQL 23505/Conflict)는 쿨하게 무시!
        if (error && error.code !== '23505') throw error;
      }
    } catch (error) {
      console.error("아카이브 DB 업데이트 실패:", error);
    }
  };

  // ✅ [추가] 유저가 로그인하면 DB에서 '좋아요' 내역을 긁어옵니다.
  useEffect(() => {
    if (!user) {
      setLikedItems([]);
      return;
    }

    const fetchLikes = async () => {
      const { data, error } = await supabase
        .from('aura_liked_looks')
        .select('look_id')
        .eq('user_id', user.id);
      
      if (data) {
        setLikedItems(data.map(item => String(item.look_id)));
      }
    };
    fetchLikes();
  }, [user]);

  const toggleLike = async (lookId: string, currentLikes: number) => {
    if (!user) return setIsLoginModalOpen(true);

    const targetId = String(lookId);
    const isLiked = likedItems.includes(targetId);
    
    // 1. 햅틱 및 UI 즉각 반영 (Optimistic UI)
    triggerHaptic([50, 100]);
    setLikedItems(prev => isLiked ? prev.filter(id => id !== targetId) : [...prev, targetId]);
    
    setFashionItems(prev => prev.map(item => 
      String(item.id) === targetId 
        ? { ...item, likes: isLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1 } 
        : item
    ));

    try {
      if (isLiked) {
        // DB 삭제 (좋아요 취소)
        await supabase.from('aura_liked_looks').delete().match({ user_id: user.id, look_id: lookId });
      } else {
        // DB 추가 (좋아요)
        const { error } = await supabase.from('aura_liked_looks').insert([{ user_id: user.id, look_id: lookId }]);
        if (error && error.code !== '23505') throw error; // 중복 에러 무시
      }

      // aura_fashion_items 테이블의 likes_count 수치 동기화
      const finalCount = isLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1;
      await supabase.from('aura_fashion_items').update({ likes_count: finalCount }).eq('id', lookId);

    } catch (error) {
      console.error("좋아요 DB 연동 실패:", error);
    }
  };

  // 🌟 1. Open-Meteo (WMO 기상 코드) -> AURA 패션 바이브 번역기
  const getAuraVibe = (weatherCode: number) => {
    // 0: 맑음
    if (weatherCode === 0) return "SUNNY";
    // 1, 2, 3: 구름 조금, 흐림
    if (weatherCode >= 1 && weatherCode <= 3) return "CHILL";
    // 45, 48: 안개
    if (weatherCode === 45 || weatherCode === 48) return "MIST";
    // 51~67, 80~82: 비, 소나기, 이슬비
    if ((weatherCode >= 51 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82)) return "GLOOMY";
    // 71~77, 85~86: 눈, 싸락눈
    if ((weatherCode >= 71 && weatherCode <= 77) || weatherCode === 85 || weatherCode === 86) return "FROST";
    // 95~99: 뇌우 (천둥번개)
    if (weatherCode >= 95) return "WILD";
    
    return "URBAN"; // 예외 혹은 기본값
  };

  useEffect(() => {
    const fetchWeatherAndData = async () => {
      // 🌟 초기 기본값 세팅
      let currentTemp = 15; 
      let currentCity = "Seoul";
      let currentCondition = "URBAN"; 

      try {
        if ("geolocation" in navigator) {
          const pos = await new Promise<GeolocationPosition>((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`);
          const weatherData = await weatherRes.json();
          
          currentTemp = Math.round(weatherData.current_weather.temperature); 
          currentCity = "Current Location";
          // 🌟 API에서 받아온 숫자 코드를 번역하여 장착합니다.
          currentCondition = getAuraVibe(weatherData.current_weather.weathercode);
        }
      } catch (e) { 
        console.warn("위치 권한 없음. 기본 날씨를 사용합니다."); 
      }
      
      // 🌟 condition이 포함된 완전한 데이터 전달
      setLocalWeather({ temp: currentTemp, city: currentCity, condition: currentCondition });

      try {
        const response = await fetch(`/api/fashion?timestamp=${new Date().getTime()}`, { 
          cache: 'no-store', headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
        });
        const data: FashionItem[] = await response.json();
        setRawItems(data); 
      } catch (error) { 
        console.error("데이터 로드 실패:", error); 
      }
    };
    
    fetchWeatherAndData();
  }, []);

  useEffect(() => {
    if (rawItems.length === 0) return;
    const personalizedData = getPersonalizedFeed(rawItems, savedItems, localWeather?.temp || 15);
    setFashionItems(personalizedData);
  }, [rawItems, localWeather?.temp]); 

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isDetailOpen && fashionItems.length > 0) {
      const weather = fashionItems[currentIndex]?.weather || "";
      let soundUrl = sounds.default;
      if (weather.includes("☀️")) soundUrl = sounds.sunny;
      if (weather.includes("☔️") || weather.includes("🌧")) soundUrl = sounds.rain;

      if (!audioRef.current) { audioRef.current = new Audio(soundUrl); audioRef.current.loop = true; } 
      else { audioRef.current.src = soundUrl; }
      
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        let vol = 0; const fade = setInterval(() => { if (vol < 0.3 && audioRef.current) { vol += 0.05; audioRef.current.volume = vol; } else clearInterval(fade); }, 100);
      }).catch(e => console.log("오디오 자동 재생 제한"));
    } else if (audioRef.current) {
      let vol = audioRef.current.volume;
      const fade = setInterval(() => { if (vol > 0.05 && audioRef.current) { vol -= 0.05; audioRef.current.volume = vol; } else { clearInterval(fade); if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; } } }, 50);
    }
  }, [isDetailOpen, currentIndex, fashionItems]);

  const filteredArchive = useMemo(() => {
    if (!searchQuery) return savedItems;
    const lowerQ = searchQuery.toLowerCase();
    return savedItems.filter(item => {
      const isRain = lowerQ.includes("비") || lowerQ.includes("rain");
      const isSunny = lowerQ.includes("맑") || lowerQ.includes("해") || lowerQ.includes("sun");
      const tempValue = parseInt(item.temperature.replace(/[^0-9.-]+/g, "")) || 20;

      if (isRain && (item.weather.includes("☔️") || item.weather.includes("🌧"))) return true;
      if (isSunny && item.weather.includes("☀️")) return true;
      if (lowerQ.includes("더") && tempValue >= 25) return true;
      if (lowerQ.includes("추") && tempValue <= 10) return true;
      
      return item.tags.some(tag => tag.toLowerCase().includes(lowerQ)) || item.temperature.includes(lowerQ);
    });
  }, [searchQuery, savedItems]);

  const subscribeToPush = async () => {
    if (!user) { alert("알림을 받으려면 먼저 로그인해주세요!"); return setIsLoginModalOpen(true); }
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) return alert("이 브라우저는 푸시 알림을 지원하지 않습니다.");

    try {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') throw new Error("알림 권한이 거부되었습니다.");

      const register = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;

      const publicVapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!;
      const padding = '='.repeat((4 - publicVapidKey.length % 4) % 4);
      const base64 = (publicVapidKey + padding).replace(/-/g, '+').replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) { outputArray[i] = rawData.charCodeAt(i); }

      const subscription = await register.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: outputArray });

      const { error } = await supabase.from('aura_push_subscriptions').upsert({ user_id: user.id, subscription: subscription }, { onConflict: 'user_id' });
      if (error) throw error;
      
      triggerHaptic([50, 100, 50]);
      alert("✅ 모닝 알림 구독이 완료되었습니다!");
    } catch (error) { console.error("푸시 구독 실패:", error); alert("알림 설정에 실패했습니다."); }
  };

  const sendTestPush = async () => {
    if (!user) return;
    try {
      const temp = localWeather?.temp || 15;
      const city = localWeather?.city || "Seoul";
      const weatherIcon = temp > 20 ? "☀️" : "☔️";

      await fetch('/api/push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userId: user.id, 
          title: "AURA 모닝 알림 🌤️", 
          body: `오늘 ${city} ${temp}°C ${weatherIcon}, AURA가 추천하는 당신만의 룩을 확인하세요.` 
        })
      });
    } catch (e) { console.error(e); }
  };

  return {
    user, 
    signIn, signOut,
    login: signIn,     // 🌟 page.tsx에서 aura.login()을 호출해도 정상 작동하도록 연결
    logout: signOut,   // 🌟 page.tsx에서 aura.logout()을 호출해도 정상 작동하도록 연결
    saveInstagram,     // 🌟 프로필 모달에서 전달한 인스타 아이디를 저장하는 함수 노출
    isLoginModalOpen, setIsLoginModalOpen,
    fashionItems, currentIndex, setCurrentIndex, direction, setDirection,
    savedItems, setSavedItems,
    uploadedItems, setUploadedItems, 
    isModalOpen, setIsModalOpen,
    isDetailOpen, setIsDetailOpen,
    searchQuery, setSearchQuery,
    localWeather, filteredArchive, triggerHaptic,
    subscribeToPush, sendTestPush, 
    toggleArchive,
    toggleLike,
    likedItems,
    trendingItems,
    fetchTrendingItems,
    styleReport,
    shoppableItems,
    loadShoppableItems,
    matchedUsers,
    loadMatchedUsers
  };
}