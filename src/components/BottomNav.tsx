'use client';

interface BottomNavProps {
  visible: boolean;
  current: number;
  total: number;
  sectionLabel: string;
  onPrev: () => void;
  onNext: () => void;
}

export default function BottomNav({ visible, current, total, sectionLabel, onPrev, onNext }: BottomNavProps) {
  return (
    <div className={`bottom-nav${visible ? '' : ' hidden'}`}>
      <div className="nav-section-info">
        <span className="nav-section-name">{sectionLabel}</span>
        <span style={{ color: 'var(--border)' }}>·</span>
        <span>{current + 1} of {total}</span>
      </div>
      <div className="nav-btns">
        <button
          className="nav-btn prev"
          onClick={onPrev}
          disabled={current === 0}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Previous
        </button>
        <button
          className="nav-btn next"
          onClick={onNext}
          disabled={current === total - 1}
        >
          Next
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
