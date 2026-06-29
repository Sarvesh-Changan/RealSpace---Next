'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function CursorEffect() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const ringX = useSpring(cursorX, { stiffness: 50, damping: 20 });
  const ringY = useSpring(cursorY, { stiffness: 50, damping: 20 });

  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !isDesktop) return;

    try {
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('interactive')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    } catch (e) {
      console.error('CursorEffect error', e);
    }
  }, [isDesktop, cursorX, cursorY]);

  if (typeof window === 'undefined' || !isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--color-accent)] pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--color-accent)] pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'var(--color-accent)' : 'transparent',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
    </>
  );
}
