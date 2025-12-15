"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder submit — in real app, POST to API route or ESP.
    setTimeout(() => setSent(true), 400);
  }

  return (
    <section aria-label="newsletter" className="py-10">
      <div className="rounded-2xl border-gradient p-6 md:p-8 bg-[rgba(11,17,36,0.6)] backdrop-blur shadow-neon relative overflow-hidden">
        <h2 className="heading-black text-2xl mb-2">Get <span className="text-gradient">updates</span></h2>
        <p className="opacity-85 mb-4">News on products, drops and case studies. No spam.</p>
        {sent ? (
          <div className="text-sm text-green-300">Thanks! You’re on the list.</div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <Input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="min-w-32">Subscribe</Button>
          </form>
        )}
      </div>
    </section>
  );
}
