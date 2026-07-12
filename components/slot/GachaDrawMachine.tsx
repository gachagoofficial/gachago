"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { SlotReel, type SlotReelHandle } from "./SlotReel";
import { PurchaseButton } from "./PurchaseButton";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/components/auth/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { buildReelSequence, slotReelSettings, type SlotItemData } from "@/lib/slot/helpers";
import { formatWon } from "@/lib/format";

interface DrawResult {
  reward_id: string;
  name: string;
  value?: number;
  tier?: string;
  remaining_stock?: number;
  brand?: string;
  item?: string;
  rarity?: string;
  image?: string;
  // LAST ONE 보상 (마지막 뽑기일 때만 값이 있음)
  lastone_name?: string | null;
  lastone_tier?: string | null;
  lastone_value?: number | null;
  lastone_image?: string | null;
}

interface GachaDrawMachineProps {
  packId: string;
  soldOut?: boolean;
}

type DrawState = "idle" | "loading" | "spinning" | "done" | "error" | "ticket";

/**
 * ★ 실제 가챠 뽑기 컴포넌트.
 *
 * 보안 핵심 흐름:
 *  1) 사용자가 버튼 클릭
 *  2) /api/draw 로 POST (packId, userId만 전송 — 금액/확률은 절대 클라이언트가 안 정함)
 *  3) 서버가 결과(reward) 확정 + 재고 차감 (트랜잭션)
 *  4) 응답받은 reward 로 슬롯이 "그 아이템에서 멈추도록" 애니메이션
 *  5) 애니메이션 종료 후 결과 카드 표시
 *
 * 즉 애니메이션은 연출일 뿐이고, 당첨은 이미 서버에서 결정되어 있다.
 */
export function GachaDrawMachine({ packId, soldOut }: GachaDrawMachineProps) {
  const { user, loading: authLoading } = useAuth();
  const reelRef = useRef<SlotReelHandle>(null);
  const [state, setState] = useState<DrawState>("idle");
  const [result, setResult] = useState<DrawResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // ★ 팩 잠금 상태 (다른 사람이 뽑는 중이면 카운트다운)
  const supabase = useMemo(() => createClient(), []);
  const [lockSeconds, setLockSeconds] = useState<number>(0); // 남은 잠금 초 (0이면 안 잠김/본인)

  useEffect(() => {
    let active = true;
    const checkLock = async () => {
      const { data } = await supabase.rpc("get_pack_lock", { p_pack_id: packId });
      if (!active) return;
      const row = Array.isArray(data) ? data[0] : data;
      if (!row?.locked_until) {
        setLockSeconds(0);
        return;
      }
      const until = new Date(row.locked_until).getTime();
      const remain = Math.ceil((until - Date.now()) / 1000);
      // 본인이 잠근 거면 카운트다운 안 보임 (계속 뽑기 가능)
      if (remain > 0 && row.locked_by !== user?.id) {
        setLockSeconds(remain);
      } else {
        setLockSeconds(0);
      }
    };
    checkLock();
    const timer = setInterval(() => {
      setLockSeconds((s) => {
        if (s <= 1) {
          checkLock(); // 잠금 풀렸는지 재확인
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [packId, user?.id, supabase]);

  // 릴에 채울 시퀀스 (단일 통합 릴)
  const setting = slotReelSettings[0];
  const sequence = useMemo(() => buildReelSequence(setting), [setting]);

  const handleDraw = async () => {
    if (state === "loading" || state === "spinning" || soldOut) return;

    // 미로그인 시 로그인 모달을 띄운다 (userId는 서버 세션에서 확인하므로 여기선 안 보냄)
    if (!user) {
      setShowAuth(true);
      return;
    }

    setError(null);
    setResult(null);
    setState("loading");

    try {
      const res = await fetch("/api/draw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packId }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        // 5분 잠금
        if (data.error === "locked") {
          const sec = data.lockedSeconds || 300;
          const min = Math.floor(sec / 60);
          const s = sec % 60;
          throw new Error(
            `방금 다른 분이 이 팩을 뽑았어요. ${min}분 ${s}초 후에 다시 시도해주세요.`,
          );
        }
        throw new Error(data.error || "뽑기 요청이 실패했습니다.");
      }

      // ★ 티켓 발급 완료 (결과는 숨김, 마이페이지에서 확인)
      setState("ticket");

      // 재고 갱신 신호
      window.dispatchEvent(new CustomEvent("gacha:stock-changed"));
    } catch (e) {
      setError(e instanceof Error ? e.message : "알 수 없는 오류가 발생했습니다.");
      setState("error");
    }
  };

  const buttonState = state === "loading" || state === "spinning" ? "loading" : "idle";
  const showSlot = state === "spinning";

  return (
    <div className={`gacha-draw${state === "spinning" ? " is-spinning" : ""}`}>
      {/* 슬롯 창: 평소엔 숨기고, 뽑는 중/완료일 때만 노출 */}
      {showSlot && (
        <div className="slot-machine">
          <div className="slot-window">
            <div className="slot-payline" />
            <SlotReel ref={reelRef} reelNumber={0} items={sequence} />
          </div>
        </div>
      )}

      <div className="detail-action-row detail-action-row--inline">
        {lockSeconds > 0 ? (
          <div className="pack-locked-box">
            <span className="pack-locked-icon">⏳</span>
            <div>
              <strong>다른 분이 뽑는 중이에요</strong>
              <p>
                {Math.floor(lockSeconds / 60)}:
                {String(lockSeconds % 60).padStart(2, "0")} 후에 뽑을 수 있어요
              </p>
            </div>
          </div>
        ) : (
          <PurchaseButton
            onClick={handleDraw}
            state={buttonState}
            disabled={soldOut || authLoading}
          />
        )}
        <Link href="/packs" className="detail-secondary-btn">
          팩 목록으로
        </Link>
      </div>

      {!user && !authLoading && (
        <p className="draw-hint">뽑기하려면 로그인이 필요합니다.</p>
      )}

      {state === "error" && error && (
        <div className="draw-error" role="alert">
          {error}
        </div>
      )}

      {/* 뽑기 결과 모달 (화면 가운데 팝업 + 배경 어둡게) */}
      {mounted && state === "ticket" &&
        createPortal(
          <div
            className="result-overlay"
            onClick={(e) => e.target === e.currentTarget && setState("idle")}
          >
            <div className="ticket-issued-card">
              <button className="result-close" onClick={() => setState("idle")} aria-label="닫기">×</button>
              <div className="ticket-icon">🎟️</div>
              <strong className="ticket-title">티켓이 발급되었어요!</strong>
              <p className="ticket-desc">
                마이페이지에서 티켓을 열어 결과를 확인하세요.
                <br />어떤 상품이 나왔을까요?
              </p>
              <div className="result-card__actions">
                <Link href="/account" className="result-btn result-btn--primary">
                  마이페이지에서 열기
                </Link>
                <button className="result-btn" onClick={() => setState("idle")}>
                  계속 뽑기
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}

      {mounted && state === "done" && result &&
        createPortal(
          <div
            className="result-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) setState("idle");
            }}
          >
          <div className="result-card" role="status">
            <button
              className="result-close"
              onClick={() => setState("idle")}
              aria-label="닫기"
            >
              ×
            </button>
            <span className="result-card__label">축하합니다! 획득 아이템</span>
            <strong className="result-card__name">{result.name}</strong>
            {result.tier && <span className="result-card__tier">{result.tier}</span>}
            {result.value != null && (
              <span className="result-card__value">{formatWon(result.value)} 상당</span>
            )}

            {/* ★ LAST ONE 보상 (마지막 뽑기) */}
            {result.lastone_name && (
              <div className="lastone-banner">
                <span className="lastone-badge">🎉 LAST ONE 보상 획득!</span>
                <strong className="lastone-name">{result.lastone_name}</strong>
                {result.lastone_tier && (
                  <span className="result-card__tier">{result.lastone_tier}</span>
                )}
                <p className="lastone-desc">팩의 마지막을 뽑아 특별 보상이 함께 지급됩니다!</p>
              </div>
            )}
            <div className="result-card__actions">
              <Link href="/account" className="result-btn result-btn--primary">
                마이페이지에서 확인
              </Link>
              <button className="result-btn" onClick={() => setState("idle")}>
                닫기
              </button>
            </div>
          </div>
          </div>,
          document.body,
        )}

      {showAuth && <AuthModal initialMode="login" close={() => setShowAuth(false)} />}
    </div>
  );
}
