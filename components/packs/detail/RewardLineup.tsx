"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { tierOrder, tierConfig } from "@/lib/data/catalog";

interface RewardRow {
  id: string;
  name: string;
  item: string | null;
  rarity: string | null;
  tier: string | null;
  value: number | null;
  stock: number;
  image: string | null;
}

interface TierMeta {
  tone: string;
  label: string;
  accent: string;
  glow: string;
  shadow: string;
}

// 당첨 가능 상품 목록 (DB 실시간 재고 반영).
// 뽑기 후 페이지 새로고침하면 재고(stock)가 줄어든 게 보인다.
export function RewardLineup({ packId }: { packId: string }) {
  const supabase = useMemo(() => createClient(), []);
  const [rewards, setRewards] = useState<RewardRow[] | null>(null);
  // 최초 로드 시점의 총 재고를 기억 (분모로 사용: 현재/최초)
  const [initialStock, setInitialStock] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;
    supabase
      .from("rewards")
      .select("id, name, item, rarity, tier, value, stock, image")
      .eq("pack_id", packId)
      .then(({ data }) => {
        if (cancelled || !data) return;
        const rows = data as RewardRow[];
        setRewards(rows);
        setInitialStock((prev) => {
          if (Object.keys(prev).length > 0) return prev;
          const map: Record<string, number> = {};
          rows.forEach((r) => (map[r.id] = r.stock));
          return map;
        });
      });
    return () => {
      cancelled = true;
    };
  }, [packId, supabase]);

  const order = tierOrder as string[];
  const config = tierConfig as Record<string, TierMeta>;

  // 티어별로 그룹핑
  const grouped = useMemo(() => {
    const map: Record<string, RewardRow[]> = {};
    (rewards || []).forEach((r) => {
      const key = (r.tier || r.rarity || "standard").toLowerCase();
      (map[key] = map[key] || []).push(r);
    });
    return map;
  }, [rewards]);

  if (!rewards) {
    return <p className="draw-history-empty">상품 목록을 불러오는 중...</p>;
  }

  return (
    <div className="tier-stack">
      {order
        .filter((tierKey) => (grouped[tierKey] || []).length > 0)
        .map((tierKey) => {
          const meta = config[tierKey];
          const items = grouped[tierKey];
          const remaining = items.reduce((s, r) => s + (r.stock || 0), 0);
          const total = items.reduce((s, r) => s + (initialStock[r.id] ?? r.stock), 0);
          return (
            <section
              key={tierKey}
              className={`tier-section tier-${meta?.tone ?? "standard"}`}
              style={
                {
                  "--tier-accent": meta?.accent,
                  "--tier-glow": meta?.glow,
                  "--tier-shadow": meta?.shadow,
                } as React.CSSProperties
              }
            >
              <div className="tier-header">
                <h3>{meta?.label ?? tierKey}</h3>
                <p>
                  {remaining}/{total}
                </p>
              </div>
              <div className={`reward-grid${tierKey === "legend" ? " legend-grid" : ""}`}>
                {items.map((r) => {
                  const rInitial = initialStock[r.id] ?? r.stock;
                  return (
                    <div className={`reward-card reward-${meta?.tone ?? "standard"}`} key={r.id}>
                      <div className="reward-image">
                        {r.image && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={r.image} alt={r.name} loading="lazy" />
                        )}
                      </div>
                      <div className="reward-copy">
                        <h4>{r.name}</h4>
                        {r.value != null && <p>{r.value.toLocaleString("ko-KR")}원 상당</p>}
                        <small>
                          <b>
                            수량 {r.stock}/{rInitial}
                          </b>
                        </small>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
    </div>
  );
}
