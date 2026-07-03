"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

// 팩 상세의 "남은 수량" 을 DB 실제 재고 합계로 실시간 표시.
// (코드 고정값이 아니라 rewards.stock 합계 → 뽑을수록 줄어듦)
export function PackStock({ packId }: { packId: string }) {
  const supabase = useMemo(() => createClient(), []);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      // 이 팩의 모든 보상: 현재재고(stock) + 원래수량(initial_stock)
      const { data } = await supabase
        .from("rewards")
        .select("stock, initial_stock")
        .eq("pack_id", packId);
      if (cancelled || !data) return;
      const sum = data.reduce((s, r) => s + (r.stock || 0), 0);
      const totalSum = data.reduce(
        (s, r) => s + ((r.initial_stock as number) ?? r.stock ?? 0),
        0,
      );
      setRemaining(sum);
      setTotal(totalSum);
    };

    load();
    // 뽑기 성공 시 즉시 재조회 (새로고침 불필요)
    window.addEventListener("gacha:stock-changed", load);
    return () => {
      cancelled = true;
      window.removeEventListener("gacha:stock-changed", load);
    };
  }, [packId, supabase]);

  if (remaining == null) return null;

  return (
    <div className="remaining-status">
      남은 수량 : {remaining}
      {total != null ? `/${total}` : ""}
    </div>
  );
}
