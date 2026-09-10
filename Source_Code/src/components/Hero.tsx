import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { BRAND_SUBTITLE } from '../data/iesContent';
import { analytics } from '../utils/analytics';
import { DisclaimerBadge } from './DisclaimerBadge';

interface HeroProps {
  onOpenAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAI }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-orange-50/40 via-white to-brand-cream border-b border-slate-200/70">
      {/* Subtle geometric background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-brand-navy/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <DisclaimerBadge compact />
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy-dark leading-[1.12]">
                Study abroad is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange-dark">
                  only the beginning.
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              {BRAND_SUBTITLE}
            </p>

            {/* Value Proposition Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-subtle">
                <GraduationCap className="w-4 h-4 text-brand-orange" />
                <span>Berlin University Exchange</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-subtle">
                <Users className="w-4 h-4 text-blue-600" />
                <span>International Cohort</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-subtle">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>Real Community Impact</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#fit-checker"
                onClick={() => analytics.track('fit_checker_started', { source: 'hero_primary_cta' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>Check Your Fit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#what-is-ies"
                onClick={() => analytics.track('explore_ies_click', { source: 'hero_secondary_cta' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-brand-navy font-semibold text-base border border-slate-300 shadow-subtle transition-all"
              >
                <span>Explore Programme</span>
              </a>

              <button
                type="button"
                onClick={onOpenAI}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-brand-orange font-semibold text-sm border border-brand-orange/30 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ask AI Assistant</span>
              </button>
            </div>

            {/* Informational assurance note */}
            <p className="text-xs text-slate-600 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Independent applicant assistant prototype • Zero fake statistics • Fact-verified architecture</span>
            </p>
          </div>

          {/* Right Hero Column: Visual Concept Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-elevated">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-brand-orange animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    IES Model Overview
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                  Berlin, Germany
                </span>
              </div>

              {/* Equation Representation */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Exchange Semester</h4>
                    <p className="text-xs text-slate-500">Academic curriculum at Berlin higher education</p>
                  </div>
                </div>

                <div className="flex justify-center -my-2 text-slate-300 font-bold text-lg">+</div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">International Community</h4>
                    <p className="text-xs text-slate-500">Cohort living & intercultural peer dialogue</p>
                  </div>
                </div>

                <div className="flex justify-center -my-2 text-slate-300 font-bold text-lg">+</div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Community Engagement</h4>
                    <p className="text-xs text-slate-500">Applied skills in IT, research, media & leadership</p>
                  </div>
                </div>
              </div>

              {/* Formula Result */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                    The Outcome
                  </span>
                  <span className="text-sm font-bold text-brand-navy">
                    Impactful International Development
                  </span>
                </div>
                <a
                  href="#fit-checker"
                  className="text-xs font-semibold text-brand-orange hover:text-brand-orange-dark flex items-center gap-1 group"
                >
                  See your fit
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
