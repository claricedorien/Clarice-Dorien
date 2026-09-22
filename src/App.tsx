import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showFloatingTop, setShowFloatingTop] = useState<boolean>(false);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ScrollSpy to track active section
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingTop(window.scrollY > 400);

      const sectionIds = ['hero', 'about', 'projects', 'timeline', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF5F8] text-[#380D27] flex flex-col font-sans selection:bg-[#F472B6]/30 selection:text-[#701A51]">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with Typing Effect */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. About Me Section with Interactive Tabs & Skills */}
        <AboutSection />

        {/* 3. Filterable Project Showcase with Modal Pop-ups */}
        <ProjectShowcase />

        {/* 4. Interactive Timeline */}
        <TimelineSection />

        {/* 5. Contact Form with Success Animations */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Back to Top Button */}
      {showFloatingTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          id="floating-back-to-top"
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-tr from-[#DB2777] to-[#D946EF] text-white shadow-xl shadow-[#DB2777]/30 hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
