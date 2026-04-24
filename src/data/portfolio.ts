export const personalInfo = {
  name: "Amanda Castro",
  role: "Full Stack Engineer",
  tagline: "I am a Software Developer with expertise in backend development, Java Spring Boot, REST APIs, and microservices, specializing in cloud-based solutions and scalable architectures.",
  focus: "Open to Full Stack, Backend, and Frontend engineering opportunities where I can blend innovation, clean code, and scalable architecture to deliver impactful results.",
  email: "amnd.castro@gmail.com",
  linkedin: "https://www.linkedin.com/in/amanda-n-castro/",
  github: "https://github.com/mandis-ncs",
  resumeUrl: "/Amanda_Castro_Resume.pdf",
};

export const stats = [
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 40, suffix: "K+", label: "Organic Leads Generated" },
  { value: 95, suffix: "%", label: "Test Coverage" },
  { value: 30, suffix: "%", label: "Results Increase" },
];

export const about = {
  summary: "Full Stack Engineer focused on backend reliability, clean architecture, and cloud-based solutions — currently building in Portugal.",
  githubUsername: "mandis-ncs",
};

export const softSkills = [
  "Strategic Planning",
  "Agile Collaboration",
  "Cross-functional Teamwork",
  "Problem Solving",
  "Mentoring & Teaching",
  "Clear Communication",
  "Attention to Detail",
  "Adaptability",
];

export interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export const languages: Language[] = [
  { name: "Portuguese", level: "Native", proficiency: 100 },
  { name: "English", level: "Professional Working", proficiency: 85 },
  { name: "French", level: "Limited Working", proficiency: 40 },
];

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner Exam Training [New]",
    issuer: "Amazon Web Services",
    year: "2023",
    category: "Cloud",
  },
  {
    name: "AWS Partner: Cloud Economics Accreditation",
    issuer: "Amazon Web Services",
    year: "2023",
    category: "Cloud",
  },
  {
    name: "AWS Partner: Sales Accreditation (Business)",
    issuer: "Amazon Web Services",
    year: "2023",
    category: "Cloud",
  },
  {
    name: "RabbitMQ: Messaging with Java, Spring Boot and Spring MVC",
    issuer: "Udemy",
    category: "Backend",
  },
  {
    name: "The Complete Java Certification Course",
    issuer: "Udemy",
    category: "Backend",
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: "work" | "education";
  summary: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "tns",
    role: "Full Stack Developer II",
    period: "January 2026 - Present",
    type: "work",
    summary: "Structuring and developing lead generation landing pages for the company's app launch, with A/B testing and performance-focused delivery.",
    bullets: [
      "Structured and developed lead generation landing pages for the company's app launch.",
      "Drove 40,000 organic leads with nearly 1 minute of retention and a 30% increase in results.",
      "Ran A/B tests to continuously improve website performance and conversion.",
    ],
  },
  {
    company: "tns",
    role: "Full Stack Developer I",
    period: "April 2025 - January 2026",
    type: "work",
    summary: "Developed applications in React and TypeScript using Atomic Design architecture, collaborating with Marketing and Sales to enhance the B2B customer experience.",
    bullets: [
      "Development of applications in React and TypeScript using Atomic Design architecture.",
      "Collaboration with the Marketing and Sales departments to enhance the B2B customer experience.",
      "Experience with serverless services such as AWS Lambda and Cloudflare Workers.",
    ],
  },
  {
    company: "CapLink",
    role: "Full Stack Developer",
    period: "March 2025 - Present",
    type: "work",
    summary: "Maintain RESTful and GraphQL APIs with Clean Code architecture in Node.js and TypeScript while delivering polished frontend microcomponents.",
    bullets: [
      "Maintain RESTful and GraphQL APIs with Clean Code architecture in Node.js and TypeScript.",
      "Optimize PostgreSQL queries and maintain automated test coverage above 80% with Jest and Vitest.",
      "Deliver frontend microcomponents in React and document them in Storybook.",
      "Work with Docker containers and agile methodologies such as Scrum and Kanban.",
    ],
  },
  {
    company: "Compass UOL",
    role: "Back End Java Junior Developer",
    period: "June 2024 - January 2025",
    type: "work",
    summary: "Contributed to the development of an Internal Development Platform (IDP) solution, primarily using Java Spring Boot, REST APIs, microservices, Clean Code, and Hexagonal Architecture.",
    bullets: [
      "Developed event-driven architectures and microservices with asynchronous processing using WebFlux, WebSocket, and RabbitMQ.",
      "Deployed CI/CD pipelines and configured Docker containers to run applications, utilizing Docker images for APIs.",
      "Implemented authorization and authentication mechanisms using OAuth 2.0, Spring Security, and JWT.",
      "Designed and executed comprehensive test suites (unit, integration, persistence, and system) to ensure 95% code coverage and system reliability.",
      "Managed database migrations with Flyway and ensured compatibility between PostgreSQL and AWS Aurora queries.",
      "Integrated applications with AWS services such as Cognito, Lambda, SQS, SNS, API Gateway, Parameter Store, and EC2.",
      "Implemented a solution to consume Jenkins build progress via multiple WebSockets, enabling real-time updates for users subscribed to specific topics with session-based JWT key pair management, asynchronous logging, and multi-threaded execution.",
    ],
  },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    institution: "Faculdade Focus",
    degree: "Pós-graduação Lato Sensu — Business Intelligence, Big Data & Artificial Intelligence",
    period: "May 2025 — January 2026",
    summary: "Postgraduate specialization in Business Intelligence, Big Data, and Artificial Intelligence.",
    highlights: [
      "Business Intelligence pipelines and Big Data architectures",
      "Applied Artificial Intelligence and data-driven decision making",
      "Analytical modeling for complex enterprise problems",
    ],
  },
  {
    institution: "Fatec Registro",
    degree: "Bachelor's Degree — Multiplatform Software Development",
    period: "February 2022 — December 2024",
    location: "Registro, São Paulo, Brazil",
    summary: "Bachelor's degree focused on multiplatform software development — backend, frontend, mobile, databases, and software engineering.",
    highlights: [
      "Software engineering, algorithms, databases, and multiplatform development",
      "Co-authored SOFIA — an AI-based software to assist in the early diagnosis of ASD",
      "Integrated post-clinical monitoring platform for rehabilitated chemical dependents",
    ],
  },
  {
    institution: "ETEC Professor André Bogas",
    degree: "Integrated High School + Technical Course in Business Administration",
    period: "February 2019 — December 2021",
    location: "Registro, São Paulo, Brazil",
    summary: "Integrated high school program combined with a technical course focused on business administration fundamentals.",
    highlights: [
      "Business administration fundamentals and management",
      "Communication, teamwork, and structured problem solving",
      "Early foundations for a career bridging business and technology",
    ],
  },
];

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

export const skillCategories = [
  {
    title: "Backend & API Engineering",
    description: "The languages, frameworks, and tools I use to build reliable APIs, microservices, and backend services.",
    skills: ["Java", "Spring Boot", "Spring Security", "Spring WebFlux", "Node.js", "TypeScript", "REST APIs", "GraphQL", "OpenFeign", "OAuth 2.0", "JWT", "WebSocket", "Swagger", "Clean Code", "Hexagonal Architecture", "Microservices"],
  },
  {
    title: "Frontend & Product Experience",
    description: "The stack I use to build modern, performant, and accessible interfaces for web products.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Atomic Design", "Storybook", "SEO"],
  },
  {
    title: "Data & Messaging",
    description: "The storage, migration, and messaging technologies I use to keep systems consistent and event-driven.",
    skills: ["PostgreSQL", "MongoDB", "AWS Aurora", "H2 Database", "Flyway", "Apache Kafka", "RabbitMQ", "ActiveMQ Artemis", "SQS"],
  },
  {
    title: "Cloud, DevOps & Delivery",
    description: "The cloud and delivery tooling I use to deploy, secure, and operate applications in production.",
    skills: ["AWS", "AWS EC2", "AWS Lambda", "AWS Cognito", "AWS API Gateway", "AWS Parameter Store", "AWS SNS", "Cloudflare Workers", "Docker", "CI/CD", "Jenkins", "Serverless"],
  },
  {
    title: "Testing, Tooling & Methodologies",
    description: "The quality, collaboration, and productivity tools I rely on to ship with confidence.",
    skills: ["Jest", "Vitest", "JUnit", "Mockito", "Git", "Scrum", "Kanban", "Trello", "Strategic Planning"],
  },
];
