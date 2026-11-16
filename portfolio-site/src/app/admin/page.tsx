import type { Metadata } from 'next';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { checkPassword, endSession, isAdmin, startSession } from '@/lib/adminAuth';
import { STATUSES, listInquiries, updateInquiry, type InquiryRecord, type Status } from '@/lib/inquiryStore';

export const metadata: Metadata = { title: 'Inquiries | Admin', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

const LABEL: Record<Status, string> = { new: 'New', contacted: 'Contacted', won: 'Won', archived: 'Archived' };

async function login(form: FormData) {
  'use server';
  if (checkPassword(String(form.get('password') || ''))) {
    await startSession();
    redirect('/admin');
  }
  redirect('/admin?error=1');
}

async function logout() {
  'use server';
  await endSession();
  redirect('/admin');
}

async function setStatus(form: FormData) {
  'use server';
  if (!(await isAdmin())) redirect('/admin');
  const status = String(form.get('status')) as Status;
  if (!STATUSES.includes(status)) return;
  await updateInquiry(String(form.get('id')), String(form.get('createdAt')), { status });
  revalidatePath('/admin');
}

async function saveNote(form: FormData) {
  'use server';
  if (!(await isAdmin())) redirect('/admin');
  await updateInquiry(String(form.get('id')), String(form.get('createdAt')), { note: String(form.get('note') || '').slice(0, 2000) });
  revalidatePath('/admin');
}

const fmt = (iso: string) =>
  new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(new Date(iso));

function replyHref(r: InquiryRecord) {
  const subject = `Re: your ${r.need[0] ? r.need[0].toLowerCase() + ' ' : ''}project`;
  const body = `Hi ${r.name.split(' ')[0]},\n\nThanks for reaching out about your project.\n\n`;
  return `mailto:${r.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ s?: string; error?: string }> }) {
  const sp = await searchParams;
  if (!(await isAdmin())) {
    return (
      <main className="ad-login">
        <form action={login} className="ad-card">
          <span className="label">Thomas Osayi · Admin</span>
          <h1>Inquiries</h1>
          <label>Password<input type="password" name="password" autoComplete="current-password" autoFocus required /></label>
          {sp.error && <p className="ad-err" role="alert">Wrong password.</p>}
          <button className="iq-btn" type="submit">Sign in</button>
        </form>
      </main>
    );
  }

  let rows: InquiryRecord[] = [];
  let loadError = false;
  try { rows = await listInquiries(); } catch { loadError = true; }
  const filter = (STATUSES as string[]).includes(sp.s || '') ? (sp.s as Status) : 'all';
  const shown = filter === 'all' ? rows.filter((r) => r.status !== 'archived') : rows.filter((r) => r.status === filter);
  // eslint-disable-next-line react-hooks/purity -- server component rendered per request
  const weekAgo = Date.now() - 7 * 864e5;
  const counts = Object.fromEntries(STATUSES.map((s) => [s, rows.filter((r) => r.status === s).length])) as Record<Status, number>;

  return (
    <main className="ad gutter">
      <header className="ad-top">
        <div>
          <span className="label">Thomas Osayi · Admin</span>
          <h1>Inquiries</h1>
        </div>
        <div className="ad-top-actions">
          <a className="iq-ghost" href="/api/admin/export">Export CSV</a>
          <a className="iq-ghost" href="/start" target="_blank" rel="noopener">Open form</a>
          <form action={logout}><button className="iq-ghost" type="submit">Sign out</button></form>
        </div>
      </header>

      <section className="ad-stats">
        <div><b>{rows.length}</b><span>Total</span></div>
        <div><b>{rows.filter((r) => Date.parse(r.createdAt) > weekAgo).length}</b><span>This week</span></div>
        <div><b>{counts.new}</b><span>Waiting on you</span></div>
        <div><b>{counts.won}</b><span>Won</span></div>
      </section>

      <nav className="ad-tabs" aria-label="Filter">
        <a href="/admin" className={filter === 'all' ? 'on' : ''}>Open</a>
        {STATUSES.map((s) => (
          <a key={s} href={`/admin?s=${s}`} className={filter === s ? 'on' : ''}>{LABEL[s]} <span>{counts[s]}</span></a>
        ))}
      </nav>

      {loadError && <p className="ad-err">Could not load inquiries from storage. Check the Blob store connection in Vercel.</p>}
      {!loadError && shown.length === 0 && <p className="ad-empty">Nothing here yet. New inquiries from thomasosayi.com/start land here.</p>}

      <div className="ad-list">
        {shown.map((r) => (
          <article className="ad-item" key={r.id}>
            <div className="ad-item-head">
              <div>
                <span className={`ad-pill ad-${r.status}`}>{LABEL[r.status]}</span>
                <h2>{r.name}{r.company && <small> · {r.company}</small>}</h2>
                <a className="ad-mail" href={`mailto:${r.email}`}>{r.email}</a>
              </div>
              <div className="ad-meta">
                <span>{fmt(r.createdAt)}</span>
                <b>{r.budget || 'No budget given'}</b>
              </div>
            </div>
            <dl className="ad-grid">
              <div><dt>Building</dt><dd>{r.need.join(', ') || 'Not given'}</dd></div>
              <div><dt>Stage</dt><dd>{r.stage || 'Not given'}</dd></div>
              <div><dt>Timeline</dt><dd>{r.timeline || 'Not given'}</dd></div>
              <div><dt>Found you via</dt><dd>{r.heard || 'Not given'}</dd></div>
            </dl>
            {r.details && <p className="ad-details">{r.details}</p>}
            <form action={saveNote} className="ad-note">
              <input type="hidden" name="id" value={r.id} />
              <input type="hidden" name="createdAt" value={r.createdAt} />
              <input name="note" defaultValue={r.note} placeholder="Private note (only you see this)" aria-label={`Note for ${r.name}`} />
              <button type="submit" className="iq-ghost">Save</button>
            </form>
            <div className="ad-actions">
              <a className="iq-btn" href={replyHref(r)}>Reply by email</a>
              <div className="ad-status">
                {STATUSES.filter((s) => s !== r.status).map((s) => (
                  <form action={setStatus} key={s}>
                    <input type="hidden" name="id" value={r.id} />
                    <input type="hidden" name="createdAt" value={r.createdAt} />
                    <input type="hidden" name="status" value={s} />
                    <button type="submit" className="iq-chip">Mark {LABEL[s].toLowerCase()}</button>
                  </form>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
