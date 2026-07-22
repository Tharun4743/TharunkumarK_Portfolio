
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Cpu,
  Award,
  BookOpen,
  User,
  ChevronRight,
  Menu,
  X,
  Terminal,
  MessageSquare,
  Sparkles,
  FileText,
  Search,
  Sliders,
  Send,
  Activity
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION,
  TECHNICAL_SKILLS,
  CERTIFICATIONS,
  PROJECTS,
  LEADERSHIP,
  ACHIEVEMENTS,
  PORTFOLIO_STATS
} from './constants';
import { Project } from './type';

const THEMES = [
  { primary: '#4f46e5', secondary: '#7c3aed', soft: '#f5f3ff', glow: 'rgba(79, 70, 229, 0.2)' }, // Indigo
  { primary: '#059669', secondary: '#10b981', soft: '#ecfdf5', glow: 'rgba(16, 185, 129, 0.2)' }, // Emerald
  { primary: '#e11d48', secondary: '#fb7185', soft: '#fff1f2', glow: 'rgba(225, 29, 72, 0.2)' }, // Rose
  { primary: '#d97706', secondary: '#f59e0b', soft: '#fffbeb', glow: 'rgba(217, 119, 6, 0.2)' }, // Amber
  { primary: '#0891b2', secondary: '#06b6d4', soft: '#ecfeff', glow: 'rgba(8, 145, 178, 0.2)' }, // Cyan
  { primary: '#7c3aed', secondary: '#a78bfa', soft: '#f5f3ff', glow: 'rgba(124, 58, 237, 0.2)' }, // Violet
  { primary: '#2563eb', secondary: '#60a5fa', soft: '#eff6ff', glow: 'rgba(37, 99, 235, 0.2)' }, // Blue
  { primary: '#701a75', secondary: '#d946ef', soft: '#fdf4ff', glow: 'rgba(217, 70, 239, 0.2)' }, // Fuchsia
  { primary: '#0d9488', secondary: '#2dd4bf', soft: '#f0fdfa', glow: 'rgba(13, 148, 136, 0.2)' }, // Teal
  { primary: '#ea580c', secondary: '#f97316', soft: '#fff7ed', glow: 'rgba(234, 88, 12, 0.2)' }, // Orange
  { primary: '#65a30d', secondary: '#a3e635', soft: '#f7fee7', glow: 'rgba(101, 163, 13, 0.2)' }, // Lime
  { primary: '#be123c', secondary: '#fb7185', soft: '#fff1f2', glow: 'rgba(190, 18, 60, 0.2)' }, // Crimson
  { primary: '#0284c7', secondary: '#38bdf8', soft: '#f0f9ff', glow: 'rgba(2, 132, 199, 0.2)' }, // Sky
  { primary: '#9333ea', secondary: '#c084fc', soft: '#faf5ff', glow: 'rgba(147, 51, 234, 0.2)' }, // Purple
  { primary: '#db2777', secondary: '#f472b6', soft: '#fdf2f8', glow: 'rgba(219, 39, 119, 0.2)' }, // Pink
  { primary: '#15803d', secondary: '#22c55e', soft: '#f0fdf4', glow: 'rgba(21, 128, 61, 0.2)' }, // Green
  { primary: '#854d0e', secondary: '#ca8a04', soft: '#fefce8', glow: 'rgba(133, 77, 14, 0.2)' }, // Gold/Yellow
  { primary: '#6366f1', secondary: '#818cf8', soft: '#eef2ff', glow: 'rgba(99, 102, 241, 0.2)' }, // Indigo 500
  { primary: '#ec4899', secondary: '#f472b6', soft: '#fdf2f8', glow: 'rgba(236, 72, 153, 0.2)' }, // Modern Pink
  { primary: '#f97316', secondary: '#fb923c', soft: '#fff7ed', glow: 'rgba(249, 115, 22, 0.2)' }, // Vibrant Orange
  { primary: '#06b6d4', secondary: '#22d3ee', soft: '#ecfeff', glow: 'rgba(6, 182, 212, 0.2)' }, // Bright Cyan
];

interface NavProps {
  onOpenPalette: () => void;
}

const Nav: React.FC<NavProps> = ({ onOpenPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Certifications', id: 'certs' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // height of fixed navbar
      const extraOffset = 40; // extra scroll down to reduce the visual gap caused by py-32 padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight + extraOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      let current = '';
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          if (element.getBoundingClientRect().top <= window.innerHeight * 0.4) {
            current = link.id;
          }
        }
      }
      // Handle bottom of page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = 'contact';
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'top')}
          className="text-2xl font-black tracking-tighter text-theme hover:scale-105 transition-transform flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-theme rounded-lg flex items-center justify-center text-white text-sm shadow-md">TK</div>
          <span className="gradient-text">Tharunkumar <span className="text-slate-400">K</span></span>
        </a>

        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`px-4 py-2 text-sm font-bold transition-colors rounded-xl hover:bg-theme-soft ${activeSection === link.id ? 'text-theme bg-theme-soft' : 'text-slate-600 hover:text-theme'}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Command Palette Desktop Trigger */}
          <button
            onClick={onOpenPalette}
            className="p-2 ml-4 text-slate-500 hover:text-theme hover:bg-theme-soft rounded-xl transition-colors flex items-center gap-1.5 border border-slate-100"
            title="Search / Command Palette (Ctrl+K)"
          >
            <Search size={16} />
          </button>
        </div>

        <div className="flex items-center md:hidden">
          {/* Command Palette Mobile Trigger */}
          <button
            onClick={onOpenPalette}
            className="text-slate-500 p-2 hover:bg-slate-100 rounded-xl transition-colors mr-2 border border-slate-100"
            title="Search / Command Palette"
          >
            <Search size={20} />
          </button>

          <button
            className="text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-4 py-4 text-lg font-bold rounded-2xl transition-all ${activeSection === link.id ? 'bg-theme-soft text-theme' : 'text-slate-800 hover:bg-theme-soft hover:text-theme'}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const CountUp: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    const totalDuration = 1500;
    const incrementTime = Math.max(Math.floor(totalDuration / end), 25);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 30);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <span>{count}{suffix}</span>;
};

const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };
  
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        transform: isHovered ? 'scale(1.01) translateY(-2px)' : 'scale(1) translateY(0)',
        boxShadow: isHovered ? '0 15px 30px -10px var(--theme-glow)' : 'none'
      }}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full blur-[60px] -z-10 bg-theme-soft"
          style={{
            width: '150px',
            height: '150px',
            left: `${coords.x - 75}px`,
            top: `${coords.y - 75}px`,
            backgroundColor: 'var(--theme-glow)',
            opacity: 0.8
          }}
        />
      )}
      {children}
    </div>
  );
};

const Typewriter: React.FC = () => {
  const ROLES = ['IoT Safety Solutions', 'Robust Full-Stack Apps', 'Intelligent Systems'];
  const [roleIdx, setRoleIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');
  
  useEffect(() => {
    if (subIdx === ROLES[roleIdx].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500); // Wait 2.5s before erasing
      return () => clearTimeout(timeout);
    }
    
    if (subIdx === 0 && reverse) {
      setReverse(false);
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setSubIdx((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); // Slow down typing to 150ms and erasing to 75ms
    
    return () => clearTimeout(timeout);
  }, [subIdx, reverse, roleIdx]);
  
  useEffect(() => {
    setText(ROLES[roleIdx].substring(0, subIdx));
  }, [subIdx, roleIdx]);
  
  return (
    <span className="gradient-text font-black">
      {text}
      <span className="animate-pulse text-slate-800 font-light">|</span>
    </span>
  );
};

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTheme: (idx: number) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectTheme }) => {
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        isOpen ? onClose() : void 0;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    { name: 'Navigate: About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), icon: <User size={18} /> },
    { name: 'Navigate: Skills', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), icon: <Cpu size={18} /> },
    { name: 'Navigate: Experience', action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), icon: <User size={18} /> },
    { name: 'Navigate: Education', action: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }), icon: <BookOpen size={18} /> },
    { name: 'Navigate: Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), icon: <Code size={18} /> },
    { name: 'Navigate: Achievements', action: () => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }), icon: <Award size={18} /> },
    { name: 'Navigate: Certifications', action: () => document.getElementById('certs')?.scrollIntoView({ behavior: 'smooth' }), icon: <Award size={18} /> },
    { name: 'Navigate: Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), icon: <MessageSquare size={18} /> },
    { name: 'Copy Email Address', action: () => { navigator.clipboard.writeText(PERSONAL_INFO.email); alert('Email copied!'); }, icon: <Mail size={18} /> },
    { name: 'Open Resume', action: () => window.open(PERSONAL_INFO.resume, '_blank'), icon: <FileText size={18} /> },
    { name: 'Open GitHub Profile', action: () => window.open(PERSONAL_INFO.github, '_blank'), icon: <Github size={18} /> },
    { name: 'Open LinkedIn Profile', action: () => window.open(PERSONAL_INFO.linkedin, '_blank'), icon: <Linkedin size={18} /> },
  ];

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    setActiveIndex(0);
  }, [search]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeys = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[activeIndex]) {
          filteredItems[activeIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [isOpen, filteredItems, activeIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        />

        {/* Modal body */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="w-full max-w-lg bg-white/95 rounded-3xl border border-slate-200 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden glass-effect z-10"
        >
          <div className="p-5 border-b border-slate-100 flex items-center gap-3">
            <Search className="text-slate-400" size={20} />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or navigate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-slate-800 placeholder-slate-400 bg-transparent border-none outline-none font-medium text-base"
            />
            <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-700 transition-colors">
              <X size={18} />
            </button>
          </div>

          <div className="max-h-[300px] overflow-y-auto p-3 space-y-1">
            {filteredItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.action();
                  onClose();
                }}
                className={`w-full text-left p-3.5 rounded-2xl flex items-center gap-4 transition-all ${idx === activeIndex ? 'bg-theme-soft text-theme font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <div className={`p-2 rounded-xl transition-all ${idx === activeIndex ? 'bg-theme text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {item.icon}
                </div>
                <span className="text-sm">{item.name}</span>
                {idx === activeIndex && <ChevronRight size={16} className="ml-auto" />}
              </button>
            ))}
            {filteredItems.length === 0 && (
              <div className="p-8 text-center text-slate-400 text-sm">
                No matching actions found.
              </div>
            )}
          </div>

          {/* Theme Quick Switch Footer */}
          <div className="p-5 bg-slate-50/50 border-t border-slate-100">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Palette Theme Selector</div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {THEMES.slice(0, 8).map((theme, i) => (
                <button
                  key={i}
                  onClick={() => onSelectTheme(i)}
                  className="w-7 h-7 rounded-full flex-shrink-0 border-2 border-white shadow-sm hover:scale-110 transition-transform"
                  style={{ backgroundColor: theme.primary }}
                  title="Switch Palette"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const AIChatbot: React.FC = () => {
  const ALL_QUESTIONS = [
    'What is your professional background?',
    'Can you detail your top projects?',
    'Where do you currently intern?',
    'How can I get in touch?',
    'What are your main technical skills?',
    'What is your college CGPA?',
    'Tell me about the Smart Helmet project',
    'What backend tech do you use?'
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<string[]>(ALL_QUESTIONS.slice(0, 3));
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: "Hello! I am Tharun's AI Portfolio Assistant. Ask me anything about his background, projects, or experience!" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const qaPairs = [
    {
      keywords: ['who', 'tharun', 'background', 'profile', 'about'],
      answer: "Tharunkumar K is a passionate Full Stack Developer and IoT enthusiast from Tamil Nadu, currently pursuing a B.Tech in IT at VSB Engineering College (CGPA: 8.5). He specializes in React, Node.js, TypeScript, PostgreSQL, and embedded IoT designs."
    },
    {
      keywords: ['project', 'work', 'build', 'portfolio', 'top', 'technical', 'skills', 'tech', 'stack', 'helmet', 'backend', 'task', 'vsbec'],
      answer: "Tharun has built several impressive engineering solutions:\n\n• VSBEC Academic Task Manager: Production-deployed full-stack task collection & role-based workflow system currently implemented in department (React, Node.js, PostgreSQL).\n• Aura: 100% Offline Multimodal RAG System (Spring Boot, Llama-3, CLIP).\n• Campus Connect: Full-stack Placement Cell Platform (Supabase, Node.js).\n• Techy Tharun's Chatbox: Multi-modal GPT-4o conversational AI (Next.js 15, Neon Postgres).\n• Smart Helmet IoT System: Sobriety check, drowsiness detection & RF cutoff ignition relay (SIH 2025 Top 50)."
    },
    {
      keywords: ['intern', 'experience', 'neura', 'infosys', 'job'],
      answer: "Currently, Tharun is a Fullstack Development Intern at Neura Global (Startup) where he builds production React/Node.js features. Previously, he completed a Software Development Internship with Infosys Springboard (StarWall employee dashboard)."
    },
    {
      keywords: ['education', 'college', 'gpa', 'study', 'graduation', 'cgpa'],
      answer: "Tharun is pursuing a Bachelor of Technology in Information Technology at VSB Engineering College, Karur, Tamil Nadu (Batch: 2024 - 2028). He currently holds a CGPA of 8.5 / 10."
    },
    {
      keywords: ['contact', 'email', 'phone', 'social', 'reach'],
      answer: "You can reach Tharun directly through:\n\n• Email: tharunkumark42007@gmail.com\n• Phone: +91 8760964830\n• LinkedIn: linkedin.com/in/tharunkumark4743/"
    }
  ];

  const handleQuestionClick = (questionText: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: questionText }]);
    setIsTyping(true);

    const lowercaseQ = questionText.toLowerCase();
    let bestMatch = qaPairs.find(pair => pair.keywords.some(keyword => lowercaseQ.includes(keyword)));
    const responseText = bestMatch ? bestMatch.answer : "I'm not fully sure about that detail! Try asking about his projects, experience, education, or contact info.";

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: responseText }]);
    }, 1000);

    const remainingPool = ALL_QUESTIONS.filter(q => !activeQuestions.includes(q) && q !== questionText);
    const nextQuestion = remainingPool[Math.floor(Math.random() * remainingPool.length)];
    if (nextQuestion) {
      setActiveQuestions(prev => prev.map(q => q === questionText ? nextQuestion : q));
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[90] p-4 bg-theme hover:scale-105 active:scale-95 text-white rounded-full shadow-2xl transition-all flex items-center justify-center border-4 border-white"
        style={{ boxShadow: '0 10px 30px -5px var(--theme-glow)' }}
      >
        <MessageSquare size={26} className={isOpen ? 'rotate-90 transition-transform' : ''} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-[2.5rem] border-2 border-slate-200/50 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.3)] overflow-hidden glass-effect flex flex-col z-[90]"
          >
            <div className="p-6 bg-theme text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <img src={PERSONAL_INFO.profileImage} alt="Tharunkumar K" className="w-10 h-10 min-w-[40px] rounded-xl object-cover object-top border-2 border-white/20 shadow-sm flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">Tharun's Assistant</h3>
                  <p className="text-[10px] text-white/80">Online & Ready</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start gap-2 items-end'}`}>
                  {msg.sender === 'bot' && (
                    <img src={PERSONAL_INFO.profileImage} alt="Assistant" className="w-6 h-6 rounded-full object-cover object-top shadow-sm flex-shrink-0 mb-1 border border-slate-200" />
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-[13.5px] leading-relaxed whitespace-pre-line shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-theme text-white rounded-br-sm' 
                        : 'bg-white border border-slate-100 text-slate-700 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-5 py-3 bg-slate-100 rounded-3xl rounded-bl-none text-slate-400 text-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-50/80 border-t border-slate-100/60 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2">
              <AnimatePresence mode="popLayout">
                {activeQuestions.map((q) => (
                  <motion.button
                    key={q}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onClick={() => handleQuestionClick(q)}
                    className="flex-shrink-0 px-3 py-1.5 bg-white text-[11px] font-bold text-slate-600 border border-slate-200 hover:border-theme hover:text-theme rounded-full shadow-sm"
                  >
                    {q}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface GitHubWidgetProps {
  primaryColor: string;
  gitStats: {
    followers: number;
    repos: number;
    following: number;
    loading: boolean;
    error: boolean;
  };
}

const GitHubWidget: React.FC<GitHubWidgetProps> = ({ primaryColor, gitStats }) => {
  const cleanColor = primaryColor.replace('#', '');
  const chartUrl = `https://ghchart.rshah.org/${cleanColor}/Tharun4743`;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="GitHub Analytics"
          subtitle="Real-time repository statistics and contributions activity tracker."
          icon={<Github size={28} />}
        />

        <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 text-center">
            <TiltCard className="p-6 sm:p-8 bg-white rounded-3xl shadow-md border border-slate-100 hover:border-theme hover:shadow-xl transition-all">
              <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Repos</h4>
              <p className="text-base sm:text-lg font-black text-slate-900 truncate">{gitStats.loading ? '...' : gitStats.repos}</p>
            </TiltCard>
            <TiltCard className="p-6 sm:p-8 bg-white rounded-3xl shadow-md border border-slate-100 hover:border-theme hover:shadow-xl transition-all">
              <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Followers</h4>
              <p className="text-base sm:text-lg font-black text-slate-900 truncate">{gitStats.loading ? '...' : gitStats.followers}</p>
            </TiltCard>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-md border border-slate-100 text-center hover:shadow-xl transition-all">
            <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Contributions Activity Chart</h4>
            <div className="w-full overflow-x-auto scrollbar-thin">
              <div className="inline-block min-w-[650px] max-w-full p-2">
                <img
                  src={chartUrl}
                  alt="Tharunkumar K GitHub Contributions Chart"
                  className="w-full h-auto mx-auto select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle?: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-16"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-14 h-14 rounded-2xl bg-theme flex items-center justify-center text-white shadow-xl" style={{ boxShadow: '0 8px 20px -5px var(--theme-glow)' }}>
        {icon}
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-500 max-w-2xl text-lg font-medium ml-1 mr-auto">{subtitle}</p>}
  </motion.div>
);

const App: React.FC = () => {
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'iot' | 'fullstack'>('all');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gitStats, setGitStats] = useState({
    followers: 7,
    repos: 15,
    following: 6,
    loading: true,
    error: false
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * THEMES.length);
    setActiveThemeIndex(randomIndex);
  }, []);

  useEffect(() => {
    const theme = THEMES[activeThemeIndex];
    if (theme) {
      const root = document.documentElement;
      root.style.setProperty('--theme-primary', theme.primary);
      root.style.setProperty('--theme-secondary', theme.secondary);
      root.style.setProperty('--theme-bg-soft', theme.soft);
      root.style.setProperty('--theme-glow', theme.glow);
    }
  }, [activeThemeIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/Tharun4743');
        if (!userRes.ok) throw new Error('API Rate Limited or Offline');
        const userJson = await userRes.json();
        
        setGitStats({
          followers: userJson.followers ?? 7,
          repos: userJson.public_repos ?? 15,
          following: userJson.following ?? 6,
          loading: false,
          error: false
        });
      } catch (err) {
        setGitStats({
          followers: 7,
          repos: 15,
          following: 6,
          loading: false,
          error: true
        });
      }
    };

    fetchGitHub();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-theme-soft selection:text-theme relative">
      {/* Background Blobs (Feature 6) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20 opacity-30">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ backgroundColor: 'var(--theme-glow)' }}
        />
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 80, -120, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ backgroundColor: 'var(--theme-glow)' }}
        />
      </div>

      {/* Dynamic Cursor Spotlight (Feature 6 & 16) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-40 hidden md:block"
        style={{
          background: `radial-gradient(400px at ${mousePos.x}px ${mousePos.y}px, var(--theme-glow), transparent 80%)`
        }}
      />

      <Nav onOpenPalette={() => setIsPaletteOpen(true)} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 blur-[100px] rounded-full -z-10 opacity-30"
          style={{ backgroundColor: 'var(--theme-glow)' }}
        ></motion.div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1"
            >

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                Building <span className="text-theme">Intelligent Software Solutions</span>
              </h1>

              <p className="text-lg md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium mx-auto lg:mx-0">
                Hi, I'm <span className="text-slate-900 font-bold underline decoration-4 underline-offset-4" style={{ textDecorationColor: 'var(--theme-primary)' }}>{PERSONAL_INFO.name}</span>. I build intelligent web applications, desktop software, and safety IoT systems that solve real-world problems.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px var(--theme-glow)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-10 py-5 bg-theme hover:brightness-110 text-white rounded-[2rem] font-bold transition-all flex items-center gap-3 group shadow-lg"
                >
                  Explore My Work
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px var(--theme-glow)" }}
                  whileTap={{ scale: 0.95 }}
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-5 bg-white text-theme border-2 border-theme-soft hover:border-theme hover:bg-theme-soft rounded-[2rem] font-bold transition-all flex items-center gap-3 group shadow-sm"
                >
                  <FileText size={20} className="group-hover:scale-110 transition-transform" />
                  Resume
                </motion.a>

                <div className="flex items-center gap-3">
                  {[
                    { icon: <Github size={22} />, link: PERSONAL_INFO.github, label: 'GitHub' },
                    { icon: <Linkedin size={22} />, link: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                    { icon: <Code size={22} />, link: PERSONAL_INFO.leetcode, label: 'LeetCode' },
                    { icon: <Terminal size={22} />, link: PERSONAL_INFO.geeksforgeeks, label: 'GeeksForGeeks' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      whileHover={{ y: -8, scale: 1.1, backgroundColor: '#fff', borderColor: 'var(--theme-primary)' }}
                      className="p-4 rounded-2xl bg-white border border-slate-100 shadow-md transition-all text-slate-500 hover:text-theme hover:shadow-lg"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* HERO PHOTO - ENSURE IT IS VISIBLE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center"
            >
              <div className="relative group max-w-[400px] w-full px-4 lg:px-0">
                {/* Glow Backdrop */}
                <div className="absolute -inset-8 bg-theme-soft rounded-[4rem] blur-[50px] -z-10 transition-colors opacity-50" style={{ backgroundColor: 'var(--theme-glow)' }}></div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full aspect-[3/4] bg-slate-100 rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-700 border-[8px] border-white ring-1 ring-slate-100"
                >
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-1000"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 hover:scale-110 transition-transform z-10"
                >
                  <div className="p-3 bg-theme text-white rounded-xl shadow-lg">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Hackathon Winner</p>
                    <p className="text-base font-black text-slate-900 leading-none">Code Thugs 2k26</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Photo Always Visible Here Too */}
      <section id="about" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="About Me"
            subtitle="My journey in the world of technology."
            icon={<User size={28} />}
          />
          <div className="max-w-4xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 sm:gap-8"
            >
              <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-md border border-slate-100 text-center sm:text-left hover:shadow-xl transition-all">
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                  {PERSONAL_INFO.profileSummary}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="p-8 bg-white shadow-md rounded-[2rem] border border-slate-100 group hover:border-theme hover:shadow-xl transition-all">
                  <MapPin size={24} className="text-theme mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Location</h4>
                  <p className="text-base sm:text-lg font-black text-slate-900 truncate">{PERSONAL_INFO.location}</p>
                </div>
                <div className="p-8 bg-white shadow-md rounded-[2rem] border border-slate-100 group hover:border-theme hover:shadow-xl transition-all">
                  <Mail size={24} className="text-theme mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Contact</h4>
                  <p className="text-base sm:text-lg font-black text-slate-900 truncate">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              {(() => {
                const aboutStats = [
                  { label: 'Projects Built', value: PROJECTS.length, suffix: '', loading: false, error: false },
                  { label: 'Certifications', value: CERTIFICATIONS.length, suffix: '', loading: false, error: false },
                  { label: 'GitHub Repos', value: gitStats.repos, suffix: '', loading: gitStats.loading, error: gitStats.error }
                ].filter(s => !s.error);

                return (
                  <div className={`grid grid-cols-2 ${aboutStats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 sm:gap-8 text-center`}>
                    {aboutStats.map((stat, i) => (
                  <div key={i} className="p-6 bg-white shadow-md rounded-3xl border border-slate-100 hover:border-theme hover:shadow-xl transition-all">
                    <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className="text-base sm:text-lg font-black text-slate-900 truncate">
                      {stat.loading ? (
                        '...'
                      ) : (
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      )}
                    </p>
                  </div>
                ))}
                  </div>
                );
              })()}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... (Skills, Projects, Education, Contact) */}
      {/* ... Keeping the structure identical to previous successful version but ensuring high visibility ... */}

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Technical Arsenal"
            subtitle="The tools and languages I use to bring ideas to life."
            icon={<Cpu size={28} />}
          />
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {TECHNICAL_SKILLS.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]"
              >
                <TiltCard className="p-6 sm:p-8 rounded-[2rem] bg-white shadow-md border border-slate-100 hover:shadow-xl hover:border-theme transition-all group h-full">
                  <h3 className="text-theme font-black mb-6 uppercase tracking-widest text-xs flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-theme animate-ping"></div>
                    {cat.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05, color: 'var(--theme-primary)' }}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-xl text-xs sm:text-sm font-black text-slate-700 border border-slate-200 group-hover:border-theme-soft shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      {/* Experience & Education Journey Timeline Section (Feature 9) */}
      <section id="experience" className="py-32 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="My Journey"
            subtitle="Professional experience, key achievements, and education history."
            icon={<Activity size={28} />}
          />

          <div className="relative max-w-4xl mx-auto mt-20">
            {/* Central Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-16">
              {(() => {
                const getStartYear = (period: string) => {
                  const match = period.match(/\b\d{4}\b/);
                  return match ? parseInt(match[0], 10) : 0;
                };

                const timelineItems = [
                  ...LEADERSHIP.map(item => ({
                    type: 'work',
                    title: item.title,
                    org: item.organization,
                    period: item.period,
                    description: item.description
                  })),
                  ...EDUCATION.map(item => ({
                    type: 'education',
                    title: item.degree,
                    org: item.institution,
                    period: item.period,
                    description: item.details
                  }))
                ].sort((a, b) => getStartYear(b.period) - getStartYear(a.period));

                const firstEduIdx = timelineItems.findIndex(item => item.type === 'education');

                return timelineItems.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
                    >
                      {idx === firstEduIdx && <div id="education" className="absolute -top-24" />}
                      {/* Node Marker */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-[3px] border-white shadow-md bg-white z-10 flex items-center justify-center text-lg">
                        {item.type === 'work' ? '💼' : '🎓'}
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                        <TiltCard className="p-8 bg-white shadow-md border border-slate-100 rounded-[2rem] hover:border-theme hover:shadow-xl transition-all group">
                          <div className="flex justify-between items-center gap-4 mb-4 flex-wrap">
                            <span className="px-3.5 py-1 bg-theme-soft text-theme font-bold rounded-lg text-xs border border-theme/10">
                              {item.period}
                            </span>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              {item.type}
                            </span>
                          </div>
                          <h3 className="text-xl font-black text-slate-900 group-hover:text-theme transition-colors mb-1 leading-tight">
                            {item.title}
                          </h3>
                          <h4 className="text-sm font-bold text-slate-500 mb-4">{item.org}</h4>
                          <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-1.5">
                            {item.description.split(' | ').map((desc, i, arr) => (
                              <div key={i} className="flex items-start gap-2">
                                {arr.length > 1 && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-theme/40 mt-1.5 flex-shrink-0" />
                                )}
                                <span>{desc}</span>
                              </div>
                            ))}
                          </div>
                        </TiltCard>
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Projects"
            subtitle="Real-world applications built with cutting-edge tech."
            icon={<Code size={28} />}
          />

          {/* Project Filtering Buttons (Feature 3) */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'iot', label: 'IoT & Embedded' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-theme border-theme text-white shadow-lg'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatePresence mode="popLayout">
              {PROJECTS.filter(p => selectedCategory === 'all' || p.category === selectedCategory).map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveProject(project)}
                  className="group bg-white rounded-[3.5rem] overflow-hidden flex flex-col border border-slate-100 hover:border-theme transition-all hover:shadow-3xl cursor-pointer"
                >
                  <div className="p-10 flex flex-col h-full items-center text-center">
                    {/* 1. Project Logo / Icon */}
                    {project.image && (
                      <div className="mb-6 flex justify-center">
                        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-slate-200/60 relative group-hover:scale-105 transition-transform duration-500 flex-shrink-0">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    )}

                    {/* 2. Category Badge */}
                    <span className="px-3.5 py-1 bg-theme-soft text-theme font-bold rounded-lg text-xs uppercase tracking-wider mb-3">
                      {project.category === 'fullstack' ? 'Full-Stack Web Application' : project.category === 'iot' ? 'IoT & Embedded Safety System' : project.category}
                    </span>

                    {/* 3. Title */}
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-theme transition-colors tracking-tighter mb-3">
                      {project.title}
                    </h3>

                    {/* 4. Short Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium max-w-lg">
                      {project.description}
                    </p>

                    {/* 5. Status Badges */}
                    {(project.status || project.realWorldImplementation) && (
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {project.status && (
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 font-extrabold rounded-lg text-[10px] border border-emerald-100 uppercase tracking-wider">
                            {project.status}
                          </span>
                        )}
                        {project.realWorldImplementation && (
                          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 font-extrabold rounded-lg text-[10px] border border-indigo-100 uppercase tracking-wider">
                            Implemented in Dept
                          </span>
                        )}
                      </div>
                    )}

                    {/* 6. Technology Badges */}
                    <div className="mt-auto flex flex-wrap justify-center gap-2 mb-8">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1.5 bg-slate-50 text-[10px] sm:text-xs font-bold text-slate-500 rounded-xl border border-slate-200 uppercase tracking-wider group-hover:border-theme-soft group-hover:text-theme transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* 7. Action Button */}
                    <div className="w-full flex justify-center gap-3 pt-4 border-t border-slate-100" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => setActiveProject(project)}
                        className="px-6 py-2.5 bg-theme text-white text-xs font-bold rounded-xl shadow-md hover:brightness-110 transition-all flex items-center gap-2"
                      >
                        View Project <ChevronRight size={14} />
                      </button>
                      {project.link && project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-slate-50 rounded-xl text-slate-500 hover:text-theme border border-slate-200 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-slate-50 rounded-xl text-slate-500 hover:text-theme border border-slate-200 transition-colors"
                          title="GitHub Repository"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive Detailed Project Modals (Feature 2) */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                className="w-full max-w-3xl bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] overflow-hidden glass-effect z-10 max-h-[90vh] flex flex-col relative"
              >
                {/* Floating Top Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 z-30 p-2.5 bg-white/90 backdrop-blur-md hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 shadow-md border border-slate-200 transition-all"
                  title="Close Modal"
                >
                  <X size={20} />
                </button>

                {/* Single Scrollable Container */}
                <div className="overflow-y-auto max-h-[90vh] scrollbar-thin">
                  {/* Modal Hero Header Section */}
                  <div className="p-8 sm:p-10 border-b border-slate-100 bg-slate-50/70 flex flex-col items-center text-center">
                    {/* 1. Logo */}
                    {activeProject.image && (
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-slate-200/60 mb-4 flex-shrink-0">
                        <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                      </div>
                    )}

                    {/* 2. Category */}
                    <span className="px-3.5 py-1 bg-theme-soft text-theme font-bold rounded-lg text-xs uppercase tracking-wider mb-2">
                      {activeProject.category === 'fullstack' ? 'Full-Stack Web Application' : activeProject.category === 'iot' ? 'IoT & Embedded Safety System' : activeProject.category}
                    </span>

                    {/* 3. Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-3">
                      {activeProject.title}
                    </h3>

                    {/* 4. Short Summary */}
                    <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mb-4">
                      {activeProject.description}
                    </p>

                    {/* 5. Status & Role Badges */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {activeProject.date && (
                        <span className="px-3.5 py-1 bg-theme-soft text-theme font-bold rounded-lg text-xs border border-theme/10">
                          {activeProject.date}
                        </span>
                      )}
                      {activeProject.status && (
                        <span className="px-3.5 py-1 bg-emerald-50 text-emerald-600 font-bold rounded-lg text-xs border border-emerald-100">
                          {activeProject.status}
                        </span>
                      )}
                      {activeProject.myRole && (
                        <span className="px-3.5 py-1 bg-slate-100 text-slate-700 font-bold rounded-lg text-xs border border-slate-200">
                          {activeProject.myRole}
                        </span>
                      )}
                    </div>

                    {/* 6. Action CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {activeProject.link && activeProject.link !== '#' && (
                        <a
                          href={activeProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 bg-theme text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:brightness-110 transition-colors shadow-md"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      {activeProject.githubLink && (
                        <a
                          href={activeProject.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-black transition-colors shadow-md"
                        >
                          <Github size={16} /> GitHub Repository
                        </a>
                      )}
                      {activeProject.driveLink && (
                        <a
                          href={activeProject.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2.5 bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-slate-300 transition-colors"
                        >
                          <FileText size={16} /> Project Resources
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Modal Scrollable Body */}
                  <div className="p-8 sm:p-10 space-y-6">
                  {activeProject.realWorldImplementation && (
                    <div className="p-5 bg-indigo-50/70 rounded-2xl border border-indigo-200/70 flex items-start gap-3">
                      <Sparkles className="text-indigo-600 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <h4 className="text-[10px] sm:text-xs font-black text-indigo-600 uppercase tracking-widest mb-1">Real-World Implementation</h4>
                        <p className="text-slate-800 text-xs sm:text-sm font-bold leading-relaxed">
                          {activeProject.realWorldImplementation}
                        </p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Overview</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-base whitespace-pre-line">
                      {activeProject.longDescription || activeProject.description}
                    </p>
                  </div>

                  {activeProject.problem && (
                    <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Problem Statement</h4>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                        {activeProject.problem}
                      </p>
                    </div>
                  )}

                  {activeProject.solution && (
                    <div className="p-5 bg-emerald-50/40 rounded-2xl border border-emerald-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">Solution</h4>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                        {activeProject.solution}
                      </p>
                    </div>
                  )}

                  {activeProject.roleStructure && (
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Role-Based Architecture</h4>
                      <div className="grid gap-3">
                        {activeProject.roleStructure.map((roleItem, rIdx) => (
                          <div key={rIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <span className="text-xs font-black text-slate-900 block mb-1">{roleItem.role}</span>
                            <p className="text-slate-600 text-xs font-medium leading-relaxed">{roleItem.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dynamic Custom Features */}
                  {activeProject.features && (
                    <div>
                      <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Key Features</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {activeProject.features.map((feat, fIdx) => (
                          <li key={fIdx} className="p-3 bg-slate-50 rounded-xl text-slate-600 text-xs font-bold border border-slate-100 flex items-start gap-2.5">
                            <span className="text-theme mt-0.5">•</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Custom Architecture Block */}
                  {activeProject.architecture && (
                    <div className="p-5 bg-blue-50/40 rounded-2xl border border-blue-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-blue-500 uppercase tracking-widest mb-2">System Architecture & Data Isolation</h4>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium">
                        {activeProject.architecture}
                      </p>
                    </div>
                  )}

                  {/* Custom Engineering Challenge Block */}
                  {activeProject.challenges && (
                    <div className="p-5 bg-red-50/40 rounded-2xl border border-red-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-red-500 uppercase tracking-widest mb-2">Technical Challenges & Solutions</h4>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium">
                        {activeProject.challenges}
                      </p>
                    </div>
                  )}

                  {/* Impact Block */}
                  {activeProject.impact && (
                    <div className="p-5 bg-amber-50/40 rounded-2xl border border-amber-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-amber-600 uppercase tracking-widest mb-2">Impact & Results</h4>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium whitespace-pre-line">
                        {activeProject.impact}
                      </p>
                    </div>
                  )}

                  {/* Key Learnings Block */}
                  {activeProject.keyLearnings && (
                    <div className="p-5 bg-purple-50/40 rounded-2xl border border-purple-100/50">
                      <h4 className="text-[10px] sm:text-xs font-black text-purple-600 uppercase tracking-widest mb-2">Key Learnings</h4>
                      <p className="text-slate-700 text-xs leading-relaxed font-medium">
                        {activeProject.keyLearnings}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  <div>
                    <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3.5 py-1.5 bg-slate-50 text-xs font-black text-slate-500 rounded-lg border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          )}
        </AnimatePresence>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Achievements"
            subtitle="Recognition for excellence and innovation."
            icon={<Award size={28} />}
          />
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] flex-grow lg:flex-grow-0"
              >
                <TiltCard className="p-8 sm:p-10 rounded-[2.5rem] bg-white shadow-md border border-slate-100 hover:border-theme transition-all hover:shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-6 flex-wrap">
                      <span className="px-3.5 py-1.5 bg-yellow-50 text-yellow-700 font-bold rounded-xl text-xs border border-yellow-200">
                        {item.year}
                      </span>
                      {item.type && (
                        <span className="px-3.5 py-1.5 bg-theme-soft text-theme font-bold rounded-xl text-xs border border-theme/20">
                          {item.type}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-theme transition-colors leading-tight mb-2">
                      {item.title}
                    </h3>
                    <h4 className="text-xs font-bold text-slate-500 mb-4">{item.organization}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GitHubWidget gitStats={gitStats} primaryColor={THEMES[activeThemeIndex]?.primary || '#4f46e5'} />

      {/* Certifications Section */}
      <section id="certs" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Certifications"
            subtitle="Continuous learning and professional growth."
            icon={<Award size={28} />}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-white rounded-3xl border border-slate-100 hover:border-theme hover:shadow-xl transition-all group flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-theme-soft text-theme flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <Award size={32} />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 leading-tight mb-2 group-hover:text-theme transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {cert.type && (
                      <span className="px-2 py-0.5 bg-theme-soft text-theme font-bold rounded-lg text-[10px] border border-theme/20 uppercase tracking-widest">
                        {cert.type}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    {cert.issuer}
                  </p>
                  {cert.link && cert.link !== '#' && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-black text-theme hover:underline"
                    >
                      View {cert.type === 'BADGE' ? 'Badge' : 'Certificate'} <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Let's Connect"
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
            icon={<MessageSquare size={28} />}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Drop me a message', value: PERSONAL_INFO.email, link: `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`, icon: <Mail size={32} />, borderHover: 'hover:border-blue-600', iconHover: 'group-hover:text-blue-600 group-hover:bg-blue-50' },
              { label: 'Give me a call', value: PERSONAL_INFO.phone, link: `tel:${PERSONAL_INFO.phone}`, icon: <Phone size={32} />, borderHover: 'hover:border-theme', iconHover: 'group-hover:text-theme group-hover:bg-theme-soft' },
              { label: 'Connect on', value: 'GitHub', link: PERSONAL_INFO.github, icon: <Github size={32} />, borderHover: 'hover:border-black', iconHover: 'group-hover:text-black group-hover:bg-slate-200' },
              { label: 'Connect on', value: 'LinkedIn', link: PERSONAL_INFO.linkedin, icon: <Linkedin size={32} />, borderHover: 'hover:border-blue-700', iconHover: 'group-hover:text-blue-700 group-hover:bg-blue-50' },
              { label: 'Connect on', value: 'LeetCode', link: PERSONAL_INFO.leetcode, icon: <Code size={32} />, borderHover: 'hover:border-yellow-600', iconHover: 'group-hover:text-yellow-600 group-hover:bg-yellow-50' },
              { label: 'Connect on', value: 'GeeksForGeeks', link: PERSONAL_INFO.geeksforgeeks, icon: <Terminal size={32} />, borderHover: 'hover:border-green-700', iconHover: 'group-hover:text-green-700 group-hover:bg-green-50' }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all group flex flex-col items-center text-center gap-4 ${item.borderHover}`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:scale-110 transition-colors duration-300 shadow-sm ${item.iconHover}`}>
                  {item.icon}
                </div>
                <div className="w-full overflow-hidden">
                  <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{item.label}</h4>
                  <p className="text-base sm:text-lg font-black text-slate-900 truncate w-full px-2">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 font-bold text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} THARUNKUMAR K &bull; ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>

      {/* Modern 2026 Interactive Upgrades (Features 1 & 13) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        onSelectTheme={(idx) => setActiveThemeIndex(idx)}
      />
      <AIChatbot />
    </div>
  );
};

export default App;


