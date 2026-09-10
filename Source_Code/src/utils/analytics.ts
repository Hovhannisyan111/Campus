import { AnalyticsEvent } from '../types';

type AnalyticsListener = (events: AnalyticsEvent[]) => void;

class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private listeners: AnalyticsListener[] = [];

  constructor() {
    // Load existing events from sessionStorage if present
    try {
      const saved = sessionStorage.getItem('ies_analytics_events');
      if (saved) {
        this.events = JSON.parse(saved);
      }
    } catch {
      this.events = [];
    }
  }

  public track(eventName: AnalyticsEvent['eventName'], details?: Record<string, any>) {
    const event: AnalyticsEvent = {
      id: Math.random().toString(36).substring(2, 9),
      eventName,
      timestamp: new Date().toLocaleTimeString(),
      details
    };

    this.events.unshift(event);

    // Keep last 50 events
    if (this.events.length > 50) {
      this.events.pop();
    }

    try {
      sessionStorage.setItem('ies_analytics_events', JSON.stringify(this.events));
    } catch {
      // ignore storage failure
    }

    // Console logging in dev mode
    console.log(`[IES Analytics Event]: ${eventName}`, details || {});

    // Notify listeners
    this.notify();
  }

  public getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  public clear() {
    this.events = [];
    try {
      sessionStorage.removeItem('ies_analytics_events');
    } catch {
      // ignore
    }
    this.notify();
  }

  public subscribe(listener: AnalyticsListener): () => void {
    this.listeners.push(listener);
    listener([...this.events]);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    const copy = [...this.events];
    this.listeners.forEach(listener => listener(copy));
  }
}

export const analytics = new AnalyticsManager();
