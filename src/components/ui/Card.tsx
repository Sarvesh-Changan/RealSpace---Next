'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const cardVariants = cva(
  'rounded-xl bg-[var(--color-card)] text-[var(--color-text)]',
  {
    variants: {
      variant: {
        default: 'shadow-card hover:shadow-hover transition-shadow duration-300',
        flat: 'shadow-none',
        bordered: 'border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow duration-300',
      },
      interactive: {
        true: 'cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, interactive, ...props }, ref) => {
    const Component = interactive ? motion.div : 'div';
    
    return (
      <Component
        ref={ref as any}
        className={cn(cardVariants({ variant, interactive, className }))}
        whileHover={interactive ? { y: -5 } : undefined}
        {...(props as any)}
      />
    );
  }
);
Card.displayName = 'Card';
