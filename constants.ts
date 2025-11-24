import { Scenario } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'mall_rat',
    title: 'Chapter 1: Starcourt Mall',
    description: 'Go shopping with Eleven and Max at the mall. Pure 80s neon vibes.',
    promptModifier: 'The person in the uploaded photo is the main character, standing in the Starcourt Mall next to Eleven (El) and Max Mayfield. The person retains their exact facial identity but is wearing vibrant 1985 fashion (geometric patterns, suspenders, bright colors). Background is Starcourt Mall with neon signs. Style: Stranger Things Season 3 cinematic shot, colorful, aesthetic, retro commercial look.',
    iconName: 'mall',
    color: 'text-pink-500 border-pink-500 shadow-pink-500/50'
  },
  {
    id: 'upside_down',
    title: 'Chapter 2: The Vecna Curse',
    description: 'Facing the mystery of the Upside Down.',
    promptModifier: 'The person in the uploaded photo is the main character, exploring the Upside Down dimension. They look brave and determined. In the background, Vecna is standing in the shadows. The person retains their exact facial identity and is wearing sturdy 80s adventure clothes. Atmospheric blue lighting, floating particles, vines. Style: Supernatural mystery, cinematic shot, dark blue tones.',
    iconName: 'monster',
    color: 'text-blue-600 border-blue-600 shadow-blue-800/50'
  },
  {
    id: 'hellfire',
    title: 'Chapter 3: Hellfire Club',
    description: 'Join the D&D campaign with Eddie Munson at Hawkins High.',
    promptModifier: 'The person in the uploaded photo is the main character, sitting at a cafeteria table playing Dungeons & Dragons with Eddie Munson. The person retains their exact facial identity and is wearing a "Hellfire Club" raglan baseball tee and denim vest. High school background. Style: Stranger Things Season 4 cinematic shot, grunge, grainy 80s film, warm tones.',
    iconName: 'bike',
    color: 'text-red-600 border-red-600 shadow-red-900/50'
  },
  {
    id: 'hawkins_lab',
    title: 'Chapter 4: The Escape',
    description: 'Sneaking through Hawkins Lab with a young Eleven.',
    promptModifier: 'The person in the uploaded photo is the main character, sneaking down a corridor in Hawkins Lab alongside a young Eleven. The person retains their exact facial identity and is wearing a hospital gown or 80s lab coat. Flickering lights, sci-fi setting. Style: Stranger Things Season 1 cinematic shot, suspenseful, cold tones.',
    iconName: 'lab',
    color: 'text-green-500 border-green-500 shadow-green-900/50'
  }
];

export const LOADING_MESSAGES = [
  "Opening the Curiosity Door...",
  "Tuning the Ham Radio...",
  "Rolling for Initiative with Eddie...",
  "Avoiding the Demogorgon...",
  "Charging Psychic Batteries...",
  "Looking for Will Byers...",
  "Running from the Mind Flayer...",
  "Decoding Russian transmissions..."
];