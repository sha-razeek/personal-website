export interface MusicArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  genre: string;
  tags: string[];
  heroColor: string;
}

export const musicArticles: MusicArticle[] = [
  {
    slug: 'dangdut',
    title: 'Dangdut: The People\'s Music of Indonesia',
    excerpt: 'A personal journey into Indonesia\'s most popular genre - a melting pot of global influences that feels eerily familiar, from its rhythmic core to its surprising linguistic links with Sinhala.',
    date: 'May 2026',
    genre: 'Dangdut',
    tags: ['Indonesia', 'Folk', 'Culture'],
    heroColor: 'linear-gradient(135deg, #F4A261, #E76F51)',
  },
  {
    slug: 'ruby-llm',
    title: 'Ruby and the Art of Talking to Machines',
    excerpt: 'Why Ruby\'s elegant syntax makes it a surprisingly beautiful language for working with LLMs - and how it compares to the noise elsewhere.',
    date: 'May 2026',
    genre: 'Tech',
    tags: ['Ruby', 'LLM', 'AI', 'Code'],
    heroColor: 'linear-gradient(135deg, #CC342D, #E76F51)',
  },
  {
    slug: 'ai-augmentation',
    title: "AI Won't Replace Developers - But It Will Redefine Them",
    excerpt: 'Why boomerang hiring, code review bottlenecks, and the real productivity equation prove that AI augments developers rather than replacing them.',
    date: 'May 2026',
    genre: 'Tech',
    tags: ['AI', 'Software', 'Productivity'],
    heroColor: 'linear-gradient(135deg, #3D405B, #2A9D8F)',
  },
  {
    slug: 'enka',
    title: 'Enka: The Soul of Japan',
    excerpt: 'A deep dive into Enka - Japan\'s ballad tradition that blends Western melodies with Japanese pentatonic scales and themes of longing, loss, and love.',
    date: 'May 2026',
    genre: 'Enka',
    tags: ['Japan', 'Traditional', 'Ballad'],
    heroColor: 'linear-gradient(135deg, #264653, #2A9D8F)',
  },
  {
    slug: 'city-pop',
    title: 'City Pop: Tokyo\'s Neon Dreamscape',
    excerpt: 'Exploring the glossy, sun-drenched sound of 1980s Japanese City Pop - from Tatsuro Yamashita to Mariya Takeuchi, and how it became a global internet phenomenon.',
    date: 'May 2026',
    genre: 'City Pop',
    tags: ['Japan', '1980s', 'Funk', 'Disco'],
    heroColor: 'linear-gradient(135deg, #E76F51, #E9C46A)',
  },
];
