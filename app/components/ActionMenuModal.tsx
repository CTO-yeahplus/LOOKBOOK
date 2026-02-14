// components/ActionMenuModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Bell, Send, ShoppingCart } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";

interface ActionMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FashionItem;
  onShare: () => void;
  subscribeToPush: () => void;
  sendTestPush: () => void;
}

export default function ActionMenuModal({ isOpen, onClose, item, onShare, subscribeToPush, sendTestPush }: ActionMenuModalProps) {
  // 🌟 쇼핑몰 검색 이동 함수 추가
  const handleShopNow = () => {
    if (!item || !item.tags) return;
    const query = encodeURIComponent(item.tags.map(t => t.replace('#', '')).join(' '));
    const shopUrl = `https://www.musinsa.com/search/musinsa/integration?q=${query}`;
    window.open(shopUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed bottom-0 left-0 right-0 z-[101] rounded-t-3xl border-t border-white/20 bg-[#1c1c1e]/95 p-6 pb-12 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
            <div className="mx-auto mb-8 h-1.5 w-12 rounded-full bg-white/20" />
            
            <div className="flex flex-col gap-3">
              {/* 🌟 1. 공유 버튼 (누르면 포토카드를 캡처해서 보냄) */}
              <button 
                onClick={() => { onShare(); onClose(); }} 
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Share2 className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">이 룩 공유하기</span>
                  <span className="text-[12px] text-white/50">룩북 이미지를 카카오톡/인스타로 전송</span>
                </div>
              </button>

              {/* 🌟 쇼핑하기 버튼 */}
              <button 
                onClick={handleShopNow} 
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95 border border-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"><ShoppingCart className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">이 스타일 쇼핑하기</span>
                  <span className="text-[12px] text-white/50">무신사에서 비슷한 옷 검색</span>
                </div>
              </button>

              <button onClick={() => { subscribeToPush(); onClose(); }} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Bell className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">모닝 푸시 알림 켜기</span>
                  <span className="text-[12px] text-white/50">매일 아침 날씨 맞춤 룩 받아보기</span>
                </div>
              </button>

              {process.env.NODE_ENV === 'development' && (
                <button onClick={() => { sendTestPush(); onClose(); }} className="flex items-center gap-4 rounded-2xl bg-emerald-500/10 p-4 text-emerald-400 transition-all hover:bg-emerald-500/20 active:scale-95">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20"><Send className="h-5 w-5" /></div>
                  <span className="text-[15px] font-bold">알림 테스트 발송 (Dev)</span>
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}