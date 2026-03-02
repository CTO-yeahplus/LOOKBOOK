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
      // 1. 초대 코드 유효성 검사
      const { data: codeData, error: codeError } = await supabase
        .from('invite_codes')
        .select('*')
        .eq('code', code.toUpperCase())
        .single();

      if (codeError || !codeData || codeData.used_count >= codeData.max_uses) {
        return { success: false, message: "유효하지 않거나 만료된 코드입니다." };
      }

      // =================================================================
      // 🌟 [핵심 수술] 409 에러(충돌)를 완벽하게 차단하는 스마트 업데이트 엔진
      // =================================================================
      const { data: existingProfile } = await supabase
        .from('aura_user_profiles')
        .select('id')
        .eq('id', userId)
        .single();

      let profileError;

      if (existingProfile) {
        // (A) 트리거 덕분에 이미 DB에 자리가 있다면? -> 조용히 Update(수정)만 합니다.
        const { error } = await supabase
          .from('aura_user_profiles')
          .update({ is_approved: true, used_invite_code: code.toUpperCase() })
          .eq('id', userId);
        profileError = error;
      } else {
        // (B) 예전에 가입해서 DB에 자리가 없는 '유령 유저'라면? -> 이메일 긁어와서 안전하게 Insert(생성) 합니다!
        const { data: { user } } = await supabase.auth.getUser();
        const { error } = await supabase
          .from('aura_user_profiles')
          .insert({ 
            id: userId, 
            email: user?.email,
            display_name: user?.user_metadata?.name || user?.email?.split('@')[0] || 'AURA_MUSE',
            is_approved: true, 
            used_invite_code: code.toUpperCase() 
          });
        profileError = error;
      }

      if (profileError) {
        console.error("🚨 프로필 갱신 실패:", profileError);
        return { success: false, message: "승인 처리 중 오류 발생" };
      }
      // =================================================================

      // 3. 초대 코드 사용 횟수(used_count) 1 증가
      const { error: countUpdateError } = await supabase
        .from('invite_codes')
        .update({ used_count: codeData.used_count + 1 })
        .eq('code', code.toUpperCase());

      if (countUpdateError) {
        console.error("🚨 초대 코드 카운트 업데이트 차단됨 (RLS 문제):", countUpdateError);
      }

      setIsApproved(true);
      return { success: true };
    } catch (e) {
      console.error("시스템 에러:", e);
      return { success: false, message: "시스템 오류가 발생했습니다." };
    }
  };

  return { isApproved, loading, verifyCode };
}