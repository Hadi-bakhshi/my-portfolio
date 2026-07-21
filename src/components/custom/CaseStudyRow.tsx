import Image from "next/image";
import Link from "next/link";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArchitectureDiagram } from "@/components/custom/ArchitectureDiagram";
import { Icon } from "@/components/ui/icon";
import { caseStudyBySlug } from "@/data/case-studies";
import type { CaseStudy } from "@/data/resume";
import { bodyTextClass, contentCardClass, metaTextClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

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
  const isInternal = study.href.startsWith("/");

  return (
    <div
      className={cn(
        "grid items-center gap-8 border-t border-border py-10 md:grid-cols-2 md:gap-12",
        reversed && "md:[&>*:first-child]:order-2",
      )}
    >
      <div>
        <span className={metaTextClass}>{study.index}</span>
        <h3 className="mt-2 font-heading text-2xl md:text-3xl">
          {study.title}
        </h3>
        <p className={cn("mt-2", bodyTextClass)}>{study.oneLiner}</p>
        <p className="mt-3 font-mono text-xs text-foreground">{study.metric}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {isInternal ? (
          <Button
            size="lg"
            variant="outline"
            className="mt-5"
            nativeButton={false}
            render={<Link href={study.href} />}
          >
            Read case study
            <Icon icon={ArrowRight01Icon} size={18} data-icon="inline-end" />
          </Button>
        ) : (
          <Button
            size="lg"
            variant="outline"
            className="mt-5"
            nativeButton={false}
            render={<Link href={study.href} />}
          >
            Read case study
            <Icon icon={ArrowRight01Icon} size={18} data-icon="inline-end" />
          </Button>
        )}
      </div>

      <Card
        className={cn(
          contentCardClass,
          "flex aspect-video items-center justify-center overflow-hidden p-4",
        )}
      >
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
          <span className={metaTextClass}>
            {study.title} — media placeholder
          </span>
        )}
      </Card>
    </div>
  );
}
