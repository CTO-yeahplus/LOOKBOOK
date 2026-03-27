// components/AdminModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Crown, Activity, Image as ImageIcon, Heart, 
  Send, ArrowUpRight, LayoutDashboard, Users, PenTool, BookOpen,
  UserCheck, Radio, Search, Megaphone, UploadCloud, Sparkles
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

type TabType = 'overview' | 'audit' | 'members' | 'broadcast' | 'sponsors' | 'magazine' | 'blog';

export default function AdminModal({ isOpen, onClose, triggerHaptic }: AdminModalProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [stats, setStats] = useState({ items: 0, saves: 0, users: 0, waitlist: 0 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [waitlist, setWaitlist] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [members, setMembers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [pushMessage, setPushMessage] = useState("");
  const [isSending, setIsSending] = useState(false);


  // ==========================================
  // 🌟 [NEW] Sponsor Ads 업로드 & AI 오토필 상태 관리
  // ==========================================
  const [sponsorFile, setSponsorFile] = useState<File | null>(null);
  const [sponsorPreview, setSponsorPreview] = useState<string | null>(null);
  const [isAnalyzingVibe, setIsAnalyzingVibe] = useState(false);
  
  const [sponsorData, setSponsorData] = useState({
    brand: "", 
    message: "", 
    url: "", 
    tags: "", 
    weather: "", 
    temp: "", 
    colors: [] as string[],
    igHandle: "", 
  });
  const [isUploadingAd, setIsUploadingAd] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 🌟 1. 파일 선택 시 -> AI 분석만 실행 (mode: 'analyzeOnly')
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSponsorFile(file);
      setSponsorPreview(URL.createObjectURL(file));

      setIsAnalyzingVibe(true);
      try {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('mode', 'analyzeOnly'); // 💡 핵심: DB 저장 금지 명령!
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`, { method: 'POST', body: formData });
        const data = await res.json();
        
        if (data.success) {
          // AI 분석 결과로 폼 오토필
          setSponsorData(prev => ({
            ...prev,
            weather: data.ai.weather,
            temp: data.ai.temperature,
            tags: data.ai.tags.join(', '),
            colors: data.ai.colors || ["#111", "#FFF", "#FF3B30"]
          }));
          triggerHaptic([30, 50]); 
        }
      } catch (error) {
        console.error("AI 분석 실패:", error);
      } finally {
        setIsAnalyzingVibe(false);
      }
    }
  };

  // 🚀 스폰서 광고 로켓 발사 (Auto User ID 탑재)
  const handleLaunchSponsorAd = async () => {
    if (!sponsorFile || !sponsorData.brand || !sponsorData.url) {
      return alert("이미지, 브랜드명, 아웃링크는 필수입니다.");
    }
    
    setIsUploadingAd(true);
    try {
      // 🌟 [NEW] 현재 이 버튼을 누른 관리자(로그인된 유저)의 ID를 가져옵니다.
      const { data: { user } } = await supabase.auth.getUser();

      const formData = new FormData();
      formData.append('image', sponsorFile);
      formData.append('isSponsored', 'true');
      formData.append('sponsorBrand', sponsorData.brand);
      formData.append('sponsorMessage', sponsorData.message);
      formData.append('sponsorUrl', sponsorData.url);
      
      if (sponsorData.igHandle) formData.append('uploaderIg', sponsorData.igHandle);
      
      // 🌟 [NEW] 직접 타이핑하지 않고, 시스템에서 뽑아낸 관리자 ID를 은밀하게 첨부합니다.
      if (user) formData.append('userId', user.id); 
      
      formData.append('weather', sponsorData.weather);
      formData.append('temperature', sponsorData.temp);
      formData.append('tags', sponsorData.tags);
      formData.append('colors', JSON.stringify(sponsorData.colors)); 

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`, { method: 'POST', body: formData });
      const data = await res.json();

      if (!data.success) throw new Error(data.error);

      alert("💎 스폰서 에디토리얼이 성공적으로 라이브 되었습니다!");
      setSponsorFile(null); setSponsorPreview(null);
      setSponsorData({ brand: "", message: "", url: "", tags: "", weather: "", temp: "", colors: [], igHandle: "" });
      
    } catch (error) {
      console.error(error);
      alert("업로드 중 오류가 발생했습니다.");
    } finally {
      setIsUploadingAd(false);
    }
  };

  // 🌟 통합 데이터 로더
  useEffect(() => {
    if (!isOpen) return;

    const fetchAllData = async () => {
      // 1. 통계 집계
      const { count: itemsCount } = await supabase.from('aura_fashion_items').select('*', { count: 'exact', head: true });
      const { count: savesCount } = await supabase.from('aura_saved_looks').select('*', { count: 'exact', head: true });
      const { count: usersCount } = await supabase.from('aura_user_profiles').select('*', { count: 'exact', head: true }).eq('is_approved', true);
      const { count: waitlistCount } = await supabase.from('aura_waitlist').select('*', { count: 'exact', head: true }).eq('status', 'pending');
      
      setStats({ 
        items: itemsCount || 0, saves: savesCount || 0, 
        users: usersCount || 0, waitlist: waitlistCount || 0 
      });

      // 2. 대기자 명단 (Audit)
      const { data: waitData, error: waitError } = await supabase.from('aura_waitlist').select('*').eq('status', 'pending').order('created_at', { ascending: true });
      // 🌟 [NEW] 만약 또 DB가 데이터를 숨기면 브라우저 콘솔창(F12)에 범인을 띄워줍니다!
      if (waitError) {
        console.error("🚨 Audit Board Fetch Error:", waitError.message);
      }

      if (waitData) setWaitlist(waitData);

      // 3. 승인된 멤버 목록 (CRM)
      const { data: memberData } = await supabase.from('aura_user_profiles').select('*').eq('is_approved', true).order('updated_at', { ascending: false }).limit(100); // 1만명 대비 limit 처리
      if (memberData) setMembers(memberData);
    };

    fetchAllData();
  }, [isOpen]);

  // 🌟 [NEW] 유저 강제 탈퇴 (Ban)
  const handleBanUser = async (userId: string, email: string) => {
    const confirmBan = window.confirm(`${email || '이 유저'}님의 앱 접근을 영구 차단하시겠습니까?`);
    if (!confirmBan) return;
    
    triggerHaptic(50);
    // is_approved를 false로 돌려 문지기(Gatekeeper)가 밖으로 쫓아내게 만듭니다.
    const { error } = await supabase.from('aura_user_profiles').update({ is_approved: false }).eq('id', userId);
    
    if (!error) {
      alert("🚫 Ban 처리되었습니다. 해당 유저는 더 이상 앱에 접근할 수 없습니다.");
      setMembers(members.filter(m => m.id !== userId)); // 목록에서 즉시 제거
      setStats(prev => ({ ...prev, users: prev.users - 1 }));
    }
  };

  // 🌟 관리자 권한 상승 (Make Admin)
  const handleMakeAdmin = async (userId: string, email: string) => {
    const confirmAdmin = window.confirm(`${email || '이 유저'}님에게 최고 관리자 권한을 부여하시겠습니까?`);
    if (!confirmAdmin) return;
    
    triggerHaptic(50);
    const { error } = await supabase.from('aura_user_profiles').update({ is_admin: true }).eq('id', userId);
    
    if (!error) {
      alert("👑 관리자 권한이 부여되었습니다.");
      // 목록 UI 즉시 업데이트
      setMembers(members.map(m => m.id === userId ? { ...m, is_admin: true } : m));
    }
  };

  // 🌟 승인 로직 (기존과 동일)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleApprove = async (user: any) => {
    const confirmApprove = window.confirm(`@${user.instagram_id}님을 승인하시겠습니까? (합격 이메일 자동 발송)`);
    if (!confirmApprove) return;
    
    triggerHaptic(50);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ waitlistId: user.id, email: user.email, instagram: user.instagram_id })
    });
    
    if (res.ok) {
      alert("✅ 승인 및 초대 코드 발송 완료!");
      setWaitlist(waitlist.filter(w => w.id !== user.id)); // UI 업데이트
      setStats(prev => ({ ...prev, waitlist: prev.waitlist - 1, users: prev.users + 1 }));
    } else {
      alert("❌ 처리 중 오류가 발생했습니다.");
    }
  };

  // 🌟 푸시 발송 로직
  const handleBroadcastPush = async () => {
    if (!pushMessage.trim()) return;
    const confirmSend = window.confirm(`전체 유저에게 푸시를 발송하시겠습니까?`);
    if (!confirmSend) return;

    setIsSending(true);
    try {
      // 🌟 [변경] 개별 호출 대신 단일 'broadcast' API를 호출합니다.
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/broadcast`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: "AURA EDITOR", 
          body: pushMessage,
          url: '/' 
        })
      });

      if (!response.ok) throw new Error("Broadcast failed");

      const result = await response.json();
      alert(`[SYSTEM] 총 ${result.count || 0}명에게 푸시 발송 및 로그 기록 완료!`);
      setPushMessage("");
    } catch (err) { 
      console.error(err);
      alert("전송 중 오류 발생"); 
    } finally { 
      setIsSending(false); 
    }
  };

  // 🌟 검색 필터링 (안전망 추가)
  const filteredWaitlist = waitlist.filter(u => {
    if (!searchQuery) return true; // 검색어가 없으면 모두 통과
    const q = searchQuery.toLowerCase();
    return (u.instagram_id || '').toLowerCase().includes(q) || 
          (u.email || '').toLowerCase().includes(q);
  });

  const filteredMembers = members.filter(m => {
    if (!searchQuery) return true; // 검색어가 없으면 모두 통과
    const q = searchQuery.toLowerCase();
    return (m.email || '').toLowerCase().includes(q) || 
          (m.used_invite_code || '').toLowerCase().includes(q);
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          {/* 🌟 10,000 유저 스케일을 감당할 Command Center UI */}
          <motion.div 
            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }} transition={{ type: "spring", damping: 25 }} 
            className="w-full h-full max-w-[1400px] bg-[#0A0A0A] border border-white/10 rounded-[2rem] shadow-2xl flex overflow-hidden"
          >
            
            {/* LNB (좌측 사이드바) */}
            <div className="w-20 md:w-64 bg-[#111] border-r border-white/5 flex flex-col justify-between shrink-0">
              <div>
                <div className="h-20 flex items-center justify-center md:justify-start md:px-8 border-b border-white/5">
                  <Crown className="w-6 h-6 text-[#ff3b30] md:mr-3" />
                  <span className="hidden md:block font-serif italic font-black text-xl tracking-tighter">Aura<span className="text-[#ff3b30]">.</span></span>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <NavButton icon={<LayoutDashboard/>} label="Overview" active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} />
                  <NavButton icon={<UserCheck/>} label={`Audit Board (${stats.waitlist})`} active={activeTab === 'audit'} onClick={() => setActiveTab('audit')} badge={stats.waitlist} />
                  <NavButton icon={<Users/>} label="Members CRM" active={activeTab === 'members'} onClick={() => setActiveTab('members')} />
                  <NavButton icon={<Radio/>} label="Broadcast" active={activeTab === 'broadcast'} onClick={() => setActiveTab('broadcast')} />
                  <NavButton icon={<Megaphone/>} label="Sponsor Ads" active={activeTab === 'sponsors'} onClick={() => setActiveTab('sponsors')} />
                  <NavButton icon={<BookOpen/>} label="Magazine Desk" active={activeTab === 'magazine'} onClick={() => setActiveTab('magazine')} />
                  <NavButton icon={<BookOpen/>} label="Blog Desk" active={activeTab === 'blog'} onClick={() => setActiveTab('blog')} />
                </div>
              </div>
              <div className="p-4 border-t border-white/5">
                <button onClick={onClose} className="w-full flex items-center justify-center md:justify-start gap-3 p-3 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  <X className="w-5 h-5" />
                  <span className="hidden md:block text-sm font-bold">Close Center</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col bg-[#050505] overflow-hidden">
              {/* Header */}
              <div className="h-20 border-b border-white/5 flex items-center justify-between px-8 shrink-0">
                <h2 className="text-xl font-bold uppercase tracking-widest text-white/80">
                  {activeTab === 'overview' && 'System Overview'}
                  {activeTab === 'audit' && 'Vibe Audit Board'}
                  {activeTab === 'members' && 'Member CRM'}
                  {activeTab === 'broadcast' && 'Comms & Broadcast'}
                </h2>
                {(activeTab === 'audit' || activeTab === 'members') && (
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input 
                      type="text" placeholder="Search ID or Email..." 
                      value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#111] border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs text-white focus:border-[#ff3b30] outline-none transition-all"
                    />
                  </div>
                )}
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                
                {/* 탭 1: OVERVIEW */}
                {activeTab === 'overview' && (
                  <div className="space-y-8 animate-in fade-in">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <StatCard title="Total Approved" value={stats.users} icon={<Crown className="text-yellow-400"/>} trend="+12 this week" />
                      <StatCard title="Pending Audit" value={stats.waitlist} icon={<UserCheck className="text-[#ff3b30]"/>} trend="Action Required" isAlert />
                      <StatCard title="Total Looks" value={stats.items} icon={<ImageIcon className="text-blue-400"/>} trend="DB Growing" />
                      <StatCard title="Aura Impacts" value={stats.saves} icon={<Heart className="text-rose-400"/>} trend="High Engagement" />
                    </div>
                    {/* Placeholder for future charts */}
                    <div className="w-full h-64 bg-[#111] border border-white/5 rounded-2xl flex items-center justify-center flex-col gap-2">
                       <Activity className="w-8 h-8 text-white/20" />
                       <span className="text-white/20 font-mono text-xs tracking-widest uppercase">Data Visualization Ready</span>
                    </div>
                  </div>
                )}

                {/* 탭 2: AUDIT BOARD (심사 대기열) */}
                {activeTab === 'audit' && (
                  <div className="animate-in fade-in bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-white/40 font-mono text-[10px] uppercase tracking-wider">
                        <tr>
                          <th className="p-4 font-normal">Instagram Handle</th>
                          <th className="p-4 font-normal">Contact Email</th>
                          <th className="p-4 font-normal">Applied Date</th>
                          <th className="p-4 font-normal text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredWaitlist.length === 0 ? (
                          <tr><td colSpan={4} className="p-8 text-center text-white/30">No pending audits.</td></tr>
                        ) : (
                          filteredWaitlist.map((user) => (
                            <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                              <td className="p-4">
                                <a href={`https://instagram.com/${user.instagram_id.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#ff3b30] flex items-center gap-2">
                                  @{user.instagram_id.replace('@', '')} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                              </td>
                              <td className="p-4 text-white/60 font-mono text-xs">{user.email}</td>
                              <td className="p-4 text-white/40 text-xs">{new Date(user.created_at).toLocaleDateString()}</td>
                              <td className="p-4 text-right">
                                <button onClick={() => handleApprove(user)} className="bg-[#ff3b30]/10 text-[#ff3b30] hover:bg-[#ff3b30] hover:text-white px-4 py-1.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all border border-[#ff3b30]/20">
                                  Approve
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 탭 3: MEMBERS CRM (합격자 관리) */}
                {activeTab === 'members' && (
                  <div className="animate-in fade-in bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/5 text-white/40 font-mono text-[10px] uppercase tracking-wider">
                        <tr>
                          <th className="p-4 font-normal">Identity</th>
                          <th className="p-4 font-normal">Invite Code</th>
                          {/* 🌟 [NEW] 가입일 컬럼 헤더 추가 */}
                          <th className="p-4 font-normal">Joined Date</th>
                          <th className="p-4 font-normal">Status</th>
                          <th className="p-4 font-normal text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredMembers.length === 0 ? (
                          <tr><td colSpan={5} className="p-8 text-center text-white/30">No members found.</td></tr>
                        ) : (
                          filteredMembers.map((member) => (
                            <tr key={member.id} className="hover:bg-white/[0.02] transition-colors group">
                              <td className="p-4 font-bold text-white flex items-center gap-2">
                                {member.is_admin && <Crown className="w-4 h-4 text-yellow-400" />}
                                {member.email || 'AURA Cult Member'}
                              </td>
                              <td className="p-4 text-[#ff3b30] font-mono text-xs font-bold">{member.used_invite_code || 'MASTER-KEY'}</td>
                              
                              {/* 🌟 [NEW] 가입일 데이터 렌더링 (가입일이 없으면 최근 수정일로 대체) */}
                              <td className="p-4 text-white/60 font-mono text-xs">
                                {member.created_at 
                                  ? new Date(member.created_at).toLocaleDateString() 
                                  : (member.updated_at ? new Date(member.updated_at).toLocaleDateString() : 'Unknown')}
                              </td>

                              <td className="p-4">
                                <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">
                                  Verified
                                </span>
                              </td>
                              <td className="p-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                  {!member.is_admin && (
                                    <button 
                                      onClick={() => handleMakeAdmin(member.id, member.email)}
                                      className="bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white px-3 py-1.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all"
                                    >
                                      Admin
                                    </button>
                                  )}
                                  <button 
                                    onClick={() => handleBanUser(member.id, member.email)}
                                    className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all"
                                  >
                                    Ban
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 탭 4: BROADCAST (푸시 & 시스템 메시지) */}
                {activeTab === 'broadcast' && (
                  <div className="max-w-2xl animate-in fade-in space-y-6">
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-[#ff3b30]/10 rounded-xl"><Send className="w-6 h-6 text-[#ff3b30]" /></div>
                        <div>
                          <h3 className="text-lg font-bold text-white">Global Push Notification</h3>
                          <p className="text-xs text-white/40">구독 중인 모든 유저의 디바이스로 즉시 알림을 전송합니다.</p>
                        </div>
                      </div>
                      <textarea 
                        value={pushMessage} onChange={(e) => setPushMessage(e.target.value)}
                        placeholder="전파할 메시지를 입력하세요. (예: 오늘 성수동 팝업스토어 티켓이 오픈되었습니다.)"
                        className="w-full h-32 bg-black border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/30 focus:border-[#ff3b30] outline-none resize-none mb-4 transition-colors"
                      />
                      <button 
                        onClick={handleBroadcastPush} disabled={isSending || !pushMessage.trim()}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest hover:bg-[#ff3b30] hover:text-white transition-all disabled:opacity-50 disabled:grayscale"
                      >
                        {isSending ? "Transmitting..." : "Initiate Broadcast"}
                      </button>
                    </div>
                  </div>
                )}

                {/* 탭 5: SPONSOR ADS (네이티브 광고 집행) */}
                {activeTab === 'sponsors' && (
                  <div className="animate-in fade-in grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* 좌측: 비주얼 업로드 및 미리보기 */}
                    <div className="flex flex-col gap-4">
                      <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                        <ImageIcon className="w-4 h-4"/> Editorial Visual
                      </h3>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="relative w-full aspect-[2/3] bg-[#111] border-2 border-dashed border-white/20 rounded-[2rem] flex items-center justify-center cursor-pointer hover:border-[#ff3b30] transition-colors overflow-hidden group"
                      >
                        <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
                        {sponsorPreview ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={sponsorPreview} alt="Preview" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="bg-black/80 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">Change Image</span>
                            </div>
                          </>
                        ) : (
                          <div className="text-center flex flex-col items-center text-white/30 group-hover:text-[#ff3b30] transition-colors">
                            <UploadCloud className="w-12 h-12 mb-4" />
                            <span className="font-mono text-sm tracking-widest uppercase">Click to Upload</span>
                            <span className="text-[10px] mt-2">High-Res JPG/PNG</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 우측: 메타데이터 입력 폼 */}
                    <div className="flex flex-col gap-6">
                      <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center gap-2 mb-2">
                        <Megaphone className="w-4 h-4"/> Campaign Meta
                      </h3>
                      {/* 🌟 AI 분석 중일 때 빛나는 이펙트 */}
                      <AnimatePresence>
                          {isAnalyzingVibe && (
                            <motion.span 
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              className="text-[10px] font-bold text-[#ff3b30] flex items-center gap-1.5 animate-pulse"
                            >
                              <Sparkles className="w-3 h-3" /> AURA VISION ANALYZING...
                            </motion.span>
                          )}
                        </AnimatePresence>
                      
                      
                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Sponsor Brand (필수)</label>
                          <input type="text" placeholder="e.g. GENTLE MONSTER" value={sponsorData.brand} onChange={e => setSponsorData({...sponsorData, brand: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white font-bold focus:border-[#ff3b30] outline-none" />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Campaign Message</label>
                          <input type="text" placeholder="e.g. 2026 BOLD COLLECTION" value={sponsorData.message} onChange={e => setSponsorData({...sponsorData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:border-[#ff3b30] outline-none" />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Target URL (필수)</label>
                          <input type="url" placeholder="https://..." value={sponsorData.url} onChange={e => setSponsorData({...sponsorData, url: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-[#ff3b30] font-mono text-sm focus:border-[#ff3b30] outline-none" />
                        </div>
                        {/* 🌟 [NEW] 브랜드 인스타 계정 & User ID 입력창 추가 */}
                        <div className="grid grid-cols-1 gap-4">
                          {/* 🌟 수정된 브랜드 인스타 계정 입력창 (단독 배치) */}
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Brand Instagram</label>
                          <input 
                            type="text" 
                            placeholder="e.g. @gentlemonster" 
                            value={sponsorData.igHandle} 
                            onChange={e => setSponsorData({...sponsorData, igHandle: e.target.value})} 
                            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white font-bold focus:border-[#ff3b30] outline-none" 
                          />
                        </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Target Weather</label>
                            <input type="text" value={sponsorData.weather} onChange={e => setSponsorData({...sponsorData, weather: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white text-center text-xl focus:border-[#ff3b30] outline-none" />
                          </div>
                          <div>
                            <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Target Temp</label>
                            <input type="text" value={sponsorData.temp} onChange={e => setSponsorData({...sponsorData, temp: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white text-center font-bold focus:border-[#ff3b30] outline-none" />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 block">Style Tags (쉼표로 구분)</label>
                          <input type="text" value={sponsorData.tags} onChange={e => setSponsorData({...sponsorData, tags: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white/70 font-mono text-xs focus:border-[#ff3b30] outline-none" />
                        </div>
                      </div>

                      <button 
                        onClick={handleLaunchSponsorAd}
                        disabled={isUploadingAd || !sponsorFile || !sponsorData.brand || !sponsorData.url}
                        className="mt-auto w-full py-5 rounded-2xl bg-gradient-to-r from-[#ff3b30] to-[#ff5b50] text-white font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,59,48,0.3)] disabled:opacity-50 disabled:grayscale"
                      >
                        {isUploadingAd ? "Transmitting..." : "Launch Editorial"}
                      </button>
                    </div>

                  </div>
                )}

                {/* 탭 6: MAGAZINE (매거진 에디터 데스크 게이트웨이) */}
                {activeTab === 'magazine' && (
                  <div className="animate-in fade-in flex flex-col items-center justify-center py-16 gap-6">
                    <div className="relative w-24 h-24 bg-red-600/10 rounded-full flex items-center justify-center mb-2 border border-red-500/30">
                      <div className="absolute inset-0 rounded-full border border-red-500/10 animate-ping" />
                      <BookOpen className="w-10 h-10 text-red-500" />
                    </div>
                    
                    <div className="text-center">
                      <h2 className="text-3xl font-serif italic font-black uppercase tracking-tighter text-white mb-3">
                        Aura Editorial
                      </h2>
                      <p className="font-mono text-xs uppercase tracking-widest text-white/50 max-w-sm leading-relaxed mb-10">
                        AI 기반 데이터 매거진 발행 및<br/>
                        CULT 멤버 전용 프리미엄 아카이브 관리.
                      </p>
                    </div>

                    <button 
                      onClick={() => {
                        // triggerHaptic이 선언되어 있다면 사용
                        if (typeof triggerHaptic === 'function') triggerHaptic(20);
                        onClose(); // 모달 닫기
                        router.push('/admin/magazine'); // 🌟 매거진 어드민으로 강제 이동!
                      }}
                      className="group relative overflow-hidden flex items-center justify-center gap-3 w-full max-w-sm py-5 rounded-2xl bg-gradient-to-r from-red-600 to-[#ff3b30] text-white font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,59,48,0.3)]"
                    >
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                      <PenTool className="w-5 h-5 transition-transform group-hover:rotate-12" />
                      Enter Editor Desk
                    </button>
                  </div>
                )}

                {/* 탭 7: BLOG (본사에서 활동하는 묵직한 AURA 철학이야기) */}
                {activeTab === 'blog' && (
                  <div className="flex flex-col items-center justify-center py-16 gap-6 animate-in fade-in">
                    <PenTool className="w-10 h-10 text-white mb-2" />
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-black uppercase text-white">Think Tank</h2>
                      <p className="text-xs text-white/50 uppercase tracking-widest">AI Blog & Newsletter Generator</p>
                    </div>
                    <button 
                      onClick={() => { onClose(); router.push('/admin/blog'); }}
                      className="w-full max-w-xs py-4 bg-white text-black font-bold uppercase rounded-xl hover:scale-105 transition-transform"
                    >
                      Open Generator
                    </button>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- 보조 컴포넌트들 ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NavButton({ icon, label, active, onClick, badge }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl transition-all ${
        active ? 'bg-[#ff3b30] text-white shadow-[0_0_20px_rgba(255,59,48,0.3)]' : 'text-white/50 hover:bg-white/5 hover:text-white'
      }`}
    >
      <div className="w-5 h-5 flex items-center justify-center shrink-0">{icon}</div>
      <span className="hidden md:block text-sm font-bold truncate">{label}</span>
      {badge > 0 && (
        <span className={`hidden md:flex ml-auto w-5 h-5 items-center justify-center rounded-full text-[10px] font-black ${active ? 'bg-white text-[#ff3b30]' : 'bg-[#ff3b30] text-white'}`}>
          {badge}
        </span>
      )}
    </button>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StatCard({ title, value, icon, trend, isAlert }: any) {
  return (
    <div className={`p-6 rounded-2xl border ${isAlert ? 'bg-[#ff3b30]/10 border-[#ff3b30]/30' : 'bg-[#111] border-white/5'}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest">{title}</span>
        {icon}
      </div>
      <div className="text-3xl font-black text-white mb-1">{value}</div>
      <div className={`text-[10px] font-bold tracking-widest uppercase ${isAlert ? 'text-[#ff3b30] animate-pulse' : 'text-white/30'}`}>{trend}</div>
    </div>
  );
}