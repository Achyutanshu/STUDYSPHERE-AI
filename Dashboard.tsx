import React, { useState, useMemo, useEffect } from 'react';
import { 
  Flame, Clock, Target, CheckSquare, Plus, Activity, 
  ChevronRight, Brain, Sparkles, BookOpen, User, 
  HelpCircle, BookMarked, ThumbsUp, AlertTriangle, Play,
  TrendingUp, GraduationCap, Award, TrendingDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { View, UserProfile, ActivityItem, ChapterProgress } from '../types';
import { 
  SAMPLE_RECENT_ACTIVITIES, 
  SAMPLE_STRONG_CHAPTERS, 
  SAMPLE_WEAK_CHAPTERS 
} from '../data';
import { SUBJECTS } from './Practice';

interface DashboardProps {
  user: UserProfile | null;
  setView: (view: View) => void;
  onLaunchSprint?: (subjectId: string, chapterId: string) => void;
}

export default function Dashboard({ user, setView, onLaunchSprint }: DashboardProps) {
  // Active states
  const [activeTab, setActiveTab] = useState<'overview' | 'chapters' | 'planner'>('overview');
  const [selectedSubject, setSelectedSubject] = useState<'All' | 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology'>('All');

  // Exam Sprint Launcher states
  const [sprintSubId, setSprintSubId] = useState<string>(() => {
    return SUBJECTS[3]?.id || SUBJECTS[0]?.id || '';
  });
  const [sprintChapId, setSprintChapId] = useState<string>('');

  // Auto-select first chapter when selected subject changes
  useEffect(() => {
    const sub = SUBJECTS.find(s => s.id === sprintSubId);
    if (sub && sub.chapters.length > 0) {
      setSprintChapId(sub.chapters[0].id);
    } else {
      setSprintChapId('');
    }
  }, [sprintSubId]);
  
  // Helper to load stats synchronously from localStorage
  const getSavedStats = () => {
    const statsKey = user?.email ? `studysphere-stats-${user.email}` : 'studysphere-stats-guest';
    const saved = localStorage.getItem(statsKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  };

  // Dynamic stats
  const [streak, setStreak] = useState<number>(() => {
    return getSavedStats()?.streak ?? 0;
  });
  const [hasCheckedIn, setHasCheckedIn] = useState<boolean>(() => {
    return getSavedStats()?.hasCheckedIn ?? false;
  });
  const [studyHours, setStudyHours] = useState<number>(() => {
    return getSavedStats()?.studyHours ?? 0;
  });
  const [accuracy, setAccuracy] = useState<number>(() => {
    return getSavedStats()?.accuracy ?? 0;
  });
  const [solvedCount, setSolvedCount] = useState<number>(() => {
    return getSavedStats()?.solvedCount ?? 0;
  });

  // Lists
  const [activities, setActivities] = useState<ActivityItem[]>(() => {
    return getSavedStats()?.activities ?? [];
  });
  const [strongChapters, setStrongChapters] = useState<ChapterProgress[]>(() => {
    return getSavedStats()?.strongChapters ?? [];
  });
  const [weakChapters, setWeakChapters] = useState<ChapterProgress[]>(() => {
    return getSavedStats()?.weakChapters ?? [];
  });

  // Sync back to localStorage whenever any stats change
  useEffect(() => {
    const statsKey = user?.email ? `studysphere-stats-${user.email}` : 'studysphere-stats-guest';
    const statsData = {
      streak,
      hasCheckedIn,
      studyHours,
      accuracy,
      solvedCount,
      activities,
      strongChapters,
      weakChapters
    };
    localStorage.setItem(statsKey, JSON.stringify(statsData));
  }, [user?.email, streak, hasCheckedIn, studyHours, accuracy, solvedCount, activities, strongChapters, weakChapters]);

  // New Practice Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('Physics');
  const [newSolved, setNewSolved] = useState(10);
  const [newAccuracy, setNewAccuracy] = useState(80);
  const [newHours, setNewHours] = useState(1);

  // Handlers
  const handleCheckIn = () => {
    if (!hasCheckedIn) {
      setStreak(prev => prev + 1);
      setHasCheckedIn(true);
    }
  };

  const handleResetDashboard = () => {
    setStreak(0);
    setHasCheckedIn(false);
    setStudyHours(0);
    setAccuracy(0);
    setSolvedCount(0);
    setActivities([]);
    setStrongChapters([]);
    setWeakChapters([]);
  };

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    // Create a new activity item
    const newItem: ActivityItem = {
      id: `act-${Date.now()}`,
      type: 'practice',
      title: newTitle,
      subject: newSubject,
      timestamp: 'Just now',
      value: `Solved ${newSolved} (${newAccuracy}% Accuracy)`,
      accuracy: Number(newAccuracy),
      questionsSolved: Number(newSolved)
    };

    // Update state live
    setActivities([newItem, ...activities]);
    setSolvedCount(prev => prev + Number(newSolved));
    setStudyHours(prev => Number((prev + Number(newHours)).toFixed(1)));
    
    // Weighted accuracy update
    setAccuracy(prev => {
      if (solvedCount === 0) return Number(newAccuracy);
      const updated = Math.round((prev * 4 + Number(newAccuracy)) / 5);
      return updated > 100 ? 100 : updated;
    });

    // Optionally shift some chapters to test dynamic lists
    if (newAccuracy >= 85) {
      // Add standard strong chapter mock
      const mockStrong: ChapterProgress = {
        id: `sc-${Date.now()}`,
        name: newTitle.length > 28 ? newTitle.substring(0, 28) + '...' : newTitle,
        subject: newSubject,
        progress: 85,
        questionsSolved: Number(newSolved),
        accuracy: Number(newAccuracy)
      };
      setStrongChapters([mockStrong, ...strongChapters]);
    }
    // No weak subjects are ever added or flagged

    // Reset Form
    setNewTitle('');
    setNewSolved(10);
    setNewAccuracy(80);
    setNewHours(1);
    setIsModalOpen(false);
  };

  // Compute strongest and weakest subjects dynamically
  const { strongestSubject, weakestSubject } = useMemo(() => {
    const subjectAccuracies: Record<string, { totalAccuracy: number; count: number }> = {};
    
    activities.forEach(act => {
      const acc = act.accuracy;
      if (acc !== undefined) {
        if (!subjectAccuracies[act.subject]) {
          subjectAccuracies[act.subject] = { totalAccuracy: 0, count: 0 };
        }
        subjectAccuracies[act.subject].totalAccuracy += acc;
        subjectAccuracies[act.subject].count += 1;
      }
    });

    const subjectStats = Object.keys(subjectAccuracies).map(sub => {
      const { totalAccuracy, count } = subjectAccuracies[sub];
      return {
        subject: sub,
        avgAccuracy: Math.round(totalAccuracy / count)
      };
    });

    if (subjectStats.length === 0) {
      return { strongestSubject: null, weakestSubject: null };
    }

    // Sort ascending by average accuracy
    subjectStats.sort((a, b) => a.avgAccuracy - b.avgAccuracy);

    // If only one subject exists, treat it as strongest, weakest is none
    if (subjectStats.length === 1) {
      return {
        strongestSubject: subjectStats[0],
        weakestSubject: null
      };
    }

    return {
      strongestSubject: subjectStats[subjectStats.length - 1], // highest accuracy
      weakestSubject: subjectStats[0] // lowest accuracy
    };
  }, [activities]);

  // Filter activities and chapters based on selected subject
  const filteredActivities = selectedSubject === 'All' 
    ? activities 
    : activities.filter(a => a.subject === selectedSubject);

  const filteredStrong = selectedSubject === 'All' 
    ? strongChapters 
    : strongChapters.filter(c => c.subject === selectedSubject);

  const filteredWeak = selectedSubject === 'All' 
    ? weakChapters 
    : weakChapters.filter(c => c.subject === selectedSubject);

  // Weekly bar values (Mon-Sun)
  const weeklyData = [
    { day: 'Mon', hrs: 2.2 },
    { day: 'Tue', hrs: 3.1 },
    { day: 'Wed', hrs: 1.5 },
    { day: 'Thu', hrs: 4.2 },
    { day: 'Fri', hrs: 2.8 },
    { day: 'Sat', hrs: 3.5 },
    { day: 'Sun', hrs: 4.0 },
  ];

  const maxWeeklyHrs = Math.max(...weeklyData.map(d => d.hrs));

  return (
    <div id="dashboard-root" className="min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout: Sidebar + Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Controller (3 Columns on Desktop) */}
          <aside className="lg:col-span-3 space-y-6">
            
            {/* Quick Profile Widget */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <div 
                onClick={() => setView('profile')}
                className="flex items-center space-x-3 mb-4 cursor-pointer hover:opacity-90 transition-opacity group"
                title="Edit Profile"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-950/40 dark:to-pink-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-extrabold border border-indigo-100 dark:border-indigo-900/40 text-lg overflow-hidden shrink-0">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name || 'Student'} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    (user?.name || 'Student').charAt(0).toUpperCase()
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-tight truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {user?.name || 'Student'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium truncate">
                    {user?.email || 'student@studysphere.ai'}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Board Blueprint:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {(user?.board || 'CBSE Board').split(' ')[0]}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Current Grade:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {user?.class || 'Not Selected'}
                  </span>
                </div>
                {user?.school && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">School:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 truncate max-w-[120px]" title={user.school}>
                      {user.school}
                    </span>
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <button
                    id="sidebar-btn-edit-profile"
                    onClick={() => setView('profile')}
                    className="py-2 px-2.5 border border-indigo-200 dark:border-indigo-900 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold rounded-xl transition-all cursor-pointer text-center bg-white dark:bg-slate-900"
                  >
                    Edit Profile
                  </button>
                  <button
                    id="profile-btn-reset"
                    onClick={handleResetDashboard}
                    className="py-2 px-2.5 border border-slate-200/60 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-950/40 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 text-[10px] font-semibold rounded-xl transition-all cursor-pointer text-center bg-slate-50/50 dark:bg-slate-950/20"
                  >
                    Reset Data
                  </button>
                </div>
              </div>
            </div>

            {/* View Selectors */}
            <nav className="bg-white dark:bg-slate-900 p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible scrollbar-none">
              <button
                id="sidebar-tab-overview"
                onClick={() => setActiveTab('overview')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 shrink-0 transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100/30'
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <TrendingUp className="w-4.5 h-4.5" />
                Study Analytics
              </button>

              <button
                id="sidebar-tab-chapters"
                onClick={() => setActiveTab('chapters')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 shrink-0 transition-all cursor-pointer ${
                  activeTab === 'chapters'
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100/30'
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <BookMarked className="w-4.5 h-4.5" />
                Chapter Strengths
              </button>

              <button
                id="sidebar-tab-planner"
                onClick={() => setActiveTab('planner')}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 shrink-0 transition-all cursor-pointer ${
                  activeTab === 'planner'
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-100/30'
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <GraduationCap className="w-4.5 h-4.5" />
                Syllabus Blueprint
              </button>
            </nav>

            {/* Start Practising Action */}
            <button
              id="sidebar-btn-start-practice"
              onClick={() => setView('practice')}
              className="w-full py-3.5 px-4 rounded-xl vibrant-gradient hover:opacity-95 text-white font-extrabold text-xs shadow-md shadow-indigo-500/10 flex items-center justify-center gap-2 cursor-pointer hover:translate-y-[-1px] transition-all"
            >
              <Sparkles className="w-4.5 h-4.5 text-pink-200 fill-pink-500/20" />
              Start Practising
            </button>

            {/* Quick Action Button */}
            <button
              id="sidebar-btn-log"
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 px-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:translate-y-[-1px] transition-all"
            >
              <Plus className="w-4.5 h-4.5 text-indigo-500" />
              Log Practice Session
            </button>

          </aside>

          {/* Main Workspace (9 Columns on Desktop) */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Header / Welcome Area */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40 p-6 md:p-8 rounded-3xl border border-indigo-950/50 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 vibrant-gradient opacity-10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-semibold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                    Board Preparation Active
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
                    Keep It Up, {(user?.name || 'Student').split(' ')[0]}!
                  </h2>
                  <p className="text-slate-300/90 text-xs md:text-sm max-w-xl mt-1.5 leading-relaxed">
                    {solvedCount > 0 ? (
                      <>
                        You have solved <span className="text-white font-bold">{solvedCount} practice questions</span>. Keep logging your sessions to build your customized accuracy benchmark.
                      </>
                    ) : (
                      "Welcome to your personal board preparation space. Practice chapter-wise questions and log your sessions to track your study analytics."
                    )}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  {streak > 0 && (
                    <div className="p-3 bg-white/10 rounded-2xl border border-white/10 text-center min-w-[100px]">
                      <p className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-widest">STREAK</p>
                      <p className="text-xl font-extrabold mt-0.5 text-pink-400 flex items-center justify-center gap-1">
                        <Flame className="w-5 h-5 fill-pink-500 text-pink-500" />
                        {streak} Days
                      </p>
                    </div>
                  )}
                  {!hasCheckedIn ? (
                    <button
                      id="welcome-check-in-btn"
                      onClick={handleCheckIn}
                      className="px-4 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-95 rounded-xl text-xs font-extrabold text-white transition-opacity shadow-lg cursor-pointer"
                    >
                      Daily Check-in
                    </button>
                  ) : (
                    <span className="px-4 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-xs font-bold text-emerald-400 flex items-center gap-1">
                      ✓ Done Today
                    </span>
                  )}
                  <button
                    id="welcome-start-practice-btn"
                    onClick={() => setView('practice')}
                    className="px-4 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl text-xs font-bold text-white transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-pink-300 fill-pink-500/10" />
                    Start Practising
                  </button>
                </div>
              </div>
            </div>

            {/* Performance Indicators (Bento Stats Row) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/30 border border-pink-100/50 dark:border-pink-900/30 text-pink-600 dark:text-pink-400">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Daily Streak</span>
                  <span className="text-lg font-bold font-display text-slate-800 dark:text-white mt-0.5 block">{streak} Days</span>
                  <span className="text-[10px] text-pink-500 font-semibold flex items-center mt-0.5">🔥 Active track</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/50 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Study Time</span>
                  <span className="text-lg font-bold font-display text-slate-800 dark:text-white mt-0.5 block">{studyHours} hrs</span>
                  <span className="text-[10px] text-pink-500 font-semibold flex items-center mt-0.5">This week</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100/50 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Accuracy Meter</span>
                  <span className="text-lg font-bold font-display text-slate-800 dark:text-white mt-0.5 block">{accuracy}%</span>
                  <span className="text-[10px] text-emerald-500 font-semibold flex items-center mt-0.5">Target: 85%</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/50 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Solved Questions</span>
                  <span className="text-lg font-bold font-display text-slate-800 dark:text-white mt-0.5 block">{solvedCount} items</span>
                  <span className="text-[10px] text-pink-500 font-semibold flex items-center mt-0.5">Total solved</span>
                </div>
              </div>
            </div>

            {/* 🚀 Exam Sprint Launcher Widget */}
            <div id="home-exam-sprint-launcher" className="bg-gradient-to-r from-indigo-50/40 to-pink-50/40 dark:from-indigo-950/10 dark:to-pink-950/10 border border-indigo-100/80 dark:border-indigo-950/40 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
              <div className="flex items-start md:items-center justify-between gap-4 flex-col sm:flex-row">
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="inline-block">🚀</span> Exam Sprint
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Need a high-yield speed-run? Pick a chapter below to access active-recall revision sheets structured for 5, 15, 30, or 60-minute sessions.
                  </p>
                </div>
                <span className="shrink-0 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-750 dark:text-indigo-300 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                  ⚡ Board-Syllabus Verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-end">
                <div className="sm:col-span-5 space-y-1.5">
                  <label className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">Subject</label>
                  <select
                    value={sprintSubId}
                    onChange={(e) => setSprintSubId(e.target.value)}
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer font-medium"
                  >
                    {SUBJECTS.map((sub) => (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-5 space-y-1.5">
                  <label className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">Chapter</label>
                  <select
                    value={sprintChapId}
                    onChange={(e) => setSprintChapId(e.target.value)}
                    disabled={!sprintSubId}
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer font-medium disabled:opacity-50"
                  >
                    {SUBJECTS.find(s => s.id === sprintSubId)?.chapters.map((ch) => (
                      <option key={ch.id} value={ch.id}>{ch.name}</option>
                    )) || <option value="">No chapters available</option>}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <button
                    onClick={() => {
                      if (sprintSubId && sprintChapId) {
                        if (onLaunchSprint) {
                          onLaunchSprint(sprintSubId, sprintChapId);
                        } else {
                          setView('exam-sprint');
                        }
                      }
                    }}
                    disabled={!sprintChapId}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-95 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-500/10 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <span>Launch</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Subject Insights Cards (Strongest & Weakest Subjects) */}
            <div id="subject-insights-container" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div id="strongest-subject-card" className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100/50 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase tracking-wider">Strongest Subject</span>
                    <span className="text-base font-bold font-display text-slate-800 dark:text-white mt-0.5 block">
                      {strongestSubject ? `${strongestSubject.subject} (${strongestSubject.avgAccuracy}% Accuracy)` : 'No Data yet'}
                    </span>
                  </div>
                </div>
                {strongestSubject ? (
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-full">
                     ✓ Top Performer
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400 font-bold bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                    No data
                  </span>
                )}
              </div>

              <div id="weakest-subject-card" className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100/50 dark:border-rose-900/30 text-rose-600 dark:text-rose-400">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase tracking-wider">Weakest Subject</span>
                    <span className="text-base font-bold font-display text-slate-800 dark:text-white mt-0.5 block">
                      {weakestSubject ? `${weakestSubject.subject} (${weakestSubject.avgAccuracy}% Accuracy)` : 'No Data yet'}
                    </span>
                  </div>
                </div>
                {weakestSubject ? (
                  <span className="text-[10px] text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-950/40 px-2 py-1 rounded-full">
                     ⚠️ Needs Practice
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400 font-bold bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                    No data
                  </span>
                )}
              </div>
            </div>

            {activities.length === 0 ? (
              /* Centered empty-state message and modern illustration/UI elements graphics */
              <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-12 text-center shadow-sm flex flex-col items-center justify-center min-h-[420px] relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
                
                {/* Clean, Premium Empty-State Graphic / Illustration */}
                <div className="relative mb-8 flex items-center justify-center">
                  {/* Outer animated subtle dashed circle */}
                  <div className="absolute w-36 h-36 rounded-full border border-dashed border-slate-200 dark:border-slate-800 animate-[spin_40s_linear_infinite]" />
                  
                  {/* Middle glow circle */}
                  <div className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:to-pink-500/5 blur-sm" />
                  
                  {/* Inner ring */}
                  <div className="absolute w-24 h-24 rounded-full border border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/30 flex items-center justify-center" />
                  
                  {/* Floating decorative elements around the central ring */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 -right-3 p-2 bg-indigo-50 dark:bg-indigo-950/50 rounded-xl border border-indigo-100 dark:border-indigo-900/30 shadow-sm text-indigo-600 dark:text-indigo-400"
                  >
                    <BookOpen className="w-4.5 h-4.5" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-3 -left-3 p-2 bg-pink-50 dark:bg-pink-950/50 rounded-xl border border-pink-100/50 dark:border-pink-900/30 shadow-sm text-pink-500"
                  >
                    <Target className="w-4.5 h-4.5" />
                  </motion.div>

                  <motion.div 
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-2 -left-5 text-amber-400"
                  >
                    <Sparkles className="w-4 h-4 fill-amber-400/20" />
                  </motion.div>

                  {/* Main Centered Icon */}
                  <div className="relative p-5 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:to-pink-500/20 rounded-2xl border border-indigo-100/40 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <Brain className="w-10 h-10 stroke-[1.5]" />
                  </div>
                </div>

                <div className="max-w-md mx-auto space-y-3 z-10">
                  <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Your learning dashboard will appear once you start practising.
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Once you log your practice sessions and chapter exercises using the <strong>Log Practice Session</strong> button, real-time feedback and board preparation details will appear here.
                  </p>
                  
                  <div className="pt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      id="empty-state-btn-start"
                      onClick={() => setView('practice')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 vibrant-gradient text-white rounded-xl text-xs font-bold hover:opacity-95 transition-opacity cursor-pointer shadow-md shadow-indigo-500/10"
                    >
                      <Sparkles className="w-4 h-4 text-pink-200 fill-pink-500/20" />
                      Start Practising
                    </button>
                    
                    <button
                      id="empty-state-btn-log"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer bg-white dark:bg-slate-900 shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                      Log Practice Session
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Active logged practices state */
              <div className="space-y-6">
                {/* Subject Filters pillbox */}
                <div className="flex items-center space-x-2.5 overflow-x-auto pb-1.5 scrollbar-none">
                  {(['All', 'Physics', 'Chemistry', 'Mathematics'] as const).map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubject(sub)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer border ${
                        selectedSubject === sub
                          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-transparent shadow-sm'
                          : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>

                {activeTab === 'overview' && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Recent Activities Feed (7 Columns) */}
                    <div className="col-span-1 md:col-span-7 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                            <Activity className="w-4 h-4 text-indigo-500" /> Recent Practice Sessions
                          </h3>
                          <p className="text-[11px] text-slate-400">Your logged practice history and performance metrics</p>
                        </div>
                      </div>

                      <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                        {filteredActivities.length === 0 ? (
                          <p className="text-xs text-slate-400 text-center py-8">No activities logged for {selectedSubject}.</p>
                        ) : (
                          filteredActivities.map((act) => (
                            <div
                              key={act.id}
                              className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/80 rounded-xl flex items-center justify-between gap-3 text-xs"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-lg">⚡</span>
                                <div>
                                  <h4 className="font-bold text-slate-900 dark:text-white">{act.title}</h4>
                                  <p className="text-[10px] text-slate-400 mt-0.5">{act.subject} • {act.timestamp}</p>
                                </div>
                              </div>
                              <span className="font-mono text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/40 dark:border-indigo-900/30 px-2 py-0.5 rounded">
                                {act.value}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Practised Chapters (5 Columns) */}
                    <div className="col-span-1 md:col-span-5 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <CheckSquare className="w-4 h-4 text-emerald-500" /> Active Chapters
                        </h3>
                        <p className="text-[11px] text-slate-400">Chapters recorded during practice sessions</p>
                      </div>

                      <div className="space-y-3 my-4 max-h-[280px] overflow-y-auto pr-1">
                        {activities.length === 0 ? (
                          <p className="text-xs text-slate-400 text-center py-8">Log a practice session to list chapters.</p>
                        ) : (
                          activities.map((act, idx) => (
                            <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-950/40 border border-slate-100/80 dark:border-slate-800/80 rounded-xl">
                              <div className="flex justify-between items-start">
                                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{act.title}</h4>
                                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-950/20 px-1.5 py-0.5 rounded">
                                  {act.subject}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                                Logged successfully. Keep up the consistent preparation.
                              </p>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'chapters' && (
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <BookMarked className="w-4.5 h-4.5 text-indigo-500" /> Chapter Performance History
                      </h3>
                      <p className="text-xs text-slate-400">Review your real practice history and score updates</p>
                    </div>

                    <div className="space-y-3">
                      {activities.map((act, idx) => (
                        <div key={idx} className="p-3.5 bg-slate-50 dark:bg-slate-950/40 border border-slate-100/80 dark:border-slate-800/80 rounded-xl flex items-center justify-between gap-3 text-xs">
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">{act.title}</h4>
                            <p className="text-[10px] text-slate-400 mt-0.5">{act.subject} • Logged Chapter</p>
                          </div>
                          <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100/40 dark:border-emerald-900/30 px-2.5 py-1 rounded">
                            {act.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'planner' && (
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Active Syllabus Plan Blueprint</h3>
                      <p className="text-xs text-slate-500">Board Weightages and Blueprint tracking according to active national curriculum</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] text-slate-400 font-mono font-semibold block uppercase">Maths Weightage</span>
                        <span className="text-xl font-bold text-slate-800 dark:text-white block mt-1">80 Marks</span>
                        <span className="text-[10px] text-indigo-500 mt-1 font-semibold block">Algebra & Calculus key focus</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] text-slate-400 font-mono font-semibold block uppercase">Physics Weightage</span>
                        <span className="text-xl font-bold text-slate-800 dark:text-white block mt-1">70 Marks (Theory)</span>
                        <span className="text-[10px] text-amber-500 mt-1 font-semibold block">Electromagnetism highest weight</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] text-slate-400 font-mono font-semibold block uppercase">Chemistry Weightage</span>
                        <span className="text-xl font-bold text-slate-800 dark:text-white block mt-1">70 Marks (Theory)</span>
                        <span className="text-[10px] text-emerald-500 mt-1 font-semibold block">Organic compounds: high marks</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Curriculum Milestones</h4>
                      <div className="p-3 rounded-xl border border-emerald-100 dark:border-emerald-950/20 bg-emerald-50/20 dark:bg-emerald-950/5 flex items-start gap-3">
                        <span className="text-lg">🎯</span>
                        <div className="text-xs">
                          <p className="font-bold text-slate-900 dark:text-white">Milestone 1: Complete Organic Compounds Weight</p>
                          <p className="text-[10.5px] text-slate-500 mt-0.5">Solve Chemistry worksheets for Carbon & compounds. Target is to reach 80% accuracy before mid-terms.</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl border border-indigo-100 dark:border-indigo-950/20 bg-indigo-50/20 dark:bg-indigo-950/5 flex items-start gap-3">
                        <span className="text-lg">🎯</span>
                        <div className="text-xs">
                          <p className="font-bold text-slate-900 dark:text-white">Milestone 2: Recover Physics Rotational mechanics gaps</p>
                          <p className="text-[10.5px] text-slate-500 mt-0.5">Practice 15 extra problems focusing on torque calculations. Boost accuracy from 52% to 75%.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

          </main>
        </div>
      </div>

      {/* MODAL: Log Practice Session Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl p-6 text-slate-800 dark:text-white z-10"
            >
              <div className="mb-4">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Log Live Practice Session</h3>
                <p className="text-xs text-slate-400">Save your real performance stats to update diagnostic charts instantly</p>
              </div>

              <form onSubmit={handleAddLog} className="space-y-4">
                {/* Topic / Title */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Chapter Topic Title
                  </label>
                  <input
                    id="log-input-title"
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g., Electromagnetic Waves Practice"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                  />
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Subject
                  </label>
                  <select
                    id="log-select-subject"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer"
                  >
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Mathematics">Mathematics</option>
                  </select>
                </div>

                {/* Row Grid: Solved questions & accuracy */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Questions Solved
                    </label>
                    <input
                      id="log-input-solved"
                      type="number"
                      min={1}
                      max={200}
                      required
                      value={newSolved}
                      onChange={(e) => setNewSolved(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Accuracy Score (%)
                    </label>
                    <input
                      id="log-input-accuracy"
                      type="number"
                      min={0}
                      max={100}
                      required
                      value={newAccuracy}
                      onChange={(e) => setNewAccuracy(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Hours Spent */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Study Duration (Hours)
                  </label>
                  <input
                    id="log-input-hours"
                    type="number"
                    step="0.5"
                    min="0.5"
                    max="12"
                    required
                    value={newHours}
                    onChange={(e) => setNewHours(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    id="log-btn-cancel"
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    id="log-btn-save"
                    type="submit"
                    className="px-5 py-2 rounded-xl vibrant-gradient text-white text-xs font-bold hover:opacity-95 transition-opacity cursor-pointer"
                  >
                    Save Log
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
