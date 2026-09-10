import { FitQuestion, FitResultProfile } from '../types';

export const FIT_QUESTIONS: FitQuestion[] = [
  {
    id: 'enrollment',
    title: 'Are you currently enrolled at a recognized university or college?',
    subtitle: 'IES is designed for university students seeking international academic and community experience.',
    type: 'single',
    required: true,
    options: [
      {
        id: 'enrolled_yes',
        label: 'Yes, currently enrolled as a student',
        description: 'Undergraduate, Master’s, or equivalent enrolled student status',
        points: 2
      },
      {
        id: 'enrolled_graduating_soon',
        label: 'Graduating soon / In final academic year',
        description: 'Completing studies in the near future',
        points: 1
      },
      {
        id: 'enrolled_no',
        label: 'No, not currently enrolled at a university',
        description: 'Working professional or not currently enrolled in higher education',
        points: 0
      }
    ]
  },
  {
    id: 'international_study',
    title: 'Are you interested in an international study experience in Germany (Berlin)?',
    subtitle: 'Academic exchange in Berlin is one of the foundational pillars of the IES programme.',
    type: 'single',
    required: true,
    options: [
      {
        id: 'study_very_interested',
        label: 'Very interested in studying in Berlin',
        description: 'Eager to experience German academic culture and international perspectives',
        points: 2
      },
      {
        id: 'study_somewhat_interested',
        label: 'Interested, exploring exchange options',
        description: 'Open to European study opportunities',
        points: 1
      },
      {
        id: 'study_not_interested',
        label: 'Not interested in academic study abroad',
        description: 'Looking purely for non-academic activities',
        points: 0
      }
    ]
  },
  {
    id: 'community_contribution',
    title: 'Are you interested in actively contributing to an international student community?',
    subtitle: 'IES is not just a study semester—scholarship holders engage in teamwork and practical initiatives.',
    type: 'single',
    required: true,
    options: [
      {
        id: 'community_eager',
        label: 'Yes! I want to take initiative and collaborate',
        description: 'Excited to contribute my skills and work with fellow international students',
        points: 2
      },
      {
        id: 'community_open',
        label: 'Open to participating in community activities',
        description: 'Interested in teamwork alongside my studies',
        points: 1
      },
      {
        id: 'community_reluctant',
        label: 'Prefer an independent study-only experience',
        description: 'Do not want group projects or community obligations',
        points: 0
      }
    ]
  },
  {
    id: 'skills_interest',
    title: 'Which skills or areas match your strengths and interest?',
    subtitle: 'Select the areas where you would feel excited to contribute ideas or projects (select all that apply).',
    type: 'multiple',
    required: true,
    options: [
      {
        id: 'tech',
        label: 'Technology & Web Development',
        description: 'Coding, web applications, digital tools, IT support',
        trackId: 'Technology & Digital Innovation'
      },
      {
        id: 'research',
        label: 'Academic Research & Analysis',
        description: 'Literature review, qualitative/quantitative analysis, reporting',
        trackId: 'Research & Academic Engagement'
      },
      {
        id: 'communication',
        label: 'Communication & Storytelling',
        description: 'Articles, blogging, interviewing, student newsletters',
        trackId: 'Communications & Storytelling'
      },
      {
        id: 'marketing',
        label: 'Marketing & Social Media',
        description: 'Campaigns, digital reach, community outreach, Reels/TikTok',
        trackId: 'Marketing & Digital Outreach'
      },
      {
        id: 'design',
        label: 'Graphic & UI/UX Design',
        description: 'Visual presentations, branding, digital assets, carousels',
        trackId: 'Design & Visual Media'
      },
      {
        id: 'management',
        label: 'Project Management & Organization',
        description: 'Team coordination, timeline management, event organization',
        trackId: 'Project Management & Leadership'
      },
      {
        id: 'data',
        label: 'Data Analytics & Reporting',
        description: 'Survey data, applicant metrics, operational tracking',
        trackId: 'Data & Insights'
      },
      {
        id: 'other',
        label: 'Other Creative / Intercultural Talents',
        description: 'Languages, intercultural facilitation, workshops',
        trackId: 'Community Initiatives'
      }
    ]
  }
];

export function evaluateFit(answers: Record<string, string | string[]>): FitResultProfile {
  const enrollment = answers['enrollment'] as string;
  const internationalStudy = answers['international_study'] as string;
  const communityContribution = answers['community_contribution'] as string;
  const selectedSkills = (answers['skills_interest'] as string[]) || [];

  // Match tracks
  const skillOptionMap: Record<string, string> = {
    tech: 'Technology & Digital Innovation',
    research: 'Academic Research & Analysis',
    communication: 'Communications & Storytelling',
    marketing: 'Marketing & Digital Outreach',
    design: 'Design & Visual Media',
    management: 'Project Management & Leadership',
    data: 'Data & Insights',
    other: 'Community Initiatives'
  };

  const matchedTracks = selectedSkills.map(id => skillOptionMap[id] || id).filter(Boolean);

  const isEnrolled = enrollment === 'enrolled_yes' || enrollment === 'enrolled_graduating_soon';
  const wantsStudy = internationalStudy !== 'study_not_interested';
  const wantsCommunity = communityContribution !== 'community_reluctant';

  if (isEnrolled && wantsStudy && wantsCommunity) {
    return {
      title: 'Strong Potential Fit for IES',
      summary: 'Your profile and motivation strongly align with the core ethos of the International Excellence Scholarship. You are pursuing university studies, motivated to study in Berlin, and enthusiastic about contributing to an international team.',
      recommendation: 'Based on your answers, IES may be very relevant to you. Your interests combine academic curiosity with active citizenship—the exact balance IES fosters.',
      matchedTracks: matchedTracks.length > 0 ? matchedTracks : ['General Intercultural Contribution'],
      nextSteps: [
        'Review official eligibility guidelines at copernicusberlin.org',
        'Explore the upcoming intake cycle deadlines and application requirements',
        'Prepare your academic documentation and CV highlighting your practical skills',
        'Check the FAQ section below for common candidate inquiries'
      ]
    };
  } else if (!isEnrolled) {
    return {
      title: 'Alternative Programme Pathways Advised',
      summary: 'IES is primarily targeted at currently enrolled university students participating in an academic exchange semester alongside German university studies.',
      recommendation: 'Because IES integrates university study in Berlin, current university enrollment is usually an essential component. We recommend checking whether Copernicus Berlin offers other international programmes or visiting the official portal.',
      matchedTracks: matchedTracks,
      nextSteps: [
        'Check Copernicus Berlin official programmes for post-graduate or alternative formats',
        'Consult official eligibility rules if you are planning to re-enroll in university',
        'Visit copernicusberlin.org for full programme criteria'
      ]
    };
  } else if (!wantsCommunity) {
    return {
      title: 'Consider Traditional Academic Exchange',
      summary: 'IES is distinctively centered around community engagement and teamwork alongside university study. The motto is "Study abroad is only the beginning."',
      recommendation: 'If your goal is strictly focused on solitary classroom lectures without group initiatives or community engagement, a standard bilateral Erasmus or university exchange might be a closer match for your preferences.',
      matchedTracks: matchedTracks,
      nextSteps: [
        'Reflect on whether participating in international peer initiatives could enrich your exchange',
        'Read more about the Community Engagement pillar in our FAQ',
        'Review official IES programme details at copernicusberlin.org'
      ]
    };
  } else {
    return {
      title: 'Moderate Potential Fit for IES',
      summary: 'You share several common points of interest with IES participants, particularly around personal development and international exchange.',
      recommendation: 'IES may be relevant depending on your university requirements and semester timing. We advise reading the official programme guidelines to evaluate how the schedule matches your university degree.',
      matchedTracks: matchedTracks.length > 0 ? matchedTracks : ['Intercultural Engagement'],
      nextSteps: [
        'Read the detailed IES programme description on copernicusberlin.org',
        'Check your home university exchange policies for study in Germany',
        'Reach out to Copernicus Berlin through official contact channels'
      ]
    };
  }
}
