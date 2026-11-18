'use client';
// Full page loads back to / on purpose, so the home page's scroll scenes start fresh.
/* eslint-disable @next/next/no-html-link-for-pages */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import { CALENDLY_URL, INQUIRY_EMAIL, estimate, heardFrom, steps } from '@/data/inquiry';

type Answers = Record<string, string[]>;
type Contact = { name: string; email: string; company: string; heard: string; details: string };

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export default function Inquiry({ initialAnswers = {} }: { initialAnswers?: Answers }) {
  const [i, setI] = useState(0); // 0..steps.length-1, then steps.length = review
  const [dir, setDir] = useState(1);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [c, setC] = useState<Contact>({ name: '', email: '', company: '', heard: '', details: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [touched, setTouched] = useState(false);
  const trap = useRef<HTMLInputElement>(null);
  const firstField = useRef<HTMLElement | null>(null);

  const est = useMemo(() => estimate(answers), [answers]);
  const money = (n: number) => '$' + n.toLocaleString('en-US');
  const estText = est ? (est.hi ? `${money(est.lo)} to ${money(est.hi)}, about ${est.days} days` : 'Quoted after a call') : '';
  const estBox = est && (
    <div className="iq-est" aria-live="polite">
      <span className="label">Estimated cost</span>
      <strong>{est.hi ? <>{money(est.lo)} to {money(est.hi)}</> : 'Quoted after a call'}</strong>
      {est.hi > 0 && <span className="iq-est-days">About {est.days} days from kickoff</span>}
      {est.notes.map((n) => <p key={n}>{n}</p>)}
      <p className="iq-est-fine">Based on my fixed packages. You get a firm quote before any work starts.</p>
    </div>
  );

  const total = steps.length;
  const step = steps[i];
  const isReview = i === total;

  const canNext = useMemo(() => {
    if (isReview) return true;
    if (step.kind === 'multi' || step.kind === 'single') return (answers[step.id]?.length ?? 0) > 0;
    if (step.kind === 'contact') return c.name.trim().length > 1 && emailOk(c.email);
    return true;
  }, [answers, c, isReview, step]);

  const go = useCallback((n: number) => {
    setDir(n > i ? 1 : -1);
    setTouched(false);
    setI(Math.max(0, Math.min(total, n)));
  }, [i, total]);

  const next = useCallback(() => {
    if (!canNext) { setTouched(true); return; }
    go(i + 1);
  }, [canNext, go, i]);

  const pick = (id: string, opt: string, single: boolean) => {
    setAnswers((a) => {
      const cur = a[id] ?? [];
      const val = single ? [opt] : cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt];
      return { ...a, [id]: val };
    });
    if (single) setTimeout(() => { setDir(1); setI((n) => Math.min(total, n + 1)); }, 260);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // focus the first control on desktop only; on phones it would pop the keyboard open
    if (matchMedia('(hover: hover)').matches) firstField.current?.focus({ preventScroll: true });
  }, [i, status]);

  const summary = (): [string, string][] => [
    ['Building', (answers.need ?? []).join(', ')],
    ['Stage', (answers.stage ?? []).join(', ')],
    ['Budget', (answers.budget ?? []).join(', ')],
    ['Timeline', (answers.timeline ?? []).join(', ')],
    ['Estimate shown', estText || 'None'],
    ['Details', c.details.trim() || 'None'],
    ['Name', c.name.trim()],
    ['Email', c.email.trim()],
    ['Company or site', c.company.trim() || 'None'],
    ['Heard from', c.heard || 'Not given'],
  ];

  async function send() {
    if (status === 'sending' || status === 'sent') return;
    if (trap.current?.value) { setStatus('sent'); return; } // bot filled the hidden field
    setStatus('sending');
    const body: Record<string, string> = Object.fromEntries(summary());
    body._subject = `New project inquiry: ${c.name.trim()} (${(answers.budget ?? [''])[0]})`;
    body._replyto = c.email.trim();
    body._template = 'table';
    body._captcha = 'false';
    // 1) save to the admin dashboard, 2) email a copy. Either one landing counts as sent.
    const record = {
      need: answers.need ?? [], stage: answers.stage?.[0] ?? '', budget: answers.budget?.[0] ?? '', timeline: answers.timeline?.[0] ?? '',
      details: c.details, name: c.name, email: c.email, company: c.company, heard: c.heard, website: trap.current?.value ?? '',
    };
    const saved = fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) })
      .then((r) => r.ok);
    const mailed = fetch(`https://formsubmit.co/ajax/${INQUIRY_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    }).then(async (r) => { const j = await r.json().catch(() => ({})); return r.ok && String(j.success) !== 'false'; });
    const results = await Promise.allSettled([saved, mailed]);
    setStatus(results.some((x) => x.status === 'fulfilled' && x.value) ? 'sent' : 'error');
  }

  // keyboard: Enter = next, number keys pick options, Escape/Backspace-less back via button
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (status === 'sent') return;
      if (e.key === 'Enter' && tag !== 'TEXTAREA' && tag !== 'BUTTON') { e.preventDefault(); if (isReview) send(); else next(); }
      if (!isReview && (step.kind === 'multi' || step.kind === 'single') && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        const n = parseInt(e.key, 10);
        if (n >= 1 && n <= step.options.length) pick(step.id, step.options[n - 1], step.kind === 'single');
      }
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  });

  const calendly = useMemo(() => {
    const u = new URL(CALENDLY_URL);
    if (c.name.trim()) u.searchParams.set('name', c.name.trim());
    if (c.email.trim()) u.searchParams.set('email', c.email.trim());
    const note = [answers.need?.join(', '), answers.budget?.[0], answers.timeline?.[0]].filter(Boolean).join(' · ');
    if (note) u.searchParams.set('a1', note);
    u.searchParams.set('hide_gdpr_banner', '1');
    return u.toString();
  }, [c, answers]);

  const progress = status === 'sent' ? 1 : Math.min(i, total) / total;

  return (
    <div className="iq">
      <header className="iq-top gutter">
        <a href="/" className="brand">THOMAS OSAYI</a>
        <span className="label">{status === 'sent' ? 'Sent' : isReview ? 'Review' : `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`}</span>
        <a href="/" className="iq-close" aria-label="Close and go back to the site">Close <Icon name="close" /></a>
      </header>
      <div className="iq-bar" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>

      <main className="iq-stage gutter">
        {status === 'sent' ? (
          <section className="iq-slide iq-done" key="done">
            <span className="label">Got it, {c.name.trim().split(' ')[0] || 'thanks'}</span>
            <h1 className="iq-title">Thanks. I&apos;ll reply <em>within a day.</em></h1>
            <p className="iq-hint">Want to skip the back and forth? Grab a 30 minute intro call. Your details are already filled in.</p>
            <div className="iq-cal">
              <iframe src={calendly} title="Book a project intro call with Thomas" loading="lazy" />
            </div>
            <div className="iq-actions">
              <a className="iq-btn" href={calendly} target="_blank" rel="noopener">Open booking page <Icon name="arrow-up-right" /></a>
              <a className="iq-ghost" href="/">Back to the site</a>
            </div>
          </section>
        ) : isReview ? (
          <section className="iq-slide" key="review" data-dir={dir}>
            <span className="label">Last step</span>
            <h1 className="iq-title">Look right?</h1>
            {estBox}
            <dl className="iq-review">
              {summary().filter(([k]) => k !== 'Estimate shown').map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            {status === 'error' && (
              <p className="iq-err" role="alert">That didn&apos;t send. Try again, or email me at <a href={`mailto:${INQUIRY_EMAIL}`}>{INQUIRY_EMAIL}</a>.</p>
            )}
            <div className="iq-actions">
              <button type="button" className="iq-ghost" onClick={() => go(i - 1)}><Icon name="arrow-left" /> Back</button>
              <button type="button" className="iq-btn" onClick={send} disabled={status === 'sending'} ref={(el) => { firstField.current = el; }}>
                {status === 'sending' ? 'Sending…' : 'Send inquiry'}
              </button>
            </div>
          </section>
        ) : (
          <section className="iq-slide" key={step.id} data-dir={dir} aria-labelledby={`q-${step.id}`}>
            <span className="label">{step.kind === 'multi' ? 'Choose any' : step.kind === 'single' ? 'Choose one' : step.kind === 'text' ? 'Optional' : 'Required'}</span>
            <h1 className="iq-title" id={`q-${step.id}`}>{step.title}</h1>
            {step.hint && <p className="iq-hint">{step.hint}</p>}

            {(step.kind === 'multi' || step.kind === 'single') && (
              <div className="iq-options" role={step.kind === 'single' ? 'radiogroup' : 'group'} aria-labelledby={`q-${step.id}`}>
                {step.options.map((o, k) => {
                  const on = (answers[step.id] ?? []).includes(o);
                  return (
                    <button
                      type="button" key={o}
                      role={step.kind === 'single' ? 'radio' : 'checkbox'} aria-checked={on}
                      className={`iq-opt${on ? ' on' : ''}`}
                      onClick={() => pick(step.id, o, step.kind === 'single')}
                      ref={k === 0 ? (el) => { firstField.current = el; } : undefined}
                    >
                      <span className="iq-key">{k + 1}</span>{o}<span className="iq-check" aria-hidden="true"><Icon name="check" /></span>
                    </button>
                  );
                })}
              </div>
            )}

            {step.kind === 'text' && (
              <textarea
                className="iq-text" rows={5} value={c.details} maxLength={3000}
                placeholder="e.g. A booking site for my studio with deposits and reminders. I like how example.com feels."
                onChange={(e) => setC({ ...c, details: e.target.value })}
                ref={(el) => { firstField.current = el; }}
                aria-labelledby={`q-${step.id}`}
              />
            )}

            {step.kind === 'contact' && (
              <div className="iq-fields">
                <label>Name<input autoComplete="name" value={c.name} onChange={(e) => setC({ ...c, name: e.target.value })} ref={(el) => { firstField.current = el; }} aria-invalid={touched && c.name.trim().length < 2} /></label>
                <label>Email<input type="email" autoComplete="email" inputMode="email" value={c.email} onChange={(e) => setC({ ...c, email: e.target.value })} aria-invalid={touched && !emailOk(c.email)} /></label>
                <label className="iq-wide">Company or website <span>optional</span><input autoComplete="organization" value={c.company} onChange={(e) => setC({ ...c, company: e.target.value })} /></label>
                <div className="iq-wide">
                  <span className="iq-sub">How did you find me? <span>optional</span></span>
                  <div className="iq-chips">
                    {heardFrom.map((h) => (
                      <button type="button" key={h} className={`iq-chip${c.heard === h ? ' on' : ''}`} aria-pressed={c.heard === h} onClick={() => setC({ ...c, heard: c.heard === h ? '' : h })}>{h}</button>
                    ))}
                  </div>
                </div>
                <input ref={trap} type="text" name="_honey" tabIndex={-1} autoComplete="off" className="iq-trap" aria-hidden="true" />
              </div>
            )}

            {(step.kind === 'multi' || step.kind === 'single') && estBox}

            {touched && !canNext && (
              <p className="iq-err" role="alert">{step.kind === 'contact' ? 'Add your name and a valid email.' : 'Pick at least one to continue.'}</p>
            )}

            <div className="iq-actions">
              {i > 0 ? <button type="button" className="iq-ghost" onClick={() => go(i - 1)}><Icon name="arrow-left" /> Back</button> : <a className="iq-ghost" href={CALENDLY_URL} target="_blank" rel="noopener">Rather talk? Book a call <Icon name="arrow-up-right" /></a>}
              <button type="button" className={`iq-btn${canNext ? '' : ' dim'}`} onClick={next}>
                {step.kind === 'text' && !c.details.trim() ? 'Skip' : 'Continue'} <span className="iq-enter"><Icon name="enter" /></span>
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
