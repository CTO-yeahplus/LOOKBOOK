// app/components/OutlinkConfirmModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ExternalLink, ShieldAlert } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function OutlinkConfirmModal({ isOpen, onClose, onConfirm }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.95, y: 20 }} 
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫힘 방지
            className="w-full max-w-sm bg-[#111] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            {/* 🌟 텍스처 배경 */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />

            <div className="relative z-10 p-8 text-center">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-3xl font-serif italic font-black text-white mb-2 uppercase tracking-tighter">
                Shop the Vibe<span className="text-[#ff3b30]">.</span>
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                W컨셉에서 이 룩과 완벽하게 매칭되는<br/>프리미엄 아이템을 탐색합니다.
              </p>

              {/* 🌟 법적 고지 (세련된 영수증/터미널 스타일) */}
              <div className="bg-black/50 border border-white/5 rounded-xl p-4 mb-8 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert className="w-3 h-3 text-[#ff3b30]" />
                  <span className="text-[9px] font-mono text-[#ff3b30] tracking-[0.2em] uppercase">Disclosure</span>
                </div>
                <p className="text-[10px] font-mono text-white/40 leading-relaxed break-keep">
                  *본 링크를 통한 구매 시, AURA는 제휴마케팅 커미션을 지급받을 수 있으며 이는 AURA의 독립적인 큐레이션을 유지하는 데 사용됩니다.
                </p>
              </div>

              {/* 🌟 액션 버튼 */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={onConfirm} 
                  className="w-full bg-white text-black font-black uppercase tracking-widest text-xs py-4 flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  Proceed to W Concept <ExternalLink className="w-4 h-4" />
                </button>
                <button 
                  onClick={onClose} 
                  className="w-full text-[10px] font-mono tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors py-2 mt-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}