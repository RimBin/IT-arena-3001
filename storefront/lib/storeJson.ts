import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

export async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const p = path.join(dataDir, file);
    const buf = await fs.readFile(p, "utf8");
    return JSON.parse(buf) as T;
  } catch (e) {
    return fallback;
  }
}

export async function writeJson<T>(file: string, data: T): Promise<void> {
  const p = path.join(dataDir, file);
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(p, JSON.stringify(data, null, 2), "utf8");
}
