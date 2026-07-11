import { useState } from 'react';
import { 
  ArrowRight, BookOpen, Sparkles, TrendingUp, Compass, 
  Brain, ShieldCheck, Zap, Star, ChevronDown, CheckCircle2,
  Clock, Target, Atom, FlaskConical, Dna, Calculator,
  Languages, Landmark, Globe, Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { View, FAQItem } from '../types';
import { FAQ_ITEMS } from '../data';

interface LandingPageProps {
  setView: (view: View) => void;
}

export default function LandingPage({ setView }: LandingPageProps) {
  const [activeTab, setActiveTab] = useState<'study' | 'track' | 'improve'>('study');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Personalized Study Paths",
      description: "Tailored blueprints aligned completely with your board requirements (CBSE, ICSE, or State Boards)."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
      title: "Real-time Analytics",
      description: "Understand your strengths & weaknesses with instant chapter-level accuracy metrics."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      title: "Daily Micro-Streaks",
      description: "Keep motivation high with interactive daily milestones and structured focus hour tracking."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Smart Practice Blueprints",
      description: "Generate structured, class-specific study blocks focusing exactly on weak chapters to save effort."
    },
    {
      icon: <Clock className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: "Exam Time-Boxing",
      description: "Build speed and precision under realistic exam constraints with structured focus session logs."
    },
    {
      icon: <Target className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
      title: "Milestone Targeting",
      description: "Set chapter objectives and watch your overall subject index climb toward perfection."
    }
  ];

  const subjects = [
    {
      name: "Physics",
      icon: <Atom className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      description: "Master Mechanics, Electromagnetism, Optics, and Modern Physics with step-by-step diagnostic feedback."
    },
    {
      name: "Chemistry",
      icon: <FlaskConical className="w-5 h-5 text-pink-500 dark:text-pink-400" />,
      description: "Excel in Organic, Inorganic, and Physical Chemistry through deep practice and interactive explanations."
    },
    {
      name: "Biology",
      icon: <Dna className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description: "Grasp Physiology, Genetics, and Ecology concepts with comprehensive diagrams and clear definitions."
    },
    {
      name: "Mathematics",
      icon: <Calculator className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      description: "Build speed and error-free precision in Calculus, Algebra, Probability, and Geometry."
    },
    {
      name: "English",
      icon: <Languages className="w-5 h-5 text-rose-500 dark:text-rose-400" />,
      description: "Succeed in Grammar, Literature Analysis, and composition formats with target board guidelines."
    },
    {
      name: "History & Civics",
      icon: <Landmark className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      description: "Track key eras, global events, constitution details, and legislative frameworks chronologically."
    },
    {
      name: "Geography",
      icon: <Globe className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      description: "Analyze topography, weather, mapping tasks, and resource distributions accurately."
    },
    {
      name: "Computer Applications",
      icon: <Cpu className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      description: "Gain coding proficiency, syntax clarity, and logical strength in Java, Python, and key programming concepts."
    }
  ];

  return (
    <div id="landing-page-root" className="pt-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[500px] bg-gradient-to-b from-indigo-500/10 to-pink-500/0 dark:from-indigo-900/15 dark:to-pink-900/0 blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-pink-500/5 dark:bg-pink-900/10 blur-[120px] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-indigo-800 dark:text-indigo-300 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-xs font-semibold tracking-wide uppercase font-mono">Meet Your Ultimate Learning Co-Pilot</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight"
          >
            The Smartest Way to Prepare for Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 dark:from-indigo-400 dark:to-pink-400">
              Board Exams
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            Practice chapter-wise questions, receive AI-powered explanations, identify weak topics, and track your progress—all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <button
              id="hero-cta-signup"
              onClick={() => setView('signup')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl vibrant-gradient text-white font-semibold shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95 hover:translate-y-[-1px]"
            >
              Start Free Journey
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              id="hero-cta-login"
              onClick={() => setView('login')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer"
            >
              Access Dashboard
            </button>
          </motion.div>
        </div>
      </section>

      {/* Subjects Available Section */}
      <section id="subjects" className="py-16 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase font-mono tracking-wider bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 rounded-full inline-block">
              COMPREHENSIVE COVERAGE
            </span>
            <h2 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
              Subjects Available
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
              Deep-dive study tools and dynamic mock diagnostics mapped to CBSE, ICSE, and State Board guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/60 shadow-sm hover:border-indigo-500/40 hover:translate-y-[-2px] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/40 dark:border-indigo-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {sub.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {sub.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {sub.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Teaser Dashboard Screen */}
      <section className="relative z-10 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-500/5 dark:shadow-indigo-950/10 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 overflow-hidden group"
        >
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="w-1/2 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 rounded-lg text-[11px] py-1 text-center font-mono text-slate-400">
              studysphere.ai/dashboard
            </div>
            <div className="w-8 h-3" />
          </div>

          {/* Dummy Dashboard Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/60">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-500">Practice Score</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-mono font-bold">Excellent</span>
              </div>
              <div className="flex items-baseline space-x-1.5">
                <span className="text-3xl font-display font-bold text-slate-800 dark:text-white">88%</span>
                <span className="text-xs text-slate-400 font-medium">overall accuracy</span>
              </div>
              {/* Dummy mini SVG chart */}
              <div className="mt-5 h-16 w-full flex items-end justify-between px-1">
                {[40, 55, 45, 68, 80, 75, 88].map((h, i) => (
                  <div key={i} className="w-[10%] rounded-t-md bg-gradient-to-t from-indigo-600 to-pink-500 dark:from-indigo-500 dark:to-pink-400 transition-all group-hover:opacity-90" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="col-span-1 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/60">
              <span className="text-xs font-semibold text-slate-500 block mb-4">Daily Streak</span>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-3xl font-display font-bold text-amber-500">🔥 14 Days</span>
                <span className="text-xs text-slate-400 font-medium">Keep going!</span>
              </div>
              <div className="mt-4 grid grid-cols-7 gap-1">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[10px] text-slate-400 font-mono block mb-1">{day}</span>
                    <div className={`w-6 h-6 mx-auto rounded-full flex items-center justify-center text-[10px] font-bold ${i < 5 ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                      ✓
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-1 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-2">Next Milestone Focus</span>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">Rotational Mechanics Revision</h4>
                <p className="text-xs text-rose-500 font-semibold mt-1">⚠️ Accuracy under 55% in physics</p>
              </div>
              <button
                id="landing-dashboard-preview-cta"
                onClick={() => setView('signup')}
                className="w-full mt-4 py-2 text-xs font-semibold text-center rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 transition-colors"
              >
                Boost This Chapter Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Smarter Preparation. Zero Stress.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal">
              Unlike broad worksheets, StudySphere AI diagnoses exactly where you lose marks. Tailor your preparation dynamically.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center border border-slate-100 dark:border-slate-800/80 mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-100/60 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase font-mono tracking-wider">3-STEP WORKFLOW</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
              How StudySphere Guides Your Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Steps Navigation */}
            <div className="lg:col-span-5 space-y-4">
              <button
                id="howitworks-tab-study"
                onClick={() => setActiveTab('study')}
                className={`w-full text-left p-5 rounded-2xl transition-all border flex items-start gap-4 cursor-pointer ${
                  activeTab === 'study'
                    ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-md shadow-indigo-500/5'
                    : 'bg-transparent border-transparent hover:bg-white/40 dark:hover:bg-slate-900/30'
                }`}
              >
                <div className={`p-2 rounded-xl border ${activeTab === 'study' ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">1. Select Class & Board Blueprint</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Select from standard boards (CBSE, ICSE, or State boards) to load matching mock syllabi and blueprints instantly.</p>
                </div>
              </button>

              <button
                id="howitworks-tab-track"
                onClick={() => setActiveTab('track')}
                className={`w-full text-left p-5 rounded-2xl transition-all border flex items-start gap-4 cursor-pointer ${
                  activeTab === 'track'
                    ? 'bg-white dark:bg-slate-900 border-pink-500 shadow-md shadow-pink-500/5'
                    : 'bg-transparent border-transparent hover:bg-white/40 dark:hover:bg-slate-900/30'
                }`}
              >
                <div className={`p-2 rounded-xl border ${activeTab === 'track' ? 'bg-pink-600 text-white border-pink-500' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">2. Log Study Sessions & Quizzes</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Track your daily self-study hours and practice mock papers. Visual meters update live as you solve.</p>
                </div>
              </button>

              <button
                id="howitworks-tab-improve"
                onClick={() => setActiveTab('improve')}
                className={`w-full text-left p-5 rounded-2xl transition-all border flex items-start gap-4 cursor-pointer ${
                  activeTab === 'improve'
                    ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-md shadow-indigo-500/5'
                    : 'bg-transparent border-transparent hover:bg-white/40 dark:hover:bg-slate-900/30'
                }`}
              >
                <div className={`p-2 rounded-xl border ${activeTab === 'improve' ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">3. Isolate & Fix Weak Chapters</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">The system updates your weak topics dynamically, giving you customized revision steps to boost your grades.</p>
                </div>
              </button>
            </div>

            {/* Step Visual Preview Panel */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden min-h-[360px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'study' && (
                  <motion.div
                    key="study"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
                      <BookOpen className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase font-mono tracking-wider">Step 1 Preview: Blueprint</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Structured Board Curriculum Blueprint</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      StudySphere loads matching national curriculum frameworks. Syllabus breakdowns are ready instantly. Select your stream, check the target subjects, and review exact chapter weights as specified by exam boards.
                    </p>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-center border border-slate-100 dark:border-slate-800/80">
                        <span className="text-xs text-slate-400 block font-mono">Syllabus Coverage</span>
                        <span className="text-lg font-bold text-slate-800 dark:text-slate-100">100% Up-To-Date</span>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-center border border-slate-100 dark:border-slate-800/80">
                        <span className="text-xs text-slate-400 block font-mono">Board Aligned</span>
                        <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">CBSE / ICSE / State</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'track' && (
                  <motion.div
                    key="track"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-pink-600 dark:text-pink-400">
                      <Compass className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase font-mono tracking-wider">Step 2 Preview: Live Session Tracking</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Seamless Practice Session Logging</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Log daily self-guided practice timers or quiz completion counts. StudySphere tracks speed metrics and calculates exact overall accuracy levels, which automatically syncs with your weekly revision milestones.
                    </p>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-lg bg-pink-50 dark:bg-pink-950/20 text-center border border-pink-100/50 dark:border-pink-900/30">
                        <span className="text-[10px] text-pink-500 block font-mono">WEEKLY HOURS</span>
                        <span className="text-sm font-bold text-pink-700 dark:text-pink-300">18.5 hrs</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-center border border-emerald-100/50 dark:border-emerald-900/30">
                        <span className="text-[10px] text-emerald-500 block font-mono">ACCURACY METER</span>
                        <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">82.4%</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 text-center border border-amber-100/50 dark:border-amber-900/30">
                        <span className="text-[10px] text-amber-500 block font-mono">DAILY QUIZZES</span>
                        <span className="text-sm font-bold text-amber-700 dark:text-amber-300">3 Solved</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'improve' && (
                  <motion.div
                    key="improve"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
                      <Zap className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase font-mono tracking-wider">Step 3 Preview: Chapter Diagnostics</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Active Weak Chapter Diagnosis</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      Never waste study hours on topics you already know. StudySphere isolates sections where your accuracy falls under 60%, reminding you exactly which sub-topics to target before the big exam.
                    </p>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-rose-500 font-bold">⚠️ physics: Rotational Dynamics</span>
                        <span className="text-slate-400">Accuracy: 48%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-950 h-2 rounded-full overflow-hidden">
                        <div className="bg-rose-500 h-2 rounded-full" style={{ width: '48%' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Why StudySphere AI? Section */}
      <section id="why-studysphere" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-slate-200/50 dark:border-slate-800/50">
        {/* Subtle decorative glowing lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-500/5 to-pink-500/5 blur-[120px] pointer-events-none rounded-full z-0" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Core Value Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase font-mono tracking-wider bg-indigo-50 dark:bg-indigo-950/50 px-3.5 py-1.5 rounded-full inline-block">
              THE STUDYSPHERE EDGE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Why High-Achieving Students Choose StudySphere AI
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Generic revision sheets and video lectures often waste your precious prep time on topics you've already mastered. 
              StudySphere AI replaces general revision with high-precision diagnostics designed specifically to optimize your academic results.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">100% Board Exam Aligned</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Actionable Diagnostics</span>
              </div>
            </div>
          </div>

          {/* Column 2: Bento Core Benefits */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all sm:col-span-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                  <BookOpen className="w-4 h-4" />
                </span>
                CBSE, ICSE, and State Board Syllabus Accuracy
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                We maintain strictly mapped curriculums and question models aligned completely with regional guidelines. You never solve irrelevant mock items or waste focus on off-syllabus concepts.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                  <TrendingUp className="w-4 h-4" />
                </span>
                Dynamic Diagnostic Engine
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Our dynamic diagnostic isolates exact sub-topics where your accuracy drops. No guesswork, just crystal-clear action points to boost marks.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-all">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
                  <Zap className="w-4 h-4" />
                </span>
                Distraction-Free Environment
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Designed specifically for deep cognitive study. Free of addictive notification gamification, ensuring maximum focus efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-100/40 dark:bg-slate-900/20 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
              Have questions about boards, streams, or performance metrics? We have got answers.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq: FAQItem, idx: number) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    id={`faq-toggle-${idx}`}
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="vibrant-gradient rounded-3xl p-8 md:p-14 text-center text-white relative shadow-2xl">
            {/* Decorative abstract shapes */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-indigo-500/30 blur-2xl pointer-events-none" />

            <span className="text-xs font-mono font-bold tracking-widest text-indigo-100 uppercase bg-white/10 px-3 py-1.5 rounded-full inline-block mb-6">
              READY TO ACCELERATE?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight mb-6">
              Unlock Your Highest Exam Potential Today
            </h2>
            <p className="text-indigo-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Join thousands of CBSE, ICSE, and State Board students who study with ultimate visual clarity and metric confidence.
            </p>

            <button
              id="cta-bottom-signup"
              onClick={() => setView('signup')}
              className="px-8 py-4 rounded-xl bg-white text-indigo-600 font-bold text-base hover:bg-slate-50 transition-colors shadow-lg shadow-indigo-950/30 cursor-pointer"
            >
              Create Free Account Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 md:py-16 text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg vibrant-gradient flex items-center justify-center text-white">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  StudySphere <span className="text-indigo-600 dark:text-indigo-400">AI</span>
                </span>
              </div>
              <p className="text-sm max-w-sm leading-relaxed">
                StudySphere AI is an interactive diagnostic platform focused on helping grade school and board students track, master, and ace their final curriculums.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900 dark:text-slate-100 mb-4">PLATFORM</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#features" className="hover:text-slate-800 dark:hover:text-white">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-slate-800 dark:hover:text-white">How It Works</a></li>
                <li><a href="#faq" className="hover:text-slate-800 dark:hover:text-white">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold font-mono tracking-wider uppercase text-slate-900 dark:text-slate-100 mb-4">LEGAL</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-slate-800 dark:hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="hover:text-slate-800 dark:hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-slate-800 dark:hover:text-white">Honor Code</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} StudySphere AI. All rights reserved.</p>
            <p className="font-mono">Created with extreme precision for Phase 1</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
