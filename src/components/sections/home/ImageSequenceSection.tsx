'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';

const TOTAL_FRAMES = 20;

export function ImageSequenceSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [images, setImages] = React.useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  // Use a reduced motion check or just use mobile check for fallback
  const showFallback = !isDesktop;

  React.useEffect(() => {
    if (showFallback) return;

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      const frameNumber = i.toString().padStart(3, '0');
      // For real app, point this to sequence images. Fallback to picsum for now since files don't exist
      img.src = `https://picsum.photos/seed/${frameNumber}/1920/1080`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
          setLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, [showFallback]);

  React.useEffect(() => {
    if (!loaded || !canvasRef.current || showFallback) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const progress = scrollYProgress.get();
      const frameIndex = Math.min(
        Math.floor(progress * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      const img = images[frameIndex];
      if (img) {
        // Draw image covering canvas
        const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;  
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [loaded, scrollYProgress, images, showFallback]);

  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.2, 0.3], [0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [50, 0, 0, -50]);

  const text3Opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const text3Y = useTransform(scrollYProgress, [0.8, 0.9, 1], [50, 0, 0]);


  if (showFallback) {
    return (
      <section className="py-24 bg-black text-white text-center">
        <div className="container mx-auto px-6">
           <h2 className="font-playfair text-4xl mb-8">Where Every Detail Matters</h2>
           <div className="grid grid-cols-1 gap-4">
             <Image src="https://picsum.photos/seed/before/800/600" alt="Before" width={800} height={600} className="w-full h-auto rounded-xl" />
             <Image src="https://picsum.photos/seed/after/800/600" alt="After" width={800} height={600} className="w-full h-auto rounded-xl" />
           </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white z-10 bg-black">
            <span className="animate-pulse">Loading visual experience...</span>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6 text-center">
          <motion.div style={{ opacity: text1Opacity, y: text1Y }} className="absolute">
            <h2 className="font-playfair text-5xl md:text-7xl text-white font-bold tracking-tight">
              Where Every Detail Matters
            </h2>
          </motion.div>

          <motion.div style={{ opacity: text2Opacity, y: text2Y }} className="absolute">
            <h2 className="font-playfair text-5xl md:text-7xl text-white font-bold tracking-tight">
              Crafting Spaces With Purpose
            </h2>
          </motion.div>

          <motion.div style={{ opacity: text3Opacity, y: text3Y }} className="absolute">
            <h2 className="font-playfair text-5xl md:text-7xl text-[var(--color-accent)] font-bold tracking-tight">
              Your Vision, Perfectly Executed
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
