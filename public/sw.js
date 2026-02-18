// public/sw.js
self.addEventListener('push', function (event) {
    if (event.data) {
      const data = event.data.json();
      const options = {
        body: data.body,
        icon: '/icon.png', // 앱 아이콘 (나중에 public 폴더에 추가하면 됩니다)
        badge: '/icon.png',
        vibrate: [100, 50, 100], // 징-징- 진동 패턴
        data: { url: data.url || '/home' },
      };
      
      // 알림을 잠금화면에 띄웁니다!
      event.waitUntil(self.registration.showNotification(data.title, options));
    }
  });
  
self.addEventListener('notificationclick', function(event) {
  event.notification.close(); // 1. 알림창을 닫습니다.

  // 2. 푸시 발송 시 보낸 url 데이터를 가져옵니다.
  const urlToOpen = event.notification.data?.url || '/home';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(windowClients) {
      // 3. 이미 앱이 열려있다면 해당 탭으로 이동
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      // 4. 앱이 닫혀있다면 새로 엽니다.
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});