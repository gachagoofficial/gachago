/**
 * Supabase 시드 스크립트
 * ----------------------------------------------------------------
 * lib/data/catalog.ts 의 팩/보상 데이터를 읽어서
 * Supabase 의 packs / rewards 테이블에 채워 넣는다.
 *
 * 사전 준비:
 *   1) supabase/schema.sql 을 대시보드 SQL Editor 에서 실행 (테이블+RLS+draw_pack)
 *   2) .env.local 에 NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY 설정
 *
 * 실행:
 *   npx tsx scripts/seed.ts
 *   (또는) node --loader tsx scripts/seed.ts
 *
 * 특징:
 *   - service_role 키로 실행 (RLS 우회, insert 허용)
 *   - 노출되는 팩(allPacks, customPackSlugs 필터 후 10개)만 시드
 *   - 각 팩의 packTierCatalog 보상을 rewards 로 변환
 *   - stock: 보상 quantity 우선, 없으면 팩 재고 기반 추정
 *   - weight: rarity 기반 가중치 (희귀할수록 낮음)
 *   - value: actualPrice 우선, 없으면 displayValue
 *   - 재실행 대비: 기존 rewards/packs 를 slug 기준으로 정리 후 재삽입
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { allPacks, packTierCatalog } from "../lib/data/catalog";
import type { Pack } from "../lib/data/types";

// .env.local 로드
config({ path: ".env.local" });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY || SERVICE_KEY.startsWith("YOUR_")) {
  console.error(
    "❌ NEXT_PUBLIC_SUPABASE_URL 과 SUPABASE_SERVICE_ROLE_KEY 를 .env.local 에 설정하세요.",
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

// ---- rarity → 가중치 (희귀할수록 낮음, 합이 100 근처가 되도록) ----
const RARITY_WEIGHT: Record<string, number> = {
  LEGEND: 1,
  MYTHIC: 3,
  EPIC: 8,
  RARE: 20,
  STANDARD: 68,
};
const DEFAULT_WEIGHT = 20;

// ---- rarity → 기본 재고 (보상 quantity 없을 때) ----
const RARITY_DEFAULT_STOCK: Record<string, number> = {
  LEGEND: 2,
  MYTHIC: 3,
  EPIC: 6,
  RARE: 20,
  STANDARD: 100,
};
const DEFAULT_STOCK = 10;

interface RawReward {
  name?: string;
  rarity?: string;
  image?: string;
  actualPrice?: number;
  displayValue?: number;
  quantity?: number;
  englishName?: string;
  title?: string;
  [key: string]: unknown;
}

type TierMap = Record<string, RawReward[]>;

function toRewardRows(pack: Pack) {
  const tiers = (packTierCatalog as Record<string, TierMap>)[pack.slug];
  if (!tiers) return [];

  const rows: {
    pack_id: string;
    name: string;
    brand: string | null;
    item: string | null;
    rarity: string | null;
    tier: string | null;
    value: number | null;
    weight: number;
    stock: number;
    image: string | null;
  }[] = [];

  for (const [tierKey, arr] of Object.entries(tiers)) {
    for (const r of arr || []) {
      if (!r.name || r.name === "랜덤 상품") continue; // placeholder 제외

      const rarity = (r.rarity || tierKey || "").toUpperCase();
      const weight = RARITY_WEIGHT[rarity] ?? DEFAULT_WEIGHT;
      const stock =
        typeof r.quantity === "number" && r.quantity > 0
          ? r.quantity
          : RARITY_DEFAULT_STOCK[rarity] ?? DEFAULT_STOCK;
      const value =
        typeof r.actualPrice === "number"
          ? r.actualPrice
          : typeof r.displayValue === "number"
            ? r.displayValue
            : null;

      // 슬롯 매칭용 brand/item: 원본 슬롯 아이템은 brand/item 으로 쪼개지지만
      // 보상 데이터엔 name(한글) + englishName 이 있으므로 이를 매핑.
      rows.push({
        pack_id: pack.id,
        name: r.name,
        brand: r.name, // 슬롯에서 brand 로 표시/매칭 (필요시 조정)
        item: r.englishName || r.title || "",
        rarity,
        tier: rarity,
        value,
        weight,
        stock,
        image: r.image ?? null,
      });
    }
  }
  return rows;
}

async function main() {
  const packs = allPacks as Pack[];
  console.log(`시드 대상 팩: ${packs.length}개`);

  // 1) packs 업서트
  const packRows = packs.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle ?? null,
    price: p.priceValue,
    category: p.category ?? null,
  }));

  const { error: packErr } = await supabase
    .from("packs")
    .upsert(packRows, { onConflict: "id" });
  if (packErr) {
    console.error("❌ packs upsert 실패:", packErr.message);
    process.exit(1);
  }
  console.log(`✅ packs ${packRows.length}개 업서트 완료`);

  // 2) 기존 rewards 정리 (재실행 대비) — 이 팩들에 속한 것만 삭제
  const packIds = packs.map((p) => p.id);
  const { error: delErr } = await supabase
    .from("rewards")
    .delete()
    .in("pack_id", packIds);
  if (delErr) {
    console.error("⚠️ 기존 rewards 삭제 경고:", delErr.message);
  }

  // 3) rewards 삽입
  const rewardRows = packs.flatMap((p) => toRewardRows(p));
  console.log(`시드할 보상: ${rewardRows.length}개`);

  const { error: rewardErr } = await supabase.from("rewards").insert(rewardRows);
  if (rewardErr) {
    console.error("❌ rewards insert 실패:", rewardErr.message);
    process.exit(1);
  }
  console.log(`✅ rewards ${rewardRows.length}개 삽입 완료`);

  // 4) 요약
  const byPack = new Map<string, number>();
  rewardRows.forEach((r) => byPack.set(r.pack_id, (byPack.get(r.pack_id) || 0) + 1));
  console.log("\n팩별 보상 수:");
  packs.forEach((p) => console.log(`  ${p.slug}: ${byPack.get(p.id) || 0}개`));

  console.log("\n🎉 시드 완료! 이제 /packs/<slug> 에서 실제 뽑기가 동작합니다.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
