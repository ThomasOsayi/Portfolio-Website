// Questions for the /start inquiry flow. Edit the copy and options here.

export const INQUIRY_EMAIL = 'thomasosayi@gmail.com';
export const CALENDLY_URL = 'https://calendly.com/thomas-joinsqwad/project-intro-call';

export type Step =
  | { id: string; kind: 'multi' | 'single'; title: string; hint?: string; options: string[]; optional?: boolean }
  | { id: 'details'; kind: 'text'; title: string; hint?: string }
  | { id: 'contact'; kind: 'contact'; title: string; hint?: string };

export const steps: Step[] = [
  {
    id: 'need',
    kind: 'multi',
    title: 'What are we building?',
    hint: 'Pick everything that applies.',
    options: ['Website', 'Web app or SaaS', 'Mobile app', 'E-commerce or Shopify', 'Booking or ordering system', 'Redesign of an existing site', 'Creator program (SQWAD)', 'Something else'],
  },
  {
    id: 'stage',
    kind: 'single',
    title: 'Where are you at right now?',
    options: ['Just an idea', 'I have designs or a brief', 'I have a site or app that needs work', 'I need ongoing help'],
  },
  {
    id: 'budget',
    kind: 'single',
    title: "What's the budget?",
    hint: 'A range is fine. It helps me scope the right thing.',
    options: ['Under $2,500', '$2,500 to $5,000', '$5,000 to $10,000', '$10,000 to $25,000', '$25,000+', 'Not sure yet'],
  },
  {
    id: 'timeline',
    kind: 'single',
    title: 'When do you need it?',
    options: ['As soon as possible', 'Within a month', 'In 1 to 3 months', "Flexible, let's talk"],
  },
  {
    id: 'details',
    kind: 'text',
    title: 'Tell me a bit more.',
    hint: 'What it should do, who it is for, and links to anything you like. Optional.',
  },
  {
    id: 'contact',
    kind: 'contact',
    title: 'Where should I reply?',
    hint: 'I usually answer within a day.',
  },
];

export const heardFrom = ['LinkedIn', 'Referral', 'LMU', 'Google', 'SQWAD', 'Other'];

// Preselect answers from a link, e.g. /start?need=Mobile%20app&budget=$5,000%20to%20$10,000
export function answersFromParams(q: Record<string, string | string[] | undefined>): Record<string, string[]> {
  const pre: Record<string, string[]> = {};
  for (const s of steps) {
    if (s.kind !== 'multi' && s.kind !== 'single') continue;
    const raw = q[s.id];
    const list = Array.isArray(raw) ? raw : raw ? [raw] : [];
    // keep each raw value too, so options that contain commas ($2,500 to $5,000) still match
    const vals = list.flatMap((v) => [v, ...v.split(',')]).map((v) => v.trim().toLowerCase());
    const hit = s.options.filter((o) => vals.includes(o.toLowerCase()));
    if (hit.length) pre[s.id] = s.kind === 'single' ? [hit[0]] : hit;
  }
  return pre;
}

// Live estimate shown in the /start flow. Ranges match the packages on the service pages and the
// cost calculator; anything without a fixed package is quoted after a call instead of guessed.
const BUILD: Record<string, [number, number, number]> = {
  'Website': [450, 1200, 14],
  'Redesign of an existing site': [450, 1200, 14],
  'Web app or SaaS': [1200, 3000, 28],
  'E-commerce or Shopify': [1200, 2500, 21],
  'Booking or ordering system': [1200, 2500, 21],
};
export type Estimate = { lo: number; hi: number; days: number; notes: string[] } | { lo: 0; hi: 0; days: 0; notes: string[] };

export function estimate(a: Record<string, string[]>): Estimate | null {
  const need = a.need ?? [];
  if (!need.length) return null;
  const notes: string[] = [];
  const stage = a.stage?.[0] ?? '';
  const fixing = stage === 'I have a site or app that needs work';
  const priced = need.filter((n) => BUILD[n]).map((n) => BUILD[n]).sort((x, y) => y[1] - x[1]);
  if (need.includes('Mobile app')) notes.push('Mobile apps are quoted after a short call.');
  if (need.includes('Creator program (SQWAD)')) notes.push('SQWAD plans start at $99 a month after a free first month.');
  if (need.includes('Something else')) notes.push('Anything custom gets a fixed quote after a call.');
  let lo = 0, hi = 0, days = 0;
  if (priced.length) {
    [lo, hi, days] = priced[0];
    // each extra piece adds part of its range: shared design, auth and hosting are built once
    for (const [l, h, d] of priced.slice(1)) { lo += l * 0.3; hi += h * 0.3; days += Math.ceil(d * 0.3); }
  }
  if (a.timeline?.[0] === 'As soon as possible' && priced.length) { lo *= 1.25; hi *= 1.25; days = Math.ceil(days * 0.65); notes.push('Includes rush pricing.'); }
  if (fixing && priced.length) {
    // finishing an existing build: fixes start low, but the ceiling stays at building it properly
    lo = 60; days = Math.max(2, Math.round(days * 0.5));
    notes.push('Fixes on an app that already works start at $60. If most of the product still needs building, it is priced as a build.');
  }
  const round = (n: number) => (n >= 1000 ? Math.round(n / 100) * 100 : Math.round(n / 10) * 10);
  return { lo: round(lo), hi: round(hi), days, notes } as Estimate;
}
