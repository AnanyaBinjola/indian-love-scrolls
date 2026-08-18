export type TruthKey = "documented" | "folk" | "legend" | "mixed" | "contested";

export const truthRatings: Record<TruthKey, { label: string; short: string; tone: string }> = {
  documented: {
    label: "Documented History",
    short: "Documented",
    tone: "documented",
  },
  folk: {
    label: "Historical Core, Folk Details",
    short: "Folk Detail",
    tone: "folk",
  },
  legend: {
    label: "Literary Legend",
    short: "Legend",
    tone: "legend",
  },
  mixed: {
    label: "Documented Figure, Devotional Legend",
    short: "Documented & Devotional",
    tone: "mixed",
  },
  contested: {
    label: "Contested Legend",
    short: "Contested",
    tone: "legend",
  },
};

export type Story = {
  number: string;
  slug: string;
  title: string;
  figures: string;
  region: string;
  truth: TruthKey;
  hook: string;
  era: string;
  motif: "damask" | "floral" | "paisley" | "madhubani" | "jali" | "lotus";
  mapPin: { x: number; y: number; place: string };
};

export const stories: Story[] = [
  {
    number: "01",
    slug: "the-taj-mahal",
    title: "The Taj Mahal",
    figures: "Shah Jahan & Mumtaz Mahal",
    region: "Agra, Uttar Pradesh",
    truth: "documented",
    era: "17th century · Mughal Empire",
    motif: "damask",
    hook:
      "He didn't just lose a wife. He built the world's most famous monument so no one would ever forget her.",
    mapPin: { x: 40, y: 33, place: "Agra" },
  },
  {
    number: "02",
    slug: "the-empress-behind-the-curtain",
    title: "The Empress Behind the Curtain",
    figures: "Nur Jahan & Jahangir",
    region: "Agra & Lahore",
    truth: "documented",
    era: "17th century · Mughal Empire",
    motif: "jali",
    hook:
      "She was his twentieth wife — and the only one whose face appeared on Mughal coins.",
    mapPin: { x: 34, y: 22, place: "Lahore / Punjab" },
  },
  {
    number: "03",
    slug: "the-sultan-and-the-singer",
    title: "The Sultan and the Singer",
    figures: "Baz Bahadur & Rani Roopmati",
    region: "Mandu, Madhya Pradesh",
    truth: "folk",
    era: "16th century · Malwa Sultanate",
    motif: "floral",
    hook:
      "He built her a palace with a view of her river. He couldn't build her an army fast enough.",
    mapPin: { x: 33, y: 47, place: "Mandu" },
  },
  {
    number: "04",
    slug: "the-silence-that-saved-a-kingdom",
    title: "The Silence That Saved a Kingdom",
    figures: "Sati Joymoti & Gadapani",
    region: "Sivasagar, Assam",
    truth: "documented",
    era: "17th century · Ahom Kingdom",
    motif: "madhubani",
    hook:
      "Fourteen days of torture. She never said a word — and a dynasty survived because of it.",
    mapPin: { x: 78, y: 34, place: "Sivasagar" },
  },
  {
    number: "05",
    slug: "the-ballad-punjab-still-sings",
    title: "The Ballad Punjab Still Sings",
    figures: "Heer Ranjha",
    region: "Punjab",
    truth: "legend",
    era: "Retold since the 16th century",
    motif: "paisley",
    hook: "A herdsman, a landlord's daughter, and a love the whole village tried to stop.",
    mapPin: { x: 30, y: 20, place: "Punjab" },
  },
  {
    number: "06",
    slug: "the-anklet-that-burned-a-city",
    title: "The Anklet That Burned a City",
    figures: "Kannagi & Kovalan",
    region: "Poompuhar & Madurai, Tamil Nadu",
    truth: "legend",
    era: "Sangam-era epic",
    motif: "lotus",
    hook: "He lost everything and came back to her anyway. It still wasn't enough to save him.",
    mapPin: { x: 44, y: 82, place: "Poompuhar / Madurai" },
  },
  {
    number: "07",
    slug: "married-to-the-divine",
    title: "Married to the Divine",
    figures: "Meera Bai",
    region: "Mewar, Rajasthan",
    truth: "mixed",
    era: "16th century · Rajputana",
    motif: "floral",
    hook:
      "A princess who said her real husband was Krishna — and never let her royal family talk her out of it.",
    mapPin: { x: 26, y: 40, place: "Mewar" },
  },
  {
    number: "08",
    slug: "the-legend-of-chittorgarh",
    title: "The Legend of Chittorgarh",
    figures: "Rani Padmini",
    region: "Chittorgarh, Rajasthan",
    truth: "contested",
    era: "Siege of 1303 · retold from 1540",
    motif: "jali",
    hook: "A siege that really happened. A queen historians still can't agree on.",
    mapPin: { x: 27, y: 43, place: "Chittorgarh" },
  },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
