import type { Translation } from "./types";

export const en: Translation = {
  locale: "en",
  htmlLang: "en",
  role: "Full Stack Engineer",
  roleHighlightWord: "Engineer",
  tagline:
    "I am a Software Developer with expertise in backend development, Java Spring Boot, REST APIs, and microservices, specializing in cloud-based solutions and scalable architectures.",
  heroAvailable: "Available for New Opportunities",
  heroViewProjects: "View Projects",
  heroResume: "Resume",
  stats: [
    { value: 20, suffix: "+", label: "Projects Delivered" },
    { value: 40, suffix: "K+", label: "Organic Leads Generated" },
    { value: 95, suffix: "%", label: "Test Coverage" },
    { value: 30, suffix: "%", label: "Results Increase" },
  ],
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    resume: "Resume",
    heroAria: "Go to hero section",
    toggleMenu: "Toggle menu",
  },
  about: {
    label: "Profile",
    titleLead: "About",
    titleHighlight: "Amanda",
    summary:
      "Full Stack Engineer focused on backend reliability, clean architecture, and cloud-based solutions — currently building in Portugal.",
    softSkillsTitle: "Soft Skills",
    softSkillsSubtitle: (count) => `${count} strengths`,
    softSkills: [
      "Strategic Planning",
      "Agile Collaboration",
      "Cross-functional Teamwork",
      "Problem Solving",
      "Mentoring & Teaching",
      "Clear Communication",
      "Attention to Detail",
      "Adaptability",
    ],
    languagesTitle: "Languages",
    languagesSubtitle: (count) => `${count} spoken`,
    languages: [
      { name: "Portuguese", level: "Native", proficiency: 100 },
      { name: "English", level: "Professional Working", proficiency: 85 },
      { name: "French", level: "Limited Working", proficiency: 40 },
    ],
    githubTitle: "GitHub Activity",
    githubSubtitle: "Last year of contributions",
  },
  experience: {
    label: "Journey",
    titleLead: "Professional",
    titleHighlight: "Experience",
    description:
      "From customer-facing operations to teaching and marketing, and onward into backend engineering, full-stack development, and cloud-based architectures — every chapter has shaped how I build reliable, user-focused software.",
    metaWork: "Experience",
    metaEducation: "Education",
    flipChapterPrefix: "And a new",
    flipChapterSuffix: "ahead",
    flipChapterWords: ["adventure", "chapter", "journey"],
    items: [
      {
        company: "tns",
        role: "Full Stack Developer II",
        period: "January 2026 - Present",
        type: "work",
        summary:
          "Structuring and developing lead generation landing pages for the company's app launch, with A/B testing and performance-focused delivery.",
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
        summary:
          "Developed applications in React and TypeScript using Atomic Design architecture, collaborating with Marketing and Sales to enhance the B2B customer experience.",
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
        summary:
          "Maintain RESTful and GraphQL APIs with Clean Code architecture in Node.js and TypeScript while delivering polished frontend microcomponents.",
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
        summary:
          "Contributed to the development of an Internal Development Platform (IDP) solution, primarily using Java Spring Boot, REST APIs, microservices, Clean Code, and Hexagonal Architecture.",
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
    ],
  },
  education: {
    label: "Academic Path",
    titleLead: "Academic",
    titleHighlight: "Journey",
    description:
      "From an integrated technical high school to a Bachelor's in Multiplatform Software Development and a postgraduate specialization in Big Data & AI — a continuous commitment to learning and technical depth.",
    stepLabel: "Step",
    latestLabel: "Latest",
    items: [
      {
        institution: "Faculdade Focus",
        degree: "Postgraduate Lato Sensu — Business Intelligence, Big Data & Artificial Intelligence",
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
        summary:
          "Bachelor's degree focused on multiplatform software development — backend, frontend, mobile, databases, and software engineering.",
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
        summary:
          "Integrated high school program combined with a technical course focused on business administration fundamentals.",
        highlights: [
          "Business administration fundamentals and management",
          "Communication, teamwork, and structured problem solving",
          "Early foundations for a career bridging business and technology",
        ],
      },
    ],
  },
  certifications: {
    label: "Credentials",
    titleLead: "Certifications &",
    titleHighlight: "Accreditations",
    description:
      "Continuous learning across cloud platforms, backend engineering, and messaging — with AWS Certified Developer planned next.",
    categoryLabels: { cloud: "Cloud", backend: "Backend" },
    items: [
      {
        name: "AWS Certified Cloud Practitioner Exam Training [New]",
        issuer: "Amazon Web Services",
        year: "2023",
        category: "cloud",
      },
      {
        name: "AWS Partner: Cloud Economics Accreditation",
        issuer: "Amazon Web Services",
        year: "2023",
        category: "cloud",
      },
      {
        name: "AWS Partner: Sales Accreditation (Business)",
        issuer: "Amazon Web Services",
        year: "2023",
        category: "cloud",
      },
      {
        name: "RabbitMQ: Messaging with Java, Spring Boot and Spring MVC",
        issuer: "Udemy",
        category: "backend",
      },
      {
        name: "The Complete Java Certification Course",
        issuer: "Udemy",
        category: "backend",
      },
    ],
  },
  projects: {
    label: "Portfolio",
    titleLead: "Featured",
    titleHighlight: "Work",
    description:
      "Full-stack products, backend systems, and custom web solutions spanning APIs, databases, UX, cloud integrations, and production infrastructure.",
    filterAll: "All",
    sourceCode: "Source Code",
    liveDemo: "Live Demo",
    exploreMore: "Explore more repositories",
    viewGallery: "View gallery",
    viewImage: "View image",
    noPreview: "> No preview available",
  },
  skills: {
    label: "Expertise",
    titleLead: "Technical",
    titleHighlight: "Stack",
    description:
      "The technologies I reach for most often when building backend APIs, full-stack products, cloud-based infrastructure, and reliable delivery pipelines.",
    technologiesSuffix: "technologies",
    categories: [
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
    ],
  },
  contact: {
    label: "Connect",
    titleLead: "Get in",
    titleHighlight: "Touch",
    description:
      "Open to full-stack, backend, and frontend engineering opportunities, as well as thoughtful collaborations and freelance projects.",
    buildHeading: "Let's Build Something",
    buildDescription:
      "If you're hiring for full-stack, backend, or cloud-oriented engineering work, I'd love to talk. I'm also open to freelance projects, thoughtful collaborations, and open-source conversations.",
    reasons: [
      { key: "Hiring", label: "Hiring" },
      { key: "Collaboration", label: "Collaboration" },
      { key: "Open Source", label: "Open Source" },
      { key: "Other", label: "Other" },
    ],
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      reasonLabel: "Reason",
      messageLabel: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "Tell me about the opportunity or idea...",
      sendHeading: "Send a Message",
      sendDescription:
        "Share the role, team, problem space, or product idea and I'll reply with context that's actually useful.",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      securityNote: (email) =>
        `Messages are sent securely to ${email} with your email set as the reply-to.`,
      availableLabel: "Available for new opportunities",
      downloadResume: "Download Resume",
    },
    toasts: {
      reviewTitle: "Please review the form",
      reviewFallback: "Check the highlighted fields and try again.",
      unableTitle: "Unable to send your message",
      unableDefault: "Unable to send your message right now.",
      timeout: "The request took too long. Please try again.",
      successTitle: "Message sent",
      successDescription: "Thanks for reaching out. I will get back to you soon.",
    },
  },
  footer: {
    roleNote: "Open to full-stack, backend, and frontend engineering roles.",
    downloadResume: "Download Resume",
    builtWith: "Built with Next.js & Tailwind",
  },
  languageToggle: {
    label: "Change language",
    options: [
      { code: "en", label: "English", nativeLabel: "English" },
      { code: "pt", label: "Portuguese", nativeLabel: "Português" },
      { code: "fr", label: "French", nativeLabel: "Français" },
    ],
  },
  themeToggle: {
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
  },
};
