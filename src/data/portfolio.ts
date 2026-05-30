export interface PortfolioItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  color: string;
  icon: string;
  image?: string;
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
    icon: `<svg width="20" height="20" viewBox="0 0 164 153" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M99.1721 13.564C99.3179 13.5731 99.4635 13.5837 99.6091 13.5958C102.251 13.8165 102.96 15.5127 104.211 17.5868C105.815 20.2447 107.383 23.1732 109.508 25.4607C112.233 28.4162 115.633 30.6685 119.417 32.0254C122.672 33.1866 128.989 34.488 126.517 39.4104C125.627 41.1835 124.601 41.5477 122.788 42.1171C114.185 40.6196 110.737 37.8718 103.963 32.7557C104.165 45.1096 103.876 57.7554 103.969 70.163C104.03 78.142 104.345 87.649 103.296 95.4482C102.787 99.2327 100.609 104.138 98.1743 107.103C92.1085 114.491 86.7581 117.132 77.5628 118.259C69.7081 118.647 62.826 116.707 56.8529 111.446C51.225 106.552 47.7703 99.6238 47.2481 92.184C46.7593 84.4211 48.981 77.0913 54.1697 71.2232C59.1521 65.6068 66.164 62.2032 73.659 61.763C81.6607 61.2856 89.0358 63.9075 95.0335 69.2261C95.2888 57.7363 94.9645 45.9583 95.086 34.4412C95.1362 29.0507 94.9268 23.6458 95.1882 18.261C95.3421 15.0902 96.0907 14.1279 99.1721 13.564Z" stroke="currentColor" stroke-width="4" fill="none"/><path d="M73.5962 70.5726C84.331 69.5289 93.8802 77.3832 94.9274 88.1176C95.9745 98.8521 88.1234 108.404 77.3893 109.454C66.6503 110.506 57.0932 102.65 56.0455 91.9107C54.9978 81.1713 62.8565 71.6168 73.5962 70.5726Z" stroke="currentColor" stroke-width="4" fill="none"/></g></svg>`, 
    image: '/images/radio.png',
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
    slug: 'broadcast',
    title: 'Broadcast',
    tagline: 'Live TV Receiver tuned to the world',
    description: 'A web-based television receiver that allows users to search and stream live channels from around the globe using IPTV sources.',
    tags: ['Web App', 'IPTV', 'Streaming'],
    color: 'var(--color-dark)',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9719 20.7939H7.02908C4.80389 20.7939 3 18.99 3 16.7648V11.3084C3 9.08319 4.80389 7.2793 7.02908 7.2793H16.9719C19.1961 7.2793 21 9.08319 21 11.3084V16.7648C21 18.99 19.1961 20.7939 16.9719 20.7939Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.9844 16.9358V16.9258" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.9844 11.1565V11.1465" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.9844 14.0471V14.0371" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.2691 17.9797H8.00147C6.9059 17.9797 6.01758 17.0914 6.01758 15.9958V12.0786C6.01758 10.9821 6.9059 10.0938 8.00147 10.0938H13.2691C14.3647 10.0938 15.253 10.9821 15.253 12.0786V15.9958C15.253 17.0914 14.3647 17.9797 13.2691 17.9797Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.4961 3.20703L11.9436 7.28184L7.50586 3.20703" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    image: '/images/tv.png',
    details: {
      role: 'Solo Developer & Designer',
      year: '2025',
      tools: ['JavaScript', 'HLS.js', 'iptv-org API'],
      overview: 'Broadcast is a minimalist live TV receiver for the web. It leverages the iptv-org API to aggregate and stream publicly available television channels from hundreds of countries.',
      features: [
        'Search channels by name, country, or category',
        'Live HLS streaming with integrated player',
        'Category-based filtering (News, Sports, Kids, etc.)',
        'Real-time channel logo and metadata retrieval',
        'Fully responsive mid-century inspired interface',
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
    icon: '✧',
    image: '/images/slifa-magazine.png',
    details: {
      role: 'Design Lead & Developer',
      year: '2024',
      tools: ['Affinity Publisher', 'Affinity Photo'],
      overview: 'SLIFA Magazine is the official publication of SLIFA that highlights the events and activities of the association and its membership',
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
