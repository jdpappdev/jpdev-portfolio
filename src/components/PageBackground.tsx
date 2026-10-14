import React, { useEffect, useRef } from 'react';

export const PageBackground: React.FC = () => {
  const glowWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (glowWrapperRef.current) {
            // Glows move at ~0.1x scroll speed via transform
            const scrollOffset = window.scrollY * 0.1;
            glowWrapperRef.current.style.transform = `translate3d(0, ${scrollOffset}px, 0)`;
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
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Grid: 48px cells at ~5% opacity with radial mask strongest center-right and fading toward edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(102, 252, 241, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(102, 252, 241, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          WebkitMaskImage: 'radial-gradient(ellipse at 65% 38%, #000 25%, transparent 78%)',
          maskImage: 'radial-gradient(ellipse at 65% 38%, #000 25%, transparent 78%)',
        }}
      />

      {/* 2. Blurred Radial Glows with slow transform drift and 0.1x scroll parallax */}
      <div ref={glowWrapperRef} className="absolute inset-0 transition-transform duration-75 ease-out will-change-transform">
        {/* Glow A: large radial (~900px), rgba(102, 252, 241, 0.16), centered behind right end of headline */}
        <div
          className="absolute -top-40 left-[25%] sm:left-[38%] lg:left-[45%] w-[900px] h-[900px] rounded-full drift-glow-1"
          style={{
            background: 'radial-gradient(circle, rgba(102, 252, 241, 0.16) 0%, rgba(102, 252, 241, 0.06) 45%, rgba(102, 252, 241, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Glow B: rgba(69, 162, 158, 0.12) at the bottom-right */}
        <div
          className="absolute -bottom-36 -right-36 w-[800px] h-[800px] rounded-full drift-glow-2"
          style={{
            background: 'radial-gradient(circle, rgba(69, 162, 158, 0.12) 0%, rgba(69, 162, 158, 0.04) 45%, rgba(69, 162, 158, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* 3. Grain: inline SVG feTurbulence data URI at ~3.5% opacity */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 4. Vignette: fading to about 0.4 at the edges */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.40) 100%)',
        }}
      />
    </div>
  );
};
