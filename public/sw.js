// public/sw.js

self.addEventListener('install', (event) => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('push', function (event) {
  if (!event.data) return;
  const payload = event.data.json();
  const options = {
    body: payload.body,
    icon: '/icon.png',
    badge: '/icon.png',
    data: { url: payload.url || '/' }, // URL 저장
  };
  event.waitUntil(self.registration.showNotification(payload.title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  // 1. 이동할 목표 URL (절대 경로 변환)
  const targetUrl = new URL(event.notification.data.url, self.location.origin).href;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      // 2. 이미 열려있는 우리 앱 탭이 있는지 확인
      for (const client of clientList) {
        // 내 도메인(origin)으로 시작하는 탭이 있다면?
        if (client.url.startsWith(self.location.origin) && 'focus' in client) {
          client.focus(); // 그 탭을 활성화하고
          return client.navigate(targetUrl); // 그 탭에서 페이지 이동!
        }
      }
      // 3. 없으면 새 창 열기
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});