// components/ShopModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Tag } from "lucide-react";

// 🌟 아이템 타입 정의
interface ShoppableItem {
    id: number;
    brand: string;
    item_name: string;
    price: string;
    category: string;
    image_url: string;
    product_url: string;
  }

// 🌟 items 배열을 Props로 받습니다.
interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  lookTitle?: string;
  items: ShoppableItem[];
}

export default function ShopModal({ isOpen, onClose, lookTitle, items }: ShopModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[101] flex flex-col max-h-[85vh] bg-[#0A0A0A] rounded-t-[2rem] border-t border-white/10 shadow-2xl md:max-w-md md:mx-auto"
          >
            <div className="w-full flex justify-center pt-4 pb-2" onClick={onClose}><div className="w-12 h-1.5 bg-white/20 rounded-full" /></div>

            <div className="flex items-center justify-between px-6 pb-6 pt-2 border-b border-white/5">
              <div className="flex flex-col">
                <span className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase"><Tag className="w-3 h-3" /> Shop the Vibe</span>
                <span className="text-xl font-serif italic font-bold text-white tracking-tight mt-1">{lookTitle}</span>
              </div>
              <button onClick={onClose} className="p-2 text-white/40 hover:text-white bg-white/5 rounded-full"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 hide-scrollbar">
              {/* 🌟 DB에 등록된 아이템이 없을 경우의 처리 */}
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-white/40">
                  <span className="text-xs font-mono uppercase tracking-widest">No Items Tagged</span>
                </div>
              ) : (
                /* 🌟 진짜 DB 데이터를 순회합니다! */
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 group hover:border-white/20 transition-all">
                    <div className="w-20 h-24 shrink-0 rounded-xl overflow-hidden bg-white/10 relative">
                      <img src={item.image_url} alt={item.item_name} className="w-full h-full object-cover" />
                      <div className="absolute top-1 left-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-mono text-white">{item.category}</div>
                    </div>

                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <h3 className="text-xs font-black tracking-widest uppercase text-white/90">{item.brand}</h3>
                        <p className="text-[11px] font-medium text-white/50 leading-tight mt-1 line-clamp-2">{item.item_name}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-mono font-black text-indigo-400">{item.price}</span>
                        {/* 🌟 실제 구매 링크(product_url) 연결 */}
                        <a href={item.product_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-lg text-[9px] font-black uppercase active:scale-95 transition-transform hover:bg-indigo-50 hover:text-indigo-600">
                          GET <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="px-6 py-5 border-t border-white/5 flex items-center justify-center gap-2 bg-black/50">
              <ShieldCheck className="w-4 h-4 text-white/30" />
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Verified Links by AURA</span>
            </div>
          </motion.div>
        </>
      )}
      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`}} />
    </AnimatePresence>
  );
}