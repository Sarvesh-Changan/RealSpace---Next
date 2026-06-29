import * as React from 'react';
import Link from 'next/link';
import { footerNav } from '@/data/navigation';
import { CONTACT, SITE_NAME, SOCIAL_LINKS } from '@/constants';
import { Instagram, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Divider } from '@/components/ui/Divider';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Col 1 */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-playfair text-2xl font-bold tracking-widest text-white">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-sm">
              Interior design for Thane homes and offices that begins where your walls, beams, and budget actually are.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href={CONTACT.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-[var(--color-accent)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-[var(--color-accent)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${CONTACT.PHONE}`} className="group flex items-start text-gray-400 text-sm hover:text-[var(--color-accent)] transition-colors">
                  <Phone className="h-5 w-5 mr-3 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
                  <span>{CONTACT.PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.EMAIL}`} className="group flex items-start text-gray-400 text-sm hover:text-[var(--color-accent)] transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
                  <span>{CONTACT.EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="h-5 w-5 mr-3 text-[var(--color-accent)] flex-shrink-0" />
                <span>{CONTACT.ADDRESS.STREET}, {CONTACT.ADDRESS.LOCALITY}</span>
              </li>
            </ul>
          </div>
        </div>

        <Divider variant="light" className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-[var(--color-accent)] transition-colors">
              Privacy Policy
            </Link>
            <span>Designed with ❤️ for REALSPACE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
