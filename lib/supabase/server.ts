import { createClient } from "@supabase/supabase-js";

// 서버 전용 클라이언트. service_role 키를 사용하므로 RLS를 우회한다.
// 절대 클라이언트 컴포넌트에서 import 하지 말 것.
// 가챠 뽑기, 재고 차감, 결제 검증, 당첨 기록, 관리자 기능에서만 사용한다.
export function createServiceClient() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set (server-only).");
  }
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
