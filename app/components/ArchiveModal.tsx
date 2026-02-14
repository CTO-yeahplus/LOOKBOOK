// components/ArchiveModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  archiveData: FashionItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

const appleSpring = { type: "spring" as const, stiffness: 300, damping: 25 };

export default function ArchiveModal({ isOpen, onClose, archiveData, searchQuery, setSearchQuery, triggerHaptic }: ArchiveModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { triggerHaptic(20); onClose(); }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={appleSpring} className="fixed bottom-0 left-0 right-0 z-50 flex h-[90vh] flex-col rounded-t-[32px] bg-[#1c1c1e] shadow-2xl md:h-[80vh]">
            <div className="flex w-full cursor-grab justify-center pb-4 pt-3"><div className="h-1.5 w-12 rounded-full bg-white/20" /></div>
            
            <div className="flex flex-col border-b border-white/5 px-8 pb-4 md:px-12">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white">Archive</h2>
                  <p className="mt-1 text-sm text-white/50">{archiveData.length} looks found</p>
                </div>
                <button onClick={() => { triggerHaptic(20); onClose(); }} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 active:scale-95"><X className="h-5 w-5 text-white/80" /></button>
              </div>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" placeholder="비 오는 날, 더운 날, OOTD..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:bg-white/10 transition-colors"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 pb-20 pt-6 md:px-12">
              {archiveData.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-white/30"><Search className="mb-4 h-12 w-12 opacity-50" strokeWidth={1} /><p>검색 조건에 맞는 룩이 없습니다.</p></div>
              ) : (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
                  {archiveData.map((item) => (
                    <div key={`saved-${item.id}`} className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer">
                      <img src={item.imageUrl} crossOrigin="anonymous" alt="Saved look" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sm font-medium text-white">{item.weather} {item.temperature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}