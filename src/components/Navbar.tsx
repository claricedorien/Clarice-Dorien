import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Send, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll progress bar */}
      <div className="w-full h-1 bg-[#FBCFE8]/30">
        <div
          className="h-full bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#D946EF] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'glass-panel shadow-lg shadow-[#F472B6]/10'
              : 'bg-white/50 backdrop-blur-md border border-[#FCE7F3]/70'
          }`}
        >
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            id="nav-brand-btn"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#F472B6] to-[#DB2777] text-white font-bold text-lg shadow-md shadow-[#F472B6]/30 group-hover:scale-105 transition-transform">
              <span className="tracking-tighter">AC</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#10B981] rounded-full border-2 border-white" />
            </div>
            <div>
              <div className="font-bold text-[#3B0728] tracking-tight leading-none text-base group-hover:text-[#DB2777] transition-colors">
                {PROFILE_INFO.name}
              </div>
              <div className="text-xs text-[#9D4C74] font-medium mt-0.5 flex items-center gap-1">
                <span>Frontend & UI</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#DB2777] font-semibold'
                      : 'text-[#581C43] hover:text-[#DB2777] hover:bg-[#FDF2F8]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#FCE7F3] rounded-full -z-10 border border-[#F472B6]/40"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Availability Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#FBCFE8] text-xs font-semibold text-[#831843]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>Available for Hire</span>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              id="nav-hire-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] via-[#D946EF] to-[#BE185D] hover:opacity-95 shadow-md shadow-[#DB2777]/25 hover:shadow-lg hover:shadow-[#DB2777]/35 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] transition-colors"
            >
              Hire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl text-[#581C43] hover:bg-[#FCE7F3] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-7xl mx-auto px-4"
          >
            <div className="glass-panel p-5 rounded-2xl border border-[#F472B6]/40 shadow-xl space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#FBCFE8]">
                <div className="flex items-center gap-2 text-xs font-medium text-[#701A51]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block" />
                  <span>{PROFILE_INFO.status}</span>
                </div>
                <span className="text-xs text-[#9D4C74] font-medium">San Francisco, CA</span>
              </div>

              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-[#FDF2F8] text-[#DB2777] font-semibold border border-[#FBCFE8]'
                        : 'text-[#4A0E35] hover:bg-[#FFF5F8]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#DB2777]" />
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#D946EF] shadow-md shadow-[#DB2777]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
