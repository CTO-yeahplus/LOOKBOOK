// components/ArchiveModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Heart, ImageIcon } from "lucide-react";
import { useState } from "react";
import { FashionItem } from "../../hooks/useAura";
import { useTranslations } from 'next-intl'; // 🌟 추가

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  archiveData: FashionItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  triggerHaptic: (pattern: number | number[]) => void;
  uploadedData: FashionItem[]; // 🌟 유지
}

const appleSpring = { type: "spring" as const, stiffness: 300, damping: 25 };

export default function ArchiveModal({ isOpen, onClose, archiveData, searchQuery, setSearchQuery, triggerHaptic, uploadedData }: ArchiveModalProps) {
  const t = useTranslations('Archive');
  const [activeTab, setActiveTab] = useState<'saved' | 'uploaded'>('saved');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { triggerHaptic(20); onClose(); }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={appleSpring} className="fixed bottom-0 left-0 right-0 z-50 flex h-[90vh] flex-col rounded-t-[32px] bg-[#1c1c1e] shadow-2xl md:h-[80vh]">
            <div className="flex w-full cursor-grab justify-center pb-4 pt-3"><div className="h-1.5 w-12 rounded-full bg-white/20" /></div>
            
            <div className="flex flex-col border-b border-white/5 px-8 pb-4 md:px-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-white">{t('title')}</h2>
                <button onClick={() => { triggerHaptic(20); onClose(); }} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 active:scale-95"><X className="h-5 w-5 text-white/80" /></button>
              </div>

              {/* 🌟 탭 버튼 UI */}
              <div className="flex w-full rounded-2xl bg-white/5 p-1 mb-6">
                <button onClick={() => { triggerHaptic(10); setActiveTab('saved'); }} className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${activeTab === 'saved' ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}>
                  <Heart className="w-4 h-4" /> {t('tab_saved')} ({archiveData.length})
                </button>
                {/* 🌟 수정: (준비중) 텍스트를 지우고 실제 업로드한 사진 개수 표시 */}
                <button onClick={() => { triggerHaptic(10); setActiveTab('uploaded'); }} className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${activeTab === 'uploaded' ? 'bg-white text-black shadow-md' : 'text-white/50 hover:text-white'}`}>
                  <ImageIcon className="w-4 h-4" /> {t('tab_uploaded')} ({uploadedData?.length || 0})
                </button>
              </div>

              {activeTab === 'saved' && (
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input type="text" placeholder="비 오는 날, 더운 날, OOTD..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:bg-white/10 transition-colors" />
                </div>
              )}
            </div>

            <div className="flex-1 overflow-y-auto px-8 pb-20 pt-6 md:px-12">
              {activeTab === 'saved' ? (
                // 기존 저장된 룩 렌더링
                archiveData.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-white/30"><Search className="mb-4 h-12 w-12 opacity-50" strokeWidth={1} /><p>{t('empty_saved')}</p></div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
                    {archiveData.map((item) => (
                      <div key={`saved-${item.id}`} className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer">
                        <img src={item.imageUrl} crossOrigin="anonymous" alt="Saved look" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-sm font-medium text-white">{item.weather} {item.temperature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                // 🌟 수정: 업로드 탭 렌더링 (준비중 화면을 교체하고 실제 데이터 매핑)
                !uploadedData || uploadedData.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-white/30">
                    <ImageIcon className="mb-4 h-12 w-12 opacity-50" strokeWidth={1} />
                    <p>{t('empty_uploaded')}</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 md:gap-6">
                    {uploadedData.map((item) => (
                      <div key={`upload-${item.id}`} className="group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer">
                        <img src={item.imageUrl} crossOrigin="anonymous" alt="Uploaded look" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-sm font-medium text-white">{item.weather} {item.temperature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}