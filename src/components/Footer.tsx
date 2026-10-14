import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--layer-0)] relative text-[#C5C6C7]" aria-label="Site Footer">
      {/* 1px Gradient Divider on Top (transparent, accent-2 at 40%, transparent) */}
      <div
        className="w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(69, 162, 158, 0.4), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[rgba(197,198,199,0.10)]">
          
          {/* Identity & Descriptor */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-['Barlow'] text-base font-semibold text-white tracking-tight">
                JADE POLO
              </span>
              <span className="text-[#45A29E]" aria-hidden="true">·</span>
              <span className="font-mono text-xs tracking-wider uppercase text-[#C5C6C7]/80">
                {PORTFOLIO_DATA.owner.businessBrand}
              </span>
            </div>
            <p className="font-['Barlow'] text-xs text-[#C5C6C7]/80">
              {PORTFOLIO_DATA.owner.brandDescriptor}
            </p>
          </div>

          {/* Working internal navigation links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
              {PORTFOLIO_DATA.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="touch-target min-h-[44px] px-1 inline-flex items-center text-[#C5C6C7] hover:text-[#66FCF1] transition-colors focus-ring rounded-[12px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 44px Raised Back to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="touch-target w-11 h-11 min-w-[44px] min-h-[44px] rounded-[12px] bg-[var(--layer-2)] border border-[rgba(197,198,199,0.12)] shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] hover:border-[#66FCF1] text-[var(--text)] hover:text-[#66FCF1] flex items-center justify-center transition-all cursor-pointer focus-ring shrink-0"
            aria-label="Back to top of page"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Lower row: verified links & programmatic year */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[rgba(197,198,199,0.85)]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="touch-target min-h-[44px] inline-flex items-center hover:text-[#66FCF1] transition-colors focus-ring rounded-[12px]"
            >
              {PORTFOLIO_DATA.contact.email}
            </a>
            <span aria-hidden="true" className="text-[#45A29E]">·</span>
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jade Polo on LinkedIn (opens in a new tab)"
              className="touch-target min-h-[44px] inline-flex items-center hover:text-[#66FCF1] transition-colors focus-ring rounded-[12px]"
            >
              LinkedIn Profile
            </a>
            <span aria-hidden="true" className="text-[#45A29E]">·</span>
            <a
              href="#contact"
              className="touch-target min-h-[44px] inline-flex items-center hover:text-[#66FCF1] transition-colors focus-ring rounded-[12px]"
            >
              Résumé on Request
            </a>
          </div>

          <div>
            <span className="font-['Barlow'] text-xs text-[#C5C6C7]/80">
              © {currentYear} JADE POLO · {PORTFOLIO_DATA.owner.businessBrand}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
