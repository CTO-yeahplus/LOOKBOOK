// components/UploadModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud, Sparkles, Loader2 } from "lucide-react";
import { useState, useRef } from "react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

export default function UploadModal({ isOpen, onClose, triggerHaptic }: UploadModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 파일 선택 시 미리보기 생성
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      triggerHaptic(20);
    }
  };

  // 🌟 (진짜 엔진) 사진을 백엔드 API로 전송하고 결과를 기다리는 함수
  const handleUpload = async () => {
    if (!selectedFile) return;
    triggerHaptic(50);
    setIsUploading(true);
    
    try {
      // 1. 사진을 택배 상자(FormData)에 포장
      const formData = new FormData();
      formData.append('image', selectedFile);

      // 2. 우리가 만든 백엔드 API로 전송
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const result = await res.json();
      
      if (!res.ok) throw new Error(result.error || "업로드 실패");

      // 3. 성공 시 축하 알림 및 화면 새로고침 (피드에 즉시 반영)
      triggerHaptic([50, 100, 50]);
      alert(`✨ 성공! AI 분석 완료:\n날씨: ${result.item.weather}\n태그: ${result.item.tags.join(', ')}`);
      
      // 모달 닫기 및 초기화 후 새로고침
      onClose();
      setSelectedFile(null);
      setPreviewUrl(null);
      window.location.reload(); // 새로고침하여 앱 메인 화면에 내 옷이 뜨게 만듭니다!

    } catch (error: any) {
      alert(`에러가 발생했습니다: ${error.message}`);
      setIsUploading(false);
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md" />
          
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed bottom-0 left-0 right-0 z-[101] flex h-[85vh] flex-col rounded-t-[32px] bg-[#1c1c1e] shadow-[0_-10px_50px_rgba(0,0,0,0.5)]">
            <div className="flex w-full justify-center pb-6 pt-4"><div className="h-1.5 w-12 rounded-full bg-white/20" /></div>
            
            <div className="flex items-center justify-between px-8 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Sparkles className="w-5 h-5 text-amber-300"/> Add to Lookbook</h2>
                <p className="text-sm text-white/50 mt-1">AI가 사진을 분석하여 날씨와 태그를 자동 부여합니다.</p>
              </div>
              <button onClick={onClose} className="rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 active:scale-90 transition-all"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center">
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
              
              {!previewUrl ? (
                <button onClick={() => fileInputRef.current?.click()} className="flex w-full max-w-sm flex-col items-center justify-center gap-4 rounded-3xl border-2 border-dashed border-white/20 bg-white/5 py-16 transition-all hover:bg-white/10 hover:border-white/40 active:scale-95">
                  <div className="rounded-full bg-white/10 p-4"><UploadCloud className="w-8 h-8 text-white/80" /></div>
                  <div className="text-center">
                    <span className="font-bold text-white">사진 선택하기</span>
                    <p className="text-xs text-white/50 mt-1">내 옷장의 옷을 찍어 올려보세요</p>
                  </div>
                </button>
              ) : (
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  <button onClick={() => { setPreviewUrl(null); setSelectedFile(null); }} className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white backdrop-blur-md hover:bg-black/70 transition-all"><X className="w-4 h-4" /></button>
                </div>
              )}

              {previewUrl && (
                <button onClick={handleUpload} disabled={isUploading} className="mt-8 flex w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-white py-4 text-[16px] font-bold text-black transition-all hover:bg-white/90 active:scale-95 disabled:opacity-50">
                  {isUploading ? <><Loader2 className="w-5 h-5 animate-spin" /> AI Analyzing...</> : "✨ AI 분석 및 등록하기"}
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}