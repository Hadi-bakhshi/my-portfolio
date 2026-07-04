"use client";

import { useState } from "react";
import type { ExperienceEntry } from "@/data/resume";

interface TimelineEntryProps {
  entry: ExperienceEntry;
  defaultOpen?: boolean;
}

/**
 * One role on the timeline, expand/collapse for the full bullet list.
 *
 * NOTE: implemented with plain useState + aria attributes rather than
 * base-ui's Collapsible primitive — worth swapping in
 * `@base-ui/react/collapsible` if you want its built-in animation/height
 * handling, but its exact sub-component API wasn't verified here.
 */
export function TimelineEntry({ entry, defaultOpen = false }: TimelineEntryProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="relative border-l border-border pb-10 pl-6 last:pb-0">
      <span aria-hidden="true" className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-primary" />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full flex-col items-start gap-1 text-left"
      >
        <span className="font-mono text-xs text-muted-foreground">{entry.dateRange}</span>
        <span className="font-heading text-lg">
          {entry.role} — <span className="text-muted-foreground">{entry.org}</span>
        </span>
      </button>

      {open && (
        <ul className="mt-3 flex flex-col gap-2">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="text-sm text-muted-foreground">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
