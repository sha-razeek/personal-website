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
    icon: '♪',
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
