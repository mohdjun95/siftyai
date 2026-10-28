import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { IOS_URL, PLAY_URL, PRIVACY_URL } from "@/lib/nytcrew";

export const metadata: Metadata = {
  title: "Download Nytcrew for Android",
  description:
    "Download Nytcrew free on Google Play. It tidies your photo gallery overnight with an on-device AI model. Android, 6 GB RAM or more.",
  alternates: { canonical: "/download" },
};

const need = [
  "An Android phone with 6 GB of RAM or more",
  "About 1.3 GB free for the AI model, downloaded once after you allow photo access",
  "A Google or email sign-in, so your results are backed up",
  "An internet connection for scoring (photos stay on the phone)",
];

const know = [
  "Nytcrew was called Sifty until version 2.8. Had Sifty? Just update.",
  "It works best overnight while charging, and starts by itself.",
  "Nothing is deleted without your yes; deletes stay in the trash for 30 days.",
];

export default function Download() {
  return (
    <>
      <PageHero eyebrow="Download" title="Hire the night crew.">
        <p>Free on Google Play. No ads, no subscription. Your photos never leave your phone.</p>
        <a
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-13 items-center rounded-full bg-teal-400 px-7 text-[17px] font-semibold text-[#04201c] transition-colors hover:bg-teal-300"
        >
          Get it on Google Play
        </a>
      </PageHero>

      <section className="bg-dawn-100 px-6 py-20 text-ink">
        <div className="mx-auto flex max-w-[960px] flex-wrap gap-5">
          <List title="What you need" items={need} />
          <List title="Good to know" items={know} />
        </div>
        <p className="mx-auto mt-6 max-w-[960px] text-[15px] leading-relaxed text-ink-soft">
          Read the{" "}
          <a href={PRIVACY_URL} className="font-semibold text-teal-700 underline">
            privacy policy
          </a>
          . On iPhone? Nytcrew isn&apos;t on iOS yet. The App Store has{" "}
          <a href={IOS_URL} target="_blank" rel="noopener noreferrer" className="underline">
            the earlier Sifty app
          </a>
          , which analyses photos in the cloud instead of on the phone.
        </p>
      </section>
    </>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-w-0 flex-[1_1_380px] rounded-[18px] border border-[#d5e5e1] bg-white p-7">
      <h2 className="mb-4 text-2xl font-bold tracking-[-0.02em]">{title}</h2>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-soft">
            <svg
              className="mt-1 h-5 w-5 flex-none"
              viewBox="0 0 20 20"
              fill="none"
              stroke="#0f766e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 10.5l4 4 8-9" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
