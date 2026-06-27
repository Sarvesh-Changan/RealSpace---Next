'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { CONTACT } from '@/constants';
import { Phone } from 'lucide-react';

export function CallButton() {
  return (
    <motion.a
      href={`tel:${CONTACT.PHONE}`}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg md:hidden hover:bg-[var(--color-primary)]/90 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      aria-label="Call Us"
    >
      <Phone className="h-6 w-6" />
    </motion.a>
  );
}
