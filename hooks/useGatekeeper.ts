import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface VerifyResult {
  success: boolean;
  message?: string;
}

export function useGatekeeper(userId: string | undefined) {
  const [isApproved, setIsApproved] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsApproved(false);
      setLoading(false);
      return;
    }

    const checkStatus = async () => {
      const { data } = await supabase
        .from('aura_user_profiles')
        .select('is_approved')
        .eq('id', userId)
        .single();

      setIsApproved(data?.is_approved === true);
      setLoading(false);
    };

    checkStatus();
  }, [userId]);

  const verifyCode = async (code: string): Promise<VerifyResult> => {
    // 🌟 방어벽: 로그인 안 한 유저는 코드 검증 불가!
    if (!userId) {
      return { success: false, message: "구글 로그인이 먼저 필요합니다." };
    }
    try {
      const { data: codeData, error: codeError } = await supabase
        .from('invite_codes')
        .select('*')
        .eq('code', code.toUpperCase())
        .single();

      if (codeError || !codeData || codeData.used_count >= codeData.max_uses) {
        return { success: false, message: "유효하지 않거나 만료된 코드입니다." };
      }

      const { error: updateError } = await supabase
        .from('aura_user_profiles')
        .update({ is_approved: true, used_invite_code: code.toUpperCase() })
        .eq('id', userId);

      if (updateError) return { success: false, message: "승인 처리 중 오류 발생" };

      await supabase
        .from('invite_codes')
        .update({ used_count: codeData.used_count + 1 })
        .eq('code', code.toUpperCase());

      setIsApproved(true);
      return { success: true };
    } catch (e) {
      return { success: false, message: "시스템 오류가 발생했습니다." };
    }
  };

  return { isApproved, loading, verifyCode };
}