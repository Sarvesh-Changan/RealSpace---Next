'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { team } from '@/data/team';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

export function TeamSection() {
  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <SectionHeader
            title="The Team Behind REALSPACE"
            className="mb-0"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.id} variants={staggerItem} className="group cursor-pointer">
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-[var(--color-bg-secondary)] group-hover:border-[var(--color-accent)] transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-4 block">
                  {member.role}
                </span>
                
                <p className="text-[var(--color-text-sub)] text-sm leading-relaxed mb-6 flex-grow">
                  {member.bio}
                </p>
                
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text)] hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
