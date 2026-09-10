import React from 'react';
import { GraduationCap, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PILLARS } from '../data/iesContent';
import { analytics } from '../utils/analytics';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6 text-brand-orange" />,
  Users: <Users className="w-6 h-6 text-blue-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-emerald-600" />
};

export const WhatIsIES: React.FC = () => {
  return (
    <section id="what-is-ies" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100/70 text-brand-orange-dark font-bold text-xs uppercase tracking-wider">
            Core Programme Concept
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-dark tracking-tight">
            What is the International Excellence Scholarship?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Organised by <strong className="text-brand-navy">Copernicus Berlin e.V.</strong>, IES redefines the traditional exchange semester by integrating academic university coursework with an international peer community and practical contribution.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="group rounded-2xl bg-brand-cream/60 p-8 border border-slate-200/80 hover:border-brand-orange/40 hover:bg-white hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-subtle group-hover:scale-105 transition-transform">
                    {iconMap[pillar.icon]}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">
                    {pillar.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-navy-dark group-hover:text-brand-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <ul className="pt-2 space-y-2 border-t border-slate-200/60">
                  {pillar.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-navy">
                <span>Pillar Component</span>
                <span className="text-brand-orange">Verified Concept ✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fast takeaway callout */}
        <div className="mt-12 rounded-xl p-6 bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-brand-navy">
              10-Second Summary for University Applicants
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl">
              IES offers a semester in Berlin combining university classes + living and collaborating with an international cohort + actively applying your skills in meaningful projects.
            </p>
          </div>
          <a
            href="#fit-checker"
            onClick={() => analytics.track('fit_checker_started', { source: 'what_is_ies_banner' })}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-semibold shadow-sm transition-all"
          >
            <span>See If It Fits You</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
