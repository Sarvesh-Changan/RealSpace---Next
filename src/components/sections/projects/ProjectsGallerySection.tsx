'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay';
import { Button } from '@/components/ui/Button';

const filterTabs = ['All', 'Residential', 'Commercial', 'Kitchen', 'Office', 'Villa'];

export function ProjectsGallerySection() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [visibleCount, setVisibleCount] = React.useState(9);

  const filteredProjects = React.useMemo(() => {
    return projects.filter(project => {
      if (activeFilter === 'All') return true;
      if (project.category.toLowerCase() === activeFilter.toLowerCase()) return true;
      if (project.title.toLowerCase().includes(activeFilter.toLowerCase())) return true;
      return false;
    });
  }, [activeFilter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const totalCount = filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveFilter(tab);
                setVisibleCount(9);
              }}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300",
                activeFilter === tab
                  ? "bg-[var(--color-primary)] text-white shadow-md"
                  : "bg-[var(--color-bg-secondary)] text-[var(--color-text-sub)] hover:bg-[var(--color-border)] hover:text-[var(--color-text)]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="break-inside-avoid"
              >
                <Link href={`/projects/${project.slug}`} className="group block relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full">
                    <ImageWithOverlay
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      containerClassName={cn("w-full", parseInt(project.id.replace('proj-', '')) % 2 === 0 ? "aspect-[4/5]" : "aspect-square")}
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/90 backdrop-blur-sm text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-8">
                      <span className="text-[var(--color-accent)] font-semibold uppercase tracking-wider text-xs mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {project.location} • {project.area}
                      </span>
                      <h3 className="font-playfair text-2xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {project.title}
                      </h3>
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                        <span className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-accent)] hover:text-white transition-colors">
                          View Project
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 flex flex-col items-center">
          <p className="text-[var(--color-text-sub)] mb-6 text-sm">
            Showing {visibleProjects.length} of {totalCount} projects
          </p>
          {visibleCount < totalCount && (
            <Button variant="outline" size="lg" onClick={handleLoadMore}>
              Load More Projects
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
