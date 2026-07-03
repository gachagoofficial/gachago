"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export interface PackStockInfo {
  remaining: number;
  total: number;
}

// 모든 팩의 재고 합계를 한 번에 조회.
// 반환: { [pack_id]: { remaining, total } }
// 뽑기 성공(gacha:stock-changed) 시 자동 재조회.
export function usePackStocks(): Record<string, PackStockInfo> | null {
  const supabase = useMemo(() => createClient(), []);
  const [stocks, setStocks] = useState<Record<string, PackStockInfo> | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = () => {
      supabase
        .from("rewards")
        .select("pack_id, stock, initial_stock")
        .then(({ data }) => {
          if (cancelled || !data) return;
          const map: Record<string, PackStockInfo> = {};
          for (const r of data as {
            pack_id: string;
            stock: number;
            initial_stock: number | null;
          }[]) {
            const cur = map[r.pack_id] || { remaining: 0, total: 0 };
            cur.remaining += r.stock || 0;
            cur.total += r.initial_stock ?? r.stock ?? 0;
            map[r.pack_id] = cur;
          }
          setStocks(map);
        });
    };

    load();
    window.addEventListener("gacha:stock-changed", load);
    return () => {
      cancelled = true;
      window.removeEventListener("gacha:stock-changed", load);
    };
  }, [supabase]);

  return stocks;
}
