import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/custom/CaseStudyLayout";
import { caseStudyBySlug, getCaseStudySlugs } from "@/data/case-studies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyBySlug[slug];
  if (!study) return {};

  return {
    title: `${study.title} | Hadi Bakhshi`,
    description: study.oneLiner,
    openGraph: {
      title: `${study.title} — Case Study`,
      description: study.oneLiner,
      url: `https://hadibakhshi.dev/work/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudyBySlug[slug];

  if (!study) {
    notFound();
  }

  return <CaseStudyLayout study={study} />;
}
