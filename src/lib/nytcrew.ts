// One place for the facts every page states, so the site, the Play listing and posts elsewhere
// all say the same thing. Keep in sync with marketing/geo/README.md in the app repo.

export const SITE_URL = "https://www.siftyai.com";
export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.mohdjun.sifty";
export const PRIVACY_URL =
  "https://mohdjun95.github.io/privacy-policies/nytcrew.html";
export const IOS_URL =
  "https://apps.apple.com/my/app/sifty-declutter-your-gallery/id6759360203";

export type Faq = { q: string; a: string };

export const appFaqs: Faq[] = [
  {
    q: "What is Nytcrew?",
    a: "Nytcrew is a free Android app that cleans up your photo gallery overnight. An AI model running on your phone sets aside clutter (old screenshots and chats, blurry shots, repeats) for a quick keep-or-delete, groups similar shots and makes every photo searchable. Your photos are never uploaded.",
  },
  {
    q: "Is Nytcrew free?",
    a: "Yes. Nytcrew is free, with no ads and no subscription.",
  },
  {
    q: "Does Nytcrew upload my photos?",
    a: "No. Photos are analysed on your phone. Only a short text description of each photo, with emails, links, @handles and long numbers masked, is sent to be scored. Images are never sent anywhere.",
  },
  {
    q: "Is Nytcrew the same app as Sifty?",
    a: "Yes. Sifty was renamed Nytcrew (said \"night crew\") in version 2.8. Same app, same Play listing.",
  },
  {
    q: "Does Nytcrew work on iPhone?",
    a: "Not yet. Nytcrew is Android only. The App Store has the earlier Sifty app, which analyses photos in the cloud.",
  },
  {
    q: "Will Nytcrew delete photos without asking?",
    a: "No. Nytcrew only suggests. You confirm every delete, and Android keeps deleted photos in the trash for 30 days.",
  },
  {
    q: "Why does Nytcrew work at night?",
    a: "Running an AI model on every photo takes battery and processing power. Scanning while the phone charges overnight means it never slows you down during the day. It pauses if the phone gets warm or the battery runs low.",
  },
  {
    q: "Which phones does Nytcrew work on?",
    a: "Android phones with 6 GB of RAM or more. The on-device AI model is a one-time download of about 1.3 GB.",
  },
];

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Nytcrew",
  alternateName: ["Sifty", "Sifty AI"],
  url: SITE_URL,
  operatingSystem: "Android",
  applicationCategory: "UtilitiesApplication",
  description:
    "Free Android app that tidies your photo gallery overnight with an on-device AI model. Photos are never uploaded.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: PLAY_URL,
  installUrl: PLAY_URL,
  privacyPolicy: PRIVACY_URL,
  author: { "@type": "Person", name: "M. Junaid" },
};
