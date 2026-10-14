import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { useReveal } from '../hooks/useReveal';

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useReveal();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setScrollProgress(1);
      return;
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      if (e.matches) setScrollProgress(1);
    };
    mediaQuery.addEventListener('change', handleChange);

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling as section enters lower third of viewport,
      // reach 100% as the stepper crosses center
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.3;
      const totalRange = start - end + rect.height * 0.4;
      const currentPos = start - rect.top;

      const progress = Math.min(Math.max(currentPos / totalRange, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const totalSteps = PORTFOLIO_DATA.process.length;

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[var(--layer-1)] border-t border-[rgba(197,198,199,0.10)] relative scroll-mt-24"
      aria-label="Development Process"
    >
      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Methodology"
          title="How I Work"
          subtitle="A five-stage iterative approach for transforming product ideas and messy workflows into clear, reliable user interfaces."
        />

        {/* ================= DESKTOP HORIZONTAL STEPPER (lg+) ================= */}
        <div className="hidden lg:block relative mt-16 mb-12">
          {/* Base Track (1px subtle line) */}
          <div
            className="absolute top-5 left-[10%] right-[10%] h-px bg-[rgba(197,198,199,0.15)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Accent-to-transparent Progress Fill Line */}
          <div
            className="absolute top-5 left-[10%] h-px bg-gradient-to-r from-[#66FCF1] via-[#45A29E] to-transparent pointer-events-none transition-all duration-200 ease-out"
            style={{
              width: `${isReducedMotion ? 80 : scrollProgress * 80}%`,
            }}
            aria-hidden="true"
          />

          {/* 5 Stepper Columns */}
          <div className="grid grid-cols-5 gap-6 relative z-10">
            {PORTFOLIO_DATA.process.map((step, idx) => {
              const stepThreshold = idx / (totalSteps - 1);
              const isPassed = isReducedMotion || scrollProgress >= stepThreshold - 0.05;

              return (
                <div
                  key={step.number}
                  data-stagger-index={idx}
                  className="flex flex-col items-center text-center reveal-item"
                >
                  {/* 40px Node: layer-3, edge highlight, mono number, subtle accent glow when passed */}
                  <div
                    className={`w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center font-mono text-xs font-semibold bg-[var(--layer-3)] shadow-[var(--edge)] transition-all duration-300 ${
                      isPassed
                        ? 'border border-[rgba(102,252,241,0.6)] text-[#66FCF1] shadow-[var(--edge),0_0_16px_rgba(102,252,241,0.3)]'
                        : 'border border-[rgba(197,198,199,0.15)] text-[rgba(197,198,199,0.7)]'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Title: Barlow 600, no card boxes */}
                  <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[19px] sm:text-[20px] mt-4 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Existing one-line description: Barlow 400, no card boxes */}
                  <p className="font-['Barlow'] text-sm text-[var(--text)] leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE / TABLET VERTICAL STEPPER (< lg) ================= */}
        <div className="lg:hidden relative mt-8 mb-8 pl-2">
          {/* Vertical Track (1px line behind 40px nodes) */}
          <div
            className="absolute top-5 bottom-8 left-[27px] w-px bg-[rgba(197,198,199,0.15)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Vertical Progress Fill Line */}
          <div
            className="absolute top-5 left-[27px] w-px bg-gradient-to-b from-[#66FCF1] via-[#45A29E] to-transparent pointer-events-none transition-all duration-200 ease-out"
            style={{
              height: `${isReducedMotion ? 100 : scrollProgress * 100}%`,
              maxHeight: 'calc(100% - 32px)',
            }}
            aria-hidden="true"
          />

          <div className="space-y-8 relative z-10">
            {PORTFOLIO_DATA.process.map((step, idx) => {
              const stepThreshold = idx / (totalSteps - 1);
              const isPassed = isReducedMotion || scrollProgress >= stepThreshold - 0.05;

              return (
                <div
                  key={step.number}
                  data-stagger-index={idx}
                  className="flex items-start gap-4 reveal-item"
                >
                  {/* 40px Node: layer-3, edge highlight, mono number */}
                  <div
                    className={`w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center font-mono text-xs font-semibold bg-[var(--layer-3)] shadow-[var(--edge)] shrink-0 transition-all duration-300 ${
                      isPassed
                        ? 'border border-[rgba(102,252,241,0.6)] text-[#66FCF1] shadow-[var(--edge),0_0_16px_rgba(102,252,241,0.3)]'
                        : 'border border-[rgba(197,198,199,0.15)] text-[rgba(197,198,199,0.7)]'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Title and one-line description, NO card boxes */}
                  <div className="pt-1 space-y-1">
                    <h3 className="font-['Barlow'] font-semibold text-white tracking-tight text-[18px] sm:text-[20px] leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-['Barlow'] text-sm text-[var(--text)] leading-[1.6]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Honest Process Boundary Note (Clean, no card boxes) */}
        <div className="mt-12 pt-6 border-t border-[rgba(197,198,199,0.10)] text-xs font-['Barlow'] text-[rgba(197,198,199,0.75)] text-center max-w-2xl mx-auto leading-relaxed">
          <p>
            This 5-step framework reflects my structured approach to product prototyping. Stages are adapted flexibly to match project scope, user feedback, and verification requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
