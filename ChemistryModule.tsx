import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, BookOpen, Sparkles, ChevronRight, Compass,
  Zap, AlertTriangle, HelpCircle, FileText,
  Bookmark, Info, CheckCircle2, Award, Sparkle,
  Layers, FlaskConical, Target, ListChecks, CheckCircle,
  Lightbulb, GraduationCap, Eye, RefreshCw, BookOpenCheck,
  Atom, ShieldAlert, Check, ChevronDown, Activity
} from 'lucide-react';
import { UserProfile } from '../types';
import { PERIODIC_TABLE_CHAPTER_DATA, TopicData } from '../data/chemistryPeriodicTableData';
import { CHEMICAL_BONDING_CHAPTER_DATA } from '../data/chemistryChemicalBondingData';
import { ACIDS_BASES_SALTS_CHAPTER_DATA } from '../data/chemistryAcidsBasesSaltsData';
import { ANALYTICAL_CHEMISTRY_CHAPTER_DATA } from '../data/chemistryAnalyticalChemistryData';
import { CHEMISTRY_QUESTIONS_DATA } from '../data/chemistryQuestionsData';

interface Chapter {
  id: string;
  name: string;
}

interface ChemistryModuleProps {
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

type MainSectionType = 'intro' | 'objectives' | 'topics' | 'applications' | 'summary' | 'lewis' | 'practice_questions' | 'charts';

export default function ChemistryModule({ chapter, onBack, colorTheme }: ChemistryModuleProps) {
  const isBonding = chapter.id === 'c-2';
  const isAcidsBases = chapter.id === 'c-3';
  const isAnalyticalChemistry = chapter.id === 'c-4';
  const chapterData = isBonding 
    ? CHEMICAL_BONDING_CHAPTER_DATA 
    : (isAcidsBases 
        ? ACIDS_BASES_SALTS_CHAPTER_DATA 
        : (isAnalyticalChemistry ? ANALYTICAL_CHEMISTRY_CHAPTER_DATA : PERIODIC_TABLE_CHAPTER_DATA));

  const [activeSection, setActiveSection] = useState<MainSectionType>('intro');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    isBonding 
      ? 'cb-topic-1' 
      : (isAcidsBases 
          ? 'abs-topic-1' 
          : (isAnalyticalChemistry ? 'ac-topic-1' : 'topic-1'))
  );

  // Lewis structures states
  const [selectedLewisMolecule, setSelectedLewisMolecule] = useState<string>(
    CHEMICAL_BONDING_CHAPTER_DATA.lewisExamples[0].molecule
  );
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  // Practice questions states
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    mcq: true,
    short: false,
    free: false,
  });
  const [selectedMcqAnswers, setSelectedMcqAnswers] = useState<Record<string, string>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Written answers states
  const [writtenAnswers, setWrittenAnswers] = useState<Record<string, string>>({});
  const [evaluations, setEvaluations] = useState<Record<string, any>>({});
  const [evaluatingIds, setEvaluatingIds] = useState<Record<string, boolean>>({});
  const [evaluationErrors, setEvaluationErrors] = useState<Record<string, string>>({});

  const handleCheckAnswer = async (questionId: string, questionText: string, modelAnswer: string, isShort: boolean) => {
    const studentAnswer = writtenAnswers[questionId]?.trim();
    if (!studentAnswer) {
      setEvaluationErrors(prev => ({ ...prev, [questionId]: 'Please write your answer before checking.' }));
      return;
    }

    setEvaluationErrors(prev => ({ ...prev, [questionId]: '' }));
    setEvaluatingIds(prev => ({ ...prev, [questionId]: true }));

    try {
      const response = await fetch('/api/quiz/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionText,
          correctAnswer: modelAnswer,
          studentAnswer,
          marksAllocated: isShort ? 3 : 5,
          subject: 'chemistry',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate answer. Please try again.');
      }

      const result = await response.json();
      if (result.success && result.evaluation) {
        setEvaluations(prev => ({ ...prev, [questionId]: result.evaluation }));
      } else {
        throw new Error(result.error || 'Evaluation was unsuccessful.');
      }
    } catch (err: any) {
      setEvaluationErrors(prev => ({ ...prev, [questionId]: err.message || 'Error communicating with evaluation server.' }));
    } finally {
      setEvaluatingIds(prev => ({ ...prev, [questionId]: false }));
    }
  };

  // Sticky User Profile for personalized study progress tracking
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

  const storageKey = `studysphere_read_chemistry_${userProfile?.email || 'guest'}_${chapter.id}`;

  // Read tracking states
  const [readItems, setReadItems] = useState<string[]>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(readItems));
  }, [readItems, storageKey]);

  useEffect(() => {
    setActiveSection('intro');
    setSelectedTopicId(isBonding ? 'cb-topic-1' : (isAcidsBases ? 'abs-topic-1' : (isAnalyticalChemistry ? 'ac-topic-1' : 'topic-1')));
    setSelectedLewisMolecule(CHEMICAL_BONDING_CHAPTER_DATA.lewisExamples[0].molecule);
    setActiveStepIdx(0);
    setExpandedCategories({
      mcq: true,
      short: false,
      free: false,
    });
    setSelectedMcqAnswers({});
    setRevealedAnswers({});
    setWrittenAnswers({});
    setEvaluations({});
    setEvaluatingIds({});
    setEvaluationErrors({});
  }, [chapter.id, isBonding, isAcidsBases, isAnalyticalChemistry]);

  useEffect(() => {
    setActiveStepIdx(0);
  }, [selectedLewisMolecule]);

  const toggleReadItem = (itemId: string) => {
    setReadItems(prev => 
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  const isRead = (itemId: string) => readItems.includes(itemId);

  // Statistics calculation
  const totalSubsections = isBonding
    ? CHEMICAL_BONDING_CHAPTER_DATA.topics.length + CHEMICAL_BONDING_CHAPTER_DATA.lewisExamples.length + 5
    : (isAnalyticalChemistry
        ? chapterData.topics.length + 6 // intro + objectives + topics + charts + summary + practice_questions
        : chapterData.topics.length + 5); // intro + objectives + apps + summary + practice_questions
  const readCount = readItems.length;
  const progressPercent = Math.round((readCount / totalSubsections) * 100);

  // Get active topic data
  const activeTopic = chapterData.topics.find(t => t.id === selectedTopicId) || chapterData.topics[0];

  // Quick decoration element state (interactive Sodium/Bonding element card)
  const [showShellAnimation, setShowShellAnimation] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0">
      {/* HEADER BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:shadow-sm transition-all cursor-pointer"
            id="chem-back-button"
            title="Go back to chapters"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                ICSE Class 10 Chemistry
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">
                Core Theory Module
              </span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              {chapterData.title}
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
                className="text-pink-500 transition-all duration-500"
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
              Completed {readCount} of {totalSubsections} milestones
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1 mt-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-pink-500 to-indigo-500 h-full transition-all duration-500" 
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

            {/* Navigation buttons */}
            <button
              onClick={() => setActiveSection('intro')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'intro'
                  ? 'bg-gradient-to-r from-pink-500/10 to-indigo-500/5 border-l-4 border-pink-500 text-pink-700 dark:text-pink-300 bg-slate-50 dark:bg-slate-950/40'
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

            <button
              onClick={() => setActiveSection('objectives')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'objectives'
                  ? 'bg-gradient-to-r from-pink-500/10 to-indigo-500/5 border-l-4 border-pink-500 text-pink-700 dark:text-pink-300 bg-slate-50 dark:bg-slate-950/40'
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

            <button
              onClick={() => setActiveSection('topics')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'topics'
                  ? 'bg-gradient-to-r from-pink-500/10 to-indigo-500/5 border-l-4 border-pink-500 text-pink-700 dark:text-pink-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FlaskConical className="w-4 h-4 shrink-0" />
                <span>3. Detailed Topics ({chapterData.topics.length})</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300">
                {chapterData.topics.filter(t => isRead(t.id)).length}/{chapterData.topics.length}
              </span>
            </button>

            {isAnalyticalChemistry ? (
              <button
                onClick={() => setActiveSection('charts')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeSection === 'charts'
                    ? 'bg-gradient-to-r from-pink-500/10 to-indigo-500/5 border-l-4 border-pink-500 text-pink-700 dark:text-pink-300 bg-slate-50 dark:bg-slate-950/40'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 shrink-0 text-pink-500" />
                  <span>4. Identification Charts</span>
                </div>
                {isRead('charts') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                )}
              </button>
            ) : isBonding ? (
              <button
                onClick={() => setActiveSection('lewis')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeSection === 'lewis'
                    ? 'bg-gradient-to-r from-pink-500/10 to-indigo-500/5 border-l-4 border-pink-500 text-pink-700 dark:text-pink-300 bg-slate-50 dark:bg-slate-950/40'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>4. Lewis Structures</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 font-mono">
                  {CHEMICAL_BONDING_CHAPTER_DATA.lewisExamples.filter(ex => isRead(`lewis-${ex.molecule}`)).length}/10
                </span>
              </button>
            ) : (
              <button
                onClick={() => setActiveSection('applications')}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeSection === 'applications'
                    ? 'bg-gradient-to-r from-pink-500/10 to-indigo-500/5 border-l-4 border-pink-500 text-pink-700 dark:text-pink-300 bg-slate-50 dark:bg-slate-950/40'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>4. Daily Life Applications</span>
                </div>
                {isRead('applications') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                )}
              </button>
            )}

            <button
              onClick={() => setActiveSection('summary')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'summary'
                  ? 'bg-gradient-to-r from-pink-500/10 to-indigo-500/5 border-l-4 border-pink-500 text-pink-700 dark:text-pink-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 shrink-0" />
                <span>5. Chapter Summary</span>
              </div>
              {isRead('summary') && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              )}
            </button>

            <button
              onClick={() => setActiveSection('practice_questions')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeSection === 'practice_questions'
                  ? 'bg-gradient-to-r from-pink-500/10 to-indigo-500/5 border-l-4 border-pink-500 text-pink-700 dark:text-pink-300 bg-slate-50 dark:bg-slate-950/40'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ListChecks className="w-4 h-4 shrink-0" />
                <span>6. Practice Questions</span>
              </div>
              {isRead('practice_questions') && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              )}
            </button>
          </div>

          {/* DYNAMIC METADATA / STATS CARD (Aesthetic decoration, highly structured, no AI slop) */}
          <div className="hidden lg:block bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
            
            {isBonding ? (
              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-pink-400">
                  <Atom className="w-4 h-4 animate-spin-slow" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Bonding Visualizer</span>
                </div>

                {/* Chemical Bonding Interactive Display */}
                <div 
                  className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between transition-all cursor-pointer hover:bg-white/10"
                  onClick={() => setShowShellAnimation(prev => !prev)}
                >
                  <div>
                    <div className="text-[9px] text-slate-400 font-mono">Reaction: Na + Cl → NaCl</div>
                    <div className="text-xl font-black font-mono tracking-tight text-pink-400 mt-0.5">Ionic Bond</div>
                    <div className="text-[10px] text-slate-300 font-medium">Sodium Chloride</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] text-slate-400 font-mono">Transfer: 1 e⁻</div>
                    <div className="text-[10px] text-emerald-400 font-bold mt-1 uppercase tracking-wider">Na⁺ and Cl⁻</div>
                    <div className="text-[8px] text-slate-400 italic">Click to view transfer</div>
                  </div>
                </div>

                {showShellAnimation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-2.5 bg-slate-950 rounded-lg border border-white/5 text-[10px] font-mono space-y-2 text-slate-400"
                  >
                    <p className="text-pink-400 font-bold">⚡ Ionic Crystal Formation:</p>
                    <div className="flex items-center justify-between p-1.5 bg-white/5 rounded border border-white/5 text-[9px]">
                      <div className="text-center">
                        <span className="text-amber-400">Na [2,8,1]</span>
                        <span className="block text-[8px] text-slate-500">loses 1 e⁻</span>
                      </div>
                      <span className="text-pink-500">➔</span>
                      <div className="text-center">
                        <span className="text-emerald-400">Cl [2,8,7]</span>
                        <span className="block text-[8px] text-slate-500">gains 1 e⁻</span>
                      </div>
                    </div>
                    <p className="text-[9px] text-slate-300">
                      The electron is transferred completely from Na to Cl, forming Na⁺ and Cl⁻. These oppositely charged ions attract each other, forming a high-melting ionic compound.
                    </p>
                  </motion.div>
                )}

                <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 leading-relaxed">
                  Study how atoms lose, gain, or share valence electrons to form stable compounds.
                </div>
              </div>
            ) : isAcidsBases ? (
              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-pink-400">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Dynamic pH Scale</span>
                </div>

                {/* pH Scale Interactive Display */}
                <div 
                  className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col justify-between transition-all cursor-pointer hover:bg-white/10"
                  onClick={() => setShowShellAnimation(prev => !prev)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-[9px] text-slate-400 font-mono">Neutral pH: 7.0</div>
                      <div className="text-xl font-black font-mono tracking-tight text-emerald-400 mt-0.5">Water [H₂O]</div>
                      <div className="text-[10px] text-slate-300 font-medium font-mono">pH = 7.0 (Neutral)</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] text-slate-400 font-mono">Dissociation</div>
                      <div className="text-[10px] text-emerald-400 font-bold mt-1 uppercase tracking-wider">H₃O⁺ + OH⁻</div>
                      <div className="text-[8px] text-slate-400 italic">Click to view details</div>
                    </div>
                  </div>
                </div>

                {showShellAnimation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-2.5 bg-slate-950 rounded-lg border border-white/5 text-[10px] font-mono space-y-1 text-slate-400"
                  >
                    <p className="text-pink-400 font-bold">⚡ Dissociation Reactions:</p>
                    <p>• Acid: <span className="text-white">HCl + H₂O ⇌ H₃O⁺ + Cl⁻</span></p>
                    <p>• Alkali: <span className="text-white">NaOH ⎯→ Na⁺ + OH⁻</span></p>
                    <p>• Neutralization: <span className="text-pink-400 font-bold">H₃O⁺ + OH⁻ ⇌ 2H₂O</span></p>
                    <p className="text-[9px] text-amber-400/80 italic mt-1">In pure water, [H₃O⁺] = [OH⁻] = 10⁻⁷ mol/L, giving pH = 7.0.</p>
                  </motion.div>
                )}

                <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 leading-relaxed">
                  Understand how pH, indicators, and salt preparations determine chemical behaviors.
                </div>
              </div>
            ) : isAnalyticalChemistry ? (
              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-pink-400">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Dynamic Reagents</span>
                </div>

                {/* Analytical Chemistry Interactive Display */}
                <div 
                  className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col justify-between transition-all cursor-pointer hover:bg-white/10"
                  onClick={() => setShowShellAnimation(prev => !prev)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-[9px] text-slate-400 font-mono font-bold">Cu²⁺ Identification</div>
                      <div className="text-lg font-black font-mono tracking-tight text-sky-400 mt-0.5">Cu(OH)₂↓</div>
                      <div className="text-[9px] text-slate-300 font-mono">Pale Blue PPT</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] text-slate-400 font-mono">Excess NH₄OH</div>
                      <div className="text-[10px] text-indigo-400 font-bold mt-1 uppercase tracking-wider">Inky Blue</div>
                      <div className="text-[8px] text-slate-400 italic">Click to view details</div>
                    </div>
                  </div>
                </div>

                {showShellAnimation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-2.5 bg-slate-950 rounded-lg border border-white/5 text-[10px] font-mono space-y-1 text-slate-400"
                  >
                    <p className="text-pink-400 font-bold">⚡ Complex Coordination:</p>
                    <p className="text-white">Cu(OH)₂ + (NH₄)₂SO₄ + 2NH₃ ⎯→ [Cu(NH₃)₄]SO₄ + 2H₂O</p>
                    <p className="text-[9px] text-amber-400/80 italic mt-1">The pale blue precipitate dissolves completely in excess NH₄OH to form soluble tetraamminecopper(II) complex.</p>
                  </motion.div>
                )}

                <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 leading-relaxed">
                  Analyze cations and anions using specialized alkaline precipitation reagents.
                </div>
              </div>
            ) : (
              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-pink-400">
                  <Atom className="w-4 h-4 animate-spin-slow" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-mono">Interactive Atom</span>
                </div>

                {/* Chemical Element Interactive Display */}
                <div 
                  className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex items-center justify-between transition-all cursor-pointer hover:bg-white/10"
                  onClick={() => setShowShellAnimation(prev => !prev)}
                >
                  <div>
                    <div className="text-[9px] text-slate-400 font-mono">Atomic No. 11</div>
                    <div className="text-xl font-black font-mono tracking-tight text-pink-400 mt-0.5">Na</div>
                    <div className="text-[10px] text-slate-300 font-medium">Sodium</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] text-slate-400 font-mono">Shells: 2, 8, 1</div>
                    <div className="text-[10px] text-emerald-400 font-bold mt-1 uppercase tracking-wider">Group 1, Period 3</div>
                    <div className="text-[8px] text-slate-400 italic">Click to trigger electron pulse</div>
                  </div>
                </div>

                {showShellAnimation && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-2.5 bg-slate-950 rounded-lg border border-white/5 text-[10px] font-mono space-y-1 text-slate-400"
                  >
                    <p className="text-pink-400">⚡ Valence Electron configuration:</p>
                    <p>• K-Shell: <span className="text-white">2 e⁻</span> (Full)</p>
                    <p>• L-Shell: <span className="text-white">8 e⁻</span> (Stable octet)</p>
                    <p>• M-Shell: <span className="text-pink-400 font-bold">1 e⁻</span> (Highly reactive!)</p>
                    <p className="text-[9px] text-amber-400/80 italic mt-1">Sodium easily loses this 1 electron to achieve stability, making it highly metallic (electropositive).</p>
                  </motion.div>
                )}

                <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 leading-relaxed">
                  Study the trends and parameters to dominate ICSE Class 10 Chemistry board exam.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: MAIN SCREEN CONTENT */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            
            {/* SECTION 1: CHAPTER INTRODUCTION */}
            {activeSection === 'intro' && (
              <motion.div
                key="intro-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Hero Banner */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-slate-800 p-8 shadow-md">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative max-w-3xl space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[10px] font-bold uppercase tracking-wider">
                      <Sparkle className="w-3 h-3 animate-pulse" /> Chapter Introduction
                    </span>
                    <h2 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
                      {isBonding ? "Decoding the Forces That Hold Matter Together" : "Unifying the Building Blocks of Chemical Science"}
                    </h2>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      {isBonding 
                        ? "Every material in our universe is shaped by how its atoms connect. From strong ionic crystals to flexible covalent chains, let's explore the science of bonding."
                        : "Every chemical reaction, state of matter, and material technology around you is governed by the principles of the Periodic Table. Let's delve into its profound beauty and foundational importance."
                      }
                    </p>
                  </div>
                </div>

                {/* Sub-blocks of Intro */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Importance Block */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-3.5">
                    <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30 w-fit">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                      {isBonding 
                        ? "Importance of Bonding" 
                        : (isAcidsBases ? "Importance of Acids, Bases & Salts" : "Importance of the Table")
                      }
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {chapterData.chapterIntro.importance}
                    </p>
                  </div>

                  {/* Why Atoms Form Bonds / Need for Classification Block */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 w-fit">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                      {isBonding 
                        ? "Why Atoms Form Bonds" 
                        : (isAcidsBases ? "Classical vs Arrhenius Concept" : "Need for Classification")
                      }
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {isBonding 
                        ? (chapterData.chapterIntro as any).whyAtomsFormBonds
                        : (isAcidsBases 
                            ? (chapterData.chapterIntro as any).aboutAcidsBases 
                            : (chapterData.chapterIntro as any).needForClassification
                          )
                      }
                    </p>
                  </div>

                  {/* ICSE Relevance Block */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 w-fit">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                      Importance in ICSE Syllabus
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {chapterData.chapterIntro.icseImportance}
                    </p>
                  </div>
                </div>

                {/* Mark as Completed Section Block */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => toggleReadItem('intro')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                      isRead('intro')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/30'
                        : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                    }`}
                  >
                    {isRead('intro') ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Completed Section</span>
                      </>
                    ) : (
                      <>
                        <BookOpenCheck className="w-4 h-4" />
                        <span>Mark as Completed & Read</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* SECTION 2: LEARNING OBJECTIVES */}
            {activeSection === 'objectives' && (
              <motion.div
                key="objectives-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/50 pb-4">
                    <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Core Learning Objectives
                      </h2>
                      <p className="text-xs text-slate-400">
                        Syllabus boundaries and key targets for Class 10 Board prep
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    By completing this module, you should align your preparation with these core CISCE expectations. Check off each goal as you progress through the topics.
                  </p>

                  <div className="space-y-3">
                    {chapterData.learningObjectives.map((obj, idx) => {
                      const objId = `obj-${idx}`;
                      const hasCompletedObj = isRead(objId);
                      return (
                        <div 
                          key={idx}
                          onClick={() => toggleReadItem(objId)}
                          className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
                            hasCompletedObj 
                              ? 'bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-100 dark:border-emerald-950/40 text-slate-800 dark:text-slate-200' 
                              : 'bg-slate-50 dark:bg-slate-950/20 border-slate-100 dark:border-slate-800/40 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                            hasCompletedObj 
                              ? 'bg-emerald-500 border-emerald-500 text-white' 
                              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                          }`}>
                            {hasCompletedObj && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div className="text-xs font-medium leading-relaxed">
                            {obj}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mark as Completed Section Block */}
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-800/50">
                    <span className="text-[10px] text-slate-400 font-mono">
                      Completed {chapterData.learningObjectives.filter((_, idx) => isRead(`obj-${idx}`)).length} of {chapterData.learningObjectives.length} objectives
                    </span>
                    <button
                      onClick={() => toggleReadItem('objectives')}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                        isRead('objectives')
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/30'
                          : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                      }`}
                    >
                      {isRead('objectives') ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span>Milestone Checked</span>
                        </>
                      ) : (
                        <>
                          <BookOpenCheck className="w-4 h-4" />
                          <span>Mark Objectives as Completed</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SECTION 3: DETAILED TOPICS */}
            {activeSection === 'topics' && (
              <motion.div
                key="topics-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8"
              >
                {/* Secondary list of topics */}
                <div className="md:col-span-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 shadow-sm h-[560px] flex flex-col">
                  <div className="px-2 py-1 pb-3 border-b border-slate-100 dark:border-slate-800/50">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      Topic Index
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">Click a topic to expand lesson</p>
                  </div>

                  <div className="flex-1 overflow-y-auto mt-2 space-y-1 pr-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                    {chapterData.topics.map((t, idx) => {
                      const isSelected = selectedTopicId === t.id;
                      const hasRead = isRead(t.id);
                      return (
                        <button
                          key={t.id}
                          onClick={() => setSelectedTopicId(t.id)}
                          className={`w-full flex items-center justify-between text-left px-2.5 py-2.5 rounded-xl text-[11px] font-medium transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 font-bold border-l-2 border-pink-500'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span className="text-[10px] text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded shrink-0">
                              {idx + 1}
                            </span>
                            <span className="truncate">{t.title}</span>
                          </div>
                          {hasRead && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Main topic reading pane */}
                <div className="md:col-span-8 space-y-6">
                  {/* Topic Title Card */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-pink-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-bold font-mono text-slate-500 dark:text-slate-400">
                          Topic {chapterData.topics.findIndex(t => t.id === activeTopic.id) + 1} of {chapterData.topics.length}
                        </span>
                        <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1.5">
                          {activeTopic.title}
                        </h3>
                      </div>

                      {/* Interactive read status button */}
                      <button
                        onClick={() => toggleReadItem(activeTopic.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all border cursor-pointer ${
                          isRead(activeTopic.id)
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30'
                            : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        {isRead(activeTopic.id) ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                            <span>Read & Mastered</span>
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                            <span>Mark as Read</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Core concept card (Interactive & visual) */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-3.5">
                    <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 border-b border-slate-100 dark:border-slate-800/50 pb-2.5">
                      <Lightbulb className="w-4 h-4" />
                      <h4 className="text-xs font-extrabold uppercase tracking-widest font-mono">Core Scientific Concept</h4>
                    </div>
                    <div className="p-4 bg-pink-50/50 dark:bg-pink-950/10 rounded-xl border border-pink-100/40 dark:border-pink-900/20 text-xs text-pink-800 dark:text-pink-300 font-medium leading-relaxed">
                      {activeTopic.concept}
                    </div>
                  </div>

                  {/* Teacher's explanation card */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-3.5">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border-b border-slate-100 dark:border-slate-800/50 pb-2.5">
                      <GraduationCap className="w-4 h-4" />
                      <h4 className="text-xs font-extrabold uppercase tracking-widest font-mono">Teacher's Explanation</h4>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                      {activeTopic.explanation}
                    </p>
                  </div>

                  {/* Two-column visual sub-panel */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Real-life example */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm space-y-3">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                        <Eye className="w-4 h-4" />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest font-mono">Everyday Example</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        {activeTopic.realLifeExample}
                      </p>
                    </div>

                    {/* Common Mistakes */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm space-y-3 border-amber-200/30 dark:border-amber-950/20">
                      <div className="flex items-center gap-2 text-amber-500">
                        <ShieldAlert className="w-4 h-4 animate-pulse" />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest font-mono">Common Mistakes</span>
                      </div>
                      <p className="text-[11px] text-amber-800/90 dark:text-amber-400/90 leading-relaxed">
                        {activeTopic.commonMistakes}
                      </p>
                    </div>
                  </div>

                  {/* ICSE Board Tip (Premium card) */}
                  <div className="bg-gradient-to-r from-emerald-500/5 to-transparent border border-emerald-500/20 dark:border-emerald-500/10 rounded-2xl p-6 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <Award className="w-5 h-5 stroke-[1.5]" />
                      <span className="text-xs font-extrabold uppercase tracking-widest font-mono">ICSE Board Exam Tip</span>
                    </div>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium leading-relaxed">
                      {activeTopic.icseBoardTip}
                    </p>
                  </div>

                  {/* Navigation block to next topic */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/50">
                    <button
                      disabled={chapterData.topics.findIndex(t => t.id === activeTopic.id) === 0}
                      onClick={() => {
                        const idx = chapterData.topics.findIndex(t => t.id === activeTopic.id);
                        if (idx > 0) setSelectedTopicId(chapterData.topics[idx - 1].id);
                      }}
                      className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      ← Previous Topic
                    </button>
                    
                    <button
                      disabled={chapterData.topics.findIndex(t => t.id === activeTopic.id) === chapterData.topics.length - 1}
                      onClick={() => {
                        const idx = chapterData.topics.findIndex(t => t.id === activeTopic.id);
                        if (idx < chapterData.topics.length - 1) setSelectedTopicId(chapterData.topics[idx + 1].id);
                      }}
                      className="px-4 py-2 text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      Next Topic →
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SECTION 4: DAILY LIFE APPLICATIONS (Periodic Table only) */}
            {activeSection === 'applications' && !isBonding && (
              <motion.div
                key="apps-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(chapterData as any).dailyLifeApplications?.map((app: any, index: number) => (
                    <div 
                      key={index}
                      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                          <Sparkle className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
                          {app.title}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {app.desc}
                      </p>

                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/50 flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                          Real-World Use Case:
                        </span>
                        <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                          {app.example}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mark as Completed Section Block */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => toggleReadItem('applications')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                      isRead('applications')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/30'
                        : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                    }`}
                  >
                    {isRead('applications') ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Completed Section</span>
                      </>
                    ) : (
                      <>
                        <BookOpenCheck className="w-4 h-4" />
                        <span>Mark as Completed & Read</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* SECTION 4: LEWIS STRUCTURES (Chemical Bonding only) */}
            {activeSection === 'lewis' && isBonding && (
              <motion.div
                key="lewis-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Introduction Header */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/50 pb-4">
                    <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Lewis Structures
                      </h2>
                      <p className="text-xs text-slate-400">
                        Essential visualizations of valence electrons for ICSE Class 10 Board prep
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {CHEMICAL_BONDING_CHAPTER_DATA.lewisIntro.introduction}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Steps to Draw */}
                    <div className="bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800/40 rounded-2xl p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono">
                        Steps to Draw Dot Structures
                      </h3>
                      <ol className="space-y-2 text-xs text-slate-600 dark:text-slate-400 list-decimal pl-4 leading-relaxed">
                        {CHEMICAL_BONDING_CHAPTER_DATA.lewisIntro.steps.map((step, sIdx) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Rules to Follow */}
                    <div className="bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800/40 rounded-2xl p-5 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 font-mono">
                        Rules for Drawing
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed">
                        {CHEMICAL_BONDING_CHAPTER_DATA.lewisIntro.rules.map((rule, rIdx) => (
                          <li key={rIdx}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Common Mistakes & Exam Tips */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="bg-amber-50/45 dark:bg-amber-950/10 border border-amber-200/50 dark:border-amber-950/40 rounded-2xl p-5 space-y-2">
                      <div className="flex items-center gap-2 text-amber-650 dark:text-amber-400">
                        <AlertTriangle className="w-4 h-4" />
                        <h4 className="text-xs font-extrabold uppercase tracking-widest font-mono">Common Mistakes</h4>
                      </div>
                      <p className="text-xs text-amber-900/95 dark:text-amber-400/95 leading-relaxed">
                        {CHEMICAL_BONDING_CHAPTER_DATA.lewisIntro.commonMistakes}
                      </p>
                    </div>

                    <div className="bg-emerald-50/45 dark:bg-emerald-950/10 border border-emerald-200/50 dark:border-emerald-950/40 rounded-2xl p-5 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-650 dark:text-emerald-400">
                        <Award className="w-4 h-4" />
                        <h4 className="text-xs font-extrabold uppercase tracking-widest font-mono">Examination Tips</h4>
                      </div>
                      <p className="text-xs text-emerald-900/95 dark:text-emerald-400/95 leading-relaxed">
                        {CHEMICAL_BONDING_CHAPTER_DATA.lewisIntro.examTips}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Examples Hub */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Molecular List Sidebar */}
                  <div className="md:col-span-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 shadow-sm h-[520px] flex flex-col">
                    <div className="px-2 py-1 pb-3 border-b border-slate-100 dark:border-slate-800/50">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        Molecules to Master
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Select a molecular formula</p>
                    </div>

                    <div className="flex-1 overflow-y-auto mt-2 space-y-1 pr-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                      {CHEMICAL_BONDING_CHAPTER_DATA.lewisExamples.map((ex, idx) => {
                        const isSelected = selectedLewisMolecule === ex.molecule;
                        const hasRead = isRead(`lewis-${ex.molecule}`);
                        return (
                          <button
                            key={ex.molecule}
                            onClick={() => setSelectedLewisMolecule(ex.molecule)}
                            className={`w-full flex items-center justify-between text-left px-2.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 font-bold border-l-2 border-pink-500'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40'
                            }`}
                          >
                            <div className="flex items-center gap-2 truncate pr-2">
                              <span className="text-[10px] text-slate-400 font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded shrink-0">
                                {idx + 1}
                              </span>
                              <span className="truncate">{ex.molecule}</span>
                            </div>
                            {hasRead && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Molecular Detail View */}
                  {(() => {
                    const selectedExample = CHEMICAL_BONDING_CHAPTER_DATA.lewisExamples.find(
                      ex => ex.molecule === selectedLewisMolecule
                    ) || CHEMICAL_BONDING_CHAPTER_DATA.lewisExamples[0];

                    return (
                      <div className="md:col-span-8 space-y-6">
                        {/* Title Card */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <span className="text-[9px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-bold font-mono text-slate-500 dark:text-slate-400">
                              Bonding Type: {selectedExample.bondFormation}
                            </span>
                            <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1.5">
                              {selectedExample.molecule} Dot Structure
                            </h3>
                          </div>

                          <button
                            onClick={() => toggleReadItem(`lewis-${selectedExample.molecule}`)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all border cursor-pointer ${
                              isRead(`lewis-${selectedExample.molecule}`)
                                ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30'
                                : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                            }`}
                          >
                            {isRead(`lewis-${selectedExample.molecule}`) ? (
                              <>
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Mastered structure</span>
                              </>
                            ) : (
                              <>
                                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                                <span>Mark as Mastered</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Interactive Step-by-Step Player */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                              <Compass className="w-4 h-4" />
                              <h4 className="text-xs font-extrabold uppercase tracking-widest font-mono">Step-by-Step Construction</h4>
                            </div>
                            <span className="text-[10px] font-mono font-bold bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 px-2 py-0.5 rounded-full">
                              Step {activeStepIdx + 1} of {selectedExample.stepByStep.length}
                            </span>
                          </div>
                          
                          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/40 text-xs text-slate-700 dark:text-slate-300 leading-relaxed min-h-[64px]">
                            {selectedExample.stepByStep[activeStepIdx]}
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <button
                              disabled={activeStepIdx === 0}
                              onClick={() => setActiveStepIdx(prev => prev - 1)}
                              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 disabled:opacity-35 disabled:pointer-events-none cursor-pointer"
                            >
                              ← Previous Step
                            </button>
                            <button
                              disabled={activeStepIdx === selectedExample.stepByStep.length - 1}
                              onClick={() => setActiveStepIdx(prev => prev + 1)}
                              className="px-3 py-1.5 rounded-lg bg-pink-500 text-white text-[10px] font-bold hover:bg-pink-600 disabled:opacity-35 disabled:pointer-events-none cursor-pointer"
                            >
                              Next Step →
                            </button>
                          </div>
                        </div>

                        {/* Blackboard representation */}
                        <div className="bg-slate-950 text-slate-100 font-mono p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden shadow-inner space-y-4">
                          <div className="absolute top-2 left-3 text-[9px] uppercase tracking-wider text-slate-500 font-bold">Lewis DOT-CROSS Blackboard</div>
                          <div className="py-6 flex flex-col items-center justify-center">
                            <span className="text-xl md:text-2xl font-black font-mono tracking-widest text-emerald-400 select-all whitespace-pre">
                              {selectedExample.finalStructure}
                            </span>
                            <span className="text-[10px] text-pink-400 mt-4 font-sans italic">
                              • and x represent electrons from respective combined atoms
                            </span>
                          </div>
                        </div>

                        {/* Additional Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm space-y-2.5">
                            <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400">
                              <Layers className="w-4 h-4" />
                              <span className="text-[10px] font-extrabold uppercase tracking-widest font-mono">Electron Arrangement</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                              {selectedExample.electronArrangement}
                            </p>
                          </div>

                          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm space-y-2.5">
                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                              <Sparkles className="w-4 h-4" />
                              <span className="text-[10px] font-extrabold uppercase tracking-widest font-mono">Explanation</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                              {selectedExample.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </motion.div>
            )}

            {/* SECTION: IDENTIFICATION CHARTS (Analytical Chemistry only) */}
            {activeSection === 'charts' && isAnalyticalChemistry && (
              <motion.div
                key="charts-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Introduction Header */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/50 pb-4">
                    <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                        🧪 Analytical Chemistry Identification Charts
                      </h2>
                      <p className="text-xs text-slate-400">
                        Interactive maps of cations and anions with specific tests, observations, and inferences
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Master chemical qualitative analysis. Use these charts to identify unknown salt solutions by observing precipitate solubility in Sodium Hydroxide (NaOH) and Ammonium Hydroxide (NH₄OH), and conducting specific anion tests.
                  </p>
                </div>

                {/* CATION IDENTIFICATION CHART */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border-b border-slate-100 dark:border-slate-800/50 pb-2.5">
                    <Atom className="w-4 h-4" />
                    <h3 className="text-sm font-extrabold uppercase tracking-widest font-mono">1. Cation Identification Chart</h3>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/70 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 font-mono text-[10px] uppercase tracking-wider">
                          <th className="p-3.5 font-bold">Cation</th>
                          <th className="p-3.5 font-bold">Reagent (Dropwise / Excess)</th>
                          <th className="p-3.5 font-bold">Observation</th>
                          <th className="p-3.5 font-bold">Inference (Chemical Formula)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-650 dark:text-slate-350">
                        {(chapterData as any).cationCharts?.map((row: any, rIdx: number) => (
                          <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                              {row.ion}
                            </td>
                            <td className="p-3.5 font-mono text-[11px]">
                              {row.reagent}
                            </td>
                            <td className="p-3.5">
                              {row.observation}
                            </td>
                            <td className="p-3.5 font-semibold text-pink-600 dark:text-pink-400">
                              {row.inference}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ANION IDENTIFICATION CHART */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border-b border-slate-100 dark:border-slate-800/50 pb-2.5">
                    <FlaskConical className="w-4 h-4" />
                    <h3 className="text-sm font-extrabold uppercase tracking-widest font-mono">2. Anion Identification Chart</h3>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/70 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 font-mono text-[10px] uppercase tracking-wider">
                          <th className="p-3.5 font-bold">Anion</th>
                          <th className="p-3.5 font-bold">Test Method / Reagents</th>
                          <th className="p-3.5 font-bold">Observation</th>
                          <th className="p-3.5 font-bold">Inference (Chemical Formula)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-650 dark:text-slate-350">
                        {(chapterData as any).anionCharts?.map((row: any, rIdx: number) => (
                          <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                              {row.ion}
                            </td>
                            <td className="p-3.5 font-mono text-[11px]">
                              {row.reagent}
                            </td>
                            <td className="p-3.5">
                              {row.observation}
                            </td>
                            <td className="p-3.5 font-semibold text-emerald-600 dark:text-emerald-400">
                              {row.inference}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mark as Completed Section Block */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 font-mono">
                    Identify unknowns perfectly using qualitative reagent reactions
                  </span>
                  <button
                    onClick={() => toggleReadItem('charts')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                      isRead('charts')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/30'
                        : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                    }`}
                  >
                    {isRead('charts') ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Completed Charts Section</span>
                      </>
                    ) : (
                      <>
                        <BookOpenCheck className="w-4 h-4" />
                        <span>Mark Charts as Completed</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* SECTION 5: CHAPTER SUMMARY */}
            {activeSection === 'summary' && (
              <motion.div
                key="summary-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/50 pb-4">
                    <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Chapter Quick Recall Summary
                      </h2>
                      <p className="text-xs text-slate-400">
                        Essential key takeaways for quick revision before exams
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {chapterData.chapterSummary.map((sum, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-950/80 text-pink-600 dark:text-pink-400 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 font-mono">
                          {index + 1}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {sum}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Mark as Completed Section Block */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800/50">
                    <span className="text-[10px] text-slate-400 font-mono">
                      Unify and recall concepts before mock tests
                    </span>
                    <button
                      onClick={() => toggleReadItem('summary')}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                        isRead('summary')
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/30'
                          : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                      }`}
                    >
                      {isRead('summary') ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-500" />
                          <span>Summary Completed</span>
                        </>
                      ) : (
                        <>
                          <BookOpenCheck className="w-4 h-4" />
                          <span>Mark Summary as Completed</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SECTION 6: PRACTICE QUESTIONS */}
            {activeSection === 'practice_questions' && (
              <motion.div
                key="practice-questions-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Introduction Header */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/50 pb-4">
                    <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                      <ListChecks className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                        Chapter Practice Questions
                      </h2>
                      <p className="text-xs text-slate-400">
                        ICSE Class 10 board pattern questions with instant feedback and detailed model answers
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Test your understanding of the entire chapter with these curated, high-quality questions spanning Multiple Choice, Short Answer, and Free Response styles. Tap on sections below to expand them, and reveal explanations/model answers to verify your work.
                  </p>
                </div>

                {/* CATEGORY 1: MCQs */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setExpandedCategories(prev => ({ ...prev, mcq: !prev.mcq }))}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors border-b border-slate-100 dark:border-slate-800/50 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                          Part A: Multiple Choice Questions (10)
                        </h3>
                        <p className="text-[10px] text-slate-400 font-medium">1 Mark each • Covers conceptual clarity & board patterns</p>
                      </div>
                    </div>
                    {expandedCategories.mcq ? (
                      <ChevronDown className="w-5 h-5 text-slate-400 transform rotate-180 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 transition-transform" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedCategories.mcq && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="divide-y divide-slate-100 dark:divide-slate-800/50"
                      >
                        <div className="p-6 space-y-8">
                          {CHEMISTRY_QUESTIONS_DATA[chapter.id]?.mcqs.map((q, idx) => {
                            const selectedAns = selectedMcqAnswers[q.id];
                            const isRevealed = revealedAnswers[q.id];
                            return (
                              <div key={q.id} className="space-y-3.5">
                                <div className="flex gap-3">
                                  <span className="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 font-mono">
                                    {idx + 1}
                                  </span>
                                  <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                                    {q.question}
                                  </h4>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-8">
                                  {q.options.map(option => {
                                    const optionLetter = option.trim().charAt(0); // e.g. "A"
                                    const isSelected = selectedAns === optionLetter;
                                    const isCorrect = optionLetter === q.correctAnswer;
                                    
                                    let buttonStyle = "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850";
                                    if (selectedAns) {
                                      if (isCorrect) {
                                        buttonStyle = "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-500/50";
                                      } else if (isSelected) {
                                        buttonStyle = "bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border-rose-500/50";
                                      } else {
                                        buttonStyle = "opacity-50 border-slate-200 dark:border-slate-800 text-slate-400";
                                      }
                                    }

                                    return (
                                      <button
                                        key={option}
                                        disabled={!!selectedAns}
                                        onClick={() => {
                                          setSelectedMcqAnswers(prev => ({ ...prev, [q.id]: optionLetter }));
                                          setRevealedAnswers(prev => ({ ...prev, [q.id]: true }));
                                        }}
                                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${buttonStyle}`}
                                      >
                                        {option}
                                      </button>
                                    );
                                  })}
                                </div>

                                {(selectedAns || isRevealed) && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="pl-8 pt-1"
                                  >
                                    <div className="p-3.5 bg-slate-50 dark:bg-slate-950/40 border border-slate-150 dark:border-slate-800/50 rounded-xl space-y-1.5">
                                      <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                                          Correct Answer: {q.correctAnswer}
                                        </span>
                                        {selectedAns && (
                                          <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded ${
                                            selectedAns === q.correctAnswer 
                                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' 
                                              : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                                          }`}>
                                            Your Answer: {selectedAns} ({selectedAns === q.correctAnswer ? 'Correct' : 'Incorrect'})
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                                        <span className="font-bold text-slate-700 dark:text-slate-300 font-sans">Explanation: </span>
                                        {q.explanation}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CATEGORY 2: SHORT ANSWERS */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setExpandedCategories(prev => ({ ...prev, short: !prev.short }))}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors border-b border-slate-100 dark:border-slate-800/50 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                          Part B: Short Answer Questions (10)
                        </h3>
                        <p className="text-[10px] text-slate-400 font-medium">2-3 Marks each • Conceptual boarding problems with model answers</p>
                      </div>
                    </div>
                    {expandedCategories.short ? (
                      <ChevronDown className="w-5 h-5 text-slate-400 transform rotate-180 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 transition-transform" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedCategories.short && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="divide-y divide-slate-100 dark:divide-slate-800/50"
                      >
                        <div className="p-6 space-y-6">
                          {CHEMISTRY_QUESTIONS_DATA[chapter.id]?.shortAnswers.map((q, idx) => {
                            const isRevealed = revealedAnswers[q.id];
                            return (
                              <div key={q.id} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/10 space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                                      {idx + 1}
                                    </span>
                                    <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                                      {q.question}
                                    </h4>
                                  </div>
                                  <span className="text-[9px] font-bold font-mono px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-full shrink-0 border border-indigo-100/50 dark:border-indigo-900/30">
                                    2-3 Marks
                                  </span>
                                </div>

                                <div className="pl-7 space-y-3">
                                  <textarea
                                    id={`input-${q.id}`}
                                    value={writtenAnswers[q.id] || ''}
                                    onChange={e => setWrittenAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                                    placeholder="Write your detailed answer here... (Tip: include key formulas, terms or concepts)"
                                    className="w-full min-h-[90px] p-3 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 resize-y"
                                  />

                                  {/* Error/Warning */}
                                  {evaluationErrors[q.id] && (
                                    <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                                      <AlertTriangle className="w-3.5 h-3.5" />
                                      {evaluationErrors[q.id]}
                                    </p>
                                  )}

                                  {/* Action Buttons */}
                                  <div className="flex justify-between items-center gap-2 pt-1">
                                    <button
                                      id={`btn-reveal-${q.id}`}
                                      onClick={() => setRevealedAnswers(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                                      className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition-all"
                                    >
                                      {isRevealed ? "Hide Model Answer" : "Show Model Answer"}
                                    </button>

                                    <button
                                      id={`btn-check-${q.id}`}
                                      disabled={evaluatingIds[q.id]}
                                      onClick={() => handleCheckAnswer(q.id, q.question, q.modelAnswer, true)}
                                      className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[10px] font-extrabold text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 shadow-sm transition-all cursor-pointer ${
                                        evaluatingIds[q.id] ? 'opacity-70 pointer-events-none' : ''
                                      }`}
                                    >
                                      {evaluatingIds[q.id] ? (
                                        <>
                                          <RefreshCw className="w-3 h-3 animate-spin" />
                                          <span>Grading Answer...</span>
                                        </>
                                      ) : (
                                        <>
                                          <Sparkles className="w-3.5 h-3.5" />
                                          <span>Check Answer</span>
                                        </>
                                      )}
                                    </button>
                                  </div>
                                </div>

                                {isRevealed && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="pl-7 pt-1"
                                  >
                                    <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-inner">
                                      <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono mb-1.5 flex items-center gap-1">
                                        <Check className="w-3.5 h-3.5" />
                                        <span>Official Model Answer</span>
                                      </div>
                                      <p className="text-xs text-slate-650 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                        {q.modelAnswer}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}

                                {evaluations[q.id] && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="pl-7 pt-1"
                                  >
                                    <div className="p-4 rounded-xl border border-indigo-100 dark:border-indigo-950/50 bg-indigo-50/20 dark:bg-indigo-950/5 space-y-3 shadow-inner">
                                      {/* Top Header: Score & Status */}
                                      <div className="flex items-center justify-between border-b border-indigo-100/50 dark:border-indigo-950/40 pb-2">
                                        <div className="flex items-center gap-2">
                                          <Award className="w-4 h-4 text-indigo-500 shrink-0" />
                                          <span className="text-xs font-extrabold text-indigo-750 dark:text-indigo-350">
                                            Evaluation Score:
                                          </span>
                                          <span className="text-xs font-black px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono">
                                            {evaluations[q.id].marksObtained} / 3 Marks
                                          </span>
                                        </div>
                                        
                                        <span className={`text-[10px] font-black font-mono px-2.5 py-0.5 rounded-full ${
                                          evaluations[q.id].status === 'Correct'
                                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                                            : evaluations[q.id].status === 'Incorrect'
                                            ? 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                                            : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                                        }`}>
                                          {evaluations[q.id].status}
                                        </span>
                                      </div>

                                      {/* Constructive Explanation */}
                                      <div className="space-y-1">
                                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                                          Feedback & Explanation
                                        </h5>
                                        <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
                                          {evaluations[q.id].explanation}
                                        </p>
                                      </div>

                                      {/* Missing Points / Keywords (only if present and length > 0) */}
                                      {evaluations[q.id].missingPoints && evaluations[q.id].missingPoints.length > 0 && (
                                        <div className="space-y-1.5">
                                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-rose-500 font-mono flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            <span>Key Concepts/Keywords Missed</span>
                                          </h5>
                                          <ul className="list-disc list-inside space-y-0.5 pl-1.5">
                                            {evaluations[q.id].missingPoints.map((pt: string, pIdx: number) => (
                                              <li key={pIdx} className="text-xs text-slate-550 dark:text-slate-450 leading-normal list-item">
                                                {pt}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {/* Improved Answer suggestion */}
                                      {evaluations[q.id].improvedAnswer && (
                                        <div className="space-y-1 bg-white/60 dark:bg-slate-950/40 p-3 rounded-lg border border-indigo-100/30 dark:border-indigo-950/20">
                                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-emerald-650 dark:text-emerald-400 font-mono flex items-center gap-1">
                                            <Check className="w-3.5 h-3.5" />
                                            <span>Suggested Improved Formulation</span>
                                          </h5>
                                          <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed italic whitespace-pre-line">
                                            {evaluations[q.id].improvedAnswer}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CATEGORY 3: FREE RESPONSES */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setExpandedCategories(prev => ({ ...prev, free: !prev.free }))}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-50/50 dark:bg-slate-950/20 hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors border-b border-slate-100 dark:border-slate-800/50 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                          Part C: Free Response Questions (10)
                        </h3>
                        <p className="text-[10px] text-slate-400 font-medium">4-5 Marks each • High-yield long answers & multi-part board questions</p>
                      </div>
                    </div>
                    {expandedCategories.free ? (
                      <ChevronDown className="w-5 h-5 text-slate-400 transform rotate-180 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 transition-transform" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedCategories.free && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="divide-y divide-slate-100 dark:divide-slate-800/50"
                      >
                        <div className="p-6 space-y-6">
                          {CHEMISTRY_QUESTIONS_DATA[chapter.id]?.freeResponses.map((q, idx) => {
                            const isRevealed = revealedAnswers[q.id];
                            return (
                              <div key={q.id} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/10 space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5">
                                      {idx + 1}
                                    </span>
                                    <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                                      {q.question}
                                    </h4>
                                  </div>
                                  <span className="text-[9px] font-bold font-mono px-2 py-0.5 bg-pink-50 dark:bg-pink-950 text-pink-600 dark:text-pink-400 rounded-full shrink-0 border border-pink-100/50 dark:border-pink-900/30">
                                    4-5 Marks
                                  </span>
                                </div>

                                <div className="pl-7 space-y-3">
                                  <textarea
                                    id={`input-${q.id}`}
                                    value={writtenAnswers[q.id] || ''}
                                    onChange={e => setWrittenAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                                    placeholder="Write your comprehensive answer here... (Tip: include step-by-step reasoning or chemical formulas)"
                                    className="w-full min-h-[110px] p-3 text-xs bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-655 resize-y"
                                  />

                                  {/* Error/Warning */}
                                  {evaluationErrors[q.id] && (
                                    <p className="text-[11px] text-rose-500 font-medium flex items-center gap-1">
                                      <AlertTriangle className="w-3.5 h-3.5" />
                                      {evaluationErrors[q.id]}
                                    </p>
                                  )}

                                  {/* Action Buttons */}
                                  <div className="flex justify-between items-center gap-2 pt-1">
                                    <button
                                      id={`btn-reveal-${q.id}`}
                                      onClick={() => setRevealedAnswers(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                                      className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition-all"
                                    >
                                      {isRevealed ? "Hide Detailed Model Answer" : "Show Detailed Model Answer"}
                                    </button>

                                    <button
                                      id={`btn-check-${q.id}`}
                                      disabled={evaluatingIds[q.id]}
                                      onClick={() => handleCheckAnswer(q.id, q.question, q.modelAnswer, false)}
                                      className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[10px] font-extrabold text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 shadow-sm transition-all cursor-pointer ${
                                        evaluatingIds[q.id] ? 'opacity-70 pointer-events-none' : ''
                                      }`}
                                    >
                                      {evaluatingIds[q.id] ? (
                                        <>
                                          <RefreshCw className="w-3 h-3 animate-spin" />
                                          <span>Grading Answer...</span>
                                        </>
                                      ) : (
                                        <>
                                          <Sparkles className="w-3.5 h-3.5" />
                                          <span>Check Answer</span>
                                        </>
                                      )}
                                    </button>
                                  </div>
                                </div>

                                {isRevealed && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="pl-7 pt-1"
                                  >
                                    <div className="p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-inner">
                                      <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono mb-1.5 flex items-center gap-1">
                                        <Check className="w-3.5 h-3.5" />
                                        <span>Comprehensive Model Answer</span>
                                      </div>
                                      <p className="text-xs text-slate-650 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                        {q.modelAnswer}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}

                                {evaluations[q.id] && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="pl-7 pt-1"
                                  >
                                    <div className="p-4 rounded-xl border border-indigo-100 dark:border-indigo-950/50 bg-indigo-50/20 dark:bg-indigo-950/5 space-y-3 shadow-inner">
                                      {/* Top Header: Score & Status */}
                                      <div className="flex items-center justify-between border-b border-indigo-100/50 dark:border-indigo-950/40 pb-2">
                                        <div className="flex items-center gap-2">
                                          <Award className="w-4 h-4 text-indigo-500 shrink-0" />
                                          <span className="text-xs font-extrabold text-indigo-750 dark:text-indigo-350">
                                            Evaluation Score:
                                          </span>
                                          <span className="text-xs font-black px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono">
                                            {evaluations[q.id].marksObtained} / 5 Marks
                                          </span>
                                        </div>
                                        
                                        <span className={`text-[10px] font-black font-mono px-2.5 py-0.5 rounded-full ${
                                          evaluations[q.id].status === 'Correct'
                                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                                            : evaluations[q.id].status === 'Incorrect'
                                            ? 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                                            : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                                        }`}>
                                          {evaluations[q.id].status}
                                        </span>
                                      </div>

                                      {/* Constructive Explanation */}
                                      <div className="space-y-1">
                                        <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                                          Feedback & Explanation
                                        </h5>
                                        <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed">
                                          {evaluations[q.id].explanation}
                                        </p>
                                      </div>

                                      {/* Missing Points / Keywords (only if present and length > 0) */}
                                      {evaluations[q.id].missingPoints && evaluations[q.id].missingPoints.length > 0 && (
                                        <div className="space-y-1.5">
                                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-rose-500 font-mono flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            <span>Key Concepts/Keywords Missed</span>
                                          </h5>
                                          <ul className="list-disc list-inside space-y-0.5 pl-1.5">
                                            {evaluations[q.id].missingPoints.map((pt: string, pIdx: number) => (
                                              <li key={pIdx} className="text-xs text-slate-550 dark:text-slate-450 leading-normal list-item">
                                                {pt}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {/* Improved Answer suggestion */}
                                      {evaluations[q.id].improvedAnswer && (
                                        <div className="space-y-1 bg-white/60 dark:bg-slate-950/40 p-3 rounded-lg border border-indigo-100/30 dark:border-indigo-950/20">
                                          <h5 className="text-[10px] font-bold uppercase tracking-wider text-emerald-650 dark:text-emerald-400 font-mono flex items-center gap-1">
                                            <Check className="w-3.5 h-3.5" />
                                            <span>Suggested Improved Formulation</span>
                                          </h5>
                                          <p className="text-xs text-slate-650 dark:text-slate-350 leading-relaxed italic whitespace-pre-line">
                                            {evaluations[q.id].improvedAnswer}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mark as Completed Section Block */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 font-mono">
                    Complete all categories to lock in your chemistry revision mastery
                  </span>
                  <button
                    onClick={() => toggleReadItem('practice_questions')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
                      isRead('practice_questions')
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/30'
                        : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100'
                    }`}
                  >
                    {isRead('practice_questions') ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Practice Questions Completed</span>
                      </>
                    ) : (
                      <>
                        <BookOpenCheck className="w-4 h-4" />
                        <span>Mark Practice Completed</span>
                      </>
                    )}
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
