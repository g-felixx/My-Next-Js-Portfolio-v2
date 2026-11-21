"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUp } from "lucide-react";
import Mascot from "@/components/Mascot";
import { useTranslation } from "@/lib/i18n/context";
import { PROMPT_FOCUS_EVENT } from "@/lib/ai-twin-client";
import { scrollToTop } from "@/lib/scroll";

/** Closing call-to-action (GitHub-style): sends the visitor back to the AI prompt. */
const AskCta = () => {
  const t = useTranslation();
  const copy = t.prompt.cta;
  const reducedMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const goAsk = () => {
    scrollToTop();
    window.setTimeout(() => window.dispatchEvent(new Event(PROMPT_FOCUS_EVENT)), reducedMotion ? 0 : 900);
  };

  return (
    <section id="ask-cta" className="relative z-10 pb-4 pt-10 sm:pt-16">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reducedMotion ? 0.2 : 0.6, ease: [0.7, 0, 0.3, 1] }}
          className="relative overflow-hidden rounded-xl border border-border bg-card px-6 py-10 sm:px-12 sm:py-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_right,black_20%,transparent_70%)]"
            style={{
              backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-xl">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary">{copy.eyebrow}</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ textWrap: "balance" }}>
                {copy.title}
              </h2>
              <p className="mt-4 text-muted-foreground" style={{ textWrap: "pretty" }}>
                {copy.description}
              </p>
              <button
                type="button"
                onClick={goAsk}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-energetic hover:brightness-110 active:scale-[0.97]"
              >
                <ArrowUp className="h-4 w-4" aria-hidden="true" />
                {copy.button}
              </button>
            </div>
            <Mascot pose="point" className="h-[144px] w-auto shrink-0 sm:h-[192px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AskCta;
