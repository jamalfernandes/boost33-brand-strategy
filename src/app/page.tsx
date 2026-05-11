import { redirect } from 'next/navigation';
import HomeClient from '@/components/HomeClient';
import { createClient } from '@/lib/supabase/server';

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const displayName =
    (user.user_metadata?.full_name as string | undefined)?.trim() || user.email || '';

  return <HomeClient userEmail={displayName} />;
}
