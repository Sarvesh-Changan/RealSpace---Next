'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const processSteps = [
  {
    title: 'Consultation & Concept',
    description: 'We start by understanding your requirements, space, and aesthetic preferences. This leads to a conceptual design direction.',
  },
  {
    title: 'Detailed Design & Approval',
    description: 'We create detailed layouts, material palettes, and 3D renders. You approve every detail before we proceed.',
  },
  {
    title: 'Execution & Handover',
    description: 'Our team executes the approved design with precision, managing all contractors and ensuring quality until final handover.',
  }
];

export function ServiceProcessSection() {
  return (
    <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-accent) 0, var(--color-accent) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <SectionHeader
          eyebrow="Simplified Workflow"
          title="How It Works"
          className="mb-16 [&_h2]:text-white [&_span]:text-[var(--color-accent)]"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-white/20" />

          {processSteps.map((step, index) => (
            <motion.div key={index} variants={staggerItem} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center font-playfair text-2xl font-bold mb-8 shadow-lg">
                {index + 1}
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
