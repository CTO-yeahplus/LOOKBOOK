import { Share2 } from "lucide-react";
import { FashionItem } from "../../hooks/useAura";

interface ShareButtonProps {
  item: FashionItem;
}

export default function ShareButton({ item }: ShareButtonProps) {
  const handleShare = async () => {
    const shareData = {
      title: "AURA: 오늘의 추천 룩 🌤️",
      text: `AURA가 추천하는 날씨 맞춤 룩을 확인해보세요! 태그: ${item.tags.join(', ')}`,
      url: window.location.href, // 현재 접속 중인 Vercel 주소
    };

    try {
      if (navigator.share) {
        // 스마트폰 네이티브 공유창 띄우기 (카카오톡, 인스타, 메시지 등)
        await navigator.share(shareData);
      } else {
        // PC 등에서 지원 안 할 경우 클립보드 복사
        await navigator.clipboard.writeText(shareData.url);
        alert("링크가 클립보드에 복사되었습니다. 친구에게 공유해보세요!");
      }
    } catch (err) {
      console.log("공유가 취소되었거나 실패했습니다.", err);
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-[14px] font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
    >
      <Share2 className="h-4 w-4" /> Share Look
    </button>
  );
}