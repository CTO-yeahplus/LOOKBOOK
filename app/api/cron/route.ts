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

// 🌟 [추가] 하이엔드 패션 거장의 어록 리스트
const FASHION_QUOTES = [
  `"단순함은 궁극의 정교함이다." - 질 샌더`,
  `"침묵은 가장 완벽한 핏이다." - 마틴 마르지엘라`,
  `"우아함은 거절의 예술이다." - 코코 샤넬`,
  `"패션은 사라지지만 스타일은 영원하다." - 이브 생 로랑`,
  `"완벽함은 더 이상 보탤 것이 없을 때가 아니라, 빼낼 것이 없을 때 완성된다." - 앙투안 드 생텍쥐페리`
];

// 1. 날씨 API 호출 (🌟 isEvening 여부에 따라 오늘 현재기온 or 내일 최고기온 추출)
async function getCityWeather(lat: number, lon: number, isEvening: boolean) {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max&timezone=Asia%2FSeoul`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    
    // 저녁 알림(내일 준비)일 경우 내일(index 1)의 최고 기온 반환
    if (isEvening && data.daily?.temperature_2m_max?.[1]) {
      return Math.round(data.daily.temperature_2m_max[1]);
    }
    // 아침 알림일 경우 오늘 현재 기온 반환
    return Math.round(data.current_weather.temperature);
  } catch (e) {
    console.error("Weather API Error:", e);
    return null;
  }
}

// 2. 최적의 옷 찾기 (온도 매칭)
function findBestMatchItem(items: { temperature?: string | number; [key: string]: unknown }[], targetTemp: number) {
  if (!items || items.length === 0) return null;
  return items.reduce((prev, curr) => {
    const prevTemp = parseFloat(String(prev.temperature).replace(/[^0-9.-]/g, '')) || 20;
    const currTemp = parseFloat(String(curr.temperature).replace(/[^0-9.-]/g, '')) || 20;
    return Math.abs(currTemp - targetTemp) < Math.abs(prevTemp - targetTemp) ? curr : prev;
  });
}

export async function GET() {
  try {
    // 🌟 1. 한국 시간(KST) 기준 현재 시간 및 요일 파악
    const kstDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
    const currentHour = kstDate.getHours();
    const currentDay = kstDate.getDay(); // 0: 일, 1: 월, 2: 화, 3: 수, 4: 목, 5: 금, 6: 토

    // 🌟 2. 아침 vs 저녁 모드 판별 (오후 6시 이후면 저녁 모드)
    const isEvening = currentHour >= 18; 
    
    // 🌟 3. 주 2회 (화요일, 목요일) 어록 추가 플래그
    const shouldAddQuote = (currentDay === 2 || currentDay === 4);
    const randomQuote = FASHION_QUOTES[Math.floor(Math.random() * FASHION_QUOTES.length)];

    // 4. 오늘의 전략 선정
    const strategies = ['weather', 'trend_tag', 'trend_look'];
    const selectedStrategy = strategies[Math.floor(Math.random() * strategies.length)];

    console.log(`🚀 [Cron Start] 전략: ${selectedStrategy} | 저녁모드: ${isEvening} | 어록추가: ${shouldAddQuote}`);

    const { data: subscriptions } = await supabase
      .from('aura_push_subscriptions')
      .select('id, subscription, location_name, latitude, longitude');

    if (!subscriptions || subscriptions.length === 0) {
      return NextResponse.json({ success: true, message: "구독자가 없습니다." });
    }

    const sendPromises: Promise<unknown>[] = [];

    // ============================================================
    // [CASE A] 날씨 전략 (최적화: 도시별 그룹핑)
    // ============================================================
    if (selectedStrategy === 'weather') {
      const groups: Record<string, typeof subscriptions> = {};
      subscriptions.forEach(sub => {
        const city = sub.location_name || '서울';
        if (!groups[city]) groups[city] = [];
        groups[city].push(sub);
      });

      const { data: candidates } = await supabase.from('aura_fashion_items').select('*').order('likes_count', { ascending: false }).limit(30);
      const items = candidates || [];
      const cityNames = Object.keys(groups);

      for (const city of cityNames) {
        const cityUsers = groups[city];
        const lat = cityUsers[0].latitude || 37.5665;
        const lon = cityUsers[0].longitude || 126.9780;

        // 🌟 isEvening 변수를 넘겨서 저녁이면 내일 최고기온을 가져옴
        const realTemp = await getCityWeather(lat, lon, isEvening);
        const currentTemp = realTemp !== null ? realTemp : 20; 
        const targetItem = findBestMatchItem(items, currentTemp);

        if (targetItem) {
          // 🌟 시간대에 따른 문구 변경 및 어록 추가
          const title = isEvening ? "내일 뭐 입지? 🌙" : "AURA 모닝 브리핑 🌤️";
          let body = isEvening 
            ? `내일 ${city} 최고 ${currentTemp}°C 예상. 미리 준비하는 완벽한 룩.` 
            : `현재 ${city} ${currentTemp}°C. 이 날씨엔 이런 스타일이 딱이죠!`;
          
          if (shouldAddQuote) body += `\n\n${randomQuote}`; // 어록 추가

          const url = `/home?item_id=${targetItem.id}&source=${isEvening ? 'evening' : 'morning'}_weather`;
          const payload = JSON.stringify({ type: 'weather', title, body, url });

          const { error: dbError } = await supabase.from('notifications').insert([{ title, body, type: 'system', link_url: url, is_public: true }]);
          if (dbError) console.error(`DB Insert Error (${city}):`, dbError);

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
      const { data: targetItem } = await supabase.from('aura_fashion_items').select('*').order('likes_count', { ascending: false }).limit(1).single();

      if (targetItem) {
        let title = "", bodyText = "", url = "";

        // 🌟 시간대에 따른 트렌드 문구 변경
        if (selectedStrategy === 'trend_tag') {
          const hotTag = targetItem.tags?.[0] || 'OOTD';
          title = isEvening ? `내일을 위한 키워드: #${hotTag} 🌙` : `오늘의 키워드: #${hotTag} ☀️`;
          bodyText = `#${hotTag} 스타일이 트렌드입니다.`;
          url = `/home?item_id=${targetItem.id}&tag=${hotTag}`;
        } else {
          title = isEvening ? `🌙 내일 주목받을 룩` : `🔥 지금 가장 핫한 룩`;
          bodyText = `현재 ${targetItem.likes_count}명이 주목하고 있습니다.`;
          url = `/home?item_id=${targetItem.id}&source=${isEvening ? 'evening' : 'morning'}_trend`;
        }

        if (shouldAddQuote) bodyText += `\n\n${randomQuote}`; // 어록 추가
        const body = bodyText;
        const payload = JSON.stringify({ type: selectedStrategy, title, body, url });
        
        const { error: dbError } = await supabase.from('notifications').insert([{ title, body, type: 'system', link_url: url, is_public: true }]);
        if (dbError) console.error("DB Insert Error (Trend):", dbError);

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

    await Promise.all(sendPromises);
    console.log(`✅ [Cron Finish] 총 ${sendPromises.length}건 처리 완료`);
    // 🌟 [추가] 7일이 지난 휘발성 시스템 로그(알림) 자동 파기
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const { error: deleteError } = await supabase
      .from('notifications')
      .delete()
      .lt('created_at', sevenDaysAgo);
      
    if (deleteError) console.error("오래된 알림 자동 파기 실패:", deleteError);
    else console.log("🧹 7일 경과 알림 자동 파기 완료");

    return NextResponse.json({ success: true, strategy: selectedStrategy });

  } catch (error) {
    console.error("Cron Fatal Error:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}