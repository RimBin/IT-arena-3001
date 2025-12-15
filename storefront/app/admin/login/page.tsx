"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    if (!res.ok) return setError("Invalid password");
    router.push("/admin");
  }
  return (
    <main className="container mx-auto p-6">
      <h1 className="heading-black text-2xl mb-4">Admin Login</h1>
      <form onSubmit={onSubmit} className="max-w-sm grid gap-3">
        <input type="password" className="border rounded p-2 bg-white/80" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="px-4 py-2 rounded border">Login</button>
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </form>
    </main>
  );
}
