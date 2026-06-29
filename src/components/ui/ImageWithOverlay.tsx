import React from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface ImageWithOverlayProps extends ImageProps {
  containerClassName?: string;
}

export function ImageWithOverlay({ containerClassName, className, ...props }: ImageWithOverlayProps) {
  return (
    <div className={cn("relative overflow-hidden group", containerClassName)}>
      <Image className={cn("object-cover", className)} {...props} />
    </div>
  )
}
