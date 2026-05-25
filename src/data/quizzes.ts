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
    title: 'Week 1, Quiz Club',
    date: 'March 17, 2026',
    description: 'A diverse collection of 68 questions covering pop culture, history, geography, and science.',
    questions: [
      { question: 'In Pokemon, what does Pikachu eventually evolve into with the use of a Thunder Stone?', answer: 'Raichu' },
      { question: 'Established in 1926 and known as "The Mother Road" or "Main Street of America," and spanning roughly 2,400 miles, what historically famous road links Chicago and Santa Monica?', answer: 'Route 66' },
      { question: 'Which character is widely celebrated as making his public debut in the short film Steamboat Willie released on November 1928?', answer: 'MIckey Mouse' },
      { question: 'With over 1,600 major volcanoes and potentially hundreds of thousands or millions of smaller ones, which planet in the solar system has the most number of volcanoes?', answer: 'Venus (While Mars boasts the largest volcano Olympus Mons and Jupiter\'s moon Io is the most volcanically active*)*' },
      { question: 'Ratified in 1933, what did the 21st amendment to the US Constitution do?', answer: 'Repealed the 18th Amendment, officially ending the nationwide prohibition of alcohol' },
      { question: 'According to research from the University of Vermont that analyzed the emotional content of 10 languages, what is the happiest language in the World, having the highest concentration of positive, joy-filled words?', answer: 'Spanish (Based on the positivity bias in the 100,000 most frequently used words)' },
      { question: 'Entertaining players since the seventeenth century, what card game uses a pegged board to keep score and where players aim to score 121 points by forming card combinations?', answer: 'It is sometimes characterized as "Britain\'s national card game". Cribbage (Crib)' },
      { question: 'Which classic 1877 children\'s novel by English author Anna Sewell was written from a horse as a main characters perspective?', answer: 'Black Beauty' },
      { question: 'Native to west central Africa and considered one of the most colorful mammals in the world, what type of creature is a Mandrill?', answer: 'Monkey' },
      { question: 'Based on Friedrich Schiller\'s 1785 poem, a protest anthem and a celebration of music and used as the national anthem of Rhodesia, being called Rise, O Voices of Rhodesia, who composed \'Ode to Joy\'?', answer: 'Beethoven (Symphony no. 9)' },
      { question: 'Which actress has a habit of falling on big occasions. most famously falling on her way to collect her first Oscar?', answer: 'Jennifer Lawrence (She won the Best Actress for her performance in "Silver Linings Playbook" in 2013)' },
      { question: 'The clear watery liquid that separates from milk curds during Cheese making is known as what?', answer: 'It is also known as milk serum. Whey' },
      { question: 'What nickname is given for the famous stretch of Las Vegas Boulevard lined with casinos and resort hotels. The famous Mandalay Bay casino marks the Southernmost point.', answer: 'The Strip' },
      { question: 'Which state in the US is only one syllable long?', answer: 'It is also the only state to border only one other state. Maine' },
      { question: 'in the 1965 film the Sound of Music how many children are in the Von Trapp family?', answer: '7' },
      { question: 'Derived from the Latin word meaning to hunt or pursue, the edible flesh of a game animal and especially a deer is known by what name?', answer: 'Venison' },
      { question: 'Released in 1975 by Sony, what was the first physical product allowing you to watch movies at home called?', answer: 'Betamax (VHS was released a year later)' },
      { question: 'Referring to it as the \'nature\'s most perfect food\' what is the most favorite food of the cartoon cat Garfield?', answer: 'Lasagna' },
      { question: 'Soon after returning from outer space Katy Perry was photographed by the paparazzi on a yatch off the coast of Santa Barbara, sharing a kiss with which former politician?', answer: 'Justin Trudaeu' },
      { question: 'A popular luxury resort destination and home to mount Otemanu, what small South Pacific island north west of Tahiti in French Polynesia has an alliterative name?', answer: 'Bora Bora' },
      { question: 'What English city is home to the football club nicknamed "the saints", because of the club\'s beginnings as a church football team, and was a departure point of the Titanic in 1912?', answer: 'Southampton' },
      { question: 'Matt Weston won the Gold for Great Britain in the men\'s competition in Milan recently in which sport?', answer: 'One of the oldest winter sports, this thrilling sliding sport has athletes race head-first on  a small sled, reaching speeds over 130km/h. Skeleton' },
      { question: 'What animal did Edison film while experimenting with moving images with his Kinetograph invention, often considered to be the first motion-picture camera?', answer: 'Cat (The Boxing Cats, often cited as the first Cat video in history)' },
      { question: 'Which present day Italian city does Mount Vesuvius overlook?', answer: 'one of the oldest continuously inhabited urban areas in the world, it is the third largest city in Italy. Naples' },
      { question: 'The distinctive characteristic of what type of map uses contour lines to connect points of equal elevation, making it possible to show the height and shape of mountains and the steepness of slopes?', answer: 'Topographic map' },
      { question: 'Only the fifth most populous city of the country, Yamoussoukro, is the official capital of which country. In 1983, the then President Houphouët-Boigny made it the political and administrative capital as the city was his birthplace. It is also the fourth movement of the country\'s capital city in a century.', answer: 'Ivory Coast (Cote\'d Ivoire)' },
      { question: 'A peninsula is a piece of land that projects into a body of water, connected to a larger mainland on only one side. What is the largest peninsula in the world?', answer: 'Arabian Peninsula' },
      { question: 'The pirivena is a monastic college educating Buddhist monks. Which famous pirivena was constructed by King Parakramabahu VI during the Kotte period to honour his mother?', answer: 'It bears his mother\'s name and although it was destroyed by the Portuguese in 1582 was rebuilt afterwards. Pepiliyana Sunethra Devi Pirivena' },
      { question: 'Spanish, French and Portuguese are all official languages in which country, located in the west coast of Central Africa. It\'s the only Spanish speaking country in Africa.', answer: 'Equitorial Guinea' },
      { question: 'The wealthiest Ceylonese in the 19th century which entrepreneur, planter and philanthropist was the first native to be honored with a statue located in the Lipton Circus.  His contributions include a maternity hospital which carries his name and the Prince and Princess of Wales colleges in Moratuwa.', answer: 'Charles Henry De Soysa' },
      { question: 'The Rolling Stones hit single \'Paint it Black\' was the opening theme song for which TV series first aired in 1987 and based on the events of the Vietnam War?', answer: 'Tour of Duty' },
      { question: 'Which two word English term meaning extremely or overly zealous or enthusiastic is derived from the Chinese for work together and is also the name of a 1986 comedy movie featuring Michael Keaton which portrays the takeover of an American car plant by a Japanese corporation.', answer: 'Gung Ho' },
      { question: 'What stage musical which was composed by Leonard Bernstein and opened on Broadway in 1957 is an adaptation of the Shakespeare play Romeo and Juliet?', answer: 'West Side Story' },
      { question: 'Which American national park in Southern California is named after a tall branching native plant with the scientific name Yuka Brevogia?', answer: 'It is also the name of a 1987 album by U2. Joshua Tree' },
      { question: 'With over 2.3 million employees, which company employs the most number of people in the world?', answer: 'Walmart' },
      { question: 'Name either of the 2 U.S. states that shares a border with eight other states?', answer: 'Tennessee, Missouri' },
      { question: 'Originally popular in the 80s, which four letter slang word, as an acronym, has been trending in social media of late, referring to a married couple with 2 salaries and no children, often resulting in higher disposable income?', answer: 'DINK (Dual Income No Kids)' },
      { question: 'What chewy dessert topping is made from tartar and egg whites and often found in pie?', answer: 'Small piped cookies made of this are better known as kisses. Meringue' },
      { question: 'A derivation from the White movement, an anti-communist force during the Russian Civil War, what country is nicknamed White Russia?', answer: 'Belerus' },
      { question: 'Which non-alcoholic mixed red drink traditionally made with ginger ale and a splash of grenadine gets its name from a renowned red-haired child actress who in her later interviews confessed that it was too sweet and she hated it.', answer: 'Shirley Temple' },
      { question: 'Which European capital city is built on 14 islands connected by over 50 bridges?', answer: 'It is sometimes referred to as the Venice of the North. Stockholm' },
      { question: 'Consisting of several small waterfalls converging into one and boasting a width of over 20 meters what is the widest waterfall in Sri Lanka?', answer: 'Bomburu Ella (Perawella Falls)' },
      { question: 'Who recently received recognition for lifetime achievement at the Actor Awards?', answer: 'Appearing in a total of 9 films across the franchises this actor played both Han Solo and Indiana Jones. Harrison Ford ( 6 Star Wars and 3 Indiana Jones)' },
      { question: 'With over 11,500 performances and featuring a character named Mister Cellophane what is the longest running show currently playing in Broadway. It is also notably the longest-running American musical in Broadway history.', answer: 'Chicago (the 1996 revival, )' },
      { question: 'What do you call a substance consisting of two or more distinct types of particles whích can be separated by mechanical or physical means?', answer: 'Mixture' },
      { question: 'What term is given to the dried coconut meat from which coconut oil is extracted?', answer: 'Copra' },
      { question: 'Although shared by two people in several occasions which Nobel Prize has never been shared by three laureates?', answer: 'It\'s traditionally awarded to a person for their entire body of work, rather than a single specific discovery or study. Literature' },
      { question: 'Whom did Daulat Khan Lodi, the then Governor of Lahore, invite to invade India?', answer: 'The person, a descendent of Timur and Genghis Khan, accepted the invitation and defeated Ibrahim Lodi, the Sultan of Delhi in the First Battle of Panipat in 1526. Babur, the ruler of Kabul' },
      { question: 'In 1973, which country produced stamps in the shape of records that could be played?', answer: 'The stamps played the Royal Anthem, folk-songs and a short history of the country. They were called the first talking stamps of the world. Bhutan' },
      { question: 'During the recently concluded 98th Academy Awards, which movie won the awards for both Best Original Song and Best Animated Film?', answer: 'KPop Demon Hunters' },
      { question: 'According to legend, the Ravanastram or the Ravanahaththa, a stringed instrument made by Ravana, inspired which modern-day instrument?', answer: 'The old instrument is still used today, particularly by street musicians in Rajasthan and Gujarat. Sri Lankan composer Dinesh Subasinghe also used it in several of his compositions. Violin' },
      { question: 'Often reaching temperatures of upto 39.6 degrees celcius, which organ in the human body generates the most heat at rest?', answer: 'Liver (due to intense metabolism)' },
      { question: 'Which work by Shakespeare is considered unlucky as it is believed that the lines contain magic spells?', answer: 'Since its first performance in 1606 it has been plagued by incidents including unexplained accidents, fatal injuries, sudden illnesses, and suicides. If the name of the play is spoken inside a theater, it is tradition for the offender to leave the building, turn around three times, spit, swear, and knock to be let back in. Macbeth' },
      { question: 'Ballia, Banda, Gonda, Bagpat and Pilibhit are all districts of which state in India, which has the most number of district among all the states?', answer: 'Uttar Pradesh' },
      { question: 'Considered to be its highest honor, the Bronze Wolf Award is presented by which international organization?', answer: 'World Scouting' },
      { question: 'Which two countries in Africa were never colonized?', answer: 'Ethiopia, Liberia' },
      { question: 'What system of alternative medicine based on the principle of like cures like was founded by German physician Dr. Samuel Hahnemann in the late 18th century?', answer: 'Homeopathy' },
      { question: 'In the official hindi translation of which famous comic book would you find the characters Santu and Bantu and Professor Aryabhat Suryamukhi along with a dog named Nutkhut?', answer: 'Adventures of Tin Tin' },
      { question: 'What is the name of the coffee drink you get by diluting an espresso in water?', answer: 'Americano' },
      { question: 'With certain species capable of growing up to 3 feet in a day, what is the fastest growing plant on earth?', answer: 'It is a member of the grass family. Bamboo' },
      { question: 'Officially called the Gentleman\'s Singles Challenge Cup, the Wimbledon Men\'s Trophy features what fruit on top, as a 19th century symbol of luxury and prestige?', answer: 'Pineapple' },
      { question: 'In human anatomy, what joint connects the humerus of the arm to the radius of the ulna?', answer: 'Elbow' },
      { question: 'What term is used for a rotating tray that is often placed at the top on the table to aid in distributing food?', answer: 'According to lore Thomas Jefferson invented it for his daughter, by whose name it is now called, initially calling it the \'Dumbwaiter\'. Lazy Susan' },
      { question: 'Native to the Caribbean islands of Dominica and Montserrat, what kind of animal is a mountain chicken?', answer: 'Frog' },
      { question: 'In the classic boardgame Battleship what is the minimum number of hits needed to sink your opponents battleship?', answer: '4' },
      { question: 'On March 13, France returned the \'Talking Drum\', a drum designed to mimic human speech,  after more than 100 years after seizing it to which West African nation?', answer: 'It is among a list of 148 items that the country wants back. Ivory Coast' },
      { question: 'The marriage of Lady Catherine to Petrus Gonsalvus a gentleman in the court of Henry II of France, who suffered from hypertrichosis, or Ambras syndrome, is said to have inspired which Fairy Tale?', answer: 'Beauty and the Beast (which causes the body to be completely covered in hair)' },
      { question: 'International Children\'s Book Day is celebrated every year on April 2, on which famous author\'s birthday?', answer: 'Hans Christian Anderson 69.' },
    ],
  },
  {
    id: 2,
    title: 'Week 2, Quiz Club',
    date: 'April 7, 2026',
    description: '53 intriguing questions ranging from award-winning music to ancient history and natural wonders.',
    questions: [
      { question: 'On 26 March, singer Olivia Dean took home three awards at the MOBO awards. What does MOBO stand for?', answer: 'The UK awards celebrated 30 years this year. Music of Black Origin' },
      { question: 'One March 29, four men entered the Magnani Rocca Foundation Museum near Palma Italy and stole three paintings of famous French artists worth nearly 10 million dollars. Among them paintings by Cezanne and Matisse. But the most expensive painting worth nearly 6.5 million dollars was Les Poissons (The Fish) by which artist?', answer: 'Pierre-Auguste Renoir' },
      { question: 'Setting sail for the Paris Peace Conference in December 1918, who became the first sitting US president to cross the Atlantic?', answer: 'Woodrow Wilson' },
      { question: 'Originating in the Alps in the early 11th century, which Royal ruled the Italian peninsula until the 1946 referendum that abolished the monarchy?', answer: 'It is also the name of a famous West-End Theatre in London and also a cinema hall in Wellawatte. Savoy' },
      { question: 'From the Latin for "to strip off leaves" what term is used to describe itthe method of removing dead cells from your skin?', answer: 'Exfoliation' },
      { question: 'A light-up head of which Star Wars character, originally featured in the 1980\'s movie, was sold for a million dollars at auction recently. The character appeared in all 9 of the main Star Wars movies.', answer: 'C-3PO' },
      { question: 'Home to the largest rose quartz mountain in South Asia, which temple and forest sanctuary,  dating back to the era of King Devnampiyatissa in the 3rd century BC, is located close to Dambulla?', answer: 'It was recently declared a national heritage of Sri Lanka. National Namal Uyana' },
      { question: '"No matter where you are from or what you look like, we\'re all one people". Who said this recently while looking at Earth. He was the first black astronaut to serve as a member of a full duration ISS crew and is also the first black astronaut to reach deep space.', answer: 'Victor Glover' },
      { question: 'Classified as an idiophone in the Hornbostel-Sachs classification system, what family of musical instruments does the triangle belong to?', answer: 'Percussion' },
      { question: 'Officially enthroned on the 25th of March, who became the first female archbishop of Cantebury. She was nurse in the NHS before she became a minister in the Church of England.', answer: 'Dame Sarah Mullaly' },
      { question: 'In 2022, Brad Pitt said that he suffers from a condition called \'Prosopagnosia\', which is the inability to recognize what?', answer: 'Faces' },
      { question: 'Sworn in on Sep 20, 1989, who was the final state President of South Africa and shared the Nobel Peace Prize in 1993 with Nelson Mandela?', answer: 'F W De Klerk' },
      { question: 'A helixophile is a collector of what wine related accessory?', answer: 'Corkscrew' },
      { question: 'With documents and traditions dating back to the 14th century which worldwide secret society founded its first British Grand Lodge in 1717?', answer: 'The Masons (Freemasons)' },
      { question: 'Which symbol of the United States was derived from 2 earlier symbolic folklore figures—Brother Jonathan & Yankee Doodle?', answer: 'Uncle Sam' },
      { question: 'its roots back to moonshine runners during Prohibition and considered to be one of the top-ranked motorsports organizations in the world, what does NASCAR stand for?', answer: 'National Association for Stock Car Auto Racing' },
      { question: 'Directed by Francis Ford Coppola and starring Martin Sheen and Robert Duvall, the 1979 American psychological war thriller  Apocalypse Now was set in which country?', answer: 'Vietnam' },
      { question: 'Defeating Poland\'s Zbigniew Pietrzykowski, Muhammed Ali won the light heavyweight boxing gold medal in which Olympics?', answer: 'It was the first olympics to be fully televised where tapes of the games were flown into New York after the end of each day. 1960 Rome' },
      { question: 'Who holds the all-time NBA record for most points in a single game, scoring 100 points for the Philadelphia Warriors against the New York Knicks?', answer: 'Wilt Chamberlain (1962)' },
      { question: 'What were the first names of Dr. Jekyll and Mr. Hyde?', answer: 'Dr. Henry Jekyll and Mr. Edward Hyde' },
      { question: 'Widely regarded as one of the greatest figures in cinema, which film maker said "Always make the audience suffer as much as possible." Alfred Hitchcock', answer: '' },
      { question: 'Capable of growing more than 40 feet and weighing as much as 30000 lbs, what fish is considered the largest in the world?', answer: 'Whale Shark' },
      { question: 'Which natural cheese that is relatively hard, off-white and sometimes sharp-tasting gets its name from the Somerset village where it is said to have originated froim?', answer: 'Cheddar' },
      { question: 'Renowned for his victory over British ships of war off the east coast of England, which American naval hero, considered the father of the American Navy, went onto serve Catherine the Great, commanding the Russian forces in the Black Sea against the Ottoman Empire?', answer: 'John Paul Jones' },
      { question: 'By what name was Namibia known before 1968?', answer: 'South West Africa' },
      { question: 'What name is given to atoms with the same atomic number but different numbers of neutrons in their nuclei?', answer: 'Isotopes' },
      { question: 'Native to freshwater habitats from south-eastern Iran to the Indian subcontinent, what sort of creature is a mugger?', answer: 'A Crocodile' },
      { question: 'Located around 150 kilometres southeast of the Cape of Good Hope, which cape is the true southernmost tip of Africa and the official meeting point of the Atlantic and Indian Oceans?', answer: 'The name is derived from the Portuguese for Needles, because the compass needle pointed straight to true north, with no deviation. Cape of Agulhas' },
      { question: 'Which Sri Lankan movie won the Best Children\'s movie award at the 1980 Italy International Film Festival and is often considered the first movie solely dedicated to children in Sri Lanka?', answer: 'Handaya' },
      { question: 'In Norse mythology, what was the home of the principal gods, linked to earth by the rainbow bridge Bifrost?', answer: 'Asgard' },
      { question: 'By what name were the Nazi secret police, formed in 1933 by Hermann Göring, known?', answer: 'Gestapo' },
      { question: 'Which alcoholic drink distilled from the agave plant is named after a town in Mexico?', answer: 'Tequila' },
      { question: 'Which Spice Girl starred in the 2023 American biographical sports drama film Gran Turismo?', answer: 'She is also famously married to a former racing driver? Geri Halliwell Horner (Ginger Spice) married to Christian Horner' },
      { question: 'What word, meaning a low pressure belt of surface winds at the equator, can also relate to a bout of sadness?', answer: 'Doldrums' },
      { question: 'Born in Middlesex with a career spanning over 5 decades Reg Dwight is the real name of which celebrity?', answer: 'Sir Elton John' },
      { question: 'Vu Lan or the Wondering Souls day is the second biggest festival in which country?', answer: 'The biggest is Tet which celebrates the Lunar New Year. Vietnam' },
      { question: 'Known as Dona Aurora, Aurora Quezon, the widow of which country\'s first president, was assassinated by the Communist-led Hukbalahaps in 1949?', answer: 'The Phillipines' },
      { question: 'The cluster of 7 articulating bones in the ankle, the cartilaginous plates in the eyelids and the the final segment of an arthropod leg, all share the name with which ancient city located in modern day Turkey where Antony and Cleopatra are said to have met and later the home of Saint Paul?', answer: 'Tarsus' },
      { question: 'Which British lawyer and academic, who served as the Vice Chancellor of the University of Ceylon from 1942-1955 had roles to play in the drafting of constitutions in Ceylon, Pakistan, the Federation of Malaya and the Kingdom of Nepal?', answer: 'Ivor Jennings' },
      { question: 'Which planet was originally named Georgium Sidus by the discoverer, after King George III of England?', answer: 'Uranus' },
      { question: 'The longest known cave system in the world, which as of 2025 has almost 700kms of passageways surveys, is located in which appropriately named national park in Kentucky?', answer: 'Mammoth Cave National Park' },
      { question: 'A class of arthropods, hexapods are commonly known as what?', answer: 'Insects' },
      { question: 'By what name is the fruit granadilla which has a wrinkled skin when ripe and is full of tiny seeds better known as?', answer: 'Passion Fruit' },
      { question: 'Now known not to exist, what name was given to the major planet thought during the 19th century to orbit the sun within the orbit of Mercury?', answer: 'In Star Trek it is also the fictional home planet for the humanoid species that is known for their use of logic and reason and their pronounced eye brows and pointy ears. Most famous member being Spock. Vulcan.' },
      { question: 'In Opera, which island provides the setting for Bizet\'s Les pêcheurs de perles (or the Pearl Fishers) which premiered in 1863.', answer: 'Ceylon (Sri Lanka)' },
      { question: 'Who in 1985 became the first non-seeded player to win the Wimbledon men\'s singles title?', answer: 'Boris Becker' },
      { question: 'The area north of 10 degrees south latitude in the Indian ocean is which "zone", named after the wet wind system that reverses direction with the seasons?', answer: 'Monsoon' },
      { question: 'What common sulfide mineral is known as "fool\'s gold" due to its brass-yellow color and metallic luster. Its brittle nature makes it unsuitable for shaping like real gold.', answer: 'Pyrite' },
      { question: 'Apart from Greenland, what is the other self governing territory that is part of the Kingdom of Denmark?', answer: 'Feroe Islands (North Atlantic between Scotland and Iceland)' },
      { question: 'Featuring over 30km of tunnels and 371600 square meters of retails space, the largest underground shopping complex in the world is found in which city?', answer: 'Toronto' },
      { question: 'Flowing through 10 nations, visiting 4 national capitals and marking 8 national borders along its 2,800 km course, which river flows through the most number of countries in the world?', answer: 'Danube' },
      { question: 'Which famous comedian hosted the 68th Annual Grammy Awards that were held in February this year?', answer: 'Trevor Noah' },
      { question: 'Located in the Kalutara District and named after a legendary Chinese Buddhist monk who was an alleged resident there, what is the largest natural stone cave system in South Asia?', answer: 'Fa Hien Cave (Pahiyangala) 54.' },
    ],
  },
  {
    id: 3,
    title: 'Week 3, Quiz Club',
    date: 'April 22, 2026',
    description: 'A 50-question deep dive into mythology, science, history, and global culture.',
    questions: [
      { question: 'In Tantric buddhism which legendary kingdom, described in the Kalachakra Tantra, is the birthplace of the 25th Kalki king Maitreya, the future Buddha. According to the prophecy he will emerge with huge army to vanquish the Dark Forces and usher in a worldwide Golden Age. The place is also the title of a 2025 Telugu-language supernatural horror movie directed by Ugandar Muni.', answer: 'Shambhala' },
      { question: 'In Greek mythology, what name is given to Stheno, Euryale, and Medusa, the the three monstrous sisters who had snakes for hair and could change men to stone with their gaze?', answer: 'Gorgons' },
      { question: 'Edelweiss and My Favorite Things are songs from which 1965 movie soundtrack with music by Richard Rogers?', answer: 'Sound of Music' },
      { question: 'In October 2024, Ratu Naiqama Lalabalavu was sworn in as the 7th President of which Pacific nation, an archipelago of more than 300 islands of which, Viti Levu and Vanua Levu, contain most of the population.', answer: 'Fiji' },
      { question: 'Build in the 1930s and considered a technological marvel, which defensive line comprising over 142 forts, 352 casemates, and around 5,000 blockhouses, was circumvented by the German army during the 1940 invasion of France, because it didn\'t cover the Ardennes forest which was considered impassable.', answer: 'Maginot Line' },
      { question: 'In 2010 dystopian novel Mockingjay is the last installment of the Hunger Games series by which American author?', answer: 'Suzanne Collins' },
      { question: 'Baryons are a category of subatomic particles known as hadrons, are heavy subatomic particles that are made up of three quarks. Which* *baryon is composed to 2 up quarks and 1 down quark and was discovered in 1918?', answer: 'Proton' },
      { question: 'What is the maximum number of points awarded for scoring a goal in professional lacrosse?', answer: '2' },
      { question: 'The amino acid tryptophan, the element tungsten, and the SI unit of power are all abbreviated by which letter?', answer: 'W' },
      { question: 'On April 21, 1934 the Daily Mail published an alleged photo of which mysterious creature, which later a man named Christian Spurling admitted to was a toy submarine and some wood he built to fool the newspaper?', answer: 'Loch Ness monster' },
      { question: 'Turul, a mythical bird of prey is the national symbol of which European country, whose currency is the Forint.', answer: 'Hungary' },
      { question: 'A 19th century painting by Indian artist Raja Ravi Varma became the most expensive artwork ever sold at Auction fetching 17.9 million USD. Which gender-fluid Hindu god is depicted in the picture, hugging his mother while she milks a cow?', answer: 'Krishna' },
      { question: 'In July, Lieutenant General Susan Coyle will take over as the first woman to lead the army in which country?', answer: 'Australia' },
      { question: 'In Cambodia, a statue was erected to honor Magawa, who helped find more than 100  buried landmines in his five year career. What type of animal was Magawa?', answer: 'Rat' },
      { question: 'Known as the land of the volcanoes, which country, about a third of the size of Sri Lanka, is the smallest country in Central America?', answer: 'El Salvadore' },
      { question: 'Which famous American Pop-Rock band was originally known as Kara\'s Flowers. There latest album Love Is Like was released in August last year.', answer: 'Maroon 5 (Adam Lavine)' },
      { question: 'Inaugurated on May 17, 1875, what is the oldest continuously held sporting event in the US?', answer: 'it has been known as the The Most Exciting Two Minutes in Sports. Kentucky Derby' },
      { question: 'What was considered to be the tallest structure ever to be built at the time of 250 BC?', answer: 'It is one of the seven wonders of the ancient world. Lighthouse of Alexandria' },
      { question: 'Deriving its name from the band Bill Monroe and the Blue Grass Boys, Blue Grass music is a genre of American roots music that developed in the 1940s. What 5 stringed instrument is often used in Blue Grass music. African slaves are thought to have introduced the instrument to America?', answer: 'Banjo' },
      { question: 'The point of an anchor fluke,  a weapon in use up to the 18th century that consists of a long staff ending in a hook-shaped blade, the jaws of a bird together with their covering, a proposed new law in the US and a request for payment of money owed all share which term?', answer: 'Bill' },
      { question: '\'Oro y Plata\' is the motto of which US state, the only one to have a motto in Spanish?', answer: 'Montana (meaning Gold and Silver)' },
      { question: 'First produced in Nimes (Neem) in France, which fabric is traditionally used to make denim?', answer: 'Cotton' },
      { question: 'Instead of moving their eyes, owls swivel their heads to view their surroundings. Approximately how many degrees can an owl swivel their head around?', answer: '270' },
      { question: 'People born between 1928 until 1945 are known as belonging to what generation?', answer: 'The term coined by a 1951 *Time* magazine article, suggest that they were more conservative and less rebellious than previous generations. Silent Generation' },
      { question: 'Deriving its name from the Latin word meaning kernal, what part of the cell contains genetic material in most organisms?', answer: 'Nucleus' },
      { question: 'Arising from the Lumbar and running down to the feet, what is the longest and largest nerve in the human body?', answer: 'Sciatic Nerve' },
      { question: 'Born in 1901 as Pempa Tendupi in the Kingdom of Sikkim, who wrote more than 40 books of poetry and is considered one of the greatest Sinhala poets of all time?', answer: 'S Mahinda Himi' },
      { question: 'Often cited as the father of modern Sinhala literature Martin Wickramasinghe wrote countless books including novels, short stories, plays and non-fiction works on anthropology and philosophy among other things. Published in 1914 what is considered to be his first novel?', answer: 'Leela (his first novels were Leela, Soma, Irangani, Seetha)' },
      { question: 'The Mridangam in Tamil Nadu, the Pakhavaj in Orissa and Kendang in Indonesia are closely related to which double headed percussion instrument in Sri Lanka?', answer: 'Geta Beraya' },
      { question: 'In March, a new government rule in Bolivia extending the total number of academic days in school to 200 per year, resulted in protests by which group of performers?', answer: 'Clowns' },
      { question: 'English composer Gustav Holst is most famous for a seven-part musical suite about what scientific group?', answer: 'It was written during the period between 1914 and 1917. The Planets. The movements are named (The bringer of war, the bringer of Peace, the winged messenger, the bringer of jollity, the bringer of old age, the magician and the mystic.' },
      { question: 'Nnown as the *Taiji Tu* or "diagram of the supreme ultimate" what s the main symbol of Taoism?', answer: 'Yin-Yang' },
      { question: 'What name is given to the political revolution of 1868 that bought the demise of the Tokugawa shogunate and restored Japan to direct imperial rule, ushering an era of modernization and Westernization of the country?', answer: 'Meiji Restoration' },
      { question: 'A newly hatched butterfly is known as what?', answer: 'Catapiller' },
      { question: 'Originating from the mughal era what is the name given to Indian food cooked over charcoal in a clay oven?', answer: 'The food derives its name from the oven.  Tandoori (The oven is called Tandoor)' },
      { question: 'With only one recorded defeat in over 300 matches in a dozen years, which US president is the only one inducted to the Wrestling Hall of Fame?', answer: 'Abraham Lincoln' },
      { question: 'Which historically significant port city in Sri Lanka was known as Mahathiththa or Mathota ?', answer: 'Mannar' },
      { question: 'On March 28, a truck filled with a shipment of 413,000 Kit Kat bars had vanished while en route from Italy to Poland. What shape were those Kit Kats?', answer: 'F! Racing Car shaped' },
      { question: 'April 1 was declared a public holiday in the DR Congo after the football team qualified for the 2026 world cup, the first time since 1974 when they competed as Zaire. By what nickname is the DR Congolese football team known as, an animal that is featured in the team\'s logo?', answer: 'Les Leopards' },
      { question: 'In 2002, which Dreamworks\' animation movie, directed by Andrew Adamson and Vicky Jenson, became the first movie to win the Oscar for the best animated feature film?', answer: 'Shrek' },
      { question: 'Who was the President of Taiwan from 1949 to 1975?', answer: 'From 1928 until 49 he had been the head of the Nationalist government in China. Chiang Kai Shek' },
      { question: 'Which former Indian cricketer from Karnataka,  the first Anglo-Indian of Scottish origin to play for India,  was part of the 1983 team that won the World cup and was the highest wicket take in the tournament. Later he went on to become the 36th President of the BCCI.', answer: 'Roger Binny' },
      { question: 'The Nilgiri mountains is home to the tribes of Toda, Kota, Badaga and Kurumba in which Indian state?', answer: 'Tamil Nadu' },
      { question: 'Which computer virus which infected nearly 10 million Windows computers in the year 2000 was created by Filipino student Onel de Guzman as a way to steal internet access credentials?', answer: 'The virus forced organizations, including the Pentagon, Ford Motor Company, and many governments, to shut down their email systems to stop the spread.The Love Bug (ILOVEYOU worm)' },
      { question: 'Lara\'s Theme by French composer Maurice Jarre was the theme song for which movie from 1965?', answer: 'It later became the basis of the song \'Somewhere, My Love\'. Dr Zhivago' },
      { question: 'Who took over as President of the US after Nixon resigned in 1974 over the watergate scandal?', answer: 'Gerald Ford' },
      { question: 'Perestroika, meaning reconstruction in Russian was the philosophy associated with which Russian president?', answer: 'Mikhail Gorbechov' },
      { question: 'Part of the kikumon, which flower is the personal symbol of Japanese imperial family?', answer: 'The empress notably wears an exclusive all diamond tiara with the flower. Chrysanthemum' },
      { question: 'What is the smallest bone in the human body?', answer: 'The stapes, or stirrup (located in the middle ear, and is critical for hearing)' },
      { question: 'Who was burned at the stake for heresy on May 30, 1431 in Rouen, France after a biased ecclesiastical trial led by Bishop Pierre Cauchon?', answer: 'Joan of Arc, *Jeanne d\'Arc* (for wearing men\'s clothing and claiming divine guidance) 51.' },
    ],
  },
  {
    id: 4,
    title: 'Week 4, Quiz Club',
    date: 'May 5, 2026',
    description: '49 questions exploring world records, AI, history, and the natural world.',
    questions: [
      { question: 'Which 8 letter word that begins with a C links, birds, bishops and compasses?', answer: 'Cardinal' },
      { question: 'Famous for its annual Gilroy Garlic Festival and garlic infused foods including garlic Ice Cream, and known as the Garlic Capital of the World, the city of Gilroy is located in which US state?', answer: 'California' },
      { question: 'With an area of about twice the size of Sri Lanka, what is the largest country in Central America?', answer: 'Nicaragua (t’s dubbed the land of lakes and volcanoes)' },
      { question: 'What is the name of the warm and swift Atlantic ocean current that originates in the Gulf of Mexico and flows through the Straits of Florida and up the eastern coastline of the United States?', answer: 'It is said to be the reason why Western European countries like England have a temperate climate. Gulf Stream' },
      { question: 'Which portable, box-shaped, bellows-driven musical instrument is also known as the Squeeze box?', answer: 'Accordian' },
      { question: 'First included in the 1900 Paris Olympics, which official but controversial sport has never been part of the Olympics since?', answer: 'Belgian Leon de Lundon won Gold in the event. Live Pigeon Shooting. Nearly 300 birds were killed. Only time animals were intentionally killed in the Olympics.' },
      { question: 'The favorite of both Queen Victoria and Marie Antoinette, which flower native to Mexico and related to Sun Flowers and Daisies is also the National Flower of Mexico?', answer: 'Dahlia' },
      { question: 'Knighted by the King of Norway in 2008, Sir Nils Olav II was succeeded by Sir Nils Olav III, who was promoted to Brigadier in 2016 and to Major General in August 2023?', answer: 'During the knighthood ceremony, King Harold V\'s message read that Nils was in every way qualified to receive the honour and dignity of knighthood. He is also recognized in the Guinness Book of World Records as the highest ranking member of his species? What kind of animal is Nils Olav? Penguin' },
      { question: 'Pete Best was the original drummer for which famous band?', answer: 'He was dismissed shortly before the band attained global fame. According to one member of the band, it was because he was a \'lousy drummer\'? Beatles' },
      { question: 'The Brumbies are a species of wild horses found in which country?', answer: 'The name is also shared by a Sports team in the country. Australia (Rugby Union Team based in Canberra)' },
      { question: 'Kenyan Sebastian Sawe and Ethiopia\'s Yomif Kejelcha became the first men to achieve what in a Marathon at this year\'s London marathon held in April?', answer: 'First two to officially finish under 2 hours' },
      { question: 'Which country hosts the only oversees military base of the Japanese self defence forces?', answer: 'Djibouti' },
      { question: 'An article published in Nature Geoscience in 2016 described the concept of the LALIA, a severe, long-lasting cooling period in the Northern Hemisphere from roughly 536 to 660 CE, triggered by volcanic eruptions, which caused famine and social upheaval, potentially enabling plagues, and resulting in the decline of the Eastern Roman Empire. What does LALIA stand for?', answer: 'Late Antique Little Ice Age' },
      { question: 'The recent heat wave in Sri Lanka has got many people interested in purchasing Air Conditioner. What company, founded in 1924 in Osaka is world’s largest air conditioner maker by sales?', answer: 'Daikin' },
      { question: 'With over 45000 stores worldwide which company has now overtaken McDonalds as the World\'s largest fast food chain by store count. The chain primarily focuses on affordable tea and ice cream across Asia.', answer: 'Mixue' },
      { question: 'Having unlimited jurisdiction over civil, revenue, matrimonial, and land matters, as well as commercial disputes below LKR 20 million, what is the primary court for filing civil cases in Sri Lanka?', answer: 'District Court' },
      { question: 'Known as the father of Indian drama, which sage was also the father of 100 sons who were his disciples and is said to have authored the influential performance arts treatise Natya Shastra?', answer: 'Bharata Muni' },
      { question: 'With a career spanning over 50 years which influential American singer is known by numerous nicknames including "Mr. Dynamite", "the Hardest-Working Man in Show Business", "Minister of New Super Heavy Funk", "Godfather of Soul", "King of Soul", and "Soul Brother No. 1"?', answer: 'Numerous songs have been released with the title containing his name, including \_\_\_ is dead, \_\_\_ is still alive, who the f is \_\_\_\_, \_\_\_\_\_ is dead or alive and I feel better than \_\_\_\_. James Brown' },
      { question: 'Named after the Indian cricketer who used the technique twice against Australian Bill Brown in a test series, what name is given to the cricket dismissal where a bowler runs out the non-striker before releasing the ball, where the batter had left their crease early?', answer: 'Mankading (Vinoo Mankad)' },
      { question: 'Having been hit by 17 earthquakes within a single day ,speculation has increased on whether nuclear tests are being conducted in which highly-classified US Air Force facility in Nevada. home to many conspiracy theories?', answer: 'Area 51' },
      { question: 'A recess in a wall specially for holding a statue or vase shares its name with which term denoting a specific, well-defined segment of a market where a firm or an individual can excel by targeting a unique subset of customers, address unique needs, and often with minimal competition?', answer: 'Niche' },
      { question: 'Published between 1883and 1885 in four volumes, Thus Spoke Zarathustra: A Book for All and None, is a famous work by which German philosopher?', answer: 'Friedrich Wilhelm Nietzsche' },
      { question: 'The 2009  multi award-winning 2 player card game by Sebastien Pauchon, where players trade goods to become the wealthiest merchant shares its name with which Indian city, founded by Sawai Jai Singh II in 1727 and known as the pink city. It is the state capital of Rajasthan.', answer: 'Jaipur' },
      { question: 'What\'s the difference in voltage between a AA battery and a D-Cell battery. None.', answer: 'They are both 1.5V with the AA battery having less capacity' },
      { question: 'Operation Banner, which ended in 2007, was the longest continuous deployment of armed forces in British military history. Where was the operation conducted?', answer: 'Northern Ireland' },
      { question: 'In his famous 1911 book what did Ambrose Bierce describe as \'A temporary insanity curable by marriage or by the removal of the patient from the influences under which he incurred the disorder\'?', answer: 'Love' },
      { question: 'Which word that is used for a web page, screen, etc. that updates(changes) often to show the latest information also means to give food to a person, group, or animal?', answer: 'Feed' },
      { question: 'Numbering around 57000, the Kalaallits are indigenous people from which Island?', answer: 'Greenland' },
      { question: 'Hosting the annual Great Migration of over 2 million wildebeest, zebras, and gazelles, the Unesco Heritage Site of Serengeti is located  in which country?', answer: 'Tanzania' },
      { question: 'Founded in Hangzhou and operating across frontier technology sectors with AI as a common thread, the \'Six Little Dragons\' are six deep-tech startups that include Unitree Robotics, DEEP Robotics, BrainCo, Game Science, Manycore Tech and which famous AI company that is owned by Chinese hedge fund High-Flyer?', answer: 'DeepSeek' },
      { question: 'With up to 1 million hairs per square inch, which animal has the thickest and densest fur in the animal kingdom.', answer: 'Sea Otter' },
      { question: 'Evolved from vulgar Latin in the middle ages, Catalon is the sole official language of which European country?', answer: 'Andorra' },
      { question: 'A computer program by British computer scientist William Tunstall-Pedoe had determined. Sunday, April 11, of which year to be the most boring day in modern history, due to lack of any significant activity and no major globally impactful events and fewer notable deaths or births?', answer: 'It falls in the middle of a decade which in the US was known as the decade of dull conformity.  1954' },
      { question: 'Based on Piper Kerman\'s memoir of the same name, about her experience in a minimum security federal prison in upstate New York, which Netflix drama series by Jenji Kohen was the first to receive nominations and win Emmy\'s in two different genres, namely both comedy and drama. It ran for seven seasons until 2019.', answer: 'Orange is the New Black' },
      { question: 'One of the new seven wonders of the World, which ancient city known to its inhabitants as Raqmu is famously known as the \'Rose City\' because of the color of the sandstone from which it is carved?', answer: 'Petra' },
      { question: 'What is are only two countries whose name begins with A but does not end with A?', answer: 'Azerbaijan and Afghanistan' },
      { question: 'Which company recently signed a three-year deal to supply 60 gigawatt-hours of its Sodium-ion batteries (which uses the less expensive, more abundant metal) to a Chinese power equipment maker?', answer: 'It is the largest EV battery suppler in the World? CATL (Contemporary Amperex Technology Co. Limited)' },
      { question: 'Named after a stable owner in Cambridge, who offered customers the choice of either taking the horse in the stall nearest to the door or taking none at all, what two word term refers to a free choice in which only on thing is offered?', answer: 'It is also the name of a 1954 movie in which a miserly Victorian bootmaker is brought to his knees when his strong-willed eldest daughter, marries his timid star craftsman and sets up a rival shop. Hobson\'s Choice' },
      { question: 'In 1997, the search engine AltaVista launched which translation service, named after a fictional species in Doughlas Adam\'s The Hitchhiker\'s Guide to the Galaxy, which can translate languages instantly?', answer: 'Babel Fish' },
      { question: 'Established by the Wesleyan Methodist Mission in 1814, what is considered the oldest modern school in Sri Lanka that is still functioning today?', answer: 'It was initially known as Galle High School. Richmond College' },
      { question: 'Which school in Colombo was founded by Rev Joseph Marsh as the hill street academy?', answer: 'Royal College' },
      { question: 'A trend on the rise since last year, constituting 35% of hires in some sectors, what term is used for former employees (who left or were laid off) who return to a company after working elsewhere?', answer: 'Boomerang Hires' },
      { question: 'Gens una sumus or We\'re one family is the motto of the International Governing body for Chess that was setup in Paris in 1924 but is now based in Switzerland. By what four letter acronym is this organization known by?', answer: 'FIDE (Fédération Internationale des Échecs)' },
      { question: '4th August 2015 saw the announcement on Twitter that, after an on-off relationship going back to 1976, which two puppets had broken up for good, although they continue to work together?', answer: 'Kermit the Frog and Miss Piggy' },
      { question: 'Which Caribbean island gained independence from Britain on 6th August 1962, leading to the collapse of the West Indian Federation?', answer: 'Jamaica' },
      { question: 'The Adi Granth, a collection of nearly 6,000 hymns, is the sacred scripture of which major world religion?', answer: 'Sikhism' },
      { question: 'Camelopard is an archaic term for which animal species?', answer: 'Giraffe' },
      { question: 'In August last year chef Dharshan Munidasa\'s mother Nobuko Munidasa held an Ikebana exhibition at the mall in Port City in celebration of her 80th birthday. Considered a philosophical practice rooted in balance, line and space, Ikabana is the Japanese art of doing what?', answer: 'Flower Arranging' },
      { question: 'While China produces more coal for its own consumption which country is the world\'s largest exporter of thermal coal?', answer: 'Biggest importers include China and India. Sri Lanka also primarily imported coal from this country until switching to. South Africa after the last procurement cycle? Indonesia' },
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
