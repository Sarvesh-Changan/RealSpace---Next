'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SOCIAL_LINKS } from '@/constants';
import { fadeUp } from '@/lib/animations';
import { Button } from '@/components/ui/Button';

// Mock instagram images since real ones aren't available
const igImages = [
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400',
];

export function InstagramSection() {
  return (
    <section className="py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <SectionHeader
            eyebrow="Follow Our Work"
            title="@realspace_27"
          />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 mb-12"
        >
          {igImages.map((src, i) => (
            <a 
              key={i} 
              href={SOCIAL_LINKS.INSTAGRAM} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-gray-200"
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[var(--color-primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[var(--color-accent)] transition-colors duration-300 z-10" />
            </a>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" icon={<Instagram className="h-4 w-4" />} as="a" href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
