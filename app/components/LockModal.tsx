"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight, Sparkles } from "lucide-react";
import { VerifyResult } from "@/hooks/useGatekeeper";

interface LockModalProps {
  isOpen: boolean;
  onVerify: (code: string) => Promise<VerifyResult>;
}

export default function LockModal({ isOpen, onVerify }: LockModalProps) {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    if (!code) return;
    setIsVerifying(true);
    const res = await onVerify(code);
    if (!res.success) {
      setMsg(res.message || "오류가 발생했습니다.");
      setIsVerifying(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6 backdrop-blur-2xl bg-black/90"
        >
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }}
            className="max-w-md w-full bg-[#111] border border-white/10 p-10 rounded-[2.5rem] text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-[#ff3b30]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#ff3b30]/20 text-[#ff3b30]">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-2 italic font-serif text-white uppercase tracking-tighter">Aura Cult.</h2>
            <p className="text-white/40 text-sm mb-8">멤버십 전용 공간입니다. 초대 코드를 입력하십시오.</p>
            <div className="space-y-4">
              <input 
                value={code} onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="ENTER CODE"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-center font-mono tracking-[0.3em] focus:border-[#ff3b30] outline-none transition-all text-white"
                onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
              />
              <button 
                onClick={handleVerify} disabled={isVerifying}
                className="w-full bg-[#ff3b30] text-white py-4 rounded-2xl font-bold hover:bg-[#ff5b50] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isVerifying ? "Verifying..." : "Access Granted"}
                {!isVerifying && <ArrowRight className="w-4 h-4" />}
              </button>
              {msg && <p className="text-[#ff3b30] text-xs font-medium">{msg}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}