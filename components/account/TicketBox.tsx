"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { createClient } from "@/lib/supabase/client";

interface Ticket {
  id: string;
  created_at: string;
  reward_name: string | null;
  reward_tier: string | null;
  reward_image: string | null;
  reward_value: number | null;
  reward_item: string | null;
  pack_title: string | null;
  is_lastone: boolean | null;
  lastone_name: string | null;
}

// 안 깐 티켓 목록 + 까기(결과 공개).
export function TicketBox({ userId, onOpened }: { userId: string; onOpened: () => void }) {
  const supabase = useMemo(() => createClient(), []);
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const [opening, setOpening] = useState<Ticket | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const load = () => {
    supabase
      .from("draws")
      .select("id, created_at, is_lastone, lastone_name, packs(title), rewards(name, tier, image, value, item)")
      .eq("user_id", userId)
      .eq("is_opened", false)
      .order("created_at", { ascending: false })
      .then(async ({ data }) => {
        const raw = data || [];
        // ★ 3분(180초) 지난 티켓은 자동으로 열기
        const now = Date.now();
        const expired = raw.filter(
          (d: Record<string, unknown>) =>
            now - new Date(d.created_at as string).getTime() >= 180000,
        );
        if (expired.length > 0) {
          await Promise.all(
            expired.map((d: Record<string, unknown>) =>
              supabase.rpc("open_ticket", { p_draw_id: d.id as string, p_user_id: userId }),
            ),
          );
          onOpened(); // 뽑기 내역 갱신
        }
        // 아직 안 열린(3분 안 지난) 것만 티켓으로 표시
        const active = raw.filter(
          (d: Record<string, unknown>) =>
            now - new Date(d.created_at as string).getTime() < 180000,
        );
        const list = active.map((d: Record<string, unknown>) => {
          const r = (d.rewards || {}) as Record<string, unknown>;
          const p = (d.packs || {}) as Record<string, unknown>;
          return {
            id: d.id as string,
            created_at: d.created_at as string,
            reward_name: (r.name as string) ?? null,
            reward_tier: (r.tier as string) ?? null,
            reward_image: (r.image as string) ?? null,
            reward_value: (r.value as number) ?? null,
            reward_item: (r.item as string) ?? null,
            pack_title: (p.title as string) ?? null,
            is_lastone: (d.is_lastone as boolean) ?? null,
            lastone_name: (d.lastone_name as string) ?? null,
          } as Ticket;
        });
        setTickets(list);
      });
  };

  useEffect(() => {
    load();
    // 30초마다 재확인 (3분 지난 티켓 자동 오픈용)
    const timer = setInterval(load, 30000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const openTicket = async (t: Ticket) => {
    setOpening(t);
    setRevealed(false);
    // 연출: 잠깐 두근두근 후 공개
    setTimeout(() => setRevealed(true), 1600);
    // DB에 깠다고 기록
    await supabase.rpc("open_ticket", { p_draw_id: t.id, p_user_id: userId });
  };

  const closeReveal = () => {
    setOpening(null);
    setRevealed(false);
    load();
    onOpened(); // 부모(뽑기 내역) 갱신
  };

  if (!tickets || tickets.length === 0) return null;

  return (
    <div className="ticket-box">
      <div className="ticket-box-head">
        <h2 className="draw-history-title">🎟️ 확인하지 않은 티켓</h2>
        <span className="ticket-count">{tickets.length}장</span>
      </div>
      <p className="ticket-box-sub">티켓을 눌러 결과를 확인하세요!</p>

      <div className="ticket-grid">
        {tickets.map((t) => (
          <button key={t.id} className="ticket-item" onClick={() => openTicket(t)}>
            <div className="ticket-item-icon">🎟️</div>
            <div className="ticket-item-info">
              <strong>{t.pack_title || "팩"}</strong>
              <span>{new Date(t.created_at).toLocaleDateString("ko-KR")}</span>
            </div>
            <span className="ticket-open-label">열기</span>
          </button>
        ))}
      </div>

      {/* 티켓 까기 연출 팝업 */}
      {mounted && opening &&
        createPortal(
          <div className="result-overlay" onClick={(e) => e.target === e.currentTarget && revealed && closeReveal()}>
            {!revealed ? (
              <div className="ticket-reveal-card is-shaking">
                <div className="ticket-reveal-icon">🎟️</div>
                <p className="ticket-reveal-text">두구두구...</p>
              </div>
            ) : (
              <div className="reward-detail-card ticket-result">
                <button className="result-close" onClick={closeReveal} aria-label="닫기">×</button>
                <span className="ticket-congrats">🎉 축하합니다!</span>
                <div className="reward-detail-image">
                  {opening.reward_image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={opening.reward_image} alt={opening.reward_name || ""} />
                  )}
                </div>
                {opening.reward_tier && <span className="result-card__tier">{opening.reward_tier}</span>}
                <strong className="reward-detail-name">{opening.reward_name}</strong>
                {opening.reward_item && <p className="reward-detail-item">{opening.reward_item}</p>}
                {opening.reward_value != null && (
                  <p className="reward-detail-value">{opening.reward_value.toLocaleString("ko-KR")}원 상당</p>
                )}
                {opening.is_lastone && opening.lastone_name && (
                  <div className="history-lastone" style={{ marginTop: 8 }}>
                    🎉 LAST ONE 보상 : {opening.lastone_name}
                  </div>
                )}
                <button className="result-btn result-btn--primary" onClick={closeReveal} style={{ marginTop: 16 }}>
                  확인
                </button>
              </div>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
}
