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
    timeline: string;
    summary: string;
    practice: string;
    areas: Array<{ title: string; detail: string }>;
  };
  writing: {
    title: string;
    introduction: string;
    articles: Array<{ title: string; summary: string; href: string }>;
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
  };
  footer: string;
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    meta: {
      title: "Santiago Pourteau | AI Engineer",
      description:
        "AI engineer building reliable machine-learning systems, data pipelines, and software products.",
    },
    accessibility: {
      skipToContent: "Skip to content",
      languageSwitcher: "Change language",
      primaryNavigation: "Primary navigation",
      home: "Santiago Pourteau, Home",
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
      headline: "Reliable AI, end to end.",
      supportingCopy:
        "I design and implement end-to-end AI systems, from classical machine learning to agentic systems, bringing together data, models, rigorous evaluation, and production software to solve real-world problems.",
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
      company: "Wollen Labs (now Luno)",
      dates: "April 2025 to April 2026",
      bullets: [
        "Translated business and client requirements into feasible AI system designs.",
        "Built Python services for LLM and agent workflows connected to databases, queues, messaging channels, and external APIs.",
        "Contributed across data pipelines, backend APIs, asynchronous processing, integrations, and model-execution observability.",
      ],
    },
    work: {
      title: "Selected work",
      project: "Bumbledesa",
      category: "Team academic project: distributed product engineering",
      summary:
        "A social-location product spanning a mobile app, an administration backoffice, specialized backend services, deployment infrastructure, testing, security, and distributed observability.",
      linkLabel: "Explore the GitHub organization",
    },
    education: {
      title: "Education",
      institution: "Universidad de San Andrés",
      degree: "Artificial Intelligence Engineering",
      status: "In progress",
      timeline:
        "Coursework is expected to be completed in November 2026, with the thesis defense planned for February or March 2027.",
      summary:
        "Coursework combines mathematical and algorithmic foundations with classical machine learning, deep learning, computer vision, natural language processing, reinforcement learning, autonomous robotics, data systems, software engineering, cybersecurity, and responsible AI.",
      practice:
        "The program has been practical as well as theoretical: coursework and projects involved implementing and evaluating models, building data and training pipelines, and taking software systems through testing, integration, deployment, and observability.",
      areas: [
        {
          title: "Models and representations",
          detail:
            "Neural networks, CNNs, recurrent models, transformers, normalizing flows, diffusion models, multimodal models, self-supervised and contrastive learning, and multitask learning.",
        },
        {
          title: "Learning and decision-making",
          detail:
            "Classical ML, reinforcement learning, value- and policy-based methods, actor-critic architectures, probabilistic robotics, planning, and sensor fusion.",
        },
        {
          title: "Systems and responsibility",
          detail:
            "Databases, streaming, APIs, distributed systems, testing, CI/CD, Kubernetes, observability, security, fairness, privacy, and AI governance.",
        },
      ],
    },
    writing: {
      title: "Selected publications",
      introduction: "Papers and technical articles I co-authored.",
      articles: [
        {
          title: "Convolutional Kolmogorov-Arnold Networks",
          summary:
            "A 2024 paper introducing convolutional KAN layers and evaluating them against conventional CNNs on Fashion-MNIST, including configurations with similar accuracy and roughly half the parameters.",
          href: "https://arxiv.org/abs/2406.13155",
        },
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
      emailLabel: "Email me",
    },
    footer: "Built as a bilingual, static portfolio.",
  },
  es: {
    meta: {
      title: "Santiago Pourteau | Ingeniero de IA",
      description:
        "Ingeniero de IA enfocado en sistemas de machine learning confiables, pipelines de datos y productos de software.",
    },
    accessibility: {
      skipToContent: "Saltar al contenido",
      languageSwitcher: "Cambiar idioma",
      primaryNavigation: "Navegación principal",
      home: "Santiago Pourteau, Inicio",
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
      headline: "IA confiable, de punta a punta.",
      supportingCopy:
        "Diseño e implemento sistemas de IA de punta a punta, desde machine learning clásico hasta sistemas agénticos, integrando datos, modelos, evaluación rigurosa y software de producción para resolver problemas reales.",
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
      company: "Wollen Labs (actualmente Luno)",
      dates: "Abril de 2025 a abril de 2026",
      bullets: [
        "Traduje necesidades de negocio y de clientes en diseños viables de sistemas de IA.",
        "Construí servicios en Python para flujos con LLMs y agentes conectados con bases de datos, colas, canales de mensajería y APIs externas.",
        "Contribuí en pipelines de datos, APIs backend, procesamiento asíncrono, integraciones y observabilidad de ejecuciones de modelos.",
      ],
    },
    work: {
      title: "Proyectos destacados",
      project: "Bumbledesa",
      category: "Proyecto académico grupal: ingeniería de producto distribuido",
      summary:
        "Un producto social basado en ubicación que incluye una aplicación móvil, un backoffice de administración, servicios backend especializados, infraestructura de despliegue, testing, seguridad y observabilidad distribuida.",
      linkLabel: "Explorar la organización en GitHub",
    },
    education: {
      title: "Educación",
      institution: "Universidad de San Andrés",
      degree: "Ingeniería en Inteligencia Artificial",
      status: "En curso",
      timeline:
        "Finalización de materias prevista para noviembre de 2026 y defensa de tesis planificada para febrero o marzo de 2027.",
      summary:
        "La carrera combina fundamentos matemáticos y algorítmicos con machine learning clásico, deep learning, visión por computadora, procesamiento del lenguaje natural, aprendizaje por refuerzo, robótica autónoma, sistemas de datos, ingeniería de software, ciberseguridad e IA responsable.",
      practice:
        "La formación fue práctica además de teórica: las materias y sus proyectos incluyeron implementar y evaluar modelos, construir pipelines de datos y entrenamiento, y llevar sistemas de software por etapas de testing, integración, despliegue y observabilidad.",
      areas: [
        {
          title: "Modelos y representaciones",
          detail:
            "Redes neuronales, CNNs, modelos recurrentes, transformers, normalizing flows, modelos de difusión y multimodales, aprendizaje autosupervisado y contrastivo, y aprendizaje multitarea.",
        },
        {
          title: "Aprendizaje y toma de decisiones",
          detail:
            "ML clásico, aprendizaje por refuerzo, métodos basados en valor y políticas, arquitecturas actor-critic, robótica probabilística, planificación y fusión de sensores.",
        },
        {
          title: "Sistemas y responsabilidad",
          detail:
            "Bases de datos, streaming, APIs, sistemas distribuidos, testing, CI/CD, Kubernetes, observabilidad, seguridad, equidad, privacidad y gobernanza de IA.",
        },
      ],
    },
    writing: {
      title: "Publicaciones seleccionadas",
      introduction: "Papers y artículos técnicos que coescribí.",
      articles: [
        {
          title: "Convolutional Kolmogorov-Arnold Networks",
          summary:
            "Paper de 2024 que introduce capas convolucionales KAN y las evalúa frente a CNN convencionales en Fashion-MNIST, incluyendo configuraciones con precisión similar y aproximadamente la mitad de los parámetros.",
          href: "https://arxiv.org/abs/2406.13155",
        },
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
      emailLabel: "Escribime",
    },
    footer: "Construido como un portafolio bilingüe y estático.",
  },
};
