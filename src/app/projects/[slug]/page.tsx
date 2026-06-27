import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { SITE_NAME, SITE_URL } from '@/constants';
import { ProjectMetaBar } from '@/components/sections/projects/ProjectMetaBar';
import { ProjectGallery } from '@/components/sections/projects/ProjectGallery';
import { ProjectColorPalette } from '@/components/sections/projects/ProjectColorPalette';
import { ProjectMaterials } from '@/components/sections/projects/ProjectMaterials';
import { ProjectStory } from '@/components/sections/projects/ProjectStory';
import { RelatedProjectsSection } from '@/components/sections/services/RelatedProjectsSection';
import { ServicesCTASection } from '@/components/sections/services/ServicesCTASection';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | ${SITE_NAME}`,
    description: project.challenge.substring(0, 160),
    openGraph: {
      title: `${project.title} | ${SITE_NAME}`,
      description: project.challenge.substring(0, 160),
      images: [{ url: project.thumbnail }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

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
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${SITE_URL}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      
      {/* Project Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16 pt-32">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="mb-4">
             <span className="bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                {project.category}
             </span>
           </div>
           <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
             {project.title}
           </h1>
           <div className="flex items-center text-gray-300 space-x-4 font-medium">
             <span>{project.location}</span>
             <span>•</span>
             <span>{project.year}</span>
           </div>
        </div>
      </section>

      <ProjectMetaBar
        location={project.location}
        area={project.area}
        style={project.style}
        duration={project.duration}
        year={project.year}
      />

      <ProjectStory
        challenge={project.challenge}
        solution={project.solution}
        outcome={project.outcome}
      />

      <ProjectGallery images={project.images} title={project.title} />

      <ProjectColorPalette colors={project.colorPalette || []} />
      
      <ProjectMaterials materials={project.materials || []} />

      <RelatedProjectsSection category={project.category} />

      <ServicesCTASection
        title="Love This Style? Let's Create Yours."
        subtitle="Book a consultation to discuss how we can transform your space."
      />
    </>
  );
}
