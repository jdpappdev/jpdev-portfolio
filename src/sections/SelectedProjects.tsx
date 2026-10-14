import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectData } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectVisual } from '../components/ProjectVisual';
import { ProjectModal } from '../components/ProjectModal';
import { useReveal } from '../hooks/useReveal';

export const SelectedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const containerRef = useReveal();

  const project1 = PORTFOLIO_DATA.projects[0]; // Assured Capture
  const project2 = PORTFOLIO_DATA.projects[1]; // Deaf Contact Record

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-20 md:py-28 bg-[var(--layer-1)] border-t border-[rgba(197,198,199,0.10)] relative scroll-mt-24"
      aria-label="Selected Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Portfolio Work"
          title="Selected Projects"
          subtitle="Real-world problem spaces explored through frontend architecture, prototype implementation, and iterative refinement."
        />

        <div className="space-y-16 sm:space-y-20">
          
          {/* PROJECT 1: Assured Capture (Field Inspection & Reporting) */}
          <article
            id="project-assured-capture"
            onMouseMove={handleMouseMove}
            className="interactive-card card-spotlight p-6 sm:p-8 lg:p-10 reveal-item relative overflow-visible scroll-mt-28"
            data-stagger-index="0"
            aria-labelledby="project-1-title"
          >
            <div className="spotlight-layer" aria-hidden="true" />

            {/* Ghost outline number "01" (opposite video on top-left, hidden below 768px, sized & moved up to avoid eyebrow collision) */}
            <div
              className="ghost-outline-number hidden md:block absolute -top-5 lg:-top-6 left-8 font-mono font-black text-[54px] sm:text-[60px] lg:text-[68px] xl:text-[72px] opacity-[0.07] z-0"
              aria-hidden="true"
            >
              01
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Context, Problem, Details */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* 1. Eyebrow */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#C5C6C7]">
                  <span className="font-medium text-white">{project1.category}</span>
                  <span aria-hidden="true" className="text-[#45A29E]">·</span>
                  <span className="text-[#C5C6C7]/90">{project1.statusBadge}</span>
                </div>

                {/* 2. Title: Barlow 600, 28-32px (smaller than section heading) */}
                <h3
                  id="project-1-title"
                  className="font-['Barlow'] font-semibold text-white tracking-tight text-[28px] sm:text-[30px] lg:text-[32px] leading-snug"
                >
                  {project1.name}
                </h3>

                {/* 3. Description */}
                <p className="font-['Barlow'] text-base text-[var(--text)] leading-[1.6]">
                  {project1.description}
                </p>

                {/* Mobile Media: right after description, before details & button */}
                <div className="lg:hidden flex justify-center py-2">
                  <ProjectVisual project={project1} />
                </div>

                {/* 4. Details: Plain Definition Lists with 1px dividers, NO nested bordered boxes */}
                <dl className="space-y-4 pt-1">
                  {/* Focus & Scope */}
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-1">
                      My Focus & Scope
                    </dt>
                    <dd className="font-['Barlow'] text-base text-[var(--text)] leading-relaxed">
                      {project1.focus}
                    </dd>
                    {project1.contribution && (
                      <p className="font-['Barlow'] text-xs text-[rgba(197,198,199,0.8)] mt-1">
                        Role: {project1.contribution}
                      </p>
                    )}
                  </div>

                  <div className="h-px bg-[rgba(197,198,199,0.12)]" aria-hidden="true" />

                  {/* Workflow steps: inline connected row, small numbered nodes joined by 1px line, no boxes */}
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-3">
                      Workflow Structure
                    </dt>
                    <dd>
                      <div className="relative flex items-start justify-between max-w-lg">
                        {/* 1px connecting line */}
                        <div
                          className="absolute top-3.5 left-4 right-4 h-px bg-[rgba(197,198,199,0.2)]"
                          aria-hidden="true"
                        />
                        {project1.workflowStages?.map((stage, i) => (
                          <div
                            key={i}
                            className="relative z-10 flex flex-col items-center text-center px-1 max-w-[120px]"
                          >
                            <div className="w-7 h-7 rounded-full bg-[var(--layer-3)] border border-[rgba(197,198,199,0.25)] shadow-[var(--edge)] flex items-center justify-center font-mono text-xs text-[#66FCF1] mb-2">
                              {stage.step}
                            </div>
                            <span className="font-['Barlow'] font-medium text-xs text-white leading-tight">
                              {stage.title}
                            </span>
                            <span className="font-['Barlow'] text-[11px] text-[#C5C6C7]/70 leading-tight mt-0.5 hidden sm:block">
                              {stage.detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </dd>
                  </div>

                  <div className="h-px bg-[rgba(197,198,199,0.12)]" aria-hidden="true" />

                  {/* Status */}
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-1">
                      Status
                    </dt>
                    <dd className="font-mono text-xs text-[#66FCF1]">
                      {project1.statusText}
                    </dd>
                  </div>
                </dl>

                {/* 5. CTA: Primary Explore Project button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project1)}
                    className="touch-target inline-flex items-center gap-2 px-6 py-3 rounded-[12px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-sm hover:bg-[#66FCF1]/90 shadow-[var(--shadow-1)] hover:shadow-[var(--glow-accent)] transition-all duration-200 focus-ring cursor-pointer"
                  >
                    <span>{project1.ctaText}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Representation (Desktop) */}
              <div className="hidden lg:flex lg:col-span-6 justify-center">
                <ProjectVisual project={project1} />
              </div>

            </div>
          </article>

          {/* PROJECT 2: Deaf Contact Record (Contact & Ministry Organization) */}
          <article
            id="project-deaf-contact-record"
            onMouseMove={handleMouseMove}
            className="interactive-card card-spotlight p-6 sm:p-8 lg:p-10 reveal-item relative overflow-visible scroll-mt-28"
            data-stagger-index="1"
            aria-labelledby="project-2-title"
          >
            <div className="spotlight-layer" aria-hidden="true" />

            {/* Ghost outline number "02" (opposite video on top-right, hidden below 768px, right-aligned, ~100px on desktop) */}
            <div
              className="ghost-outline-number hidden md:block absolute top-3 lg:top-4 right-8 text-right font-mono font-black text-[76px] lg:text-[88px] xl:text-[100px] opacity-[0.07] z-0"
              aria-hidden="true"
            >
              02
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Visual Representation (Desktop, Alternating side) */}
              <div className="hidden lg:flex lg:col-span-6 order-2 lg:order-1 justify-center">
                <ProjectVisual project={project2} />
              </div>

              {/* Right Column: Context, Problem, Role */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                
                {/* 1. Eyebrow */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#C5C6C7]">
                  <span className="font-medium text-white">{project2.category}</span>
                  <span aria-hidden="true" className="text-[#45A29E]">·</span>
                  <span className="text-[#C5C6C7]/90">{project2.statusBadge}</span>
                </div>

                {/* 2. Title: Barlow 600, 28-32px */}
                <div>
                  <h3
                    id="project-2-title"
                    className="font-['Barlow'] font-semibold text-white tracking-tight text-[28px] sm:text-[30px] lg:text-[32px] leading-snug"
                  >
                    {project2.name}
                  </h3>
                  {project2.tagline && (
                    <p className="font-['Barlow'] text-sm font-medium text-[#C5C6C7]/90 mt-1">
                      "{project2.tagline}"
                    </p>
                  )}
                </div>

                {/* 3. Description */}
                <p className="font-['Barlow'] text-base text-[var(--text)] leading-[1.6]">
                  {project2.description}
                </p>

                {/* Mobile Media: right after description, before details & button */}
                <div className="lg:hidden flex justify-center py-2">
                  <ProjectVisual project={project2} />
                </div>

                {/* 4. Details: Plain Definition Lists with 1px dividers, NO nested bordered boxes */}
                <dl className="space-y-4 pt-1">
                  {/* Focus & Scope */}
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-1">
                      My Focus & Scope
                    </dt>
                    <dd className="font-['Barlow'] text-base text-[var(--text)] leading-relaxed">
                      {project2.focus}
                    </dd>
                    <p className="font-['Barlow'] text-xs text-[rgba(197,198,199,0.8)] mt-1">
                      Role: {project2.contribution}
                    </p>
                  </div>

                  <div className="h-px bg-[rgba(197,198,199,0.12)]" aria-hidden="true" />

                  {/* Reported Core Features: unboxed plain list with subtle checks */}
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-2">
                      Reported Core Features
                    </dt>
                    <dd className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {project2.reportedFeatures?.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#45A29E] shrink-0" aria-hidden="true" />
                          <span className="font-['Barlow'] text-sm text-[var(--text)]">{feat}</span>
                        </div>
                      ))}
                    </dd>
                  </div>

                  <div className="h-px bg-[rgba(197,198,199,0.12)]" aria-hidden="true" />

                  {/* Status */}
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)] mb-1">
                      Status
                    </dt>
                    <dd className="font-mono text-xs text-[rgba(197,198,199,0.85)]">
                      {project2.statusText}
                    </dd>
                  </div>
                </dl>

                {/* 5. CTA: Primary Explore Project button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project2)}
                    className="touch-target inline-flex items-center gap-2 px-6 py-3 rounded-[12px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-sm hover:bg-[#66FCF1]/90 shadow-[var(--shadow-1)] hover:shadow-[var(--glow-accent)] transition-all duration-200 focus-ring cursor-pointer"
                  >
                    <span>{project2.ctaText}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

            </div>
          </article>

        </div>
      </div>

      {/* Accessible Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
