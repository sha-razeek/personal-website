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
    slug: 'city-pop',
    title: 'City Pop: Tokyo\'s Neon Dreamscape',
    excerpt: 'Exploring the glossy, sun-drenched sound of 1980s Japanese City Pop — from Tatsuro Yamashita to Mariya Takeuchi, and how it became a global internet phenomenon.',
    date: 'May 2026',
    genre: 'City Pop',
    tags: ['Japan', '1980s', 'Funk', 'Disco'],
    heroColor: 'linear-gradient(135deg, #E76F51, #E9C46A)',
  },
  {
    slug: 'enka',
    title: 'Enka: The Soul of Japan',
    excerpt: 'A deep dive into Enka — Japan\'s ballad tradition that blends Western melodies with Japanese pentatonic scales and themes of longing, loss, and love.',
    date: 'May 2026',
    genre: 'Enka',
    tags: ['Japan', 'Traditional', 'Ballad'],
    heroColor: 'linear-gradient(135deg, #264653, #2A9D8F)',
  },
  {
    slug: 'dangdut',
    title: 'Dangdut: The People\'s Music of Indonesia',
    excerpt: 'From the streets of Jakarta to global diaspora — the rhythmic, rebellious, and wildly popular sound of Dangdut.',
    date: 'May 2026',
    genre: 'Dangdut',
    tags: ['Indonesia', 'Folk', 'Pop'],
    heroColor: 'linear-gradient(135deg, #F4A261, #E76F51)',
  },
];
