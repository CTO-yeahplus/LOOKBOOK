// app/components/FloatingDock.tsx

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Share2, ShoppingCart, ArrowDown, MessageSquareWarning, Crown, Smartphone } from "lucide-react"; // Download 삭제

interface FloatingDockProps {
  showGyroButton: boolean;
  onRequestGyro: () => void;
  onUpload: () => void;
  onShare: () => void;       
  onShop: () => void;        
  onBugReport: () => void;   
  onOpenAdmin: () => void;
  isExporting: boolean;
  isAdmin: boolean;
  isMobile: boolean; // 🌟 추가
}

export default function FloatingDock({ 
  showGyroButton, onRequestGyro, onUpload, onShare, onShop, onBugReport, onOpenAdmin, isExporting, isAdmin 
}: FloatingDockProps) {
  return (
    <>
      <AnimatePresence>
        {showGyroButton && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="absolute bottom-28 left-1/2 z-[100] flex -translate-x-1/2">
            <button onClick={onRequestGyro} className="group flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-[10px] font-bold tracking-widest text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md transition-all active:scale-95">
              <Smartphone className="h-4 w-4 animate-pulse group-hover:animate-none group-hover:rotate-12 transition-transform" />
              ENABLE 3D VIBE
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-black/40 p-2 shadow-2xl backdrop-blur-2xl">
        
        {/* 1. 업로드 */}
        <button onClick={onUpload} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95">
          <Plus className="h-5 w-5" />
        </button>
        <div className="h-6 w-[1px] bg-white/15" />
        
        {/* 🌟 2. 공유하기 (다운로드 삭제 후 여기에 로딩 스피너 연동!) */}
        <button onClick={onShare} disabled={isExporting} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95 disabled:opacity-50">
          {isExporting ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" /> : <ArrowDown className="h-4 w-4" />}
        </button>
        <div className="h-6 w-[1px] bg-white/15" />

        {/* 3. 쇼핑하기 (W컨셉) */}
        <button onClick={onShop} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95">
          <ShoppingCart className="h-4 w-4" />
        </button>
        <div className="h-6 w-[1px] bg-white/15" />

        {/* 4. 버그 제보 */}
        <button onClick={onBugReport} className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-400 transition-all hover:bg-red-500/20 active:scale-95 border border-red-500/20">
          <MessageSquareWarning className="h-4 w-4" />
        </button>

        {/* 5. 관리자 데스크 */}
        {isAdmin && (
          <>
            <div className="h-6 w-[1px] bg-white/15" />
            <button onClick={onOpenAdmin} className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-600/20 text-yellow-500 border border-yellow-500/30">
              <Crown className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </>
  );
}