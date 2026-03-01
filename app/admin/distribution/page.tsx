// app/admin/distribution/page.tsx

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, Power, Twitter, Mail, FileText, 
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

  // 🌟 즉시 테스트용 강제 초안 생성 (플랫폼별 톤앤매너 완벽 분리)
  const generateTestDraft = async (platform: string) => {
    let dummyContent = '';
    
    if (platform === 'X') {
      dummyContent = `[AURA Insight]\n"침묵은 가장 완벽한 핏이다." - 마틴 마르지엘라\n\n오늘 AURA 아카이브에 포착된 서늘한 미니멀리즘. 로고의 과시를 거부하고 오직 실루엣과 텍스처만으로 압도하는 룩을 확인하십시오.\n\n#AURA #HighEnd #Minimalism #OOTD`;
    } 
    else if (platform === 'Substack') {
      dummyContent = `[AURA CULT EXCLUSIVE] 주간 아카이브 리포트\n\n친애하는 컬트 멤버 여러분, 이번 주 AURA 시스템이 포착한 가장 완벽한 텍스처와 무드를 공유합니다. 남들과 다른 길을 걷는 오리지널들을 위한 프라이빗 에디토리얼과 큐레이션 아이템들을 지금 확인하십시오. 오직 여러분에게만 열려있습니다.`;
    } 
    else if (platform === 'Medium') {
      dummyContent = `[Tech & Philosophy] AURA의 AI 비전 분석은 어떻게 패션을 해체하는가.\n\n우리의 시스템은 단순히 옷의 종류를 인식하는 데 그치지 않습니다. 픽셀 단위로 텍스처를 스캔하고, 실루엣의 무드를 읽어내며, 과거 거장들의 패션 철학을 현대의 스트릿 씬과 교차 분석합니다. 기술이 개인의 데일리룩을 어떻게 하이엔드 예술로 격상시키는지에 대한 기술적, 철학적 딥 다이브 리포트.`;
    }

    const { error } = await supabase
      .from('aura_content_pipeline')
      .insert([{ platform, content: dummyContent, status: 'draft' }]);
    
    if (!error) fetchData();
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
                
                <p className="text-xs text-white/80 line-clamp-4 leading-relaxed font-serif">
                  {item.content}
                </p>

                {/* 상태별 액션 버튼 */}
                <div className="mt-2 pt-3 border-t border-white/10 flex justify-end gap-2">
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
          <button onClick={() => generateTestDraft('X')} className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-[10px] font-mono tracking-widest uppercase transition-colors">
            <Plus className="w-3 h-3"/> Draft X
          </button>
          <button onClick={() => generateTestDraft('Substack')} className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-[10px] font-mono tracking-widest uppercase transition-colors">
            <Plus className="w-3 h-3"/> Draft Substack
          </button>
          {/* 🌟 Medium 초안 생성 버튼 추가 */}
          <button onClick={() => generateTestDraft('Medium')} className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-[10px] font-mono tracking-widest uppercase transition-colors">
            <Plus className="w-3 h-3"/> Draft Medium
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