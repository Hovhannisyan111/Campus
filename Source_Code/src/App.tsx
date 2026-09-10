import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsIES } from './components/WhatIsIES';
import { WhyIES } from './components/WhyIES';
import { ApplicantJourney } from './components/ApplicantJourney';
import { FitChecker } from './components/FitChecker';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AIAssistantModal } from './components/AIAssistantModal';
import { AnalyticsDrawer } from './components/AnalyticsDrawer';
import { analytics } from './utils/analytics';
import { AnalyticsEvent } from './types';

export const App: React.FC = () => {
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [analyticsDrawerOpen, setAnalyticsDrawerOpen] = useState(false);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    // Record initial page view
    analytics.track('landing_page_view', {
      referrer: document.referrer || 'direct',
      timestamp: new Date().toISOString()
    });

    // Subscribe to analytics updates
    const unsubscribe = analytics.subscribe((updatedEvents) => {
      setEvents(updatedEvents);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-navy-dark">
      {/* Top Navbar */}
      <Navbar
        onOpenAI={() => setAiModalOpen(true)}
        onOpenAnalytics={() => setAnalyticsDrawerOpen(true)}
        analyticsCount={events.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenAI={() => setAiModalOpen(true)} />
        <WhatIsIES />
        <WhyIES />
        <ApplicantJourney />
        <FitChecker />
        <FAQSection />
        <FinalCTA />
      </main>

      {/* Bottom Footer */}
      <Footer
        onOpenAI={() => setAiModalOpen(true)}
        onOpenAnalytics={() => setAnalyticsDrawerOpen(true)}
      />

      {/* Controlled AI Assistant Modal */}
      <AIAssistantModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
      />

      {/* Live Analytics Drawer */}
      <AnalyticsDrawer
        isOpen={analyticsDrawerOpen}
        onClose={() => setAnalyticsDrawerOpen(false)}
        events={events}
      />
    </div>
  );
};

export default App;
