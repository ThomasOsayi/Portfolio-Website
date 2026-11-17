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
      <footer className="seo-foot gutter">
        <p>Thomas Osayi · Full-stack developer in Los Angeles</p>
        <p><Link href="/start">Start a project</Link> · <Link href="/services">Services</Link> · <Link href="/websites-for">Industries</Link> · <Link href="/fix">Fix your AI-built app</Link> · <Link href="/tools/website-cost-calculator">Cost calculator</Link> · <Link href="/projects">Work</Link> · <Link href="/blog">Writing</Link></p>
      </footer>
    </div>
  );
}

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
    out.push(l.startsWith('## ') ? <h2 key={i}>{l.slice(3)}</h2> : <p key={i}>{l}</p>);
  });
  flush();
  return <div className="seo-prose">{out}</div>;
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
