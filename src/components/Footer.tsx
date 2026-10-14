import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C10] border-t border-[rgba(197,198,199,0.12)] py-12 text-[#C5C6C7]" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[rgba(197,198,199,0.12)]">
          
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
                    className="touch-target px-1 text-[#C5C6C7] hover:text-[#66FCF1] transition-colors focus-ring rounded-[6px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="touch-target inline-flex items-center gap-1.5 text-xs font-mono text-[#C5C6C7] hover:text-[#66FCF1] transition-colors p-2 rounded-[6px] focus-ring"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* Lower row: verified links & programmatic year */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[rgba(197,198,199,0.85)]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="touch-target py-1 hover:text-[#66FCF1] transition-colors focus-ring rounded-[6px]"
            >
              {PORTFOLIO_DATA.contact.email}
            </a>
            <span aria-hidden="true" className="text-[#45A29E]">·</span>
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jade Polo on LinkedIn (opens in a new tab)"
              className="touch-target py-1 hover:text-[#66FCF1] transition-colors focus-ring rounded-[6px]"
            >
              LinkedIn Profile
            </a>
            <span aria-hidden="true" className="text-[#45A29E]">·</span>
            <a
              href="#contact"
              className="touch-target py-1 hover:text-[#66FCF1] transition-colors focus-ring rounded-[6px]"
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
