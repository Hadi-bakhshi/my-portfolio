"use client";

import { useEffect, useState } from "react";

interface DiagramNode {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
}

// Positions double as anchor/control points for the single continuous
// `routePath` below — keep them in sync if you move a node.
const nodes: DiagramNode[] = [
  { id: "ra", label: "RA", sub: "Reception Assistant", x: 60, y: 130 },
  { id: "etl", label: "ETL", sub: "Data Pipeline", x: 260, y: 70 },
  { id: "mq", label: "MQ", sub: "RabbitMQ", x: 460, y: 130 },
  { id: "fu", label: "F-U", sub: "Follow-Up", x: 620, y: 70 },
];

// One continuous path (no repeated `M`) so a single animateMotion pass can
// travel the whole route instead of jumping between disconnected segments.
const routePath =
  "M 60 130 C 140 130, 180 70, 260 70 " +
  "C 340 70, 380 130, 460 130 " +
  "C 520 130, 560 70, 620 70";

/**
 * Hero signature element: a small topology diagram naming real systems from
 * the resume (Reception Assistant -> ETL -> RabbitMQ -> Follow-Up) with a
 * single pulse traveling the route to suggest a message in flight.
 *
 * Respects prefers-reduced-motion: the traveling pulse is only rendered when
 * the user hasn't asked for reduced motion; the static diagram (nodes + route)
 * always renders either way.
 */
export function TopologyDiagram() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAnimate(!query.matches);

    const onChange = () => setAnimate(!query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <svg
      viewBox="0 0 680 200"
      className="w-full max-w-2xl"
      role="img"
      aria-label="Diagram of messages flowing from Reception Assistant through the ETL pipeline and RabbitMQ to the Follow-Up service"
    >
      <path
        id="route"
        d={routePath}
        fill="none"
        stroke="var(--border)"
        strokeWidth={1.5}
      />

      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={22}
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth={1.5}
          />
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
            y={node.y + 40}
            textAnchor="middle"
            className="fill-muted-foreground font-mono text-[9px]"
          >
            {node.sub}
          </text>
        </g>
      ))}

      {animate && (
        <circle r={4} fill="var(--primary)">
          <animateMotion dur="6s" repeatCount="indefinite" calcMode="linear">
            <mpath xlinkHref="#route" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.08;0.92;1"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
      )}
    </svg>
  );
}
