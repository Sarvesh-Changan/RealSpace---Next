import { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { FounderSection } from '@/components/sections/about/FounderSection';
import { MissionVisionSection } from '@/components/sections/about/MissionVisionSection';
import { WhyChooseUsSection } from '@/components/sections/about/WhyChooseUsSection';
import { AchievementsSection } from '@/components/sections/about/AchievementsSection';
import { TeamSection } from '@/components/sections/about/TeamSection';
import { OfficeGallerySection } from '@/components/sections/about/OfficeGallerySection';
import { AboutCTASection } from '@/components/sections/about/AboutCTASection';
import { SITE_NAME } from '@/constants';

export const metadata: Metadata = {
  title: `About Us | ${SITE_NAME}`,
  description: 'Learn about REALSPACE, Thane\'s premier interior design studio. Meet our founder Vijay Chawan and discover our space-first design philosophy.',
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: 'Learn about REALSPACE, Thane\'s premier interior design studio. Meet our founder Vijay Chawan and discover our space-first design philosophy.',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Designing spaces that reflect your lifestyle, built on a foundation of trust and transparency."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />
      <FounderSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <AchievementsSection />
      <TeamSection />
      <OfficeGallerySection />
      <AboutCTASection />
    </>
  );
}
