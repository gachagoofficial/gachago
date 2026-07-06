import Link from "next/link";
import Image from "next/image";
import type { Pack } from "@/lib/data/types";
import type { PackStockInfo } from "@/lib/hooks/usePackStocks";

// 팩 카드 (홈 추천팩 + 팩 목록에서 재사용).
// stockInfo(DB 실시간 재고)가 오면 그걸 표시, 없으면 catalog 값 fallback.
// 재고 0이면 SOLD OUT 오버레이.
export function PackCard({
  pack,
  stockInfo,
}: {
  pack: Pack;
  stockInfo?: PackStockInfo;
}) {
  const priceLabel = `${pack.priceValue.toLocaleString("ko-KR")}원`;

  // DB 재고 우선, 없으면 catalog 고정값
  const fallbackTotal = Number.isFinite(pack.totalQuantity) ? pack.totalQuantity! : 0;
  const fallbackRemaining = Number.isFinite(pack.remainingQuantity)
    ? pack.remainingQuantity!
    : Math.max(0, fallbackTotal - (pack.soldQuantity || 0));

  const remaining = stockInfo ? stockInfo.remaining : fallbackRemaining;
  const total = stockInfo ? stockInfo.total : fallbackTotal;
  const soldOut = stockInfo ? stockInfo.remaining <= 0 : false;

  return (
    <Link
      href={`/packs/${pack.slug}`}
      className={`pack-card is-clickable${soldOut ? " is-soldout" : ""}`}
      aria-label={`${pack.title} 상세 보기`}
    >
      <div className="pack-image-shell">
        <Image
          className="pack-image"
          src={pack.image}
          alt={pack.imageAlt || pack.title}
          width={400}
          height={400}
          unoptimized={pack.image.startsWith("http")}
        />
        {soldOut && !pack.comingSoon && (
          <div className="soldout-overlay" aria-hidden="true">
            <span>SOLD OUT</span>
          </div>
        )}
        {pack.comingSoon && (
          <div className="soldout-overlay comingsoon-overlay" aria-hidden="true">
            <span>COMING SOON</span>
          </div>
        )}
      </div>
      <div className="pack-box">
        <p className="pack-name">{pack.title}</p>
        <p className="pack-subtitle">
          남은 수량 : {remaining}/{total}
        </p>
        <p className="pack-price">{priceLabel}</p>
        {pack.topPrize && (
          <div className="pack-card-meta">
            <b>최고 상품 : {pack.topPrize}</b>
          </div>
        )}
      </div>
    </Link>
  );
}
