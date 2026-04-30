import { Comment } from '@/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type KVClient = { get: (key: string) => Promise<any>; set: (key: string, value: unknown) => Promise<void> };

function getKV(): KVClient | null {
  // lazy import so missing env vars don't crash at build time
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('@vercel/kv').kv as KVClient;
  } catch {
    return null;
  }
}

export async function getAllComments(): Promise<Comment[]> {
  try {
    const kv = getKV();
    if (!kv) return [];
    const data = await kv.get('comments') as Comment[] | null;
    return data ?? [];
  } catch {
    return [];
  }
}

export async function getCommentsBySection(section_id: string): Promise<Comment[]> {
  const all = await getAllComments();
  return all.filter(c => c.section_id === section_id);
}

export async function addComment(comment: Comment): Promise<void> {
  try {
    const kv = getKV();
    if (!kv) return;
    const all = await getAllComments();
    all.push(comment);
    await kv.set('comments', all);
  } catch {}
}

export async function resolveComment(id: string): Promise<void> {
  try {
    const kv = getKV();
    if (!kv) return;
    const all = await getAllComments();
    const updated = all.map(c => c.id === id ? { ...c, status: 'resolved' as const } : c);
    await kv.set('comments', updated);
  } catch {}
}
