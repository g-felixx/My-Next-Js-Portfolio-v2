"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BadgeCheck, Cloud, Server } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import type { CertificationCategory } from "@/lib/i18n/types";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const CATEGORY_ICONS: Record<CertificationCategory, React.ElementType> = {
  cloud: Cloud,
  backend: Server,
};

const CertificationsSection = () => {
  const t = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="certifications" className="section-padding relative z-10">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-subtle border border-primary/20 text-xs font-mono text-primary mb-6">
            <BadgeCheck className="h-3.5 w-3.5" />
            {t.certifications.label}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.certifications.titleLead} <span className="text-gradient">{t.certifications.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl text-lg">
            {t.certifications.description}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          {t.certifications.items.map((cert, index) => {
            const Icon = CATEGORY_ICONS[cert.category] ?? Award;
            const categoryLabel = t.certifications.categoryLabels[cert.category];

            return (
              <SpotlightCard key={cert.name} delay={index * 0.06} className="h-full">
                <div className="flex h-full items-center gap-5 p-5 sm:p-6">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-60" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                        {categoryLabel}
                      </span>
                      {cert.year && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                          · {cert.year}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold leading-snug tracking-tight text-foreground text-pretty sm:text-base">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>

                  <BadgeCheck
                    aria-hidden="true"
                    className="hidden h-5 w-5 shrink-0 text-primary/40 transition-colors duration-300 group-hover:text-primary sm:block"
                  />
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
