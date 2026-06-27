'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

interface ProjectMaterialsProps {
  materials: string[];
}

export function ProjectMaterials({ materials }: ProjectMaterialsProps) {
  if (!materials || materials.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          title="Key Materials"
          subtitle="Textures and finishes used in the space."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {materials.map((material, index) => (
            <motion.div key={index} variants={staggerItem}>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center border border-transparent hover:border-[var(--color-accent)]/30">
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-accent)] mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-[var(--color-text)]">
                  {material}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
