'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

interface ProjectStoryProps {
  challenge: string;
  solution: string;
  outcome: string;
}

export function ProjectStory({ challenge, solution, outcome }: ProjectStoryProps) {
  const storyCards = [
    {
      title: 'The Challenge',
      icon: Target,
      content: challenge,
      bg: 'bg-red-50'
    },
    {
      title: 'Our Solution',
      icon: Lightbulb,
      content: solution,
      bg: 'bg-blue-50'
    },
    {
      title: 'The Outcome',
      icon: CheckCircle2,
      content: outcome,
      bg: 'bg-green-50'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {storyCards.map((card, index) => (
            <motion.div key={index} variants={staggerItem} className={`p-8 rounded-2xl ${card.bg}`}>
               <div className="flex items-center mb-6">
                 <card.icon className="w-6 h-6 text-[var(--color-accent)] mr-3" />
                 <h3 className="font-playfair text-2xl font-bold text-[var(--color-text)]">
                   {card.title}
                 </h3>
               </div>
               <p className="text-[var(--color-text-sub)] leading-relaxed">
                 {card.content}
               </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
