import OpenAI from "openai";

export const runtime = "nodejs";

type ChatRole = "system" | "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequestBody = {
  messages: ChatMessage[];
};

const MAX_MESSAGES = 20;
const MAX_CONTENT_CHARS = 4000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isChatRole(value: unknown): value is ChatRole {
  return value === "system" || value === "user" || value === "assistant";
}

function normalizeMessages(raw: unknown): ChatMessage[] | null {
  if (!Array.isArray(raw)) return null;

  const trimmed = raw.slice(-MAX_MESSAGES);
  const out: ChatMessage[] = [];

  for (const item of trimmed) {
    if (!isRecord(item)) return null;
    const role = item.role;
    const content = item.content;

    if (!isChatRole(role)) return null;
    if (typeof content !== "string") return null;

    const safeContent = content.trim().slice(0, MAX_CONTENT_CHARS);
    if (!safeContent) continue;

    out.push({ role, content: safeContent });
  }

  if (out.length === 0) return null;
  return out;
}

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Chat paslauga nesukonfigūruota (trūksta API rakto)." },
      { status: 500 },
    );
  }

  let body: ChatRequestBody | null = null;
  try {
    body = (await req.json()) as ChatRequestBody;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const messages = normalizeMessages(body?.messages);
  if (!messages) {
    return Response.json(
      { error: "Invalid messages" },
      { status: 400 },
    );
  }

  const client = new OpenAI({ apiKey });
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  try {
    const completion = await client.chat.completions.create({
      model,
      messages: [
        {
          role: "system",
          content:
            "Tu esi IT Arena svetainės pokalbių robotas. Atsakyk trumpai, aiškiai ir mandagiai. Jei vartotojas klausia apie svetainių kūrimą ar kainą, pateik bendrą informaciją ir pasiūlyk susisiekti dėl pasiūlymo.",
        },
        ...messages,
      ],
      temperature: 0.4,
    });

    const assistantText = completion.choices?.[0]?.message?.content?.trim();
    if (!assistantText) {
      return Response.json(
        { error: "Empty response from model" },
        { status: 502 },
      );
    }

    return Response.json({ message: assistantText });
  } catch (err: unknown) {
    const upstreamStatus =
      isRecord(err) && typeof err.status === "number" ? err.status : 500;

    // Never forward raw upstream errors to the client (they may contain sensitive details).
    let publicMessage = "Nepavyko apdoroti užklausos. Pabandykite dar kartą.";
    if (upstreamStatus === 401 || upstreamStatus === 403) {
      publicMessage = "Chat paslauga nesukonfigūruota (neteisingas API raktas).";
    } else if (upstreamStatus === 429) {
      publicMessage = "Per daug užklausų. Pabandykite po kelių minučių.";
    } else if (upstreamStatus >= 500) {
      publicMessage = "Laikina serverio klaida. Pabandykite vėliau.";
    }

    console.error("/api/chat error", err);
    return Response.json({ error: publicMessage }, { status: 502 });
  }
}
