"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { SlotItem } from "./SlotItem";
import {
  findSlotItemIndex,
  measureSlotTargetY,
  slotRepeatCount,
  type SlotItemData,
  type SlotMetrics,
} from "@/lib/slot/helpers";
import { reelItems } from "@/lib/data/catalog";

export interface SlotReelHandle {
  /** 데모용: 랜덤 시각 스핀 (홈 화면 자동 순환) */
  spin: (settings?: { cycle?: number; onSpinStateChange?: (v: boolean) => void }) => Promise<void>;
  /** ★ 실제 뽑기용: 서버가 정한 결과 아이템에서 멈추도록 스핀 */
  spinToItem: (targetItem: SlotItemData) => Promise<void>;
  stop: () => void;
  initSlotReel: () => void;
}

interface SlotReelProps {
  items: SlotItemData[];
  reelNumber: number;
  onSpinStateChange?: (spinning: boolean) => void;
}

const baseReelItems = reelItems as SlotItemData[];

export const SlotReel = forwardRef<SlotReelHandle, SlotReelProps>(function SlotReel(
  { items, reelNumber, onSpinStateChange },
  ref,
) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const kickoffFrameRef = useRef<number | null>(null);
  const transitionCleanupRef = useRef<(() => void) | null>(null);
  const currentYRef = useRef(0);
  const targetYRef = useRef(0);
  const selectedIndexRef = useRef(baseReelItems.length * (8 + reelNumber));
  const isSpinningRef = useRef(false);
  const metricsRef = useRef<SlotMetrics | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const baseCount = baseReelItems.length;

  const measureSlotMetrics = useCallback((): SlotMetrics | null => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstItem = track?.querySelector<HTMLElement>(".slot-item");
    if (!viewport || !track || !firstItem) return metricsRef.current;

    const viewportRect = viewport.getBoundingClientRect();
    const payline = viewport
      .closest(".slot-machine")
      ?.querySelector<HTMLElement>(".slot-payline");
    const paylineRect = payline?.getBoundingClientRect();
    const paylineCenter = paylineRect
      ? paylineRect.top + paylineRect.height / 2 - viewportRect.top
      : viewportRect.height / 2;
    const trackStyle = window.getComputedStyle(track);
    const paddingTop = Number.parseFloat(trackStyle.paddingTop || "0") || 0;
    const gap = Number.parseFloat(trackStyle.rowGap || trackStyle.gap || "0") || 0;
    const itemHeight = firstItem.getBoundingClientRect().height;
    const itemTops = Array.from(track.children).map((node) => (node as HTMLElement).offsetTop);

    metricsRef.current = {
      viewportHeight: viewportRect.height,
      paddingTop,
      gap,
      itemHeight,
      itemTops,
      paylineCenter,
      step: itemHeight + gap,
    };
    return metricsRef.current;
  }, []);

  const setPosition = useCallback((nextY: number) => {
    currentYRef.current = nextY;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(0, -${nextY}px, 0)`;
    }
  }, []);

  const clearTransitionHandlers = useCallback(() => {
    if (kickoffFrameRef.current != null) window.cancelAnimationFrame(kickoffFrameRef.current);
    if (transitionCleanupRef.current) {
      transitionCleanupRef.current();
      transitionCleanupRef.current = null;
    }
  }, []);

  const snapToItem = useCallback(
    (index: number) => {
      const metrics = measureSlotMetrics();
      if (!metrics) return currentYRef.current;
      const snappedY = measureSlotTargetY(metrics, index);
      selectedIndexRef.current = index;
      targetYRef.current = snappedY;
      setPosition(snappedY);
      return snappedY;
    },
    [measureSlotMetrics, setPosition],
  );

  const normalizeTrackPosition = useCallback(() => {
    const metrics = measureSlotMetrics();
    if (!metrics || isSpinningRef.current) return;

    const currentItem = items[selectedIndexRef.current];
    const safeStart = baseCount * (Math.floor(slotRepeatCount / 3) + reelNumber);
    const safeEnd = Math.min(items.length - baseCount * 4, safeStart + baseCount * 5);
    const matchingIndex = findSlotItemIndex(items, currentItem, safeStart, safeEnd);
    const normalizedIndex = matchingIndex >= 0 ? matchingIndex : safeStart + reelNumber;
    const track = trackRef.current;
    if (track) track.style.transition = "none";
    snapToItem(normalizedIndex);
  }, [baseCount, items, measureSlotMetrics, reelNumber, snapToItem]);

  const stop = useCallback(
    (updateState = true) => {
      clearTransitionHandlers();
      const track = trackRef.current;
      if (track) track.style.transition = "none";
      isSpinningRef.current = false;
      if (updateState) {
        setIsSpinning(false);
        onSpinStateChange?.(false);
      }
    },
    [clearTransitionHandlers, onSpinStateChange],
  );

  const initSlotReel = useCallback(() => {
    const startIndex = baseCount * (Math.floor(slotRepeatCount / 2) + reelNumber) + reelNumber;
    const track = trackRef.current;
    if (track) track.style.transition = "none";
    snapToItem(startIndex);
  }, [baseCount, reelNumber, snapToItem]);

  // 공통 스핀 실행기.
  // resolveTargetIndex: 시작 인덱스/메트릭을 받아 "멈출 목표 인덱스"를 반환.
  //  - 데모 스핀: 랜덤 목표
  //  - 실제 뽑기: 서버가 정한 아이템의 인덱스
  const runSpin = useCallback(
    (
      resolveTargetIndex: (ctx: {
        startIndex: number;
        metrics: SlotMetrics;
      }) => number,
      notifySpinState?: (v: boolean) => void,
    ) =>
      new Promise<void>((resolve) => {
        if (isSpinningRef.current) {
          resolve();
          return;
        }
        const track = trackRef.current;
        let metrics = measureSlotMetrics();
        if (!track || !metrics || items.length <= baseCount * 8) {
          resolve();
          return;
        }

        clearTransitionHandlers();
        track.style.transition = "none";

        const maxStartIndex = items.length - baseCount * 9;
        if (selectedIndexRef.current > maxStartIndex) {
          normalizeTrackPosition();
          metrics = measureSlotMetrics()!;
        }

        const startIndex = selectedIndexRef.current;
        const startY = currentYRef.current;

        let targetIndex = resolveTargetIndex({ startIndex, metrics });
        // 안전 범위 보정
        if (targetIndex < 0 || targetIndex <= startIndex + baseCount * 4) {
          targetIndex = Math.min(startIndex + baseCount * 5, items.length - baseCount * 3);
        }
        targetIndex = Math.min(targetIndex, items.length - baseCount * 3);

        const targetY = measureSlotTargetY(metrics, targetIndex);
        const duration = 4800 + Math.random() * 1700;
        const easing =
          Math.random() > 0.5
            ? "cubic-bezier(0.08, 0.82, 0.16, 1)"
            : "cubic-bezier(0.05, 0.85, 0.18, 1)";
        const settleDistance = 4 + Math.random() * 4;
        const settleForwardY = targetY + settleDistance;

        isSpinningRef.current = true;
        setIsSpinning(true);
        notifySpinState?.(true);
        onSpinStateChange?.(true);
        targetYRef.current = targetY;

        let mainEndHandler: (e: TransitionEvent) => void;
        let overshootEndHandler: (e: TransitionEvent) => void;
        let settleEndHandler: (e: TransitionEvent) => void;

        const cleanup = () => {
          track.removeEventListener("transitionend", mainEndHandler);
          track.removeEventListener("transitionend", overshootEndHandler);
          track.removeEventListener("transitionend", settleEndHandler);
        };

        const finish = () => {
          cleanup();
          transitionCleanupRef.current = null;
          track.style.transition = "filter 0.2s ease";
          selectedIndexRef.current = targetIndex;
          setPosition(targetY);
          isSpinningRef.current = false;
          setIsSpinning(false);
          notifySpinState?.(false);
          onSpinStateChange?.(false);
          resolve();
        };

        settleEndHandler = (event) => {
          if (event.target !== track || event.propertyName !== "transform") return;
          finish();
        };

        overshootEndHandler = (event) => {
          if (event.target !== track || event.propertyName !== "transform") return;
          track.removeEventListener("transitionend", overshootEndHandler);
          track.addEventListener("transitionend", settleEndHandler);
          track.style.transition =
            "transform 150ms cubic-bezier(0.16, 1, 0.3, 1), filter 0.18s ease";
          setPosition(targetY);
        };

        mainEndHandler = (event) => {
          if (event.target !== track || event.propertyName !== "transform") return;
          track.removeEventListener("transitionend", mainEndHandler);
          track.addEventListener("transitionend", overshootEndHandler);
          track.style.transition =
            "transform 105ms cubic-bezier(0.22, 1, 0.36, 1), filter 0.18s ease";
          setPosition(settleForwardY);
        };

        transitionCleanupRef.current = cleanup;
        setPosition(startY);
        void track.offsetHeight;

        kickoffFrameRef.current = window.requestAnimationFrame(() => {
          track.addEventListener("transitionend", mainEndHandler);
          track.style.transition = `transform ${duration}ms ${easing}, filter 0.18s ease`;
          setPosition(targetY);
        });
      }),
    [
      baseCount,
      clearTransitionHandlers,
      items,
      measureSlotMetrics,
      normalizeTrackPosition,
      onSpinStateChange,
      setPosition,
    ],
  );

  // 데모 스핀: 랜덤 목표 (홈 자동 순환)
  const spin = useCallback(
    (settings: { cycle?: number; onSpinStateChange?: (v: boolean) => void } = {}) => {
      const { cycle = 0, onSpinStateChange: notify } = settings;
      return runSpin(({ startIndex }) => {
        const loops = 5 + Math.floor(Math.random() * 4);
        const targetBandStart = Math.min(
          startIndex + loops * baseCount + Math.floor(Math.random() * Math.max(1, baseCount)),
          items.length - baseCount * 4,
        );
        const winningItem =
          baseReelItems[(cycle + reelNumber + Math.floor(Math.random() * baseCount)) % baseCount];
        const found = findSlotItemIndex(
          items,
          winningItem,
          targetBandStart,
          targetBandStart + baseCount * 3,
        );
        return found >= 0 ? found : targetBandStart;
      }, notify);
    },
    [baseCount, items, reelNumber, runSpin],
  );

  // ★ 실제 뽑기 스핀: 서버가 정한 targetItem 에서 멈춘다.
  const spinToItem = useCallback(
    (targetItem: SlotItemData) =>
      runSpin(({ startIndex }) => {
        const loops = 5 + Math.floor(Math.random() * 3);
        const bandStart = Math.min(
          startIndex + loops * baseCount,
          items.length - baseCount * 4,
        );
        const found = findSlotItemIndex(items, targetItem, bandStart, bandStart + baseCount * 3);
        // 결과 아이템을 시퀀스에서 못 찾으면(이론상 드묾) 안전 위치로
        return found >= 0 ? found : bandStart;
      }),
    [baseCount, items, runSpin],
  );

  useLayoutEffect(() => {
    measureSlotMetrics();
    initSlotReel();
  }, [initSlotReel, measureSlotMetrics]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;
    const refresh = () => {
      const metrics = measureSlotMetrics();
      if (!metrics || isSpinningRef.current) return;
      snapToItem(selectedIndexRef.current);
    };
    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(refresh) : null;
    observer?.observe(viewport);
    window.addEventListener("resize", refresh);
    const ready = window.setTimeout(refresh, 300);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", refresh);
      window.clearTimeout(ready);
    };
  }, [measureSlotMetrics, snapToItem]);

  useEffect(() => () => stop(false), [stop]);

  useImperativeHandle(
    ref,
    () => ({
      spin,
      spinToItem,
      stop: () => stop(false),
      initSlotReel,
    }),
    [spin, spinToItem, stop, initSlotReel],
  );

  return (
    <div className="slot-reel" ref={viewportRef}>
      <div className={`reel-track${isSpinning ? " is-spinning" : ""}`} ref={trackRef}>
        {items.map((item) => (
          <SlotItem key={item.slotKey} item={item} />
        ))}
      </div>
    </div>
  );
});
