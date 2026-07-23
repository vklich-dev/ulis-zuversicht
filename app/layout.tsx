import type { Metadata } from 'next';
import './globals.css';
import './serenity.css';

export const metadata: Metadata = {
  title: 'Ulis Zuversicht | Persönliche Begleitung, Energiearbeit & Kartenlegen',
  description: 'Ulrike Mader begleitet Menschen in Langenau-Albeck bei Ulm mit Energiearbeit, Kartenlegen, Raumklärung und achtsamen manuellen Anwendungen.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
