import { experience } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { TimelineEntry } from "./TimelineEntry";
import { sectionTitleClass, sectionYClass, shellClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section id="experience" className={cn(shellClass, sectionYClass)}>
      <Eyebrow>system.experience</Eyebrow>
      <h2 className={sectionTitleClass}>Where it happened.</h2>

      <div className="mt-8">
        {experience.map((entry, i) => (
          <TimelineEntry key={entry.role} entry={entry} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
