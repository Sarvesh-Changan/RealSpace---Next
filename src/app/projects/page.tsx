import { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ProjectsGallerySection } from '@/components/sections/projects/ProjectsGallerySection';
import { SITE_NAME, SITE_URL } from '@/constants';

export const metadata: Metadata = {
  title: `Our Work | ${SITE_NAME}`,
  description: 'Explore our curated portfolio of residential and commercial interior design projects across Thane and Mumbai.',
  openGraph: {
    title: `Our Work | ${SITE_NAME}`,
    description: 'Explore our curated portfolio of residential and commercial interior design projects across Thane and Mumbai.',
  },
};

export default function ProjectsPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `${SITE_URL}/projects`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PageHero
        title="Our Work"
        subtitle="A curated selection of spaces we've designed across Thane and Mumbai."
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects' },
        ]}
      />
      <ProjectsGallerySection />
    </>
  );
}
