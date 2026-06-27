import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/constants';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  imageUrl?: string;
}

export function generateMetadata({
  title,
  description = 'REALSPACE - Premium Interior Design Studio in Thane and Mumbai. Specializing in residential and commercial spaces.',
  path = '',
  imageUrl = `${SITE_URL}/og-image.jpg`,
}: GenerateMetadataProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function generateOpenGraph(title: string, description: string, url: string, imageUrl?: string) {
  return {
    title,
    description,
    url,
    siteName: SITE_NAME,
    images: [
      {
        url: imageUrl || `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  };
}
