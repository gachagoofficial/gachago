import { createBrowserClient } from "@supabase/ssr";

// 브라우저용 클라이언트. anon 키만 사용하며, RLS 정책으로 보호된
// 공개/읽기 데이터(상품 목록, FAQ, 커뮤니티 조회 등)에만 사용한다.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
