import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'srv-1',
    slug: 'residential-design',
    title: 'Residential Interior Design',
    shortDescription: 'Complete residential interior design for apartments and villas.',
    fullDescription: 'We provide end-to-end residential interior design services, transforming empty spaces into beautiful, functional homes.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    icon: 'Home',
    startingPrice: '₹5,00,000',
    timeline: '60-90 days',
    featured: true,
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    ],
    benefits: ['Personalized Design', 'Space Optimization', 'Premium Materials'],
    deliverables: ['3D Walkthroughs', 'Material Selection', 'Execution & Handover'],
    faqs: [
      { id: 'f1', question: 'How long does it take?', answer: 'Typically 60-90 days for a 3BHK.', category: 'process' },
      { id: 'f2', question: 'Do you provide a warranty?', answer: 'Yes, up to 5 years on woodwork.', category: 'services' }
    ],
    category: 'Residential',
  },
  {
    id: 'srv-2',
    slug: 'commercial-design',
    title: 'Commercial Interior Design',
    shortDescription: 'Innovative commercial spaces and office interiors.',
    fullDescription: 'We create inspiring workspaces that boost productivity and reflect your brand identity.',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
    icon: 'Briefcase',
    startingPrice: '₹10,00,000',
    timeline: '90-120 days',
    featured: true,
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
    ],
    benefits: ['Brand Alignment', 'Employee Productivity', 'Space Efficiency'],
    deliverables: ['Layout Planning', 'Lighting Design', 'Furniture Sourcing'],
    faqs: [
      { id: 'f3', question: 'Can you work on weekends?', answer: 'Yes, to minimize business disruption.', category: 'process' },
    ],
    category: 'Commercial',
  },
  {
    id: 'srv-3',
    slug: 'modular-kitchens',
    title: 'Modular Kitchens',
    shortDescription: 'Modern, highly functional modular kitchen designs.',
    fullDescription: 'Custom modular kitchens designed for the Indian cooking style, featuring smart storage and premium finishes.',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    icon: 'Coffee',
    startingPrice: '₹2,50,000',
    timeline: '30-45 days',
    featured: false,
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    ],
    benefits: ['Smart Storage', 'Easy Maintenance', 'Durable Materials'],
    deliverables: ['Ergonomic Layout', 'Appliance Integration', 'Custom Cabinetry'],
    faqs: [
      { id: 'f4', question: 'What materials do you use?', answer: 'Marine-grade plywood with acrylic or PU finishes.', category: 'services' },
    ],
    category: 'Specialty',
  },
];
