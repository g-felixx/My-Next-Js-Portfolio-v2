"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useTranslation } from "@/lib/i18n/context";

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
        : { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 24, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-start overflow-hidden pt-[calc(5rem+env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] sm:pt-[calc(5.5rem+env(safe-area-inset-top))] sm:pb-[max(2.5rem,env(safe-area-inset-bottom))] lg:min-h-screen lg:items-center lg:pt-20 lg:pb-0"
    >
      {/* Subtle background grid & Animated Glow Orb */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "radial-gradient(hsl(var(--accent)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Flame-like animated glow: purple top, orange/red base */}
      <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full animate-[pulse_8s_ease-in-out_infinite] motion-reduce:animate-none opacity-60 pointer-events-none bg-[radial-gradient(circle,hsl(var(--primary)/0.35)_0%,transparent_70%)]" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] rounded-full animate-[pulse_10s_ease-in-out_infinite_reverse] motion-reduce:animate-none opacity-70 pointer-events-none bg-[radial-gradient(circle,hsl(var(--accent)/0.35)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full animate-[pulse_12s_ease-in-out_infinite] motion-reduce:animate-none opacity-50 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent-light)/0.3)_0%,hsl(var(--primary)/0.18)_45%,transparent_75%)]" />

      {/* Smooth fade into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 sm:h-64 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-0" />

      <div className="container-narrow relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:gap-8"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold glass-subtle border border-primary/20 text-primary tracking-wide shadow-[0_0_12px_rgba(245,117,53,0.1)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse motion-reduce:animate-none" />
              {t.heroAvailable}
            </span>
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.h1 variants={item} className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] sm:leading-[1.05]">
              {personalInfo.name}
            </motion.h1>
            <motion.h2 variants={item} className="text-xl sm:text-4xl font-semibold tracking-tight text-muted-foreground mt-2">
              {roleWithoutHighlight} <span className="text-gradient">{t.roleHighlightWord}</span>
            </motion.h2>
          </div>

          <motion.p
            variants={item}
            className="max-w-2xl text-base sm:text-lg leading-relaxed font-medium text-muted-foreground"
            style={{ textWrap: "pretty" }}
          >
            {t.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-1 sm:mt-2">
            <a
              href="#projects"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(245,117,53,0.18)] hover:shadow-[0_0_28px_rgba(245,117,53,0.24)] transition-all duration-300 active:scale-95"
            >
              {t.heroViewProjects}
              <ArrowDown className="w-4 h-4 ml-1" />
            </a>
            <a
              href={t.resumeUrl}
              download
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 dark:bg-white/[0.02] backdrop-blur-lg border border-primary/50 dark:border-primary/50 font-bold text-foreground text-sm tracking-wide hover:bg-primary/10 transition-all duration-300 active:scale-95"
            >
              <Download className="w-4 h-4 mr-1 text-primary" />
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
              <div key={index} className="border-l-2 border-primary/30 pl-4 py-1 text-left">
                <div className="text-2xl font-bold tracking-tighter text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} start={shouldStartStats} />
                </div>
                <div className="text-xs font-medium text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
