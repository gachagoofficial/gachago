// 회원 등급 정의 (누적 사용액 기준).
// 지금은 "뽑은 팩 가격 합계"로 계산하고,
// 나중에 결제가 생기면 실제 결제 금액으로 교체하면 됩니다.

export interface Tier {
  name: string;
  min: number; // 이 금액 이상
  color: string; // 대표 색
  gradient: string; // 배지 그라데이션
}

// 낮은 등급 → 높은 등급 순
export const TIERS: Tier[] = [
  { name: "일반", min: 0, color: "#9ca3af", gradient: "linear-gradient(135deg,#6b7280,#9ca3af)" },
  { name: "블론드", min: 500000, color: "#d4a15a", gradient: "linear-gradient(135deg,#b8863b,#e6c281)" },
  { name: "실버", min: 1000000, color: "#c4c9d4", gradient: "linear-gradient(135deg,#8a909c,#d9dde5)" },
  { name: "골드", min: 2000000, color: "#e8b923", gradient: "linear-gradient(135deg,#c8951a,#ffdb58)" },
  { name: "레인보우", min: 5000000, color: "#ff6ec7", gradient: "linear-gradient(135deg,#ff5f6d,#ffc371,#5ee7df,#b490ca)" },
  { name: "오로라", min: 10000000, color: "#5ee7df", gradient: "linear-gradient(135deg,#00c6fb,#a6ffcb,#c471f5)" },
  { name: "코스믹", min: 20000000, color: "#a06bff", gradient: "linear-gradient(135deg,#3a1c71,#8a2be2,#d76d77)" },
];

// 누적 금액으로 현재 등급 구하기
export function getTier(total: number): Tier {
  let current = TIERS[0];
  for (const t of TIERS) {
    if (total >= t.min) current = t;
  }
  return current;
}

// 다음 등급 (없으면 null = 최고 등급)
export function getNextTier(total: number): Tier | null {
  for (const t of TIERS) {
    if (total < t.min) return t;
  }
  return null;
}
