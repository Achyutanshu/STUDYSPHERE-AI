import { FAQItem, TestimonialItem, ActivityItem, ChapterProgress } from './types';

export const SUPPORTED_BOARDS = [
  'CBSE (Central Board of Secondary Education)',
  'ICSE / ISC (Indian Certificate of Secondary Education)',
  'State Board',
  'IGCSE / IB (International Baccalaureate)'
];

export const SUPPORTED_CLASSES = [
  'Class 9',
  'Class 10',
  'Class 11 (Science / Commerce / Arts)',
  'Class 12 (Science / Commerce / Arts)'
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is StudySphere AI and how does it help?",
    answer: "StudySphere AI is an intelligent personalized learning companion designed to help school and board exam students. It tracks your practice session metrics, identifies weak and strong topics, estimates syllabus progress, and designs customized learning paths to maximize exam scores."
  },
  {
    question: "Which boards and classes do you support?",
    answer: "We support major educational boards including CBSE, ICSE/ISC, various State Boards, and IGCSE/IB for Classes 9 through 12. Content is aligned specifically to standard curriculum guidelines."
  },
  {
    question: "How are chapter strengths and weaknesses calculated?",
    answer: "Our system tracks your quiz attempts, practice speeds, and accuracy rates. If you complete quizzes on a topic with over 80% accuracy, it's flagged as a 'Strong Chapter'. Topics with accuracy under 60% are flagged as 'Weak Chapters' that require focused revision."
  },
  {
    question: "Can I use StudySphere AI for free?",
    answer: "Yes! Phase 1 features, including dashboard progress metrics, basic question tracking, study timing, and curriculum blueprints, are 100% free. Additional deep personalization is part of our upcoming premium suite."
  },
  {
    question: "Is there offline support or progress saving?",
    answer: "Yes, StudySphere AI caches your active study sessions locally on your device, ensuring that your streaks, times, and accuracy scores are preserved even if you briefly lose internet access."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Aarav Sharma",
    role: "Class 12 Student",
    board: "CBSE Board (Science) - 96.4%",
    content: "StudySphere AI completely shifted my physics prep! The system identified my weaknesses in Electromagnetism and guided me with focused problems until my accuracy went from 55% to 92%. Truly revolutionary.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Ananya Iyer",
    role: "Class 10 Student",
    board: "ICSE Board - 98.2%",
    content: "The daily study streak kept me incredibly motivated. I was able to log my focus hours, and the chapters overview helped me budget my time perfectly during the final month of board preparations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Rohan Das",
    role: "Class 12 Student",
    board: "State Board (Commerce) - 95.1%",
    content: "I always struggled with consistency in Accountancy. The gamified milestones and neat graphical dashboard turned boring preparation into an engaging, visual progression that I checked every single day.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

export const SAMPLE_RECENT_ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'quiz',
    title: 'Kinematics & Force Physics Quiz',
    subject: 'Physics',
    timestamp: '2 hours ago',
    value: 'Score: 18/20 (90%)'
  },
  {
    id: 'act-2',
    type: 'practice',
    title: 'Quadratic Equations Worksheet',
    subject: 'Mathematics',
    timestamp: '5 hours ago',
    value: 'Solved 15 problems'
  },
  {
    id: 'act-3',
    type: 'revision',
    title: 'Chemical Reactions & Catalyst Notes',
    subject: 'Chemistry',
    timestamp: 'Yesterday',
    value: '35 mins read'
  },
  {
    id: 'act-4',
    type: 'video',
    title: 'Cell division & Mitosis Lecture',
    subject: 'Biology',
    timestamp: '2 days ago',
    value: '100% Watched'
  }
];

export const SAMPLE_STRONG_CHAPTERS: ChapterProgress[] = [
  {
    id: 'sc-1',
    name: 'Quadratic Equations',
    subject: 'Mathematics',
    progress: 95,
    questionsSolved: 124,
    accuracy: 89
  },
  {
    id: 'sc-2',
    name: 'Chemical Bonding & Structure',
    subject: 'Chemistry',
    progress: 88,
    questionsSolved: 96,
    accuracy: 86
  },
  {
    id: 'sc-3',
    name: 'Electric Current & Circuits',
    subject: 'Physics',
    progress: 92,
    questionsSolved: 110,
    accuracy: 88
  }
];

export const SAMPLE_WEAK_CHAPTERS: ChapterProgress[] = [
  {
    id: 'wc-1',
    name: 'Rotational Mechanics & Torque',
    subject: 'Physics',
    progress: 40,
    questionsSolved: 32,
    accuracy: 52
  },
  {
    id: 'wc-2',
    name: 'Carbon & its Compounds',
    subject: 'Chemistry',
    progress: 55,
    questionsSolved: 48,
    accuracy: 58
  },
  {
    id: 'wc-3',
    name: 'Probability & Statistics',
    subject: 'Mathematics',
    progress: 60,
    questionsSolved: 40,
    accuracy: 55
  }
];
