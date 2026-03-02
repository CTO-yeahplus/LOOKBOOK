import { motion, MotionValue, useMotionValue, useTransform } from "framer-motion"; // 🌟 [추가] 카드 내부에서 물리 엔진을 만들기 위해 import!
import { Heart, Bookmark, Instagram, Crown, Sparkles, Compass, ChevronUp, ArrowUpRight } from "lucide-react";
import { forwardRef } from "react"; 
import { FashionItem } from "../../hooks/useAura";

interface FashionCardProps {
  item: FashionItem; 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  aura: any;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  isExporting: boolean;
  archiveCount: number; 
  // 🌟 y와 imageY는 부모에게 받지 않고 스스로 만듭니다! (삭제됨)
  paginate: (newDirection: number) => void;
  onToggleSave: () => void;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const FashionCard = forwardRef<HTMLDivElement, FashionCardProps>(({ 
  item, aura, rotateX, rotateY, isExporting, archiveCount, paginate, onToggleSave
}, ref) => {
  
  // 🌟 [핵심 수술 1] 1카드 1엔진! 카드가 태어날 때 자신만의 고유한 y축을 만듭니다. 줄다리기 충돌 0%!
  const y = useMotionValue(0);
  const imageY = useTransform(y, [-200, 200], [20, -20]);

  const isSaved = aura.savedItems.some((i: FashionItem) => String(i.id) === String(item.id));
  const isSponsored = item.isSponsored;

  return (
    <motion.div
      id="aura-main-card" 
      // 🌟 [수정 1] willChange: "transform" 을 추가하여 모바일 그래픽카드가 카드를 미리 로딩하게 강제합니다!
      style={{ y, rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }} 
      drag={isExporting ? false : "y"} 
      dragConstraints={{ top: 0, bottom: 0 }} 
      dragElastic={0.2}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.y, velocity.y); 
        if (swipe < -swipeConfidenceThreshold) paginate(1);
        else if (swipe > swipeConfidenceThreshold) paginate(-1);
      }}
      custom={aura.direction}
      variants={{
        enter: (direction: number) => ({
          y: direction > 0 ? "100%" : "-100%", 
          opacity: 1, 
          scale: 1.1, 
          filter: "brightness(1.8)"
        }),
        center: { 
          zIndex: 1, 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          filter: "brightness(1)"
        },
        exit: (direction: number) => ({
          zIndex: 0,
          y: direction < 0 ? "100%" : "-100%", 
          opacity: 0, 
          scale: 0.9, 
          filter: "brightness(0.5)"
        })
      }}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        y: { type: "tween", duration: 0.35, ease: [0.25, 1, 0.5, 1] },
        filter: { duration: 0.30 }
      }}
      ref={ref} 
      // 🌟 [수정 2] className 맨 앞의 relative를 'absolute'로 바꿉니다! (popLayout 없이도 카드가 완벽하게 겹치게 만듭니다)
      className={`absolute z-10 flex h-[79vh] md:h-[85vh] w-[95vw] max-w-[420px] flex-col overflow-hidden rounded-[2.5rem] bg-white/5 shadow-2xl aspect-[2/3] transform-gpu ${
        isSponsored ? 'border-[2px] border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'border border-white/20'
      }`}
    >
      {/* 백그라운드 이미지 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/20">
        <motion.img style={{ y: imageY, scale: 1.15 }} src={item.imageUrl} crossOrigin="anonymous" className="pointer-events-none h-full w-full object-cover" />
        <div className={`absolute inset-0 ${isSponsored ? 'bg-gradient-to-t from-black via-black/20 to-black/40' : 'bg-gradient-to-t from-black/90 via-black/10 to-transparent'} pointer-events-none`} />
      </div>

      {/* 스폰서 전용 상단 뱃지 */}
      {isSponsored && (
        <div style={{ transform: "translateZ(30px)" }} className="absolute top-6 left-6 right-6 flex justify-between items-start z-20 pointer-events-none">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-mono font-bold tracking-[0.4em] uppercase text-white/60">Presented By</span>
            <span className="text-xl font-serif italic font-black text-white tracking-tighter mix-blend-overlay">{item.sponsorBrand || "AURA EXCLUSIVE"}</span>
          </div>
          <div className="w-10 h-10 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center bg-white/10">
            <Crown className="w-4 h-4 text-white" />
          </div>
        </div>
      )}

      {/* 하단 정보 영역 */}
      <div style={{ transform: "translateZ(30px)" }} className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col justify-end p-8 z-20">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className={`whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md transition-all duration-500 ${
            item.uploaderName === 'AURA Editor' ? 'border-amber-500/30 bg-amber-500/20 text-amber-300' : archiveCount >= 10 ? 'border-indigo-400/40 bg-indigo-500/20 text-indigo-300' : 'border-white/10 bg-white/10 text-white/80'
          }`}>
            {item.uploaderName === 'AURA Editor' ? <Crown className="h-3 w-3" /> : archiveCount >= 10 ? <Sparkles className="h-3 w-3" /> : <Compass className="h-3 w-3" />}
            {item.uploaderName === 'AURA Editor' ? 'AURA EXCLUSIVE' : archiveCount >= 10 ? 'AURA TRENDSETTER' : 'AURA DISCOVER'}
          </span>
          
          <span className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white/60 backdrop-blur-md">
            {item.uploaderIg ? (
              <><Instagram className="w-3 h-3 text-white/80" /><span className="text-white/90">@{item.uploaderIg.replace('@', '')}</span></>
            ) : (
              <>by <span className="text-white/90">{item.uploaderName || 'AURA'}</span></>
            )}
          </span>
        </div>

        <h1 className="flex items-center gap-3 text-[3.5rem] md:text-6xl font-semibold tracking-tighter text-white leading-none">
          <span>{item.weather}</span><span>{item.temperature}</span>
        </h1> 
        <div className="flex flex-wrap gap-2">
          {item.tags?.map((tag: string, index: number) => (
            <span key={index} className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/20 px-2.5 py-1 text-[15px] font-bold text-white/90 backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="pointer-events-auto flex gap-6 items-center mt-6">
          <button onPointerDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); aura.toggleLike?.(String(item.id), item.likes || 0); }} className="flex items-center gap-1.5 group">
            <Heart className={`w-7 h-7 transition-transform group-active:scale-75 ${aura.likedItems?.includes(String(item.id)) ? 'fill-red-500 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'text-white hover:text-red-400 drop-shadow-md'}`} />
            <span className="font-mono text-sm font-bold text-white drop-shadow-md">{item.likes || 0}</span>
          </button>
          <button onPointerDown={(e) => e.stopPropagation()} onTouchStart={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); onToggleSave(); }} className="flex items-center gap-1.5 group ml-auto">
            <Bookmark className={`w-7 h-7 transition-transform group-active:scale-75 ${isSaved ? 'fill-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'text-white hover:text-gray-300 drop-shadow-md'}`} />
            <span className="font-mono text-sm font-bold text-white drop-shadow-md">{archiveCount || 0}</span>
          </button>
        </div>

        <div className={`pointer-events-auto mt-8 flex items-center justify-between transition-opacity duration-300 ${isExporting ? 'opacity-0' : 'opacity-100'}`}>
          {isSponsored ? (
             <button onPointerDownCapture={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); window.open(item.sponsorUrl || 'https://auraootd.com', '_blank'); }} className="w-full relative flex items-center justify-between px-6 py-4 overflow-hidden rounded-2xl bg-white text-black active:scale-95 transition-transform group">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center"><ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" /></div>
                 <div className="flex flex-col items-start leading-tight">
                   <span className="text-[10px] font-mono font-bold text-black/50 tracking-[0.2em] uppercase">Exclusive Access</span>
                   <p className="text-xl font-bold tracking-tighter uppercase">Explore Collection</p>
                 </div>
               </div>
             </button>
          ) : (
            <button onPointerDownCapture={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); aura.triggerHaptic(20); aura.setIsDetailOpen(true); }} className="group relative flex items-center gap-3 px-6 py-3 overflow-hidden active:scale-95">
              <div className="absolute inset-0 skew-x-[-12deg] group-hover:bg-red-500 transition-colors" />
              <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-black rounded-full border border-white/20 transition-transform duration-700"><Sparkles className="h-4 w-4 text-red-500 fill-current" /></div>
              <div className="relative z-10 flex flex-col items-start leading-none">
                <span className="text-[8px] font-mono font-bold text-black/60 tracking-[0.2em] mb-0.5 uppercase">Uncover The Vibe</span>
                <p className="text-xl font-serif italic font-black text-white tracking-tighter uppercase">Deep Dive.</p>
              </div>
              <ChevronUp className="relative z-10 h-5 w-5 text-white animate-bounce ml-1" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
});

FashionCard.displayName = "FashionCard"; 
export default FashionCard;