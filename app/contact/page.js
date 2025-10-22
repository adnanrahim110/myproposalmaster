export const metadata = {
  title: "Contact Us - My Proposal Master",
  description: "Get in touch with us for a free consultation",
};

import Hero from "@/components/ui/Hero";
import ContactSection from "@/components/home/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Hero
        backgroundUrl="/imgs/hero-home.webp"
        subtitle="Let's Connect"
        subtitleIcon="✦"
        title="Talk To Our Experts"
        highlightedText="Experts"
        text="Tell us about your project. A strategist will review and get back within 1 business day."
      />
      <ContactSection />
    </>
  );
}
