import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, BookOpen, Sparkles, ChevronRight, Compass,
  Zap, AlertTriangle, HelpCircle, FileText,
  Bookmark, Info, CheckCircle2, Award, Sparkle,
  Layers, Target, ListChecks, CheckCircle,
  Lightbulb, GraduationCap, Eye, RefreshCw, BookOpenCheck,
  ShieldAlert, Check, ChevronDown, Play, Code, CheckSquare, Terminal
} from 'lucide-react';
import { UserProfile } from '../types';
import { CLASSES_OBJECTS_CHAPTER_DATA, MCQQuestion, ShortAnswerQuestion, ProgrammingQuestion, SampleProgram } from '../data/computerApplicationsData';

interface Chapter {
  id: string;
  name: string;
}

interface ComputerApplicationsModuleProps {
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

type MainSectionType = 'intro' | 'objectives' | 'topics' | 'syntax' | 'flow' | 'tips' | 'samples' | 'practice_questions' | 'summary';

export default function ComputerApplicationsModule({ chapter, onBack, colorTheme }: ComputerApplicationsModuleProps) {
  const [activeSection, setActiveSection] = useState<MainSectionType>('intro');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('ca-topic-1');

  // Interactive sample program selector
  const [activeSampleIdx, setActiveSampleIdx] = useState<number>(0);

  // Practice sub-tabs
  const [practiceSubTab, setPracticeSubTab] = useState<'mcq' | 'short' | 'programming'>('mcq');

  // MCQ states
  const [selectedMcqAnswers, setSelectedMcqAnswers] = useState<Record<string, string>>({});
  const [revealedMcqs, setRevealedMcqs] = useState<Record<string, boolean>>({});

  // Short Answers states
  const [writtenShortAnswers, setWrittenShortAnswers] = useState<Record<string, string>>({});
  const [shortEvaluations, setShortEvaluations] = useState<Record<string, any>>({});
  const [evaluatingShortIds, setEvaluatingShortIds] = useState<Record<string, boolean>>({});
  const [shortErrors, setShortErrors] = useState<Record<string, string>>({});

  // Programming questions states
  const [activeProgIdx, setActiveProgIdx] = useState<number>(0);
  const [writtenCode, setWrittenCode] = useState<string>('');
  
  // Execution console states
  const [isRunningCode, setIsRunningCode] = useState<boolean>(false);
  const [consoleOutput, setConsoleOutput] = useState<{ status: 'success' | 'error' | null; stdout: string; errors: string }>({
    status: null,
    stdout: '',
    errors: ''
  });

  // Code evaluation states
  const [isEvaluatingCode, setIsEvaluatingCode] = useState<boolean>(false);
  const [codeEvaluation, setCodeEvaluation] = useState<any>(null);
  const [codeEvalError, setCodeEvalError] = useState<string>('');

  // Sticky User Profile for study progress saving
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

  const storageKey = `studysphere_read_compapp_${userProfile?.email || 'guest'}_${chapter.id}`;

  // Read progress tracking
  const [readItems, setReadItems] = useState<string[]>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(readItems));
  }, [readItems, storageKey]);

  // Reset states on chapter switch (not strictly needed but good practice)
  useEffect(() => {
    setActiveSection('intro');
    setSelectedTopicId('ca-topic-1');
    setActiveSampleIdx(0);
    setPracticeSubTab('mcq');
    setSelectedMcqAnswers({});
    setRevealedMcqs({});
    setWrittenShortAnswers({});
    setShortEvaluations({});
    setEvaluatingShortIds({});
    setShortErrors({});
    setActiveProgIdx(0);
    setCodeEvaluation(null);
    setCodeEvalError(null);
    setConsoleOutput({ status: null, stdout: '', errors: '' });
  }, [chapter.id]);

  // Pre-populate boilerplate code when active programming question changes
  useEffect(() => {
    if (CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.programming[activeProgIdx]) {
      setWrittenCode(CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.programming[activeProgIdx].boilerplateCode);
      setCodeEvaluation(null);
      setCodeEvalError('');
      setConsoleOutput({ status: null, stdout: '', errors: '' });
    }
  }, [activeProgIdx]);

  const toggleReadItem = (itemId: string) => {
    setReadItems(prev => 
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  const isRead = (itemId: string) => readItems.includes(itemId);

  // Statistics calculation
  const totalSubsections = CLASSES_OBJECTS_CHAPTER_DATA.topics.length + 6; // topics + intro + objectives + syntax + flow + tips + samples
  const progressPercent = Math.round((readItems.length / totalSubsections) * 100);

  // Access active topic
  const activeTopic = CLASSES_OBJECTS_CHAPTER_DATA.topics.find(t => t.id === selectedTopicId) || CLASSES_OBJECTS_CHAPTER_DATA.topics[0];

  // Tab Key indentation inside Code Editor
  const handleEditorKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const value = e.currentTarget.value;
      const newValue = value.substring(0, start) + "    " + value.substring(end);
      setWrittenCode(newValue);
      setTimeout(() => {
        e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 4;
      }, 0);
    }
  };

  // Evaluate Short written answer via backend API
  const handleCheckShortAnswer = async (qId: string, qText: string, modelAns: string) => {
    const studentAns = writtenShortAnswers[qId]?.trim();
    if (!studentAns) {
      setShortErrors(prev => ({ ...prev, [qId]: 'Please type your answer before checking.' }));
      return;
    }

    setShortErrors(prev => ({ ...prev, [qId]: '' }));
    setEvaluatingShortIds(prev => ({ ...prev, [qId]: true }));

    try {
      const response = await fetch('/api/quiz/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionText: qText,
          correctAnswer: modelAns,
          studentAnswer: studentAns,
          marksAllocated: 2,
          subject: 'computer-applications',
        }),
      });

      if (!response.ok) {
        throw new Error('Server returned error. Please try again.');
      }

      const result = await response.json();
      if (result.success && result.evaluation) {
        setShortEvaluations(prev => ({ ...prev, [qId]: result.evaluation }));
      } else {
        throw new Error(result.error || 'Evaluation was unsuccessful.');
      }
    } catch (err: any) {
      setShortErrors(prev => ({ ...prev, [qId]: err.message || 'Error communicating with evaluation server.' }));
    } finally {
      setEvaluatingShortIds(prev => ({ ...prev, [qId]: false }));
    }
  };

  // Run Java Code on the backend API
  const handleRunJavaCode = async () => {
    if (!writtenCode.trim()) return;

    setIsRunningCode(true);
    setConsoleOutput({ status: null, stdout: '', errors: '' });

    try {
      const response = await fetch('/api/java/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: writtenCode }),
      });

      if (!response.ok) {
        throw new Error('Server compilation connection timeout.');
      }

      const result = await response.json();
      if (result.success && result.runResult) {
        const { compilationStatus, output, errorDetails } = result.runResult;
        setConsoleOutput({
          status: compilationStatus === 'success' ? 'success' : 'error',
          stdout: output || '',
          errors: errorDetails || ''
        });
      } else {
        throw new Error(result.error || 'Compilation was aborted.');
      }
    } catch (err: any) {
      setConsoleOutput({
        status: 'error',
        stdout: '',
        errors: `Java Virtual Machine Error: ${err.message || 'Failed to establish compiler frame connection.'}`
      });
    } finally {
      setIsRunningCode(false);
    }
  };

  // Evaluate Java Code via AI evaluation endpoint
  const handleEvaluateJavaCode = async (q: ProgrammingQuestion) => {
    if (!writtenCode.trim()) return;

    setIsEvaluatingCode(true);
    setCodeEvalError('');
    setCodeEvaluation(null);

    try {
      const response = await fetch('/api/quiz/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionText: q.questionText,
          correctAnswer: q.modelAnswer,
          studentAnswer: writtenCode,
          marksAllocated: q.marks,
          subject: 'computer-applications',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate program. Connection timeout.');
      }

      const result = await response.json();
      if (result.success && result.evaluation) {
        setCodeEvaluation(result.evaluation);
      } else {
        throw new Error(result.error || 'Evaluation was unsuccessful.');
      }
    } catch (err: any) {
      setCodeEvalError(err.message || 'Error communicating with board-evaluator.');
    } finally {
      setIsEvaluatingCode(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
      
      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:shadow-sm transition-all cursor-pointer"
            id="compapp-back-button"
            title="Go back to chapters"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-900/30">
                ICSE Class 10 Computer Applications
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                Core Java OOP Module
              </span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              {CLASSES_OBJECTS_CHAPTER_DATA.title}
            </h1>
          </div>
        </div>

        {/* PROGRESS ENGINE OVERVIEW */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 flex items-center gap-4 shadow-sm md:w-80">
          <div className="relative flex-shrink-0">
            <svg className="w-12 h-12 transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                className="text-slate-100 dark:text-slate-800"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                className="text-violet-500 transition-all duration-500"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={125.6}
                strokeDashoffset={125.6 - (125.6 * Math.min(progressPercent, 100)) / 100}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200">
              {Math.min(progressPercent, 100)}%
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-slate-900 dark:text-white">Study Progress Tracker</div>
            <div className="text-[10px] text-slate-400 font-mono mt-0.5">
              Completed {readItems.length} of {totalSubsections} milestones
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1 mt-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full transition-all duration-500" 
                style={{ width: `${Math.min(progressPercent, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: NAVIGATION RAIL */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 shadow-sm space-y-1.5">
            <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
              Module Sections
            </div>

            {/* Section 1: Intro */}
            <button
              onClick={() => setActiveSection('intro')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'intro'
                  ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/5 border-l-4 border-violet-500 text-violet-700 dark:text-violet-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 shrink-0" />
                <span>1. Chapter Introduction</span>
              </div>
              {isRead('intro') && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              )}
            </button>

            {/* Section 2: Objectives */}
            <button
              onClick={() => setActiveSection('objectives')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'objectives'
                  ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/5 border-l-4 border-violet-500 text-violet-700 dark:text-violet-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Target className="w-4 h-4 shrink-0" />
                <span>2. Learning Objectives</span>
              </div>
              {isRead('objectives') && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              )}
            </button>

            {/* Section 3: Detailed Topics */}
            <button
              onClick={() => setActiveSection('topics')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'topics'
                  ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/5 border-l-4 border-violet-500 text-violet-700 dark:text-violet-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 shrink-0" />
                <span>3. Detailed OOP Theory</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 font-mono">
                {CLASSES_OBJECTS_CHAPTER_DATA.topics.filter(t => isRead(t.id)).length}/{CLASSES_OBJECTS_CHAPTER_DATA.topics.length}
              </span>
            </button>

            {/* Section 4: Syntax Explanation */}
            <button
              onClick={() => setActiveSection('syntax')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'syntax'
                  ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/5 border-l-4 border-violet-500 text-violet-700 dark:text-violet-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Code className="w-4 h-4 shrink-0" />
                <span>4. Syntax & Instantiation</span>
              </div>
              {isRead('syntax') && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              )}
            </button>

            {/* Section 5: JVM Memory Flow */}
            <button
              onClick={() => setActiveSection('flow')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'flow'
                  ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/5 border-l-4 border-violet-500 text-violet-700 dark:text-violet-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Play className="w-4 h-4 shrink-0" />
                <span>5. JVM Memory Flow</span>
              </div>
              {isRead('flow') && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              )}
            </button>

            {/* Section 6: Common Errors & Tips */}
            <button
              onClick={() => setActiveSection('tips')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'tips'
                  ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/5 border-l-4 border-violet-500 text-violet-700 dark:text-violet-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>6. Common Errors & Tips</span>
              </div>
              {isRead('tips') && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              )}
            </button>

            {/* Section 7: Sample Programs */}
            <button
              onClick={() => setActiveSection('samples')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'samples'
                  ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/5 border-l-4 border-violet-500 text-violet-700 dark:text-violet-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 shrink-0" />
                <span>7. Sample Java Programs</span>
              </div>
              {isRead('samples') && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              )}
            </button>

            {/* Section 8: Summary */}
            <button
              onClick={() => setActiveSection('summary')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'summary'
                  ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/5 border-l-4 border-violet-500 text-violet-700 dark:text-violet-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Bookmark className="w-4 h-4 shrink-0" />
                <span>8. Chapter Summary</span>
              </div>
              {isRead('summary') && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              )}
            </button>

            {/* Section 9: Practice Workspace */}
            <button
              onClick={() => setActiveSection('practice_questions')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'practice_questions'
                  ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-sm font-bold'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ListChecks className="w-4 h-4 shrink-0" />
                <span>Diagnostic Workspace</span>
              </div>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold font-mono ${
                activeSection === 'practice_questions'
                  ? 'bg-white/20 text-white'
                  : 'bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300'
              }`}>
                30 Qs
              </span>
            </button>

          </div>
        </div>

        {/* RIGHT COLUMN: MAIN CONTENT VIEWPORT */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            
            {/* 1. Chapter Introduction */}
            {activeSection === 'intro' && (
              <motion.div
                key="intro-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <Compass className="w-5.5 h-5.5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">Chapter Introduction</h2>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Syllabus Milestone 1 of 8</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleReadItem('intro')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      isRead('intro')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 text-emerald-700 dark:text-emerald-400'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {isRead('intro') ? <Check className="w-3.5 h-3.5" /> : null}
                    {isRead('intro') ? 'Marked Completed' : 'Mark as Read'}
                  </button>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed space-y-4">
                  {CLASSES_OBJECTS_CHAPTER_DATA.intro.split('\n\n').map((para, i) => (
                    <p key={i} className="whitespace-pre-line">{para}</p>
                  ))}
                </div>

                {/* Info Card banner */}
                <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/10 border border-amber-100/50 dark:border-amber-900/20 flex gap-3 text-amber-800 dark:text-amber-400 text-xs leading-relaxed">
                  <Info className="w-5 h-5 shrink-0 text-amber-500" />
                  <div>
                    <span className="font-bold">ICSE Core Weightage Note:</span> "Classes and Objects" forms the absolute bedrock for compiling Section B programs in your Board Exam. Nearly **80% of points** in programming questions require accurate object structures, class-level variable encapsulations, and clean member method designs.
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => {
                      if (!isRead('intro')) toggleReadItem('intro');
                      setActiveSection('objectives');
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-violet-600 text-white font-bold rounded-xl text-xs hover:bg-violet-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Next: Learning Objectives
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 2. Learning Objectives */}
            {activeSection === 'objectives' && (
              <motion.div
                key="objectives-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <Target className="w-5.5 h-5.5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">Learning Objectives</h2>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Syllabus Milestone 2 of 8</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleReadItem('objectives')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      isRead('objectives')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 text-emerald-700 dark:text-emerald-400'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {isRead('objectives') ? <Check className="w-3.5 h-3.5" /> : null}
                    {isRead('objectives') ? 'Marked Completed' : 'Mark as Read'}
                  </button>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
                  Upon finishing this core unit, you will possess solid, exam-standard proficiency to:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CLASSES_OBJECTS_CHAPTER_DATA.learningObjectives.map((objective, idx) => (
                    <div key={idx} className="flex gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-850/60 bg-slate-50/50 dark:bg-slate-950/20 hover:border-violet-200 dark:hover:border-violet-900/30 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 flex items-center justify-center font-bold text-[11px] shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setActiveSection('intro')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Chapter Intro
                  </button>
                  <button
                    onClick={() => {
                      if (!isRead('objectives')) toggleReadItem('objectives');
                      setActiveSection('topics');
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-violet-600 text-white font-bold rounded-xl text-xs hover:bg-violet-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Next: Detailed Theory
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 3. Detailed Theory Topics */}
            {activeSection === 'topics' && (
              <motion.div
                key="topics-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/60 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <Layers className="w-5.5 h-5.5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">Detailed OOP Theory</h2>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Syllabus Milestone 3 of 8</p>
                    </div>
                  </div>
                  
                  {/* Read indicator for the active topic */}
                  <button
                    onClick={() => toggleReadItem(selectedTopicId)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      isRead(selectedTopicId)
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 text-emerald-700 dark:text-emerald-400'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {isRead(selectedTopicId) ? <Check className="w-3.5 h-3.5" /> : null}
                    {isRead(selectedTopicId) ? 'Topic Completed' : 'Mark Topic Read'}
                  </button>
                </div>

                {/* Sub-selector for topics */}
                <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none border-b border-slate-100 dark:border-slate-800/50">
                  {CLASSES_OBJECTS_CHAPTER_DATA.topics.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopicId(t.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                        selectedTopicId === t.id
                          ? 'bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border border-violet-200/60 dark:border-violet-900/30'
                          : 'text-slate-500 hover:text-slate-850 dark:hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {isRead(t.id) && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                        <span>{t.title}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Render active topic contents */}
                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                    {activeTopic.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs italic">
                    {activeTopic.shortSummary}
                  </p>
                  <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed space-y-4 pt-2">
                    {/* Convert simple markdown manually or with structured divs to prevent react-markdown complexity */}
                    {activeTopic.detailedContent.split('\n\n').map((block, bIdx) => {
                      if (block.startsWith('###')) {
                        return <h4 key={bIdx} className="font-display font-bold text-slate-900 dark:text-white text-base md:text-lg pt-3 border-l-4 border-violet-500 pl-3">{block.replace('###', '').trim()}</h4>;
                      }
                      if (block.startsWith('- ')) {
                        return (
                          <ul key={bIdx} className="list-disc pl-5 space-y-1 my-2">
                            {block.split('\n').map((li, lIdx) => (
                              <li key={lIdx} className="text-slate-600 dark:text-slate-300 text-sm">{li.replace('- ', '').trim()}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (block.startsWith('```')) {
                        const codeBody = block.replaceAll('```java', '').replaceAll('```', '').trim();
                        return (
                          <pre key={bIdx} className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                            <code>{codeBody}</code>
                          </pre>
                        );
                      }
                      return <p key={bIdx} className="whitespace-pre-line text-sm md:text-base">{block}</p>;
                    })}
                  </div>
                </div>

                <div className="pt-4 flex justify-between border-t border-slate-100 dark:border-slate-800/60">
                  <button
                    onClick={() => setActiveSection('objectives')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Objectives
                  </button>
                  <button
                    onClick={() => {
                      // Mark topic read implicitly
                      if (!isRead(selectedTopicId)) toggleReadItem(selectedTopicId);
                      setActiveSection('syntax');
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-violet-600 text-white font-bold rounded-xl text-xs hover:bg-violet-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Next: Syntax & Instantiation
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 4. Syntax & Instantiation */}
            {activeSection === 'syntax' && (
              <motion.div
                key="syntax-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <Code className="w-5.5 h-5.5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">Class Syntax & Instantiation</h2>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Syllabus Milestone 4 of 8</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleReadItem('syntax')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      isRead('syntax')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 text-emerald-700 dark:text-emerald-400'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {isRead('syntax') ? <Check className="w-3.5 h-3.5" /> : null}
                    {isRead('syntax') ? 'Marked Completed' : 'Mark as Read'}
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                    {CLASSES_OBJECTS_CHAPTER_DATA.syntaxExplanation.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold font-mono text-violet-600 uppercase">Java Implementation Syntax</span>
                      <pre className="bg-slate-950 text-slate-200 p-4 rounded-2xl font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner h-[380px]">
                        <code>{CLASSES_OBJECTS_CHAPTER_DATA.syntaxExplanation.syntaxCode}</code>
                      </pre>
                    </div>

                    <div className="space-y-4 prose prose-slate dark:prose-invert text-xs leading-relaxed h-[380px] overflow-y-auto pr-2 scrollbar-thin">
                      {CLASSES_OBJECTS_CHAPTER_DATA.syntaxExplanation.explanation.split('\n\n').map((para, i) => {
                        if (para.startsWith('###')) {
                          return <h4 key={i} className="font-display font-bold text-slate-900 dark:text-white text-sm pt-2 border-b border-slate-100 dark:border-slate-850 pb-1">{para.replace('###', '').trim()}</h4>;
                        }
                        if (para.startsWith('- ')) {
                          return (
                            <ul key={i} className="list-disc pl-4 space-y-1">
                              {para.split('\n').map((li, lIdx) => (
                                <li key={lIdx} className="text-slate-600 dark:text-slate-300 text-xs">{li.replace('- ', '').trim()}</li>
                              ))}
                            </ul>
                          );
                        }
                        if (para.startsWith('```')) {
                          return <pre key={i} className="bg-slate-900 text-slate-300 p-2.5 rounded-lg text-[10px] font-mono leading-relaxed">{para.replaceAll('```java', '').replaceAll('```', '').trim()}</pre>;
                        }
                        return <p key={i} className="text-slate-600 dark:text-slate-300">{para}</p>;
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-between border-t border-slate-100 dark:border-slate-800/60">
                  <button
                    onClick={() => setActiveSection('topics')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    OOP Theory
                  </button>
                  <button
                    onClick={() => {
                      if (!isRead('syntax')) toggleReadItem('syntax');
                      setActiveSection('flow');
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-violet-600 text-white font-bold rounded-xl text-xs hover:bg-violet-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Next: JVM Memory Flow
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 5. JVM Memory Flow */}
            {activeSection === 'flow' && (
              <motion.div
                key="flow-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <Play className="w-5.5 h-5.5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">JVM Execution Flow</h2>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Syllabus Milestone 5 of 8</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleReadItem('flow')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      isRead('flow')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 text-emerald-700 dark:text-emerald-400'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {isRead('flow') ? <Check className="w-3.5 h-3.5" /> : null}
                    {isRead('flow') ? 'Marked Completed' : 'Mark as Read'}
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                    {CLASSES_OBJECTS_CHAPTER_DATA.flowOfExecution.title}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-xs max-w-2xl leading-relaxed">
                    Instantiating an object triggers a precise sequence of structural shifts inside Java's runtime environment. Trace each step below:
                  </p>

                  <div className="space-y-4 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-violet-100 dark:before:bg-violet-900/30 pl-2">
                    {CLASSES_OBJECTS_CHAPTER_DATA.flowOfExecution.steps.map((s, idx) => (
                      <div key={idx} className="flex gap-4 items-start relative group">
                        <div className="w-8.5 h-8.5 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 border border-violet-200/50 dark:border-violet-900/30 flex items-center justify-center font-bold text-xs font-mono shrink-0 shadow-sm group-hover:scale-105 transition-all z-10">
                          {idx + 1}
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-950/20 border border-slate-100/50 dark:border-slate-850/60 flex-1">
                          <h4 className="font-display font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider">{s.step}</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-xs mt-1.5 leading-relaxed">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between border-t border-slate-100 dark:border-slate-800/60">
                  <button
                    onClick={() => setActiveSection('syntax')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Syntax Page
                  </button>
                  <button
                    onClick={() => {
                      if (!isRead('flow')) toggleReadItem('flow');
                      setActiveSection('tips');
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-violet-600 text-white font-bold rounded-xl text-xs hover:bg-violet-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Next: Board Tips & Errors
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 6. Common Errors & Tips */}
            {activeSection === 'tips' && (
              <motion.div
                key="tips-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <AlertTriangle className="w-5.5 h-5.5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">Common Errors & Board Tips</h2>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Syllabus Milestone 6 of 8</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleReadItem('tips')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      isRead('tips')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 text-emerald-700 dark:text-emerald-400'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {isRead('tips') ? <Check className="w-3.5 h-3.5" /> : null}
                    {isRead('tips') ? 'Marked Completed' : 'Mark as Read'}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  {/* Left Column: Common Compilation/Runtime Errors */}
                  <div className="space-y-4">
                    <h3 className="font-display font-extrabold text-base text-rose-600 dark:text-rose-400 flex items-center gap-2">
                      <ShieldAlert className="w-5 h-5" />
                      Syntax Traps & Compile Errors
                    </h3>
                    
                    <div className="space-y-4 h-[420px] overflow-y-auto pr-2 scrollbar-thin">
                      {CLASSES_OBJECTS_CHAPTER_DATA.commonErrors.map((err, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-rose-50/30 dark:bg-rose-950/5 border border-rose-100/40 dark:border-rose-950/20 space-y-2">
                          <h4 className="font-mono text-[11px] font-bold text-rose-700 dark:text-rose-450 uppercase tracking-tight leading-snug">
                            {idx + 1}. {err.error}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed">
                            <span className="font-semibold text-slate-700 dark:text-slate-250">Cause:</span> {err.cause}
                          </p>
                          <p className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 leading-normal">
                            <span className="font-sans font-bold text-[10px] text-slate-400 uppercase tracking-widest block mb-1">How to fix</span>
                            {err.fix}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Board Tips */}
                  <div className="space-y-4">
                    <h3 className="font-display font-extrabold text-base text-violet-600 dark:text-violet-400 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      ICSE Grade-Maximizer Tips
                    </h3>

                    <div className="space-y-4 h-[420px] overflow-y-auto pr-2 scrollbar-thin">
                      {CLASSES_OBJECTS_CHAPTER_DATA.icseBoardTips.map((tip, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-violet-50/20 dark:bg-violet-950/5 border border-violet-100/35 dark:border-violet-950/20 space-y-2 hover:border-violet-300 dark:hover:border-violet-800 transition-colors">
                          <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white flex items-start gap-2.5 leading-snug">
                            <Sparkle className="w-4 h-4 shrink-0 text-violet-500 mt-0.5 animate-pulse" />
                            {tip.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-305 text-xs leading-relaxed pl-6">
                            {tip.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="pt-4 flex justify-between border-t border-slate-100 dark:border-slate-800/60">
                  <button
                    onClick={() => setActiveSection('flow')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Memory Flow
                  </button>
                  <button
                    onClick={() => {
                      if (!isRead('tips')) toggleReadItem('tips');
                      setActiveSection('samples');
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-violet-600 text-white font-bold rounded-xl text-xs hover:bg-violet-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Next: Sample Programs
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 7. Sample Java Programs */}
            {activeSection === 'samples' && (
              <motion.div
                key="samples-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <FileText className="w-5.5 h-5.5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">Sample Java Programs</h2>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Syllabus Milestone 7 of 8</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleReadItem('samples')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      isRead('samples')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 text-emerald-700 dark:text-emerald-400'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {isRead('samples') ? <Check className="w-3.5 h-3.5" /> : null}
                    {isRead('samples') ? 'Marked Completed' : 'Mark as Read'}
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Selector tabs for sample programs */}
                  <div className="flex gap-2">
                    {CLASSES_OBJECTS_CHAPTER_DATA.samplePrograms.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSampleIdx(idx)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                          activeSampleIdx === idx
                            ? 'bg-violet-100 dark:bg-violet-950/60 border border-violet-200/50 dark:border-violet-900/40 text-violet-750 dark:text-violet-300 font-bold'
                            : 'bg-slate-50 dark:bg-slate-950/20 text-slate-500 hover:text-slate-800 dark:hover:text-white border border-transparent'
                        }`}
                      >
                        Program {idx + 1}
                      </button>
                    ))}
                  </div>

                  {/* Active sample content */}
                  {CLASSES_OBJECTS_CHAPTER_DATA.samplePrograms[activeSampleIdx] && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white">
                          {CLASSES_OBJECTS_CHAPTER_DATA.samplePrograms[activeSampleIdx].title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-350 text-xs mt-1.5 leading-relaxed">
                          {CLASSES_OBJECTS_CHAPTER_DATA.samplePrograms[activeSampleIdx].description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                        {/* Program Code */}
                        <div className="lg:col-span-8 space-y-1">
                          <span className="text-[10px] font-mono text-slate-450 uppercase font-semibold">Java Source Code</span>
                          <pre className="bg-slate-950 text-slate-100 p-4.5 rounded-2xl font-mono text-[11px] overflow-x-auto leading-relaxed border border-slate-850 h-[380px] shadow-sm">
                            <code>{CLASSES_OBJECTS_CHAPTER_DATA.samplePrograms[activeSampleIdx].code}</code>
                          </pre>
                        </div>

                        {/* Simulated Console Output */}
                        <div className="lg:col-span-4 space-y-1.5 h-full">
                          <span className="text-[10px] font-mono text-slate-450 uppercase font-semibold block">Execution Output</span>
                          <div className="bg-black text-emerald-400 p-4 rounded-2xl font-mono text-[11px] border border-slate-850 h-[380px] overflow-y-auto shadow-inner leading-normal">
                            <span className="text-[9px] uppercase tracking-wider font-sans font-bold text-slate-500 block border-b border-slate-900 pb-1 mb-2">Stdout stream</span>
                            {CLASSES_OBJECTS_CHAPTER_DATA.samplePrograms[activeSampleIdx].output}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex justify-between border-t border-slate-100 dark:border-slate-800/60">
                  <button
                    onClick={() => setActiveSection('tips')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Board Tips
                  </button>
                  <button
                    onClick={() => {
                      if (!isRead('samples')) toggleReadItem('samples');
                      setActiveSection('summary');
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-violet-600 text-white font-bold rounded-xl text-xs hover:bg-violet-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Next: Chapter Summary
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}



            {/* 9. Chapter Summary */}
            {activeSection === 'summary' && (
              <motion.div
                key="summary-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/60 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100/70 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                      <Bookmark className="w-5.5 h-5.5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">Chapter Summary</h2>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Syllabus Milestone 9 of 9</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleReadItem('summary')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      isRead('summary')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200/60 text-emerald-700 dark:text-emerald-400'
                        : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {isRead('summary') ? <Check className="w-3.5 h-3.5" /> : null}
                    {isRead('summary') ? 'Marked Completed' : 'Mark as Read'}
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                    Quick Revision Card
                  </h3>

                  <div className="space-y-3">
                    {CLASSES_OBJECTS_CHAPTER_DATA.summary.map((point, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500 mt-1" />
                        <p 
                          className="text-slate-600 dark:text-slate-300 text-xs md:text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: point }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between border-t border-slate-100 dark:border-slate-800/60">
                  <button
                    onClick={() => setActiveSection('samples')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Sample Programs
                  </button>
                  <button
                    onClick={() => {
                      if (!isRead('summary')) toggleReadItem('summary');
                      setActiveSection('practice_questions');
                    }}
                    className="inline-flex items-center gap-1.5 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-95 text-white font-extrabold rounded-xl text-xs transition-opacity shadow-md cursor-pointer uppercase tracking-wider"
                  >
                    Open Diagnostic Workspace
                    <ListChecks className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 9. Practice Workspace (10 MCQs, 10 Short Answers, 10 Programming IDE Tasks) */}
            {activeSection === 'practice_questions' && (
              <motion.div
                key="practice-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
              >
                
                {/* Workspace Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/60 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center text-white">
                      <ListChecks className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h2 className="font-display font-extrabold text-lg text-slate-900 dark:text-white leading-tight">Interactive Diagnostic Workspace</h2>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Syllabus Practice Questions • 30 Tasks</p>
                    </div>
                  </div>

                  {/* Sub-tabs selector */}
                  <div className="flex bg-slate-100 dark:bg-slate-950 p-1.2 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 self-start md:self-auto shrink-0">
                    <button
                      onClick={() => setPracticeSubTab('mcq')}
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                        practiceSubTab === 'mcq'
                          ? 'bg-white dark:bg-slate-900 text-violet-700 dark:text-violet-300 shadow-sm'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                      }`}
                    >
                      10 MCQs
                    </button>
                    <button
                      onClick={() => setPracticeSubTab('short')}
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                        practiceSubTab === 'short'
                          ? 'bg-white dark:bg-slate-900 text-violet-700 dark:text-violet-300 shadow-sm'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                      }`}
                    >
                      10 Short Ans
                    </button>
                    <button
                      onClick={() => setPracticeSubTab('programming')}
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all ${
                        practiceSubTab === 'programming'
                          ? 'bg-white dark:bg-slate-900 text-violet-700 dark:text-violet-300 shadow-sm'
                          : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                      }`}
                    >
                      10 Java IDE Programs
                    </button>
                  </div>
                </div>

                {/* Sub Tab 1: Multiple Choice Questions (10 Questions) */}
                {practiceSubTab === 'mcq' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-violet-50/20 dark:bg-violet-950/10 border border-violet-100/50 dark:border-violet-900/30 text-xs text-slate-600 dark:text-slate-350 flex gap-2">
                      <Sparkles className="w-4.5 h-4.5 shrink-0 text-violet-500" />
                      <span>Pick your answer. Real-time correctness, core explanations, and board tips are instantly revealed.</span>
                    </div>

                    <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                      {CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.mcqs.map((q, idx) => {
                        const isRevealed = revealedMcqs[q.id];
                        const selectedAns = selectedMcqAnswers[q.id];
                        return (
                          <div key={q.id} className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase font-mono bg-slate-100 dark:bg-slate-850 text-slate-500 dark:text-slate-400">
                                MCQ {idx + 1}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">1 Mark • {q.difficulty}</span>
                            </div>

                            <p className="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-relaxed">
                              {q.questionText}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {q.options.map(opt => {
                                const isSelected = selectedAns === opt;
                                const isCorrect = q.correctAnswer === opt;
                                return (
                                  <button
                                    key={opt}
                                    disabled={isRevealed}
                                    onClick={() => {
                                      setSelectedMcqAnswers(prev => ({ ...prev, [q.id]: opt }));
                                      setRevealedMcqs(prev => ({ ...prev, [q.id]: true }));
                                    }}
                                    className={`p-3 rounded-xl text-left text-xs cursor-pointer border transition-all ${
                                      isRevealed
                                        ? isCorrect
                                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-800 dark:text-emerald-400 font-semibold'
                                          : isSelected
                                            ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 text-rose-800 dark:text-rose-450'
                                            : 'bg-slate-50/50 dark:bg-slate-950/10 border-slate-200/60 dark:border-slate-850/60 text-slate-400'
                                        : 'bg-slate-50/60 dark:bg-slate-950/10 border-slate-200/80 dark:border-slate-850/80 text-slate-700 dark:text-slate-300 hover:border-violet-350 dark:hover:border-violet-900'
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Explanation Banner */}
                            {isRevealed && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-xl text-xs border ${
                                  selectedAns === q.correctAnswer
                                    ? 'bg-emerald-50/30 dark:bg-emerald-950/10 border-emerald-100/50 text-emerald-800 dark:text-emerald-400'
                                    : 'bg-rose-50/30 dark:bg-rose-950/10 border-rose-100/50 text-slate-600 dark:text-slate-300'
                                }`}
                              >
                                <div className="flex items-center gap-1.5 font-bold mb-1">
                                  {selectedAns === q.correctAnswer ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                  ) : (
                                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                                  )}
                                  <span>{selectedAns === q.correctAnswer ? 'Correct! Excellent logic' : `Incorrect. Correct: ${q.correctAnswer}`}</span>
                                </div>
                                <p className="leading-relaxed mt-1 text-[11px] opacity-90">{q.explanation}</p>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Sub Tab 2: Short Answer Questions (10 Questions with AI checking) */}
                {practiceSubTab === 'short' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-violet-50/20 dark:bg-violet-950/10 border border-violet-100/50 dark:border-violet-900/30 text-xs text-slate-600 dark:text-slate-350 flex gap-2">
                      <GraduationCap className="w-4.5 h-4.5 shrink-0 text-violet-500" />
                      <span>Write your answers directly in the fields below. Clicking "Check Answer" activates our server-side board-examiner AI to evaluate your answer with ICSE Class 10 keywords standards.</span>
                    </div>

                    <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                      {CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.shortAnswers.map((q, idx) => {
                        const evaluation = shortEvaluations[q.id];
                        const isEvaluating = evaluatingShortIds[q.id];
                        const error = shortErrors[q.id];
                        return (
                          <div key={q.id} className="p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950/20 space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase font-mono bg-slate-100 dark:bg-slate-850 text-slate-500 dark:text-slate-400">
                                Question {idx + 1}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">{q.marks} Marks • {q.difficulty}</span>
                            </div>

                            <p className="font-display font-extrabold text-sm text-slate-900 dark:text-white leading-relaxed">
                              {q.questionText}
                            </p>

                            <div className="space-y-2">
                              <textarea
                                value={writtenShortAnswers[q.id] || ''}
                                onChange={(e) => setWrittenShortAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                                placeholder="Type your board-grade answer here... Highlight key OOP terms (e.g. state, blueprint, memory allocation)."
                                rows={3}
                                className="w-full rounded-xl border border-slate-200 dark:border-slate-850 bg-slate-50/30 dark:bg-slate-950/20 p-3 text-xs focus:ring-1 focus:ring-violet-500 outline-none text-slate-850 dark:text-slate-200 font-sans leading-relaxed"
                              />
                              
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] text-slate-400">Subject: ICSE Computer Applications</span>
                                <button
                                  onClick={() => handleCheckShortAnswer(q.id, q.questionText, q.modelAnswer)}
                                  disabled={isEvaluating}
                                  className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:opacity-90 rounded-xl text-xs font-bold shrink-0 shadow-sm transition-opacity disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
                                >
                                  {isEvaluating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <CheckSquare className="w-3.5 h-3.5" />}
                                  {isEvaluating ? 'Checking...' : 'Check Answer'}
                                </button>
                              </div>
                            </div>

                            {error && (
                              <p className="text-[11px] text-rose-500 font-medium font-sans">{error}</p>
                            )}

                            {/* Evaluation result rendering */}
                            {evaluation && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="p-4.5 rounded-2xl bg-violet-50/30 dark:bg-violet-950/10 border border-violet-100/50 dark:border-violet-900/20 space-y-3 mt-4"
                              >
                                <div className="flex justify-between items-center border-b border-violet-100/40 dark:border-violet-900/20 pb-2">
                                  <div className="flex items-center gap-1.5 font-bold text-xs text-violet-750 dark:text-violet-300">
                                    <Award className="w-4 h-4 text-violet-500" />
                                    <span>AI Board Evaluation</span>
                                  </div>
                                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 rounded-full">
                                    Grade: {evaluation.marksObtained} / {q.marks} Marks ({evaluation.status})
                                  </span>
                                </div>

                                <div className="space-y-2 text-xs">
                                  <p className="text-slate-600 dark:text-slate-350 leading-relaxed">
                                    <span className="font-bold text-slate-700 dark:text-slate-200">Diagnostics:</span> {evaluation.explanation}
                                  </p>

                                  {evaluation.missingPoints && evaluation.missingPoints.length > 0 && (
                                    <div className="space-y-1 mt-1">
                                      <span className="font-bold text-slate-700 dark:text-slate-200 text-[11px] block">Missing Keywords or Concepts:</span>
                                      <ul className="list-disc pl-4 space-y-0.5">
                                        {evaluation.missingPoints.map((pt: string, pIdx: number) => (
                                          <li key={pIdx} className="text-rose-600 dark:text-rose-400 text-[11px]">{pt}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  <div className="p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850/60 rounded-xl space-y-1">
                                    <span className="font-bold text-slate-400 text-[9px] uppercase tracking-wider block">Board Standard Reference Answer</span>
                                    <p className="text-slate-600 dark:text-slate-300 font-sans text-xs italic">{evaluation.improvedAnswer}</p>
                                  </div>
                                </div>
                              </motion.div>
                            )}

                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Sub Tab 3: Programming Questions (10 Questions with fully loaded Java IDE & compiler) */}
                {practiceSubTab === 'programming' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-violet-50/20 dark:bg-violet-950/10 border border-violet-100/50 dark:border-violet-900/30 text-xs text-slate-600 dark:text-slate-350 flex gap-2">
                      <Code className="w-4.5 h-4.5 shrink-0 text-violet-500 animate-pulse" />
                      <span>Welcome to the Java Compiling Simulator! Select a program on the left, implement your class in the editor, click "Run Code" to compile/execute, and click "Check Answer" to submit to the AI Board Examiner!</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left Side: Selecting Question List & Description */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono font-bold text-slate-450 uppercase block">Select Program Task</label>
                          <select
                            value={activeProgIdx}
                            onChange={(e) => setActiveProgIdx(Number(e.target.value))}
                            className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs outline-none focus:ring-1 focus:ring-violet-500 font-display font-bold text-slate-800 dark:text-slate-200"
                          >
                            {CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.programming.map((p, idx) => (
                              <option key={p.id} value={idx}>
                                {p.title} ({p.difficulty})
                              </option>
                            ))}
                          </select>
                        </div>

                        {CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.programming[activeProgIdx] && (
                          <div className="p-5.5 rounded-2xl bg-slate-50/60 dark:bg-slate-950/20 border border-slate-200/50 dark:border-slate-850/60 space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300">
                                {CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.programming[activeProgIdx].topic}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">5 Marks</span>
                            </div>

                            <h4 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
                              {CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.programming[activeProgIdx].title}
                            </h4>

                            <p className="text-slate-650 dark:text-slate-350 text-xs leading-relaxed whitespace-pre-wrap">
                              {CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.programming[activeProgIdx].questionText}
                            </p>

                            <div className="p-3 bg-amber-50/30 dark:bg-amber-950/5 border border-amber-100/40 dark:border-amber-900/20 rounded-xl text-[10px] text-amber-800 dark:text-amber-400 leading-normal space-y-1">
                              <span className="font-bold uppercase tracking-wide block">ICSE Submission Checklist:</span>
                              <p>1. Data members must be encapsulated (private).</p>
                              <p>2. Member methods must be public.</p>
                              <p>3. Do not forget to instantiate objects using the 'new' operator inside your main method to run tests!</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Side: Code Editor, Run actions and live output */}
                      <div className="lg:col-span-7 space-y-4">
                        
                        {/* Custom Monospaced Code Editor */}
                        <div className="space-y-1 relative">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono font-bold text-slate-450 uppercase flex items-center gap-1">
                              <Code className="w-3.5 h-3.5" />
                              Interactive Java Source (SDK 17 Compiler)
                            </span>
                            <button
                              onClick={() => {
                                if (window.confirm("Are you sure you want to discard your edits and reset the class boilerplate?")) {
                                  setWrittenCode(CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.programming[activeProgIdx].boilerplateCode);
                                }
                              }}
                              className="text-[9px] text-rose-500 hover:underline font-bold uppercase tracking-wider"
                            >
                              Reset Boilerplate
                            </button>
                          </div>

                          <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 overflow-hidden shadow-lg">
                            {/* Editor Tab indicators */}
                            <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                              <span className="ml-3 font-bold text-[10px] text-slate-500">Book.java</span>
                            </div>

                            {/* Main TextArea Code Block */}
                            <textarea
                              value={writtenCode}
                              onChange={(e) => setWrittenCode(e.target.value)}
                              onKeyDown={handleEditorKeyDown}
                              placeholder="// Implement your Java class here..."
                              rows={16}
                              className="w-full bg-slate-950 text-slate-100 p-4.5 font-mono text-[11px] leading-relaxed outline-none resize-none border-none focus:ring-0"
                            />
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-3 justify-end">
                          {/* Run Code */}
                          <button
                            onClick={handleRunJavaCode}
                            disabled={isRunningCode || isEvaluatingCode}
                            className="px-4 py-2.5 bg-slate-100 dark:bg-slate-850 border border-slate-250 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                          >
                            {isRunningCode ? <RefreshCw className="w-3.5 h-3.5 animate-spin text-violet-500" /> : <Play className="w-3.5 h-3.5 fill-violet-500 text-violet-500" />}
                            {isRunningCode ? 'Compiling...' : 'Run Code'}
                          </button>

                          {/* Check Answer */}
                          <button
                            onClick={() => handleEvaluateJavaCode(CLASSES_OBJECTS_CHAPTER_DATA.practiceQuestions.programming[activeProgIdx])}
                            disabled={isEvaluatingCode || isRunningCode}
                            className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-opacity flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                          >
                            {isEvaluatingCode ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <CheckSquare className="w-3.5 h-3.5" />}
                            {isEvaluatingCode ? 'Evaluating...' : 'Check Answer'}
                          </button>
                        </div>

                        {/* Live compilation / run outputs */}
                        {(consoleOutput.status !== null || consoleOutput.errors) && (
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-2xl border border-slate-800 bg-black overflow-hidden shadow-inner"
                          >
                            <div className="bg-slate-950 border-b border-slate-900 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400 font-mono">
                              <span className="font-bold flex items-center gap-1.5 uppercase text-[9px] tracking-wider text-slate-400">
                                <Terminal className="w-3.5 h-3.5" />
                                JVM Console Stream Output
                              </span>
                              <span className={`text-[9px] font-bold uppercase ${consoleOutput.status === 'success' ? 'text-emerald-500' : 'text-rose-500'}`}>
                                {consoleOutput.status === 'success' ? 'Build Success' : 'Build Failed'}
                              </span>
                            </div>

                            <div className="p-4 font-mono text-[11px] leading-relaxed max-h-[180px] overflow-y-auto">
                              {consoleOutput.status === 'success' ? (
                                <pre className="text-emerald-400 whitespace-pre-wrap">{consoleOutput.stdout}</pre>
                              ) : (
                                <pre className="text-rose-500 whitespace-pre-wrap">{consoleOutput.errors}</pre>
                              )}
                            </div>
                          </motion.div>
                        )}

                        {/* Code Evaluation Details */}
                        {codeEvaluation && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-5 rounded-2xl bg-violet-50/20 dark:bg-violet-950/10 border border-violet-100/50 dark:border-violet-900/25 space-y-4"
                          >
                            <div className="flex justify-between items-center border-b border-violet-100/40 dark:border-violet-900/20 pb-2.5">
                              <div className="flex items-center gap-1.5 font-bold text-xs text-violet-755 dark:text-violet-300">
                                <Award className="w-4 h-4 text-violet-500" />
                                <span>AI Board Evaluation Summary</span>
                              </div>
                              <span className="text-xs font-mono font-extrabold px-3 py-1 bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 rounded-full shadow-inner">
                                Score: {codeEvaluation.marksObtained} / 5 Marks ({codeEvaluation.status})
                              </span>
                            </div>

                            <div className="space-y-3.5 text-xs">
                              <div className="space-y-1">
                                <span className="font-bold text-slate-750 dark:text-slate-200">Constructive Feedback:</span>
                                <p className="text-slate-600 dark:text-slate-350 leading-relaxed text-xs">
                                  {codeEvaluation.explanation}
                                </p>
                              </div>

                              {codeEvaluation.missingPoints && codeEvaluation.missingPoints.length > 0 && (
                                <div className="space-y-1.5">
                                  <span className="font-bold text-slate-750 dark:text-slate-200 text-xs">Missed Requirements or Compilation Flaws:</span>
                                  <ul className="list-disc pl-4 space-y-0.5">
                                    {codeEvaluation.missingPoints.map((pt: string, pIdx: number) => (
                                      <li key={pIdx} className="text-rose-600 dark:text-rose-450 text-[11px] leading-relaxed">{pt}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              <div className="space-y-1">
                                <span className="font-bold text-slate-450 text-[10px] uppercase tracking-wider block">Model Implementation Code</span>
                                <pre className="bg-slate-950 text-slate-300 p-3.5 rounded-xl font-mono text-[10px] overflow-x-auto leading-relaxed border border-slate-900">
                                  <code>{codeEvaluation.improvedAnswer}</code>
                                </pre>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {codeEvalError && (
                          <div className="p-3.5 rounded-xl bg-rose-50/50 dark:bg-rose-950/10 border border-rose-200/50 text-rose-500 text-xs font-sans">
                            {codeEvalError}
                          </div>
                        )}

                      </div>

                    </div>
                  </div>
                )}

                <div className="pt-4 flex justify-between border-t border-slate-100 dark:border-slate-800/60">
                  <button
                    onClick={() => setActiveSection('summary')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Chapter Summary
                  </button>
                  <button
                    onClick={() => {
                      // Trigger back to chapters
                      onBack();
                    }}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-xl text-xs hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                  >
                    All Computer Chapters
                  </button>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
