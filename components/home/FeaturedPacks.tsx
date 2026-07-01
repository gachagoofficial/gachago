import Link from "next/link";
import { allPacks } from "@/lib/data/catalog";
import type { Pack } from "@/lib/data/types";
import { PackCard } from "@/components/packs/PackCard";

// 추천 팩 6개 (홈).
export function FeaturedPacks() {
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
          <PackCard pack={pack} key={pack.id} />
        ))}
      </div>
    </section>
  );
}
