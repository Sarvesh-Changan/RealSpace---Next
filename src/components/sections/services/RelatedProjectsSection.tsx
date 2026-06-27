'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { projects } from '@/data/projects';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay';

interface RelatedProjectsSectionProps {
  category: string;
}

export function RelatedProjectsSection({ category }: RelatedProjectsSectionProps) {
  // Try to find projects in the same category or just show latest 3
  let relatedProjects = projects.filter(p => p.category === category);
  if (relatedProjects.length === 0) {
    relatedProjects = projects.slice(0, 3);
  } else {
    relatedProjects = relatedProjects.slice(0, 3);
  }

  if (!relatedProjects || relatedProjects.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Related Projects"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {relatedProjects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <Link href={`/projects/${project.slug}`} className="group block h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageWithOverlay
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    containerClassName="h-full w-full rounded-none"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[var(--color-accent)] font-semibold uppercase tracking-wider text-xs mb-2 block">
                      {project.location}
                    </span>
                    <h3 className="font-playfair text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
