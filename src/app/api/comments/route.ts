import { NextResponse } from 'next/server';
import { getAllComments, addComment } from '@/lib/comments';
import { Comment } from '@/types';
import { randomUUID } from 'crypto';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const section_id = searchParams.get('section');
  const all = await getAllComments();
  const filtered = section_id ? all.filter(c => c.section_id === section_id) : all;
  return NextResponse.json(filtered);
}

export async function POST(request: Request) {
  const body = await request.json();
  const comment: Comment = {
    id: randomUUID(),
    section_id: body.section_id,
    author: body.author,
    role: body.role,
    text: body.text,
    status: 'open',
    created_at: new Date().toISOString(),
  };
  await addComment(comment);
  return NextResponse.json(comment, { status: 201 });
}
