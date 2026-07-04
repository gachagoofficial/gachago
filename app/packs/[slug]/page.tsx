import { notFound } from "next/navigation";
import { allPacks } from "@/lib/data/catalog";
import type { Pack } from "@/lib/data/types";
import { GachaDrawMachine } from "@/components/slot/GachaDrawMachine";
import { PackShowcaseVisual } from "@/components/packs/detail/PackShowcaseVisual";
import { RewardLineup } from "@/components/packs/detail/RewardLineup";
import { LastDrawBonus } from "@/components/packs/detail/LastDrawBonus";
import { FairnessButton } from "@/components/packs/detail/FairnessButton";
import { PackStock } from "@/components/packs/detail/PackStock";
import { formatWon } from "@/lib/format";

export function generateStaticParams() {
  return (allPacks as Pack[]).map((pack) => ({ slug: pack.slug }));
}

interface PackWithTiers extends Pack {
  tiers?: Record<string, Array<Record<string, unknown>>>;
  koreanName?: string;
  lastDrawBonus?: {
    label?: string;
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  };
}

export default async function PackDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pack = (allPacks as PackWithTiers[]).find((p) => p.slug === slug);
  if (!pack) notFound();

  const soldOut = (pack.remainingQuantity ?? 0) <= 0;

  return (
    <section className="pack-detail-page">
      {/* 상단: 대표 이미지 + 정보 */}
      <div className="pack-detail-hero reveal">
        <div className="pack-detail-visual">
          <PackShowcaseVisual pack={pack} />
        </div>
        <div className="pack-detail-copy is-minimal">
          <h1>{pack.koreanName || pack.title}</h1>
          <PackStock packId={pack.id} />
          <div className="detail-price-row">
            <span>팩 가격</span>
            <strong>{formatWon(pack.priceValue)}</strong>
          </div>

          {pack.lastDrawBonus && <LastDrawBonus bonus={pack.lastDrawBonus} />}

          {/* ★ 실제 뽑기 (버튼만 노출, 뽑을 때 슬롯 등장) + 팩 목록으로 */}
          <GachaDrawMachine packId={pack.id} soldOut={soldOut} />

          <FairnessButton />
        </div>
      </div>

      {/* 하단: 당첨 가능 상품 (DB 실시간 재고) */}
      <section className="reward-section reveal delay-1">
        <div className="reward-heading">
          <p className="section-label">Reward Lineup</p>
          <h2>당첨 가능 상품</h2>
          <p>이 팩에서 등장할 수 있는 리워드를 티어별로 확인하세요.</p>
        </div>
        <RewardLineup packId={pack.id} />
      </section>
    </section>
  );
}
