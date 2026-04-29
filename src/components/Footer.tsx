"use client";
import { personalInfo } from "@/data/portfolio";
import { Mail, Linkedin, Github } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const SOCIAL_LINKS = [
  { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
  { icon: Github, label: "GitHub", href: personalInfo.github },
];

const Footer = () => {
  const t = useTranslation();
  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.certifications, href: "#certifications" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
  <footer className="py-8 px-4 relative z-10">
    <div className="container-narrow">
      <SpotlightCard className="w-full">
        <div className="px-6 py-8 sm:px-10">
          
          {/* Mobile: centered stack | Desktop: logo-left nav-right */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-8">
            <a href="#hero" className="group shrink-0">
              <span className="text-base font-bold text-muted-foreground group-hover:text-foreground transition-colors tracking-tight">
                Amanda Castro
              </span>
            </a>

            <nav className="flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-end">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-8 text-center sm:text-left">
            <p className="text-sm font-medium text-foreground/85">
              {t.footer.roleNote}
            </p>
            <a
              href={t.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 self-center sm:self-auto rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
            >
              {t.footer.downloadResume}
            </a>
          </div>

          {/* Mobile: centered social icons above copyright | Desktop: copyright-left icons-right */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-muted-foreground/60 text-center sm:text-left font-medium">
              © {new Date().getFullYear()} Amanda Castro · {t.footer.builtWith}
            </p>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass-subtle border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/5 hover:border-primary/20 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </SpotlightCard>
    </div>
  </footer>
  );
};

export default Footer;
