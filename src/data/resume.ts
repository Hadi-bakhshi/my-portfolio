export interface Metric {
  label: string;
  value: string;
}

export const metrics: Metric[] = [
  { value: "6 yrs", label: "shipping production systems" },
  { value: "100+", label: "agencies on Reception Assistant" },
  { value: "2,600+", label: "dealership network" },
  { value: "~600", label: "daily FAQ operators" },
  { value: "9", label: "ERP modules unified" },
];

export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  { label: "Languages", items: ["C#", "TypeScript", "JavaScript"] },
  {
    label: "Backend",
    items: ["ASP.NET Core", "NestJS", "RabbitMQ", "EF Core", "MediatR", "gRPC", "GraphQL"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "Zustand", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Databases",
    items: ["SQL Server", "PostgreSQL", "Redis", "Qdrant", "pgvector"],
  },
  { label: "AI & LLM", items: ["OpenAI API", "RAG", "Vector Search"] },
  {
    label: "DevOps",
    items: ["Docker Swarm", "GitLab CI/CD", "Nginx", "Prometheus", "Grafana"],
  },
  {
    label: "Architecture",
    items: ["Event-Driven", "CQRS", "Saga", "Inbox/Outbox", "DDD"],
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
      "An AI-native dealership platform that turns customer history into actionable service and satisfaction insights.",
    metric: "100+ agencies · 2,600+ dealership network",
    stack: ["NestJS", "React", "RabbitMQ", "Redis"],
    href: "#contact",
  },
  {
    index: "02",
    title: "RAG FAQ System",
    oneLiner:
      "A production retrieval system for call-center operators that reduces repetitive questions and shortens response time.",
    metric: "~600 daily users · saves ~1 day/week per person",
    stack: ["n8n", "pgvector", "OpenAI"],
    href: "#contact",
  },
  {
    index: "03",
    title: "Razeman",
    oneLiner:
      "An internal ERP-style integration platform that unifies 9 organizational modules behind one dependable workflow.",
    metric: "9 modules · thousands of users",
    stack: ["ASP.NET Core", "SQL Server", "React"],
    href: "#contact",
  },
  {
    index: "04",
    title: "Reception Assistant ETL",
    oneLiner:
      "An event-driven data pipeline with runtime-configurable mappings that kept operations flexible without redeployments.",
    metric: "Zero-redeploy configuration changes",
    stack: ["ASP.NET Core", "RabbitMQ", "CQRS"],
    href: "#contact",
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
      "Owned architecture, backend, database design, and frontend of Reception Assistant, used by 100+ agencies across a 2,600+ dealership network.",
      "Built a production RAG-based FAQ system serving ~600 call center operators daily.",
      "Led full-cycle design of Razeman, an ERP-style integration platform unifying 9 organizational modules.",
      "Designed Reception Assistant ETL, an event-driven pipeline built on RabbitMQ with runtime-configurable field mappings.",
      "Introduced a microservices architecture and migrated several services from SQL to NoSQL to support large-scale traffic.",
      "Cut API response times by 15% by rewriting heavy database queries and refactoring key services.",
      "Built a modular survey engine inside a Turborepo monorepo, producing reusable packages powering the CAPI, CATI, and CAWI apps.",
      "Owned DevOps end-to-end — GitLab CI/CD and GitHub Actions pipelines deploying to Docker Swarm via Nexus.",
      "Led architectural decisions, ran code reviews, and mentored 3–4 engineers.",
    ],
  },
  {
    dateRange: "2022 — 2023",
    role: "Full-Stack Developer",
    org: "ReLOOQ, Tehran",
    bullets: [
      "Owned ASI and SI inspection applications for ISQI — inspector workflows, barcode validation, automated report generation.",
      "Owned multi-role inspection dashboards for dealership performance and CSI benchmarking.",
      "Created an AI-powered Reception Assistant app to personalize dealership services and improve customer experience.",
      "Reduced manual reporting time by 40% by building automated reporting and monitoring tools with Node.js and .NET.",
      "Optimized SQL Server and PostgreSQL queries; championed TypeScript adoption across teams.",
    ],
  },
  {
    dateRange: "2020 — 2022",
    role: "Front-End Developer (Remote)",
    org: "US Team, Cary, NC",
    bullets: [
      "Developed responsive React/TypeScript UI features, contributing to a 10% rise in user engagement.",
      "Built shared component libraries, increasing development velocity by 15% across multiple projects.",
      "Improved page load times by 1.5 seconds through code splitting, lazy loading, and bundle optimization.",
      "Worked closely with senior engineers to integrate frontend features with REST APIs and improve data flow.",
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
    "I’m a backend-focused software engineer with six years of experience building systems that stay reliable as products grow — from API design and data modeling to architecture decisions that pay off long after launch.",
    "I enjoy the full lifecycle of products: shaping the architecture, shipping the core services, and making sure the platform is operationally sound. I’ve worked across AI-enabled products, internal platforms, and data-heavy workflows, and I’m most energized by work that couples strong engineering with real product impact.",
  ],
  softSkills: ["Problem Solving", "System Design", "Leadership", "Communication", "Teamwork", "Learning Agility"],
  highlights: [
    "System design and architecture",
    "Backend-first product delivery",
    "AI integrations and RAG systems",
    "Operational reliability and DevOps",
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
    title: "Survey Nexus",
    summary:
      "A framework-agnostic survey engine supporting question logic, conditions, and quotas, built with builder, factory, observer, and state patterns in a Turborepo monorepo.",
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
    summary: "Dashboards presenting years of after-sales inspection data through dynamic ECharts visualizations.",
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
  github: "https://github.com/hadi-bakhshi",
  linkedin: "https://linkedin.com/in/hadi-bakhshi-aa203221b",
};
