/**
 * Shared layout / surface tokens extracted from Hero, ImpactStrip, and About.
 * Prefer these over ad-hoc max-w / card class strings so sections stay aligned.
 */

export const shellClass = "mx-auto w-full max-w-6xl px-6";

export const proseShellClass = "mx-auto w-full max-w-5xl px-6";

export const sectionYClass = "py-20";

export const sectionTitleClass = "mt-3 font-heading text-2xl md:text-3xl";

export const contentCardClass =
  "border-border/70 bg-card/80 shadow-none ring-0 ring-transparent";

export const bodyTextClass = "text-base leading-7 text-muted-foreground";

export const metaTextClass = "font-mono text-xs text-muted-foreground";

/** Focus ring for custom links / icon buttons (matches Button focus-visible). */
export const focusRingClass =
  "outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30";

export const iconLinkClass = `rounded-md text-muted-foreground transition-colors hover:text-foreground ${focusRingClass}`;

export const navLinkClass = `font-mono text-sm text-muted-foreground transition-colors hover:text-foreground ${focusRingClass} rounded-sm`;
