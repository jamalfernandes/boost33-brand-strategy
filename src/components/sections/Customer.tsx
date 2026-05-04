'use client';

import BlockActions from '@/components/BlockActions';

interface SectionProps {
  sectionId: string;
  commentCount: number;
  onOpenComments: () => void;
  acceptances: Record<string, boolean>;
  onAccept: (blockId: string, accepted: boolean) => void;
}

export default function Customer({ sectionId, commentCount, onOpenComments, acceptances, onAccept }: SectionProps) {
  return (
    <div className="page-inner">
      <div className="page-eyebrow">Section 2 of 7</div>
      <h2 className="page-title">Your customer</h2>
      <p className="page-sub">Who the primary customer is, where they are today, what finally makes them act, and who Boost33 is not built for.</p>
      <div className="page-divider" />

      <button
        className={`comment-btn${commentCount > 0 ? ' has-comments' : ''}`}
        onClick={onOpenComments}
      >
        {commentCount > 0 && <span className="comment-count">{commentCount}</span>}
        Comments
      </button>

      <div className={`persona-hd${acceptances['cus-persona'] ? ' block-accepted' : ''}`}>
        <div className="persona-name">The Ambitious Owner-Operator</div>
        <div className="persona-role">Primary customer — local service business, globally</div>
        <div className="persona-chips">
          <div className="p-chip"><strong>Revenue:</strong> €1K – €1M/yr</div>
          <div className="p-chip"><strong>Geography:</strong> Global</div>
          <div className="p-chip"><strong>Business type:</strong> Local services</div>
          <div className="p-chip"><strong>Team size:</strong> Solo or small</div>
          <div className="p-chip"><strong>Decision maker:</strong> Always the owner</div>
          <div className="p-chip"><strong>Industry:</strong> No restrictions</div>
        </div>
        <div className="persona-quote">&ldquo;Something needs to change — but I&apos;m not paying someone else to figure it out again.&rdquo;</div>
        <BlockActions blockId="cus-persona" sectionId={sectionId} accepted={acceptances['cus-persona'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="section-label">Their reality today</div>
      <div className="three-col" style={{ marginBottom: 14 }}>
        <div className={`cb${acceptances['cus-tools'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">What they have</div>
          <div className="cb-body">WhatsApp for customer messages. A Google Business Profile (often unclaimed). A basic website. Occasional Instagram posts with no strategy. Their payment terminal used as an analytics tool. Excel or their accounting software as a makeshift CRM. No all-in-one platform, no clear view of sales and growth. Overwhelmed by admin.</div>
          <BlockActions blockId="cus-tools" sectionId={sectionId} accepted={acceptances['cus-tools'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`cb${acceptances['cus-missing'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">What&apos;s missing</div>
          <div className="cb-body">No system to reliably generate new customers. No way to capture leads before they walk out. No follow-up after service. No review strategy. Nothing compounds. Only manual effort, and it stops when they do.</div>
          <BlockActions blockId="cus-missing" sectionId={sectionId} accepted={acceptances['cus-missing'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`cb${acceptances['cus-frustration'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Their frustration</div>
          <div className="cb-body">Most have paid an agency or freelancer. They got activity (posts, reports, calls) but no new customers. Still know something has to change, but they need proof before they trust anyone again.</div>
          <BlockActions blockId="cus-frustration" sectionId={sectionId} accepted={acceptances['cus-frustration'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>

      <div className="section-label">What triggers them to finally look for help</div>
      <div className="step-flow" style={{ marginBottom: 14 }}>
        <div className="step">
          <div className="step-n">Trigger 1</div>
          <div className="step-t">A slow month</div>
          <div className="step-d">Revenue dipped. Word-of-mouth wasn&apos;t enough. No reliable way to generate customers on demand.</div>
        </div>
        <div className="step">
          <div className="step-n">Trigger 2</div>
          <div className="step-t">A competitor pulling ahead</div>
          <div className="step-d">A rival getting more Google reviews, ranking higher, appearing busier. The gap feels urgent now.</div>
        </div>
        <div className="step">
          <div className="step-n">Trigger 3</div>
          <div className="step-t">A bad agency experience</div>
          <div className="step-d">Paid for marketing, got activity, no customers. Still knows they can&apos;t keep doing nothing.</div>
        </div>
        <div className="step">
          <div className="step-n">Trigger 4</div>
          <div className="step-t">Leaving money on the table</div>
          <div className="step-d">They realize existing customers aren&apos;t coming back as often as they should. New customers aren&apos;t being captured. They understand there&apos;s more revenue available, they just don&apos;t have a system to get it.</div>
        </div>
        <div className="step hl">
          <div className="step-n">Best lead</div>
          <div className="step-t">A referral</div>
          <div className="step-d">Another owner tells them about results they&apos;ve seen. Arrives pre-sold. The model to actively build toward.</div>
        </div>
      </div>
      <div className="block-actions-row">
        <BlockActions blockId="cus-triggers" sectionId={sectionId} accepted={acceptances['cus-triggers'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="two-col">
        <div className={`cb${acceptances['cus-good-fit'] ? ' block-accepted' : ''}`} style={{ borderColor: 'var(--accent-border)' }}>
          <div className="cb-label" style={{ color: 'var(--accent)' }}>Good fit — primary ICP</div>
          <div className="cb-body">
            <p>Any local, owner-operated service business: bakeries, hairdressers, plumbers, restaurants, physiotherapists, cleaners. Revenue €1K–€1M. Owner makes all decisions. Serves local customers in person.</p>
            <p>No industry restrictions at this stage. Research will identify which verticals to prioritise first, but no category is excluded from the ICP.</p>
          </div>
          <BlockActions blockId="cus-good-fit" sectionId={sectionId} accepted={acceptances['cus-good-fit'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`cb${acceptances['cus-not-fit'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Not a fit — for the SaaS product</div>
          <div className="cb-body">
            <p>Large B2B IT companies, innovation firms, and national service businesses belong to the Elite/Premium consulting segment and are served separately via LinkedIn and high-touch relationship management.</p>
            <p>E-commerce and digitally native businesses don&apos;t need a from-scratch local growth system. Different product, different conversation.</p>
          </div>
          <BlockActions blockId="cus-not-fit" sectionId={sectionId} accepted={acceptances['cus-not-fit'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>
    </div>
  );
}
