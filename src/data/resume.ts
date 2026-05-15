export interface ResumeEntry {
  role: string;
  company: string;
  period: string;
  startYear: number;
  endYear: number | 'Present';
  description: string;
  highlights: string[];
}

export const resumeData: ResumeEntry[] = [
  {
    role: 'Associate Director',
    company: 'Acuity Analytics',
    period: '2025 — Present',
    startYear: 2025,
    endYear: 'Present',
    description: 'Leading analytics initiatives and strategic data solutions for financial services clients.',
    highlights: [
      'Overseeing advanced analytics and research operations',
      'Driving innovation in financial data analysis',
      'Managing cross-functional teams and client relationships',
    ],
  },
  {
    role: 'Assistant Director',
    company: 'Acuity Knowledge Partners',
    period: '2020 — 2025',
    startYear: 2020,
    endYear: 2025,
    description: 'Directed research and analytics teams, delivering high-impact financial intelligence.',
    highlights: [
      'Led teams in equity research and credit analysis',
      'Implemented process automation improving efficiency by 40%',
      'Managed key institutional client accounts',
    ],
  },
  {
    role: 'Associate Vice President',
    company: "Moody's Analytics",
    period: '2016 — 2019',
    startYear: 2016,
    endYear: 2019,
    description: 'Spearheaded analytical solutions in credit risk and financial modelling.',
    highlights: [
      'Developed credit risk models for institutional clients',
      'Managed complex data migration and integration projects',
      'Contributed to product development for analytics platforms',
    ],
  },
  {
    role: 'Delivery Manager',
    company: 'Copal Amba',
    period: '2013 — 2016',
    startYear: 2013,
    endYear: 2016,
    description: 'Managed end-to-end delivery of financial research and analytics services.',
    highlights: [
      'Oversaw delivery for major Wall Street clients',
      'Built and mentored high-performing teams',
      'Established quality frameworks and SLAs',
    ],
  },
  {
    role: 'Analyst',
    company: 'Amba Research',
    period: '2007 — 2013',
    startYear: 2007,
    endYear: 2013,
    description: 'Conducted in-depth financial research and analysis across multiple asset classes.',
    highlights: [
      'Equity research and financial modelling',
      'Built valuation models and industry analysis',
      'Progressed from Analyst to senior roles over six years',
    ],
  },
  {
    role: 'Intern — Department of Census and Statistics',
    company: 'Government of Sri Lanka',
    period: '2006',
    startYear: 2006,
    endYear: 2006,
    description: 'Supported national data collection and statistical analysis initiatives.',
    highlights: [
      'Assisted in census data processing and analysis',
      'Gained experience in large-scale data management',
    ],
  },
  {
    role: 'Crescent Gems',
    company: 'Crescent Gems',
    period: '2005 — 2007',
    startYear: 2005,
    endYear: 2007,
    description: 'Early career role gaining foundational business and analytical experience.',
    highlights: [
      'Business operations and analysis',
      'Data management and reporting',
    ],
  },
];

export const education = [
  {
    degree: 'B.Sc. (Hons) in Computer Science',
    institution: 'University of Colombo School of Computing',
    year: '2005',
  },
];
