'use client';

import * as React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageWithOverlayProps extends ImageProps {
  overlay?: boolean;
  caption?: string;
  containerClassName?: string;
}

export function ImageWithOverlay({
  overlay = false,
  caption,
  containerClassName,
  className,
  alt,
  ...props
}: ImageWithOverlayProps) {
  return (
    <div className={cn('group relative overflow-hidden rounded-xl', containerClassName)}>
      <Image
        alt={alt || caption || 'Image'}
        className={cn(
          'object-cover transition-transform duration-700 ease-in-out group-hover:scale-105',
          className
        )}
        {...props}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-white font-medium text-lg">{caption}</p>
        </div>
      )}
    </div>
  );
}
