export interface Metric {
  label: string;
  value: string;
}

export const metrics: Metric[] = [
  { value: "100+", label: "agencies on Reception Assistant" },
  { value: "2,600+", label: "dealership network" },
  { value: "~600", label: "daily FAQ operators" },
  { value: "3,000+", label: "users on Follow-Up" },
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
    oneLiner: "AI-powered dealership platform for customer history and satisfaction insights.",
    metric: "100+ agencies · 2,600+ dealership network",
    stack: ["NestJS", "React", "RabbitMQ", "Redis"],
    href: "#",
  },
  {
    index: "02",
    title: "RAG FAQ System",
    oneLiner: "Production retrieval-augmented FAQ system for call center operators.",
    metric: "~600 daily users · saves ~1 day/week per person",
    stack: ["n8n", "pgvector", "OpenAI"],
    href: "#",
  },
  {
    index: "03",
    title: "Razeman",
    oneLiner: "Internal ERP-style integration platform unifying organizational modules.",
    metric: "9 modules · thousands of users",
    stack: ["ASP.NET Core", "SQL Server", "React"],
    href: "#",
  },
  {
    index: "04",
    title: "Reception Assistant ETL",
    oneLiner: "Event-driven data pipeline with runtime-configurable field mappings.",
    metric: "Zero-redeploy configuration changes",
    stack: ["ASP.NET Core", "RabbitMQ", "CQRS"],
    href: "#",
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
    "I'm a backend-focused software engineer with six years of experience building systems that hold up as products scale — API design, data modeling, and the architecture decisions that pay off well after launch.",
    "I like staying close to the technical edge: new frameworks, architectural patterns, and problems that don't have an obvious answer yet. Alongside backend work, I've shipped full-stack features end-to-end, mentored engineers, and owned DevOps for the systems I build.",
  ],
  softSkills: ["Problem Solving", "System Design", "Leadership", "Communication", "Teamwork", "Learning Agility"],
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
  {
    title: "Mock API for Teaching",
    summary:
      "A minimal-API CRUD service built to teach advanced TanStack Query concepts, using the file system in place of a database.",
    stack: ["ASP.NET Core", "Minimal API"],
    repo: "https://github.com/Hadi-bakhshi/MockAPIsForTeaching",
  },
  {
    title: "Domain Modeling with DDD",
    summary:
      "A Domain-Driven Design boilerplate separating Domain and Persistence layers, built with EF Core and SQL Server.",
    stack: ["C#", "EF Core", "SQL Server", "DDD"],
    repo: "https://github.com/Hadi-bakhshi/EShop-DDD",
  },
  {
    title: "Experimental NestJS Back-end",
    summary: "A user management module with authentication, role-based access control, and full e2e test coverage.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Jest"],
    repo: "https://github.com/Hadi-bakhshi/Experimental-NestJS-Project",
  },
  {
    title: "Clean Architecture in NestJS",
    summary:
      "An open-source NestJS boilerplate implementing four-layer Clean Architecture with JWT auth, Swagger docs, and structured logging.",
    stack: ["NestJS", "TypeORM", "Swagger", "Jest"],
    repo: "https://github.com/Hadi-bakhshi/clean-arch-nestjs",
  },
  {
    title: "Google Drive App",
    summary: "Converts shared Google Drive links into direct download and embeddable media links.",
    stack: ["JavaScript", "CSS"],
    repo: "https://github.com/Hadi-bakhshi/Googledriveapp",
    demo: "https://googledriveapp.vercel.app/",
  },
  {
    title: "Expense Tracker",
    summary: "Personal finance tracker with income/expense entry and interactive charts of spending patterns.",
    stack: ["React", "TailwindCSS"],
    repo: "https://github.com/Hadi-bakhshi/expense-tracker",
  },
  {
    title: "Mahtisa Shop",
    summary: "A full-stack MERN e-commerce demo with cart, account creation, and simulated checkout.",
    stack: ["React", "Express", "MongoDB"],
    repo: "https://github.com/Hadi-bakhshi/mahtisa-shopping",
    demo: "https://mahtisa-shopping-center.vercel.app/",
  },
];

export const contact = {
  email: "hadi-bakhshi@outlook.com",
  phone: "+98 930 137 7887",
  github: "https://github.com/hadi-bakhshi",
  linkedin: "https://linkedin.com/in/hadi-bakhshi-aa203221b",
};
