'use client';

interface SectionProps {
  sectionId: string;
  commentCount: number;
  onOpenComments: () => void;
}

export default function Voice({ commentCount, onOpenComments }: SectionProps) {
  return (
    <div className="page-inner">
      <div className="page-eyebrow">Section 4 of 7</div>
      <h2 className="page-title">How you sound</h2>
      <p className="page-sub">The personality, tone, and language rules that define every piece of Boost33 content — with examples of what it looks like in practice.</p>
      <div className="page-divider" />

      <button
        className={`comment-btn${commentCount > 0 ? ' has-comments' : ''}`}
        onClick={onOpenComments}
      >
        {commentCount > 0 && <span className="comment-count">{commentCount}</span>}
        Comments
      </button>

      <div className="three-col" style={{ marginBottom: 14 }}>
        <div className="cb">
          <div className="cb-label">Personality 1</div>
          <div className="cb-body">
            <p style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Ambitious — fighter energy</p>
            <p>Not motivational-poster ambitious. The 8 Mile kind — built from the ground up, working toward a defining moment. Doesn&apos;t perform confidence. Earns it through delivery.</p>
            <p style={{ marginTop: 10, fontSize: 12, color: 'var(--green)', fontWeight: 600, fontStyle: 'italic' }}>&ldquo;We&apos;re not the first choice. We&apos;re not on stage. But we are the hard workers.&rdquo;</p>
          </div>
        </div>
        <div className="cb">
          <div className="cb-label">Personality 2</div>
          <div className="cb-body">
            <p style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Generous and direct</p>
            <p>Gives first, asks second. Leads with value and proof before asking for anything. Says exactly what it means — no corporate hedging, no weasel words that dilute the point.</p>
            <p style={{ marginTop: 10, fontSize: 12, color: 'var(--green)', fontWeight: 600, fontStyle: 'italic' }}>&ldquo;You don&apos;t have to pay. You just set up the business, and when you&apos;re ready, the deal is already there.&rdquo;</p>
          </div>
        </div>
        <div className="cb">
          <div className="cb-label">Personality 3</div>
          <div className="cb-body">
            <p style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Confident, not arrogant</p>
            <p>Confidence earned through delivery, not projected through ego. Boost33 doesn&apos;t need to put others down — results do the talking. The confidence is quiet and real.</p>
            <p style={{ marginTop: 10, fontSize: 12, color: 'var(--green)', fontWeight: 600, fontStyle: 'italic' }}>&ldquo;Bring results first. Show me the beef. And then I will consider you.&rdquo;</p>
          </div>
        </div>
      </div>

      <div className="cb" style={{ marginBottom: 14 }}>
        <div className="cb-label">Tone — where Boost33 sits on each axis</div>
        <div style={{ padding: '4px 0' }}>
          <div className="voice-row"><span className="v-lbl">Formal</span><div className="v-track"><div className="v-dot" style={{ left: '62%' }} /></div><span className="v-lbl r">Casual</span></div>
          <div className="voice-row"><span className="v-lbl">Bold</span><div className="v-track"><div className="v-dot" style={{ left: '18%' }} /></div><span className="v-lbl r">Reserved</span></div>
          <div className="voice-row"><span className="v-lbl">Technical</span><div className="v-track"><div className="v-dot" style={{ left: '72%' }} /></div><span className="v-lbl r">Accessible</span></div>
          <div className="voice-row"><span className="v-lbl">Serious</span><div className="v-track"><div className="v-dot" style={{ left: '30%' }} /></div><span className="v-lbl r">Playful</span></div>
        </div>
      </div>

      <div className="section-label">In practice — what the voice looks like on social</div>
      <div className="post-pair">
        <div className="post-mock do">
          <div className="post-head">
            <div className="post-brand">
              <div className="post-av green" />
              <span className="post-username">@boost33</span>
            </div>
            <span className="post-lbl">Do this</span>
          </div>
          <div className="post-body">
            We just built a complete marketing system for a hairdresser in Lyon.<br /><br />
            Before Boost33: 8 Google reviews.<br />
            8 weeks later: 47 Google reviews. Full appointment book.<br /><br />
            She didn&apos;t pay a cent until week 6 — when she could already see it working.<br /><br />
            <span className="post-highlight">That&apos;s the whole point.</span>
          </div>
        </div>
        <div className="post-mock dont">
          <div className="post-head">
            <div className="post-brand">
              <div className="post-av grey" />
              <span className="post-username">@example</span>
            </div>
            <span className="post-lbl">Not this</span>
          </div>
          <div className="post-body">
            Our industry-leading, AI-powered growth platform leverages cutting-edge digital transformation to 10x your business revenue through synergistic marketing automation and world-class acquisition funnels.<br /><br />
            🚀 Ready to crush it? Book your FREE strategy call today! 💰💰💰<br /><br />
            <span style={{ fontSize: 11, color: '#ccc' }}>[unsubstantiated claims · jargon · hype · emoji overload]</span>
          </div>
        </div>
      </div>

      <div className="section-label" style={{ marginTop: 4 }}>Founder voice — direct quotes from discovery</div>
      <div className="quote-block">&ldquo;You&apos;re in the right place to make money. That&apos;s it.&rdquo;<div className="quote-attr">— Dezys</div></div>
      <div className="quote-block">&ldquo;Bring results first. Show me the beef. And then I will consider you. Prove yourself — it&apos;s a universal rule.&rdquo;<div className="quote-attr">— Dezys, on Boost33&apos;s own operating philosophy</div></div>
      <div className="quote-block" style={{ marginBottom: 0 }}>&ldquo;You don&apos;t have to pay. You just set up the business, and when you&apos;re ready, the deal is already there for you.&rdquo;<div className="quote-attr">— Dezys</div></div>
    </div>
  );
}
