import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ulis-zuversicht.de/sitemap.xml',
    host: 'https://ulis-zuversicht.de',
  };
}
