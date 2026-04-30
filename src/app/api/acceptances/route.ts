import { NextResponse } from 'next/server';
import { getAllAcceptances, setAcceptance } from '@/lib/acceptances';

export async function GET() {
  const data = await getAllAcceptances();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { block_id, accepted } = await request.json();
  await setAcceptance(block_id, accepted);
  return NextResponse.json({ ok: true });
}
