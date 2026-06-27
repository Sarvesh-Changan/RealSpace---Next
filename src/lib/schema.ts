import { CONTACT, SITE_NAME, SITE_URL } from '@/constants';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesignBusiness',
    name: SITE_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: CONTACT.PHONE,
    email: CONTACT.EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.ADDRESS.STREET,
      addressLocality: 'Thane',
      addressRegion: 'Maharashtra',
      postalCode: '400608',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.2124,
      longitude: 72.9773,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      CONTACT.SOCIAL.INSTAGRAM,
      CONTACT.SOCIAL.YOUTUBE,
    ],
    priceRange: '₹₹₹',
    founder: {
      '@type': 'Person',
      name: 'Vijay Chawan',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '150',
    },
  };
}

export function getBreadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };
}

export function getServiceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'InteriorDesignBusiness',
      name: SITE_NAME,
      '@id': SITE_URL,
    },
    url: `${SITE_URL}${url}`,
  };
}

export function getImageObjectSchema(url: string, caption?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: url,
    caption,
    creator: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}
