'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') ?? '/';

  const [mode, setMode] = useState<'signin' | 'reset'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push(next);
    router.refresh();
  }

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setSubmitting(true);
    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/callback?next=/auth/reset-password`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
    setSubmitting(false);
    if (error) {
      setError(error.message);
      return;
    }
    setInfo('Check your email for a reset link.');
  }

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <img src="/logo-horizontal.png" alt="Boost33" className="auth-logo" />
        <h1 className="auth-title">{mode === 'signin' ? 'Sign in' : 'Reset password'}</h1>
        <p className="auth-sub">
          {mode === 'signin'
            ? 'Brand Strategy hub — invite only.'
            : 'Enter your email to receive a reset link.'}
        </p>

        <form onSubmit={mode === 'signin' ? handleSignIn : handleReset} className="auth-form">
          <label className="auth-label">
            Email
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />
          </label>

          {mode === 'signin' && (
            <label className="auth-label">
              Password
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
              />
            </label>
          )}

          {error && <div className="auth-error">{error}</div>}
          {info && <div className="auth-info">{info}</div>}

          <button type="submit" className="auth-submit" disabled={submitting}>
            {submitting
              ? mode === 'signin' ? 'Signing in…' : 'Sending…'
              : mode === 'signin' ? 'Sign in' : 'Send reset link'}
          </button>
        </form>

        <button
          type="button"
          className="auth-link"
          onClick={() => {
            setMode(mode === 'signin' ? 'reset' : 'signin');
            setError(null);
            setInfo(null);
          }}
        >
          {mode === 'signin' ? 'Forgot password?' : 'Back to sign in'}
        </button>
      </div>
    </div>
  );
}
