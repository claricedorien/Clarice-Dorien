import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Calendar, 
  UserCheck, 
  Building2, 
  CheckCircle2, 
  Layers, 
  ArrowLeft, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-[#230617]/60 backdrop-blur-md">
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl glass-panel bg-white/95 border-2 border-white shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#FBCFE8] bg-white/80 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FCE7F3] text-[#BE185D] border border-[#FBCFE8]">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-[#831843] font-medium hidden sm:inline-block">
                • {project.year} Case Study
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Prev / Next buttons */}
              <button
                onClick={() => onSelectProject(prevProject)}
                className="p-1.5 rounded-lg text-[#581C43] hover:text-[#DB2777] hover:bg-[#FDF2F8] transition-colors cursor-pointer"
                title={`Previous: ${prevProject.title}`}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="p-1.5 rounded-lg text-[#581C43] hover:text-[#DB2777] hover:bg-[#FDF2F8] transition-colors cursor-pointer"
                title={`Next: ${nextProject.title}`}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-[#FBCFE8] mx-1" />
              <button
                onClick={onClose}
                id="close-project-modal"
                aria-label="Close modal"
                className="p-2 rounded-xl text-[#701A51] hover:text-[#DB2777] hover:bg-[#FCE7F3] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Project Hero Banner */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-pink-100 border border-[#FBCFE8]">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#230617]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-pink-100 font-light mt-1">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Quick Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#FFF0F5] border border-[#FBCFE8] text-xs">
              <div>
                <span className="text-[#831843] font-medium block">Role</span>
                <span className="text-[#380D27] font-bold mt-0.5 block">{project.role}</span>
              </div>
              <div>
                <span className="text-[#831843] font-medium block">Client / Domain</span>
                <span className="text-[#380D27] font-bold mt-0.5 block">{project.client || 'Internal Product'}</span>
              </div>
              <div>
                <span className="text-[#831843] font-medium block">Year Shipped</span>
                <span className="text-[#380D27] font-bold mt-0.5 block">{project.year}</span>
              </div>
              <div>
                <span className="text-[#831843] font-medium block">Architecture</span>
                <span className="text-[#DB2777] font-bold mt-0.5 block">React 19 / Modern Web</span>
              </div>
            </div>

            {/* Measurable Results Badges */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9D174D] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
                <span>Measurable Outcomes &amp; Impact</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-2xl glass-panel border border-[#FBCFE8] text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#DB2777]">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-[#581C43] mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview / Story */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#831843]">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-[#4A0E35] leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-[#FFF0F5]/80 border border-[#FBCFE8] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#BE185D]">
                  The Challenge
                </span>
                <p className="text-xs sm:text-sm text-[#4A0E35] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDF2F8]/90 border border-[#F472B6]/40 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DB2777]">
                  The Engineering Solution
                </span>
                <p className="text-xs sm:text-sm text-[#4A0E35] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#831843]">
                Key Engineering Highlights
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#FCE7F3]">
                    <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4A0E35] leading-normal">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#831843]">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-[#FCE7F3] border border-[#FBCFE8] text-xs font-semibold text-[#831843]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-[#FBCFE8]">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert(`Launching live deployment for: ${project.title}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#DB2777] to-[#D946EF] shadow-md hover:opacity-95 transition-all cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </button>

                <button
                  onClick={() => alert(`Opening GitHub repository for: ${project.title}`)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#581C43] bg-white border border-[#FBCFE8] hover:bg-[#FFF5F8] transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4 text-[#DB2777]" />
                  <span>View Repository</span>
                </button>
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#831843] hover:bg-[#FDF2F8] transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
