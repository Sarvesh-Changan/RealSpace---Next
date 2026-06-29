import React from 'react'
import Image from 'next/image'

export function PageHero({ title, subtitle, image, breadcrumbs }: { title: string, subtitle: string, image: string, breadcrumbs: { label: string, href?: string }[] }) {
  return (
    <section className="relative pt-32 pb-16 min-h-[40vh] flex items-center justify-center bg-gray-900">
      <Image src={image} alt={title} fill className="object-cover opacity-50" priority />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">{subtitle}</p>
        {/* Breadcrumbs here */}
      </div>
    </section>
  )
}
