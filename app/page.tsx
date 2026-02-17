"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, Sparkles, CloudSun, Fingerprint, Lock, 
  CheckCircle, Smartphone, Zap, Globe, Crown, 
  ShieldCheck, Eye, MousePointer2, CreditCard, Mail
} from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // 🌟 [NEW] 라우터 엔진 장착

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function LandingPage() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: containerRef });

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const textX = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const router = useRouter(); // 🌟 라우터 변수 활성화
  const [accessCode, setAccessCode] = useState(""); // 🌟 입력한 코드 기억하기

  // 🌟 목업 슬라이드쇼 상태 관리
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  //  handleGrantAccess 함수 수정
  const handleGrantAccess = () => {
    if (!accessCode.trim()) return alert("코드를 입력해주세요.");
    
    // 🌟 입력한 코드를 브라우저 메모리에 저장!
    localStorage.setItem("aura_pending_code", accessCode.trim().toUpperCase());
    
    // 🌟 /home으로 이동
    router.push('/home');
  };

  // 🌟 앱 스크린샷 리스트 (나중에 실제 앱 캡쳐 화면으로 교체하세요!)
  const appScreens = [
    "/images/aura_brand.png", // Screen 1: 메인 홈 (예시)
    "/images/aura_brand_01.png", // Screen 2: AI 분석 결과 (예시 - 실제론 다른 이미지)
    "/images/aura_brand_02.png", // Screen 3: 프로필 화면 (예시 - 실제론 다른 이미지)
  ];
  // 🌟 [NEW] 웨이팅 리스트 상태 관리
  const [igHandle, setIgHandle] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 🌟 [NEW] 제출 함수
  const handleWaitlistSubmit = async () => {
    if (!igHandle || !email) return alert("인스타그램 ID와 이메일을 모두 입력해주세요.");
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ instagram: igHandle, email })
      });
      if (res.ok) setIsSubmitted(true);
      else alert("오류가 발생했습니다. 다시 시도해주세요.");
    } catch (e) {
      alert("네트워크 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 🌟 [NEW] 3초마다 자동으로 화면 전환 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenIndex((prevIndex) => (prevIndex + 1) % appScreens.length);
    }, 3000); // 3000ms = 3초

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050505] text-[#f5f5f7] overflow-x-hidden selection:bg-[#ff3b30] selection:text-white font-sans">
      
      {/* 🌑 Global Visual FX */}
      <div className="fixed inset-0 z-[999] pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <motion.div 
        className="fixed w-[600px] h-[600px] bg-[#ff3b30]/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen"
        animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
      />

      {/* 🌟 1. Hero Section (유지) */}
      <section className="relative h-[110vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505] z-10" />
          <img src="/images/aura_brand.png" className="w-full h-full object-cover opacity-60" alt="Aura Brand Lifestyle" />
        </motion.div>
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-20">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="mb-6 inline-block border border-[#ff3b30] px-4 py-1 rounded-full">
            <span className="text-[#ff3b30] text-[10px] font-black tracking-[0.5em] uppercase">Ambient Intelligence</span>
          </motion.div>
          <h1 className="text-[12vw] md:text-[10rem] font-serif italic font-black tracking-tighter mb-8 leading-[0.75] uppercase mix-blend-difference">
            Aura<span className="text-[#ff3b30]">.</span>
          </h1>
          <p className="text-xl md:text-3xl text-white/60 mb-12 max-w-2xl mx-auto font-light tracking-tight italic">
            "검색의 시대는 끝났습니다. 이제 당신의 <span className="text-white border-b border-white/30">분위기</span>만 남습니다."
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/home" className="group relative overflow-hidden bg-[#ff3b30] text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,59,48,0.4)]">
              <span className="relative z-10">ENTER THE SYSTEM</span>
              <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              <style jsx>{`.group:hover span { color: black; }`}</style>
            </Link>
          </div>
        </motion.div>

        <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap opacity-20">
          <motion.div style={{ x: textX }} className="text-[10vh] font-black tracking-tighter uppercase inline-block">
             Aura Vision Engine / Atmospheric Curation / Digital DNA Match / No Search Needed / 
          </motion.div>
        </div>
      </section>

      {/* 🌟 2. Feature Section (유지) */}
      <section className="py-60 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-40 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-none uppercase">
              The Engine<br/>of Aura.
            </h2>
            <div className="space-y-20">
              <div className="group cursor-default">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-[#ff3b30] group-hover:w-24 transition-all" />
                  <span className="text-[#ff3b30] font-mono text-sm uppercase tracking-widest">01. AURA Environmental Sync</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Atmospheric Reading</h3>
                <p className="text-white/40 text-lg leading-relaxed">
                  AURA는 당신이 숨 쉬는 공기의 데이터를 읽습니다. 기온, 습도, 풍향을 넘어 현재 도시의 미묘한 색채 변화까지 실시간으로 패션 룩에 동기화합니다.
                </p>
              </div>
              <div className="group cursor-default">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-[#ff3b30] group-hover:w-24 transition-all" />
                  <span className="text-[#ff3b30] font-mono text-sm uppercase tracking-widest">02. AURA Vision Intelligence</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">DNA Deconstruction</h3>
                <p className="text-white/40 text-lg leading-relaxed">
                  AURA AI는 단순한 이미지가 아닌 스타일의 근원을 봅니다. 업로드된 사진 속 소재의 질감, 실루엣의 곡선, 컬러의 파동을 분석하여 당신만의 패션 아키타입을 완성합니다.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 bg-gradient-to-tr from-[#111] to-[#222] p-2 rounded-[4rem] border border-white/10 shadow-2xl">
              <div className="aspect-[9/19] bg-black rounded-[3.8rem] overflow-hidden relative">
                 <img src="/images/aura_brand.png" className="h-full w-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" alt="App Preview" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌟 3. Cult of 1,000 (🔥 힙스터 에고 자극 & VVIP 카드 업그레이드) */}
      <section id="ambassador" className="py-60 px-6 bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 pointer-events-none">
           <Crown className="w-40 h-40 text-black/5 rotate-12" />
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-32">
            <span className="font-mono text-xs font-black uppercase tracking-[0.5em] mb-4 block text-[#ff3b30]">Invite-Only Collective</span>
            <h2 className="text-[9vw] md:text-[7rem] font-serif italic font-black tracking-tighter leading-[0.85] uppercase">
              Define the Scene.<br/>Become the Standard.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* 왼쪽: 힙스터 자극 멘트 */}
            <div className="space-y-12 text-2xl font-light leading-snug order-2 md:order-1">
              <p className="text-black/60">
                트렌드를 따르는 팔로워는 중요합니다. <b className="text-black font-black underline decoration-[#ff3b30]">그들을 확실하게 이끌면서, 자신의 바이브가 곧 장르인 1,000명</b>의 오리지널을 찾습니다.
              </p>
              <div className="space-y-8">
                {[
                  { title: "The Style Originator", desc: "당신의 룩은 단순한 데이터가 아닙니다. AURA AI가 '힙함'을 정의하는 기준점이 됩니다." },
                  { title: "Verified Taste Authority", desc: "당신의 프로필에 부여되는 'Founder' 배지는 이 구역에서 가장 확실한 안목의 증명서입니다." },
                  { title: "Curator of the Future", desc: "대중에게 공개되기 전, 가장 먼저 새로운 기능을 경험하고 방향성을 결정합니다." }
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.2 }} className="border-l-2 border-black/10 pl-6">
                    <h4 className="text-lg font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                       {item.title}
                    </h4>
                    <p className="text-lg text-black/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* 오른쪽: VVIP 하이엔드 블랙 카드 (업그레이드됨) */}
            <div className="perspective-1000 order-1 md:order-2">
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
                initial={{ rotateY: -15, rotateX: 10 }}
                whileInView={{ rotateY: -5, rotateX: 5 }}
                transition={{ type: "spring", damping: 20 }}
                className="w-full aspect-[1.58/1] rounded-[2rem] relative overflow-hidden shadow-2xl transform-gpu transition-all duration-500 group"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)"
                }}
              >
                 {/* 카드 질감 및 홀로그램 효과 */}
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] mix-blend-overlay" />
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-[length:200%_200%] animate-gradient-xy pointer-events-none" />

                 <div className="relative h-full p-10 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                       {/* IC 칩 */}
                       <div className="w-14 h-10 rounded-md bg-gradient-to-br from-[#d4af37] to-[#f2e6a3] border border-[#b39020] shadow-inner flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#b39020_2px,#b39020_4px)]" />
                          <CreditCard className="w-6 h-6 text-black/40" />
                       </div>
                       <div className="text-right">
                          <h3 className="text-3xl font-serif italic font-black uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ff3b30]">Aura<br/>Black.</h3>
                          <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.2em]">Private Access Key</span>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div>
                          <span className="text-[9px] font-mono text-white/30 uppercase block mb-1">Authorized Code</span>
                          <p className="text-4xl font-mono font-black tracking-widest text-white/90" style={{textShadow: "0 0 20px rgba(255,59,48,0.5)"}}>AURA-7777</p>
                       </div>
                       <div className="flex justify-between items-end">
                          <div>
                             <span className="text-[9px] font-mono text-white/30 uppercase block mb-1">Member Status</span>
                             <p className="text-sm font-bold tracking-widest uppercase text-white/80">Founding Originator</p>
                          </div>
                          <Crown className="w-8 h-8 text-[#ff3b30]" />
                       </div>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 [UPDATE] Waitlist Section (심사 접수 & 심사 중 상태) */}
      <section className="py-40 px-6 bg-[#111] text-center relative border-t border-white/5">
         <div className="max-w-2xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
               <Mail className="w-10 h-10 text-white/30 mx-auto mb-6" />
               <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 uppercase">Request Access</h2>
               
               {!isSubmitted ? (
                 // 📝 1. 신청 폼
                 <>
                   <p className="text-white/50 mb-10 text-lg">
                      AURA는 엄격한 심사를 통해 커뮤니티의 감도를 유지합니다.<br/>
                      당신의 <span className="text-white">Instagram ID</span>를 제출하여 심사를 대기하십시오.
                   </p>
                   <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <input 
                        type="text" 
                        value={igHandle}
                        onChange={(e) => setIgHandle(e.target.value)}
                        placeholder="INSTAGRAM @HANDLE" 
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full text-center font-mono text-sm focus:border-[#ff3b30] outline-none transition-all uppercase"
                      />
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="YOUR EMAIL ADDRESS" 
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full text-center font-mono text-sm focus:border-white/30 outline-none transition-all uppercase"
                      />
                      <button 
                        onClick={handleWaitlistSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-white text-black px-8 py-4 rounded-full font-black hover:bg-[#ff3b30] hover:text-white transition-all whitespace-nowrap disabled:opacity-50"
                      >
                         {isSubmitting ? "TRANSMITTING..." : "SUBMIT FOR AUDIT"}
                      </button>
                   </div>
                   <p className="mt-8 text-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">
                      Current Waitlist: <span className="text-[#ff3b30]">12,402</span> People
                   </p>
                 </>
               ) : (
                 // 🎫 2. 신청 완료 (심사 중 티켓)
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                   className="mt-10 bg-black border border-[#ff3b30]/30 p-8 rounded-2xl max-w-md mx-auto shadow-[0_0_40px_rgba(255,59,48,0.15)]"
                 >
                   <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                     <span className="text-[10px] font-mono text-[#ff3b30] tracking-[0.3em] uppercase">Vibe Audit</span>
                     <span className="text-[10px] font-mono text-white/40">{new Date().toLocaleDateString()}</span>
                   </div>
                   <div className="text-center space-y-2 mb-8">
                     <h3 className="text-3xl font-serif italic font-black uppercase text-white">Under Review.</h3>
                     <p className="text-sm text-white/50">AURA 크리에이티브 팀에서 당신의 DNA를 분석 중입니다.</p>
                   </div>
                   <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-left space-y-2">
                     <div className="flex justify-between text-white/40"><span>TARGET</span> <span className="text-white">@{igHandle.replace('@', '')}</span></div>
                     <div className="flex justify-between text-white/40"><span>STATUS</span> <span className="text-yellow-400 animate-pulse">PENDING</span></div>
                   </div>
                   <p className="mt-6 text-[9px] text-white/30 uppercase tracking-widest">
                     심사가 완료되면 입력하신 이메일로 초대 코드가 발송됩니다.
                   </p>

                   {/* 🌟 [NEW] 닫기 & 초기화 버튼 */}
                   <button 
                     onClick={() => {
                       setIsSubmitted(false);
                       setIgHandle("");
                       setEmail("");
                     }}
                     className="mt-8 w-full py-4 border border-white/20 text-white/60 hover:text-white hover:bg-white/10 font-mono text-[10px] tracking-[0.3em] uppercase transition-all"
                   >
                     Close Receipt
                   </button>
                 </motion.div>
               )}
            </motion.div>
         </div>
      </section>

      <footer className="py-20 text-center text-[10px] text-white/20 border-t border-white/5 uppercase tracking-[0.8em]">
        &copy; 2026 AURA / Beyond Fashion / All Rights Reserved.
      </footer>
    </div>
  );
}