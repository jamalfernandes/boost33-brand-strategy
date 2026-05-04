'use client';

export default function OverviewView() {
  return (
    <div className="overview">
      <div className="ov-hero">
        <div className="ov-hero-eyebrow">Brand Strategy · Prepared by Onepct</div>
        <div className="ov-hero-statement">
          Boost33 is a <em>local business growth system</em>. Fully built for you, free to start, and paid only when it works.
        </div>
        <div className="ov-hero-meta">
          <span>May 2026</span>
          <div className="ov-hero-meta-dot" />
          <span>Confidential</span>
          <div className="ov-hero-meta-dot" />
          <span>Prepared by Onepct for Boost33</span>
        </div>
      </div>

      <div className="ov-body">

        <div className="ov-section-label">The foundation</div>
        <div className="ov-row cols-3" style={{ marginBottom: 48 }}>
          <div className="card accent">
            <div className="card-label">What Boost33 is</div>
            <div className="card-title">Local Business Growth System</div>
            <div className="card-body">A pre-built, fully integrated growth stack deployed free for local service businesses. Payment is only triggered after real results: leads, reviews, revenue. The business model is the differentiator.</div>
          </div>
          <div className="card">
            <div className="card-label">Who it&apos;s for</div>
            <div className="card-title">Owner-Operated Local Businesses</div>
            <div className="card-body">Bakeries, hairdressers, plumbers, restaurants. Any local service business with €1K–1M annual revenue where the owner makes every decision. Global reach, no geographic restrictions.</div>
          </div>
          <div className="card">
            <div className="card-label">The core offer</div>
            <div className="card-title">Prove It First. Pay After.</div>
            <div className="card-body">79+ integrated apps built, deployed, and operated by Boost33 at zero upfront cost. The trial runs until the client can see results. Then, and only then, the paid license is activated.</div>
          </div>
        </div>

        <div className="ov-section-label">Core brand statement</div>
        <div className="card accent" style={{ marginBottom: 48, padding: '28px 32px' }}>
          <div className="card-body" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, color: 'var(--text)', lineHeight: 1.35 }}>
            &ldquo;Boost33 gives local business owners a fully built growth system, free to start, and paid only when it works.&rdquo;
          </div>
        </div>

        <div className="ov-section-label">The brand</div>
        <div className="ov-row cols-2" style={{ marginBottom: 48 }}>
          <div className="card">
            <div className="card-label">Personality</div>
            <div className="card-body"><strong>Ambitious.</strong> Fighter energy, built from the ground up toward a defining moment.<br /><br /><strong>Generous.</strong> Gives first. Proves before asking for anything.<br /><br /><strong>Direct.</strong> Says what it means. No hedging, no hype.</div>
          </div>
          <div className="card">
            <div className="card-label">Voice</div>
            <div className="card-body">Plain language that any business owner understands. Zero jargon. Outcomes always: more customers, more reviews, more revenue. Short declarative sentences. Confidence backed by proof, not ego.</div>
          </div>
          <div className="card">
            <div className="card-label">Content themes</div>
            <div className="card-body">Grow Before You Pay · Local Business Growth · The Ambitious Owner · Systems Over People · Data Is Your Asset<br /><br />Every piece of content maps to one of these five. Nothing else gets produced.</div>
          </div>
          <div className="card">
            <div className="card-label">Audience</div>
            <div className="card-body"><strong>Primary:</strong> Local SME owners. Plain language, risk removal, results focus.<br /><br /><strong>Secondary:</strong> B2B / IT firms (Elite/Premium consulting). RevOps language, infrastructure framing, pipeline specificity.</div>
          </div>
        </div>

        <div className="ov-section-label" style={{ marginBottom: 14 }}>Channel plan</div>
        <div className="ch-header">
          <div className="ch-header-cell">Channel</div>
          <div className="ch-header-cell">Why</div>
          <div className="ch-header-cell">What gets published</div>
          <div className="ch-header-cell">Phase</div>
        </div>
        <div className="ch-row">
          <div className="ch-cell">Instagram</div>
          <div className="ch-cell">Primary visual channel for local business owners. Existing presence, now on strategy.</div>
          <div className="ch-cell">Results posts, growth tips, founder content, trial behind-the-scenes. 3–4× per week.</div>
          <div className="ch-cell"><span className="phase-pill p1">Now</span></div>
        </div>
        <div className="ch-row">
          <div className="ch-cell">LinkedIn</div>
          <div className="ch-cell">B2B and consulting segment only. Thought leadership for Elite/Premium clients and personal brand.</div>
          <div className="ch-cell">RevOps frameworks, founder insights, consultancy case studies. 3–5× per week.</div>
          <div className="ch-cell"><span className="phase-pill p1">Now</span></div>
        </div>
        <div className="ch-row">
          <div className="ch-cell">TikTok</div>
          <div className="ch-cell">Demand creation for cold audiences who don&apos;t know Boost33 yet. AI-assisted production.</div>
          <div className="ch-cell">Short-form video: the prove-it-first model in 60 seconds, results stories, local growth tips.</div>
          <div className="ch-cell"><span className="phase-pill p2">June/July</span></div>
        </div>
        <div className="ch-row" style={{ marginBottom: 48 }}>
          <div className="ch-cell">Paid Ads</div>
          <div className="ch-cell">Scale phase. Instagram + Google targeting local businesses at volume. Free audit as lead magnet.</div>
          <div className="ch-cell">Results-led creative. &ldquo;See what your competitor is doing that you&apos;re not.&rdquo; Retargeting audiences.</div>
          <div className="ch-cell"><span className="phase-pill p3">September</span></div>
        </div>

        <div className="ov-section-label" style={{ marginBottom: 20 }}>The plan to September</div>
        <div className="timeline" style={{ marginBottom: 56 }}>
          <div className="tl-item">
            <div className="tl-dot now" />
            <div className="tl-date now">Now · May</div>
            <div className="tl-list">
              <div className="tl-row">Strategy finalised</div>
              <div className="tl-row">Content SOP live</div>
              <div className="tl-row">Instagram on strategy</div>
              <div className="tl-row">Website brief delivered</div>
              <div className="tl-row">GDPR opt-in built</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot future" />
            <div className="tl-date">Month 2 · June</div>
            <div className="tl-list">
              <div className="tl-row">First trial clients</div>
              <div className="tl-row">TikTok test live</div>
              <div className="tl-row">2–3 results stories</div>
              <div className="tl-row">Referral system designed</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot future" />
            <div className="tl-date">Month 3 · July</div>
            <div className="tl-list">
              <div className="tl-row">Content system consistent</div>
              <div className="tl-row">TikTok established</div>
              <div className="tl-row">Email list rebuilding</div>
              <div className="tl-row">Ad creative developed</div>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-dot future" />
            <div className="tl-date">September</div>
            <div className="tl-list">
              <div className="tl-row">Paid ads live</div>
              <div className="tl-row">100 registrations/day</div>
              <div className="tl-row">Referral programme live</div>
              <div className="tl-row">Email list active</div>
            </div>
          </div>
        </div>

      </div>

      <div className="ov-footer">
        <div className="ov-footer-lock">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <rect x="3" y="7" width="10" height="8" rx="2" fill="#86868b"/>
            <path d="M5 7V5a3 3 0 016 0v2" stroke="#86868b" strokeWidth="1.5" fill="none"/>
          </svg>
          This document is private and prepared exclusively for Boost33 by Onepct. Do not share or distribute.
        </div>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: '#86868b', opacity: 0.45 }}>Onepct · May 2026 · V0.3</span>
      </div>
    </div>
  );
}
