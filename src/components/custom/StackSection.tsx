import { stackGroups } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { StackGroup } from "@/components/custom/StackGroup";
import { sectionTitleClass, sectionYClass, shellClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

export function StackSection() {
  return (
    <section id="stack" className={cn(shellClass, sectionYClass)}>
      <Eyebrow>system.stack</Eyebrow>
      <h2 className={sectionTitleClass}>What it&apos;s built with.</h2>

      <div className="mt-8 divide-y divide-border">
        {stackGroups.map((group) => (
          <StackGroup key={group.label} group={group} />
        ))}
      </div>
    </section>
  );
}
