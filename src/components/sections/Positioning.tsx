'use client';

import BlockActions from '@/components/BlockActions';

interface SectionProps {
  sectionId: string;
  commentCount: number;
  onOpenComments: () => void;
  acceptances: Record<string, boolean>;
  onAccept: (blockId: string, accepted: boolean) => void;
}

export default function Positioning({ sectionId, commentCount, onOpenComments, acceptances, onAccept }: SectionProps) {
  return (
    <div className="page-inner">
      <div className="page-eyebrow">Section 1 of 7</div>
      <h2 className="page-title">Your positioning</h2>
      <p className="page-sub">The market category Boost33 owns, the structured positioning statement, and how it compares to every alternative a local business owner has tried before.</p>
      <div className="page-divider" />

      <button
        className={`comment-btn${commentCount > 0 ? ' has-comments' : ''}`}
        onClick={onOpenComments}
      >
        {commentCount > 0 && <span className="comment-count">{commentCount}</span>}
        Comments
      </button>

      <div className={`cb hero${acceptances['pos-category'] ? ' block-accepted' : ''}`} style={{ marginBottom: 14 }}>
        <div className="cb-label">Market category — confirmed</div>
        <div className="cb-body big">Boost33 is a local business growth system.</div>
        <BlockActions blockId="pos-category" sectionId={sectionId} accepted={acceptances['pos-category'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="two-col" style={{ marginBottom: 14 }}>
        <div className={`cb${acceptances['pos-why'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Why &ldquo;growth system&rdquo; — not agency, app, or platform</div>
          <div className="cb-body">
            <p>Every local business owner already knows what an agency is — and most have been disappointed by one. &ldquo;Platform&rdquo; sounds like software to manage. &ldquo;App&rdquo; sounds like another thing to learn.</p>
            <p><strong>System</strong> is the word they&apos;ve been missing: not another tool, not another service, but a complete, integrated way of growing — built for them, not by them.</p>
          </div>
          <BlockActions blockId="pos-why" sectionId={sectionId} accepted={acceptances['pos-why'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`cb${acceptances['pos-statement'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Positioning statement</div>
          <div className="cb-body">
            <p>For <strong>local service business owners globally</strong> who need more customers but have been burned by paying upfront for nothing,</p>
            <p>Boost33 is a <strong>local business growth system</strong> that deploys 79+ integrated tools, fully built and managed at zero cost,</p>
            <p>unlike agencies and DIY tools, <strong>Boost33 only asks for payment after real, measurable results are already visible</strong> in your business.</p>
          </div>
          <BlockActions blockId="pos-statement" sectionId={sectionId} accepted={acceptances['pos-statement'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>

      <div className="section-label">How Boost33 compares to every alternative</div>
      <div className="vs-wrap">
        <table className="vs-tbl">
          <thead>
            <tr>
              <th style={{ width: 150 }}>Factor</th>
              <th className="b33">Boost33</th>
              <th>Agency / Freelancer</th>
              <th>DIY Tools</th>
              <th>Do Nothing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="row-lbl">Cost to start</td>
              <td className="b33"><span className="v-yes">Free</span></td>
              <td>€500–2,000/mo</td>
              <td>€50–200/mo</td>
              <td>€0</td>
            </tr>
            <tr>
              <td className="row-lbl">Pay structure</td>
              <td className="b33"><span className="v-yes">Results first — always</span></td>
              <td><span className="v-no">Upfront, always</span></td>
              <td><span className="v-no">Upfront</span></td>
              <td>—</td>
            </tr>
            <tr>
              <td className="row-lbl">System completeness</td>
              <td className="b33"><span className="v-yes">Complete — 79+ tools</span></td>
              <td><span className="v-mid">Partial</span></td>
              <td><span className="v-no">Fragmented</span></td>
              <td><span className="v-no">None</span></td>
            </tr>
            <tr>
              <td className="row-lbl">Setup required from client</td>
              <td className="b33"><span className="v-yes">None</span></td>
              <td>High</td>
              <td>Very high</td>
              <td>None</td>
            </tr>
            <tr>
              <td className="row-lbl">Ongoing management</td>
              <td className="b33"><span className="v-yes">Included</span></td>
              <td>Billed separately</td>
              <td>Manual work</td>
              <td>None</td>
            </tr>
            <tr>
              <td className="row-lbl">Data ownership</td>
              <td className="b33"><span className="v-yes">Client owns it</span></td>
              <td>Agency holds it</td>
              <td>Platform owns it</td>
              <td>None</td>
            </tr>
            <tr>
              <td className="row-lbl">Result before payment</td>
              <td className="b33"><span className="v-yes">Yes — guaranteed</span></td>
              <td><span className="v-no">Never</span></td>
              <td><span className="v-no">Never</span></td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="block-actions-row">
        <BlockActions blockId="pos-comparison" sectionId={sectionId} accepted={acceptances['pos-comparison'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="three-col" style={{ marginTop: 14 }}>
        <div className={`cb${acceptances['pos-diff-1'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Differentiator 1</div>
          <div className="cb-body">
            <p style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 8 }}>Prove-it-first model</p>
            <p>Full branded system built and deployed at zero cost. Payment only activates after real, measurable results during the trial. No upfront financial commitment — ever.</p>
          </div>
          <BlockActions blockId="pos-diff-1" sectionId={sectionId} accepted={acceptances['pos-diff-1'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`cb${acceptances['pos-diff-2'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Differentiator 2</div>
          <div className="cb-body">
            <p style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 8 }}>79+ integrated tools in one stack</p>
            <p>CRM, review management, lead capture, automations — built, integrated, and operated. No piecing together disconnected apps. One system, not twelve subscriptions.</p>
          </div>
          <BlockActions blockId="pos-diff-2" sectionId={sectionId} accepted={acceptances['pos-diff-2'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`cb${acceptances['pos-diff-3'] ? ' block-accepted' : ''}`}>
          <div className="cb-label">Differentiator 3</div>
          <div className="cb-body">
            <p style={{ fontFamily: '\'Plus Jakarta Sans\', sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 8 }}>Proprietary data layer</p>
            <p>As AI commoditises individual tools, client data becomes the real moat. Boost33 builds that asset from day one — owned by the client, not by a platform that can switch off when a subscription lapses.</p>
          </div>
          <BlockActions blockId="pos-diff-3" sectionId={sectionId} accepted={acceptances['pos-diff-3'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>
    </div>
  );
}
