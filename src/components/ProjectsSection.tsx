"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { useTranslation } from "@/lib/i18n/context";
import type { ProjectCategoryKey, TranslationProjectItem } from "@/lib/i18n/types";

const PROJECT_ANCHOR_PREFIX = "project-";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";
import ProjectImageViewer from "@/components/ProjectImageViewer";

const PROJECT_IMAGE_SIZES = "(min-width: 1536px) 42rem, (min-width: 1024px) 40vw, 100vw";

function ProjectPreviewImage({ src, alt, priority = false, eager = false }: { src: string; alt: string; priority?: boolean; eager?: boolean }) {
  return (
    <div className="aspect-[16/10] w-full bg-zinc-950 p-1">
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={eager ? "eager" : undefined}
          fetchPriority={priority ? "high" : undefined}
          sizes={PROJECT_IMAGE_SIZES}
          className="rounded-lg object-contain object-center opacity-90 transition-all duration-500 group-hover/img:opacity-100 pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}

/** Stand-in for projects without screenshots: a tiny "window" listing the stack. */
function ProjectPlaceholder({ title, tech, label, fill = false }: { title: string; tech: string[]; label: string; fill?: boolean }) {
  return (
    <div
      className={cn(
        "relative z-10 flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-accent-soft",
        fill ? "h-full" : "aspect-[16/10]",
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">{title}</span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-center gap-1 overflow-hidden p-4 font-mono text-xs text-muted-foreground">
        {tech.slice(0, fill ? 3 : 4).map((name) => (
          <p key={name} className="truncate">
            <span className="text-primary">+</span> {name}
          </p>
        ))}
        <p className="mt-1.5 truncate text-muted-foreground/70">{label}</p>
      </div>
    </div>
  );
}

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  const t = useTranslation();
  const linkClass = compact
    ? "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
    : "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10 hover:text-primary";
  if (!project.github && !project.live) return null;
  return (
    <div className={compact ? "-ml-3 mt-auto flex items-center gap-2" : "mt-auto flex items-center gap-6"}>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={cn(linkClass, !compact && "-ml-4")}>
          <Github className="h-5 w-5" />
          {t.projects.sourceCode}
        </a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <ExternalLink className="h-5 w-5" />
          {t.projects.liveDemo}
        </a>
      )}
    </div>
  );
}

function ProjectShowcase({
  project,
  title,
  priority,
  onOpenViewer,
}: {
  project: Project;
  title: string;
  priority: boolean;
  onOpenViewer: (project: Project, index: number) => void;
}) {
  const t = useTranslation();
  const [mediaRef, mediaInView] = useInView({ triggerOnce: true, threshold: 0, rootMargin: "600px 0px" });
  const hasPrefetchedRef = useRef(false);

  const prefetchProjectImages = useCallback((targetIndex?: number) => {
    if (hasPrefetchedRef.current || project.images.length === 0 || typeof window === "undefined") {
      return;
    }

    hasPrefetchedRef.current = true;

    const indexes = typeof targetIndex === "number"
      ? [targetIndex - 1, targetIndex, targetIndex + 1]
      : [0, 1];

    for (const index of indexes) {
      const src = project.images[index];
      if (!src) continue;

      const image = new window.Image();
      image.decoding = "async";
      image.src = src;
    }
  }, [project.images]);

  useEffect(() => {
    if (!mediaInView || project.images.length === 0) return;

    const timeoutId = window.setTimeout(prefetchProjectImages, 180);
    return () => window.clearTimeout(timeoutId);
  }, [mediaInView, prefetchProjectImages, project.images.length]);

  return (
    <div ref={mediaRef} className="lg:w-1/2 bg-secondary dark:bg-black/40 border-t lg:border-t-0 lg:border-l border-border p-6 sm:p-10 flex items-center justify-center overflow-hidden group/img relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-50 pointer-events-none" />

      {project.images && project.images.length > 0 ? (
        mediaInView ? (
          <Carousel className="w-full relative z-10 rounded-xl overflow-hidden shadow-accent-card ring-1 ring-border bg-black">
            <CarouselContent>
              {project.images.map((img, idx) => (
                <CarouselItem key={`${title}-${img}`}>
                  <button
                    type="button"
                    onClick={() => {
                      prefetchProjectImages(idx);
                      onOpenViewer(project, idx);
                    }}
                    onMouseEnter={() => prefetchProjectImages(idx)}
                    onFocus={() => prefetchProjectImages(idx)}
                    onTouchStart={() => prefetchProjectImages(idx)}
                    className="group/viewer relative block w-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    aria-label={`Open ${title} screenshot ${idx + 1} in viewer`}
                  >
                    <ProjectPreviewImage
                      src={img}
                      alt={`${title} screenshot ${idx + 1}`}
                      priority={priority && idx === 0}
                      eager={priority && idx === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover/viewer:opacity-100 transition-opacity duration-300" />
                    <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-xs font-mono text-white/90 backdrop-blur-md shadow-accent-soft">
                      <Maximize2 className="h-3.5 w-3.5" />
                      {project.images.length > 1 ? t.projects.viewGallery : t.projects.viewImage}
                    </div>
                    {project.images.length > 1 && (
                      <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[11px] font-mono text-white/80 backdrop-blur-md">
                        {idx + 1}/{project.images.length}
                      </div>
                    )}
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="opacity-100 lg:opacity-0 lg:group-hover/img:opacity-100 lg:group-focus-within/img:opacity-100 transition-opacity duration-300">
              <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-none w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors z-20" />
              <CarouselNext className="right-4 bg-background/80 hover:bg-background border-none w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors z-20" />
            </div>
          </Carousel>
        ) : (
          <button
            type="button"
            onClick={() => {
              prefetchProjectImages(0);
              onOpenViewer(project, 0);
            }}
            onMouseEnter={() => prefetchProjectImages(0)}
            onFocus={() => prefetchProjectImages(0)}
            onTouchStart={() => prefetchProjectImages(0)}
            className="group/viewer w-full relative z-10 rounded-xl overflow-hidden shadow-accent-card ring-1 ring-border bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label={`Open ${title} preview in viewer`}
          >
            <ProjectPreviewImage src={project.images[0]} alt={`${title} preview`} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover/viewer:opacity-100 transition-opacity duration-300" />
            <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-xs font-mono text-white/90 backdrop-blur-md shadow-accent-soft">
              <Maximize2 className="h-3.5 w-3.5" />
              {project.images.length > 1 ? "View gallery" : "View image"}
            </div>
          </button>
        )
      ) : (
        <ProjectPlaceholder title={title} tech={project.tech} label={t.projects.noPreview} />
      )}

    </div>
  );
}

/** Compact card used in the horizontal track (desktop, pinned) and the swipe list (mobile). */
function ProjectTrackCard({
  project,
  item,
  index,
  total,
  progress,
  onOpenViewer,
}: {
  project: Project;
  item: TranslationProjectItem;
  index: number;
  total: number;
  progress?: MotionValue<number>;
  onOpenViewer: (project: Project, index: number) => void;
}) {
  const t = useTranslation();
  const idle = useMotionValue(0.5);
  // Parallax: the screenshot drifts against the track while the card slides past.
  const imageX = useTransform(progress ?? idle, [0, 1], progress ? [30, -30] : [0, 0]);
  const hasImage = project.images.length > 0;

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 ease-energetic hover:border-primary/40">
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden border-b border-border bg-secondary dark:bg-black/40">
        {hasImage ? (
          <button
            type="button"
            onClick={() => onOpenViewer(project, 0)}
            className="group/viewer absolute inset-0 block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Open ${item.title} preview in viewer`}
          >
            <motion.div style={{ x: imageX }} className="relative h-full w-full scale-[1.16]">
              <Image
                src={project.images[0]}
                alt={`${item.title} preview`}
                fill
                sizes="30rem"
                className="object-contain object-center p-2 opacity-90 transition-opacity duration-300 group-hover/viewer:opacity-100"
                draggable={false}
              />
            </motion.div>
            <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 font-mono text-xs text-white/90 backdrop-blur-md">
              <Maximize2 className="h-3.5 w-3.5" />
              {project.images.length > 1 ? t.projects.viewGallery : t.projects.viewImage}
            </span>
          </button>
        ) : (
          <div className="absolute inset-0 p-4">
            <ProjectPlaceholder fill title={item.title} tech={project.tech} label={t.projects.noPreview} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3 font-mono text-xs">
          <span className="uppercase tracking-widest text-primary">{t.projects.categoryLabels[project.categoryKey]}</span>
          <span className="text-muted-foreground">
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-xl font-bold leading-tight tracking-tight">{item.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <div className="mb-5 mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-md border border-primary/20 bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary">
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">
              +{project.tech.length - 5}
            </span>
          )}
        </div>
        <ProjectLinks project={project} compact />
      </div>
    </article>
  );
}

/**
 * Desktop: a tall wrapper pins a viewport-high stage while vertical scroll drives the card row
 * sideways (back and forth as you scroll down or up).
 */
function ProjectTrack({
  entries,
  startIndex,
  total,
  onOpenViewer,
}: {
  entries: { project: Project; item: TranslationProjectItem }[];
  startIndex: number;
  total: number;
  onOpenViewer: (project: Project, index: number) => void;
}) {
  const t = useTranslation();
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setActive(Math.min(entries.length - 1, Math.max(0, Math.round(value * (entries.length - 1)))));
  });

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [entries.length]);

  // Tabbing to a card that is off-stage moves the page so the card slides into view.
  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const wrap = wrapRef.current;
      if (!wrap || distance <= 0) return;
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      if (rect.left >= 0 && rect.right <= window.innerWidth) return;
      const inset = parseFloat(getComputedStyle(trackRef.current as HTMLElement).paddingLeft) || 0;
      const ratio = Math.min(1, Math.max(0, (card.offsetLeft - inset) / distance));
      const top = wrap.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + ratio * distance });
    },
    [distance],
  );

  return (
    <div ref={wrapRef} style={{ height: `calc(100svh + ${distance}px)` }} className="relative">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center gap-6 overflow-x-clip pt-20">
        <div className="container-narrow w-full">
          <div className="flex items-end justify-between gap-8">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.projects.more}</h3>
            <div className="flex w-56 flex-col gap-2 font-mono text-xs text-muted-foreground" aria-hidden="true">
              <span className="self-end">
                {String(startIndex + active).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <span className="block h-px w-full bg-border">
                <motion.span style={{ scaleX: scrollYProgress }} className="block h-px origin-left bg-primary" />
              </span>
            </div>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          role="list"
          aria-label={t.projects.trackLabel}
          className="track-inset flex w-max items-stretch gap-6 will-change-transform"
        >
          {entries.map(({ project, item }, i) => (
            <div key={project.slug} role="listitem" onFocusCapture={handleFocus} className="w-[30rem] shrink-0 2xl:w-[34rem]">
              <ProjectTrackCard
                project={project}
                item={item}
                index={startIndex + i}
                total={total}
                progress={scrollYProgress}
                onOpenViewer={onOpenViewer}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  const t = useTranslation();
  const [filterKey, setFilterKey] = useState<ProjectCategoryKey | null>(null);
  const [viewerState, setViewerState] = useState<{ open: boolean; project: Project | null; index: number }>({
    open: false,
    project: null,
    index: 0,
  });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const itemBySlug = useMemo(() => {
    const map = new Map<string, TranslationProjectItem>();
    for (const item of t.projects.items) map.set(item.slug, item);
    return map;
  }, [t.projects.items]);

  const usedCategoryKeys = useMemo(
    () => Array.from(new Set(projects.map((p) => p.categoryKey))) as ProjectCategoryKey[],
    [],
  );

  const filtered = filterKey === null ? projects : projects.filter((p) => p.categoryKey === filterKey);
  const entries = filtered.flatMap((project) => {
    const item = itemBySlug.get(project.slug);
    return item ? [{ project, item }] : [];
  });
  const [featured, ...rest] = entries;
  const activeViewerProject = viewerState.project;
  const activeViewerTitle = activeViewerProject
    ? itemBySlug.get(activeViewerProject.slug)?.title ?? ""
    : "";

  const handleOpenViewer = useCallback((project: Project, index: number) => {
    setViewerState({ open: true, project, index });
  }, []);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container-narrow" ref={ref}>
        {/* Centered Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full glass-subtle border border-primary/20 text-xs font-mono text-primary mb-6">
            {t.projects.label}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.projects.titleLead} <span className="text-gradient">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl text-lg">
            {t.projects.description}
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              key="__all"
              type="button"
              onClick={() => setFilterKey(null)}
              aria-pressed={filterKey === null}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 border ${
                filterKey === null
                  ? "bg-primary text-primary-foreground border-primary"
                  : "glass-subtle text-muted-foreground border-border hover:text-foreground hover:bg-secondary hover:border-border"
              }`}
            >
              {t.projects.filterAll}
            </button>
            {usedCategoryKeys.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilterKey(key)}
                aria-pressed={filterKey === key}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 border ${
                  filterKey === key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "glass-subtle text-muted-foreground border-border hover:text-foreground hover:bg-secondary hover:border-border"
                }`}
              >
                {t.projects.categoryLabels[key]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Most recent project, in the spotlight */}
        {featured && (
          <div
            id={`${PROJECT_ANCHOR_PREFIX}${featured.project.slug}`}
            data-project-slug={featured.project.slug}
            className="scroll-mt-28 mx-auto w-full max-w-5xl 2xl:max-w-7xl"
          >
            <SpotlightCard className="w-full relative bg-background dark:bg-background border-border backdrop-blur-none backdrop-saturate-100">
              <div className="flex min-h-[450px] flex-col lg:flex-row">
                <div className="static z-10 flex flex-1 flex-col justify-center p-6 sm:p-8 lg:w-1/2 lg:p-12">
                  <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {t.projects.featured}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">
                    {t.projects.categoryLabels[featured.project.categoryKey]}
                  </span>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight">{featured.item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-1 text-pretty">
                    {featured.item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featured.project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ProjectLinks project={featured.project} />
                </div>

                <ProjectShowcase project={featured.project} title={featured.item.title} priority onOpenViewer={handleOpenViewer} />
              </div>
            </SpotlightCard>
          </div>
        )}
      </div>

      {rest.length > 0 && (
        <>
          {/* Desktop: pinned stage, vertical scroll drives the row sideways */}
          {!shouldReduceMotion && (
            <div className="mt-16 hidden lg:block">
              <ProjectTrack entries={rest} startIndex={2} total={entries.length} onOpenViewer={handleOpenViewer} />
            </div>
          )}

          {/* Mobile / reduced motion: native swipe list */}
          <div className={cn("mt-12", !shouldReduceMotion && "lg:hidden")}>
            <div className="container-narrow">
              <h3 className="mb-5 text-2xl font-bold tracking-tight">{t.projects.more}</h3>
            </div>
            <div
              role="list"
              aria-label={t.projects.trackLabel}
              className="track-inset flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {rest.map(({ project, item }, i) => (
                <div key={project.slug} role="listitem" className="w-[85%] shrink-0 snap-center sm:w-[26rem]">
                  <ProjectTrackCard project={project} item={item} index={i + 2} total={entries.length} onOpenViewer={handleOpenViewer} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="container-narrow">
        {/* View more on GitHub */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={shouldReduceMotion ? { duration: 0.2 } : { delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/mandis-ncs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full glass border border-border text-sm font-bold text-foreground hover:text-primary hover:bg-secondary transition-all duration-300 shadow-accent-soft active:scale-95"
          >
            <Github className="w-5 h-5" />
            {t.projects.exploreMore}
          </a>
        </motion.div>

        {activeViewerProject && (
          <ProjectImageViewer
            projectTitle={activeViewerTitle}
            images={activeViewerProject.images}
            open={viewerState.open}
            currentIndex={viewerState.index}
            onIndexChange={(index) => setViewerState((current) => ({ ...current, index }))}
            onOpenChange={(open) => setViewerState((current) => ({ ...current, open }))}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
