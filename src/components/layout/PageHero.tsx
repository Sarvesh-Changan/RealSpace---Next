'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, image, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
      {image && (
        <>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent" />
        </>
      )}
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-sm text-gray-300 mb-6"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="hover:text-[var(--color-accent)] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? 'text-[var(--color-accent)] font-medium' : ''}>
                    {crumb.label}
                  </span>
                )}
                {!isLast && <ChevronRight className="h-4 w-4 mx-1 opacity-50" />}
              </React.Fragment>
            );
          })}
        </motion.nav>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
