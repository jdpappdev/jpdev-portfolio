import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectData } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectVisual } from '../components/ProjectVisual';
import { ProjectModal } from '../components/ProjectModal';

export const SelectedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const project1 = PORTFOLIO_DATA.projects[0]; // Assured Capture
  const project2 = PORTFOLIO_DATA.projects[1]; // Deaf Contact Record

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0B0C10] border-t border-[rgba(197,198,199,0.12)]" aria-label="Selected Projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Portfolio Work"
          title="Selected Projects"
          subtitle="Real-world problem spaces explored through frontend architecture, prototype implementation, and iterative refinement."
        />

        <div className="space-y-12 sm:space-y-16">
          
          {/* PROJECT 1: Assured Capture (Field Inspection & Reporting) */}
          <article
            className="card-surface p-6 sm:p-8 lg:p-10 shadow-lg"
            aria-labelledby="project-1-title"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Context, Problem, Contribution */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* Unboxed Metadata (Zero Pill Rule, small text in var(--text) >= 80%) */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#C5C6C7]">
                  <span className="font-medium text-white">{project1.category}</span>
                  <span aria-hidden="true" className="text-[#45A29E]">·</span>
                  <span className="text-[#C5C6C7]/90">{project1.statusBadge}</span>
                </div>

                {/* Project Title: Barlow 600 sentence case 22-28px */}
                <h3 id="project-1-title" className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px] sm:text-[25px] md:text-[28px] leading-snug">
                  {project1.name}
                </h3>

                <p className="font-['Barlow'] text-base text-[#C5C6C7] leading-[1.6]">
                  {project1.description}
                </p>

                {/* Mobile Visual: right after description and before details & button */}
                <div className="lg:hidden flex justify-center">
                  <ProjectVisual project={project1} />
                </div>

                {/* Contribution & Focus */}
                <div className="p-4 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] space-y-1.5">
                  <div className="text-xs font-mono text-[rgba(197,198,199,0.9)] uppercase tracking-wider">
                    My Focus & Scope
                  </div>
                  <p className="font-['Barlow'] text-sm text-[#C5C6C7] leading-relaxed">
                    {project1.focus}
                  </p>
                </div>

                {/* Workflow stages overview */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)]">
                    Workflow Structure
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2.5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)]">
                      <span className="font-mono text-[#45A29E] block mb-0.5">01 Setup</span>
                      <span className="font-['Barlow'] text-[#C5C6C7] text-xs">Inspection scoping</span>
                    </div>
                    <div className="p-2.5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)]">
                      <span className="font-mono text-[#45A29E] block mb-0.5">02 Capture</span>
                      <span className="font-['Barlow'] text-[#C5C6C7] text-xs">Evidence & issues</span>
                    </div>
                    <div className="p-2.5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)]">
                      <span className="font-mono text-[#45A29E] block mb-0.5">03 Review</span>
                      <span className="font-['Barlow'] text-[#C5C6C7] text-xs">Structured export</span>
                    </div>
                  </div>
                </div>

                {/* Context boundary label */}
                <div className="text-xs font-mono text-[rgba(197,198,199,0.8)]">
                  Status: {project1.statusText}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project1)}
                    className="touch-target inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-sm hover:bg-[#66FCF1]/90 transition-colors focus-ring"
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
            className="card-surface p-6 sm:p-8 lg:p-10 shadow-lg"
            aria-labelledby="project-2-title"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Visual Representation */}
              <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start">
                <ProjectVisual project={project2} />
              </div>

              {/* Right Column: Context, Problem, Role */}
              <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
                
                {/* Unboxed Metadata (Zero Pill Rule, small text in var(--text) >= 80%) */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#C5C6C7]">
                  <span className="font-medium text-white">{project2.category}</span>
                  <span aria-hidden="true" className="text-[#45A29E]">·</span>
                  <span className="text-[#C5C6C7]/90">{project2.statusBadge}</span>
                </div>

                <div>
                  {/* Project Title: Barlow 600 sentence case 22-28px */}
                  <h3 id="project-2-title" className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px] sm:text-[25px] md:text-[28px] leading-snug">
                    {project2.name}
                  </h3>
                  {project2.tagline && (
                    <p className="font-['Barlow'] text-sm font-medium text-[#C5C6C7]/90 mt-1">
                      "{project2.tagline}"
                    </p>
                  )}
                </div>

                <p className="font-['Barlow'] text-base text-[#C5C6C7] leading-[1.6]">
                  {project2.description}
                </p>

                {/* Contribution & Focus */}
                <div className="p-4 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] space-y-1.5">
                  <div className="text-xs font-mono text-[rgba(197,198,199,0.9)] uppercase tracking-wider">
                    My Focus & Scope
                  </div>
                  <p className="font-['Barlow'] text-sm text-[#C5C6C7] leading-relaxed">
                    {project2.focus}
                  </p>
                  <p className="font-['Barlow'] text-xs text-[#C5C6C7]/80 pt-1">
                    Role: {project2.contribution}
                  </p>
                </div>

                {/* Clean feature list in text column (Unboxed, truthful) */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[rgba(197,198,199,0.9)]">
                    Reported Core Features
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C5C6C7]">
                    {project2.reportedFeatures?.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#45A29E] shrink-0" aria-hidden="true" />
                        <span className="font-['Barlow']">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Honest verification status */}
                <div className="text-xs font-mono text-[rgba(197,198,199,0.8)]">
                  Status: {project2.statusText}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project2)}
                    className="touch-target inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-sm hover:bg-[#66FCF1]/90 transition-colors focus-ring"
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
