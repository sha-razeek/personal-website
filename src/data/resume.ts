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
    role: 'Architect',
    company: 'Acuity Analytics',
    period: '2023 - Present',
    startYear: 2024,
    endYear: 'Present',
    description: 'Leading analytics initiatives and strategic data solutions for financial services clients.',
    highlights: [
      'Overseeing UI / UX Development for client-facing applications',
      'Modernizing Office tooling for financial research teams and supervisory analysts',
      'Designing marketing collateral for in-house products and services',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Acuity Knowledge Partners / Moodys Analytics Knowledge Services',
    period: '2012 - 2023',
    startYear: 2012,
    endYear: 2023,
    description: 'Developed tools and templates for the investment research arm of a European Bank.',
    highlights: [
      'Developed complex front-ends for FX risk management',
      'Developed VBA / VB.Net tools and templates automating workflows in research',
      'Improved performance of existing tools by 10x through code optimization and implementing best practices',
      'Provided support for analyst from the US, Europe all the way to the Philippines',
      'Developed HTML templates used in reseearch delivery',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Amba Research',
    period: '2007 - 2013',
    startYear: 2007,
    endYear: 2013,
    description: 'From large-scale data migrations to Office automation, I wore many hats in the financial research space.',
    highlights: [
      'Completed a large-scale data migration from CSV files to Access Databases',
      'Built automation platforms using VBA',
      'Designed paper advertisements, graphics and videos for corporate communications',
      'Developed C libraries for data processing and analysis',
    ],
  },
  {
    role: 'Intern - Department of Census and Statistics',
    company: 'Government of Sri Lanka',
    period: '2006',
    startYear: 2006,
    endYear: 2006,
    description: 'Supported national data collection initiatives.',
    highlights: [
      'Designed and developed surveys using CSPro',
      'Gained experience in large-scale data management',
    ],
  },
  {
    role: 'Enumerator',
    company: 'MG Consultants',
    period: '2005',
    startYear: 2005,
    endYear: 2005,
    description: 'Worked as an enumerator for the SLICTA IT Workforce survey',
    highlights: [
      'Interviewed IT leadership across Sri Lanka to gather data on workforce trends',
    ],
  },
  {
    role: 'Crescent Gems',
    company: 'Crescent Gems',
    period: '2005 - 2007',
    startYear: 2005,
    endYear: 2007,
    description: 'Full-Stack Developer, managing design and development of e-commerce platforms.',
    highlights: [
      'Updated PHP backend and MySQL database for e-commerce site',
    ],
  },
];

export const education = [
  {
    degree: 'B.Sc. (Hons) in Statistics with Computer Science',
    institution: 'University of Colombo',
    year: '2007',
    award: 'Awarded the Best Student in Statistics with Computer Science',
  },
];
