import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Thomas Osayi | Full-Stack Developer & Entrepreneur',
  description:
    'Building at the intersection of code and commerce. CS student at LMU, building SQWAD, THG, and crafting digital products that move.',
  keywords: ['Full-Stack Developer', 'Entrepreneur', 'React', 'Next.js', 'Firebase', 'Portfolio', 'LMU', 'SQWAD', 'THG'],
  authors: [{ name: 'Thomas Osayi' }],
  openGraph: {
    title: 'Thomas Osayi | Full-Stack Developer & Entrepreneur',
    description: 'Building at the intersection of code and commerce.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}