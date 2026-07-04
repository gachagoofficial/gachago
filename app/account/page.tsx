"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { AuthModal } from "@/components/auth/AuthModal";
import { ProfileModal } from "@/components/account/ProfileModal";
import { createClient } from "@/lib/supabase/client";

interface DrawHistoryRow {
  id: string;
  created_at: string;
  ship_status: string | null;
  tracking_no: string | null;
  courier: string | null;
  is_lastone: boolean | null;
  lastone_name: string | null;
  packs: { title: string | null; slug: string | null } | null;
  rewards: { name: string | null; tier: string | null } | null;
}

export default function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const [showAuth, setShowAuth] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [history, setHistory] = useState<DrawHistoryRow[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [nickname, setNickname] = useState<string>("");
  const [page, setPage] = useState(1);

  const PER_PAGE = 10;
  const totalPages = Math.max(1, Math.ceil(history.length / PER_PAGE));
  const pagedHistory = history.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const supabase = useMemo(() => createClient(), []);

  // 뽑기 내역 (배송 정보 포함) + 닉네임 로드
  useEffect(() => {
    if (!user) {
      setHistory([]);
      setNickname("");
      return;
    }
    let cancelled = false;
    setHistoryLoading(true);

    supabase
      .from("draws")
      .select("id, created_at, ship_status, tracking_no, courier, is_lastone, lastone_name, packs(title, slug), rewards(name, tier)")
      .order("created_at", { ascending: false })
      .limit(1000)
      .then(({ data }) => {
        if (cancelled) return;
        setHistory((data as unknown as DrawHistoryRow[]) || []);
        setHistoryLoading(false);
      });

    supabase
      .from("profiles")
      .select("nickname")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (!cancelled && data?.nickname) setNickname(data.nickname);
      });

    return () => {
      cancelled = true;
    };
  }, [user, supabase, showProfile]);

  const shipBadgeClass = (status: string | null) => {
    if (status === "배송완료") return "ship-badge ship-done";
    if (status === "배송중") return "ship-badge ship-moving";
    return "ship-badge ship-ready";
  };

  return (
    <section className="subpage">
      <div className="subpage-inner">
        {loading && <p>불러오는 중...</p>}

        {!loading && !user && (
          <>
            <h1>마이페이지</h1>
            <div className="account-guest">
              <p>로그인하면 뽑기 내역과 계정 정보를 확인할 수 있습니다.</p>
              <button className="auth-button" onClick={() => setShowAuth(true)}>
                로그인 / 회원가입
              </button>
            </div>
          </>
        )}

        {!loading && user && (
          <div className="account-info">
            {/* 상단: 프로필 헤더 + 설정 버튼 */}
            <div className="account-header">
              <div className="account-profile">
                <div className="account-avatar">
                  {(nickname || user.email || "U")[0].toUpperCase()}
                </div>
                <div>
                  <strong className="account-nickname">{nickname || "닉네임 미설정"}</strong>
                  <span className="account-email">{user.email}</span>
                </div>
              </div>
              <button
                className="account-gear"
                onClick={() => setShowProfile(true)}
                aria-label="프로필 설정"
                title="프로필 설정"
              >
                ⚙
              </button>
            </div>

            <div className="account-actions">
              <button className="auth-button" onClick={() => signOut()}>
                로그아웃
              </button>
            </div>

            {/* 뽑기 내역 (배송/운송장 포함) */}
            <div className="draw-history">
              <h2 className="draw-history-title">뽑기 내역</h2>
              {historyLoading && <p className="draw-history-empty">불러오는 중...</p>}
              {!historyLoading && history.length === 0 && (
                <p className="draw-history-empty">아직 뽑기 내역이 없습니다. 팩을 열어보세요!</p>
              )}
              {!historyLoading && history.length > 0 && (
                <ul className="draw-history-list">
                  {pagedHistory.map((row) => (
                    <li className="draw-history-row" key={row.id}>
                      <div className="draw-history-main">
                        <span className="draw-history-reward">
                          {row.rewards?.name || "상품"}
                        </span>
                        {row.rewards?.tier && (
                          <span className="draw-history-tier">{row.rewards.tier}</span>
                        )}
                      </div>
                      {/* LAST ONE 보상 획득 표시 */}
                      {row.is_lastone && row.lastone_name && (
                        <div className="history-lastone">
                          🎉 LAST ONE 보상 : {row.lastone_name}
                        </div>
                      )}
                      <div className="draw-history-meta">
                        <span>{row.packs?.title || "팩"}</span>
                        <span>
                          {row.created_at
                            ? new Date(row.created_at).toLocaleDateString("ko-KR")
                            : ""}
                        </span>
                      </div>
                      {/* 배송 상태 + 운송장 */}
                      <div className="draw-history-ship">
                        <span className={shipBadgeClass(row.ship_status)}>
                          {row.ship_status || "준비중"}
                        </span>
                        {row.tracking_no ? (
                          <span className="tracking-info">
                            {row.courier ? `${row.courier} ` : ""}
                            운송장 {row.tracking_no}
                          </span>
                        ) : (
                          <span className="tracking-info tracking-none">운송장 미등록</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* 페이지 넘기기 (10개씩, 번호 이동) */}
              {!historyLoading && totalPages > 1 && (
                <div className="history-pagination">
                  <button
                    className="page-btn"
                    onClick={() => setPage(1)}
                    disabled={page === 1}
                  >
                    «
                  </button>
                  <button
                    className="page-btn"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                  >
                    이전
                  </button>

                  {(() => {
                    // 현재 페이지 주변 번호만 표시 (최대 5개 창)
                    const windowSize = 5;
                    let start = Math.max(1, page - Math.floor(windowSize / 2));
                    const end = Math.min(totalPages, start + windowSize - 1);
                    start = Math.max(1, end - windowSize + 1);
                    const nums = [];
                    for (let i = start; i <= end; i++) nums.push(i);
                    return nums.map((n) => (
                      <button
                        key={n}
                        className={`page-num${n === page ? " is-active" : ""}`}
                        onClick={() => setPage(n)}
                      >
                        {n}
                      </button>
                    ));
                  })()}

                  <button
                    className="page-btn"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                  >
                    다음
                  </button>
                  <button
                    className="page-btn"
                    onClick={() => setPage(totalPages)}
                    disabled={page === totalPages}
                  >
                    »
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {showAuth && <AuthModal initialMode="login" close={() => setShowAuth(false)} />}
        {showProfile && user && (
          <ProfileModal userId={user.id} close={() => setShowProfile(false)} />
        )}
      </div>
    </section>
  );
}
