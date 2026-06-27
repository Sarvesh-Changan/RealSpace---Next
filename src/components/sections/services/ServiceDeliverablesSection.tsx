'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

interface ServiceDeliverablesSectionProps {
  deliverables: string[];
}

export function ServiceDeliverablesSection({ deliverables }: ServiceDeliverablesSectionProps) {
  if (!deliverables || deliverables.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <SectionHeader
            eyebrow="What You Get"
            title="Deliverables"
            align="left"
            className="mb-0"
          />
        </div>
        <div className="w-full md:w-2/3">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8"
          >
            {deliverables.map((item, index) => (
              <motion.div key={index} variants={staggerItem} className="flex items-start">
                <span className="font-playfair text-4xl font-bold text-[var(--color-accent)] opacity-50 mr-4 mt-1 leading-none">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <p className="text-lg font-medium text-[var(--color-text)] pt-2 border-t border-[var(--color-border)] flex-grow">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
