import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell } from '@/components/seo/Shell';
import { industries } from '@/data/landing';

export const metadata: Metadata = {
  title: 'Websites by Industry | Restaurants, Clinics, Therapy, Salons, Startups | Thomas Osayi',
  description: 'What a website needs to do for your kind of business, and how I build it. Restaurants, therapy practices, medical clinics, salons, startups and local services.',
  alternates: { canonical: '/websites-for' },
};

export default function Industries() {
  return (
    <Shell crumbs={[{ href: '/websites-for', label: 'Industries' }]}>
      <p className="label">Industries</p>
      <h1>Websites built for <em>your</em> kind of business</h1>
      <p className="lede">Every industry has a different job for its website. Here is what each one needs and how I build it.</p>
      <div className="seo-grid">
        {industries.map((i) => (
          <Link key={i.slug} href={`/websites-for/${i.slug}`} className="seo-card">
            <div><span className="label">{i.name}</span><h3>{i.h1}</h3><p>{i.description}</p></div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
