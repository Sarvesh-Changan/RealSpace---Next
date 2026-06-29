import { generateMetadata } from '@/lib/seo';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

const HeroSection = dynamic(() => import('@/components/sections/home/HeroSection').then(m => m.HeroSection), { ssr: false, loading: () => <div className="h-screen bg-[var(--color-bg)]" /> });
const ImageSequenceSection = dynamic(() => import('@/components/sections/home/ImageSequenceSection').then(m => m.ImageSequenceSection), { ssr: false });
const StatsSection = dynamic(() => import('@/components/sections/home/StatsSection').then(m => m.StatsSection), { ssr: false });
const ServicesPreviewSection = dynamic(() => import('@/components/sections/home/ServicesPreviewSection').then(m => m.ServicesPreviewSection), { ssr: false });
const FeaturedProjectsSection = dynamic(() => import('@/components/sections/home/FeaturedProjectsSection').then(m => m.FeaturedProjectsSection), { ssr: false });
const ProcessSection = dynamic(() => import('@/components/sections/home/ProcessSection').then(m => m.ProcessSection), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/sections/home/TestimonialsSection').then(m => m.TestimonialsSection), { ssr: false });
const FAQSection = dynamic(() => import('@/components/sections/home/FAQSection').then(m => m.FAQSection), { ssr: false });
const InstagramSection = dynamic(() => import('@/components/sections/home/InstagramSection').then(m => m.InstagramSection), { ssr: false });
const CTABannerSection = dynamic(() => import('@/components/sections/home/CTABannerSection').then(m => m.CTABannerSection), { ssr: false });

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
