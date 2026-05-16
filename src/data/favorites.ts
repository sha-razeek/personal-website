export interface FavoriteItem {
  title: string;
  creator: string;
  type: 'book' | 'movie' | 'tv' | 'music';
  year?: string;
  description?: string;
  coverImage?: string;
  country?: string;
}

export const favorites: FavoriteItem[] = [
  // Books
  {
    title: 'Secrets of Divine Love',
    creator: 'A. Helwa',
    type: 'book',
    year: '2020',
    description: 'A spiritual journey that leverages the secrets of the Qur’an and ancient poetry to help readers reconnect with their faith and Divine Love.',
    coverImage: '/images/secrets-of-divine-love.jpg',
  },
  {
    title: 'Krakatoa',
    creator: 'Simon Winchester',
    type: 'book',
    year: '2003',
    description: 'A riveting account of the 1883 volcanic eruption that changed the world, masterfully blending geology, history, and the birth of the global village.',
    coverImage: '/images/krakatoa.jpg',
  },
  
  // Movies
  {
    title: 'Shinobi: Heart Under Blade',
    creator: 'Ten Shimoyama',
    type: 'movie',
    year: '2005',
    description: 'A visually stunning adaptation of "Basilisk", depicting the tragic love story between two rival ninjas during the Tokugawa shogunate.',
    coverImage: '/images/shinobi.jpg',
    country: 'Japan',
  },
  {
    title: 'Wonderful Nightmare',
    creator: 'Kang Hyo-jin',
    type: 'movie',
    year: '2015',
    description: 'A successful lawyer dies in a clerical error and must live as a housewife and mother for a month before returning to her own life.',
    coverImage: '/images/wonderful-nightmare.jpg',
    country: 'South Korea',
  },
  {
    title: 'The Golden Cane Warrior',
    creator: 'Ifa Isfansyah',
    type: 'movie',
    year: '2014',
    description: 'A stylish Indonesian martial arts epic featuring breathtaking cinematography and classic wuxia-inspired storytelling.',
    coverImage: '/images/the-golden-cane-warrior.jpg',
    country: 'Indonesia',
  },
  {
    title: 'In the Mood for Love',
    creator: 'Wong Kar-wai',
    type: 'movie',
    year: '2000',
    description: 'A visually ravishing and emotionally charged masterpiece of 1960s Hong Kong, exploring the subtle and restrained connection between two neighbors.',
    coverImage: '/images/in-the-mood-for-love.jpg',
    country: 'Hong Kong',
  },

  // TV Shows
  {
    title: 'Churasan',
    creator: 'Yoshikazu Okada',
    type: 'tv',
    year: '2001',
    description: 'A beloved NHK Asadora set in Okinawa and Tokyo, following Eri Kohagura’s journey from a carefree island girl to a determined nurse.',
    coverImage: '/images/churasan.jpg',
    country: 'Japan',
  },
  {
    title: 'According to Jim',
    creator: 'Newman & Stark',
    type: 'tv',
    year: '2001 - 2009',
    description: 'A classic American sitcom following the humorous domestic life of Jim, a suburban father with a blues band and a unique perspective on marriage.',
    coverImage: '/images/according-to-jim.jpg',
    country: 'USA',
  },
  {
    title: 'OK-Jek',
    creator: 'NET TV',
    type: 'tv',
    year: '2015 - 2018',
    description: 'An Indonesian sitcom following the daily lives, struggles, and romances of drivers working for a motorcycle taxi service in Jakarta.',
    coverImage: '/images/ok-jek.jpg',
    country: 'Indonesia',
  },
  {
    title: 'Be Strong, Geum-Soon!',
    creator: 'Lee Jung-sun',
    type: 'tv',
    year: '2005',
    description: 'An inspiring South Korean drama about a young widow who overcomes numerous hardships to pursue her dream of becoming a hairdresser.',
    coverImage: '/images/be-strong-geum-soon.jpg',
    country: 'South Korea',
  },
  {
    title: 'Star Trek: Voyager',
    creator: 'Rick Berman',
    type: 'tv',
    year: '1995 - 2001',
    description: 'Captain Janeway leads the crew of the USS Voyager across 70,000 light-years of space to find their way home to Earth.',
    coverImage: '/images/star-trek-voyager.jpg',
    country: 'USA',
  },
  {
    title: 'Mind Your Language',
    creator: 'Vince Powell',
    type: 'tv',
    year: '1977 - 1979',
    description: 'A classic British sitcom centered on an English teacher instructing a diverse group of foreign students in London.',
    coverImage: '/images/mind-your-language.jpg',
    country: 'UK',
  },
  {
    title: 'Kaseifu No Mita',
    creator: 'Kazuhiko Yukawa',
    type: 'tv',
    year: '2011',
    description: 'A mysterious, emotionless housekeeper enters a family in crisis and resolves their problems through unconventional and often chilling means.',
    coverImage: '/images/kaseifu-no-mita.jpg',
    country: 'Japan',
  },
  {
    title: 'Marina',
    creator: 'Along Kamaludin',
    type: 'tv',
    year: '2024',
    description: 'A modern Malaysian melodrama following a woman who becomes entangled in a web of wealth and conspiracy while seeking a better life in the city.',
    coverImage: '/images/marina.jpg',
    country: 'Malaysia',
  },
  {
    title: 'Be My Lady',
    creator: 'Theodore Boborol',
    type: 'tv',
    year: '2016',
    description: 'A charming Philippine romantic drama about a hardworking Filipina determined to reclaim her family’s land and the foreigner who falls for her.',
    coverImage: '/images/be-my-lady.jpg',
    country: 'Philippines',
  },

  // Music
  {
    title: 'The Complete Singles',
    creator: 'Hiromi Iwasaki',
    type: 'music',
    year: '2007',
    description: 'A comprehensive collection from one of Japan’s most technically gifted vocalists, spanning her legendary career from the 70s onwards.',
  },
  {
    title: 'Gently',
    creator: 'Midori Karashima',
    type: 'music',
    year: '1992',
    description: 'A beautifully composed J-pop album known for its soft, melodic arrangements and Karashima’s emotive songwriting.',
  },
];
