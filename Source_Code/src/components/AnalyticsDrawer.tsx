import React from 'react';
import { X, Activity, Trash2, CheckCircle2, TrendingUp } from 'lucide-react';
import { AnalyticsEvent } from '../types';
import { analytics } from '../utils/analytics';

interface AnalyticsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  events: AnalyticsEvent[];
}

export const AnalyticsDrawer: React.FC<AnalyticsDrawerProps> = ({ isOpen, onClose, events }) => {
  if (!isOpen) return null;

  // Compute funnel metrics
  const started = events.filter(e => e.eventName === 'fit_checker_started').length;
  const completed = events.filter(e => e.eventName === 'fit_checker_completed').length;
  const officialClicks = events.filter(e => e.eventName === 'official_information_click').length;
  const appClicks = events.filter(e => e.eventName === 'application_click').length;
  const completionRate = started > 0 ? Math.round((completed / started) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="analytics-title"
      >
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-brand-navy text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-white/10 text-brand-orange">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 id="analytics-title" className="text-sm sm:text-base font-bold">
                Live Analytics Feed & Funnel
              </h3>
              <p className="text-xs text-slate-300">
                Marketing & Applicant Funnel Metrics
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Analytics Feed"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Funnel Metrics Summary Cards */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-brand-orange" />
              Applicant Funnel KPIs
            </span>
            <span className="text-[11px] font-semibold text-slate-400">
              Session Live Data
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-subtle space-y-1">
              <span className="text-slate-500 block">Fit Checks</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-brand-navy">{completed}</span>
                <span className="text-[11px] text-slate-400">/ {started} started</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-subtle space-y-1">
              <span className="text-slate-500 block">Completion Rate</span>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold text-emerald-600">{completionRate}%</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-subtle space-y-1">
              <span className="text-slate-500 block">Official Info Clicks</span>
              <span className="text-base font-bold text-brand-navy">{officialClicks}</span>
            </div>

            <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-subtle space-y-1">
              <span className="text-slate-500 block">Application Intent</span>
              <span className="text-base font-bold text-brand-orange">{appClicks}</span>
            </div>
          </div>
        </div>

        {/* Event List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5 bg-white">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 pb-2 border-b border-slate-100">
            <span>Captured Events ({events.length})</span>
            {events.length > 0 && (
              <button
                onClick={() => analytics.clear()}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear Feed</span>
              </button>
            )}
          </div>

          {events.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400 space-y-2">
              <Activity className="w-8 h-8 text-slate-300 mx-auto stroke-1" />
              <p>No events recorded yet.</p>
              <p className="text-[11px]">Interact with the buttons, fit checker, or FAQ to watch events appear.</p>
            </div>
          ) : (
            events.map((evt) => (
              <div
                key={evt.id}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1 hover:border-slate-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-brand-navy flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-brand-orange" />
                    {evt.eventName}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {evt.timestamp}
                  </span>
                </div>

                {evt.details && Object.keys(evt.details).length > 0 && (
                  <pre className="mt-1 text-[10px] bg-white p-2 rounded border border-slate-200/80 text-slate-600 font-mono overflow-x-auto">
                    {JSON.stringify(evt.details, null, 2)}
                  </pre>
                )}
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500">
          Lightweight in-memory event logger • Demonstrates production analytics readiness
        </div>

      </div>
    </div>
  );
};
