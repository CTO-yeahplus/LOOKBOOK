"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl"; // 🌟 다국어 감지 훅 추가

export default function PrivacyPolicy() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#ff3b30] selection:text-white pb-32">
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center pointer-events-none">
        <Link href="/" className="pointer-events-auto flex items-center gap-2 group hover:opacity-70 transition-opacity">
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
          <span className="font-mono text-[10px] tracking-widest uppercase">BACK</span>
        </Link>
        <h1 className="text-xl font-serif italic font-black uppercase tracking-tighter">
          Aura<span className="text-[#ff3b30]">.</span>
        </h1>
      </header>

      <div className="pt-32 px-6 md:px-12 max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ff3b30] uppercase block mb-4">Legal Document</span>
          <h1 className="text-4xl md:text-5xl font-serif italic font-black uppercase tracking-tighter mb-4">Privacy Policy</h1>
          <p className="font-mono text-xs text-white/40 tracking-widest uppercase">
            {locale === 'ko' ? '시행일자: 2026년 1월 1일' : 'Effective Date: January 1, 2026'}
          </p>
        </div>

        <article className="prose prose-invert prose-sm md:prose-base max-w-none font-serif leading-loose text-white/70 break-keep">
          {locale === 'ko' ? (
            /* 🇰🇷 한글 개인정보처리방침 */
            <>
              <p>주식회사 예아플러스(&quot;회사&quot;)는 AURA 서비스 이용자의 개인정보를 매우 중요하게 생각하며, 관련 법령을 준수하고 있습니다. 본 방침을 통해 회사가 어떤 개인정보를 수집하고 어떻게 보호하는지 안내해 드립니다.</p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">1. 수집하는 개인정보 항목 및 목적</h3>
              <p>
                <strong>[가입 및 CULT 심사 대기 (Waitlist)]</strong><br/>
                - 수집항목: 이메일 주소, 인스타그램 ID (@Handle)<br/>
                - 수집목적: 서비스 초대권 발송, 유저 감도(Vibe) 심사 및 고객 식별<br/><br/>
                <strong>[AURA 엔진 및 룩북 업로드]</strong><br/>
                - 수집항목: 업로드된 사진 이미지 메타데이터<br/>
                - 수집목적: AI 비전 엔진을 통한 스타일 분석, 개인화된 패션 피드 제공<br/><br/>
                <strong>[날씨 연동 기반 큐레이션]</strong><br/>
                - 수집항목: 접속 위치 데이터 (위도/경도 또는 접속 지역)<br/>
                - 수집목적: 유저가 위치한 지역의 실시간 날씨 및 온도에 최적화된 아웃핏 제안
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">2. 개인정보의 보유 및 이용기간</h3>
              <p>
                회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 관련 법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">3. 개인정보 제3자 제공 및 위탁</h3>
              <p>
                회사는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, AI 이미지 분석 및 클라우드 데이터베이스(Supabase 등) 운영을 위해 글로벌 파트너사의 서버를 이용할 수 있으며, 이 경우 안전한 데이터 암호화 통신을 거칩니다.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">4. 개인정보 보호책임자</h3>
              <p>
                이용자는 서비스를 이용하며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자에게 신고하실 수 있습니다.<br/><br/>
                - 책임자: 고재혁<br/>
                - 소속: 주식회사 예아플러스 (YEAHPLUS)<br/>
                - 연락처: 010-4490-0518<br/>
                - 이메일: contact@auraootd.com
              </p>
            </>
          ) : (
            /* 🇺🇸 영문 개인정보처리방침 */
            <>
              <p>YEAHPLUS CO., LTD. (&quot;Company&quot;) highly values the personal information of AURA Service Users and complies with relevant laws. This policy informs you of what personal information the Company collects and how it is protected.</p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">1. Items of Personal Information Collected and Purpose</h3>
              <p>
                <strong>[Registration and CULT Waitlist]</strong><br/>
                - Items: Email address, Instagram ID (@Handle)<br/>
                - Purpose: Sending service invitations, Vibe screening, and user identification<br/><br/>
                <strong>[AURA Engine and Lookbook Uploads]</strong><br/>
                - Items: Uploaded photo image metadata<br/>
                - Purpose: Style analysis via AI vision engine, providing personalized fashion feeds<br/><br/>
                <strong>[Weather-synced Curation]</strong><br/>
                - Items: Connection location data (Latitude/Longitude or access region)<br/>
                - Purpose: Proposing outfits optimized for real-time weather and temperature in the User&apos;s area
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">2. Retention and Use Period of Personal Information</h3>
              <p>
                In principle, the Company destroys the information without delay after the purpose of collection and use is achieved. However, if preservation is required by relevant laws, the Company retains user information for a certain period specified by law.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">3. Provision and Delegation of Personal Information to Third Parties</h3>
              <p>
                The Company does not provide personal information to outside parties without the User&apos;s consent. However, global partner servers (e.g., Supabase) may be used for AI image analysis and cloud database operation, in which case secure encrypted communication is utilized.
              </p>

              <h3 className="text-white font-black uppercase mt-12 mb-4">4. Chief Privacy Officer</h3>
              <p>
                Users may report any privacy-related complaints arising from using the Service to the Chief Privacy Officer.<br/><br/>
                - Officer: Jaehyuk Ko<br/>
                - Company: YEAHPLUS CO., LTD.<br/>
                - Tel: +82-10-4490-0518<br/>
                - Email: contact@auraootd.com
              </p>
            </>
          )}
        </article>
      </div>
    </main>
  );
}