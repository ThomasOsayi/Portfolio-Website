import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell, JsonLd } from '@/components/seo/Shell';
import { Faqs, faqLd } from '@/components/seo/CaseCards';
import CostCalculator from '@/components/seo/CostCalculator';
import { SITE } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Website Cost Calculator 2026 | How Much Does a Website or App Cost? | Thomas Osayi',
  description: 'Free website and app cost calculator. Pick the type of site, pages and features to get an instant price and timeline estimate for a custom Next.js build.',
  alternates: { canonical: '/tools/website-cost-calculator' },
  openGraph: { title: 'Website Cost Calculator', description: 'Instant price and timeline estimate for a custom website, web app or SaaS MVP.', url: `${SITE}/tools/website-cost-calculator`, images: ['/og-port-image.png'] },
};

const faqs = [
  { q: 'How much does a small business website cost?', a: 'With me, a polished one-page site starts around $150 and a 5-page business site with a booking or quote form is usually $450 to $1,200. Agencies often charge several times that for similar scope.' },
  { q: 'Why is a web app more expensive than a website?', a: 'A website mostly presents information. An app stores data, handles accounts and permissions, takes payments and has to stay secure, which is more design, code and testing.' },
  { q: 'What makes a website cost more?', a: 'More pages, features that store data or take payments, integrations with other tools, custom animation, multiple languages and rush timelines.' },
  { q: 'Is this estimate a quote?', a: 'No. It is a starting range based on my packages. After a short conversation about scope you get a fixed quote before any work starts.' },
  { q: 'Are there ongoing costs?', a: 'Hosting on Vercel is free or close to it for most small sites. Domains cost about $10 to $20 a year. Apps with databases, email or payments have usage-based costs that start low.' },
];

export default function CalculatorPage() {
  return (
    <Shell crumbs={[{ href: '/tools/website-cost-calculator', label: 'Website cost calculator' }]}>
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Website Cost Calculator', url: `${SITE}/tools/website-cost-calculator`, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, creator: { '@id': `${SITE}/#person` } },
        faqLd(faqs),
      ]} />
      <p className="label">Free tool</p>
      <h1>How much will your <em>website</em> cost?</h1>
      <p className="lede">Pick what you need and get an instant price and timeline estimate for a custom build. Estimates use my real package prices, not made-up market averages.</p>
      <CostCalculator />

      <h2>How the estimate works</h2>
      <div className="seo-prose">
        <p>Every project starts from one of my packages: a one-page site, a business site of up to 5 pages, a custom multi-page build, a SaaS MVP or a full platform. Each feature adds the design, build and testing time it actually takes. Rush timelines cost more because other work moves to make room.</p>
        <p>The biggest cost driver is not pages, it is data. Anything that stores information for users, like accounts, orders, bookings or payments, needs security, edge cases and testing that a static page does not. If you are unsure whether you need a website or an app, read <Link href="/blog/nextjs-vs-wordpress-small-business">Next.js vs WordPress for a small business website</Link> or look at the <Link href="/services">services</Link>.</p>
      </div>

      <h2>Questions</h2>
      <Faqs items={faqs} />

      <h2>By industry</h2>
      <p className="seo-prose"><Link href="/websites-for/restaurants">Restaurants</Link> · <Link href="/websites-for/therapy-practices">Therapy practices</Link> · <Link href="/websites-for/medical-clinics">Medical clinics</Link> · <Link href="/websites-for/salons-and-spas">Salons and spas</Link> · <Link href="/websites-for/startups">Startups</Link> · <Link href="/websites-for/local-service-businesses">Local services</Link></p>
    </Shell>
  );
}
