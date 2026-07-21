import type { CaseStudyDetail } from "./types";

export const receptionAssistantEtl: CaseStudyDetail = {
  slug: "reception-assistant-etl",
  title: "Reception Assistant ETL",
  oneLiner:
    "A real-time, event-driven pipeline built this year to replace three years of manual data uploads — syncing call-center survey data into Reception Assistant through RabbitMQ topic exchange, inbox/outbox messaging, and a configurable survey-mapping engine.",
  metric: "Millions of records · manual upload → real-time sync",
  stack: ["ASP.NET Core", "EF Core", "MediatR", "FluentValidation", "RabbitMQ", "SQL Server", "Next.js"],
  role: "Designed and built the pipeline end to end — backend, mapping engine, messaging architecture, and the frontend mapping UI",
  problem:
    "Reception Assistant had been in production for three years, but its data pipeline was manual: an admin pulled survey data from CATI, cleaned it, and uploaded it by hand — at a scale of millions of rows across five survey project types. This meant delays between when a survey was completed and when a receptionist could see it, and every new CATI project required manual remapping. This year, I designed and built an independent service to replace that process with real-time, automated synchronization.",
  constraints: [
    "Existing production data couldn't be interrupted while the new pipeline was introduced",
    "CATI's survey structure (projects, questions, choices) doesn't map one-to-one to Reception Assistant's — many CATI projects can map to a single RA project depending on type",
    "Follow-Up ETL, a separate system, needs some of the same survey-completion events — the two must not be tightly coupled",
    "Message delivery must be reliable and idempotent; duplicate or lost events corrupt customer history and prediction data",
  ],
  architecture:
    "When a CATI survey completes, a job publishes an event using the outbox pattern to a RabbitMQ topic exchange. The exchange exists because both Reception Assistant ETL and Follow-Up ETL need overlapping events, and neither the publisher nor the topic exchange needs to know which consumers exist — each service binds dynamically by project ID, so new consumers can be added later without touching the publishing side. Two failure paths are handled explicitly: messages that don't match any binding are captured by an alternate exchange instead of being silently dropped, and messages that fail processing repeatedly are dead-lettered into a poison queue rather than blocking or endlessly retrying the pipeline. On the happy path, Reception Assistant ETL receives the message, uses the inbox pattern to guarantee idempotency, and stages it. A background job then runs the mapping and transformation — resolving which CATI project, question, and choice correspond to which Reception Assistant equivalent — before publishing the transformed result via its own outbox to a queue that Reception Assistant consumes.",
  decisions: [
    {
      title: "Topic exchange because consumers evolve independently",
      body: "Follow-Up ETL and Reception Assistant ETL both need survey-completion events, but for different projects and purposes, and each was built and evolves on its own timeline. A topic exchange with dynamic project-ID bindings lets each service subscribe to exactly what it needs without the publisher ever knowing who's listening — the producer doesn't need to change when a new consumer appears.",
    },
    {
      title: "Poison and unrouted message handling",
      body: "Two failure modes needed explicit handling rather than silent failure: messages that don't match any exchange binding, and messages that repeatedly fail processing. Unrouted messages are captured through an alternate exchange instead of being dropped. Messages that fail beyond a retry threshold are dead-lettered into a poison queue for inspection, so one malformed or unexpected survey record can't stall the entire pipeline or get lost.",
    },
    {
      title: "Inbox/outbox for guaranteed, idempotent delivery",
      body: "At million-row scale, a duplicated or dropped message means corrupted customer history. The inbox pattern deduplicates incoming events before processing; the outbox pattern guarantees that publishing downstream events is atomic with the database write that produced them. Together they make the pipeline safe to retry without side effects.",
    },
    {
      title: "A UI for mapping, not a hardcoded mapping table",
      body: "CATI's projects, questions, and choices don't map one-to-one to Reception Assistant's, and that mapping changes as new survey projects launch. Rather than hardcoding it, I built a UI where an operator can see CATI's structure alongside Reception Assistant's and define the mapping directly — including many-to-one project mappings by type — without needing a code change or redeploy.",
    },
  ],
  tradeoffs: [
    {
      title: "Eventual consistency vs. the old manual process",
      body: "Data now arrives within a real-time processing window instead of instantly — a deliberate trade for reliability and correctness at scale. This is still a categorical improvement over a process that previously took an admin hours or days to complete manually.",
    },
    {
      title: "Messaging overhead vs. simplicity",
      body: "RabbitMQ, inbox/outbox, and a topic exchange add operational surface area compared to a direct database-to-database sync. Justified by the need for reliable delivery, decoupling from Follow-Up ETL, and the ability to scale ingestion independently of Reception Assistant itself.",
    },
  ],
  impact: [
    "Eliminated a manual operational process that had existed for three years",
    "Replaced admin-driven uploads with real-time automated sync at million-row scale",
    "Decoupled Reception Assistant's data ingestion from Follow-Up ETL despite both consuming overlapping survey events",
    "Gave operators a self-service UI to configure new survey mappings without engineering involvement",
  ],
  diagram: {
    viewBox: "0 0 760 360",
    ariaLabel:
      "Architecture diagram: CATI survey completion publishes an event via outbox to a RabbitMQ topic exchange, branching to Follow-Up ETL and Reception Assistant ETL as independent consumers, with unrouted messages captured by an alternate exchange and failed messages dead-lettered to a poison queue; successfully consumed messages go through Reception Assistant ETL's inbox, mapping engine, and outbox to Reception Assistant",
    nodes: [
      { id: "cati", label: "CATI", sub: "Survey completes", x: 50, y: 160 },
      { id: "outbox1", label: "Outbox", sub: "Publish event", x: 170, y: 160 },
      { id: "mq", label: "Topic Exchange", sub: "RabbitMQ", x: 300, y: 160 },
      { id: "altmq", label: "Alternate Exchange", sub: "Unrouted messages", x: 300, y: 45 },
      { id: "followup", label: "Follow-Up ETL", sub: "Independent consumer", x: 430, y: 50 },
      { id: "inbox", label: "Inbox", sub: "Idempotency", x: 430, y: 160 },
      { id: "dlq", label: "Poison Queue", sub: "Dead-lettered after retries", x: 430, y: 280 },
      { id: "mapping", label: "Mapping Engine", sub: "Transform", x: 570, y: 160 },
      { id: "outbox2", label: "Outbox", sub: "Publish result", x: 570, y: 270 },
      { id: "ra", label: "Reception Assistant", sub: "Customer history + prediction", x: 700, y: 220 },
    ],
    edges: [
      { from: "cati", to: "outbox1" },
      { from: "outbox1", to: "mq" },
      { from: "mq", to: "altmq" },
      { from: "mq", to: "followup" },
      { from: "mq", to: "inbox" },
      { from: "inbox", to: "dlq" },
      { from: "inbox", to: "mapping" },
      { from: "mapping", to: "outbox2" },
      { from: "outbox2", to: "ra" },
    ],
  },
};