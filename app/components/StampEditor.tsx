// components/StampEditor.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Check, X, Type, Circle, Stamp as StampIcon, Trash2, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';
import { toBlob } from 'html-to-image';

type StampType = 'CULT' | 'AURA_CLB' | 'ARCHIVED';

interface StampData {
  id: string;
  type: StampType;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

interface StampEditorProps {
  imageFile: File;
  onFinish: (editedImageBlob: Blob) => void;
  onCancel: () => void;
}

export default function StampEditor({ imageFile, onFinish, onCancel }: StampEditorProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [stamps, setStamps] = useState<StampData[]>([]);
  const [selectedStampId, setSelectedStampId] = useState<string | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => setImageUrl(e.target?.result as string);
    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  const addStamp = (type: StampType) => {
    const newStamp: StampData = {
      id: Date.now().toString(),
      type,
      x: 50,
      y: 50,
      scale: 1,
      rotation: 0,
    };
    setStamps([...stamps, newStamp]);
    setSelectedStampId(newStamp.id);
  };

  const updateStamp = (id: string, updates: Partial<StampData>) => {
    setStamps(stamps.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const deleteStamp = (id: string) => {
    setStamps(stamps.filter(s => s.id !== id));
    setSelectedStampId(null);
  };

  const handleFinish = async () => {
    if (!editorRef.current || isSaving) return;
    setIsSaving(true);
    setSelectedStampId(null); // 🌟 캡처 전 모서리 조절자 숨기기

    setTimeout(async () => {
      try {
        const blob = await toBlob(editorRef.current!, {
          cacheBust: true,
          pixelRatio: 2,
          backgroundColor: 'transparent',
        });

        if (blob) {
          onFinish(blob);
        }
      } catch (error) {
        console.error("Stamping failed:", error);
      } finally {
        setIsSaving(false);
      }
    }, 150);
  };

  if (!imageUrl) return null;

  return (
    <div className="fixed inset-0 z-[300] bg-black flex flex-col">
      {/* 헤더 */}
      <div className="h-16 px-4 flex items-center justify-between bg-black z-20 shrink-0">
        <button onClick={onCancel} className="text-white/60 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-white font-mono text-sm uppercase tracking-widest">Stamping Phase</h2>
        <button 
          onClick={handleFinish} 
          disabled={isSaving}
          className="bg-red-600 text-white px-4 py-2 font-black text-sm uppercase tracking-widest skew-x-[-10deg] shadow-[3px_3px_0px_black] border border-white/20 flex items-center gap-2"
        >
          {isSaving ? 'Merging...' : <><Check className="w-4 h-4" /> Done</>}
        </button>
      </div>

      {/* 에디터 메인 영역 */}
      <div 
        className="flex-1 relative bg-[#1A1A1A] overflow-hidden flex items-center justify-center p-4"
        onClick={() => setSelectedStampId(null)} // 빈 공간 클릭 시 조절자 해제
      >
        <div ref={editorRef} className="relative shadow-2xl inline-block max-h-full max-w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} className="max-h-[75vh] object-contain pointer-events-none" alt="Editing Base" />          
          {stamps.map((stamp) => (
            <DraggableStamp 
              key={stamp.id} 
              stamp={stamp} 
              containerRef={editorRef} 
              isSelected={selectedStampId === stamp.id}
              onSelect={() => setSelectedStampId(stamp.id)}
              onUpdate={updateStamp}
              onDelete={deleteStamp}
            />
          ))}
        </div>
      </div>

      {/* 하단 스탬프 추가 툴바 */}
      <div className="h-24 bg-[#1A1A1A] border-t border-white/10 flex items-center justify-center gap-6 z-20 shrink-0">
        <ToolbarButton icon={<Type className="w-5 h-5" />} label="CULT BOX" onClick={() => addStamp('CULT')} color="bg-red-600" />
        <ToolbarButton icon={<Circle className="w-5 h-5" />} label="AURA CLB" onClick={() => addStamp('AURA_CLB')} color="bg-black" />
        <ToolbarButton icon={<StampIcon className="w-5 h-5" />} label="ARCHIVED" onClick={() => addStamp('ARCHIVED')} color="bg-blue-600" stroke={true} />
      </div>
    </div>
  );
}

interface ToolbarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color: string;
  stroke?: boolean;
}

const ToolbarButton = ({ icon, label, onClick, color, stroke = false }: ToolbarButtonProps) => (
    <button onClick={onClick} className="flex flex-col items-center group active:scale-95 transition-transform">
    <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center border-2 border-[#EBE6DD] shadow-[3px_3px_0px_rgba(0,0,0,0.5)] group-hover:-translate-y-1 transition-transform ${stroke ? 'text-transparent bg-clip-text border-blue-500' : 'text-[#EBE6DD]'}`}>
      {icon}
    </div>
    <span className="text-[8px] font-mono font-bold text-white/60 uppercase tracking-widest mt-2">{label}</span>
  </button>
);

interface DraggableStampProps {
  stamp: StampData;
  containerRef: React.RefObject<HTMLDivElement>;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (id: string, updates: Partial<StampData>) => void;
  onDelete: (id: string) => void;
}

// 🌟 마우스 트래킹 및 튕김 현상 완벽 해결판
const DraggableStamp = ({ stamp, containerRef, isSelected, onSelect, onUpdate, onDelete }: DraggableStampProps) => {
  const x = useMotionValue(stamp.x);
  const y = useMotionValue(stamp.y);

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragMomentum={false}
      onClick={(e) => e.stopPropagation()} 
      onPointerDown={() => onSelect()}
      
      // 🌟 [해결 1] 드래그가 끝나는 순간, 현재 프레이머 모션의 좌표를 React 부모 상태에 저장! (제자리 튕김 완벽 방지)
      onDragEnd={() => {
        onUpdate(stamp.id, { x: x.get(), y: y.get() });
      }}
      
      // 🌟 [해결 2] 'transition-all' 제거! (드래그 위치 변화에 딜레이를 주어 마우스를 버벅이게 만든 주범)
      className={`absolute top-0 left-0 cursor-move ${isSelected ? 'ring-1 ring-red-500/50 rounded-sm shadow-2xl' : ''}`}
      
      style={{ x, y, touchAction: 'none', zIndex: isSelected ? 50 : 10 }}
    >
      {/* 선택되었을 때만 모서리에 나타나는 다이렉트 조절자 */}
      {isSelected && (
        <>
          {/* 좌측 상단: 삭제 */}
          <button
            onPointerDown={(e) => e.stopPropagation()} // 조절자를 누를 땐 드래그 발동 차단
            onClick={(e) => { e.stopPropagation(); onDelete(stamp.id); }}
            className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors z-20"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          {/* 우측 상단: 회전 (15도씩) */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onUpdate(stamp.id, { rotation: stamp.rotation + 15 }); }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          {/* 좌측 하단: 축소 */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onUpdate(stamp.id, { scale: Math.max(0.5, stamp.scale - 0.15) }); }}
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* 우측 하단: 확대 */}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onUpdate(stamp.id, { scale: Math.min(3, stamp.scale + 0.15) }); }}
            className="absolute -bottom-4 -right-4 w-8 h-8 bg-black rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-20"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </>
      )}

      {/* 내부 스탬프 디자인 영역 */}
      <div style={{ transform: `scale(${stamp.scale}) rotate(${stamp.rotation}deg)`, transformOrigin: 'center' }}>
        
        {stamp.type === 'CULT' && (
          <div className="bg-red-600 text-[#EBE6DD] px-3 py-1 font-black font-serif italic text-xl uppercase tracking-tighter -rotate-6 border-[3px] border-black shadow-[4px_4px_0px_rgba(0,0,0,0.4)] pointer-events-none">
            CULT.
          </div>
        )}
        
        {stamp.type === 'AURA_CLB' && (
          <div className="w-20 h-20 rounded-full bg-black border-[4px] border-[#EBE6DD] flex items-center justify-center rotate-12 shadow-[4px_4px_0px_rgba(255,0,0,0.6)] pointer-events-none">
             <div className="text-center leading-[0.8]">
               <span className="block text-[8px] font-mono text-[#EBE6DD]">THE</span>
               <span className="block text-xl font-black font-serif italic text-red-600">AURA</span>
               <span className="block text-[10px] font-mono font-bold text-[#EBE6DD] tracking-widest">CLB.</span>
             </div>
          </div>
        )}
        
        {stamp.type === 'ARCHIVED' && (
          <div className="border-[4px] border-blue-600 text-blue-600 px-4 py-2 font-mono font-bold text-lg uppercase tracking-[0.2em] rotate-3 mix-blend-hard-light opacity-80 bg-blue-600/10 backdrop-blur-sm rounded-sm pointer-events-none" style={{borderStyle: 'dashed'}}>
            ARCHIVED
            <span className="block text-[8px] text-center border-t border-blue-600 mt-1 pt-1">Verified.</span>
          </div>
        )}
        
      </div>
    </motion.div>
  );
};