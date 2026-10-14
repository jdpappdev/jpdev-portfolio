import React from 'react';
import { Code2, LayoutGrid, Cpu, Sliders, Wrench, Info, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'frontend-dev': <Code2 className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />,
    'ui-implementation': <LayoutGrid className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />,
    'ui-structure': <Sliders className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />,
    'ai-assisted-dev': <Cpu className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />,
    'problem-solving': <Wrench className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />,
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0B0C10] border-t border-[rgba(197,198,199,0.12)]" aria-label="Skills and Tools">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Competencies & Workflow"
          title="Skills & Tools"
          subtitle="Core frontend capabilities grounded in hands-on building, practical iteration, and usable interface structures."
        />

        {/* 5 Verified Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`card-surface p-6 sm:p-7 flex flex-col justify-between ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)]">
                    {iconMap[skill.id] || <Code2 className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />}
                  </div>
                  <span className="font-mono text-xs text-[rgba(197,198,199,0.85)]">0{index + 1}</span>
                </div>
                {/* Barlow 600 sentence case 22-28px */}
                <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px] sm:text-[24px] mb-2 leading-snug">
                  {skill.title}
                </h3>
                {/* Body: Barlow 400, 16px, line-height 1.6, var(--text) */}
                <p className="font-['Barlow'] text-base text-[#C5C6C7] leading-[1.6]">
                  {skill.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[rgba(197,198,199,0.12)] flex items-center justify-between text-xs font-mono text-[rgba(197,198,199,0.85)]">
                <span>Verified Direction</span>
                <span className="text-[#66FCF1]">Active Practice</span>
              </div>
            </div>
          ))}

          {/* Technical Implementation Stack Notes */}
          <div className="card-surface p-6 sm:p-7 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-[#45A29E]" aria-hidden="true" />
                <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px]">
                  Portfolio Technical Notes
                </h3>
              </div>
              <p className="font-['Barlow'] text-sm text-[#C5C6C7] leading-[1.6] mb-4">
                {PORTFOLIO_DATA.skillsNotice}
              </p>

              <div className="space-y-2 text-xs">
                {PORTFOLIO_DATA.portfolioStackNotes.map((note, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-1.5 border-b border-[rgba(197,198,199,0.12)] last:border-b-0 gap-0.5">
                    <span className="font-mono text-[rgba(197,198,199,0.85)]">{note.label}:</span>
                    <span className="font-['Barlow'] text-[#C5C6C7] text-right font-medium">{note.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[rgba(197,198,199,0.12)] flex items-center gap-2 text-xs font-mono text-[rgba(197,198,199,0.85)]">
              <Info className="w-3.5 h-3.5 text-[#45A29E]" aria-hidden="true" />
              <span>Full tech inventory verified per engagement</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
