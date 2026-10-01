export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  accessibility: {
    skipToContent: string;
    languageSwitcher: string;
    primaryNavigation: string;
    home: string;
  };
  nav: Array<{ href: string; label: string }>;
  hero: {
    eyebrow: string;
    headline: string;
    supportingCopy: string;
    workAction: string;
  };
  about: {
    title: string;
    body: string;
  };
  experience: {
    title: string;
    role: string;
    company: string;
    dates: string;
    bullets: string[];
  };
  work: {
    title: string;
    project: string;
    category: string;
    summary: string;
    linkLabel: string;
  };
  education: {
    title: string;
    institution: string;
    degree: string;
    status: string;
    summary: string;
  };
  writing: {
    title: string;
    introduction: string;
    articles: Array<{ title: string; summary: string; href: string }>;
  };
  contact: {
    title: string;
    body: string;
  };
  footer: string;
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    meta: {
      title: "Santiago Pourteau — AI Engineer",
      description:
        "AI engineer building reliable machine-learning systems, data pipelines, and software products.",
    },
    accessibility: {
      skipToContent: "Skip to content",
      languageSwitcher: "Change language",
      primaryNavigation: "Primary navigation",
      home: "Santiago Pourteau — Home",
    },
    nav: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#work", label: "Selected work" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "AI Engineer",
      headline: "I build reliable AI systems from model behavior to production software.",
      supportingCopy:
        "I design and implement end-to-end AI applications, combining machine learning, data pipelines, APIs, integrations, and observability.",
      workAction: "View selected work",
    },
    about: {
      title: "About",
      body:
        "I am interested in the full path from an ambiguous problem to a system that can be evaluated, integrated, and operated. I am deliberately keeping my next step broad: I want to work on technically demanding ML and AI problems where sound evaluation and strong engineering matter.",
    },
    experience: {
      title: "Experience",
      role: "AI Engineer",
      company: "Wollen Labs",
      dates: "April 2025 — April 2026",
      bullets: [
        "Translated business and client requirements into feasible AI system designs.",
        "Built Python services for LLM and agent workflows connected to databases, queues, messaging channels, and external APIs.",
        "Contributed across data pipelines, backend APIs, asynchronous processing, integrations, and model-execution observability.",
      ],
    },
    work: {
      title: "Selected work",
      project: "Bumbledesa",
      category: "Team academic project — distributed product engineering",
      summary:
        "A social-location product spanning a mobile app, an administration backoffice, specialized backend services, deployment infrastructure, testing, security, and distributed observability.",
      linkLabel: "Explore the GitHub organization",
    },
    education: {
      title: "Education",
      institution: "Universidad de San Andrés",
      degree: "Artificial Intelligence Engineering",
      status: "In progress",
      summary:
        "Coursework is expected to be completed in November 2026, with the thesis defense planned for February or March 2027.",
    },
    writing: {
      title: "Selected writing",
      introduction: "Co-authored technical articles published by Wollen Labs.",
      articles: [
        {
          title: "The Unseen Threat: Building Trust by Eradicating Algorithmic Bias",
          summary:
            "Fairness criteria, causal reasoning, mitigation, governance, and monitoring across the ML lifecycle.",
          href: "https://wollenlabs.substack.com/p/the-unseen-threat-building-trust",
        },
        {
          title: "Navigating modern LLM architectures",
          summary:
            "A practical comparison of ReAct, Plan-and-Execute, ReWOO, Tree-of-Thoughts, and multi-agent patterns.",
          href: "https://wollenlabs.substack.com/p/navigating-modern-llm-architectures",
        },
      ],
    },
    contact: {
      title: "Contact",
      body: "I am open to conversations about ML and AI engineering roles and technically ambitious projects.",
    },
    footer: "Built as a bilingual, static portfolio.",
  },
  es: {
    meta: {
      title: "Santiago Pourteau — Ingeniero de IA",
      description:
        "Ingeniero de IA enfocado en sistemas de machine learning confiables, pipelines de datos y productos de software.",
    },
    accessibility: {
      skipToContent: "Saltar al contenido",
      languageSwitcher: "Cambiar idioma",
      primaryNavigation: "Navegación principal",
      home: "Santiago Pourteau — Inicio",
    },
    nav: [
      { href: "#about", label: "Sobre mí" },
      { href: "#experience", label: "Experiencia" },
      { href: "#work", label: "Proyectos destacados" },
      { href: "#education", label: "Educación" },
      { href: "#contact", label: "Contacto" },
    ],
    hero: {
      eyebrow: "Ingeniero de IA",
      headline: "Construyo sistemas de IA confiables, desde el comportamiento del modelo hasta el software en producción.",
      supportingCopy:
        "Diseño e implemento aplicaciones de IA de punta a punta, combinando machine learning, pipelines de datos, APIs, integraciones y observabilidad.",
      workAction: "Ver proyectos destacados",
    },
    about: {
      title: "Sobre mí",
      body:
        "Me interesa todo el recorrido desde un problema ambiguo hasta un sistema que pueda evaluarse, integrarse y operarse. Mantengo deliberadamente abierta mi próxima etapa: quiero trabajar en problemas exigentes de ML e IA donde importen tanto una evaluación rigurosa como una ingeniería sólida.",
    },
    experience: {
      title: "Experiencia",
      role: "AI Engineer",
      company: "Wollen Labs",
      dates: "Abril de 2025 — abril de 2026",
      bullets: [
        "Traduje necesidades de negocio y de clientes en diseños viables de sistemas de IA.",
        "Construí servicios en Python para flujos con LLMs y agentes conectados con bases de datos, colas, canales de mensajería y APIs externas.",
        "Contribuí en pipelines de datos, APIs backend, procesamiento asíncrono, integraciones y observabilidad de ejecuciones de modelos.",
      ],
    },
    work: {
      title: "Proyectos destacados",
      project: "Bumbledesa",
      category: "Proyecto académico grupal — ingeniería de producto distribuido",
      summary:
        "Un producto social basado en ubicación que incluye una aplicación móvil, un backoffice de administración, servicios backend especializados, infraestructura de despliegue, testing, seguridad y observabilidad distribuida.",
      linkLabel: "Explorar la organización en GitHub",
    },
    education: {
      title: "Educación",
      institution: "Universidad de San Andrés",
      degree: "Ingeniería en Inteligencia Artificial",
      status: "En curso",
      summary:
        "Finalización de materias prevista para noviembre de 2026 y defensa de tesis planificada para febrero o marzo de 2027.",
    },
    writing: {
      title: "Escritura seleccionada",
      introduction: "Artículos técnicos coescritos y publicados por Wollen Labs.",
      articles: [
        {
          title: "The Unseen Threat: Building Trust by Eradicating Algorithmic Bias",
          summary:
            "Criterios de equidad, razonamiento causal, mitigación, gobernanza y monitoreo a lo largo del ciclo de vida de ML.",
          href: "https://wollenlabs.substack.com/p/the-unseen-threat-building-trust",
        },
        {
          title: "Navigating modern LLM architectures",
          summary:
            "Una comparación práctica de ReAct, Plan-and-Execute, ReWOO, Tree-of-Thoughts y patrones multiagente.",
          href: "https://wollenlabs.substack.com/p/navigating-modern-llm-architectures",
        },
      ],
    },
    contact: {
      title: "Contacto",
      body: "Estoy abierto a conversar sobre roles de ingeniería de ML e IA y proyectos técnicamente ambiciosos.",
    },
    footer: "Construido como un portafolio bilingüe y estático.",
  },
};
