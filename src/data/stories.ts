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
  image: string;
  coordinates: {
    lat: number;
    lng: number;
    place: string;
  };
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
    image: "/images/stories/the-taj-mahal.jpg",
    hook:
      "He didn't just lose a wife. He built the world's most famous monument so no one would ever forget her.",
    coordinates: { lat: 27.1751, lng: 78.0421, place: "Agra, Uttar Pradesh" },
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
    image: "/images/stories/the-empress-behind-the-curtain.jpg",
    hook:
      "She was his twentieth wife — and the only one whose face appeared on Mughal coins.",
    coordinates: { lat: 31.5892, lng: 74.3031, place: "Lahore / Punjab" },
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
    image: "/images/stories/the-sultan-and-the-singer.jpg",
    hook:
      "He built her a palace with a view of her river. He couldn't build her an army fast enough.",
    coordinates: { lat: 22.3664, lng: 75.3995, place: "Mandu, Madhya Pradesh" },
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
    image: "/images/stories/the-silence-that-saved-a-kingdom.jpg",
    hook:
      "Fourteen days of torture. She never said a word — and a dynasty survived because of it.",
    coordinates: { lat: 26.9826, lng: 94.6426, place: "Sivasagar, Assam" },
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
    image: "/images/stories/the-ballad-punjab-still-sings.jpg",
    hook: "A herdsman, a landlord's daughter, and a love the whole village tried to stop.",
    coordinates: { lat: 31.2681, lng: 72.3181, place: "Jhang, Punjab" },
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
    image: "/images/stories/the-anklet-that-burned-a-city.svg",
    hook: "He lost everything and came back to her anyway. It still wasn't enough to save him.",
    coordinates: { lat: 9.9252, lng: 78.1198, place: "Madurai, Tamil Nadu" },
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
    image: "/images/stories/married-to-the-divine.svg",
    hook:
      "A princess who said her real husband was Krishna — and never let her royal family talk her out of it.",
    coordinates: { lat: 25.35, lng: 73.85, place: "Mewar, Rajasthan" },
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
    image: "/images/stories/the-legend-of-chittorgarh.svg",
    hook: "A siege that really happened. A queen historians still can't agree on.",
    coordinates: { lat: 24.8887, lng: 74.6269, place: "Chittorgarh, Rajasthan" },
    mapPin: { x: 27, y: 43, place: "Chittorgarh" },
  },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
