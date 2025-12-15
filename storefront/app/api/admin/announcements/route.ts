import { NextRequest, NextResponse } from "next/server";
import { readJson, writeJson } from "@/lib/storeJson";

type Ann = { id: string; title: string; body: string; createdAt: string };

export async function GET() {
  const anns = await readJson<Ann[]>("announcements.json", []);
  return NextResponse.json(anns);
}

export async function POST(req: NextRequest) {
  // Very simple cookie-based auth: require cookie admin=1
  const isAdmin = req.cookies.get("admin")?.value === "1";
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null as any);
  if (!body?.title || !body?.body) return NextResponse.json({ error: "Missing title/body" }, { status: 400 });
  const anns = await readJson<Ann[]>("announcements.json", []);
  const ann: Ann = { id: crypto.randomUUID(), title: body.title, body: body.body, createdAt: new Date().toISOString() };
  anns.unshift(ann);
  await writeJson("announcements.json", anns);
  return NextResponse.json(ann, { status: 201 });
}
