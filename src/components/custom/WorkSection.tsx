import { caseStudies } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { CaseStudyRow } from "@/components/custom/CaseStudyRow";
import { MoreProjectsGrid } from "@/components/custom/MoreProjectsGrid";

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <Eyebrow>system.work</Eyebrow>
      <h2 className="mt-3 font-heading text-2xl md:text-3xl">
        Selected projects.
      </h2>

      <div className="mt-4">
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
