import React, { useState } from 'react';
import { Mail, Lock, User, Sparkles, ArrowRight, ShieldAlert, ArrowLeft, GraduationCap, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { View, UserProfile } from '../types';
import { SUPPORTED_BOARDS, SUPPORTED_CLASSES } from '../data';

interface SignUpPageProps {
  setView: (view: View) => void;
  onSignUpSuccess: (user: UserProfile) => void;
}

export default function SignUpPage({ setView, onSignUpSuccess }: SignUpPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [board, setBoard] = useState(SUPPORTED_BOARDS[0]);
  const [classGrade, setClassGrade] = useState(SUPPORTED_CLASSES[1]); // Class 10 by default
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify.');
      return;
    }

    if (!agreeTerms) {
      setError('You must agree to the Terms of Service & Honor Code.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onSignUpSuccess({
        name,
        email,
        board,
        class: classGrade
      });
    }, 1200);
  };

  const handleDemoAutofill = () => {
    setName('Divya Rajan');
    setEmail('divya.student@studysphere.ai');
    setPassword('studyhard123');
    setConfirmPassword('studyhard123');
    setBoard(SUPPORTED_BOARDS[1]); // ICSE
    setClassGrade(SUPPORTED_CLASSES[3]); // Class 12
    setAgreeTerms(true);
  };

  return (
    <div id="signup-page-root" className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300 px-4 sm:px-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden card-shadow border border-slate-200/60 dark:border-slate-800/80"
      >
        {/* Left Side Info Panel */}
        <div className="hidden md:flex md:col-span-5 vibrant-gradient p-10 flex-col justify-between text-white relative">
          <div className="absolute inset-0 bg-grid-white/[0.04] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          {/* Header Logo */}
          <div className="flex items-center space-x-2 z-10">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
              <span className="font-display font-black text-white text-sm">S</span>
            </div>
            <span className="font-display font-bold text-base tracking-tight">StudySphere AI</span>
          </div>

          {/* Core Perks */}
          <div className="space-y-8 z-10 my-auto">
            <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-snug">
              Begin Your Diagnostic Path
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <p className="text-sm font-bold">Comprehensive Mock Blueprint</p>
                  <p className="text-xs text-indigo-100/75 mt-0.5">Aligned completely to CBSE, ICSE, and standard State syllabi guidelines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <p className="text-sm font-bold">Isolate Gaps in 1 Click</p>
                  <p className="text-xs text-indigo-100/75 mt-0.5">We track quiz history & self-study times, highlighting chapters under 60% accuracy.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <p className="text-sm font-bold">100% Free Onboarding</p>
                  <p className="text-xs text-indigo-100/75 mt-0.5">Access streak tracking, analytical charts, and syllabus coverage calculators.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom citation */}
          <div className="z-10 border-t border-white/10 pt-6">
            <p className="text-[11px] font-mono text-indigo-200">ACTIVE STUDY CO-PILOT SYSTEM</p>
            <p className="text-xs text-white/80 mt-1">Join over 10,000+ students organizing their study plan.</p>
          </div>
        </div>

        {/* Right Side Registration Form */}
        <div className="col-span-1 md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
          
          {/* Top Info */}
          <div className="flex items-center justify-between mb-6">
            <button
              id="signup-btn-back"
              onClick={() => setView('landing')}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <p className="text-xs text-slate-400">
              Already registered?{' '}
              <button
                id="signup-link-login"
                onClick={() => setView('login')}
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
              >
                Log In
              </button>
            </p>
          </div>

          {/* Form wrapper */}
          <div className="max-w-xl w-full mx-auto my-auto">
            <div className="mb-6 text-center md:text-left">
              <h2 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 justify-center md:justify-start">
                Get started with StudySphere
                <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                Establish your grade curriculum profile to set up your streak metrics.
              </p>
            </div>

            {/* Error alerts */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 mb-5 rounded-xl border border-rose-100 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/10 flex items-start gap-2 text-rose-700 dark:text-rose-400 text-xs"
              >
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Autofill helper */}
            <div className="p-3 mb-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 flex items-center justify-between gap-2.5">
              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-slate-200">Quick Pre-fill:</span> Automatically complete standard fields with mock curriculum details.
              </div>
              <button
                id="signup-demo-autofill"
                type="button"
                onClick={handleDemoAutofill}
                className="px-2.5 py-1.5 bg-indigo-600 text-white rounded-lg text-[10px] font-bold hover:bg-indigo-700 transition-colors cursor-pointer shrink-0"
              >
                Pre-fill Form
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="signup-input-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Divya Rajan"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="signup-input-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@gmail.com"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Board and Class Pickers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-500" /> Educational Board
                  </label>
                  <select
                    id="signup-select-board"
                    value={board}
                    onChange={(e) => setBoard(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer"
                  >
                    {SUPPORTED_BOARDS.map((b, i) => (
                      <option key={i} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Class / Grade Level
                  </label>
                  <select
                    id="signup-select-class"
                    value={classGrade}
                    onChange={(e) => setClassGrade(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 cursor-pointer"
                  >
                    {SUPPORTED_CLASSES.map((c, i) => (
                      <option key={i} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Passwords */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Password (min 6 chars)
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="signup-input-password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      id="signup-input-confirm"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                    />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="signup-check-terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-0.5 w-4.5 h-4.5 rounded border-slate-300 dark:border-slate-700 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <label htmlFor="signup-check-terms" className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  I certify that all self-study logs submitted are genuine and agree to the{' '}
                  <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Honor Code Policy</a>,{' '}
                  <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Terms</a>, &{' '}
                  <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Privacy Guidelines</a>.
                </label>
              </div>

              {/* Submit */}
              <button
                id="signup-btn-submit"
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-3 rounded-xl vibrant-gradient text-white font-semibold text-sm transition-all shadow-md shadow-indigo-500/20 hover:opacity-95 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? 'Creating Your Space...' : 'Register Account'}
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>

            </form>
          </div>

          <div className="mt-6 text-center text-[10px] text-slate-400">
            © {new Date().getFullYear()} StudySphere AI. Dedicated student-centric adaptive algorithms.
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}
