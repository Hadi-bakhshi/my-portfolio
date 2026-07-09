import type { CaseStudyDetail } from "./types";

export const ragFaq: CaseStudyDetail = {
  slug: "rag-faq",
  title: "RAG FAQ System",
  oneLiner:
    "A production retrieval system that answers routine call-center questions and routes unknowns to the right department.",
  metric: "~600 daily operators · ~1 day/week saved per person",
  stack: ["n8n", "pgvector", "PostgreSQL", "OpenAI"],
  role: "Designed and built end-to-end",
  problem:
    "Call center operators handling thousands of daily interactions constantly interrupted HR, finance, and QA staff for routine policy questions. Answers lived in scattered documents with no single searchable source of truth, and wait times for simple questions added up across ~600 operators.",
  constraints: [
    "Operators need answers in seconds during live calls",
    "Knowledge base spans HR, finance, QA, and operations — each with different owners",
    "Questions outside the KB must reach the right department, not a dead end",
    "Solution must run reliably in production without dedicated ML ops headcount",
  ],
  architecture:
    "n8n orchestrates the workflow: operator query → embedding → pgvector similarity search over a curated document index → OpenAI generation grounded in retrieved chunks. When confidence is low or no match exists, the system categorizes the question and routes it to the relevant department for human follow-up. PostgreSQL with pgvector keeps vectors co-located with operational metadata.",
  decisions: [
    {
      title: "pgvector over a dedicated vector DB",
      body: "pgvector on existing PostgreSQL infrastructure avoided a new operational dependency. For document-scale retrieval serving ~600 daily users, co-located vectors simplified backups, monitoring, and deployment.",
    },
    {
      title: "n8n for orchestration",
      body: "Workflow changes (new departments, routing rules, prompt tweaks) can be adjusted by the team without redeploying application code — important for a system that evolves with policy updates.",
    },
    {
      title: "Automatic fallback routing",
      body: "Rather than hallucinating on unknown questions, unmatched queries are categorized and forwarded to HR, finance, or QA. This preserves trust with operators who rely on the system during live calls.",
    },
    {
      title: "Grounded generation only",
      body: "OpenAI responses are constrained to retrieved context chunks. Operators see answers tied to source documents, reducing fabricated policy guidance.",
    },
  ],
  tradeoffs: [
    {
      title: "Workflow tool vs custom service",
      body: "n8n trades some type-safety and testability for faster iteration on routing logic. Acceptable because the core retrieval contract is stable and changes are mostly orchestration-level.",
    },
    {
      title: "Embedding refresh cadence",
      body: "Documents are re-indexed on a schedule rather than real-time. Simpler operations; policy updates may lag by hours — mitigated with a manual re-index trigger for urgent changes.",
    },
  ],
  impact: [
    "~600 call center operators use the system daily",
    "Eliminated routine interruptions to HR, finance, and QA staff",
    "Saves roughly a full workday per operator per week on repetitive lookups",
    "Unknown questions automatically categorized and routed to owning departments",
  ],
  diagram: {
    viewBox: "0 0 720 220",
    ariaLabel:
      "Architecture diagram: operator query flows through n8n to pgvector retrieval, OpenAI generation, or department routing fallback",
    nodes: [
      { id: "op", label: "Operator", sub: "~600 daily", x: 70, y: 110 },
      { id: "n8n", label: "n8n", sub: "Orchestrator", x: 200, y: 110 },
      { id: "embed", label: "Embed", sub: "OpenAI", x: 340, y: 50 },
      { id: "vec", label: "Search", sub: "pgvector", x: 340, y: 110 },
      { id: "llm", label: "LLM", sub: "Grounded answer", x: 340, y: 170 },
      { id: "route", label: "Route", sub: "Dept fallback", x: 500, y: 170 },
      { id: "dept", label: "Dept", sub: "HR · Fin · QA", x: 620, y: 170 },
    ],
    edges: [
      { from: "op", to: "n8n" },
      { from: "n8n", to: "embed" },
      { from: "embed", to: "vec" },
      { from: "vec", to: "llm" },
      { from: "n8n", to: "route" },
      { from: "route", to: "dept" },
    ],
  },
};
