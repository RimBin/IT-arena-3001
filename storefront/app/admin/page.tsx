"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Ann = { id: string; title: string; body: string; createdAt: string };

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [anns, setAnns] = useState<Ann[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  async function refresh() {
    const res = await fetch('/api/admin/announcements', { cache: 'no-store' });
    setAnns(await res.json());
  }

  useEffect(() => { refresh(); }, []);

  async function create(e: React.FormEvent) {
    e.preventDefault(); setError("");
    const res = await fetch('/api/admin/announcements', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, body }) });
    if (!res.ok) { setError('Unauthorized or invalid data'); return; }
    setTitle(''); setBody(''); refresh();
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <main className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="heading-black text-2xl">Admin</h1>
        <button className="underline" onClick={logout}>Logout</button>
      </div>
      <form onSubmit={create} className="grid gap-3 max-w-xl mb-6">
        <input className="border rounded p-2 bg-white/80" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="border rounded p-2 bg-white/80" placeholder="Body" rows={4} value={body} onChange={(e) => setBody(e.target.value)} />
        <button className="px-4 py-2 rounded border">Create announcement</button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </form>
      <div className="grid gap-3">
        {anns.map(a => (
          <div key={a.id} className="rounded-xl border-gradient p-4 bg-[rgba(11,17,36,0.6)] backdrop-blur">
            <div className="font-semibold">{a.title}</div>
            <div className="text-sm opacity-85">{a.body}</div>
            <div className="text-xs opacity-60 mt-1">{new Date(a.createdAt).toLocaleString()}</div>
          </div>
        ))}
        {anns.length === 0 && <div className="text-sm opacity-70">No announcements yet.</div>}
      </div>
    </main>
  );
}
