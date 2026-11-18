import Image from 'next/image';
import { SiteFooter } from '@/components/SiteFooter';
import Link from 'next/link';
import '@/app/seo.css';

export function Shell({ children, crumbs }: { children: React.ReactNode; crumbs?: { href: string; label: string }[] }) {
  return (
    <div className="seo">
      <header className="seo-top gutter">
        {/* full load into the homepage so its animation layer starts clean */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" className="seo-brand">Thomas Osayi</a>
        <nav aria-label="Main">
          <Link href="/services">Services</Link>
          <Link href="/projects">Work</Link>
          <Link href="/tools/website-cost-calculator">Cost calculator</Link>
          <Link href="/blog">Writing</Link>
          <Link href="/start" className="seo-cta">Start a project</Link>
        </nav>
      </header>
      {crumbs && (
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ href: '/', label: 'Home' }, ...crumbs].map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: `https://thomasosayi.com${c.href === '/' ? '' : c.href}` })) }} />
      )}
      {crumbs && (
        <nav aria-label="Breadcrumb" className="seo-crumbs gutter label">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/">Home</a>
          {crumbs.map((c) => (
            <span key={c.href}> / <Link href={c.href}>{c.label}</Link></span>
          ))}
        </nav>
      )}
      <main className="gutter">{children}</main>
      <SiteFooter className="gutter" />
    </div>
  );
}

const headingId = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** H2 headings of a body, for an "In this article" list. */
export const proseHeadings = (text: string) =>
  text.split('\n').map((l) => l.trim()).filter((l) => l.startsWith('## ')).map((l) => ({ id: headingId(l.slice(3)), label: l.slice(3) }));

export const readingMinutes = (text: string) => Math.max(1, Math.round(text.split(/\s+/).length / 220));

/**
 * Body format, one block per line:
 *   "## " heading, "### " sub-heading, "- " bullet, "> " tip callout,
 *   "![caption](/path.jpg)" image with caption, "@video(/path.mp4|/poster.jpg|caption)" video,
 *   anything else is a paragraph.
 */
export function Prose({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let list: string[] = [];
  const flush = () => {
    if (list.length) out.push(<ul key={`l${out.length}`}>{list.map((l, i) => <li key={i}>{l}</li>)}</ul>);
    list = [];
  };
  text.split('\n').map((l) => l.trim()).filter(Boolean).forEach((l, i) => {
    if (l.startsWith('- ')) { list.push(l.slice(2)); return; }
    flush();
    const img = l.match(/^!\[(.*)\]\((\S+)\)$/);
    const vid = l.match(/^@video\((.+)\)$/);
    if (img) {
      out.push(
        <figure key={i} className="seo-fig">
          <Image src={img[2]} alt={img[1]} width={2400} height={1500} sizes="(max-width: 760px) 100vw, 720px" loading="lazy" />
          {img[1] && <figcaption>{img[1]}</figcaption>}
        </figure>,
      );
    } else if (vid) {
      const [src, poster, caption] = vid[1].split('|').map((x) => x.trim());
      out.push(
        <figure key={i} className="seo-fig">
          <video src={src} poster={poster || undefined} controls muted playsInline preload="none" />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>,
      );
    } else if (l.startsWith('### ')) out.push(<h3 key={i}>{l.slice(4)}</h3>);
    else if (l.startsWith('## ')) out.push(<h2 key={i} id={headingId(l.slice(3))}>{l.slice(3)}</h2>);
    else if (l.startsWith('> ')) out.push(<aside key={i} className="seo-tip"><span className="label">Tip</span><p>{l.slice(2).replace(/^Tip:\s*/i, '')}</p></aside>);
    else out.push(<p key={i}>{l}</p>);
  });
  flush();
  return <div className="seo-prose">{out}</div>;
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
