import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Heart } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";

interface RankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: FashionItem[];
}

export default function RankingModal({ isOpen, onClose, items }: RankingModalProps) {
  // 💡 하트 순으로 정렬 (실제로는 서버에서 하트 카운트를 조인해서 가져오는 API가 유리하지만, 현재는 로컬 정렬)
  const rankedItems = [...items].slice(0, 10); 

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md" />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed inset-4 z-[111] m-auto max-w-lg h-fit max-h-[80vh] overflow-hidden rounded-[32px] border border-white/10 bg-[#1c1c1e] p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3"><Trophy className="text-yellow-400" /> Hall of Fame</h2>
              <button onClick={onClose} className="p-2 rounded-full bg-white/5 text-white/50"><X className="w-5 h-5" /></button>
            </div>
            <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
              {rankedItems.map((item, index) => (
                <div key={item.id} className="flex items-center gap-4 rounded-2xl bg-white/5 p-3 border border-white/5 transition-transform active:scale-[0.98]">
                  <span className={`text-xl font-black w-8 text-center ${index < 3 ? 'text-yellow-400' : 'text-white/20'}`}>{index + 1}</span>
                  <img src={item.imageUrl} className="w-16 h-20 rounded-xl object-cover" alt="Rank item" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white/90">{item.uploaderName}</p>
                    <p className="text-xs text-white/40">{item.weather} {item.temperature}</p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold">TOP</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}