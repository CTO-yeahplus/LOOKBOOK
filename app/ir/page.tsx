"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight, CloudRain, Fingerprint, ShoppingBag, Layers, Crown, Database, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// 🌟 New Component: 성장 지표 차트 (framer-motion 활용)
function GrowthChart() {
  const data = [
    { phase: "P1", user: 10, revenue: 5, profit: 3 },
    { phase: "P2", user: 50, revenue: 25, profit: 18 },
    { phase: "P3", user: 100, revenue: 90, profit: 65 },
    { phase: "P4", user: 250, revenue: 250, profit: 180 }, // (스케일 조정을 위한 가상의 값)
  ];

  const maxUser = 250;
  const maxFinance = 250;

  return (
    <div className="w-full bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-[#ff3b30]/20 relative overflow-hidden mb-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff3b30]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-[#ff3b30] p-2 rounded-full">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">Projected Growth</h3>
      </div>
      
      <div className="relative h-64 flex items-end justify-between gap-4 pt-10 pl-4 border-l border-white/10 border-b">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 bottom-0 -translate-x-full flex flex-col justify-between text-xs text-white/30 py-2 pr-2 h-full">
          <span>Scale</span><span>Mid</span><span>Start</span>
        </div>

        {data.map((d, i) => (
          <div key={i} className="relative flex-1 flex flex-col items-center h-full justify-end group">
            {/* User Line Point */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }} whileInView={{ y: `${100 - (d.user / maxUser) * 100}%`, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
              className="absolute w-3 h-3 bg-white rounded-full border-2 border-[#0a0a0a] z-20 group-hover:scale-150 transition-transform"
              style={{ left: '50%', marginLeft: '-6px' }}
            >
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{d.user}0K Users</div>
            </motion.div>
             {/* Connecting Line (가상 구현) */}
            {i < data.length - 1 && (
               <svg className="absolute top-0 left-1/2 w-full h-full z-0 pointer-events-none" style={{ overflow: 'visible' }}>
                 <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }}
                    x1="0" y1={`${100 - (d.user / maxUser) * 100}%`} x2="100%" y2={`${100 - (data[i+1].user / maxUser) * 100}%`} stroke="white" strokeWidth={2} strokeOpacity={0.5}
                 />
               </svg>
            )}

            {/* Revenue & Profit Bars */}
            <div className="relative w-full max-w-[40px] flex flex-col justify-end h-full gap-1 z-10">
              <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.revenue / maxFinance) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }} className="w-full bg-[#ff3b30] rounded-t-sm relative group-hover:bg-[#ff5b50] transition-colors">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-[10px] text-[#ff3b30] font-bold opacity-0 group-hover:opacity-100 transition-opacity">${d.revenue}M</div>
              </motion.div>
              <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.profit / maxFinance) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 + 0.4 }} className="w-full bg-[#ff3b30]/40 rounded-t-sm relative group-hover:bg-[#ff3b30]/60 transition-colors">
                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] text-white/50 font-bold opacity-0 group-hover:opacity-100 transition-opacity">${d.profit}M</div>
              </motion.div>
            </div>

            <span className="text-xs text-white/40 mt-4 font-mono uppercase tracking-wider">{d.phase}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-6 text-xs text-white/50">
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white"/>Users (Line)</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-[#ff3b30]"/>Revenue</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-[#ff3b30]/40"/>Profit</div>
      </div>
    </div>
  );
}

export default function IRPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const businessPhases = [
    { 
      phase: "Phase 1", title: "Affiliate Commerce", subtitle: "Discovery to Ownership", icon: ShoppingBag,
      users: "100K MAU", partners: "SSENSE, FARFETCH, KREAM", revenue: "$0.5M", profit: "$0.3M",
      desc: "유저의 감각적인 발견을 즉각적인 소유로 연결합니다. 재고 부담 없이 글로벌 하이엔드 부티크의 트래픽을 중개하며 초기 현금 흐름을 창출합니다."
    },
    { 
      phase: "Phase 2", title: "Native Sponsorship", subtitle: "The Contextual Canvas", icon: Layers,
      users: "500K MAU", partners: "LVMH, Gentle Monster", revenue: "$2.5M", profit: "$1.8M",
      desc: "비가 오는 날에는 레인 코트를, 영하의 날씨에는 프리미엄 아우터를. AURA의 카드는 브랜드가 가장 돋보일 수 있는 완벽한 컨텍스트 캔버스가 됩니다."
    },
    { 
      phase: "Phase 3", title: "AURA CULT+", subtitle: "The Premium Tier", icon: Crown,
      users: "1M+ MAU", partners: "Stripe, Exclusive Brands", revenue: "$9.0M", profit: "$6.5M",
      desc: "단순한 유저를 넘어 '컬트(Cult)' 팬덤을 구축합니다. 심층 AI 스타일 리포트와 프라이빗 큐레이션을 제공하는 월정액 구독 모델로 강력한 MRR을 확보합니다."
    },
    { 
      phase: "Phase 4", title: "Data as a Service", subtitle: "The Fashion Oracle", icon: Database,
      users: "5M+ MAU", partners: "Global Fashion Houses", revenue: "$25.0M+", profit: "$18.0M+",
      desc: "전 세계 유저의 기상 환경과 취향이 교차하는 수십억 건의 데이터를 분석합니다. 패션 하우스와 트렌드 예측 기관에 독보적인 인사이트를 제공합니다."
    }
  ];

  return (
    // 🌟 Color Update: 배경색을 순수 블랙(#000)에 가깝게 하고, 텍스트 색상을 조정하여 대비감을 높였습니다.
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-[#f5f5f7] selection:bg-[#ff3b30] selection:text-white font-sans overflow-x-hidden">
      
      {/* 🎬 1. Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ opacity, y }} className="absolute inset-0 z-0">
          {/* 🌟 Color Update: 붉은색 그라데이션으로 열정적인 분위기 연출 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,59,48,0.15)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
        </motion.div>

        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">
          {/* 🌟 Color Update: 타이틀 끝에 포인트 컬러 점(.) 추가 */}
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-6xl md:text-8xl lg:text-[11rem] font-serif italic font-black tracking-tighter mb-8 leading-[0.8] text-white">
            Aura<span className="text-[#ff3b30]">.</span>
          </motion.h1>
          
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="text-2xl md:text-4xl font-semibold tracking-tight text-white/90 mb-4">
            Technology becomes invisible.<br/>Only your <span className="text-[#ff3b30]">vibe</span> remains.
          </motion.p>
          
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-lg md:text-xl font-light tracking-tight text-white/50 mb-12 max-w-2xl">
            세상에서 가장 직관적인 AI 앰비언트 룩북. 검색창을 없애고, 오직 당신의 현재 환경과 취향에 완벽히 동기화된 영감만을 제공합니다.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}>
            {/* 🌟 Color Update: 버튼에 포인트 컬러 적용 */}
            <Link href="/" className="group flex items-center gap-2 bg-[#ff3b30] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#ff5b50] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,59,48,0.3)]">
              Experience the Vibe <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 💡 2. The Philosophy */}
      <section className="py-40 px-6 max-w-5xl mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 text-white">Silence the noise.</h2>
            <p className="text-xl text-white/60 leading-relaxed mb-6 font-light">
              현재의 커머스는 무의미한 정보의 홍수입니다. 우리는 유저에게 피로를 강요하고 있었습니다.
            </p>
            <p className="text-xl text-white/90 leading-relaxed font-medium">
              AURA는 질문을 바꿨습니다. "무엇을 찾으십니까?" 대신 <b className="text-[#ff3b30]">"지금 당신이 있는 곳의 공기는 어떻습니까?"</b>를 묻습니다. 환경 데이터를 읽고 AI가 큐레이션 한 화보를 그저 스와이프하는 것만으로, 발견의 기쁨은 극대화됩니다.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#121212] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center gap-6 transform translate-y-12 hover:border-[#ff3b30]/30 transition-colors">
              <CloudRain className="w-12 h-12 text-[#ff3b30]" strokeWidth={1.5} />
              <div><h3 className="font-semibold text-white mb-2">Ambient Data</h3><p className="text-sm text-white/50">기상청 초정밀 환경 동기화</p></div>
            </div>
            <div className="bg-[#121212] p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center gap-6 hover:border-[#ff3b30]/30 transition-colors">
              <Fingerprint className="w-12 h-12 text-[#ff3b30]" strokeWidth={1.5} />
              <div><h3 className="font-semibold text-white mb-2">AI DNA Match</h3><p className="text-sm text-white/50">비전 컴퓨팅 기반 취향 분석</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 💸 3. Financial Projections (The Business) */}
      <section className="py-40 px-6 bg-[#0a0a0a] border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,59,48,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
            <span className="text-[#ff3b30] font-mono text-sm tracking-widest uppercase mb-4 block">The Growth Engine</span>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">Financial Projections.</h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">경험을 해치지 않으면서도, 거대한 수익을 창출하는 4단계의 치밀한 비즈니스 로드맵입니다.</p>
          </motion.div>

          {/* 🌟 New Chart Added Here */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <GrowthChart />
          </motion.div>

          <div className="space-y-6">
            {businessPhases.map((bm, idx) => (
              <motion.div 
                key={bm.phase}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: idx * 0.1 }}
                className="group bg-[#121212] p-8 md:p-12 rounded-[2.5rem] border border-white/5 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center hover:bg-[#1a1a1a] hover:border-[#ff3b30]/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff3b30]/0 via-[#ff3b30]/0 to-[#ff3b30]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-[#ff3b30]/10 rounded-full group-hover:scale-110 group-hover:bg-[#ff3b30] transition-all duration-500">
                  <bm.icon className="w-8 h-8 text-[#ff3b30] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 relative z-10">
                  <span className="text-sm font-semibold tracking-widest text-[#ff3b30] uppercase block mb-2">{bm.phase}</span>
                  <h3 className="text-3xl font-bold text-white mb-2">{bm.title}</h3>
                  <p className="text-lg text-white/50 font-light mb-4">{bm.subtitle}</p>
                  <p className="text-white/80 leading-relaxed">{bm.desc}</p>
                </div>

                {/* 🌟 Key Metrics Table with Color Accent */}
                <div className="w-full lg:w-auto flex flex-wrap lg:flex-col gap-4 lg:gap-6 shrink-0 bg-[#0a0a0a] p-6 rounded-2xl lg:min-w-[280px] border border-white/5 relative z-10 group-hover:border-[#ff3b30]/20 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Target Users</span>
                    <span className="font-mono text-lg text-white group-hover:text-[#ff3b30] transition-colors">{bm.users}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Est. Revenue / Profit</span>
                    <span className="font-mono text-lg text-white">{bm.revenue} / <span className="text-[#ff3b30]">{bm.profit}</span></span>
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-xs text-white/40 uppercase tracking-wider mb-1">Key Partners</span>
                    <span className="text-sm text-white/80">{bm.partners}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 4. Outro & Contact */}
      <section className="py-40 px-6 max-w-4xl mx-auto text-center relative overflow-hidden">
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff3b30]/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif italic font-black text-white mb-8">This is just the beginning.</h2>
          <p className="text-2xl text-white/60 font-light mb-16">
            소프트웨어와 패션이 결합하는 방식을 재정의할 파트너를 찾습니다.
          </p>
          <a href="mailto:cto@yeahplus.co.kr" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#ff3b30] text-white font-bold text-lg hover:bg-[#ff5b50] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_40px_rgba(255,59,48,0.4)]">
            Connect with Leadership
          </a>
        </motion.div>
      </section>

      <footer className="py-12 text-center text-sm text-white/30 border-t border-white/5">
        Copyright © 2026 AURA Inc. All rights reserved.
      </footer>
    </div>
  );
}