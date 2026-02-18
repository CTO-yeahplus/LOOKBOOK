// components/LocationSelector.tsx
import { useState, useEffect } from "react";
import { Search, MapPin, Loader2, Check } from "lucide-react";
import { supabase } from "@/lib/supabase"; // 경로에 맞게 수정해주세요
import { User } from "@supabase/supabase-js";

interface LocationSelectorProps {
  user: User | null;
  locale?: string; // 검색 언어 설정용
}

interface SearchResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

export default function LocationSelector({ user, locale = 'en' }: LocationSelectorProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. 내 현재 설정 불러오기
  useEffect(() => {
    if (!user) return;
    const loadMyCity = async () => {
      const { data } = await supabase
        .from('aura_push_subscriptions')
        .select('location_name')
        .eq('user_id', user.id)
        .single();
      
      if (data?.location_name) {
        setCurrentLocation(data.location_name);
      }
    };
    loadMyCity();
  }, [user]);

  // 2. OpenStreetMap 검색 (Nominatim API)
  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsSearching(true);
    setResults([]);

    try {
      // API 호출 (언어 설정 적용)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&accept-language=${locale}&limit=5`
      );
      const data = await response.json();
      setResults(data);
      setIsMenuOpen(true);
    } catch (error) {
      console.error("Location search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  // 3. 위치 선택 및 저장
  const handleSelect = async (place: SearchResult) => {
    if (!user) return;
    
    // 표시용 이름 간단하게 정리 (앞부분만 사용)
    const simpleName = place.display_name.split(',')[0];
    
    try {
      const { error } = await supabase
        .from('aura_push_subscriptions')
        .update({
          location_name: simpleName,
          latitude: parseFloat(place.lat),
          longitude: parseFloat(place.lon)
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setCurrentLocation(simpleName);
      setQuery("");
      setResults([]);
      setIsMenuOpen(false);
      
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to save location.");
    }
  };

  return (
    <div className="relative">
      {/* 현재 설정된 위치 표시 */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-black/60" />
          <span className="text-black/60 tracking-widest uppercase text-[10px]">LOCAL_WEATHER</span>
        </div>
        <span className="text-[10px] font-bold text-black truncate max-w-[120px]">
          {currentLocation || "NOT SET"}
        </span>
      </div>

      {/* 검색 입력창 */}
      <div className="flex items-center bg-transparent border-b border-black/30 pb-1 relative">
        <input 
          type="text" 
          placeholder="Search City (e.g. Paris)" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="bg-transparent outline-none w-full font-bold text-black placeholder:text-black/20 text-xs uppercase"
        />
        <button 
          onClick={handleSearch}
          disabled={isSearching}
          className="text-black hover:opacity-70 transition-opacity"
        >
          {isSearching ? <Loader2 className="w-3 h-3 animate-spin" /> : <Search className="w-3 h-3" />}
        </button>
      </div>

      {/* 검색 결과 드롭다운 (영수증 스타일) */}
      {isMenuOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#F8F5F0] border border-black shadow-xl z-50 max-h-40 overflow-y-auto">
          {results.map((place) => (
            <button
              key={place.place_id}
              onClick={() => handleSelect(place)}
              className="w-full text-left px-2 py-2 text-[10px] font-mono border-b border-dashed border-black/10 hover:bg-black hover:text-white transition-colors truncate"
            >
              {place.display_name}
            </button>
          ))}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-1 text-[8px] uppercase hover:bg-black/5"
          >
            [CLOSE]
          </button>
        </div>
      )}
      
      {/* 검색 결과 없음 */}
      {isMenuOpen && results.length === 0 && !isSearching && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#F8F5F0] border border-black p-2 text-[10px] text-center">
          NO RESULTS
        </div>
      )}
    </div>
  );
}