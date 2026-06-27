'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { stats } from '@/data/stats';
import { fadeUp } from '@/lib/animations';

export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-[#1C1C1C] text-white" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--color-accent)]/20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0">
              <div className="flex items-baseline mb-2">
                <span className="font-playfair text-5xl md:text-6xl font-bold text-[var(--color-accent)]">
                  {inView ? <StatCounter value={parseInt(stat.value)} /> : '0'}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-[var(--color-accent)]">{stat.suffix}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-wide mb-2 uppercase">{stat.label}</h3>
              <p className="text-gray-400 text-sm max-w-[250px]">{stat.description}</p>
            </div>
          ))}
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
    separator: ',',
  });

  React.useEffect(() => {
    start();
  }, [start]);

  return <span ref={countUpRef} />;
}
