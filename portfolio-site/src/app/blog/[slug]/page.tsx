import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Shell, Prose, JsonLd, proseHeadings, readingMinutes } from '@/components/seo/Shell';
import { Faqs, faqLd } from '@/components/seo/CaseCards';
import { posts, postBySlug, serviceBySlug, SITE } from '@/data/seo';

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  return {
    title: p.title.length > 52 ? p.title : `${p.title} | Thomas Osayi`,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: 'article', title: p.title, description: p.description, url: `${SITE}/blog/${p.slug}`, publishedTime: p.date, modifiedTime: p.updated ?? p.date, images: ['/og-thomas-osayi.jpg'] },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = postBySlug((await params).slug);
  if (!p) notFound();
  const svc = p.service ? serviceBySlug(p.service) : undefined;
  const more = [...posts.filter((x) => x.slug !== p.slug && x.service === p.service), ...posts.filter((x) => x.slug !== p.slug && x.service !== p.service)].slice(0, 4);
  const toc = proseHeadings(p.body);
  // split the body before the H2 closest to the middle, for a call-to-action box
  const lines = p.body.split('\n');
  const h2s = lines.map((l, n) => (l.trim().startsWith('## ') ? n : -1)).filter((n) => n > 0);
  const mid = h2s.length >= 4 ? h2s[Math.floor(h2s.length / 2)] : -1;
  const bodyA = mid > 0 ? lines.slice(0, mid).join('\n') : p.body;
  const bodyB = mid > 0 ? lines.slice(mid).join('\n') : '';
  const fmt = (d: string) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  return (
    <Shell crumbs={[{ href: '/blog', label: 'Writing' }, { href: `/blog/${p.slug}`, label: p.title }]}>
      {p.faqs?.length ? <JsonLd data={faqLd(p.faqs)} /> : null}
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BlogPosting', ...(p.shortAnswer ? { abstract: p.shortAnswer } : {}), headline: p.title, description: p.description, datePublished: p.date, dateModified: p.updated ?? p.date, url: `${SITE}/blog/${p.slug}`, author: { '@id': `${SITE}/#person` }, ...(p.sources?.length ? { citation: p.sources.map((x) => ({ '@type': 'CreativeWork', name: x.title, url: x.url, publisher: x.publisher })) } : {}), publisher: { '@id': `${SITE}/#person` }, image: `${SITE}/og-thomas-osayi.jpg`, keywords: p.keywords.join(', ') }} />
      <p className="label">{fmt(p.date)}{p.updated && p.updated !== p.date ? ` · Updated ${fmt(p.updated)}` : ''} · {readingMinutes(p.body)} min read · Thomas Osayi</p>
      <h1 style={{ maxWidth: '22ch' }}>{p.title}</h1>
      <p className="lede">{p.description}</p>
      {p.shortAnswer && (
        <aside className="seo-short" aria-label="Short answer">
          <span className="label">The short answer</span>
          <p>{p.shortAnswer}</p>
        </aside>
      )}
      {p.takeaways?.length ? (
        <aside className="seo-take" aria-label="Key takeaways">
          <span className="label">Key takeaways</span>
          <ul>{p.takeaways.map((t) => <li key={t}>{t}</li>)}</ul>
        </aside>
      ) : null}
      {toc.length > 3 && (
        <nav className="seo-toc" aria-label="In this article">
          <span className="label">In this article</span>
          <ol>{toc.map((h) => <li key={h.id}><a href={`#${h.id}`}>{h.label}</a></li>)}</ol>
        </nav>
      )}
      <Prose text={bodyA} />
      {bodyB && (
        <aside className="seo-cta-box" aria-label="Work with Thomas">
          <span className="label">{svc ? svc.title : 'Work with me'}</span>
          <p>{svc ? svc.intro : 'I build custom Next.js websites, SaaS MVPs and fix AI-built apps from Los Angeles.'}</p>
          <div className="seo-cta-row">
            <Link href="/start" className="seo-btn">Start a project</Link>
            {svc && <Link href={`/services/${svc.slug}`} className="seo-btn seo-btn-ghost">See packages and prices</Link>}
          </div>
        </aside>
      )}
      {bodyB && <Prose text={bodyB} />}
      {p.faqs?.length ? (<>
        <h2>Questions, answered in one line</h2>
        <Faqs items={p.faqs} />
      </>) : null}
      {p.sources?.length ? (
        <section className="seo-sources" aria-label="Sources">
          <h2>Sources</h2>
          <ul>{p.sources.map((x) => <li key={x.url}><a href={x.url} rel="noopener" target="_blank">{x.title}</a> <span>{x.publisher}</span></li>)}</ul>
        </section>
      ) : null}
      <section className="seo-author" aria-label="About the author">
        <span className="label">About the author</span>
        <p><strong>Thomas Osayi</strong> is a full-stack developer in Los Angeles studying computer science at Loyola Marymount University. He founded and built SQWAD, a SaaS platform Shopify brands use to run creator programs, and builds custom Next.js websites, SaaS MVPs and fixes for AI-built apps for businesses and founders.</p>
        <p><Link href="/projects">See his work</Link> · <Link href="/services">Services and prices</Link></p>
      </section>
      <h2>Related articles</h2>
      <ul className="seo-posts">
        {more.map((m) => (
          <li key={m.slug}><Link href={`/blog/${m.slug}`}>{m.title}</Link></li>
        ))}
      </ul>
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
