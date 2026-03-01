// lib/sensory.ts

class SensoryManager {
    private currentBGM: HTMLAudioElement | null = null;
    private targetVolume: number = 0.3; // 🌟 배경음악은 은은해야 하므로 최대 볼륨 30%로 제한
  
    // 🌟 [핵심 1] 탄창(Pool) 준비: 자주 쓰는 효과음을 메모리에 미리 올려둡니다.
    private sfxPool: Record<string, HTMLAudioElement> = {};

    constructor() {
        // 앱이 켜질 때 (브라우저 환경일 때만) 무기(SFX)를 미리 장전합니다.
        if (typeof window !== 'undefined') {
        this.sfxPool['swipe_pass'] = new Audio('/audio/sfx_pass.mp3');
        this.sfxPool['swipe_like'] = new Audio('/audio/sfx_like.mp3');
        this.sfxPool['flip'] = new Audio('/audio/sfx_flip.mp3');
        this.sfxPool['success'] = new Audio('/audio/sfx_save.mp3'); 
        // 필요하다면 다른 효과음도 여기에 추가
        }
    }
    // ==========================================
    // 📳 1. 하이엔드 햅틱 (진동) 제어기
    // ==========================================
    triggerHaptic(pattern: 'light' | 'medium' | 'heavy' | 'flip' | 'like' | 'success') {
      if (typeof window === 'undefined' || !navigator.vibrate) return;
      
      const patterns = {
        light: 10,                 // 스치듯 가벼운 진동 (Pass)
        medium: 25,                // 명확한 탭
        heavy: 40,                 // 묵직한 타격감 (DeepDive 진입)
        flip: [15, 30, 15],        // 기계식 태엽/종이 넘어가는 촉감 (카드 뒤집기)
        like: [20, 50, 20],        // 심장 박동 (Like)
        success: [15, 50, 20]      // 잠금 해제, 다운로드 완료
      };
      
      navigator.vibrate(patterns[pattern]);
    }
  
    // ==========================================
    // 🎵 2. 앰비언트 BGM 제어기 (크로스페이드 적용)
    // ==========================================
    playBGM(view: 'foryou' | 'explore' | 'magazine') {
      if (typeof window === 'undefined') return;
  
      const bgmPaths = {
        foryou: '/audio/bgm_foryou.ogg',
        explore: '/audio/bgm_explore.ogg',
        magazine: '/audio/bgm_magazine.ogg'
      };
  
      const newPath = bgmPaths[view];
  
      // 이미 같은 음악이 재생 중이면 무시
      if (this.currentBGM && this.currentBGM.src.includes(newPath)) return;
  
      // 기존 음악이 있으면 부드럽게 페이드아웃 후 새 음악 재생
      this.fadeOutAndStop(() => {
        this.currentBGM = new Audio(newPath);
        this.currentBGM.loop = true; // 무한 반복
        this.currentBGM.volume = 0;  // 볼륨 0에서 시작
        
        this.currentBGM.play().then(() => {
          this.fadeIn(this.currentBGM!);
        }).catch(err => {
          console.warn("오디오 자동재생 정책에 의해 BGM이 대기 중입니다.", err);
        });
      });
    }
  
    // 부드럽게 소리가 줄어드는 효과 (Fade Out)
    private fadeOutAndStop(callback: () => void) {
      if (!this.currentBGM) {
        callback();
        return;
      }
      const audio = this.currentBGM;
      const step = 0.05;
      
      const fadeAudio = setInterval(() => {
        if (audio.volume > step) {
          audio.volume -= step;
        } else {
          audio.volume = 0;
          audio.pause();
          clearInterval(fadeAudio);
          callback();
        }
      }, 50); // 50ms마다 볼륨 감소
    }
  
    // 부드럽게 소리가 커지는 효과 (Fade In)
    private fadeIn(audio: HTMLAudioElement) {
      const step = 0.02;
      const fadeAudio = setInterval(() => {
        if (audio.volume < this.targetVolume - step) {
          audio.volume += step;
        } else {
          audio.volume = this.targetVolume;
          clearInterval(fadeAudio);
        }
      }, 50);
    }
  
    // ==========================================
    // 🔊 3. 효과음 (SFX) 제어기
    // ==========================================
    playSFX(type: 'flip' | 'swipe_pass' | 'swipe_like' | 'login' | 'upload' | 'save' | 'deepdive_in' | 'deepdive_out') {
      if (typeof window === 'undefined') return;
      
      const sfxPaths = {
        deepdive_in: '/audio/sfx_deepdive_in.mp3',   // 웅장한 저음 (Woom)
        deepdive_out: '/audio/sfx_deepdive_out.mp3', // 스쳐가는 바람 (Swoosh)
        flip: '/audio/sfx_flip.mp3',                 // 종이 바스락
        swipe_pass: '/audio/sfx_pass.mp3',           // 파찰음
        swipe_like: '/audio/sfx_like.mp3',           // 영롱한 크리스탈
        login: '/audio/sfx_login.mp3',               // 묵직한 도어락
        upload: '/audio/sfx_upload.mp3',             // 지포 라이터 클릭
        save: '/audio/sfx_save.mp3'                  // 아날로그 셔터
      };
      
      const audio = new Audio(sfxPaths[type]);
      audio.volume = 0.6; // 효과음은 BGM보다 살짝 크게
      audio.play().catch(e => console.warn("SFX 재생 차단됨", e));
    }
  }
  
  // 싱글톤으로 내보내기 (앱 전체에서 1개의 오디오만 유지)
  export const auraSensory = new SensoryManager();