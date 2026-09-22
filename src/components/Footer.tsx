import React from 'react';
import { 
  Heart, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble, 
  Mail, 
  Sparkles 
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#FFF0F5] border-t border-[#FBCFE8] pt-16 pb-12 overflow-hidden text-left">
      {/* Decorative top pink highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#F472B6] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FCE7F3]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#F472B6] to-[#DB2777] text-white font-bold text-lg shadow-sm">
                AC
              </div>
              <div>
                <span className="font-extrabold text-lg text-[#380D27] tracking-tight block">
                  {PROFILE_INFO.name}
                </span>
                <span className="text-xs text-[#831843] font-medium">
                  {PROFILE_INFO.role}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#581C43] leading-relaxed max-w-sm">
              Engineering polished, accessible frontend systems, responsive web applications, and thoughtful design experiences.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white border border-[#FBCFE8] text-[#581C43] hover:text-[#DB2777] hover:bg-[#FFF5F8] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white border border-[#FBCFE8] text-[#581C43] hover:text-[#DB2777] hover:bg-[#FFF5F8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white border border-[#FBCFE8] text-[#581C43] hover:text-[#DB2777] hover:bg-[#FFF5F8] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white border border-[#FBCFE8] text-[#581C43] hover:text-[#DB2777] hover:bg-[#FFF5F8] transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#9D174D]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#581C43]">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#DB2777] transition-colors cursor-pointer"
                >
                  About &amp; Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('skills')}
                  className="hover:text-[#DB2777] transition-colors cursor-pointer"
                >
                  Technical Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#DB2777] transition-colors cursor-pointer"
                >
                  Project Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('timeline')}
                  className="hover:text-[#DB2777] transition-colors cursor-pointer"
                >
                  Experience Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#DB2777] transition-colors cursor-pointer"
                >
                  Contact &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Current Availability Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#9D174D]">
              Colophon &amp; Specs
            </h4>
            <div className="p-4 rounded-2xl bg-white/70 border border-[#FBCFE8] space-y-2 text-xs text-[#581C43]">
              <div className="flex items-center justify-between">
                <span>Aesthetic:</span>
                <span className="font-bold text-[#DB2777]">Pastel Pink &amp; Magenta</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Architecture:</span>
                <span className="font-semibold text-[#380D27]">React 19 + TypeScript</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Styling Engine:</span>
                <span className="font-semibold text-[#380D27]">Tailwind CSS v4</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Animations:</span>
                <span className="font-semibold text-[#380D27]">Motion Physics</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#701A51]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Aria Chen. Crafted with craft and care.</span>
          </div>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#FBCFE8] hover:border-[#DB2777] text-xs font-semibold text-[#DB2777] hover:bg-[#FFF5F8] transition-all shadow-sm cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
