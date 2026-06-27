'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/constants';
import { fadeUp } from '@/lib/animations';

interface ServicesCTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function ServicesCTASection({
  title = "Ready to Begin Your Project?",
  subtitle = "Book a free 30-minute consultation. Discuss your space and get expert advice with no commitments.",
  buttonText = "Book Free Consultation"
}: ServicesCTASectionProps = {}) {
  return (
    <section className="relative py-24 bg-[var(--color-primary)] overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" passHref legacyBehavior>
              <Button variant="accent" size="lg" magnetic className="px-10" as="a">
                {buttonText}
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
