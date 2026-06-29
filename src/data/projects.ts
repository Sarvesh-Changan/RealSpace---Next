import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'lodha-crown-3bhk',
    title: 'Lodha Crown Quality Homes 3BHK',
    category: 'Residential',
    location: 'Majiwada, Thane',
    area: '1,200 sq.ft.',
    style: 'Modern Minimalist',
    duration: '60 Days',
    year: 2023,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80'
    ],
    challenge: 'The client wanted a spacious-feeling home within a typical apartment layout, maximizing natural light while maintaining ample storage.',
    solution: 'We used a neutral color palette with hidden storage solutions and open-plan living areas to create a sense of expansiveness.',
    outcome: 'A beautiful, highly functional home that feels much larger than its square footage, perfectly tailored to a modern family.',
    colorPalette: ['#FFFFFF', '#F8F5F1', '#E8E2DA', '#1C1C1C', '#C8A96A'],
    materials: ['Italian Marble', 'Veneer Wood', 'Matte Finish Laminates', 'Fluted Glass']
  },
  {
    id: 'proj-2',
    slug: 'hiranandani-estate-villa',
    title: 'Hiranandani Estate Villa',
    category: 'Residential',
    location: 'Hiranandani Estate, Thane',
    area: '4,500 sq.ft.',
    style: 'Classic Luxury',
    duration: '120 Days',
    year: 2022,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80'
    ],
    challenge: 'Designing a sprawling villa that balances opulent luxury with warm, inviting family spaces.',
    solution: 'Incorporated rich textures, custom-made furniture, and statement lighting, balanced by cozy family nooks and natural materials.',
    outcome: 'An exquisite estate that serves both as a grand entertaining venue and a comfortable private sanctuary.',
    colorPalette: ['#1C1C1C', '#C8A96A', '#EEE6DD', '#FFFFFF', '#6D6A66'],
    materials: ['Onyx Marble', 'Brass Accents', 'Teak Wood', 'Velvet Upholstery']
  },
];
