import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Track active section for 2px accent underline
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120;
      let currentSection = '';

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = item.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#66FCF1] focus:text-[#0B0C10] focus:font-semibold focus:rounded-[12px] focus-ring"
      >
        Skip to main content
      </a>

      {/* Floating Bar: sticky, top 12px, centered */}
      <div className="sticky top-[12px] z-40 w-full max-w-5xl mx-auto px-3 sm:px-6 pointer-events-none">
        <header
          className="pointer-events-auto rounded-[14px] floating-header-bar border border-[rgba(197,198,199,0.10)] px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-200"
          aria-label="Main Header"
        >
          <div className="flex items-center justify-between">
            {/* Identity Mark: "JADE POLO" */}
            <a
              href="#"
              className="group flex items-center gap-2 focus-ring rounded-[12px] px-2 py-1.5 -ml-2 touch-target"
              aria-label="Jade Polo — Portfolio Home"
            >
              <span className="font-['Barlow'] font-semibold text-base sm:text-lg text-white tracking-tight group-hover:text-[#66FCF1] transition-colors">
                JADE POLO
              </span>
              <span className="text-xs font-mono text-[rgba(197,198,199,0.7)] tracking-wider uppercase hidden sm:inline">
                · Blueprint
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
              <ul className="flex items-center gap-5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.label} className="relative">
                      <a
                        href={item.href}
                        className={`text-sm font-['Barlow'] py-1.5 px-2 focus-ring rounded-[12px] transition-colors ${
                          isActive
                            ? 'text-[#66FCF1] font-semibold'
                            : 'text-[#C5C6C7] hover:text-[#66FCF1] font-medium'
                        }`}
                      >
                        {item.label}
                      </a>
                      {/* Active link gets a 2px accent underline */}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#66FCF1] rounded-full transition-all duration-200"
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Résumé Action: Ghost Button */}
              <div className="pl-4 border-l border-[rgba(197,198,199,0.10)] flex items-center">
                {PORTFOLIO_DATA.owner.resumeUrl ? (
                  <a
                    href={PORTFOLIO_DATA.owner.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] text-xs font-mono font-medium text-[#66FCF1] bg-transparent hover:bg-[#66FCF1]/10 border border-transparent hover:border-[#66FCF1]/30 transition-colors focus-ring min-h-[44px]"
                    aria-label="Jade Polo Résumé (opens in a new tab)"
                  >
                    <span>Résumé</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[12px] text-xs font-mono font-medium text-[#C5C6C7] bg-transparent hover:text-[#66FCF1] hover:bg-[#66FCF1]/10 border border-transparent hover:border-[#66FCF1]/20 transition-colors focus-ring min-h-[44px]"
                    title="Résumé available upon verified inquiry"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#45A29E]" aria-hidden="true" />
                    <span>Résumé (On Request)</span>
                  </a>
                )}
              </div>
            </nav>

            {/* Mobile Menu Trigger with min 44px touch target */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="touch-target p-2 rounded-[12px] text-[#C5C6C7] hover:text-[#66FCF1] hover:bg-[#1F2833]/60 transition-colors focus-ring"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'Close main navigation' : 'Open main navigation'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden mt-3 pt-3 border-t border-[rgba(197,198,199,0.10)] space-y-2 animate-in fade-in duration-150"
            >
              <nav aria-label="Mobile Navigation" className="space-y-1">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={handleLinkClick}
                          className={`flex items-center justify-between min-h-[44px] px-3 py-2 rounded-[12px] text-sm font-['Barlow'] transition-colors focus-ring ${
                            isActive
                              ? 'text-[#66FCF1] font-semibold bg-[#1F2833]/80'
                              : 'text-[#C5C6C7] hover:text-[#66FCF1] hover:bg-[#1F2833]/50 font-medium'
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#66FCF1]" aria-hidden="true" />}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="pt-2 border-t border-[rgba(197,198,199,0.10)]">
                  <a
                    href="#contact"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded-[12px] text-xs font-mono text-[#66FCF1] bg-[#1F2833]/60 hover:bg-[#1F2833] border border-[rgba(197,198,199,0.10)] transition-colors focus-ring"
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
      </div>
    </>
  );
};
