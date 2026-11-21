"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Mascot } from "@/components/Mascot";
import { useTranslation } from "@/lib/i18n/context";

interface MascotCalloutProps {
  /**
   * "below": sits under the prompt card (small screens).
   * "side": stands to the right of the card with the arrow pointing left (wide screens).
   */
  variant?: "below" | "side";
}

/**
 * "I built this AI with RAG" note + the pointing mascot, with a hand-drawn
 * arrow that draws itself toward the prompt card.
 */
const MascotCallout = ({ variant = "below" }: MascotCalloutProps) => {
  const t = useTranslation();
  const reducedMotion = useReducedMotion();

  const draw = (delay: number) => ({
    initial: reducedMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : delay, ease: [0.7, 0, 0.3, 1] as const },
  });

  if (variant === "side") {
    return (
      <div className="flex w-48 flex-col items-start gap-2">
        <div className="relative">
          {/* arrow curling left toward the card */}
          <svg
            viewBox="0 0 72 48"
            fill="none"
            aria-hidden="true"
            className="absolute -left-[4.5rem] top-0 h-12 w-[4.5rem] text-[#3b67af] dark:text-[#9dbcf7]"
          >
            <motion.path
              d="M68 40 C 52 8, 28 4, 8 14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              {...draw(0.9)}
            />
            <motion.path
              d="M20 3 L8 14 L21 25"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              {...draw(1.5)}
            />
          </svg>
          <p className="rounded-lg bg-[#1c4da1] px-3 py-2 font-pixel text-sm leading-snug text-white shadow-md">{t.prompt.callout}</p>
        </div>
        <Mascot pose="point" className="h-[192px] w-auto shrink-0" />
      </div>
    );
  }

  return (
    <div className="mx-auto mt-6 flex w-full max-w-3xl items-end justify-end gap-2 pr-2 sm:mt-8 sm:gap-4 sm:pr-10">
      <div className="relative mb-4 max-w-[13rem] text-right sm:mb-6 sm:max-w-xs">
        {/* hand-drawn arrow curling up toward the prompt */}
        <svg
          viewBox="0 0 110 80"
          fill="none"
          aria-hidden="true"
          className="absolute -top-[4.4rem] right-6 h-[4.5rem] w-24 text-[#3b67af] dark:text-[#9dbcf7] sm:right-10 sm:-top-[5rem] sm:h-20 sm:w-28"
        >
          <motion.path
            d="M96 76 C 98 40, 62 16, 14 10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            {...draw(0.9)}
          />
          <motion.path
            d="M26 0 L12 10 L24 23"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...draw(1.5)}
          />
        </svg>

        <p className="rounded-lg bg-[#1c4da1] px-3 py-2 font-pixel text-sm leading-snug text-white shadow-md">{t.prompt.callout}</p>
      </div>

      <Mascot pose="point" className="h-[96px] w-auto shrink-0 sm:h-[144px]" />
    </div>
  );
};

export default MascotCallout;
