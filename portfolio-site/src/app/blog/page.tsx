import type { Metadata } from 'next';
import Link from 'next/link';
import { Shell } from '@/components/seo/Shell';
import { posts } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Writing | Next.js, SaaS and Shipping AI-Built Apps | Thomas Osayi',
  description: 'Practical notes on building websites, SaaS MVPs and fixing AI-generated apps, from a full-stack developer and founder in Los Angeles.',
  alternates: { canonical: '/blog' },
};

const fmt = (d: string) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export default function Blog() {
  return (
    <Shell crumbs={[{ href: '/blog', label: 'Writing' }]}>
      <p className="label">Writing</p>
      <h1>Notes from <em>shipping</em></h1>
      <p className="lede">What I learn building products and client sites, written for founders and business owners.</p>
      <ul className="seo-posts">
        {posts.map((p) => (
          <li key={p.slug}><span className="label">{fmt(p.date)}</span><br /><Link href={`/blog/${p.slug}`}>{p.title}</Link><p>{p.description}</p></li>
        ))}
      </ul>
    </Shell>
  );
}
