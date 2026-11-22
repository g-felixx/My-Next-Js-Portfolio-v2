"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Database, Layers, Server, Wrench } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

const ENERGETIC = [0.7, 0, 0.3, 1] as const;

/**
 * One tile per skill category. `hue` feeds the `.skill-tile` CSS variables
 * (globals.css), like GitHub's language colours; `span` is the desktop bento width.
 */
const TILES: { icon: React.ElementType; hue: number; span: string }[] = [
  { icon: Layers, hue: 262, span: "lg:col-span-7" },
  { icon: Server, hue: 38, span: "lg:col-span-5" },
  { icon: Database, hue: 212, span: "lg:col-span-4" },
  { icon: Code2, hue: 330, span: "lg:col-span-4" },
  { icon: Wrench, hue: 142, span: "lg:col-span-4" },
];

const SkillsSection = () => {
  const t = useTranslation();
  const reducedMotion = useReducedMotion();

  const tile = {
    hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.2 : 0.6, ease: ENERGETIC, staggerChildren: reducedMotion ? 0 : 0.025, delayChildren: 0.2 },
    },
  };
  const chip = {
    hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 6 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: ENERGETIC } },
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-narrow">
        <div className="mb-12 grid gap-6 lg:mb-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 glass-subtle px-3 py-1.5 font-mono text-xs text-primary">
              {t.skills.label}
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t.skills.titleLead} <span className="text-gradient">{t.skills.titleHighlight}</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:col-span-5">{t.skills.description}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {t.skills.categories.map((category, index) => {
            const { icon: Icon, hue, span } = TILES[index] ?? TILES[TILES.length - 1];
            return (
              <motion.article
                key={category.title}
                variants={tile}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                style={{ "--hue": hue } as React.CSSProperties}
                className={cn(
                  "skill-tile group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors duration-300 ease-energetic hover:border-[color:var(--tint-border)] sm:p-8",
                  span,
                )}
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-[color:var(--tint)]" />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-2 select-none font-mono text-7xl font-bold leading-none text-[color:var(--tint)] opacity-[0.1] transition-opacity duration-300 group-hover:opacity-20 sm:text-8xl"
                >
                  {category.skills.length}
                </span>

                <div className="relative flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[color:var(--tint-border)] bg-[color:var(--tint-bg)] text-[color:var(--tint)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 pr-12 sm:pr-16 lg:pr-10">
                    <h3 className="text-lg font-bold leading-snug tracking-tight sm:text-xl">{category.title}</h3>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                      {category.skills.length} {t.skills.technologiesSuffix}
                    </p>
                  </div>
                </div>

                <p className="relative mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{category.description}</p>

                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={chip}
                      className="select-none rounded-full border border-[color:var(--tint-border)] bg-[color:var(--tint-bg)] px-3 py-1 text-[13px] font-medium text-[color:var(--tint)] transition-transform duration-200 ease-energetic hover:-translate-y-0.5"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
