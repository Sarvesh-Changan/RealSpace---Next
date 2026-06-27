'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { mainNav } from '@/data/navigation';
import { CONTACT } from '@/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setTimeout(() => setIsMobileMenuOpen(false), 0);
  }, [pathname]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="z-50 relative">
            <span className={cn(
              "font-playfair text-2xl font-bold tracking-widest transition-colors duration-300",
              isScrolled || isMobileMenuOpen ? "text-[var(--color-primary)]" : "text-white"
            )}>
              REALSPACE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-[var(--color-accent)]",
                      isScrolled ? "text-[var(--color-text)]" : "text-white",
                      isActive && "text-[var(--color-accent)]"
                    )}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-accent)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${CONTACT.PHONE}`} className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-[var(--color-accent)]",
              isScrolled ? "text-[var(--color-text)]" : "text-white"
            )}>
              <Phone className="mr-2 h-4 w-4" />
              {CONTACT.PHONE_DISPLAY}
            </a>
            <Link href="/contact" passHref legacyBehavior>
              <Button variant={isScrolled ? "primary" : "accent"} size="sm" magnetic as="a">
                 Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 relative p-2"
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", isMobileMenuOpen ? "text-white" : isScrolled ? "text-black" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-black" : "text-white")} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-primary)] flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center space-y-6">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="font-playfair text-4xl text-white hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 20 }}
                 transition={{ delay: mainNav.length * 0.1, duration: 0.4 }}
                 className="pt-8"
              >
              <Link href="/contact" passHref legacyBehavior>
                <Button variant="accent" size="lg" as="a">
                   Book Consultation
                </Button>
              </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
