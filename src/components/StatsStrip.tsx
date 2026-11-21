"use client";
import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "@/lib/i18n/context";

const AnimatedCounter = ({ value, suffix, start }: { value: number; suffix: string; start: boolean }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const frameRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const displayCount = shouldReduceMotion && start ? value : count;

  useEffect(() => {
    if (!start || started.current || shouldReduceMotion) return;

    started.current = true;

    const duration = 2600;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(step);
      }
    };

    frameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [shouldReduceMotion, start, value]);

  return <span className="tabular-nums">{displayCount}{suffix}</span>;
};

/** Faixa de status (HUD) logo abaixo do hero. */
export default function StatsStrip() {
  const t = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section aria-label="Stats" className="relative z-10 pb-6 pt-10 sm:pt-14">
      <div ref={ref} className="container-narrow grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {t.stats.map((stat, index) => (
          <div key={index} className="hud-box px-4 py-4 text-left">
            <div className="font-display text-4xl leading-none text-foreground sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} start={inView} />
            </div>
            <div className="mt-3 font-pixel text-[8px] uppercase leading-relaxed tracking-wide text-foreground/70 sm:text-[9px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
