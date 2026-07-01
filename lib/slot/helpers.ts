// 슬롯 릴 애니메이션 헬퍼. 원본 index.html에서 이전.
// reelItems(카탈로그에서 생성된 슬롯 아이템 목록)는 catalog.ts에서 가져온다.

import { reelItems, shuffleSlotItems } from "@/lib/data/catalog";

export const slotRepeatCount = 36;

// 원본 slotReelSettings: 단일 통합 릴
export interface SlotReelSetting {
  id: string;
  itemOffset: number;
  duration: number;
  delay: number;
  overshoot: number;
}

export const slotReelSettings: SlotReelSetting[] = [
  { id: "atelier-unified", itemOffset: 0, duration: 4300, delay: 0, overshoot: 16 },
];

export interface SlotItemData {
  brand: string;
  item: string;
  rarity?: string;
  image?: string;
  slotKey?: string;
  [key: string]: unknown;
}

export interface SlotMetrics {
  viewportHeight: number;
  paddingTop: number;
  gap: number;
  itemHeight: number;
  itemTops: number[];
  paylineCenter: number;
  step: number;
}

// 릴에 채울 긴 시퀀스 생성 (repeat만큼 셔플 반복 → 무한 스크롤 느낌)
export function buildReelSequence(setting: SlotReelSetting): SlotItemData[] {
  return Array.from({ length: slotRepeatCount }, (_, repeat) =>
    (shuffleSlotItems(reelItems) as SlotItemData[]).map((item, index) => ({
      ...item,
      slotKey: `${setting.id}-${repeat}-${index}-${item.brand}-${item.item}`,
    })),
  ).flat();
}

// payline 중앙에 index번째 아이템이 오도록 하는 Y 좌표
export function measureSlotTargetY(metrics: SlotMetrics, index: number): number {
  const itemTop = metrics.itemTops[index] ?? metrics.paddingTop + index * metrics.step;
  return itemTop + metrics.itemHeight / 2 - metrics.paylineCenter;
}

export function isSameSlotItem(first?: SlotItemData, second?: SlotItemData): boolean {
  return Boolean(
    first &&
      second &&
      first.brand === second.brand &&
      first.item === second.item &&
      first.rarity === second.rarity,
  );
}

export function findSlotItemIndex(
  items: SlotItemData[],
  targetItem: SlotItemData | undefined,
  startIndex: number,
  endIndex: number = items.length,
): number {
  const safeStart = Math.max(0, startIndex);
  const safeEnd = Math.min(items.length, endIndex);
  for (let index = safeStart; index < safeEnd; index += 1) {
    if (isSameSlotItem(items[index], targetItem)) return index;
  }
  return -1;
}
