import { generateMetadata } from '@/lib/seo';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { ImageSequenceSection } from '@/components/sections/home/ImageSequenceSection';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { ServicesPreviewSection } from '@/components/sections/home/ServicesPreviewSection';
import { FeaturedProjectsSection } from '@/components/sections/home/FeaturedProjectsSection';
import { ProcessSection } from '@/components/sections/home/ProcessSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { FAQSection } from '@/components/sections/home/FAQSection';
import { InstagramSection } from '@/components/sections/home/InstagramSection';
import { CTABannerSection } from '@/components/sections/home/CTABannerSection';

export const metadata = generateMetadata({
  title: 'Luxury Interior Design in Thane & Mumbai',
});

export default function HomePage() {
  return (
    <>
      <ErrorBoundary><HeroSection /></ErrorBoundary>
      <ErrorBoundary><ImageSequenceSection /></ErrorBoundary>
      <ErrorBoundary><StatsSection /></ErrorBoundary>
      <ErrorBoundary><ServicesPreviewSection /></ErrorBoundary>
      <ErrorBoundary><FeaturedProjectsSection /></ErrorBoundary>
      <ErrorBoundary><ProcessSection /></ErrorBoundary>
      <ErrorBoundary><TestimonialsSection /></ErrorBoundary>
      <ErrorBoundary><FAQSection /></ErrorBoundary>
      <ErrorBoundary><InstagramSection /></ErrorBoundary>
      <ErrorBoundary><CTABannerSection /></ErrorBoundary>
    </>
  );
}
