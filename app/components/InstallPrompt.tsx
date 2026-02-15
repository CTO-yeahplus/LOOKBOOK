// components/InstallPrompt.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Share, MoreVertical } from "lucide-react";

export default function InstallPrompt() {
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // 이미 앱으로 설치해서 들어왔거나, 닫기를 누른 적이 있다면 무시합니다.
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone;
    const hasDismissed = localStorage.getItem("aura_install_dismissed");
    
    if (isStandalone || hasDismissed) return;

    // 기기 판별
    const ua = window.navigator.userAgent;
    const isIOSDevice = /iPad|iPhone|iPod/.test(ua);
    setIsIOS(isIOSDevice);

    const timer = setTimeout(() => setShow(true), 3000); // 3초 뒤에 자연스럽게 팝업
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem("aura_install_dismissed", "true");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-28 left-4 right-4 z-[150] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#2a2a2c]/95 to-[#1c1c1e]/95 p-6 shadow-2xl backdrop-blur-xl">
          <button onClick={dismiss} className="absolute right-4 top-4 rounded-full bg-white/10 p-1.5 text-white/50 hover:text-white"><X className="w-4 h-4" /></button>
          
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-lg">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight mb-1">AURA 앱 설치하기</h3>
              <p className="text-sm text-white/70 mb-3">바탕화면에 설치하고 더 빠르고 매끄럽게 매일의 룩을 확인하세요.</p>
              
              {/* 기기별 맞춤 안내 */}
              <div className="rounded-xl bg-black/30 p-3 text-sm text-white/90 border border-white/5">
                {isIOS ? (
                  <div className="flex items-center gap-2">
                    하단의 <Share className="w-4 h-4 text-blue-400" /> <b>공유 버튼</b>을 누르고<br/><b>'홈 화면에 추가'</b>를 선택하세요.
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    상단의 <MoreVertical className="w-4 h-4 text-white" /> <b>메뉴 버튼</b>을 누르고<br/><b>'앱 설치'</b>를 선택하세요.
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}