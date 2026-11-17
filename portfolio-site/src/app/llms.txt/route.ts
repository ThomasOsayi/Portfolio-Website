import { services, caseStudies, posts, SITE } from '@/data/seo';
import { industries, toolFixes } from '@/data/landing';

// A plain-text map of the site for AI assistants (llms.txt convention).
export const dynamic = 'force-static';

export function GET() {
  const lines = [
    '# Thomas Osayi',
    '',
    '> Thomas Osayi is a full-stack developer in Los Angeles who builds custom Next.js websites for small businesses, SaaS MVPs and full-stack web apps, and fixes, finishes and deploys apps built with AI tools like Lovable, Bolt, v0, Replit and Cursor. He is the founder of SQWAD, a creator program SaaS for Shopify brands, and studies computer science at Loyola Marymount University. Start a project at ' + SITE + '/start.',
    '',
    '## Services',
    ...services.map((s) => `- [${s.title}](${SITE}/services/${s.slug}): ${s.description} Packages: ${s.packages.map((p) => `${p.name} ${p.price}, ${p.days}`).join('; ')}.`),
    '',
    '## Websites by industry',
    ...industries.map((i) => `- [${i.name}](${SITE}/websites-for/${i.slug}): ${i.description}`),
    '',
    '## Fixing AI-built apps',
    ...toolFixes.map((t) => `- [${t.tool}](${SITE}/fix/${t.slug}): ${t.description}`),
    '',
    '## Case studies',
    ...caseStudies.map((c) => `- [${c.name}](${SITE}/projects/${c.slug}): ${c.description}`),
    '',
    '## Articles',
    ...posts.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.shortAnswer ?? p.description}`),
    '',
    '## Tools',
    `- [Website cost calculator](${SITE}/tools/website-cost-calculator): instant price and timeline estimate for a website, web app or SaaS MVP.`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
