'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CONTACT } from '@/constants';
import { Button } from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  projectType: z.string().min(1, 'Project type is required'),
  budget: z.string().optional(),
  city: z.string().optional(),
  source: z.string().optional(),
  description: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        throw new Error('Form configuration is missing.');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Enquiry from ${data.name} - ${data.projectType}`,
          from_name: data.name,
          ...data,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error(result.message || 'Failed to submit form.');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Form */}
          <div className="w-full lg:w-[60%]">
            <div className="mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                Send an Enquiry
              </h2>
              <p className="text-[var(--color-text-sub)]">
                Fill out the form below and our design team will get back to you within 24 hours to discuss your project.
              </p>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-[var(--color-bg-secondary)] p-12 rounded-2xl flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-500 mb-6 shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-[var(--color-text)] mb-2">
                      Thank You!
                    </h3>
                    <p className="text-[var(--color-text-sub)] mb-8">
                      We've received your details. We'll contact you within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setIsSuccess(false)}>
                      Send Another Enquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {error && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm mb-6 border border-red-100">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Full Name *</label>
                        <input
                          {...register('name')}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                          placeholder="John Doe"
                        />
                        {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          {...register('phone')}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                          placeholder="+91 XXXXX XXXXX"
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Email Address *</label>
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Project Type */}
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Project Type *</label>
                        <select
                          {...register('projectType')}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors appearance-none"
                        >
                          <option value="">Select a type...</option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Office">Office</option>
                          <option value="Modular Kitchen">Modular Kitchen</option>
                          <option value="Renovation">Renovation</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.projectType && <span className="text-red-500 text-xs mt-1 block">{errors.projectType.message}</span>}
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Budget Range</label>
                        <select
                          {...register('budget')}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors appearance-none"
                        >
                          <option value="">Select budget...</option>
                          <option value="Under ₹5L">Under ₹5L</option>
                          <option value="₹5–10L">₹5–10L</option>
                          <option value="₹10–20L">₹10–20L</option>
                          <option value="₹20L+">₹20L+</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* City */}
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">City/Location</label>
                        <input
                          {...register('city')}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
                          placeholder="e.g. Thane, Navi Mumbai, Mumbai"
                        />
                      </div>

                      {/* Source */}
                      <div>
                        <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">How did you hear about us?</label>
                        <select
                          {...register('source')}
                          className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors appearance-none"
                        >
                          <option value="">Select...</option>
                          <option value="Instagram">Instagram</option>
                          <option value="Google">Google</option>
                          <option value="Justdial">Justdial</option>
                          <option value="Referral">Referral</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Project Description</label>
                      <textarea
                        {...register('description')}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors resize-none"
                        placeholder="Tell us a bit about your space and requirements..."
                      />
                    </div>

                    <Button type="submit" variant="accent" size="lg" className="w-full py-4 text-base" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-[var(--color-bg-secondary)] p-8 md:p-12 rounded-2xl h-full border border-[var(--color-border)]">
              <h3 className="font-playfair text-2xl font-bold text-[var(--color-text)] mb-8">
                Contact Information
              </h3>

              <div className="space-y-8 mb-12">
                <a href={`tel:${CONTACT?.PHONE || '+919869211777'}`} className="flex items-start group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-accent)] shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors shadow-sm mr-5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[var(--color-text-sub)] uppercase tracking-wider mb-1">Phone</span>
                    <span className="text-[var(--color-text)] font-medium text-lg group-hover:text-[var(--color-accent)] transition-colors">{CONTACT?.PHONE_DISPLAY || '+91 98692 11777'}</span>
                  </div>
                </a>

                <a href={`mailto:${CONTACT?.EMAIL || 'realspaceinteriors@hotmail.com'}`} className="flex items-start group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-accent)] shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors shadow-sm mr-5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[var(--color-text-sub)] uppercase tracking-wider mb-1">Email</span>
                    <span className="text-[var(--color-text)] font-medium group-hover:text-[var(--color-accent)] transition-colors break-all">{CONTACT?.EMAIL || 'realspaceinteriors@hotmail.com'}</span>
                  </div>
                </a>

                <a href={`https://wa.me/${CONTACT?.PHONE?.replace(/[^0-9]/g, '') || '919869211777'}`} target="_blank" rel="noopener noreferrer" className="flex items-start group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors shadow-sm mr-5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[var(--color-text-sub)] uppercase tracking-wider mb-1">WhatsApp</span>
                    <span className="text-[var(--color-text)] font-medium group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</span>
                  </div>
                </a>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-accent)] shrink-0 shadow-sm mr-5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[var(--color-text-sub)] uppercase tracking-wider mb-1">Address</span>
                    <span className="text-[var(--color-text)] font-medium leading-relaxed">
                      {CONTACT?.ADDRESS?.STREET || 'W5-1717, Lodha Crown Quality Homes'},<br />
                      {CONTACT?.ADDRESS?.LOCALITY || 'Majiwada, Thane 400608'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-accent)] shrink-0 shadow-sm mr-5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[var(--color-text-sub)] uppercase tracking-wider mb-1">Business Hours</span>
                    <span className="text-[var(--color-text)] font-medium leading-relaxed">
                      Mon–Sat: 10:00 AM – 7:00 PM<br />
                      Sun: Closed
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[var(--color-border)]">
                <span className="block text-sm font-semibold text-[var(--color-text-sub)] uppercase tracking-wider mb-4">Follow Us</span>
                <div className="flex space-x-4">
                  <a href={CONTACT?.SOCIAL?.INSTAGRAM || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-accent)] hover:text-white transition-colors shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={CONTACT?.SOCIAL?.YOUTUBE || '#'} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[var(--color-text)] hover:bg-[var(--color-accent)] hover:text-white transition-colors shadow-sm">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
