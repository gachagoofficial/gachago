import { NextResponse, type NextRequest } from "next/server";
import { createServerSupabase } from "@/lib/supabase/ssr-server";

// OAuth(카카오/구글) 로그인 후 리다이렉트되는 콜백.
// code 를 세션으로 교환하고 홈으로 돌려보낸다.
export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createServerSupabase();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // 실패 시 홈으로 (원하면 에러 페이지로 변경 가능)
  return NextResponse.redirect(`${origin}/`);
}
