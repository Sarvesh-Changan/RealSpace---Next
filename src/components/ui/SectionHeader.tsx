'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
      {...(props as any)}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text)]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg text-[var(--color-text-sub)]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
