import type { CaseStudyDetail } from "./types";

export const receptionAssistant: CaseStudyDetail = {
  slug: "reception-assistant",
  title: "Reception Assistant",
  oneLiner:
    "An AI-powered dealership platform for customer history, behavior analysis, and satisfaction insights at scale.",
  metric: "100+ agencies · 2,600+ dealership network",
  stack: ["NestJS", "React", "RabbitMQ", "Redis", "SQL Server", "Prisma", "OpenAI"],
  role: "Owned architecture, backend, database design, and frontend",
  problem:
    "After-sales service centers across a large dealership network needed a unified way to track customer history, analyze behavior, and act on satisfaction signals. Data volume was high, agencies operated independently, and generic CRM tooling did not fit automotive workflows or Persian-language operator needs.",
  constraints: [
    "High data volume across 2,600+ dealerships with agency-level isolation",
    "Operators need fast lookup during live customer interactions",
    "AI insights must be actionable for service advisors, not black-box scores",
    "Platform must evolve without disrupting daily operations at 100+ agencies",
  ],
  architecture:
    "A NestJS backend with a database-first SQL Server model (Prisma) serves a React frontend. Redis handles caching for hot paths. RabbitMQ connects Reception Assistant to downstream ETL and analytics pipelines. A major platform upgrade added LLM-based text generation, bulk analysis for high-volume agencies, and integration of a self-trained model — containerized and deployed alongside the core services.",
  decisions: [
    {
      title: "Database-first with Prisma",
      body: "Given the volume of historical customer data and complex relational queries, SQL Server with a database-first approach and Prisma scaffolding gave predictable performance and a schema the team could evolve with migrations.",
    },
    {
      title: "Event bus for downstream pipelines",
      body: "Customer and service events publish to RabbitMQ so ETL and Follow-Up systems consume data without tight coupling. Agencies keep using Reception Assistant while analytics catch up asynchronously.",
    },
    {
      title: "LLM features behind product workflows",
      body: "Text generation and bulk analysis ship as operator-facing workflows — not standalone chat. Structured feedback from production usage feeds back into model accuracy improvements.",
    },
    {
      title: "Redis on read-heavy paths",
      body: "Frequently accessed customer profiles and session context are cached to keep response times stable during peak service hours across time zones.",
    },
  ],
  tradeoffs: [
    {
      title: "Monolith API vs microservices",
      body: "Kept core Reception Assistant as a cohesive NestJS service rather than splitting prematurely. Event-driven boundaries handle integration with ETL and analytics instead.",
    },
    {
      title: "Self-trained model vs API-only",
      body: "Integrated a self-trained model for domain-specific insights while using OpenAI for general text generation — trading operational complexity for better accuracy on automotive terminology.",
    },
  ],
  impact: [
    "Deployed across 100+ agencies in a 2,600+ dealership network",
    "LLM upgrade with bulk analysis for high-volume agencies",
    "Self-trained model integrated, containerized, and deployed to production",
    "Structured operator feedback loop improving model accuracy over time",
  ],
  diagram: {
    viewBox: "0 0 720 220",
    ariaLabel:
      "Architecture diagram: dealerships connect to Reception Assistant API, which uses Redis cache and SQL Server, publishing events to RabbitMQ for ETL and AI analysis",
    nodes: [
      { id: "dealers", label: "Dealers", sub: "100+ agencies", x: 70, y: 110 },
      { id: "api", label: "API", sub: "NestJS", x: 220, y: 110 },
      { id: "cache", label: "Cache", sub: "Redis", x: 220, y: 40 },
      { id: "db", label: "DB", sub: "SQL Server", x: 220, y: 180 },
      { id: "mq", label: "MQ", sub: "RabbitMQ", x: 400, y: 110 },
      { id: "etl", label: "ETL", sub: "Pipeline", x: 550, y: 60 },
      { id: "ai", label: "AI", sub: "LLM + Model", x: 550, y: 160 },
    ],
    edges: [
      { from: "dealers", to: "api" },
      { from: "api", to: "cache" },
      { from: "api", to: "db" },
      { from: "api", to: "mq" },
      { from: "mq", to: "etl" },
      { from: "mq", to: "ai" },
    ],
  },
};
