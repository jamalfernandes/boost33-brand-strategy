'use client';

import BlockActions from '@/components/BlockActions';

interface SectionProps {
  sectionId: string;
  commentCount: number;
  onOpenComments: () => void;
  acceptances: Record<string, boolean>;
  onAccept: (blockId: string, accepted: boolean) => void;
}

export default function ChannelPlan({ sectionId, commentCount, onOpenComments, acceptances, onAccept }: SectionProps) {
  return (
    <div className="page-inner">
      <div className="page-eyebrow">Section 6 of 8</div>
      <h2 className="page-title">Channel plan</h2>
      <p className="page-sub">Where Boost33 shows up, which role each channel plays in the funnel, and how the build sequences from organic to paid scale.</p>
      <div className="page-divider" />

      <button
        className={`comment-btn${commentCount > 0 ? ' has-comments' : ''}`}
        onClick={onOpenComments}
      >
        {commentCount > 0 && <span className="comment-count">{commentCount}</span>}
        Comments
      </button>

      <div className="section-label">Three-phase build to September</div>
      <div className="phase-map">
        <div className="ph now">
          <div className="ph-label">Phase 1 · Now – May</div>
          <div className="ph-ch">Instagram (strategy + SOP live)</div>
          <div className="ph-ch">LinkedIn + Newsletter</div>
          <div className="ph-ch">Email (list rebuild begins)</div>
        </div>
        <div className="ph">
          <div className="ph-label">Phase 2 · June – August</div>
          <div className="ph-ch">TikTok (test and establish)</div>
          <div className="ph-ch">Instagram (volume increase)</div>
          <div className="ph-ch">Email (list active + sending)</div>
        </div>
        <div className="ph">
          <div className="ph-label">Phase 3 · September</div>
          <div className="ph-ch">Paid Instagram ads (scale)</div>
          <div className="ph-ch">Google Ads (scale)</div>
          <div className="ph-ch">All organic continues</div>
        </div>
      </div>
      <div className="block-actions-row">
        <BlockActions blockId="ch-phase-map" sectionId={sectionId} accepted={acceptances['ch-phase-map'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="section-label">Channels by role in the funnel</div>

      <div className="f-group">
        <div className="f-label">Awareness: reach cold audiences who don&apos;t know Boost33 yet</div>
        <div className={`ch-card${acceptances['ch-tiktok'] ? ' block-accepted' : ''}`}>
          <div className="ch-card-top">
            <div className="ch-card-name">TikTok</div>
            <span className="phase-pill p2">June / July</span>
          </div>
          <div className="ch-card-grid">
            <div>
              <div className="ch-col-lbl">Why this channel</div>
              <div className="ch-col-body">Demand creation for the local SME audience. Reaches cold audiences who don&apos;t yet know Boost33. AI-assisted video production makes it scalable without a full video team. Content system and brand identity must be stable first. June/July start confirmed.</div>
            </div>
            <div>
              <div className="ch-col-lbl">What gets published</div>
              <div className="ch-col-body">AI-assisted short-form video: the prove-it-first model in 60 seconds, local business growth tips, results stories. Test 5 videos before committing to a cadence. Performance data informs the September paid creative.</div>
            </div>
          </div>
          <BlockActions blockId="ch-tiktok" sectionId={sectionId} accepted={acceptances['ch-tiktok'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`ch-card${acceptances['ch-paid'] ? ' block-accepted' : ''}`}>
          <div className="ch-card-top">
            <div className="ch-card-name">Paid Ads — Instagram + Google</div>
            <span className="phase-pill p3">September</span>
          </div>
          <div className="ch-card-grid">
            <div>
              <div className="ch-col-lbl">Why this channel</div>
              <div className="ch-col-body">Scale phase, reaching local SMEs at volume. The organic build and TikTok data collected in Phases 1–2 directly inform the creative and targeting at launch. Arriving with warm audiences already built means paid ads launch into signal, not noise.</div>
            </div>
            <div>
              <div className="ch-col-lbl">What gets published</div>
              <div className="ch-col-body">Free growth audit as lead magnet. Results-led creative: real client stories from the trial cohort. &ldquo;See what your competitor is doing that you&apos;re not.&rdquo; Retargeting against Instagram and website audiences built throughout Phases 1–2.</div>
            </div>
          </div>
          <BlockActions blockId="ch-paid" sectionId={sectionId} accepted={acceptances['ch-paid'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>

      <div className="f-group">
        <div className="f-label">Consideration: build trust with warm audiences</div>
        <div className={`ch-card${acceptances['ch-instagram'] ? ' block-accepted' : ''}`}>
          <div className="ch-card-top">
            <div className="ch-card-name">Instagram</div>
            <span className="phase-pill p1">Now</span>
          </div>
          <div className="ch-card-grid">
            <div>
              <div className="ch-col-lbl">Why this channel</div>
              <div className="ch-col-body">Primary visual channel for local business owners. Existing presence. Phase 1 focus is installing strategy and SOPs before increasing volume. 3–4× per week once the SOP is live.</div>
            </div>
            <div>
              <div className="ch-col-lbl">What gets published</div>
              <div className="ch-col-body">Results posts, local business growth tips, founder and team content, behind-the-scenes of the trial process. Pillars 01 and 02 primarily.</div>
            </div>
          </div>
          <BlockActions blockId="ch-instagram" sectionId={sectionId} accepted={acceptances['ch-instagram'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`ch-card${acceptances['ch-linkedin'] ? ' block-accepted' : ''}`}>
          <div className="ch-card-top">
            <div className="ch-card-name">LinkedIn + LinkedIn Newsletter</div>
            <span className="phase-pill p1">Now</span>
          </div>
          <div className="ch-card-grid">
            <div>
              <div className="ch-col-lbl">Why this channel</div>
              <div className="ch-col-body">B2B and consulting segment only. The SaaS ICP is not on LinkedIn. Kept active for thought leadership aimed at the Elite/Premium consulting segment and for personal brand building. 3–5× per week. Newsletter publishes weekly for push notification reach.</div>
            </div>
            <div>
              <div className="ch-col-lbl">What gets published</div>
              <div className="ch-col-body">RevOps frameworks, founder insights, consultancy case studies. Pillars 03 and 04 adapted for B2B language and register. Completely different tone and vocabulary from the SME-facing content.</div>
            </div>
          </div>
          <BlockActions blockId="ch-linkedin" sectionId={sectionId} accepted={acceptances['ch-linkedin'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>

      <div className="f-group">
        <div className="f-label">Conversion: owned channels, highest intent</div>
        <div className={`ch-card${acceptances['ch-email'] ? ' block-accepted' : ''}`}>
          <div className="ch-card-top">
            <div className="ch-card-name">Email</div>
            <span className="phase-pill p1">Now, list rebuild</span>
          </div>
          <div className="ch-card-grid">
            <div>
              <div className="ch-col-lbl">Why this channel</div>
              <div className="ch-col-body">Highest conversion intent of any owned channel. The existing ~300 contact list is not GDPR-compliant (no explicit opt-in) and cannot be used as-is. It must be rebuilt from scratch via a compliant mechanism before activation. 1× per week once live.</div>
            </div>
            <div>
              <div className="ch-col-lbl">What gets published</div>
              <div className="ch-col-body">Weekly digest: one results story + one growth insight + one CTA. GDPR-compliant opt-in mechanism to be built as a Phase 1 deliverable and wired to the website and all inbound flows.</div>
            </div>
          </div>
          <BlockActions blockId="ch-email" sectionId={sectionId} accepted={acceptances['ch-email'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>

      <div className={`cb${acceptances['ch-paid-note'] ? ' block-accepted' : ''}`}>
        <div className="cb-label">On paid media before September</div>
        <div className="cb-body">No paid budget is confirmed for Phases 1–2. Paid media requires further research before a proposal is made. The organic-first strategy, with TikTok as the primary reach mechanism before September, is the confirmed approach. If a pre-September test budget becomes available, the recommendation will be to boost 1–2 top-performing organic posts per week on Instagram to start building audience and creative data ahead of the September scale launch.</div>
        <BlockActions blockId="ch-paid-note" sectionId={sectionId} accepted={acceptances['ch-paid-note'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>
    </div>
  );
}
