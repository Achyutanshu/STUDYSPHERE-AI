import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer"
      title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-indigo-600" />
        ) : (
          <Sun className="w-5 h-5 text-amber-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
