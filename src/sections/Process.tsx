import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#0B0C10] border-t border-[rgba(197,198,199,0.12)]" aria-label="Development Process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Methodology"
          title="How I Work"
          subtitle="A five-stage iterative approach for transforming product ideas and messy workflows into clear, reliable user interfaces."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {PORTFOLIO_DATA.process.map((step, idx) => (
            <div
              key={step.number}
              className="card-surface p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Marker */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold px-2 py-1 rounded-[6px] bg-[#0B0C10] border border-[rgba(197,198,199,0.12)] text-[#66FCF1]">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono text-[rgba(197,198,199,0.85)]">
                    0{idx + 1}/05
                  </span>
                </div>

                {/* Barlow 600 sentence case 22px */}
                <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[22px] mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* Body in Barlow 400, 16px, line-height 1.6 */}
                <p className="font-['Barlow'] text-sm sm:text-base text-[#C5C6C7] leading-[1.6]">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[rgba(197,198,199,0.12)] flex items-center justify-between text-xs font-mono text-[rgba(197,198,199,0.85)]">
                <span>Phase {step.number}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#45A29E]" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        {/* Honest Process Boundary Note */}
        <div className="mt-10 p-4 rounded-[6px] bg-[#1F2833] border border-[rgba(197,198,199,0.12)] text-xs font-['Barlow'] text-[#C5C6C7] text-center max-w-2xl mx-auto leading-relaxed">
          <p>
            This 5-step framework reflects my structured approach to product prototyping. Stages are adapted flexibly to match project scope, user feedback, and verification requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
