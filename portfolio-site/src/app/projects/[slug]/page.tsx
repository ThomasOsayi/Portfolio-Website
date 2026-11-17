import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, Prose, JsonLd } from '@/components/seo/Shell';
import { caseStudies, caseBySlug, serviceBySlug, SITE } from '@/data/seo';

export const dynamicParams = false;
export const generateStaticParams = () => caseStudies.map((c) => ({ slug: c.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = caseBySlug((await params).slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.description,
    alternates: { canonical: `/projects/${c.slug}` },
    openGraph: { title: c.metaTitle, description: c.description, url: `${SITE}/projects/${c.slug}`, images: [c.image] },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const c = caseBySlug((await params).slug);
  if (!c) notFound();
  const svc = serviceBySlug(c.service);
  const others = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 3);
  return (
    <Shell crumbs={[{ href: '/projects', label: 'Work' }, { href: `/projects/${c.slug}`, label: c.name }]}>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: c.name, headline: c.metaTitle, description: c.description, image: `${SITE}${c.image}`, url: `${SITE}/projects/${c.slug}`, creator: { '@id': `${SITE}/#person` }, ...(c.url ? { sameAs: c.url } : {}) }} />
      <p className="label">{c.kind}</p>
      <h1>{c.name}</h1>
      <p className="lede">{c.description}</p>
      <ul className="seo-chips">{c.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      <Image priority sizes="(max-width: 1100px) 100vw, 1080px" className="seo-hero-img" src={c.image} alt={`${c.name} screenshot`} width={2400} height={1800} />
      {c.url && <p className="label">Live: <a href={c.url} rel="noopener" target="_blank">{c.url.replace(/^https?:\/\/(www\.)?/, '')}</a></p>}
      <Prose text={c.body} />
      {svc && (
        <section className="seo-band">
          <h2>Need something like this?</h2>
          <p className="lede" style={{ marginBottom: 8 }}>{svc.description}</p>
          <Link href={`/services/${svc.slug}`} className="seo-btn">{svc.title}</Link>
        </section>
      )}
      <h2>More work</h2>
      <div className="seo-grid">
        {others.map((o) => (
          <Link key={o.slug} href={`/projects/${o.slug}`} className="seo-card">
            <Image sizes="(max-width: 640px) 100vw, 360px" src={o.image} alt={`${o.name} project screenshot`} width={2400} height={1800} loading="lazy" />
            <div><span className="label">{o.kind}</span><h3>{o.name}</h3></div>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
