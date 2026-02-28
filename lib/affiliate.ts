// lib/affiliate.ts

const AFFILIATE_IDS = {
  // Vercel 환경변수가 없으면 대표님의 실제 ID로 작동합니다.
  linkprice_id: process.env.NEXT_PUBLIC_LINKPRICE_ID || "A100702899",
  rakuten_ssense: process.env.NEXT_PUBLIC_RAKUTEN_ID || "AURA_TEST_ID",
};
  
export function generateTrackingLink(platform: 'wconcept' | 'ssense' | 'farfetch', queryOrUrl: string) {
  switch (platform.toLowerCase()) {
    case 'wconcept':
      // 1. W컨셉 검색창 원본 URL
      const rawWconceptUrl = `https://www.wconcept.co.kr/Search?keyword=${encodeURIComponent(queryOrUrl)}`;
      
      // 🌟 2. [핵심 수정] &l=0000 파라미터를 추가했습니다! (소문자 L과 숫자 0000)
      return `https://click.linkprice.com/click.php?m=wconcept&a=${AFFILIATE_IDS.linkprice_id}&l=0000&url=${encodeURIComponent(rawWconceptUrl)}`;
      
    case 'ssense':
      return `https://click.rakuten.com/click.php?id=${AFFILIATE_IDS.rakuten_ssense}&url=${encodeURIComponent(queryOrUrl)}`;
      
    default:
      return queryOrUrl;
  }
}