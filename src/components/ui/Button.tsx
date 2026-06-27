'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
  {
    variants: {
      variant: {
        primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90',
        secondary: 'bg-[var(--color-bg-secondary)] text-[var(--color-text)] hover:bg-[var(--color-border)]',
        ghost: 'hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text)]',
        text: 'text-[var(--color-text)] hover:text-[var(--color-accent)] underline-offset-4 hover:underline',
        outline: 'border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-bg-secondary)]',
        accent: 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-10 rounded-md px-6 py-2',
        lg: 'h-12 rounded-md px-8 text-base',
        icon: 'h-9 w-9',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  magnetic?: boolean;
  as?: React.ElementType;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps & any>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      icon,
      iconPosition = 'left',
      magnetic = false,
      children,
      disabled,
      as,
      ...props
    },
    ref
  ) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || disabled) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const hX = e.clientX - rect.left - rect.width / 2;
      const hY = e.clientY - rect.top - rect.height / 2;
      x.set(hX * 0.3);
      y.set(hY * 0.3);
    };

    const handleMouseLeave = () => {
      if (!magnetic || disabled) return;
      x.set(0);
      y.set(0);
    };

    const [ripples, setRipples] = React.useState<{ x: number; y: number; id: number }[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const xPos = e.clientX - rect.left;
      const yPos = e.clientY - rect.top;
      const newRipple = { x: xPos, y: yPos, id: Date.now() };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 500);
      props.onClick?.(e);
    };

    const Component = as || 'button';
    const MotionComponent = magnetic ? motion(Component as any) : Component;

    return (
      <MotionComponent
        ref={ref as any}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        disabled={disabled || loading}
        style={
          magnetic
            ? {
                x: springX,
                y: springY,
              }
            : undefined
        }
        {...(props as any)}
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
              width: '100px',
              height: '100px',
              animation: 'ripple 0.5s linear',
            }}
          />
        ))}

        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : icon && iconPosition === 'left' ? (
          <span className="mr-2">{icon}</span>
        ) : null}
        
        <span className={cn(loading && 'opacity-0')}>
            {children}
        </span>

        {!loading && icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </MotionComponent>
    );
  }
);
Button.displayName = 'Button';
