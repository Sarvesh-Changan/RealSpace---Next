import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const dividerVariants = cva('w-full h-px', {
  variants: {
    variant: {
      default: 'bg-[var(--color-border)]',
      accent: 'bg-[var(--color-accent)]',
      light: 'bg-white/20',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
  children?: React.ReactNode;
}

export function Divider({ className, variant, children, ...props }: DividerProps) {
  if (children) {
    return (
      <div className={cn('flex items-center', className)} {...props}>
        <div className={cn(dividerVariants({ variant }), 'flex-grow')} />
        <div className="mx-4 text-sm text-[var(--color-text-sub)]">{children}</div>
        <div className={cn(dividerVariants({ variant }), 'flex-grow')} />
      </div>
    );
  }

  return <div className={cn(dividerVariants({ variant }), className)} {...props} />;
}
