import { NextResponse } from 'next/server';
import { getAllAcceptances, setAcceptance } from '@/lib/acceptances';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const data = await getAllAcceptances();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { block_id, accepted } = await request.json();
  await setAcceptance(block_id, accepted);
  return NextResponse.json({ ok: true });
}
