import { NavItem } from '@/types';

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { 
    label: 'Services', 
    href: '/services',
    dropdown: [
      { label: 'Residential', href: '/services/residential' },
      { label: 'Commercial', href: '/services/commercial' },
      { label: 'Modular Kitchen', href: '/services/modular-kitchen' },
      { label: 'Turnkey Projects', href: '/services/turnkey' },
    ]
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' }
];

export const footerNav = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Careers', href: '/careers' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
  services: [
    { label: 'Residential Interiors', href: '/services/residential' },
    { label: 'Commercial Interiors', href: '/services/commercial' },
    { label: 'Modular Kitchens', href: '/services/modular-kitchen' },
    { label: 'False Ceiling', href: '/services/false-ceiling' },
    { label: '3D Visualization', href: '/services/3d-visualization' },
  ],
  projects: [
    { label: 'All Projects', href: '/projects' },
    { label: 'Lodha Crown, Majiwada', href: '/projects/lodha-crown' },
    { label: 'Hiranandani Estate', href: '/projects/hiranandani-estate' },
    { label: 'Kolshet Road', href: '/projects/kolshet-road' },
    { label: 'Commercial Spaces', href: '/projects?category=commercial' },
  ],
  contact: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Book Consultation', href: '/book-consultation' },
    { label: 'FAQs', href: '/faqs' },
  ]
};
