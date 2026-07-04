import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Download01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { TopologyDiagram } from "@/components/custom/TopologyDiagram";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-28 md:pt-36">
      <div className="flex flex-col gap-6">
        <Eyebrow>system.identity</Eyebrow>

        <h1 className="max-w-3xl font-heading text-4xl leading-tight tracking-tight md:text-6xl">
          Senior Software Engineer.
          <br />
          Backend-first. Built for production.
        </h1>

        <p className="max-w-xl text-base text-muted-foreground md:text-lg">
          Six years designing systems that hold up at scale — event-driven pipelines, clean architecture, and the
          reliability work that makes products trustworthy.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg" nativeButton={false} render={<a href="#work" />}>
            View work
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} data-icon="inline-end" />
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="/resume.pdf" download />}>
            Resume
            <HugeiconsIcon icon={Download01Icon} size={18} data-icon="inline-end" />
          </Button>
        </div>
      </div>

      <TopologyDiagram />
    </section>
  );
}
