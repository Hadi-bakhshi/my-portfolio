import { Eyebrow } from "@/components/custom/Eyebrow";
import { education, languages } from "@/data/resume";
import {
  metaTextClass,
  sectionTitleClass,
  sectionYClass,
  shellClass,
} from "@/lib/layout";
import { cn } from "@/lib/utils";

export function EducationLanguagesSection() {
  return (
    <section id="education" className={cn(shellClass, sectionYClass)}>
      <Eyebrow>system.profile</Eyebrow>
      <h2 className={sectionTitleClass}>Background.</h2>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <Eyebrow>system.education</Eyebrow>
          <p className="mt-3 font-heading text-lg">{education.degree}</p>
          <p className="text-sm text-muted-foreground">{education.school}</p>
          <p className={metaTextClass}>{education.dateRange}</p>
        </div>

        <div>
          <Eyebrow>system.languages</Eyebrow>
          <ul className="mt-3 flex flex-col gap-1">
            {languages.map((lang) => (
              <li key={lang.name} className="text-sm">
                <span className="font-medium">{lang.name}</span>{" "}
                <span className="text-muted-foreground">— {lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
