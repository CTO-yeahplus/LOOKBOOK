"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl"; // 🌟 다국어 감지 훅 추가

export default function TermsOfService() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ff3b30] selection:text-white pb-32">
      {/* 헤더 */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center gap-2 group hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
          <span className="font-mono text-[10px] tracking-widest uppercase">BACK</span>
        </Link>
        <h1 className="text-xl font-serif italic font-black uppercase tracking-tighter">
          Aura<span className="text-[#ff3b30]">.</span>
        </h1>
      </header>

      {/* 본문 */}
      <div className="pt-32 px-6 md:px-12 max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ff3b30] uppercase block mb-4">Legal Document</span>
          <h1 className="text-4xl md:text-5xl font-serif italic font-black uppercase tracking-tighter mb-4">Terms of Service</h1>
          <p className="font-mono text-xs text-white/40 tracking-widest uppercase">
            {locale === 'ko' ? '시행일자: 2026년 1월 1일' : 'Effective Date: January 1, 2026'}
          </p>
        </div>

        <article className="prose prose-invert prose-sm md:prose-base max-w-none font-serif leading-loose text-white/70 break-keep">
          {locale === 'ko' ? (
            /* 🇰🇷 한글 약관 */
            <>
              <p>주식회사 예아플러스(이하 "회사")가 제공하는 AURA(이하 "서비스")에 오신 것을 환영합니다. 본 약관은 회원이 서비스에 접속하고 이를 이용함에 있어 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">제 1 조 (서비스의 핵심 및 AI 분석)</h3>
              <p>
                1. 본 서비스는 회원이 업로드한 패션 사진(Lookbook), 위치, 날씨 데이터를 기반으로 AI 비전 엔진이 스타일을 분석하고 큐레이션 및 매거진을 발행하는 플랫폼입니다.<br/>
                2. 회원이 업로드한 사진은 AURA의 AI 학습 및 트렌드 분석 목적으로 활용될 수 있으며, 회원은 사진 업로드 시 이에 동의한 것으로 간주합니다.<br/>
                3. AI 분석 결과나 날씨 기반 추천은 알고리즘에 의한 제안이며, 회사는 추천 결과의 절대적 정확성을 보증하지 않습니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">제 2 조 (회원 권한 및 CULT 멤버십)</h3>
              <p>
                1. 회사는 회원의 서비스 기여도(사진 업로드 횟수 등)에 따라 특정 콘텐츠(CULT ONLY 매거진, 숨겨진 아카이브 등)에 대한 접근 권한을 차등 부여할 수 있습니다.<br/>
                2. 시스템 조작, 타인의 사진 도용 등 부정한 방법으로 권한을 획득한 경우, 회사는 사전 통보 없이 멤버십 자격을 박탈하고 서비스 이용을 영구 제한할 수 있습니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">제 3 조 (지적재산권 및 저작물)</h3>
              <p>
                1. 회원이 서비스 내에 게시한 사진의 저작권은 회원 본인에게 있습니다.<br/>
                2. 단, 회사는 회원의 게시물을 바탕으로 AI 에디터가 가공, 편집하여 생성한 2차적 저작물(Aura Editorial 매거진 등)을 서비스 내외의 마케팅 및 프로모션 목적으로 무상 사용할 권리를 가집니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">제 4 조 (면책조항)</h3>
              <p>
                회사는 천재지변, AI 서버의 일시적 통신 장애, 회원의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.
              </p>
              
              <div className="mt-20 p-6 bg-white/5 border border-white/10 rounded-xl font-mono text-xs">
                <p>상호: 주식회사 예아플러스 (YEAHPLUS)</p>
                <p>이메일: contact@auraootd.com</p>
              </div>
            </>
          ) : (
            /* 🇺🇸 영문 약관 */
            <>
              <p>Welcome to AURA (hereinafter referred to as the "Service") provided by YEAHPLUS CO., LTD. (hereinafter referred to as the "Company"). These Terms of Service aim to stipulate the rights, obligations, and responsibilities between the Company and the User.</p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">Article 1 (Core of Service and AI Analysis)</h3>
              <p>
                1. The Service is a platform where the AI vision engine analyzes style and publishes curated magazines based on fashion photos (Lookbooks), location, and weather data uploaded by Users.<br/>
                2. Photos uploaded by Users may be used for AURA's AI learning and trend analysis purposes. By uploading a photo, the User is deemed to have consented to this.<br/>
                3. AI analysis results or weather-based recommendations are algorithmic suggestions, and the Company does not guarantee absolute accuracy.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">Article 2 (User Privileges & CULT Membership)</h3>
              <p>
                1. The Company may grant differential access to certain content (CULT ONLY magazines, hidden archives, etc.) based on the User's contribution to the Service (e.g., number of photo uploads).<br/>
                2. If a User acquires privileges through unfair means, such as system manipulation or theft of another person's photos, the Company may revoke membership and permanently restrict Service use without prior notice.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">Article 3 (Intellectual Property & Derivative Works)</h3>
              <p>
                1. The copyright of photos posted within the Service belongs to the User.<br/>
                2. However, the Company reserves the right to use secondary derivative works (such as Aura Editorial magazines) processed and edited by the AI Editor based on User posts, free of charge, for marketing and promotional purposes inside and outside the Service.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">Article 4 (Disclaimer)</h3>
              <p>
                The Company is not liable for service disruptions caused by natural disasters, temporary communication failures of AI servers, or reasons attributable to the User.
              </p>
              
              <div className="mt-20 p-6 bg-white/5 border border-white/10 rounded-xl font-mono text-xs">
                <p>COMPANY: YEAHPLUS CO., LTD.</p>
                <p>EMAIL: contact@auraootd.com</p>
              </div>
            </>
          )}
        </article>
      </div>
    </main>
  );
}