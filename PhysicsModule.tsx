import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, BookOpen, Sparkles, ChevronRight, Compass,
  Zap, AlertTriangle, ShieldCheck, HelpCircle, FileText,
  Bookmark, Terminal, Play, Info, CheckCircle2, ListFilter,
  CheckSquare, Activity, Send, Award, RotateCcw, XCircle, 
  Brain, HelpCircle as QuestionIcon, Sparkle, RefreshCw, BarChart2,
  BookOpenCheck, Loader2
} from 'lucide-react';
import { UserProfile } from '../types';
import { CURRENT_ELECTRICITY_TOPICS, PRE_SEEDED_QUESTIONS, Question } from '../data/physicsQuestions';
import { PHYSICS_CHAPTERS_DATA } from '../data/physicsChaptersData';
import { ALL_CHAPTERS_QUESTIONS } from '../data/chapterQuestionsData';

interface Chapter {
  id: string;
  name: string;
}

interface PhysicsModuleProps {
  chapter: Chapter;
  onBack: () => void;
  colorTheme: {
    bg: string;
    border: string;
    hoverBorder: string;
    text: string;
    glow: string;
    iconBg: string;
    pill: string;
  };
}

type TabType = 'study' | 'practice';

type PracticeType = 'pre-seeded' | 'ai-quiz' | 'none';

export default function PhysicsModule({ chapter, onBack, colorTheme }: PhysicsModuleProps) {
  const [activeTab, setActiveTab] = useState<TabType>('study');
  
  // Sticky User Profile
  const [userProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('studysphere-user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  // Dynamic Progress Tracking (Separated by User Profile and Chapter)
  const progressKey = `studysphere_progress_${userProfile?.email || 'guest'}_${chapter.id}`;
  const [progress, setProgress] = useState({
    theory: 100,
    practice: 70,
    tests: 50,
    overall: 73,
    questionsSolved: 14,
    accuracy: 78,
    weakTopics: ['Ohm\'s Law', 'Series Combination of Resistances', 'Household Electricity Applications']
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(progressKey);
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        // Fallback to default
      }
    }
  }, [progressKey]);

  // Save progress helper
  const updateProgress = (updates: Partial<typeof progress>) => {
    setProgress(prev => {
      const next = { ...prev, ...updates };
      // Keep overall as an average or calculated value
      next.overall = Math.round((next.theory + next.practice + next.tests) / 3);
      localStorage.setItem(progressKey, JSON.stringify(next));
      return next;
    });
  };

  // Pre-seeded Chapter Study Data
  const chapterData = {
    'p-8': {
      overview: 'Current Electricity is the study of electric charges in motion. This chapter explores the fundamental quantities of electric circuits, the relationships between voltage, current, and resistance (Ohm\'s Law), electrical power, EMF, and internal resistance of cells.',
      formulae: [
        { name: 'Electric Current', formula: 'I = Q / t', description: 'Rate of flow of charge (Q in Coulombs, t in seconds, I in Amperes).' },
        { name: 'Ohm\'s Law', formula: 'V = I × R', description: 'Potential difference (V in Volts) is proportional to current (I) through resistance (R in Ohms).' },
        { name: 'Resistance & Resistivity', formula: 'R = ρ × (l / A)', description: 'ρ (resistivity in Ω·m), l (length in m), A (cross-sectional area in m²).' },
        { name: 'Series Resistors', formula: 'Rs = R₁ + R₂ + ... + Rn', description: 'Equivalent resistance of resistors in series. Current remains the same.' },
        { name: 'Parallel Resistors', formula: '1/Rp = 1/R₁ + 1/R₂ + ... + 1/Rn', description: 'Equivalent resistance of resistors in parallel. Potential difference remains the same.' },
        { name: 'EMF and Terminal Voltage', formula: 'V = E - I × r', description: 'Terminal voltage (V) of a discharging cell with EMF (E) and internal resistance (r).' },
        { name: 'Electrical Power', formula: 'P = V × I = I² × R = V² / R', description: 'Rate of electrical energy dissipation (P in Watts).' },
        { name: 'Electrical Energy', formula: 'W = P × t = V × I × t = I² × R × t', description: 'Total electrical work done (W in Joules or kWh).' }
      ],
      definitions: [
        { term: 'Electric Current (I)', text: 'The rate of flow of electric charge through any cross-section of a conductor.' },
        { term: 'Electric Potential (V)', text: 'The work done per unit positive charge in bringing it from infinity to that point in an electric field.' },
        { term: 'Resistance (R)', text: 'The opposition offered by a conductor to the passage of electric current through it.' },
        { term: 'Resistivity (ρ)', text: 'The specific resistance of a conductor, equal to the resistance of a conductor of unit length and unit cross-sectional area.' },
        { term: 'Electromotive Force (EMF)', text: 'The potential difference between the electrodes of a cell when no current is drawn from it (open circuit).' },
        { term: 'Terminal Voltage (V)', text: 'The potential difference between the terminals of a cell when current is being drawn from it (closed circuit).' },
        { term: 'Internal Resistance (r)', text: 'The opposition offered by the electrolyte of a cell to the flow of ionic current inside it.' }
      ],
      laws: [
        { name: 'Ohm\'s Law', text: 'The current (I) flowing through a metallic conductor is directly proportional to the potential difference (V) across its ends, provided its temperature and other physical conditions remain constant.' },
        { name: 'Joule\'s Law of Heating', text: 'The quantity of heat (H) generated in a current-carrying conductor is directly proportional to the square of current, resistance, and time. H = I²Rt.' }
      ],
      units: [
        { quantity: 'Electric Current', unit: 'Ampere', symbol: 'A' },
        { quantity: 'Electric Potential / EMF', unit: 'Volt', symbol: 'V' },
        { quantity: 'Resistance', unit: 'Ohm', symbol: 'Ω' },
        { quantity: 'Resistivity', unit: 'Ohm-meter', symbol: 'Ω·m' },
        { quantity: 'Electric Charge', unit: 'Coulomb', symbol: 'C' },
        { quantity: 'Electrical Energy', unit: 'Joule / Kilowatt-hour', symbol: 'J / kWh' },
        { quantity: 'Electrical Power', unit: 'Watt', symbol: 'W' }
      ],
      diagrams: [
        {
          title: 'Ohm\'s Law Verification Circuit',
          description: 'A standard experimental circuit diagram showing a battery, ammeter, rheostat, key, resistor, and parallel voltmeter.',
          svg: (
            <svg className="w-full h-44 bg-slate-900/60 rounded-xl border border-slate-800 p-4 text-slate-300" viewBox="0 0 400 180">
              <text x="35" y="25" fill="#a5b4fc" className="text-[10px] font-mono">BATTERY</text>
              <line x1="20" y1="40" x2="60" y2="40" stroke="#6366f1" strokeWidth="2" />
              <line x1="30" y1="50" x2="50" y2="50" stroke="#6366f1" strokeWidth="3" />
              <line x1="20" y1="60" x2="60" y2="60" stroke="#6366f1" strokeWidth="2" />
              <line x1="30" y1="70" x2="50" y2="70" stroke="#6366f1" strokeWidth="3" />
              <path d="M 40 40 L 40 20 L 140 20" fill="none" stroke="#64748b" strokeWidth="2" />
              <circle cx="160" cy="20" r="12" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
              <text x="156" y="24" fill="#f43f5e" className="text-[11px] font-bold">A</text>
              <path d="M 220 20 L 235 20 L 240 10 L 245 30 L 250 10 L 255 30 L 260 10 L 265 30 L 270 20 L 290 20" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="247" y="45" fill="#f59e0b" className="text-[10px] font-mono font-bold">R</text>
              <path d="M 230 20 L 230 70 L 245 70" fill="none" stroke="#64748b" strokeWidth="1.5" />
              <path d="M 280 20 L 280 70 L 265 70" fill="none" stroke="#64748b" strokeWidth="1.5" />
              <circle cx="255" cy="70" r="12" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
              <text x="251" y="74" fill="#10b981" className="text-[11px] font-bold">V</text>
              <path d="M 172 20 L 220 20" fill="none" stroke="#64748b" strokeWidth="2" />
              <path d="M 290 20 L 360 20 L 360 130 L 240 130" fill="none" stroke="#64748b" strokeWidth="2" />
              <path d="M 160 130 L 180 130 L 185 125 L 190 135 L 195 125 L 200 135 L 205 125 L 210 135 L 215 130 L 240 130" fill="none" stroke="#64748b" strokeWidth="2" />
              <text x="185" y="155" fill="#94a3b8" className="text-[10px] font-mono">Rh</text>
              <circle cx="95" cy="130" r="3" fill="#64748b" />
              <line x1="95" y1="130" x2="125" y2="120" stroke="#64748b" strokeWidth="2.5" />
              <circle cx="125" cy="130" r="3" fill="#64748b" />
              <text x="105" y="150" fill="#94a3b8" className="text-[10px] font-mono">KEY (K)</text>
              <path d="M 40 70 L 40 130 L 95 130" fill="none" stroke="#64748b" strokeWidth="2" />
              <path d="M 125 130 L 160 130" fill="none" stroke="#64748b" strokeWidth="2" />
            </svg>
          )
        }
      ],
      mistakes: [
        { title: 'EMF vs. Terminal Voltage', error: 'Assuming the EMF of a cell equals its terminal voltage during discharge.', fix: 'Always remember: V = E - Ir. The EMF (E) is only equal to V when no current is drawn (I = 0). When discharging, V is less than E.' },
        { title: 'Series-Parallel Equivalent Mix-up', error: 'Adding resistors directly in parallel like Rs = R1 + R2.', fix: 'Parallel resistances are summed as reciprocals: 1/Rp = 1/R1 + 1/R2. Take the reciprocal of the final sum to get Rp.' }
      ],
      tips: [
        { id: 1, text: 'Always state assumptions and draw a neat circuit diagram for series-parallel or internal resistance calculations.' },
        { id: 2, text: 'Check units carefully: resistivity is Ohm-meter (Ω·m), NOT Ohm per meter (Ω/m).' }
      ]
    },
    'p-9': {
      overview: 'Household Circuits deals with the transmission of electrical power from generating stations to households and safety systems including fuses, MCBs, earthing, three-pin plugs, and dual-control switches.',
      formulae: [
        { name: 'Appliance Fuse Rating', formula: 'I_fuse = P_total / V_mains', description: 'Fuse capacity should be slightly higher than normal working current.' }
      ],
      definitions: [
        { term: 'Electric Fuse', text: 'A safety device consisting of a thin wire with a low melting point and high resistance that melts in overload.' },
        { term: 'Earthing', text: 'Connecting the metal outer cover of appliances to a copper plate buried deep in the ground.' }
      ],
      laws: [
        { name: 'Switch Connection Mandate', text: 'All switches must be connected in the Live Wire. Placement in neutral leaves appliance live even when off.' }
      ],
      units: [
        { quantity: 'Fuse Rating', unit: 'Ampere', symbol: 'A' },
        { quantity: 'AC Mains Voltage', unit: 'Volt', symbol: 'V' }
      ],
      diagrams: [],
      mistakes: [],
      tips: []
    },
    ...PHYSICS_CHAPTERS_DATA
  };

  const selectedData = chapterData[chapter.id as keyof typeof chapterData] || chapterData['p-8'];

  // 12 CISCE-aligned practice categories requested by the user
  const practiceCategories = [
    { id: 'mcq', name: 'MCQ Questions', count: chapter.id === 'p-8' ? 12 : 2, desc: 'Single-option conceptual items' },
    { id: 'fill', name: 'Fill in the Blanks', count: chapter.id === 'p-8' ? 10 : 1, desc: 'Sentence completion checks' },
    { id: 'tf', name: 'True/False Questions', count: chapter.id === 'p-8' ? 10 : 1, desc: 'Fact validation drills' },
    { id: 'match', name: 'Match the Following', count: chapter.id === 'p-8' ? 10 : 1, desc: 'Definition and unit pairings' },
    { id: 'ar', name: 'Assertion & Reason', count: chapter.id === 'p-8' ? 10 : 1, desc: 'Scientific causation analysis' },
    { id: 'vshort', name: 'Very Short Answer Questions', count: chapter.id === 'p-8' ? 12 : 1, desc: 'One-word or one-line CISCE items' },
    { id: 'short', name: 'Short Answer Questions', count: chapter.id === 'p-8' ? 8 : 1, desc: 'Definition-aligned 2-3 mark items' },
    { id: 'long', name: 'Long Answer Questions', count: chapter.id === 'p-8' ? 6 : 1, desc: 'Structure proofs and derivations' },
    { id: 'reason', name: 'Give Reason Questions', count: chapter.id === 'p-8' ? 8 : 1, desc: 'Scientific causality explanations' },
    { id: 'num', name: 'Numerical Problems', count: chapter.id === 'p-8' ? 15 : 1, desc: 'Syllabus-aligned calculation tasks' },
    { id: 'diagram', name: 'Diagram-based Questions', count: chapter.id === 'p-8' ? 10 : 1, desc: 'Labeled schematic interpretation' },
    { id: 'board', name: 'ICSE Board Pattern Questions', count: chapter.id === 'p-8' ? 10 : 1, desc: 'Multi-part questions matching real papers' }
  ];

  // Helper functions for dynamic chapter specification
  const getChapterTopics = (chapterId: string): string[] => {
    switch (chapterId) {
      case 'p-1':
        return [
          'Turning Effect of Force',
          'Torque (Moment of Force)',
          'Couple and Moment of Couple',
          'Conditions for Equilibrium',
          'Principle of Moments',
          'Centre of Gravity',
          'Uniform Circular Motion',
          'Centripetal & Centrifugal Force'
        ];
      case 'p-2':
        return [
          'Work and its conditions',
          'Work done by Force at an Angle',
          'Units of Work and Power',
          'Gravitational Potential Energy',
          'Kinetic Energy and Momentum',
          'Work-Energy Theorem',
          'Conservation of Mechanical Energy',
          'Energy Conversions and Power Plants'
        ];
      case 'p-3':
        return [
          'Mechanical Advantage & Velocity Ratio',
          'Efficiency & Principle of Machines',
          'Levers of Class I, II, and III',
          'Single Fixed Pulley',
          'Single Movable Pulley',
          'Block and Tackle Pulley System'
        ];
      case 'p-8':
      default:
        return CURRENT_ELECTRICITY_TOPICS;
    }
  };

  const getTutorInitialMessage = (chapterName: string, chapterId: string) => {
    let topicsStr = "its concepts";
    if (chapterId === 'p-1') {
      topicsStr = "torque, couple, equilibrium, and uniform circular motion";
    } else if (chapterId === 'p-2') {
      topicsStr = "work, kinetic and potential energy, and conservation of mechanical energy";
    } else if (chapterId === 'p-3') {
      topicsStr = "levers, velocity ratio, efficiency, and pulley systems";
    } else if (chapterId === 'p-8') {
      topicsStr = "Ohm's Law, resistivity, series/parallel combinations, and power";
    }
    return `Hello! I am your AI Physics Tutor for **${chapterName}**. Ask me any doubt from the Class 10 ICSE syllabus! I can explain ${topicsStr} and solve board numerical problems.`;
  };

  const getChapterPlaceholder = (id: string) => {
    if (id === 'p-1') return 'torque, moments, center of gravity';
    if (id === 'p-2') return 'work, kinetic energy, conservation of energy';
    if (id === 'p-3') return 'levers, velocity ratio, pulleys';
    return 'resistivity, cells, Ohm\'s law';
  };

  const getSuggestedDoubts = (id: string): string[] => {
    if (id === 'p-1') {
      return ['Why is turning moment zero when force is at pivot?', 'What is the Principle of Moments?'];
    }
    if (id === 'p-2') {
      return ['Why is work done zero when force is perpendicular to motion?', 'Explain conservation of energy in free fall.'];
    }
    if (id === 'p-3') {
      return ['What is the mechanical advantage of Class II levers?', 'Why is efficiency of block and tackle less than 100%?'];
    }
    return ['Why does resistance increase with length?', 'What is the commercial unit of electrical energy?'];
  };

  // Component States for interactive systems
  const [activePracticeType, setActivePracticeType] = useState<PracticeType>('none');
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswerInput, setUserAnswerInput] = useState<string>('');
  const [selectedMcqOption, setSelectedMcqOption] = useState<string>('');
  
  // AI Evaluations
  const [questionEvaluations, setQuestionEvaluations] = useState<Record<number, any>>({});
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // AI Quiz Generator Form States
  const [showQuizModal, setShowQuizModal] = useState<boolean>(false);
  const [quizTopic, setQuizTopic] = useState<string>('');
  const [quizDifficulty, setQuizDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [quizCount, setQuizCount] = useState<number>(5);
  const [quizType, setQuizType] = useState<'MCQ' | 'Numerical' | 'Short Answer' | 'Long Answer'>('MCQ');
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState<boolean>(false);

  // AI Doubt Solver Tutor States
  const [showTutor, setShowTutor] = useState<boolean>(false);
  const [tutorMessages, setTutorMessages] = useState<Array<{ role: 'user' | 'model'; text: string }>>([]);
  const [doubtInput, setDoubtInput] = useState<string>('');
  const [isAskingDoubt, setIsAskingDoubt] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // AI Revision Mode States
  const [showRevision, setShowRevision] = useState<boolean>(false);
  const [revisionSheet, setRevisionSheet] = useState<any | null>(null);
  const [isGeneratingRevision, setIsGeneratingRevision] = useState<boolean>(false);
  const [revisionTopic, setRevisionTopic] = useState<string>('Entire Chapter');

  // Trigger dynamic state re-initialization when chapter changes
  useEffect(() => {
    const topics = getChapterTopics(chapter.id);
    setQuizTopic(topics[0] || 'Turning Effect of Force');
    setRevisionTopic('Entire Chapter');
    setTutorMessages([
      { role: 'model', text: getTutorInitialMessage(chapter.name, chapter.id) }
    ]);
  }, [chapter.id, chapter.name]);

  // Auto Scroll Chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [tutorMessages]);

  // Handle Practice Category selection
  const startPreseededPractice = (categoryId: string) => {
    const questions = chapter.id === 'p-8'
      ? (PRE_SEEDED_QUESTIONS[categoryId] || [])
      : (ALL_CHAPTERS_QUESTIONS[chapter.id]?.[categoryId] || []);
    setActiveQuestions(questions);
    setActiveCategory(categoryId);
    setCurrentQuestionIndex(0);
    setUserAnswerInput('');
    setSelectedMcqOption('');
    setQuestionEvaluations({});
    setQuizFinished(false);
    setActivePracticeType('pre-seeded');
  };

  // Trigger AI Quiz Generator
  const generateAIQuiz = async () => {
    setIsGeneratingQuiz(true);
    try {
      const response = await fetch('/api/quiz/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: quizTopic,
          difficulty: quizDifficulty,
          count: quizCount,
          type: quizType
        })
      });
      const resData = await response.json();
      if (resData.success && resData.data?.length > 0) {
        // Map any MCQ options or values securely
        const questions: Question[] = resData.data.map((q: any, index: number) => ({
          id: `ai-q-${index}`,
          questionText: q.questionText,
          marks: q.marks || (quizType === 'MCQ' ? 1 : 3),
          difficulty: quizDifficulty,
          correctAnswer: q.correctAnswer,
          options: q.options || [],
          explanation: q.explanation,
          topic: quizTopic
        }));
        setActiveQuestions(questions);
        setActiveCategory('AI Generated Quiz');
        setCurrentQuestionIndex(0);
        setUserAnswerInput('');
        setSelectedMcqOption('');
        setQuestionEvaluations({});
        setQuizFinished(false);
        setActivePracticeType('ai-quiz');
        setShowQuizModal(false);

        // Update tests attempted counter slightly
        updateProgress({
          questionsSolved: progress.questionsSolved + questions.length
        });
      } else {
        alert('Failed to generate quiz. Please check your network or try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error generating quiz. Please try again.');
    } finally {
      setIsGeneratingQuiz(false);
    }
  };

  // Evaluate single answer with AI
  const evaluateAnswer = async () => {
    const currentQ = activeQuestions[currentQuestionIndex];
    if (!currentQ) return;

    const studentAns = currentQ.options && currentQ.options.length > 0 
      ? selectedMcqOption 
      : userAnswerInput;

    if (!studentAns.trim()) {
      alert('Please enter or select an answer before evaluation.');
      return;
    }

    setIsEvaluating(true);
    try {
      const response = await fetch('/api/quiz/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionText: currentQ.questionText,
          correctAnswer: currentQ.correctAnswer,
          studentAnswer: studentAns,
          marksAllocated: currentQ.marks
        })
      });
      const resData = await response.json();
      if (resData.success) {
        setQuestionEvaluations(prev => ({
          ...prev,
          [currentQuestionIndex]: resData.evaluation
        }));

        // Dynamic Progress update on solving
        const scorePercentage = (resData.evaluation.marksObtained / currentQ.marks) * 100;
        const newAccuracy = Math.round((progress.accuracy * progress.questionsSolved + scorePercentage) / (progress.questionsSolved + 1));
        
        updateProgress({
          questionsSolved: progress.questionsSolved + 1,
          accuracy: newAccuracy,
          practice: Math.min(progress.practice + 1, 100)
        });
      } else {
        alert('AI evaluation failed. Showing standard reference answer key.');
        // fallback simulated response
        setQuestionEvaluations(prev => ({
          ...prev,
          [currentQuestionIndex]: {
            marksObtained: currentQ.options && currentQ.options.length > 0 
              ? (studentAns.toLowerCase() === currentQ.correctAnswer.toLowerCase() ? currentQ.marks : 0)
              : currentQ.marks - 1,
            status: currentQ.options && currentQ.options.length > 0 
              ? (studentAns.toLowerCase() === currentQ.correctAnswer.toLowerCase() ? 'Correct' : 'Incorrect')
              : 'Partially Correct',
            missingPoints: ['Verify exact scientific description and keywords.'],
            improvedAnswer: currentQ.correctAnswer,
            explanation: currentQ.explanation
          }
        }));
      }
    } catch (error) {
      console.error(error);
      setIsEvaluating(false);
    } finally {
      setIsEvaluating(false);
    }
  };

  // Doubt Solver Submit
  const askDoubt = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!doubtInput.trim() || isAskingDoubt) return;

    const userMsg = doubtInput;
    setDoubtInput('');
    setTutorMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsAskingDoubt(true);

    try {
      const response = await fetch('/api/quiz/doubt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMsg,
          history: tutorMessages
        })
      });
      const resData = await response.json();
      if (resData.success) {
        setTutorMessages(prev => [...prev, { role: 'model', text: resData.answer }]);
      } else {
        setTutorMessages(prev => [...prev, { role: 'model', text: `Sorry, I encountered an issue while connecting to the AI core. Please check your network. Standard answer: Resistance is directly proportional to length (R ∝ l) and inversely proportional to the cross-sectional area (R ∝ 1/A).` }]);
      }
    } catch (error) {
      console.error(error);
      setTutorMessages(prev => [...prev, { role: 'model', text: `Sorry, there was a connection timeout. Try asking again!` }]);
    } finally {
      setIsAskingDoubt(false);
    }
  };

  // Revision sheets Generator
  const generateRevision = async () => {
    setIsGeneratingRevision(true);
    try {
      const response = await fetch('/api/quiz/revision', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: revisionTopic })
      });
      const resData = await response.json();
      if (resData.success) {
        setRevisionSheet(resData.revision);
      } else {
        alert('Failed to synthesize custom study sheet. Loading pre-seeded board notes.');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsGeneratingRevision(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setUserAnswerInput('');
      setSelectedMcqOption('');
    } else {
      setQuizFinished(true);
      // Boost tests scores on successful custom AI quizzes
      if (activePracticeType === 'ai-quiz') {
        updateProgress({
          tests: Math.min(progress.tests + 10, 100)
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Chapter Sub-Header Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800/60 pb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-950 transition-all cursor-pointer"
            title="Back to Chapters"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
              <span>PHYSICS</span>
              <ChevronRight className="w-3 h-3" />
              <span className={colorTheme.text}>{chapter.name}</span>
            </div>
            <h1 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
              {chapter.name}
            </h1>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 self-start md:self-auto">
          <button
            onClick={() => { setActiveTab('study'); setActivePracticeType('none'); }}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'study' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Study Materials
          </button>
          {chapter.id === 'p-8' && (
            <button
              onClick={() => setActiveTab('practice')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'practice' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI Practice Room
            </button>
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'study' && (
          <motion.div
            key="study-materials"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Overview Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-sm">
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${colorTheme.glow} rounded-full blur-3xl opacity-50 pointer-events-none`} />
              <div className="relative flex items-start gap-4">
                <div className={`p-2.5 rounded-xl border shrink-0 ${colorTheme.iconBg}`}>
                  <Compass className="w-6 h-6 animate-[spin_20s_linear_infinite]" />
                </div>
                <div>
                  <h2 className="font-display text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">Chapter Overview</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                    {selectedData.overview}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Study Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Formulas & Definitions (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                {/* Formulae */}
                {selectedData.formulae.length > 0 && (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/50 pb-3">
                      <Terminal className="w-4 h-4 text-indigo-500" />
                      <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                        Important Formulae
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedData.formulae.map((f, i) => (
                        <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800/40">
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">{f.name}</div>
                          <div className="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400 my-1 py-1 px-2.5 rounded bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 inline-block">
                            {f.formula}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{f.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Definitions */}
                {selectedData.definitions.length > 0 && (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/50 pb-3">
                      <Bookmark className="w-4 h-4 text-emerald-500" />
                      <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                        Key Definitions
                      </h3>
                    </div>
                    <div className="space-y-3.5">
                      {selectedData.definitions.map((def, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <div>
                            <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">{def.term}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{def.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Diagrams */}
                {selectedData.diagrams && selectedData.diagrams.length > 0 && (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/50 pb-3">
                      <Activity className="w-4 h-4 text-pink-500" />
                      <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                        Diagram Gallery
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {selectedData.diagrams.map((diag, i) => (
                        <div key={i} className="space-y-3">
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{diag.title}</div>
                          {diag.svg}
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-relaxed">{diag.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                {/* SI Units Mapping */}
                {selectedData.units.length > 0 && (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/50 pb-2">
                      <CheckSquare className="w-4 h-4 text-amber-500" />
                      <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                        SI Units Mapping
                      </h3>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
                      {selectedData.units.map((u, i) => (
                        <div key={i} className="py-2.5 flex justify-between items-center text-xs">
                          <span className="font-medium text-slate-500 dark:text-slate-400">{u.quantity}</span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-800 dark:text-slate-200">{u.unit}</span>
                            <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono font-bold text-indigo-500">{u.symbol}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Important Laws */}
                {selectedData.laws.length > 0 && (
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/50 pb-2">
                      <FileText className="w-4 h-4 text-violet-500" />
                      <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                        Important Laws
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {selectedData.laws.map((law, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/40 dark:border-slate-800/40">
                          <h4 className="text-xs font-bold text-violet-600 dark:text-violet-400">{law.name}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{law.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Common Mistakes */}
                {selectedData.mistakes && selectedData.mistakes.length > 0 && (
                  <div className="bg-amber-50/20 dark:bg-amber-950/5 border border-amber-500/20 rounded-2xl p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 border-b border-amber-500/10 pb-2 text-amber-500">
                      <AlertTriangle className="w-4.5 h-4.5 shrink-0" />
                      <h3 className="font-display font-extrabold text-sm uppercase tracking-wider">
                        Common Mistakes
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {selectedData.mistakes.map((mis, i) => (
                        <div key={i} className="space-y-1">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 leading-snug">❌ {mis.title}: {mis.error}</h4>
                          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold leading-relaxed">✓ Fix: {mis.fix}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* AI PRACTICE ROOM (ONLY FOR CURRENT ELECTRICITY) */}
        {activeTab === 'practice' && activePracticeType === 'none' && (
          <motion.div
            key="practice-dashboard"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Dynamic Progress Dashboard Bento Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-4 w-full md:w-3/5">
                  <div className="flex items-center gap-2">
                    <BarChart2 className="w-5 h-5 text-indigo-500" />
                    <span className="font-display font-extrabold text-sm uppercase tracking-wider text-slate-800 dark:text-white">
                      Current Electricity Progress
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-400">Theory Complete</span>
                        <span className="text-slate-800 dark:text-white">{progress.theory}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progress.theory}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-400">Practice Modules</span>
                        <span className="text-slate-800 dark:text-white">{progress.practice}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${progress.practice}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-slate-400">Board diagnostic Tests</span>
                        <span className="text-slate-800 dark:text-white">{progress.tests}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: `${progress.tests}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overall Radial Meter */}
                <div className="flex flex-col items-center justify-center border-l border-slate-100 dark:border-slate-800/80 pl-6 shrink-0 w-full md:w-2/5">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="56" cy="56" r="48" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="8" fill="transparent" />
                      <circle cx="56" cy="56" r="48" className="stroke-indigo-500 transition-all duration-1000" strokeWidth="8" fill="transparent" 
                        strokeDasharray={2 * Math.PI * 48}
                        strokeDashoffset={2 * Math.PI * 48 * (1 - progress.overall / 100)}
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-2xl font-extrabold text-slate-800 dark:text-white">{progress.overall}%</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Overall</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weak Topics Bento Box */}
              <div className="md:col-span-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-pink-500 uppercase tracking-wider mb-3">
                    <Brain className="w-4 h-4" /> Focus Areas
                  </div>
                  <div className="space-y-1.5">
                    {progress.weakTopics.map((topic, i) => (
                      <div key={i} className="text-xs font-semibold py-1 px-2.5 rounded bg-pink-50 dark:bg-pink-950/20 text-pink-700 dark:text-pink-300 border border-pink-100/20 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-4 leading-relaxed font-semibold">
                  *AI constructs customized practice sheets prioritizing these areas.
                </div>
              </div>
            </div>

            {/* Quick Actions Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Revision Trigger */}
              <button
                onClick={() => { setShowRevision(true); setRevisionSheet(null); }}
                className="p-5 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 hover:from-indigo-500/20 dark:from-indigo-950/30 border border-indigo-500/20 text-left hover:scale-[1.01] transition-all cursor-pointer shadow-sm group"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500 text-white flex items-center justify-center mb-3">
                  <BookOpenCheck className="w-5 h-5" />
                </div>
                <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">Revise Current Electricity</h4>
                <p className="text-xs text-indigo-700 dark:text-indigo-400 mt-1">Get definitions, formulas, and diagrams in 5 mins.</p>
              </button>

              {/* Tutor Trigger */}
              <button
                onClick={() => setShowTutor(true)}
                className="p-5 rounded-xl bg-gradient-to-br from-violet-500/10 to-violet-600/5 hover:from-violet-500/20 dark:from-violet-950/30 border border-violet-500/20 text-left hover:scale-[1.01] transition-all cursor-pointer shadow-sm group"
              >
                <div className="w-9 h-9 rounded-lg bg-violet-500 text-white flex items-center justify-center mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">Ask AI Doubt Solver</h4>
                <p className="text-xs text-violet-700 dark:text-violet-400 mt-1">Chat 1-on-1 with an empathetic physics tutor.</p>
              </button>

              {/* Quiz Generator Trigger */}
              <button
                onClick={() => setShowQuizModal(true)}
                className="p-5 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 hover:from-pink-500/20 dark:from-pink-950/30 border border-pink-500/20 text-left hover:scale-[1.01] transition-all cursor-pointer shadow-sm group"
              >
                <div className="w-9 h-9 rounded-lg bg-pink-500 text-white flex items-center justify-center mb-3">
                  <Sparkle className="w-5 h-5 animate-pulse" />
                </div>
                <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">Generate AI Quiz</h4>
                <p className="text-xs text-pink-700 dark:text-pink-400 mt-1">Syllabus-aligned customization for target drill.</p>
              </button>
            </div>

            {/* Standard Practice Sections */}
            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                Syllabus Question Rooms
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {practiceCategories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => startPreseededPractice(cat.id)}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between h-40 group"
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono font-extrabold text-indigo-500 bg-indigo-50 dark:bg-indigo-950/50 py-0.5 px-2 rounded">
                          {cat.count} Questions
                        </span>
                        <QuestionIcon className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-800 dark:text-white mt-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {cat.name}
                      </h4>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 line-clamp-2">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-indigo-500 pt-3 border-t border-slate-50 dark:border-slate-800/60 mt-2">
                      <span>ENTER ROOM</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ACTIVE PRACTICE/QUIZ MODULE RUNNER */}
        {activePracticeType !== 'none' && activeQuestions.length > 0 && (
          <motion.div
            key="practice-runner"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            {/* Header / Timer */}
            <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100/20 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
                  {currentQuestionIndex + 1} / {activeQuestions.length}
                </span>
                <span className="text-xs font-bold text-slate-500 capitalize">
                  {activeCategory}
                </span>
              </div>
              <button
                onClick={() => setActivePracticeType('none')}
                className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
              >
                Quit Session
              </button>
            </div>

            {/* Quiz Complete screen */}
            {quizFinished ? (
              <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-10 rounded-2xl text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200/20 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">Session Completed!</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  Excellent work! Your responses have been diagnosed. Your progress metrics have been automatically recorded.
                </p>
                <div className="flex items-center justify-center gap-3 pt-4">
                  <button
                    onClick={() => setActivePracticeType('none')}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs cursor-pointer"
                  >
                    Back to Practice Room
                  </button>
                  <button
                    onClick={() => {
                      if (activePracticeType === 'pre-seeded') {
                        startPreseededPractice(activeCategory);
                      } else {
                        setShowQuizModal(true);
                      }
                    }}
                    className="px-5 py-2.5 border border-slate-200 dark:border-slate-800 font-bold rounded-xl text-xs cursor-pointer text-slate-700 dark:text-slate-300"
                  >
                    Restart Drill
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Question Card */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold py-0.5 px-2 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-mono">
                      {activeQuestions[currentQuestionIndex].topic}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      Marks: {activeQuestions[currentQuestionIndex].marks} • {activeQuestions[currentQuestionIndex].difficulty}
                    </span>
                  </div>

                  <h2 className="text-base font-bold text-slate-800 dark:text-white leading-relaxed">
                    {activeQuestions[currentQuestionIndex].questionText}
                  </h2>
                </div>

                {/* Answer Inputs (MCQ vs text) */}
                {activeQuestions[currentQuestionIndex].options && activeQuestions[currentQuestionIndex].options!.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3">
                    {activeQuestions[currentQuestionIndex].options!.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedMcqOption(opt)}
                        className={`p-4 text-left rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${selectedMcqOption === opt ? 'bg-indigo-50/40 dark:bg-indigo-950/40 border-indigo-500 text-indigo-700 dark:text-indigo-400 shadow-sm' : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-50'}`}
                      >
                        <span>{opt}</span>
                        {selectedMcqOption === opt && <CheckCircle2 className="w-4.5 h-4.5 text-indigo-500" />}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400">Your Answer:</label>
                    <textarea
                      value={userAnswerInput}
                      onChange={(e) => setUserAnswerInput(e.target.value)}
                      placeholder="Type your explanation or steps here strictly as required by ICSE standards..."
                      className="w-full h-32 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-sm leading-relaxed"
                    />
                  </div>
                )}

                {/* AI Evaluate feedback block */}
                {questionEvaluations[currentQuestionIndex] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4 shadow-sm"
                  >
                    <div className="flex justify-between items-center border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-pink-500" />
                        <span className="text-xs font-extrabold text-slate-800 dark:text-white uppercase tracking-wider font-mono">
                          AI Evaluator Report
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/60 py-1 px-3 rounded-lg border border-indigo-100/20">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Marks:</span>
                        <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                          {questionEvaluations[currentQuestionIndex].marksObtained} / {activeQuestions[currentQuestionIndex].marks}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-3">
                        <div>
                          <span className="font-extrabold text-slate-400 block uppercase tracking-widest text-[9px] mb-1">Status</span>
                          <span className={`inline-flex items-center gap-1 font-bold ${questionEvaluations[currentQuestionIndex].status === 'Correct' ? 'text-emerald-500' : 'text-amber-500'}`}>
                            {questionEvaluations[currentQuestionIndex].status === 'Correct' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            {questionEvaluations[currentQuestionIndex].status}
                          </span>
                        </div>

                        <div>
                          <span className="font-extrabold text-slate-400 block uppercase tracking-widest text-[9px] mb-1">Missing Keywords/Points</span>
                          <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                            {questionEvaluations[currentQuestionIndex].missingPoints?.map((p: string, idx: number) => (
                              <li key={idx}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <span className="font-extrabold text-slate-400 block uppercase tracking-widest text-[9px] mb-1">AI Improved Answer</span>
                          <p className="text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50/20 p-2.5 rounded border border-indigo-500/10 leading-relaxed">
                            {questionEvaluations[currentQuestionIndex].improvedAnswer}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200/60 dark:border-slate-800/60 pt-3">
                      <span className="font-extrabold text-slate-400 block uppercase tracking-widest text-[9px] mb-1">Explanation</span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {questionEvaluations[currentQuestionIndex].explanation}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Actions row */}
                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={evaluateAnswer}
                    disabled={isEvaluating}
                    className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-extrabold rounded-xl text-xs flex items-center gap-1.5 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
                  >
                    {isEvaluating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    AI Check Answer
                  </button>

                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 border border-slate-200 dark:border-slate-800 font-bold rounded-xl text-xs flex items-center gap-1 cursor-pointer bg-white dark:bg-slate-900"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI QUIZ GENERATOR CONFIG MODAL */}
      <AnimatePresence>
        {showQuizModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-gradient-to-r from-indigo-500/5 to-pink-500/5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-500" />
                  <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">AI Quiz Generator</h3>
                </div>
                <button
                  onClick={() => setShowQuizModal(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>

              <div className="p-6 space-y-4">
                {/* Topic selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400">Select Syllabus Topic:</label>
                  <select
                    value={quizTopic}
                    onChange={(e) => setQuizTopic(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    {getChapterTopics(chapter.id).map((topic, i) => (
                      <option key={i} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Difficulty */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">Difficulty:</label>
                    <select
                      value={quizDifficulty}
                      onChange={(e) => setQuizDifficulty(e.target.value as any)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>

                  {/* Question Count */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400">Questions Count:</label>
                    <select
                      value={quizCount}
                      onChange={(e) => setQuizCount(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none"
                    >
                      <option value="5">5 Questions</option>
                      <option value="10">10 Questions</option>
                      <option value="20">20 Questions</option>
                    </select>
                  </div>
                </div>

                {/* Question Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400">Question Type:</label>
                  <select
                    value={quizType}
                    onChange={(e) => setQuizType(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none"
                  >
                    <option value="MCQ">MCQ (Multiple Choice)</option>
                    <option value="Numerical">Numerical Problems</option>
                    <option value="Short Answer">Short Answer Questions</option>
                    <option value="Long Answer">Long Answer Questions</option>
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  onClick={generateAIQuiz}
                  disabled={isGeneratingQuiz}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 hover:opacity-90 cursor-pointer disabled:opacity-50"
                >
                  {isGeneratingQuiz ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 animate-pulse" />}
                  {isGeneratingQuiz ? 'Constructing Syllabus Quiz...' : 'Generate & Start AI Quiz'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* AI DOUBT SOLVER TUTOR PANEL (SLIDE-OVER CARD) */}
      <AnimatePresence>
        {showTutor && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex justify-end z-50">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 w-full max-w-md h-full flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-gradient-to-r from-indigo-500/5 to-pink-500/5">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-indigo-500" />
                  <div>
                    <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">AI Physics Tutor</h3>
                    <span className="text-[10px] font-mono font-bold text-slate-400">{chapter.name.toUpperCase()} SPECIFICATION</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowTutor(false)}
                  className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
 
              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {tutorMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 rounded-tl-none text-slate-800 dark:text-slate-300'}`}
                    >
                      {msg.role === 'model' ? (
                        <div className="space-y-1 font-semibold leading-relaxed">
                          {msg.text.split('\n').map((line, lIdx) => (
                            <p key={lIdx}>{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="font-semibold">{msg.text}</p>
                      )}
                    </div>
                  </div>
                ))}
                {isAskingDoubt && (
                  <div className="flex justify-start">
                    <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Tutor is thinking...</span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
 
              {/* Quick suggestions */}
              <div className="p-3 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/40">
                <span className="text-[9px] font-bold text-slate-400 block uppercase tracking-widest font-mono mb-2 px-1">Suggested Doubts:</span>
                <div className="flex flex-wrap gap-1.5">
                  {getSuggestedDoubts(chapter.id).map((doubt, idx) => (
                    <button
                      key={idx}
                      onClick={() => setDoubtInput(doubt)}
                      className="text-[10px] font-semibold py-1 px-2 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 rounded bg-white dark:bg-slate-900 cursor-pointer"
                    >
                      {doubt}
                    </button>
                  ))}
                </div>
              </div>
 
              {/* Footer input */}
              <form onSubmit={askDoubt} className="p-4 border-t border-slate-100 dark:border-slate-800/60 flex gap-2">
                <input
                  type="text"
                  value={doubtInput}
                  onChange={(e) => setDoubtInput(e.target.value)}
                  placeholder={`Ask a doubt about ${getChapterPlaceholder(chapter.id)}...`}
                  className="flex-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  disabled={isAskingDoubt || !doubtInput.trim()}
                  className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* REVISION SHEET MODAL */}
      <AnimatePresence>
        {showRevision && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-2xl h-[85vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-gradient-to-r from-indigo-500/5 to-pink-500/5 shrink-0">
                <div className="flex items-center gap-2">
                  <BookOpenCheck className="w-5 h-5 text-indigo-500" />
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">Current Electricity Revision Center</h3>
                    <p className="text-[10px] font-mono text-slate-400">Board Exam Synthesis Module</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowRevision(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>

              {/* Topic Synthesis Selector */}
              <div className="p-4 bg-slate-50/50 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs font-bold text-slate-400 whitespace-nowrap">Focus:</span>
                  <select
                    value={revisionTopic}
                    onChange={(e) => setRevisionTopic(e.target.value)}
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold focus:outline-none"
                  >
                    <option value="Entire Chapter">Entire Chapter (Full Current Electricity)</option>
                    {CURRENT_ELECTRICITY_TOPICS.map((t, idx) => (
                      <option key={idx} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={generateRevision}
                  disabled={isGeneratingRevision}
                  className="w-full sm:w-auto py-1.5 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-lg text-xs font-extrabold flex items-center justify-center gap-1.5 hover:opacity-90 cursor-pointer disabled:opacity-50 shrink-0"
                >
                  {isGeneratingRevision ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
                  Synthesize Custom Study Guide
                </button>
              </div>

              {/* Guide Contents */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {isGeneratingRevision ? (
                  <div className="h-64 flex flex-col items-center justify-center text-center space-y-3">
                    <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Synthesizing CISCE Exam Guidelines...</span>
                  </div>
                ) : revisionSheet ? (
                  <div className="space-y-6 text-xs">
                    {/* Summary */}
                    <div className="p-4 bg-indigo-50/20 dark:bg-indigo-950/5 border border-indigo-500/10 rounded-xl space-y-2">
                      <h4 className="font-display font-extrabold text-sm text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">5-Minute Topic Summary</h4>
                      <div className="leading-relaxed font-semibold text-slate-600 dark:text-slate-400 space-y-2">
                        {revisionSheet.summary.split('\n').map((para: string, idx: number) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    </div>

                    {/* Definitions & Formulae */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Definitions */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-4 rounded-xl space-y-3">
                        <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-emerald-500">Important Definitions</h4>
                        <div className="space-y-2.5">
                          {revisionSheet.definitions.map((def: any, idx: number) => (
                            <div key={idx}>
                              <span className="font-bold text-slate-800 dark:text-white">{def.term}:</span>
                              <p className="text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{def.definition}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Formulae */}
                      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-4 rounded-xl space-y-3">
                        <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-violet-500">Formula Sheet</h4>
                        <div className="space-y-3">
                          {revisionSheet.formulae.map((f: any, idx: number) => (
                            <div key={idx} className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 rounded">
                              <div className="font-bold text-slate-800 dark:text-slate-300">{f.name}</div>
                              <code className="text-indigo-600 dark:text-indigo-400 block font-bold font-mono my-0.5">{f.formula}</code>
                              <span className="text-[10px] text-slate-400 block">{f.explanation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Common mistakes */}
                    <div className="bg-amber-50/20 dark:bg-amber-950/5 border border-amber-500/20 p-4 rounded-xl space-y-3">
                      <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-amber-500">Common Student Mistakes</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {revisionSheet.commonMistakes.map((mis: any, idx: number) => (
                          <div key={idx} className="space-y-1">
                            <div className="font-bold text-slate-800 dark:text-slate-300">❌ {mis.mistake}</div>
                            <div className="text-emerald-500 font-semibold">✓ Correct technique: {mis.fix}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expected board questions */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-4 rounded-xl space-y-3">
                      <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-pink-500">Most Expected Board Questions</h4>
                      <div className="space-y-3">
                        {revisionSheet.expectedBoardQuestions.map((eq: any, idx: number) => (
                          <div key={idx} className="space-y-1">
                            <div className="font-bold text-slate-800 dark:text-white">Q: {eq.question}</div>
                            <div className="p-2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 rounded text-slate-500 dark:text-slate-400">
                              Ans: {eq.answer}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Default Revision Guide loaded statically
                  <div className="space-y-5 text-xs">
                    <div className="p-4 bg-indigo-50/20 dark:bg-indigo-950/5 border border-indigo-500/10 rounded-xl space-y-2">
                      <h4 className="font-display font-extrabold text-sm text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">5-Minute Chapter Summary</h4>
                      <p className="leading-relaxed font-semibold text-slate-600 dark:text-slate-400">
                        Current electricity deals with charge motion. Charge is quantized (Q=ne). Current is rate of charge flow (I=Q/t). Voltage is work done per unit charge (V=W/Q). Resistance is opposition to flow (R=V/I). Ohm's Law requires constant temperature. Resistivity depends on material and temperature, but not length or area. Power is work rate (P=VI=I²R), commerical unit is kWh (1 kWh = 3.6 × 10⁶ J). Switches and fuses must always be wired in live wires.
                      </p>
                    </div>

                    <div className="bg-amber-50/20 dark:bg-amber-950/5 border border-amber-500/20 p-4 rounded-xl space-y-2">
                      <h4 className="font-display font-extrabold text-xs uppercase tracking-widest text-amber-500">Common Student Mistakes</h4>
                      <div className="space-y-2">
                        <div>
                          <span className="font-bold text-slate-800 dark:text-slate-300">❌ Error: Thinking resistivity of a wire changes when it is stretched.</span>
                          <span className="text-emerald-500 font-semibold block">✓ Correct: Resistivity is a material property. Stretching changes resistance (R increases), but resistivity (ρ) remains constant.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
