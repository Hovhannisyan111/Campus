import { PillarCard, BenefitItem, JourneyStep, KnowledgeEntry } from '../types';

export const OFFICIAL_LINKS = {
  website: 'https://copernicusberlin.org/en',
  scholarships: 'https://copernicusberlin.org/en',
  application: 'https://copernicusberlin.org/en',
  contact: 'https://copernicusberlin.org/en'
};

export const BRAND_TAGLINE = 'Study abroad is only the beginning.';
export const BRAND_SUBTITLE = 'Discover the International Excellence Scholarship (IES) and become part of an active international community in Berlin. Connect exchange study with practical community engagement.';

export const OFFICIAL_DISCLAIMER_TEXT = 
  'This interactive tool is an independent applicant assistant designed for informational guidance. It does not determine official eligibility or represent an official admission decision. All official requirements, deadlines, and application procedures must be verified directly through Copernicus Berlin e.V.';

export const PILLARS: PillarCard[] = [
  {
    id: 'exchange',
    tag: 'Academic Foundation',
    title: 'Exchange Study',
    description: 'Experience academic life in Germany while studying in Berlin. Connect your university curriculum with a vibrant European academic environment.',
    highlights: [
      'University study experience in Berlin',
      'Intercultural academic environment',
      'Broaden your international perspective'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'community',
    tag: 'Global Network',
    title: 'International Community',
    description: 'Study abroad is not a solitary journey. Join a diverse cohort of international scholarship holders living, collaborating, and learning together.',
    highlights: [
      'Active peer community in Berlin',
      'Intercultural dialogue and exchange',
      'Lifelong international friendships'
    ],
    icon: 'Users'
  },
  {
    id: 'contribution',
    tag: 'Practical Impact',
    title: 'Community Engagement',
    description: 'Bring your ideas, talents, and skills into collective initiatives. Contribute to projects that support the community and develop hands-on leadership.',
    highlights: [
      'Hands-on collaborative projects',
      'Apply skills in IT, design, communication & management',
      'Take initiative and create positive impact'
    ],
    icon: 'Sparkles'
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'experience',
    tag: 'Global Perspective',
    title: 'International Experience',
    description: 'Immerse yourself in Berlin’s unique cultural and academic landscape, developing international fluency that prepares you for global careers.',
    icon: 'Globe2'
  },
  {
    id: 'community',
    tag: 'Belonging',
    title: 'Active Community',
    description: 'Work and collaborate with ambitious university students from diverse backgrounds and academic disciplines.',
    icon: 'HeartHandshake'
  },
  {
    id: 'skills',
    tag: 'Practical Contribution',
    title: 'Applied Skills',
    description: 'Contribute in fields such as technology, research, communication, marketing, and project coordination.',
    icon: 'Briefcase'
  },
  {
    id: 'initiative',
    tag: 'Leadership',
    title: 'Initiative & Creativity',
    description: 'Turn ideas into practical reality. Propose initiatives that benefit the community and foster student empowerment.',
    icon: 'Lightbulb'
  },
  {
    id: 'growth',
    tag: 'Self-Development',
    title: 'Personal Growth',
    description: 'Strengthen interpersonal skills, adaptability, teamwork, and intercultural problem-solving in real-world contexts.',
    icon: 'Compass'
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Discover',
    shortDesc: 'Learn about the IES philosophy',
    actionText: 'Explore core pillars',
    details: 'Understand that IES combines university study with community engagement and international teamwork in Berlin.'
  },
  {
    step: '02',
    title: 'Explore',
    shortDesc: 'Understand the programme structure',
    actionText: 'Review value & areas',
    details: 'See how students contribute their skills—from technology and research to marketing and communication.'
  },
  {
    step: '03',
    title: 'Check',
    shortDesc: 'Assess your potential fit',
    actionText: 'Complete interactive fit checker',
    details: 'Answer a brief questionnaire to see how your interests, enrollment status, and skills align with IES opportunities.'
  },
  {
    step: '04',
    title: 'Learn',
    shortDesc: 'Review verified FAQs and sources',
    actionText: 'Consult verified knowledge',
    details: 'Get answers to common applicant questions with full distinction between verified facts and guidance.'
  },
  {
    step: '05',
    title: 'Apply',
    shortDesc: 'Proceed to official application',
    actionText: 'Visit copernicusberlin.org',
    details: 'Access official instructions, required documentation, and deadlines on the Copernicus Berlin portal.'
  }
];

export const CONTROLLED_KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    keywords: ['what is ies', 'about ies', 'what does ies mean', 'programme overview', 'scholarship overview'],
    question: 'What is the International Excellence Scholarship (IES)?',
    answer: 'The International Excellence Scholarship (IES) is a scholarship programme organised by Copernicus Berlin e.V. It combines academic study in Germany (Berlin) with active community engagement and participation in an international community.',
    sourceLabel: 'Copernicus Berlin Official Documentation',
    sourceUrl: 'https://copernicusberlin.org/en',
    confidence: 'high'
  },
  {
    keywords: ['community engagement', 'engagement', 'what is community', 'volunteer', 'contribution'],
    question: 'What is Community Engagement in IES?',
    answer: 'Community Engagement is a core pillar of IES where scholarship holders actively contribute their skills, ideas, and initiative to collaborative international projects, rather than just attending university classes.',
    sourceLabel: 'IES Programme Specification',
    sourceUrl: 'https://copernicusberlin.org/en',
    confidence: 'high'
  },
  {
    keywords: ['study abroad', 'exchange only', 'normal exchange', 'traditional exchange', 'difference'],
    question: 'Is IES only about studying abroad?',
    answer: 'No. The main message is “Study abroad is only the beginning.” Unlike a conventional exchange semester, IES integrates academic study with community participation, hands-on contributions, and intercultural teamwork.',
    sourceLabel: 'IES Concept Guidelines',
    sourceUrl: 'https://copernicusberlin.org/en',
    confidence: 'high'
  },
  {
    keywords: ['skills', 'what skills', 'areas of contribution', 'fields', 'technology', 'marketing', 'research'],
    question: 'What kinds of skills can participants contribute?',
    answer: 'Participants can contribute in various areas including Technology/IT, Academic Research, Communication, Marketing, Graphic Design, Project Management, and Data/Analytics based on their personal strengths and academic background.',
    sourceLabel: 'IES Skills Matrix',
    sourceUrl: 'https://copernicusberlin.org/en',
    confidence: 'high'
  },
  {
    keywords: ['who is it for', 'target', 'who can participate', 'audience', 'candidates'],
    question: 'Who is IES intended for?',
    answer: 'IES is primarily intended for university students interested in international study in Germany who are eager to be part of an international community and want to make practical, proactive contributions.',
    sourceLabel: 'IES Candidate Overview',
    sourceUrl: 'https://copernicusberlin.org/en',
    confidence: 'high'
  },
  {
    keywords: ['how to apply', 'application process', 'apply', 'procedure', 'how do i apply'],
    question: 'How do I apply for IES?',
    answer: 'Official application instructions, deadlines, and submission materials are published directly on the Copernicus Berlin portal. Please consult https://copernicusberlin.org/en for official application procedures.',
    sourceLabel: 'Copernicus Berlin Portal',
    sourceUrl: 'https://copernicusberlin.org/en',
    confidence: 'high'
  },
  {
    keywords: ['money', 'amount', 'funding', 'financial', 'how much', 'cost', 'stipend'],
    question: 'What is the exact scholarship amount?',
    answer: 'Specific financial details, stipend amounts, and coverage are subject to official IES guidelines. Please check official programme materials on copernicusberlin.org for accurate financial terms.',
    sourceLabel: 'Official Verification Required',
    sourceUrl: 'https://copernicusberlin.org/en',
    confidence: 'medium'
  },
  {
    keywords: ['deadline', 'dates', 'intake', 'when', 'calendar'],
    question: 'What are the upcoming application deadlines?',
    answer: 'Application cycles and deadlines are set by Copernicus Berlin e.V. for each intake semester. Please refer directly to copernicusberlin.org/en for current deadlines.',
    sourceLabel: 'Official Verification Required',
    sourceUrl: 'https://copernicusberlin.org/en',
    confidence: 'medium'
  }
];

export const FALLBACK_AI_ANSWER = {
  answer: 'I do not have verified official information in my controlled knowledge base to answer this question accurately. As part of our commitment to factual integrity, I recommend checking the official Copernicus Berlin portal or contacting the selection team directly.',
  sourceLabel: 'Official Copernicus Berlin Portal',
  sourceUrl: 'https://copernicusberlin.org/en'
};
