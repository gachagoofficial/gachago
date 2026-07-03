"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { tierConfig } from "@/lib/data/catalog";

interface FeedRow {
  id: string;
  winner_name: string;
  created_at: string;
  reward_name: string;
  rarity: string | null;
  tier: string | null;
  pack_title: string | null;
}

// "n분 전" 형식의 상대 시간
function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return "방금 전";
  if (min < 60) return `${min}분 전`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}시간 전`;
  return `${Math.floor(hr / 24)}일 전`;
}

// 실시간 당첨 현황 (진짜 DB 데이터).
// public_feed 뷰에서 좋은 상품 당첨만 조회 + 30초마다 자동 갱신.
export function LiveFeed() {
  const supabase = useMemo(() => createClient(), []);
  const [feed, setFeed] = useState<FeedRow[] | null>(null);
  const [expanded, setExpanded] = useState(false);
  const tiers = tierConfig as Record<string, { accent: string; glow: string }>;

  const VISIBLE = 5;

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const { data } = await supabase.from("public_feed").select("*");
      if (cancelled) return;
      setFeed((data as FeedRow[]) || []);
    };

    load();
    const timer = setInterval(load, 30000); // 30초마다 갱신
    return () => {
      cancelled = true;
      clearInterval(timer);
    };
  }, [supabase]);

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
        {feed === null && (
          <p className="live-feed-empty">불러오는 중...</p>
        )}
        {feed !== null && feed.length === 0 && (
          <p className="live-feed-empty">
            아직 당첨 소식이 없습니다.
            <br />첫 번째 럭셔리 당첨의 주인공이 되어보세요!
          </p>
        )}
        {(expanded ? feed || [] : (feed || []).slice(0, VISIBLE)).map((item) => {
          const rarityMeta =
            tiers[(item.rarity || item.tier || "").toLowerCase()] || tiers.standard;
          return (
            <article
              className="live-feed-item rounded-2xl border p-3"
              key={item.id}
              style={
                {
                  "--feed-accent": rarityMeta?.accent,
                  "--feed-glow": rarityMeta?.glow,
                } as React.CSSProperties
              }
            >
              <div
                className="avatar-ring grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-black"
                style={{ color: rarityMeta?.accent }}
              >
                {item.winner_name?.[0] ?? "유"}
              </div>
              <div className="live-feed-copy min-w-0">
                <div className="live-feed-head">
                  <h4 className="truncate text-sm font-black text-white">
                    {item.winner_name}
                  </h4>
                  <span className="live-feed-rarity">{item.rarity || item.tier}</span>
                </div>
                <p className="live-feed-pack">{item.pack_title}</p>
                <p className="live-feed-product">{item.reward_name}</p>
              </div>
              <time className="shrink-0 text-xs font-bold text-white/38">
                {timeAgo(item.created_at)}
              </time>
            </article>
          );
        })}

        {/* 5개 초과 시 더보기 / 접기 버튼 */}
        {feed !== null && feed.length > VISIBLE && (
          <button
            type="button"
            className="live-feed-more"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "접기" : `더보기 (+${feed.length - VISIBLE})`}
          </button>
        )}
      </div>
    </aside>
  );
}
