"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { allPacks } from "@/lib/data/catalog";
import type { Pack } from "@/lib/data/types";
import { formatWon } from "@/lib/format";

// 마이페이지 상단: 구매 대기 팩 + 수량 선택 + 결제(뽑기).
export function PurchasePanel({
  slug,
  onDone,
}: {
  slug: string;
  onDone: () => void;
}) {
  const pack = useMemo(
    () => (allPacks as Pack[]).find((p) => p.slug === slug),
    [slug],
  );
  const [qty, setQty] = useState(1);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [msg, setMsg] = useState("");

  if (!pack) return null;

  const MAX = 20; // 1회 최대 수량
  const clamp = (n: number) => Math.max(1, Math.min(MAX, n));
  const price = pack.priceValue * qty;

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = parseInt(e.target.value.replace(/[^0-9]/g, ""), 10);
    setQty(Number.isNaN(n) ? 1 : clamp(n));
  };

  // 결제(=지금은 결제 없이 바로 뽑기) → 수량만큼 draw API 호출
  const pay = async () => {
    setProcessing(true);
    setMsg("");
    setProgress({ done: 0, total: qty });

    for (let i = 0; i < qty; i++) {
      try {
        const res = await fetch("/api/draw", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ packId: pack.id }),
        });
        const data = await res.json();
        if (data.error) {
          // 잠금(다른 사람이 뽑는 중) 등
          if (data.error === "locked") {
            setMsg("다른 분이 뽑는 중이라 잠시 후 다시 시도해주세요.");
          } else {
            setMsg(data.error);
          }
          setProcessing(false);
          setProgress(null);
          return;
        }
        setProgress({ done: i + 1, total: qty });
      } catch {
        setMsg("네트워크 오류가 발생했습니다.");
        setProcessing(false);
        setProgress(null);
        return;
      }
    }

    setProcessing(false);
    setProgress(null);
    onDone(); // 티켓 목록/내역 갱신
  };

  return (
    <div className="purchase-panel">
      <div className="purchase-pack">
        <div className="purchase-pack-img">
          <Image src={pack.image} alt={pack.title} width={80} height={80} unoptimized={pack.image.startsWith("http")} />
        </div>
        <div>
          <span className="purchase-eyebrow">구매 대기 중인 팩</span>
          <strong className="purchase-pack-name">{pack.title}</strong>
          <span className="purchase-unit">{formatWon(pack.priceValue)} / 개</span>
        </div>
      </div>

      {/* 수량 선택 */}
      <div className="qty-row">
        <span className="qty-label">수량</span>
        <div className="qty-control">
          <button onClick={() => setQty((q) => clamp(q - 1))} disabled={processing} aria-label="수량 감소">−</button>
          <input value={qty} onChange={onInput} inputMode="numeric" disabled={processing} />
          <button onClick={() => setQty((q) => clamp(q + 1))} disabled={processing} aria-label="수량 증가">+</button>
        </div>
      </div>

      <div className="purchase-total">
        <span>결제 금액</span>
        <strong>{formatWon(price)}</strong>
      </div>

      {msg && <p className="profile-msg">{msg}</p>}

      {progress ? (
        <button className="result-btn result-btn--primary" disabled>
          뽑는 중... ({progress.done}/{progress.total})
        </button>
      ) : (
        <button className="result-btn result-btn--primary" onClick={pay} disabled={processing}>
          {qty}개 결제하기
        </button>
      )}
      <p className="purchase-note">결제 후 티켓이 발급되며, 3분 뒤 자동으로 공개됩니다.</p>
    </div>
  );
}
