'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/testimonials';
import { Card } from '@/components/ui/Card';
import { fadeUp } from '@/lib/animations';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#F8F5F1]">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader
          eyebrow="What Clients Say"
          title="Client Testimonials"
          className="mb-16"
        />

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="relative group">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
              className="!pb-16"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto">
                  <Card className="h-full p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <Quote className="h-10 w-10 text-[var(--color-accent)]/20 rotate-180" />
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(testimonial.rating) ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[var(--color-text-sub)] italic mb-8 line-clamp-4">
                        &ldquo;{testimonial.review}&rdquo;
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-auto border-t border-[var(--color-border)] pt-6">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border border-[var(--color-border)]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--color-text)] text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-[var(--color-text-sub)]">{testimonial.location}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-[var(--color-bg-secondary)] text-[var(--color-text)] px-2 py-1 rounded-sm">
                          {testimonial.projectType}
                        </span>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <button className="swiper-button-prev-custom absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="swiper-button-next-custom absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-0">
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center space-x-2 mt-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
