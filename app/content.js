export const TELEGRAM_URL = "#"; // TODO: add real telegram url

export const metadataContent = {
  title: "TokenMingle | The social layer of TOKEN2049",
  description: "Meet. Match. Mingle. TokenMingle helps people at TOKEN2049 Singapore meet each other IRL: coffee, networking, dinner, side events, parties."
};

export const navbarContent = {
  logoText: "TokenMingle",
  links: [
    { label: "The Experience", href: "#" }, // TODO: add link
    { label: "About", href: "#" }, // TODO: add link
    { label: "In-Person", href: "#" }, // TODO: add link
    { label: "TOKEN2049", href: "#" }, // TODO: add link
    { label: "Updates", href: "#" } // TODO: add link
  ],
  mobileCta: "Join"
};

export const heroContent = {
  headlineLines: [
    "The social layer",
    "for your next",
  ],
  rotatingWords: [
    "coffee chat",
    "dinner",
    "side event",
    "after-party",
    "intro",
    "+1"
  ],
  avatarLabel: "25,000+ at TOKEN2049",
  smallLineAboveCta: "TOKEN2049 Singapore, 7-8 October",
  ctaText: "Join the Telegram circle",
};

export const exploreContent = {
  headingLines: ["Meet", "Match", "Mingle"],
  floatingTagsRow1: ["Coffee", "Networking", "Dinners", "Side Events", "Parties", "+1", "IRL", "Singapore"],
  floatingTagsRow2: ["TOKEN2049", "Web3", "Crypto Events", "Private Gatherings", "After Dark", "Skyline", "Day to Night", "Telegram Circle"]
};

export const safetySectionContent = {
  headerLine1: "Where the real",
  headerLine2: "conference",
  headerLine3: "happens",
  items: [
    {
      id: 0,
      heading: 'Real people, in person',
      body: 'TOKEN2049 is 25,000+ people in one building. We help you find the ones worth meeting.',
      iconAlt: 'Line icon Green verified tick',
      iconSrc: '/assets/image/upload/v1781513944/Verified_tick_uztzjn.svg',
      imgAlt: 'A green screen reading "You\'re Verified" with a circular photo of a person with curly auburn hair.',
      imgSrc: '/assets/image/upload/v1781513726/Verification_aizzv2.webp',
    },
    {
      id: 1,
      heading: 'The right people',
      body: 'The hard part is still who you should actually meet. TokenMingle fixes that.',
      iconAlt: 'line icon Pink camera',
      iconSrc: '/assets/image/upload/v1781513944/camera_qwhu0m.svg',
      imgAlt: 'Screenshot protection feature shown on phone',
      imgSrc: '/assets/image/upload/v1780999782/Screenshot_Protection_rukcsr.webp',
    },
    {
      id: 2,
      heading: 'Coffee to after-party',
      body: 'From daytime coffee catchups to elite party nights, the whole day is the conference.',
      iconAlt: 'blue icon with eye with line through it - Consent-driven design',
      iconSrc: '/assets/image/upload/v1781513944/incognito_eye_ycnfft.svg',
      imgAlt: 'An App settings screen showing Blur explicit images toggle.',
      imgSrc: '/assets/image/upload/v1781513726/Nudity_Detection_ifzpqz.webp',
    },
    {
      id: 3,
      heading: 'Side events',
      body: "The best conversations happen off the main stage. Find them.",
      iconAlt: 'Yellow square icon',
      iconSrc: '/assets/image/upload/v1781513944/square_gey1ot.svg',
      imgAlt: 'A Feeld profile for Kam, 23, Transmasculine, Queer.',
      imgSrc: '/assets/image/upload/v1781513726/Algorithim_li9k13.webp',
    },
    {
      id: 4,
      heading: 'Private gatherings',
      body: 'Next private gathering access drops inside our Telegram circle. Join early.',
      iconAlt: 'line art pink heart icon',
      iconSrc: '/assets/image/upload/v1781513943/pink-heart_phyhdc.svg',
      imgAlt: 'A phone with a reporting screen.',
      imgSrc: '/assets/image/upload/v1781513726/Reporting_jap187.webp',
    },
    {
      id: 5,
      heading: 'Bring your +1',
      body: 'Networking, dinner, or maybe your +1. Meet. Mingle. Match.',
      iconAlt: 'red incognito mask line icon',
      iconSrc: '/assets/image/upload/v1781513943/red-mask_i3vlvx.svg',
      imgAlt: 'Feeld Discover screen with incognito mode toggle.',
      imgSrc: '/assets/image/upload/v1781514363/Incognito_Mode_lsemjl.webp',
    },
  ],
  ctaText: "Safety and Privacy at TokenMingle", // Kept structure, but probably should be something else. Reusing link.
  ctaHref: "https://x.com/TokenMngle" // TODO: Add real link
};

export const eventsContent = {
  heading: "Let's meet in-person",
  events: [
    { title: "TOKEN2049 Singapore", date: "7-8 October" },
    { title: "Daytime Coffee Catchups", date: "Date TBA" }, // TODO: add real date
    { title: "Dinners", date: "Date TBA" }, // TODO: add real date
    { title: "Side Events", date: "Date TBA" }, // TODO: add real date
    { title: "Elite Party Nights", date: "Date TBA" }, // TODO: add real date
    { title: "Private Gatherings", date: "Access via Telegram" } // TODO: add real date/access
  ]
};

export const footerContent = {
  newsletterHeading: "Get the next drop",
  newsletterHelper: "Private gathering access drops first in our Telegram circle.",
  newsletterButton: "Join early",
  columns: [
    {
      title: "Product",
      links: [
        { label: "The Experience", href: "#" }, // TODO: add real link
        { label: "Telegram Circle", href: "#" }, // TODO: add real link
        { label: "TOKEN2049", href: "#" }, // TODO: add real link
      ]
    },
    {
      title: "About",
      links: [
        { label: "About TokenMingle", href: "#" }, // TODO: add real link
        { label: "Singapore", href: "#" }, // TODO: add real link
      ]
    },
    {
      title: "Community",
      links: [
        { label: "X", href: "https://x.com/TokenMngle" },
        { label: "Telegram", href: TELEGRAM_URL },
        { label: "#TOKEN2049", href: "#" }, // TODO: add real link
      ]
    },
    {
      title: "Discover",
      links: [
        { label: "Coffee", href: "#" }, // TODO: add real link
        { label: "Dinners", href: "#" }, // TODO: add real link
        { label: "Side Events", href: "#" }, // TODO: add real link
        { label: "Parties", href: "#" }, // TODO: add real link
      ]
    }
  ],
  storePills: {
    appStoreLabel: "Join Telegram",
    googlePlayLabel: "Follow on X"
  },
  socials: {
    x: "https://x.com/TokenMngle",
    telegram: TELEGRAM_URL
  }
};
