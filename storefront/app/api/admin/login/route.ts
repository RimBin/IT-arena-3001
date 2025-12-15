import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({}));
  // Demo: password from env or default 'admin'
  const pass = process.env.ADMIN_PASSWORD || 'admin';
  if (password !== pass) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin', '1', { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 8 });
  return res;
}
