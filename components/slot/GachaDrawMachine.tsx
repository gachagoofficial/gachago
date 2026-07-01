"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SlotReel, type SlotReelHandle } from "./SlotReel";
import { PurchaseButton } from "./PurchaseButton";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/components/auth/AuthProvider";
import { buildReelSequence, slotReelSettings, type SlotItemData } from "@/lib/slot/helpers";
import { formatWon } from "@/lib/format";

interface DrawResult {
  reward_id: string;
  name: string;
  value?: number;
  tier?: string;
  remaining_stock?: number;
  // 슬롯에서 멈출 아이템 식별용(brand/item/rarity). 서버 응답에 맞춰 매핑.
  brand?: string;
  item?: string;
  rarity?: string;
  image?: string;
}

interface GachaDrawMachineProps {
  packId: string;
  soldOut?: boolean;
}

type DrawState = "idle" | "loading" | "spinning" | "done" | "error";

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

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "뽑기 요청이 실패했습니다.");
      }

      const data = await res.json();
      const reward: DrawResult = data.result;

      // 서버가 정한 결과로 슬롯을 멈춘다.
      setState("spinning");
      const targetItem: SlotItemData = {
        brand: reward.brand ?? reward.name,
        item: reward.item ?? "",
        rarity: reward.rarity ?? reward.tier,
        image: reward.image,
      };
      await reelRef.current?.spinToItem(targetItem);

      setResult(reward);
      setState("done");
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

      <div className="detail-action-row">
        <PurchaseButton
          onClick={handleDraw}
          state={buttonState}
          disabled={soldOut || authLoading}
        />
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
      {state === "done" && result && (
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
            <div className="result-card__actions">
              <Link href="/account" className="result-btn result-btn--primary">
                마이페이지에서 확인
              </Link>
              <button className="result-btn" onClick={() => setState("idle")}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {showAuth && <AuthModal initialMode="login" close={() => setShowAuth(false)} />}
    </div>
  );
}
