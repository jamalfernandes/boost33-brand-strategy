export interface Comment {
  id: string;
  section_id: string;
  author: string;
  role: 'onepct' | 'boost33';
  text: string;
  status: 'open' | 'resolved';
  created_at: string;
}

export type SectionId = 'positioning' | 'customer' | 'message' | 'voice' | 'content' | 'channels' | 'success' | 'brand';

export const SECTION_LABELS: Record<SectionId, string> = {
  positioning: 'Your Positioning',
  customer: 'Your Customer',
  message: 'Your Message',
  voice: 'How You Sound',
  content: 'Content Strategy',
  channels: 'Channel Plan',
  success: 'What Success Looks Like',
  brand: 'Brand Identity',
};
