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
  initial_stock: number | null;
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

  useEffect(() => {
    let cancelled = false;

    const load = () => {
      supabase
        .from("rewards")
        .select("id, name, item, rarity, tier, value, stock, initial_stock, image")
        .eq("pack_id", packId)
        .then(({ data }) => {
          if (cancelled || !data) return;
          setRewards(data as RewardRow[]);
        });
    };

    load();
    // 뽑기 성공 시 즉시 재조회 (새로고침 불필요)
    window.addEventListener("gacha:stock-changed", load);
    return () => {
      cancelled = true;
      window.removeEventListener("gacha:stock-changed", load);
    };
  }, [packId, supabase]);

  const [selected, setSelected] = useState<RewardRow | null>(null);

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
          const total = items.reduce((s, r) => s + (r.initial_stock ?? r.stock), 0);
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
                  const rInitial = r.initial_stock ?? r.stock;
                  return (
                    <button
                      type="button"
                      className={`reward-card reward-${meta?.tone ?? "standard"} is-clickable`}
                      key={r.id}
                      onClick={() => setSelected(r)}
                    >
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
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}

      {/* 상품 확대 팝업 */}
      {selected && (
        <div
          className="result-overlay"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="reward-detail-card">
            <button
              className="result-close"
              onClick={() => setSelected(null)}
              aria-label="닫기"
            >
              ×
            </button>
            <div className="reward-detail-image">
              {selected.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={selected.image} alt={selected.name} />
              )}
            </div>
            {selected.tier && (
              <span className="result-card__tier">{selected.tier}</span>
            )}
            <strong className="reward-detail-name">{selected.name}</strong>
            {selected.item && <p className="reward-detail-item">{selected.item}</p>}
            {selected.value != null && (
              <p className="reward-detail-value">
                {selected.value.toLocaleString("ko-KR")}원 상당
              </p>
            )}
            <p className="reward-detail-stock">
              남은 수량 {selected.stock}/{selected.initial_stock ?? selected.stock}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
