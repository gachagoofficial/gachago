import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// 서버 컴포넌트 / Route Handler 에서 "로그인한 사용자"를 읽기 위한 클라이언트.
// anon 키 + 쿠키 기반 세션을 사용한다 (RLS 적용됨).
// 로그인 사용자 확인용이며, service_role 과는 별개다.
export async function createServerSupabase() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Server Component 에서 호출되면 set이 무시될 수 있음(미들웨어가 갱신 담당).
          }
        },
      },
    },
  );
}

// 현재 로그인 사용자를 반환 (없으면 null).
export async function getCurrentUser() {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
