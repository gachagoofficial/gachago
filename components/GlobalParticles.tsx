"use client";

import { useMemo } from "react";

// 배경에 떠다니는 입자 효과 (장식).
export function GlobalParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: `${Math.random() * 100}%`,
        duration: `${12 + Math.random() * 16}s`,
        delay: `${-Math.random() * 20}s`,
      })),
    [count],
  );

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle, index) => (
        <i
          key={`particle-${index}`}
          style={
            {
              "--x": particle.x,
              "--duration": particle.duration,
              "--delay": particle.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
