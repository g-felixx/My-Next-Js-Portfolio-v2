import type { Translation } from "./types";

export const pt: Translation = {
  locale: "pt",
  htmlLang: "pt",
  role: "Engenheira Full Stack",
  roleHighlightWord: "Stack",
  tagline:
    "Sou Desenvolvedora de Software com experiência em desenvolvimento backend, Java Spring Boot, APIs REST e microsserviços, especializada em soluções baseadas em nuvem e arquiteturas escaláveis.",
  heroAvailable: "Disponível para Novas Oportunidades",
  heroViewProjects: "Ver Projetos",
  heroResume: "Currículo",
  stats: [
    { value: 20, suffix: "+", label: "Projetos Entregues" },
    { value: 40, suffix: "K+", label: "Leads Orgânicos Gerados" },
    { value: 95, suffix: "%", label: "Cobertura de Testes" },
    { value: 30, suffix: "%", label: "Aumento de Resultados" },
  ],
  nav: {
    about: "Sobre",
    experience: "Experiência",
    education: "Formação",
    certifications: "Certificações",
    projects: "Projetos",
    skills: "Skills",
    contact: "Contato",
    resume: "Currículo",
    heroAria: "Ir para o topo",
    toggleMenu: "Abrir menu",
  },
  about: {
    label: "Perfil",
    titleLead: "Sobre a",
    titleHighlight: "Amanda",
    summary:
      "Engenheira Full Stack focada em confiabilidade de backend, arquitetura limpa e soluções em nuvem — atualmente construindo em Portugal.",
    softSkillsTitle: "Habilidades Comportamentais",
    softSkillsSubtitle: (count) => `${count} pontos fortes`,
    softSkills: [
      "Planejamento Estratégico",
      "Colaboração Ágil",
      "Trabalho em Equipe Multidisciplinar",
      "Resolução de Problemas",
      "Mentoria e Ensino",
      "Comunicação Clara",
      "Atenção aos Detalhes",
      "Adaptabilidade",
    ],
    languagesTitle: "Idiomas",
    languagesSubtitle: (count) => `${count} falados`,
    languages: [
      { name: "Português", level: "Nativo", proficiency: 100 },
      { name: "Inglês", level: "Profissional", proficiency: 85 },
      { name: "Francês", level: "Básico", proficiency: 40 },
    ],
    githubTitle: "Atividade no GitHub",
    githubSubtitle: "Último ano de contribuições",
  },
  experience: {
    label: "Trajetória",
    titleLead: "Experiência",
    titleHighlight: "Profissional",
    description:
      "De funções voltadas ao cliente ao ensino e marketing, e daí ao desenvolvimento backend, full-stack e arquiteturas em nuvem — cada capítulo moldou a forma como construo software confiável e centrado no usuário.",
    metaWork: "Experiência",
    metaEducation: "Formação",
    flipChapterPrefix: "E uma nova",
    flipChapterSuffix: "pela frente",
    flipChapterWords: ["aventura", "etapa", "jornada"],
    items: [
      {
        company: "tns",
        role: "Desenvolvedora Full Stack II",
        period: "Janeiro 2026 - Atual",
        type: "work",
        summary:
          "Estruturação e desenvolvimento de landing pages de geração de leads para o lançamento do app da empresa, com testes A/B e entrega focada em performance.",
        bullets: [
          "Estruturei e desenvolvi landing pages de geração de leads para o lançamento do app da empresa.",
          "Gerei 40.000 leads orgânicos com quase 1 minuto de retenção e 30% de aumento nos resultados.",
          "Conduzi testes A/B para melhorar continuamente performance e conversão do site.",
        ],
      },
      {
        company: "tns",
        role: "Desenvolvedora Full Stack I",
        period: "Abril 2025 - Janeiro 2026",
        type: "work",
        summary:
          "Desenvolvimento de aplicações em React e TypeScript com arquitetura Atomic Design, em colaboração com Marketing e Vendas para aprimorar a experiência B2B.",
        bullets: [
          "Desenvolvimento de aplicações em React e TypeScript usando arquitetura Atomic Design.",
          "Colaboração com os departamentos de Marketing e Vendas para aprimorar a experiência do cliente B2B.",
          "Experiência com serviços serverless como AWS Lambda e Cloudflare Workers.",
        ],
      },
      {
        company: "CapLink",
        role: "Desenvolvedora Full Stack",
        period: "Março 2025 - Atual",
        type: "work",
        summary:
          "Manutenção de APIs REST e GraphQL com arquitetura Clean Code em Node.js e TypeScript, entregando microcomponentes de frontend cuidadosamente construídos.",
        bullets: [
          "Manutenção de APIs REST e GraphQL com arquitetura Clean Code em Node.js e TypeScript.",
          "Otimização de queries PostgreSQL e cobertura automatizada de testes acima de 80% com Jest e Vitest.",
          "Entrega de microcomponentes de frontend em React e documentação com Storybook.",
          "Trabalho com contêineres Docker e metodologias ágeis como Scrum e Kanban.",
        ],
      },
      {
        company: "Compass UOL",
        role: "Desenvolvedora Back End Java Júnior",
        period: "Junho 2024 - Janeiro 2025",
        type: "work",
        summary:
          "Contribuí para o desenvolvimento de uma solução de Plataforma de Desenvolvimento Interna (IDP), principalmente usando Java Spring Boot, APIs REST, microsserviços, Clean Code e Arquitetura Hexagonal.",
        bullets: [
          "Desenvolvi arquiteturas orientadas a eventos e microsserviços com processamento assíncrono usando WebFlux, WebSocket e RabbitMQ.",
          "Implantei pipelines de CI/CD e configurei contêineres Docker para executar aplicações, utilizando imagens Docker para APIs.",
          "Implementei mecanismos de autorização e autenticação usando OAuth 2.0, Spring Security e JWT.",
          "Projetei e executei suítes abrangentes de testes (unitários, integração, persistência e sistema) para garantir 95% de cobertura e confiabilidade do sistema.",
          "Gerenciei migrações de banco de dados com Flyway e garanti compatibilidade entre consultas PostgreSQL e AWS Aurora.",
          "Integrei aplicações com serviços AWS como Cognito, Lambda, SQS, SNS, API Gateway, Parameter Store e EC2.",
          "Implementei uma solução para consumir o progresso de builds do Jenkins via múltiplos WebSockets, habilitando atualizações em tempo real para usuários inscritos em tópicos específicos com gerenciamento de chaves JWT baseado em sessão, logging assíncrono e execução multi-thread.",
        ],
      },
    ],
  },
  education: {
    label: "Trajetória Acadêmica",
    titleLead: "Jornada",
    titleHighlight: "Acadêmica",
    description:
      "Do ensino médio técnico integrado ao Bacharelado em Desenvolvimento de Software Multiplataforma e à pós-graduação em Big Data e IA — um compromisso contínuo com aprendizado e profundidade técnica.",
    stepLabel: "Etapa",
    latestLabel: "Atual",
    items: [
      {
        institution: "Faculdade Focus",
        degree: "Pós-graduação Lato Sensu — Business Intelligence, Big Data e Inteligência Artificial",
        period: "Maio 2025 — Janeiro 2026",
        summary:
          "Pós-graduação em Business Intelligence, Big Data e Inteligência Artificial.",
        highlights: [
          "Pipelines de Business Intelligence e arquiteturas de Big Data",
          "Inteligência Artificial aplicada e tomada de decisão baseada em dados",
          "Modelagem analítica para problemas empresariais complexos",
        ],
      },
      {
        institution: "Fatec Registro",
        degree: "Bacharelado — Desenvolvimento de Software Multiplataforma",
        period: "Fevereiro 2022 — Dezembro 2024",
        location: "Registro, São Paulo, Brasil",
        summary:
          "Bacharelado focado em desenvolvimento de software multiplataforma — backend, frontend, mobile, bancos de dados e engenharia de software.",
        highlights: [
          "Engenharia de software, algoritmos, bancos de dados e desenvolvimento multiplataforma",
          "Coautora do SOFIA — software baseado em IA para auxiliar no diagnóstico precoce do TEA",
          "Plataforma integrada de monitoramento pós-clínico para dependentes químicos reabilitados",
        ],
      },
      {
        institution: "ETEC Professor André Bogas",
        degree: "Ensino Médio Integrado + Técnico em Administração",
        period: "Fevereiro 2019 — Dezembro 2021",
        location: "Registro, São Paulo, Brasil",
        summary:
          "Ensino médio integrado combinado com curso técnico focado em fundamentos de administração.",
        highlights: [
          "Fundamentos de administração e gestão",
          "Comunicação, trabalho em equipe e resolução estruturada de problemas",
          "Bases iniciais para uma carreira entre negócios e tecnologia",
        ],
      },
    ],
  },
  certifications: {
    label: "Credenciais",
    titleLead: "Certificações e",
    titleHighlight: "Credenciamentos",
    description:
      "Aprendizado contínuo em plataformas de nuvem, engenharia de backend e mensageria — com a AWS Certified Developer planejada a seguir.",
    categoryLabels: { cloud: "Nuvem", backend: "Backend" },
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
    label: "Portfólio",
    titleLead: "Projetos em",
    titleHighlight: "Destaque",
    description:
      "Produtos full-stack, sistemas backend e soluções web personalizadas abrangendo APIs, bancos de dados, UX, integrações em nuvem e infraestrutura de produção.",
    filterAll: "Todos",
    sourceCode: "Código Fonte",
    liveDemo: "Ver Online",
    exploreMore: "Explorar mais repositórios",
    viewGallery: "Ver galeria",
    viewImage: "Ver imagem",
    noPreview: "> Sem pré-visualização",
  },
  skills: {
    label: "Especialidade",
    titleLead: "Stack",
    titleHighlight: "Técnica",
    description:
      "As tecnologias que mais uso ao construir APIs backend, produtos full-stack, infraestrutura em nuvem e pipelines de entrega confiáveis.",
    technologiesSuffix: "tecnologias",
    categories: [
      {
        title: "Backend e Engenharia de APIs",
        description:
          "As linguagens, frameworks e ferramentas que uso para construir APIs confiáveis, microsserviços e serviços de backend.",
        skills: ["Java", "Spring Boot", "Spring Security", "Spring WebFlux", "Node.js", "TypeScript", "APIs REST", "GraphQL", "OpenFeign", "OAuth 2.0", "JWT", "WebSocket", "Swagger", "Clean Code", "Arquitetura Hexagonal", "Microsserviços"],
      },
      {
        title: "Frontend e Experiência de Produto",
        description:
          "A stack que uso para construir interfaces modernas, performáticas e acessíveis para produtos web.",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Atomic Design", "Storybook", "SEO"],
      },
      {
        title: "Dados e Mensageria",
        description:
          "As tecnologias de armazenamento, migração e mensageria que uso para manter sistemas consistentes e orientados a eventos.",
        skills: ["PostgreSQL", "MongoDB", "AWS Aurora", "H2 Database", "Flyway", "Apache Kafka", "RabbitMQ", "ActiveMQ Artemis", "SQS"],
      },
      {
        title: "Nuvem, DevOps e Entrega",
        description:
          "As ferramentas de cloud e entrega que uso para implantar, proteger e operar aplicações em produção.",
        skills: ["AWS", "AWS EC2", "AWS Lambda", "AWS Cognito", "AWS API Gateway", "AWS Parameter Store", "AWS SNS", "Cloudflare Workers", "Docker", "CI/CD", "Jenkins", "Serverless"],
      },
      {
        title: "Testes, Ferramentas e Metodologias",
        description:
          "As ferramentas de qualidade, colaboração e produtividade que uso para entregar com confiança.",
        skills: ["Jest", "Vitest", "JUnit", "Mockito", "Git", "Scrum", "Kanban", "Trello", "Planejamento Estratégico"],
      },
    ],
  },
  contact: {
    label: "Conectar",
    titleLead: "Entre em",
    titleHighlight: "Contato",
    description:
      "Aberta a oportunidades em full-stack, backend e frontend, além de colaborações e projetos freelance.",
    buildHeading: "Vamos Construir Algo",
    buildDescription:
      "Se você está contratando para trabalho full-stack, backend ou orientado a cloud, eu adoraria conversar. Também estou aberta a projetos freelance, colaborações e conversas sobre open-source.",
    reasons: [
      { key: "Hiring", label: "Contratação" },
      { key: "Collaboration", label: "Colaboração" },
      { key: "Open Source", label: "Open Source" },
      { key: "Other", label: "Outro" },
    ],
    form: {
      nameLabel: "Nome",
      emailLabel: "Email",
      reasonLabel: "Motivo",
      messageLabel: "Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "voce@empresa.com",
      messagePlaceholder: "Conte-me sobre a oportunidade ou ideia...",
      sendHeading: "Enviar uma Mensagem",
      sendDescription:
        "Compartilhe a vaga, time, problema ou ideia e eu respondo com um contexto que seja realmente útil.",
      sendButton: "Enviar Mensagem",
      sendingButton: "Enviando...",
      securityNote: (email) =>
        `Mensagens são enviadas com segurança para ${email} com seu email como reply-to.`,
      availableLabel: "Disponível para novas oportunidades",
      downloadResume: "Baixar Currículo",
    },
    toasts: {
      reviewTitle: "Por favor, revise o formulário",
      reviewFallback: "Verifique os campos destacados e tente novamente.",
      unableTitle: "Não foi possível enviar sua mensagem",
      unableDefault: "Não foi possível enviar sua mensagem no momento.",
      timeout: "A requisição demorou muito. Tente novamente.",
      successTitle: "Mensagem enviada",
      successDescription: "Obrigada por entrar em contato. Retornarei em breve.",
    },
  },
  footer: {
    roleNote: "Aberta a vagas de engenharia full-stack, backend e frontend.",
    downloadResume: "Baixar Currículo",
    builtWith: "Feito com Next.js e Tailwind",
  },
  languageToggle: {
    label: "Alterar idioma",
    options: [
      { code: "en", label: "Inglês", nativeLabel: "English" },
      { code: "pt", label: "Português", nativeLabel: "Português" },
      { code: "fr", label: "Francês", nativeLabel: "Français" },
    ],
  },
  themeToggle: {
    toLight: "Alternar para modo claro",
    toDark: "Alternar para modo escuro",
  },
};
