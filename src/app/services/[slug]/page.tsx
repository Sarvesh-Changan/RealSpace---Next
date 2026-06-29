import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { SITE_NAME } from '@/constants';
import { PageHero } from '@/components/layout/PageHero';
import { ServiceOverviewSection } from '@/components/sections/services/ServiceOverviewSection';
import { ServiceBenefitsSection } from '@/components/sections/services/ServiceBenefitsSection';
import { ServiceDeliverablesSection } from '@/components/sections/services/ServiceDeliverablesSection';
import { ServiceProcessSection } from '@/components/sections/services/ServiceProcessSection';
import { ServiceFAQSection } from '@/components/sections/services/ServiceFAQSection';
import { RelatedProjectsSection } from '@/components/sections/services/RelatedProjectsSection';
import { ServicesCTASection } from '@/components/sections/services/ServicesCTASection';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | ${SITE_NAME}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
    },
    description: service.fullDescription,
    offers: {
      '@type': 'Offer',
      price: service.startingPrice.replace(/[^0-9]/g, '') || '0',
      priceCurrency: 'INR',
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://realspace.com', // Replace with SITE_URL if available
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://realspace.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://realspace.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PageHero
        title={service.title}
        subtitle={service.shortDescription}
        image={service.heroImage}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />
      
      <ServiceOverviewSection service={service} />
      <ServiceBenefitsSection benefits={service.benefits} />
      <ServiceDeliverablesSection deliverables={service.deliverables} />
      <ServiceProcessSection />
      <ServiceFAQSection faqs={service.faqs} />
      <RelatedProjectsSection category={service.category} />
      <ServicesCTASection
        title={`Book a ${service.title} Consultation`}
        subtitle="Let's discuss how we can bring your vision to life."
      />
    </>
  );
}
