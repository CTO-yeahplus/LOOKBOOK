// components/ActionMenuModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Bell, Send, ShoppingCart, MessageSquareWarning } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";
import { generateTrackingLink } from "@/lib/affiliate";
import { track } from '@vercel/analytics/react';
import { useTranslations } from 'next-intl'; // 🌟 추가

interface ActionMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: FashionItem;
  onShare: () => void;
  subscribeToPush: () => void;
  sendTestPush: () => void;
  isPushEnabled: boolean; 
  unsubscribeFromPush: () => void; 
}

export default function ActionMenuModal({ isOpen, onClose, item, onShare, unsubscribeFromPush, subscribeToPush, sendTestPush, isPushEnabled }: ActionMenuModalProps) {
  const t = useTranslations('ActionMenu');
  // 🌟 쇼핑몰 검색 이동 함수 (수익화 버전으로 업그레이드)
  const handleShopNow = () => {
    if (!item || !item.tags) return;
    // 1. 태그에서 #을 제거하고 검색어 조립 (예: "미니멀 블랙자켓")
    const query = item.tags.map(t => t.replace('#', '')).join(' ');

    // 2. 커스텀 이벤트 추적: 무신사/쇼핑몰로 넘어간 전환율(CTR) 기록!
    track('Shop_Link_Clicked', { search_query: query, look_id: item.id });

    // 3. 💸 AURA 어필리에이트 라우터를 통해 트래킹 링크 발급!
    const trackingUrl = generateTrackingLink('musinsa', query);
    // 4. 새 창으로 열기 (여기서부터 구매 발생 시 AURA 계좌로 수수료 적립)
    window.open(trackingUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[260] bg-black/60 backdrop-blur-sm" />
          
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed bottom-0 left-0 right-0 z-[261] rounded-t-3xl border-t border-white/20 bg-[#1c1c1e]/95 p-6 pb-12 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
            <div className="mx-auto mb-8 h-1.5 w-12 rounded-full bg-white/20" />
            
            <div className="flex flex-col gap-3">
              {/* 🌟 1. 공유 버튼 (누르면 포토카드를 캡처해서 보냄) */}
              <button 
                onClick={() => { onShare(); onClose(); }} 
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Share2 className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">{t('share_title')}</span>
                  <span className="text-[12px] text-white/50">{t('share_desc')}</span>
                </div>
              </button>

              {/* 🌟 쇼핑하기 버튼 */}
              <button 
                onClick={handleShopNow} 
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 text-white transition-all hover:bg-white/10 active:scale-95 border border-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"><ShoppingCart className="h-5 w-5" /></div>
                <div className="flex flex-col items-start">
                  <span className="text-[15px] font-bold">{t('shop_title')}</span>
                  <span className="text-[12px] text-white/50">{t('shop_desc')}</span>
                </div>
              </button>

              {/* 🌟 2. 푸시 알림 버튼을 다이내믹하게 교체! */}
              <button 
                onClick={() => { 
                  // 켜져 있으면 끄고, 꺼져 있으면 켭니다!
                  if (isPushEnabled) {
                    unsubscribeFromPush();
                  } else {
                    subscribeToPush(); 
                  }
                  onClose(); 
                }}
                className={`flex items-center gap-4 rounded-2xl p-4 transition-all active:scale-95 border ${
                  isPushEnabled 
                    ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' // 켜졌을 때 (영롱한 보라색)
                    : 'bg-white/5 text-white hover:bg-white/10 border-transparent' // 꺼졌을 때 (기본 흰색)
                }`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isPushEnabled ? 'bg-indigo-500/20' : 'bg-white/10'}`}>
                  <Bell className={`h-5 w-5 ${isPushEnabled ? 'fill-current' : ''}`} />
                </div>
                <div className="flex flex-col items-start text-left">
                  {/* 🌟 힙스터 타이포그래피 적용 (대문자, 자간 넓게, 굵게) */}
                  <span className="text-[14px] font-black tracking-widest uppercase">
                    {isPushEnabled ? t('sync_active') : t('sync_off')}
                  </span>
                  {/* 🌟 시크한 서브 텍스트 */}
                  <span className="text-[11px] opacity-70 mt-0.5">
                    {isPushEnabled ? t('sync_desc_on') : t('sync_desc_off')}
                  </span>
                </div>
              </button>

              {process.env.NODE_ENV === 'development' && (
                <button onClick={() => { sendTestPush(); onClose(); }} className="flex items-center gap-4 rounded-2xl bg-emerald-500/10 p-4 text-emerald-400 transition-all hover:bg-emerald-500/20 active:scale-95">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20"><Send className="h-5 w-5" /></div>
                  <span className="text-[15px] font-bold">{t('test_push')}</span>
                </button>
              )}
            </div>
              
            {/* 🌟 버그 제보 및 피드백 수집 핫라인 */}
            <button 
              onClick={() => { 
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSco8ivWlB4bSQ0LpvXRgDIMh77EFxL2hM1CmsBsuZ_p0-MjBg/viewform?usp=header', '_blank'); 
                onClose(); 
              }} 
              className="w-full flex items-center gap-4 rounded-2xl bg-red-500/10 p-4 text-red-400 transition-all hover:bg-red-500/20 active:scale-95 border border-red-500/20 mt-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                <MessageSquareWarning className="h-5 w-5" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[15px] font-bold">{t('bug_report')}</span>
                <span className="text-[12px] text-red-400/70">{t('bug_desc')}</span>
              </div>
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}