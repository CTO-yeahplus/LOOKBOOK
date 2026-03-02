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
            // 🌟 [핵심 수술 1] x축(좌우) 이동을 y축(상하) 스와이프 애니메이션으로 변경!
            // 아래에서 위로 쓸어 올리는 숏폼 특유의 제스처를 구현합니다.
            animate={{ y: [40, -40], opacity: [0, 1, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            className="mb-8 rounded-full bg-white/20 p-6 shadow-[0_0_50px_rgba(255,255,255,0.3)]"
          >
            <Hand className="w-16 h-16 text-white" strokeWidth={1.5} />
          </motion.div>
          
          {/* 🌟 [핵심 수술 2] 문구 변경 */}
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Scroll to Explore</h2>
          <p className="text-white/70">위아래로 스와이프하여 새로운 룩을 확인하세요</p>
          
          <p className="mt-8 rounded-full border border-white/30 px-6 py-2 text-sm text-white/50 animate-pulse">
            화면을 터치하여 시작
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}