import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { PLAY_URL, PRIVACY_URL } from "@/lib/nytcrew";

export const metadata: Metadata = {
  title: "How Nytcrew works: on-device AI photo cleaning for Android",
  description:
    "How Nytcrew works the night shift on your phone: it scans your photos overnight with an on-device AI model, sets aside what you'd never miss, groups similar shots, makes photos searchable and learns your taste, without uploading a single photo.",
  alternates: { canonical: "/features" },
};

const shift = [
  {
    label: "Once",
    title: "Set it up in a minute",
    paras: [
      "Sign in, allow photo access, and the AI model downloads by itself (about 1.3 GB, once). One screen lists everything else it can use, each with one button and the reason: notifications, background scanning, your phone maker’s battery switch, and one-tap delete.",
      "It covers every folder with photos and picks up new folders as they appear. You can choose your own folders in Settings.",
    ],
  },
  {
    label: "21:00 – 08:00",
    title: "Clocks in when you plug in",
    paras: [
      "While the phone charges at night, Nytcrew scans on its own. Forgot to charge? After midnight it can do a short shift on battery if the battery is above 30%, and stops at 30% or 6 am.",
      "When photos start taking twice as long because the phone is warm, it rests ten minutes and carries on. You can also tap Scan any time.",
    ],
  },
  {
    label: "All night",
    title: "Sets aside what you’d never miss",
    paras: [
      "Every photo gets seven scores, such as how likely it is to be a memory, a document or a screen. Into the morning pile go old screenshots, chats and memes, receipts and codes that did their job, blurry and accidental shots, repeats, and everyday photos your own choices say you don’t keep.",
      "Family, pets, trips and important documents stay. Age never counts against a photo of people.",
    ],
  },
  {
    label: "Bursts",
    title: "Picks the best of a burst",
    paras: [
      "Back-to-back look-alikes are grouped by a visual fingerprint of each photo, and Nytcrew suggests the best one. The same picture saved twice is grouped too, whenever it was saved.",
      "Once you decide on a group, that’s final: new copies join your earlier choice instead of coming back as a new pair.",
    ],
  },
  {
    label: "Morning",
    title: "One pile, yes or no",
    paras: [
      "Keep or delete with a tap, double-tap to flip, pinch to zoom, or answer straight from the notification. Deletes go through Android’s trash, which keeps them for 30 days.",
      "With one-tap delete (Android 12+, granted in Android’s settings), deletes skip the extra prompt.",
    ],
  },
  {
    label: "Every answer",
    title: "Learns what you’d keep",
    paras: [
      "Your keeps and deletes re-fit how much each of the seven scores matters to you. It only changes after about 40 decisions, when the data clearly supports it, and it shrugs off the odd misclick. Photos you haven’t reviewed are then re-scored.",
    ],
  },
  {
    label: "Any time",
    title: "Find any photo by typing",
    paras: [
      "Search “passport”, “receipt”, “dog on the beach” or “wifi password”. Nytcrew reads the text inside photos on the phone, and the search index stays there.",
    ],
  },
];

export default function Features() {
  return (
    <>
      <PageHero eyebrow="How it works" title="The night shift, step by step.">
        Nytcrew looks at your photos with an AI model on your phone, overnight, and turns a
        cluttered gallery into one short pile for the morning.
      </PageHero>

      <section className="bg-dawn-100 px-6 py-20 text-ink">
        <ol className="mx-auto max-w-[960px] border-t border-[#cfe0db]">
          {shift.map((s) => (
            <li key={s.title} className="flex flex-wrap gap-x-10 gap-y-3 border-b border-[#cfe0db] py-10">
              <p className="flex-[0_0_160px] pt-1.5 font-mono text-[13px] uppercase tracking-[0.06em] text-teal-700">
                {s.label}
              </p>
              <div className="min-w-0 flex-[1_1_480px]">
                <h2 className="text-[clamp(24px,2.6vw,32px)] leading-tight font-bold tracking-[-0.02em]">
                  {s.title}
                </h2>
                {s.paras.map((p) => (
                  <p key={p} className="mt-3 text-base leading-[1.7] text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#fbfdfc] px-6 py-20 text-ink">
        <div className="mx-auto grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          <div className="rounded-[18px] border border-[#d5e5e1] bg-white p-7">
            <p className="mb-3 font-mono text-[13px] uppercase tracking-[0.06em] text-teal-700">Never leaves your phone</p>
            <p className="leading-relaxed text-ink-soft">
              Your photos, thumbnails or copies, the full text read from them, visual
              fingerprints and your searches.
            </p>
          </div>
          <div className="rounded-[18px] border border-[#d5e5e1] bg-white p-7">
            <p className="mb-3 font-mono text-[13px] uppercase tracking-[0.06em] text-[#9a5b0b]">Sent for scoring</p>
            <p className="leading-relaxed text-ink-soft">
              A short description, up to 25 words of text in the photo and its age, with emails,
              links, @handles and long numbers masked. Google&apos;s Gemini scores it; our server
              doesn&apos;t keep it.
            </p>
          </div>
          <div className="rounded-[18px] border border-[#d5e5e1] bg-white p-7">
            <p className="mb-3 font-mono text-[13px] uppercase tracking-[0.06em] text-teal-700">Backed up to your account</p>
            <p className="leading-relaxed text-ink-soft">
              Scores, masked descriptions, file names and folders, your choices, learned
              preferences, and night and speed statistics. Only you can read it.
            </p>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-[960px] text-[15px] text-ink-soft">
          Every detail is in the{" "}
          <a href={PRIVACY_URL} className="font-semibold text-teal-700 underline">
            privacy policy
          </a>
          . You&apos;ll need an Android phone with 6&nbsp;GB of RAM or more and about 1.3&nbsp;GB
          free for the model.
        </p>
      </section>

      <section className="bg-night-950 px-6 py-24 text-center">
        <h2 className="mx-auto max-w-[760px] text-[clamp(34px,4.6vw,60px)] leading-none font-extrabold tracking-[-0.035em] text-mist-bright">
          Plug in tonight. Forget about it.
        </h2>
        <a
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex min-h-13 items-center rounded-full bg-teal-400 px-7 text-[17px] font-semibold text-[#04201c] transition-colors hover:bg-teal-300"
        >
          Get Nytcrew on Google Play
        </a>
      </section>
    </>
  );
}
