'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { fadeUp } from '@/lib/animations';

const achievements = [
  { value: 8, suffix: ' Years', label: 'Experience' },
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 4, suffix: '.5/5', label: 'Average Rating' },
];

export function AchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-[#1C1C1C] text-white" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Trusted by families across Thane and Mumbai
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-gray-400">
            Our track record speaks for itself.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20"
        >
          {achievements.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-baseline mb-3">
                <span className="font-playfair text-6xl font-bold text-[var(--color-accent)]">
                  {inView ? <StatCounter value={stat.value} /> : '0'}
                </span>
                <span className="text-4xl font-bold text-[var(--color-accent)]">{stat.suffix}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-widest uppercase text-gray-300">{stat.label}</h3>
            </div>
          ))}
        </motion.div>

        {/* Awards/Certifications Row (Static visual representation) */}
        <motion.div 
          variants={fadeUp} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {/* Mock Badges */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <span className="font-playfair font-bold">1st</span>
            </div>
            <span className="text-xs uppercase tracking-wider max-w-[100px]">Design Excellence</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 border-2 border-white flex items-center justify-center rotate-45">
              <span className="font-playfair font-bold -rotate-45">HQ</span>
            </div>
            <span className="text-xs uppercase tracking-wider max-w-[100px]">High Quality Materials</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded border-2 border-white flex items-center justify-center">
              <span className="font-playfair font-bold">ISO</span>
            </div>
            <span className="text-xs uppercase tracking-wider max-w-[100px]">Certified Process</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCounter({ value }: { value: number }) {
  const countUpRef = React.useRef(null);
  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: value,
    duration: 2.5,
  });

  React.useEffect(() => {
    start();
  }, [start]);

  return <span ref={countUpRef} />;
}
