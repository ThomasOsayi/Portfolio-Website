import 'server-only';
import { createHmac, scryptSync, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

// Only a salted scrypt hash of the admin password lives in the repo. Set ADMIN_PASSWORD in
// Vercel to replace it without a code change.
const PASSWORD_HASH = 'scrypt$6a091ff889df2afae47ed215a2f868f2$15af1179a9e2904e38aedb2f9ec5f059262669ff35ecdf5811ade9a78d51c72f';
const COOKIE = 'to_admin';
const DAY = 24 * 60 * 60 * 1000;

const secret = () => process.env.ADMIN_SECRET || process.env.BLOB_READ_WRITE_TOKEN || 'dev-only-secret';

export function checkPassword(input: string): boolean {
  if (!input) return false;
  if (process.env.ADMIN_PASSWORD) {
    const a = Buffer.from(input), b = Buffer.from(process.env.ADMIN_PASSWORD);
    return a.length === b.length && timingSafeEqual(a, b);
  }
  const [, salt, hash] = PASSWORD_HASH.split('$');
  const got = scryptSync(input, salt, 32);
  return timingSafeEqual(got, Buffer.from(hash, 'hex'));
}

const sign = (payload: string) => createHmac('sha256', secret()).update(payload).digest('hex');

export async function startSession() {
  const exp = Date.now() + 14 * DAY;
  const value = `${exp}.${sign(`admin.${exp}`)}`;
  (await cookies()).set(COOKIE, value, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 14 * 24 * 60 * 60 });
}

export async function endSession() {
  (await cookies()).delete(COOKIE);
}

export async function isAdmin(): Promise<boolean> {
  const v = (await cookies()).get(COOKIE)?.value;
  if (!v) return false;
  const [exp, sig] = v.split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const want = sign(`admin.${exp}`);
  return sig.length === want.length && timingSafeEqual(Buffer.from(sig), Buffer.from(want));
}
