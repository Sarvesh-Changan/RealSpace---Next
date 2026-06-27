'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { fadeUp } from '@/lib/animations';

export function FounderSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Image Column */}
          <div className="w-full lg:w-[60%] relative">
            <motion.div style={{ y }} className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="Vijay Chawan - Founder of REALSPACE"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 border-4 border-transparent border-b-[var(--color-accent)] border-r-[var(--color-accent)] rounded-2xl m-4 pointer-events-none opacity-50" />
            </motion.div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-[40%]">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-4 block">
                Meet the Founder
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-2">
                Vijay Chawan
              </h2>
              <div className="inline-block bg-[var(--color-bg-secondary)] px-4 py-1.5 rounded-full mb-8">
                <span className="text-sm font-medium text-[var(--color-text)]">
                  Principal Designer & Founder
                </span>
              </div>
              
              <div className="space-y-6 text-[var(--color-text-sub)] leading-relaxed mb-10">
                <p>
                  My journey in interior design started with a simple observation: beautiful spaces often fail when they don&apos;t solve real functional problems. I founded REALSPACE to change that narrative.
                </p>
                <p>
                  Having worked extensively across Thane and Mumbai, I&apos;ve developed a deep understanding of local architecture—from the specific spatial constraints of Lodha and Kalpataru apartments to the unique lifestyle needs of modern Indian families.
                </p>
                <p>
                  We don&apos;t just decorate rooms. We engineer environments that flow effortlessly with your daily routines.
                </p>
              </div>

              <blockquote className="border-l-4 border-[var(--color-accent)] pl-6 py-2 mb-10">
                <p className="font-playfair text-xl italic text-[var(--color-text)]">
                  &ldquo;Design begins where your space ends — and that&apos;s exactly where we start.&rdquo;
                </p>
              </blockquote>

              <div className="font-playfair text-3xl text-[var(--color-accent)] italic opacity-80">
                V. Chawan
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
