import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { View, Theme, UserProfile } from './types';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';
import Practice from './components/Practice';
import Profile from './components/Profile';
import ExamSprintModule from './components/ExamSprintModule';

export default function App() {
  // Theme state synced with localStorage
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('studysphere-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    // Fallback to light theme by default for modern soft off-white feel
    return 'light';
  });

  // Sticky User session synced with localStorage
  const [user, setUser] = useState<UserProfile | null>(() => {
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

  // Navigation controller
  const [currentView, setView] = useState<View>(() => {
    const savedUser = localStorage.getItem('studysphere-user');
    // If user is already authenticated, jump them directly into their customized study space
    return savedUser ? 'dashboard' : 'landing';
  });

  // Selected Sprint Subject and Chapter for deep linking from home screen selector
  const [sprintSubjectId, setSprintSubjectId] = useState<string | undefined>(undefined);
  const [sprintChapterId, setSprintChapterId] = useState<string | undefined>(undefined);

  // Synchronize Dark Class on DOM
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('studysphere-theme', next);
      return next;
    });
  };

  const handleLoginSuccess = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('studysphere-user', JSON.stringify(profile));
    setView('dashboard');
  };

  const handleSignUpSuccess = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('studysphere-user', JSON.stringify(profile));
    setView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('studysphere-user');
    setView('landing');
  };

  const handleUpdateProfile = (updatedProfile: UserProfile) => {
    setUser(updatedProfile);
    localStorage.setItem('studysphere-user', JSON.stringify(updatedProfile));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navigation
        currentView={currentView}
        setView={setView}
        theme={theme}
        toggleTheme={toggleTheme}
        user={user}
        handleLogout={handleLogout}
      />

      {/* Main View Router with framer-motion page transition */}
      <main id="app-view-container">
        <AnimatePresence mode="wait">
          {currentView === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <LandingPage setView={setView} />
            </motion.div>
          )}

          {currentView === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <LoginPage setView={setView} onLoginSuccess={handleLoginSuccess} />
            </motion.div>
          )}

          {currentView === 'signup' && (
            <motion.div
              key="signup"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <SignUpPage setView={setView} onSignUpSuccess={handleSignUpSuccess} />
            </motion.div>
          )}

          {currentView === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Dashboard 
                user={user} 
                setView={setView} 
                onLaunchSprint={(subId, chId) => {
                  setSprintSubjectId(subId);
                  setSprintChapterId(chId);
                  setView('exam-sprint');
                }}
              />
            </motion.div>
          )}

          {currentView === 'exam-sprint' && (
            <motion.div
              key="exam-sprint"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ExamSprintModule 
                user={user} 
                setView={setView} 
                selectedSubjectId={sprintSubjectId}
                selectedChapterId={sprintChapterId}
                onBack={() => {
                  setSprintSubjectId(undefined);
                  setSprintChapterId(undefined);
                  setView('dashboard');
                }}
              />
            </motion.div>
          )}

          {currentView === 'practice' && (
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Practice user={user} setView={setView} />
            </motion.div>
          )}

          {currentView === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Profile user={user} onUpdateProfile={handleUpdateProfile} setView={setView} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

    </div>
  );
}
