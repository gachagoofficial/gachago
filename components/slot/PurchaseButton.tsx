"use client";

interface PurchaseButtonProps {
  onClick: () => void;
  state: "idle" | "loading";
  disabled?: boolean;
}

export function PurchaseButton({ onClick, state, disabled }: PurchaseButtonProps) {
  return (
    <button
      className={`purchase-button${state === "loading" ? " is-ready" : ""}`}
      onClick={onClick}
      disabled={disabled || state === "loading"}
    >
      {disabled
        ? "품절"
        : state === "loading"
          ? "안전하게 추첨 중..."
          : "구매 완료 후 추첨하기"}
    </button>
  );
}
