"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Building2, Scale, Mail } from "lucide-react"; // 아이콘 추가
import { useTranslations } from "next-intl";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
  const t = useTranslations('Landing');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="fixed inset-0 z-[200] flex items-end md:items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-0"
        onClick={onClose}
      >
        <motion.div 
          initial={{ y: "100%", opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: "100%", opacity: 0 }} 
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* 🌟 헤더 */}
          <div className="flex justify-between items-center p-6 border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#ff3b30]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">Legal & Business Info</span>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 🌟 컨텐츠 스크롤 영역 */}
          <div className="p-6 md:p-8 space-y-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
            
            {/* 1. 회사 정보 */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                <Building2 className="w-3 h-3" /> Company Details
              </h3>
              <div className="font-mono text-xs text-white/70 space-y-2 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                <p>{t('footer_company')}</p>
                <p>{t('footer_biz_num')}</p>
                <p>{t('footer_address')}</p>
                <div className="flex items-center gap-2 pt-2 text-[#ff3b30]">
                  <Mail className="w-3 h-3" />
                  <a href={`mailto:cto@yeahplus.co.kr`} className="hover:underline">{t('footer_email').replace('EMAIL: ', '')}</a>
                </div>
              </div>
            </div>

            {/* 2. 약관 및 정책 */}
            <div className="space-y-4">
               <h3 className="flex items-center gap-2 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                <Scale className="w-3 h-3" /> Terms & Policy
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="/terms" className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer">
                  <span className="font-mono text-[10px] font-bold text-white uppercase">{t('footer_terms')}</span>
                  <span className="text-white/20 group-hover:text-white transition-colors">↗</span>
                </a>
                <a href="/privacy" className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer">
                  <span className="font-mono text-[10px] font-bold text-white uppercase">{t('footer_privacy')}</span>
                  <span className="text-white/20 group-hover:text-white transition-colors">↗</span>
                </a>
              </div>
            </div>

            {/* 3. 카피라이트 */}
            <div className="pt-4 border-t border-white/5 text-center">
              <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em]">
                {t('footer_copyright')}
              </p>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}