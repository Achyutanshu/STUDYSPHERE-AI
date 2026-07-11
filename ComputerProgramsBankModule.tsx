import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, Hash, Layout, Grid, Type, Check, Eye, Lightbulb, 
  ArrowLeft, Search, Sparkles, Award, CheckSquare, Square, Clipboard, ClipboardCheck
} from 'lucide-react';
import { COMPUTER_PROGRAMS_BANK } from '../data/computerProgramsBankData';

interface ComputerProgramsBankModuleProps {
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

export default function ComputerProgramsBankModule({ onBack, colorTheme }: ComputerProgramsBankModuleProps) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedPrograms, setRevealedPrograms] = useState<Record<string, boolean>>({});
  const [copiedProgramId, setCopiedProgramId] = useState<string | null>(null);

  // Mastery Checklist persistence
  const [masteredPrograms, setMasteredPrograms] = useState<string[]>(() => {
    const saved = localStorage.getItem('studysphere_mastered_programs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('studysphere_mastered_programs', JSON.stringify(masteredPrograms));
  }, [masteredPrograms]);

  const toggleMastery = (progId: string) => {
    setMasteredPrograms(prev => 
      prev.includes(progId) ? prev.filter(id => id !== progId) : [...prev, progId]
    );
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedProgramId(id);
    setTimeout(() => setCopiedProgramId(null), 2000);
  };

  // Statistics
  const totalProgramsInBank = COMPUTER_PROGRAMS_BANK.reduce((sum, cat) => sum + cat.programs.length, 0);
  const totalMastered = masteredPrograms.length;
  const masteryPercent = Math.round((totalMastered / totalProgramsInBank) * 100) || 0;

  // Active Category & Filtered Programs
  const activeCategory = COMPUTER_PROGRAMS_BANK[activeCategoryIdx] || COMPUTER_PROGRAMS_BANK[0];
  const filteredPrograms = activeCategory.programs.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Premium Sub-Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800/60 pb-6">
        <div className="flex items-start gap-4">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-950 transition-all"
            title="Back to Chapters"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <span>Computer Applications</span>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <span className="text-violet-600 dark:text-violet-400">Board Preparation Tool</span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
              Java Programs Bank
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-0.5">
              A comprehensive library of exam-standard, hand-crafted Java programs frequently tested in ICSE Board Examinations.
            </p>
          </div>
        </div>

        {/* Master Progress Indicator */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 p-4 rounded-2xl shadow-sm flex items-center gap-4 min-w-[220px]">
          <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                className="stroke-slate-100 dark:stroke-slate-800"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                className="stroke-violet-600 dark:stroke-violet-400"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - masteryPercent / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute font-mono text-xs font-bold text-slate-800 dark:text-white">
              {masteryPercent}%
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">Overall Mastery</span>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              <strong className="font-extrabold text-slate-900 dark:text-white">{totalMastered}</strong> of {totalProgramsInBank} Programs Mastered
            </span>
          </div>
        </div>
      </div>

      {/* Intro card */}
      <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/20 p-5 rounded-3xl border border-slate-150 dark:border-slate-850/60 flex gap-4 items-start shadow-sm">
        <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30 shrink-0">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div className="space-y-1">
          <span className="font-bold text-slate-900 dark:text-white block text-sm">Interactive active recall workspace:</span>
          <p>
            Solutions are hidden by default to test your analytical thinking and mental tracing skills. Analyze the question, review the step-by-step logic algorithm, attempt to draft your mental model, then reveal the compiled Java code alongside its dry-run trace explanation.
          </p>
        </div>
      </div>

      {/* Filter Categories Tab Selectors & Search bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between pt-1">
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          {COMPUTER_PROGRAMS_BANK.map((cat, idx) => {
            const isActive = activeCategoryIdx === idx;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryIdx(idx);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800/80'
                }`}
              >
                {cat.id === 'number-programs' && <Hash className="w-3.5 h-3.5" />}
                {cat.id === 'pattern-programs' && <Layout className="w-3.5 h-3.5" />}
                {cat.id === 'array-programs' && <Grid className="w-3.5 h-3.5" />}
                {cat.id === 'string-programs' && <Type className="w-3.5 h-3.5" />}
                <span>{cat.title}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {cat.programs.length}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder={`Search ${activeCategory.title.toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Filter and render programs list */}
      <div className="space-y-6 pt-2">
        {filteredPrograms.length > 0 ? (
          filteredPrograms.map((prog, index) => {
            const isRevealed = !!revealedPrograms[prog.id];
            const isMastered = masteredPrograms.includes(prog.id);
            return (
              <div 
                key={prog.id}
                className={`bg-white dark:bg-slate-900 border ${
                  isMastered ? 'border-emerald-500/30 bg-emerald-50/5 dark:bg-emerald-950/5' : 'border-slate-200/90 dark:border-slate-800/80'
                } rounded-3xl p-6 md:p-8 shadow-sm transition-all duration-300 space-y-5`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">
                        PROG #{index + 1}
                      </span>
                      {prog.isIcse && (
                        <span className="bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          ICSE Recommended
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-extrabold text-base md:text-lg text-slate-900 dark:text-white">
                      {prog.title}
                    </h3>
                  </div>

                  {/* Master Checkbox Button */}
                  <button
                    onClick={() => toggleMastery(prog.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all border ${
                      isMastered
                        ? 'bg-emerald-100/50 dark:bg-emerald-950/40 border-emerald-300/50 text-emerald-700 dark:text-emerald-400 font-bold'
                        : 'bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-850 dark:hover:text-white'
                    }`}
                  >
                    {isMastered ? (
                      <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                    <span>{isMastered ? 'Mastered' : 'Mark Mastered'}</span>
                  </button>
                </div>

                <div className="bg-slate-50/50 dark:bg-slate-950/10 p-5 rounded-2xl border border-slate-100 dark:border-slate-850 space-y-3">
                  <p className="text-slate-700 dark:text-slate-300 text-xs md:text-sm leading-relaxed font-sans">
                    <strong className="text-slate-900 dark:text-white font-extrabold block mb-1 uppercase tracking-wide text-[10px] font-mono text-slate-450">Syllabus Problem statement</strong>
                    {prog.question}
                  </p>
                </div>

                {/* Algorithm box */}
                <div className="bg-slate-50/40 dark:bg-slate-950/15 p-5 rounded-2xl border border-slate-100/80 dark:border-slate-850/60 space-y-2.5">
                  <span className="text-[10px] font-mono text-slate-450 uppercase font-extrabold tracking-wider block">Logic & Algorithm Steps</span>
                  <ol className="list-decimal list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1.5 leading-relaxed pl-1">
                    {prog.algorithm.map((step, sIdx) => (
                      <li key={sIdx} className="marker:font-semibold marker:text-slate-400">
                        <span className="pl-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Sample inputs / outputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50/60 dark:bg-slate-950/5 p-4 rounded-2xl border border-slate-100/80 dark:border-slate-850/45">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-extrabold tracking-wider block mb-2">Sample Input Tracing</span>
                    <pre className="font-mono text-xs text-slate-800 dark:text-slate-300 bg-slate-100/50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50 overflow-x-auto">
                      {prog.sampleInput}
                    </pre>
                  </div>
                  <div className="bg-slate-50/60 dark:bg-slate-950/5 p-4 rounded-2xl border border-slate-100/80 dark:border-slate-850/45">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-extrabold tracking-wider block mb-2">Expected Board Output</span>
                    <pre className="font-mono text-xs text-emerald-700 dark:text-emerald-400 bg-slate-100/50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50 overflow-x-auto">
                      {prog.sampleOutput}
                    </pre>
                  </div>
                </div>

                {/* Reveal controls */}
                <div className="pt-2">
                  {!isRevealed ? (
                    <button
                      onClick={() => setRevealedPrograms(prev => ({ ...prev, [prog.id]: true }))}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl text-xs transition-all shadow-sm cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      Show Hand-Solved Code Solution
                    </button>
                  ) : (
                    <div className="space-y-4 pt-1 border-t border-slate-100 dark:border-slate-800/60">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-violet-600 dark:text-violet-400 uppercase font-extrabold tracking-wider">Verified Java Code Solution</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleCopyCode(prog.code, prog.id)}
                            className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700/60"
                          >
                            {copiedProgramId === prog.id ? (
                              <>
                                <ClipboardCheck className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Clipboard className="w-3.5 h-3.5" />
                                <span>Copy Code</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => setRevealedPrograms(prev => ({ ...prev, [prog.id]: false }))}
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                          >
                            Hide Solution
                          </button>
                        </div>
                      </div>
                      
                      {/* Code Block Container */}
                      <pre className="bg-slate-950 text-slate-100 p-5 rounded-2xl font-mono text-xs overflow-x-auto leading-relaxed border border-slate-850 max-h-[450px] shadow-inner relative">
                        <code>{prog.code}</code>
                      </pre>

                      {/* Explanation box */}
                      <div className="bg-violet-50/50 dark:bg-violet-950/15 border border-violet-100/60 dark:border-violet-900/30 p-5 rounded-2xl space-y-2">
                        <div className="flex items-center gap-2 text-violet-750 dark:text-violet-400">
                          <Lightbulb className="w-4 h-4 shrink-0" />
                          <span className="text-[10px] font-mono uppercase font-bold tracking-wider">Detailed Dry-Run Tracing</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                          {prog.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-slate-500 border border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900">
            No matching programs found for "{searchQuery}". Try modifying your query!
          </div>
        )}
      </div>

      {/* Module Footer Back Button */}
      <div className="pt-4 flex justify-start">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 hover:bg-slate-50 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Chapter Chapters
        </button>
      </div>
    </div>
  );
}
