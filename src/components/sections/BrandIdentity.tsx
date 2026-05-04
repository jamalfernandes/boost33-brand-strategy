'use client';

import BlockActions from '@/components/BlockActions';

interface SectionProps {
  sectionId: string;
  commentCount: number;
  onOpenComments: () => void;
  acceptances: Record<string, boolean>;
  onAccept: (blockId: string, accepted: boolean) => void;
}

export default function BrandIdentity({ sectionId, commentCount, onOpenComments, acceptances, onAccept }: SectionProps) {
  return (
    <div className="page-inner">
      <div className="page-eyebrow">Section 8 of 8</div>
      <h2 className="page-title">Brand identity</h2>
      <p className="page-sub">The visual system behind Boost33 — logo usage, colour palette, typography, and the rules that keep everything consistent across every touchpoint.</p>
      <div className="page-divider" />

      <button
        className={`comment-btn${commentCount > 0 ? ' has-comments' : ''}`}
        onClick={onOpenComments}
      >
        {commentCount > 0 && <span className="comment-count">{commentCount}</span>}
        Comments
      </button>

      {/* LOGO */}
      <div className="section-label">Logo</div>
      <div className={`cb${acceptances['bi-logo'] ? ' block-accepted' : ''}`} style={{ marginBottom: 14 }}>
        <div className="cb-label">Primary logo — horizontal lockup</div>
        <div className="cb-body">
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 20 }}>
            <div style={{ flex: 1, minWidth: 200, background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo-horizontal.png" alt="Boost33 horizontal logo" style={{ maxWidth: 180, height: 'auto' }} />
            </div>
            <div style={{ flex: 1, minWidth: 200, background: '#292929', border: '1px solid var(--border)', borderRadius: 10, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo-horizontal.png" alt="Boost33 horizontal logo on dark" style={{ maxWidth: 180, height: 'auto' }} />
            </div>
            <div style={{ flex: 1, minWidth: 200, background: '#e9521e', border: '1px solid var(--border)', borderRadius: 10, padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo-horizontal.png" alt="Boost33 horizontal logo on brand" style={{ maxWidth: 180, height: 'auto' }} />
            </div>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Use on white, dark, and brand orange backgrounds. Always maintain clear space equal to the height of the &ldquo;B&rdquo; on all sides.</p>
        </div>
        <BlockActions blockId="bi-logo" sectionId={sectionId} accepted={acceptances['bi-logo'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className="two-col" style={{ marginBottom: 14 }}>
        <div className={`cb${acceptances['bi-logo-do'] ? ' block-accepted' : ''}`} style={{ borderColor: 'rgba(34,197,94,0.3)' }}>
          <div className="cb-label" style={{ color: '#22c55e' }}>Do</div>
          <div className="cb-body" style={{ fontSize: 13 }}>
            <p>Use the horizontal lockup as the default in all contexts.</p>
            <p>Place on white, near-black (#292929), or brand orange (#e9521e) backgrounds.</p>
            <p>Maintain clear space. Scale proportionally.</p>
            <p>Use the SVG mark alone when space is very limited (app icons, favicons, small placements).</p>
          </div>
          <BlockActions blockId="bi-logo-do" sectionId={sectionId} accepted={acceptances['bi-logo-do'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
        <div className={`cb${acceptances['bi-logo-dont'] ? ' block-accepted' : ''}`}>
          <div className="cb-label" style={{ color: 'var(--red)' }}>Don&apos;t</div>
          <div className="cb-body" style={{ fontSize: 13 }}>
            <p>Don&apos;t stretch, skew, rotate, or respace the logo.</p>
            <p>Don&apos;t place on busy photography or low-contrast backgrounds without a backing panel.</p>
            <p>Don&apos;t recolour the logo — only white, black, and the brand orange version are approved.</p>
            <p>Don&apos;t add drop shadows, outlines, or effects.</p>
          </div>
          <BlockActions blockId="bi-logo-dont" sectionId={sectionId} accepted={acceptances['bi-logo-dont'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
        </div>
      </div>

      {/* COLOURS */}
      <div className="section-label" style={{ marginTop: 8 }}>Colour palette</div>
      <div className={`cb${acceptances['bi-colours'] ? ' block-accepted' : ''}`} style={{ marginBottom: 14 }}>
        <div className="cb-label">Primary colours</div>
        <div className="cb-body">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ height: 72, background: '#e9521e', borderRadius: 8, marginBottom: 10, border: '1px solid rgba(0,0,0,0.06)' }} />
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, color: 'var(--text)', marginBottom: 2 }}>Boost33 Orange</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>#e9521e</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Primary brand colour. CTAs, active states, highlights, key copy.</div>
            </div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ height: 72, background: '#292929', borderRadius: 8, marginBottom: 10, border: '1px solid rgba(0,0,0,0.06)' }} />
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, color: 'var(--text)', marginBottom: 2 }}>Near Black</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>#292929</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Primary text. Dark backgrounds. Headings and body copy.</div>
            </div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ height: 72, background: '#ffffff', borderRadius: 8, marginBottom: 10, border: '1px solid var(--border)' }} />
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, color: 'var(--text)', marginBottom: 2 }}>White</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>#ffffff</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Backgrounds, reversed text on dark or orange.</div>
            </div>
          </div>
        </div>
        <BlockActions blockId="bi-colours" sectionId={sectionId} accepted={acceptances['bi-colours'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className={`cb${acceptances['bi-colours-support'] ? ' block-accepted' : ''}`} style={{ marginBottom: 14 }}>
        <div className="cb-label">Supporting colours — UI and system use only</div>
        <div className="cb-body">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
            <div style={{ flex: 1, minWidth: 120 }}>
              <div style={{ height: 48, background: '#F5F5F7', borderRadius: 8, marginBottom: 8, border: '1px solid var(--border)' }} />
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 2 }}>Light Grey</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace' }}>#F5F5F7</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>Page backgrounds</div>
            </div>
            <div style={{ flex: 1, minWidth: 120 }}>
              <div style={{ height: 48, background: '#EB7147', borderRadius: 8, marginBottom: 8, border: '1px solid rgba(0,0,0,0.06)' }} />
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 2 }}>Amber</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace' }}>#EB7147</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>Warm accents, gradients</div>
            </div>
            <div style={{ flex: 1, minWidth: 120 }}>
              <div style={{ height: 48, background: '#3B6CD9', borderRadius: 8, marginBottom: 8, border: '1px solid rgba(0,0,0,0.06)' }} />
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 2 }}>Blue</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace' }}>#3B6CD9</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>Links, secondary actions</div>
            </div>
            <div style={{ flex: 1, minWidth: 120 }}>
              <div style={{ height: 48, background: '#737373', borderRadius: 8, marginBottom: 8, border: '1px solid rgba(0,0,0,0.06)' }} />
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 12, color: 'var(--text)', marginBottom: 2 }}>Mid Grey</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'monospace' }}>#737373</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>Secondary text, metadata</div>
            </div>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Supporting colours are for UI and digital product use. In external brand materials (print, ads, presentations), stick to the three primary colours.</p>
        </div>
        <BlockActions blockId="bi-colours-support" sectionId={sectionId} accepted={acceptances['bi-colours-support'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      {/* TYPOGRAPHY */}
      <div className="section-label" style={{ marginTop: 8 }}>Typography</div>
      <div className={`cb${acceptances['bi-type'] ? ' block-accepted' : ''}`} style={{ marginBottom: 14 }}>
        <div className="cb-label">Typeface — Outfit (Google Fonts, free)</div>
        <div className="cb-body">
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 36, fontWeight: 800, color: 'var(--text)', lineHeight: 1.1, marginBottom: 4 }}>Outfit</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 400, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 400, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 400, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>0 1 2 3 4 5 6 7 8 9 . , ! ? & @ # € $</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 28, fontWeight: 800, color: 'var(--text)', minWidth: 200 }}>Display / H1</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>800 · 28–40px · Hero statements, page titles</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 20, fontWeight: 700, color: 'var(--text)', minWidth: 200 }}>Heading / H2</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>700 · 18–22px · Section headings</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 600, color: 'var(--text)', minWidth: 200 }}>Subheading / Label</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>600 · 13–15px · Card labels, section tags</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 400, color: 'var(--text)', minWidth: 200 }}>Body copy</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>400 · 14px · All body text, descriptions</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 300, color: 'var(--text-dim)', minWidth: 200 }}>Supporting text</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'monospace' }}>300 · 12–13px · Metadata, captions, fine print</span>
            </div>
          </div>
        </div>
        <BlockActions blockId="bi-type" sectionId={sectionId} accepted={acceptances['bi-type'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>

      <div className={`cb${acceptances['bi-type-rules'] ? ' block-accepted' : ''}`} style={{ marginBottom: 0 }}>
        <div className="cb-label">Typography rules</div>
        <div className="cb-body" style={{ fontSize: 13 }}>
          <p><strong>Outfit is the only typeface.</strong> No mixing with other fonts in brand materials. If Outfit is unavailable (certain email clients, embedded contexts), use the system sans-serif stack.</p>
          <p><strong>Weight carries meaning.</strong> 800 is for the most important thing on the page. 300 is for supporting information. Don&apos;t flatten everything to one weight — the hierarchy matters.</p>
          <p><strong>Orange text is for emphasis, not decoration.</strong> Use #e9521e on text only when you want the reader to stop there. Overusing it makes it meaningless.</p>
          <p><strong>Line length.</strong> Keep body copy lines under 75 characters where possible. Long lines kill readability, especially for an audience that reads on their phone.</p>
        </div>
        <BlockActions blockId="bi-type-rules" sectionId={sectionId} accepted={acceptances['bi-type-rules'] || false} onAccept={onAccept} onSuggest={onOpenComments} />
      </div>
    </div>
  );
}
