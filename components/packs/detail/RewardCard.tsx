import Image from "next/image";
import { formatQuantity } from "@/lib/format";

interface RewardItem {
  name: string;
  value?: string | number;
  displayValue?: number;
  image?: string;
  imageAlt?: string;
  count?: string;
  quantity?: number;
  rarity?: string;
  [key: string]: unknown;
}

interface TierMeta {
  tone: string;
  label: string;
}

// 원본 getVisibleRewardValue: "약 ~ 상당" 형식이면 숨기고, 아니면 표시
function getVisibleRewardValue(item: RewardItem): string {
  if (item.displayValue != null) return "";
  const value = String(item.value || "").trim();
  return value.startsWith("약 ") && value.endsWith(" 상당") ? "" : value;
}

// 등급별 상품 카드.
export function RewardCard({ item, meta }: { item: RewardItem; meta: TierMeta }) {
  const valueLabel = getVisibleRewardValue(item);

  return (
    <div className={`reward-card reward-${meta.tone}`}>
      <div className="reward-image">
        {item.image && (
          <Image
            src={item.image}
            alt={item.imageAlt || item.name}
            width={200}
            height={200}
            unoptimized={item.image.startsWith("http")}
          />
        )}
      </div>
      <div className="reward-copy">
        <h4>{item.name}</h4>
        {valueLabel && <p>{valueLabel}</p>}
        {(item.count || item.quantity) && (
          <small>
            <b>수량 {formatQuantity(item.count || item.quantity || 0)}</b>
          </small>
        )}
      </div>
    </div>
  );
}
