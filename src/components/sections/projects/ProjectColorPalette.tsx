'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

interface ProjectColorPaletteProps {
  colors: string[];
}

export function ProjectColorPalette({ colors }: ProjectColorPaletteProps) {
  if (!colors || colors.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          title="Color Story"
          subtitle="The foundational palette driving the aesthetic."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-12"
        >
          {colors.map((color, index) => (
            <motion.div key={index} variants={staggerItem} className="flex flex-col items-center">
              <div 
                className="w-24 h-24 rounded-full shadow-lg border border-gray-100 mb-4 transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: color }}
              />
              <span className="font-mono text-sm text-[var(--color-text-sub)] uppercase tracking-wider">
                {color}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
