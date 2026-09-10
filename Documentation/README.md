# IES Applicant Assistant

> A responsive web prototype built for the International Excellence Scholarship (IES) / Copernicus Berlin e.V. Skills Challenge — IT track.

[![Copernicus Berlin](https://img.shields.io/badge/Copernicus%20Berlin-IES%20Scholarship-F37021?style=flat-square)](https://copernicusberlin.org/en)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Problem Statement](#2-problem-statement)
3. [Target Audience](#3-target-audience)
4. [Solution & Value Proposition](#4-solution--value-proposition)
5. [Key Features](#5-key-features)
6. [UX & Design Decisions](#6-ux--design-decisions)
7. [Technical Architecture](#7-technical-architecture)
8. [How to Run Locally](#8-how-to-run-locally)
9. [How to Modify IES Content](#9-how-to-modify-ies-content)
10. [Assumptions & Unverified Information](#10-assumptions--unverified-information)
11. [Limitations](#11-limitations)
12. [Future Improvements](#12-future-improvements)
13. [AI Usage Disclosure](#13-ai-usage-disclosure)

---

## 1. Project Overview

When I first read about the IES programme, I immediately noticed a gap: the scholarship's most distinctive feature — **Community Engagement** — often gets buried behind standard academic exchange descriptions. A student landing on a scholarship portal for the first time needs to understand within seconds whether this programme is for them, not scroll through pages of institutional language.

That's the problem I set out to solve with the **IES Applicant Assistant**.

The idea was to build a clean, student-facing web app that walks someone through a logical journey:
```
01 Discover → 02 Explore → 03 Check → 04 Learn → 05 Apply
```

The whole thing runs locally, looks professional, and never makes things up about the scholarship.

---

## 2. Problem Statement

I thought about how I personally would feel discovering IES for the first time and identified four real pain points:

- **Information overload:** Scholarship pages often answer the *legal* questions but not the human ones — *"Is this for someone like me?"*, *"What would my day-to-day actually look like?"*
- **Misreading the concept:** Most students assume exchange = attend lectures abroad. IES adds Community Engagement on top of that, which is a big differentiator that gets lost.
- **Skill uncertainty:** A student who codes, designs, or runs social media doesn't know if those skills are "good enough" to apply. There's no informal self-check.
- **Hesitation without guidance:** Without any pre-assessment, many capable applicants don't even start the application.

---

## 3. Target Audience

### Primary
- University students (undergrad or master's) interested in studying in Berlin
- Students who have never heard of IES before
- Students motivated by more than just lectures — community, projects, international networks

### Secondary
- Students who've heard of Copernicus Berlin but have questions about structure, requirements, or fit
- University international offices looking for a clear student-facing orientation resource

---

## 4. Solution & Value Proposition

The app is built around four ideas:

1. **Get the point across fast** — the three pillars (Exchange Study, International Community, Community Engagement) should be clear within 15 seconds of landing
2. **Let students check themselves** — a short, informal questionnaire that maps their skills and motivation to real contribution tracks, without claiming to be an official eligibility check
3. **Answer questions safely** — a controlled information assistant that only responds using verified content, and clearly says "I don't know, check officially" when it doesn't have the answer
4. **Keep it honest** — every single claim on the site is either verifiable or clearly marked as guidance

---

## 5. Key Features

| Feature | Description |
|---|---|
| **Hero & Value Framing** | Clear headline, two CTAs, and an IES programme formula card that communicates the core concept immediately |
| **Three Pillar Cards** | Exchange, Community, Contribution — each with specific verified highlights |
| **Student Benefits Section** | 5 benefit areas grounded in reality — no invented outcomes |
| **Applicant Journey Stepper** | Visual 01–05 roadmap from discovery to official application |
| **Interactive Fit Checker** | Multi-step form with progress bar, validation, skill track matching, and official disclaimer on results |
| **AI Knowledge Assistant (Prototype)** | Chat interface powered by a locked knowledge base — shows the concept of a responsible IES information bot |
| **FAQ Accordion** | Filterable by category, each answer tagged as either "Verified" or "Consult Copernicus Berlin" |
| **Live Analytics HUD** | Debug drawer showing captured funnel events in real time — demonstrates marketing awareness |
| **Final CTA** | Direct link to copernicusberlin.org/en |

---

## 6. UX & Design Decisions

### Colours
I picked the colours directly from the Copernicus Berlin logo:
- **Orange `#F37021`** — energy, initiative, approachability
- **Navy `#1A2A44`** — academic credibility, European institutional feel
- **Cream background `#FDFBF7`** — warmer and more editorial than plain white, easier on the eye

### Typography
`Inter` — clean, modern, widely used in European tech and academic contexts. Works well at both display and body sizes.

### Layout decisions
- **Mobile-first:** The target audience discovers programmes through Instagram, TikTok, or links shared in student group chats. The experience had to work well on a phone first.
- **Progressive disclosure:** The Fit Checker reveals one question at a time so it doesn't feel overwhelming.
- **No fake data:** No invented student quotes, no placeholder statistics, no fictional partner logos. Everything either has a source or is clearly marked as a placeholder.

### Accessibility
Semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`), visible keyboard focus states, ARIA labels on icon-only buttons, and colour contrast that meets WCAG 2.1 AA.

---

## 7. Technical Architecture

```
Campus/
├── public/
│   └── logo_horizontal.png        # Official Copernicus Berlin logo
├── src/
│   ├── main.tsx                   # Entry point
│   ├── App.tsx                    # Root layout, modal state management
│   ├── index.css                  # Tailwind base + scrollbar styles
│   ├── types/
│   │   └── index.ts               # Shared TypeScript interfaces
│   ├── data/
│   │   ├── iesContent.ts          # Programme pillars, benefits, knowledge base, links
│   │   ├── eligibility.ts         # Fit Checker questions and evaluation logic
│   │   └── faq.ts                 # FAQ items with verification flags
│   ├── utils/
│   │   └── analytics.ts           # Lightweight event tracker with pub/sub
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── WhatIsIES.tsx
│       ├── WhyIES.tsx
│       ├── ApplicantJourney.tsx
│       ├── FitChecker.tsx
│       ├── AIAssistantModal.tsx
│       ├── FAQSection.tsx
│       ├── FinalCTA.tsx
│       ├── Footer.tsx
│       ├── AnalyticsDrawer.tsx
│       └── DisclaimerBadge.tsx
├── README.md
├── UX_RATIONALE.md
├── OFFICIAL_INFORMATION_AND_ASSUMPTIONS.md
├── DEMO_FLOW.md
└── AI_DISCLOSURE.md
```

**Content is fully decoupled from UI.** All programme text, questions, links, and FAQ answers live in `src/data/`. This means content can be updated without touching any component code.

---

## 8. How to Run Locally

**Requirements:** Node.js v18+ and npm

```bash
# Navigate to the project folder
cd Campus

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:3000` in your browser.

```bash
# Build for production
npm run build
npm run preview
```

---

## 9. How to Modify IES Content

All content is centralized in `src/data/`. No component code needs to be touched.

| File | What to edit |
|---|---|
| `src/data/iesContent.ts` | Programme pillars, benefits, official links, AI knowledge base entries |
| `src/data/eligibility.ts` | Fit Checker questions, answer options, skill track names |
| `src/data/faq.ts` | FAQ questions, answers, verification status, categories |

---

## 10. Assumptions & Unverified Information

I was careful not to invent any official facts. The following are specifically **not included** and instead defer to the official portal:

- Scholarship financial amounts or stipend values
- Application deadlines
- Specific partner university names
- Language test score requirements

The Fit Checker is clearly labelled as an informal self-assessment — not an admission decision.

---

## 11. Limitations

- The AI assistant is a keyword-matching prototype, not a live LLM. It's intentionally offline — no API keys, no hallucination risk.
- Analytics persists to session storage only. A real deployment would connect to a proper analytics backend.
- The app doesn't collect or store any user data.

---

## 12. Future Improvements

1. Connect the AI assistant to official Copernicus Berlin content via RAG (retrieval-augmented generation) with a strict confidence threshold
2. Add German-language support
3. Let students download a short summary of their Fit Checker results to reference when writing their motivation letter
4. Build an embeddable widget version for university international office websites

---

## 13. AI Usage Disclosure

I used AI coding tools during development for code suggestions and debugging support. The concept, product direction, user journey structure, design decisions, and content choices were my own. I reviewed and validated every part of the final output before submission.