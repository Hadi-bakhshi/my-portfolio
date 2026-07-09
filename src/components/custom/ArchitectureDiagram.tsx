import type { CaseStudyDetail } from "@/data/case-studies/types";

interface ArchitectureDiagramProps {
  diagram: CaseStudyDetail["diagram"];
}

function edgePath(nodes: CaseStudyDetail["diagram"]["nodes"], fromId: string, toId: string): string {
  const from = nodes.find((n) => n.id === fromId);
  const to = nodes.find((n) => n.id === toId);
  if (!from || !to) return "";

  const midX = (from.x + to.x) / 2;
  return `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
}

export function ArchitectureDiagram({ diagram }: ArchitectureDiagramProps) {
  return (
    <svg
      viewBox={diagram.viewBox}
      className="w-full"
      role="img"
      aria-label={diagram.ariaLabel}
    >
      {diagram.edges.map((edge) => (
        <path
          key={`${edge.from}-${edge.to}`}
          d={edgePath(diagram.nodes, edge.from, edge.to)}
          fill="none"
          stroke="var(--border)"
          strokeWidth={1.5}
        />
      ))}

      {diagram.nodes.map((node) => (
        <g key={node.id}>
          <circle cx={node.x} cy={node.y} r={24} fill="var(--card)" stroke="var(--primary)" strokeWidth={1.5} />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            className="fill-foreground font-mono text-[11px] font-medium"
          >
            {node.label}
          </text>
          <text
            x={node.x}
            y={node.y + 42}
            textAnchor="middle"
            className="fill-muted-foreground font-mono text-[9px]"
          >
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}
