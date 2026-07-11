import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Star, BookMarked, Brain, AlertTriangle, Target, 
  FileText, Zap, Award, ArrowLeft, Clock, ChevronRight, 
  Sparkles, ShieldAlert, GraduationCap, Lightbulb, RefreshCw
} from 'lucide-react';
import { View, UserProfile } from '../types';
import { SUBJECTS, Subject, Chapter } from './Practice';
import { generateRevisionContent, RevisionTime, RevisionSectionData } from '../data/examSprintData';
import { isChapterCompletedInStudySphere } from '../data/completedChaptersData';

interface ExamSprintModuleProps {
  user: UserProfile | null;
  setView: (view: View) => void;
  selectedSubjectId?: string;
  selectedChapterId?: string;
  onBack?: () => void;
}

export default function ExamSprintModule({
  user,
  setView,
  selectedSubjectId: initialSubjectId,
  selectedChapterId: initialChapterId,
  onBack
}: ExamSprintModuleProps) {
  
  // State for Subject & Chapter Selection
  const [activeSubjectId, setActiveSubjectId] = useState<string>(() => {
    return initialSubjectId || SUBJECTS[3]?.id || SUBJECTS[0]?.id || ''; // Default to Physics, or first subject
  });

  const activeSubject = useMemo(() => {
    return SUBJECTS.find(s => s.id === activeSubjectId) || SUBJECTS[0];
  }, [activeSubjectId]);

  const [activeChapterId, setActiveChapterId] = useState<string>(() => {
    if (initialChapterId && activeSubject.chapters.some(c => c.id === initialChapterId)) {
      return initialChapterId;
    }
    return activeSubject.chapters[0]?.id || '';
  });

  const activeChapter = useMemo(() => {
    return activeSubject.chapters.find(c => c.id === activeChapterId) || activeSubject.chapters[0];
  }, [activeSubject, activeChapterId]);

  // If activeSubject changes, sync the activeChapterId to the first chapter of that subject
  const handleSubjectChange = (subjectId: string) => {
    setActiveSubjectId(subjectId);
    const sub = SUBJECTS.find(s => s.id === subjectId);
    if (sub && sub.chapters.length > 0) {
      setActiveChapterId(sub.chapters[0].id);
    } else {
      setActiveChapterId('');
    }
  };

  // State for Selected Revision Time
  const [revisionTime, setRevisionTime] = useState<RevisionTime>('15m');

  // Load Revision Content
  const revisionContent = useMemo<RevisionSectionData>(() => {
    if (!activeSubject || !activeChapter) {
      return generateRevisionContent('Physics', 'Force', revisionTime);
    }
    return generateRevisionContent(activeSubject.name, activeChapter.name, revisionTime);
  }, [activeSubject, activeChapter, revisionTime]);

  const isCompleted = useMemo(() => {
    return isChapterCompletedInStudySphere(activeSubjectId, activeChapterId);
  }, [activeSubjectId, activeChapterId]);

  // Interactive states for active recall / revision questions
  const [revealedRecallIndex, setRevealedRecallIndex] = useState<Record<number, boolean>>({});

  const toggleRecallCard = (idx: number) => {
    setRevealedRecallIndex(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleBackToDashboard = () => {
    if (onBack) {
      onBack();
    } else {
      setView('dashboard');
    }
  };

  // Format Revision Time label
  const getTimeLabel = (time: RevisionTime) => {
    switch (time) {
      case '5m': return '5 Minutes';
      case '15m': return '15 Minutes';
      case '30m': return '30 Minutes';
      case '1h': return '1 Hour';
    }
  };

  // Get subject theme colors
  const getSubjectColorClasses = (color: string) => {
    switch (color) {
      case 'indigo': return 'from-indigo-500 to-blue-600 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-950 bg-indigo-50/50 dark:bg-indigo-950/20';
      case 'pink': return 'from-pink-500 to-rose-600 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-950 bg-pink-50/50 dark:bg-pink-950/20';
      case 'emerald': return 'from-emerald-500 to-teal-600 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-950 bg-emerald-50/50 dark:bg-emerald-950/20';
      case 'sky': return 'from-sky-500 to-indigo-600 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-950 bg-sky-50/50 dark:bg-sky-950/20';
      case 'rose': return 'from-rose-500 to-pink-600 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/20';
      case 'amber': return 'from-amber-500 to-orange-600 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-950 bg-amber-50/50 dark:bg-amber-950/20';
      case 'teal': return 'from-teal-500 to-emerald-600 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-950 bg-teal-50/50 dark:bg-teal-950/20';
      case 'violet': return 'from-violet-500 to-purple-600 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-950 bg-violet-50/50 dark:bg-violet-950/20';
      default: return 'from-slate-500 to-slate-700 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-950 bg-slate-50/50 dark:bg-slate-950/20';
    }
  };

  const activeColorClasses = getSubjectColorClasses(activeSubject?.color || 'indigo');

  return (
    <div id="exam-sprint-root" className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation & Header Breadcrumb */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            onClick={handleBackToDashboard}
            className="inline-flex items-center gap-2 px-3.5 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer transition-all shadow-sm bg-white dark:bg-slate-950"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>

          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/40 dark:border-indigo-900/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Syllabus Aligned Blueprint
            </span>
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/40 border border-pink-100/40 dark:border-pink-900/30 px-2.5 py-1 rounded-full">
              {(user?.board || 'CBSE Board').split(' ')[0]}
            </span>
          </div>
        </div>

        {/* Dynamic Selector Header Panel */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800/60">
            <div className="space-y-1.5">
              <h1 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <span>🚀</span> Exam Sprint
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl">
                High-yield rapid revision maps compiled by top board examiners. Select a time threshold to dynamically filter content from standard overview to absolute critical essentials.
              </p>
            </div>

            {/* Time Slider Selector */}
            <div className="w-full md:w-auto bg-slate-100 dark:bg-slate-950/50 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 flex gap-1">
              {(['5m', '15m', '30m', '1h'] as const).map((t) => {
                const isActive = revisionTime === t;
                return (
                  <button
                    key={t}
                    onClick={() => {
                      setRevisionTime(t);
                      setRevealedRecallIndex({});
                    }}
                    className={`flex-1 md:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{t === '5m' ? '5 Min' : t === '15m' ? '15 Min' : t === '30m' ? '30 Min' : '1 Hour'}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Select Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">Select Subject</label>
              <select
                value={activeSubjectId}
                onChange={(e) => handleSubjectChange(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 cursor-pointer font-medium"
              >
                {SUBJECTS.map((sub) => (
                  <option key={sub.id} value={sub.id}>{sub.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">Select Chapter</label>
              <select
                value={activeChapterId}
                onChange={(e) => {
                  setActiveChapterId(e.target.value);
                  setRevealedRecallIndex({});
                }}
                disabled={activeSubject.chapters.length === 0}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 cursor-pointer font-medium disabled:opacity-55"
              >
                {activeSubject.chapters.length > 0 ? (
                  activeSubject.chapters.map((ch) => (
                    <option key={ch.id} value={ch.id}>{ch.name}</option>
                  ))
                ) : (
                  <option value="">No chapters available</option>
                )}
              </select>
            </div>
          </div>
        </div>

        {/* MAIN REVISION MAP WORKSPACE */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono uppercase font-bold tracking-widest text-indigo-500">{activeSubject.name}</span>
              <h2 className="font-display font-extrabold text-xl text-slate-900 dark:text-white leading-none">
                {activeChapter ? activeChapter.name : 'No Chapter Selected'}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400 uppercase font-mono block">Revision Depth</span>
              <span className="text-sm font-extrabold text-pink-500 flex items-center justify-end gap-1 font-mono">
                ⚡ {getTimeLabel(revisionTime)} Revision Map
              </span>
            </div>
          </div>

          {/* Rapid Revision Single Page Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* COLUMN 1: Summary, Key Points, Important Definitions, Memory Tricks (8 Columns) */}
            <div className="md:col-span-8 space-y-6">
              
              {isCompleted ? (
                <>
                  {/* 1. 📖 Chapter Summary */}
                  <motion.div
                    layout
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-sm relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3.5 border-b border-slate-100 dark:border-slate-800/60">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500">
                        <BookOpen className="w-4 h-4" />
                      </span>
                      📖 Chapter Summary
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 dark:text-slate-350 mt-4 leading-relaxed font-sans">
                      {revisionContent.summary}
                    </p>
                  </motion.div>

                  {/* 2. ⭐ Key Points */}
                  <motion.div
                    layout
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3.5 border-b border-slate-100 dark:border-slate-800/60">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-500">
                        <Star className="w-4 h-4 fill-amber-500/20" />
                      </span>
                      ⭐ Key Points
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {revisionContent.keyPoints.map((pt, i) => (
                        <li key={i} className="flex gap-2.5 text-sm md:text-base text-slate-650 dark:text-slate-355 leading-relaxed">
                          <span className="text-amber-500 font-extrabold shrink-0 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* 3. 📚 Important Definitions */}
                  <motion.div
                    layout
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3.5 border-b border-slate-100 dark:border-slate-800/60">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500">
                        <BookMarked className="w-4 h-4" />
                      </span>
                      📚 Important Definitions
                    </h3>
                    <div className="mt-4 space-y-4">
                      {revisionContent.definitions.map((def, i) => (
                        <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30">
                          <span className="font-bold text-sm md:text-base text-slate-900 dark:text-white block font-display underline decoration-slate-200 dark:decoration-slate-800 decoration-2">
                            {def.term}
                          </span>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                            {def.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* 4. 🧠 Memory Tricks */}
                  <motion.div
                    layout
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 md:p-6 shadow-sm relative overflow-hidden"
                  >
                    <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3.5 border-b border-slate-100 dark:border-slate-800/60">
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-500">
                        <Brain className="w-4 h-4" />
                      </span>
                      🧠 Memory Tricks
                    </h3>
                    <div className="mt-4 space-y-3.5">
                      {revisionContent.memoryTricks.map((trick, i) => (
                        <div key={i} className="flex gap-3 items-start p-3 bg-pink-50/20 dark:bg-pink-950/10 border border-pink-100/60 dark:border-pink-900/30 rounded-xl">
                          <Lightbulb className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-700 dark:text-slate-350 leading-relaxed">
                            {trick}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              ) : (
                <div id="chapter-under-development" className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-10 shadow-sm text-center max-w-2xl mx-auto space-y-6">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-500 flex items-center justify-center text-4xl shadow-sm animate-pulse">
                    🚧
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-slate-900 dark:text-white tracking-tight leading-normal">
                      🚧 This chapter is still under development.
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">
                      Content will be available in a future update
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* COLUMN 2: Common Mistakes, Expected Board Questions, One-Page Notes, 5-Min Revision, Exam Tips (4 Columns) */}
            <div className="md:col-span-4 space-y-6">
              
              {isCompleted && (
                <>
                  {/* 5. ❗ Common Mistakes */}
                  <motion.div
                    layout
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm"
                  >
                    <h3 className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                      <ShieldAlert className="w-4 h-4" />
                      ❗ Common Mistakes
                    </h3>
                    <div className="space-y-3.5">
                      {revisionContent.commonMistakes.map((mis, i) => (
                        <div key={i} className="space-y-1.5 border-l-2 border-rose-300 dark:border-rose-900 pl-3">
                          <span className="text-[10px] font-mono font-bold text-rose-500 block uppercase">Student Pitfall</span>
                          <p className="text-sm text-slate-700 dark:text-slate-350 leading-relaxed font-semibold">{mis.mistake}</p>
                          <span className="text-[10px] font-mono font-bold text-emerald-500 block uppercase pt-0.5">Examiner Correction</span>
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{mis.correction}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* 6. 🎯 Expected Board Questions */}
                  <motion.div
                    layout
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800/60">
                      <Target className="w-4 h-4 text-violet-500" />
                      🎯 Expected Questions
                    </h3>
                    <div className="space-y-4">
                      {revisionContent.expectedQuestions.map((q, i) => (
                        <div key={i} className="space-y-2 border-b border-dashed border-slate-100 dark:border-slate-800 pb-3 last:border-0 last:pb-0">
                          <div className="flex items-start justify-between gap-1.5">
                            <span className="text-sm font-bold text-slate-900 dark:text-white leading-normal">Q: {q.question}</span>
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0">
                              {q.marks}M
                            </span>
                          </div>
                          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-950/20 p-2.5 rounded-lg border border-slate-100 dark:border-slate-850">
                            <strong className="text-[10px] font-bold text-indigo-500 block mb-0.5">EXAMINER EXPECTATION:</strong>
                            {q.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* 7. 📋 One-Page Notes */}
                  <motion.div
                    layout
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800/60">
                      <FileText className="w-4 h-4 text-sky-500" />
                      📋 One-Page Notes
                    </h3>
                    <div className="space-y-2 pt-1 font-mono text-xs md:text-sm text-slate-655 dark:text-slate-350">
                      {revisionContent.onePageNotes.map((note, i) => (
                        <div key={i} className="p-2.5 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 rounded-xl leading-relaxed">
                          {note}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* 8. ⚡ 5-Minute Revision (Active Recall Cards) */}
                  <motion.div
                    layout
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800/60">
                      <Zap className="w-4 h-4 text-amber-500 fill-amber-500/15" />
                      ⚡ 5-Min Flashcards
                    </h3>
                    <div className="space-y-3.5 pt-1">
                      {revisionContent.fiveMinRevision.map((rev, i) => {
                        const isRevealed = !!revealedRecallIndex[i];
                        return (
                          <div key={i} className="border border-slate-150 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                            <div className="p-3 bg-slate-50 dark:bg-slate-950/40">
                              <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase mb-1">Active Recall Question</span>
                              <span className="text-sm font-bold text-slate-805 dark:text-slate-200">{rev.question}</span>
                            </div>
                            
                            <div className="p-3 border-t border-slate-100 dark:border-slate-850 bg-white dark:bg-slate-900 text-center">
                              {!isRevealed ? (
                                <button
                                  onClick={() => toggleRecallCard(i)}
                                  className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-1 mx-auto cursor-pointer"
                                >
                                  <RefreshCw className="w-3 h-3" />
                                  Show Answer
                                </button>
                              ) : (
                                <div className="text-left space-y-1">
                                  <span className="text-[9px] font-mono font-bold text-emerald-500 block uppercase">Answer Key</span>
                                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-medium">{rev.answer}</p>
                                  <button
                                    onClick={() => toggleRecallCard(i)}
                                    className="text-[9px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold block pt-1 cursor-pointer"
                                  >
                                    Hide Answer
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* 9. 🏆 Exam Tips */}
                  <motion.div
                    layout
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
                    <h3 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
                      <Award className="w-4 h-4" />
                      🏆 Examiner Tips
                    </h3>
                    <div className="space-y-3.5">
                      {revisionContent.examTips.map((tip, i) => (
                        <div key={i} className="flex gap-2.5 items-start">
                          <GraduationCap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-655 dark:text-slate-350 leading-relaxed">
                            {tip}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
