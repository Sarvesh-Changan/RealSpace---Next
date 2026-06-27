'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

const contactFaqs = [
  {
    id: 'faq-1',
    question: 'What should I prepare before our first consultation?',
    answer: 'It helps to have a rough floor plan (even hand-drawn), some inspiration images of styles you like, and a general idea of your budget and timeline. However, if you are starting completely fresh, that is perfectly fine too.',
  },
  {
    id: 'faq-2',
    question: 'Do you charge for the initial site visit?',
    answer: 'The first consultation (usually at our office or via video call) is completely free. We discuss your needs, style, and budget. If a site visit is required before finalizing the contract, a nominal fee may apply which is later adjusted in the final project cost.',
  },
  {
    id: 'faq-3',
    question: 'How long does a typical project take?',
    answer: 'A standard 2BHK complete interior project usually takes 45-60 days for execution, while 3BHK and larger spaces might take 60-90 days. This excludes the design and approval phase, which typically takes 2-3 weeks.',
  },
  {
    id: 'faq-4',
    question: 'Do you take up projects outside Thane?',
    answer: 'Yes, while we are specialists in the Thane area (Lodha, Kalpataru, Hiranandani, etc.), we take up full-home interior projects across Mumbai, Navi Mumbai, and surrounding regions.',
  },
  {
    id: 'faq-5',
    question: 'Will I be working directly with the founder?',
    answer: 'Yes. At REALSPACE, Vijay Chawan is personally involved in the design strategy and final execution checks for every project, ensuring our quality standards are strictly maintained.',
  },
];

export function ContactFAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about getting started."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-4"
        >
          {contactFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div key={faq.id} variants={staggerItem}>
                <div 
                  className={cn(
                    "border border-[var(--color-border)] bg-white rounded-lg overflow-hidden transition-colors duration-300",
                    isOpen ? "border-[var(--color-accent)]/50" : "hover:border-gray-300"
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
