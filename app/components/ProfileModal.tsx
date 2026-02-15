// components/ProfileModal.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LogOut, Share2, Volume2, VolumeX, Instagram, Check } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { FashionItem } from "../../hooks/useAura";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onLogout: () => void;
  uploadedCount: number;
  bestLook?: FashionItem;
  onSaveInstagram: (handle: string) => void; // 🌟 추가!
}

export default function ProfileModal({ isOpen, onClose, user, onLogout, uploadedCount, bestLook, onSaveInstagram }: ProfileModalProps) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isIgSaved, setIsIgSaved] = useState(false); // 🌟 저장 완료 피드백 상태
  
  // 🌟 인스타그램 핸들 상태 관리 및 공유 피드백 상태
  const [igHandle, setIgHandle] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // 트렌드세터(ELITE) 판별 기준
  const isElite = uploadedCount >= 5; 

  // 🌟 모달이 열릴 때 DB에 저장된 인스타 아이디가 있으면 불러오기
  useEffect(() => {
    if (user?.user_metadata?.instagram) {
      setIgHandle(user.user_metadata.instagram);
    }
  }, [user]);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => setIsMuted(true));
      setIsMuted(false);
    } else if (!isOpen && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isOpen]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) audioRef.current.play();
    else audioRef.current.pause();
    setIsMuted(!isMuted);
  };

  // 🌟 PUBLISH(공유) 버튼 로직
  const handlePublish = async () => {
    const shareData = {
      title: 'AURA Editorial',
      text: `Check out ${user?.email?.split('@')[0]}'s AURA Archive.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData); // 모바일 네이티브 공유 창 호출
      } else {
        await navigator.clipboard.writeText(window.location.href); // PC용 클립보드 복사
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (error) {
      console.log('Share failed:', error);
    }
  };

  if (!user) return null;

  const nickname = user.email ? user.email.split('@')[0].toLowerCase() : 'aura_user';
  const today = new Date();
  const dateString = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm" />
          
          <motion.div initial={{ opacity: 0, y: 50, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: 50, rotate: 2 }} transition={{ type: "spring", damping: 20 }} className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            
            <div className="relative w-full max-w-sm bg-[#EBE6DD] text-black shadow-2xl flex flex-col pointer-events-auto overflow-hidden rounded-sm">
              
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-multiply"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
              />

              <audio ref={audioRef} loop src="/ambient.mp3" />

              <div className="absolute top-4 right-4 flex items-center gap-2 z-50">
                <button onClick={toggleMute} className="p-2 rounded-full hover:bg-black/10 transition-colors">
                  {isMuted ? <VolumeX className="w-5 h-5 text-black" /> : <Volume2 className="w-5 h-5 text-black" />}
                </button>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-black/10 transition-colors">
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              <div className="pt-10 px-6 pb-2 border-b-2 border-black relative">
                <h1 className="text-6xl font-serif italic font-black tracking-tighter text-black uppercase">Aura.</h1>
                <p className="font-mono text-[10px] tracking-[0.2em] mt-2 uppercase text-black/60">Editorial Issue 02 — {dateString}</p>
                
                <div className="absolute top-8 right-8 transform rotate-[15deg] border-[3px] border-red-600 text-red-600 px-3 py-1 text-2xl font-black tracking-widest opacity-80 mix-blend-multiply pointer-events-none">
                  {isElite ? 'CULT\nSTATUS' : 'NEW\nFACE'}
                </div>
              </div>

              <div className="px-6 py-8 relative">
                <div className="relative w-full aspect-[4/5] bg-zinc-300 transform -rotate-2 shadow-xl border-[10px] border-white">
                  {bestLook ? (
                    <img src={bestLook.imageUrl} alt="Editorial" className="w-full h-full object-cover grayscale-[0.3] contrast-110 sepia-[0.2]" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-serif text-4xl text-black/20 italic bg-[#d9d4cb]">No Archive</div>
                  )}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-md transform rotate-3 shadow-sm border border-black/5 mix-blend-screen" />
                </div>
                
                <h2 className="absolute bottom-4 -left-2 text-6xl font-serif italic text-white mix-blend-difference font-black drop-shadow-md z-10 pointer-events-none">
                  {nickname}
                </h2>
              </div>

              <div className="px-6 py-5 bg-[#F8F5F0] border-t border-dashed border-black/30 font-mono text-xs shadow-inner">
                <p className="text-center mb-4 font-bold tracking-widest uppercase">*** Archive Receipt ***</p>
                
                <div className="flex justify-between mb-1.5 border-b border-black/10 pb-1.5">
                  <span className="text-black/60">CURATOR</span>
                  <span className="font-bold">{user.email?.split('@')[0]}</span>
                </div>
                <div className="flex justify-between mb-1.5 border-b border-black/10 pb-1.5">
                  <span className="text-black/60">LOOKS_UPLOADED</span>
                  <span className="font-bold">{String(uploadedCount).padStart(3, '0')}</span>
                </div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-black/60">AURA_IMPACT</span>
                  <span className="font-bold">99.9%</span>
                </div>

                {/* 🌟 트렌드세터(ELITE) 전용 인스타그램 연동 폼 */}
                {isElite && (
                  <div className="mt-3 pt-3 border-t border-dotted border-black/30">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1">
                        <Instagram className="w-3 h-3 text-black/60" />
                        <span className="text-black/60 tracking-widest uppercase">IG_LINK [UNLOCKED]</span>
                      </div>
                      <span className="text-[8px] text-black/40 tracking-widest italic">PRESS ENTER</span>
                    </div>
                    <div className="flex items-center bg-transparent border-b border-black/30 pb-1">
                      <span className="font-bold text-black mr-1">@</span>
                      <input 
                        type="text" 
                        placeholder="your_instagram" 
                        value={igHandle}
                        onChange={(e) => setIgHandle(e.target.value)}
                        // 🌟 엔터 키를 누르면 자동 저장
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            onSaveInstagram(igHandle);
                            setIsIgSaved(true);
                            setTimeout(() => setIsIgSaved(false), 2000);
                          }
                        }}
                        className="bg-transparent outline-none w-full font-bold text-black placeholder:text-black/20"
                      />
                      {/* 🌟 수동 저장 버튼 */}
                      <button 
                        onClick={() => {
                          onSaveInstagram(igHandle);
                          setIsIgSaved(true);
                          setTimeout(() => setIsIgSaved(false), 2000);
                        }}
                        className={`text-[10px] font-bold tracking-widest transition-colors ${isIgSaved ? 'text-green-600' : 'text-black hover:text-red-600'}`}
                      >
                        {isIgSaved ? '[SAVED]' : '[SAVE]'}
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="my-4 border-t border-dotted border-black/30" />
                
                <div className="flex justify-center gap-[2px] h-8 mb-6 opacity-80 mix-blend-multiply">
                  {[...Array(35)].map((_, i) => (
                    <div key={i} className="bg-black" style={{ width: (Math.random() * 3 + 1) + 'px' }} />
                  ))}
                </div>

                <div className="flex gap-2 font-sans">
                  {/* 🌟 PUBLISH 버튼에 이벤트 연결 */}
                  <button onClick={handlePublish} className="flex-1 py-3.5 bg-black text-white font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors active:scale-95">
                    {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />} 
                    {isCopied ? 'COPIED!' : 'PUBLISH'}
                  </button>
                  <button onClick={onLogout} className="px-5 py-3.5 border border-black text-black font-bold flex justify-center items-center hover:bg-black/5 transition-colors active:scale-95">
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}