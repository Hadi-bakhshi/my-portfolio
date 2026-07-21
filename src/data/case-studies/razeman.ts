import type { CaseStudyDetail } from "./types";

export const razeman: CaseStudyDetail = {
  slug: "razeman",
  title: "Razeman",
  oneLiner:
    "An ERP-style internal platform unifying HR, finance, and operations into one modular system, replacing a fragmented landscape of disconnected tools across a holding company.",
  metric: "9 modules · thousands of users",
  stack: ["ASP.NET Core", "SQL Server", "Redis", "React", "EF Core"],
  role: "Owned full-cycle design and development — architecture, backend, database design, and frontend — from initial module boundaries through production deployment.",
  problem:
    "A holding company ran day-to-day work across disconnected tools for HR, finance, and operations. Staff re-entered the same data in multiple systems, reporting required manual reconciliation, and each new process meant another siloed app. Leadership needed one platform that could grow module by module without rewriting the whole stack every time a department joined.",
  constraints: [
    "Nine organizational domains had to share identity, permissions, and cross-module workflows without becoming a single unmaintainable codebase",
    "Thousands of users across the holding company — downtime and schema mistakes would halt real business operations",
    "Existing departmental processes could not all migrate on day one; modules had to ship independently",
    "Data consistency across HR, finance, and operations mattered more than shipping a flashy UI",
  ],
  architecture:
    "Razeman is a modular ASP.NET Core platform backed by SQL Server, with Redis for session and hot-path caching. Each organizational domain ships as a module with its own bounded context — shared infrastructure handles authentication, authorization, and cross-cutting concerns, while module APIs expose domain operations to a React frontend. New modules plug into the same host without forcing a rewrite of existing ones, keeping deployment and ownership boundaries clear as the platform grows.",
  decisions: [
    {
      title: "Modular monolith over premature microservices",
      body: "Nine domains shared strong transactional needs and a single ops team. A modular monolith kept deployment simple and cross-module workflows coherent, while still enforcing module boundaries so domains could evolve independently — avoiding the operational cost of nine services before the product had proven itself.",
    },
    {
      title: "Ship modules independently, share the platform",
      body: "HR, finance, and operations did not migrate together. The platform core (identity, permissions, shared UI shell) landed first; each module followed when that department was ready. That sequencing cut big-bang risk and let early modules validate patterns for later ones.",
    },
    {
      title: "One source of truth per domain",
      body: "Instead of syncing departmental tools forever, each module became the system of record for its domain. Cross-module reads go through explicit APIs rather than shared tables, so finance does not quietly depend on HR schema internals.",
    },
    {
      title: "Redis for hot paths, SQL Server for truth",
      body: "Operational dashboards and session-heavy flows needed low latency without compromising durable records. Redis absorbs repeated reads; SQL Server remains the authoritative store for audits, payroll-adjacent data, and reporting.",
    },
  ],
  tradeoffs: [
    {
      title: "Modular monolith vs microservices",
      body: "A single deployable unit is simpler to operate and reason about, but a poorly bounded module can still couple the whole release. Mitigated with clear module ownership and avoiding shared database tables across domains.",
    },
    {
      title: "Phased migration vs full cutover",
      body: "Running old tools alongside Razeman during rollout meant temporary dual entry for some teams. Accepted the short-term friction to avoid a holding-wide freeze while nine modules were unfinished.",
    },
  ],
  impact: [
    "Unified 9 organizational modules — including HR, finance, and operations — on one platform",
    "Deployed across a holding company with thousands of users",
    "Replaced a fragmented landscape of disconnected departmental tools",
    "Established reusable module patterns so later domains could join without redesigning the core",
  ],
  diagram: {
    viewBox: "0 0 720 320",
    ariaLabel:
      "Architecture diagram: users access Razeman through a React shell into a modular ASP.NET Core host with HR, finance, and operations modules backed by SQL Server and Redis",
    nodes: [
      { id: "users", label: "Users", sub: "Thousands", x: 70, y: 150 },
      { id: "ui", label: "React", sub: "Shared shell", x: 200, y: 150 },
      { id: "host", label: "Host", sub: "ASP.NET Core", x: 340, y: 150 },
      { id: "hr", label: "HR", sub: "Module", x: 480, y: 50 },
      { id: "fin", label: "Finance", sub: "Module", x: 480, y: 150 },
      { id: "ops", label: "Ops", sub: "+6 modules", x: 480, y: 250 },
      { id: "db", label: "SQL", sub: "System of record", x: 620, y: 100 },
      { id: "cache", label: "Redis", sub: "Hot paths", x: 620, y: 200 },
    ],
    edges: [
      { from: "users", to: "ui" },
      { from: "ui", to: "host" },
      { from: "host", to: "hr" },
      { from: "host", to: "fin" },
      { from: "host", to: "ops" },
      { from: "hr", to: "db" },
      { from: "fin", to: "db" },
      { from: "ops", to: "cache" },
      { from: "fin", to: "cache" },
    ],
  },
};
