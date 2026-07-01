import { formatQuantity } from "@/lib/format";
import { RewardCard } from "./RewardCard";

interface TierMeta {
  tone: string;
  label: string;
  accent: string;
  glow: string;
  shadow: string;
}

interface RewardItem {
  name?: string;
  count?: string;
  quantity?: number;
  [key: string]: unknown;
}

// 한 등급(티어)의 상품 그리드.
export function TierSection({
  tierKey,
  meta,
  items,
}: {
  tierKey: string;
  meta: TierMeta;
  items: RewardItem[];
}) {
  const tierCount = items.reduce((total, item) => {
    const parsed = Number.parseInt(String(item.count ?? ""), 10);
    return (
      total +
      (Number.isFinite(item.quantity)
        ? (item.quantity as number)
        : Number.isFinite(parsed)
          ? parsed
          : 1)
    );
  }, 0);

  return (
    <section
      className={`tier-section tier-${meta.tone}`}
      style={
        {
          "--tier-accent": meta.accent,
          "--tier-glow": meta.glow,
          "--tier-shadow": meta.shadow,
        } as React.CSSProperties
      }
    >
      <div className="tier-header">
        <h3>{meta.label}</h3>
        <p>{formatQuantity(tierCount)}</p>
      </div>
      <div className={`reward-grid${tierKey === "legend" ? " legend-grid" : ""}`}>
        {items.map((item, i) => (
          <RewardCard
            item={{ ...item, name: String(item.name ?? "") }}
            meta={meta}
            key={`${meta.label}-${item.name ?? i}`}
          />
        ))}
      </div>
    </section>
  );
}
