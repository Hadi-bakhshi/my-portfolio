import type { StackGroup as StackGroupData } from "@/data/resume";

interface StackGroupProps {
  group: StackGroupData;
}

/**
 * One category row: a label (mirrors the resume's own grouping — Languages,
 * Backend, Frontend, etc.) followed by inline pills. Deliberately not a tag
 * cloud — the grouping itself is the information.
 */
export function StackGroup({ group }: StackGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-2 py-4 md:grid-cols-[140px_1fr] md:items-baseline md:gap-6">
      <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{group.label}</p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span key={item} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
