import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/**
 * Small mono-styled label used above section headings, formatted like a
 * log-line prefix (e.g. "system.identity", "system.experience") rather than
 * a generic section tag.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return <p className={cn("font-mono text-xs lowercase tracking-wide text-muted-foreground", className)}>{children}</p>;
}
