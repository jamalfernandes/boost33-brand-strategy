'use client';

import BlockActions from '@/components/BlockActions';

interface SectionProps {
  sectionId: string;
  commentCount: number;
  onOpenComments: () => void;
  acceptances: Record<string, boolean>;
  onAccept: (blockId: string, accepted: boolean) => void;
}

export default function Message({ sectionId, commentCount, onOpenComments, acceptances, onAccept }: SectionProps) {
  return (
    <div className="page-inner">
      <div className="page-eyebrow">Section 3 of 7</div>
      <h2 className="page-title">Your message</h2>
      <p className="page-sub">The message hierarchy behind every piece of Boost33 communication, from the core brand statement down to audience-specific language and proof.</p>
      <div className="page-divider" />

      <button
        className={`comment-btn${commentCount > 0 ? ' has-comments' : ''}`}
        onClick={onOpenComments}
      >
        {commentCount > 0 && <span className="comment-count">{commentCount}</span>}
        Comments
      </button>

      <div className="section-label">Message architecture</div>
      <div className="msg-house">
        <div className="mh-top">
          <div className="mh-tag">Core — every audience, every channel</div>
          <div className="mh-text">&ldquo;Boost33 gives local business owners a fully built growth system, free to start, and paid only when it works.&rdquo;</div>
        </div>
        <div className="mh-mid">
          <div className="mh-col">
            <div className="mh-col-tag">Primary — local SME owners</div>
            <div className="mh-col-lead">Lead with risk removal</div>
            <div className="mh-col-body">No upfront payment. No commitment before results. &ldquo;We build the whole system for you, for free. You see results first. Then we talk about payment. If it doesn&apos;t work, you&apos;ve lost nothing.&rdquo;</div>
          </div>
          <div className="mh-col">
            <div className="mh-col-tag">Secondary — B2B / consulting clients</div>
            <div className="mh-col-lead">Lead with infrastructure</div>
            <div className="mh-col-body">Pipeline and predictability. &ldquo;Boost33 builds the revenue operations infrastructure that turns your pipeline into predictable, scalable revenue.&rdquo; Completely different register from the SME message.</div>
          </div>
        </div>
        <div className="mh-base">
          <div className="mh-base-tag">Foundation — proof points</div>
          <div className="mh-base-body">Real results already on record: one client <strong>7x sales performance in 12 months</strong>. Another <strong>3x more leads in their pipeline</strong>. Format: &ldquo;[Business type] got [measurable result] in [timeframe].&rdquo; More stories are captured as the trial cohort scales. These are the numbers that go into paid ad creative in September.</div>
        </div>
      </div>
      <div className="block-actions-row">
        <BlockActions blockId="msg-house" sectionId={sectionId} accepted={acceptances['msg-house'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className={`cb${acceptances['msg-primary'] ? ' block-accepted' : ''}`} style={{ marginBottom: 14 }}>
        <div className="cb-label">Primary audience — what to say and how to say it</div>
        <div className="cb-body">
          <p><strong>Name the pain before offering the solution.</strong> &ldquo;You&apos;re invisible to customers searching online right now. Competitors with a system are already winning the same pool of customers, without you even knowing you lost them.&rdquo; Urgency from reality, not pressure.</p>
          <p><strong>Remove risk before asking for anything.</strong> The business model is the message. Lead with what they don&apos;t have to do: no upfront payment, no long-term contract, no risk. Then explain what Boost33 does.</p>
          <p><strong>Language that works:</strong> Plain, direct, zero jargon. Outcomes only: more customers, more reviews, more revenue. No &ldquo;RevOps&rdquo;, &ldquo;funnels&rdquo;, &ldquo;growth stack&rdquo;, or &ldquo;automated workflows.&rdquo; These are business owners, not marketers.</p>
        </div>
        <BlockActions blockId="msg-primary" sectionId={sectionId} accepted={acceptances['msg-primary'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className={`cb${acceptances['msg-secondary'] ? ' block-accepted' : ''}`}>
        <div className="cb-label">Secondary audience — B2B and consulting clients</div>
        <div className="cb-body">
          <p><strong>Completely different register.</strong> This audience has pipeline but revenue operations held together manually. They respond to specificity, process language, and outcomes measured in pipeline velocity and conversion rate.</p>
          <p><strong>Language that works:</strong> RevOps, CRM, pipeline, conversion rate, scalable infrastructure. Long-form (LinkedIn articles, newsletter), frameworks, data. This is the opposite of the local SME voice. The two audiences should never see each other&apos;s messaging.</p>
        </div>
        <BlockActions blockId="msg-secondary" sectionId={sectionId} accepted={acceptances['msg-secondary'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>
    </div>
  );
}
