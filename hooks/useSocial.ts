// hooks/useSocial.ts
import { useState, useEffect, useMemo } from "react";
import { supabase } from "../lib/supabase";
import { FashionItem } from "./useAura";

export function useSocial(user: any, onRequireLogin: () => void, triggerHaptic: (pattern: number | number[]) => void) {
  const [savedItems, setSavedItems] = useState<FashionItem[]>([]);
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [uploadedItems, setUploadedItems] = useState<FashionItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [matchedUsers, setMatchedUsers] = useState<any[]>([]);

  // 1. 유저 데이터 동기화
  useEffect(() => {
    if (!user) {
      setSavedItems([]); setUploadedItems([]); setLikedItems([]);
      return;
    }
    const fetchSaved = async () => {
      const { data } = await supabase.from('aura_saved_looks').select('look_id, aura_fashion_items(*)').eq('user_id', user.id);
      if (data) setSavedItems(data.map((d: any) => ({
        id: d.aura_fashion_items.id, imageUrl: d.aura_fashion_items.image_url, weather: d.aura_fashion_items.weather, temperature: d.aura_fashion_items.temperature, tags: d.aura_fashion_items.tags, uploaderName: d.aura_fashion_items.uploader_name, uploaderIg: d.aura_fashion_items.uploader_ig, likes: d.aura_fashion_items.likes_count || 0,
      })));
    };
    const fetchUploaded = async () => {
      const { data } = await supabase.from('aura_fashion_items').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
      if (data) setUploadedItems(data.map((d: any) => ({
        id: d.id, imageUrl: d.image_url, weather: d.weather, temperature: d.temperature, tags: d.tags, uploaderName: d.uploader_name, uploaderIg: d.uploader_ig, likes: d.likes_count || 0,
      })));
    };
    const fetchLikes = async () => {
      const { data } = await supabase.from('aura_liked_looks').select('look_id').eq('user_id', user.id);
      if (data) setLikedItems(data.map(item => String(item.look_id)));
    };
    fetchSaved(); fetchUploaded(); fetchLikes();
  }, [user]);

  // 2. 액션 로직 (Optimistic UI 적용)
  const toggleArchive = async (lookId: string, currentItems: FashionItem[]) => {
    if (!user) return onRequireLogin();
    const isSaved = savedItems.some(item => String(item.id) === String(lookId));
    triggerHaptic(isSaved ? 30 : [30, 50, 40]);

    if (isSaved) setSavedItems(prev => prev.filter(item => String(item.id) !== String(lookId)));
    else {
      const itemToSave = currentItems.find(item => String(item.id) === String(lookId));
      if (itemToSave) setSavedItems(prev => [...prev, itemToSave]);
    }
    try {
      if (isSaved) await supabase.from('aura_saved_looks').delete().match({ user_id: user.id, look_id: lookId });
      else await supabase.from('aura_saved_looks').insert([{ user_id: user.id, look_id: lookId }]);
    } catch (e) { console.error(e); }
  };

  const toggleLike = async (lookId: string, currentLikes: number, updateFeedLikes: (id: string, isLiked: boolean) => void) => {
    if (!user) return onRequireLogin();
    const targetId = String(lookId);
    const isLiked = likedItems.includes(targetId);
    triggerHaptic([50, 100]);
    
    setLikedItems(prev => isLiked ? prev.filter(id => id !== targetId) : [...prev, targetId]);
    updateFeedLikes(targetId, isLiked); // 피드 UI 즉시 업데이트

    try {
      if (isLiked) await supabase.from('aura_liked_looks').delete().match({ user_id: user.id, look_id: lookId });
      else await supabase.from('aura_liked_looks').insert([{ user_id: user.id, look_id: lookId }]);
      await supabase.from('aura_fashion_items').update({ likes_count: isLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1 }).eq('id', lookId);
    } catch (e) { console.error(e); }
  };

  // 3. AI 리포트 및 Vibe Match
  const styleReport = useMemo(() => {
    if (savedItems.length === 0) return null;
    const allTags = savedItems.flatMap(item => (item.tags as string[]) || []);
    const tagCounts = allTags.reduce((acc: Record<string, number>, tag: string) => { acc[tag] = (acc[tag] || 0) + 1; return acc; }, {});
    const sortedTags = Object.entries(tagCounts).sort(([, a]: any, [, b]: any) => b - a).slice(0, 5);

    const VIBE_MAP: Record<string, any> = {
      Minimal: { key: "MINIMALIST", ko: "절제미를 아는 미니멀리스트", en: "THE REFINED MINIMALIST" },
      Street: { key: "STREET_SETTER", ko: "자유로운 스트릿 세터", en: "THE STREET TRENDSETTER" },
      Office: { key: "URBAN_PROFESSIONAL", ko: "지적인 어반 프로페셔널", en: "URBAN PROFESSIONAL" },
      Default: { key: "EXPLORER", ko: "새로운 스타일을 탐험하는 중", en: "STYLE EXPLORER" }
    };
    const selectedVibe = VIBE_MAP[sortedTags[0]?.[0]] || VIBE_MAP.Default;

    return { topTags: sortedTags, vibeKey: selectedVibe.key, vibeTitleKo: selectedVibe.ko, vibeTitleEn: selectedVibe.en, totalSaved: savedItems.length, impactScore: likedItems.length * 10 + savedItems.length * 20 };
  }, [savedItems, likedItems.length]);

  const loadMatchedUsers = async (myVibeKey: string, myUserId: string) => {
    const { data } = await supabase.from('aura_user_profiles').select('id, display_name, ig_handle').eq('vibe_title', myVibeKey).neq('id', myUserId).limit(5);
    if (data) setMatchedUsers(data.map((u) => ({ id: u.id, name: u.display_name || "MUSE", ig: u.ig_handle || "aura_user", matchRate: Math.floor(Math.random() * 11) + 85, img: "https://images.unsplash.com/photo-1506159904225-fbc51df093b5?q=80&w=500&auto=format&fit=crop" })));
  };

  const filteredArchive = useMemo(() => {
    if (!searchQuery) return savedItems;
    const lowerQ = searchQuery.toLowerCase();
    return savedItems.filter(item => item.tags.some(tag => tag.toLowerCase().includes(lowerQ)) || item.temperature.includes(lowerQ));
  }, [searchQuery, savedItems]);

  return { savedItems, setSavedItems, likedItems, uploadedItems, setUploadedItems, toggleArchive, toggleLike, styleReport, matchedUsers, loadMatchedUsers, filteredArchive, searchQuery, setSearchQuery };
}