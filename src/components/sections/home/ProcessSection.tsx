'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { processSteps } from '@/data/process';
import * as Icons from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useInView } from '@/hooks/useInView';

export function ProcessSection() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          eyebrow="How We Work"
          title="Our Design Process"
          subtitle="A transparent, step-by-step approach ensuring quality and timely delivery from concept to handover."
          className="mb-20"
        />

        <div ref={ref} className="relative">
          {/* Connecting Line (Desktop) */}
          {isDesktop && (
            <div className="absolute top-[3rem] left-[5%] right-[5%] h-0.5 bg-[var(--color-border)]">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[var(--color-accent)]"
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          )}

          {/* Connecting Line (Mobile) */}
          {!isDesktop && (
            <div className="absolute top-4 bottom-4 left-[2.25rem] w-0.5 bg-[var(--color-border)]">
               <motion.div
                className="absolute top-0 left-0 w-full bg-[var(--color-accent)]"
                initial={{ height: 0 }}
                animate={inView ? { height: '100%' } : { height: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          )}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={cn(
              "grid gap-8",
              isDesktop ? "grid-cols-6" : "grid-cols-1 gap-y-12"
            )}
          >
            {processSteps.map((step, index) => {
              const Icon = (Icons as any)[step.icon] || Icons.CheckCircle;
              
              return (
                <motion.div 
                  key={step.id} 
                  variants={staggerItem}
                  className={cn(
                    "relative",
                    isDesktop ? "flex flex-col items-center text-center px-2" : "flex flex-row items-start pl-20"
                  )}
                >
                  {/* Circle Node */}
                  <div className={cn(
                    "flex items-center justify-center bg-[var(--color-bg-secondary)] rounded-full border-4 border-[var(--color-bg-secondary)] z-10 transition-colors duration-500",
                    isDesktop ? "w-16 h-16 mb-6" : "absolute left-[1.25rem] -translate-x-1/2 w-12 h-12",
                    "text-[var(--color-accent)] bg-white shadow-md shadow-black/5"
                  )}>
                    <Icon className={cn(isDesktop ? "w-6 h-6" : "w-5 h-5")} />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
                      {step.duration}
                    </span>
                    <h4 className="font-playfair text-xl font-bold text-[var(--color-text)] mb-3">
                      {step.title}
                    </h4>
                    <p className="text-[var(--color-text-sub)] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
