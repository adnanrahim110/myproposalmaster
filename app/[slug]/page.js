
import { LEGAL_PAGES } from "@/constant";
import SERVICES from "@/constant/services";
import { notFound } from "next/navigation";
import ServicePage from "./ServicePage";
import TermsPage from "./TermsPage";

export async function generateStaticParams() {
  const servicesParams = SERVICES.map(({ id }) => ({
    slug: id,
  }));
  const termsParams = LEGAL_PAGES.map(({ id }) => ({
    slug: id,
  }));
  return [...servicesParams, ...termsParams];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = SERVICES.find((s) => s.id === slug);
  if (service) {
    return {
      title: service.title,
    };
  }

  const term = LEGAL_PAGES.find((t) => t.id === slug);
  if (term) {
    return {
      title: term.title,
    };
  }

  return {
    title: "Page Not Found",
    description: "The requested page does not exist.",
  }
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (service) {
    return <ServicePage service={service} />
  }
  const term = LEGAL_PAGES.find((t) => t.id === slug);
  if (term) {
    return <TermsPage term={term} />;
  }

  return notFound();
}
