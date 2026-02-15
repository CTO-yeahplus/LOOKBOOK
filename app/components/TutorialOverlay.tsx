// components/TutorialOverlay.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand } from "lucide-react";

export default function TutorialOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 로컬 스토리지에 기록이 없으면 튜토리얼을 켭니다.
    const hasSeen = localStorage.getItem("aura_tutorial_seen");
    if (!hasSeen) {
      const timer = setTimeout(() => setShow(true), 1000); // 1초 뒤 등장
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissTutorial = () => {
    localStorage.setItem("aura_tutorial_seen", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={dismissTutorial}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer"
        >
          <motion.div 
            animate={{ x: [-50, 50, -50] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mb-8 rounded-full bg-white/20 p-6 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
          >
            <Hand className="w-16 h-16 text-white" strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Swipe to Explore</h2>
          <p className="text-white/70">좌우로 넘겨 새로운 룩을 확인하세요</p>
          <p className="mt-8 rounded-full border border-white/30 px-6 py-2 text-sm text-white/50 animate-pulse">
            화면을 터치하여 시작
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}