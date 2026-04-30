import { NextResponse } from 'next/server';
import { resolveComment } from '@/lib/comments';

export async function PATCH(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await resolveComment(id);
  return NextResponse.json({ ok: true });
}
