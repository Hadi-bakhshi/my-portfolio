import { ArrowRight01Icon, Download01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { TopologyDiagram } from "@/components/custom/TopologyDiagram";
import { Icon } from "../ui/icon";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-28 md:pt-36">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <Eyebrow>system.identity</Eyebrow>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Backend-first</Badge>
            <Badge variant="outline">AI-enabled products</Badge>
            <Badge variant="outline">Production systems</Badge>
          </div>

          <h1 className="max-w-3xl font-heading text-4xl leading-tight tracking-tight md:text-6xl">
            Senior Software Engineer.
            <br />
            Backend-first. Product-minded.
          </h1>

          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            I design and ship production systems that are dependable under load, practical for teams to evolve, and
            strong enough to support real product growth.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="#work">
              <Button size="lg">
                View work
                <Icon icon={ArrowRight01Icon} size={18} data-icon="inline-end" />
              </Button>
            </Link>
            <Link href="/resume.pdf" download>
              <Button size="lg" variant="outline">
                Resume
                <Icon icon={Download01Icon} size={18} data-icon="inline-end" />
              </Button>
            </Link>
          </div>
        </div>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="size-14 border border-border">
              <AvatarImage src="https://github.com/hadi-bakhshi.png" alt="Hadi Bakhshi" />
              <AvatarFallback>HB</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-heading text-lg">Hadi Bakhshi</p>
              <p className="text-sm text-muted-foreground">Building resilient systems and AI products</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <p>• 6 years shipping production platforms and internal tooling</p>
            <p>• Strong in backend architecture, event-driven systems, and RAG integration</p>
            <p>• Comfortable across product, infrastructure, and delivery</p>
          </div>
        </Card>
      </div>

      <TopologyDiagram />
    </section>
  );
}
