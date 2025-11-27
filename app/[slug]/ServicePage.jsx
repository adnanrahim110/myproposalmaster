"use client";

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

const ServicePage = ({ service }) => {
  return (
    <>
      <ServiceHero service={service} />
      <StatsSection />
      <ServiceNarrativeSection service={service} />
      <ServiceDeliverablesSection service={service} />
      <ServiceProcessSection service={service} />
      {service.sec4 && <ServiceLeadershipSpotlight service={service} />}
      <ServiceCTA service={service} />
      <TestimonialsSection reviews={service.reviews && service.reviews} />
      <ServiceFAQSection service={service} />
      <ContactSection />
    </>
  );
};

export default ServicePage;
