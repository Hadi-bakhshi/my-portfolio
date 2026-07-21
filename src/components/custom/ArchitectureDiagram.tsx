import type { CaseStudyDetail } from "@/data/case-studies/types";

interface ArchitectureDiagramProps {
  diagram: CaseStudyDetail["diagram"];
}

const NODE_R = 26;
const CHAR_WIDTH = 6.2;
const LINE_GAP = 12;
const LABEL_GAP_BELOW = 8;
const SUB_GAP = 8;
const INSIDE_PADDING = 10;

function edgePath(
  nodes: CaseStudyDetail["diagram"]["nodes"],
  fromId: string,
  toId: string,
): string {
  const from = nodes.find((n) => n.id === fromId);
  const to = nodes.find((n) => n.id === toId);
  if (!from || !to) return "";

  const midX = (from.x + to.x) / 2;
  return `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
}

/** Split labels on spaces into at most two roughly balanced lines. */
function wrapLabel(label: string): string[] {
  const words = label.trim().split(/\s+/).filter(Boolean);
  if (words.length <= 1) return [label];
  if (words.length === 2) return words;

  const total = words.reduce((sum, w) => sum + w.length, 0);
  const lines: [string[], string[]] = [[], []];
  let line0Len = 0;

  for (const word of words) {
    if (
      lines[0].length === 0 ||
      (line0Len + word.length <= total / 2 && lines[1].length === 0)
    ) {
      lines[0].push(word);
      line0Len += word.length + (lines[0].length > 1 ? 1 : 0);
    } else {
      lines[1].push(word);
    }
  }

  if (lines[1].length === 0) {
    const mid = Math.ceil(words.length / 2);
    return [
      words.slice(0, mid).join(" "),
      words.slice(mid).join(" "),
    ].filter(Boolean);
  }

  return [lines[0].join(" "), lines[1].join(" ")];
}

function fitsInsideCircle(lines: string[]): boolean {
  const maxWidth = 2 * NODE_R - INSIDE_PADDING;
  return lines.every((line) => line.length * CHAR_WIDTH <= maxWidth);
}

export function ArchitectureDiagram({ diagram }: ArchitectureDiagramProps) {
  return (
    <svg
      viewBox={diagram.viewBox}
      className="w-full overflow-visible"
      overflow="visible"
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

      {diagram.nodes.map((node) => {
        const labelLines = wrapLabel(node.label);
        const inside = fitsInsideCircle(labelLines);
        const labelBlockHeight =
          labelLines.length * LINE_GAP - (LINE_GAP - 10);
        const outsideLabelY = node.y + NODE_R + LABEL_GAP_BELOW;
        const outsideSubY =
          outsideLabelY + labelBlockHeight + SUB_GAP + (labelLines.length > 1 ? 4 : 0);
        const insideSubY = node.y + NODE_R + LABEL_GAP_BELOW + 4;

        return (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={NODE_R}
              fill="var(--card)"
              stroke="var(--primary)"
              strokeWidth={1.5}
            />

            {inside ? (
              <>
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-foreground font-mono text-[10px] font-medium"
                >
                  {labelLines.map((line, i) => {
                    const offset =
                      (i - (labelLines.length - 1) / 2) * LINE_GAP;
                    return (
                      <tspan
                        key={`${node.id}-line-${i}`}
                        x={node.x}
                        y={node.y + offset}
                        dominantBaseline="middle"
                      >
                        {line}
                      </tspan>
                    );
                  })}
                </text>
                <text
                  x={node.x}
                  y={insideSubY}
                  textAnchor="middle"
                  dominantBaseline="hanging"
                  className="fill-muted-foreground font-mono text-[9px]"
                >
                  {node.sub}
                </text>
              </>
            ) : (
              <>
                <text
                  x={node.x}
                  y={outsideLabelY}
                  textAnchor="middle"
                  dominantBaseline="hanging"
                  className="fill-foreground font-mono text-[10px] font-medium"
                >
                  {labelLines.map((line, i) => (
                    <tspan
                      key={`${node.id}-line-${i}`}
                      x={node.x}
                      dy={i === 0 ? 0 : LINE_GAP}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
                <text
                  x={node.x}
                  y={outsideSubY}
                  textAnchor="middle"
                  dominantBaseline="hanging"
                  className="fill-muted-foreground font-mono text-[9px]"
                >
                  {node.sub}
                </text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
