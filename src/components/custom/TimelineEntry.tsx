"use client";

import { useId, useState } from "react";
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
import type { ExperienceEntry } from "@/data/resume";
import { Icon } from "@/components/ui/icon";
import { focusRingClass, metaTextClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

interface TimelineEntryProps {
  entry: ExperienceEntry;
  defaultOpen?: boolean;
}

/**
 * One role on the timeline, expand/collapse for the full bullet list.
 */
export function TimelineEntry({
  entry,
  defaultOpen = false,
}: TimelineEntryProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="relative border-l border-border pb-10 pl-6 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary"
      />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className={cn(
          "group flex w-full flex-col items-start gap-1 rounded-md text-left transition-colors",
          "hover:text-foreground",
          focusRingClass,
        )}
      >
        <span className="flex w-full items-center justify-between gap-3">
          <span className={metaTextClass}>{entry.dateRange}</span>
          <span
            className={cn(
              metaTextClass,
              "inline-flex items-center gap-1 opacity-60 transition-opacity group-hover:opacity-100",
            )}
          >
            {open ? "collapse" : "expand"}
            <Icon
              icon={open ? ArrowUp01Icon : ArrowDown01Icon}
              size={14}
              aria-hidden
            />
          </span>
        </span>
        <span className="font-heading text-lg">
          {entry.role} —{" "}
          <span className="text-muted-foreground">{entry.org}</span>
        </span>
      </button>

      <ul
        id={panelId}
        hidden={!open}
        className="mt-3 flex flex-col gap-2"
      >
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="text-sm leading-6 text-muted-foreground">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
