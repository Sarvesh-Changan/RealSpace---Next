'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer } from '@/lib/animations';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden bg-black">
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%] w-full">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
          alt="Luxury Interior Design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center mt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] border border-[var(--color-accent)]/30 rounded-full px-4 py-1.5 backdrop-blur-sm bg-black/20">
              Interior Design Studio • Thane, Mumbai
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight max-w-5xl leading-tight">
            Spaces That Speak Your Story
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Premium interior design for Thane & Mumbai homes. Personal. Precise. Unforgettable.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" passHref legacyBehavior>
              <Button variant="accent" size="lg" as="a">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10" as="a">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-[var(--color-accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
