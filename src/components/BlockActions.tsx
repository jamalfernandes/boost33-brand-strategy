'use client';

import { useState } from 'react';

interface BlockActionsProps {
  blockId: string;
  sectionId: string;
  accepted: boolean;
  onAccept: (blockId: string, accepted: boolean) => void;
  onSuggest: () => void;
}

export default function BlockActions({ blockId, sectionId, accepted, onAccept, onSuggest }: BlockActionsProps) {
  const [loading, setLoading] = useState(false);

  async function handleAccept() {
    setLoading(true);
    try {
      await fetch('/api/acceptances', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ block_id: blockId, section_id: sectionId, accepted: !accepted }),
      });
      onAccept(blockId, !accepted);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="block-actions">
      <button
        className={`ba-btn ba-accept${accepted ? ' accepted' : ''}`}
        onClick={handleAccept}
        disabled={loading}
      >
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {accepted ? 'Accepted' : 'Accept'}
      </button>
      <button className="ba-btn ba-suggest" onClick={onSuggest}>
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
          <path d="M7.5 2.5l2 2-5 5H2.5v-2l5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Suggest change
      </button>
    </div>
  );
}
