export interface PortfolioItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  color: string;
  icon: string;
  details: {
    role: string;
    year: string;
    tools: string[];
    overview: string;
    features: string[];
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'transistor-radio',
    title: 'Transistor Radio',
    tagline: 'An online radio player tuned to the world',
    description: 'A web-based radio player that connects you to thousands of stations worldwide via radio-browser.info. Featuring favorites, search, and a retro transistor-inspired interface.',
    tags: ['Web App', 'Radio', 'API'],
    color: 'var(--color-teal)',
    icon: `<svg width="20" height="20" viewBox="0 0 164 153" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M99.1721 13.564C99.3179 13.5731 99.4635 13.5837 99.6091 13.5958C102.251 13.8165 102.96 15.5127 104.211 17.5868C105.815 20.2447 107.383 23.1732 109.508 25.4607C112.233 28.4162 115.633 30.6685 119.417 32.0254C122.672 33.1866 128.989 34.488 126.517 39.4104C125.627 41.1835 124.601 41.5477 122.788 42.1171C114.185 40.6196 110.737 37.8718 103.963 32.7557C104.165 45.1096 103.876 57.7554 103.969 70.163C104.03 78.142 104.345 87.649 103.296 95.4482C102.787 99.2327 100.609 104.138 98.1743 107.103C92.1085 114.491 86.7581 117.132 77.5628 118.259C69.7081 118.647 62.826 116.707 56.8529 111.446C51.225 106.552 47.7703 99.6238 47.2481 92.184C46.7593 84.4211 48.981 77.0913 54.1697 71.2232C59.1521 65.6068 66.164 62.2032 73.659 61.763C81.6607 61.2856 89.0358 63.9075 95.0335 69.2261C95.2888 57.7363 94.9645 45.9583 95.086 34.4412C95.1362 29.0507 94.9268 23.6458 95.1882 18.261C95.3421 15.0902 96.0907 14.1279 99.1721 13.564Z" fill="currentColor"/><path d="M73.5962 70.5726C84.331 69.5289 93.8802 77.3832 94.9274 88.1176C95.9745 98.8521 88.1234 108.404 77.3893 109.454C66.6503 110.506 57.0932 102.65 56.0455 91.9107C54.9978 81.1713 62.8565 71.6168 73.5962 70.5726Z" fill="currentColor"/></g></svg>`, 
    details: {
      role: 'Solo Developer & Designer',
      year: '2025',
      tools: ['JavaScript', 'radio-browser.info API', 'Web Audio API'],
      overview: 'Transistor Radio is an homage to the golden age of radio, reimagined for the web. It connects to the radio-browser.info API to stream thousands of live radio stations from around the globe.',
      features: [
        'Search and discover radio stations worldwide',
        'Favorites system with persistent storage',
        'Real-time station metadata and now-playing info',
        'Retro-inspired UI with modern usability',
        'Responsive design for mobile and desktop',
      ],
    },
  },
  {
    slug: 'mid-century-design-system',
    title: 'Mid-Century Design System',
    tagline: 'A component library inspired by atomic-age aesthetics',
    description: 'A comprehensive design system that blends mid-century modern principles with contemporary web development. Components, tokens, and patterns for building retro-futuristic interfaces.',
    tags: ['Design System', 'Components', 'Tokens'],
    color: 'var(--color-mustard)',
    icon: '◎',
    details: {
      role: 'Creator & Maintainer',
      year: '2025',
      tools: ['CSS Custom Properties', 'Storybook', 'Figma'],
      overview: 'The Mid-Century Design System is a living collection of design tokens, components, and patterns inspired by the optimistic futurism of the 1950s and 60s. It bridges atomic-age aesthetics with modern web standards.',
      features: [
        'Curated color palette drawn from jet-age interiors and signage',
        'Typography scale using geometric sans-serif typefaces',
        'Component library with buttons, cards, modals, and more',
        'Animation principles based on Space Age motion graphics',
        'Accessibility-first approach with WCAG compliance',
      ],
    },
  },
  {
    slug: 'slifa-magazine',
    title: 'SLIFA Magazine',
    tagline: 'A digital publication for the Sri Lanka Indonesia Friendship Association',
    description: 'Was the editor for both slifa.lk and the SLIFA Magazine, the primary publications for the Sri Lanka Indonesia Friendship Association.',
    tags: ['Editorial', 'Publishing', 'Design'],
    color: 'var(--color-coral)',
    icon: '✦',
    details: {
      role: 'Design Lead & Developer',
      year: '2024',
      tools: ['Figma', 'Astro', 'Cloudflare Pages'],
      overview: 'SLIFA Magazine is a digital-first publication that showcases Sri Lankan design, culture, and creative thinking. Built with a strong editorial sensibility and a visual language inspired by mid-century print design.',
      features: [
        'Custom editorial layout system with flexible grid',
        'Typography-first design with curated font pairings',
        'Performance-optimized static generation',
        'Responsive reading experience across devices',
        'Archive system with category filtering',
      ],
    },
  },
];
