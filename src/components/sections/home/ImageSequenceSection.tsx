'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { fadeUp } from '@/lib/animations';

export function ImageSequenceSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" 
          alt="Interior Design Details" 
          fill 
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight">
            Where Every Detail Matters
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
