// components/MyAuraReport.tsx
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Download, Hexagon } from "lucide-react";
import { toPng } from "html-to-image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MyAuraReport({ isOpen, onClose, report, user }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!report) return null;

  // 인스타 아이디 or 닉네임 추출 로직
  const igHandle = user?.user_metadata?.instagram;
  const fallbackName = user?.user_metadata?.name || user?.email?.split('@')[0] || 'GUEST';
  const displayId = igHandle ? `@${igHandle}` : `@${fallbackName}`;

  const handleCapture = async (type: 'download' | 'share') => {
    if (!cardRef.current) return;
    setIsProcessing(true);

    try {
      // 렌더링 안정화를 위한 짧은 대기
      await new Promise(resolve => setTimeout(resolve, 100));

      const dataUrl = await toPng(cardRef.current, { 
        quality: 0.95, 
        pixelRatio: 2, // 모바일 안정성
        cacheBust: true,
      });

      if (type === 'download') {
        const link = document.createElement('a');
        
        // 🌟 [핵심 수정] vibeTitle이 없을 때 'STYLE_REPORT'라는 기본값을 씁니다.
        const safeTitle = report?.vibeTitle 
          ? report.vibeTitle.replace(/\s/g, '_') 
          : 'STYLE_REPORT';
          
        link.download = `AURA_EDITORIAL_${safeTitle}.png`;
        link.href = dataUrl;
        
        // 브라우저 호환성을 위해 body에 붙였다가 클릭 후 제거
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const blob = await (await fetch(dataUrl)).blob();
        const file = new File([blob], 'AURA_ART.png', { type: 'image/png' });
        
        if (navigator.share) {
          await navigator.share({ files: [file] });
        } else {
          alert("공유하기를 지원하지 않는 브라우저입니다. 이미지 저장을 이용해주세요.");
        }
      }
    } catch (err) { 
      console.error("Image generation failed:", err);
      alert("이미지 저장 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally { 
      setIsProcessing(false); 
    }
  };

  // [엔진 1] 기하학 레이더 차트 (SVG 폴리곤) 생성기
  const renderRadarChart = () => {
    // report.topTags가 없으면 빈 배열로 처리
    const tags = (report.topTags || []).slice(0, 5);
    while (tags.length < 5) tags.push(["VAR", 1]); 
    const maxVal = Math.max(...tags.map((t: [string, number]) => t[1])) || 1; // 0 나누기 방지

    const points = tags.map((t: [string, number], i: number) => {
      const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
      const r = (t[1] / maxVal) * 40; 
      return `${50 + r * Math.cos(angle)},${50 + r * Math.sin(angle)}`;
    }).join(' ');

    return (
      <div className="relative w-full aspect-square flex items-center justify-center mb-8">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <polygon points="50,10 88,38 73,82 27,82 12,38" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
          <polygon points="50,30 69,44 62,66 38,66 31,44" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
          {[0, 1, 2, 3, 4].map(i => {
            const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
            return <line key={i} x1="50" y1="50" x2={50 + 40 * Math.cos(angle)} y2={50 + 40 * Math.sin(angle)} stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />;
          })}
          <polygon points={points} fill="rgba(255,59,48,0.2)" stroke="#FF3B30" strokeWidth="1" />
          <polygon points={points} fill="none" stroke="#000000" strokeWidth="0.2" className="mix-blend-overlay" />
        </svg>
        {tags.map((t: [string, number], i: number) => {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          const x = 50 + 55 * Math.cos(angle);
          const y = 50 + 55 * Math.sin(angle);
          return (
            <div key={i} className="absolute text-[6px] font-mono font-black uppercase tracking-widest text-black/60"
                 style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
              {t[0].substring(0, 5)}
            </div>
          );
        })}
      </div>
    );
  };

  // [엔진 2] 시그니처 컬러 팔레트
  const palettes = [
    { name: "CORE BLACK", hex: "#0F0F0F" },
    { name: "RAW CANVAS", hex: "#EBE6DD" },
    { name: "AURA RED", hex: "#FF3B30" },
    { name: "STEEL GREY", hex: "#8A8A8E" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-3xl bg-black/95 overflow-y-auto"
        >
          <div className="flex flex-col items-center gap-6 w-full max-w-sm my-auto py-8">
            
            <div 
              ref={cardRef}
              className="relative w-full bg-[#F4F4F2] text-[#0A0A0A] overflow-hidden flex flex-col p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              style={{ fontFamily: 'serif', minHeight: '600px' }}
            >
              {/* 배경 패턴 (외부 이미지) */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

              {/* Header & 아이디 표기 */}
              <div className="relative z-10 flex justify-between items-start border-b-[1px] border-black/20 pb-4 mb-8">
                <div>
                  <h3 className="text-[12px] font-black tracking-[0.3em] uppercase mb-1">AURA.STYLE</h3>
                  <p className="text-[7px] font-mono text-black/50 tracking-widest uppercase">Diagnostic Identity Report</p>
                </div>
                <div className="text-right flex flex-col items-end gap-1.5">
                  <span className="text-[8px] font-mono uppercase bg-black text-white px-2 py-0.5">CONFIDENTIAL</span>
                  <span className="text-[7px] font-mono font-bold tracking-widest uppercase text-black/70">MUSE. {displayId}</span>
                </div>
              </div>

              <div className="relative z-10 mb-6">
                <span className="text-[8px] font-mono font-bold tracking-[0.4em] text-[#FF3B30] uppercase mb-2 block flex items-center gap-1">
                  <Hexagon className="w-2 h-2 fill-[#FF3B30]" /> THE ARCHETYPE
                </span>
                <p className="text-[34px] font-black italic tracking-tighter leading-[0.9] break-keep uppercase">
                  {report.vibeTitleKo || "UNKNOWN VIBE"}<br></br>({report.vibeTitleEn || "Unknown"})
                </p>
              </div>

              <div className="relative p-1 z-10 grid grid-cols-2 gap-4 mb-8">
                <div className="col-span-1">
                  {renderRadarChart()}
                </div>
                <div className="col-span-1 flex flex-col justify-center space-y-4">
                {(report.topTags || []).slice(0, 3).map(([tag, count]: [string, number], idx: number) => (
                    <div key={tag} className="border-b-[0.5px] border-black/10 pb-2">
                    <div className="text-[6px] font-mono text-black/40 mb-1">COMP. 0{idx + 1}</div>
                    <div className="flex justify-between items-baseline">
                    <span className="text-[11px] font-black uppercase tracking-tight">{tag}</span>
                    <span className="text-[11px] font-mono italic text-[#FF3B30]">
                      {report.totalSaved ? Math.round((count / report.totalSaved) * 100) : 0}%
                    </span>
                    </div>
                </div>
                ))}
                </div>
              </div>
              
              <div className="relative z-10 mb-auto">
                <span className="text-[7px] font-mono font-bold tracking-[0.2em] text-black/40 uppercase mb-3 block">Extracted Color Palette</span>
                <div className="grid grid-cols-4 h-16 border-[0.5px] border-black/20">
                  {palettes.map((color, idx) => (
                    <div key={idx} className="flex flex-col h-full border-r-[0.5px] border-black/20 last:border-r-0">
                      <div className="flex-1 w-full" style={{ backgroundColor: color.hex }} />
                      <div className="h-6 bg-white flex flex-col justify-center items-center border-t-[0.5px] border-black/20">
                        <span className="text-[4px] font-black tracking-widest">{color.name}</span>
                        <span className="text-[4px] font-mono text-black/50">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Stamp */}
              <div className="relative z-10 mt-10 pt-4 border-t-[1px] border-black/20 flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="text-[7px] font-mono uppercase text-black/50">Issued by</span>
                  <span className="text-[12px] font-serif italic font-bold">Aura Creative Dept.</span>
                </div>
                <div className="w-12 h-12 rounded-full border-[2px] border-[#FF3B30] flex items-center justify-center -rotate-12 opacity-80 mix-blend-multiply">
                   <div className="text-[#FF3B30] font-black text-center leading-[0.8]">
                      <span className="text-[6px] tracking-tighter block">AURA</span>
                      <span className="text-[10px]">VERIFIED</span>
                   </div>
                </div>
              </div>
            </div>

            {/* 외부 액션 버튼 */}
            <div className="flex flex-col gap-3 w-full px-2">
              <button 
                onClick={() => handleCapture('share')} disabled={isProcessing}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#FF3B30] text-white text-[11px] tracking-widest font-black uppercase active:scale-95 transition-all shadow-[0_5px_20px_rgba(255,59,48,0.3)]"
              >
                {isProcessing ? "GENERATING..." : <><Share2 className="w-4 h-4" /> Share to Instagram</>}
              </button>
              <button 
                onClick={() => handleCapture('download')} disabled={isProcessing}
                className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 text-white text-[11px] tracking-widest font-black uppercase border border-white/20 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" /> Save Report
              </button>
              <button onClick={onClose} className="text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase py-3 mt-2">Close Document</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}