import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Code2, 
  Layers, 
  Zap, 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble, 
  Mail, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_TYPING_STRINGS, PROFILE_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const [stringIndex, setStringIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Typing effect engine
  useEffect(() => {
    const currentFullString = HERO_TYPING_STRINGS[stringIndex];
    const typingSpeed = isDeleting ? 40 : 85;
    const pauseBeforeDelete = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullString.length) {
          setDisplayedText(currentFullString.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentFullString.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % HERO_TYPING_STRINGS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, stringIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex items-center">
      {/* Ambient pink/magenta background glow orbs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-gradient-to-br from-[#F472B6]/25 to-[#FBCFE8]/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-gradient-to-tl from-[#D946EF]/20 via-[#F472B6]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-[-5rem] w-80 h-80 bg-[#FED6E5]/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#F472B6]/40 shadow-sm backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EC4899] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DB2777]"></span>
              </span>
              <span className="text-xs font-semibold text-[#831843] tracking-wide uppercase">
                Senior Frontend & Creative Technologist
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#FCE7F3] text-[#BE185D] font-medium hidden sm:inline-block">
                SF / Remote
              </span>
            </motion.div>

            {/* Main Headline with Dynamic Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#380D27] tracking-tight leading-[1.12]">
                Crafting digital products with{' '}
                <span className="bg-gradient-to-r from-[#DB2777] via-[#D946EF] to-[#BE185D] bg-clip-text text-transparent">
                  craft, speed
                </span>{' '}
                &amp; elegance.
              </h1>

              {/* Typing line */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#4A0E35] flex flex-wrap items-center gap-1.5 pt-2 min-h-[44px]">
                <span className="text-[#831843]">I build</span>
                <span className="inline-block font-mono text-[#BE185D] underline decoration-[#F472B6]/70 decoration-2 underline-offset-4">
                  {displayedText}
                </span>
                <span className="inline-block w-2.5 h-6 bg-[#DB2777] rounded-sm animate-pulse ml-0.5" />
              </div>
            </motion.div>

            {/* Sub-paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#581C43] leading-relaxed max-w-2xl font-normal"
            >
              {PROFILE_INFO.bio}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] via-[#D946EF] to-[#BE185D] shadow-lg shadow-[#DB2777]/25 hover:shadow-xl hover:shadow-[#DB2777]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <span>Explore Showcase</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-[#701A51] bg-white/90 border border-[#F472B6]/50 shadow-sm hover:bg-[#FFF0F5] hover:border-[#DB2777] hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
              </button>

              <button
                id="hero-resume-btn"
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-medium text-[#831843] hover:text-[#DB2777] hover:bg-[#FDF2F8] border border-transparent hover:border-[#FBCFE8] transition-all cursor-pointer"
                title="View Resume Summary"
              >
                <Download className="w-4 h-4 text-[#DB2777]" />
                <span>Resume / CV</span>
              </button>
            </motion.div>

            {/* Social pills & Quick Copy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#701A51]"
            >
              <span className="font-semibold text-[#831843]">Find me on:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/80 border border-[#FBCFE8] text-[#581C43] hover:text-[#DB2777] hover:border-[#DB2777] hover:bg-[#FFF5F8] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/80 border border-[#FBCFE8] text-[#581C43] hover:text-[#DB2777] hover:border-[#DB2777] hover:bg-[#FFF5F8] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/80 border border-[#FBCFE8] text-[#581C43] hover:text-[#DB2777] hover:border-[#DB2777] hover:bg-[#FFF5F8] transition-all"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/80 border border-[#FBCFE8] text-[#581C43] hover:text-[#DB2777] hover:border-[#DB2777] hover:bg-[#FFF5F8] transition-all"
                  aria-label="Dribbble Showcase"
                >
                  <Dribbble className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-[#FBCFE8] mx-1 hidden sm:block" />

              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-[#FBCFE8] hover:border-[#DB2777] text-xs font-medium text-[#701A51] transition-all cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981] font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-[#DB2777]" />
                    <span>{PROFILE_INFO.email}</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
            >
              {PROFILE_INFO.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel p-3.5 rounded-2xl border border-[#FBCFE8]/80 text-left hover:border-[#F472B6] transition-colors"
                >
                  <div className="text-2xl font-extrabold text-[#9D174D] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-[#701A51] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Glassmorphism Avatar & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-md"
            >
              {/* Main Portrait Card */}
              <div className="relative rounded-3xl p-4 sm:p-5 glass-panel border-2 border-white/80 shadow-2xl shadow-[#F472B6]/20 overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-tr from-[#FBCFE8] via-[#FCE7F3] to-[#FDF2F8]">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                    alt="Aria Chen - Frontend Engineer & Designer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter saturate-105 contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                  {/* Soft bottom pink gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B0728]/70 via-transparent to-transparent opacity-85" />
                  
                  {/* Card bottom info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-[#DB2777] text-[10px] font-bold tracking-wider uppercase text-white shadow-sm">
                        Portfolio 2025/2026
                      </span>
                      <span className="text-xs text-pink-100 font-medium">Design & Code</span>
                    </div>
                    <div className="text-lg font-bold mt-1 text-white tracking-tight">
                      Aria Chen
                    </div>
                    <p className="text-xs text-pink-100/90 font-light">
                      Senior Frontend Engineer • UI Architect
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left - Design Systems */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-4 -left-4 sm:-left-6 glass-panel px-4 py-2.5 rounded-2xl border border-white/90 shadow-lg shadow-[#DB2777]/10 flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F472B6] to-[#DB2777] text-white flex items-center justify-center shadow-sm">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3B0728]">Design Systems</div>
                  <div className="text-[10px] font-medium text-[#9D174D]">Tokens &amp; Components</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Mid Right - React & TS */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute top-1/3 -right-4 sm:-right-6 glass-panel px-4 py-2.5 rounded-2xl border border-white/90 shadow-lg shadow-[#DB2777]/10 flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-xl bg-[#FDF2F8] border border-[#F472B6] text-[#DB2777] flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3B0728]">React 19 + TypeScript</div>
                  <div className="text-[10px] font-medium text-[#10B981] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    Production Ready
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Bottom Left - Web Vitals 99% */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 left-6 sm:left-8 glass-panel px-4 py-2.5 rounded-2xl border border-white/90 shadow-lg shadow-[#DB2777]/15 flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#10B981] to-[#34D399] text-white flex items-center justify-center">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3B0728]">Sub-second FCP</div>
                  <div className="text-[10px] font-medium text-[#701A51]">99/100 Lighthouse Score</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Quick Resume Overview Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="glass-panel w-full max-w-lg rounded-3xl p-6 sm:p-8 border border-white/90 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#FBCFE8] pb-4">
              <div>
                <h3 className="text-xl font-bold text-[#3B0728]">Curriculum Vitae Overview</h3>
                <p className="text-xs text-[#831843]">Aria Chen — Senior Frontend Engineer</p>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-full text-[#701A51] hover:bg-[#FDF2F8] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#4A0E35]">
              <div className="p-4 rounded-2xl bg-[#FFF0F5] border border-[#FBCFE8] space-y-2">
                <span className="text-xs font-bold text-[#DB2777] uppercase tracking-wider">Executive Summary</span>
                <p className="text-xs leading-relaxed text-[#581C43]">
                  6+ years crafting enterprise frontend architectures, multi-brand design systems, and WebGL creative interactions. Expert in React 19, TypeScript, Tailwind, and Web Vitals.
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#FCE7F3]">
                  <span className="font-semibold text-[#3B0728]">Current Position</span>
                  <span className="text-[#831843]">Staff / Senior Frontend Engineer @ Aurora Labs</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#FCE7F3]">
                  <span className="font-semibold text-[#3B0728]">Education</span>
                  <span className="text-[#831843]">B.S. Computer Science &amp; HCI, UC Berkeley</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#FCE7F3]">
                  <span className="font-semibold text-[#3B0728]">Core Stack</span>
                  <span className="text-[#831843]">React, TypeScript, Next.js, Tailwind v4, Motion</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-semibold text-[#3B0728]">Availability</span>
                  <span className="text-[#10B981] font-semibold">Immediate Freelance / Select Full-Time</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  alert('Resume download triggered: Aria_Chen_Senior_Frontend_CV.pdf (Simulated)');
                  setShowResumeModal(false);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#DB2777] to-[#D946EF] text-white text-xs font-bold shadow-md hover:opacity-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PDF</span>
              </button>
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-3 rounded-xl bg-white border border-[#FBCFE8] text-xs font-semibold text-[#701A51] hover:bg-[#FFF5F8] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
