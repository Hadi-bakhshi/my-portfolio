import type { CaseStudyDetail } from "./types";

export const followUpEtl: CaseStudyDetail = {
  slug: "follow-up-etl",
  title: "Follow-Up ETL",
  oneLiner:
    "An event-driven pipeline that replaced a legacy batch system, delivering near-real-time call center data to 3,000+ automotive industry users.",
  metric: "3,000+ users · week-long delay → near real time",
  stack: ["ASP.NET Core", "RabbitMQ", "SQL Server", "MediatR"],
  role: "Contributed to design and implementation",
  problem:
    "A legacy batch ETL process left 3,000+ automotive industry users waiting over a week to see their call center follow-up data in dashboards. Decisions were made on stale information, support tickets piled up, and the old system could not keep pace with growing data volume.",
  constraints: [
    "Legacy system could not be shut down overnight — migration had to be incremental",
    "Downstream dashboards expected a specific relational schema in SQL Server",
    "Peak load spikes during business hours when call volume is highest",
    "Pipeline failures must be observable and recoverable without data loss",
  ],
  architecture:
    "ASP.NET Core services consume events from RabbitMQ, transform and validate records, and write to SQL Server tables that power existing dashboards. The pipeline replaces periodic batch dumps with a continuous flow: source systems publish changes, workers process them in parallel, and consumers see updates within minutes instead of days. MediatR keeps handler logic isolated and testable across pipeline stages.",
  decisions: [
    {
      title: "RabbitMQ for backpressure and replay",
      body: "Message queues decouple producers from consumers and let the pipeline absorb load spikes without dropping records. Failed messages can be retried or dead-lettered for inspection.",
    },
    {
      title: "Incremental migration alongside legacy",
      body: "Ran the new pipeline in parallel with the batch system until dashboard data matched. Users switched over only after validation — avoiding a big-bang cutover risk.",
    },
    {
      title: "SQL Server as the single read model",
      body: "Kept the existing dashboard query layer unchanged by writing to the same SQL Server schema. Reduced frontend churn and let the team focus on pipeline reliability.",
    },
    {
      title: "Stage-based handlers with MediatR",
      body: "Each transformation step (validate, enrich, persist) is a discrete handler. Easier to test, extend, and reason about than a monolithic ETL script.",
    },
  ],
  tradeoffs: [
    {
      title: "Eventual consistency vs batch simplicity",
      body: "Near-real-time delivery means dashboards may briefly lag source systems by minutes. Acceptable trade for users who previously waited 7+ days.",
    },
    {
      title: "Queue operational overhead",
      body: "RabbitMQ adds infrastructure to monitor versus a cron job. Justified by replay capability, parallel workers, and the ability to scale consumers independently.",
    },
  ],
  impact: [
    "3,000+ automotive industry users now see data in near real time",
    "Reduced latency from over a week to minutes",
    "Replaced fragile legacy batch process with observable event-driven pipeline",
    "Downstream dashboards unchanged — zero frontend migration cost",
  ],
  diagram: {
    viewBox: "0 0 720 220",
    ariaLabel:
      "Architecture diagram: legacy batch system replaced by source events through RabbitMQ to ASP.NET Core workers writing to SQL Server dashboards",
    nodes: [
      { id: "legacy", label: "Legacy", sub: "Batch (1 wk)", x: 70, y: 50 },
      { id: "source", label: "Source", sub: "Call data", x: 70, y: 150 },
      { id: "mq", label: "MQ", sub: "RabbitMQ", x: 250, y: 150 },
      { id: "worker", label: "ETL", sub: "ASP.NET Core", x: 400, y: 150 },
      { id: "db", label: "DB", sub: "SQL Server", x: 550, y: 150 },
      { id: "dash", label: "Dash", sub: "3,000+ users", x: 650, y: 150 },
    ],
    edges: [
      { from: "source", to: "mq" },
      { from: "mq", to: "worker" },
      { from: "worker", to: "db" },
      { from: "db", to: "dash" },
    ],
  },
};
