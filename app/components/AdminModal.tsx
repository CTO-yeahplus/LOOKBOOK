// components/AdminModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Crown, Activity, Image as ImageIcon, Heart, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

export default function AdminModal({ isOpen, onClose, triggerHaptic }: AdminModalProps) {
  const [stats, setStats] = useState({ items: 0, saves: 0 });
  const [pushMessage, setPushMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // 🌟 관리자 창이 열릴 때마다 실시간 DB 통계를 긁어옵니다.
  useEffect(() => {
    if (isOpen) {
      const fetchStats = async () => {
        const { count: itemsCount } = await supabase.from('aura_fashion_items').select('*', { count: 'exact', head: true });
        const { count: savesCount } = await supabase.from('aura_saved_looks').select('*', { count: 'exact', head: true });
        setStats({ items: itemsCount || 0, saves: savesCount || 0 });
      };
      fetchStats();
    }
  }, [isOpen]);

  // 🌟 (진짜 엔진) 전체 유저에게 푸시 알림 쏘기
  const handleBroadcastPush = async () => {
    if (!pushMessage.trim()) return;
    
    const confirmSend = window.confirm(`전체 유저에게 "${pushMessage}" 메시지를 발송하시겠습니까?`);
    if (!confirmSend) return;

    triggerHaptic(50);
    setIsSending(true);
    
    try {
      // 1. Supabase에서 알림을 구독한 모든 유저의 ID를 가져옵니다.
      const { data: subscribers } = await supabase.from('aura_push_subscriptions').select('user_id');
      
      if (!subscribers || subscribers.length === 0) {
        alert("알림을 구독한 유저가 없습니다.");
        setIsSending(false);
        return;
      }

      // 2. 모든 유저에게 푸시를 쏘도록 백엔드 API(/api/push) 반복 호출 
      // (💡 실제 상용화 시에는 한 번의 API 호출로 처리하는 /api/broadcast 라우트를 만드는 것이 좋습니다)
      const pushPromises = subscribers.map(sub => 
        fetch('/api/push', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: sub.user_id,
            title: "AURA CEO 알림 👑",
            body: pushMessage
          })
        })
      );

      await Promise.all(pushPromises);
      
      alert(`[SYSTEM] 발송 완료! 총 ${subscribers.length}명의 유저에게 푸시 알림이 전송되었습니다.`);
      setPushMessage("");

    } catch (error) {
      console.error(error);
      alert("푸시 발송 중 오류가 발생했습니다.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" />
          
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed bottom-0 left-0 right-0 z-[101] flex h-[85vh] flex-col rounded-t-[32px] bg-gradient-to-b from-[#2a2a2c] to-[#1c1c1e] shadow-[0_-10px_50px_rgba(0,0,0,0.8)] border-t border-yellow-500/20">
            <div className="flex w-full justify-center pb-6 pt-4"><div className="h-1.5 w-12 rounded-full bg-white/20" /></div>
            
            <div className="flex items-center justify-between px-8 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200 flex items-center gap-2">
                  <Crown className="w-6 h-6 text-yellow-400"/> CEO Dashboard
                </h2>
                <p className="text-sm text-white/50 mt-1">AURA 글로벌 관제탑에 오신 것을 환영합니다.</p>
              </div>
              <button onClick={onClose} className="rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 active:scale-90 transition-all"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">
              {/* 1. 실시간 통계 (Real-time Stats) */}
              <section>
                <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2"><Activity className="w-4 h-4"/> System Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col bg-white/5 rounded-2xl p-6 border border-white/10">
                    <ImageIcon className="w-6 h-6 text-blue-400 mb-2" />
                    <span className="text-3xl font-bold text-white">{stats.items}</span>
                    <span className="text-xs text-white/50 mt-1">Total Looks in DB</span>
                  </div>
                  <div className="flex flex-col bg-white/5 rounded-2xl p-6 border border-white/10">
                    <Heart className="w-6 h-6 text-rose-400 mb-2" />
                    <span className="text-3xl font-bold text-white">{stats.saves}</span>
                    <span className="text-xs text-white/50 mt-1">Total Saved Actions</span>
                  </div>
                </div>
              </section>

              {/* 2. 전파 통신망 (Broadcast Push) */}
              <section>
                <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2"><Send className="w-4 h-4"/> Broadcast Message</h3>
                <div className="flex flex-col gap-3 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <textarea 
                    value={pushMessage}
                    onChange={(e) => setPushMessage(e.target.value)}
                    placeholder="전체 유저에게 보낼 푸시 알림 내용을 입력하세요. (예: 오늘 비가 옵니다! 우산 챙기세요 ☔️)"
                    className="w-full h-24 bg-black/50 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50 resize-none transition-colors"
                  />
                  <button 
                    onClick={handleBroadcastPush}
                    disabled={isSending || !pushMessage.trim()}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold active:scale-95 transition-all disabled:opacity-50 disabled:grayscale"
                  >
                    {isSending ? "발송 중..." : "🚀 전체 유저에게 발송하기"}
                  </button>
                </div>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}