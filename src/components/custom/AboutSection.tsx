import { about } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/custom/Eyebrow";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Eyebrow>system.about</Eyebrow>
      <h2 className="mt-3 font-heading text-2xl md:text-3xl">
        A bit about me.
      </h2>

      <Card className="mt-8 border-border/70 bg-card/80 p-6 md:p-8">
        <div className="flex flex-col gap-4">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-7 text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {about.highlights?.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {about.softSkills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
    </section>
  );
}
