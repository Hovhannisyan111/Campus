# IES Applicant Assistant & Eligibility Tool

**Author:** Arman Ogannisian

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-success?style=flat-square&logo=vercel)](https://campus-me-3f2b.vercel.app/?_vercel_share=rD4kfjgcImm0faAl7IlzaKbGuK8TIPIW))
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/Hovhannisyan111/Campus)
[![Copernicus Berlin](https://img.shields.io/badge/Copernicus%20Berlin-IES%20Scholarship-F37021?style=flat-square)](https://copernicusberlin.org/en)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

---

### Quick Links
- **Live Web App on Vercel:** [https://campus-me-3f2b.vercel.app/?_vercel_share=rD4kfjgcImm0faAl7IlzaKbGuK8TIPIW](https://campus-ewe6hdo1b-me-3f2b.vercel.app/](https://campus-me-3f2b.vercel.app/?_vercel_share=rD4kfjgcImm0faAl7IlzaKbGuK8TIPIW)
- **Project GitHub Repository:** [https://github.com/Hovhannisyan111/Campus](https://github.com/Hovhannisyan111/Campus)
- **Official Copernicus Berlin Site:** [https://copernicusberlin.org/en](https://copernicusberlin.org/en)

---

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [The Problems I Wanted to Solve](#2-the-problems-i-wanted-to-solve)
3. [Who This Tool Is For](#3-who-this-tool-is-for)
4. [My Solution](#4-my-solution)
5. [Main Features](#5-main-features)
6. [Design & UX Choices](#6-design--ux-choices)
7. [Project Structure](#7-project-structure)
8. [How to Run It Locally](#8-how-to-run-it-locally)
9. [How to Edit Content Easily](#9-how-to-edit-content-easily)
10. [Current Limitations](#10-current-limitations)
11. [Future Ideas](#11-future-ideas)
12. [How I Used AI](#12-how-i-used-ai)

---

## 1. Project Overview

When I first learned about the International Excellence Scholarship (IES), one thing stood out to me right away: this is not just a typical study abroad program. The most exciting part is **Community Engagement** — working in an international team and actually using your skills on real projects.

However, when students browse scholarship websites, they often get lost in long paragraphs and formal language. Many students give up before they even understand what the scholarship is really about.

I built the **IES Applicant Assistant** to fix this. It is a modern, fast, and mobile-friendly web tool that explains the program in simple terms, lets students do a quick 2-minute self-check, and gives them the confidence to apply through the official website.

---

## 2. The Problems I Wanted to Solve

I put myself in the shoes of a student who just found a link to the scholarship:

- **Too much text, too little clarity:** Standard scholarship pages are full of formal terms. Students just want quick answers to: *"What is this?"*, *"Is it for me?"*, and *"What will I actually do in Berlin?"*
- **Misunderstanding the concept:** Most people assume a scholarship is only about sitting in university lectures. IES includes community projects, which is its best feature, but people often miss it.
- **Doubt about personal skills:** A student who knows some programming, design, or social media might think, *"Are my skills good enough?"* Without a quick check, they hesitate to apply.
- **Fear of making mistakes:** Students worry about official forms. Giving them an informal tool first removes the stress.

---

## 3. Who This Tool Is For

- **University students (Bachelor's or Master's)** looking for an exchange semester in Berlin.
- **Students discovering IES for the first time** via social media, student chats, or friends.
- **Active students** who want more than just classes — people who want to meet friends from different countries and contribute real work.
- **University advisors** who want a simple, student-friendly link to share with their students.

---

## 4. My Solution

I designed the web app around four simple principles:

1. **Explain the idea in 15 seconds:** The three main pillars (Exchange Study, International Community, Community Engagement) are visible right at the top.
2. **Interactive Fit Checker:** A friendly 4-step self-assessment that matches the student's skills with potential project areas.
3. **Safe information assistant:** A helpful mini-chat that answers common questions using only verified data, without making up false facts.
4. **Honesty and safety:** I made sure the tool never promises admission and always links to Copernicus Berlin for official rules, dates, and amounts.

---

## 5. Main Features

| Feature | What it does |
|---|---|
| **Hero Section** | Welcomes the student with a clear headline, quick call-to-action buttons, and the IES core formula card. |
| **The 3 Pillars** | Cards for Study, Community, and Engagement so visitors understand the program immediately. |
| **Why IES Section** | 5 clear benefits of joining the program, based on real Copernicus Berlin information. |
| **Applicant Roadmap** | A visual 5-step path: Discover → Explore → Check → Learn → Apply. |
| **Interactive Fit Checker** | A 4-step questionnaire with a progress bar, instant feedback, and a helpful track match. |
| **FAQ Accordion** | Filterable questions with badges showing what is verified and what needs official confirmation. |
| **AI Knowledge Assistant** | A popup assistant that answers basic questions from a locked local database (no hallucination). |
| **Live Funnel Tracker** | A slide-out panel that shows user actions (useful for testing and marketing analysis). |
| **Final Call to Action** | A direct link sending ready applicants to the official Copernicus Berlin website. |

---

## 6. Design & UX Choices

### Colors
I used the official brand colors from Copernicus Berlin:
- **Warm Orange (`#F37021`):** Gives energy, warmth, and friendly calls-to-action.
- **Deep Navy (`#1A2A44`):** Gives structure, high contrast, and academic trust.
- **Soft Cream (`#FDFBF7`):** Much easier on the eyes than harsh white background.

### Typography
I picked **Inter** because it is clean, easy to read on both phones and laptops, and gives a modern feel.

### Mobile-First Layout
Most students open links from Telegram, Instagram, or WhatsApp on their phones. I made sure every button, card, and step in the Fit Checker works smoothly on small mobile screens.

### Accessibility
All text meets good color contrast standards, buttons have clear focus states, and the code uses semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`).

---

## 7. Project Structure

```
Campus/
├── public/
│   └── logo_horizontal.png        # Official Copernicus Berlin logo
├── src/
│   ├── main.tsx                   # React app entry point
│   ├── App.tsx                    # Main layout and modal state
│   ├── index.css                  # Tailwind styling and custom scrollbar
│   ├── types/
│   │   └── index.ts               # TypeScript data types
│   ├── data/
│   │   ├── iesContent.ts          # Text for pillars, benefits, and AI knowledge base
│   │   ├── eligibility.ts         # Fit Checker questions, answers, and track logic
│   │   └── faq.ts                 # Categorized FAQ questions and answers
│   ├── utils/
│   │   └── analytics.ts           # Simple session event logger for user actions
│   └── components/
│       ├── Navbar.tsx             # Header with logo, navigation, and live links
│       ├── Hero.tsx               # Introduction banner and main buttons
│       ├── WhatIsIES.tsx          # Explanation of the three main pillars
│       ├── WhyIES.tsx             # Benefits of participating in IES
│       ├── ApplicantJourney.tsx   # 5-step visual guide from start to finish
│       ├── FitChecker.tsx         # Interactive 4-step self-assessment tool
│       ├── AIAssistantModal.tsx   # Safe offline knowledge helper modal
│       ├── FAQSection.tsx         # Filterable questions and answers
│       ├── FinalCTA.tsx           # Final push to the official portal
│       ├── Footer.tsx             # Copyright and official Copernicus links
│       ├── AnalyticsDrawer.tsx    # Live tester drawer for tracking user steps
│       └── DisclaimerBadge.tsx    # Clear note that this is an informal guide
```

---

## 8. How to Run It Locally

### Requirements
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Steps
1. Clone or open the repository folder:
   ```bash
   git clone https://github.com/Hovhannisyan111/Campus.git
   cd Campus
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

To test the production build:
```bash
npm run build
npm run preview
```

---

## 9. How to Edit Content Easily

I purposely separated all text from the code so you do not need to be a developer to make changes:

| What you want to edit | File to open |
|---|---|
| Main text, pillars, benefits, official website links | `src/data/iesContent.ts` |
| Fit Checker questions, answers, and track recommendations | `src/data/eligibility.ts` |
| FAQ items, categories, and verification notes | `src/data/faq.ts` |

---

## 10. Current Limitations

- **Offline AI Assistant:** The chatbot helper uses a verified keyword matcher. It runs 100% in the browser with zero risk of making things up ("hallucinating"), but it is not connected to a live cloud LLM.
- **Session-only Analytics:** The analytics drawer tracks clicks and funnel steps during the current browser session. In a full production launch, this could be connected to an API or database.
- **Privacy:** The app does not save any personal student data or cookies.

---

## 11. Future Ideas

If I continue developing this project with Copernicus Berlin, here is what I would love to add:
1. **RAG-powered Assistant:** Connect the assistant to official PDF brochures so it can answer more complex questions while remaining 100% accurate.
2. **German & Regional Languages:** Add a language toggle (English/German) so local and international students can switch easily.
3. **PDF Summary Download:** Let students save a 1-page summary of their Fit Checker results to help them write their motivation letter.

---

## 12. How I Used AI

I believe in being transparent about technology:

- I used AI tools as coding assistants to help speed up repetitive code, verify TypeScript types, and check Tailwind utility names.
- I came up with the overall concept, user flow, UX design decisions, content organization, and evaluation logic myself.
- I manually tested every single button, form step, and link, and reviewed all code before submitting.

---

**Thank you for reviewing my project!**  
Feel free to test the live app at: [https://campus-ewe6hdo1b-me-3f2b.vercel.app/](https://campus-ewe6hdo1b-me-3f2b.vercel.app/)
