// 🌟 [핵심 수술] Next.js 빌더를 안심시키기 위한 가짜 명단 제공
export function generateStaticParams() {
    // 빌드 타임에는 'dummy'라는 가짜 유저 HTML 하나만 구워내고 통과시킵니다.
    // 실제 유저 데이터는 앱 구동 후 React가 클라이언트 단에서 실시간으로 불러옵니다.
    return [{ username: 'dummy' }]; 
  }
  
  export default function UserProfileLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <>{children}</>;
  }