'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { services } from '@/data/services';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Clock, ArrowRight } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Specialty'];

export function ServicesGridSection() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredServices = React.useMemo(() => {
    if (activeCategory === 'All') return services;
    return services.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300",
                activeCategory === category
                  ? "bg-[var(--color-accent)] text-white shadow-md"
                  : "bg-white text-[var(--color-text-sub)] hover:bg-[var(--color-border)] hover:text-[var(--color-text)]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = (Icons as any)[service.icon] || Icons.Home;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[var(--color-accent)]/30 h-full flex flex-col group-hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={service.heroImage}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                        
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-[var(--color-accent)]">
                          <Icon className="w-5 h-5" />
                        </div>
                        
                        <div className="absolute bottom-4 left-4 right-4 flex items-center text-white/90 text-sm font-medium">
                           <Clock className="w-4 h-4 mr-2" />
                           {service.timeline}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="font-playfair text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-[var(--color-text-sub)] text-sm leading-relaxed mb-6 flex-grow">
                          {service.shortDescription}
                        </p>
                        
                        <div className="mt-auto flex items-center text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
