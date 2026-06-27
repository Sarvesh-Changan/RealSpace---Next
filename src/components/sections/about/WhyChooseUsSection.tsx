'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Ruler, UserCheck, MapPin, Eye } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const reasons = [
  {
    icon: Ruler,
    title: 'Space-First Design',
    description: 'We design around your spatial constraints, not despite them. Maximizing utility without sacrificing aesthetics is our specialty.',
  },
  {
    icon: UserCheck,
    title: 'Direct Founder Access',
    description: 'You work directly with Vijay Chawan. No middle-managers, no miscommunications. Just expert guidance from day one to handover.',
  },
  {
    icon: MapPin,
    title: 'Thane Specialists',
    description: 'Deep knowledge of local properties like Lodha, Godrej, and Kalpataru layouts, allowing us to anticipate structural nuances.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'What you see is what you get. We provide detailed 3D renders for approval before any execution begins, ensuring zero surprises.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <SectionHeader
            title="Why Choose REALSPACE"
            className="mb-0"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={staggerItem} className="flex flex-col md:flex-row items-start gap-6 group">
              <div className="shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl bg-[var(--color-bg-secondary)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors duration-300">
                <reason.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 relative inline-block">
                  {reason.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                </h3>
                <p className="text-[var(--color-text-sub)] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
