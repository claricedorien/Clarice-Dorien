import React, { useState } from 'react';
import { 
  User, 
  Code, 
  Sparkles, 
  Cpu, 
  Heart, 
  CheckCircle, 
  Layers, 
  Palette, 
  Terminal, 
  Eye, 
  Award,
  Zap,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES, PHILOSOPHY_POINTS, PROFILE_INFO } from '../data/portfolioData';
import { SkillItem } from '../types';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'skills' | 'tools' | 'philosophy'>('skills');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>('frontend');
  const [inspectedSkill, setInspectedSkill] = useState<SkillItem>(SKILL_CATEGORIES[0].skills[0]);

  const tabs = [
    { id: 'skills', label: 'Skills & Mastery', icon: Code },
    { id: 'story', label: 'Story & Journey', icon: User },
    { id: 'tools', label: 'Ecosystem & Tools', icon: Cpu },
    { id: 'philosophy', label: 'Principles', icon: Heart },
  ];

  const currentCategory = SKILL_CATEGORIES.find(c => c.id === selectedSkillCategory) || SKILL_CATEGORIES[0];

  const toolsList = [
    { name: 'React 19 & Next.js', category: 'Core Framework', desc: 'RSC, Streaming SSR & custom hooks', color: '#DB2777' },
    { name: 'TypeScript', category: 'Language', desc: 'Strict compiler typing & design tokens', color: '#C026D3' },
    { name: 'Tailwind CSS v4', category: 'Styling Architecture', desc: 'Subgrid, container queries & custom tokens', color: '#EC4899' },
    { name: 'Figma', category: 'UI/UX Design', desc: 'Auto-layout, variant modes & design handoff', color: '#BE185D' },
    { name: 'Motion', category: 'Animation Engine', desc: 'Physics springs & layout morphing', color: '#D946EF' },
    { name: 'Vite & Vitest', category: 'Build Tooling', desc: 'Sub-second HMR & unit/snapshot testing', color: '#DB2777' },
    { name: 'Three.js / WebGL', category: '3D Graphics', desc: 'Interactive shaders & spatial canvases', color: '#A21CAF' },
    { name: 'Radix UI Primitives', category: 'Accessibility', desc: 'Headless WCAG AAA certified components', color: '#9D174D' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] border border-[#F472B6]/40 text-xs font-bold text-[#9D174D] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Behind the Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#380D27] tracking-tight">
            About Me &amp; Technical Capabilities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#581C43]">
            Bridging the gap between visionary visual design and battle-tested frontend engineering.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl glass-panel border border-[#FBCFE8] max-w-xl mx-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`about-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DB2777] to-[#D946EF] text-white shadow-md shadow-[#DB2777]/25'
                      : 'text-[#701A51] hover:text-[#DB2777] hover:bg-[#FFF0F5]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Skills & Mastery */}
        {activeTab === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Category Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  id={`skill-cat-${cat.id}`}
                  onClick={() => {
                    setSelectedSkillCategory(cat.id);
                    setInspectedSkill(cat.skills[0]);
                  }}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedSkillCategory === cat.id
                      ? 'bg-[#831843] text-white shadow-md shadow-[#831843]/20'
                      : 'bg-white/80 border border-[#FBCFE8] text-[#581C43] hover:border-[#DB2777] hover:bg-[#FDF2F8]'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Skills Grid + Interactive Skill Inspector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Skill Items List */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-semibold text-[#831843] uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>{currentCategory.description}</span>
                  <span className="text-[11px] text-[#BE185D] normal-case">Click skill to inspect details</span>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {currentCategory.skills.map((skill) => {
                    const isSelected = inspectedSkill.name === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onClick={() => setInspectedSkill(skill)}
                        className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? 'bg-white border-2 border-[#DB2777] shadow-lg shadow-[#DB2777]/15 scale-[1.01]'
                            : 'glass-panel hover:bg-white/90 hover:border-[#F472B6]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <span className="font-bold text-sm sm:text-base text-[#380D27]">
                              {skill.name}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FCE7F3] text-[#BE185D] border border-[#FBCFE8]">
                              {skill.badge}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[#831843] font-medium hidden sm:inline-block">
                              {skill.experience}
                            </span>
                            <span className="text-sm font-extrabold text-[#DB2777]">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Interactive Animated Progress Bar */}
                        <div className="w-full h-2 rounded-full bg-[#FCE7F3] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-[#F472B6] via-[#EC4899] to-[#D946EF]"
                          />
                        </div>

                        <p className="text-xs text-[#581C43] mt-2 line-clamp-1">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inspector Card (Deep Dive on Selected Skill) */}
              <div className="lg:col-span-5">
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border-2 border-white shadow-xl relative overflow-hidden bg-gradient-to-br from-white/90 via-[#FFF5F8]/90 to-white/90">
                  <div className="flex items-center justify-between pb-4 border-b border-[#FBCFE8]">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DB2777] to-[#D946EF] text-white flex items-center justify-center shadow-sm">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9D174D]">
                          Skill Spotlight
                        </span>
                        <h4 className="text-lg font-bold text-[#380D27]">
                          {inspectedSkill.name}
                        </h4>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#10B981]/15 text-[#047857] text-xs font-bold border border-[#10B981]/30">
                      Verified
                    </span>
                  </div>

                  <div className="py-5 space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-[#831843]">Proficiency Level</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl font-extrabold text-[#DB2777]">{inspectedSkill.level}%</span>
                        <span className="text-xs font-medium text-[#701A51]">({inspectedSkill.badge} Tier)</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FFF0F5] border border-[#FBCFE8] space-y-1">
                      <span className="text-xs font-bold text-[#701A51]">Practical Focus &amp; Impact</span>
                      <p className="text-xs leading-relaxed text-[#4A0E35]">
                        {inspectedSkill.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-1 text-xs">
                      <div className="flex items-center justify-between text-[#581C43]">
                        <span className="font-semibold">Hands-on Production:</span>
                        <span className="text-[#831843] font-bold">{inspectedSkill.experience}</span>
                      </div>
                      <div className="flex items-center justify-between text-[#581C43]">
                        <span className="font-semibold">Code Review Rigor:</span>
                        <span className="text-[#831843]">Strict TypeScript + a11y</span>
                      </div>
                      <div className="flex items-center justify-between text-[#581C43]">
                        <span className="font-semibold">Recent Deployment:</span>
                        <span className="text-[#10B981] font-semibold">Active in Lumina &amp; Sora</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#FBCFE8] flex items-center justify-between text-xs text-[#831843]">
                    <span>Tested in high-load production</span>
                    <span className="font-bold text-[#DB2777]">100% WCAG Ready</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* Tab 2: Story & Journey */}
        {activeTab === 'story' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="space-y-4 text-sm sm:text-base text-[#4A0E35] leading-relaxed">
                <p>
                  I began my journey as a graphic &amp; interaction designer who was frustrated with seeing static Figma designs lose their nuance and fluidity when translated into code. I picked up JavaScript and CSS, determined to build the exact micro-interactions, layout physics, and typography hierarchies I had envisioned.
                </p>
                <p>
                  Over the past 6+ years, that curiosity evolved into architecting enterprise-grade frontend systems. I have built multi-brand design token pipelines for FinTech platforms, authored WebGL audio visualizers that achieved Awwwards honors, and reduced page load times by upwards of 40% for customer-facing web apps.
                </p>
                <p>
                  I believe the best frontend engineers are also empathetic product designers. When building an input field, I care not only about state isolation and zero re-renders, but also about the optical baseline of the placeholder text, the spring tension of the focus ring, and screen-reader aria labels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="glass-panel p-4 rounded-2xl border border-[#FBCFE8]">
                  <div className="text-xl font-extrabold text-[#DB2777]">100%</div>
                  <div className="text-xs font-semibold text-[#701A51]">Design Fidelity</div>
                </div>
                <div className="glass-panel p-4 rounded-2xl border border-[#FBCFE8]">
                  <div className="text-xl font-extrabold text-[#C026D3]">AAA</div>
                  <div className="text-xs font-semibold text-[#701A51]">Accessibility Priority</div>
                </div>
                <div className="glass-panel p-4 rounded-2xl border border-[#FBCFE8]">
                  <div className="text-xl font-extrabold text-[#10B981]">60 FPS</div>
                  <div className="text-xs font-semibold text-[#701A51]">Fluid Animations</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border-2 border-white shadow-xl space-y-5 bg-gradient-to-tr from-[#FFF0F5] to-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#DB2777] text-white flex items-center justify-center font-bold">
                    AC
                  </div>
                  <div>
                    <h4 className="font-bold text-[#380D27]">Personal Tidbits</h4>
                    <p className="text-xs text-[#831843]">Beyond lines of code</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-[#4A0E35]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#DB2777] font-bold">🍵</span>
                    <span>Obsessive ceremonial matcha brewer &amp; pour-over enthusiast.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#DB2777] font-bold">📷</span>
                    <span>Shoots street architecture and candid portraits on 35mm film.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#DB2777] font-bold">⌨️</span>
                    <span>Mechanical keyboard collector with custom lubed linear switches.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#DB2777] font-bold">🌱</span>
                    <span>Regular contributor to open source accessibility tooling.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Ecosystem & Tools */}
        {activeTab === 'tools' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {toolsList.map((tool, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border border-[#FBCFE8] space-y-2 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FCE7F3] text-[#9D174D]">
                    {tool.category}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tool.color }} />
                </div>
                <h4 className="text-base font-bold text-[#380D27] pt-1">
                  {tool.name}
                </h4>
                <p className="text-xs text-[#581C43] leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 4: Engineering Principles */}
        {activeTab === 'philosophy' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {PHILOSOPHY_POINTS.map((point, index) => (
              <div
                key={index}
                className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-[#FBCFE8] space-y-3 relative overflow-hidden"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#DB2777] to-[#D946EF] text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-[#380D27]">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#581C43] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};
