import { AboutSection } from "@/components/custom/AboutSection";
import { ContactBlock } from "@/components/custom/ContactBlock";
import { ExperienceSection } from "@/components/custom/ExperienceSection";
import { Header } from "@/components/custom/Header";
import { Hero } from "@/components/custom/Hero";
import { ImpactStrip } from "@/components/custom/ImpactStrip";
import { StackSection } from "@/components/custom/StackSection";
import { WorkSection } from "@/components/custom/WorkSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <ImpactStrip />
        <AboutSection />
        <WorkSection />
        <StackSection />
        <ExperienceSection />
      </main>
      <ContactBlock />
    </>
  );
}
