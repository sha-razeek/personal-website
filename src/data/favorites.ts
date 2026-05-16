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
    title: 'Secrets of Divine Love',
    creator: 'A. Helwa',
    type: 'book',
    year: '2020',
    description: 'A spiritual journey that leverages the secrets of the Qur’an and ancient poetry to help readers reconnect with their faith and Divine Love.',
  },
  {
    title: 'Krakatoa',
    creator: 'Simon Winchester',
    type: 'book',
    year: '2003',
    description: 'A riveting account of the 1883 volcanic eruption that changed the world, masterfully blending geology, history, and the birth of the global village.',
  },
  
  // Movies
  {
    title: 'Shinobi: Heart Under Blade',
    creator: 'Ten Shimoyama',
    type: 'movie',
    year: '2005',
    description: 'A visually stunning adaptation of "Basilisk", depicting the tragic love story between two rival ninjas during the Tokugawa shogunate.',
  },
  {
    title: 'Wonderful Nightmare',
    creator: 'Kang Hyo-jin',
    type: 'movie',
    year: '2015',
    description: 'A successful lawyer dies in a clerical error and must live as a housewife and mother for a month before returning to her own life.',
  },
  {
    title: 'The Golden Cane Warrior',
    creator: 'Ifa Isfansyah',
    type: 'movie',
    year: '2014',
    description: 'A stylish Indonesian martial arts epic featuring breathtaking cinematography and classic wuxia-inspired storytelling.',
  },

  // TV Shows
  {
    title: 'Churasan',
    creator: 'Yoshikazu Okada',
    type: 'tv',
    year: '2001',
    description: 'A beloved NHK Asadora set in Okinawa and Tokyo, following Eri Kohagura’s journey from a carefree island girl to a determined nurse.',
  },
  {
    title: 'According to Jim',
    creator: 'Newman & Stark',
    type: 'tv',
    year: '2001 - 2009',
    description: 'A classic American sitcom following the humorous domestic life of Jim, a suburban father with a blues band and a unique perspective on marriage.',
  },
  {
    title: 'OK-Jek',
    creator: 'NET TV',
    type: 'tv',
    year: '2015 - 2018',
    description: 'An Indonesian sitcom following the daily lives, struggles, and romances of drivers working for a motorcycle taxi service in Jakarta.',
  },
  {
    title: 'Be Strong, Geum-Soon!',
    creator: 'Lee Jung-sun',
    type: 'tv',
    year: '2005',
    description: 'An inspiring South Korean drama about a young widow who overcomes numerous hardships to pursue her dream of becoming a hairdresser.',
  },
  {
    title: 'Star Trek: Voyager',
    creator: 'Rick Berman',
    type: 'tv',
    year: '1995 - 2001',
    description: 'Captain Janeway leads the crew of the USS Voyager across 70,000 light-years of space to find their way home to Earth.',
  },
  {
    title: 'Mind Your Language',
    creator: 'Vince Powell',
    type: 'tv',
    year: '1977 - 1979',
    description: 'A classic British sitcom centered on an English teacher instructing a diverse group of foreign students in London.',
  },
  {
    title: 'Kaseifu No Mita',
    creator: 'Kazuhiko Yukawa',
    type: 'tv',
    year: '2011',
    description: 'A mysterious, emotionless housekeeper enters a family in crisis and resolves their problems through unconventional and often chilling means.',
  },
  {
    title: 'Marina',
    creator: 'Along Kamaludin',
    type: 'tv',
    year: '2024',
    description: 'A modern Malaysian melodrama following a woman who becomes entangled in a web of wealth and conspiracy while seeking a better life in the city.',
  },
  {
    title: 'Aduh Bibikku',
    creator: 'Mediacorp Suria',
    type: 'tv',
    year: '2021',
    description: 'A Singaporean Malay-language comedy-drama highlighting the humorous misunderstandings and bonds between domestic helpers and their employers.',
  },
  {
    title: 'Be My Lady',
    creator: 'Theodore Boborol',
    type: 'tv',
    year: '2016',
    description: 'A charming Philippine romantic drama about a hardworking Filipina determined to reclaim her family’s land and the foreigner who falls for her.',
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
