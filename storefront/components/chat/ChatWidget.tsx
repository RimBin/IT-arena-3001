"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Sveiki! Kuo galiu padėti dėl svetainės kūrimo?",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [open, messages.length]);

  const canSend = useMemo(() => {
    return input.trim().length > 0 && !loading;
  }, [input, loading]);

  async function onSend(e: React.FormEvent) {
    e.preventDefault();
    if (!canSend) return;

    const userText = input.trim();
    setInput("");

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: userText }];
    setMessages(nextMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
        const err = data?.error ?? "Nepavyko gauti atsakymo";
        setMessages((prev) => [...prev, { role: "assistant", content: err }]);
        return;
      }

      const assistantText = data?.message?.trim();
      if (!assistantText) {
        setMessages((prev) => [...prev, { role: "assistant", content: "Atsakymas buvo tuščias. Pabandykite dar kartą." }]);
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: assistantText }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Ryšio klaida. Pabandykite dar kartą." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Atidaryti pokalbį"
            className="y-neumo-surface y-pill w-12 h-12 flex items-center justify-center shadow-[0_10px_24px_rgba(78,86,108,0.18)] text-slate-700 hover:text-slate-900 transition-colors"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12c0 4.418-4.03 8-9 8-1.186 0-2.317-.195-3.347-.55L3 20l1.1-3.1C3.41 15.73 3 14.4 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
      ) : (
        <div className="y-neumo-surface-lg w-[360px] overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <div className="font-semibold leading-5 text-slate-900">Pokalbis</div>
              <div className="text-xs text-slate-600">Atsakau per kelias sekundes</div>
            </div>
            <button
              type="button"
              className="y-neumo-inset-sm y-pill y-focus px-3 py-1 text-xs font-semibold text-slate-700"
              onClick={() => setOpen(false)}
              aria-label="Uždaryti pokalbį"
            >
              Užverti
            </button>
          </div>

          <div className="px-4 pb-3">
            <div className="y-neumo-inset h-[340px] overflow-y-auto px-3 py-3">
              <div className="space-y-2">
                {messages.map((m, idx) => {
                  const isUser = m.role === "user";
                  return (
                    <div key={idx} className={isUser ? "flex justify-end" : "flex justify-start"}>
                      <div
                        className={
                          isUser
                            ? "max-w-[85%] rounded-[18px] border border-white/50 bg-white/85 px-3 py-2 text-sm text-slate-900"
                            : "max-w-[85%] rounded-[18px] border border-white/50 bg-white/60 px-3 py-2 text-sm text-slate-900"
                        }
                      >
                        {m.content}
                      </div>
                    </div>
                  );
                })}
                {loading ? (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-[18px] border border-white/50 bg-white/60 px-3 py-2 text-sm text-slate-900">
                      Rašau...
                    </div>
                  </div>
                ) : null}
                <div ref={bottomRef} />
              </div>
            </div>

            <form onSubmit={onSend} className="mt-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Parašykite žinutę..."
                  aria-label="Žinutė"
                  className="y-neumo-inset-sm y-focus w-full px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  disabled={!canSend}
                  aria-label="Siųsti"
                  className="y-btn-primary y-focus disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Siųsti
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
