import type { CaseStudyDetail } from "./types";

export const receptionAssistant: CaseStudyDetail = {
  slug: "reception-assistant",
  title: "Reception Assistant",
  oneLiner:
    "An internal platform that transforms millions of automotive survey records into real-time customer intelligence, helping dealership receptionists understand customer history, anticipate satisfaction, and personalize every interaction.",
  metric: "100 agencies · 2,600+ dealership network",
  stack: ["NestJS", "React", "SQL Server", "Redis", "RabbitMQ", "Docker"],
  role: "Led backend architecture and implementation, database design, and production AI integration, while contributing to the React frontend. Integrated, containerized, and deployed a self-trained model built by a separate ML team.",
  problem:
    "ISQI runs Iran's nationwide automotive satisfaction survey program on behalf of the Ministry of Industry, Mining and Trade. Every dealership visit generates survey data through ISQI's call-center software, CATI, but until Reception Assistant that information was largely inaccessible during live customer interactions — receptionists had no fast way to see a returning customer's history, predict how a visit would go, or know what to say to protect the dealership's satisfaction score.",
  constraints: [
    "Millions of historical survey responses across five project types, hard to query performantly",
    "Receptionists need an answer in seconds, mid-conversation, not a report to read later",
    "Predictions must produce actionable guidance rather than confidence scores alone",
    "100+ agencies depend on the platform daily — changes can't disrupt live operations",
  ],
  architecture:
    "Reception Assistant is built as a modular NestJS application backed by SQL Server and Redis. Customer and survey data enters the platform asynchronously through Reception Assistant ETL, keeping ingestion independent from the product itself — the product never has to know how or when CATI data was transformed, only that it arrives. RabbitMQ provides the integration boundary between the two systems. On top of that data layer, the application exposes customer history, behavioral prediction, persona analysis, and AI-assisted recommendations through a single interface used by dealership receptionists.",
  decisions: [
    {
      title: "Customer History: full detail, with a faster way in",
      body: "Search by phone number surfaces every vehicle tied to that customer; search by VIN narrows to one vehicle's full service record — dealership, date, reported problem, satisfaction outcome, and complaint detail, all shown in full. Alongside that, an AI-generated summary option condenses the same history into two to three sentences, so a receptionist under time pressure can get the gist instantly without losing the ability to drill into the complete record when they need it.",
    },
    {
      title: "Behavior Analysis: prediction that produces an action",
      body: "The strongest module in the platform. It combines customer profile data (gender, education, mileage, and more), prior survey history, and the defect reported in the current visit to predict satisfaction before service even begins. The output isn't just a score — it's a 1–7 satisfaction likelihood, a weighted breakdown of which factors that specific customer is sensitive to, and an LLM-generated script telling the receptionist how to handle the conversation to protect the dealership's CSI score.",
    },
    {
      title: "Persona: from one customer to a segment",
      body: "Same inputs as Behavior Analysis, aggregated instead of individual. A dealership can ask what satisfaction looks like for, say, S500 Benz owners aged 20–35, and get back the specific factors that drive that segment's satisfaction — turning individual predictions into a planning tool.",
    },
    {
      title: "AI integration as a production concern, not a model-building exercise",
      body: "The predictive model and LLM logic came from a separate ML team. My responsibility was making it usable in production: containerizing the model and its API layer, deploying it alongside core services, writing the database queries that fed it and consumed its output, and closing the loop with structured feedback from real usage that informed model refinement.",
    },
  ],
  tradeoffs: [
    {
      title: "Monolith API vs. microservices",
      body: "Reception Assistant stayed a cohesive NestJS service rather than splitting prematurely. Event-driven boundaries via RabbitMQ handle integration with ETL and downstream analytics instead, keeping the core product simple to reason about.",
    },
    {
      title: "Self-trained model vs. general-purpose API",
      body: "A self-trained model handles domain-specific prediction where automotive terminology and local survey patterns matter, while LLM text generation handles the more general summarization and script-writing tasks — trading extra operational complexity for accuracy where it counts most.",
    },
  ],
  impact: [
    "Deployed across 100 agencies in a 2,600+ dealership network",
    "Reduced customer-history lookup from reading full survey records to a 2–3 sentence AI summary",
    "Behavior Analysis and Persona became part of daily dealership workflows, providing both customer-level recommendations and population-level insight",
    "Self-trained model integrated, containerized, and deployed to production with an ongoing feedback loop",
  ],
  diagram: {
    viewBox: "0 0 720 220",
    ariaLabel:
      "Architecture diagram: dealership visits generate CATI surveys that flow through Reception Assistant ETL into Reception Assistant, where receptionists access customer history, behavior analysis, and AI-assisted insight",
    nodes: [
      { id: "dealers", label: "Dealers", sub: "100+ agencies", x: 60, y: 110 },
      { id: "cati", label: "CATI", sub: "Call-center surveys", x: 190, y: 110 },
      { id: "etl", label: "RA-ETL", sub: "Real-time sync", x: 320, y: 110 },
      { id: "api", label: "API", sub: "NestJS", x: 450, y: 110 },
      { id: "cache", label: "Cache", sub: "Redis", x: 450, y: 40 },
      { id: "db", label: "DB", sub: "SQL Server", x: 450, y: 180 },
      { id: "ai", label: "AI", sub: "LLM + Model", x: 580, y: 60 },
      { id: "reception", label: "Receptionist", sub: "Live use", x: 650, y: 160 },
    ],
    edges: [
      { from: "dealers", to: "cati" },
      { from: "cati", to: "etl" },
      { from: "etl", to: "api" },
      { from: "api", to: "cache" },
      { from: "api", to: "db" },
      { from: "api", to: "ai" },
      { from: "ai", to: "reception" },
      { from: "api", to: "reception" },
    ],
  },
};