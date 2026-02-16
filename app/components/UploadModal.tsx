// components/UploadModal.tsx
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { X, Upload, Loader2, Sparkles } from "lucide-react";
import StampEditor from "./StampEditor"; 

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (file: File) => void;
  isAnalyzing: boolean;
  triggerHaptic: (pattern: number | number[]) => void;
}

export default function UploadModal({ 
  isOpen, 
  onClose, 
  onUpload, 
  isAnalyzing, 
  triggerHaptic,
}: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isStamping, setIsStamping] = useState(false);
  const [fileForStamping, setFileForStamping] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.[0]) {
      triggerHaptic(20); // 🌟 파일 드롭 시 가벼운 진동 피드백
      setFileForStamping(acceptedFiles[0]);
      setIsStamping(true);
    }
  }, [triggerHaptic]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
    multiple: false,
  });

  const handleStampingFinished = (editedImageBlob: Blob) => {
    const editedFile = new File([editedImageBlob], "aura_stamped_image.png", { type: "image/png" });
    setFile(editedFile);
    setIsStamping(false);
    setFileForStamping(null);
    // 🌟 안전 장치: onUpload가 전달되었을 때만 실행하여 크래시 방지
    if (onUpload) {
      onUpload(editedFile); 
    } else {
      console.error("onUpload 함수가 app/page.tsx에서 전달되지 않았습니다!");
    }
  };

  const handleClose = () => {
    triggerHaptic(10); // 🌟 모달 닫을 때 햅틱 피드백
    setFile(null);
    setIsStamping(false);
    setFileForStamping(null);
    onClose();
  };

  // 1. 분석 중일 때의 로딩 화면
  if (isAnalyzing) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            <div className="flex flex-col items-center text-[#EBE6DD]">
               <div className="relative mb-6">
                  <div className="absolute inset-0 bg-red-600 blur-xl opacity-50 animate-pulse"></div>
                  <Loader2 className="w-16 h-16 animate-spin relative z-10" />
               </div>
               <h3 className="text-2xl font-black font-serif italic tracking-tighter animate-pulse">ANALYZING VIBE...</h3>
               <p className="font-mono text-xs mt-2 opacity-60 tracking-widest">AURA Editor is deconstructing your look.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
  
  // 2. 스탬프 에디터 화면 표시
  if (isStamping && fileForStamping) {
    return (
       <AnimatePresence>
         {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200]">
              <StampEditor 
                imageFile={fileForStamping}
                onFinish={handleStampingFinished}
                onCancel={() => setIsStamping(false)}
              />
            </motion.div>
         )}
       </AnimatePresence>
    );
  }

  // 3. 초기 업로드 드롭존 화면
  return (
    <AnimatePresence>
      {isOpen && !file && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#EBE6DD] w-full max-w-md rounded-xl overflow-hidden shadow-[8px_8px_0px_rgba(0,0,0,1)] border-[4px] border-black relative"
          >
             <div className="p-6 pt-12">
              <div 
                {...getRootProps()} 
                className={`border-[3px] border-dashed rounded-lg h-64 flex flex-col items-center justify-center gap-4 transition-all cursor-pointer group relative overflow-hidden ${isDragActive ? 'border-red-600 bg-red-600/5' : 'border-black/30 hover:border-black hover:bg-black/5'}`}
              >
                <input {...getInputProps()} />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-30 pointer-events-none" />
                
                <motion.div animate={{ y: isDragActive ? [0, -10, 0] : 0 }} transition={{ repeat: Infinity, duration: 1.5 }}>
                   {isDragActive ? <Sparkles className="w-16 h-16 text-red-600" /> : <Upload className="w-12 h-12 text-black/40 group-hover:text-black transition-colors" />}
                </motion.div>
                
                <div className="text-center relative z-10">
                  <p className={`text-xl font-black font-serif italic tracking-tighter ${isDragActive ? 'text-red-600' : 'text-black'}`}>
                    {isDragActive ? "DROP IT LIKE IT'S HOT!" : "UPLOAD YOUR FIT Check."}
                  </p>
                  <p className="font-mono text-xs font-bold text-black/50 mt-2 tracking-widest uppercase">
                    Tap or Drag & Drop <br/>Supports JPG, PNG
                  </p>
                </div>
              </div>
            </div>
            {/* 닫기 버튼 */}
            <button onClick={handleClose} className="absolute top-2 right-2 p-2 hover:bg-black/10 rounded-full transition-colors z-10">
              <X className="w-6 h-6 text-black" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}