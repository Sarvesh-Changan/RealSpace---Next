'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const officeImages = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
];

export function OfficeGallerySection() {
  const [index, setIndex] = React.useState(-1);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <SectionHeader
            title="Our Studio"
            subtitle="Where ideas take shape."
            className="mb-0"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {officeImages.map((src, i) => (
            <motion.div key={i} variants={staggerItem}>
              <div 
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setIndex(i)}
              >
                <Image
                  src={src}
                  alt={`Office image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={officeImages.map((src) => ({ src }))}
        />
      </div>
    </section>
  );
}
