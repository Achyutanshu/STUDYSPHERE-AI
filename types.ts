export type View = 'landing' | 'login' | 'signup' | 'dashboard' | 'practice' | 'profile' | 'exam-sprint';
export type Theme = 'light' | 'dark';

export interface UserProfile {
  name: string;
  email: string;
  board: string;
  class: string;
  school?: string;
  avatar?: string;
}

export interface ActivityItem {
  id: string;
  type: 'quiz' | 'practice' | 'video' | 'revision';
  title: string;
  subject: string;
  timestamp: string;
  value: string; // e.g., "Score: 85%" or "45 mins"
  accuracy?: number;
  questionsSolved?: number;
}

export interface ChapterProgress {
  id: string;
  name: string;
  subject: string;
  progress: number; // percentage
  questionsSolved: number;
  accuracy: number; // percentage
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  board: string;
  content: string;
  rating: number;
  avatar: string;
}
