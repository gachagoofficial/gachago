"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";

// 팩 상세의 "구매하기" 버튼. 누르면 마이페이지로 이동해 수량 선택.
export function BuyButton({ slug, soldOut }: { slug: string; soldOut: boolean }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const onBuy = () => {
    if (soldOut) return;
    if (!user) {
      // 로그인 후 이 팩 구매로 이어지게
      router.push(`/login?redirect=${encodeURIComponent(`/account?pack=${slug}`)}`);
      return;
    }
    router.push(`/account?pack=${slug}`);
  };

  return (
    <div className="detail-action-row detail-action-row--inline">
      <button
        className="purchase-button"
        onClick={onBuy}
        disabled={soldOut}
      >
        {soldOut ? "품절되었습니다" : "구매하기"}
      </button>
      <Link href="/packs" className="detail-secondary-btn">
        팩 목록으로
      </Link>
    </div>
  );
}
