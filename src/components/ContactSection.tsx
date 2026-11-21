"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, Download, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useTranslation } from "@/lib/i18n/context";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/amanda-n-castro",
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mandis-ncs",
    href: personalInfo.github,
  },
];

const ContactSection = () => {
  const t = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="container-narrow" ref={ref}>

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full glass-subtle border border-primary/20 text-xs font-mono text-primary mb-6">
            {t.contact.label}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {t.contact.titleLead} <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="mx-auto w-full max-w-2xl">
          <SpotlightCard delay={0.1} className="h-full">
            <div className="p-6 sm:p-8 md:p-10 flex flex-col gap-6 h-full">
              <div className="flex flex-col gap-6 flex-1">
                <div>
                  <h3 className="text-3xl font-bold mb-3 tracking-tight">{t.contact.buildHeading}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
                    {t.contact.buildDescription}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex flex-col gap-3">
                  {SOCIAL_LINKS.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-secondary border border-border hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
                        <p className="text-sm font-semibold truncate text-foreground/90">{value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Pinned to bottom */}
              <div className="mt-auto flex flex-col gap-4">
                <a
                  href={t.resumeUrl}
                  download
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm tracking-wide transition-all duration-300 active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  {t.contact.form.downloadResume}
                </a>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground border-t border-border pt-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse motion-reduce:animate-none shrink-0" />
                  {t.contact.form.availableLabel}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
