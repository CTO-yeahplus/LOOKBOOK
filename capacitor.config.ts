import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yeahplus.auraootd', // (기존 아이디 유지)
  appName: 'AURA',           // (기존 이름 유지)
  webDir: 'out',
  
  // 🌟 [수술 완료] 아이폰 네이티브 통신망을 강제로 활성화합니다! (CORS 완벽 우회)
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      // 여기에 구글 클라우드 콘솔에서 발급받은 Web Client ID를 넣습니다.
      serverClientId: '940214114936-009u98vqh5gkfg9nederqocb6b7g7nb9.apps.googleusercontent.com', 
      iosClientId: '940214114936-ntu201nqn72ot3oefsnoc1v1ns9ii702.apps.googleusercontent.com', // 🌟 이 줄을 꼭 추가해 주세요! (스킴이 아니라 일반 ID 형태입니다)
      // 🌟 3. [가장 중요] Swift 크래시 방지용 (iosClientId와 똑같은 값을 넣습니다!)
      clientId: '940214114936-ntu201nqn72ot3oefsnoc1v1ns9ii702.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
    // 🌟 스플래시 스크린 타이밍 통제 (추가)
    SplashScreen: {
      launchShowDuration: 3000, // 최대 대기 시간 (보험용)
      launchAutoHide: false,    // 🌟 [핵심] 맘대로 사라지지 않게 자동 숨김을 끕니다!
      backgroundColor: "#FFFFFF",
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    }
  },
};

export default config;