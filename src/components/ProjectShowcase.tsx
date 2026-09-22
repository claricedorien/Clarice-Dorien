import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Layers, 
  ExternalLink, 
  Eye, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-apps', label: 'Web Apps' },
    { id: 'design-systems', label: 'Design Systems' },
    { id: 'creative-ui', label: 'Creative & 3D' },
    { id: 'mobile-frontend', label: 'Mobile & UI' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] border border-[#F472B6]/40 text-xs font-bold text-[#9D174D] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#380D27] tracking-tight">
            Featured Projects &amp; Case Studies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#581C43]">
            A collection of production applications, high-scale design systems, and creative visual experiments.
          </p>

          {/* Dynamic Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === 'all' 
                ? PROJECTS_DATA.length 
                : PROJECTS_DATA.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  id={`filter-btn-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DB2777] to-[#D946EF] text-white shadow-md shadow-[#DB2777]/25 scale-105'
                      : 'bg-white/80 border border-[#FBCFE8] text-[#581C43] hover:border-[#DB2777] hover:bg-[#FFF0F5]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#FCE7F3] text-[#BE185D]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col rounded-3xl glass-panel glass-panel-hover border border-[#FBCFE8] overflow-hidden text-left"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-pink-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#230617]/75 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#831843] backdrop-blur-md shadow-sm border border-white">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#DB2777] text-white shadow-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom overlay snippet */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-semibold text-pink-200">
                      {project.role}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#380D27] group-hover:text-[#DB2777] transition-colors tracking-tight flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#DB2777] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </h3>
                    <p className="text-xs text-[#581C43] line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlight Metric Pill */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FFF0F5] border border-[#FCE7F3] text-xs">
                      <span className="font-extrabold text-[#DB2777]">
                        {project.metrics[0].value}
                      </span>
                      <span className="text-[11px] text-[#701A51] font-medium">
                        {project.metrics[0].label}
                      </span>
                    </div>
                  )}

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-lg bg-[#FCE7F3]/70 text-[#831843] text-[10px] font-semibold border border-[#FBCFE8]/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-lg bg-white/70 text-[#9D4C74] text-[10px] font-medium border border-[#FBCFE8]/60">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2 border-t border-[#FCE7F3]">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#DB2777] to-[#D946EF] text-white text-xs font-bold shadow-sm hover:opacity-95 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>

                    <button
                      onClick={() => alert(`Launching live demo link for ${project.title}`)}
                      title="View Live Demo"
                      className="p-2.5 rounded-xl bg-white border border-[#FBCFE8] text-[#701A51] hover:text-[#DB2777] hover:bg-[#FFF5F8] transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Popup Component */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onSelectProject={(p) => setActiveModalProject(p)}
          allProjects={PROJECTS_DATA}
        />

      </div>
    </section>
  );
};
