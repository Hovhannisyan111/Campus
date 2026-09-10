import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ExternalLink, 
  ShieldAlert, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { CONTROLLED_KNOWLEDGE_BASE, FALLBACK_AI_ANSWER, OFFICIAL_LINKS } from '../data/iesContent';
import { analytics } from '../utils/analytics';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  sourceLabel?: string;
  sourceUrl?: string;
  isFallback?: boolean;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Hello! I am the IES Information Assistant prototype. I provide answers using only approved, fact-verified Copernicus Berlin documentation. How can I help you today?',
      sourceLabel: 'Controlled IES Knowledge Base',
      sourceUrl: OFFICIAL_LINKS.website
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'What is Community Engagement?',
    'Is IES only about studying abroad?',
    'What skills can I contribute?',
    'How do I apply for IES?',
    'What is the scholarship amount?'
  ];

  const handleSendQuestion = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMessage: ChatMessage = {
      id: Math.random().toString(36).substring(2, 9),
      sender: 'user',
      text: queryText
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    analytics.track('ai_query_submitted', { query: queryText });

    // Controlled search against approved knowledge base
    setTimeout(() => {
      const lower = queryText.toLowerCase();
      
      const match = CONTROLLED_KNOWLEDGE_BASE.find(entry => 
        entry.keywords.some(kw => lower.includes(kw)) ||
        lower.includes(entry.question.toLowerCase())
      );

      let assistantResponse: ChatMessage;

      if (match) {
        assistantResponse = {
          id: Math.random().toString(36).substring(2, 9),
          sender: 'assistant',
          text: match.answer,
          sourceLabel: match.sourceLabel,
          sourceUrl: match.sourceUrl,
          isFallback: false
        };
      } else {
        assistantResponse = {
          id: Math.random().toString(36).substring(2, 9),
          sender: 'assistant',
          text: FALLBACK_AI_ANSWER.answer,
          sourceLabel: FALLBACK_AI_ANSWER.sourceLabel,
          sourceUrl: FALLBACK_AI_ANSWER.sourceUrl,
          isFallback: true
        };
      }

      setMessages(prev => [...prev, assistantResponse]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl flex flex-col h-[600px] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title"
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:px-6 bg-brand-navy text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/10 text-brand-orange">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 id="assistant-title" className="text-base font-bold flex items-center gap-2">
                <span>IES Information Assistant</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-orange text-white">
                  Controlled Knowledge Prototype
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                Zero hallucinations • Grounded in approved Copernicus Berlin content
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Responsible AI Disclaimer Banner */}
        <div className="px-4 py-2 bg-amber-50 border-b border-amber-200 text-amber-900 text-xs flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            This prototype queries only verified IES data. For unverified questions, it automatically routes you to the official Copernicus Berlin portal.
          </span>
        </div>

        {/* Chat Messages Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/60">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-brand-navy text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed space-y-2 ${
                msg.sender === 'user'
                  ? 'bg-brand-orange text-white rounded-tr-none font-medium'
                  : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-subtle'
              }`}>
                <p>{msg.text}</p>

                {msg.sourceLabel && (
                  <div className={`pt-2 border-t text-xs flex items-center justify-between gap-2 ${
                    msg.sender === 'user' ? 'border-white/20 text-white/80' : 'border-slate-100 text-slate-500'
                  }`}>
                    <span className="flex items-center gap-1">
                      {msg.isFallback ? (
                        <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                      ) : (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                      <span className="font-semibold">{msg.sourceLabel}</span>
                    </span>

                    {msg.sourceUrl && (
                      <a
                        href={msg.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-brand-orange flex items-center gap-0.5 text-[11px]"
                      >
                        Official Source
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-bounce [animation-delay:0.4s]" />
              <span>Verifying approved knowledge base...</span>
            </div>
          )}
        </div>

        {/* Quick prompt suggestions */}
        <div className="px-4 py-2 border-t border-slate-200 bg-white flex items-center gap-1.5 overflow-x-auto text-xs whitespace-nowrap">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Try:
          </span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendQuestion(prompt)}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-brand-orange text-slate-600 text-xs transition-colors border border-slate-200"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuestion(inputText);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about IES pillars, community engagement, skills..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-orange text-sm"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className={`p-2.5 rounded-xl transition-all ${
                inputText.trim() && !isTyping
                  ? 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-sm'
                  : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Send Query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
