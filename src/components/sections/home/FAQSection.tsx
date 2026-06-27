'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { faqs } from '@/data/faqs';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const displayFaqs = faqs.slice(0, 8); // Take top 8

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          title="Frequently Asked Questions"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-4"
        >
          {displayFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div key={faq.id} variants={staggerItem}>
                <div 
                  className={cn(
                    "border border-[var(--color-border)] rounded-lg overflow-hidden transition-colors duration-300",
                    isOpen ? "border-[var(--color-accent)]/50 bg-[var(--color-bg-secondary)]/50" : "hover:border-gray-300"
                  )}
                >
                  <button
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className={cn(
                      "font-semibold text-[var(--color-text)] transition-colors pr-8",
                      isOpen && "text-[var(--color-accent)]"
                    )}>
                      {faq.question}
                    </h3>
                    <div className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                      isOpen ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white rotate-45" : "border-[var(--color-border)] text-gray-500"
                    )}>
                      <Plus className="h-4 w-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-6 pt-0 border-l-2 border-[var(--color-accent)] ml-6 mb-6">
                          <p className="text-[var(--color-text-sub)] text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
