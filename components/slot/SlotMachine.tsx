"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SlotReel, type SlotReelHandle } from "./SlotReel";
import { buildReelSequence, slotReelSettings } from "@/lib/slot/helpers";

/**
 * 홈 화면 장식용 자동 순환 슬롯 (데모).
 * 실제 뽑기가 아니라 시각 효과이며, 랜덤 결과로 계속 돌아간다.
 * 실제 유료 뽑기는 GachaDrawMachine 을 사용한다.
 */
export function SlotMachine() {
  const router = useRouter();
  const reelControllers = useRef<(SlotReelHandle | null)[]>([]);
  const cycleTimerRef = useRef<number | null>(null);
  const cycleRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const visibleRef = useRef(true);
  const slotMachineRef = useRef<HTMLDivElement>(null);
  const [isSlotSpinning, setIsSlotSpinning] = useState(false);

  const reelSequences = useMemo(
    () => slotReelSettings.map((setting) => buildReelSequence(setting)),
    [],
  );

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => {
      reducedMotionRef.current = Boolean(media?.matches);
    };
    updateReducedMotion();
    media?.addEventListener?.("change", updateReducedMotion);
    return () => media?.removeEventListener?.("change", updateReducedMotion);
  }, []);

  useEffect(() => {
    const element = slotMachineRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.04 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let mounted = true;

    const runCycle = async () => {
      if (!mounted) return;
      if (reducedMotionRef.current || document.hidden || !visibleRef.current) {
        cycleTimerRef.current = window.setTimeout(runCycle, 1400);
        return;
      }

      const cycle = cycleRef.current;
      cycleRef.current += 1;
      const spins = reelControllers.current
        .map((controller) => controller?.spin({ cycle, onSpinStateChange: setIsSlotSpinning }))
        .filter(Boolean) as Promise<void>[];

      await Promise.all(spins);
      if (!mounted) return;
      cycleTimerRef.current = window.setTimeout(runCycle, 4000);
    };

    cycleTimerRef.current = window.setTimeout(runCycle, 350);

    return () => {
      mounted = false;
      if (cycleTimerRef.current != null) window.clearTimeout(cycleTimerRef.current);
      reelControllers.current.forEach((controller) => controller?.stop());
    };
  }, []);

  return (
    <div
      ref={slotMachineRef}
      className={`slot-machine${isSlotSpinning ? " is-spinning" : ""}`}
    >
      <div className="slot-window">
        <div className="slot-payline" />
        {slotReelSettings.map((setting, index) => (
          <SlotReel
            key={setting.id}
            ref={(controller) => {
              reelControllers.current[index] = controller;
            }}
            reelNumber={index}
            items={reelSequences[index]}
            onSpinStateChange={setIsSlotSpinning}
          />
        ))}
      </div>
      <div className="slot-action-row">
        <button
          className="slot-action primary"
          disabled={isSlotSpinning}
          onClick={() => router.push("/packs")}
        >
          럭셔리 팩 열기
        </button>
        <button
          className="slot-action secondary"
          disabled={isSlotSpinning}
          onClick={() => router.push("/market")}
        >
          마켓플레이스
        </button>
      </div>
    </div>
  );
}
