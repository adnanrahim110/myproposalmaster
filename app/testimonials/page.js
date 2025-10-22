export const metadata = {
  title: "Testimonials - My Proposal Master",
  description: "Hear what our clients have to say about working with us",
};

import Hero from "@/components/ui/Hero";
import TestimonialsBody from "@/components/testimonials/TestimonialsBody";

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        backgroundUrl="/imgs/hero-home.webp"
        subtitle="Client Success Stories"
        subtitleIcon="★"
        title="What Our Clients Say"
        highlightedText="Clients"
        text="Real, unfiltered experiences from organizations and founders who partnered with My Proposal Masters to unlock funding and sustainable growth."
      />
      <TestimonialsBody />
    </>
  );
}
