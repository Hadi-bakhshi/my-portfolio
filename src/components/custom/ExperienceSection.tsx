import { experience } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { TimelineEntry } from "./TimelineEntry";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20">
      <Eyebrow>system.experience</Eyebrow>
      <h2 className="mt-3 font-heading text-2xl md:text-3xl">
        Where it happened.
      </h2>

      <div className="mt-8">
        {experience.map((entry, i) => (
          <TimelineEntry key={entry.role} entry={entry} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
