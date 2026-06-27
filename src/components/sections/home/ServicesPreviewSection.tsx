'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { services } from '@/data/services';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import * as Icons from 'lucide-react';

export function ServicesPreviewSection() {
  const featuredServices = services.filter((s) => s.featured).slice(0, 6);

  return (
    <section className="py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            eyebrow="What We Create"
            title="Our Services"
            align="left"
            className="max-w-2xl"
          />
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link
              href="/services"
              className="group inline-flex items-center text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredServices.map((service) => {
            const Icon = (Icons as any)[service.icon] || Icons.Home;

            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="group h-full p-8 border border-transparent hover:border-[var(--color-accent)]/30 flex flex-col justify-between transition-all duration-300">
                    <div>
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] text-[var(--color-accent)] group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[var(--color-text-sub)] line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
