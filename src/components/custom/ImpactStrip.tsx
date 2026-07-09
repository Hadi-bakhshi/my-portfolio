import { metrics } from "@/data/resume";

/**
 * Renders resume metrics as a single scannable line, separated by mono
 * dividers — reads like a log line rather than a grid of KPI cards.
 * Horizontally scrollable on narrow viewports instead of wrapping into cards.
 */
export function ImpactStrip() {
  return (
    <div className="border-y border-border">
      <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-6 py-5 text-sm">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="flex shrink-0 items-baseline gap-2"
          >
            {index > 0 && (
              <span aria-hidden="true" className="text-border">
                ·
              </span>
            )}
            <span className="font-mono font-medium text-foreground">
              {metric.value}
            </span>
            <span className="whitespace-nowrap text-muted-foreground">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
