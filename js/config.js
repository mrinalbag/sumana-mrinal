/* ============================================================================
   SUMANA & MRINAL — WEDDING WEBSITE MASTER CONFIG
   ----------------------------------------------------------------------------
   Edit THIS ONE FILE to personalise both websites:
     1. MEDIA.videos   -> your own wedding video (mp4 URL or ../assets/video/...)
     2. MEDIA.posters  -> hero fallback images while the video loads
     3. GALLERY        -> your own photos (34 placeholders included)
                          e.g. "../assets/images/photo-01.jpg"
     4. I18N.en / bn   -> every line of text, English & Bengali
     5. DATES / MAPS   -> countdown targets & Google Maps links
   ============================================================================ */

(() => {

const MEDIA = {
  videos: {
    wedding: "assets/video/hero-wedding.mp4",
    reception: "assets/video/hero-reception.mp4",
  },
  posters: {
    wedding: "assets/images/couple-05.webp",
    reception: "assets/images/couple-09.webp",
  },
  gateway: {
    wedding: "assets/images/couple-04.webp",
    reception: "assets/images/couple-09.webp",
  },
};

/* The couple's own photos (assets/images/) — the entire gallery */
const USER_PHOTOS = [
  { file: "couple (1).webp", alt: "Sumana & Mrinal — the engagement" },
  { file: "couple (2).webp", alt: "Sumana & Mrinal — the engagement" },
  { file: "couple (3).webp", alt: "Sumana & Mrinal — temple corridors" },
  { file: "couple (4).webp", alt: "Sumana & Mrinal — in the kash fields" },
  { file: "couple (5).webp", alt: "Sumana & Mrinal — sunset by the sea" },
  { file: "couple (6).webp", alt: "Sumana & Mrinal — blue hour" },
  { file: "couple (7).webp", alt: "Sumana & Mrinal — hands & rings" },
  { file: "couple (8).webp", alt: "Sumana & Mrinal — heritage walk" },
  { file: "couple (9).webp", alt: "Sumana & Mrinal — by the sea" },
  { file: "couple (10).webp", alt: "Sumana & Mrinal — by the sea" },
  { file: "couple (11).webp", alt: "Sumana & Mrinal — by the sea" },
  { file: "couple (12).webp", alt: "Sumana & Mrinal — garden stroll" },
  { file: "couple (13).webp", alt: "Sumana & Mrinal — among the pines" },
  { file: "couple (14).webp", alt: "Sumana & Mrinal — the engagement" },
  { file: "couple (15).webp", alt: "Sumana & Mrinal — the engagement" },
  { file: "couple (16).webp", alt: "Sumana & Mrinal — temple corridors" },
  { file: "couple (17).webp", alt: "Sumana & Mrinal — in the kash fields" },
  { file: "couple (18).webp", alt: "Sumana & Mrinal — sunset by the sea" },
  { file: "couple (19).webp", alt: "Sumana & Mrinal — blue hour" },
  { file: "couple (20).webp", alt: "Sumana & Mrinal — hands & rings" },
  { file: "couple (21).webp", alt: "Sumana & Mrinal — heritage walk" },
  { file: "couple (22).webp", alt: "Sumana & Mrinal — by the sea" },
  { file: "couple (23).webp", alt: "Sumana & Mrinal — by the sea" },
  { file: "couple (24).webp", alt: "Sumana & Mrinal — by the sea" },
  { file: "couple (25).webp", alt: "Sumana & Mrinal — garden stroll" },
  { file: "couple (26).webp", alt: "Sumana & Mrinal — among the pines" },
  { file: "couple (27).webp", alt: "Sumana & Mrinal — the engagement" },
  { file: "couple (28).webp", alt: "Sumana & Mrinal — the engagement" },
  { file: "couple (29).webp", alt: "Sumana & Mrinal — temple corridors" },
  { file: "couple (30).webp", alt: "Sumana & Mrinal — in the kash fields" },
  { file: "couple (31).webp", alt: "Sumana & Mrinal — sunset by the sea" },
  { file: "couple (32).webp", alt: "Sumana & Mrinal — blue hour" },
  { file: "couple (33).webp", alt: "Sumana & Mrinal — hands & rings" },
  { file: "couple (34).webp", alt: "Sumana & Mrinal — heritage walk" },
  { file: "couple (35).webp", alt: "Sumana & Mrinal — by the sea" },
  { file: "couple (36).webp", alt: "Sumana & Mrinal — by the sea" },
  { file: "couple (37).webp", alt: "Sumana & Mrinal — by the sea" },
  { file: "couple (38).webp", alt: "Sumana & Mrinal — garden stroll" },
  { file: "couple (39).webp", alt: "Sumana & Mrinal — among the pines" },
  { file: "couple (40).webp", alt: "Sumana & Mrinal — the engagement" },

];

const GALLERY = USER_PHOTOS.map((p) => ({
  src: `assets/images/${p.file}`,
  thumb: `assets/images/${p.file}`,
  alt: p.alt,
}));

const DATES = {
  wedding: "2026-11-21T19:00:00+05:30",
  reception: "2026-11-22T19:00:00+05:30",
};

const MAPS = {
  wedding: "https://www.google.com/maps/search/?api=1&query=Hiranmoyee+Resort+and+Lodge+Mayur+More+Jhargram",
  reception: "https://www.google.com/maps/search/?api=1&query=Ghoradhara+Art+Academy+Jhargram",
};

/* ---------- WhatsApp share texts & embedded maps ---------- */
const MAPS_EMBED = {
  wedding: "https://www.google.com/maps?q=Hiranmoyee+Resort+and+Lodge+Mayur+More+Jhargram&output=embed",
  reception: "https://www.google.com/maps?q=Ghoradhara+Art+Academy+Jhargram&output=embed",
};

const SHARE = {
  cta: { en: "Share this invitation", bn: "আমন্ত্রণটি শেয়ার করুন" },
  gateway: {
    en: "You are cordially invited — Sumana & Mrinal's wedding celebrations, 21 & 22 November 2026, Jhargram ✦",
    bn: "আপনি আন্তরিকভাবে আমন্ত্রিত — সুমনা ও মৃণালের বিবাহ উৎসব, ২১ ও ২২ নভেম্বর ২০২৬, ঝাড়গ্রাম ✦",
  },
  wedding: {
    en: "Sumana weds Mrinal! Haldi & The Wedding — Saturday, 21 November 2026, 7 PM onwards, Hiranmoyee Resort & Lodge (Mayur More), Jhargram. Details & photos:",
    bn: "গায়ে হলুদ ও বিবাহ — শনিবার, ২১ নভেম্বর ২০২৬, সন্ধ্যে ৭টা থেকে, হিরণময়ী রিসোর্ট অ্যান্ড লজ (ময়ূর মোড়), ঝাড়গ্রাম। বিস্তারিত ও ছবি:",
  },
  reception: {
    en: "Sumana & Mrinal's Grand Reception — Sunday, 22 November 2026, 7 PM onwards, Own House, Ghoradhara, Jhargram (Near Art Academy). Details & photos:",
    bn: "সুমনা ও মৃণালের বৌভাত — রবিবার, ২২ নভেম্বর ২০২৬, সন্ধ্যে ৭টা থেকে, নিজ বাড়ি, ঘোড়াধারা, ঝাড়গ্রাম (আর্ট একাডেমির নিকট)। বিস্তারিত ও ছবি:",
  },
};

const I18N = {
  en: {
    common: {
      navHome: "Home", navWedding: "The Wedding", navReception: "The Reception",
      together: "Together with their families",
      request: "request the honour of your gracious presence",
      scroll: "Scroll", viewMap: "Open in Google Maps", backHome: "Back to invitation",
      cdDays: "Days", cdHours: "Hours", cdMinutes: "Minutes", cdSeconds: "Seconds",
      galleryNo: "04", galleryTitle: "Moments in Gold",
      gallerySub: "A woven treasury of memories — tap any frame to view it in full splendour",
      marquee: ["Sumana weds Mrinal", "21 & 22 November 2026", "Jhargram · West Bengal", "শুভ বিবাহ"],
      footerLine: "With love, the families of Sumana & Mrinal",
      hashtag: "#SumanaWedsMrinal",
      preloaderLine: "Weaving the alpana of a new beginning",
      name1: "Sumana", name2: "Mrinal", joiner: "&",
    },
    gateway: {
      eyebrow: "You are cordially invited",
      subtitle: "Two families, one celebration — Jhargram, November 2026",
      choose: "Choose your celebration",
      wedLabel: "The Wedding & Haldi", wedDate: "Saturday, 21 November 2026",
      wedTime: "7:00 PM onwards", wedVenue: "Hiranmoyee Resort & Lodge, Jhargram",
      wedCta: "Enter the Wedding",
      recLabel: "The Grand Reception", recDate: "Sunday, 22 November 2026",
      recTime: "7:00 PM onwards", recVenue: "Own House, Ghoradhara, Jhargram",
      recCta: "Enter the Reception",
    },
    wedding: {
      label: "The Wedding & Haldi",
      heroDate: "Saturday · 21 November 2026",
      heroTime: "Ceremony from 7:00 PM onwards",
      heroVenue: "Hiranmoyee Resort & Lodge (Mayur More), Jhargram",
      storyNo: "01", storyTitle: "The Story",
      storyBody: "Two journeys that began in the red-soil lanes of Jhargram now become one. Beneath a canopy of marigold and the glow of a hundred brass lamps, Sumana, Mrinal and family invite you to witness the moment their stories intertwine forever.",
      cerNo: "02", cerTitle: "The Ceremonies",
      cer1Name: "Haldi", cer1Note: "Turmeric, laughter and blessings — morning rituals with the family", cer1Time: "Morning · 21 November",
      cer2Name: "Bibaha — The Wedding", cer2Note: "Saat Paak, Shubho Drishti and Sindoor Daan under the sacred fire", cer2Time: "7:00 PM onwards · 21 November",
      venNo: "03", venTitle: "The Venue",
      venName: "Hiranmoyee Resort & Lodge", venAddr1: "Mayur More, Jhargram", venAddr2: "West Bengal",
      venNote: "Lawns open from 5:30 PM — arrive in time for the groom's Bor Jatri procession.",
      otherEvent: "The Reception",
    },
    reception: {
      label: "The Grand Reception",
      heroDate: "Sunday · 22 November 2026",
      heroTime: "From 7:00 PM onwards",
      heroVenue: "Own House, Ghoradhara, Jhargram (Near Art Academy)",
      storyNo: "01", storyTitle: "The Welcome",
      storyBody: "The evening after the vows — the first celebration of Sumana and Mrinal as one. Both families open their doors and their hearts, awaiting your presence, your blessings and your company over a feast worthy of the occasion.",
      cerNo: "02", cerTitle: "The Evening",
      cer1Name: "Bou Bhaat — The Reception Feast", cer1Note: "A grand Bengali dinner honouring the new bride", cer1Time: "7:00 PM onwards · 22 November",
      cer2Name: "Ashirbaad — Blessings", cer2Note: "Elders bless the couple; the evening closes in song and light", cer2Time: "Through the evening",
      venNo: "03", venTitle: "The Venue",
      venName: "Own House, Ghoradhara", venAddr1: "Ghoradhara, Jhargram", venAddr2: "Landmark: Near Art Academy",
      venNote: "The family home, dressed in lights — follow the lanterns from Art Academy crossing.",
      otherEvent: "The Wedding",
    },
  },
  bn: {
    common: {
      navHome: "প্রথম পাতা", navWedding: "বিবাহ", navReception: "বৌভাত",
      together: "উভয় পরিবারসহ",
      request: "আপনার সুউপস্থিতি একান্ত কাম্য",
      scroll: "নিচে দেখুন", viewMap: "গুগল ম্যাপে দেখুন", backHome: "আমন্ত্রণ পাতায় ফিরুন",
      cdDays: "দিন", cdHours: "ঘণ্টা", cdMinutes: "মিনিট", cdSeconds: "সেকেন্ড",
      galleryNo: "০৪", galleryTitle: "সোনালি মুহূর্ত",
      gallerySub: "স্মৃতির বোনা ভান্ডার — যেকোনো ছবিতে স্পর্শ করুন, দেখুন পূর্ণ প্রকাশে",
      marquee: ["সুমনা ও মৃণাল", "২১ ও ২২ নভেম্বর ২০২৬", "ঝাড়গ্রাম · পশ্চিমবঙ্গ", "শুভ বিবাহ"],
      footerLine: "ভালোবাসা সহ, সুমনা ও মৃণালের পরিবার",
      hashtag: "#SumanaWedsMrinal",
      preloaderLine: "নতুন শুরুর আলপনা এঁকে চলেছি",
      name1: "সুমনা", name2: "মৃণাল", joiner: "ও",
    },
    gateway: {
      eyebrow: "আপনি আন্তরিকভাবে আমন্ত্রিত",
      subtitle: "দুটি পরিবার, এক উৎসব — ঝাড়গ্রাম, নভেম্বর ২০২৬",
      choose: "আপনার অনুষ্ঠান বেছে নিন",
      wedLabel: "বিবাহ ও হলদি", wedDate: "শনিবার, ২১ নভেম্বর ২০২৬",
      wedTime: "সন্ধ্যে ৭টা থেকে", wedVenue: "হিরণময়ী রিসোর্ট অ্যান্ড লজ, ঝাড়গ্রাম",
      wedCta: "বিবাহের আমন্ত্রণ",
      recLabel: "বৌভাত ও অভ্যর্থনা", recDate: "রবিবার, ২২ নভেম্বর ২০২৬",
      recTime: "সন্ধ্যে ৭টা থেকে", recVenue: "নিজ বাড়ি, ঘোড়াধারা, ঝাড়গ্রাম",
      recCta: "বৌভাতের আমন্ত্রণ",
    },
    wedding: {
      label: "বিবাহ ও হলদি",
      heroDate: "শনিবার · ২১ নভেম্বর ২০২৬",
      heroTime: "অনুষ্ঠান সন্ধ্যে ৭টা থেকে",
      heroVenue: "হিরণময়ী রিসোর্ট অ্যান্ড লজ (ময়ূর মোড়), ঝাড়গ্রাম",
      storyNo: "০১", storyTitle: "আমাদের গল্প",
      storyBody: "ঝাড়গ্রামের লালমাটি পথে শুরু হওয়া দুটি যাত্রা আজ এক হয়ে যাচ্ছে। গাঁদা ফুলের মালার ছায়ায়, একশো প্রদীপের আলোয় সুমনা, মৃণাল ও পরিবারের সবাই আপনাকে আমন্ত্রণ জানায় — সাক্ষী থাকুন দুটি জীবন চিরদিনের জন্য মিলে যাওয়ার মুহূর্তে।",
      cerNo: "০২", cerTitle: "অনুষ্ঠানসূচি",
      cer1Name: "গায়ে হলুদ", cer1Note: "হলুদ, হাসি ও আশীর্বাদ — পরিবারের সঙ্গে সকালের আচার", cer1Time: "সকাল · ২১ নভেম্বর",
      cer2Name: "বিবাহ", cer2Note: "সাতপাক, শুভদৃষ্টি ও সিঁদুরদান — পবিত্র অগ্নিসাক্ষী করে", cer2Time: "সন্ধ্যে ৭টা থেকে · ২১ নভেম্বর",
      venNo: "০৩", venTitle: "স্থান",
      venName: "হিরণময়ী রিসোর্ট অ্যান্ড লজ", venAddr1: "ময়ূর মোড়, ঝাড়গ্রাম", venAddr2: "পশ্চিমবঙ্গ",
      venNote: "বিকেল ৫টা ৩০ থেকে উঠান খোলা থাকবে — বরযাত্রীর আগমন উপলক্ষে সময়মতো আসুন।",
      otherEvent: "বৌভাত",
    },
    reception: {
      label: "বৌভাত ও অভ্যর্থনা",
      heroDate: "রবিবার · ২২ নভেম্বর ২০২৬",
      heroTime: "সন্ধ্যে ৭টা থেকে",
      heroVenue: "নিজ বাড়ি, ঘোড়াধারা, ঝাড়গ্রাম (আর্ট একাডেমির নিকট)",
      storyNo: "০১", storyTitle: "অভ্যর্থনা",
      storyBody: "শপথের পরের সন্ধ্যা — সুমনা ও মৃণালের প্রথম উদ্‌যাপন এক হয়ে। দুই পরিবার দুয়ার খুলে দিচ্ছে, হৃদয় খুলে দিচ্ছে — অপেক্ষা শুধু আপনার উপস্থিতি, আশীর্বাদ আর ভোজ-উৎসবের সান্নিধ্যের জন্য।",
      cerNo: "০২", cerTitle: "সন্ধ্যার আসর",
      cer1Name: "বৌভাত — অভ্যর্থনা ভোজ", cer1Note: "নববধূর সম্মানে বাঙালি গ্র্যান্ড ডিনার", cer1Time: "সন্ধ্যে ৭টা থেকে · ২২ নভেম্বর",
      cer2Name: "আশীর্বাদ", cer2Note: "বড়দের আশীর্বাদ; গান ও আলোয় মেতে ওঠে সন্ধ্যা", cer2Time: "সারা সন্ধ্যা জুড়ে",
      venNo: "০৩", venTitle: "স্থান",
      venName: "নিজ বাড়ি, ঘোড়াধারা", venAddr1: "ঘোড়াধারা, ঝাড়গ্রাম", venAddr2: "ল্যান্ডমার্ক: আর্ট একাডেমির নিকট",
      venNote: "আলোয় সাজানো পারিবারিক বাড়ি — আর্ট একাডেমি মোড় থেকে লণ্ঠনের সারি অনুসরণ করুন।",
      otherEvent: "বিবাহ",
    },
  },
};

/* expose config to the other classic scripts */
window.MEDIA = MEDIA;
window.GALLERY = GALLERY;
window.DATES = DATES;
window.MAPS = MAPS;
window.MAPS_EMBED = MAPS_EMBED;
window.I18N = I18N;
window.SHARE = SHARE;
})();
