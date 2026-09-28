import DigitalServicesSection from "@/components/home/DigitalServicesSection";
import HeroSection from "@/components/home/HeroSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import InsightsSection from "@/components/home/InsightsSection";
import JourneySection from "@/components/home/JourneySection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustedPartnersSection from "@/components/home/TrustedPartnersSection";
import VisionSection from "@/components/home/VisionSection";
import WorkSection from "@/components/home/WorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedPartnersSection />
      <VisionSection />
      <IndustriesSection />
      <DigitalServicesSection />
      <WorkSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <InsightsSection />
      <JourneySection />
    </>
  );
}
