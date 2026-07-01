"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "signup";

interface AuthModalProps {
  initialMode?: Mode;
  close: () => void;
}

export function AuthModal({ initialMode = "login", close }: AuthModalProps) {
  const supabase = createClient();
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
    close();
  };

  const continueWithOAuth = async (provider: "kakao" | "google") => {
    setLoading(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) {
      setLoading(false);
      setMessage(error.message);
    }
  };

  return (
    <div
      className="auth-overlay"
      onMouseDown={(event) => event.target === event.currentTarget && close()}
    >
      <section className="auth-card" role="dialog" aria-modal="true" aria-label="회원 인증">
        <button className="auth-close" onClick={close} aria-label="닫기">
          ×
        </button>
        <p className="section-label">GACHA GO MEMBER</p>
        <h2 className="mt-3 text-3xl font-black">
          {mode === "signup" ? "회원가입" : "로그인"}
        </h2>
        <div className="auth-tabs">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => {
              setMode("login");
              setMessage("");
            }}
          >
            로그인
          </button>
          <button
            className={mode === "signup" ? "active" : ""}
            onClick={() => {
              setMode("signup");
              setMessage("");
            }}
          >
            회원가입
          </button>
        </div>
        <form className="auth-form" onSubmit={submit}>
          {mode === "signup" && <label>닉네임은 가입 완료 후 설정합니다.</label>}
          <label>
            이메일
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
            />
          </label>
          <label>
            비밀번호
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
        <button
          className="auth-kakao"
          onClick={() => continueWithOAuth("kakao")}
          disabled={loading}
        >
          카카오로 계속하기
        </button>
        <button
          className="auth-google"
          onClick={() => continueWithOAuth("google")}
          disabled={loading}
        >
          Google로 계속하기
        </button>
        {message && <p className="auth-message">{message}</p>}
      </section>
    </div>
  );
}
