export interface FavoriteItem {
  title: string;
  creator: string;
  type: 'book' | 'movie' | 'tv' | 'music';
  year?: string;
  description?: string;
  coverImage?: string;
}

export const favorites: FavoriteItem[] = [
  // Books
  {
    title: 'The Great Gatsby',
    creator: 'F. Scott Fitzgerald',
    type: 'book',
    year: '1925',
    description: 'A masterpiece of mid-century American literature, capturing the glitz and decay of the Jazz Age.',
  },
  {
    title: 'Brave New World',
    creator: 'Aldous Huxley',
    type: 'book',
    year: '1932',
    description: 'A hauntingly relevant vision of a futuristic society driven by consumerism and technological control.',
  },
  
  // Movies
  {
    title: '2001: A Space Odyssey',
    creator: 'Stanley Kubrick',
    type: 'movie',
    year: '1968',
    description: 'The ultimate cinematic exploration of human evolution and artificial intelligence, perfectly capturing Jet Age futurism.',
  },
  {
    title: 'North by Northwest',
    creator: 'Alfred Hitchcock',
    type: 'movie',
    year: '1959',
    description: 'A stylish thriller that epitomizes mid-century modern aesthetic, from Saul Bass titles to sharp suits.',
  },

  // TV Shows
  {
    title: 'Mad Men',
    creator: 'Matthew Weiner',
    type: 'tv',
    year: '2007 - 2015',
    description: 'A stunningly accurate portrayal of 1960s advertising culture and the shift in American social norms.',
  },
  {
    title: 'The Twilight Zone',
    creator: 'Rod Serling',
    type: 'tv',
    year: '1959 - 1964',
    description: 'Anthology of science fiction and suspense that challenged the boundaries of television storytelling.',
  },

  // Music
  {
    title: 'Kind of Blue',
    creator: 'Miles Davis',
    type: 'music',
    year: '1959',
    description: 'The definitive modal jazz album, essential listening for any mid-century enthusiast.',
  },
  {
    title: 'Pet Sounds',
    creator: 'The Beach Boys',
    type: 'music',
    year: '1966',
    description: 'A revolutionary pop album that pushed the boundaries of studio production and composition.',
  },
];
