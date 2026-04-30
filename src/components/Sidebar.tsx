'use client';

interface SidebarProps {
  sections: string[];
  current: number;
  onSelect: (idx: number) => void;
}

const GROUPS = [
  { label: 'Foundation', indices: [0, 1, 2] },
  { label: 'Brand', indices: [3, 4] },
  { label: 'Plan', indices: [5, 6] },
];

export default function Sidebar({ sections, current, onSelect }: SidebarProps) {
  return (
    <nav className="strat-sidebar">
      {GROUPS.map(group => (
        <div key={group.label}>
          <div className="sb-group">{group.label}</div>
          {group.indices.map(idx => (
            <div
              key={idx}
              className={`sb-item${current === idx ? ' active' : ''}`}
              onClick={() => onSelect(idx)}
            >
              <span className="sb-num">{idx + 1}</span>
              {sections[idx]}
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
}
