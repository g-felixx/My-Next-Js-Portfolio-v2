"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useTranslation } from "@/lib/i18n/context";
import HeroPrompt from "@/components/HeroPrompt";
import MascotCallout from "@/components/MascotCallout";

const AnimatedCounter = ({ value, suffix, start }: { value: number; suffix: string; start: boolean }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const frameRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const displayCount = shouldReduceMotion && start ? value : count;

  useEffect(() => {
    if (!start || started.current || shouldReduceMotion) return;

    started.current = true;

    const duration = 2600;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(step);
      }
    };

    frameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [shouldReduceMotion, start, value]);

  return <span className="tabular-nums">{displayCount}{suffix}</span>;
};

const HeroSection = () => {
  const t = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [statsTriggerRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -2% 0px",
  });
  const [statsRevealStarted, setStatsRevealStarted] = useState(false);
  const roleWithoutHighlight = t.role.endsWith(t.roleHighlightWord)
    ? t.role.slice(0, t.role.length - t.roleHighlightWord.length).trim()
    : t.role;

  const shouldStartStats = Boolean(statsInView && (shouldReduceMotion || statsRevealStarted));

  const container = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? { staggerChildren: 0.04, delayChildren: 0.1 }
        : { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.7, 0, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-[calc(5.5rem+env(safe-area-inset-top))] pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Faint dotted grid that fades out toward the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-narrow relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center sm:gap-6"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse motion-reduce:animate-none" />
              {t.heroAvailable}
            </span>
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.h1
              variants={item}
              className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ textWrap: "balance" }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.h2
              variants={item}
              className="text-xl font-semibold tracking-tight text-muted-foreground sm:text-3xl"
            >
              {roleWithoutHighlight} <span className="text-gradient">{t.roleHighlightWord}</span>
            </motion.h2>
          </div>

          <motion.p
            variants={item}
            className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            style={{ textWrap: "pretty" }}
          >
            {t.tagline}
          </motion.p>

          {/* AI prompt — the centrepiece of the hero */}
          <motion.div variants={item} className="mt-2 w-full">
            <div className="relative">
              <HeroPrompt />
              {/* wide screens: the mascot stands beside the card */}
              <div className="absolute left-full top-[34%] ml-2 hidden min-[1360px]:block">
                <MascotCallout variant="side" />
              </div>
            </div>
            {/* smaller screens: the mascot stands below the card */}
            <div className="min-[1360px]:hidden">
              <MascotCallout variant="below" />
            </div>
          </motion.div>

          <motion.div variants={item} className="flex w-full flex-col flex-wrap justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-energetic hover:brightness-110 active:scale-[0.97] sm:w-auto"
            >
              {t.heroViewProjects}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={t.resumeUrl}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 ease-energetic hover:border-primary/60 active:scale-[0.97] sm:w-auto"
            >
              <Download className="h-4 w-4 text-primary" />
              {t.heroResume}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsTriggerRef}
            variants={item}
            onAnimationStart={() => setStatsRevealStarted(true)}
            className="mt-4 grid w-full grid-cols-2 gap-4 sm:mt-6 sm:grid-cols-4"
          >
            {t.stats.map((stat, index) => (
              <div key={index} className="border-l-2 border-border py-1 pl-4 text-left">
                <div className="text-2xl font-bold tracking-tighter text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} start={shouldStartStats} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
