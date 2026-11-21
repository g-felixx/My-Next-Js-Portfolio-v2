"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowLeft, ArrowRight, Briefcase, CalendarDays, ChevronDown, GraduationCap } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import type { TranslationExperienceItem } from "@/lib/i18n/types";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const ENERGETIC = [0.7, 0, 0.3, 1] as const;

/* ───────────── "And a new [adventure] ahead" ───────────── */

function FlipChapter({ className }: { className?: string }) {
  const t = useTranslation();
  const words = t.experience.flipChapterWords;
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setCurrentWord(words[0]);
  }, [words]);

  const startAnimation = useCallback(() => {
    const currentIndex = words.indexOf(currentWord);
    const word = words[(currentIndex + 1) % words.length];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    const handler = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);

  useEffect(() => {
    if (!isAnimating && isVisible) {
      const id = window.setTimeout(() => startAnimation(), 3000);
      return () => window.clearTimeout(id);
    }
  }, [isAnimating, isVisible, startAnimation]);

  return (
    <motion.h3
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 0.5 }}
      className={cn("text-left text-base font-semibold text-foreground sm:text-xl", className)}
    >
      {t.experience.flipChapterPrefix}{" "}
      <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
        <motion.span
          key={currentWord}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0.2 } : { type: "spring", stiffness: 100, damping: 10 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 2, position: "absolute" }
          }
          className="relative inline-block px-1 text-left text-primary"
        >
          {currentWord.split("").map((letter, index) => (
            <motion.span
              key={`${currentWord}-${index}`}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: index * (shouldReduceMotion ? 0.02 : 0.08), duration: shouldReduceMotion ? 0.18 : 0.4 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>{" "}
      {t.experience.flipChapterSuffix}
    </motion.h3>
  );
}

/* ───────────── shared bits ───────────── */

function MetaChips({ exp }: { exp: TranslationExperienceItem }) {
  const t = useTranslation();
  const MetaIcon = exp.type === "education" ? GraduationCap : Briefcase;
  const metaLabel = exp.type === "education" ? t.experience.metaEducation : t.experience.metaWork;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
      <MetaIcon className="h-3.5 w-3.5" aria-hidden="true" />
      {metaLabel}
    </span>
  );
}

function PeriodChip({ period }: { period: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs font-medium text-muted-foreground">
      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
      {period}
    </span>
  );
}

function Bullet({ children, strong }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <>
      <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", strong ? "bg-primary" : "bg-primary/60")} />
      <span>{children}</span>
    </>
  );
}

/* ───────────── desktop: git-log style timeline + detail panel ───────────── */

function DesktopExperience({ items }: { items: TranslationExperienceItem[] }) {
  const t = useTranslation();
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const exp = items[active];
  const total = items.length;

  const onKeyDown = (event: React.KeyboardEvent) => {
    let next = active;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (active + 1) % total;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (active - 1 + total) % total;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = total - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="hidden items-start gap-10 lg:grid lg:grid-cols-12">
      {/* timeline */}
      <div className="lg:col-span-5">
        <ol role="tablist" aria-orientation="vertical" aria-label={t.experience.timelineLabel} onKeyDown={onKeyDown} className="relative">
          <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-border" />
          {items.map((item, index) => {
            const selected = index === active;
            return (
              <li key={`${item.company}-${item.period}`} role="presentation" className="relative">
                <button
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  className={cn(
                    "group relative -mx-3 flex w-[calc(100%+1.5rem)] items-start gap-5 rounded-lg border px-3 py-3.5 text-left outline-none transition-colors duration-200 ease-energetic focus-visible:ring-2 focus-visible:ring-primary",
                    selected ? "border-border bg-card" : "border-transparent hover:bg-secondary/60",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "relative z-10 mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border bg-background transition-colors duration-200",
                      selected ? "border-primary" : "border-border group-hover:border-primary/60",
                    )}
                  >
                    <span
                      className={cn(
                        "h-2.5 w-2.5 rounded-full transition-all duration-200 ease-energetic",
                        selected ? "scale-100 bg-primary" : index === 0 ? "scale-90 bg-primary/60" : "scale-75 bg-muted-foreground/40",
                      )}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                      {index === 0 && (
                        <span className="rounded-md border border-primary/40 bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-primary">
                          {t.experience.latest}
                        </span>
                      )}
                    </span>
                    <span
                      className={cn(
                        "mt-1 block text-base font-semibold leading-snug transition-colors",
                        selected ? "text-foreground" : "text-foreground/80 group-hover:text-foreground",
                      )}
                    >
                      {item.role}
                    </span>
                    <span className="mt-0.5 block text-sm text-primary">{item.company}</span>
                  </span>
                </button>
              </li>
            );
          })}
          <li role="presentation" className="relative flex items-center gap-5 py-4">
            <span
              aria-hidden="true"
              className="relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-dashed border-border bg-background"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
            </span>
            <FlipChapter className="text-sm sm:text-base" />
          </li>
        </ol>
      </div>

      {/* detail panel */}
      <div className="sticky top-28 lg:col-span-7">
        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="overflow-hidden rounded-xl border border-border bg-card shadow-accent-soft"
        >
          <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-6 py-3">
            <span className="font-mono text-xs text-muted-foreground">
              <span className="font-bold text-foreground">{String(active + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
            </span>
            <PeriodChip period={exp.period} />
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0.12 : 0.25, ease: ENERGETIC }}
              className="min-h-[27rem] p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{exp.role}</h3>
                  <p className="mt-1 text-lg font-medium text-primary">{exp.company}</p>
                </div>
                <MetaChips exp={exp} />
              </div>

              <p className="mt-6 border-l-2 border-primary pl-4 leading-relaxed text-foreground/90" style={{ textWrap: "pretty" }}>
                {exp.summary}
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {exp.bullets.map((bullet, index) => (
                  <motion.li
                    key={bullet}
                    initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: reducedMotion ? 0 : 0.08 + index * 0.045, ease: ENERGETIC }}
                    className="flex gap-3"
                    style={{ textWrap: "pretty" }}
                  >
                    <Bullet>{bullet}</Bullet>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ───────────── mobile: featured latest role + carousel of the rest ───────────── */

function FeaturedCard({ exp }: { exp: TranslationExperienceItem }) {
  const t = useTranslation();
  const [open, setOpen] = useState(false);
  const visible = open ? exp.bullets : exp.bullets.slice(0, 3);
  return (
    <article className="relative overflow-hidden rounded-xl border border-primary/40 bg-card p-6 shadow-accent-soft">
      <div className="absolute inset-x-0 top-0 h-0.5 bg-primary" aria-hidden="true" />
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-primary">
          {t.experience.latest}
        </span>
        <PeriodChip period={exp.period} />
      </div>
      <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
      <p className="mt-1 font-medium text-primary">{exp.company}</p>
      <p className="mt-4 border-l-2 border-primary pl-3 text-sm leading-relaxed text-foreground/90">{exp.summary}</p>
      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
        {visible.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <Bullet>{bullet}</Bullet>
          </li>
        ))}
      </ul>
      {exp.bullets.length > 3 && (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          {open ? t.experience.showLess : t.experience.showMore}
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden="true" />
        </button>
      )}
    </article>
  );
}

function CompactCard({ exp }: { exp: TranslationExperienceItem }) {
  const t = useTranslation();
  const [open, setOpen] = useState(false);
  const preview = exp.bullets.slice(0, 2);
  const rest = exp.bullets.slice(2);

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <MetaChips exp={exp} />
      </div>
      <PeriodChip period={exp.period} />
      <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight">{exp.role}</h3>
      <p className="mt-0.5 text-sm font-medium text-primary">{exp.company}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">{exp.summary}</p>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {(open ? exp.bullets : preview).map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <Bullet>{bullet}</Bullet>
          </li>
        ))}
      </ul>
      {rest.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="mt-auto inline-flex items-center gap-1.5 self-start pt-4 text-sm font-semibold text-primary"
        >
          {open ? t.experience.showLess : t.experience.showMore}
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden="true" />
        </button>
      )}
    </article>
  );
}

function MobileExperience({ items }: { items: TranslationExperienceItem[] }) {
  const t = useTranslation();
  const [featured, ...earlier] = items;
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="space-y-8 lg:hidden">
      <FeaturedCard exp={featured} />

      {earlier.length > 0 && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.experience.earlier}</h3>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                aria-label={t.experience.prev}
                className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label={t.experience.next}
                className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <Carousel setApi={setApi} opts={{ align: "start", containScroll: "trimSnaps" }} className="w-full">
            <CarouselContent className="-ml-3">
              {earlier.map((item) => (
                <CarouselItem key={`${item.company}-${item.period}`} className="basis-[88%] pl-3">
                  <CompactCard exp={item} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-4 flex justify-center gap-2">
            {earlier.map((item, index) => (
              <button
                key={`${item.company}-${item.period}-dot`}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={t.experience.dotLabel(index + 1, earlier.length)}
                aria-current={index === selected}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 ease-energetic",
                  index === selected ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/50",
                )}
              />
            ))}
          </div>
        </div>
      )}

      <FlipChapter />
    </div>
  );
}

/* ───────────── section ───────────── */

const ExperienceSection = () => {
  const t = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0 });
  const items = t.experience.items;

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="container-narrow" ref={sectionRef}>
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, ease: ENERGETIC }}
          className="mb-12 grid gap-6 lg:mb-14 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 glass-subtle px-3 py-1.5 font-mono text-xs text-primary">
              {t.experience.label}
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t.experience.titleLead} <span className="text-gradient">{t.experience.titleHighlight}</span>
            </h2>
          </div>
          <p className="leading-relaxed text-muted-foreground lg:col-span-5">{t.experience.description}</p>
        </motion.div>

        <DesktopExperience items={items} />
        <MobileExperience items={items} />
      </div>
    </section>
  );
};

export default ExperienceSection;
