import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/iesContent';
import { analytics } from '../utils/analytics';

interface DisclaimerBadgeProps {
  compact?: boolean;
}

export const DisclaimerBadge: React.FC<DisclaimerBadgeProps> = ({ compact = false }) => {
  const handleClick = () => {
    analytics.track('official_information_click', { source: 'disclaimer_badge' });
  };

  if (compact) {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-brand-navy font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
        <span>Independent Applicant Guide</span>
        <span className="text-slate-300">•</span>
        <a 
          href={OFFICIAL_LINKS.website} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleClick}
          className="text-brand-orange hover:underline inline-flex items-center gap-0.5 font-semibold"
        >
          Verify at Copernicus Berlin
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 flex items-start gap-3">
      <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0 mt-0.5">
        <ShieldCheck className="w-5 h-5" />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-brand-navy text-xs uppercase tracking-wider">
          Official Information Notice & Factual Disclaimer
        </p>
        <p className="text-xs text-slate-600 leading-relaxed">
          This prototype is an applicant-facing preparation and exploration tool. It does not replace official eligibility decisions, deadlines, or requirements established by Copernicus Berlin e.V. Always verify terms directly on the official portal.
        </p>
        <div className="pt-1">
          <a
            href={OFFICIAL_LINKS.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors"
          >
            Visit Copernicus Berlin Official Portal
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
