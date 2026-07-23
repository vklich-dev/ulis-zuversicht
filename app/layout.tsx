import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ulis Zuversicht | Spirituelle Lebensberatung & Energiearbeit',
  description: 'Kartenlegen, Energiearbeit, energetische Raumreinigung und manuelle Anwendungen in Langenau-Albeck bei Ulm.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
