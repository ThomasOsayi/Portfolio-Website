import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shell } from '@/components/seo/Shell';
import { caseStudies } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Work & Case Studies | SaaS, Web Apps and Business Websites | Thomas Osayi',
  description: 'Case studies of SaaS platforms, creator portals, healthcare apps and small business websites built by Thomas Osayi, full-stack developer in Los Angeles.',
  alternates: { canonical: '/projects' },
};

export default function Projects() {
  return (
    <Shell crumbs={[{ href: '/projects', label: 'Work' }]}>
      <p className="label">Work</p>
      <h1>Selected <em>work</em></h1>
      <p className="lede">Products I founded and sites I built for clients, with what each one needed to do.</p>
      <div className="seo-grid">
        {caseStudies.map((c) => (
          <Link key={c.slug} href={`/projects/${c.slug}`} className="seo-card">
            <Image sizes="(max-width: 640px) 100vw, 360px" src={c.image} alt={`${c.name} project screenshot`} width={2400} height={1800} loading="lazy" />
            <div><span className="label">{c.kind}</span><h3>{c.name}</h3><p>{c.description}</p></div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
