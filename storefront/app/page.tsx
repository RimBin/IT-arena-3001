import HeroHomepageNeumorphic from "@/components/hero/HeroHomepageNeumorphic";
import HeroPixelSculpt from "@/components/hero/HeroPixelSculpt";
import HeroPremium from "@/components/hero/HeroPremium";
import HeroSmartCity from "@/components/hero/HeroSmartCity";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesPixelSculpt from "@/components/sections/ServicesPixelSculpt";
import BenefitsNeuro from "@/components/sections/BenefitsNeuro";
import WhyUs from "@/components/sections/WhyUs";
import CaseStudies from "@/components/sections/CaseStudies";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import PricingPlans from "@/components/sections/PricingPlans";

export default async function Home() {
  return (
    <main className="min-h-screen">
        {/* Smart City Hero as top-of-homepage */}
        <HeroSmartCity />
        
        {/* Pixel Sculpt Hero (Disabled) */}
        {/* <HeroPixelSculpt /> */}

        {/* Services Section - Pixel Sculpt Style */}
        <ServicesPixelSculpt />

  {/* Benefits focused on UX/UI and neuromarketing */}
  <BenefitsNeuro />

  {/* Why Us section */}
  <WhyUs />
      
      {/* Case Studies / Portfolio Preview */}
      <CaseStudies />

  {/* Pricing Plans */}
  <PricingPlans />
      
      {/* Process Timeline */}
      <ProcessTimeline />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
