import { NextResponse } from 'next/server';
import { getAllComments, addComment } from '@/lib/comments';
import { Comment } from '@/types';
import { randomUUID } from 'crypto';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const section_id = searchParams.get('section');
  const all = await getAllComments();
  const filtered = section_id ? all.filter(c => c.section_id === section_id) : all;
  return NextResponse.json(filtered);
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const author = (user.user_metadata?.full_name as string | undefined)?.trim() || user.email || 'Unknown';

  const comment: Comment = {
    id: randomUUID(),
    section_id: body.section_id,
    author,
    role: body.role,
    text: body.text,
    status: 'open',
    created_at: new Date().toISOString(),
  };
  await addComment(comment);
  return NextResponse.json(comment, { status: 201 });
}
