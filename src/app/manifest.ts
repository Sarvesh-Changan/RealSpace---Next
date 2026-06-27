import { MetadataRoute } from 'next';
import { SITE_NAME } from '@/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | Premium Interior Design Studio`,
    short_name: SITE_NAME,
    description: 'Premium interior design studio specializing in luxury residential and commercial spaces in Thane and Mumbai.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F5F1',
    theme_color: '#F8F5F1',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
