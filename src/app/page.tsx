'use client';

import { useState, useEffect, useCallback } from 'react';
import TopBar from '@/components/TopBar';
import Sidebar from '@/components/Sidebar';
import BottomNav from '@/components/BottomNav';
import CommentSidebar from '@/components/CommentSidebar';
import OverviewView from '@/components/overview/OverviewView';
import Positioning from '@/components/sections/Positioning';
import Customer from '@/components/sections/Customer';
import Message from '@/components/sections/Message';
import Voice from '@/components/sections/Voice';
import ContentStrategy from '@/components/sections/ContentStrategy';
import ChannelPlan from '@/components/sections/ChannelPlan';
import SuccessMetrics from '@/components/sections/SuccessMetrics';
import BrandIdentity from '@/components/sections/BrandIdentity';
import { Comment, SectionId, SECTION_LABELS } from '@/types';

const SECTION_IDS: SectionId[] = ['positioning', 'customer', 'message', 'voice', 'content', 'brand', 'channels', 'success'];
const SECTION_NAMES = SECTION_IDS.map(id => SECTION_LABELS[id]);

export default function Home() {
  const [activeView, setActiveView] = useState<'overview' | 'strategy'>('overview');
  const [currentSection, setCurrentSection] = useState(0);
  const [commentSidebarOpen, setCommentSidebarOpen] = useState(false);
  const [commentCounts, setCommentCounts] = useState<Record<string, number>>({});
  const [acceptances, setAcceptances] = useState<Record<string, boolean>>({});

  const fetchCommentCounts = useCallback(async () => {
    try {
      const res = await fetch('/api/comments');
      const all: Comment[] = await res.json();
      const counts: Record<string, number> = {};
      all.forEach(c => {
        if (c.status === 'open') {
          counts[c.section_id] = (counts[c.section_id] || 0) + 1;
        }
      });
      setCommentCounts(counts);
    } catch {
      // silently fail in local dev without KV
    }
  }, []);

  const fetchAcceptances = useCallback(async () => {
    try {
      const res = await fetch('/api/acceptances');
      const data: Record<string, boolean> = await res.json();
      setAcceptances(data);
    } catch {}
  }, []);

  useEffect(() => {
    fetchCommentCounts();
    fetchAcceptances();
  }, [fetchCommentCounts, fetchAcceptances]);

  function handleViewChange(view: 'overview' | 'strategy') {
    setActiveView(view);
    if (view === 'overview') {
      setCommentSidebarOpen(false);
    }
    window.scrollTo(0, 0);
  }

  function handleSectionSelect(idx: number) {
    setCurrentSection(idx);
    setCommentSidebarOpen(false);
    window.scrollTo(0, 0);
  }

  function handleOpenComments() {
    setCommentSidebarOpen(true);
  }

  function handleCloseComments() {
    setCommentSidebarOpen(false);
    fetchCommentCounts();
  }

  const currentSectionId = SECTION_IDS[currentSection];
  const currentSectionLabel = SECTION_NAMES[currentSection];

  function handleAccept(blockId: string, accepted: boolean) {
    setAcceptances(prev => ({ ...prev, [blockId]: accepted }));
  }

  const sectionProps = (idx: number) => ({
    sectionId: SECTION_IDS[idx],
    commentCount: commentCounts[SECTION_IDS[idx]] || 0,
    onOpenComments: () => {
      setCurrentSection(idx);
      setCommentSidebarOpen(true);
    },
    acceptances,
    onAccept: handleAccept,
  });

  return (
    <>
      <TopBar activeView={activeView} onViewChange={handleViewChange} />

      {/* Overview */}
      <div style={{ display: activeView === 'overview' ? 'block' : 'none' }}>
        <OverviewView />
      </div>

      {/* Strategy */}
      <div style={{ display: activeView === 'strategy' ? 'block' : 'none' }}>
        <div className="strat-wrap">
          <Sidebar
            sections={SECTION_NAMES}
            current={currentSection}
            onSelect={handleSectionSelect}
          />

          <div className={`strat-main${commentSidebarOpen ? ' sidebar-open' : ''}`}>
            <div style={{ display: currentSection === 0 ? 'block' : 'none' }}>
              <Positioning {...sectionProps(0)} />
            </div>
            <div style={{ display: currentSection === 1 ? 'block' : 'none' }}>
              <Customer {...sectionProps(1)} />
            </div>
            <div style={{ display: currentSection === 2 ? 'block' : 'none' }}>
              <Message {...sectionProps(2)} />
            </div>
            <div style={{ display: currentSection === 3 ? 'block' : 'none' }}>
              <Voice {...sectionProps(3)} />
            </div>
            <div style={{ display: currentSection === 4 ? 'block' : 'none' }}>
              <ContentStrategy {...sectionProps(4)} />
            </div>
            <div style={{ display: currentSection === 5 ? 'block' : 'none' }}>
              <BrandIdentity {...sectionProps(5)} />
            </div>
            <div style={{ display: currentSection === 6 ? 'block' : 'none' }}>
              <ChannelPlan {...sectionProps(6)} />
            </div>
            <div style={{ display: currentSection === 7 ? 'block' : 'none' }}>
              <SuccessMetrics {...sectionProps(7)} />
            </div>
          </div>

          <CommentSidebar
            sectionId={commentSidebarOpen ? currentSectionId : null}
            sectionLabel={currentSectionLabel}
            isOpen={commentSidebarOpen}
            onClose={handleCloseComments}
          />
        </div>

        <BottomNav
          visible={activeView === 'strategy'}
          current={currentSection}
          total={SECTION_IDS.length}
          sectionLabel={currentSectionLabel}
          onPrev={() => handleSectionSelect(currentSection - 1)}
          onNext={() => handleSectionSelect(currentSection + 1)}
        />
      </div>
    </>
  );
}
