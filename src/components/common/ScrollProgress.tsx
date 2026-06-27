'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--color-accent)] z-50 origin-left"
      style={{ scaleX: progress / 100 }}
    />
  );
}
