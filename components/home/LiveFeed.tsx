"use client";

import { feedSeed, tierConfig } from "@/lib/data/catalog";

interface FeedItem {
  id: string | number;
  name: string;
  rarity?: string;
  pack?: string;
  product?: string;
  time?: string;
}

// 실시간 당첨 현황 (홈). 원본의 FLIP 애니메이션은 단순화하고 목록만 표시.
export function LiveFeed() {
  const feed = feedSeed as FeedItem[];
  const tiers = tierConfig as Record<string, { accent: string; glow: string }>;

  return (
    <aside className="live-feed-panel glass-panel rounded-[24px] p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="section-label">Realtime Wins</p>
          <h3 className="mt-2 text-2xl font-black">실시간 당첨 현황</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-drawzy-orange/10 px-3 py-2">
          <span className="pulse-dot" />
          <span className="text-xs font-black text-drawzy-glow">LIVE</span>
        </div>
      </div>
      <div className="live-feed-list">
        {feed.map((item) => {
          const rarityMeta = tiers[item.rarity?.toLowerCase() ?? ""] || tiers.standard;
          const isRandom = item.product === "랜덤 상품";
          return (
            <article
              className={`live-feed-item rounded-2xl border p-3${isRandom ? " is-random" : ""}`}
              key={item.id}
              style={
                {
                  "--feed-accent": isRandom ? "rgba(255,255,255,0.4)" : rarityMeta?.accent,
                  "--feed-glow": isRandom ? "transparent" : rarityMeta?.glow,
                } as React.CSSProperties
              }
            >
              <div
                className="avatar-ring grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-black"
                style={{ color: isRandom ? "rgba(255,255,255,0.72)" : rarityMeta?.accent }}
              >
                {item.name[0]}
              </div>
              <div className="live-feed-copy min-w-0">
                <div className="live-feed-head">
                  <h4 className="truncate text-sm font-black text-white">{item.name}</h4>
                  <span className="live-feed-rarity">{item.rarity}</span>
                </div>
                <p className="live-feed-pack">{item.pack}</p>
                <p className="live-feed-product">{item.product}</p>
              </div>
              <time className="shrink-0 text-xs font-bold text-white/38">{item.time}</time>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
