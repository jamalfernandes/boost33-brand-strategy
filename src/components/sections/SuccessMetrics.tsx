'use client';

import BlockActions from '@/components/BlockActions';

interface SectionProps {
  sectionId: string;
  commentCount: number;
  onOpenComments: () => void;
  acceptances: Record<string, boolean>;
  onAccept: (blockId: string, accepted: boolean) => void;
}

export default function SuccessMetrics({ sectionId, commentCount, onOpenComments, acceptances, onAccept }: SectionProps) {
  return (
    <div className="page-inner">
      <div className="page-eyebrow">Section 8 of 8</div>
      <h2 className="page-title">What success looks like</h2>
      <p className="page-sub">The north star target, three sets of key results by phase, and how to tell whether the strategy is on track before the lagging numbers come in.</p>
      <div className="page-divider" />

      <button
        className={`comment-btn${commentCount > 0 ? ' has-comments' : ''}`}
        onClick={onOpenComments}
      >
        {commentCount > 0 && <span className="comment-count">{commentCount}</span>}
        Comments
      </button>

      <div className={`cb hero${acceptances['suc-north-star'] ? ' block-accepted' : ''}`} style={{ marginBottom: 16 }}>
        <div className="cb-label">North-star metric</div>
        <div className="cb-body big">100 validated free account registrations per day, operational by September 2026.</div>
        <BlockActions blockId="suc-north-star" sectionId={sectionId} accepted={acceptances['suc-north-star'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="section-label">Objectives and key results by phase</div>

      <div className={`okr${acceptances['suc-okr-may'] ? ' block-accepted' : ''}`}>
        <div className="okr-head">
          <span className="okr-period p1">May 2026</span>
          <div className="okr-obj">Install the system: content live, brand identity confirmed, owned channels rebuilt on a compliant foundation.</div>
        </div>
        <div className="okr-krs">
          <div className="kr"><span className="kr-n">KR 1</span><span>Brand strategy finalised and signed off by the Boost33 team.</span></div>
          <div className="kr"><span className="kr-n">KR 2</span><span>Instagram content SOP written and posting live at 3–4× per week, on-strategy, not ad hoc.</span></div>
          <div className="kr"><span className="kr-n">KR 3</span><span>GDPR-compliant email opt-in mechanism built and live on website.</span></div>
          <div className="kr"><span className="kr-n">KR 4</span><span>Website brief delivered and priority fixes underway.</span></div>
        </div>
        <BlockActions blockId="suc-okr-may" sectionId={sectionId} accepted={acceptances['suc-okr-may'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className={`okr${acceptances['suc-okr-june'] ? ' block-accepted' : ''}`}>
        <div className="okr-head">
          <span className="okr-period p2">June – July 2026</span>
          <div className="okr-obj">Prove the model: first trial clients through the funnel, results captured, TikTok live and producing data.</div>
        </div>
        <div className="okr-krs">
          <div className="kr"><span className="kr-n">KR 1</span><span>First cohort of local businesses through the free trial funnel, minimum 3–5 clients onboarded.</span></div>
          <div className="kr"><span className="kr-n">KR 2</span><span><strong>2–3 verified results stories</strong> formatted and ready to use as social proof and paid ad creative.</span></div>
          <div className="kr"><span className="kr-n">KR 3</span><span>TikTok channel live with initial 5-video test. Format established, performance data collected.</span></div>
          <div className="kr"><span className="kr-n">KR 4</span><span>Referral system design complete and operationally ready to activate.</span></div>
        </div>
        <BlockActions blockId="suc-okr-june" sectionId={sectionId} accepted={acceptances['suc-okr-june'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className={`okr${acceptances['suc-okr-sept'] ? ' block-accepted' : ''}`} style={{ marginBottom: 16 }}>
        <div className="okr-head">
          <span className="okr-period p3">September 2026</span>
          <div className="okr-obj">Scale: paid ads live, tracking toward 100 daily registrations, all organic channels established and consistent.</div>
        </div>
        <div className="okr-krs">
          <div className="kr"><span className="kr-n">KR 1</span><span>Paid Instagram + Google Ads campaigns live, targeting the confirmed ICP with results-led creative.</span></div>
          <div className="kr"><span className="kr-n">KR 2</span><span><strong>100 validated free account registrations per day</strong>, actively scaling toward this number post-launch.</span></div>
          <div className="kr"><span className="kr-n">KR 3</span><span>TikTok channel consistent at established cadence with proven, repeatable format.</span></div>
          <div className="kr"><span className="kr-n">KR 4</span><span>Email list rebuilt, sending weekly, and generating inbound leads from the owned audience.</span></div>
        </div>
        <BlockActions blockId="suc-okr-sept" sectionId={sectionId} accepted={acceptances['suc-okr-sept'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="section-label">How to tell if you&apos;re on track</div>
      <div className="ind-grid">
        <div className="ind-col">
          <div className="ind-head lead">Leading indicators: inputs you control</div>
          <div className="ind-item"><strong>Content pieces published / week</strong>Measures system health and consistency, the fuel for everything downstream. If this drops, everything else drops with it.</div>
          <div className="ind-item"><strong>Trial clients onboarded</strong>Leading signal for future conversions. No trials means no testimonials means no paid ads with proof.</div>
          <div className="ind-item"><strong>Review requests sent</strong>Directly drives Google review velocity, one of the fastest, most visible proof points to collect during the trial.</div>
          <div className="ind-item"><strong>GDPR opt-ins collected / week</strong>Measures email list rebuild progress. The list needs to exist and grow before email becomes a conversion channel.</div>
        </div>
        <div className="ind-col">
          <div className="ind-head lag">Lagging indicators: results they produce</div>
          <div className="ind-item"><strong>Free account registrations / day</strong>The north-star metric, produced by all upstream inputs working together at scale. Meaningless to chase before the inputs are in place.</div>
          <div className="ind-item"><strong>Trial-to-paid conversion rate</strong>Measures product/market fit. If trials are converting, the model is working. If not, the value delivered during trials needs reviewing.</div>
          <div className="ind-item"><strong>Organic reach (Instagram + TikTok)</strong>Measures audience growth, the warm audience that paid ads will retarget in September. Needs to be built before September, not at September.</div>
          <div className="ind-item"><strong>Referral-sourced leads</strong>The highest-quality signal: means results are real enough that clients actively tell other business owners. Aim to track from Month 2 onward.</div>
        </div>
      </div>
      <div className="block-actions-row">
        <BlockActions blockId="suc-indicators" sectionId={sectionId} accepted={acceptances['suc-indicators'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className={`cb${acceptances['suc-why'] ? ' block-accepted' : ''}`} style={{ marginTop: 4 }}>
        <div className="cb-label">Why September, and why the work before it matters</div>
        <div className="cb-body">
          <p>The May bank holiday period in France is a natural slow period for paid reach, which is why the organic build comes first. Phases 1 and 2 (May–August) are about creating the conditions for paid scale to work: a stable content system, a proven product, real client results as proof, and a warm audience on Instagram and TikTok that paid creative can retarget.</p>
          <p>Arriving at September with organic momentum already built means paid ads launch into a warm environment rather than a cold start. The TikTok and Instagram work between now and September is not a placeholder. It&apos;s the foundation the September campaign depends on.</p>
        </div>
        <BlockActions blockId="suc-why" sectionId={sectionId} accepted={acceptances['suc-why'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>
    </div>
  );
}
