import type { Metadata, Viewport } from 'next';
import { Archivo_Black, Instrument_Serif, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Inter_Tight({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--f-display', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--f-serif', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--f-mono', display: 'swap' });
// chunky letters for the hero texture and big numerals
const heavy = Archivo_Black({ subsets: ['latin'], weight: '400', variable: '--f-heavy', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://thomasosayi.com'),
  title: 'Thomas Osayi | Full-Stack Developer & Entrepreneur',
  description:
    'Building at the intersection of code and commerce. CS student at LMU, founder of SQWAD, and full-stack developer shipping products for brands and LA businesses.',
  keywords: ['Full-Stack Developer', 'Entrepreneur', 'React', 'Next.js', 'Firebase', 'Portfolio', 'LMU', 'SQWAD', 'TheHoopGang'],
  authors: [{ name: 'Thomas Osayi' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Thomas Osayi | Full-Stack Developer & Entrepreneur',
    description: 'Building at the intersection of code and commerce.',
    type: 'website',
    url: 'https://thomasosayi.com',
    images: [{ url: '/og-port-image.png', width: 1200, height: 630, alt: 'Thomas Osayi, Full-Stack Developer and Entrepreneur' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#0b0b0c', viewportFit: 'cover' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable} ${heavy.variable}`} suppressHydrationWarning>
      <head>
        {/* skip the intro counter on repeat visits in the same session; set before paint */}
        <script dangerouslySetInnerHTML={{ __html: "try{if(sessionStorage.getItem('to-seen'))document.documentElement.classList.add('seen')}catch(e){}" }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
