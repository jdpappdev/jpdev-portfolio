import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B0C10] border-t border-[rgba(197,198,199,0.12)]" aria-label="About Jade Polo and Blueprint">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Background & Values"
          title="About Me"
          subtitle="Independent developer building practical digital products with a commitment to usability and steady iteration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-['Barlow'] font-semibold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              {PORTFOLIO_DATA.about.heading}
            </h3>

            <div className="space-y-4 font-['Barlow'] text-base sm:text-lg text-[#C5C6C7] leading-[1.6]">
              {PORTFOLIO_DATA.about.bodyParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Values / Working Principles */}
            <div className="pt-6 border-t border-[rgba(197,198,199,0.12)] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card-surface p-4">
                <span className="font-['Barlow'] font-semibold text-base text-white block mb-1">Clear Structure</span>
                <span className="font-['Barlow'] text-xs text-[#C5C6C7] leading-relaxed block">
                  Avoiding superfluous complexity; favoring maintainable components.
                </span>
              </div>
              <div className="card-surface p-4">
                <span className="font-['Barlow'] font-semibold text-base text-white block mb-1">Honest Evaluation</span>
                <span className="font-['Barlow'] text-xs text-[#C5C6C7] leading-relaxed block">
                  Testing, refining, and measuring real usability through iteration.
                </span>
              </div>
              <div className="card-surface p-4">
                <span className="font-['Barlow'] font-semibold text-base text-white block mb-1">AI-Assisted Craft</span>
                <span className="font-['Barlow'] text-xs text-[#C5C6C7] leading-relaxed block">
                  Using AI as an accelerator while actively auditing all implementations.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Reserved Authentic Identity & Blueprint Seal */}
          <div className="lg:col-span-5">
            <div className="card-surface p-6 sm:p-7 space-y-5">
              
              {/* Reserved Portrait Area */}
              <div className="relative aspect-square max-w-[240px] mx-auto rounded-[6px] border border-[rgba(197,198,199,0.12)] bg-[#0B0C10] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-[6px] border border-[rgba(197,198,199,0.12)] flex items-center justify-center bg-[#1F2833] mb-3">
                  <span className="font-['Barlow'] text-xl font-bold text-[#66FCF1]">JP</span>
                </div>
                <h4 className="font-['Barlow'] text-base font-semibold text-white tracking-tight">
                  {PORTFOLIO_DATA.owner.name}
                </h4>
                <p className="text-xs font-mono text-[rgba(197,198,199,0.85)] mt-0.5">
                  {PORTFOLIO_DATA.owner.businessBrand}
                </p>
                <div className="mt-4 pt-3 border-t border-[rgba(197,198,199,0.12)] w-full text-xs font-mono text-[rgba(197,198,199,0.8)]">
                  Reserved for verified owner portrait
                </div>
              </div>

              {/* Identity Details Card */}
              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[rgba(197,198,199,0.12)]">
                  <span className="font-mono text-[rgba(197,198,199,0.85)]">Role:</span>
                  <span className="font-['Barlow'] text-white font-medium">{PORTFOLIO_DATA.owner.title}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[rgba(197,198,199,0.12)]">
                  <span className="font-mono text-[rgba(197,198,199,0.85)]">Brand:</span>
                  <span className="font-['Barlow'] text-white font-medium">{PORTFOLIO_DATA.owner.businessBrand} (Independent)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[rgba(197,198,199,0.12)]">
                  <span className="font-mono text-[rgba(197,198,199,0.85)]">Location:</span>
                  <span className="font-['Barlow'] text-[#C5C6C7]">{PORTFOLIO_DATA.owner.location}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-mono text-[rgba(197,198,199,0.85)]">Brand Promise:</span>
                  <span className="font-['Barlow'] text-[#C5C6C7] text-right italic max-w-[200px]">
                    "{PORTFOLIO_DATA.owner.brandPromise}"
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
