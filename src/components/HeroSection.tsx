"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useTranslation } from "@/lib/i18n/context";
import { PixelSprite } from "@/components/pixel/PixelSprite";
import { CLOUD, CLOUD_PALETTE, DOLPHIN_FRAMES, DOLPHIN_H, DOLPHIN_PALETTE, DOLPHIN_W } from "@/components/pixel/sprites";

// Nuvens do cenário: posição, escala (inteira) e duração do cruzamento da tela.
const NUVENS = [
  { top: "13%", scale: 5, dur: 140, delay: -30, x: "62%" },
  { top: "27%", scale: 3, dur: 110, delay: -80, x: "18%" },
  { top: "7%", scale: 4, dur: 170, delay: -120, x: "38%" },
];

const HeroSection = () => {
  const t = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const roleWithoutHighlight = t.role.endsWith(t.roleHighlightWord)
    ? t.role.slice(0, t.role.length - t.roleHighlightWord.length).trim()
    : t.role;
  const [firstName, ...restName] = personalInfo.name.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? { staggerChildren: 0.04, delayChildren: 0.1 }
        : { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="pixel-scene relative isolate flex min-h-svh items-start overflow-hidden pt-[calc(6rem+env(safe-area-inset-top))] pb-[calc(22svh+3rem)] sm:pt-[calc(7rem+env(safe-area-inset-top))] lg:items-center lg:pt-24"
    >
      {/* Cenário pixel: céu em faixas, nuvens à deriva e mar com ondas em degraus */}
      <div aria-hidden="true" className="scene-sky absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        {NUVENS.map((n, i) => (
          <div
            key={i}
            className="nuvem-pixel opacity-90 dark:opacity-25"
            style={{
              top: n.top,
              animationDuration: `${n.dur}s`,
              animationDelay: `${n.delay}s`,
              ["--cloud-x" as string]: n.x,
            }}
          >
            <PixelSprite grid={CLOUD} palette={CLOUD_PALETTE} scale={n.scale} />
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="scene-sea absolute inset-x-0 bottom-0 -z-10 h-[22svh]">
        <div className="sea-crest absolute inset-x-0 top-0" />
        <div className="sea-crest lento absolute inset-x-0 top-6" />
      </div>

      {/* Casa do mascote: o golfinho do <Mascot /> nasce aqui e depois acompanha o scroll */}
      <div
        data-mascot-home
        aria-hidden="true"
        className="absolute bottom-[calc(22svh-2rem)] right-[6%] sm:right-[12%]"
        style={{ width: DOLPHIN_W * 4, height: DOLPHIN_H * 4 }}
      >
        {/* Sprite parado: só aparece com movimento reduzido; senão o <Mascot /> assume o lugar */}
        <PixelSprite grid={DOLPHIN_FRAMES[0]} palette={DOLPHIN_PALETTE} className="h-full w-full motion-safe:invisible" />
      </div>

      <div className="container-narrow relative z-10 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="flex max-w-4xl flex-col items-start gap-6 sm:gap-8">
          <motion.div variants={item}>
            <span className="hud-box inline-flex items-center gap-3 px-3 py-2 font-pixel text-[10px] uppercase leading-snug tracking-wide text-foreground">
              <span className="h-2.5 w-2.5 bg-accent motion-safe:animate-[blink_1s_steps(1)_infinite]" />
              {t.heroAvailable}
            </span>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.h1
              variants={item}
              className="font-display text-[length:clamp(4rem,11.5vw,9rem)] uppercase leading-[0.86] tracking-tight text-foreground"
            >
              {firstName}
              <br />
              <span className="text-primary">{restName.join(" ")}</span>
            </motion.h1>
            <motion.h2 variants={item} className="font-pixel text-[11px] uppercase leading-relaxed tracking-wide text-foreground sm:text-sm">
              <span className="mr-2 text-accent">▶</span>
              {roleWithoutHighlight} <span className="text-accent">{t.roleHighlightWord}</span>
            </motion.h2>
          </div>

          <motion.p
            variants={item}
            className="max-w-xl text-base font-medium leading-relaxed text-foreground/85 sm:text-lg"
            style={{ textWrap: "pretty" }}
          >
            {t.tagline}
          </motion.p>

          <motion.div variants={item} className="flex w-full flex-col flex-wrap gap-4 sm:w-auto sm:flex-row sm:gap-5">
            <a href="#projects" className="btn-pixel w-full sm:w-auto">
              {t.heroViewProjects}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={t.resumeUrl} download className="btn-pixel btn-pixel--ghost w-full sm:w-auto">
              <Download className="h-4 w-4" aria-hidden="true" />
              {t.heroResume}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
