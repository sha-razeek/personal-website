export interface QuizQuestion {
  question: string;
  answer: string;
}

export interface QuizWeek {
  id: number;
  title: string;
  date: string;
  description: string;
  questions: QuizQuestion[];
}

export const quizzes: QuizWeek[] = [
  {
    id: 1,
    title: 'Week 1, The Curious Mind',
    date: 'May 2026',
    description: 'A journey through science, geography, and the weird corners of knowledge.',
    questions: [
      { question: 'What is the chemical symbol for tungsten?', answer: 'W (from Wolfram)' },
      { question: 'Which country has the most time zones?', answer: 'France, with 12 time zones (including overseas territories).' },
      { question: 'What is the smallest bone in the human body?', answer: 'The stapes, in the middle ear.' },
      { question: 'How many hearts does an octopus have?', answer: 'Three, two pump blood to the gills, one pumps it to the body.' },
      { question: 'What year was the first iPhone released?', answer: '2007.' },
      { question: 'What is the hardest natural substance on Earth?', answer: 'Diamond.' },
      { question: 'Which planet has the most moons?', answer: 'Saturn, with over 140 confirmed moons.' },
      { question: 'What is the capital of Bhutan?', answer: 'Thimphu.' },
      { question: 'What does "www" stand for in a website URL?', answer: 'World Wide Web.' },
      { question: 'What element has the atomic number 1?', answer: 'Hydrogen.' },
      { question: 'Which animal can sleep for up to 3 years?', answer: 'The snail.' },
      { question: 'What is the longest river in the world?', answer: 'The Nile River (though some measurements suggest the Amazon may be longer).' },
      { question: 'Who painted the ceiling of the Sistine Chapel?', answer: 'Michelangelo.' },
      { question: 'What is the speed of light in km/s?', answer: 'Approximately 299,792 km/s.' },
      { question: 'What is the only country that spans all four hemispheres?', answer: 'Kiribati.' },
      { question: 'What is the boiling point of water at sea level in Celsius?', answer: '100°C.' },
      { question: 'What language has the most native speakers?', answer: 'Mandarin Chinese.' },
      { question: 'What year did the Berlin Wall fall?', answer: '1989.' },
      { question: 'What is the rarest blood type?', answer: 'AB-negative.' },
      { question: 'How many bones are in the adult human body?', answer: '206.' },
      { question: 'What is the largest ocean on Earth?', answer: 'The Pacific Ocean.' },
      { question: 'What gas do plants absorb from the atmosphere?', answer: 'Carbon dioxide (CO₂).' },
      { question: 'What is the capital of Iceland?', answer: 'Reykjavik.' },
      { question: 'Who wrote "1984"?', answer: 'George Orwell.' },
      { question: 'What is the tallest mountain in the solar system?', answer: 'Olympus Mons on Mars.' },
      { question: 'How many strings does a standard guitar have?', answer: 'Six.' },
      { question: 'What is the chemical formula for table salt?', answer: 'NaCl (sodium chloride).' },
      { question: 'What country invented paper?', answer: 'China.' },
      { question: 'What is the deepest point in the ocean?', answer: 'The Mariana Trench, specifically Challenger Deep at about 10,935 meters.' },
      { question: 'What year did the Titanic sink?', answer: '1912.' },
    ],
  },
  {
    id: 2,
    title: 'Week 2, Patterns & Systems',
    date: 'June 2026',
    description: 'Exploring the hidden structures that shape our world.',
    questions: [
      { question: 'What is the Fibonacci sequence\'s approximate golden ratio?', answer: '1.618033988749895, known as Phi (φ).' },
      { question: 'How many bits are in a byte?', answer: '8 bits.' },
      { question: 'What is the largest prime number less than 100?', answer: '97.' },
      { question: 'What programming language was created by Brendan Eich in 10 days?', answer: 'JavaScript.' },
      { question: 'What does DNA stand for?', answer: 'Deoxyribonucleic Acid.' },
      { question: 'What is the Doppler effect?', answer: 'The change in frequency of a wave in relation to an observer moving relative to the wave source.' },
      { question: 'How many chromosomes do humans have?', answer: '46 (23 pairs).' },
      { question: 'What is the Pythagorean theorem?', answer: 'a² + b² = c², in a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides.' },
      { question: 'What does HTTP stand for?', answer: 'HyperText Transfer Protocol.' },
      { question: 'What is the approximate circumference of the Earth?', answer: '40,075 km.' },
      { question: 'What is the SI unit of electric current?', answer: 'The Ampere (A).' },
      { question: 'How many continents are there?', answer: 'Seven, Asia, Africa, North America, South America, Antarctica, Europe, and Australia.' },
      { question: 'What is the square root of 144?', answer: '12.' },
      { question: 'What year was the World Wide Web invented?', answer: '1989, by Tim Berners-Lee.' },
      { question: 'What is the powerhouse of the cell?', answer: 'The mitochondria.' },
      { question: 'What is the chemical symbol for gold?', answer: 'Au (from Aurum).' },
      { question: 'How many colors are in a rainbow?', answer: 'Seven, red, orange, yellow, green, blue, indigo, violet (ROY G BIV).' },
      { question: 'What is the largest planet in our solar system?', answer: 'Jupiter.' },
      { question: 'What does CPU stand for?', answer: 'Central Processing Unit.' },
      { question: 'What is the freezing point of water in Fahrenheit?', answer: '32°F.' },
      { question: 'What is the currency of Japan?', answer: 'The Yen (¥).' },
      { question: 'Who developed the theory of relativity?', answer: 'Albert Einstein.' },
      { question: 'What is the most abundant gas in Earth\'s atmosphere?', answer: 'Nitrogen, about 78% of the atmosphere.' },
      { question: 'How many sides does a hexagon have?', answer: 'Six.' },
      { question: 'What is the formula for the area of a circle?', answer: 'A = πr².' },
      { question: 'What does RAM stand for?', answer: 'Random Access Memory.' },
      { question: 'What is the smallest country in the world?', answer: 'Vatican City, approximately 0.44 km².' },
      { question: 'How many degrees are in a circle?', answer: '360 degrees.' },
      { question: 'What element does "O" represent on the periodic table?', answer: 'Oxygen.' },
      { question: 'What is the tallest building in the world?', answer: 'The Burj Khalifa in Dubai, 828 meters.' },
    ],
  },
  {
    id: 3,
    title: 'Week 3, Culture & History',
    date: 'June 2026',
    description: 'Moments, movements, and milestones that shaped civilization.',
    questions: [
      { question: 'In what year did World War II end?', answer: '1945.' },
      { question: 'Who was the first person to walk on the Moon?', answer: 'Neil Armstrong, on July 20, 1969.' },
      { question: 'What ancient wonder was located in Giza, Egypt?', answer: 'The Great Pyramid of Giza.' },
      { question: 'Who wrote "Romeo and Juliet"?', answer: 'William Shakespeare.' },
      { question: 'What empire was ruled by Genghis Khan?', answer: 'The Mongol Empire.' },
      { question: 'In which year did the French Revolution begin?', answer: '1789.' },
      { question: 'What was the Renaissance?', answer: 'A cultural, artistic, and intellectual movement originating in Italy in the 14th century, emphasizing humanism and classical learning.' },
      { question: 'Who was the first female Prime Minister of the UK?', answer: 'Margaret Thatcher, serving from 1979 to 1990.' },
      { question: 'What ancient civilization built Machu Picchu?', answer: 'The Inca Empire.' },
      { question: 'What was the Industrial Revolution?', answer: 'The transition to new manufacturing processes in Europe and the US, roughly from the 1760s to the 1840s, marked by the shift from hand production to machine manufacturing.' },
      { question: 'Who painted the Mona Lisa?', answer: 'Leonardo da Vinci.' },
      { question: 'What was the Silk Road?', answer: 'An ancient network of trade routes connecting East Asia to the Mediterranean, facilitating the exchange of goods, ideas, and culture.' },
      { question: 'What year did India gain independence?', answer: '1947.' },
      { question: 'Who is known as the father of modern physics?', answer: 'Albert Einstein (though Galileo and Newton are also contenders for the title).' },
      { question: 'What was the Cold War?', answer: 'A geopolitical tension between the United States and the Soviet Union and their allies, lasting roughly from 1947 to 1991.' },
      { question: 'Who wrote "The Art of War"?', answer: 'Sun Tzu, the ancient Chinese strategist.' },
      { question: 'What was the significance of the Magna Carta?', answer: 'Signed in 1215, it established the principle that everyone, including the king, is subject to the law.' },
      { question: 'Who invented the printing press?', answer: 'Johannes Gutenberg, around 1440.' },
      { question: 'What ancient language is the Rosetta Stone written in?', answer: 'Three scripts: Egyptian hieroglyphs, Demotic script, and Ancient Greek.' },
      { question: 'What was the Harlem Renaissance?', answer: 'A cultural, social, and artistic movement centered in Harlem, New York, during the 1920s and 1930s, celebrating African American culture.' },
      { question: 'Who was Cleopatra?', answer: 'The last active ruler of the Ptolemaic Kingdom of Egypt, known for her intelligence and political alliances with Julius Caesar and Mark Antony.' },
      { question: 'What year did the Titanic sink?', answer: '1912.' },
      { question: 'What was the Manhattan Project?', answer: 'The US research project that developed the first nuclear weapons during World War II.' },
      { question: 'Who discovered penicillin?', answer: 'Alexander Fleming, in 1928.' },
      { question: 'What was the significance of the Magna Carta?', answer: 'Signed in 1215, it limited the power of the English king and established that everyone is subject to the law.' },
      { question: 'What civilization invented the concept of zero?', answer: 'Indian mathematicians, with the concept appearing in the Brahmasphutasiddhanta by Brahmagupta in 628 AD.' },
      { question: 'Who was the first Emperor of Rome?', answer: 'Augustus (Octavian), from 27 BC to 14 AD.' },
      { question: 'What was the significance of Brown v. Board of Education?', answer: 'The 1954 US Supreme Court case that declared racial segregation in public schools unconstitutional.' },
      { question: 'What was the Age of Enlightenment?', answer: 'An intellectual and philosophical movement in Europe during the 17th and 18th centuries, emphasizing reason, individualism, and skepticism of traditional authority.' },
      { question: 'Who was Nikola Tesla?', answer: 'A Serbian-American inventor and electrical engineer known for his contributions to the design of the modern alternating current (AC) electrical supply system.' },
    ],
  },
  {
    id: 4,
    title: 'Week 4, The Natural World',
    date: 'July 2026',
    description: 'From deep oceans to distant stars, the wonders of nature.',
    questions: [
      { question: 'What is the largest animal ever to have lived?', answer: 'The blue whale, weighing up to 200 tonnes.' },
      { question: 'How many bones does a newborn baby have?', answer: 'About 300, many fuse together as they grow.' },
      { question: 'What is the hottest planet in our solar system?', answer: 'Venus, with a surface temperature of about 465°C due to its thick atmosphere.' },
      { question: 'What is the largest organ in the human body?', answer: 'The skin.' },
      { question: 'How long does light from the Sun take to reach Earth?', answer: 'About 8 minutes and 20 seconds.' },
      { question: 'What is the speed of sound in air at sea level?', answer: 'Approximately 343 meters per second (1,235 km/h).' },
      { question: 'What is the most common element in the universe?', answer: 'Hydrogen, making up about 75% of all normal matter.' },
      { question: 'What is the average depth of the ocean?', answer: 'About 3,688 meters (12,100 feet).' },
      { question: 'How long does it take Mars to orbit the Sun?', answer: 'About 687 Earth days.' },
      { question: 'What causes a rainbow?', answer: 'The refraction, dispersion, and reflection of sunlight through water droplets in the atmosphere.' },
      { question: 'What is the largest desert on Earth?', answer: 'The Sahara Desert, about 9.2 million km². (If counting cold deserts, Antarctica is the largest.)' },
      { question: 'What is a light-year?', answer: 'The distance light travels in one year, approximately 9.461 trillion kilometers.' },
      { question: 'How many planets are in our solar system?', answer: 'Eight, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.' },
      { question: 'What is photosynthesis?', answer: 'The process by which green plants convert sunlight, carbon dioxide, and water into glucose and oxygen.' },
      { question: 'What is the Great Red Spot on Jupiter?', answer: 'A massive anticyclonic storm that has been raging for at least 350 years.' },
      { question: 'What percentage of Earth\'s surface is covered by water?', answer: 'About 71%.' },
      { question: 'What is the Coriolis effect?', answer: 'The deflection of moving objects (like winds) caused by Earth\'s rotation.' },
      { question: 'How many teeth does an adult human typically have?', answer: '32 (including wisdom teeth).' },
      { question: 'What is the coldest temperature ever recorded on Earth?', answer: '−89.2°C at Vostok Station, Antarctica, in 1983.' },
      { question: 'What is a nebula?', answer: 'A giant cloud of dust and gas in space, often a birthplace for new stars.' },
      { question: 'How tall is the average human?', answer: 'About 1.7 meters (5 feet 7 inches) globally, varying by region.' },
      { question: 'What is the pH of pure water?', answer: '7, neutral on the pH scale.' },
      { question: 'How far is the Moon from Earth?', answer: 'About 384,400 km on average.' },
      { question: 'What is tectonic activity?', answer: 'The movement of Earth\'s lithospheric plates, causing earthquakes, volcanic eruptions, and mountain formation.' },
      { question: 'What is the tallest tree species?', answer: 'The coast redwood (Sequoia sempervirens), the tallest known specimen is Hyperion at 115.92 meters.' },
      { question: 'How long do stars typically live?', answer: 'Anywhere from a few million years (massive stars) to trillions of years (red dwarfs).' },
      { question: 'What is the driest continent?', answer: 'Antarctica, it is technically a desert with very low precipitation.' },
      { question: 'What are the rings of Saturn made of?', answer: 'Primarily ice particles, rocky debris, and dust.' },
      { question: 'What is the largest flower in the world?', answer: 'Rafflesia arnoldii, with blooms up to 1 meter in diameter.' },
      { question: 'How old is the Earth?', answer: 'Approximately 4.54 billion years old.' },
    ],
  },
  {
    id: 5,
    title: 'Week 5, Quiz Club',
    date: 'May 17, 2026',
    description: 'A special 50-question marathon from the Quiz Club, covering global affairs, history, and science.',
    questions: [
      {
        question: "A Room of One's Own is a 1929 speech by which writer, in which she advocated that \"a woman must have money and a room of her own if she is to write fiction\"?",
        answer: "Virginia Wolfe"
      },
      {
        question: "Alleged to have been stolen by the then Governor Robert Brownrigg from the last king of Kandy and then donated to the British Museum in the 1830s, the gilted statue of which female Buddha, venerated in Mahayana Buddhism, was seen as so dangerously erotic and voluptuous that it was kept in a store room for 30 years. A copy of the statue is on display at the National Museum of Sri Lanka.",
        answer: "Tara (also known as the Mother of Liberation)"
      },
      {
        question: "On May 8, to mark Sir David Attenborough's 100th birthday, scientists named a newly designated species after him, a tiny parasitic creature now known as Attenboroughnculus tau that devours other insects alive, Which type of animal was it?",
        answer: "It joins over 50 other species already bearing his name, including an echidna, a fungus, and an extinct marine reptile. Wasp"
      },
      {
        question: "Scientists have determined that a megatsunami which occured in Aug last year resulting in a wave 481 meters tall, was the second tallest tsunami ever recorded in history. Where did it happen?",
        answer: "It is also not too far from the location where the tallest ever wave was recorded back in 1958. Alaska (Tracy Arm Fjord in Alaska, tallest in Lituya Bay)"
      },
      {
        question: "Mahindra racing recently won its first victory in which FIA sanctioned motor racing championship, the highest class open-wheel single-seater motorsport championship for electric cars?",
        answer: "Formula E"
      },
      {
        question: "With a population of over 4 times that of California, what is the World's most populous state in the World?",
        answer: "Uttar Pradesh"
      },
      {
        question: "Banned in 2022 from participating in the Olympics after the Russian invasion of Ukraine, which country's ban was recently lifted by the IOC citing 'Athletes should not be limited by the actions of their governments'?",
        answer: "Belarus"
      },
      {
        question: "What is considered the world's smallest army? On May 6, 28 new members were sworn in at a ceremony held at Vatican CIty?",
        answer: "Swiss Guard"
      },
      {
        question: "Which influential art movement, emerging in Britain and America during the 1950s and 1960s, drew its imagery and techniques from mass media, advertising, comic books, and consumer culture through the works of artists like Andy Warhol and Roy Lichtenstein?",
        answer: "Pop art"
      },
      {
        question: "Marty Makary recently resigned as the head of the Food and Drug Administration in the US over the agency's decision to approve fruit flavored what?",
        answer: "E-cigerettes (Vapes)"
      },
      {
        question: "According to the TomTom traffic index for 2025, what is the second most congested city in the world. The first being Mexico City?",
        answer: "An average of 168 hours is lost per year commuting 10km in this city during rush hour. Bangalore"
      },
      {
        question: "Thought to have been derived by a Scythian name meaning 'Shimmering with snow', and home to roughly 50 distinct ethnic groups speaking over 50 languages and considered a living museum what name is given to the region between the Black Sea and the Caspian Sea which includes countries such as Georgia, Armenia and Azerbaijan?",
        answer: "Caucasus"
      },
      {
        question: "Overshadowed by controversy after Spain, the Netherlands and 3 other countries, boycotted the contest due to Israel's participation, this years Eurovision Song Contest, the smallest event in 20 years, was held on Saturday in Vienna, Austria. After a absence of three years in the competition, which country was the surprise winner of this years' competition with the song titled Bangaranga?",
        answer: "Bulgaria"
      },
      {
        question: "The Five Eyes (FVEY) is an intelligence alliance comprising of Canada, the United Kingdom, the United States and which other two countries?",
        answer: "Australia and New Zealand"
      },
      {
        question: "US government issues bonds are known as treasury bonds. By what name are UK government bonds known as?",
        answer: "gilts (short for \"gilt-edged securities\")."
      },
      {
        question: "In 2013, which heavy metal band performed to a group of 120 scientists and competition winners in Antarctica, becoming the first musical act to perform on all seven continents?",
        answer: "Metallica"
      },
      {
        question: "From which 1980 book does the following quote come: \"In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move\"?",
        answer: "The Restaurant at the End of the Universe, the second book in the Hitchhiker's Guide to the Galaxy series by Douglas Adams"
      },
      {
        question: "Which two-time Israeli Prime Minister, the first to ever be born in the region of British Palestine, was assassinated on 4th November 1995 by a far-right ultranationalist who opposed his peace initiatives?",
        answer: "Yitzhak Rabin"
      },
      {
        question: "Which famous author downgraded herself from billionaire to millionaire due to the vast sums she donated to charity, especially on medical causes and supporting at-risk women and children?",
        answer: "J. K. Rowling"
      },
      {
        question: "Brontology is the study of what meteorological phenomenon?",
        answer: "Thunder (Brontophobia is the fear of thunder)"
      },
      {
        question: "First awarded in 1901 the Nobel Prizes are currently awarded in 6 different categories including Physics, Peace, Chemistry, Literature, Medicine and what other category first introduced in 1968?",
        answer: "Economics"
      },
      {
        question: "In what famous work by the Greek philosopher Plato, authored around the 3rd century BC, would you find the Allegory of the cave?",
        answer: "The Republic"
      },
      {
        question: "Derived from the Greek word meaning 'Elder', Presbyterianism is a branch of reformed Protestantism that traces its roots to which country?",
        answer: "Scotland"
      },
      {
        question: "What famous stage name does William Jonathan Drayton Jr. use? A founding member of the band Public Enemy, he is known for wearing large clocks on a chain around his neck?",
        answer: "Flavor Flav"
      },
      {
        question: "Which Irish dramatist won the Nobel price for Literature in 1925. He is famous for works such as Man and Superman, Candida, Arms and the Man and Caesar and Cleopatra?",
        answer: "George Bernard Shaw"
      },
      {
        question: "Home to the oryx, springbox, desert-adapted lions and desert Elephants and spanning over 2000 sq.kms what is considered to be the World's oldest desert?",
        answer: "Namib Desert (stretches from Angola to South Africa)"
      },
      {
        question: "Remaining liquid even at absolute zero temperature and requiring about 25 atmospheres of pressurves to solidify, what element has the lowest melting point?",
        answer: "Helium (Named after the greek god of Sun, makes voice squeeky)"
      },
      {
        question: "Actor James McAvoy and Patrick Stewart have both portrayed which Marvel comics character?",
        answer: "The character is a scientific genius and a leading authority in genetics. Professor Charles Xavier / Professor X"
      },
      {
        question: "What term is used for the invisible material detected by its gravitational effect on other visible materials?",
        answer: "Dark Matter"
      },
      {
        question: "First entering the Mexican market in 1992 at a location in Mexico City, how many Taco Bell restaurants are currently in Mexico?",
        answer: "0 (Second attempt at Monterrey in 2007-2010 also failed)"
      },
      {
        question: "Which controversial figure, accused of murder, crypto pump-and-dump schemes and tax evasion and who committed suicide in a Spanish prison in 2021, was the creator of VirusScan in 1987, the first commercial antivirus software?",
        answer: "John McAfee"
      },
      {
        question: "Named after its inventor Zambonis traditionally appear during breaks in play of which sport?",
        answer: "Ice Hockey (they are the machines that clean and smooth the ice)"
      },
      {
        question: "A 1990s investigation by The Cricketer magazine found that a batter is most likely to get out when they are on what score?",
        answer: "0"
      },
      {
        question: "The Union Jack, the national flag of the United Kingdom was designed in 1606 representing its constituent nations under one soveriegn. Which of the nations of the United Kingdom is not represented on the Union Jack flag?",
        answer: "Wales"
      },
      {
        question: "Between 1981 and 1986, the Ronald Reagan administration secretly facilitated the illegal sale of arms to an embargoed Middle Eastern country, seeking to use the proceeds of the arms sale to fund an anti-Sandinista rebel group in Nicaragua, in a scandal known as what?",
        answer: "Iran-Contra Affair"
      },
      {
        question: "Which Sri Lankan all-round cricketer scored 35 runs with the bat in a single over in a match against South Africa in 2013, but gave up 34 with the ball in a single over in a match against New Zealand in 2018?",
        answer: "Thisara Perera"
      },
      {
        question: "In June 2023, who became the first player to captain a Test match-winning team without bowling, batting or keeping wicket at any point in any innings?",
        answer: "Ben Stokes against Ireland"
      },
      {
        question: "In the Official flag of the Western Province adopted in 1987, three symbolic animals represent each of the three districts. A golden lion represents Colombo and a golden bird represents Kalutara. What golden animal represents the Gampaha district?",
        answer: "Three heades golden cobra"
      },
      {
        question: "Depicting a congregation of ancient mathematicians, philosophers, and scientists, The School of Athens is a Fresco by which renaissance painter?",
        answer: "Raphael"
      },
      {
        question: "Established by a proclamation from the British colonial governor on August 2, 1800, what is the oldest government department in Sri Lanka.",
        answer: "The Survey Department"
      },
      {
        question: "Written by Simon De Silva, which 1905 novel is considered to be the very first Sinhala novel?",
        answer: "Meena"
      },
      {
        question: "What form of natural disaster can also mean an emphatic victory, particularly in an election?",
        answer: "Landslide"
      },
      {
        question: "Which Arabic phrase, typically used by Muslims as a blessing before an imminent action is featured in the song Bohemian Rhapsody by Queen. It means In the name of Allah.",
        answer: "Bismillah"
      },
      {
        question: "What celestial name is given to affluent individuals who finance business startups and early-stage companies using their own funds?",
        answer: "Angel investors"
      },
      {
        question: "With 7351 rooms, the First World Hotel is currently the largest hotel in the World. In which Asian country is it located?",
        answer: "Malaysia, Genting Highlands"
      },
      {
        question: "Since the official Chess World Championships began in 1886, it has only happened once in 1929, between then reigning champion Alexander Alekhine and challenger Efim Bogoljubov. What is it?",
        answer: "King being checkmated"
      },
      {
        question: "Which capital city shares its name with a popular type of grapesused to make raisins, and in Sri Lanka a traditional, sticky, and chewy confection similar to halwa.",
        answer: "Muscat"
      },
      {
        question: "Which European country and a member of the commonwealth voted in 1956 to become part of the United Kingdom, with 77% of those who voted favoring integration. Although ultimately it didn't quite work out for them?",
        answer: "Malta"
      },
      {
        question: "What is the most widely spoken language in the South of the equator?",
        answer: "Portuguese (Second most spoken language is Indonesian)"
      },
      {
        question: "Situated in the valley between two hills, the Black Mountain and Mount Ainslie, which capital city takes its name from the local Ngambri language for cleavage?",
        answer: "The parliament for the country is located in the area where the womb is. Canberra"
      }
    ],
  },
];
