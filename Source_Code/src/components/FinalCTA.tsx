import React from 'react';
import { ArrowRight, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/iesContent';
import { analytics } from '../utils/analytics';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-light text-white relative overflow-hidden">
      {/* Subtle glow circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-brand-orange">
          <ShieldCheck className="w-4 h-4" />
          <span>Copernicus Berlin e.V. • International Excellence Scholarship</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to explore what IES could mean for you?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Take the next step in your university journey. Access the official Copernicus Berlin portal to consult current intake deadlines, eligibility guidelines, and application procedures.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={OFFICIAL_LINKS.application}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.track('application_click', { source: 'final_cta_primary' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <span>Proceed to Official Application</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={OFFICIAL_LINKS.scholarships}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.track('official_information_click', { source: 'final_cta_secondary' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 transition-all"
          >
            <span>Official IES Information</span>
            <ArrowRight className="w-4 h-4 text-brand-orange" />
          </a>
        </div>

        {/* Guarantees */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct link to Copernicus Berlin e.V.</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Open viewing access for selection committee</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Independent candidate submission prototype</span>
          </span>
        </div>

      </div>
    </section>
  );
};
