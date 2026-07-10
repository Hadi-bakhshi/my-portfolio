export interface Metric {
  label: string;
  value: string;
}

export const metrics: Metric[] = [
  { value: "6+ Years", label: "Engineering production software" },
  { value: "2,600+ Network", label: "Platform reach across dealership operations" },
  { value: "~600 Callcenter Operators", label: "Daily support via production RAG workflows" },
  { value: "9 Modules", label: "Unified in an internal ERP-style platform" },
  { value: "End-to-End", label: "From architecture and data design to deployment" },
];

export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  { label: "Languages", items: ["C#", "TypeScript", "JavaScript"] },
  {
    label: "Backend",
    items: [
      "ASP.NET Core",
      "NestJS",
      "EF Core",
      "Dapper",
      "MediatR",
      "Node.js",
      "Express.js",
      "Prisma",
      "SignalR",
      "gRPC",
      "GraphQL",
      "RabbitMQ",
    ],
  },
  {
    label: "Frontend",
    items: [
      "Next.js",
      "React",
      "TanStack Query",
      "Redux Toolkit",
      "Zustand",
      "Jotai",
      "Tailwind CSS",
      "Material-UI",
      "shadcn/ui",
      "React Hook Form",
      "PWA",
    ],
  },
  {
    label: "Databases",
    items: [
      "SQL Server",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "pgvector",
      "Qdrant",
    ],
  },
  {
    label: "AI & LLM",
    items: ["OpenAI API", "RAG", "Vector Search", "LLM Integration", "n8n"],
  },
  {
    label: "DevOps",
    items: [
      "Docker",
      "Docker Swarm",
      "GitLab CI/CD",
      "GitHub Actions",
      "Nginx",
      "Linux",
      "Prometheus",
      "Grafana",
      "ELK",
      "OpenTelemetry",
    ],
  },
  {
    label: "Architecture",
    items: [
      "Event-Driven",
      "Microservices",
      "Modular Monolith",
      "Clean Architecture",
      "Vertical Slice",
      "DDD",
      "CQRS",
      "Saga",
      "Inbox/Outbox",
    ],
  },
  {
    label: "Testing",
    items: ["xUnit", "NetArchTest", "Jest", "Cypress"],
  },
];

export interface CaseStudy {
  index: string;
  title: string;
  oneLiner: string;
  metric: string;
  stack: string[];
  href: string;
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    title: "Reception Assistant",
    oneLiner:
      "An AI-powered dealership platform for customer history, behavior analysis, and satisfaction insights — upgraded with LLM text generation, bulk analysis, and a self-trained model integration.",
    metric: "100+ agencies · 2,600+ dealership network",
    stack: ["NestJS", "React", "RabbitMQ", "Redis", "OpenAI"],
    href: "/work/reception-assistant",
  },
  {
    index: "02",
    title: "RAG FAQ System",
    oneLiner:
      "A production retrieval system for call-center operators. Questions outside the knowledge base are categorized and routed to the right department automatically.",
    metric: "~600 daily users · saves ~1 day/week per person",
    stack: ["n8n", "pgvector", "OpenAI"],
    href: "/work/rag-faq",
  },
  {
    index: "03",
    title: "Razeman",
    oneLiner:
      "A modular ERP-style integration platform connecting HR, finance, and operations into one workflow — replacing a fragmented landscape of disconnected systems across a holding company.",
    metric: "9 modules · thousands of users",
    stack: ["ASP.NET Core", "SQL Server", "Redis", "React"],
    href: "#contact",
  },
  {
    index: "04",
    title: "Follow-Up ETL",
    oneLiner:
      "An event-driven pipeline that replaced a legacy batch system, giving automotive industry users near-real-time access to call center data instead of waiting over a week.",
    metric: "3,000+ users · week-long delay → near real time",
    stack: ["ASP.NET Core", "RabbitMQ", "SQL Server"],
    href: "/work/follow-up-etl",
  },
];

export interface ExperienceEntry {
  dateRange: string;
  role: string;
  org: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    dateRange: "2023 — present",
    role: "Senior Software Engineer",
    org: "ReLOOQ, Tehran",
    bullets: [
      "Owned architecture, backend, database design, and frontend of Reception Assistant — an AI-powered dealership platform used by 100+ agencies across a 2,600+ network. Led a major upgrade with LLM text generation, redesigned UI/UX, bulk analysis, and self-trained model integration.",
      "Built a production RAG-based FAQ system using n8n, pgvector, and OpenAI, serving ~600 call center operators daily and saving roughly a full workday per person per week.",
      "Owned full-cycle design and development of Razeman, an ERP-style integration platform unifying 9 organizational modules for thousands of users across a holding company.",
      "Designed and built Reception Assistant ETL — an event-driven pipeline with a runtime management API for field mappings and pipeline control without redeployments.",
      "Contributed to Follow-Up ETL using ASP.NET Core, RabbitMQ, and SQL Server, reducing data latency from over a week to near real time for 3,000+ users.",
      "Contributed to Survey Nexus, a framework-agnostic survey engine in a Turborepo monorepo, now powering CAPI and Retail Audit applications.",
      "Owned DevOps across production, staging, and dev — GitLab CI/CD pipelines deploying to Docker Swarm via Nexus, server infrastructure, and production incident response.",
      "Drove performance improvements through SQL indexing, query rewrites, caching strategies, and architectural refactoring. Mentored 3–4 engineers.",
    ],
  },
  {
    dateRange: "2022 — 2023",
    role: "Full-Stack Developer",
    org: "ReLOOQ, Tehran",
    bullets: [
      "Owned ASI and SI inspection applications for ISQI — inspector workflows, barcode validation, configurable question sets, and automated report generation with Express.js, SQL Server, and React/Next.js.",
      "Owned ASI and SI inspection dashboards — multi-role reporting platforms for dealership performance benchmarking and CSI score review, with admin panels for user and report management.",
      "Contributed to motorcycle and machinery after-sales inspection dashboards with dynamic ECharts visualizations, built with React, Vite, and Redux Toolkit Query.",
      "Optimized SQL Server and PostgreSQL queries, redesigned schemas for evolving requirements, and managed deployments on Linux with Nginx and SSL. Championed TypeScript adoption.",
    ],
  },
  {
    dateRange: "2020 — 2022",
    role: "Front-End Developer (Remote)",
    org: "US Team, Cary, NC",
    bullets: [
      "Developed responsive React/TypeScript UI features, contributing to a 10% rise in user engagement metrics.",
      "Built shared component libraries that increased development velocity by 15% across multiple projects.",
      "Improved page load times by 1.5 seconds through code splitting, lazy loading, and bundle optimization.",
      "Integrated frontend features with REST APIs and improved state management using Redux and Context API.",
    ],
  },
];

export interface EducationEntry {
  degree: string;
  school: string;
  dateRange: string;
}

export const education: EducationEntry = {
  degree: "B.A. in English Translation",
  school: "University of Applied Science and Technology, Tehran",
  dateRange: "Oct 2020 — Aug 2023",
};

export interface LanguageEntry {
  name: string;
  level: string;
}

export const languages: LanguageEntry[] = [
  { name: "English", level: "C1 — Professional working proficiency" },
  { name: "German", level: "B1 — Actively learning" },
  { name: "Persian", level: "Native" },
];

export const about = {
  paragraphs: [
    "Senior Software Engineer with over six years of experience building and owning production systems, with a strong backend focus. I take products from conception to production — owning database schema, service architecture, and deployment — and contribute at a high level across complex, multi-application platforms.",
    "I work in system design, clean architecture, and code that holds up as products scale. Recently I've shipped practical AI integration to production: RAG pipelines and LLM-powered features used by real operators every day — not demos, but systems with routing, fallbacks, and operational constraints.",
  ],
  softSkills: [
    "Problem Solving",
    "System Design",
    "Leadership",
    "Communication",
    "Teamwork",
    "Learning Agility",
  ],
  highlights: [
    "End-to-end product ownership",
    "Event-driven pipelines & system design",
    "Production RAG & LLM integration",
    "DevOps & operational reliability",
    "Mentoring 3–4 engineers",
  ],
};

export interface MoreProject {
  title: string;
  summary: string;
  stack: string[];
  repo?: string;
  demo?: string;
}

export const moreProjects: MoreProject[] = [
  {
    title: "Reception Assistant ETL",
    summary:
      "Event-driven data pipeline with a runtime management API — operators configure field mappings and control pipeline behavior without redeployments.",
    stack: ["ASP.NET Core", "RabbitMQ", "CQRS", "SQL Server"],
  },
  {
    title: "Survey Nexus",
    summary:
      "A framework-agnostic survey engine supporting question logic, conditions, quotas, and SEC classification in a Turborepo monorepo.",
    stack: ["TypeScript", "React", "Jotai", "Turborepo"],
  },
  {
    title: "Retail Audit",
    summary:
      "Retail audit management app — product/barcode audits, configurable questions, and detailed reporting for admins and auditors.",
    stack: ["ASP.NET Core", "EF Core", "SQL Server", "Next.js"],
  },
  {
    title: "CAPI",
    summary:
      "Field survey app with real-time voice recording, location tracking, and quota-based task assignment for interviewers and admins.",
    stack: ["ASP.NET Core", "SQL Server", "Next.js", "TanStack Query"],
  },
  {
    title: "Sales Service Inspection Dashboard",
    summary:
      "Automotive inspection insights dashboard comparing dealership performance, selling strategy, and CSI scores across the network.",
    stack: ["ASP.NET Core", "Dapper", "SQL Server", "React"],
  },
  {
    title: "Sales Service Inspection",
    summary:
      "Modernized after-sales inspection workflow app — redesigned UI, refactored front-end/back-end, and a renewed database design.",
    stack: ["Next.js", "Node.js", "SQL Server", "TypeScript"],
  },
  {
    title: "Motorcycle & Machinery Inspection Dashboards",
    summary:
      "Dashboards presenting years of after-sales inspection data through dynamic ECharts visualizations.",
    stack: ["React", "Vite", "Redux Toolkit Query", "ECharts"],
  },
  {
    title: "After Sales Service Inspection",
    summary:
      "Dynamic checklist-based vehicle inspection app with scheduling, automated PDF output, and reporting for the automotive industry.",
    stack: ["Next.js", "Node.js", "SQL Server", "TypeScript"],
  },
];

export const contact = {
  email: "hadi-bakhshi@outlook.com",
  phone: "+98 930 137 7887",
  location: "Tehran, Iran",
  availability: "Open to remote opportunities in Europe · Open to relocation",
  github: "https://github.com/hadi-bakhshi",
  linkedin: "https://linkedin.com/in/hadi-bakhshi-aa203221b",
};
