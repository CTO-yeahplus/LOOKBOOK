// components/FloatingDock.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Download, MoreHorizontal, Crown, Smartphone } from "lucide-react";

interface FloatingDockProps {
  showGyroButton: boolean;
  onRequestGyro: () => void;
  onUpload: () => void;
  onExport: () => void;
  onOpenMenu: () => void;
  onOpenAdmin: () => void;
  isExporting: boolean;
  isAdmin: boolean;
}

export default function FloatingDock({ showGyroButton, onRequestGyro, onUpload, onExport, onOpenMenu, onOpenAdmin, isExporting, isAdmin }: FloatingDockProps) {
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

      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/40 p-2 shadow-2xl backdrop-blur-2xl">
      <button onClick={onUpload} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95">
          <Plus className="h-5 w-5" />
        </button>
        <div className="mx-1 h-8 w-[1px] bg-white/15" />
        <button onClick={onExport} disabled={isExporting} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95 disabled:opacity-50">
          {isExporting ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" /> : <Download className="h-5 w-5" />}
        </button>
        <div className="mx-1 h-8 w-[1px] bg-white/15" />
        <button onClick={onOpenMenu} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/15 active:scale-95">
          <MoreHorizontal className="h-5 w-5" />
        </button>
        {isAdmin && (
          <>
            <div className="mx-1 h-8 w-[1px] bg-white/15" />
            <button onClick={onOpenAdmin} className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-600/20 text-yellow-500 border border-yellow-500/30">
              <Crown className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </>
  );
}