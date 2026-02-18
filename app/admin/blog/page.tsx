"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PenTool, Loader2, Copy, Check, FileText, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function BlogAdmin() {
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState<"medium" | "substack">("medium");
  const [language, setLanguage] = useState<"ko" | "en">("en");
  const [isGenerating, setIsGenerating] = useState(false);
  
  const [result, setResult] = useState<{ title: string; content: string } | null>(null);
  const [copied, setCopied] = useState(false);

  // 🌟 보안 검사 (기존 어드민과 동일)
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user || session.user.email !== 'cto@yeahplus.co.kr') {
        router.replace('/');
      }
    };
    checkAuth();
  }, [router]);

  const handleGenerate = async () => {
    if (!topic) return alert("주제를 입력해주세요.");
    setIsGenerating(true);
    setResult(null);

    try {
      const res = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, platform, language })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResult(data);
    } catch (error) {
      alert("생성 실패");
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const fullText = `# ${result.title}\n\n${result.content}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-[#ff3b30]">
      <header className="mb-12 flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <button onClick={() => router.back()} className="flex items-center gap-2 text-white/50 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h1 className="text-4xl font-serif italic font-black uppercase tracking-tighter text-[#ff3b30]">Aura Think Tank.</h1>
          <p className="font-mono text-xs text-white/50 mt-2 uppercase tracking-widest">Global Thought Leadership Generator</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* 입력 패널 */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-6">
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">Target Platform</label>
              <div className="flex gap-2">
                <button onClick={() => setPlatform("medium")} className={`flex-1 py-3 rounded-lg font-bold border transition-all ${platform === 'medium' ? 'bg-white text-black border-white' : 'border-white/20 text-white/40 hover:bg-white/5'}`}>Medium (Tech Blog)</button>
                <button onClick={() => setPlatform("substack")} className={`flex-1 py-3 rounded-lg font-bold border transition-all ${platform === 'substack' ? 'bg-[#ff3b30] text-white border-[#ff3b30]' : 'border-white/20 text-white/40 hover:bg-white/5'}`}>Substack (Newsletter)</button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">Language</label>
              <div className="flex gap-2">
                <button onClick={() => setLanguage("en")} className={`flex-1 py-2 rounded-lg font-mono text-xs border transition-all ${language === 'en' ? 'bg-white text-black border-white' : 'border-white/20 text-white/40'}`}>English (Global)</button>
                <button onClick={() => setLanguage("ko")} className={`flex-1 py-2 rounded-lg font-mono text-xs border transition-all ${language === 'ko' ? 'bg-white text-black border-white' : 'border-white/20 text-white/40'}`}>Korean (Domestic)</button>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-white/50 mb-2 block">Topic / Keyword</label>
              <textarea 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)} 
                placeholder="Ex: Why AI curation is better than human stylists, The future of OOTD..." 
                className="w-full h-32 bg-black/50 border border-white/20 p-4 rounded-xl text-white resize-none focus:border-[#ff3b30] outline-none transition-colors"
              />
            </div>

            <button 
              onClick={handleGenerate} 
              disabled={isGenerating || !topic}
              className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <PenTool className="w-5 h-5" />}
              Generate Draft
            </button>
          </div>
        </div>

        {/* 결과 패널 */}
        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 min-h-[500px]">
          {result ? (
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                <h2 className="text-xl font-bold leading-tight max-w-[80%]">{result.title}</h2>
                <button onClick={copyToClipboard} className="p-2 bg-white/10 rounded-lg hover:bg-white text-black hover:text-black transition-colors">
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-white" />}
                </button>
              </div>
              <div className="prose prose-invert prose-sm max-w-none font-serif leading-relaxed opacity-80 whitespace-pre-wrap overflow-y-auto custom-scrollbar flex-1">
                {result.content}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-white/20 space-y-4">
              <FileText className="w-16 h-16 opacity-20" />
              <p className="font-mono text-xs uppercase tracking-widest">Waiting for Input...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}