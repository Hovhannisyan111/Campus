export interface NavItem {
  label: string;
  href: string;
}

export interface PillarCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  shortDesc: string;
  actionText: string;
  details: string;
}

export type QuestionType = 'single' | 'multiple';

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  points?: number;
  trackId?: string;
}

export interface FitQuestion {
  id: string;
  title: string;
  subtitle?: string;
  type: QuestionType;
  required: boolean;
  options: QuestionOption[];
}

export interface FitResultProfile {
  title: string;
  summary: string;
  recommendation: string;
  matchedTracks: string[];
  nextSteps: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'engagement' | 'eligibility' | 'application';
  isOfficialVerified: boolean;
  officialSourceUrl?: string;
}

export interface KnowledgeEntry {
  keywords: string[];
  question: string;
  answer: string;
  sourceLabel: string;
  sourceUrl: string;
  confidence: 'high' | 'medium';
}

export interface AnalyticsEvent {
  id: string;
  eventName:
    | 'landing_page_view'
    | 'explore_ies_click'
    | 'fit_checker_started'
    | 'fit_checker_completed'
    | 'faq_opened'
    | 'official_information_click'
    | 'application_click'
    | 'ai_assistant_opened'
    | 'ai_query_submitted';
  timestamp: string;
  details?: Record<string, any>;
}
