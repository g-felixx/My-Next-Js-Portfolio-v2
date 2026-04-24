"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const EducationSection = () => {
  const t = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="section-padding relative z-10">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-subtle border border-primary/20 text-xs font-mono text-primary mb-6">
            <GraduationCap className="h-3.5 w-3.5" />
            {t.education.label}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.education.titleLead} <span className="text-gradient">{t.education.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg">
            {t.education.description}
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />

          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {t.education.items.map((edu, index) => {
              const step = String(index + 1).padStart(2, "0");
              const isLatest = index === 0;

              return (
                <li key={edu.institution} className="relative">
                  <SpotlightCard delay={index * 0.08} className="h-full">
                    <div className="flex h-full flex-col gap-6 p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_0_18px_rgba(41,214,185,0.12)] transition-transform duration-500 group-hover:scale-110">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                            {t.education.stepLabel} {step}
                          </span>
                          {isLatest && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-primary">
                              <Sparkles className="h-3 w-3" />
                              {t.education.latestLabel}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-medium text-muted-foreground">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {edu.period}
                        </span>
                        <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
                          {edu.institution}
                        </h3>
                        <p className="text-sm font-medium leading-snug text-primary">
                          {edu.degree}
                        </p>
                        {edu.location && (
                          <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/80">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </p>
                        )}
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                        {edu.summary}
                      </p>

                      <ul className="mt-auto flex flex-col gap-2.5 border-t border-white/5 pt-5">
                        {edu.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                            <span className="text-pretty">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
