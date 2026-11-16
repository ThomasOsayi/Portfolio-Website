import 'server-only';
import { get, list, put } from '@vercel/blob';

export type Status = 'new' | 'contacted' | 'won' | 'archived';
export const STATUSES: Status[] = ['new', 'contacted', 'won', 'archived'];

export interface InquiryRecord {
  id: string;
  createdAt: string;
  status: Status;
  note: string;
  need: string[];
  stage: string;
  budget: string;
  timeline: string;
  details: string;
  name: string;
  email: string;
  company: string;
  heard: string;
  userAgent?: string;
}

const PREFIX = 'inquiries/';
const path = (r: Pick<InquiryRecord, 'id' | 'createdAt'>) => `${PREFIX}${r.createdAt.replace(/[:.]/g, '-')}_${r.id}.json`;

async function write(r: InquiryRecord) {
  await put(path(r), JSON.stringify(r), { access: 'private', contentType: 'application/json', addRandomSuffix: false, allowOverwrite: true });
}

export async function saveInquiry(r: InquiryRecord) {
  await write(r);
}

async function read(pathname: string): Promise<InquiryRecord | null> {
  const res = await get(pathname, { access: 'private', useCache: false });
  if (!res || res.statusCode !== 200) return null;
  return JSON.parse(await new Response(res.stream).text()) as InquiryRecord;
}

export async function listInquiries(): Promise<InquiryRecord[]> {
  const paths: string[] = [];
  let cursor: string | undefined;
  do {
    const page = await list({ prefix: PREFIX, cursor, limit: 1000 });
    paths.push(...page.blobs.map((b) => b.pathname));
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  const out = (await Promise.all(paths.map((p) => read(p).catch(() => null)))).filter(Boolean) as InquiryRecord[];
  return out.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function updateInquiry(id: string, createdAt: string, patch: Partial<Pick<InquiryRecord, 'status' | 'note'>>) {
  const cur = await read(path({ id, createdAt }));
  if (!cur) throw new Error('not found');
  await write({ ...cur, ...patch });
}
