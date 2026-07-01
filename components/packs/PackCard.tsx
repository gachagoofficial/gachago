import Link from "next/link";
import Image from "next/image";
import type { Pack } from "@/lib/data/types";

// 팩 카드 (홈 추천팩 + 팩 목록에서 재사용).
// 클릭하면 팩 상세(/packs/[slug])로 이동한다.
export function PackCard({ pack }: { pack: Pack }) {
  const priceLabel = `${pack.priceValue.toLocaleString("ko-KR")}원`;
  const totalQuantity = Number.isFinite(pack.totalQuantity) ? pack.totalQuantity! : 0;
  const remainingQuantity = Number.isFinite(pack.remainingQuantity)
    ? pack.remainingQuantity!
    : Math.max(0, totalQuantity - (pack.soldQuantity || 0));

  return (
    <Link href={`/packs/${pack.slug}`} className="pack-card is-clickable" aria-label={`${pack.title} 상세 보기`}>
      <div className="pack-image-shell">
        <Image
          className="pack-image"
          src={pack.image}
          alt={pack.imageAlt || pack.title}
          width={400}
          height={400}
          unoptimized={pack.image.startsWith("http")}
        />
      </div>
      <div className="pack-box">
        <p className="pack-name">{pack.title}</p>
        <p className="pack-subtitle">
          남은 수량 : {remainingQuantity}/{totalQuantity}
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
