"use client";

import { Share2, Crown } from "lucide-react";

export default function InvitationPage() {
  const code = "AURA-7777"; // 🌟 나중에 서버에서 동적으로 가져올 코드

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="relative w-full max-w-sm aspect-[3/4] bg-gradient-to-b from-[#1a1a1a] to-[#050505] rounded-[3rem] p-1 border border-white/20 shadow-2xl overflow-hidden">
        {/* 카드 배경 장식 */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,59,48,0.2),transparent_70%)]" />
        
        <div className="relative h-full border border-white/10 rounded-[2.8rem] flex flex-col items-center justify-between p-12 text-center">
          <div className="space-y-4">
            <Crown className="w-10 h-10 text-[#ff3b30] mx-auto" />
            <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-white/40">Exclusive Invitation</h2>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-serif italic font-black text-white">Aura.</h1>
            <p className="text-sm text-white/60 leading-relaxed">
              당신은 AURA 앰버서더로부터<br/>
              특별한 초대를 받았습니다.
            </p>
            <div className="bg-white/5 border border-white/10 py-4 px-8 rounded-xl">
              <span className="text-xs font-mono text-white/30 block mb-1">YOUR CODE</span>
              <span className="text-3xl font-mono font-bold tracking-tighter text-[#ff3b30]">{code}</span>
            </div>
          </div>

          <button 
            onClick={() => navigator.share({ title: 'AURA Invitation', text: `초대 코드: ${code}`, url: window.location.href })}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest">Share Invitation</span>
          </button>
        </div>
      </div>
      <p className="mt-8 text-white/20 text-[10px] uppercase tracking-[0.5em]">Membership Reserved</p>
    </div>
  );
}