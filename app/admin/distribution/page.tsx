// app/admin/distribution/page.tsx

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, Power, Twitter, Mail, FileText, Copy, Trash2,
  Clock, CheckCircle2, Send, Loader2, RefreshCw, Plus
} from "lucide-react";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";

interface PipelineItem {
  id: string;
  platform: string;
  publish_date: string | null;
  content: string;
  status: 'draft' | 'scheduled' | 'published';
  created_at: string;
}

export default function DistributionAdmin() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [autoPilot, setAutoPilot] = useState(false);
  const [pipeline, setPipeline] = useState<PipelineItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // 🌟 2. 어떤 버튼이 뺑뺑이(로딩)를 돌아야 하는지 추적하는 상태 추가
  const [generatingPlatform, setGeneratingPlatform] = useState<string | null>(null);

  // 🌟 관리자 인증 및 데이터 로드
  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user || session.user.email !== 'cto@yeahplus.co.kr') {
        alert("🔒 접근 거부: AURA 수석 에디터 권한이 필요합니다.");
        router.replace('/');
        return;
      }
      setIsCheckingAuth(false);
      fetchData();
    };
    init();
  }, [router]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // 1. 오토파일럿 상태 가져오기
      const { data: settingsData } = await supabase
        .from('aura_system_settings')
        .select('auto_pilot_enabled')
        .single();
      
      if (settingsData) setAutoPilot(settingsData.auto_pilot_enabled);

      // 2. 파이프라인 데이터 가져오기
      const { data: pipelineData } = await supabase
        .from('aura_content_pipeline')
        .select('*')
        .order('created_at', { ascending: false });

      if (pipelineData) setPipeline(pipelineData as PipelineItem[]);
    } catch (error) {
      console.error("데이터 로드 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 🌟 오토파일럿 메인 스위치 토글
  const toggleAutoPilot = async () => {
    const newState = !autoPilot;
    setAutoPilot(newState); // UI 즉각 반영 (Optimistic UI)

    const { error } = await supabase
      .from('aura_system_settings')
      .update({ auto_pilot_enabled: newState })
      .eq('id', 1); // 최초 생성된 ID가 1이라고 가정

    if (error) {
      alert("시스템 스위치 조작에 실패했습니다.");
      setAutoPilot(!newState); // 롤백
    }
  };

  // 🌟 상태 변경 (Draft -> Scheduled -> Published)
  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('aura_content_pipeline')
      .update({ status: newStatus })
      .eq('id', id);

    if (!error) {
      fetchData(); // 성공 시 리스트 새로고침
    }
  };

  // 🌟 [수술 1] 중복 클릭 방지 & 개별 버튼 로딩 상태 적용
  const generateTestDraft = async (platform: string) => {
    if (generatingPlatform) return; // 이미 다른 걸 생성 중이면 클릭 차단
    setGeneratingPlatform(platform); // 뺑뺑이 시작

    try {
      const response = await fetch('/api/admin/generate-draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform })
      });

      if (!response.ok) throw new Error('AI 원고 생성 실패');

      await fetchData();
      alert(`${platform}용 AI 원고가 성공적으로 생성되었습니다! ✍️`);
    } catch (error) {
      console.error(error);
      alert("🚨 AI 호출 실패. 백엔드 API가 준비되지 않았거나 오류가 발생했습니다.");
    } finally {
      setGeneratingPlatform(null); // 뺑뺑이 종료
    }
  };

  // 🌟 [수술 2] 완벽한 삭제 엔진 (DB 연동)
  const deleteItem = async (id: string) => {
    if (!window.confirm("정말 이 원고를 삭제하시겠습니까? DB에서도 영구 삭제됩니다. 🗑️")) return;
    
    // UI에서 즉각적으로 먼저 지워버림 (Optimistic UI - 더 빠른 체감 속도)
    setPipeline(prev => prev.filter(item => item.id !== id));

    // DB에서 실제 삭제 진행
    const { error } = await supabase
      .from('aura_content_pipeline')
      .delete()
      .eq('id', id);

    if (error) {
      alert("삭제 중 오류가 발생했습니다.");
      fetchData(); // 실패 시 원래대로 복구
    }
  };

  if (isCheckingAuth) {
    return <div className="min-h-screen bg-[#050505] flex justify-center items-center"><Loader2 className="w-10 h-10 animate-spin text-red-600"/></div>;
  }

  // 플랫폼별 아이콘 매핑
  const PlatformIcon = ({ platform, className }: { platform: string, className?: string }) => {
    if (platform === 'X') return <Twitter className={className} />;
    if (platform === 'Substack') return <Mail className={className} />;
    return <FileText className={className} />;
  };

  // 칸반 컬럼 렌더링 함수
  const renderColumn = (status: 'draft' | 'scheduled' | 'published', title: string, icon: React.ReactNode, borderColor: string) => {
    const items = pipeline.filter(item => item.status === status);
    
    return (
      <div className="flex-1 flex flex-col h-[70vh] bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {/* 컬럼 헤더 */}
        <div className={`p-4 border-b ${borderColor} bg-black/40 flex items-center justify-between`}>
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white">{title}</h3>
          </div>
          <span className="bg-white/10 text-white/50 px-2 py-0.5 rounded text-[10px] font-bold">{items.length}</span>
        </div>
        
        {/* 카드 리스트 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          <AnimatePresence>
            {items.map(item => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                className="bg-black/60 border border-white/10 p-4 rounded-xl flex flex-col gap-3 group hover:border-white/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-white/10 rounded text-[9px] font-mono tracking-widest uppercase">
                    <PlatformIcon platform={item.platform} className="w-3 h-3" />
                    {item.platform}
                  </div>
                  <span className="text-[9px] font-mono text-white/40">{new Date(item.created_at).toLocaleDateString()}</span>
                </div>
                
                {/* 🌟 [수술 완료] 줄임표(line-clamp)를 없애고 스크롤과 원클릭 복사 버튼을 장착합니다. */}
                <div className="relative group mt-2 mb-4">
                  {/* 1. 스크롤이 가능한 넉넉한 텍스트 박스 (줄바꿈 완벽 유지) */}
                  <div className="text-xs text-white/70 max-h-48 overflow-y-auto whitespace-pre-wrap pr-2 border border-white/10 rounded-lg p-3 bg-black/40 custom-scrollbar leading-relaxed">
                    {item.content} {/* 변수명이 draft.content 라면 맞게 수정해 주세요 */}
                  </div>

                  {/* 2. 마우스를 올리면 나타나는(Hover) 원클릭 전체 복사 버튼 */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // 부모 카드 클릭 이벤트 방지
                      navigator.clipboard.writeText(item.content);
                      alert('전체 원고가 클립보드에 복사되었습니다! 📝');
                    }}
                    className="absolute top-2 right-4 p-1.5 rounded-md bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40 shadow-lg backdrop-blur-md active:scale-95"
                    title="전체 텍스트 복사"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>

                {/* 상태별 액션 버튼 */}
                <div className="mt-2 pt-3 border-t border-white/10 flex justify-between items-center">
                  
                  {/* 🌟 1. 좌측: 영구 삭제(Trash) 버튼 장착 */}
                  <button 
                    onClick={() => deleteItem(item.id)} 
                    className="p-1.5 text-white/30 hover:text-red-500 hover:bg-red-500/10 rounded transition-colors active:scale-95"
                    title="영구 삭제"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  {/* 2. 우측: 기존 기능 버튼들 */}
                  <div className="flex gap-2">
                    {status === 'draft' && (
                      <button onClick={() => updateStatus(item.id, 'scheduled')} className="flex items-center gap-1 bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500 hover:text-black px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-colors">
                        <Clock className="w-3 h-3"/> Schedule
                      </button>
                    )}
                    {status === 'scheduled' && (
                      <button onClick={() => updateStatus(item.id, 'published')} className="flex items-center gap-1 bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-black px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-colors">
                        <Send className="w-3 h-3"/> Mark Published
                      </button>
                    )}
                    {status === 'published' && (
                      <span className="flex items-center gap-1 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                        <CheckCircle2 className="w-3 h-3"/> Done
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {items.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-white/20 font-mono text-[10px] uppercase tracking-widest">
              No items in {title}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 md:p-12 font-sans selection:bg-red-600">
      {/* 🌟 1. 헤더 & 마스터 스위치 */}
      <header className="mb-10 pb-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-serif italic font-black uppercase tracking-tighter text-red-600 flex items-center gap-3">
            <Activity className="w-8 h-8" /> Distribution Center
          </h1>
          <p className="font-mono text-[10px] tracking-widest text-white/50 uppercase mt-2">
            AI Auto-Pilot & Global Publishing Pipeline
          </p>
        </div>

        {/* 🌟 마스터 스위치 UI */}
        <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-500 ${autoPilot ? 'bg-red-600/10 border-red-500/50 shadow-[0_0_30px_rgba(220,38,38,0.2)]' : 'bg-white/5 border-white/10'}`}>
          <div className="flex flex-col text-right">
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/50">System Status</span>
            <span className={`font-black uppercase tracking-widest text-lg ${autoPilot ? 'text-red-500' : 'text-white/30'}`}>
              {autoPilot ? 'Auto-Pilot Engaged' : 'Manual Mode'}
            </span>
          </div>
          <button onClick={toggleAutoPilot} className="relative outline-none">
            {autoPilot ? (
              <Power className="w-12 h-12 text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all" />
            ) : (
              <Power className="w-12 h-12 text-white/20 hover:text-white/40 transition-all" />
            )}
          </button>
        </div>
      </header>

      {/* 🌟 2. 툴바 (수동 테스트 & 새로고침) */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          {/* 🌟 로딩 중이면 버튼을 비활성화하고 스피너를 돌립니다! */}
          <button onClick={() => generateTestDraft('X')} disabled={generatingPlatform !== null} className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-[10px] font-mono tracking-widest uppercase transition-colors disabled:opacity-50">
            {generatingPlatform === 'X' ? <Loader2 className="w-3 h-3 animate-spin text-red-500"/> : <Plus className="w-3 h-3"/>} Draft X
          </button>
          <button onClick={() => generateTestDraft('Substack')} disabled={generatingPlatform !== null} className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-[10px] font-mono tracking-widest uppercase transition-colors disabled:opacity-50">
            {generatingPlatform === 'Substack' ? <Loader2 className="w-3 h-3 animate-spin text-red-500"/> : <Plus className="w-3 h-3"/>} Draft Substack
          </button>
          <button onClick={() => generateTestDraft('Medium')} disabled={generatingPlatform !== null} className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-[10px] font-mono tracking-widest uppercase transition-colors disabled:opacity-50">
            {generatingPlatform === 'Medium' ? <Loader2 className="w-3 h-3 animate-spin text-red-500"/> : <Plus className="w-3 h-3"/>} Draft Medium
          </button>
        </div>
        <button onClick={fetchData} className="flex items-center gap-1.5 text-white/50 hover:text-white text-[10px] font-mono tracking-widest uppercase transition-colors">
          <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} /> Sync DB
        </button>
      </div>
      

      {/* 🌟 3. 3단 칸반 보드 (Pipeline) */}
      <div className="flex flex-col md:flex-row gap-6">
        {renderColumn('draft', 'AI Drafts (초안)', <FileText className="w-4 h-4 text-white/50"/>, 'border-white/10')}
        {renderColumn('scheduled', 'Scheduled (발행 대기)', <Clock className="w-4 h-4 text-yellow-500"/>, 'border-yellow-500/30')}
        {renderColumn('published', 'Published (발행 완료)', <CheckCircle2 className="w-4 h-4 text-green-500"/>, 'border-green-500/30')}
      </div>

    </div>
  );
}