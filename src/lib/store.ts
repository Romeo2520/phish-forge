import { promises as fs } from "fs";
import os from "os";
import path from "path";
import { Redis } from "@upstash/redis";

export type Capture = {
  id: string;
  identifier: string;
  password: string;
  token: string | null;
  submittedAt: string;
  userAgent: string | null;
  ip: string | null;
};

const REDIS_KEY = "phishing-sim:captures";

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && redisToken) {
    return new Redis({ url, token: redisToken });
  }
  return null;
}

function getDataFile(): string {
  const baseDir = process.env.VERCEL
    ? os.tmpdir()
    : path.join(process.cwd(), "data");
  return path.join(baseDir, "captures.json");
}

async function ensureFile(file: string): Promise<void> {
  await fs.mkdir(path.dirname(file), { recursive: true });
  try {
    await fs.access(file);
  } catch {
    await fs.writeFile(file, "[]", "utf8");
  }
}

export async function readCaptures(): Promise<Capture[]> {
  const redis = getRedis();
  if (redis) {
    const items = await redis.lrange<Capture>(REDIS_KEY, 0, -1);
    return items ?? [];
  }
  const file = getDataFile();
  await ensureFile(file);
  const raw = await fs.readFile(file, "utf8");
  try {
    const parsed = JSON.parse(raw) as Capture[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function addCapture(
  entry: Omit<Capture, "id" | "submittedAt">
): Promise<Capture> {
  const capture: Capture = {
    ...entry,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };
  const redis = getRedis();
  if (redis) {
    await redis.rpush(REDIS_KEY, JSON.stringify(capture));
    return capture;
  }
  const file = getDataFile();
  const captures = await readCaptures();
  captures.push(capture);
  await fs.writeFile(file, JSON.stringify(captures, null, 2), "utf8");
  return capture;
}

export async function clearCaptures(): Promise<void> {
  const redis = getRedis();
  if (redis) {
    await redis.del(REDIS_KEY);
    return;
  }
  const file = getDataFile();
  await ensureFile(file);
  await fs.writeFile(file, "[]", "utf8");
}
