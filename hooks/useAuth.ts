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
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: { redirectTo: typeof window !== "undefined" ? window.location.origin : "/" }
    });
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

  return { user, setUser, signIn, signOut, login: signIn, logout: signOut, saveInstagram };
}