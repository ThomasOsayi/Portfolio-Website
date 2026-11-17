import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, JsonLd } from '@/components/seo/Shell';
import { CaseCards, Faqs, faqLd } from '@/components/seo/CaseCards';
import { toolFixes, toolBySlug } from '@/data/landing';
import { serviceBySlug, posts, SITE } from '@/data/seo';

export const dynamicParams = false;
export const generateStaticParams = () => toolFixes.map((t) => ({ slug: t.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const t = toolBySlug((await params).slug);
  if (!t) return {};
  return { title: t.metaTitle, description: t.description, alternates: { canonical: `/fix/${t.slug}` }, openGraph: { title: t.metaTitle, description: t.description, url: `${SITE}/fix/${t.slug}`, images: ['/og-port-image.png'] } };
}

export default async function FixPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = toolBySlug((await params).slug);
  if (!t) notFound();
  const svc = serviceBySlug('fix-ai-built-app')!;
  const reading = posts.filter((p) => p.service === 'fix-ai-built-app').slice(0, 3);
  const others = toolFixes.filter((x) => x.slug !== t.slug);
  return (
    <Shell crumbs={[{ href: '/fix', label: 'Fix your app' }, { href: `/fix/${t.slug}`, label: t.tool }]}>
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Service', name: `${t.tool} app fixing and deployment`, description: t.description, url: `${SITE}/fix/${t.slug}`, provider: { '@id': `${SITE}/#person` }, offers: svc.packages.map((p) => ({ '@type': 'Offer', name: p.name, price: p.price.replace(/[^0-9]/g, ''), priceCurrency: 'USD' })) },
        faqLd(t.faqs),
      ]} />
      <p className="label">{t.tool} developer</p>
      <h1>{t.h1}</h1>
      <p className="lede">{t.description}</p>
      <Link href="/start?need=Web%20app%20or%20SaaS&stage=I%20have%20a%20site%20or%20app%20that%20needs%20work" className="seo-btn">Get it fixed</Link>

      <h2>What {t.tool} builds</h2>
      <p className="seo-prose">{t.whatItBuilds}</p>

      <h2>Where {t.tool} apps usually break</h2>
      <div className="seo-pk">{t.problems.map((p) => <div key={p.title}><strong>{p.title}</strong><p>{p.text}</p></div>)}</div>

      <h2>How I fix it</h2>
      <ol className="seo-prose">{t.process.map((s) => <li key={s}>{s}</li>)}</ol>

      <h2>Packages</h2>
      <div className="seo-pk">{svc.packages.map((p) => <div key={p.name}><strong>{p.name}</strong><div className="price">{p.price}</div><span className="label">{p.days}</span><p>{p.text}</p></div>)}</div>

      <h2>Apps I have shipped</h2>
      <CaseCards slugs={['sqwad', 'guardian-mindcare', 'thehoopgang']} />

      <h2>Questions</h2>
      <Faqs items={t.faqs} />

      {reading.length > 0 && (<>
        <h2>Reading</h2>
        <ul className="seo-posts">{reading.map((p) => <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link><p>{p.description}</p></li>)}</ul>
      </>)}

      <h2>Built with something else?</h2>
      <p className="seo-prose">{others.map((o, n) => <span key={o.slug}>{n ? ' · ' : ''}<Link href={`/fix/${o.slug}`}>{o.tool}</Link></span>)}</p>
    </Shell>
  );
}
