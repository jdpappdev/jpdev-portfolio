import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const planeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax on the perspective grid plane at 0.2x speed
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (planeRef.current) {
            const scrollOffset = window.scrollY * 0.2;
            planeRef.current.style.transform = `translate3d(0, ${scrollOffset}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[auto] sm:min-h-[calc(100vh-1rem)] flex flex-col justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-16 overflow-hidden scroll-mt-28"
      aria-label="Introduction"
    >
      {/* HERO RIGHT SIDE ATMOSPHERE: Perspective Grid Plane & Horizon Light Bloom */}
      <div
        ref={planeRef}
        className="absolute right-[-12%] sm:right-[-6%] lg:right-[-2%] bottom-[-20px] w-[340px] sm:w-[500px] md:w-[620px] lg:w-[740px] h-[320px] sm:h-[400px] lg:h-[480px] pointer-events-none select-none z-0 transition-transform duration-75 ease-out will-change-transform"
        aria-hidden="true"
      >
        {/* Perspective Grid Plane: 48px grid in rgba(102,252,241,0.14), 3D perspective rotated 62deg */}
        <div
          className="w-full h-full"
          style={{
            transform: 'perspective(900px) rotateX(62deg)',
            transformOrigin: 'bottom center',
            backgroundImage: `
              linear-gradient(to right, rgba(102, 252, 241, 0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(102, 252, 241, 0.14) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 80% at 50% 95%, #000 20%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse 95% 80% at 50% 95%, #000 20%, transparent 80%)',
          }}
        />

        {/* Soft cyan light bloom rising from the plane in the right third (horizon glow) */}
        <div
          className="absolute bottom-4 right-[10%] w-[300px] sm:w-[420px] lg:w-[500px] h-[180px] sm:h-[240px] rounded-full pointer-events-none select-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(102, 252, 241, 0.18) 0%, rgba(102, 252, 241, 0.07) 45%, rgba(102, 252, 241, 0) 75%)',
            filter: 'blur(55px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Left-aligned column tuned for first viewport discipline */}
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5">
          
          {/* Availability Chip: dot + "Available for remote & freelance work" (mono 12px, var(--text), layer-2, edge, radius 999px) */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[999px] bg-[#1F2833] border border-[rgba(197,198,199,0.10)] font-mono text-[12px] text-[#C5C6C7] select-none"
              style={{ boxShadow: 'var(--edge)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#66FCF1] opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#66FCF1]" />
              </span>
              <span>Available for remote &amp; freelance work</span>
            </div>
            <span className="hidden sm:inline text-xs font-mono text-[rgba(197,198,199,0.7)] tracking-wider uppercase">
              · Jade Polo · Blueprint
            </span>
          </div>

          {/* Dominant Headline: "FRONTEND DEVELOPER" with restored aria-hidden outline echo */}
          <div className="relative select-none">
            {/* Outline duplicate behind: 1px rgba(102,252,241,0.3) stroke, offset 5px down and right, text-shadow glow */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 translate-x-[5px] translate-y-[5px] font-['Barlow_Condensed'] font-bold uppercase leading-[0.92] tracking-tight text-[clamp(2.75rem,7.5vw,5.5rem)] pointer-events-none select-none"
              style={{
                WebkitTextStroke: '1px rgba(102, 252, 241, 0.3)',
                color: 'transparent',
                textShadow: '0 0 40px rgba(102, 252, 241, 0.25)',
              }}
            >
              FRONTEND DEVELOPER
            </div>

            {/* Main Headline (stays solid #66FCF1) */}
            <h1 className="relative z-10 font-['Barlow_Condensed'] font-bold uppercase leading-[0.92] text-[#66FCF1] tracking-tight text-[clamp(2.75rem,7.5vw,5.5rem)]">
              FRONTEND DEVELOPER
            </h1>
          </div>

          {/* Supporting line: max-width about 36ch in var(--text) */}
          <p className="font-['Barlow'] text-xl sm:text-2xl md:text-2xl text-[#C5C6C7] font-medium leading-snug max-w-[36ch]">
            From real-world problems to practical digital products.
          </p>

          {/* Supporting paragraph: readable width (max-width about 52ch) */}
          <p className="font-['Barlow'] text-base sm:text-base text-[#C5C6C7] max-w-[52ch] leading-[1.6]">
            {PORTFOLIO_DATA.hero.supportingCopy}
          </p>

          {/* CTAs: Primary button raised with glow-accent on hover */}
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#projects"
              className="touch-target px-7 py-3 rounded-[12px] bg-[#66FCF1] text-[#0B0C10] font-['Barlow'] font-semibold text-base transition-all duration-200 focus-ring hover:bg-[#66FCF1]/95"
              style={{
                boxShadow: 'var(--shadow-1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--glow-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-1)';
              }}
            >
              <span>{PORTFOLIO_DATA.hero.primaryCta}</span>
              <ArrowDown className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="touch-target px-7 py-3 rounded-[12px] bg-transparent border border-[#66FCF1] text-[#66FCF1] font-['Barlow'] font-medium text-base hover:bg-[#66FCF1]/10 transition-colors focus-ring"
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
