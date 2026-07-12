"use client";

import { useMemo, useState } from "react";
import { allPacks } from "@/lib/data/catalog";
import type { Pack } from "@/lib/data/types";
import { PackCard } from "./PackCard";
import { usePackStocks } from "@/lib/hooks/usePackStocks";

const CATEGORY_OPTIONS = ["전체", "지갑", "가방", "시계", "전자제품", "의류"];
const SORT_OPTIONS = ["인기순", "최신순", "가격 낮은순", "가격 높은순"];

function sortItems(
  items: Pack[],
  sortBy: string,
  stocks: Record<string, { remaining: number; total: number }> | null,
): Pack[] {
  const list = [...items];
  if (sortBy === "최신순") return list.sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
  if (sortBy === "가격 낮은순") return list.sort((a, b) => a.priceValue - b.priceValue);
  if (sortBy === "가격 높은순") return list.sort((a, b) => b.priceValue - a.priceValue);
  // 인기순 = 실제 판매량(초기재고 - 현재재고) 많은 순
  const soldOf = (p: Pack) => {
    const s = stocks?.[p.id];
    if (!s) return -1; // 재고 정보 없으면 뒤로
    return s.total - s.remaining;
  };
  return list.sort((a, b) => soldOf(b) - soldOf(a));
}

// 팩 목록 + 검색/카테고리/정렬 필터.
export function PacksBrowser() {
  const stocks = usePackStocks();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("전체");
  const [sortBy, setSortBy] = useState("인기순");

  const packs = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const filtered = (allPacks as Pack[]).filter((pack) => {
      const haystack = `${pack.title} ${pack.subtitle ?? ""} ${pack.odds ?? ""} ${pack.category ?? ""}`.toLowerCase();
      const matchesKeyword = haystack.includes(keyword);
      const matchesCategory = category === "전체" || pack.category === category;
      return matchesKeyword && matchesCategory;
    });
    return sortItems(filtered, sortBy, stocks);
  }, [search, category, sortBy, stocks]);

  return (
    <div className="subpage-inner">
      <div className="listing-controls">
        <label className="field-shell">
          <span>검색</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="팩 검색하기"
          />
        </label>
        <label className="field-shell select-shell">
          <span>카테고리</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="field-shell select-shell">
          <span>정렬</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {SORT_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="catalog-grid pack-catalog-grid">
        {packs.map((pack) => (
          <PackCard pack={pack} stockInfo={stocks?.[pack.id]} key={pack.id} />
        ))}
      </div>
    </div>
  );
}
