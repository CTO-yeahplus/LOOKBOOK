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
  const [uploadedItems, setUploadedItems] = useState<FashionItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [localWeather, setLocalWeather] = useState<{ temp: number; city: string } | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const triggerHaptic = (pattern: number | number[] = 50) => {
    if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(pattern);
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

  useEffect(() => {
    const fetchWeatherAndData = async () => {
      let currentTemp = 15; let currentCity = "Seoul";

      try {
        if ("geolocation" in navigator) {
          const pos = await new Promise<GeolocationPosition>((res, rej) => navigator.geolocation.getCurrentPosition(res, rej));
          const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&current_weather=true`);
          const weatherData = await weatherRes.json();
          currentTemp = weatherData.current_weather.temperature; currentCity = "Current Location";
        }
      } catch (e) { console.warn("위치 권한 없음. 기본 날씨를 사용합니다."); }
      
      setLocalWeather({ temp: currentTemp, city: currentCity });

      try {
        const response = await fetch(`/api/fashion?timestamp=${new Date().getTime()}`, { 
          cache: 'no-store', headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
        });
        const data: FashionItem[] = await response.json();
        setRawItems(data); 
      } catch (error) { console.error("데이터 로드 실패:", error); }
    };
    fetchWeatherAndData();
  }, []);

  useEffect(() => {
    if (rawItems.length === 0) return;
    const personalizedData = getPersonalizedFeed(rawItems, savedItems, localWeather?.temp || 15);
    setFashionItems(personalizedData);
  }, [rawItems, savedItems.length, localWeather?.temp]); 

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
    subscribeToPush, sendTestPush
  };
}