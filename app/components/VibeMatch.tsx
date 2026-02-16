
// components/VibeMatch.tsx
import { motion } from "framer-motion";
import { Fingerprint, Zap, UserPlus } from "lucide-react";
import Image from 'next/image'; // 🌟 추가

interface VibeUser {
    id: string;
    name: string;
    ig: string;
    matchRate: number;
    img: string;
  }

interface VibeMatchProps {
    report: {
        topTags: [string, number][];
        vibeTitleKo: string;
        vibeTitleEn: string;
    } | null;
    matchedUsers: VibeUser[];
}

export default function VibeMatch({ report, matchedUsers }: VibeMatchProps) {
  // 리포트가 없거나, 매칭된 유저가 한 명도 없으면 렌더링하지 않습니다.
  if (!report || !matchedUsers || matchedUsers.length === 0) return null;

  return (
    <div className="w-full mb-8 pt-4">
      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 mb-4">
        <div className="flex items-center gap-2">
          <Fingerprint className="w-5 h-5 text-indigo-400 animate-pulse" />
          <h2 className="text-[11px] font-black tracking-[0.2em] text-white uppercase">
            Vibe Match <span className="text-white/40 font-mono">/ SYNC</span>
          </h2>
        </div>
        <span className="text-[9px] font-mono text-indigo-400 border border-indigo-400/30 px-2 py-0.5 rounded-full">
          BASED ON &quot;{report.topTags[0]?.[0] || 'YOUR'}&quot; DNA
        </span>
      </div>

      {/* 🌟 진짜 DB에서 받아온 matchedUsers 배열을 순회합니다! */}
      <div className="flex gap-4 overflow-x-auto px-4 pb-6 snap-x snap-mandatory hide-scrollbar">
        {matchedUsers.map((user, idx) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
            className="snap-center shrink-0 w-[140px] relative rounded-[1.5rem] overflow-hidden group border border-white/10 bg-white/5"
          >
            <div className="aspect-[3/4] w-full overflow-hidden relative">
              <Image src={user.img} alt={user.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] font-mono font-black text-white">{user.matchRate}%</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-black text-white truncate">{user.name}</span>
                <span className="text-[9px] font-mono text-white/50 truncate">@{user.ig}</span>
              </div>
              <button className="w-full py-2 bg-indigo-600 rounded-xl text-[9px] font-black text-white flex items-center justify-center gap-1 active:scale-95">
                <UserPlus className="w-3 h-3" /> CONNECT
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}} />
    </div>
  );
}