import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight, ShieldAlert, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { View, UserProfile } from '../types';

interface LoginPageProps {
  setView: (view: View) => void;
  onLoginSuccess: (user: UserProfile) => void;
}

export default function LoginPage({ setView, onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in both email and password fields.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsLoading(true);

    // Simulate authentic authentication delay
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        name: 'Siddharth Saroj',
        email: email,
        board: 'CBSE (Central Board of Secondary Education)',
        class: 'Class 12 (Science / Commerce / Arts)'
      });
    }, 1000);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        name: 'Aditya Sen',
        email: 'aditya.student@studysphere.ai',
        board: 'CBSE (Central Board of Secondary Education)',
        class: 'Class 12 (Science / Commerce / Arts)'
      });
    }, 600);
  };

  return (
    <div id="login-page-root" className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300 px-4 sm:px-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden card-shadow border border-slate-200/60 dark:border-slate-800/80"
      >
        {/* Left Side: Editorial Banner */}
        <div className="hidden md:flex md:col-span-5 vibrant-gradient p-10 flex-col justify-between text-white relative">
          <div className="absolute inset-0 bg-grid-white/[0.04] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          {/* Banner Logo */}
          <div className="flex items-center space-x-2 z-10">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
              <span className="font-display font-black text-white text-sm">S</span>
            </div>
            <span className="font-display font-bold text-base tracking-tight">StudySphere AI</span>
          </div>

          {/* Banner Body */}
          <div className="space-y-6 z-10 my-auto">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>AI-Powered Study Partner</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-snug">
              Unlock Chapter-level Strengths Instantly
            </h3>
            <p className="text-indigo-100/80 text-sm leading-relaxed">
              StudySphere diagnoses gaps in real-time, helping you budget your revision hours smartly so you perform with high accuracy.
            </p>
          </div>

          {/* Banner Stats Footer */}
          <div className="z-10 border-t border-white/10 pt-6">
            <div className="flex justify-between items-center text-xs">
              <div>
                <p className="text-indigo-200/70 font-mono font-medium">STUDY TARGETS</p>
                <p className="text-lg font-bold text-white mt-1">100% Board Mapped</p>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <p className="text-indigo-200/70 font-mono font-medium">STUDY TIMELINE</p>
                <p className="text-lg font-bold text-white mt-1">Saves 15+ Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form View */}
        <div className="col-span-1 md:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
          
          {/* Header Back option */}
          <div className="flex items-center justify-between mb-8">
            <button
              id="login-btn-back"
              onClick={() => setView('landing')}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to main
            </button>
            <p className="text-xs text-slate-400">
              New to StudySphere?{' '}
              <button
                id="login-link-signup"
                onClick={() => setView('signup')}
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
              >
                Sign Up Free
              </button>
            </p>
          </div>

          {/* Form */}
          <div className="my-auto max-w-md w-full mx-auto">
            <div className="mb-6 text-center md:text-left">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Welcome back
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5">
                Log in to resume your active study streak and track diagnostic trends.
              </p>
            </div>

            {/* Error Container */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 mb-5 rounded-xl border border-rose-100 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/10 flex items-start gap-2.5 text-rose-700 dark:text-rose-400 text-xs leading-relaxed"
              >
                <ShieldAlert className="w-4.5 h-4.5 shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            {/* Quick Guest Access */}
            <div className="p-3.5 mb-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 flex items-center justify-between gap-2.5">
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-slate-200">Guest Student Access:</span> Log in instantly with a guest profile to explore study tools.
              </div>
              <button
                id="login-demo-auto"
                type="button"
                onClick={handleDemoLogin}
                className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-colors cursor-pointer shrink-0"
              >
                Guest Log In
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    id="login-input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-10.5 pr-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Password
                  </label>
                  <button
                    id="login-btn-forgot"
                    type="button"
                    onClick={() => alert('Forgot Password functionality simulated. In a production build, this would trigger an email reset link.')}
                    className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    id="login-input-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10.5 pr-11 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-colors"
                  />
                  <button
                    id="login-btn-toggle-pass"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                id="login-btn-submit"
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-3 rounded-xl vibrant-gradient text-white font-semibold text-sm transition-all shadow-md shadow-indigo-500/20 hover:opacity-95 flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? 'Authenticating...' : 'Sign In'}
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>

            </form>

            {/* Separator */}
            <div className="my-6 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800" />
              <span className="px-3 shrink-0">OR CONTINUE WITH</span>
              <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800" />
            </div>

            {/* Google Login (UI ONLY) */}
            <button
              id="login-btn-google"
              type="button"
              onClick={() => alert('Google authentication is currently offline. Please use standard email login or Guest Log In to proceed.')}
              className="w-full py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google Account
            </button>
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            By signing in, you agree to StudySphere AI's <a href="#" className="underline">Terms of Service</a> & <a href="#" className="underline">Privacy Policy</a>.
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}
