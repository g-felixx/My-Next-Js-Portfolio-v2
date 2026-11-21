"use client";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { PixelSprite } from "@/components/pixel/PixelSprite";
import type { SpriteFrame } from "@/components/pixel/sprites";
import { useBlink } from "@/components/Mascot";
import { useTranslation } from "@/lib/i18n/context";
import { PROMPT_FOCUS_EVENT } from "@/lib/ai-twin-client";
import { scrollToTop } from "@/lib/scroll";

const SECTION_IDS = ["about", "experience", "education", "certifications", "projects", "skills", "contact"] as const;

/** How many times she crosses the screen from the top of the page to the bottom. */
const SWEEPS = 3;
const MIN_X = 8;
const MAX_X = 92;
const IDLE_DELAY_MS = 900;
/** How long the speech bubble stays before she goes quiet again. */
const BUBBLE_MS = 5500;
/** Keeps her fully on screen (half the sprite + a margin), also on small phones. */
const EDGE_PX = 44;
const ENERGETIC = [0.7, 0, 0.3, 1] as const;

/** 0 → 1 → 0 → 1 … as `u` grows. */
const triangle = (u: number) => {
  const m = ((u % 2) + 2) % 2;
  return m <= 1 ? m : 2 - m;
};

const positionFor = (progress: number) => MIN_X + triangle(progress * SWEEPS) * (MAX_X - MIN_X);

/**
 * A pixel mascot that follows the page: she walks across the bottom of the
 * screen as you scroll, and when you stop she points up at the AI prompt and
 * says something about the section you're reading. Click → back to the prompt.
 */
const FloatingMascot = () => {
  const t = useTranslation();
  const copy = t.prompt.mascot;
  const reducedMotion = useReducedMotion() ?? false;

  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 22, mass: 0.7 });
  // 0 = walking where the scroll puts her, 1 = parked at the nearest screen edge
  // (so she doesn't stand on top of the text while she talks).
  const settle = useMotionValue(0);
  const edgeTarget = useRef(0);
  const left = useTransform([smoothProgress, settle], ([progress, parked]: number[]) => {
    const walking = positionFor(progress);
    const pct = walking + (edgeTarget.current - walking) * parked;
    return `clamp(${EDGE_PX}px, ${pct}%, calc(100% - ${EDGE_PX}px))`;
  });

  const [visible, setVisible] = useState(false);
  const [moving, setMoving] = useState(false);
  const [step, setStep] = useState(0);
  const [bubble, setBubble] = useState<string | null>(null);
  const [bubbleOnRight, setBubbleOnRight] = useState(false);
  // The drawing faces left; flip it while she walks to the right.
  const [facingRight, setFacingRight] = useState(false);
  const lastProgress = useRef(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const bubbleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const copyRef = useRef(copy);

  useEffect(() => {
    copyRef.current = copy;
  }, [copy]);

  const blinking = useBlink(!moving && !reducedMotion);

  const pickMessage = () => {
    const middle = window.innerHeight * 0.5;
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= middle && rect.bottom >= middle) return copyRef.current.sections[id];
    }
    return copyRef.current.generic;
  };

  useMotionValueEvent(smoothProgress, "change", (value) => {
    const delta = value - lastProgress.current;
    lastProgress.current = value;
    if (Math.abs(delta) < 1e-5) return;
    const slope = Math.floor((((value * SWEEPS) % 2) + 2) % 2) === 0 ? 1 : -1;
    setFacingRight(delta * slope > 0);
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    const shouldShow = y > window.innerHeight * 0.65;
    setVisible(shouldShow);
    if (!shouldShow) return;

    setMoving(true);
    setBubble(null);
    clearTimeout(bubbleTimer.current);
    if (settle.get() !== 0) animate(settle, 0, { duration: reducedMotion ? 0 : 0.3, ease: ENERGETIC });

    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      const onRight = positionFor(smoothProgress.get()) > 50;
      edgeTarget.current = onRight ? 100 : 0;
      setBubbleOnRight(onRight);
      animate(settle, 1, { duration: reducedMotion ? 0 : 0.8, ease: ENERGETIC });
      setMoving(false);
      // speak only once she has reached the edge
      clearTimeout(bubbleTimer.current);
      bubbleTimer.current = setTimeout(
        () => {
          setBubble(pickMessage());
          bubbleTimer.current = setTimeout(() => setBubble(null), BUBBLE_MS);
        },
        reducedMotion ? 0 : 800,
      );
    }, IDLE_DELAY_MS);
  });

  useEffect(
    () => () => {
      clearTimeout(idleTimer.current);
      clearTimeout(bubbleTimer.current);
    },
    [],
  );

  // Alternate the two walking frames while the page is scrolling.
  useEffect(() => {
    if (!moving || reducedMotion) return;
    const id = setInterval(() => setStep((s) => (s === 0 ? 1 : 0)), 150);
    return () => clearInterval(id);
  }, [moving, reducedMotion]);

  const frame: SpriteFrame =
    moving && !reducedMotion
      ? step === 0
        ? "walkA"
        : "walkB"
      : bubble
        ? blinking
          ? "pointBlink"
          : "point"
        : blinking
          ? "blink"
          : "idle";

  const goAsk = () => {
    scrollToTop();
    window.setTimeout(() => window.dispatchEvent(new Event(PROMPT_FOCUS_EVENT)), reducedMotion ? 0 : 900);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 print:hidden">
      <AnimatePresence>
        {visible && (
          <motion.div
            key="floating-mascot"
            className="absolute bottom-1"
            style={reducedMotion ? { right: "1rem" } : { left, x: "-50%" }}
            initial={{ opacity: 0, y: 56 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 56 }}
            transition={{ duration: 0.35, ease: ENERGETIC }}
          >
            <div className="relative">
              <AnimatePresence>
                {bubble && (
                  <motion.div
                    key="bubble"
                    role="status"
                    initial={{ opacity: 0, scale: 0.9, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: ENERGETIC }}
                    className={`absolute bottom-full mb-3 w-max max-w-[12.5rem] rounded-lg border-2 border-[#3b67af] bg-card px-3 py-2 font-pixel text-[11px] leading-snug text-foreground shadow-lg dark:border-[#9dbcf7] sm:max-w-[10.5rem] sm:text-xs ${
                      bubbleOnRight ? "right-0" : "left-0"
                    }`}
                  >
                    {bubble}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-[7px] h-3 w-3 rotate-45 border-b-2 border-r-2 border-[#3b67af] bg-card dark:border-[#9dbcf7] ${
                        bubbleOnRight ? "right-8" : "left-8"
                      }`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={goAsk}
                aria-label={copy.ariaLabel}
                title={copy.askMe}
                className="pointer-events-auto block rounded-md outline-none transition-transform duration-200 ease-energetic hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary"
                style={moving && step === 1 && !reducedMotion ? { transform: "translateY(-2px)" } : undefined}
              >
                <PixelSprite frame={frame} flip={facingRight} className="h-[48px] w-auto sm:h-[72px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingMascot;
