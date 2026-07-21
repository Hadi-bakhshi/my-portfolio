import Link from "next/link";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { ArchitectureDiagram } from "@/components/custom/ArchitectureDiagram";
import { Header } from "@/components/custom/Header";
import { ContactBlock } from "@/components/custom/ContactBlock";
import { Icon } from "@/components/ui/icon";
import type { CaseStudyDetail } from "@/data/case-studies/types";
import {
  bodyTextClass,
  contentCardClass,
  focusRingClass,
  proseShellClass,
  sectionTitleClass,
} from "@/lib/layout";
import { cn } from "@/lib/utils";

interface CaseStudyLayoutProps {
  study: CaseStudyDetail;
}

export function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  return (
    <>
      <Header />
      <main className={cn(proseShellClass, "pb-20 pt-28 md:pt-36")}>
        <Link
          href="/#work"
          className={cn(
            "inline-flex items-center gap-1 rounded-sm font-mono text-sm text-muted-foreground transition-colors hover:text-foreground",
            focusRingClass,
          )}
        >
          <Icon icon={ArrowLeft01Icon} size={16} />
          Back to work
        </Link>

        <div className="mt-8">
          <Eyebrow>system.case</Eyebrow>
          <h1 className="mt-3 font-heading text-3xl tracking-tight md:text-4xl">
            {study.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{study.oneLiner}</p>
          <p className="mt-2 font-mono text-xs text-foreground">{study.metric}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <p className={cn("mt-6", bodyTextClass)}>
            <span className="font-medium text-foreground">My role:</span>{" "}
            {study.role}
          </p>
        </div>

        <Card className={cn(contentCardClass, "mt-10 p-6")}>
          <ArchitectureDiagram diagram={study.diagram} />
        </Card>

        <section className="mt-12">
          <h2 className={cn(sectionTitleClass, "mt-0")}>Problem</h2>
          <p className={cn("mt-3", bodyTextClass)}>{study.problem}</p>
        </section>

        <section className="mt-10">
          <h2 className={cn(sectionTitleClass, "mt-0")}>Constraints</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {study.constraints.map((item) => (
              <li key={item} className={cn(bodyTextClass, "text-sm leading-6")}>
                <span className="mr-2 text-primary">—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className={cn(sectionTitleClass, "mt-0")}>Architecture</h2>
          <p className={cn("mt-3", bodyTextClass)}>{study.architecture}</p>
        </section>

        <section className="mt-10">
          <h2 className={cn(sectionTitleClass, "mt-0")}>Key decisions</h2>
          <div className="mt-4 flex flex-col gap-4">
            {study.decisions.map((decision) => (
              <Card
                key={decision.title}
                className={cn(contentCardClass, "p-6")}
              >
                <h3 className="font-heading text-base">{decision.title}</h3>
                <p className={cn("mt-2 text-sm leading-6", "text-muted-foreground")}>
                  {decision.body}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className={cn(sectionTitleClass, "mt-0")}>Trade-offs</h2>
          <div className="mt-4 flex flex-col gap-4">
            {study.tradeoffs.map((item) => (
              <Card key={item.title} className={cn(contentCardClass, "p-6")}>
                <h3 className="font-heading text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className={cn(sectionTitleClass, "mt-0")}>Impact</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {study.impact.map((item) => (
              <li key={item} className={cn(bodyTextClass, "text-sm leading-6")}>
                <span className="mr-2 text-primary">—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/#contact">
            <Button size="lg">Get in touch</Button>
          </Link>
          <Link href="/#work">
            <Button size="lg" variant="outline">
              More work
            </Button>
          </Link>
        </div>
      </main>
      <ContactBlock />
    </>
  );
}
