"use client";

import { useState, useEffect } from "react";
import { Sparkles, Upload, FileText, Send, Image as ImageIcon, Loader2, DatabaseZap, Edit3, Trash2, Lock } from "lucide-react";
import { supabase } from "../../../lib/supabase"; 
import { useRouter } from "next/navigation"; // 🌟 추가

interface MagazineArticle {
    id: string;
    title: string;
    slug: string;
    tags: string[] | null; // DB에서 가져올 땐 배열일 수 있음
    content: string;
    cover_image_url: string;
    locale: string;
    is_premium: boolean;
    created_at: string;
    is_published: boolean;
    author: string;
  }

export default function MagazineAdmin() {
  const router = useRouter(); // 🌟 라우터 추가
  
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");
  const [locale, setLocale] = useState("en");
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);

  // 🌟 [NEW] 발행된 기사 리스트 & 수정 모드 상태
  const [savedArticles, setSavedArticles] = useState<MagazineArticle[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [article, setArticle] = useState({
    title: "",
    slug: "",
    tags: "",
    content: "",
    is_premium: false 
  });

  // 🌟 [NEW] 관리자 확인 로딩 상태 추가
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  // 🌟 [NEW] 화면이 켜지면 DB에서 작성된 기사들을 긁어옵니다.
  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('aura_magazine')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data && !error) setSavedArticles(data);
  };

  // 🌟 [핵심 보안] 화면이 켜지자마자 유저가 누구인지 검사합니다.
  useEffect(() => {
    const verifyAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      // 1. 로그인이 안 되어 있거나
      // 2. 이메일이 대표님(ADMIN) 계정이 아니라면!
      if (!session?.user || session.user.email !== 'cto@yeahplus.co.kr') {
        alert("🔒 접근 거부: AURA 수석 에디터(Admin) 권한이 필요합니다.");
        router.replace('/'); // 메인 화면으로 가차 없이 쫓아냅니다.
        return;
      }

      // 무사히 통과했다면 로딩을 풀고 기사 리스트를 불러옵니다.
      setIsCheckingAuth(false);
      fetchArticles();
    };

    verifyAdmin();
  }, [router]);

  // 🌟 [NEW] 검문 중일 때 보여줄 간지나는 로딩 화면 (return 렌더링 시작 부분)
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-red-600 font-mono">
        <Loader2 className="w-10 h-10 animate-spin mb-4" />
        <p className="tracking-[0.3em] text-xs uppercase font-bold">Verifying Admin Clearance...</p>
      </div>
    );
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  // 트렌드 추출 (유지)
  const handleExtractTrends = async () => {
    setIsExtracting(true);
    try {
      const { data: topLooks, error } = await supabase
        .from('aura_fashion_items') // 🌟 대표님이 찾으신 진짜 테이블 이름!
        .select('tags, weather, temperature')
        .order('likes_count', { ascending: false }) // 🌟 진짜 컬럼 이름!
        .limit(5);

      if (error) throw error;

      if (topLooks && topLooks.length > 0) {
        const allTags = topLooks.flatMap(look => look.tags || []);
        const dominantWeather = topLooks[0].weather || "흐림"; 
        const dominantTemp = topLooks[0].temperature || "5°C"; 
        
        const uniqueTags = Array.from(new Set(allTags)).slice(0, 3).join(", ");
        const trendKeyword = `현재 날씨 ${dominantWeather}(${dominantTemp})에 유저들이 가장 열광한 스타일: ${uniqueTags}`;
        
        setKeyword(trendKeyword);
        alert("🔥 데이터 싱크 완료!");
      } else {
        setKeyword("영하 5도 한파, 맥코트 코디, 미니멀리즘, 레이어드 룩");
        alert("DB 데이터 부족으로 72시간 트렌드 시뮬레이션 키워드가 적용되었습니다.");
      }
    } catch (error) {
      console.error("트렌드 추출 실패:", error);
      alert("데이터를 가져오는 중 문제가 발생했습니다.");
    } finally {
      setIsExtracting(false);
    }
  };

  const handleGenerateAI = async () => {
    if (!file && !previewUrl && !keyword) return alert("이미지와 키워드를 먼저 입력해주세요.");
    
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/generate-editorial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword, locale })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to generate');

      setArticle({
        title: data.title,
        slug: data.slug,
        tags: data.tags,
        content: data.content,
        is_premium: data.is_premuim
      });

    } catch (error) {
      const message = error instanceof Error ? error.message : "알 수 없는 오류";
      alert("작업 실패: " + message);
    } finally {
      setIsGenerating(false);
    }
  };

  // 🌟 [NEW] 기사 수정 모드 진입
  const handleEdit = (item: MagazineArticle) => { /* 🌟 수정됨: is_premium 불러오기 */
    setEditingId(item.id); setLocale(item.locale); setPreviewUrl(item.cover_image_url); setFile(null); setKeyword("");
    setArticle({ title: item.title, slug: item.slug, tags: item.tags ? item.tags.join(', ') : '', content: item.content, is_premium: item.is_premium || false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🌟 [NEW] 기사 삭제 로직
  const handleDelete = async (id: string) => {
    if (!window.confirm("정말로 이 매거진 기사를 삭제하시겠습니까?")) return;

    try {
      const { error } = await supabase.from('aura_magazine').delete().eq('id', id);
      if (error) throw error;
      
      alert("삭제되었습니다.");
      fetchArticles(); // 리스트 새로고침
    } catch (error) {
        const message = error instanceof Error ? error.message : "알 수 없는 오류";
        alert("삭제 실패: " + message);
    }
  };

  // 🌟 [NEW] 발행 (신규 작성 OR 기존 수정)
  const handlePublish = async () => {
    if (!article.title || !article.content) return alert("원고가 비어있습니다.");
    setIsPublishing(true);

    try {
      let cover_image_url = previewUrl || 'https://via.placeholder.com/800x1200'; 

      // 파일이 새로 등록되었다면 (사진을 바꿨다면) 업로드 진행
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;

        const { error: uploadError } = await supabase.storage.from('magazine_covers').upload(fileName, file);
        if (uploadError) throw new Error("이미지 클라우드 업로드에 실패했습니다.");

        const { data: publicUrlData } = supabase.storage.from('magazine_covers').getPublicUrl(fileName);
        cover_image_url = publicUrlData.publicUrl;
      }

      const payload = {
        title: article.title,
        slug: article.slug,
        content: article.content,
        tags: article.tags.split(',').map(t => t.trim()), 
        locale: locale,
        cover_image_url: cover_image_url, 
        is_published: true, 
        author: 'AURA AI Editor',
        is_premium: Boolean(article.is_premium)
      };

      if (editingId) {
        // 🌟 수정(Update) 모드
        const { error } = await supabase.from('aura_magazine').update(payload).eq('id', editingId);
        if (error) throw error;
        alert("🔥 기사가 성공적으로 수정되었습니다!");
      } else {
        // 🌟 신규(Insert) 모드
        const { error } = await supabase.from('aura_magazine').insert([payload]);
        if (error) throw error;
        alert("🔥 매거진 발행 및 이미지 업로드 완료!");
      }
      
      // 초기화 및 리스트 새로고침
      setEditingId(null);
      setArticle({ title: "", slug: "", tags: "", content: "", is_premium:false });
      setFile(null);
      setPreviewUrl(null);
      fetchArticles(); 
      
    } catch (error) {
        const message = error instanceof Error ? error.message : "알 수 없는 오류";
        alert("작업 실패: " + message);
    } finally {
      setIsPublishing(false);
    }
  };

  // 🌟 [NEW] 수정 취소 (신규 작성 모드로 복귀)
  const cancelEdit = () => {
    setEditingId(null);
    setArticle({ title: "", slug: "", tags: "", content: "", is_premium:false  });
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 md:p-12 font-sans selection:bg-red-600">
      <header className="mb-12 border-b border-white/10 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif italic font-black uppercase tracking-tighter text-red-600">AURA Editor Desk</h1>
          <p className="font-mono text-[10px] tracking-widest text-white/50 uppercase mt-2">Data-Driven Command Center</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setLocale('ko')} className={`px-3 py-1 font-mono text-xs font-bold border ${locale === 'ko' ? 'bg-white text-black border-white' : 'border-white/20 text-white/50'}`}>KR</button>
          <button onClick={() => setLocale('en')} className={`px-3 py-1 font-mono text-xs font-bold border ${locale === 'en' ? 'bg-white text-black border-white' : 'border-white/20 text-white/50'}`}>EN</button>
        </div>
      </header>

      {editingId && (
        <div className="max-w-7xl mx-auto mb-6 bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 p-4 rounded-xl flex justify-between items-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest">⚠️ You are editing an existing article.</span>
          <button onClick={cancelEdit} className="text-[10px] uppercase font-black tracking-widest bg-white text-black px-4 py-2 hover:bg-white/80 transition-colors">Cancel Edit</button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
        
        {/* ================= LEFT: Source Input ================= */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><ImageIcon className="w-4 h-4 text-red-500"/> Cover Image</h2>
            <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/20 hover:border-red-500/50 transition-colors cursor-pointer bg-black/50 relative overflow-hidden">
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              ) : (
                <div className="flex flex-col items-center text-white/30 group-hover:text-white/60">
                  <Upload className="w-8 h-8 mb-2" />
                  <span className="font-mono text-[10px] tracking-widest uppercase">Drop 룩북 이미지</span>
                </div>
              )}
            </label>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Sparkles className="w-4 h-4 text-red-500"/> AI Directive</h2>
              <button 
                onClick={handleExtractTrends}
                disabled={isExtracting}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-md font-mono text-[9px] uppercase tracking-widest transition-colors active:scale-95"
              >
                {isExtracting ? <Loader2 className="w-3 h-3 animate-spin" /> : <DatabaseZap className="w-3 h-3" />}
                Sync DB Trends
              </button>
            </div>

            <input 
              type="text" 
              placeholder="직접 입력하거나 Sync 버튼으로 데이터를 불러오세요." 
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full bg-black/50 border border-white/20 p-4 text-sm font-bold text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors mb-4"
            />
            <button 
              onClick={handleGenerateAI}
              disabled={isGenerating || (!file && !previewUrl) || (!keyword && !editingId)}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-white/10 disabled:text-white/30 text-white font-black uppercase tracking-widest py-4 flex justify-center items-center gap-2 transition-colors active:scale-95"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {isGenerating ? "Extracting Vibe..." : "Generate Editorial"}
            </button>
          </div>
        </div>

        {/* ================= RIGHT: Generated Editorial ================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-red-500" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest">Editorial Draft</h2>
          </div>
          
          <input 
            type="text" value={article.title} onChange={e => setArticle({...article, title: e.target.value})} placeholder="Title"
            className="w-full bg-transparent border-b border-white/20 py-3 text-3xl font-serif italic font-bold focus:outline-none focus:border-red-500 placeholder-white/20"
          />
          <input 
            type="text" value={article.slug} onChange={e => setArticle({...article, slug: e.target.value})} placeholder="url-slug-example"
            className="w-full bg-transparent py-2 text-xs font-mono text-white/50 focus:outline-none focus:text-white"
          />
          <input 
            type="text" value={article.tags} onChange={e => setArticle({...article, tags: e.target.value})} placeholder="Tags (comma separated)"
            className="w-full bg-transparent border-b border-white/20 py-2 text-sm font-mono text-indigo-400 focus:outline-none"
          />
          <textarea 
            value={article.content} onChange={e => setArticle({...article, content: e.target.value})} placeholder="AI가 작성한 원고가 이곳에 표시됩니다..."
            className="w-full h-80 bg-white/5 border border-white/10 p-4 mt-4 text-sm leading-relaxed focus:outline-none focus:border-white/30 custom-scrollbar resize-none"
          />

          {/* 🌟 [NEW] CULT ONLY 토글 버튼 */}
          <label className="flex items-center gap-3 cursor-pointer mt-4 border border-red-500/30 bg-red-500/5 p-4 rounded-xl hover:bg-red-500/10 transition-colors">
            <input type="checkbox" checked={!!article.is_premium} onChange={e => setArticle({...article, is_premium: e.target.checked})} className="w-5 h-5 accent-red-600" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2"><Lock className="w-4 h-4"/> Set as &quot;CULT ONLY&quot; (Premium)</span>
          </label>

          <button 
            onClick={handlePublish}
            disabled={isPublishing || !article.title}
            className={`w-full font-black uppercase tracking-widest py-5 mt-4 flex justify-center items-center gap-2 transition-colors active:scale-[0.98] ${editingId ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-black hover:bg-gray-200'} disabled:bg-white/10 disabled:text-white/30`}
          >
            {isPublishing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            {isPublishing ? "Publishing..." : editingId ? "Update Article" : "Publish to AURA"}
          </button>
        </div>
      </div>

      {/* ================= BOTTOM: Article Manager ================= */}
      <div className="max-w-7xl mx-auto pt-16 border-t border-white/10">
        <h2 className="font-mono text-sm font-bold uppercase tracking-widest flex items-center gap-2 mb-8"><DatabaseZap className="w-5 h-5 text-red-500"/> Published Archives</h2>
        
        {savedArticles.length === 0 ? (
          <p className="text-white/30 font-mono text-xs uppercase tracking-widest">No articles found in DB.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {savedArticles.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-16 bg-black rounded-md overflow-hidden shrink-0">
                    <img src={item.cover_image_url} alt="cover" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-white/40 uppercase mb-1">
                    {item.locale === 'ko' ? 'KOREAN' : 'ENGLISH'} • {new Date(item.created_at).toLocaleDateString()}
                    {item.is_premium && <span className="text-red-500 font-bold ml-2">🔒 CULT</span>}
                    </span>
                    
                    <h3 className="font-serif italic font-bold text-lg leading-tight">{item.title}</h3>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => handleEdit(item)} className="p-2 bg-white/10 text-white hover:bg-indigo-500 hover:text-white rounded-md transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 bg-white/10 text-white hover:bg-red-600 hover:text-white rounded-md transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}