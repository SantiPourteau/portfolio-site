# Portfolio MVP content

Status: English working draft for review. This is not yet public copy.

The first public version must provide equivalent English and Spanish content.
This document currently holds the English source draft; the Spanish copy should
be written and reviewed after the claims and structure are approved, and before
the site is published. Both locales must share the same underlying facts, dates,
links, and content status so they cannot drift independently.

Use stable locale routes such as `/en/` and `/es/`, with a visible language
switch that preserves the equivalent page or section. The final root redirect
and default locale remain implementation decisions.

## Page metadata

**Title**

Santiago Pourteau - AI Engineer

**Description**

AI engineer building reliable machine-learning systems, data pipelines, and
software products. Experience with production-oriented LLM applications,
distributed services, and end-to-end AI engineering.

## Navigation

- About
- Experience
- Selected work
- Education
- Contact

The MVP is a single page. Project detail pages may be added later when the case
studies have approved visuals and enough substance.

## Hero

**Eyebrow**

AI Engineer

**Headline**

Reliable AI, end to end.

**Supporting copy**

I design and implement end-to-end AI systems, from classical machine learning
to agentic systems, bringing together data, models, rigorous evaluation, and
production software to solve real-world problems. I am completing a degree in
Artificial Intelligence Engineering at Universidad de San Andrés.

**Primary actions**

- View selected work
- GitHub
- LinkedIn

Do not include a "Download CV" action until a current public CV exists.

## About

I am an AI engineer interested in the full path from an ambiguous problem to a
system that can be evaluated, integrated, and operated. My professional work has
focused on LLM and agent-based applications connected to real business data and
tools, while my academic background spans machine learning, algorithms, data
systems, software engineering, and responsible AI.

I am deliberately keeping my next step broad: I want to work on technically
demanding ML/AI problems where sound evaluation and strong engineering matter.

## Experience

### AI Engineer - Wollen Labs (now Luno)

**April 2025 - April 2026**

- Translated client and business requirements into feasible AI system designs.
- Built Python services for LLM and agent workflows integrated with databases,
  queues, business data, messaging channels, and external APIs.
- Developed data ingestion, transformation, matching, and reporting pipelines.
- Contributed across backend APIs, conversational interfaces, asynchronous
  processing, deployment support, and model-execution observability.
- Worked on applications including workflow automation, master-data
  harmonization, conversational business analytics, automated research, and
  messaging assistants.

**Selected writing**

Technical articles I wrote or co-authored:

- [The Unseen Threat: Building Trust by Eradicating Algorithmic
  Bias](https://wollenlabs.substack.com/p/the-unseen-threat-building-trust),
  a technical overview of group-level evaluation, fairness criteria and their
  trade-offs, causal reasoning, mitigation, governance, and monitoring.
- [Navigating modern LLM
  architectures](https://wollenlabs.substack.com/p/navigating-modern-llm-architectures),
  a practical comparison of ReAct, Plan-and-Execute, ReWOO, Tree-of-Thoughts,
  and multi-agent patterns.

Present both as evidence of technical synthesis and communication, not as
original research. The MVP should use two compact article links rather than a
full blog or publication archive.

**Publication note:** keep examples anonymized until project-level disclosure
permission and Santiago's exact ownership are confirmed. Add metrics only when
they are documented and safe to publish.

## Selected work

### Bumbledesa

**Team academic project - distributed product engineering**

Bumbledesa is a social-location application composed of a Flutter mobile app, a
Vue administration backoffice, an API gateway, and specialized backend services
written in Python, TypeScript, and Go. The system uses PostgreSQL, MongoDB, Redis,
Docker, Kubernetes manifests, CI pipelines, and a centralized observability
stack.

**My contribution**

I contributed across all major components, with a particular focus on
cross-service observability, security boundaries, automated testing, service
integration, mobile and social flows, infrastructure, and an AI-assisted meetup
planning workflow.

**Engineering highlights**

- Correlated structured logs, RED metrics, and distributed traces across a
  polyglot microservice system using OpenTelemetry and Grafana/Victoria tooling.
- Identity and authorization boundaries through a central API gateway, together
  with rate limiting, idempotency, privacy, and secret-handling decisions.
- Unit and integration suites and CI coverage gates across backend, web, and
  mobile repositories.
- A bounded LangGraph meetup workflow with human approval, streaming,
  checkpointing, observability, and cross-service side effects.

**Evidence actions**

- Explore the GitHub organization: https://github.com/Bumbledesa
- Architecture and case-study detail: add only after sanitized assets are ready.

**Before publication**

- Confirm the preferred wording for Santiago's primary ownership.
- Add final grade or evaluator feedback only if available and useful.
- Generate a sanitized architecture diagram and product screenshots.
- Run a fresh verification snapshot; do not publish old coverage percentages.

### Academic breadth

Rather than listing every university assignment, summarize the experience:

Coursework and project work have included classical and deep learning, computer
vision, NLP, reinforcement learning, autonomous robotics, databases, networks,
algorithms, software architecture, cybersecurity, and responsible AI. Individual
academic projects will be featured only when they add evidence not already shown
by professional work or Bumbledesa.

The thesis remains in progress and is intentionally excluded from the MVP's
selected-work section until Santiago chooses to revisit it.

## Education

### Universidad de San Andrés

**Ingeniería en Inteligencia Artificial - in progress**

Coursework expected to be completed in November 2026. Thesis defense planned for
February or March 2027.

The degree combines mathematical and algorithmic foundations with classical
machine learning, deep learning, computer vision, natural language processing,
reinforcement learning, autonomous robotics, data systems, software engineering,
cybersecurity, and responsible AI.

The program has been practical as well as theoretical: coursework and projects
involved implementing and evaluating models, building data and training
pipelines, and taking software systems through testing, integration, deployment,
and observability.

**Representative areas**

- Models and representations: neural networks, CNNs, recurrent models,
  transformers, normalizing flows, diffusion models, multimodal models,
  self-supervised and contrastive learning, and multitask learning.
- Learning and decision-making: classical ML, reinforcement learning, value- and
  policy-based methods, actor-critic architectures, probabilistic robotics,
  planning, and sensor fusion.
- Systems and responsibility: databases, streaming, APIs, distributed systems,
  testing, CI/CD, Kubernetes, observability, security, fairness, privacy, and AI
  governance.

Do not publish the current course count or grade average unless Santiago decides
that it improves the page and the figures are refreshed immediately before
release.

## Contact

I am open to conversations about ML/AI engineering roles and technically
ambitious projects.

- GitHub: https://github.com/SantiPourteau
- LinkedIn: https://www.linkedin.com/in/santiago-pourteau-1bba8619a/
- Email: santi.pourteau@gmail.com

Do not mention YPF in the page copy. The portfolio should support that goal
without reading as an application to a single company.

## Explicit exclusions from the MVP

- Thesis detail while the research remains in progress.
- Convolutional KANs unless a later narrative genuinely needs it.
- Unverified performance, adoption, scale, or business-impact metrics.
- Exhaustive technology or course lists.
- Testimonials, personal blog, CMS, analytics, contact form, or backend without
  a clear need.
- A top-level Writing page or navigation item; the MVP only needs a compact
  Selected writing block for the two co-authored Wollen Labs articles.
- A claim of sole authorship for Bumbledesa.

## Content still required before implementation

1. Approve the claims and structure in the English source draft, then write and
   review natural Spanish copy with equivalent meaning.
2. Prepare the current CV in the language versions that will be offered.
3. Confirm Wollen Labs disclosure and ownership wording.
4. Confirm Bumbledesa ownership wording and any final result or grade.
5. Prepare sanitized Bumbledesa assets.
6. Decide whether a portrait is useful or the first version remains text-led.
