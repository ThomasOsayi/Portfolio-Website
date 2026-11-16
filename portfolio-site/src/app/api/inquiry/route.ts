import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import { saveInquiry } from '@/lib/inquiryStore';

const clean = (v: unknown, max = 300) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export async function POST(req: Request) {
  const raw = await req.text();
  if (raw.length > 12000) return NextResponse.json({ ok: false, error: 'too large' }, { status: 413 });
  let b: Record<string, unknown>;
  try { b = JSON.parse(raw); } catch { return NextResponse.json({ ok: false, error: 'bad json' }, { status: 400 }); }
  if (clean(b.website)) return NextResponse.json({ ok: true }); // honeypot: pretend success for bots
  const name = clean(b.name, 120), email = clean(b.email, 200);
  if (name.length < 2 || !emailOk(email)) return NextResponse.json({ ok: false, error: 'name and email required' }, { status: 400 });
  const need = Array.isArray(b.need) ? b.need.map((x) => clean(x, 80)).filter(Boolean).slice(0, 12) : [];
  try {
    await saveInquiry({
      id: randomUUID().slice(0, 8),
      createdAt: new Date().toISOString(),
      status: 'new',
      note: '',
      need,
      stage: clean(b.stage, 120),
      budget: clean(b.budget, 120),
      timeline: clean(b.timeline, 120),
      details: clean(b.details, 3000),
      name,
      email,
      company: clean(b.company, 200),
      heard: clean(b.heard, 60),
      userAgent: clean(req.headers.get('user-agent'), 200),
    });
  } catch (e) {
    console.error('inquiry save failed', e);
    return NextResponse.json({ ok: false, error: 'storage' }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
