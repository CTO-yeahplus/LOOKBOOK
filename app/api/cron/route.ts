// app/api/cron/route.ts
import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { createClient } from '@supabase/supabase-js';

// Supabase 설정
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

webpush.setVapidDetails(
  'mailto:contact@auraootd.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

// 1. 날씨 API 호출 (도시 단위 캐싱 효과)
async function getCityWeather(lat: number, lon: number) {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia%2FSeoul`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    // 소수점 반올림 (예: 12.7 -> 13)
    return Math.round(data.current_weather.temperature);
  } catch (e) {
    console.error("Weather API Error:", e);
    return null;
  }
}

// 2. 최적의 옷 찾기 (온도 매칭)
function findBestMatchItem(items: any[], targetTemp: number) {
  if (!items || items.length === 0) return null;
  return items.reduce((prev, curr) => {
    // DB의 문자열(예: "25°C")에서 숫자만 추출
    const prevTemp = parseFloat(String(prev.temperature).replace(/[^0-9.-]/g, '')) || 20;
    const currTemp = parseFloat(String(curr.temperature).replace(/[^0-9.-]/g, '')) || 20;
    
    // 현재 기온과의 차이가 더 적은 쪽을 선택
    return Math.abs(currTemp - targetTemp) < Math.abs(prevTemp - targetTemp) ? curr : prev;
  });
}

export async function GET() {
  try {
    // 1. 오늘의 전략 선정
    const strategies = ['weather', 'trend_tag', 'trend_look'];
    const selectedStrategy = strategies[Math.floor(Math.random() * strategies.length)];
    // const selectedStrategy = 'weather'; // 테스트 시 주석 해제

    console.log(`🚀 [Cron Start] 전략: ${selectedStrategy}`);

    // 2. 구독자 전체 조회
    const { data: subscriptions } = await supabase
      .from('aura_push_subscriptions')
      .select('id, subscription, location_name, latitude, longitude');

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ success: true, message: "구독자가 없습니다." });
    }

    const sendPromises: Promise<any>[] = [];

    // ============================================================
    // [CASE A] 날씨 전략 (최적화: 도시별 그룹핑)
    // ============================================================
    if (selectedStrategy === 'weather') {
      
      // 1) 도시별 그룹핑 (Grouping)
      const groups: Record<string, typeof subscriptions> = {};
      
      subscriptions.forEach(sub => {
        const city = sub.location_name || '서울';
        if (!groups[city]) groups[city] = [];
        groups[city].push(sub);
      });

      // 2) 후보 아이템 조회 (인기순 30개)
      const { data: candidates } = await supabase
        .from('aura_fashion_items')
        .select('*')
        .order('likes_count', { ascending: false })
        .limit(30);

      const items = candidates || [];

      // 3) 도시별 루프 (도시 개수만큼만 API 호출)
      const cityNames = Object.keys(groups);
      console.log(`🏙️ 총 ${cityNames.length}개 도시 날씨 조회 시작`);

      for (const city of cityNames) {
        const cityUsers = groups[city];
        // 대표 좌표 (모두 같은 도시이므로 0번째 유저 좌표 사용)
        const lat = cityUsers[0].latitude || 37.5665;
        const lon = cityUsers[0].longitude || 126.9780;

        // 🌟 [핵심] API 호출 (1번)
        const realTemp = await getCityWeather(lat, lon);
        const currentTemp = realTemp !== null ? realTemp : 20; // 실패 시 20도
        
        // 🌟 [핵심] 이 도시에 맞는 옷 선정
        const targetItem = findBestMatchItem(items, currentTemp);

        if (targetItem) {
          // 페이로드 생성
          const payload = JSON.stringify({
            type: 'weather',
            title: "AURA 모닝 브리핑 🌤️",
            body: `현재 ${city} ${currentTemp}°C. 이 날씨엔 이런 스타일이 딱이죠!`,
            url: `/home?item_id=${targetItem.id}&source=morning_weather`
          });

          // 해당 도시 유저들에게 일괄 발송
          const pushTasks = cityUsers.map(user => 
            webpush.sendNotification(user.subscription, payload)
              .catch(async (e) => {
                if (e.statusCode === 410 || e.statusCode === 404) {
                   await supabase.from('aura_push_subscriptions').delete().eq('id', user.id);
                }
              })
          );
          sendPromises.push(...pushTasks);
        }
      }
    } 
    
    // ============================================================
    // [CASE B] 트렌드 전략 (전체 동일 발송)
    // ============================================================
    else {
      // 1등 아이템 조회
      const { data: targetItem } = await supabase
        .from('aura_fashion_items')
        .select('*')
        .order('likes_count', { ascending: false })
        .limit(1)
        .single();

      if (targetItem) {
        let title = "", body = "", url = "";

        if (selectedStrategy === 'trend_tag') {
          const hotTag = targetItem.tags?.[0] || 'OOTD';
          title = `오늘의 키워드: #${hotTag}`;
          body = `#${hotTag} 스타일이 트렌드입니다.`;
          url = `/home?item_id=${targetItem.id}&tag=${hotTag}`;
        } else {
          title = `🔥 지금 가장 핫한 룩`;
          body = `현재 ${targetItem.likes_count}명이 주목하고 있습니다.`;
          url = `/home?item_id=${targetItem.id}&source=morning_trend`;
        }

        const payload = JSON.stringify({ type: selectedStrategy, title, body, url });

        // 전체 발송
        const pushTasks = subscriptions.map(sub => 
          webpush.sendNotification(sub.subscription, payload)
            .catch(async (e) => {
              if (e.statusCode === 410 || e.statusCode === 404) {
                 await supabase.from('aura_push_subscriptions').delete().eq('id', sub.id);
              }
            })
        );
        sendPromises.push(...pushTasks);
      }
    }

    // 4. 모든 발송 대기
    await Promise.all(sendPromises);
    console.log(`✅ [Cron Finish] 총 ${sendPromises.length}건 처리 완료`);

    return NextResponse.json({ success: true, strategy: selectedStrategy });

  } catch (error) {
    console.error("Cron Fatal Error:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}