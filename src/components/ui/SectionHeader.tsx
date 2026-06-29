import React from 'react'
import { motion } from 'motion/react'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function SectionHeader({ title, subtitle, eyebrow, align = 'center', className }: { title: string, subtitle?: string, eyebrow?: string, align?: 'left' | 'center' | 'right', className?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={cn(`text-${align}`, className)}>
      {eyebrow && <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-2 block">{eyebrow}</span>}
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[var(--color-text)] mb-4">{title}</h2>
      {subtitle && <p className="text-[var(--color-text-sub)] text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  )
}
