import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, User, LogOut, LayoutDashboard, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { View, Theme, UserProfile } from '../types';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  currentView: View;
  setView: (view: View) => void;
  theme: Theme;
  toggleTheme: () => void;
  user: UserProfile | null;
  handleLogout: () => void;
}

export default function Navigation({
  currentView,
  setView,
  theme,
  toggleTheme,
  user,
  handleLogout
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: View) => {
    setView(view);
    setIsOpen(false);
  };

  const isDashboardView = currentView === 'dashboard';

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="nav-logo"
            onClick={() => handleNavClick(user ? 'dashboard' : 'landing')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl vibrant-gradient flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5.5 h-5.5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              StudySphere <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-200 dark:decoration-indigo-800 font-extrabold">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isDashboardView ? (
              <>
                <a
                  href="#features"
                  onClick={() => currentView !== 'landing' && setView('landing')}
                  className="font-medium text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => currentView !== 'landing' && setView('landing')}
                  className="font-medium text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#faq"
                  onClick={() => currentView !== 'landing' && setView('landing')}
                  className="font-medium text-sm text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                >
                  FAQ
                </a>
              </>
            ) : (
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-indigo-500" /> Standard Blueprint: <span className="text-slate-900 dark:text-white font-semibold">
                  {(user?.board || 'CBSE Board').split(' ')[0]} • {user?.class || 'Not Selected'}
                </span>
              </span>
            )}
          </nav>

          {/* User Controls & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {user ? (
              <div className="flex items-center space-x-4">
                {currentView !== 'dashboard' && (
                  <button
                    id="btn-goto-dashboard"
                    onClick={() => setView('dashboard')}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm cursor-pointer"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </button>
                )}
                
                <div className="flex items-center space-x-3 pl-2 border-l border-slate-200 dark:border-slate-800">
                  <button
                    id="btn-desktop-profile"
                    onClick={() => setView('profile')}
                    className="flex items-center space-x-3 text-left hover:opacity-85 transition-opacity cursor-pointer group"
                    title="Edit Profile"
                  >
                    <div className="text-right">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Welcome,</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {user?.name || 'Student'}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800 overflow-hidden shrink-0">
                      {user?.avatar ? (
                        <img src={user.avatar} alt={user.name || 'Student'} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        (user?.name || 'Student').charAt(0).toUpperCase()
                      )}
                    </div>
                  </button>
                  <button
                    id="btn-desktop-logout"
                    onClick={handleLogout}
                    className="p-2 text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer transition-colors shrink-0"
                    title="Sign Out"
                  >
                    <LogOut className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                {currentView !== 'login' && (
                  <button
                    id="btn-login"
                    onClick={() => setView('login')}
                    className="px-4.5 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    Login
                  </button>
                )}
                <button
                  id="btn-signup"
                  onClick={() => setView('signup')}
                  className="px-4.5 py-2 rounded-xl vibrant-gradient text-white font-medium text-sm hover:opacity-95 transition-opacity shadow-sm cursor-pointer shadow-indigo-500/20"
                >
                  Start Free
                </button>
              </div>
            )}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
              {!isDashboardView ? (
                <div className="flex flex-col space-y-3">
                  <a
                    href="#features"
                    onClick={() => { setView('landing'); setIsOpen(false); }}
                    className="px-3 py-2 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={() => { setView('landing'); setIsOpen(false); }}
                    className="px-3 py-2 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    How It Works
                  </a>
                  <a
                    href="#faq"
                    onClick={() => { setView('landing'); setIsOpen(false); }}
                    className="px-3 py-2 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                  >
                    FAQ
                  </a>
                </div>
              ) : (
                <div className="px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-lg">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Standard Plan</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {(user?.board || 'CBSE Board').split(' ')[0]} • {user?.class || 'Not Selected'}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-3">
                {user ? (
                  <>
                    <button
                      id="mobile-btn-profile-card"
                      onClick={() => handleNavClick('profile')}
                      className="flex items-center space-x-3 px-3 py-2 rounded-xl text-left hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors cursor-pointer w-full"
                    >
                      <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold shrink-0 overflow-hidden">
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        ) : (
                          (user.name || 'Student').charAt(0).toUpperCase()
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.name || 'Student'}</p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                      </div>
                    </button>
                    {currentView !== 'dashboard' && (
                      <button
                        id="mobile-btn-dashboard"
                        onClick={() => handleNavClick('dashboard')}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                      >
                        <LayoutDashboard className="w-4.5 h-4.5" />
                        Go to Dashboard
                      </button>
                    )}
                    {currentView !== 'profile' && (
                      <button
                        id="mobile-btn-profile"
                        onClick={() => handleNavClick('profile')}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                      >
                        <User className="w-4.5 h-4.5 text-indigo-500" />
                        Manage Profile
                      </button>
                    )}
                    <button
                      id="mobile-btn-logout"
                      onClick={() => { handleLogout(); setIsOpen(false); }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-rose-200 dark:border-rose-950/40 text-sm font-medium text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/10 hover:bg-rose-100/50 transition-colors"
                    >
                      <LogOut className="w-4.5 h-4.5" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-3 px-1">
                    <button
                      id="mobile-btn-login"
                      onClick={() => handleNavClick('login')}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-center font-medium text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                    >
                      Login
                    </button>
                    <button
                      id="mobile-btn-signup"
                      onClick={() => handleNavClick('signup')}
                      className="px-4 py-2.5 rounded-xl vibrant-gradient text-center font-medium text-sm text-white hover:opacity-95 shadow-md shadow-indigo-500/10"
                    >
                      Start Free
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
