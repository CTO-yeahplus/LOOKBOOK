import { motion, MotionValue } from "framer-motion";
import { Heart, Bookmark, Instagram, Crown, Sparkles, Compass, ChevronUp } from "lucide-react";
import { forwardRef } from "react"; // 🌟 React에서 forwardRef 불러오기

interface FashionCardProps {
  item: any;
  aura: any;
  // cardRef: React.RefObject<HTMLDivElement>; ❌ 이건 이제 지웁니다!
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  imageX: MotionValue<number>;
  isExporting: boolean;
  //currentLikes: number;
  archiveCount: number; // ✅ 아카이브 숫자로 교체
  x: MotionValue<number>;
  paginate: (newDirection: number) => void;
  onToggleSave: () => void;
}

// 🌟 스와이프 파워를 계산하는 물리 공식
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const FashionCard = forwardRef<HTMLDivElement, FashionCardProps>(({ 
  item, aura, rotateX, rotateY, imageX, isExporting, archiveCount, x, paginate, onToggleSave
}, ref) => {
  
  const isSaved = aura.savedItems.some((i: any) => String(i.id) === String(item.id));

  return (
    <motion.div
      style={{ x, rotateX, rotateY }}
      drag={isExporting ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
      ref={ref} // 🌟 [중요] 받은 ref를 motion.div에 정확히 달아줍니다!
      className="relative bottom-4 z-10 flex h-[79vh] md:h-[85vh] w-[95vw] max-w-[420px] flex-col overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 shadow-2xl aspect-[2/3] transform-gpu"
    >
      {/* 🌟 이하 기존 UI 코드는 완벽히 동일합니다 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black/20">
        <motion.img style={{ x: imageX, scale: 1.15 }} src={item.imageUrl} crossOrigin="anonymous" className="pointer-events-none h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col justify-end p-8">
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
        <div className="flex flex-wrap gap-2"> {/* 태그가 많아질 경우를 대비해 flex-wrap과 gap을 추가했습니다 */}
          {item.tags?.map((tag: string, index: number) => (
            <span 
              key={index} // 리액트가 각 요소를 구분하기 위해 고유한 key가 필요합니다.
              className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/20 px-2.5 py-1 text-[15px] font-bold text-white/90 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pointer-events-auto flex gap-6 items-center mt-6">
          {/* 🌟 AURA IMPACT (좋아요) 버튼 */}
          <button 
            onPointerDown={(e) => e.stopPropagation()} // 1차 방어
            onTouchStart={(e) => e.stopPropagation()}  // 2차 방어
            onClick={(e) => { e.stopPropagation(); aura.toggleLike?.(String(item.id), item.likes || 0); }} 
            className="flex items-center gap-1.5 group"
          >
            <Heart className={`w-7 h-7 transition-transform group-active:scale-75 ${aura.likedItems?.includes(String(item.id)) ? 'fill-red-500 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'text-white hover:text-red-400 drop-shadow-md'}`} />
            <span className="font-mono text-sm font-bold text-white drop-shadow-md">{item.likes || 0}</span>
          </button>

          {/* 🌟 ARCHIVE (저장/북마크) 버튼 */}
          <button 
            onPointerDown={(e) => e.stopPropagation()} // 1차 방어
            onTouchStart={(e) => e.stopPropagation()}  // 2차 방어
            onClick={(e) => { e.stopPropagation(); onToggleSave(); }} 
            className="flex items-center gap-1.5 group ml-auto"
          >
            <Bookmark className={`w-7 h-7 transition-transform group-active:scale-75 ${isSaved ? 'fill-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'text-white hover:text-gray-300 drop-shadow-md'}`} />
            <span className="font-mono text-sm font-bold text-white drop-shadow-md">{archiveCount || 0}</span>
          </button>
        </div>

        {/* 🌟 딥다이브 (상세보기) 버튼 */}
        <div className={`pointer-events-auto mt-8 flex items-center justify-between transition-opacity duration-300 ${isExporting ? 'opacity-0' : 'opacity-100'}`}>
          <button 
            onPointerDownCapture={(e) => e.stopPropagation()} // 스와이프 차단 방어막!
            onClick={(e) => { e.stopPropagation(); aura.triggerHaptic(20); aura.setIsDetailOpen(true); }} 
            className="group relative flex items-center gap-3 px-6 py-3 overflow-hidden active:scale-95"
          >
            <div className="absolute inset-0 skew-x-[-12deg] group-hover:bg-red-500 transition-colors" />
            <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-black rounded-full border border-white/20 transition-transform duration-700">
              <Sparkles className="h-4 w-4 text-red-500 fill-current" />
            </div>
            <div className="relative z-10 flex flex-col items-start leading-none">
              <span className="text-[8px] font-mono font-bold text-black/60 tracking-[0.2em] mb-0.5 uppercase">Uncover The Vibe</span>
              <p className="text-xl font-serif italic font-black text-white tracking-tighter uppercase">Deep Dive.</p>
            </div>
            <ChevronUp className="relative z-10 h-5 w-5 text-white animate-bounce ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
});

// 🌟 [핵심 보수] 파일 맨 밑에 이 두 줄이 정확히 있어야 합니다!
FashionCard.displayName = "FashionCard"; // 리액트 개발자 도구를 위한 이름표
export default FashionCard; // 진짜로 밖으로 내보내는 문장!