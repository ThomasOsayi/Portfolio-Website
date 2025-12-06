import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thomas Osayi | Software Engineer × Product Designer',
  description:
    'CS student at LMU crafting digital experiences at the intersection of engineering excellence and thoughtful design.',
  keywords: ['Software Engineer', 'Product Designer', 'React', 'Portfolio', 'LMU'],
  authors: [{ name: 'Thomas Osayi' }],
  openGraph: {
    title: 'Thomas Osayi | Software Engineer × Product Designer',
    description:
      'CS student at LMU crafting digital experiences at the intersection of engineering excellence and thoughtful design.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}