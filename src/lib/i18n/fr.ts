import type { Translation } from "./types";

export const fr: Translation = {
  locale: "fr",
  htmlLang: "fr",
  role: "Ingénieure Full Stack",
  roleHighlightWord: "Stack",
  tagline:
    "Je suis développeuse logiciel avec une expertise en développement backend, Java Spring Boot, API REST et microservices, spécialisée dans les solutions cloud et les architectures évolutives.",
  heroAvailable: "Disponible pour de Nouvelles Opportunités",
  heroViewProjects: "Voir les Projets",
  heroResume: "CV",
  resumeUrl: "/cv/Amanda Castro CV - Full Stack Engineer FR.pdf",
  stats: [
    { value: 20, suffix: "+", label: "Projets Livrés" },
    { value: 40, suffix: "K+", label: "Leads Organiques Générés" },
    { value: 95, suffix: "%", label: "Couverture de Tests" },
    { value: 30, suffix: "%", label: "Augmentation des Résultats" },
  ],
  nav: {
    about: "À propos",
    experience: "Expérience",
    education: "Formation",
    certifications: "Certifications",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    resume: "CV",
    heroAria: "Aller en haut",
    toggleMenu: "Ouvrir le menu",
  },
  about: {
    label: "Profil",
    titleLead: "À propos de",
    titleHighlight: "Amanda",
    summary:
      "Ingénieure Full Stack spécialisée en fiabilité backend, architecture propre et solutions cloud — actuellement basée au Portugal.",
    softSkillsTitle: "Compétences Comportementales",
    softSkillsSubtitle: (count) => `${count} forces`,
    softSkills: [
      "Planification Stratégique",
      "Collaboration Agile",
      "Travail d'équipe Transverse",
      "Résolution de Problèmes",
      "Mentorat et Enseignement",
      "Communication Claire",
      "Souci du Détail",
      "Adaptabilité",
    ],
    languagesTitle: "Langues",
    languagesSubtitle: (count) => `${count} parlées`,
    languages: [
      { name: "Portugais", level: "Langue maternelle", proficiency: 100 },
      { name: "Anglais", level: "Professionnel", proficiency: 85 },
      { name: "Français", level: "Basique", proficiency: 40 },
    ],
    githubTitle: "Activité GitHub",
    githubSubtitle: "Dernière année de contributions",
  },
  experience: {
    label: "Parcours",
    titleLead: "Expérience",
    titleHighlight: "Professionnelle",
    description:
      "De postes en contact client à l'enseignement et au marketing, puis au développement backend, full-stack et aux architectures cloud — chaque chapitre a façonné ma manière de construire des logiciels fiables et centrés utilisateur.",
    metaWork: "Expérience",
    metaEducation: "Formation",
    flipChapterPrefix: "Et une nouvelle",
    flipChapterSuffix: "en vue",
    flipChapterWords: ["aventure", "étape", "page"],
    items: [
      {
        company: "tns",
        role: "Développeuse Full Stack II",
        period: "Janvier 2026 - Présent",
        type: "work",
        summary:
          "Construction de plateformes CMS alimentant web et mobile, d'un portail d'actualités à défilement infini et de landing pages de génération de leads — le tout sur Next.js avec un fort accent sur la vitesse.",
        bullets: [
          "Conception et construction de plateformes de gestion de contenu alimentant à la fois l'application web et l'app mobile, en assumant les couches backend et frontend.",
          "Développement d'un portail d'actualités à défilement infini sur Next.js, avec optimisation de la vitesse perçue et des Core Web Vitals.",
          "Stack majoritairement Next.js, avec une attention constante à la performance de chargement et à la stratégie de rendu.",
          "Structuration et développement de landing pages de génération de leads pour le lancement de l'application.",
          "40 000 leads organiques générés avec près d'une minute de rétention et 30% d'augmentation des résultats.",
          "Mise en place de tests A/B pour améliorer continuellement la performance et la conversion du site.",
          "Développé un système de support client automatisé avec triage de tickets à la manière de Jira, réponses en batch générées par IA et flux d'approbation pour l'exécution d'actions sur des plateformes externes — incluant l'activation, la désactivation et la mise à jour des profils d'abonnés.",
        ],
      },
      {
        company: "tns",
        role: "Développeuse Full Stack I",
        period: "Avril 2025 - Janvier 2026",
        type: "work",
        summary:
          "Développement d'applications en React et TypeScript avec une architecture Atomic Design, en collaboration avec le Marketing et les Ventes pour améliorer l'expérience B2B.",
        bullets: [
          "Développement d'applications en React et TypeScript avec l'architecture Atomic Design.",
          "Collaboration avec les équipes Marketing et Ventes pour améliorer l'expérience client B2B.",
          "Expérience avec des services serverless tels que AWS Lambda et Cloudflare Workers.",
        ],
      },
      {
        company: "CapLink",
        role: "Développeuse Full Stack",
        period: "Mars 2025 - Présent",
        type: "work",
        summary:
          "Maintenance d'API REST et GraphQL avec une architecture Clean Code en Node.js et TypeScript, tout en livrant des microcomposants frontend soignés.",
        bullets: [
          "Maintenance d'API REST et GraphQL avec une architecture Clean Code en Node.js et TypeScript.",
          "Optimisation des requêtes PostgreSQL et couverture de tests automatisés supérieure à 80% avec Jest et Vitest.",
          "Livraison de microcomposants frontend en React et documentation avec Storybook.",
          "Travail avec des conteneurs Docker et des méthodologies agiles comme Scrum et Kanban.",
        ],
      },
      {
        company: "Compass UOL",
        role: "Développeuse Back End Java Junior",
        period: "Juin 2024 - Janvier 2025",
        type: "work",
        summary:
          "J'ai contribué au développement d'une solution de Plateforme de Développement Interne (IDP) principalement avec Java Spring Boot, API REST, microservices, Clean Code et architecture hexagonale.",
        bullets: [
          "Développement d'architectures orientées événements et de microservices avec traitement asynchrone via WebFlux, WebSocket et RabbitMQ.",
          "Mise en place de pipelines CI/CD et configuration de conteneurs Docker pour exécuter les applications, en utilisant des images Docker pour les API.",
          "Implémentation de mécanismes d'autorisation et d'authentification via OAuth 2.0, Spring Security et JWT.",
          "Conception et exécution de suites de tests complètes (unitaires, intégration, persistance et système) garantissant 95% de couverture de code et la fiabilité du système.",
          "Gestion des migrations de base de données avec Flyway et assurance de la compatibilité entre PostgreSQL et AWS Aurora.",
          "Intégration d'applications avec des services AWS tels que Cognito, Lambda, SQS, SNS, API Gateway, Parameter Store et EC2.",
          "Implémentation d'une solution pour consommer la progression des builds Jenkins via plusieurs WebSockets, permettant des mises à jour en temps réel pour les utilisateurs abonnés à des sujets spécifiques avec gestion de clés JWT basée sur la session, journalisation asynchrone et exécution multi-thread.",
        ],
      },
    ],
  },
  education: {
    label: "Parcours Académique",
    titleLead: "Parcours",
    titleHighlight: "Académique",
    description:
      "Du lycée technique intégré au Bachelor en développement logiciel multiplateforme et à une spécialisation post-universitaire en Big Data et IA — un engagement continu envers l'apprentissage et l'expertise technique.",
    stepLabel: "Étape",
    latestLabel: "Actuel",
    items: [
      {
        institution: "Faculdade Focus",
        degree: "Post-graduation Lato Sensu — Business Intelligence, Big Data et Intelligence Artificielle",
        period: "Mai 2025 — Janvier 2026",
        summary:
          "Spécialisation post-universitaire en Business Intelligence, Big Data et Intelligence Artificielle.",
        highlights: [
          "Pipelines de Business Intelligence et architectures Big Data",
          "Intelligence Artificielle appliquée et prise de décision basée sur les données",
          "Modélisation analytique pour des problèmes d'entreprise complexes",
        ],
      },
      {
        institution: "Fatec Registro",
        degree: "Licence — Développement Logiciel Multiplateforme",
        period: "Février 2022 — Décembre 2024",
        location: "Registro, São Paulo, Brésil",
        summary:
          "Licence axée sur le développement logiciel multiplateforme — backend, frontend, mobile, bases de données et ingénierie logicielle.",
        highlights: [
          "Ingénierie logicielle, algorithmes, bases de données et développement multiplateforme",
          "Co-auteure de SOFIA — logiciel basé sur l'IA pour le diagnostic précoce du TSA",
          "Plateforme intégrée de suivi post-clinique pour personnes ayant surmonté une dépendance chimique",
        ],
      },
      {
        institution: "ETEC Professor André Bogas",
        degree: "Lycée Intégré + Cours Technique en Administration des Affaires",
        period: "Février 2019 — Décembre 2021",
        location: "Registro, São Paulo, Brésil",
        summary:
          "Programme de lycée intégré combiné à un cours technique axé sur les fondamentaux de l'administration des affaires.",
        highlights: [
          "Fondamentaux de l'administration et de la gestion",
          "Communication, travail d'équipe et résolution structurée de problèmes",
          "Bases d'une carrière à l'intersection du business et de la technologie",
        ],
      },
    ],
  },
  certifications: {
    label: "Titres",
    titleLead: "Certifications et",
    titleHighlight: "Accréditations",
    description:
      "Apprentissage continu sur les plateformes cloud, l'ingénierie backend et la messagerie — avec AWS Certified Developer prévue ensuite.",
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
    titleLead: "Projets",
    titleHighlight: "Phares",
    description:
      "Produits full-stack, sites institutionnels et applications dopées à l'IA — couvrant API, bases de données, UX, intégrations cloud et infrastructure de production.",
    filterAll: "Tous",
    sourceCode: "Code Source",
    liveDemo: "Démo",
    exploreMore: "Explorer plus de dépôts",
    viewGallery: "Voir la galerie",
    viewImage: "Voir l'image",
    noPreview: "> Aucun aperçu disponible",
    categoryLabels: {
      "ai-web-app": "App Web IA",
      institutional: "Site Institutionnel",
      "product-showcase": "Vitrine Produits",
      ecommerce: "Plateforme E-commerce",
      "ai-mobile-app": "App Mobile IA",
    },
    items: [
      {
        slug: "dolphin-talk",
        title: "Dolphin Talk",
        summary: "Entraînement mobile-first à la prononciation anglaise avec retour instantané via Azure.",
        description:
          "Application web mobile-first où des étudiants brésiliens s'entraînent à la prononciation de l'anglais dans un parcours gamifié. L'audio est enregistré via la Web Audio API, envoyé à un Route Handler Next.js servant de BFF qui relaie Azure Cognitive Services Pronunciation Assessment, et renvoyé avec un score global et une annotation des erreurs mot par mot (Omission, Insertion, Mauvaise prononciation). Inclut authentification avec sessions cookie HTTP-only, historique d'exercices avec revue des scores, plans payants avec suivi des crédits et états inactifs, historique de paiements, profil et URLs signées Supabase Storage pour les médias privés.",
        impact:
          "Produit linguistique de bout en bout : architecture BFF, pipeline de capture audio, intégration IA tierce et cycle complet d'authentification et d'abonnement.",
        role: "Frontend, conception du BFF et intégration IA",
        timeline: "Mars 2026 - Avr 2026",
        complexity: "Pipeline de capture audio, intégration Azure Speech, stockage à URLs signées, logique de plans à crédits",
      },
      {
        slug: "catelao-automotive",
        title: "Catelão Automotive",
        summary: "Site institutionnel pour un distributeur brésilien de pièces auto au Vale do Ribeira.",
        description:
          "Site institutionnel pour un distributeur de pièces automobiles basé à Registro-SP, qui dessert mécaniciens et revendeurs depuis plus d'une décennie. Comprend un hero responsive (variantes desktop/mobile), une section 'à propos', un carrousel de marques interactif, des pages dédiées 'Empresa' et 'Fornecedores' avec un drawer latéral révélant les produits par fabricant, une section 'Novidades' paginée avec routes dynamiques [slug], et un formulaire de contact validé par Zod (téléphone/WhatsApp formatés, sélecteur d'État brésilien) soumis via une API Route Next.js avec Nodemailer. Bouton WhatsApp flottant, typographie Redonda via next/font, JSON-LD et metadata SEO.",
        impact:
          "Établi la présence en ligne de l'entreprise avec une stack moderne, un SEO complet et un parcours de capture de leads relié à l'e-mail transactionnel.",
        role: "Full-stack, design et SEO",
        timeline: "Déc 2025 - Fév 2026",
        complexity: "Carrousel de marques, drawer fournisseur-produit, routes blog dynamiques, e-mail transactionnel, formulaires validés",
      },
      {
        slug: "multpoint",
        title: "MultPoint Automotive",
        summary: "Catalogue produits pour un fabricant brésilien de composants d'injection.",
        description:
          "Vitrine produits pour MultPoint, spécialisée dans les composants d'injection (vannes injectrices, kits de réparation, joints, connecteurs). Catalogue avec recherche avancée et filtres par ligne, constructeur, modèle et année ; pages par produit avec spécifications techniques et galeries d'images ; carrousels hero et lignes de produits sur la home ; section représentants à travers le Brésil avec Google Maps interactif ; et blog corporate. Catégories : Magneti Marelli, Bosch, Delphi, Arla, injecteurs moto, kits de réparation, joints et connecteurs. Livraison d'images optimisée via CDN avec carrousels en boucle infinie via Embla.",
        impact:
          "Restitue un catalogue multi-axes complexe (ligne × constructeur × modèle × année) dans une interface rapide et navigable pour acheteurs B2B.",
        role: "Implémentation frontend et architecture du catalogue",
        timeline: "Juin 2025 - Janv 2026",
        complexity: "Filtrage multi-axes, intégration Google Maps, carrousels hero/catégorie, livraison d'images CDN",
      },
      {
        slug: "one-help",
        title: "One Help Informática",
        summary: "Catalogue produits et plateforme d'actualités pour une entreprise IT brésilienne.",
        description:
          "Site vitrine produits et services pour One Help Informática avec blog d'actualités, catalogue avec barre de recherche et filtres, pages produit individuelles, et interface admin pour gérer produits et articles. Intégration de l'API Google Reviews pour récupérer automatiquement les avis 5 étoiles ou plus. DNS, serveur et Google Search Console entièrement configurés pour la découverte organique.",
        impact:
          "Livré un catalogue complet, un CMS admin et une plateforme d'avis qui est en ligne et alimente la découverte locale pour l'entreprise.",
        role: "Full-stack : frontend, backend, infrastructure, SEO",
        timeline: "Oct 2024 - Janv 2025",
        complexity: "CMS admin, intégration Google Reviews API, modélisation MongoDB, configuration DNS et serveur",
      },
      {
        slug: "sofia",
        title: "SOFIA — Pré-diagnostic du TSA",
        summary: "App mobile combinant un CNN et des outils de dépistage pour soutenir le diagnostic précoce du TSA.",
        description:
          "Application mobile conçue pour aider les médecins dans le diagnostic précoce du Trouble du Spectre Autistique chez les enfants. La fonctionnalité centrale est un réseau neuronal convolutif qui analyse des vidéos de comportements d'enfants, associé à des outils de dépistage adaptés à l'âge appliqués dans l'app. Le résultat final combine l'inférence de l'IA et le protocole de dépistage, présenté sous forme de graphiques et de comparaisons. Soutenu par des services Spring Boot et Flask, publié comme article Qualis B2 en 2024.",
        impact:
          "Contribution académique et pratique au diagnostic précoce du TSA — publié comme article Qualis B2 en 2024.",
        role: "Backend, intégration IA et design produit",
        timeline: "Juil 2023 - Déc 2024",
        complexity: "Pipeline d'entraînement et d'inférence du CNN, logique de dépistage par tranche d'âge, intégration de la stack Kotlin/Spring",
      },
    ],
  },
  skills: {
    label: "Expertise",
    titleLead: "Stack",
    titleHighlight: "Technique",
    description:
      "Les technologies que j'utilise le plus souvent pour construire des API backend, des produits full-stack, des infrastructures cloud et des pipelines de livraison fiables.",
    technologiesSuffix: "technologies",
    categories: [
      {
        title: "Backend et Ingénierie des API",
        description:
          "Les langages, frameworks et outils que j'utilise pour construire des API fiables, des microservices et des services backend.",
        skills: ["Java", "Spring Boot", "Spring Security", "Spring WebFlux", "Node.js", "TypeScript", "API REST", "GraphQL", "OpenFeign", "OAuth 2.0", "JWT", "WebSocket", "Swagger", "Clean Code", "Architecture Hexagonale", "Microservices"],
      },
      {
        title: "Frontend et Expérience Produit",
        description:
          "La stack que j'utilise pour construire des interfaces modernes, performantes et accessibles pour des produits web.",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Atomic Design", "Storybook", "SEO"],
      },
      {
        title: "Données et Messagerie",
        description:
          "Les technologies de stockage, de migration et de messagerie que j'utilise pour garder les systèmes cohérents et orientés événements.",
        skills: ["PostgreSQL", "MongoDB", "AWS Aurora", "H2 Database", "Flyway", "Apache Kafka", "RabbitMQ", "ActiveMQ Artemis", "SQS"],
      },
      {
        title: "Cloud, DevOps et Livraison",
        description:
          "Les outils cloud et de livraison que j'utilise pour déployer, sécuriser et exploiter des applications en production.",
        skills: ["AWS", "AWS EC2", "AWS Lambda", "AWS Cognito", "AWS API Gateway", "AWS Parameter Store", "AWS SNS", "Cloudflare Workers", "Docker", "CI/CD", "Jenkins", "Serverless"],
      },
      {
        title: "Tests, Outils et Méthodologies",
        description:
          "Les outils de qualité, de collaboration et de productivité sur lesquels je m'appuie pour livrer en toute confiance.",
        skills: ["Jest", "Vitest", "JUnit", "Mockito", "Git", "Scrum", "Kanban", "Trello", "Planification Stratégique"],
      },
    ],
  },
  contact: {
    label: "Contact",
    titleLead: "Me",
    titleHighlight: "Contacter",
    description:
      "Ouverte aux opportunités full-stack, backend et frontend, ainsi qu'à des collaborations et projets freelance.",
    buildHeading: "Construisons Quelque Chose",
    buildDescription:
      "Si vous recrutez pour du full-stack, du backend ou du travail orienté cloud, j'aimerais en parler. Je suis aussi ouverte à des projets freelance, des collaborations et des conversations open-source.",
    reasons: [
      { key: "Hiring", label: "Recrutement" },
      { key: "Collaboration", label: "Collaboration" },
      { key: "Open Source", label: "Open Source" },
      { key: "Other", label: "Autre" },
    ],
    form: {
      nameLabel: "Nom",
      emailLabel: "Email",
      reasonLabel: "Motif",
      messageLabel: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@entreprise.com",
      messagePlaceholder: "Parlez-moi de l'opportunité ou de l'idée...",
      sendHeading: "Envoyer un Message",
      sendDescription:
        "Parlez-moi du rôle, de l'équipe, du problème ou de l'idée et je répondrai avec un contexte réellement utile.",
      sendButton: "Envoyer le Message",
      sendingButton: "Envoi...",
      securityNote: (email) =>
        `Les messages sont envoyés en sécurité à ${email} avec votre email comme reply-to.`,
      availableLabel: "Disponible pour de nouvelles opportunités",
      downloadResume: "Télécharger le CV",
    },
    toasts: {
      reviewTitle: "Veuillez vérifier le formulaire",
      reviewFallback: "Vérifiez les champs surlignés et réessayez.",
      unableTitle: "Impossible d'envoyer votre message",
      unableDefault: "Impossible d'envoyer votre message pour le moment.",
      timeout: "La requête a pris trop de temps. Veuillez réessayer.",
      successTitle: "Message envoyé",
      successDescription: "Merci de m'avoir contactée. Je reviendrai vers vous bientôt.",
    },
  },
  footer: {
    roleNote: "Ouverte aux postes d'ingénierie full-stack, backend et frontend.",
    downloadResume: "Télécharger le CV",
    builtWith: "Construit avec Next.js et Tailwind",
  },
  languageToggle: {
    label: "Changer de langue",
    options: [
      { code: "en", label: "Anglais", nativeLabel: "English" },
      { code: "pt", label: "Portugais", nativeLabel: "Português" },
      { code: "fr", label: "Français", nativeLabel: "Français" },
    ],
  },
  themeToggle: {
    toLight: "Passer en mode clair",
    toDark: "Passer en mode sombre",
  },
};
