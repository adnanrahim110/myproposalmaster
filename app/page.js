import AboutWiseSection from "@/components/home/AboutWiseSection";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import LeadershipVideo from "@/components/home/LeadershipVideo";
import ServicesGridSection from "@/components/home/ServicesGridSection";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustedPartners from "@/components/home/TrustedPartners";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesShowcase />
      <StatsSection />
      <WhyChooseUs />
      <TrustedPartners />
      <TestimonialsSection />
      <ServicesGridSection />
      <AboutWiseSection />
      <ContactSection />
    </>
  );
}
