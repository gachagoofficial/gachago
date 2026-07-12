"use client";

import { useState, Suspense, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "signup";

function LoginContent() {
  const supabase = createClient();
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get("redirect") || "/";
  const initialMode = (params.get("mode") as Mode) || "login";

  const [mode, setMode] = useState<Mode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const result =
      mode === "signup"
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (result.error) {
      setMessage(result.error.message);
      return;
    }
    if (mode === "signup" && !result.data.session) {
      setMessage("가입 확인 이메일을 보냈습니다. 이메일의 링크를 눌러 가입을 완료해주세요.");
      return;
    }
    router.push(redirectTo);
    router.refresh();
  };

  const continueWithOAuth = async (provider: "kakao" | "google") => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirectTo)}` },
    });
    if (error) {
      setLoading(false);
      setMessage(error.message);
    }
  };

  return (
    <div className="login-page">
      <Link href={redirectTo} className="login-close" aria-label="닫기">×</Link>

      <div className="login-inner">
        <Link href="/" className="auth-brand">GACHA GO</Link>
        <p className="section-label">GACHA GO MEMBER</p>
        <h2 className="mt-3 text-3xl font-black">
          {mode === "signup" ? "회원가입" : "로그인"}
        </h2>

        <div className="auth-tabs">
          <button className={mode === "login" ? "active" : ""} onClick={() => { setMode("login"); setMessage(""); }}>
            로그인
          </button>
          <button className={mode === "signup" ? "active" : ""} onClick={() => { setMode("signup"); setMessage(""); }}>
            회원가입
          </button>
        </div>

        <form className="auth-form" onSubmit={submit}>
          <label>
            이메일
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
          </label>
          <label>
            비밀번호
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
            />
          </label>
          <button className="auth-submit" disabled={loading}>
            {loading ? "처리 중..." : mode === "signup" ? "계정 만들기" : "로그인"}
          </button>
        </form>

        <div className="auth-divider">또는</div>
        <button className="auth-kakao" onClick={() => continueWithOAuth("kakao")} disabled={loading}>
          카카오로 계속하기
        </button>
        <button className="auth-google" onClick={() => continueWithOAuth("google")} disabled={loading}>
          Google로 계속하기
        </button>
        {message && <p className="auth-message">{message}</p>}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="login-page" />}>
      <LoginContent />
    </Suspense>
  );
}
