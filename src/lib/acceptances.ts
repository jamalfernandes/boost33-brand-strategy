import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function getAllAcceptances(): Promise<Record<string, boolean>> {
  try {
    const data = await redis.get<Record<string, boolean>>('acceptances');
    return data ?? {};
  } catch {
    return {};
  }
}

export async function setAcceptance(blockId: string, accepted: boolean): Promise<void> {
  try {
    const all = await getAllAcceptances();
    all[blockId] = accepted;
    await redis.set('acceptances', all);
  } catch {}
}
