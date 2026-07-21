import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArchitectureDiagram } from "@/components/custom/ArchitectureDiagram";
import { caseStudyBySlug } from "@/data/case-studies";
import type { CaseStudy } from "@/data/resume";

interface CaseStudyRowProps {
  study: CaseStudy;
  reversed?: boolean;
}

function slugFromHref(href: string): string | null {
  if (!href.startsWith("/work/")) return null;
  return href.slice("/work/".length) || null;
}

/**
 * One case study, full-width, text and media alternating sides. Prefers a
 * screenshot when `image` is set; otherwise renders the case-study architecture
 * diagram so featured work never shows an empty placeholder.
 */
export function CaseStudyRow({ study, reversed = false }: CaseStudyRowProps) {
  const slug = slugFromHref(study.href);
  const diagram = slug ? caseStudyBySlug[slug]?.diagram : undefined;

  return (
    <div
      className={`grid items-center gap-8 border-t border-border py-10 md:grid-cols-2 md:gap-12 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <span className="font-mono text-xs text-muted-foreground">
          {study.index}
        </span>
        <h3 className="mt-2 font-heading text-2xl">{study.title}</h3>
        <p className="mt-2 text-muted-foreground">{study.oneLiner}</p>
        <p className="mt-3 font-mono text-xs text-foreground">{study.metric}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {study.href.startsWith("/") ? (
          <Link
            href={study.href}
            className="mt-5 inline-block font-mono text-sm text-primary underline-offset-4 hover:underline"
          >
            read more →
          </Link>
        ) : (
          <a
            href={study.href}
            className="mt-5 inline-block font-mono text-sm text-primary underline-offset-4 hover:underline"
          >
            read more →
          </a>
        )}
      </div>

      <Card className="flex aspect-video items-center justify-center overflow-hidden border-border/70 bg-card/80 p-4">
        {study.image ? (
          <Image
            src={study.image}
            alt={`${study.title} screenshot`}
            width={640}
            height={360}
            className="h-full w-full rounded-lg object-cover"
          />
        ) : diagram ? (
          <ArchitectureDiagram diagram={diagram} />
        ) : (
          <span className="font-mono text-xs text-muted-foreground">
            {study.title} — media placeholder
          </span>
        )}
      </Card>
    </div>
  );
}
