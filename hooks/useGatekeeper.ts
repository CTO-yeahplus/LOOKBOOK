// hooks/useGatekeeper.ts

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export interface VerifyResult {
  success: boolean;
  message?: string;
}

export function useGatekeeper(userId: string | undefined) {
  const [isApproved, setIsApproved] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  // 1. 초기 렌더링 시 승인 여부 확인
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

  // 2. 초대 코드 검증 및 사용 엔진
  const verifyCode = async (code: string): Promise<VerifyResult> => {
    // 방어벽: 로그인 안 한 유저는 코드 검증 불가
    if (!userId) {
      return { success: false, message: "로그인이 먼저 필요합니다." };
    }
    
    const upperCode = code.toUpperCase();

    try {
      // =================================================================
      // 🌟 [핵심 수술 1] 백엔드 원자성 함수(RPC) 호출
      // 프론트엔드에서 SELECT 후 UPDATE 하지 않고, DB 안에서 0.001초 만에 한 번에 처리합니다!
      // =================================================================
      const { data: isValid, error: rpcError } = await supabase.rpc('verify_and_use_invite_code', { 
        input_code: upperCode 
      });

      // RPC 함수가 false를 뱉거나 에러가 났다면 얄짤없이 차단
      if (rpcError || !isValid) {
        return { success: false, message: "유효하지 않거나 이미 만료된 코드입니다." };
      }

      // =================================================================
      // 🌟 [핵심 수술 2] 프로필 승인 처리 (기존의 스마트한 로직 유지)
      // =================================================================
      const { data: existingProfile } = await supabase
        .from('aura_user_profiles')
        .select('id')
        .eq('id', userId)
        .single();

      let profileError;

      if (existingProfile) {
        // (A) 이미 DB에 자리가 있다면 -> Update
        const { error } = await supabase
          .from('aura_user_profiles')
          .update({ is_approved: true, used_invite_code: upperCode })
          .eq('id', userId);
        profileError = error;
      } else {
        // (B) 자리가 없는 유저라면 -> Insert
        const { data: { user } } = await supabase.auth.getUser();
        const { error } = await supabase
          .from('aura_user_profiles')
          .insert({ 
            id: userId, 
            email: user?.email,
            display_name: user?.user_metadata?.name || user?.email?.split('@')[0] || 'AURA_MUSE',
            is_approved: true, 
            used_invite_code: upperCode 
          });
        profileError = error;
      }

      if (profileError) {
        console.error("🚨 프로필 갱신 실패:", profileError);
        return { success: false, message: "승인 처리 중 오류가 발생했습니다." };
      }

      // 🌟 프론트엔드에서 강제로 used_count를 올리던 위험한 코드는 삭제되었습니다. (RPC가 알아서 함)

      setIsApproved(true);
      return { success: true };
      
    } catch (e) {
      console.error("시스템 에러:", e);
      return { success: false, message: "시스템 오류가 발생했습니다." };
    }
  };

  return { isApproved, loading, verifyCode };
}