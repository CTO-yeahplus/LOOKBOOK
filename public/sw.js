// public/sw.js
self.addEventListener('push', function (event) {
    if (event.data) {
      const data = event.data.json();
      const options = {
        body: data.body,
        icon: '/icon.png', // 앱 아이콘 (나중에 public 폴더에 추가하면 됩니다)
        badge: '/icon.png',
        vibrate: [100, 50, 100], // 징-징- 진동 패턴
        data: { url: data.url || '/' },
      };
      
      // 알림을 잠금화면에 띄웁니다!
      event.waitUntil(self.registration.showNotification(data.title, options));
    }
  });
  
  self.addEventListener('notificationclick', function (event) {
    event.notification.close(); // 알림을 누르면 알림창 닫기
    event.waitUntil(clients.openWindow(event.notification.data.url)); // AURA 앱 열기
  });