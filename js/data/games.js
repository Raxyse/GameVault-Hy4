/**
 * Static game catalog. No API calls — swap this array for fetched data later.
 * Artwork uses Steam's public CDN (stable, direct image URLs).
 */
const CDN = 'https://cdn.akamai.steamstatic.com/steam/apps';

export const games = [
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    genre: 'RPG',
    year: 2022,
    rank: 1,
    rating: '4.9',
    developer: 'FromSoftware',
    cover: `${CDN}/1245620/header.jpg`,
    poster: `${CDN}/1245620/library_600x900.jpg`,
    description: 'A vast, dark fantasy world full of ruins, secrets, and formidable bosses. Explore at your own pace and write your own legend.'
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    year: 2020,
    rank: 2,
    rating: '4.6',
    developer: 'CD PROJEKT RED',
    cover: `${CDN}/1091500/header.jpg`,
    poster: `${CDN}/1091500/library_600x900.jpg`,
    description: 'Become an urban mercenary in the neon-soaked mega-city of Night City, where every choice shapes the story around you.'
  },
  {
    id: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    genre: 'RPG',
    year: 2023,
    rank: 3,
    rating: '4.9',
    developer: 'Larian Studios',
    cover: `${CDN}/1086940/header.jpg`,
    poster: `${CDN}/1086940/library_600x900.jpg`,
    description: 'Gather your party and return to the Forgotten Realms in a deep, choice-driven adventure where dice decide your fate.'
  },
  {
    id: 'hollow-knight',
    title: 'Hollow Knight',
    genre: 'Indie',
    year: 2017,
    rank: 4,
    rating: '4.8',
    developer: 'Team Cherry',
    cover: `${CDN}/367520/header.jpg`,
    poster: `${CDN}/367520/library_600x900.jpg`,
    description: 'Descend into a beautifully hand-drawn underground kingdom, uncovering its secrets and mastering precise, rhythmic combat.'
  },
  {
    id: 'hades',
    title: 'Hades',
    genre: 'Indie',
    year: 2020,
    rank: 5,
    rating: '4.8',
    developer: 'Supergiant Games',
    cover: `${CDN}/1145360/header.jpg`,
    poster: `${CDN}/1145360/library_600x900.jpg`,
    description: 'Escape the underworld again and again in a fast, stylish roguelike with unforgettable characters and a killer soundtrack.'
  },
  {
    id: 'red-dead-redemption-2',
    title: 'Red Dead Redemption 2',
    genre: 'Adventure',
    year: 2018,
    rank: 6,
    rating: '4.7',
    developer: 'Rockstar Games',
    cover: `${CDN}/1174180/header.jpg`,
    poster: `${CDN}/1174180/library_600x900.jpg`,
    description: 'Ride across a sweeping American frontier as an outlaw fighting to survive in a world that is quickly closing in.'
  },
  {
    id: 'god-of-war',
    title: 'God of War',
    genre: 'Action',
    year: 2018,
    rank: 7,
    rating: '4.7',
    developer: 'Santa Monica Studio',
    cover: `${CDN}/1593500/header.jpg`,
    poster: `${CDN}/1593500/library_600x900.jpg`,
    description: 'Kratos trades the gods of Olympus for the myths of Norse legend on a raw, personal journey with his son Atreus.'
  },
  {
    id: 'the-witcher-3',
    title: 'The Witcher 3: Wild Hunt',
    genre: 'Adventure',
    year: 2015,
    rank: 8,
    rating: '4.9',
    developer: 'CD PROJEKT RED',
    cover: `${CDN}/292030/header.jpg`,
    poster: `${CDN}/292030/library_600x900.jpg`,
    description: 'Track down a child of prophecy across a war-torn continent in one of the most richly realized fantasy worlds ever made.'
  },
  {
    id: 'stardew-valley',
    title: 'Stardew Valley',
    genre: 'Indie',
    year: 2016,
    rank: 9,
    rating: '4.8',
    developer: 'ConcernedApe',
    cover: `${CDN}/413150/header.jpg`,
    poster: `${CDN}/413150/library_600x900.jpg`,
    description: 'Leave the city behind, inherit a farm, and build a quiet life full of crops, friends, and unexpected adventures.'
  }
];
