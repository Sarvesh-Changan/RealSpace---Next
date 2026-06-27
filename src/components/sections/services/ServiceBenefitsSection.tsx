'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

interface ServiceBenefitsSectionProps {
  benefits: string[];
}

export function ServiceBenefitsSection({ benefits }: ServiceBenefitsSectionProps) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          title="Key Benefits"
          subtitle="Why clients choose us for this service."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={staggerItem}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-start border border-transparent hover:border-[var(--color-accent)]/30">
                <div className="bg-[var(--color-bg-secondary)] p-3 rounded-xl mb-6 text-[var(--color-accent)]">
                   <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-[var(--color-text)] leading-snug">
                  {benefit}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
