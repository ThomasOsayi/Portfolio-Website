import type { MetadataRoute } from 'next';
import { services, caseStudies, posts, SITE } from '@/data/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const latest = posts[0] ? new Date(posts[0].date) : now;
  return [
    { url: SITE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/start`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...services.map((s) => ({ url: `${SITE}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 })),
    { url: `${SITE}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...caseStudies.map((c) => ({ url: `${SITE}/projects/${c.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${SITE}/blog`, lastModified: latest, changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((p) => ({ url: `${SITE}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: 'yearly' as const, priority: 0.6 })),
  ];
}
