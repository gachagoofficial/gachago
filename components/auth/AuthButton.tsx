"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./AuthProvider";

// Nav 우측의 로그인/로그아웃 UI. 로그인/회원가입은 /login 페이지로 이동.
export function AuthButton() {
  const { user, loading, signOut } = useAuth();
  const pathname = usePathname();
  const redirect = encodeURIComponent(pathname || "/");

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
    <div className="auth-button-group">
      <Link className="auth-button" href={`/login?redirect=${redirect}`}>
        로그인
      </Link>
      <Link className="auth-button auth-button--primary" href={`/login?mode=signup&redirect=${redirect}`}>
        회원가입
      </Link>
    </div>
  );
}
