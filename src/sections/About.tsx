import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { useReveal } from '../hooks/useReveal';

export const About: React.FC = () => {
  const containerRef = useReveal();
  const portraitSrc = PORTFOLIO_DATA.owner.portrait?.src;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-28 bg-[var(--layer-0)] border-t border-[rgba(197,198,199,0.10)] relative scroll-mt-24"
      aria-label="About Jade Polo and Blueprint"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Background & Values"
          title="About Me"
          subtitle="Independent developer building practical digital products with a commitment to usability and steady iteration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Authentic Copy */}
          <div className="lg:col-span-7 space-y-6 reveal-item" data-stagger-index="0">
            {/* Lead Heading at Section Heading Scale */}
            <h3 className="font-['Barlow_Condensed'] font-bold uppercase text-[clamp(1.85rem,4.5vw,2.5rem)] tracking-tight text-white leading-[1.1]">
              {PORTFOLIO_DATA.about.heading}
            </h3>

            {/* Existing Paragraphs */}
            <div className="space-y-4 font-['Barlow'] text-base sm:text-lg text-[var(--text)] leading-[1.6]">
              {PORTFOLIO_DATA.about.bodyParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Three Values: Three columns with 1px vertical dividers, NO boxes */}
            <div className="pt-8 border-t border-[rgba(197,198,199,0.12)]">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(197,198,199,0.15)] gap-y-6 sm:gap-y-0">
                <div className="sm:pr-6 space-y-1.5">
                  <span className="font-['Barlow'] font-semibold text-base text-white block">
                    Clear Structure
                  </span>
                  <p className="font-['Barlow'] text-sm text-[var(--text)] leading-relaxed">
                    Avoiding superfluous complexity; favoring maintainable components.
                  </p>
                </div>

                <div className="sm:px-6 space-y-1.5 pt-6 sm:pt-0">
                  <span className="font-['Barlow'] font-semibold text-base text-white block">
                    Honest Evaluation
                  </span>
                  <p className="font-['Barlow'] text-sm text-[var(--text)] leading-relaxed">
                    Testing, refining, and measuring real usability through iteration.
                  </p>
                </div>

                <div className="sm:pl-6 space-y-1.5 pt-6 sm:pt-0">
                  <span className="font-['Barlow'] font-semibold text-base text-white block">
                    AI-Assisted Craft
                  </span>
                  <p className="font-['Barlow'] text-sm text-[var(--text)] leading-relaxed">
                    Using AI as an accelerator while actively auditing all implementations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Identity Card (layer-2, shadow-2, edge highlight, 24px radius) */}
          <div className="lg:col-span-5 reveal-item" data-stagger-index="1">
            <div
              onMouseMove={handleMouseMove}
              className="interactive-card card-spotlight p-7 sm:p-8 rounded-[24px] bg-[var(--layer-2)] border border-[rgba(197,198,199,0.10)] shadow-[var(--shadow-2)]"
            >
              <div className="spotlight-layer" aria-hidden="true" />

              <div className="relative z-10 text-center">
                {/* 96px Ring: 1px accent-2 border, layer-3, soft glow */}
                <div className="w-24 h-24 min-w-[96px] min-h-[96px] rounded-full border border-[#45A29E] bg-[var(--layer-3)] shadow-[0_0_24px_rgba(69,162,158,0.25)] flex items-center justify-center overflow-hidden mx-auto mb-4">
                  {portraitSrc ? (
                    <img
                      src={portraitSrc}
                      alt={PORTFOLIO_DATA.owner.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-['Barlow'] text-3xl font-bold text-[#66FCF1] tracking-wider select-none">
                      JP
                    </span>
                  )}
                </div>

                <h4 className="font-['Barlow'] text-xl font-semibold text-white tracking-tight">
                  {PORTFOLIO_DATA.owner.name}
                </h4>
                <p className="text-xs font-mono uppercase tracking-wider text-[#66FCF1] mt-1">
                  {PORTFOLIO_DATA.owner.businessBrand}
                </p>
              </div>

              {/* Identity Rows (Role, Brand, Location, Promise): mono labels & values, separated by dividers */}
              <div className="relative z-10 mt-6 pt-2 space-y-0 text-xs font-mono">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-3 border-b border-[rgba(197,198,199,0.12)] gap-1">
                  <span className="text-[rgba(197,198,199,0.8)]">Role</span>
                  <span className="text-white font-medium sm:text-right">
                    {PORTFOLIO_DATA.owner.title}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-3 border-b border-[rgba(197,198,199,0.12)] gap-1">
                  <span className="text-[rgba(197,198,199,0.8)]">Brand</span>
                  <span className="text-white font-medium sm:text-right">
                    {PORTFOLIO_DATA.owner.businessBrand} (Independent)
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-3 border-b border-[rgba(197,198,199,0.12)] gap-1">
                  <span className="text-[rgba(197,198,199,0.8)]">Location</span>
                  <span className="text-[var(--text)] sm:text-right">
                    {PORTFOLIO_DATA.owner.location}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-3 border-b-0 gap-1">
                  <span className="text-[rgba(197,198,199,0.8)] shrink-0">Promise</span>
                  <span className="text-[#66FCF1] sm:text-right italic">
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
