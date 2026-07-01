import Image from "next/image";

interface Bonus {
  label?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  value?: string | number;
  displayValue?: number;
}

// 팩 마지막 1개 뽑을 때의 보너스 안내 카드.
export function LastDrawBonus({ bonus }: { bonus: Bonus }) {
  const guaranteeText =
    bonus.description ||
    "팩의 마지막 1개를 뽑으면 당첨 상품과 함께 LEGEND 리워드가 추가 지급됩니다!";

  return (
    <aside className={`last-draw-bonus${!bonus.image ? " no-image" : ""}`}>
      {bonus.image && (
        <div className="last-draw-image">
          <Image
            src={bonus.image}
            alt={bonus.imageAlt || bonus.title || "보너스"}
            width={120}
            height={120}
            unoptimized={bonus.image.startsWith("http")}
          />
        </div>
      )}
      <div className="last-draw-copy">
        <p>{bonus.label || "LAST DRAW BONUS"}</p>
        <h3>{guaranteeText}</h3>
        <small>보상</small>
        <strong>{bonus.title}</strong>
      </div>
    </aside>
  );
}
