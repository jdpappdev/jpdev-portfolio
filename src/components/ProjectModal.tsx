import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight, Info } from 'lucide-react';
import { ProjectData } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    // Save triggering element to return focus upon modal close
    triggerRef.current = document.activeElement as HTMLElement | null;

    // Handle escape key and tab trapping inside modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial focus on close button
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
      // Return focus to triggering button
      triggerRef.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Outer dialog panel - keeps the single border */}
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl rounded-[6px] border border-[rgba(197,198,199,0.12)] bg-[#1F2833] text-[#C5C6C7] shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto focus-ring"
      >
        {/* Header bar */}
        <div className="flex items-start justify-between border-b border-[rgba(197,198,199,0.12)] pb-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#C5C6C7] mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-[#45A29E]">·</span>
              <span className="text-white font-medium">{project.statusBadge}</span>
            </div>
            <h3 id="project-modal-title" className="font-['Barlow'] font-semibold text-2xl sm:text-3xl text-white tracking-tight">
              {project.name}
            </h3>
            {project.tagline && (
              <p className="font-['Barlow'] text-sm font-medium text-[#C5C6C7]/90 mt-1">"{project.tagline}"</p>
            )}
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="touch-target min-w-[44px] min-h-[44px] flex items-center justify-center rounded-[6px] text-[#C5C6C7] hover:text-[#66FCF1] hover:bg-[#0B0C10] transition-colors focus-ring focus-visible:outline-2 focus-visible:outline-[#66FCF1]"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content sections separated by 24-32px spacing and 1px dividers, no inner bordered boxes */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Section 1: Purpose & Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-2">
              Purpose & Overview
            </h4>
            <p className="font-['Barlow'] text-sm sm:text-base text-[#C5C6C7] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 1px divider */}
          <div className="border-t border-[rgba(197,198,199,0.12)]" role="separator" />

          {/* Section 2: Owner Role & Technical Focus (No inner borders or filled background) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-1.5">
                Owner's Contribution
              </span>
              <p className="font-['Barlow'] text-sm text-[#C5C6C7] leading-relaxed">
                {project.contribution}
              </p>
            </div>
            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-1.5">
                Technical Focus
              </span>
              <p className="font-['Barlow'] text-sm text-[#C5C6C7] leading-relaxed">
                {project.focus}
              </p>
            </div>
          </div>

          {/* Section 3: Reported Features or Workflow Stages */}
          {project.reportedFeatures && (
            <>
              <div className="border-t border-[rgba(197,198,199,0.12)]" role="separator" />
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-4">
                  Reported Prototype Capabilities
                </h4>
                {/* Capability list without inner boxes or borders */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {project.reportedFeatures.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm font-['Barlow'] text-[#C5C6C7]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#45A29E] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {project.workflowStages && (
            <>
              <div className="border-t border-[rgba(197,198,199,0.12)]" role="separator" />
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-4">
                  Workflow Hierarchy
                </h4>
                {/* Workflow rows: number plus title plus description, no box */}
                <div className="space-y-4 sm:space-y-5">
                  {project.workflowStages.map((stage, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <span className="font-mono text-xs sm:text-sm text-[#45A29E] mt-0.5 shrink-0 font-medium">
                        {stage.step}
                      </span>
                      <div className="space-y-1">
                        <h5 className="font-['Barlow'] text-sm sm:text-base font-semibold text-white">
                          {stage.title}
                        </h5>
                        <p className="font-['Barlow'] text-sm text-[#C5C6C7] leading-relaxed">
                          {stage.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Section 4: Context Boundary Notice (No inner borders or filled background) */}
          <div className="border-t border-[rgba(197,198,199,0.12)]" role="separator" />
          <div className="flex items-start gap-3 sm:gap-4 text-sm text-[#C5C6C7]">
            <Info className="w-4 h-4 text-[#45A29E] shrink-0 mt-1" aria-hidden="true" />
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-white font-medium block">
                Status Verification Note
              </span>
              <p className="font-['Barlow'] text-sm text-[#C5C6C7] leading-relaxed">
                {project.contextNotes}
              </p>
            </div>
          </div>
        </div>

        {/* Modal actions separated by divider */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-[rgba(197,198,199,0.12)] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-[rgba(197,198,199,0.85)]">
            {project.statusText}
          </span>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="touch-target inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-sm hover:bg-[#66FCF1]/90 transition-colors focus-ring"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              onClick={onClose}
              className="touch-target px-4 py-2.5 rounded-[6px] border border-[rgba(197,198,199,0.12)] text-[#C5C6C7] font-['Barlow'] text-sm hover:bg-[#0B0C10] hover:text-white transition-colors focus-ring"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
