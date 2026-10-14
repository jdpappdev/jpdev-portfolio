import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center pt-28 pb-20 md:py-32 lg:py-[120px] overflow-hidden"
      aria-label="Introduction"
    >
      {/* Atmospheric Silhouette Image + Faint Grid + Radial Glow (Hero-only, aria-hidden, never in content flow) */}
      <div className="hero-atmosphere" aria-hidden="true">
        {/* Silhouette image layer (responsive: mobile 31KB, desktop 91KB, opacity 0.32) */}
        <div className="hero-silhouette-layer" />
        
        {/* Dark overlay: linear-gradient(to bottom, rgba(11,12,16,0.6), var(--bg) 95%) */}
        <div className="hero-overlay" />
        
        {/* Faint 48px grid at ~4% opacity over the image */}
        <div className="hero-grid" />
        
        {/* Soft cyan glow rgba(102,252,241,0.08) behind the headline */}
        <div className="hero-glow" />
      </div>

      {/* Content Layer (z-10, full 4.5:1+ contrast, no mask applied to text) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          
          {/* Eyebrow: "Jade Polo · Blueprint" in mono, 12-13px, var(--text) */}
          <div className="text-xs sm:text-[13px] font-mono tracking-widest uppercase text-[#C5C6C7] flex items-center gap-2.5">
            <span className="w-5 h-px bg-[#45A29E]" aria-hidden="true" />
            <span>Jade Polo · Blueprint</span>
          </div>

          {/* Dominant Headline: "FRONTEND DEVELOPER" in var(--accent) */}
          <h1 className="font-['Barlow_Condensed'] font-bold uppercase leading-[0.95] text-[#66FCF1] tracking-tight text-[clamp(3.25rem,13vw,7.5rem)] max-w-5xl">
            FRONTEND DEVELOPER
          </h1>

          {/* Supporting line: max-width about 36ch in var(--text) */}
          <p className="font-['Barlow'] text-xl sm:text-2xl md:text-3xl text-[#C5C6C7] font-medium leading-snug max-w-[36ch]">
            From real-world problems to practical digital products.
          </p>

          {/* Supporting paragraph: clean, trimmed to 2 sentences max */}
          <p className="font-['Barlow'] text-base sm:text-lg text-[#C5C6C7] max-w-[56ch] leading-[1.6]">
            {PORTFOLIO_DATA.hero.supportingCopy}
          </p>

          {/* CTAs: 44px min touch target, 6px radius */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#projects"
              className="touch-target px-7 py-3 rounded-[6px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-base hover:bg-[#66FCF1]/90 transition-colors focus-ring shadow-sm"
            >
              <span>{PORTFOLIO_DATA.hero.primaryCta}</span>
              <ArrowDown className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="touch-target px-7 py-3 rounded-[6px] bg-transparent border border-[#66FCF1] text-[#66FCF1] font-['Barlow'] font-medium text-base hover:bg-[#66FCF1]/10 transition-colors focus-ring"
            >
              <span>{PORTFOLIO_DATA.hero.secondaryCta}</span>
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
