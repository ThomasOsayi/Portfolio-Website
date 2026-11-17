import Image from 'next/image';
import Link from 'next/link';
import { caseBySlug } from '@/data/seo';

export function CaseCards({ slugs }: { slugs: string[] }) {
  const items = slugs.map(caseBySlug).filter((c): c is NonNullable<typeof c> => Boolean(c));
  if (!items.length) return null;
  return (
    <div className="seo-grid">
      {items.map((c) => (
        <Link key={c.slug} href={`/projects/${c.slug}`} className="seo-card">
          <Image sizes="(max-width: 640px) 100vw, 360px" src={c.image} alt={`${c.name} project screenshot`} width={2400} height={1800} loading="lazy" />
          <div><span className="label">{c.kind}</span><h3>{c.name}</h3><p>{c.description}</p></div>
        </Link>
      ))}
    </div>
  );
}

export function Faqs({ items }: { items: { q: string; a: string }[] }) {
  return <div className="seo-faq">{items.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>;
}

export const faqLd = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
