function getKV() {
  try { return require('@vercel/kv').kv; } catch { return null; }
}

export async function getAllAcceptances(): Promise<Record<string, boolean>> {
  try {
    const kv = getKV();
    if (!kv) return {};
    const data = await kv.get('acceptances');
    return (data as Record<string, boolean>) ?? {};
  } catch { return {}; }
}

export async function setAcceptance(blockId: string, accepted: boolean): Promise<void> {
  try {
    const kv = getKV();
    if (!kv) return;
    const all = await getAllAcceptances();
    all[blockId] = accepted;
    await kv.set('acceptances', all);
  } catch {}
}
