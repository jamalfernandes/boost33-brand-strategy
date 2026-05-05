'use client';

interface TopBarProps {
  activeView: 'overview' | 'strategy';
  onViewChange: (view: 'overview' | 'strategy') => void;
}

export default function TopBar({ activeView, onViewChange }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <img src="/logo-horizontal.png" alt="Boost33" className="topbar-logo" />
        <div className="topbar-sep" />
        <span className="topbar-doc">Brand Strategy</span>
      </div>

      <div className="view-toggle">
        <button
          className={`view-tab${activeView === 'overview' ? ' active' : ''}`}
          onClick={() => onViewChange('overview')}
        >
          Overview
        </button>
        <button
          className={`view-tab${activeView === 'strategy' ? ' active' : ''}`}
          onClick={() => onViewChange('strategy')}
        >
          Full Strategy
        </button>
      </div>

      <div className="topbar-right">
        <span className="tb-date">May 2026</span>
        <span className="tb-badge">Draft · V0.4</span>
      </div>
    </header>
  );
}
