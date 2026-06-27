'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { MapPin, Maximize, Palette, Calendar, Clock } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

interface ProjectMetaBarProps {
  location: string;
  area: string;
  style: string;
  duration: string;
  year: number;
}

export function ProjectMetaBar({ location, area, style, duration, year }: ProjectMetaBarProps) {
  const metaItems = [
    { icon: MapPin, label: 'Location', value: location },
    { icon: Maximize, label: 'Area', value: area },
    { icon: Palette, label: 'Style', value: style },
    { icon: Clock, label: 'Duration', value: duration },
    { icon: Calendar, label: 'Year', value: year.toString() },
  ];

  return (
    <section className="bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 py-8"
        >
          {metaItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 border-r border-gray-300 last:border-r-0">
              <item.icon className="w-5 h-5 text-[var(--color-accent)] mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-sub)] mb-1">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-[var(--color-text)]">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
