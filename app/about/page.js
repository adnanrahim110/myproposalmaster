import AboutHero from "@/components/about/AboutHero";
import WhyChooseWise from "@/components/about/WhyChooseWise";
import ContactSection from "@/components/home/ContactSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustedPartners from "@/components/home/TrustedPartners";

export const metadata = {
  title: "About Us - My Proposal Masters",
  description:
    "The business plan authority trusted by thousands. Learn about My Proposal Masters and our mission to transform entrepreneurial visions into fundable business plans.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StatsSection />
      <WhyChooseWise />
      <TestimonialsSection />
      <TrustedPartners />
      <ContactSection />
    </>
  );
}
