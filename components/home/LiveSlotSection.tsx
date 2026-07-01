import { SlotMachine } from "@/components/slot/SlotMachine";
import { LiveFeed } from "./LiveFeed";

// 데모 슬롯머신 + 실시간 당첨 피드 (홈 "실시간 오픈" 섹션).
export function LiveSlotSection() {
  return (
    <section id="live" className="section-wrap">
      <div className="live-layout">
        <SlotMachine />
        <LiveFeed />
      </div>
    </section>
  );
}
