'use client';

import BlockActions from '@/components/BlockActions';

interface SectionProps {
  sectionId: string;
  commentCount: number;
  onOpenComments: () => void;
  acceptances: Record<string, boolean>;
  onAccept: (blockId: string, accepted: boolean) => void;
}

export default function ContentStrategy({ sectionId, commentCount, onOpenComments, acceptances, onAccept }: SectionProps) {
  return (
    <div className="page-inner">
      <div className="page-eyebrow">Section 5 of 8</div>
      <h2 className="page-title">Content strategy</h2>
      <p className="page-sub">Five pillars that every piece of Boost33 content maps to: the audience need each one addresses, the formats that work, and an example angle.</p>
      <div className="page-divider" />

      <button
        className={`comment-btn${commentCount > 0 ? ' has-comments' : ''}`}
        onClick={onOpenComments}
      >
        {commentCount > 0 && <span className="comment-count">{commentCount}</span>}
        Comments
      </button>

      <div className={`cb hero${acceptances['content-rule'] ? ' block-accepted' : ''}`} style={{ marginBottom: 16 }}>
        <div className="cb-label">The rule</div>
        <div className="cb-body" style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500, lineHeight: 1.6 }}>Every post, video, email, and article maps to one of the five pillars below. Content that doesn&apos;t fit isn&apos;t produced. Pillars build topical authority over time. Spreading thin across unrelated topics destroys it.</div>
        <BlockActions blockId="content-rule" sectionId={sectionId} accepted={acceptances['content-rule'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="five-col" style={{ marginBottom: 14 }}>
        <div className={`pv2${acceptances['content-p1'] ? ' block-accepted' : ''}`}>
          <div className="pv2-num">Pillar 01</div>
          <div className="pv2-name">Grow Before You Pay</div>
          <div className="pv2-need">Directly addresses the primary objection: risk aversion after bad agency experiences. Proof that the model works before asking for anything.</div>
          <div className="pv2-fmts">
            <span className="fmt">Case study</span>
            <span className="fmt">Results post</span>
            <span className="fmt">Trial BTS</span>
          </div>
          <div className="pv2-eg">A hairdresser in Lyon went from 8 to 47 reviews in 8 weeks. She didn&apos;t pay until week 6, when she could already see it working.</div>
          <BlockActions blockId="content-p1" sectionId={sectionId} accepted={acceptances['content-p1'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`pv2${acceptances['content-p2'] ? ' block-accepted' : ''}`}>
          <div className="pv2-num">Pillar 02</div>
          <div className="pv2-name">Local Business Growth</div>
          <div className="pv2-need">Practical, tactical content for local owners. Useful on its own terms. Builds trust and positions Boost33 as the expert long before a prospect is ready to try the product.</div>
          <div className="pv2-fmts">
            <span className="fmt">How-to</span>
            <span className="fmt">Quick tips</span>
            <span className="fmt">Data insight</span>
          </div>
          <div className="pv2-eg">How to get 10 new Google reviews in 30 days without paying for ads.</div>
          <BlockActions blockId="content-p2" sectionId={sectionId} accepted={acceptances['content-p2'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`pv2${acceptances['content-p3'] ? ' block-accepted' : ''}`}>
          <div className="pv2-num">Pillar 03</div>
          <div className="pv2-name">The Ambitious Owner</div>
          <div className="pv2-need">Identity content for owners who are building something, not just running a shop. Attracts the right customer by reflecting their self-image and aspiration.</div>
          <div className="pv2-fmts">
            <span className="fmt">Founder story</span>
            <span className="fmt">Mindset</span>
            <span className="fmt">Motivation</span>
          </div>
          <div className="pv2-eg">You&apos;re not in the hairdressing business. You&apos;re building a brand. The cut is just the door in.</div>
          <BlockActions blockId="content-p3" sectionId={sectionId} accepted={acceptances['content-p3'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`pv2${acceptances['content-p4'] ? ' block-accepted' : ''}`}>
          <div className="pv2-num">Pillar 04</div>
          <div className="pv2-name">Systems Over People</div>
          <div className="pv2-need">Why depending on individual effort keeps a business stuck at the same size. Introduces automated systems as the path to growth without burnout. Maps to Dezys&apos;s own frustration confirmed in discovery.</div>
          <div className="pv2-fmts">
            <span className="fmt">Framework</span>
            <span className="fmt">Before/after</span>
            <span className="fmt">Explainer</span>
          </div>
          <div className="pv2-eg">Your best employee will leave. Your system won&apos;t. Build the business so it grows whether you&apos;re there or not.</div>
          <BlockActions blockId="content-p4" sectionId={sectionId} accepted={acceptances['content-p4'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`pv2${acceptances['content-p5'] ? ' block-accepted' : ''}`}>
          <div className="pv2-num">Pillar 05</div>
          <div className="pv2-name">Data Is Your Asset</div>
          <div className="pv2-need">Introduces Boost33&apos;s data differentiation story gradually. A long-term content play that becomes more powerful as AI commoditises individual tools and the proprietary data layer becomes the obvious moat.</div>
          <div className="pv2-fmts">
            <span className="fmt">Education</span>
            <span className="fmt">Long-form</span>
            <span className="fmt">Data story</span>
          </div>
          <div className="pv2-eg">Every customer who visits your shop is data you&apos;re throwing away. Here&apos;s what a business that captures it looks like in 12 months.</div>
          <BlockActions blockId="content-p5" sectionId={sectionId} accepted={acceptances['content-p5'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>

      <div className={`cb${acceptances['content-approval'] ? ' block-accepted' : ''}`}>
        <div className="cb-label">Content review and approval</div>
        <div className="cb-body">
          <p><strong>Standard organic content (Instagram, LinkedIn):</strong> Reviewed by Jamal + Paulina with a 1–2 day turnaround. Blog articles additionally reviewed by Eden. After 30 days of established trust in the content system, a &ldquo;no response in 24h = approved&rdquo; rule for regular organic posts will be proposed to keep things moving.</p>
          <p><strong>High-stakes content (paid ad launches, product announcements):</strong> Goes to Dezys directly before publish. Separate track, longer lead time required. Flag in advance.</p>
        </div>
        <BlockActions blockId="content-approval" sectionId={sectionId} accepted={acceptances['content-approval'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>
    </div>
  );
}
