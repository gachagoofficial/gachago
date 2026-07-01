import Image from "next/image";
import { marketProducts } from "@/lib/data/catalog";
import type { MarketProduct } from "@/lib/data/types";
import { formatWon } from "@/lib/format";

// 데이터 → 컴포넌트 연결 예시 페이지.
// catalog.ts 의 marketProducts 를 그대로 사용한다.
export default function MarketPage() {
  const products = marketProducts as MarketProduct[];

  return (
    <section className="subpage">
      <div className="subpage-inner">
        <h1>MARKET</h1>
        <p>오픈을 기다리지 않고 엄선된 럭셔리 제품을 바로 구매하는 프리미엄 마켓입니다.</p>

        <div className="market-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card__image">
                <Image
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  width={400}
                  height={400}
                  unoptimized={product.image.startsWith("http")}
                />
              </div>
              <div className="product-card__body">
                <span className="product-card__brand">{product.brand}</span>
                <h3 className="product-card__name">{product.name}</h3>
                {product.status && (
                  <span className="product-card__status">{product.status}</span>
                )}
                <strong className="product-card__price">
                  {formatWon(product.priceValue)}
                </strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
