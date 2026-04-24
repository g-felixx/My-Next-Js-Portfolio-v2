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
  title: string;
  category: string;
  summary: string;
  description: string;
  impact: string;
  role: string;
  timeline?: string;
  complexity: string;
  tech: string[];
  images: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "codenex",
    title: "CodeNex: AI Builder",
    category: "Full-Stack AI Product",
    summary: "A full-stack AI app builder designed like a real product, not a toy prompt box.",
    description: "Built a full-stack AI builder inspired by Lovable and v0, with a Java microservices backend, authentication, dashboards, usage views, and a guided builder workflow across Redis, Kafka, Docker, and Kubernetes.",
    impact: "Shows product thinking, backend architecture depth, and the ability to package GenAI into a usable developer platform.",
    role: "Product architecture, backend systems, and platform design",
    timeline: "Flagship platform build",
    complexity: "Distributed systems, orchestration, auth, and usage tracking",
    images: [
      "/images/projects/codenex/landing-page-light.png",
      "/images/projects/codenex/landing-page-dark.png",
      "/images/projects/codenex/system-architecture-dark.png",
      "/images/projects/codenex/dashboard-overview-light.png",
      "/images/projects/codenex/dashboard-overview-dark.png",
      "/images/projects/codenex/dashboard-usage-dark.png",
      "/images/projects/codenex/project-builder-dark.png",
      "/images/projects/codenex/login-page-dark.png",
    ],
    tech: ["Java", "Spring Boot", "React", "TypeScript", "Docker", "Kubernetes", "Redis", "Kafka"],
    github: "https://github.com/Nikunj2003/Codenex-backend-v1",
  },
  {
    slug: "codenex-ai-api-proxy",
    title: "CodeNex AI API Proxy",
    category: "AI Gateway & Infra",
    summary: "A unified AI gateway for routing across providers through one consistent API layer.",
    description: "Built a provider-agnostic AI gateway that handles protocol translation, provider pooling, health-aware failover, streaming, and operational controls behind a single API surface.",
    impact: "Demonstrates strong infra instincts around reliability, abstraction, observability, and multi-model platform design.",
    role: "Gateway architecture, backend implementation, and operational tooling",
    timeline: "Infra-focused product build",
    complexity: "Provider abstraction, failover, streaming, and control plane UX",
    images: [
      "/images/projects/codenex-proxy/dashbord.png",
      "/images/projects/codenex-proxy/providers.png",
      "/images/projects/codenex-proxy/api-docs.png",
      "/images/projects/codenex-proxy/login.png",
    ],
    tech: ["Go", "Gin", "Node.js", "Express.js", "Redis", "PostgreSQL", "React"],
    github: "https://github.com/Nikunj2003/codenex-ai-api-proxy",
  },
  {
    slug: "serenify",
    title: "Serenify",
    category: "Full-Stack AI Product",
    summary: "A consumer-style AI wellness product with thoughtful UX, not just chat wrapped around a model.",
    description: "Built an open-source AI wellness platform that combines empathetic chat, mood tracking, journaling, guided sessions, and privacy-aware analytics into a product users can return to consistently.",
    impact: "Shows product empathy, end-user UX judgment, and the ability to shape AI into a coherent consumer experience.",
    role: "Product design, frontend experience, and AI workflow implementation",
    timeline: "Full product build",
    complexity: "State-rich UX, AI interactions, privacy-minded product design",
    images: [
      "/images/projects/serenify/landing-page-light.png",
      "/images/projects/serenify/dashboard-light.png",
      "/images/projects/serenify/chat-light.png",
      "/images/projects/serenify/activities-light.png",
      "/images/projects/serenify/profile-light.png",
      "/images/projects/serenify/crisis-help-light.png",
      "/images/projects/serenify/login-page-light.png",
      "/images/projects/serenify/dashboard-streak-dark.png",
    ],
    tech: ["React", "TypeScript", "Supabase", "pgvector", "Gemini AI", "Vercel"],
    github: "https://github.com/Nikunj2003/Serenify",
  },
  {
    slug: "resume-fit-codenex",
    title: "Resume Fit — CodeNex",
    category: "AI Product",
    summary: "An AI resume improvement workflow built like a practical product instead of a one-off analyzer.",
    description: "Built an AI resume analysis and optimization tool with ATS-style scoring, keyword extraction, guided refinements, and visual feedback for iterative resume improvement.",
    impact: "Highlights applied AI product thinking, user guidance, and polished workflow design around a high-frequency use case.",
    role: "Product UX, AI workflow design, and frontend implementation",
    timeline: "Focused product build",
    complexity: "AI scoring UX, iterative feedback loops, and productized guidance",
    images: [
      "/images/projects/resumefit/landing-page-light.png",
      "/images/projects/resumefit/landing-page-dark.png",
      "/images/projects/resumefit/job-description-dark.png",
      "/images/projects/resumefit/api-key-entry-light.png",
      "/images/projects/resumefit/api-key-entry-dark.png",
      "/images/projects/resumefit/upload-resume-empty-dark.png",
      "/images/projects/resumefit/upload-resume-filled-dark.png",
    ],
    tech: ["React", "TypeScript", "Gemini AI", "Vercel AI SDK", "Recharts"],
    github: "https://github.com/Nikunj2003/Resume-Fit-Codenex",
  },
  {
    slug: "codenex-images",
    title: "CodeNex Images",
    category: "Full-Stack AI Product",
    summary: "An AI image workspace designed around focused creation and editing flows.",
    description: "Built an AI image generation and editing product around Gemini models, Auth0, and a polished workspace that emphasizes creation flow instead of exposing raw model controls.",
    impact: "Shows ability to wrap multimodal AI into a more usable and polished creative product experience.",
    role: "Product workflow design and full-stack implementation",
    timeline: "Creative AI product build",
    complexity: "Auth, image workflows, and UI-first multimodal product design",
    images: [
      "/images/projects/codenex-images/login-page-dark.png",
      "/images/projects/codenex-images/generation-workspace-dark.png",
    ],
    tech: ["React", "TypeScript", "Vite", "Auth0", "Gemini AI", "Node.js", "MongoDB"],
    github: "https://github.com/Nikunj2003/codenex-images",
  },
  {
    slug: "llama-mcp-streamlit",
    title: "LLaMa MCP Streamlit",
    category: "LLM Tooling / MCP",
    summary: "A tool-aware AI interface that pairs LLaMA with MCP for real-time external actions.",
    description: "Built an interactive assistant that combines NVIDIA NIM-hosted LLaMA 3.3 70B with MCP to show how LLM interfaces can move beyond chat into real-time tool execution.",
    impact: "Useful proof of experimentation depth around MCP, tool use, and practical LLM interaction design.",
    role: "LLM tooling experimentation and applied interface design",
    timeline: "Focused tooling exploration",
    complexity: "Tool invocation, orchestration, and interactive AI UX",
    images: [
      "/images/projects/llama-mcp-streamlit/configuration-dark.png",
      "/images/projects/llama-mcp-streamlit/tools-list-dark.png",
    ],
    tech: ["Python", "Streamlit", "MCP", "LLaMA", "NVIDIA NIM"],
    github: "https://github.com/Nikunj2003/LLaMa-MCP-Streamlit",
  },
];
