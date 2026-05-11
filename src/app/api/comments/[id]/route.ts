import { NextResponse } from 'next/server';
import { resolveComment } from '@/lib/comments';
import { createClient } from '@/lib/supabase/server';

export async function PATCH(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { id } = await params;
  await resolveComment(id);
  return NextResponse.json({ ok: true });
}
