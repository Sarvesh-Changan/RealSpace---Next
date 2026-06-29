'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/constants';
import { fadeUp } from '@/lib/animations';

export function AboutCTASection() {
  return (
    <section className="relative py-24 bg-[var(--color-primary)] overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #C8A96A 25%, transparent 25%, transparent 75%, #C8A96A 75%, #C8A96A), linear-gradient(45deg, #C8A96A 25%, transparent 25%, transparent 75%, #C8A96A 75%, #C8A96A)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }} />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Design Something Extraordinary
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Tell us about your space. We&apos;ll handle the rest.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" passHref legacyBehavior>
              <Button variant="accent" size="lg" className="px-10">
                Book Free Consultation
              </Button>
            </Link>
            <span className="text-gray-400">or</span>
            <a href={`tel:${CONTACT.PHONE}`} className="text-white hover:text-[var(--color-accent)] font-medium transition-colors text-lg tracking-wide">
               Call {CONTACT.PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
