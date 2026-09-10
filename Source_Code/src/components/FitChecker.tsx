import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  ExternalLink, 
  AlertCircle, 
  Sparkles, 
  HelpCircle,
  Award,
  Layers
} from 'lucide-react';
import { FIT_QUESTIONS, evaluateFit } from '../data/eligibility';
import { OFFICIAL_LINKS } from '../data/iesContent';
import { FitResultProfile } from '../types';
import { analytics } from '../utils/analytics';

export const FitChecker: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [resultProfile, setResultProfile] = useState<FitResultProfile | null>(null);

  const activeQuestion = FIT_QUESTIONS[currentStep];
  const progressPercent = Math.round(((currentStep + 1) / FIT_QUESTIONS.length) * 100);

  const handleSelectOption = (optionId: string) => {
    setValidationError(null);

    if (activeQuestion.type === 'single') {
      setAnswers(prev => ({
        ...prev,
        [activeQuestion.id]: optionId
      }));
    } else {
      // Multiple selection
      const currentSelections = (answers[activeQuestion.id] as string[]) || [];
      const updated = currentSelections.includes(optionId)
        ? currentSelections.filter(id => id !== optionId)
        : [...currentSelections, optionId];

      setAnswers(prev => ({
        ...prev,
        [activeQuestion.id]: updated
      }));
    }
  };

  const handleNext = () => {
    const currentAnswer = answers[activeQuestion.id];
    const isAnswered = activeQuestion.type === 'single'
      ? Boolean(currentAnswer)
      : Array.isArray(currentAnswer) && currentAnswer.length > 0;

    if (activeQuestion.required && !isAnswered) {
      setValidationError('Please select at least one option before proceeding.');
      return;
    }

    setValidationError(null);

    if (currentStep < FIT_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Completed!
      const profile = evaluateFit(answers);
      setResultProfile(profile);
      setIsCompleted(true);
      analytics.track('fit_checker_completed', {
        answers,
        resultTitle: profile.title,
        matchedTracks: profile.matchedTracks
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setValidationError(null);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setValidationError(null);
    setIsCompleted(false);
    setResultProfile(null);
    analytics.track('fit_checker_started', { reason: 'restart' });
  };

  return (
    <section id="fit-checker" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-brand-orange-dark font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Candidate Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy-dark tracking-tight">
            Check Your Potential Fit for IES
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Take 2 minutes to evaluate how your university background, international goals, and practical skills align with the scholarship format in Berlin.
          </p>
        </div>

        {/* Fit Checker Container Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-elevated overflow-hidden">
          
          {!isCompleted ? (
            <div>
              {/* Card Header & Progress Bar */}
              <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>Step {currentStep + 1} of {FIT_QUESTIONS.length}</span>
                  <span className="text-brand-orange font-bold">{progressPercent}% Completed</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-brand-orange h-full rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Question Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-dark leading-snug">
                    {activeQuestion.title}
                  </h3>
                  {activeQuestion.subtitle && (
                    <p className="text-sm text-slate-500 mt-1.5">
                      {activeQuestion.subtitle}
                    </p>
                  )}
                  {activeQuestion.type === 'multiple' && (
                    <span className="inline-block mt-2 text-xs font-semibold px-2.5 py-0.5 rounded bg-orange-50 text-brand-orange border border-orange-200">
                      Multi-select enabled (choose all that apply)
                    </span>
                  )}
                </div>

                {/* Validation Error Callout */}
                {validationError && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Options List */}
                <div className="space-y-3">
                  {activeQuestion.options.map((option) => {
                    const isSelected = activeQuestion.type === 'single'
                      ? answers[activeQuestion.id] === option.id
                      : ((answers[activeQuestion.id] as string[]) || []).includes(option.id);

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSelectOption(option.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                          isSelected
                            ? 'border-brand-orange bg-orange-50/60 ring-2 ring-brand-orange/20'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          activeQuestion.type === 'single' ? 'rounded-full' : 'rounded-md'
                        } ${
                          isSelected 
                            ? 'bg-brand-orange text-white' 
                            : 'border border-slate-300 bg-white'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>

                        <div className="space-y-0.5">
                          <p className={`text-sm font-semibold ${
                            isSelected ? 'text-brand-navy-dark' : 'text-slate-800'
                          }`}>
                            {option.label}
                          </p>
                          {option.description && (
                            <p className="text-xs text-slate-500">
                              {option.description}
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Nav Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                      currentStep === 0
                        ? 'text-slate-300 cursor-not-allowed'
                        : 'text-slate-600 hover:text-brand-navy hover:bg-slate-100'
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:shadow"
                  >
                    <span>{currentStep === FIT_QUESTIONS.length - 1 ? 'See Assessment Result' : 'Continue'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Result Header Badge */}
              <div className="space-y-3 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Evaluation Generated</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy-dark">
                  {resultProfile?.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {resultProfile?.summary}
                </p>
              </div>

              {/* Recommendation Box */}
              <div className="p-5 rounded-xl bg-orange-50/70 border border-orange-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange-dark flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  Potential Fit Guidance
                </h4>
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  {resultProfile?.recommendation}
                </p>
              </div>

              {/* Matched Skill Tracks */}
              {resultProfile?.matchedTracks && resultProfile.matchedTracks.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-slate-400" />
                    Relevant Contribution Tracks Based on Your Strengths:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {resultProfile.matchedTracks.map((track, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-brand-navy shadow-subtle"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                        {track}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Next Steps */}
              <div className="space-y-3 border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Recommended Next Steps:
                </h4>
                <ul className="space-y-2">
                  {resultProfile?.nextSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Critical Legal Disclaimer */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
                <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Notice:</strong> This tool is for informational guidance only and does not determine official eligibility or constitute an application. All official criteria, requirements, and admission decisions rest exclusively with Copernicus Berlin e.V.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Retake Assessment</span>
                </button>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={OFFICIAL_LINKS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => analytics.track('official_information_click', { source: 'fit_checker_result' })}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-white border border-brand-navy text-brand-navy hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>Read Official Information</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={OFFICIAL_LINKS.application}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => analytics.track('application_click', { source: 'fit_checker_result' })}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:shadow"
                  >
                    <span>Visit Official Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
