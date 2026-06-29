import { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ServicesGridSection } from '@/components/sections/services/ServicesGridSection';
import { ServicesCTASection } from '@/components/sections/services/ServicesCTASection';
import { SITE_NAME } from '@/constants';

export const metadata: Metadata = {
  title: `Our Services | ${SITE_NAME}`,
  description: 'Explore our comprehensive interior design services in Thane & Mumbai, from full home renovations to custom modular kitchens.',
  openGraph: {
    title: `Our Services | ${SITE_NAME}`,
    description: 'Explore our comprehensive interior design services in Thane & Mumbai, from full home renovations to custom modular kitchens.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From concept to completion — every space, every detail."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />
      <ServicesGridSection />
      <ServicesCTASection title="Ready to Start Your Project?" subtitle="Let's build something beautiful together." />
    </>
  );
}
