"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Languages as LanguagesIcon, Github } from "lucide-react";
import { about, softSkills, languages } from "@/data/portfolio";
import logo from "@/assets/logo.png";

import { SpotlightCard } from "@/components/ui/spotlight-card";

const GITHUB_CHART_URL = `https://ghchart.rshah.org/29d6b9/${about.githubUsername}`;
const GITHUB_PROFILE_URL = `https://github.com/${about.githubUsername}`;

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="container-narrow" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 shrink-0">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduceMotion ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  <Image src={logo} alt="" aria-hidden="true" className="w-12 h-12 opacity-80 relative z-10 pointer-events-none" draggable={false} />
                </div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full glass-subtle border border-primary/20 text-xs font-mono text-primary">
                  Profile
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                About <br className="hidden lg:block" />
                <span className="text-gradient">Amanda</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {about.summary}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Soft Skills */}
              <SpotlightCard delay={0.1} className="h-full">
                <div className="flex h-full flex-col gap-5 p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold tracking-tight">Soft Skills</h3>
                      <p className="font-mono text-[11px] text-muted-foreground">{softSkills.length} strengths</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-all duration-300 hover:border-primary/40 hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>

              {/* Languages */}
              <SpotlightCard delay={0.15} className="h-full">
                <div className="flex h-full flex-col gap-5 p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <LanguagesIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold tracking-tight">Languages</h3>
                      <p className="font-mono text-[11px] text-muted-foreground">{languages.length} spoken</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-4">
                    {languages.map((lang) => (
                      <li key={lang.name} className="flex flex-col gap-1.5">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm font-semibold text-foreground">{lang.name}</span>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                            {lang.level}
                          </span>
                        </div>
                        <div className="relative h-1.5 overflow-hidden rounded-full bg-white/5">
                          <motion.span
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                            transition={{ duration: shouldReduceMotion ? 0.2 : 1.1, ease: [0.16, 1, 0.3, 1], delay: shouldReduceMotion ? 0 : 0.2 }}
                            className="block h-full rounded-full bg-primary shadow-[0_0_10px_rgba(41,214,185,0.35)]"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </div>

            {/* GitHub Activity */}
            <SpotlightCard delay={0.2}>
              <div className="flex flex-col gap-5 p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                      <Github className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold tracking-tight">GitHub Activity</h3>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        Last year of contributions
                      </p>
                    </div>
                  </div>

                  <a
                    href={GITHUB_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-mono text-primary transition-colors hover:bg-primary/15 sm:self-auto"
                  >
                    @{about.githubUsername}
                  </a>
                </div>

                <div className="rounded-2xl border border-white/5 bg-black/30 p-4 sm:p-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={GITHUB_CHART_URL}
                    alt={`${about.githubUsername} GitHub contribution calendar`}
                    loading="lazy"
                    className="h-auto w-full select-none"
                    draggable={false}
                  />
                </div>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
