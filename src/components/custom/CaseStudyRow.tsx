import Image from "next/image";
import type { CaseStudy } from "@/data/resume";

interface CaseStudyRowProps {
  study: CaseStudy;
  reversed?: boolean;
}

/**
 * One case study, full-width, text and media alternating sides. Falls back to
 * a bordered placeholder panel when no `image` is provided in the data — swap
 * in real screenshots later without changing the layout.
 */
export function CaseStudyRow({ study, reversed = false }: CaseStudyRowProps) {
  return (
    <div
      className={`grid items-center gap-8 border-t border-border py-10 md:grid-cols-2 md:gap-12 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <span className="font-mono text-xs text-muted-foreground">{study.index}</span>
        <h3 className="mt-2 font-heading text-2xl">{study.title}</h3>
        <p className="mt-2 text-muted-foreground">{study.oneLiner}</p>
        <p className="mt-3 font-mono text-xs text-foreground">{study.metric}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={study.href}
          className="mt-5 inline-block font-mono text-sm text-primary underline-offset-4 hover:underline"
        >
          read more →
        </a>
      </div>

      <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-card">
        {study.image ? (
          <Image
            src={study.image}
            alt={`${study.title} screenshot`}
            width={640}
            height={360}
            className="h-full w-full rounded-lg object-cover"
          />
        ) : (
          <span className="font-mono text-xs text-muted-foreground">{study.title} — media placeholder</span>
        )}
      </div>
    </div>
  );
}
