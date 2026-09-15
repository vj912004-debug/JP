import { Hero } from "@/components/sections/home/Hero";
import { TrustStats } from "@/components/sections/home/TrustStats";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { ProductsShowcase } from "@/components/sections/home/ProductsShowcase";
import { InfrastructureSection } from "@/components/sections/home/InfrastructureSection";
import { IndustriesSection } from "@/components/sections/home/IndustriesSection";
import { QualitySection } from "@/components/sections/home/QualitySection";
import { ApplicationsSection } from "@/components/sections/home/ApplicationsSection";
import { TestimonialsSection, FAQSection } from "@/components/sections/home/TestimonialsSection";
import { CTASection } from "@/components/sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <AboutSection />
      <WhyChooseUs />
      <ProductsShowcase />
      <InfrastructureSection />
      <IndustriesSection />
      <QualitySection />
      <ApplicationsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
