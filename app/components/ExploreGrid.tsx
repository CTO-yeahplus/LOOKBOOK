import { motion } from "framer-motion";
import { Heart, Crown, Sparkles, Trophy } from "lucide-react";

interface ExploreGridProps {
  items: any[];
  onSelect: (index: number) => void;
}

export default function ExploreGrid({ items, onSelect }: ExploreGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 pb-40 px-4">
      {items.map((item, idx) => {
        // 🌟 상위 3인을 위한 특별 테마 설정
        const isTop3 = idx < 3;
        const rankThemes = [
          { 
            color: "text-yellow-400", 
            bg: "bg-yellow-400", 
            border: "border-yellow-400/50", 
            shadow: "shadow-[0_0_30px_rgba(250,204,21,0.4)]",
            label: "THE VIBE KING" 
          },
          { 
            color: "text-slate-300", 
            bg: "bg-slate-300", 
            border: "border-slate-300/40", 
            shadow: "shadow-[0_0_20px_rgba(203,213,225,0.3)]",
            label: "ELITE" 
          },
          { 
            color: "text-amber-600", 
            bg: "bg-amber-600", 
            border: "border-amber-600/40", 
            shadow: "shadow-[0_0_15px_rgba(180,83,9,0.2)]",
            label: "TRENDSETTER" 
          }
        ];

        const theme = rankThemes[idx] || null;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ delay: idx * 0.02, type: "spring", stiffness: 300 }}
            onClick={() => onSelect(idx)}
            className={`relative aspect-[2/3] overflow-hidden rounded-[2.2rem] border transition-all duration-500 group cursor-pointer ${
              isTop3 ? `${theme?.border} ${theme?.shadow}` : "border-white/10 bg-white/5"
            }`}
          >
            {/* 🏆 상위 3인 전용 뱃지 라벨 */}
            {isTop3 && (
              <div className={`absolute top-0 right-0 z-30 ${theme?.bg} px-3 py-1 rounded-bl-2xl shadow-lg`}>
                <span className="text-[9px] font-black text-black tracking-tighter leading-none">
                  {theme?.label}
                </span>
              </div>
            )}

            {/* 👑 랭킹 랭크 숫자 배지 */}
            <div className={`absolute top-3 left-3 z-20 flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-black shadow-xl backdrop-blur-md border ${
              idx === 0 ? "bg-yellow-400 text-black border-yellow-200" :
              idx === 1 ? "bg-slate-300 text-black border-white" :
              idx === 2 ? "bg-amber-600 text-white border-amber-400" :
              "bg-black/50 text-white border-white/10"
            }`}>
              {idx === 0 ? <Crown className="h-4 w-4" /> : idx + 1}
            </div>

            {/* 메인 이미지 (1위에겐 은은한 스케일 애니메이션 추가) */}
            <motion.img 
              src={item.imageUrl} 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              animate={idx === 0 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* 하단 정보 영역 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex flex-col gap-0.5 max-w-[65%]">
                <span className={`text-[10px] font-black tracking-tight ${isTop3 ? theme?.color : "text-white/80"}`}>
                  {idx === 0 ? "GLOBAL NO.1" : idx === 1 ? "RUNNER UP" : idx === 2 ? "TOP TIER" : "AURA LOOK"}
                </span>
                <span className="text-[11px] font-bold text-white truncate">
                  @{item.uploaderIg || item.uploaderName || 'AURA'}
                </span>
              </div>
              
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full border border-white/10 backdrop-blur-md">
                  <Heart className={`h-3 w-3 ${item.likes > 0 ? 'fill-red-500 text-red-500' : 'text-white/60'}`} />
                  <span className="text-[11px] font-black text-white font-mono">{item.likes}</span>
                </div>
              </div>
            </div>

            {/* 1위 전용 반짝임 효과 (Sparkles) */}
            {idx === 0 && (
              <div className="absolute inset-0 pointer-events-none">
                <Sparkles className="absolute top-1/4 left-1/4 h-4 w-4 text-yellow-200/40 animate-pulse" />
                <Sparkles className="absolute bottom-1/3 right-1/4 h-3 w-3 text-yellow-200/60 animate-bounce" />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}