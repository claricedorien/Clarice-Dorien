import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { PROFILE_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Web Application Development',
    budget: '$5,000 — $15,000',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic async dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger vibrant pink/magenta celebration confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#DB2777', '#F472B6', '#D946EF', '#FCE7F3', '#BE185D']
        });
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#DB2777', '#F472B6', '#D946EF']
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#DB2777', '#F472B6', '#D946EF']
          });
        }, 250);
      } catch (err) {
        // Fallback gracefully if confetti unavailable
      }
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Web Application Development',
      budget: '$5,000 — $15,000',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20">
      {/* Background ambient orbs */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#FBCFE8]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] border border-[#F472B6]/40 text-xs font-bold text-[#9D174D] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
            <span>Let's Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#380D27] tracking-tight">
            Have an Idea? Let's Build It.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#581C43]">
            Whether you need a design system, a modern frontend application, or senior technical consulting — I'm here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Availability Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Status card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-[#FBCFE8] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#831843] uppercase tracking-wider">
                  Current Status
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/15 text-[#047857] text-xs font-bold border border-[#10B981]/30">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Available Q2 / Q3
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#380D27]">
                Ready for high-impact frontend initiatives
              </h3>

              <p className="text-xs sm:text-sm text-[#581C43] leading-relaxed">
                Currently open to select freelance engagements, contract leadership roles, and design system consultations.
              </p>

              <div className="pt-2 space-y-3 text-xs text-[#581C43]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FFF0F5] border border-[#FBCFE8] text-[#DB2777] flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#380D27] block">Fast Turnaround</span>
                    <span>Guaranteed reply within 24 hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FFF0F5] border border-[#FBCFE8] text-[#DB2777] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#380D27] block">Based In</span>
                    <span>San Francisco, CA (PST) • Remote Worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick 1-click Copy Email Card */}
            <div className="glass-panel p-6 rounded-3xl border border-[#FBCFE8] flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-[11px] font-semibold text-[#831843] uppercase tracking-wider">
                  Direct Inbox
                </span>
                <div className="font-bold text-sm sm:text-base text-[#380D27]">
                  {PROFILE_INFO.email}
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                id="contact-copy-email-btn"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#F472B6]/60 hover:border-[#DB2777] text-xs font-bold text-[#701A51] transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#DB2777]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust badge */}
            <div className="p-4 rounded-2xl bg-[#FFF0F5] border border-[#FCE7F3] flex items-center gap-3 text-xs text-[#701A51]">
              <ShieldCheck className="w-5 h-5 text-[#DB2777] shrink-0" />
              <span>
                All inquiries are treated with strict confidentiality and mutual NDA standards.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Form & Success State */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-9 rounded-3xl border-2 border-white shadow-2xl relative bg-white/95">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  /* Active Form View */
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                  >
                    <div className="border-b border-[#FBCFE8] pb-4 mb-2">
                      <h3 className="text-xl font-bold text-[#380D27]">
                        Send a Message
                      </h3>
                      <p className="text-xs text-[#831843] mt-0.5">
                        Fill in your project brief and I'll get back with a scoped plan.
                      </p>
                    </div>

                    {/* Name & Email inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#4A0E35] mb-1.5" htmlFor="form-name">
                          Your Name <span className="text-[#DB2777]">*</span>
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          placeholder="e.g. Maya Lin"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-[#380D27] placeholder-[#9D4C74]/60 outline-none transition-all ${
                            errors.name ? 'border-[#E11D48] ring-1 ring-[#E11D48]' : ''
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-[#E11D48] font-medium mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#4A0E35] mb-1.5" htmlFor="form-email">
                          Work Email <span className="text-[#DB2777]">*</span>
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          placeholder="maya@company.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          className={`w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-[#380D27] placeholder-[#9D4C74]/60 outline-none transition-all ${
                            errors.email ? 'border-[#E11D48] ring-1 ring-[#E11D48]' : ''
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-[#E11D48] font-medium mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Project Type & Budget Selectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#4A0E35] mb-1.5" htmlFor="form-project-type">
                          Project Focus
                        </label>
                        <select
                          id="form-project-type"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-[#380D27] outline-none cursor-pointer"
                        >
                          <option value="Web Application Development">Web Application (React / Next)</option>
                          <option value="Design System & Component Library">Design System &amp; Tokens</option>
                          <option value="Creative WebGL / Spatial Visuals">Creative &amp; 3D Visual Experience</option>
                          <option value="Frontend Architecture & Performance Audit">Architecture / Web Vitals Audit</option>
                          <option value="Full-Time Staff / Lead Role">Full-Time Opportunity</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#4A0E35] mb-1.5" htmlFor="form-budget">
                          Estimated Budget / Scope
                        </label>
                        <select
                          id="form-budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-[#380D27] outline-none cursor-pointer"
                        >
                          <option value="Under $5,000">Under $5,000</option>
                          <option value="$5,000 — $15,000">$5,000 — $15,000</option>
                          <option value="$15,000 — $35,000">$15,000 — $35,000</option>
                          <option value="$35,000+">$35,000+ / Ongoing Enterprise</option>
                          <option value="Flexible / Full-Time Employment">Flexible / Salaried Role</option>
                        </select>
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label className="block text-xs font-bold text-[#4A0E35] mb-1.5" htmlFor="form-message">
                        Project Overview or Goals <span className="text-[#DB2777]">*</span>
                      </label>
                      <textarea
                        id="form-message"
                        rows={4}
                        placeholder="Tell me a bit about your product goals, timeline, and what you would like to achieve..."
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl glass-input text-xs sm:text-sm text-[#380D27] placeholder-[#9D4C74]/60 outline-none transition-all resize-none ${
                          errors.message ? 'border-[#E11D48] ring-1 ring-[#E11D48]' : ''
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-[#E11D48] font-medium mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="contact-submit-btn"
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#DB2777] via-[#D946EF] to-[#BE185D] text-white text-sm font-bold shadow-lg shadow-[#DB2777]/25 hover:shadow-xl hover:shadow-[#DB2777]/35 active:scale-[0.99] disabled:opacity-75 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin text-white" />
                            <span>Transmitting Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  /* Animated Success View with Checkmark */
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="py-10 text-center space-y-6"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#10B981] to-[#34D399] text-white flex items-center justify-center shadow-xl shadow-[#10B981]/25">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#380D27]">
                        Message Received!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#581C43] max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-[#DB2777]">{formData.name}</span>. Your project brief has landed safely in my inbox. I will review your requirements and respond to <span className="font-bold text-[#DB2777]">{formData.email}</span> within 24 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FFF0F5] border border-[#FBCFE8] max-w-sm mx-auto text-left text-xs space-y-1 text-[#701A51]">
                      <div><span className="font-bold">Project Focus:</span> {formData.projectType}</div>
                      <div><span className="font-bold">Budget Tier:</span> {formData.budget}</div>
                      <div className="text-[10px] text-[#10B981] font-semibold mt-1">Status: Confirmed &amp; Queued</div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#F472B6] text-xs sm:text-sm font-bold text-[#701A51] hover:bg-[#FFF0F5] transition-colors cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-[#DB2777]" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
