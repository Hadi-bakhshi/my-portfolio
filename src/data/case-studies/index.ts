import { receptionAssistantEtl } from "./receptionAssistantEtl";
import { ragFaq } from "./rag-faq";
import { razeman } from "./razeman";
import { receptionAssistant } from "./reception-assistant";
import type { CaseStudyDetail } from "./types";

export const caseStudyDetails: CaseStudyDetail[] = [
  receptionAssistant,
  receptionAssistantEtl,
  ragFaq,
  razeman,
];

export const caseStudyBySlug: Record<string, CaseStudyDetail> =
  Object.fromEntries(caseStudyDetails.map((study) => [study.slug, study]));

export function getCaseStudySlugs(): string[] {
  return caseStudyDetails.map((study) => study.slug);
}
