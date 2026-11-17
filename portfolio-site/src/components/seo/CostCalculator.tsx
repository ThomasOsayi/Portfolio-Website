'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type Range = [number, number, number]; // min $, max $, days

const TYPES: { id: string; label: string; hint: string; base: Range; pages?: number; need: string }[] = [
  { id: 'landing', label: 'One-page site', hint: 'Landing page or simple site', base: [150, 450, 7], pages: 1, need: 'Website' },
  { id: 'business', label: 'Business website', hint: 'Up to 5 pages', base: [450, 1200, 14], pages: 5, need: 'Website' },
  { id: 'custom', label: 'Custom multi-page site', hint: 'Up to 8 pages, custom features', base: [1200, 2500, 21], pages: 8, need: 'Website' },
  { id: 'mvp', label: 'Web app or SaaS MVP', hint: 'One core workflow, auth, database', base: [1200, 3000, 28], need: 'Web app or SaaS' },
  { id: 'platform', label: 'Full SaaS platform', hint: 'Multiple roles, admin, billing', base: [3000, 8000, 45], need: 'Web app or SaaS' },
  { id: 'fix', label: 'Fix an AI-built app', hint: 'Lovable, Bolt, v0, Replit, Cursor', base: [0, 0, 0], need: 'Web app or SaaS' },
];

const FIX: { id: string; label: string; r: Range }[] = [
  { id: 'one', label: 'One bug or error', r: [60, 150, 2] },
  { id: 'few', label: 'A few bugs plus a feature', r: [200, 450, 5] },
  { id: 'launch', label: 'Stuck, needs finishing and launch', r: [600, 1500, 10] },
];

const FEATURES: { id: string; label: string; r: Range; sites?: boolean; apps?: boolean }[] = [
  { id: 'booking', label: 'Booking or reservations', r: [150, 350, 2], sites: true, apps: true },
  { id: 'store', label: 'Online ordering or store', r: [300, 900, 5], sites: true, apps: true },
  { id: 'cms', label: 'Admin or CMS to edit content', r: [200, 500, 3], sites: true, apps: true },
  { id: 'accounts', label: 'User accounts and login', r: [300, 700, 4], sites: true },
  { id: 'payments', label: 'Payments or subscriptions', r: [300, 600, 3], sites: true, apps: true },
  { id: 'integrations', label: 'Integrations (CRM, calendar, email)', r: [150, 400, 2], sites: true, apps: true },
  { id: 'copy', label: 'I need the copy written', r: [100, 300, 2], sites: true, apps: true },
  { id: 'motion', label: 'Premium design and animation', r: [200, 600, 3], sites: true, apps: true },
  { id: 'i18n', label: 'More than one language', r: [200, 500, 3], sites: true, apps: true },
];

const money = (n: number) => '$' + (Math.round(n / 50) * 50).toLocaleString('en-US');
const budgetOption = (max: number) => (max < 2500 ? 'Under $2,500' : max <= 5000 ? '$2,500 to $5,000' : max <= 10000 ? '$5,000 to $10,000' : '$10,000 to $25,000');

export default function CostCalculator() {
  const [type, setType] = useState('business');
  const [pages, setPages] = useState(5);
  const [fix, setFix] = useState('few');
  const [feat, setFeat] = useState<string[]>([]);
  const [rush, setRush] = useState(false);

  const t = TYPES.find((x) => x.id === type)!;
  const isSite = Boolean(t.pages);
  const isFix = type === 'fix';
  const shown = FEATURES.filter((f) => (isSite ? f.sites : f.apps));

  const est = useMemo(() => {
    let [lo, hi, days] = isFix ? FIX.find((f) => f.id === fix)!.r : t.base;
    if (isSite && t.pages && pages > t.pages) { const extra = pages - t.pages; lo += extra * 60; hi += extra * 120; days += Math.ceil(extra / 3); }
    if (!isFix) for (const f of shown) if (feat.includes(f.id)) { lo += f.r[0]; hi += f.r[1]; days += f.r[2]; }
    if (rush) { lo *= 1.25; hi *= 1.25; days = Math.ceil(days * 0.65); }
    return { lo, hi, days };
  }, [isFix, fix, t, isSite, pages, shown, feat, rush]);

  const toggle = (id: string) => setFeat((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  const needs = [t.need, ...(feat.includes('booking') || feat.includes('store') ? ['Booking or ordering system'] : [])];
  const startHref = `/start?${new URLSearchParams({
    need: needs.join(','),
    stage: isFix ? 'I have a site or app that needs work' : 'Just an idea',
    budget: budgetOption(est.hi),
    timeline: rush ? 'As soon as possible' : est.days <= 30 ? 'Within a month' : 'In 1 to 3 months',
  }).toString()}`;

  return (
    <div className="calc">
      <fieldset>
        <legend>What do you need?</legend>
        <div className="calc-opts">
          {TYPES.map((x) => (
            <button key={x.id} type="button" aria-pressed={type === x.id} onClick={() => { setType(x.id); if (x.pages) setPages(x.pages); }}>
              <strong>{x.label}</strong><span>{x.hint}</span>
            </button>
          ))}
        </div>
      </fieldset>

      {isFix && (
        <fieldset>
          <legend>How stuck is it?</legend>
          <div className="calc-opts">
            {FIX.map((x) => <button key={x.id} type="button" aria-pressed={fix === x.id} onClick={() => setFix(x.id)}><strong>{x.label}</strong></button>)}
          </div>
        </fieldset>
      )}

      {isSite && (
        <fieldset>
          <legend>How many pages? <b>{pages}</b></legend>
          <input type="range" min={1} max={30} value={pages} onChange={(e) => setPages(Number(e.target.value))} aria-label="Number of pages" />
        </fieldset>
      )}

      {!isFix && (
        <fieldset>
          <legend>Features</legend>
          <div className="calc-opts calc-feat">
            {shown.map((f) => <button key={f.id} type="button" aria-pressed={feat.includes(f.id)} onClick={() => toggle(f.id)}><strong>{f.label}</strong></button>)}
          </div>
        </fieldset>
      )}

      <label className="calc-rush"><input type="checkbox" checked={rush} onChange={(e) => setRush(e.target.checked)} /> I need it fast (rush)</label>

      <div className="calc-out" aria-live="polite">
        <span className="label">Estimated cost</span>
        <div className="calc-price">{money(est.lo)} to {money(est.hi)}</div>
        <p>About {est.days} days from kickoff{rush ? ' on a rush schedule' : ''}. Final price depends on scope; you get a fixed quote before any work starts.</p>
        <Link href={startHref} className="seo-btn">Get an exact quote</Link>
      </div>
    </div>
  );
}
