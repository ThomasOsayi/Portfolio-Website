import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, JsonLd } from '@/components/seo/Shell';
import { services, serviceBySlug, caseBySlug, posts, SITE } from '@/data/seo';

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.description, url: `${SITE}/services/${s.slug}`, images: ['/og-port-image.png'] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();
  const work = s.related.map(caseBySlug).filter(Boolean);
  const reading = posts.filter((p) => p.service === s.slug).slice(0, 3);
  return (
    <Shell crumbs={[{ href: '/services', label: 'Services' }, { href: `/services/${s.slug}`, label: s.title }]}>
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Service', name: s.title, description: s.description, serviceType: s.title, url: `${SITE}/services/${s.slug}`, areaServed: [{ '@type': 'City', name: 'Los Angeles' }, { '@type': 'Country', name: 'United States' }], provider: { '@id': `${SITE}/#person` }, offers: s.packages.map((p) => ({ '@type': 'Offer', name: p.name, price: p.price.replace(/[^0-9]/g, ''), priceCurrency: 'USD' })) },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: s.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      ]} />
      <p className="label">Service</p>
      <h1>{s.title}</h1>
      <p className="lede">{s.intro}</p>
      <Link href="/start" className="seo-btn">Start a project</Link>

      <h2>What&rsquo;s included</h2>
      <ul className="seo-checks">{s.includes.map((x) => <li key={x}>{x}</li>)}</ul>

      <h2>Packages</h2>
      <div className="seo-pk">
        {s.packages.map((p) => (
          <div key={p.name}><strong>{p.name}</strong><div className="price">{p.price}</div><span className="label">{p.days}</span><p>{p.text}</p></div>
        ))}
      </div>

      {work.length > 0 && (<>
        <h2>Related work</h2>
        <div className="seo-grid">
          {work.map((c) => c && (
            <Link key={c.slug} href={`/projects/${c.slug}`} className="seo-card">
              <Image sizes="(max-width: 640px) 100vw, 360px" src={c.image} alt={`${c.name} project screenshot`} width={2400} height={1800} loading="lazy" />
              <div><span className="label">{c.kind}</span><h3>{c.name}</h3><p>{c.description}</p></div>
            </Link>
          ))}
        </div>
      </>)}

      <h2>Questions</h2>
      <div className="seo-faq">{s.faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>

      {reading.length > 0 && (<>
        <h2>Reading</h2>
        <ul className="seo-posts">{reading.map((p) => <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link><p>{p.description}</p></li>)}</ul>
      </>)}

      <section className="seo-band">
        <h2>Tell me what you want to build</h2>
        <p className="lede" style={{ marginBottom: 8 }}>Six quick questions, then an intro call if you want one.</p>
        <Link href="/start" className="seo-btn">Start a project</Link>
      </section>
    </Shell>
  );
}
