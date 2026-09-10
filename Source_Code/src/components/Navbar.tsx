import React, { useState } from 'react';
import { Menu, X, Sparkles, Activity, ExternalLink } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/iesContent';
import { analytics } from '../utils/analytics';

interface NavbarProps {
  onOpenAI: () => void;
  onOpenAnalytics: () => void;
  analyticsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAI, onOpenAnalytics, analyticsCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'What is IES?', href: '#what-is-ies' },
    { label: 'Why IES?', href: '#why-ies' },
    { label: 'Applicant Journey', href: '#journey' },
    { label: 'Fit Checker', href: '#fit-checker' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (label: string) => {
    setMobileMenuOpen(false);
    analytics.track('explore_ies_click', { section: label });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Tag */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <img
                src="/logo_horizontal.png"
                alt="Copernicus Berlin e.V."
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
              <div className="hidden sm:block border-l border-slate-200 pl-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-brand-orange">
                  IES Assistant
                </span>
                <span className="block text-[11px] text-slate-500 font-medium">
                  Candidate Prototype
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="text-sm font-medium text-slate-700 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* AI Assistant Prototype Button */}
            <button
              onClick={() => {
                onOpenAI();
                analytics.track('ai_assistant_opened');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-orange/30 bg-orange-50/50 text-xs font-semibold text-brand-orange hover:bg-orange-100/60 transition-colors"
              title="Explore Controlled Knowledge AI Prototype"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>IES Assistant AI</span>
            </button>

            {/* Analytics HUD trigger */}
            <button
              onClick={onOpenAnalytics}
              className="relative p-2 rounded-lg text-slate-500 hover:text-brand-navy hover:bg-slate-100 transition-colors"
              title="View Analytics Event Feed"
              aria-label="Toggle Analytics Activity Feed"
            >
              <Activity className="w-4 h-4" />
              {analyticsCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[9px] font-bold text-white">
                  {analyticsCount > 99 ? '99+' : analyticsCount}
                </span>
              )}
            </button>

            {/* Primary Action CTA */}
            <a
              href="#fit-checker"
              onClick={() => analytics.track('fit_checker_started', { source: 'navbar' })}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            >
              Check Your Fit
            </a>

            {/* External Official Portal */}
            <a
              href={OFFICIAL_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.track('official_information_click', { source: 'navbar_portal' })}
              className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-brand-navy hover:text-brand-orange transition-colors"
              title="Go to official Copernicus Berlin website"
            >
              <span>Official Site</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAnalytics}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="View Analytics"
            >
              <Activity className="w-5 h-5 text-brand-orange" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-orange hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-brand-orange border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAI();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-orange-50 border border-brand-orange/30 text-brand-orange font-semibold text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Open AI Assistant Prototype</span>
            </button>

            <a
              href="#fit-checker"
              onClick={() => {
                setMobileMenuOpen(false);
                analytics.track('fit_checker_started', { source: 'mobile_nav' });
              }}
              className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand-orange text-white font-semibold text-sm shadow-sm"
            >
              Check Your Fit
            </a>

            <a
              href={OFFICIAL_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.track('official_information_click', { source: 'mobile_nav_external' })}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-brand-navy"
            >
              <span>Visit Official Copernicus Berlin Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
