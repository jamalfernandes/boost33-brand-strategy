'use client';

import { useState, useEffect, useCallback } from 'react';
import { Comment } from '@/types';

interface CommentSidebarProps {
  sectionId: string | null;
  sectionLabel: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function CommentSidebar({ sectionId, sectionLabel, onClose, isOpen }: CommentSidebarProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<'onepct' | 'boost33'>('onepct');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const fetchComments = useCallback(async () => {
    if (!sectionId) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/comments?section=${sectionId}`);
      const data = await res.json();
      setComments(data);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, [sectionId]);

  useEffect(() => {
    if (isOpen && sectionId) {
      fetchComments();
    }
  }, [isOpen, sectionId, fetchComments]);

  async function handleResolve(id: string) {
    try {
      await fetch(`/api/comments/${id}`, { method: 'PATCH' });
      setComments(prev => prev.map(c => c.id === id ? { ...c, status: 'resolved' } : c));
    } catch {
      // silently fail
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim() || !sectionId) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section_id: sectionId, role, text }),
      });
      if (res.ok) {
        setText('');
        setRole('onepct');
        await fetchComments();
      }
    } catch {
      // silently fail
    } finally {
      setSubmitting(false);
    }
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  }

  return (
    <div className={`comment-sidebar${isOpen ? ' open' : ''}`}>
      <div className="comment-sidebar-head">
        <span className="comment-sidebar-title">Comments — {sectionLabel}</span>
        <button className="comment-sidebar-close" onClick={onClose} aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className="comment-list">
        {loading && <div className="comment-empty">Loading…</div>}
        {!loading && comments.length === 0 && (
          <div className="comment-empty">No comments yet. Be the first.</div>
        )}
        {!loading && comments.map(comment => (
          <div key={comment.id} className={`comment-item${comment.status === 'resolved' ? ' resolved' : ''}`}>
            <div className="comment-item-head">
              <span className={`comment-role-badge ${comment.role}`}>{comment.role === 'onepct' ? 'Onepct' : 'Boost33'}</span>
              <span className="comment-author">{comment.author}</span>
              <span className="comment-date">{formatDate(comment.created_at)}</span>
            </div>
            <div className="comment-text">{comment.text}</div>
            {comment.status === 'open' && (
              <button className="comment-resolve-btn" onClick={() => handleResolve(comment.id)}>
                Resolve
              </button>
            )}
          </div>
        ))}
      </div>

      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="comment-form-row">
          <select
            className="comment-select"
            value={role}
            onChange={e => setRole(e.target.value as 'onepct' | 'boost33')}
          >
            <option value="onepct">Onepct</option>
            <option value="boost33">Boost33</option>
          </select>
        </div>
        <textarea
          className="comment-textarea"
          placeholder="Write a comment…"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <button
          type="submit"
          className="comment-submit"
          disabled={submitting || !text.trim()}
        >
          {submitting ? 'Posting…' : 'Post comment'}
        </button>
      </form>
    </div>
  );
}
