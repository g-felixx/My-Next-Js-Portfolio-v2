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
  resumeUrl: "/cv/Amanda Castro CV - Full Stack Engineer.pdf",
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
        company: "YDUQS",
        role: "Desenvolvedora Full Stack Pleno",
        period: "Junho 2026 - Atual",
        type: "work",
        summary:
          "Atuo em uma célula de Aceleração, no planejamento, arquitetura e entrega contínua de novas aplicações — 4 projetos estratégicos entregues do zero ao deploy, com foco em performance, qualidade de código e IA avançada.",
        bullets: [
          "Desenvolvimento full stack e AI engineering com Next.js, React, TypeScript e Python, construindo microsserviços e ecossistemas de GenAI/LLMs com LangGraph.",
          "Implementei um agente de voz multimodal com Gemini, com abstração interna via Databricks e produção via AWS Bedrock + AWS Prompt Manager.",
          "Desenvolvi e evoluí um chatbot com MCP (Model Context Protocol) e arquitetura RAG para recomendação, captação e matrícula de alunos, integrado de forma assíncrona ao website e síncrona ao WhatsApp via Salesforce.",
          "Provisionei toda a infraestrutura AWS com Terraform: ECS, EC2, Lambda, API Gateway, RDS, S3, Route 53 e WAF.",
          "Modelagem e gestão de bancos SQL (PostgreSQL no AWS RDS) e NoSQL (MongoDB Atlas).",
          "Criei repositórios e pipelines de CI/CD com Quality Gates, garantindo cobertura rigorosa de testes unitários e de integração.",
          "Participo do refinamento técnico das demandas, facilito ritos ágeis (Kanban/Scrum), conduzo reuniões e apresentações executivas e apoio diariamente o desenvolvimento de pessoas desenvolvedoras juniores.",
        ],
      },
      {
        company: "tns",
        role: "Desenvolvedora Full Stack II",
        period: "Janeiro 2026 - Junho 2026",
        type: "work",
        summary:
          "Construindo plataformas de gerenciamento de conteúdo que alimentam web e mobile, portal de notícias com scroll infinito e landing pages de geração de leads — tudo em Next.js com forte foco em velocidade.",
        bullets: [
          "Projetei e construí plataformas de gerenciamento de conteúdo que alimentam tanto a aplicação web quanto o app mobile, atuando em backend e frontend.",
          "Desenvolvi um portal de notícias com scroll infinito em Next.js, com foco em velocidade percebida e Core Web Vitals.",
          "Stack predominantemente Next.js, com atenção constante a performance de carregamento e estratégia de renderização.",
          "Estruturei e desenvolvi landing pages de geração de leads para o lançamento do app da empresa.",
          "Gerei 40.000 leads orgânicos com quase 1 minuto de retenção e 30% de aumento nos resultados.",
          "Conduzi testes A/B para melhorar continuamente performance e conversão do site.",
          "Desenvolvi um SAC automatizado com triagem de tickets no estilo Jira, respostas em batch geradas por IA e fluxo de aprovação para execução de ações em plataformas externas — como ativação, inativação e atualização de cadastros de leitores.",
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
        period: "Março 2025 - Maio 2026",
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
      {
        company: "Freelance",
        role: "Desenvolvedora Web Freelancer",
        period: "Outubro 2022 - Atual",
        type: "work",
        summary:
          "Soluções web completas, de front-end a back-end, para micro empreendimentos — mais de 20 cases de sucesso.",
        bullets: [
          "Criação de sites e plataformas personalizadas com React.js, Node.js, Next.js e MongoDB, com interfaces intuitivas e alto desempenho.",
          "Implementação de e-commerces com carrinho, filtros, busca e gerenciamento dinâmico de produtos.",
          "Desenvolvimento de APIs RESTful para integração de dados e automação de processos, com autenticação segura e atualizações em tempo real.",
          "Otimização de SEO, animações e configuração de servidores, DNS e Google Search Console para dar visibilidade online.",
          "Gerenciamento de projetos acadêmicos e profissionais com foco em UX/UI, redes neurais e IA, como o SOFIA, app para diagnóstico precoce de TEA.",
          "Maior conquista: o site da One Help Informática, com integração à API de avaliações do Google (reviews acima de 5 estrelas atualizados automaticamente) e interface para gerenciar catálogo e notícias.",
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
      "Produtos full-stack, sites institucionais e aplicações com IA — abrangendo APIs, bancos de dados, UX, integrações em nuvem e infraestrutura de produção.",
    filterAll: "Todos",
    sourceCode: "Código Fonte",
    liveDemo: "Ver Online",
    exploreMore: "Explorar mais repositórios",
    viewGallery: "Ver galeria",
    viewImage: "Ver imagem",
    noPreview: "> Sem pré-visualização",
    categoryLabels: {
      "ai-web-app": "App Web com IA",
      institutional: "Site Institucional",
      "product-showcase": "Vitrine de Produtos",
      ecommerce: "Plataforma E-commerce",
      "ai-mobile-app": "App Mobile com IA",
      "saas-platform": "Plataforma SaaS",
      "mobile-app": "App Mobile",
    },
    items: [
      {
        slug: "digital-menu-platform",
        title: "Plataforma de Cardápio Digital",
        summary: "Vitrine para clientes e painel do lojista, com pedidos assíncronos, pagamentos e métricas.",
        description:
          "Plataforma de cardápio digital ponta a ponta com duas superfícies: a vitrine para o cliente (navegação no cardápio e pedidos) e o painel do lojista (CRUD de produtos, gestão do cardápio, personalização visual, fila de pedidos, pagamentos, notificações e métricas do negócio). O ciclo do pedido vai do carrinho ao checkout, à fila e ao atendimento, com processamento assíncrono via RabbitMQ, gateway de pagamento integrado e eventos para plataformas externas de conversão. As análises por lojista usam o mesmo pipeline de pedidos.",
        impact:
          "Em desenvolvimento: um produto multi-lojista completo, em que o pedido percorre uma única esteira assíncrona que alimenta fila, pagamentos, notificações e analytics.",
        role: "Full-stack",
        timeline: "Abr 2026 - Atual",
        complexity: "Ciclo do pedido assíncrono com RabbitMQ, gateway de pagamento, eventos de conversão, analytics por lojista",
      },
      {
        slug: "event-mobile-app",
        title: "App Mobile de Evento",
        summary: "Sub-app de um evento real dentro de um app de newsletter com 50 mil usuários.",
        description:
          "Sub-app mobile de um evento real, embutido em um app de newsletter com 50 mil usuários, com navegação própria, identidade temática e 7 telas (hub, agenda, palestrantes, local, patrocinadores, FAQ e suporte). Integração REST tipada com 5 famílias de recursos via React Query (cache configurado, mapeamento DTO → domínio e tratamento de payloads divergentes no cliente); modo \"Ao vivo\" guiado por data, que no dia do evento troca o CTA de ingresso por um bloco em tempo real filtrando as sessões da hora cheia atual (3 variações de renderização); bottom sheets com transições Animated feitas à mão; mapa do Google via WebView sem chave de API; modo escuro completo e cobertura de acessibilidade.",
        impact:
          "Entregou a experiência completa do evento para uma base de 50 mil usuários, com modo ao vivo automático no dia e sem dependência de chave de API para o mapa.",
        role: "Desenvolvimento mobile e integração com a API",
        timeline: "Mai 2026 - Jun 2026",
        complexity: "Camada de dados tipada com React Query, modo \"Ao vivo\" por data, animações customizadas, backend em Cloudflare Workers",
      },
      {
        slug: "dolphin-talk",
        title: "Dolphin Talk",
        summary: "Treino mobile-first de pronúncia em inglês com feedback instantâneo via Azure.",
        description:
          "Aplicação web mobile-first onde estudantes brasileiros praticam pronúncia em inglês de forma gamificada. O áudio é gravado pela Web Audio API, enviado a um Route Handler do Next.js que atua como BFF e faz proxy para o Azure Cognitive Services Pronunciation Assessment, retornando uma nota geral além de marcação de erros palavra por palavra (Omissão, Inserção, Pronúncia). Inclui autenticação com sessão em cookie HTTP-only, histórico de exercícios com revisão de notas, planos pagos com controle de créditos e estados inativos, histórico de pagamentos, perfil e URLs assinadas do Supabase Storage para mídia privada.",
        impact:
          "Produto SaaS de idiomas ponta a ponta: arquitetura BFF, pipeline de captura de áudio, integração com IA externa e ciclo completo de autenticação e planos.",
        role: "Frontend, design do BFF e integração com IA",
        timeline: "Mar 2026 - Abr 2026",
        complexity: "Pipeline de captura de áudio, integração Azure Speech, armazenamento com URLs assinadas, lógica de planos por crédito",
      },
      {
        slug: "catelao-automotive",
        title: "Catelão Automotive",
        summary: "Site institucional para distribuidor brasileiro de autopeças no Vale do Ribeira.",
        description:
          "Site institucional para distribuidor de autopeças sediado em Registro-SP, atendendo mecânicos e revendedores há mais de uma década. Inclui hero responsivo (variações desktop/mobile), seção 'sobre', carrossel interativo de marcas, páginas dedicadas 'Empresa' e 'Fornecedores' com drawer lateral revelando produtos por fabricante, seção 'Novidades' paginada com rotas dinâmicas [slug] e formulário de contato com validação Zod (telefone/WhatsApp formatados, seletor de estado brasileiro) enviando via API Route com Nodemailer. Botão flutuante de WhatsApp, tipografia Redonda via next/font, JSON-LD e metadata otimizada para SEO.",
        impact:
          "Estabeleceu a presença online da empresa com stack moderno, SEO completo e fluxo de captura de leads integrado com e-mail transacional.",
        role: "Full-stack, design e SEO",
        timeline: "Dez 2025 - Fev 2026",
        complexity: "Carrossel de marcas, drawer fornecedor-produto, rotas dinâmicas de blog, e-mail transacional, formulários validados",
      },
      {
        slug: "multpoint",
        title: "MultPoint Automotive",
        summary: "Catálogo de produtos para fabricante brasileiro de componentes de injeção eletrônica.",
        description:
          "Vitrine de produtos para a MultPoint, especializada em componentes de injeção eletrônica (válvulas injetoras, kits de reparo, juntas, conectores). Catálogo com busca avançada e filtros por linha, montadora, modelo e ano; páginas por produto com especificações técnicas e galerias; carrosséis de hero e linhas de produto na home; seção de representantes pelo Brasil com Google Maps interativo; e blog corporativo. As categorias incluem Magneti Marelli, Bosch, Delphi, Arla, injetores de motos, kits de reparo, juntas e conectores. Entrega de imagens otimizada via CDN com carrosséis infinitos via Embla.",
        impact:
          "Apresentou um catálogo multi-eixo complexo (linha × montadora × modelo × ano) em uma interface rápida e navegável para compradores B2B.",
        role: "Implementação frontend e arquitetura do catálogo",
        timeline: "Jun 2025 - Jan 2026",
        complexity: "Filtragem multi-eixo, integração Google Maps, carrosséis hero/categoria, entrega de imagens via CDN",
      },
      {
        slug: "one-help",
        title: "One Help Informática",
        summary: "Catálogo de produtos e notícias para empresa brasileira de TI.",
        description:
          "Site de vitrine de produtos e serviços para a One Help Informática com blog de notícias, catálogo com busca e filtros, páginas individuais por produto e interface administrativa para gerenciar produtos e artigos. Integrou a API do Google Reviews para puxar automaticamente avaliações com 5 estrelas ou mais. DNS, servidor e Google Search Console totalmente configurados para visibilidade orgânica.",
        impact:
          "Entregou um catálogo completo, CMS administrativo e plataforma de avaliações que está no ar e gerando descoberta local para o negócio.",
        role: "Full-stack: frontend, backend, infraestrutura, SEO",
        timeline: "Out 2024 - Jan 2025",
        complexity: "CMS administrativo, integração Google Reviews API, modelagem MongoDB, configuração de DNS e servidor",
      },
      {
        slug: "sofia",
        title: "SOFIA — Pré-diagnóstico de TEA",
        summary: "App mobile combinando uma CNN com instrumentos de triagem para apoiar o diagnóstico precoce de TEA.",
        description:
          "Aplicativo mobile projetado para auxiliar médicos no diagnóstico precoce de Transtorno do Espectro Autista em crianças. O recurso central é uma rede neural convolucional que analisa vídeos de comportamento infantil, combinada com instrumentos de triagem adequados a cada faixa etária aplicados dentro do app. O resultado final combina a inferência da IA com o protocolo de triagem, apresentado em gráficos e comparações. Apoiado por serviços em Spring Boot e Flask e publicado como artigo Qualis B2 em 2024.",
        impact:
          "Contribuição acadêmica e prática para o diagnóstico precoce de TEA — publicado como artigo Qualis B2 em 2024.",
        role: "Backend, integração com IA e design de produto",
        timeline: "Jul 2023 - Dez 2024",
        complexity: "Pipeline de treinamento e inferência da CNN, lógica de triagem segmentada por idade, integração da stack Kotlin/Spring",
      },
    ],
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
  prompt: {
    title: "Pergunte ao meu currículo",
    badge: "RAG",
    inputLabel: "Faça uma pergunta sobre a experiência da Amanda",
    inputPlaceholder: "Pergunte sobre minha experiência, projetos ou stack…",
    placeholders: [
      "Pergunte sobre minha experiência…",
      "Pergunte como meu perfil se encaixa na sua vaga…",
      "Pergunte o que já construí com RAG e LLMs…",
      "Pergunte sobre meus projetos e minha stack…",
    ],
    send: "Enviar",
    hint: "Respostas baseadas no meu currículo · Enter para enviar",
    suggestions: [
      "Fale sobre sua experiência",
      "Como seu perfil se encaixa na minha vaga?",
      "O que você já construiu com RAG e LLMs?",
    ],
    thinking: ["Buscando no meu currículo…", "Lendo a experiência relevante…", "Escrevendo a resposta…"],
    demo: [
      {
        question: "O que você já construiu com RAG e LLMs?",
        answer:
          "Na YDUQS, construí e evoluí um chatbot com MCP e arquitetura RAG para recomendação, captação e matrícula de alunos, integrado ao site e ao WhatsApp via Salesforce. Também atuei em ecossistemas GenAI/LLM com LangGraph.",
        source: "Experiência · YDUQS",
      },
      {
        question: "Como seu perfil se encaixa em uma vaga Full Stack?",
        answer:
          "Entrego ponta a ponta: Next.js, React e TypeScript no front; Java Spring Boot, Node e Python no back; e infraestrutura AWS com Terraform. Na tns, landing pages em Next.js geraram 40 mil leads orgânicos.",
        source: "Experiência · tns, YDUQS",
      },
    ],
    sourceLabel: "Fonte",
    you: "Você",
    assistant: "IA da Amanda",
    newChat: "Nova conversa",
    error: "Algo deu errado. Tente novamente.",
    mock: {
      answer:
        "Modo demo: o backend de RAG ainda não está conectado, então esta é uma resposta de exemplo. Em breve, as respostas virão direto do meu currículo.",
      source: "demo",
    },
    callout: "Eu que desenvolvi essa IA com RAG",
    mascot: {
      askMe: "Pergunte à minha IA",
      ariaLabel: "Voltar ao topo e perguntar à IA sobre o meu currículo",
      generic: "Psiu… pergunte à minha IA lá no topo!",
      sections: {
        about: "Quer saber mais sobre mim? Pergunte à IA lá em cima!",
        experience: "Cada cargo daqui dá para consultar. Pergunte à IA!",
        education: "Minha formação também está na base da IA.",
        certifications: "Curiosidade sobre uma certificação? Pergunte!",
        projects: "Pergunte à IA como eu fiz cada um desses.",
        skills: "Pergunte qual dessas skills combina com a sua vaga.",
        contact: "Pronto para conversar? Mande uma mensagem!",
      },
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
