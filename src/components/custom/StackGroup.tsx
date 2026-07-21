import type { StackGroup as StackGroupData } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { metaTextClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

interface StackGroupProps {
  group: StackGroupData;
}

/**
 * One category row: a label (mirrors the resume's own grouping — Languages,
 * Backend, Frontend, etc.) followed by inline badges. Deliberately not a tag
 * cloud — the grouping itself is the information.
 */
export function StackGroup({ group }: StackGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-2 py-4 md:grid-cols-[140px_1fr] md:items-baseline md:gap-6">
      <p className={cn(metaTextClass, "lowercase tracking-wide")}>
        {group.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Badge key={item} variant="secondary">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
