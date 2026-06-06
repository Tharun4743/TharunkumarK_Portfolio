
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
  Camera,
  Video,
  Palette,
  ChevronRight,
  Menu,
  X,
  Terminal,
  MessageSquare,
  Sparkles,
  FileText
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION,
  TECHNICAL_SKILLS,
  CERTIFICATIONS,
  PROJECTS,
  LEADERSHIP,
  ACHIEVEMENTS
} from './constants';

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

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certs' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
              className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-theme transition-colors rounded-xl hover:bg-theme-soft"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                  className="px-4 py-4 text-lg font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-2xl transition-all"
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
  useEffect(() => {
    const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', randomTheme.primary);
    root.style.setProperty('--theme-secondary', randomTheme.secondary);
    root.style.setProperty('--theme-bg-soft', randomTheme.soft);
    root.style.setProperty('--theme-glow', randomTheme.glow);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-theme-soft selection:text-theme">
      <Nav />

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
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-theme-soft text-theme rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-theme"
                style={{ borderColor: 'var(--theme-glow)' }}
              >
                <Sparkles size={14} className="animate-pulse" />
                Available for Opportunities
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1] tracking-tighter">
                Engineering <span className="gradient-text block sm:inline">Future</span> Solutions.
              </h1>

              <p className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium mx-auto lg:mx-0">
                Hi, I'm <span className="text-slate-900 font-bold underline decoration-4 underline-offset-4" style={{ textDecorationColor: 'var(--theme-primary)' }}>{PERSONAL_INFO.name}</span>. I build intelligent web applications and IoT systems that solve real-world problems.
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
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all text-slate-500 hover:text-theme"
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
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000"
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
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">National Winner</p>
                    <p className="text-base font-black text-slate-900 leading-none">Code Thugs 2k26</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Photo Always Visible Here Too */}
      <section id="about" className="py-32 bg-slate-50/50">
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
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100"
            >
              <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                {PERSONAL_INFO.profileSummary}
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-theme transition-all">
                  <MapPin size={24} className="text-theme mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-lg font-black text-slate-900">{PERSONAL_INFO.location}</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-theme transition-all">
                  <Mail size={24} className="text-theme mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Contact</h4>
                  <p className="text-lg font-black text-slate-900 truncate">{PERSONAL_INFO.email}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... (Skills, Projects, Education, Contact) */}
      {/* ... Keeping the structure identical to previous successful version but ensuring high visibility ... */}

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Technical Arsenal"
            subtitle="The tools and languages I use to bring ideas to life."
            icon={<Cpu size={28} />}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECHNICAL_SKILLS.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:bg-white hover:border-theme transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-theme-soft rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-1000" style={{ backgroundColor: 'var(--theme-glow)' }}></div>
                <h3 className="text-theme font-black mb-8 uppercase tracking-widest text-xs flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-theme animate-ping"></div>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.1, color: 'var(--theme-primary)' }}
                      className="px-5 py-2.5 bg-white rounded-xl text-sm font-black text-slate-700 border border-slate-200 group-hover:border-theme-soft shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Education"
            subtitle="My academic background."
            icon={<BookOpen size={28} />}
          />
          <div className="grid gap-8">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-theme hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-xl font-medium text-slate-600">{edu.institution}</p>
                  </div>
                  <span className="px-5 py-2 bg-theme-soft text-theme font-bold rounded-xl text-sm whitespace-nowrap border border-theme" style={{ borderColor: 'var(--theme-glow)' }}>
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Experience"
            subtitle="Professional internships and industry exposure."
            icon={<User size={28} />}
          />
          <div className="grid gap-8">
            {LEADERSHIP.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-blue-400 hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xl font-medium text-slate-600">{item.organization}</p>
                  </div>
                  <span className="px-5 py-2 bg-theme-soft text-theme font-bold rounded-xl text-sm whitespace-nowrap border border-theme" style={{ borderColor: 'var(--theme-glow)' }}>
                    {item.period}
                  </span>
                </div>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Projects"
            subtitle="Real-world applications built with cutting-edge tech."
            icon={<Code size={28} />}
          />
          <div className="grid lg:grid-cols-2 gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[3.5rem] overflow-hidden flex flex-col border border-slate-100 hover:border-blue-400 transition-all hover:shadow-3xl"
              >
                <div className="p-12 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tighter">
                      {project.title}
                    </h3>
                    <div className="flex gap-4">
                      {project.githubLink && (
                        <motion.a
                          whileHover={{ scale: 1.1, y: -5 }}
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-slate-50 rounded-2xl shadow-sm text-slate-400 hover:text-theme transition-all border border-slate-100"
                          title="View on GitHub"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.driveLink && (
                        <motion.a
                          whileHover={{ scale: 1.1, y: -5 }}
                          href={project.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-slate-50 rounded-2xl shadow-sm text-slate-400 hover:text-theme transition-all border border-slate-100"
                          title="Project Files"
                        >
                          <FileText size={20} />
                        </motion.a>
                      )}
                      {project.link && project.link !== '#' && (
                        <motion.a
                          whileHover={{ scale: 1.1, y: -5 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-slate-50 rounded-2xl shadow-sm text-slate-400 hover:text-theme transition-all border border-slate-100"
                          title="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xl mb-12 font-medium">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-5 py-2.5 bg-slate-50 text-sm font-black text-slate-500 rounded-xl border border-slate-200 group-hover:border-theme-soft group-hover:text-theme transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Achievements"
            subtitle="Recognition for excellence and innovation."
            icon={<Award size={28} />}
          />
          <div className="grid gap-8">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-slate-50 rounded-[3.5rem] p-10 border border-slate-100 hover:border-theme transition-all hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tighter mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xl font-medium text-slate-600">{item.organization}</p>
                  </div>
                  <span className="px-5 py-2 bg-yellow-50 text-yellow-700 font-bold rounded-xl text-sm whitespace-nowrap border border-yellow-200 self-start">
                    {item.year}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certs" className="py-24 bg-slate-50/50">
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
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    {cert.issuer}
                  </p>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      className="mt-4 inline-flex items-center gap-2 text-xs font-black text-theme hover:underline"
                    >
                      View Certificate <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Let's Connect"
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
            icon={<MessageSquare size={28} />}
          />
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-6">
              <motion.a
                whileHover={{ scale: 1.03, y: -5 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center text-theme mb-8 group-hover:bg-theme group-hover:text-white transition-all shadow-inner">
                  <Mail size={32} />
                </div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Drop me a message</h4>
                <p className="text-xl font-black text-slate-900 break-all">{PERSONAL_INFO.email}</p>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -5 }}
                href={`tel:${PERSONAL_INFO.phone}`}
                className="block p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                  <Phone size={32} />
                </div>
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Give me a call</h4>
                <p className="text-xl font-black text-slate-900">{PERSONAL_INFO.phone}</p>
              </motion.a>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { name: 'GitHub', link: PERSONAL_INFO.github, icon: <Github size={36} />, color: 'hover:text-black hover:border-black' },
                { name: 'LinkedIn', link: PERSONAL_INFO.linkedin, icon: <Linkedin size={36} />, color: 'hover:text-blue-700 hover:border-blue-700' },
                { name: 'LeetCode', link: PERSONAL_INFO.leetcode, icon: <Code size={36} />, color: 'hover:text-yellow-600 hover:border-yellow-600' },
                { name: 'GeeksForGeeks', link: PERSONAL_INFO.geeksforgeeks, icon: <Terminal size={36} />, color: 'hover:text-green-700 hover:border-green-700' }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-10 rounded-[3.5rem] bg-slate-50 border border-slate-100 transition-all group ${item.color} shadow-sm hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-5 bg-white rounded-[2rem] group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md transition-all">
                      {item.icon}
                    </div>
                    <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 tracking-tighter">{item.name}</h3>
                </motion.a>
              ))}
            </div>
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
    </div>
  );
};

export default App;


