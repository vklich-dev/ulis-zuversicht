import type { Metadata } from 'next';
import './globals.css';
import './serenity.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ulis-zuversicht.de'),
  title: 'Ulis Zuversicht | Kartenlegen & Energiearbeit bei Ulm',
  description: 'Ulrike Mader in Langenau-Albeck bei Ulm: persönliche spirituelle Begleitung, Lenormand- und Tarot-Kartenlegen, Energiearbeit, Reiki, Pendel, Raumklärung und achtsame manuelle Anwendungen.',
  keywords: [
    'Ulrike Mader', 'Ulis Zuversicht', 'Kartenlegen Ulm', 'Kartenlegen Langenau',
    'Lenormand Ulm', 'Tarot Ulm', 'spirituelle Beratung Ulm', 'Energiearbeit Ulm',
    'Energiearbeit Langenau', 'Reiki Langenau', 'Pendel Beratung',
    'energetische Raumklärung Ulm', 'Dorn Breuß Langenau', 'bioenergetische Massage', 'Innerwise',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'de_DE', url: 'https://ulis-zuversicht.de', siteName: 'Ulis Zuversicht',
    title: 'Ulis Zuversicht | Kartenlegen & Energiearbeit bei Ulm',
    description: 'Persönliche Begleitung mit Kartenlegen, Energiearbeit, Reiki, Pendel und Raumklärung in Langenau-Albeck bei Ulm.',
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'Ulis Zuversicht',
      url: 'https://ulis-zuversicht.de',
      founder: { '@type': 'Person', name: 'Ulrike Mader' },
      areaServed: ['Langenau', 'Ulm', 'Neu-Ulm', 'Alb-Donau-Kreis'],
      description: 'Persönliche und spirituelle Begleitung mit Kartenlegen, Energiearbeit, Reiki, Pendel, Raumklärung und achtsamen manuellen Anwendungen.',
      knowsAbout: ['Lenormand', 'Tarot', 'Skatkarten', 'Orakelkarten', 'Pendel', 'Energiearbeit', 'Reiki', 'Feng Shui', 'Fußreflexzonen', 'Breuß-Dorn-Fleig', 'Bioenergetische Massagetechniken', 'Innerwise', 'Energetische Raumklärung'],
    },
    {
      '@type': 'Person',
      name: 'Ulrike Mader',
      url: 'https://ulis-zuversicht.de',
      jobTitle: 'Persönliche und spirituelle Begleiterin',
      knowsAbout: ['Lenormandkarten', 'Tarotkarten', 'Pendel', 'Energiearbeit', 'Reiki 1. und 2. Grad', 'Feng Shui', 'Fußreflexzonen', 'Breuß-Dorn-Fleig', 'Bioenergetische Massagetechniken', 'Innerwise'],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        {children}
      </body>
    </html>
  );
}
