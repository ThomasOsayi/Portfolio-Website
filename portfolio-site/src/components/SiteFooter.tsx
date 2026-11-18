/* eslint-disable @next/next/no-html-link-for-pages */
// Shared footer for the homepage and every SEO page.
// Plain anchors on purpose: the homepage's animation layer rewrites DOM that React owns,
// so client-side navigation away from it crashes. A full page load is safe everywhere.
import { services } from '@/data/seo';
import { industries, toolFixes } from '@/data/landing';
import { CALENDLY_URL, INQUIRY_EMAIL } from '@/data/inquiry';

const pick = <T extends { slug: string }>(list: T[], slugs: string[]) =>
  slugs.map((s) => list.find((x) => x.slug === s)).filter((x): x is T => Boolean(x));

const SHORT: Record<string, string> = {
  'nextjs-website-development': 'Custom Next.js websites',
  'fix-ai-built-app': 'Fix an AI-built app',
  'saas-mvp-development': 'SaaS MVP development',
};

const topIndustries = pick(industries, ['restaurants', 'therapy-practices', 'medical-clinics', 'salons-and-spas', 'startups', 'ecommerce-brands']);
const topTools = pick(toolFixes, ['lovable', 'bolt', 'v0', 'cursor', 'replit']);

export function SiteFooter({ className = '' }: { className?: string }) {
  const cols: { title: string; links: { href: string; label: string; ext?: boolean }[] }[] = [
    {
      title: 'Services',
      links: [
        ...services.map((s) => ({ href: `/services/${s.slug}`, label: SHORT[s.slug] ?? s.title })),
        { href: '/start', label: 'Start a project' },
      ],
    },
    {
      title: 'Industries',
      links: [...topIndustries.map((i) => ({ href: `/websites-for/${i.slug}`, label: i.name })), { href: '/websites-for', label: `All ${industries.length} industries` }],
    },
    {
      title: 'Fix AI-built apps',
      links: [...topTools.map((t) => ({ href: `/fix/${t.slug}`, label: t.tool })), { href: '/fix', label: 'All tools' }],
    },
    {
      title: 'Resources',
      links: [
        { href: '/tools/website-cost-calculator', label: 'Website cost calculator' },
        { href: '/projects', label: 'Case studies' },
        { href: '/blog', label: 'Writing' },
        { href: '/blog/how-much-does-a-small-business-website-cost', label: 'What a website costs' },
        { href: '/blog/nextjs-vs-wordpress-small-business', label: 'Next.js vs WordPress' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { href: CALENDLY_URL, label: 'Book a 30 min call', ext: true },
        { href: `mailto:${INQUIRY_EMAIL}`, label: 'Email' },
        { href: 'https://www.linkedin.com/in/thomas-osayi', label: 'LinkedIn', ext: true },
        { href: 'https://github.com/ThomasOsayi', label: 'GitHub', ext: true },
      ],
    },
  ];

  return (
    <footer className={`sitefoot ${className}`}>
      <div className="sitefoot-top">
        <div className="sitefoot-brand">
          <a href="/" className="sitefoot-name">Thomas Osayi</a>
          <p>Next.js and full-stack developer in Los Angeles. Custom websites, SaaS MVPs and fixes for AI-built apps.</p>
          <a href="/start" className="sitefoot-cta">Start a project</a>
        </div>
        <nav className="sitefoot-cols" aria-label="Footer">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="label">{c.title}</p>
              <ul>
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} {...(l.ext ? { target: '_blank', rel: 'noopener' } : {})}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="sitefoot-bottom label">
        <span>© 2026 Thomas Osayi</span>
        <span>Los Angeles · LMU</span>
      </div>
    </footer>
  );
}
