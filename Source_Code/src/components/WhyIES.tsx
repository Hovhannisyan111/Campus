import React from 'react';
import { Globe2, HeartHandshake, Briefcase, Lightbulb, Compass, Check } from 'lucide-react';
import { BENEFITS } from '../data/iesContent';

const benefitIcons: Record<string, React.ReactNode> = {
  Globe2: <Globe2 className="w-5 h-5 text-brand-orange" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-blue-600" />,
  Briefcase: <Briefcase className="w-5 h-5 text-emerald-600" />,
  Lightbulb: <Lightbulb className="w-5 h-5 text-amber-500" />,
  Compass: <Compass className="w-5 h-5 text-purple-600" />
};

export const WhyIES: React.FC = () => {
  return (
    <section id="why-ies" className="py-20 bg-brand-cream/40 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-200/80 text-brand-navy font-bold text-xs uppercase tracking-wider">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-dark tracking-tight">
            Why University Students Choose IES
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A balanced scholarship model centered around academic enrichment, intercultural leadership, and tangible contribution.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-white p-6 border border-slate-200 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  {benefitIcons[item.icon]}
                </div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-brand-navy-dark">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 text-xs text-brand-orange font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Student-driven engagement</span>
              </div>
            </div>
          ))}

          {/* Special Card: Campaign Ethos */}
          <div className="rounded-xl bg-gradient-to-br from-brand-navy to-brand-navy-dark p-6 text-white shadow-elevated flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">
                Campaign Perspective
              </span>
              <h3 className="text-xl font-bold">
                “Your semester can be more than a semester.”
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transform a study abroad opportunity into an incubator for intercultural teamwork, practical problem-solving, and lifelong community ties.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">Copernicus Berlin</span>
              <a 
                href="#fit-checker" 
                className="text-xs font-bold text-brand-orange hover:text-orange-300 transition-colors"
              >
                Assess your fit →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
