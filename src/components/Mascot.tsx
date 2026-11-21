"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { PixelSprite } from "@/components/pixel/PixelSprite";
import type { SpriteFrame } from "@/components/pixel/sprites";

interface MascotProps {
  pose?: "idle" | "point";
  className?: string;
  /** Gentle 2-step bob, like an idle animation in a pixel game. */
  bob?: boolean;
}

/** Random blink every few seconds. Disabled for reduced-motion users. */
export function useBlink(enabled: boolean) {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timer = setTimeout(() => {
        setBlinking(true);
        timer = setTimeout(() => {
          setBlinking(false);
          schedule();
        }, 140);
      }, 2200 + Math.random() * 3200);
    };

    schedule();
    return () => clearTimeout(timer);
  }, [enabled]);

  return enabled && blinking;
}

export const Mascot = ({ pose = "idle", className, bob = true }: MascotProps) => {
  const reducedMotion = useReducedMotion() ?? false;
  const blinking = useBlink(!reducedMotion);

  const frame: SpriteFrame = pose === "point" ? (blinking ? "pointBlink" : "point") : blinking ? "blink" : "idle";

  return (
    <PixelSprite
      frame={frame}
      className={`${bob ? "animate-pixel-bob motion-reduce:animate-none" : ""} ${className ?? ""}`}
    />
  );
};

export default Mascot;
