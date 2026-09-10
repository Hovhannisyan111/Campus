import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, HelpCircle, ExternalLink, HelpCircle as QuestionIcon } from 'lucide-react';
import { FAQ_DATA } from '../data/faq';
import { OFFICIAL_LINKS } from '../data/iesContent';
import { analytics } from '../utils/analytics';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Concept' },
    { id: 'engagement', label: 'Community Engagement' },
    { id: 'eligibility', label: 'Eligibility & Requirements' },
    { id: 'application', label: 'Application Process' },
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter(item => item.category === selectedCategory);

  const toggleAccordion = (id: string, questionText: string) => {
    const isOpen = openIds.includes(id);
    if (isOpen) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
      analytics.track('faq_opened', { id, question: questionText });
    }
  };

  return (
    <section id="faq" className="py-20 bg-brand-cream/30 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-brand-navy font-bold text-xs uppercase tracking-wider">
            <QuestionIcon className="w-3.5 h-3.5" />
            Verified Knowledge & Clarifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, honest answers about IES. We explicitly distinguish verified facts from areas requiring direct consultation with Copernicus Berlin.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-brand-orange text-white shadow-subtle'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? 'bg-white border-brand-orange/40 shadow-card ring-1 ring-brand-orange/10'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id, faq.question)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-brand-navy-dark">
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-slate-400 p-1">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-orange" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-3">
                    <p>{faq.answer}</p>

                    <div className="flex items-center justify-between text-xs pt-2">
                      <div className="flex items-center gap-1.5">
                        {faq.isOfficialVerified ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                            <CheckCircle className="w-3.5 h-3.5" />
                            Official IES Concept Verified
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-[11px]">
                            <HelpCircle className="w-3.5 h-3.5" />
                            Consult Copernicus Berlin for Cycle Specifics
                          </span>
                        )}
                      </div>

                      {faq.officialSourceUrl && (
                        <a
                          href={faq.officialSourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => analytics.track('official_information_click', { source: 'faq_item', id: faq.id })}
                          className="text-brand-orange hover:underline inline-flex items-center gap-1 font-semibold text-[11px]"
                        >
                          Copernicus Portal
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Missing question note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Have a specific question not covered above?{' '}
          <a
            href={OFFICIAL_LINKS.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.track('official_information_click', { source: 'faq_footer_note' })}
            className="text-brand-orange font-semibold hover:underline"
          >
            Visit the official Copernicus Berlin inquiry page
          </a>
        </div>

      </div>
    </section>
  );
};
