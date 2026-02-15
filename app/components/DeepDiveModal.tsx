// components/DeepDiveModal.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion"; // 🌟 Transition 타입 유지!
import { X, Volume2, Palette, Instagram, ArrowDownRight, Ticket, Heart, RefreshCw } from "lucide-react";
import { FashionItem } from "../../hooks/useAura"; 

interface DeepDiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FashionItem;
  triggerHaptic: (pattern: number | number[]) => void;
}

// 🌟 타입스크립트 에러 완벽 해결 유지
const flipTransition: Transition = { 
  type: "tween", 
  ease: [0.25, 0.1, 0.25, 1], 
  duration: 0.55 
};

export default function DeepDiveModal({ isOpen, onClose, item, triggerHaptic }: DeepDiveModalProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (isOpen) setIsFlipped(false);
  }, [isOpen]);

  const today = new Date();
  const dateString = `${today.getFullYear().toString().slice(-2)}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
  
  const likesCount = item.likes || 0;
  const isTrendsetter = likesCount >= 10; 
  const hasIgHandle = !!item.uploaderIg;  
  const isNotEditor = item.uploaderName !== 'AURA Editor'; 

  const showSocial = isTrendsetter && hasIgHandle && isNotEditor;
  const igHandle = item.uploaderIg?.replace('@', '');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md perspective-[2000px]"
          onClick={() => { triggerHaptic(20); onClose(); }}
        >

          {/* ========================================================= */}
          {/* 🌟 실제 유저가 보는 3D 양면 포토카드 본체 */}
          {/* ========================================================= */}
          <motion.div 
            onClick={(e) => { 
              e.stopPropagation(); 
              setIsFlipped(!isFlipped); 
              triggerHaptic(15);
            }}
            initial={{ scale: 0.95, y: 20, opacity: 0 }} 
            animate={{ rotateY: isFlipped ? 180 : 0, scale: 1, y: 0, opacity: 1 }} 
            exit={{ scale: 0.95, y: 20, opacity: 0 }} 
            transition={flipTransition} 
            className="relative w-[96vw] md:max-w-[420px] h-[80vh] rounded-xl shadow-2xl cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }} 
          >
            
            {/* ================= [앞면 (FRONT): 순수 이미지] ================= */}
            <div 
              className="absolute inset-0 w-full h-full rounded-xl overflow-hidden border-[5px] border-[#F4F0EA] bg-[#F4F0EA]"
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden', 
                zIndex: isFlipped ? 0 : 20 
            }}
            >
              <img src={item.imageUrl} alt="Look Front" className="w-full h-full object-cover filter contrast-110" />
              
              {/* 앞면 하단 힌트 텍스트 */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#EBE6DD]/90 font-mono text-[10px] tracking-[0.2em] uppercase bg-black/50 px-5 py-2 rounded-full backdrop-blur-sm shadow-xl border border-white/10">
                <RefreshCw className="w-3 h-3" /> Tap to Flip
              </div>
            </div>

            {/* ================= [뒷면 (BACK): 순수 디테일 정보] ================= */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#EBE6DD] text-black overflow-hidden rounded-xl flex flex-col shadow-inner border-[5px] border-[#F4F0EA]"
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                zIndex: isFlipped ? 20 : 0
              }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] filter contrast-120" />

              {/* 뒷면 헤더 */}
              <div className="pt-8 px-6 pb-4 relative z-10 overflow-hidden shrink-0">
                <span className="absolute -top-4 -left-4 text-[10rem] font-black italic text-black/5 pointer-events-none select-none leading-none font-serif">No.02</span>
                <div className="relative flex justify-between items-end border-b-[3px] border-black pb-2">
                  <div className="relative z-10">
                    <h2 className="text-6xl font-serif italic font-black tracking-tighter uppercase leading-[0.8] mix-blend-hard-light">Curator<br/>Note<span className="text-red-600">.</span></h2>
                    <div className="flex items-center gap-2 mt-3 font-mono text-[10px] font-bold uppercase tracking-widest bg-black text-[#EBE6DD] inline-block px-2 py-1 transform -rotate-2 shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                      <span>Issue {dateString}</span><span className="h-3 w-[1px] bg-white/30"/><span>Archived</span>
                    </div>
                  </div>
                  <div className="flex gap-3 relative z-10 items-center mb-2">
                    <Volume2 className="w-5 h-5 text-black animate-pulse" />
                    <button 
                      onClick={(e) => { e.stopPropagation(); triggerHaptic(20); onClose(); }} 
                      className="group relative p-1 z-50 hover:scale-110 transition-transform"
                    >
                      <div className="absolute inset-0 bg-black transform rotate-6 group-hover:rotate-12 transition-transform shadow-[2px_2px_0px_rgba(0,0,0,0.3)]" />
                      <X className="h-6 w-6 text-[#EBE6DD] relative z-10" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 뒷면 컨텐츠 스크롤 */}
              <div className="flex-1 overflow-y-auto p-6 relative z-10 custom-scrollbar">
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-1.5 bg-black text-[#EBE6DD] w-fit px-3 py-1 font-mono text-xs shadow-[2px_2px_0px_rgba(200,0,0,0.8)] transform -rotate-2">
                    <Heart className="w-3 h-3 fill-current text-red-500" /><span>{likesCount} Aura Impact</span>
                  </div>
                  <div className="relative w-[90%]">
                    <span className="absolute -top-8 -left-6 text-9xl font-serif text-black/10 pointer-events-none">“</span>
                    <h3 className="flex items-center gap-2 text-[10px] font-bold text-black uppercase tracking-widest mb-3 font-mono border-b border-black/20 pb-1 w-fit"><ArrowDownRight className="w-3 h-3 text-red-600" /> Mood Notes</h3>
                    <p className="text-lg font-serif italic font-bold text-black leading-snug relative z-10 mix-blend-multiply pl-4 border-l-4 border-red-600/50">현재 날씨 <span className="bg-black text-[#EBE6DD] px-1 font-mono not-italic text-[10px] mx-1">{item.weather}</span> 와 완벽하게 공명하는 무드. 이 룩의 날것의 텍스처를 느껴보세요.</p>
                  </div>
                  <div className="self-end w-[90%] relative pl-8">
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-dashed border-black/30 transform rotate-3 pointer-events-none" />
                    <h3 className="flex items-center justify-end gap-2 text-[10px] font-bold text-black uppercase tracking-widest mb-4 font-mono text-right relative z-10">Extracted DNA <Palette className="w-3 h-3 text-red-600"/></h3>
                    <div className="flex justify-end relative h-20 items-center z-10 pl-10 pr-2">
                      {(item.colors || ["#E5E0D8", "#2C2C2C", "#8A7B6E"]).map((colorHex, idx) => (
                        <div key={idx} className="w-14 h-16 bg-white border-[3px] border-black p-1 shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2 absolute" style={{ backgroundColor: colorHex, right: `${idx * 30}px`, zIndex: 10 - idx, transform: `rotate(${idx % 2 === 0 ? -4 : 4}deg)` }}>
                          <span className="absolute bottom-0 right-0.5 font-mono text-[6px] font-bold text-black/50 bg-white/80 px-0.5 backdrop-blur-sm mix-blend-hard-light">{colorHex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-32" /> 
              </div>

              {/* 소셜 티켓 */}
              {showSocial && (
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring" }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 w-[85%]">
                  <div onClick={(e) => { e.stopPropagation(); triggerHaptic(30); window.open(`https://instagram.com/${igHandle}`, '_blank'); }} className="bg-black text-[#EBE6DD] p-1 shadow-[8px_8px_0px_rgba(200,0,0,0.8)] border-2 border-[#EBE6DD] relative overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                    <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#EBE6DD] rounded-full border-2 border-black" /><div className="absolute top-1/2 -right-2 w-4 h-4 bg-[#EBE6DD] rounded-full border-2 border-black" />
                    <div className="border border-dashed border-[#EBE6DD]/30 p-3 flex justify-between items-center relative z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1"><Ticket className="w-3 h-3 text-red-500 animate-pulse" /><span className="font-mono text-[8px] font-bold tracking-[0.2em] uppercase text-red-500">Curator Pass</span></div>
                        <h3 className="text-xl font-black italic font-serif tracking-tighter truncate max-w-[120px]">{item.uploaderName}</h3><p className="font-mono text-[9px] opacity-60">ID: {igHandle?.toUpperCase()}</p>
                      </div>
                      <button className="group flex items-center gap-1.5 bg-red-600 text-black font-black text-[10px] px-3 py-2 tracking-widest uppercase border-2 border-[#EBE6DD] hover:bg-red-500 transition-colors active:scale-95 shadow-[3px_3px_0px_rgba(235,230,221,1)]"><Instagram className="w-3 h-3 group-hover:rotate-12 transition-transform" /> GO</button>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-black/30 font-mono text-[8px] tracking-[0.2em] uppercase pointer-events-none">
                Tap anywhere to flip back
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}