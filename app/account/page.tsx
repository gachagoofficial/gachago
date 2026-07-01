"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { AuthModal } from "@/components/auth/AuthModal";
import { createClient } from "@/lib/supabase/client";
import { formatWon } from "@/lib/format";

interface DrawHistoryRow {
  id: string;
  created_at: string;
  packs: { title: string | null; slug: string | null } | null;
  rewards: { name: string | null; tier: string | null; value: number | null } | null;
}

export default function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [history, setHistory] = useState<DrawHistoryRow[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    if (!user) {
      setHistory([]);
      return;
    }
    let cancelled = false;
    setHistoryLoading(true);

    // draws 는 RLS(own draws read)로 본인 것만 조회됨.
    // pack/reward 이름은 관계 쿼리로 함께 가져온다.
    supabase
      .from("draws")
      .select("id, created_at, packs(title, slug), rewards(name, tier, value)")
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        if (cancelled) return;
        setHistory((data as unknown as DrawHistoryRow[]) || []);
        setHistoryLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [user, supabase]);

  const totalDraws = history.length;
  const totalValue = history.reduce((sum, row) => sum + (row.rewards?.value || 0), 0);

  return (
    <section className="subpage">
      <div className="subpage-inner">
        <h1>마이페이지</h1>

        {loading && <p>불러오는 중...</p>}

        {!loading && !user && (
          <div className="account-guest">
            <p>로그인하면 뽑기 내역과 계정 정보를 확인할 수 있습니다.</p>
            <button className="auth-button" onClick={() => setShowAuth(true)}>
              로그인 / 회원가입
            </button>
          </div>
        )}

        {!loading && user && (
          <div className="account-info">
            <div className="account-summary">
              <div className="account-summary-card">
                <span className="account-summary-label">이메일</span>
                <strong className="account-summary-value">{user.email}</strong>
              </div>
              <div className="account-summary-card">
                <span className="account-summary-label">총 뽑기 횟수</span>
                <strong className="account-summary-value">{totalDraws}회</strong>
              </div>
              <div className="account-summary-card">
                <span className="account-summary-label">획득 상품 가치</span>
                <strong className="account-summary-value">{formatWon(totalValue)}</strong>
              </div>
            </div>

            <div className="account-actions">
              <button className="auth-button" onClick={() => signOut()}>
                로그아웃
              </button>
            </div>

            <div className="draw-history">
              <h2 className="draw-history-title">뽑기 내역</h2>
              {historyLoading && <p className="draw-history-empty">불러오는 중...</p>}
              {!historyLoading && history.length === 0 && (
                <p className="draw-history-empty">아직 뽑기 내역이 없습니다. 팩을 열어보세요!</p>
              )}
              {!historyLoading && history.length > 0 && (
                <ul className="draw-history-list">
                  {history.map((row) => (
                    <li className="draw-history-row" key={row.id}>
                      <div className="draw-history-main">
                        <span className="draw-history-reward">
                          {row.rewards?.name || "상품"}
                        </span>
                        {row.rewards?.tier && (
                          <span className="draw-history-tier">{row.rewards.tier}</span>
                        )}
                      </div>
                      <div className="draw-history-meta">
                        <span>{row.packs?.title || "팩"}</span>
                        {row.rewards?.value != null && (
                          <span>{formatWon(row.rewards.value)}</span>
                        )}
                        <span>
                          {row.created_at
                            ? new Date(row.created_at).toLocaleDateString("ko-KR")
                            : ""}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {showAuth && <AuthModal initialMode="login" close={() => setShowAuth(false)} />}
      </div>
    </section>
  );
}
