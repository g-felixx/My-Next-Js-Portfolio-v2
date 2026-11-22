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
  resumeUrl: "/cv/Amanda Castro CV - Full Stack Engineer EN.pdf",
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
    latest: "Latest",
    earlier: "Earlier roles",
    showMore: "Show more",
    showLess: "Show less",
    prev: "Previous role",
    next: "Next role",
    timelineLabel: "Career timeline",
    dotLabel: (n, total) => `Go to role ${n} of ${total}`,
    items: [
      {
        company: "YDUQS",
        role: "Mid-level Full Stack Developer",
        period: "June 2026 - Present",
        type: "work",
        summary:
          "Working in an Acceleration cell, taking part in planning, architecture, and continuous delivery of new applications — 4 strategic projects shipped from scratch to deploy, focused on performance, code quality, and advanced AI.",
        bullets: [
          "Full stack and AI engineering with Next.js, React, TypeScript, and Python, building microservices and GenAI/LLM ecosystems with LangGraph.",
          "Implemented a multimodal voice agent using Gemini, with an internal abstraction layer on Databricks and production on AWS Bedrock + AWS Prompt Manager.",
          "Built and extended a chatbot using MCP (Model Context Protocol) and a RAG architecture for student recommendation, acquisition, and enrollment, integrated asynchronously with the website and synchronously with WhatsApp via Salesforce.",
          "Provisioned the entire AWS infrastructure with Terraform: ECS, EC2, Lambda, API Gateway, RDS, S3, Route 53, and WAF.",
          "Modeled and managed SQL (PostgreSQL on AWS RDS) and NoSQL (MongoDB Atlas) databases.",
          "Created new repositories and CI/CD pipelines with Quality Gates, enforcing rigorous unit and integration test coverage.",
          "Take part in technical refinement of requirements, facilitate agile ceremonies (Kanban/Scrum), run meetings and executive presentations, and support junior developers day to day.",
        ],
      },
      {
        company: "tns",
        role: "Full Stack Developer II",
        period: "January 2026 - June 2026",
        type: "work",
        summary:
          "Building content management platforms feeding web and mobile apps, a news portal with infinite scroll, and lead-generation landing pages — all on Next.js with a strong focus on speed.",
        bullets: [
          "Designed and built content management platforms feeding both web and mobile apps, owning backend and frontend layers.",
          "Developed a news portal with infinite scroll on Next.js, focused on perceived speed and Core Web Vitals.",
          "Stack predominantly Next.js, with consistent attention to load performance and rendering strategy.",
          "Structured and developed lead generation landing pages for the company's app launch.",
          "Drove 40,000 organic leads with nearly 1 minute of retention and a 30% increase in results.",
          "Ran A/B tests to continuously improve website performance and conversion.",
          "Built an automated customer support system with Jira-style ticket triage, AI-generated batch responses, and an approval flow for executing actions on external platforms — including reader activation, deactivation, and profile updates.",
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
        period: "March 2025 - May 2026",
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
      {
        company: "Freelance",
        role: "Freelance Web Developer",
        period: "October 2022 - Present",
        type: "work",
        summary:
          "Complete web solutions, front end to back end, for micro businesses — over 20 success stories.",
        bullets: [
          "Built custom websites and platforms with React.js, Node.js, Next.js, and MongoDB, with intuitive, high-performance interfaces.",
          "Implemented e-commerce features such as shopping cart, filters, search, and dynamic product management.",
          "Developed RESTful APIs for data integration and process automation, with secure authentication and real-time updates.",
          "Optimized SEO, added animations, and configured servers, DNS, and Google Search Console to improve online visibility.",
          "Managed academic and professional projects focused on UX/UI, neural networks, and AI, such as SOFIA, an app for early ASD diagnosis.",
          "Biggest achievement: the One Help Informática website, with Google Reviews API integration (5-star reviews updated automatically) and an interface to manage the catalog and news.",
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
        institution: "ETEC Professor André Bogasian",
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
      "Full-stack products, institutional websites, and AI-driven applications spanning APIs, databases, UX, cloud integrations, and production infrastructure.",
    filterAll: "All",
    sourceCode: "Source Code",
    liveDemo: "Live Demo",
    exploreMore: "Explore more repositories",
    viewGallery: "View gallery",
    viewImage: "View image",
    noPreview: "> No preview available",
    featured: "Latest project",
    more: "More projects",
    trackLabel: "More projects, scroll to move sideways",
    categoryLabels: {
      "ai-web-app": "AI Web App",
      institutional: "Institutional Website",
      "product-showcase": "Product Showcase",
      ecommerce: "E-commerce Platform",
      "ai-mobile-app": "AI Mobile App",
      "saas-platform": "SaaS Platform",
      "mobile-app": "Mobile App",
    },
    items: [
      {
        slug: "digital-menu-platform",
        title: "Digital Menu Platform",
        summary: "Customer storefront and merchant dashboard with async orders, payments, and metrics.",
        description:
          "End-to-end digital menu platform with two surfaces: a customer-facing storefront (menu browsing and ordering) and a merchant dashboard (product CRUD, menu management, appearance customization, order queue, payments, notifications, and business metrics). The order lifecycle covers cart → checkout → queue → fulfillment, with RabbitMQ-driven async processing, an integrated payment gateway, and event hooks into external conversion platforms. Per-merchant analytics are tied to the same order pipeline.",
        impact:
          "In progress: a complete multi-merchant product where every order flows through a single async pipeline feeding the queue, payments, notifications, and analytics.",
        role: "Full-stack",
        timeline: "Apr 2026 - Present",
        complexity: "RabbitMQ async order lifecycle, payment gateway, conversion events, per-merchant analytics",
      },
      {
        slug: "event-mobile-app",
        title: "Event Mobile App",
        summary: "Mobile sub-app for a real-world event inside a 50k-user newsletter app.",
        description:
          "Mobile sub-app for a real-world event embedded in a 50k-user newsletter app, with self-contained navigation, themed identity, and 7 feature screens (hub, agenda, speakers, venue, sponsors, FAQ, support). Highlights: typed REST integration with 5 resource families via React Query (custom cache config, DTO → domain mappers, payload-shape divergence handled at the client); a date-driven \"Live Now\" mode that replaces the ticket CTA on event day with a real-time block filtering sessions by the current full hour (3 render variants); slide-up bottom sheets with hand-rolled Animated transitions; a Google Maps embed via WebView with no API key; full dark mode and accessibility coverage.",
        impact:
          "Delivered the full event experience to a 50k-user base, with an automatic live mode on event day and a map that needs no API key.",
        role: "Mobile development and API integration",
        timeline: "May 2026 - Jun 2026",
        complexity: "Typed React Query data layer, date-driven \"Live Now\" mode, custom animations, Cloudflare Workers backend",
      },
      {
        slug: "dolphin-talk",
        title: "Dolphin Talk",
        summary: "Mobile-first English pronunciation training with instant Azure-powered feedback.",
        description:
          "Mobile-first web app where Brazilian students practice English pronunciation in a gamified flow. Audio is recorded via the Web Audio API, sent through a Next.js Route Handler acting as a BFF that proxies Azure Cognitive Services Pronunciation Assessment, and returned with an overall score plus word-by-word error tagging (Omission, Insertion, Mispronunciation). Includes auth with HTTP-only cookie sessions, exercise history with score review, paid plans with credit tracking and inactive states, payment history, profile, and Supabase Storage signed URLs for private media.",
        impact:
          "End-to-end SaaS-style language product: BFF architecture, audio capture pipeline, third-party AI integration, and full auth + plan lifecycle.",
        role: "Frontend, BFF design, and AI integration",
        timeline: "Mar 2026 - Apr 2026",
        complexity: "Audio capture pipeline, Azure Speech integration, signed-URL storage, credit-based plan logic",
      },
      {
        slug: "catelao-automotive",
        title: "Catelão Automotive",
        summary: "Institutional site for a Brazilian automotive parts distributor in Vale do Ribeira.",
        description:
          "Institutional website for an automotive parts distributor based in Registro-SP, serving mechanics and retailers for over a decade. Includes a responsive hero (desktop/mobile variants), about section, interactive brand carousel, dedicated 'Empresa' and 'Fornecedores' pages with a side drawer revealing products per manufacturer, paginated 'Novidades' news section with dynamic [slug] routes, and a contact form with Zod validation (formatted phone/WhatsApp, Brazilian state selector) submitting through a Next.js API route powered by Nodemailer. Floating WhatsApp button, custom Redonda typography via next/font, JSON-LD, and SEO-friendly metadata.",
        impact:
          "Established the company's online presence with a modern stack, full SEO setup, and a lead-capture contact flow integrated with transactional email.",
        role: "Full-stack, design, and SEO",
        timeline: "Dec 2025 - Feb 2026",
        complexity: "Brand carousel, supplier-product drawer, dynamic blog routes, transactional email, validated forms",
      },
      {
        slug: "multpoint",
        title: "MultPoint Automotive",
        summary: "Product catalog for a Brazilian fuel-injection components manufacturer.",
        description:
          "Product showcase for MultPoint, specializing in fuel injection components (injector valves, repair kits, gaskets, connectors). Catalog with advanced search and filters by product line, automaker, model, and year; per-product pages with technical specs and image galleries; hero and product-line carousels on the home; a representatives section across Brazil with interactive Google Maps; and a corporate news/blog. Categories include Magneti Marelli, Bosch, Delphi, Arla, motorcycle injectors, repair kits, gaskets, and connectors. Optimized image delivery via CDN with infinite-loop carousels powered by Embla.",
        impact:
          "Surfaced a complex multi-axis catalog (line × maker × model × year) in a fast, browsable interface for B2B buyers.",
        role: "Frontend implementation and catalog architecture",
        timeline: "Jun 2025 - Jan 2026",
        complexity: "Multi-axis filtering, Google Maps integration, hero/category carousels, image-heavy CDN delivery",
      },
      {
        slug: "one-help",
        title: "One Help Informática",
        summary: "Product catalog and news platform for a Brazilian IT services company.",
        description:
          "Product and service showcase site for One Help Informática featuring a news blog, product catalog with search bar and filters, individual product pages, and an admin interface for managing products and articles. Integrated the Google Reviews API to automatically pull in reviews rated 5 stars or higher. DNS, server, and Google Search Console fully configured for organic discoverability.",
        impact:
          "Delivered a full catalog, admin CMS, and reviews platform that has been live and driving local discovery for the business.",
        role: "Full-stack: frontend, backend, infrastructure, SEO",
        timeline: "Oct 2024 - Jan 2025",
        complexity: "Admin CMS, Google Reviews API integration, MongoDB modeling, DNS and server configuration",
      },
      {
        slug: "sofia",
        title: "SOFIA — ASD Pre-diagnosis",
        summary: "Mobile app combining a CNN with screening tools to support early ASD diagnosis.",
        description:
          "Mobile application designed to assist doctors with the early diagnosis of Autism Spectrum Disorder in children. The core feature is a Convolutional Neural Network that analyzes videos of child behavior, paired with age-appropriate screening tools applied within the app. Final results combine the AI inference with the screening protocol, presented as graphics and comparisons. Backed by Spring Boot and Flask services and published as a Qualis B2 paper in 2024.",
        impact:
          "Academic and practical contribution to early ASD diagnosis — published as a Qualis B2 paper in 2024.",
        role: "Backend, AI integration, and product design",
        timeline: "Jul 2023 - Dec 2024",
        complexity: "CNN training and inference pipeline, age-segmented screening logic, Kotlin/Spring stack integration",
      },
    ],
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
        title: "Cloud, DevOps & Delivery",
        description: "The cloud and delivery tooling I use to deploy, secure, and operate applications in production.",
        skills: ["AWS", "AWS EC2", "AWS Lambda", "AWS Cognito", "AWS API Gateway", "AWS Parameter Store", "AWS SNS", "Cloudflare Workers", "Docker", "CI/CD", "Jenkins", "Serverless"],
      },
      {
        title: "Data & Messaging",
        description: "The storage, migration, and messaging technologies I use to keep systems consistent and event-driven.",
        skills: ["PostgreSQL", "MongoDB", "AWS Aurora", "H2 Database", "Flyway", "Apache Kafka", "RabbitMQ", "ActiveMQ Artemis", "SQS"],
      },
      {
        title: "Frontend & Product Experience",
        description: "The stack I use to build modern, performant, and accessible interfaces for web products.",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Atomic Design", "Storybook", "SEO"],
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
  prompt: {
    title: "Ask my résumé",
    badge: "RAG",
    inputLabel: "Ask a question about Amanda's experience",
    inputPlaceholder: "Ask about my experience, projects or stack…",
    placeholders: [
      "Ask about my experience…",
      "Ask how my profile fits your job opening…",
      "Ask what I've built with RAG and LLMs…",
      "Ask about my projects and stack…",
    ],
    send: "Send",
    hint: "Answers are grounded in my résumé · Enter to send",
    suggestions: [
      "Tell me about your experience",
      "How does your profile fit my job opening?",
      "What have you built with RAG and LLMs?",
    ],
    thinking: ["Searching my résumé…", "Reading the relevant experience…", "Writing the answer…"],
    demo: [
      {
        question: "What have you built with RAG and LLMs?",
        answer:
          "At YDUQS I built and extended a chatbot using MCP and a RAG architecture for student recommendation, acquisition and enrollment, integrated with the website and with WhatsApp via Salesforce. I also worked on GenAI/LLM ecosystems with LangGraph.",
        source: "Experience · YDUQS",
      },
      {
        question: "How does your profile fit a Full Stack role?",
        answer:
          "I've shipped end to end: Next.js, React and TypeScript on the front, Java Spring Boot, Node and Python on the back, and AWS infrastructure with Terraform. At tns, Next.js landing pages drove 40,000 organic leads.",
        source: "Experience · tns, YDUQS",
      },
    ],
    sourceLabel: "Source",
    you: "You",
    assistant: "Amanda's AI",
    newChat: "New chat",
    error: "Something went wrong. Please try again.",
    mock: {
      answer:
        "Demo mode: the RAG backend isn't connected yet, so this is a placeholder reply. Soon, answers will come straight from my résumé.",
      source: "demo",
    },
    callout: "I built this AI with RAG",
    marquee: { label: "Stack I work with", pause: "Pause", play: "Play" },
    cta: {
      eyebrow: "Still deciding?",
      title: "Not sure if I'm the right fit?",
      description:
        "Paste your job description into my AI and see how my experience matches — answers come straight from my résumé.",
      button: "Ask my AI",
    },
    mascot: {
      askMe: "Ask my AI",
      ariaLabel: "Scroll to the top and ask the AI about my résumé",
      generic: "Psst… ask my AI at the top!",
      sections: {
        about: "Want to know more about me? Ask the AI up top!",
        experience: "Every role here is searchable. Ask the AI!",
        education: "My studies are in the AI's knowledge base too.",
        certifications: "Curious about a certification? Just ask!",
        projects: "Ask the AI how I built any of these.",
        skills: "Ask which of these skills fits your role.",
        contact: "Ready to talk? Send me a message!",
      },
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
