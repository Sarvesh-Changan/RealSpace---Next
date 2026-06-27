export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'services';
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  heroImage: string;
  galleryImages: string[];
  faqs: FAQ[];
  featured: boolean;
  category: 'Residential' | 'Commercial' | 'Specialty';
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  area: string;
  style: string;
  duration: string;
  year: number;
  thumbnail: string;
  images: string[];
  colorPalette: string[];
  materials: string[];
  challenge: string;
  solution: string;
  outcome: string;
  featured: boolean;
  client?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  location: string;
  rating: number;
  review: string;
  projectType: string;
  image: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  experience: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
}
