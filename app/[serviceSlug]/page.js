import ContactSection from "@/components/home/ContactSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceDeliverablesSection from "@/components/services/ServiceDeliverablesSection";
import ServiceFAQSection from "@/components/services/ServiceFAQSection";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceLeadershipSpotlight from "@/components/services/ServiceLeadershipSpotlight";
import ServiceNarrativeSection from "@/components/services/ServiceNarrativeSection";
import ServiceProcessSection from "@/components/services/ServiceProcessSection";
import { SERVICES } from "@/constant";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    serviceSlug: service.id,
  }));
}

export async function generateMetadata({ params }) {
  const service = SERVICES.find(s => s.id === params.serviceSlug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - My Proposal Master`,
    description: service.description,
  };
}

export default function ServicePage({ params }) {
  const service = SERVICES.find(s => s.id === params.serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <StatsSection />
      <ServiceNarrativeSection service={service} />
      <ServiceDeliverablesSection service={service} />
      <ServiceProcessSection service={service} />
      <ServiceLeadershipSpotlight service={service} />
      <ServiceCTA service={service} />
      <TestimonialsSection />
      <ServiceFAQSection service={service} />
      <ContactSection />
    </>
  );
}
