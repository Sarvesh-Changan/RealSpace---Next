import { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ContactFormSection } from '@/components/sections/contact/ContactFormSection';
import { MapSection } from '@/components/sections/contact/MapSection';
import { ContactFAQSection } from '@/components/sections/contact/ContactFAQSection';
import { SITE_NAME } from '@/constants';

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description: 'Book a free interior design consultation with REALSPACE in Thane. Let\'s discuss your space and create something extraordinary.',
  openGraph: {
    title: `Contact Us | ${SITE_NAME}`,
    description: 'Book a free interior design consultation with REALSPACE in Thane. Let\'s discuss your space and create something extraordinary.',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Talk About Your Space"
        subtitle="Book a free consultation and take the first step towards your dream home."
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />
      <ContactFormSection />
      <MapSection />
      <ContactFAQSection />
    </>
  );
}
