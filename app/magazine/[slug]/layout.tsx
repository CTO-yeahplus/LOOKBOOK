// 🌟 [핵심 수술] Next.js 빌더를 안심시키기 위한 매거진 가짜 명단 제공
export function generateStaticParams() {
    // 변수명이 [slug] 이므로, key 값도 반드시 'slug' 여야 합니다.
    return [{ slug: 'dummy-article' }]; 
  }
  
  export default function MagazineLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }