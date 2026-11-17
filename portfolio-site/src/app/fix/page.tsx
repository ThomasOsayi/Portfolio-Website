import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell } from '@/components/seo/Shell';
import { toolFixes } from '@/data/landing';

export const metadata: Metadata = {
  title: 'Fix Your AI-Built App | Lovable, Bolt, v0, Replit, Cursor | Thomas Osayi',
  description: 'Developer help for apps built with Lovable, Bolt, v0, Replit Agent and Cursor. Bugs fixed, backend secured, payments connected, deployed to production.',
  alternates: { canonical: '/fix' },
};

export default function FixIndex() {
  return (
    <Shell crumbs={[{ href: '/fix', label: 'Fix your app' }]}>
      <p className="label">AI-built apps</p>
      <h1>Built it with AI? I&rsquo;ll <em>finish</em> it.</h1>
      <p className="lede">Pick the tool you used. Each one breaks in its own predictable ways.</p>
      <div className="seo-grid">
        {toolFixes.map((t) => (
          <Link key={t.slug} href={`/fix/${t.slug}`} className="seo-card">
            <div><span className="label">{t.tool}</span><h3>{t.h1}</h3><p>{t.description}</p></div>
          </Link>
        ))}
      </div>
      <section className="seo-band">
        <h2>Fixed-price packages</h2>
        <p className="lede" style={{ marginBottom: 8 }}>Quick Fix from $60, Fix Plus Features from $200, Finish and Launch from $600.</p>
        <Link href="/services/fix-ai-built-app" className="seo-btn">See the service</Link>
      </section>
    </Shell>
  );
}
