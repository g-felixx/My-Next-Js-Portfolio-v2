export type Locale = "en" | "pt" | "fr";

export const LOCALES: Locale[] = ["en", "pt", "fr"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "locale";

export interface TranslationStat {
  value: number;
  suffix: string;
  label: string;
}

export interface TranslationExperienceItem {
  company: string;
  role: string;
  period: string;
  type: "work" | "education";
  summary: string;
  bullets: string[];
}

export interface TranslationEducationItem {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export type CertificationCategory = "cloud" | "backend";

export interface TranslationCertificationItem {
  name: string;
  issuer: string;
  year?: string;
  category: CertificationCategory;
}

export interface TranslationLanguageItem {
  name: string;
  level: string;
  proficiency: number;
}

export interface TranslationSkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface TranslationContactReason {
  key: "Hiring" | "Collaboration" | "Open Source" | "Other";
  label: string;
}

export type ProjectCategoryKey =
  | "ai-web-app"
  | "institutional"
  | "product-showcase"
  | "ecommerce"
  | "ai-mobile-app"
  | "saas-platform"
  | "mobile-app";

export interface TranslationProjectItem {
  slug: string;
  title: string;
  summary: string;
  description: string;
  impact: string;
  role: string;
  timeline: string;
  complexity: string;
}

export interface Translation {
  locale: Locale;
  htmlLang: string;
  role: string;
  roleHighlightWord: string;
  tagline: string;
  heroAvailable: string;
  heroViewProjects: string;
  heroResume: string;
  resumeUrl: string;
  stats: TranslationStat[];
  nav: {
    about: string;
    experience: string;
    education: string;
    certifications: string;
    projects: string;
    skills: string;
    contact: string;
    resume: string;
    heroAria: string;
    toggleMenu: string;
  };
  about: {
    label: string;
    titleLead: string;
    titleHighlight: string;
    summary: string;
    softSkillsTitle: string;
    softSkillsSubtitle: (count: number) => string;
    softSkills: string[];
    languagesTitle: string;
    languagesSubtitle: (count: number) => string;
    languages: TranslationLanguageItem[];
    githubTitle: string;
    githubSubtitle: string;
  };
  experience: {
    label: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    metaWork: string;
    metaEducation: string;
    flipChapterPrefix: string;
    flipChapterSuffix: string;
    flipChapterWords: string[];
    /** Badge on the most recent role. */
    latest: string;
    /** Heading above the carousel of older roles (mobile). */
    earlier: string;
    showMore: string;
    showLess: string;
    prev: string;
    next: string;
    /** Accessible name of the career timeline. */
    timelineLabel: string;
    dotLabel: (n: number, total: number) => string;
    items: TranslationExperienceItem[];
  };
  education: {
    label: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    stepLabel: string;
    latestLabel: string;
    items: TranslationEducationItem[];
  };
  certifications: {
    label: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    categoryLabels: Record<CertificationCategory, string>;
    items: TranslationCertificationItem[];
  };
  projects: {
    label: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    filterAll: string;
    sourceCode: string;
    liveDemo: string;
    exploreMore: string;
    viewGallery: string;
    viewImage: string;
    noPreview: string;
    /** Badge on the most recent project. */
    featured: string;
    /** Heading of the horizontal track with the remaining projects. */
    more: string;
    /** Accessible name of the horizontally scrolling project list. */
    trackLabel: string;
    categoryLabels: Record<ProjectCategoryKey, string>;
    items: TranslationProjectItem[];
  };
  skills: {
    label: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    technologiesSuffix: string;
    categories: TranslationSkillCategory[];
  };
  contact: {
    label: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    buildHeading: string;
    buildDescription: string;
    reasons: TranslationContactReason[];
    form: {
      nameLabel: string;
      emailLabel: string;
      reasonLabel: string;
      messageLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      sendHeading: string;
      sendDescription: string;
      sendButton: string;
      sendingButton: string;
      securityNote: (email: string) => string;
      availableLabel: string;
      downloadResume: string;
    };
    toasts: {
      reviewTitle: string;
      reviewFallback: string;
      unableTitle: string;
      unableDefault: string;
      timeout: string;
      successTitle: string;
      successDescription: string;
    };
  };
  prompt: {
    title: string;
    badge: string;
    inputLabel: string;
    inputPlaceholder: string;
    /** Phrases typed (and erased) in a loop inside the empty input. */
    placeholders: string[];
    send: string;
    hint: string;
    suggestions: string[];
    /** Rotating status lines shown while the answer is being prepared. */
    thinking: string[];
    /** Auto-playing sample conversations shown before the visitor types. */
    demo: { question: string; answer: string; source: string }[];
    sourceLabel: string;
    you: string;
    assistant: string;
    newChat: string;
    /** Enlarge the chat to the full screen. */
    expand: string;
    /** Shrink it back into the hero. */
    collapse: string;
    error: string;
    /** Placeholder reply used until the real RAG backend is connected. */
    mock: { answer: string; source: string };
    callout: string;
    /** Technology strip under the hero (Mux-style marquee). */
    marquee: { label: string; pause: string; play: string };
    /** Closing call-to-action before the contact section. */
    cta: { eyebrow: string; title: string; description: string; button: string };
    mascot: {
      askMe: string;
      ariaLabel: string;
      generic: string;
      sections: Record<
        "about" | "experience" | "education" | "certifications" | "projects" | "skills" | "contact",
        string
      >;
    };
  };
  footer: {
    roleNote: string;
    downloadResume: string;
    builtWith: string;
  };
  languageToggle: {
    label: string;
    options: { code: Locale; label: string; nativeLabel: string }[];
  };
  themeToggle: {
    toLight: string;
    toDark: string;
  };
}
