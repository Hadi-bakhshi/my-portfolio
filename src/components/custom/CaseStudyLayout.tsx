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

interface CaseStudyLayoutProps {
  study: CaseStudyDetail;
}

export function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-28 md:pt-36">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground hover:text-foreground"
        >
          <Icon icon={ArrowLeft01Icon} size={16} />
          Back to work
        </Link>

        <Eyebrow>case study</Eyebrow>
        <h1 className="mt-3 font-heading text-3xl tracking-tight md:text-4xl">{study.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{study.oneLiner}</p>
        <p className="mt-2 font-mono text-xs text-foreground">{study.metric}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">My role:</span> {study.role}
        </p>

        <Card className="mt-10 border-border/70 bg-card/80 p-6">
          <ArchitectureDiagram diagram={study.diagram} />
        </Card>

        <section className="mt-12">
          <h2 className="font-heading text-xl">Problem</h2>
          <p className="mt-3 leading-7 text-muted-foreground">{study.problem}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl">Constraints</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {study.constraints.map((item) => (
              <li key={item} className="text-sm leading-6 text-muted-foreground">
                <span className="mr-2 text-primary">—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl">Architecture</h2>
          <p className="mt-3 leading-7 text-muted-foreground">{study.architecture}</p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl">Key decisions</h2>
          <div className="mt-4 flex flex-col gap-4">
            {study.decisions.map((decision) => (
              <Card key={decision.title} className="border-border/70 bg-card/80 p-5">
                <h3 className="font-heading text-base">{decision.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{decision.body}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl">Trade-offs</h2>
          <div className="mt-4 flex flex-col gap-4">
            {study.tradeoffs.map((item) => (
              <Card key={item.title} className="border-border/70 bg-card/80 p-5">
                <h3 className="font-heading text-base">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl">Impact</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {study.impact.map((item) => (
              <li key={item} className="text-sm leading-6 text-muted-foreground">
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
