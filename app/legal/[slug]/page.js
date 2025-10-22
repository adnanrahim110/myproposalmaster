import { LEGAL_PAGES } from '@/constant';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return LEGAL_PAGES.map((page) => ({
    slug: page.id,
  }));
}

export function generateMetadata({ params }) {
  const page = LEGAL_PAGES.find((p) => p.id === params.slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${page.title} | My Proposal Master`,
    description: `Read our ${page.title} to understand how we handle your information and our terms of service.`,
  };
}

export default function LegalPage({ params }) {
  const page = LEGAL_PAGES.find((p) => p.id === params.slug);

  if (!page) {
    notFound();
  }

  return (
    <>
    </>
  );
}
