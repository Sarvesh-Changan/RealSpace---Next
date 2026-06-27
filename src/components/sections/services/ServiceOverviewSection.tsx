'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Service } from '@/types';
import { fadeUp } from '@/lib/animations';
import { Clock, IndianRupee, Tag } from 'lucide-react';

interface ServiceOverviewSectionProps {
  service: Service;
}

export function ServiceOverviewSection({ service }: ServiceOverviewSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-4 block">
                Overview
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
                About This Service
              </h2>
              <p className="text-[var(--color-text-sub)] text-lg leading-relaxed mb-10">
                {service.fullDescription}
              </p>

              <div className="bg-[var(--color-bg-secondary)] p-8 rounded-2xl">
                <h3 className="font-playfair text-xl font-bold text-[var(--color-text)] mb-6">Service Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4 text-[var(--color-accent)] shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-1">Timeline</h4>
                      <p className="text-[var(--color-text-sub)]">{service.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4 text-[var(--color-accent)] shadow-sm">
                      <IndianRupee className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-1">Starting Price</h4>
                      <p className="text-[var(--color-text-sub)]">{service.startingPrice}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-full mr-4 text-[var(--color-accent)] shadow-sm">
                      <Tag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-1">Category</h4>
                      <p className="text-[var(--color-text-sub)]">{service.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
             <motion.div 
               variants={fadeUp} 
               initial="hidden" 
               whileInView="visible" 
               viewport={{ once: true }}
               className="grid grid-cols-1 gap-6"
             >
                {service.galleryImages.length > 0 ? (
                  service.galleryImages.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={img}
                        alt={`${service.title} detail ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))
                ) : (
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                  </div>
                )}
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
