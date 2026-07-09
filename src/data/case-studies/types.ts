export interface DiagramNode {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
}

export interface DiagramEdge {
  from: string;
  to: string;
}

export interface CaseStudyDetail {
  slug: string;
  title: string;
  oneLiner: string;
  metric: string;
  stack: string[];
  role: string;
  problem: string;
  constraints: string[];
  architecture: string;
  decisions: { title: string; body: string }[];
  tradeoffs: { title: string; body: string }[];
  impact: string[];
  diagram: {
    viewBox: string;
    nodes: DiagramNode[];
    edges: DiagramEdge[];
    ariaLabel: string;
  };
}
