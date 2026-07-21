import { metrics, type Metric } from "@/data/resume";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  metric: Metric;
  featured?: boolean;
}

function MetricCard({ metric, featured = false }: MetricCardProps) {
  return (
    <Card
      aria-label={`${metric.value} ${metric.label}`}
      className={cn(
        "group relative flex flex-col justify-between gap-3 overflow-hidden p-5",
        "shadow-none ring-0 transition-colors duration-300",
        "border-border hover:border-primary/40",
        featured && "border-primary/30 bg-primary/4",
      )}
    >
      {/* corner brackets — instrument-readout motif */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t",
          featured ? "border-primary/60" : "border-foreground/15",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r",
          featured ? "border-primary/60" : "border-foreground/15",
        )}
      />

      {featured && (
        <span className="absolute right-4 top-4 flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary motion-safe:animate-ping motion-safe:opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
      )}

      <p className="font-heading text-2xl font-medium tabular-nums tracking-tight text-foreground sm:text-[1.75rem]">
        {metric.value}
      </p>

      <div className="flex flex-col gap-1.5">
        <span
          aria-hidden
          className={cn("h-px w-8", featured ? "bg-primary/50" : "bg-border")}
        />
        <p className="text-sm leading-snug text-muted-foreground">
          {metric.label}
        </p>
      </div>
    </Card>
  );
}

/**
 * Recruiter-friendly KPI grid — instrument-panel readouts with large
 * tabular numerals, scannable in under two seconds on any screen size.
 */
export function ImpactStrip() {
  return (
    <section
      aria-label="Impact metrics"
      className="mx-auto max-w-6xl px-6 py-12"
    >
      <Eyebrow>system.impact</Eyebrow>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.label}
            metric={metric}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
