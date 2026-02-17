// lib/affiliate.ts

// 🌟 제휴 마케팅사에서 발급받을 매체사(Publisher) ID
// 추후 Vercel 환경 변수(.env)에 등록하여 보안을 유지합니다.
const AFFILIATE_IDS = {
    linkprice_musinsa: process.env.NEXT_PUBLIC_LINKPRICE_ID || "AURA_TEST_ID",
    rakuten_ssense: process.env.NEXT_PUBLIC_RAKUTEN_ID || "AURA_TEST_ID",
  };
  
  /**
   * 💸 AURA Affiliate Router
   * 일반 링크나 검색어를 돈이 되는 '트래킹 링크'로 변환해주는 엔진입니다.
   */
  export function generateTrackingLink(platform: 'musinsa' | 'ssense' | 'farfetch', queryOrUrl: string) {
    switch (platform.toLowerCase()) {
      case 'musinsa':
        // 무신사 검색 결과를 링크프라이스 딥링크로 감싸는 로직 (예시 구조)
        const rawMusinsaUrl = `https://www.musinsa.com/search/musinsa/integration?q=${encodeURIComponent(queryOrUrl)}`;
        // 💡 실제 링크프라이스 가입 후, 제공받는 포맷으로 아래 URL을 교체합니다.
        return `https://click.linkprice.com/click.php?m=musinsa&a=${AFFILIATE_IDS.linkprice_musinsa}&url=${encodeURIComponent(rawMusinsaUrl)}`;
        
      case 'ssense':
        // 센스, 파페치 등 글로벌 부티크 라쿠텐 어필리에이트 로직
        return `https://click.rakuten.com/click.php?id=${AFFILIATE_IDS.rakuten_ssense}&url=${encodeURIComponent(queryOrUrl)}`;
        
      default:
        return queryOrUrl;
    }
  }