// components/ProfileModal.tsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LogOut, Share2, Volume2, VolumeX, Sparkles, Instagram, Check, Link, Languages, Download, Loader2 } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { FashionItem } from "../../hooks/useAura";
import { useTranslations, useLocale } from 'next-intl';
import LocationSelector from "./LocationSelector"; 
import { toPng } from "html-to-image";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onLogout: () => void;
  uploadedCount: number;
  bestLook?: FashionItem;
  onSaveInstagram: (handle: string) => Promise<void> | void; 
  onOpenReport: () => void;
}

export default function ProfileModal({ isOpen, onClose, user, onLogout, uploadedCount, bestLook, onSaveInstagram, onOpenReport }: ProfileModalProps) {
  const t = useTranslations('Profile');
  const locale = useLocale();

  // 🌟 캡처 영역 Ref
  const cardRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isIgSaved, setIsIgSaved] = useState(false); 
  
  const [igHandle, setIgHandle] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false); 

  const isElite = uploadedCount >= 5; 
  const nickname = user?.email ? user.email.split('@')[0].toLowerCase() : 'aura_user';
  const today = new Date();
  const dateString = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

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

  // 🌟 이미지 다운로드 함수 (스크롤 전체 영역 캡처 수정)
  const handleDownload = async () => {
    const element = cardRef.current;
    if (!element || isProcessing) return;
    setIsProcessing(true);

    try {
      // 렌더링 안정화를 위한 짧은 대기
      await new Promise(resolve => setTimeout(resolve, 100));

      // 🌟 핵심: 스크롤된 전체 높이와 너비를 계산하여 설정
      const dataUrl = await toPng(element, { 
        quality: 0.95, 
        pixelRatio: 2, 
        cacheBust: true,
        skipAutoScale: true,
        // 현재 보이는 영역이 아닌 전체 스크롤 영역의 크기를 지정
        width: element.scrollWidth,
        height: element.scrollHeight,
        style: {
           // 캡처 시에는 스크롤바를 숨기고 전체 내용을 다 보여주도록 스타일 강제 적용
           overflow: 'visible',
           maxHeight: 'none',
           // 메인 컨테이너의 배경색을 적용하여 투명하지 않게 함
           backgroundColor: '#EBE6DD',
        }
      });

      const link = document.createElement('a');
      link.download = `AURA_PROFILE_${nickname}_${dateString.replace(/\./g, '')}.png`;
      link.href = dataUrl;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) { 
      console.error("Profile image generation failed:", err);
      alert("이미지 저장에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally { 
      setIsProcessing(false); 
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) audioRef.current.play();
    else audioRef.current.pause();
    setIsMuted(!isMuted);
  };

  const toggleLanguage = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000;`;
    window.location.reload(); 
  };

  const handleSaveId = async () => {
    if (!igHandle.trim() || isSaving) return;
    setIsSaving(true);
    const cleanHandle = igHandle.replace('@', '').trim();
    
    await onSaveInstagram(cleanHandle);
    
    setIsSaving(false);
    setIsIgSaved(true);
    setTimeout(() => setIsIgSaved(false), 2000);
  };

  const getShowcaseUrl = () => {
    const targetId = igHandle ? igHandle.replace('@', '').trim() : nickname;
    return `${window.location.origin}/@${targetId}`;
  };

  const handlePublish = async () => {
    const shareData = {
      title: 'AURA Editorial',
      text: `Check out my AURA Archive.`,
      url: getShowcaseUrl(),
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        handleCopyLink();
      }
    } catch (error) {
      console.log('Share failed:', error);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShowcaseUrl());
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.log('Copy failed:', error);
      alert(`Copy this URL:\n${getShowcaseUrl()}`);
    }
  };

  if (!user) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm" />
          
          <motion.div initial={{ opacity: 0, y: 50, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: 50, rotate: 2 }} transition={{ type: "spring", damping: 20 }} className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            
            {/* 메인 컨테이너 (여기서 ref 제거됨) */}
            <div className="relative w-full max-w-sm bg-[#EBE6DD] text-black shadow-2xl flex flex-col pointer-events-auto overflow-hidden rounded-sm max-h-[85vh]">
              
              <audio ref={audioRef} loop src="/ambient.mp3" />

              {/* 상단 고정 버튼들 (캡처 제외) */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-50">
                <button onClick={toggleMute} className="p-2 rounded-full hover:bg-black/10 transition-colors bg-[#EBE6DD]/50 backdrop-blur-sm">
                  {isMuted ? <VolumeX className="w-5 h-5 text-black" /> : <Volume2 className="w-5 h-5 text-black" />}
                </button>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-black/10 transition-colors bg-[#EBE6DD]/50 backdrop-blur-sm">
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* 🌟 스크롤 영역 (캡처 대상: 여기에 ref 연결) */}
              <div ref={cardRef} className="overflow-y-auto flex-1 z-10 custom-scrollbar relative">
                
                {/* 🌟 배경 노이즈 (캡처 영역 내부로 이동) */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-multiply z-0"
                  style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
                />

                {/* 헤더 */}
                <div className="pt-10 px-6 pb-2 border-b-2 border-black relative shrink-0 z-10">
                  <h1 className="text-6xl font-serif italic font-black tracking-tighter text-black uppercase">Aura.</h1>
                  <p className="font-mono text-[10px] tracking-[0.2em] mt-2 uppercase text-black/60">{t('editorial_issue')} — {dateString}</p>
                  
                  <div className="absolute top-8 right-8 transform rotate-[15deg] border-[3px] border-red-600 text-red-600 px-3 py-1 text-2xl font-black tracking-widest opacity-80 mix-blend-multiply pointer-events-none">
                    {isElite ? 'CULT\nSTATUS' : 'NEW\nFACE'}
                  </div>
                </div>

                {/* 이미지 */}
                <div className="px-6 py-8 relative shrink-0 z-10">
                  <div className="relative w-full aspect-[4/5] bg-zinc-300 transform -rotate-2 shadow-xl border-[10px] border-white">
                    {bestLook ? (
                      <img src={bestLook.imageUrl} alt="Editorial" className="w-full h-full object-cover grayscale-[0.3] contrast-110 sepia-[0.2]" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-serif text-4xl text-black/20 italic bg-[#d9d4cb]">{t('no_archive')}</div>
                    )}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/40 backdrop-blur-md transform rotate-3 shadow-sm border border-black/5 mix-blend-screen" />
                  </div>
                  
                  <h2 className="absolute bottom-4 -left-2 text-6xl font-serif italic text-white mix-blend-difference font-black drop-shadow-md z-10 pointer-events-none break-all max-w-full">
                    {igHandle ? igHandle.replace('@', '') : nickname}
                  </h2>
                </div>

                {/* 상세 정보 (영수증 부분) */}
                <div className="px-6 pt-5 pb-8 bg-[#F8F5F0] border-t border-dashed border-black/30 font-mono text-xs shadow-inner min-h-[300px] z-10 relative">
                  <p className="text-center mb-4 font-bold tracking-widest uppercase">{t('receipt_title')}</p>
                  
                  <div className="flex justify-between mb-1.5 border-b border-black/10 pb-1.5">
                    <span className="text-black/60">{t('curator')}</span>
                    <span className="font-bold truncate max-w-[120px]">{nickname}</span>
                  </div>
                  <div className="flex justify-between mb-1.5 border-b border-black/10 pb-1.5">
                    <span className="text-black/60">{t('looks_uploaded')}</span>
                    <span className="font-bold">{String(uploadedCount).padStart(3, '0')}</span>
                  </div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-black/60">{t('aura_impact')}</span>
                    <span className="font-bold">99.9%</span>
                  </div>

                  {/* 인스타그램 ID */}
                  <div className="mt-3 pt-3 border-t border-dotted border-black/30">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1">
                        <Instagram className="w-3 h-3 text-black/60" />
                        <span className="text-black/60 tracking-widest uppercase">{t('showcase_id')}</span>
                      </div>
                      <span className="text-[8px] text-black/40 tracking-widest italic">{t('press_enter')}</span>
                    </div>
                    <div className="flex items-center bg-transparent border-b border-black/30 pb-1">
                      <span className="font-bold text-black mr-1">@</span>
                      <input 
                        type="text" 
                        placeholder="your_id" 
                        value={igHandle}
                        onChange={(e) => setIgHandle(e.target.value.toLowerCase())}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSaveId();
                        }}
                        className="bg-transparent outline-none w-full font-bold text-black placeholder:text-black/20"
                      />
                      <button 
                        onClick={handleSaveId}
                        disabled={isSaving}
                        className={`text-[10px] font-bold tracking-widest transition-colors ${isIgSaved ? 'text-green-600' : 'text-black hover:text-red-600'}`}
                      >
                        {isSaving ? '[...]' : isIgSaved ? '[SAVED]' : '[SAVE]'}
                      </button>
                    </div>
                  </div>

                  {/* 위치 설정 */}
                  <div className="mt-3 pt-3 border-t border-dotted border-black/30">
                    <LocationSelector user={user} locale={locale} />
                  </div>

                  {/* 언어 설정 */}
                  <div className="mt-3 pt-3 border-t border-dotted border-black/30">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1">
                        <Languages className="w-3 h-3 text-black/60" />
                        <span className="text-black/60 tracking-widest uppercase">LANGUAGE_SETTING</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {['ko', 'en'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => toggleLanguage(lang)}
                          className={`flex-1 py-2 border border-black text-[10px] font-black tracking-widest transition-all ${
                            locale === lang 
                              ? 'bg-black text-white' 
                              : 'bg-transparent text-black opacity-40 hover:opacity-100'
                          }`}
                        >
                          {lang === 'ko' ? 'KOREAN' : 'ENGLISH'}
                          {locale === lang && <Check className="inline-block w-3 h-3 ml-1" />}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* 하단 바코드 효과 및 여백 */}
                  <div className="mt-6 mb-2 border-t border-black border-dotted border-black/30 pt-4">
                     <div className="flex justify-center gap-[2px] h-8 opacity-80 mix-blend-multiply">
                      {[...Array(55)].map((_, i) => (
                        <div key={i} className="bg-black" style={{ width: (Math.random() * 3 + 1) + 'px' }} />
                      ))}
                    </div>
                  </div>
                  <div className="h-4 border-t"></div>
                </div>
              </div>

              {/* 하단 고정 버튼 영역 (Footer - 캡처 제외) */}
              <div className="shrink-0 px-6 py-4 bg-[#F8F5F0] border-t border-black/10 z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] flex flex-col gap-3">
                {/* 기존 버튼 그룹 */}
                <div className="flex gap-2 font-sans ">
                  <button onClick={handleCopyLink} className={`flex-1 py-3.5 border border-black font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 transition-colors active:scale-95 ${isCopied ? 'bg-green-50 text-green-600 border-green-600' : 'text-black hover:bg-black/5'}`}>
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Link className="w-3.5 h-3.5" />} 
                  </button>

                  <button onClick={handlePublish} className="flex-1 py-3.5 border border-black font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 transition-colors active:scale-95 hover:bg-black/5 ">
                    { <Share2 className="w-3.5 h-3.5" />} 
                  </button>

                  {/* 이미지 다운로드 버튼 */}
                  <button 
                    onClick={handleDownload} 
                    disabled={isProcessing}
                    className="flex-1 py-3.5 border border-black font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 transition-colors active:scale-95 hover:bg-black/5"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <button 
                    onClick={() => {
                      onOpenReport(); 
                      onClose();      
                    }}
                    className="flex-1 py-3.5 bg-black text-white font-bold text-[10px] tracking-[0.2em] flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors active:scale-95 "
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>

                  <button onClick={onLogout} className="px-5 py-3.5 border bg-red-400 text-black font-bold flex justify-center items-center hover:bg-red-600/90 transition-colors active:scale-95">
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </AnimatePresence>
  );
}