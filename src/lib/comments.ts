import { Redis } from '@upstash/redis';
import { Comment } from '@/types';

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export async function getAllComments(): Promise<Comment[]> {
  try {
    const data = await redis.get<Comment[]>('comments');
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
    const all = await getAllComments();
    all.push(comment);
    await redis.set('comments', all);
  } catch {}
}

export async function resolveComment(id: string): Promise<void> {
  try {
    const all = await getAllComments();
    const updated = all.map(c => c.id === id ? { ...c, status: 'resolved' as const } : c);
    await redis.set('comments', updated);
  } catch {}
}
