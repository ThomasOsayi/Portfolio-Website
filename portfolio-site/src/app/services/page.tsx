import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell, JsonLd } from '@/components/seo/Shell';
import { services, SITE } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Web Development Services | Next.js, SaaS MVPs, AI App Fixes | Thomas Osayi',
  description: 'Custom Next.js websites, SaaS MVP development and fixing AI-built apps. Full-stack developer in Los Angeles working with businesses and founders anywhere.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  return (
    <Shell crumbs={[{ href: '/services', label: 'Services' }]}>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/services/${s.slug}`, name: s.title })) }} />
      <p className="label">Services</p>
      <h1>What I <em>build</em> for clients</h1>
      <p className="lede">Three things, done well: custom websites that rank, SaaS products that ship, and AI-built apps taken from stuck to live.</p>
      <div className="seo-grid">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="seo-card">
            <div>
              <span className="label">{s.packages[0].price}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
