import { about } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Eyebrow>system.about</Eyebrow>
      <h2 className="mt-3 font-heading text-2xl md:text-3xl">A bit about me.</h2>

      <div className="mt-5 flex flex-col gap-4">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {about.softSkills.map((skill) => (
          <span key={skill} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
