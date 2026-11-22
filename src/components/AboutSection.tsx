"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Github, Languages as LanguagesIcon, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { githubUsername, personalInfo } from "@/data/portfolio";
import { useTranslation } from "@/lib/i18n/context";
import { PixelSprite } from "@/components/pixel/PixelSprite";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const GITHUB_CHART_URL = `https://ghchart.rshah.org/8250df/${githubUsername}`;
const GITHUB_PROFILE_URL = `https://github.com/${githubUsername}`;

const ENERGETIC = [0.7, 0, 0.3, 1] as const;

/**
 * Laid out like a GitHub profile: a sticky "profile card" on the left (avatar, identity, links,
 * languages) and a README-style column on the right (intro, soft skills, contribution graph).
 */
const AboutSection = () => {
  const t = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: shouldReduceMotion ? 0.2 : 0.7, ease: ENERGETIC, delay: shouldReduceMotion ? 0 : delay },
  });

  const links = [
    { href: GITHUB_PROFILE_URL, label: `@${githubUsername}`, icon: Github, external: true },
    { href: personalInfo.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
    { href: `mailto:${personalInfo.email}`, label: personalInfo.email, icon: Mail, external: false },
  ];

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="container-narrow" ref={ref}>
        <div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Profile card */}
          <motion.aside {...rise(0)} className="order-2 lg:order-1 lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
              <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-6">
                <div className="grid h-[120px] w-[120px] shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-secondary lg:h-[168px] lg:w-full">
                  <PixelSprite frame="idle" crop="head" className="block h-[100px] w-auto lg:h-[150px]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight">{personalInfo.name}</h3>
                  <p className="font-mono text-sm text-muted-foreground">@{githubUsername}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{t.role}</p>
                </div>
              </div>

              <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Portugal
                </li>
                {links.map(({ href, label, icon: Icon, external }) => (
                  <li key={href}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-2.5 transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="truncate">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border pt-5">
                <div className="mb-4 flex items-center gap-2">
                  <LanguagesIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                  <h3 className="text-sm font-bold tracking-tight">{t.about.languagesTitle}</h3>
                  <span className="ml-auto font-mono text-[11px] text-muted-foreground">
                    {t.about.languagesSubtitle(t.about.languages.length)}
                  </span>
                </div>
                <ul className="flex flex-col gap-3.5">
                  {t.about.languages.map((lang) => (
                    <li key={lang.name} className="flex flex-col gap-1.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm font-semibold text-foreground">{lang.name}</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="relative h-1.5 overflow-hidden rounded-full bg-secondary">
                        <motion.span
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                          transition={{ duration: shouldReduceMotion ? 0.2 : 1.1, ease: [0.16, 1, 0.3, 1], delay: shouldReduceMotion ? 0 : 0.3 }}
                          className="block h-full rounded-full bg-primary"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>

          {/* README column */}
          <div className="order-1 flex flex-col gap-6 lg:order-2 lg:col-span-8">
            <motion.div {...rise(0.1)} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border bg-secondary px-5 py-3 font-mono text-xs text-muted-foreground">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                {t.about.label}
                <span className="text-muted-foreground/60">/</span>
                <span className="text-foreground">README.md</span>
              </div>

              <div className="p-6 sm:p-9">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {t.about.titleLead} <span className="text-gradient">{t.about.titleHighlight}</span>
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.about.summary}</p>

                <div className="mt-9 border-t border-border pt-7">
                  <div className="mb-4 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                    <h3 className="text-sm font-bold tracking-tight">{t.about.softSkillsTitle}</h3>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {t.about.softSkillsSubtitle(t.about.softSkills.length)}
                    </span>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {t.about.softSkills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-[13px] font-medium text-primary transition-transform duration-200 ease-energetic hover:-translate-y-0.5"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* GitHub Activity */}
            <motion.div {...rise(0.2)}>
              <SpotlightCard>
                <div className="flex flex-col gap-5 p-6 sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                        <Github className="h-4 w-4 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold tracking-tight">{t.about.githubTitle}</h3>
                        <p className="font-mono text-[11px] text-muted-foreground">{t.about.githubSubtitle}</p>
                      </div>
                    </div>

                    <a
                      href={GITHUB_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:bg-primary/15 sm:self-auto"
                    >
                      @{githubUsername}
                    </a>
                  </div>

                  <div className="rounded-xl border border-border bg-background p-4 sm:p-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={GITHUB_CHART_URL}
                      alt={`${githubUsername} GitHub contribution calendar`}
                      loading="lazy"
                      className="h-auto w-full select-none"
                      draggable={false}
                    />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
