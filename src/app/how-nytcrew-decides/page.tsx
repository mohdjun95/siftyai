import type { Metadata } from "next";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { PLAY_URL, SITE_URL, faqJsonLd, type Faq } from "@/lib/nytcrew";

const path = "/how-nytcrew-decides";
const title = "How Nytcrew decides which photos are clutter";
const description =
  "The rules Nytcrew uses while you sleep: seven scores per photo, an age rule for old screenshots, protection for people and documents, and weights that learn from your choices.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: "article", url: path },
};

const signals = [
  ["People", "From none, to a candid photo of someone, to family, children, pets or a special occasion."],
  ["Places and your life", "From a screen or plain object, to everyday personal things (your food, your vehicle), to a trip or a beautiful view."],
  ["Records", "From not a document, to a receipt or handwritten note, to an ID, passport, certificate, medical record or contract."],
  ["Temporary info", "From nothing temporary, to a shopping list or parking spot, to a Wi-Fi password, one-time code or expired ticket."],
  ["Screens", "From not a screen, to a useful one (a booking, a bill, an important chat), to a work screen, to memes, social posts and app UI."],
  ["Repeats", "From a unique photo, to similar to others, to a near-duplicate or burst shot."],
  ["Noise", "From a clear, intentional photo, to slightly blurry, to an accidental pocket shot of the floor."],
];

const faqs: Faq[] = [
  {
    q: "Does Nytcrew delete old screenshots automatically?",
    a: "No. It flags screenshots, chats, memes and other screen content more than six months old (with no people and not an important document) for review. You confirm every delete, and deleted photos stay in Android's trash for 30 days.",
  },
  {
    q: "Will Nytcrew flag old photos of my family?",
    a: "Age only counts against text and screen content. It never lowers the score for people, places or documents, so old photos of people are treated as memories.",
  },
  {
    q: "How does Nytcrew learn what I keep?",
    a: "After about 40 keep or delete choices, it re-fits how much each of the seven scores matters to you. It only changes when the data clearly supports it, and it ignores the odd misclick.",
  },
  {
    q: "Does Nytcrew see my photos to score them?",
    a: "The scoring step never sees a photo. The on-device model writes a short description; only that text, with emails, links, @handles and long numbers masked, plus the photo's age, is scored.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}${path}`,
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  author: { "@type": "Person", name: "M. Junaid" },
  publisher: { "@type": "Organization", name: "Nytcrew" },
};

export default function HowNytcrewDecides() {
  return (
    <article className="bg-white">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-gray-700 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>

        <p className="mt-8 text-lg">
          <strong className="text-gray-900">In short:</strong> while you sleep,
          Nytcrew gives every photo seven scores from a description written on
          your phone, and weighs them the way you would, learned from your own
          keeps and deletes. Old screenshots and screen content get set aside;
          people, places and important documents are protected. Nothing is
          deleted without you.
        </p>

        <H2>1. A description, written on your phone</H2>
        <p>
          A vision model (MiniCPM-V) runs on your phone and describes each photo in
          a sentence or two, for example &ldquo;a screenshot of a train ticket
          booking page&rdquo;. Google ML Kit, also on the phone, reads any text in
          the photo. The photo itself never leaves the phone.
        </p>

        <H2>2. Seven scores from the text</H2>
        <p>
          The description, up to 25 words of the text read from the photo, and the
          photo&apos;s age are sent to be scored, 20 photos at a time. Emails,
          links, @handles and long numbers are masked first. Each photo gets a
          score from 0 to 10 for:
        </p>
        <dl className="mt-6 space-y-4">
          {signals.map(([name, body]) => (
            <div key={name}>
              <dt className="font-semibold text-gray-900">{name}</dt>
              <dd className="text-gray-600">{body}</dd>
            </div>
          ))}
        </dl>

        <H2>3. The age rule</H2>
        <p>
          Screenshots, chats, memes, social posts, notes and photos of screens or
          text lose their meaning over time. When one is more than six months old,
          has no people in it and isn&apos;t an important document, it scores high
          on temporary info. Old tickets, codes and parking spots score highest.
        </p>
        <p className="mt-4">
          Age never counts against people, places or documents: a photo of your
          family from five years ago is a memory, and your passport stays
          important.
        </p>

        <H2>4. Your taste decides the rest</H2>
        <p>
          The seven scores are combined on your phone with a set of weights. Every
          keep or delete in Review is a lesson. Once there are about 40, Nytcrew
          re-fits the weights to your choices, but only when the data clearly
          supports the change, and it isn&apos;t thrown by the odd misclick. When
          the weights change, photos you haven&apos;t reviewed yet are re-scored.
        </p>

        <H2>5. Repeats, grouped separately</H2>
        <p>
          Photos taken back-to-back that look alike are grouped as similar shots,
          using a visual fingerprint of each photo rather than just the
          description, and Nytcrew suggests the best one. Copies of the same
          picture, such as one saved twice, are grouped whenever they were saved.
        </p>

        <H2>6. You have the final say</H2>
        <p>
          In the morning, flagged photos wait in a short Review. Keep or delete
          with a tap, or straight from the notification. Deletes go to your
          phone&apos;s trash, where Android keeps them for 30 days.
        </p>

        <p className="mt-8">
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            Get Nytcrew on Google Play
          </a>
        </p>

        <H2>FAQ</H2>
        <FaqList faqs={faqs} />
      </div>
    </article>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 text-2xl font-bold text-gray-900">{children}</h2>
  );
}
