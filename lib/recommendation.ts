import { FashionItem } from "../hooks/useAura";

export function getPersonalizedFeed(
  allItems: FashionItem[], 
  savedItems: FashionItem[], 
  currentTemp: number
): FashionItem[] {
  // 1. 유저의 취향(태그) 학습: 하트를 누른 옷들에서 가장 많이 등장한 태그 추출
  const userPreferences: Record<string, number> = {};
  savedItems.forEach(item => {
    item.tags.forEach(tag => {
      userPreferences[tag] = (userPreferences[tag] || 0) + 1;
    });
  });

  // 2. 점수(Score) 기반 정렬 알고리즘
  return [...allItems].sort((a, b) => {
    // 🌡️ 날씨 적합도 점수 (현재 온도와의 차이가 적을수록 높은 점수)
    const tempA = parseInt(a.temperature.replace(/[^0-9.-]+/g, "")) || 20;
    const tempB = parseInt(b.temperature.replace(/[^0-9.-]+/g, "")) || 20;
    const weatherScoreA = 100 - Math.abs(tempA - currentTemp) * 5;
    const weatherScoreB = 100 - Math.abs(tempB - currentTemp) * 5;

    // 💖 취향 적합도 점수 (유저가 좋아하는 태그가 몇 개나 포함되어 있는지)
    let tasteScoreA = 0;
    let tasteScoreB = 0;
    a.tags.forEach(tag => { if (userPreferences[tag]) tasteScoreA += userPreferences[tag] * 10; });
    b.tags.forEach(tag => { if (userPreferences[tag]) tasteScoreB += userPreferences[tag] * 10; });

    // 최종 점수 = 날씨(70%) + 개인취향(30%)
    const finalScoreA = (weatherScoreA * 0.7) + (tasteScoreA * 0.3);
    const finalScoreB = (weatherScoreB * 0.7) + (tasteScoreB * 0.3);

    // 내림차순 정렬 (점수가 높은 것이 먼저 나오게)
    return finalScoreB - finalScoreA;
  });
}