import Image from "next/image";
import type { Pack } from "@/lib/data/types";

// 팩 상세 대표 이미지.
export function PackShowcaseVisual({ pack }: { pack: Pack }) {
  const imageSrc = pack.heroImage || pack.image;
  const isChanelWallet = pack.slug === "chanel-card-wallet-pack";

  return (
    <div
      className={`detail-image-card${isChanelWallet ? " is-chanel-wallet" : ""}`}
      aria-label={`${pack.title} 대표 이미지`}
    >
      <Image
        src={imageSrc}
        alt={pack.imageAlt || `${pack.title} 대표 이미지`}
        width={640}
        height={640}
        unoptimized={imageSrc.startsWith("http")}
      />
    </div>
  );
}
