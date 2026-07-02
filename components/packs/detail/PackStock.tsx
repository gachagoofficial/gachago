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
      // 이 팩의 모든 보상 재고를 가져와 합산
      const { data } = await supabase
        .from("rewards")
        .select("stock")
        .eq("pack_id", packId);
      if (cancelled || !data) return;
      const sum = data.reduce((s, r) => s + (r.stock || 0), 0);
      setRemaining(sum);
      // 총량은 최초 로드 시점 값을 기준으로 (없으면 현재 합계)
      setTotal((prev) => (prev == null ? sum : prev));
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [packId, supabase]);

  if (remaining == null) return null;

  return (
    <div className="remaining-status">
      남은 수량 : {remaining}
      {total != null && total !== remaining ? `/${total}` : ""}
    </div>
  );
}
