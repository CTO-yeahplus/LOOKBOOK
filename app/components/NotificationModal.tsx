"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, Terminal, ExternalLink, Clock } from "lucide-react";
import { supabase } from "../../lib/supabase";

interface Notification {
  id: number;
  title: string;
  body: string;
  type: string;
  link_url?: string;
  created_at: string;
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationModal({ isOpen, onClose }: NotificationModalProps) {
  const [logs, setLogs] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  // 🌟 알림 데이터 가져오기
  useEffect(() => {
    if (isOpen) {
      const fetchLogs = async () => {
        setLoading(true);
        const { data, error } = await supabase
          .from('notifications')
          .select('*')
          .order('created_at', { ascending: false }) // 최신순
          .limit(20); // 최근 20개만

        if (!error && data) setLogs(data);
        setLoading(false);
      };
      fetchLogs();
    }
  }, [isOpen]);

  // 날짜 포맷팅 (예: 02.18 14:30)
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return `${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 (클릭 시 닫힘) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* 메인 모달 (오른쪽에서 슬라이드) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-[100] flex flex-col shadow-2xl"
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-[#ff3b30]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">SYSTEM LOGS</h2>
                  <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Encrypted Transmission</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* 본문 (스크롤 영역) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-40 gap-4 text-white/30">
                  <div className="w-6 h-6 border-2 border-t-[#ff3b30] border-white/10 rounded-full animate-spin" />
                  <span className="text-xs font-mono animate-pulse">DECRYPTING DATA...</span>
                </div>
              ) : logs.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-60 text-white/30 text-center">
                  <Bell className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-sm font-bold">NO SIGNALS</p>
                  <p className="text-xs mt-1">수신된 시스템 로그가 없습니다.</p>
                </div>
              ) : (
                logs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all active:scale-[0.98]"
                    onClick={() => log.link_url && window.open(log.link_url, '_blank')}
                  >
                    {/* 날짜 뱃지 */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono text-white/30 group-hover:text-[#ff3b30] transition-colors">
                      <Clock className="w-3 h-3" />
                      {formatTime(log.created_at)}
                    </div>

                    {/* 아이콘 및 제목 */}
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`mt-1 w-1.5 h-1.5 rounded-full ${log.type === 'alert' ? 'bg-[#ff3b30] animate-pulse' : 'bg-green-500'}`} />
                      <h3 className="text-sm font-bold text-white pr-12">{log.title}</h3>
                    </div>

                    {/* 내용 */}
                    <p className="text-xs text-white/60 leading-relaxed pl-4 border-l border-white/10 ml-0.5">
                      {log.body}
                    </p>

                    {/* 링크가 있으면 표시 */}
                    {log.link_url && (
                      <div className="mt-3 pl-4 flex items-center gap-1 text-[10px] font-mono text-[#ff3b30] uppercase tracking-wider">
                        Access Link <ExternalLink className="w-3 h-3" />
                      </div>
                    )}
                  </motion.div>
                ))
              )}
            </div>
            
            {/* 하단 장식 */}
            <div className="p-4 border-t border-white/10 bg-black/50 text-center">
               <span className="text-[9px] text-white/20 font-mono">END OF TRANSMISSION</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}