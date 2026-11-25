import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, JsonLd, Prose } from '@/components/seo/Shell';
import { CaseCards, Faqs, faqLd } from '@/components/seo/CaseCards';
import { industries, industryBySlug } from '@/data/landing';
import { serviceBySlug, SITE } from '@/data/seo';

export const dynamicParams = false;
export const generateStaticParams = () => industries.map((i) => ({ slug: i.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const i = industryBySlug((await params).slug);
  if (!i) return {};
  return { title: i.metaTitle, description: i.description, alternates: { canonical: `/websites-for/${i.slug}` }, openGraph: { title: i.metaTitle, description: i.description, url: `${SITE}/websites-for/${i.slug}`, images: ['/og-thomas-osayi.jpg'] } };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const i = industryBySlug((await params).slug);
  if (!i) notFound();
  const svc = serviceBySlug(i.service);
  const others = industries.filter((x) => x.slug !== i.slug);
  return (
    <Shell crumbs={[{ href: '/websites-for', label: 'Industries' }, { href: `/websites-for/${i.slug}`, label: i.name }]}>
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Service', name: `Website development for ${i.name.toLowerCase()}`, description: i.description, url: `${SITE}/websites-for/${i.slug}`, provider: { '@id': `${SITE}/#person` }, areaServed: [{ '@type': 'City', name: 'Los Angeles' }, { '@type': 'Country', name: 'United States' }], audience: { '@type': 'BusinessAudience', name: i.name } },
        faqLd(i.faqs),
      ]} />
      <p className="label">Websites for {i.name.toLowerCase()}</p>
      <h1>{i.h1}</h1>
      <p className="lede">{i.intro}</p>
      <Link href="/start" className="seo-btn">Start a project</Link>

      <h2>What the site needs to do</h2>
      <div className="seo-pk">
        {i.mustHaves.map((m) => <div key={m.title}><strong>{m.title}</strong><p>{m.text}</p></div>)}
      </div>

      <h2>Mistakes I see most</h2>
      <ul className="seo-checks">{i.mistakes.map((m) => <li key={m}>{m}</li>)}</ul>

      <h2>Related work</h2>
      <CaseCards slugs={i.related} />

      <h2>Pricing</h2>
      <p className="seo-prose" style={{ margin: 0 }}>{i.packageHint} See the <Link href={svc ? `/services/${svc.slug}` : '/services'}>{svc?.title ?? 'services'}</Link> packages, or get a quick estimate with the <Link href="/tools/website-cost-calculator">website cost calculator</Link>.</p>

      {i.guide ? <Prose text={i.guide} /> : null}

      <h2>Questions</h2>
      <Faqs items={i.faqs} />

      <section className="seo-band">
        <h2>Building a site for your {i.noun ?? i.name.toLowerCase().replace(/s$/, '')}?</h2>
        <p className="lede" style={{ marginBottom: 8 }}>Six quick questions, then an intro call if you want one.</p>
        <Link href="/start?need=Website" className="seo-btn">Start a project</Link>
      </section>

      <h2>Other industries</h2>
      <p className="seo-prose">{others.map((o, n) => <span key={o.slug}>{n ? ' · ' : ''}<Link href={`/websites-for/${o.slug}`}>{o.name}</Link></span>)}</p>
    </Shell>
  );
}
