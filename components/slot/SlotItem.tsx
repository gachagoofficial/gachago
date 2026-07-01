import type { SlotItemData } from "@/lib/slot/helpers";

export function SlotItem({ item }: { item: SlotItemData }) {
  return (
    <article className="slot-item flex items-center gap-3 p-3">
      {/* 슬롯 릴은 매우 빠르게 스크롤되므로 일반 img 사용(next/image 부적합) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.image} alt="" loading="lazy" />
      <div className="min-w-0">
        <span className="rarity-badge rounded-full px-2 py-1 text-[0.62rem] font-black tracking-[0.16em]">
          {item.rarity}
        </span>
        <h4 className="mt-2 truncate text-sm font-black text-white">{item.brand}</h4>
        <p className="truncate text-xs font-semibold text-white/58">{item.item}</p>
      </div>
    </article>
  );
}
