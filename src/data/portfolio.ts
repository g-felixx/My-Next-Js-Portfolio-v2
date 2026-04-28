import type { ProjectCategoryKey } from "@/lib/i18n/types";

export const personalInfo = {
  name: "Amanda Castro",
  email: "amnd.castro@gmail.com",
  linkedin: "https://www.linkedin.com/in/amanda-n-castro/",
  github: "https://github.com/mandis-ncs",
  resumeUrl: "/Amanda_Castro_Resume.pdf",
};

export const githubUsername = "mandis-ncs";

export interface Project {
  slug: string;
  categoryKey: ProjectCategoryKey;
  tech: string[];
  images: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "dolphin-talk",
    categoryKey: "ai-web-app",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Azure AI Speech",
      "Supabase",
      "Framer Motion",
      "Zod",
    ],
    images: ["/projects/dolphin-talk.png"],
  },
  {
    slug: "catelao-automotive",
    categoryKey: "institutional",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Embla Carousel",
      "Nodemailer",
      "Zod",
    ],
    images: ["/projects/catelao.png"],
  },
  {
    slug: "multpoint",
    categoryKey: "product-showcase",
    tech: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Embla Carousel", "Google Maps API"],
    images: ["/projects/multpoint.png"],
  },
  {
    slug: "one-help",
    categoryKey: "ecommerce",
    tech: ["React", "Node.js", "MongoDB", "Vercel", "Google Reviews API"],
    images: ["/projects/one-help.png"],
    live: "https://onehelpinformatica.com.br/",
  },
  {
    slug: "sofia",
    categoryKey: "ai-mobile-app",
    tech: ["Kotlin", "Python", "Flask", "Spring Boot", "CNN", "MongoDB", "SQL"],
    images: ["/projects/sofia.png"],
    github: "https://github.com/mandis-ncs/neural-network-sofia-asd",
    live: "https://sofia-aja.vercel.app/",
  },
];
