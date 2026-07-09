import { stackGroups } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { StackGroup } from "@/components/custom/StackGroup";

export function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
      <Eyebrow>system.stack</Eyebrow>
      <h2 className="mt-3 font-heading text-2xl md:text-3xl">
        What it&apos;s built with.
      </h2>

      <div className="mt-8 divide-y divide-border">
        {stackGroups.map((group) => (
          <StackGroup key={group.label} group={group} />
        ))}
      </div>
    </section>
  );
}
