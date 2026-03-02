// hooks/useAuth.ts
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export function useAuth() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (provider: 'google' | 'github' | 'kakao' | 'twitter') => {
    // 🌟 현재 접속 중인 브라우저 주소(origin)를 파악해서 정확히 /home을 붙여줍니다.
    const redirectUrl = typeof window !== "undefined" 
      ? `${window.location.origin}/home` 
      : "http://localhost:3000/home";

    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: { 
        redirectTo: redirectUrl // 🌟 알아서 똑똑하게 찾아가도록 변수 삽입
      }
    });
  };

  // 🌟 [NEW] 이메일 매직 링크 발송 엔진
  const signInWithEmail = async (email: string) => {
    const redirectUrl = typeof window !== "undefined" 
      ? `${window.location.origin}/home` 
      : "http://localhost:3000/home";

    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: { 
        emailRedirectTo: redirectUrl 
      }
    });
    return { data, error };
  };

  const signOut = async () => { await supabase.auth.signOut(); };

  const saveInstagram = async (handle: string) => {
    if (!user) return;
    const { data, error } = await supabase.auth.updateUser({ data: { instagram: handle } });
    if (data?.user) setUser(data.user); 
    
    if (!error) {
      // 과거 게시물 아이디 동기화
      await supabase.from('aura_fashion_items').update({ uploader_ig: handle }).eq('user_id', user.id);
    }
  };

  // 🌟 반환 객체에 signInWithEmail 추가
  return { user, setUser, signIn, signInWithEmail, signOut, login: signIn, logout: signOut, saveInstagram };
}