// components/LoginModal.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useTranslations } from 'next-intl';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  // 🌟 [수술 완료] provider 타입에 'apple'을 추가했습니다.
  onSignIn: (provider: 'google' | 'github' | 'kakao' | 'twitter' | 'apple') => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSignInWithEmail: (email: string) => Promise<{ error: any }>; 
}

export default function LoginModal({ isOpen, onClose, onSignIn, onSignInWithEmail }: LoginModalProps) {
  const t = useTranslations('Login');
  
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setIsSent(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    
    const { error } = await onSignInWithEmail(email);
    setIsLoading(false);
    
    if (!error) {
      setIsSent(true);
    } else {
      alert("이메일 발송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative w-full max-w-sm rounded-3xl border border-white/20 bg-[#1c1c1e]/90 p-8 shadow-2xl backdrop-blur-2xl">
            <button onClick={onClose} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors"><X className="h-5 w-5" /></button>
            
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">{t('title')}</h2>
              <p className="text-sm text-white/50">{t('description')}</p>
            </div>

            <div className="flex flex-col gap-3">
              {/* =================================================== */}
              {/* 🌟 [NEW] Apple 로그인 버튼 (가장 상단에 배치) */}
              <button onClick={() => onSignIn('apple')} className="flex items-center justify-center gap-3 rounded-xl bg-black p-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 border border-white/20">
                <AppleIcon /><span>Continue with Apple</span>
              </button>

              {/* Google */}
              <button onClick={() => onSignIn('google')} className="flex items-center justify-center gap-3 rounded-xl bg-white p-4 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95">
                <GoogleIcon /><span>{t('continue_google')}</span>
              </button>
              
              {/* GitHub 
              <button onClick={() => onSignIn('github')} className="flex items-center justify-center gap-3 rounded-xl bg-[#24292E] p-4 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 border border-white/10">
                <GithubIcon /><span>{t('continue_github')}</span>
              </button>
              */}

              {/* 구분선 */}
              <div className="flex items-center gap-3 mb-2 mt-2 opacity-40">
                <div className="h-[1px] flex-1 bg-white"></div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white">OR</span>
                <div className="h-[1px] flex-1 bg-white"></div>
              </div>
              
              {/* =================================================== */}
              {/* 이메일 로그인 폼 (Magic Link) */}
              {!isSent ? (
                <form onSubmit={handleEmailLogin} className="flex flex-col gap-2 mb-2">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                    className="w-full bg-black border border-white/20 p-4 rounded-xl text-white placeholder-white/30 focus:border-[#ff3b30] outline-none text-sm transition-colors"
                  />
                  <button 
                    type="submit" 
                    disabled={isLoading || !email} 
                    className="w-full bg-white text-black p-4 rounded-xl font-bold text-sm hover:scale-[1.02] active:scale-95 transition-transform flex justify-center items-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Mail className="w-5 h-5" />}
                    Continue with Email
                  </button>
                </form>
              ) : (
                <div className="mb-2 p-5 rounded-xl bg-green-500/10 border border-green-500/20 text-center animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <p className="text-sm font-bold text-green-400">매직 링크가 발송되었습니다!</p>
                  <p className="text-xs text-green-400/70 mt-1">이메일함을 확인하고 링크를 클릭하세요.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Icons ---
const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.49.04 2.67.6 3.42 1.6-3.15 1.74-2.58 5.86.35 6.94-.65 1.63-1.6 3.32-2.35 4.43zm-3.15-13.6c.72-1.02 1.25-2.34 1.05-3.68-1.2.06-2.61.81-3.41 1.83-.68.86-1.3 2.22-1.08 3.54 1.34.1 2.65-.67 3.44-1.69z"/></svg>
);
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
);
//const GithubIcon = () => (
//  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
//);