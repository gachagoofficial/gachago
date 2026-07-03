"use client";

import Link from "next/link";
import { allPacks } from "@/lib/data/catalog";
import type { Pack } from "@/lib/data/types";
import { PackCard } from "@/components/packs/PackCard";
import { usePackStocks } from "@/lib/hooks/usePackStocks";

// 추천 팩 6개 (홈). DB 실시간 재고 반영.
export function FeaturedPacks() {
  const stocks = usePackStocks();
  const packs = (allPacks as Pack[]).slice(0, 6);

  return (
    <section className="section-wrap">
      <div className="mb-9 flex items-end justify-between gap-5">
        <div>
          <p className="section-label">Curated Mystery Packs</p>
          <h2 className="section-title mt-3 font-black">추천 팩</h2>
        </div>
        <Link
          href="/packs"
          className="magnetic-btn rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white"
        >
          전체보기
        </Link>
      </div>
      <div className="featured-pack-grid">
        {packs.map((pack) => (
          <PackCard pack={pack} stockInfo={stocks?.[pack.id]} key={pack.id} />
        ))}
      </div>
    </section>
  );
}
