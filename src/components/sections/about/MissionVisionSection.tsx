'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const corePrinciples = [
  {
    id: 'mission',
    title: 'Our Mission',
    icon: Target,
    description: 'To deliver functional, beautifully crafted interior spaces that directly solve the spatial and lifestyle challenges of families in Thane and Mumbai, without compromising on quality or transparency.',
  },
  {
    id: 'vision',
    title: 'Our Vision',
    icon: Eye,
    description: 'To be the most trusted interior design studio in Maharashtra, recognized for our space-first philosophy, unwavering ethical standards, and ability to turn complex constraints into elegant design solutions.',
  },
  {
    id: 'values',
    title: 'Core Values',
    icon: Heart,
    description: 'Integrity in every quote. Transparency in every process. Empathy for our clients needs. And an absolute obsession with the details that make a house feel like a home.',
  },
];

export function MissionVisionSection() {
  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {corePrinciples.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Card className="h-full p-10 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="h-8 w-8 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[var(--color-text)] mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-sub)] leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
