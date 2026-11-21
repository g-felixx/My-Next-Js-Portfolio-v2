"use client";
import { useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

/**
 * Mux-style strip of technologies that scrolls continuously. Pauses on hover /
 * focus and has an explicit pause button; reduced-motion users get a static,
 * wrapped list instead.
 */
const TechMarquee = () => {
  const t = useTranslation();
  const copy = t.prompt.marquee;
  const reducedMotion = useReducedMotion() ?? false;
  const [paused, setPaused] = useState(false);

  const items = useMemo(() => Array.from(new Set(t.skills.categories.flatMap((category) => category.skills))), [t]);

  const chip =
    "rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-foreground";

  return (
    <section aria-label={copy.label} className="relative bg-card/40 py-6">
      <div className="container-narrow mb-4 flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{copy.label}</p>
        {!reducedMotion && (
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            aria-label={paused ? copy.play : copy.pause}
            title={paused ? copy.play : copy.pause}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {paused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
          </button>
        )}
      </div>

      {reducedMotion ? (
        <ul className="container-narrow flex flex-wrap gap-2">
          {items.map((item) => (
            <li key={item} className={chip}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="mask-x-fade overflow-hidden">
          <ul
            className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
            style={{ animationDuration: `${items.length * 2.4}s`, animationPlayState: paused ? "paused" : undefined }}
          >
            {[...items, ...items].map((item, index) => (
              <li key={`${item}-${index}`} aria-hidden={index >= items.length || undefined} className="mr-3 shrink-0">
                <span className={`block ${chip}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default TechMarquee;
