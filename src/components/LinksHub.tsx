import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Globe,
  Code,
  Terminal,
  ExternalLink,
  Award,
  Share2,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  Link as LinkIcon,
  CheckCircle2,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATIONS, PROJECTS } from '../constants';

export const LinksHub: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const link = window.location.origin + window.location.pathname + '#links';
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const primaryLinks = [
    {
      title: 'Canonical Personal Website',
      description: 'Official Portfolio & Root Source of Truth',
      url: 'https://tharunkumark4743.netlify.app/',
      icon: <Globe className="text-blue-600" size={24} />,
      badge: 'Canonical Root',
      badgeColor: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'LinkedIn Professional Profile',
      description: 'Career updates, network, & endorsements',
      url: PERSONAL_INFO.linkedin,
      icon: <Linkedin className="text-blue-700" size={24} />,
      badge: 'Entity Triangulated',
      badgeColor: 'bg-indigo-100 text-indigo-800'
    },
    {
      title: 'GitHub Developer Profile',
      description: 'Open-source repositories & code contributions',
      url: PERSONAL_INFO.github,
      icon: <Github className="text-slate-900" size={24} />,
      badge: 'Code Authority',
      badgeColor: 'bg-slate-200 text-slate-800'
    },
    {
      title: 'LeetCode Profile',
      description: '450+ Solved Algorithmic Problems',
      url: PERSONAL_INFO.leetcode,
      icon: <Code className="text-amber-600" size={24} />,
      badge: 'Data Structures',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    {
      title: 'GeeksforGeeks Profile',
      description: 'Campus Ambassador & Technical Contributions',
      url: PERSONAL_INFO.geeksforgeeks,
      icon: <Terminal className="text-emerald-600" size={24} />,
      badge: 'Tech Ambassador',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      title: 'Google Cloud Skills Profile',
      description: 'Verified Google Cloud & GenAI Badges',
      url: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb',
      icon: <Award className="text-cyan-600" size={24} />,
      badge: 'Verified Database Authority',
      badgeColor: 'bg-cyan-100 text-cyan-800'
    },
    {
      title: 'Credly Verified Badges',
      description: 'Cisco IoT & Technical Certification Badges',
      url: 'https://www.credly.com/badges/e0e38f42-909d-46a0-8a23-4cbb658ceb2b/linked_in_profile',
      icon: <ShieldCheck className="text-purple-600" size={24} />,
      badge: 'Verified Credential',
      badgeColor: 'bg-purple-100 text-purple-800'
    }
  ];

  const featuredApps = PROJECTS.map((proj) => ({
    title: proj.title,
    description: proj.description,
    url: proj.link || proj.githubLink,
    tags: proj.tags.slice(0, 3),
    status: proj.status || 'Live'
  }));

  return (
    <section id="links" className="py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-theme/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-soft text-theme rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-theme/20 shadow-sm">
            <LinkIcon size={14} /> Self-Hosted Entity Links Hub
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Official Digital Identity <span className="gradient-text">&amp; Hub</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Self-hosted canonical links hub engineered with JSON-LD schema triangulation to anchor identity across Google Search and AI Knowledge Graphs.
          </p>
        </div>

        {/* Profile Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-xl mb-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <img
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              className="w-20 h-20 rounded-2xl object-cover ring-4 ring-theme/20 shadow-md"
            />
            <div>
              <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                {PERSONAL_INFO.name}
                <CheckCircle2 size={20} className="text-theme fill-theme/20" />
              </h3>
              <p className="text-sm font-bold text-theme flex items-center gap-1.5 mt-0.5">
                <Briefcase size={14} /> Full Stack Developer &bull; Intern @ Neura Global
              </p>
              <p className="text-xs font-medium text-slate-500 mt-1">
                VSB Engineering College &bull; Dharapuram, TN, India
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyLink}
            className="w-full md:w-auto px-5 py-3 bg-slate-900 hover:bg-theme text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" /> Link Copied!
              </>
            ) : (
              <>
                <Copy size={16} /> Share Links Hub
              </>
            )}
          </button>
        </motion.div>

        {/* Authority Links Grid */}
        <div className="space-y-4 mb-12">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 px-2 flex items-center gap-2">
            <Sparkles size={14} className="text-theme" /> Verified SameAs Authority Platforms
          </h3>
          {primaryLinks.map((item, idx) => (
            <motion.a
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.01, x: 4 }}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:border-theme/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-black text-slate-900 group-hover:text-theme transition-colors">
                      {item.title}
                    </h4>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">{item.description}</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-slate-400 group-hover:text-theme transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Self-Hosted Production Applications */}
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 px-2 flex items-center gap-2">
            <Globe size={14} className="text-theme" /> Live Production Applications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {featuredApps.map((app, idx) => (
              <motion.a
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-lg hover:border-theme/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-black text-slate-900 group-hover:text-theme transition-colors truncate">
                      {app.title}
                    </h4>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-md shrink-0 border border-emerald-200">
                      {app.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">{app.description}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] font-bold text-slate-400">
                  <div className="flex gap-1.5">
                    {app.tags.map((tag, i) => (
                      <span key={i} className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink size={14} className="group-hover:text-theme transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
