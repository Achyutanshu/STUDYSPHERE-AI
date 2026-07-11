import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Atom, FlaskConical, Dna, Calculator, Languages, Landmark, Globe, Cpu, 
  ArrowLeft, BookOpen, Sparkles, ChevronRight, Lock, BookMarked, Compass,
  TrendingUp, Terminal
} from 'lucide-react';
import { View, UserProfile } from '../types';
import PhysicsModule from './PhysicsModule';
import HindiModule from './HindiModule';
import ChemistryModule from './ChemistryModule';
import ComputerApplicationsModule from './ComputerApplicationsModule';
import ComputerProgramsBankModule from './ComputerProgramsBankModule';

interface PracticeProps {
  user: UserProfile | null;
  setView: (view: View) => void;
}

export interface Chapter {
  id: string;
  name: string;
}

export interface Subject {
  id: string;
  name: string;
  iconName: string;
  color: 'indigo' | 'pink' | 'emerald' | 'sky' | 'rose' | 'amber' | 'teal' | 'violet';
  description: string;
  chapters: Chapter[];
}

export const SUBJECTS: Subject[] = [
  {
    id: 'english-language',
    name: 'English Language',
    iconName: 'Languages',
    color: 'rose',
    description: 'Master Essay Writing, Letters, Notices, Emails, Comprehension, and Functional Grammar.',
    chapters: [
      { id: 'el-1', name: 'Essay Writing' },
      { id: 'el-2', name: 'Letter Writing' },
      { id: 'el-3', name: 'Notice & Email' },
      { id: 'el-4', name: 'Comprehension' },
      { id: 'el-5', name: 'Functional Grammar' }
    ]
  },
  {
    id: 'english-literature',
    name: 'English Literature',
    iconName: 'BookOpen',
    color: 'indigo',
    description: 'Deconstruct Julius Caesar Acts, explore classic Prose, and analyze elegant Poetry.',
    chapters: [
      { id: 'elit-1', name: 'Drama: Julius Caesar Act III' },
      { id: 'elit-2', name: 'Drama: Julius Caesar Act IV' },
      { id: 'elit-3', name: 'Drama: Julius Caesar Act V' },
      { id: 'elit-4', name: 'Prose: The Elevator' },
      { id: 'elit-5', name: 'Prose: With the Photographer' },
      { id: 'elit-6', name: 'Prose: The Last Lesson' },
      { id: 'elit-7', name: 'Prose: The Girl Who Can' },
      { id: 'elit-8', name: 'Prose: The Pedestrian' },
      { id: 'elit-9', name: 'Poetry: Haunted Houses' },
      { id: 'elit-10', name: 'Poetry: A Considerable Speck' },
      { id: 'elit-11', name: 'Poetry: The Glove and the Lions' },
      { id: 'elit-12', name: 'Poetry: When Great Trees Fall' },
      { id: 'elit-13', name: 'Poetry: The Power of Music' }
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    iconName: 'Calculator',
    color: 'sky',
    description: 'Build error-free precision in GST, Algebra, Geometry, Trigonometry, and Probability.',
    chapters: [
      { id: 'm-1', name: 'GST' },
      { id: 'm-2', name: 'Banking' },
      { id: 'm-3', name: 'Shares & Dividend' },
      { id: 'm-4', name: 'Linear Inequations' },
      { id: 'm-5', name: 'Quadratic Equations' },
      { id: 'm-6', name: 'Problems on Quadratic Equations' },
      { id: 'm-7', name: 'Ratio & Proportion' },
      { id: 'm-8', name: 'Factorization of Polynomials' },
      { id: 'm-9', name: 'Matrices' },
      { id: 'm-10', name: 'Arithmetic Progression' },
      { id: 'm-11', name: 'Geometric Progression' },
      { id: 'm-12', name: 'Reflection' },
      { id: 'm-13', name: 'Section Formula' },
      { id: 'm-14', name: 'Midpoint Formula' },
      { id: 'm-15', name: 'Equation of a Line' },
      { id: 'm-16', name: 'Similarity' },
      { id: 'm-17', name: 'Loci' },
      { id: 'm-18', name: 'Circles' },
      { id: 'm-19', name: 'Tangents & Intersecting Chords' },
      { id: 'm-20', name: 'Constructions' },
      { id: 'm-21', name: 'Cylinder, Cone & Sphere' },
      { id: 'm-22', name: 'Trigonometric Identities' },
      { id: 'm-23', name: 'Heights & Distances' },
      { id: 'm-24', name: 'Histograms & Ogives' },
      { id: 'm-25', name: 'Mean, Median, Mode & Quartiles' },
      { id: 'm-26', name: 'Probability' }
    ]
  },
  {
    id: 'physics',
    name: 'Physics',
    iconName: 'Atom',
    color: 'indigo',
    description: 'Master Force, Refraction, Spectrum, Electricity, Calorimetry, and Radioactivity.',
    chapters: [
      { id: 'p-1', name: 'Force' },
      { id: 'p-2', name: 'Work, Energy & Power' },
      { id: 'p-3', name: 'Machines' },
      { id: 'p-4', name: 'Refraction at Plane Surface' },
      { id: 'p-5', name: 'Refraction Through a Lens' },
      { id: 'p-6', name: 'Spectrum' },
      { id: 'p-7', name: 'Sound' },
      { id: 'p-8', name: 'Current Electricity' },
      { id: 'p-9', name: 'Household Circuits' },
      { id: 'p-10', name: 'Electromagnetism' },
      { id: 'p-11', name: 'Radioactivity' },
      { id: 'p-12', name: 'Calorimetry' }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    iconName: 'FlaskConical',
    color: 'pink',
    description: 'Excel in Periodic Table, Bonding, Mole Concept, Metallurgy, and Organic Chemistry.',
    chapters: [
      { id: 'c-1', name: 'Periodic Table' },
      { id: 'c-2', name: 'Chemical Bonding' },
      { id: 'c-3', name: 'Acids, Bases & Salts' },
      { id: 'c-4', name: 'Analytical Chemistry' },
      { id: 'c-5', name: 'Mole Concept & Stoichiometry' },
      { id: 'c-6', name: 'Electrolysis' },
      { id: 'c-7', name: 'Metallurgy' },
      { id: 'c-8', name: 'Hydrogen Chloride' },
      { id: 'c-9', name: 'Ammonia' },
      { id: 'c-10', name: 'Nitric Acid' },
      { id: 'c-11', name: 'Sulphuric Acid' },
      { id: 'c-12', name: 'Organic Chemistry' },
      { id: 'c-13', name: 'Practical Chemistry' }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    iconName: 'Dna',
    color: 'emerald',
    description: 'Analyze Cell Cycles, Genetics, Human Systems, Plant Physiology, and Populations.',
    chapters: [
      { id: 'b-1', name: 'Cell Cycle & Cell Division' },
      { id: 'b-2', name: 'Genetics' },
      { id: 'b-3', name: 'Absorption by Roots' },
      { id: 'b-4', name: 'Transpiration' },
      { id: 'b-5', name: 'Photosynthesis' },
      { id: 'b-6', name: 'Chemical Coordination in Plants' },
      { id: 'b-7', name: 'Circulatory System' },
      { id: 'b-8', name: 'Excretory System' },
      { id: 'b-9', name: 'Nervous System' },
      { id: 'b-10', name: 'Sense Organs' },
      { id: 'b-11', name: 'Endocrine System' },
      { id: 'b-12', name: 'Reproductive System' },
      { id: 'b-13', name: 'Human Evolution' },
      { id: 'b-14', name: 'Population' },
      { id: 'b-15', name: 'Pollution' }
    ]
  },
  {
    id: 'history-civics',
    name: 'History & Civics',
    iconName: 'Landmark',
    color: 'amber',
    description: 'Explore Indian Nationalism, Mahatma Gandhi, World Wars, and Union Judiciary.',
    chapters: [
      { id: 'hc-1', name: 'History: First War of Independence (1857)' },
      { id: 'hc-2', name: 'History: Growth of Nationalism' },
      { id: 'hc-3', name: 'History: Early Nationalists' },
      { id: 'hc-4', name: 'History: Partition of Bengal' },
      { id: 'hc-5', name: 'History: Muslim League' },
      { id: 'hc-6', name: 'History: Mahatma Gandhi & National Movement' },
      { id: 'hc-7', name: 'History: Quit India Movement' },
      { id: 'hc-8', name: 'History: Forward Bloc & INA' },
      { id: 'hc-9', name: 'History: Independence & Partition of India' },
      { id: 'hc-10', name: 'History: First World War' },
      { id: 'hc-11', name: 'History: Rise of Dictatorship' },
      { id: 'hc-12', name: 'History: Second World War' },
      { id: 'hc-13', name: 'History: Non-Aligned Movement (NAM)' },
      { id: 'hc-14', name: 'Civics: Union Parliament' },
      { id: 'hc-15', name: 'Civics: Union Executive' },
      { id: 'hc-16', name: 'Civics: President & Vice-President' },
      { id: 'hc-17', name: 'Civics: Prime Minister & Council of Ministers' },
      { id: 'hc-18', name: 'Civics: Supreme Court' },
      { id: 'hc-19', name: 'Civics: High Courts' },
      { id: 'hc-20', name: 'Civics: Subordinate Courts' },
      { id: 'hc-21', name: 'Civics: United Nations' },
      { id: 'hc-22', name: 'Civics: Major Agencies of the United Nations' }
    ]
  },
  {
    id: 'geography',
    name: 'Geography',
    iconName: 'Globe',
    color: 'teal',
    description: 'Study Topography, Soils, Conventional and Non-Conventional Energy, and Map Work.',
    chapters: [
      { id: 'g-1', name: 'Topographical Maps' },
      { id: 'g-2', name: 'Climate' },
      { id: 'g-3', name: 'Soil Resources' },
      { id: 'g-4', name: 'Natural Vegetation' },
      { id: 'g-5', name: 'Water Resources' },
      { id: 'g-6', name: 'Mineral Resources' },
      { id: 'g-7', name: 'Conventional Sources of Energy' },
      { id: 'g-8', name: 'Non-Conventional Sources of Energy' },
      { id: 'g-9', name: 'Agriculture' },
      { id: 'g-10', name: 'Industries' },
      { id: 'g-11', name: 'Transport' },
      { id: 'g-12', name: 'Waste Management' },
      { id: 'g-13', name: 'Map Work' }
    ]
  },
  {
    id: 'computer-applications',
    name: 'Computer Applications',
    iconName: 'Cpu',
    color: 'violet',
    description: 'Master Core Java, Objects, User-Defined Methods, Constructors, Arrays, and Strings.',
    chapters: [
      { id: 'ca-1', name: 'Revising Basic Java Concepts' },
      { id: 'ca-2', name: 'User Defined Methods' },
      { id: 'ca-3', name: 'Classes & Objects' },
      { id: 'ca-4', name: 'Constructors' },
      { id: 'ca-5', name: 'Library Classes' },
      { id: 'ca-6', name: 'Encapsulation' },
      { id: 'ca-7', name: 'Arrays' },
      { id: 'ca-8', name: 'Two-Dimensional Arrays' },
      { id: 'ca-9', name: 'String Handling' }
    ]
  },
  {
    id: 'hindi',
    name: 'Hindi',
    iconName: 'BookMarked',
    color: 'rose',
    description: 'Prepare Sahitya Sagar Prose & Poetry, and Ekanki Sanchay using original Hindi titles.',
    chapters: [
      { id: 'h-1', name: 'गद्य: बात अठन्नी की' },
      { id: 'h-2', name: 'गद्य: काकी' },
      { id: 'h-3', name: 'गद्य: महायज्ञ का पुरस्कार' },
      { id: 'h-4', name: 'गद्य: नेताजी का चश्मा' },
      { id: 'h-5', name: 'गद्य: अपना-अपना भाग्य' },
      { id: 'h-6', name: 'गद्य: बड़े घर की बेटी' },
      { id: 'h-7', name: 'गद्य: संदेह' },
      { id: 'h-8', name: 'गद्य: भीड़ में खोया आदमी' },
      { id: 'h-9', name: 'गद्य: भेड़ें और भेड़िए' },
      { id: 'h-10', name: 'गद्य: दो कलाकार' },
      { id: 'h-11', name: 'पद्य: साखी' },
      { id: 'h-12', name: 'पद्य: गिरधर की कुंडलियाँ' },
      { id: 'h-13', name: 'पद्य: स्वर्ग बना सकते हैं' },
      { id: 'h-14', name: 'पद्य: वह जन्मभूमि मेरी' },
      { id: 'h-15', name: 'पद्य: मेघ आए' },
      { id: 'h-16', name: 'पद्य: सूर के पद' },
      { id: 'h-17', name: 'पद्य: विनय के पद' },
      { id: 'h-18', name: 'पद्य: भिक्षुक' },
      { id: 'h-19', name: 'पद्य: चलना हमारा काम है' },
      { id: 'h-20', name: 'पद्य: मातृ मंदिर की ओर' },
      { id: 'h-21', name: 'एकांकी: संस्कार और भावना' },
      { id: 'h-22', name: 'एकांकी: बहू की विदा' },
      { id: 'h-23', name: 'एकांकी: मातृभूमि का मान' },
      { id: 'h-24', name: 'एकांकी: सूखी डाली' },
      { id: 'h-25', name: 'एकांकी: दीपदान' },
      { id: 'h-26', name: 'एकांकी: सीमा रेखा' },
      { id: 'h-27', name: 'एकांकी: महाभारत की एक साँझ' }
    ]
  },
  {
    id: 'odia',
    name: 'Odia',
    iconName: 'BookOpen',
    color: 'teal',
    description: 'Prepare Ama Sahitya Prose & Poetry, and Ekanki dramas using original Odia titles.',
    chapters: [
      { id: 'o-1', name: 'ଗଦ୍ୟ: ସଭ୍ୟ ଜମିଦାର' },
      { id: 'o-2', name: 'ଗଦ୍ୟ: ସଂସ୍କାର' },
      { id: 'o-3', name: 'ଗଦ୍ୟ: ହରିଡ଼ାଳି' },
      { id: 'o-4', name: 'ଗଦ୍ୟ: ମରୁଡ଼ି' },
      { id: 'o-5', name: 'ଗଦ୍ୟ: ଶ୍ମଶାନ' },
      { id: 'o-6', name: 'ପଦ୍ୟ: ମଙ୍ଗଳେ ଅଇଲା ଉଷା' },
      { id: 'o-7', name: 'ପଦ୍ୟ: ଚିଲିକା ସାୟାହ୍ନ ଦୃଶ୍ୟ' },
      { id: 'o-8', name: 'ପଦ୍ୟ: ଶେଫାଳି ପ୍ରତି' },
      { id: 'o-9', name: 'ପଦ୍ୟ: କୁସୁମ' },
      { id: 'o-10', name: 'ଏକାଙ୍କିକା: କଣ୍ଣଙ୍କର ଶକ୍ତିଶେଳ' },
      { id: 'o-11', name: 'ଏକାଙ୍କିକା: ଶୀତଳ ଷଷ୍ଠୀ' }
    ]
  },
  {
    id: 'economics-applications',
    name: 'Economics Applications',
    iconName: 'TrendingUp',
    color: 'emerald',
    description: 'Excel in Demand, Supply, Production, Markets, Public Sectors, Money & Inflation.',
    chapters: [
      { id: 'ea-1', name: 'Theory of Demand' },
      { id: 'ea-2', name: 'Elasticity of Demand' },
      { id: 'ea-3', name: 'Theory of Supply' },
      { id: 'ea-4', name: 'Elasticity of Supply' },
      { id: 'ea-5', name: 'Factors of Production' },
      { id: 'ea-6', name: 'Land' },
      { id: 'ea-7', name: 'Destruction of Ecosystem' },
      { id: 'ea-8', name: 'Labour' },
      { id: 'ea-9', name: 'Capital' },
      { id: 'ea-10', name: 'Entrepreneur' },
      { id: 'ea-11', name: 'Market Structure' },
      { id: 'ea-12', name: 'State & Economic Development' },
      { id: 'ea-13', name: 'Instruments of State Intervention' },
      { id: 'ea-14', name: 'Public Sector' },
      { id: 'ea-15', name: 'Privatisation' },
      { id: 'ea-16', name: 'Money & Inflation' },
      { id: 'ea-17', name: 'Banking' }
    ]
  }
];

const COLOR_THEMES = {
  indigo: {
    bg: 'bg-indigo-50/50 dark:bg-indigo-950/20',
    border: 'border-indigo-100 dark:border-indigo-950/40',
    hoverBorder: 'hover:border-indigo-500/40 dark:hover:border-indigo-500/30',
    text: 'text-indigo-600 dark:text-indigo-400',
    glow: 'from-indigo-500/5 to-transparent',
    iconBg: 'bg-indigo-100/70 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-200/30',
    pill: 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border-indigo-100/40'
  },
  pink: {
    bg: 'bg-pink-50/50 dark:bg-pink-950/20',
    border: 'border-pink-100 dark:border-pink-950/40',
    hoverBorder: 'hover:border-pink-500/40 dark:hover:border-pink-500/30',
    text: 'text-pink-600 dark:text-pink-400',
    glow: 'from-pink-500/5 to-transparent',
    iconBg: 'bg-pink-100/70 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 border-pink-200/30',
    pill: 'bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 border-pink-100/40'
  },
  emerald: {
    bg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
    border: 'border-emerald-100 dark:border-emerald-950/40',
    hoverBorder: 'hover:border-emerald-500/40 dark:hover:border-emerald-500/30',
    text: 'text-emerald-600 dark:text-emerald-400',
    glow: 'from-emerald-500/5 to-transparent',
    iconBg: 'bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/30',
    pill: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-100/40'
  },
  sky: {
    bg: 'bg-sky-50/50 dark:bg-sky-950/20',
    border: 'border-sky-100 dark:border-sky-950/40',
    hoverBorder: 'hover:border-sky-500/40 dark:hover:border-sky-500/30',
    text: 'text-sky-600 dark:text-sky-400',
    glow: 'from-sky-500/5 to-transparent',
    iconBg: 'bg-sky-100/70 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border-sky-200/30',
    pill: 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 border-sky-100/40'
  },
  rose: {
    bg: 'bg-rose-50/50 dark:bg-rose-950/20',
    border: 'border-rose-100 dark:border-rose-950/40',
    hoverBorder: 'hover:border-rose-500/40 dark:hover:border-rose-500/30',
    text: 'text-rose-600 dark:text-rose-400',
    glow: 'from-rose-500/5 to-transparent',
    iconBg: 'bg-rose-100/70 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border-rose-200/30',
    pill: 'bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-100/40'
  },
  amber: {
    bg: 'bg-amber-50/50 dark:bg-amber-950/20',
    border: 'border-amber-100 dark:border-amber-950/40',
    hoverBorder: 'hover:border-amber-500/40 dark:hover:border-amber-500/30',
    text: 'text-amber-600 dark:text-amber-400',
    glow: 'from-amber-500/5 to-transparent',
    iconBg: 'bg-amber-100/70 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200/30',
    pill: 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-100/40'
  },
  teal: {
    bg: 'bg-teal-50/50 dark:bg-teal-950/20',
    border: 'border-teal-100 dark:border-teal-950/40',
    hoverBorder: 'hover:border-teal-500/40 dark:hover:border-teal-500/30',
    text: 'text-teal-600 dark:text-teal-400',
    glow: 'from-teal-500/5 to-transparent',
    iconBg: 'bg-teal-100/70 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-200/30',
    pill: 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border-teal-100/40'
  },
  violet: {
    bg: 'bg-violet-50/50 dark:bg-violet-950/20',
    border: 'border-violet-100 dark:border-violet-950/40',
    hoverBorder: 'hover:border-violet-500/40 dark:hover:border-violet-500/30',
    text: 'text-violet-600 dark:text-violet-400',
    glow: 'from-violet-500/5 to-transparent',
    iconBg: 'bg-violet-100/70 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200/30',
    pill: 'bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 border-violet-100/40'
  }
};

const SubjectIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Atom':
      return <Atom className={className} />;
    case 'FlaskConical':
      return <FlaskConical className={className} />;
    case 'Dna':
      return <Dna className={className} />;
    case 'Calculator':
      return <Calculator className={className} />;
    case 'Languages':
      return <Languages className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'BookMarked':
      return <BookMarked className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

export default function Practice({ user, setView }: PracticeProps) {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const handleSubjectClick = (sub: Subject) => {
    setSelectedSubject(sub);
  };

  const handleChapterClick = (ch: Chapter) => {
    setSelectedChapter(ch);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setSelectedChapter(null);
  };

  const handleBackToChapters = () => {
    setSelectedChapter(null);
  };

  return (
    <div id="practice-container" className="min-h-screen pt-24 pb-16 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Choose Your Subject */}
          {!selectedSubject && (
            <motion.div
              key="choose-subject"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Header section with back to dashboard */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800/60 pb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                    <Compass className="w-3.5 h-3.5 animate-[spin_10s_linear_infinite]" /> Interactive Study Workspace
                  </div>
                  <h1 id="choose-subject-heading" className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Choose Your Subject
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-1 max-w-xl">
                    Select any key discipline below to map your syllabus weightages and practice dynamic questions.
                  </p>
                </div>
                <div>
                  <button
                    id="btn-back-dashboard-icon"
                    onClick={() => setView('dashboard')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-900 shadow-sm cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-950 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Dashboard
                  </button>
                </div>
              </div>

              {/* Subject Cards Grid */}
              <div id="subject-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SUBJECTS.map((sub, idx) => {
                  const theme = COLOR_THEMES[sub.color];
                  return (
                    <motion.div
                      id={`subject-card-${sub.id}`}
                      key={sub.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      onClick={() => handleSubjectClick(sub)}
                      className={`relative overflow-hidden p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:translate-y-[-3px] hover:shadow-md ${theme.hoverBorder} transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[200px]`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Ambient Accent Glow inside Card */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${theme.glow} rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`} />
                      
                      <div>
                        {/* Custom Modern Icon */}
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 transition-all duration-300 group-hover:scale-110 ${theme.iconBg}`}>
                          <SubjectIcon name={sub.iconName} className="w-5.5 h-5.5 stroke-[2]" />
                        </div>

                        {/* Subject Title */}
                        <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {sub.name}
                        </h3>

                        {/* Short Description */}
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed">
                          {sub.description}
                        </p>
                      </div>

                      {/* Launch Indicator in footer */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        <span>VIEW CHAPTERS</span>
                        <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Choose Chapter */}
          {selectedSubject && !selectedChapter && (
            <motion.div
              key="choose-chapter"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Header section with back button */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/60 dark:border-slate-800/60 pb-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 ${COLOR_THEMES[selectedSubject.color].iconBg}`}>
                    <SubjectIcon name={selectedSubject.iconName} className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>{selectedSubject.name}</span>
                      <ChevronRight className="w-3 h-3" />
                      <span className={COLOR_THEMES[selectedSubject.color].text}>Syllabus Chapters</span>
                    </div>
                    <h1 id="choose-chapter-heading" className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-0.5">
                      Choose Chapter
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-0.5">
                      Choose any core chapter below to begin your personalized training sequence.
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    id="btn-back-to-subjects"
                    onClick={handleBackToSubjects}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 shadow-sm cursor-pointer transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Subjects
                  </button>
                </div>
              </div>

              {/* Special Section: Programs Bank for Computer Applications */}
              {selectedSubject.id === 'computer-applications' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-pink-600/5 dark:from-violet-950/40 dark:via-indigo-950/30 dark:to-slate-900 rounded-3xl p-6 md:p-8 border border-violet-200/60 dark:border-violet-900/40 shadow-sm relative overflow-hidden group mb-2"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-2xl">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 text-[10px] font-extrabold uppercase tracking-wider font-mono">
                        <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-500" /> Board Exam Masterclass
                      </div>
                      <h2 className="font-display font-extrabold text-lg md:text-xl text-slate-900 dark:text-white leading-tight">
                        Java Programs Bank
                      </h2>
                      <p className="text-xs text-slate-605 dark:text-slate-300 leading-relaxed">
                        Access 24+ highly curated, compiled, and board-standard Java programs covering Number Models, Patterns, Arrays, and String Handling. Perfect for Section B preparation!
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setSelectedChapter({ id: 'programs-bank', name: 'Programs Bank' })}
                      className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-2xl text-xs transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
                    >
                      <Terminal className="w-4 h-4 shrink-0" />
                      Launch Programs Bank
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Chapters Cards Grid */}
              <div id="chapter-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {selectedSubject.chapters.map((ch, idx) => {
                  const theme = COLOR_THEMES[selectedSubject.color];
                  return (
                    <motion.div
                      id={`chapter-card-${ch.id}`}
                      key={ch.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      onClick={() => handleChapterClick(ch)}
                      className={`relative overflow-hidden p-5.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:translate-y-[-2px] hover:shadow-md ${theme.hoverBorder} transition-all duration-300 cursor-pointer group flex flex-col justify-between`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${theme.iconBg}`}>
                            {idx + 1}
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-sm text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {ch.name}
                            </h3>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono mt-0.5">Chapter {idx + 1}</p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transform group-hover:translate-x-0.5 transition-all mt-1" />
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-semibold">Ready to diagnose</span>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${theme.pill}`}>
                          Core Topic
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Learning Module or Placeholder Page */}
          {selectedSubject && selectedChapter && (
            selectedSubject.id === 'physics' && ['p-1', 'p-2', 'p-3', 'p-8', 'p-9'].includes(selectedChapter.id) ? (
              <motion.div
                key="physics-learning-module"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <PhysicsModule
                  chapter={selectedChapter}
                  onBack={handleBackToChapters}
                  colorTheme={COLOR_THEMES[selectedSubject.color]}
                />
              </motion.div>
            ) : selectedSubject.id === 'hindi' ? (
              <motion.div
                key="hindi-learning-module"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <HindiModule
                  chapter={selectedChapter}
                  onBack={handleBackToChapters}
                  colorTheme={COLOR_THEMES[selectedSubject.color]}
                />
              </motion.div>
            ) : selectedSubject.id === 'chemistry' && (selectedChapter.id === 'c-1' || selectedChapter.id === 'c-2' || selectedChapter.id === 'c-3' || selectedChapter.id === 'c-4') ? (
              <motion.div
                key="chemistry-learning-module"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <ChemistryModule
                  chapter={selectedChapter}
                  onBack={handleBackToChapters}
                  colorTheme={COLOR_THEMES[selectedSubject.color]}
                />
              </motion.div>
            ) : selectedSubject.id === 'computer-applications' && selectedChapter.id === 'programs-bank' ? (
              <motion.div
                key="computer-programs-bank-module"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <ComputerProgramsBankModule
                  onBack={handleBackToChapters}
                  colorTheme={COLOR_THEMES[selectedSubject.color]}
                />
              </motion.div>
            ) : selectedSubject.id === 'computer-applications' && selectedChapter.id === 'ca-3' ? (
              <motion.div
                key="computer-applications-learning-module"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <ComputerApplicationsModule
                  chapter={selectedChapter}
                  onBack={handleBackToChapters}
                  colorTheme={COLOR_THEMES[selectedSubject.color]}
                />
              </motion.div>
            ) : (
              <motion.div
                key="placeholder-generation"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl mx-auto"
              >
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-10 md:p-12 text-center shadow-lg relative overflow-hidden flex flex-col items-center justify-center min-h-[460px]">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Premium Animation Graphics */}
                  <div className="relative mb-8 flex items-center justify-center">
                    <div className="absolute w-36 h-36 rounded-full border border-dashed border-slate-200 dark:border-slate-800 animate-[spin_30s_linear_infinite]" />
                    <div className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:to-pink-500/5 blur-sm" />
                    
                    {/* Floating active markers */}
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-3 -right-3 p-1.5 bg-indigo-50 dark:bg-indigo-950 rounded-lg border border-indigo-100 dark:border-indigo-900/40 text-indigo-600 dark:text-indigo-400"
                    >
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </motion.div>
                    
                    <motion.div 
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 3.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -bottom-3 -left-3 p-1.5 bg-pink-50 dark:bg-pink-950 rounded-lg border border-pink-100/50 dark:border-pink-900/40 text-pink-500"
                    >
                      <Lock className="w-4 h-4" />
                    </motion.div>

                    <div className={`relative p-5 rounded-2xl bg-gradient-to-br ${COLOR_THEMES[selectedSubject.color].glow} border ${COLOR_THEMES[selectedSubject.color].border} text-indigo-600 dark:text-indigo-400`}>
                      <BookMarked className="w-10 h-10 stroke-[1.5] text-indigo-500" />
                    </div>
                  </div>

                  {/* Info Text */}
                  <div className="space-y-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      ✨ Coming Soon
                    </span>
                    
                    <h2 className="font-display text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {selectedChapter.name}
                    </h2>
                    
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                      {selectedSubject.name}
                    </p>
                    
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-2">
                      AI practice questions for this chapter are coming soon.
                    </p>
                    
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed mt-2">
                      Our custom LLM pipelines are being configured to generate dynamic exam-grade questions with instant diagnostics and syllabus-aligned grading criteria.
                    </p>

                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        id="btn-back-to-chapters"
                        onClick={handleBackToChapters}
                        className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-sm"
                      >
                        Back to Chapters
                      </button>
                      <button
                        id="btn-back-all-subjects"
                        onClick={handleBackToSubjects}
                        className="w-full sm:w-auto px-5 py-2.5 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 cursor-pointer transition-all"
                      >
                        Choose Another Subject
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
