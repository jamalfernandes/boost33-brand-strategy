'use client';

import BlockActions from '@/components/BlockActions';

interface SectionProps {
  sectionId: string;
  commentCount: number;
  onOpenComments: () => void;
  acceptances: Record<string, boolean>;
  onAccept: (blockId: string, accepted: boolean) => void;
}

export default function Voice({ sectionId, commentCount, onOpenComments, acceptances, onAccept }: SectionProps) {
  return (
    <div className="page-inner">
      <div className="page-eyebrow">Section 4 of 8</div>
      <h2 className="page-title">How you sound</h2>
      <p className="page-sub">The personality, tone, and language rules behind every piece of Boost33 content, with examples of what it looks like in practice.</p>
      <div className="page-divider" />

      <button
        className={`comment-btn${commentCount > 0 ? ' has-comments' : ''}`}
        onClick={onOpenComments}
      >
        {commentCount > 0 && <span className="comment-count">{commentCount}</span>}
        Comments
      </button>

      <div className="three-col" style={{ marginBottom: 14 }}>
        <div className={`cb${acceptances['voice-p1'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Personality 1</div>
          <div className="cb-body">
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Ambitious. Fighter energy.</p>
            <p>Not motivational-poster ambitious. The 8 Mile kind: built from the ground up, working toward a defining moment. Doesn&apos;t perform confidence. Earns it through delivery.</p>
            <p style={{ marginTop: 10, fontSize: 12, color: 'var(--accent)', fontWeight: 600, fontStyle: 'italic' }}>&ldquo;We&apos;re not the first choice. We&apos;re not on stage. But we are the hard workers.&rdquo;</p>
          </div>
          <BlockActions blockId="voice-p1" sectionId={sectionId} accepted={acceptances['voice-p1'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`cb${acceptances['voice-p2'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Personality 2</div>
          <div className="cb-body">
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Generous and direct</p>
            <p>Gives first, asks second. Leads with value and proof before asking for anything. Says exactly what it means. No corporate hedging, no weasel words.</p>
            <p style={{ marginTop: 10, fontSize: 12, color: 'var(--accent)', fontWeight: 600, fontStyle: 'italic' }}>&ldquo;You don&apos;t have to pay. You just set up the business, and when you&apos;re ready, the deal is already there.&rdquo;</p>
          </div>
          <BlockActions blockId="voice-p2" sectionId={sectionId} accepted={acceptances['voice-p2'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`cb${acceptances['voice-p3'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Personality 3</div>
          <div className="cb-body">
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>Confident, not arrogant</p>
            <p>Confidence earned through delivery, not projected through ego. Boost33 doesn&apos;t need to put others down. Results do the talking. The confidence is quiet and real.</p>
            <p style={{ marginTop: 10, fontSize: 12, color: 'var(--accent)', fontWeight: 600, fontStyle: 'italic' }}>&ldquo;Bring results first. Show me the beef. And then I will consider you.&rdquo;</p>
          </div>
          <BlockActions blockId="voice-p3" sectionId={sectionId} accepted={acceptances['voice-p3'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>

      <div className={`cb${acceptances['voice-tone'] ? ' block-accepted' : ''}`} style={{ marginBottom: 14 }}>
        <div className="cb-label">Tone — where Boost33 sits on each axis</div>
        <div style={{ padding: '4px 0' }}>
          <div className="voice-row"><span className="v-lbl">Formal</span><div className="v-track"><div className="v-dot" style={{ left: '62%' }} /></div><span className="v-lbl r">Casual</span></div>
          <div className="voice-row"><span className="v-lbl">Bold</span><div className="v-track"><div className="v-dot" style={{ left: '18%' }} /></div><span className="v-lbl r">Reserved</span></div>
          <div className="voice-row"><span className="v-lbl">Technical</span><div className="v-track"><div className="v-dot" style={{ left: '72%' }} /></div><span className="v-lbl r">Accessible</span></div>
          <div className="voice-row"><span className="v-lbl">Serious</span><div className="v-track"><div className="v-dot" style={{ left: '30%' }} /></div><span className="v-lbl r">Playful</span></div>
        </div>
        <BlockActions blockId="voice-tone" sectionId={sectionId} accepted={acceptances['voice-tone'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
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
            One of our clients just hit 7x on sales performance.<br /><br />
            12 months ago: no system, no pipeline visibility, no way to track where customers were coming from.<br /><br />
            Today: the whole thing runs. Leads captured. Follow-up automated. Reviews building.<br /><br />
            He didn&apos;t pay until he could already see it working.<br /><br />
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
      <div className="block-actions-row">
        <BlockActions blockId="voice-examples" sectionId={sectionId} accepted={acceptances['voice-examples'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="section-label" style={{ marginTop: 4 }}>Founder voice — direct quotes from discovery</div>
      <div className="three-col" style={{ marginBottom: 0 }}>
        <div className="quote-block" style={{ marginBottom: 0 }}>&ldquo;You&apos;re in the right place to make money. That&apos;s it.&rdquo;<div className="quote-attr">— Dezys</div></div>
        <div className="quote-block" style={{ marginBottom: 0 }}>&ldquo;Bring results first. Show me the beef. And then I will consider you. Prove yourself — it&apos;s a universal rule.&rdquo;<div className="quote-attr">— Dezys, on Boost33&apos;s own operating philosophy</div></div>
        <div className="quote-block" style={{ marginBottom: 0 }}>&ldquo;You don&apos;t have to pay. You just set up the business, and when you&apos;re ready, the deal is already there for you.&rdquo;<div className="quote-attr">— Dezys</div></div>
      </div>
    </div>
  );
}
