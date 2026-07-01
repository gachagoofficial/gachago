"use client";

import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { AuthModal } from "./AuthModal";

// Nav 우측의 로그인/로그아웃 UI. 인증 상태에 따라 표시가 바뀐다.
export function AuthButton() {
  const { user, loading, signOut } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  if (loading) {
    return <span className="auth-button auth-button--loading" aria-hidden />;
  }

  if (user) {
    return (
      <div className="auth-button-group">
        <span className="auth-user-email">{user.email}</span>
        <button className="auth-button" onClick={() => signOut()}>
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <>
      <button className="auth-button" onClick={() => setShowAuth(true)}>
        로그인
      </button>
      {showAuth && <AuthModal initialMode="login" close={() => setShowAuth(false)} />}
    </>
  );
}
