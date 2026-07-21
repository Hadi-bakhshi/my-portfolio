import { caseStudies } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { CaseStudyRow } from "@/components/custom/CaseStudyRow";
import { MoreProjectsGrid } from "@/components/custom/MoreProjectsGrid";
import { sectionTitleClass, sectionYClass, shellClass } from "@/lib/layout";
import { cn } from "@/lib/utils";

export function WorkSection() {
  return (
    <section id="work" className={cn(shellClass, sectionYClass)}>
      <Eyebrow>system.work</Eyebrow>
      <h2 className={sectionTitleClass}>Selected projects.</h2>

      <div className="mt-8">
        {caseStudies.map((study, i) => (
          <CaseStudyRow
            key={study.title}
            study={study}
            reversed={i % 2 === 1}
          />
        ))}
      </div>

      <MoreProjectsGrid />
    </section>
  );
}
