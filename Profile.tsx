import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Mail, School, GraduationCap, ArrowLeft, Camera, Save, 
  CheckCircle, Sparkles, LayoutDashboard, Globe
} from 'lucide-react';
import { View, UserProfile } from '../types';
import { SUPPORTED_BOARDS, SUPPORTED_CLASSES } from '../data';

interface ProfileProps {
  user: UserProfile | null;
  onUpdateProfile: (updated: UserProfile) => void;
  setView: (view: View) => void;
}

export default function Profile({ user, onUpdateProfile, setView }: ProfileProps) {
  // Graceful fallback values
  const defaultUser: UserProfile = {
    name: 'Student',
    email: 'student@studysphere.ai',
    board: 'CBSE (Central Board of Secondary Education)',
    class: 'Not Selected',
    school: '',
    avatar: ''
  };

  const activeUser = user || defaultUser;

  // Form states
  const [name, setName] = useState(activeUser.name);
  const [board, setBoard] = useState(activeUser.board);
  const [classGrade, setClassGrade] = useState(activeUser.class);
  const [school, setSchool] = useState(activeUser.school || '');
  const [avatar, setAvatar] = useState(activeUser.avatar || '');
  
  const [successMessage, setSuccessMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle avatar upload and convert to base64 for offline-first persistence
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1.5 * 1024 * 1024) {
        alert("Please choose an image under 1.5MB to ensure it fits in browser memory storage.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const updatedProfile: UserProfile = {
      name: name.trim() || 'Student',
      email: activeUser.email,
      board: board,
      class: classGrade,
      school: school.trim(),
      avatar: avatar
    };

    setTimeout(() => {
      onUpdateProfile(updatedProfile);
      setIsSaving(false);
      setSuccessMessage('Profile updated successfully.');
      
      // Auto dismiss success toast after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 600);
  };

  // Profile initial letter
  const initials = name.trim() ? name.trim().charAt(0).toUpperCase() : 'S';

  return (
    <div id="profile-page-container" className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Success Message Banner */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              id="profile-success-banner"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
            >
              <div className="bg-emerald-500 text-white px-5 py-3.5 rounded-2xl shadow-xl shadow-emerald-500/10 flex items-center gap-3 border border-emerald-400/30">
                <CheckCircle className="w-5 h-5 shrink-0 text-emerald-100 animate-[bounce_1s_ease-in-out]" />
                <div className="text-sm font-semibold tracking-wide">
                  {successMessage}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800/60 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-2">
              <User className="w-3.5 h-3.5" /> Student Account Center
            </div>
            <h1 id="profile-heading" className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Manage Profile
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-0.5">
              Customize your curriculum blueprint, school profile, and avatar settings.
            </p>
          </div>
          <div>
            <button
              id="profile-back-dashboard-btn"
              onClick={() => setView('dashboard')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-900 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-950 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Avatar Upload (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm w-full text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/[0.02] rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative">
                {/* Image Avatar Container */}
                <div className="mx-auto w-28 h-28 rounded-full border-4 border-slate-100 dark:border-slate-800 shadow-inner flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 relative group">
                  {avatar ? (
                    <img 
                      src={avatar} 
                      alt="Student Avatar" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="font-display font-extrabold text-3xl text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 w-full h-full flex items-center justify-center">
                      {initials}
                    </div>
                  )}

                  {/* Dark hover overlay */}
                  <div 
                    onClick={triggerFileInput}
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white text-[10px] font-bold cursor-pointer transition-opacity duration-200 gap-1"
                  >
                    <Camera className="w-4.5 h-4.5 text-white" />
                    <span>CHANGE PHOTO</span>
                  </div>
                </div>

                {/* Floating camera button */}
                <button
                  id="profile-avatar-camera-btn"
                  type="button"
                  onClick={triggerFileInput}
                  className="absolute bottom-1 right-1/2 translate-x-12 p-2 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 text-white rounded-full border-2 border-white dark:border-slate-900 shadow-md transition-transform active:scale-95 cursor-pointer"
                  title="Upload avatar image"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>

                {/* Hidden input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                  {name || 'Student'}
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider font-mono">
                  {classGrade !== 'Not Selected' ? classGrade : 'Class Not Selected'}
                </p>
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-[200px] mx-auto pt-1">
                  Upload an image file up to 1.5MB. It stores securely on your offline browser system.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-col gap-2">
                {avatar && (
                  <button
                    id="profile-remove-avatar-btn"
                    type="button"
                    onClick={() => setAvatar('')}
                    className="w-full py-2 px-3 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 text-xs font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors cursor-pointer"
                  >
                    Remove Photo
                  </button>
                )}
                <button
                  id="profile-view-dashboard-btn"
                  type="button"
                  onClick={() => setView('dashboard')}
                  className="w-full py-2 px-3 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/80 rounded-xl hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  View Analytics
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Edit Profile Form (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <form onSubmit={handleSave} className="space-y-6">
                
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                        <User className="w-4.5 h-4.5" />
                      </div>
                      <input
                        id="profile-input-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Adarsh Sen"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 text-sm font-semibold transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Email Address (Read-Only)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                        <Mail className="w-4.5 h-4.5" />
                      </div>
                      <input
                        id="profile-input-email"
                        type="email"
                        disabled
                        value={activeUser.email}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-850 rounded-xl bg-slate-100/80 dark:bg-slate-950/60 text-slate-400 dark:text-slate-500 cursor-not-allowed text-sm font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Board & Class Selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Educational Board Blueprint
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                        <Globe className="w-4.5 h-4.5" />
                      </div>
                      <select
                        id="profile-select-board"
                        value={board}
                        onChange={(e) => setBoard(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 text-sm font-semibold transition-all appearance-none cursor-pointer"
                      >
                        {SUPPORTED_BOARDS.map((b) => (
                          <option key={b} value={b} className="dark:bg-slate-900">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Current Grade / Class
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                        <GraduationCap className="w-4.5 h-4.5" />
                      </div>
                      <select
                        id="profile-select-class"
                        value={classGrade}
                        onChange={(e) => setClassGrade(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 text-sm font-semibold transition-all appearance-none cursor-pointer"
                      >
                        <option value="Not Selected" className="dark:bg-slate-900 font-bold text-slate-400">
                          Not Selected
                        </option>
                        {SUPPORTED_CLASSES.map((c) => (
                          <option key={c} value={c} className="dark:bg-slate-900">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* School Name (Optional) */}
                <div>
                  <label className="block text-xs font-semibold font-mono text-slate-400 uppercase tracking-wider mb-2">
                    School Name (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
                      <School className="w-4.5 h-4.5" />
                    </div>
                    <input
                      id="profile-input-school"
                      type="text"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      placeholder="e.g. St. Xavier's Collegiate School"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 text-sm font-semibold transition-all"
                    />
                  </div>
                </div>

                {/* Form Submit / Save button */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex justify-end">
                  <button
                    id="profile-btn-save"
                    type="submit"
                    disabled={isSaving}
                    className="w-full sm:w-auto px-6 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/10 flex items-center justify-center gap-2 cursor-pointer transition-all hover:translate-y-[-1px] disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    <Save className="w-4 h-4" />
                    {isSaving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
