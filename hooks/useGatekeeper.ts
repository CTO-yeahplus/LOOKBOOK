// hooks/useGatekeeper.ts

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
//import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// 🌟 [핵심 해결책] 일반 유저용(Anon) 키가 아닌, 시스템 최상위 권한(Service Role) 키를 사용해 관리자 전용 클라이언트를 만듭니다.
//const supabase = createClient(
//  process.env.NEXT_PUBLIC_SUPABASE_URL!,
//  process.env.SUPABASE_SERVICE_ROLE_KEY! // 이 키는 RLS 보안 정책을 모두 무시하는 God Mode 키입니다.
//);

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
        .upsert({ 
          id: userId, 
          is_approved: true, 
          used_invite_code: code.toUpperCase() 
        });

      if (updateError) return { success: false, message: "승인 처리 중 오류 발생" };

      // 🌟 [핵심 수술] 에러를 반환받도록 수정합니다.
      const { error: countUpdateError } = await supabase
        .from('invite_codes')
        .update({ used_count: codeData.used_count + 1 })
        .eq('code', code.toUpperCase());

        // 만약 업데이트가 차단(RLS 에러)되면 콘솔에 경고를 띄웁니다!
      if (countUpdateError) {
        console.error("🚨 초대 코드 카운트 업데이트 차단됨 (RLS 문제):", countUpdateError);
        // (선택) 여기서 실패 처리할 수도 있지만, 일단 유저 승인은 진행시킵니다.
      }

      setIsApproved(true);
      return { success: true };
    } catch (e) {
      return { success: false, message: "시스템 오류가 발생했습니다." };
    }
  };

  return { isApproved, loading, verifyCode };
}