import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { RegulatoryHighlight } from "@/components/RegulatoryHighlight";
import { MethodologySection } from "@/components/MethodologySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <RegulatoryHighlight />
      <MethodologySection />
      <ProjectsSection />
      <FinalCTA />
    </>
  );
}
