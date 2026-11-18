import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

// Fonts are self-hosted (files in ./fonts, all SIL Open Font License) so builds never depend on
// downloading from Google Fonts, which failed several production builds.
const display = localFont({ src: './fonts/inter-tight-latin-wght-normal.woff2', weight: '100 900', variable: '--f-display', display: 'swap' });
const serif = localFont({
  src: [
    { path: './fonts/instrument-serif-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/instrument-serif-latin-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--f-serif', display: 'swap',
});
const mono = localFont({ src: './fonts/jetbrains-mono-latin-wght-normal.woff2', weight: '100 800', variable: '--f-mono', display: 'swap' });
// chunky letters for the hero texture and big numerals
const heavy = localFont({ src: './fonts/archivo-black-latin-400-normal.woff2', weight: '400', variable: '--f-heavy', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://thomasosayi.com'),
  title: { default: 'Thomas Osayi | Next.js & Full-Stack Developer in Los Angeles', template: '%s' },
  description:
    'Full-stack developer in Los Angeles building custom Next.js websites, SaaS MVPs and web apps, and fixing AI-built apps. Founder of SQWAD. Available for freelance projects.',
  keywords: ['Next.js developer Los Angeles', 'full-stack developer Los Angeles', 'freelance web developer LA', 'SaaS MVP developer', 'React developer', 'Firebase developer', 'fix AI-built app', 'Thomas Osayi', 'SQWAD'],
  authors: [{ name: 'Thomas Osayi' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Thomas Osayi | Next.js & Full-Stack Developer in Los Angeles',
    description: 'Custom websites, SaaS MVPs and web apps, built by a founder-developer in LA.',
    siteName: 'Thomas Osayi',
    locale: 'en_US',
    type: 'website',
    url: 'https://thomasosayi.com',
    images: [{ url: '/og-port-image.png', width: 1200, height: 630, alt: 'Thomas Osayi, Full-Stack Developer and Entrepreneur' }],
  },
  twitter: { card: 'summary_large_image' },
};

const SITE = 'https://thomasosayi.com';
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Thomas Osayi',
      url: SITE,
      image: `${SITE}/og-port-image.png`,
      jobTitle: 'Full-Stack Developer',
      description: 'Full-stack developer and founder of SQWAD, building websites, SaaS products and web apps.',
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Loyola Marymount University' },
      knowsAbout: ['Next.js', 'React', 'TypeScript', 'Firebase', 'PostgreSQL', 'SaaS development', 'Web development', 'Technical SEO'],
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      sameAs: ['https://www.linkedin.com/in/thomas-osayi', 'https://github.com/ThomasOsayi', 'https://joinsqwad.com'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE}/#business`,
      name: 'Thomas Osayi Web Development',
      url: SITE,
      image: `${SITE}/og-port-image.png`,
      founder: { '@id': `${SITE}/#person` },
      priceRange: '$$',
      areaServed: [{ '@type': 'City', name: 'Los Angeles' }, { '@type': 'Country', name: 'United States' }],
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Next.js website development', url: `${SITE}/services/nextjs-website-development` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fix and launch AI-built apps', url: `${SITE}/services/fix-ai-built-app` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS MVP development', url: `${SITE}/services/saas-mvp-development` } },
      ],
    },
    { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'Thomas Osayi', publisher: { '@id': `${SITE}/#person` } },
  ],
};

export const viewport: Viewport = { themeColor: '#0b0b0c', viewportFit: 'cover' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${mono.variable} ${heavy.variable}`} suppressHydrationWarning>
      <head>
        {/* skip the intro counter on repeat visits in the same session; set before paint */}
        <script dangerouslySetInnerHTML={{ __html: "try{if(sessionStorage.getItem('to-seen'))document.documentElement.classList.add('seen')}catch(e){}" }} />
      </head>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
