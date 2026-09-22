import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Award,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TIMELINE_ITEMS } from '../data/portfolioData';
import { TimelineType, TimelineItem } from '../types';

export const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<TimelineType>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    't1': true, // Expand current senior role by default
    't2': false
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = filter === 'all'
    ? TIMELINE_ITEMS
    : TIMELINE_ITEMS.filter(item => item.type === filter);

  return (
    <section id="timeline" className="py-20 md:py-28 relative scroll-mt-20">
      {/* Background ambient blush glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FBCFE8]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] border border-[#F472B6]/40 text-xs font-bold text-[#9D174D] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Career Journey &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#380D27] tracking-tight">
            Interactive Experience Timeline
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#581C43]">
            A chronicle of high-growth roles, product launches, academic training, and design awards.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#DB2777] to-[#D946EF] text-white shadow-md shadow-[#DB2777]/25'
                  : 'bg-white/80 border border-[#FBCFE8] text-[#581C43] hover:bg-[#FFF0F5]'
              }`}
            >
              All Milestones ({TIMELINE_ITEMS.length})
            </button>
            <button
              onClick={() => setFilter('work')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'work'
                  ? 'bg-gradient-to-r from-[#DB2777] to-[#D946EF] text-white shadow-md shadow-[#DB2777]/25'
                  : 'bg-white/80 border border-[#FBCFE8] text-[#581C43] hover:bg-[#FFF0F5]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setFilter('education-recognition')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'education-recognition'
                  ? 'bg-gradient-to-r from-[#DB2777] to-[#D946EF] text-white shadow-md shadow-[#DB2777]/25'
                  : 'bg-white/80 border border-[#FBCFE8] text-[#581C43] hover:bg-[#FFF0F5]'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Education &amp; Honors</span>
            </button>
          </div>
        </div>

        {/* Timeline Spine & Cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central pink line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#F472B6] via-[#EC4899] to-[#FBCFE8] -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = !!expandedIds[item.id];
              const isWork = item.type === 'work';

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-[#DB2777] shadow-md shadow-[#DB2777]/20 z-10">
                    {isWork ? (
                      <Briefcase className="w-3.5 h-3.5 text-[#DB2777]" />
                    ) : (
                      <Award className="w-3.5 h-3.5 text-[#D946EF]" />
                    )}
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full text-left">
                    <div
                      className={`rounded-3xl glass-panel p-5 sm:p-6 border transition-all duration-300 ${
                        isExpanded
                          ? 'border-[#DB2777] bg-white/95 shadow-xl shadow-[#DB2777]/10'
                          : 'border-[#FBCFE8] hover:border-[#F472B6] hover:bg-white/90'
                      }`}
                    >
                      {/* Top Period & Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                        <span className="text-xs font-bold text-[#DB2777] flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FCE7F3] text-[#BE185D] border border-[#FBCFE8]">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <div className="mt-1">
                        <h3 className="text-lg sm:text-xl font-bold text-[#380D27]">
                          {item.title}
                        </h3>
                        <div className="text-xs font-semibold text-[#831843] flex items-center gap-2 mt-0.5">
                          <span>{item.companyOrInstitution}</span>
                          <span>•</span>
                          <span className="text-[#9D4C74] font-normal flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#DB2777]" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Brief Description */}
                      <p className="text-xs sm:text-sm text-[#4A0E35] mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Collapsible / Expandable Achievement List */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pt-4 space-y-3"
                          >
                            <div className="text-xs font-bold uppercase tracking-wider text-[#9D174D]">
                              Key Highlights &amp; Accomplishments
                            </div>
                            <div className="space-y-2">
                              {item.achievements.map((ach, i) => (
                                <div key={i} className="flex items-start gap-2.5 text-xs text-[#581C43]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#DB2777] shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{ach}</span>
                                </div>
                              ))}
                            </div>

                            {/* Skills Used */}
                            <div className="pt-2">
                              <span className="text-[11px] font-semibold text-[#831843] block mb-1.5">
                                Technologies &amp; Competencies:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {item.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="px-2 py-0.5 rounded-lg bg-[#FFF0F5] text-[#701A51] text-[10px] font-medium border border-[#FCE7F3]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Toggle Expand Button */}
                      <div className="pt-3 mt-2 border-t border-[#FCE7F3] flex items-center justify-between">
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="text-xs font-semibold text-[#DB2777] hover:text-[#9D174D] flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide Details' : 'View Achievements'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        <span className="text-[10px] text-[#9D4C74] font-medium">
                          {item.achievements.length} Milestones
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
