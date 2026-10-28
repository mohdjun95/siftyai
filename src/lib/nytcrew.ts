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

// The home page FAQ, always visible and mirrored in its FAQPage JSON-LD.
export const appFaqs: Faq[] = [
  {
    q: "What is Nytcrew?",
    a: "A free Android app that works the night shift on your phone: while it charges, an on-device AI goes through your photos and sets aside the ones you'd never miss for a quick yes or no in the morning. Your photos are never uploaded.",
  },
  {
    q: "Is it really free?",
    a: "Yes. No ads, no subscription.",
  },
  {
    q: "Does it upload my photos?",
    a: "No. Photos are looked at on your phone. Only a short description of each one, with emails, links, @handles and long numbers masked, is sent to be scored.",
  },
  {
    q: "Do I have to open it every night?",
    a: "No. Once it's set up, it starts by itself whenever the phone charges at night, and reschedules itself after app updates.",
  },
  {
    q: "Will it delete without asking?",
    a: "Never. Every delete is yours, and Android keeps deleted photos in the trash for 30 days.",
  },
  {
    q: "Is this Sifty?",
    a: "Yes. Sifty became Nytcrew (said \"night crew\") in version 2.8. Same app, same Play listing.",
  },
  {
    q: "Which phones does it work on?",
    a: "Android phones with 6 GB of RAM or more. The AI model is a one-time download of about 1.3 GB.",
  },
  {
    q: "iPhone?",
    a: "Not yet. Nytcrew is Android only for now. The App Store still has the earlier Sifty app, which analyses photos in the cloud.",
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
