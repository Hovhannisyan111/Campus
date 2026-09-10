import React from 'react';
import { ExternalLink, Sparkles, Activity, ShieldAlert } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/iesContent';
import { analytics } from '../utils/analytics';

interface FooterProps {
  onOpenAI: () => void;
  onOpenAnalytics: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAI, onOpenAnalytics }) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo_horizontal.png"
                alt="Copernicus Berlin e.V."
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              <strong>IES Applicant Assistant</strong> is a candidate-created prototype for the Copernicus Berlin Skills Challenge. Designed to introduce the International Excellence Scholarship to university students through clear information architecture and interactive exploration.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-brand-orange bg-orange-50 px-2.5 py-1 rounded border border-orange-200">
                Skills Challenge Submission • IT / Web Application Track
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Prototype Sections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#what-is-ies" className="hover:text-brand-orange transition-colors">
                  What is IES? (Core Pillars)
                </a>
              </li>
              <li>
                <a href="#why-ies" className="hover:text-brand-orange transition-colors">
                  Why IES? (Student Value)
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-brand-orange transition-colors">
                  Applicant Journey
                </a>
              </li>
              <li>
                <a href="#fit-checker" className="hover:text-brand-orange transition-colors">
                  Interactive Fit Checker
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-orange transition-colors">
                  FAQ & Clarifications
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Reviewer & Evaluation Tools */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              Reviewer & Selection Tools
            </h4>
            <div className="space-y-2">
              <button
                onClick={() => {
                  onOpenAI();
                  analytics.track('ai_assistant_opened', { source: 'footer' });
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-orange-50/60 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-brand-orange transition-colors text-left"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Controlled AI Knowledge Assistant</span>
                </span>
                <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-600">Demo</span>
              </button>

              <button
                onClick={onOpenAnalytics}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-brand-navy transition-colors text-left"
              >
                <span className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-brand-navy" />
                  <span>Inspect Live Analytics Event Feed</span>
                </span>
                <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-600">Live</span>
              </button>

              <a
                href={OFFICIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.track('official_information_click', { source: 'footer_portal' })}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-semibold transition-colors"
              >
                <span>Copernicus Berlin Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Factual Disclaimer Banner */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
            <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Factual Integrity & Non-Affiliation Statement:</strong> This website is an independent assessment prototype designed for the Copernicus Berlin Skills Challenge. It is not an official Copernicus Berlin e.V. admissions decision portal. Official eligibility rules, application requirements, deadlines, and benefits are determined exclusively by Copernicus Berlin and can be consulted at{' '}
              <a 
                href={OFFICIAL_LINKS.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-orange hover:underline font-semibold"
              >
                copernicusberlin.org
              </a>.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 font-medium">
            <span>© {new Date().getFullYear()} IES Applicant Assistant Prototype. Prepared for Copernicus Berlin Skills Challenge.</span>
            <span>Study abroad is only the beginning.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
