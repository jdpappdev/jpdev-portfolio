import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#66FCF1] focus:text-[#0B0C10] focus:font-semibold focus:rounded-[6px] focus-ring"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#0B0C10]/95 backdrop-blur-md border-b border-[rgba(197,198,199,0.12)] py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Identity Mark: "JADE POLO" */}
            <a
              href="#"
              className="group flex items-center gap-2.5 focus-ring rounded-[6px] px-2 py-1.5 -ml-2 touch-target"
              aria-label="JADE POLO — Portfolio Home"
            >
              <span className="font-['Barlow'] font-semibold text-lg sm:text-xl text-white tracking-tight group-hover:text-[#66FCF1] transition-colors">
                JADE POLO
              </span>
              <span className="text-xs font-mono text-[rgba(197,198,199,0.8)] tracking-wider uppercase hidden sm:inline">
                · Blueprint
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm font-['Barlow'] font-medium text-[#C5C6C7] hover:text-[#66FCF1] transition-colors py-2 px-1 focus-ring rounded-[6px]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Résumé Action: Configured truthfully */}
              <div className="pl-4 border-l border-[rgba(197,198,199,0.12)] flex items-center">
                {PORTFOLIO_DATA.owner.resumeUrl ? (
                  <a
                    href={PORTFOLIO_DATA.owner.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-mono font-medium text-[#66FCF1] border border-[#66FCF1] hover:bg-[#66FCF1]/10 transition-colors focus-ring min-h-[44px]"
                  >
                    <span>Résumé</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-mono font-medium text-[#C5C6C7] border border-[rgba(197,198,199,0.12)] hover:border-[#45A29E] hover:text-[#66FCF1] transition-colors focus-ring min-h-[44px]"
                    title="Résumé available upon verified inquiry"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#45A29E]" aria-hidden="true" />
                    <span>Résumé (On Request)</span>
                  </a>
                )}
              </div>
            </nav>

            {/* Mobile menu trigger with 44px min touch target */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="touch-target p-2.5 rounded-[6px] text-[#C5C6C7] hover:text-[#66FCF1] hover:bg-[#1F2833] transition-colors focus-ring"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'Close main navigation' : 'Open main navigation'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-b border-[rgba(197,198,199,0.12)] bg-[#0B0C10]/98 backdrop-blur-xl px-4 py-5 shadow-2xl transition-all"
          >
            <nav aria-label="Mobile Navigation" className="space-y-3">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center min-h-[44px] px-3 py-2.5 rounded-[6px] text-base font-['Barlow'] font-medium text-[#C5C6C7] hover:text-[#66FCF1] hover:bg-[#1F2833] transition-colors focus-ring"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[rgba(197,198,199,0.12)]">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-[6px] text-xs font-mono text-[#66FCF1] bg-[#1F2833] hover:bg-[#263241] border border-[rgba(197,198,199,0.12)] transition-colors focus-ring"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#45A29E]" aria-hidden="true" />
                    <span>Résumé (Available on Request)</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
