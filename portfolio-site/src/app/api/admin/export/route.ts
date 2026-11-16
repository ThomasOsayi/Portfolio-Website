import { isAdmin } from '@/lib/adminAuth';
import { listInquiries } from '@/lib/inquiryStore';

export const dynamic = 'force-dynamic';

const cell = (v: string) => `"${v.replace(/"/g, '""')}"`;

export async function GET() {
  if (!(await isAdmin())) return new Response('Unauthorized', { status: 401 });
  const rows = await listInquiries();
  const head = ['Date', 'Status', 'Name', 'Email', 'Company', 'Building', 'Stage', 'Budget', 'Timeline', 'Details', 'Heard from', 'Note'];
  const lines = rows.map((r) => [r.createdAt, r.status, r.name, r.email, r.company, r.need.join('; '), r.stage, r.budget, r.timeline, r.details, r.heard, r.note].map((v) => cell(String(v ?? ''))).join(','));
  return new Response([head.join(','), ...lines].join('\n'), {
    headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': `attachment; filename="inquiries-${new Date().toISOString().slice(0, 10)}.csv"` },
  });
}
