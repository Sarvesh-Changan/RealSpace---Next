import * as React from 'react';

export function MapSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] w-full border border-[var(--color-border)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.106429218151!2d72.97728471490297!3d19.21239928701026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9382ff5df47%3A0x6b1b6ebfb50d306b!2sLodha%20Crown%20Quality%20Homes!5e0!3m2!1sen!2sin!4v1684824345678!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="REALSPACE Office Location"
            className="absolute inset-0"
          ></iframe>
          
          <div className="absolute bottom-6 left-6 z-10">
            <a 
              href="https://goo.gl/maps/LodhaCrownMajiwadaThane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-[var(--color-text)] font-semibold rounded-lg shadow-md hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
