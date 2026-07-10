import { ArrowRight01Icon, Download01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { Icon } from "../ui/icon";
import Link from "next/link";
import { contact } from "@/data/resume";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-28 md:pt-36">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <Eyebrow>system.identity</Eyebrow>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Backend Architecture</Badge>
            <Badge variant="outline">AI Products</Badge>
            <Badge variant="outline">Production Systems</Badge>
          </div>

          <h1 className="max-w-3xl font-heading text-4xl leading-tight tracking-tight md:text-4xl">
            I build software that stays
            <br />
            reliable, maintainable, and scalable as complexity grows.
          </h1>

          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            Over the past six years, I've designed, built, and operated
            production software from database design to deployment. I take
            ownership across the entire software lifecycle, focusing on backend
            architecture, business-critical platforms, and practical AI features
            that solve real business problems.
          </p>

          <p className="font-mono text-xs text-muted-foreground">
            {contact.location} · {contact.availability}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="#work">
              <Button size="lg">
                View work
                <Icon
                  icon={ArrowRight01Icon}
                  size={18}
                  data-icon="inline-end"
                />
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

        <Card className="p-6 shadow-none ring-0 ring-transparent">
          <div className="flex items-center gap-4">
            <Avatar className="size-14 border border-border">
              <AvatarImage
                src="https://github.com/hadi-bakhshi.png"
                alt="Hadi Bakhshi"
              />
              <AvatarFallback>HB</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-heading text-lg">Hadi Bakhshi</p>
              <p className="text-sm text-muted-foreground">
                Turning complex business problems into maintainable software.
              </p>
            </div>
          </div>
          <h6 className="mt-1 text-sm font-medium text-muted-foreground">
            What I optimize for:
          </h6>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>• Long-term maintainability over short-term convenience</p>
            <p>• Products that solve real business problems</p>
            <p>• AI features people actually use</p>
            <p>• Systems that make future development easier</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
