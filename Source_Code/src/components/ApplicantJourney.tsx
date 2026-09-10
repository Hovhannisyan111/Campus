import React from 'react';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { JOURNEY_STEPS, OFFICIAL_LINKS } from '../data/iesContent';
import { analytics } from '../utils/analytics';

export const ApplicantJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider">
            Applicant Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-dark tracking-tight">
            The Applicant Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A transparent, step-by-step path from first discovering IES to submitting your official application.
          </p>
        </div>

        {/* Steps Stepper */}
        <div className="mt-14 relative">
          
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {JOURNEY_STEPS.map((item) => {
              const isCurrentInteractiveStep = item.step === '03';
              const isFinalStep = item.step === '05';

              return (
                <div
                  key={item.step}
                  className={`rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                    isCurrentInteractiveStep
                      ? 'bg-orange-50/70 border-brand-orange shadow-card ring-2 ring-brand-orange/20'
                      : isFinalStep
                      ? 'bg-blue-50/50 border-blue-200'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-xs ${
                        isCurrentInteractiveStep 
                          ? 'bg-brand-orange text-white' 
                          : isFinalStep 
                          ? 'bg-brand-navy text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.step}
                      </span>
                      {isCurrentInteractiveStep && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange bg-orange-100 px-2 py-0.5 rounded">
                          Interactive Tool
                        </span>
                      )}
                      {isFinalStep && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                          Official Portal
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-brand-navy">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">
                        {item.shortDesc}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    {item.step === '03' ? (
                      <a
                        href="#fit-checker"
                        onClick={() => analytics.track('fit_checker_started', { source: 'journey_card' })}
                        className="text-xs font-bold text-brand-orange hover:text-brand-orange-dark flex items-center gap-1"
                      >
                        Launch Fit Checker
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    ) : item.step === '04' ? (
                      <a
                        href="#faq"
                        onClick={() => analytics.track('explore_ies_click', { section: 'journey_faq' })}
                        className="text-xs font-semibold text-slate-600 hover:text-brand-navy flex items-center gap-1"
                      >
                        Read FAQ
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    ) : item.step === '05' ? (
                      <a
                        href={OFFICIAL_LINKS.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => analytics.track('official_information_click', { source: 'journey_official_apply' })}
                        className="text-xs font-bold text-brand-navy hover:text-brand-orange flex items-center gap-1"
                      >
                        Copernicus Portal
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        Explore on page
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
