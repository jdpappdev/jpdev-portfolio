import React from 'react';
import { Code2, LayoutGrid, Cpu, Sliders, Wrench, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { useReveal } from '../hooks/useReveal';

export const Skills: React.FC = () => {
  const containerRef = useReveal();

  const iconMap: Record<string, React.ReactNode> = {
    'frontend-dev': <Code2 className="w-6 h-6 text-[#66FCF1]" aria-hidden="true" />,
    'ui-implementation': <LayoutGrid className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />,
    'ui-structure': <Sliders className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />,
    'ai-assisted-dev': <Cpu className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />,
    'problem-solving': <Wrench className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />,
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const featuredSkill = PORTFOLIO_DATA.skills[0]; // Frontend Development
  const secondarySkills = PORTFOLIO_DATA.skills.slice(1); // The other 4 skills

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-20 md:py-28 bg-[var(--layer-0)] border-t border-[rgba(197,198,199,0.10)] relative scroll-mt-24"
      aria-label="Skills and Tools"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Competencies & Workflow"
          title="Skills & Tools"
          subtitle="Core frontend capabilities grounded in hands-on building, practical iteration, and usable interface structures."
        />

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* FEATURED TILE: Frontend Development (6 cols x 2 rows, larger icon chip) */}
          <div
            onMouseMove={handleMouseMove}
            data-stagger-index="0"
            className="interactive-card card-spotlight col-span-12 md:col-span-12 lg:col-span-6 lg:row-span-2 p-7 sm:p-9 flex flex-col justify-between reveal-item rounded-[20px]"
          >
            <div className="spotlight-layer" aria-hidden="true" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                {/* Larger Icon Chip for Featured Tile */}
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[var(--layer-3)] shadow-[var(--edge)] border border-[rgba(197,198,199,0.12)] flex items-center justify-center">
                  {iconMap[featuredSkill.id]}
                </div>
                <span className="font-mono text-xs text-[#66FCF1]/90">01 / FEATURED</span>
              </div>

              {/* Title: Barlow 600 */}
              <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[24px] sm:text-[28px] mb-3 leading-snug">
                {featuredSkill.title}
              </h3>

              {/* Description */}
              <p className="font-['Barlow'] text-base text-[var(--text)] leading-[1.6]">
                {featuredSkill.description}
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[rgba(197,198,199,0.12)] flex items-center justify-between text-xs font-mono text-[rgba(197,198,199,0.8)]">
              <span>Core Specialization</span>
              <span className="text-[#66FCF1]">Modern Web Standards</span>
            </div>
          </div>

          {/* SECONDARY SKILL TILES (Span 3 cols on desktop, 6 on tablet so rows balance) */}
          {secondarySkills.map((skill, index) => (
            <div
              key={skill.id}
              onMouseMove={handleMouseMove}
              data-stagger-index={index + 1}
              className="interactive-card card-spotlight col-span-12 md:col-span-6 lg:col-span-3 p-6 flex flex-col justify-between reveal-item rounded-[20px]"
            >
              <div className="spotlight-layer" aria-hidden="true" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  {/* 44px Icon Chip: layer-3, radius 12px, edge highlight */}
                  <div className="w-[44px] h-[44px] min-w-[44px] min-h-[44px] rounded-[12px] bg-[var(--layer-3)] shadow-[var(--edge)] border border-[rgba(197,198,199,0.12)] flex items-center justify-center">
                    {iconMap[skill.id]}
                  </div>
                  <span className="font-mono text-xs text-[rgba(197,198,199,0.8)]">
                    0{index + 2}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[20px] sm:text-[22px] mb-2 leading-snug">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="font-['Barlow'] text-sm sm:text-[15px] text-[var(--text)] leading-[1.6]">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}

          {/* FULL-WIDTH "BUILT WITH" PANEL (replaces Technical Notes) */}
          <div
            onMouseMove={handleMouseMove}
            data-stagger-index="5"
            className="interactive-card card-spotlight col-span-12 p-6 sm:p-8 reveal-item rounded-[20px]"
          >
            <div className="spotlight-layer" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[rgba(197,198,199,0.12)]">
                <div className="flex items-center gap-3">
                  <div className="w-[44px] h-[44px] min-w-[44px] min-h-[44px] rounded-[12px] bg-[var(--layer-3)] shadow-[var(--edge)] border border-[rgba(197,198,199,0.12)] flex items-center justify-center">
                    <Layers className="w-5 h-5 text-[#66FCF1]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px] sm:text-[24px]">
                      Built With
                    </h3>
                    <p className="font-['Barlow'] text-xs sm:text-sm text-[#C5C6C7]/80">
                      Technical specifications and architectural standards for this portfolio
                    </p>
                  </div>
                </div>

                <span className="font-mono text-xs text-[#45A29E] sm:self-center">
                  Verified Stack
                </span>
              </div>

              {/* Mono key/value rows, 14px, var(--text), dividers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                {PORTFOLIO_DATA.portfolioStackNotes.map((note, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-3 border-b border-[rgba(197,198,199,0.12)] gap-1 text-sm font-mono"
                  >
                    <span className="text-white font-medium shrink-0">
                      {note.label}
                    </span>
                    <span className="text-[var(--text)] sm:text-right">
                      {note.value}
                    </span>
                  </div>
                ))}
              </div>

              {PORTFOLIO_DATA.skillsNotice && (
                <p className="font-['Barlow'] text-xs text-[rgba(197,198,199,0.7)] mt-4 leading-relaxed">
                  {PORTFOLIO_DATA.skillsNotice}
                </p>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
