import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, Prose, JsonLd } from '@/components/seo/Shell';
import { posts, postBySlug, serviceBySlug, SITE } from '@/data/seo';

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  return {
    title: `${p.title} | Thomas Osayi`,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: 'article', title: p.title, description: p.description, url: `${SITE}/blog/${p.slug}`, publishedTime: p.date, images: ['/og-port-image.png'] },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = postBySlug((await params).slug);
  if (!p) notFound();
  const svc = p.service ? serviceBySlug(p.service) : undefined;
  return (
    <Shell crumbs={[{ href: '/blog', label: 'Writing' }, { href: `/blog/${p.slug}`, label: p.title }]}>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.description, datePublished: p.date, dateModified: p.date, url: `${SITE}/blog/${p.slug}`, author: { '@id': `${SITE}/#person` }, publisher: { '@id': `${SITE}/#person` }, image: `${SITE}/og-port-image.png`, keywords: p.keywords.join(', ') }} />
      <p className="label">{new Date(p.date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · Thomas Osayi</p>
      <h1 style={{ maxWidth: '22ch' }}>{p.title}</h1>
      <p className="lede">{p.description}</p>
      <Prose text={p.body} />
      {svc && (
        <section className="seo-band">
          <h2>{svc.title}</h2>
          <p className="lede" style={{ marginBottom: 8 }}>{svc.description}</p>
          <Link href={`/services/${svc.slug}`} className="seo-btn">See the service</Link>
        </section>
      )}
    </Shell>
  );
}
