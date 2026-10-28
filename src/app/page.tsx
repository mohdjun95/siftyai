import Link from "next/link";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { PLAY_URL, PRIVACY_URL, appFaqs, faqJsonLd } from "@/lib/nytcrew";

// Home, from the Claude Design canvas "Nytcrew website redesign" (night to morning):
// the page starts at night and gets lighter as it scrolls. Every claim is from the 2.8.1 code.

const shiftLog = [
  { time: "21:04", text: "Plugged in. Crew clocks in." },
  { time: "21:05", text: "Going through photos, newest first." },
  { time: "23:52", text: "Phone’s warm. Ten-minute break." },
  { time: "02:10", text: "Set aside: a blurry burst, old receipts, a pocket shot." },
  { time: "07:30", text: "Morning pile is ready when you are." },
];

const night = [
  {
    when: "21:00 – 08:00",
    title: "Plug in, that’s the shift",
    body: "Charging at night is the only signal it needs. No app to open, nothing to press.",
    icon: "plug",
  },
  {
    when: "Phone warm",
    title: "Takes a tea break",
    body: "When it slows down from heat, it rests ten minutes, then gets back to work.",
    icon: "thermo",
  },
  {
    when: "Forgot to charge",
    title: "A short shift on battery",
    body: "After midnight it can work a little on battery, and stops at 30% so your morning is safe.",
    icon: "moon",
  },
  {
    when: "Morning",
    title: "One pile, yes or no",
    body: "Go through what it set aside, even from the notification. Every answer teaches it your taste.",
    icon: "sunrise",
  },
] as const;

const clears = [
  "Old screenshots, chats, memes and posts that lost their point",
  "Receipts, bills, parking spots and Wi-Fi codes that did their job",
  "Blurry, dark-pocket and accidental shots",
  "Bursts and look-alikes, keeping the best one",
  "The same picture saved twice",
  "Everyday photos that mean nothing to you, learned from your choices",
];

const keeps = [
  "Family, friends, kids and pets",
  "Trips, outings and big days",
  "IDs, passports, certificates and other documents that matter",
  "Old photos of people: age never counts against them",
  "Anything you said keep",
];

const underTheHood: {
  title: string;
  body: string[];
  link?: { href: string; label: string };
}[] = [
  {
    title: "How it decides",
    body: [
      "An AI model on your phone writes a sentence or two about each photo. That text gets seven scores from 0 to 10: people, places and your life, records, temporary info, screens, repeats and noise.",
      "Screen and text content more than six months old with no people scores high on temporary. Age never lowers people, places or documents.",
      "After about 40 of your keeps and deletes, it re-weighs the scores to fit you, only when the data clearly supports it.",
    ],
    link: { href: "/how-nytcrew-decides", label: "The full rules" },
  },
  {
    title: "What leaves your phone",
    body: [
      "Never: your photos, thumbnails, the full text read from them, or your searches.",
      "For scoring: the short description, up to 25 words of text in the photo and its age, with emails, links, @handles and long numbers masked. Google’s Gemini scores it; our server doesn’t keep it.",
      "Backed up to your account: scores, masked descriptions, file names, your choices, learned preferences, and night and speed statistics.",
    ],
    link: { href: PRIVACY_URL, label: "Privacy policy" },
  },
  {
    title: "Similar shots and search",
    body: [
      "Back-to-back look-alikes are grouped by a visual fingerprint, and Nytcrew suggests the one to keep.",
      "Search any photo by what’s in it, “passport”, “receipt”, “wifi password”, including text inside the photo. The search stays on your phone.",
    ],
  },
  {
    title: "Keeping itself running",
    body: [
      "It reschedules its night shifts after app updates, and setup points you to the one battery switch your phone maker needs.",
      "A quiet “Plug in tonight?” may appear between 10 and 11:30 pm when photos are waiting, at most every three days.",
    ],
  },
  {
    title: "What you need",
    body: [
      "An Android phone with 6 GB of RAM or more, about 1.3 GB free for the AI model (downloaded once, by itself), and a Google or email sign-in so your results are backed up.",
    ],
    link: { href: "/download", label: "Download details" },
  },
];

const eyebrow = "font-mono text-sm uppercase tracking-[0.08em]";
const playButton =
  "inline-flex min-h-13 items-center rounded-full bg-teal-400 px-7 text-[17px] font-semibold text-[#04201c] transition-colors hover:bg-teal-300";

export default function Home() {
  return (
    <div className="bg-night-950 text-mist">
      <JsonLd data={faqJsonLd(appFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-26">
        <div
          aria-hidden="true"
          className="absolute top-16 right-[7%] h-[120px] w-[120px] rounded-full opacity-85 shadow-[inset_-24px_10px_0_0_var(--color-moon)]"
        ></div>
        <div className="relative mx-auto flex max-w-[1160px] flex-wrap items-center gap-14">
          <div className="min-w-0 flex-[1_1_520px]">
            <p className={`${eyebrow} mb-5 text-lamp`}>Free · Android · formerly Sifty</p>
            <h1 className="text-[clamp(44px,6.2vw,82px)] leading-[0.98] font-extrabold tracking-[-0.035em] text-mist-bright">
              You sleep.
              <br />
              The crew sorts
              <br />
              your photos.
            </h1>
            <p className="mt-7 max-w-[540px] text-[19px] leading-relaxed text-mist-dim">
              <strong className="font-semibold text-mist-bright">
                Nytcrew is a free Android app that works the night shift on your phone.
              </strong>{" "}
              While it charges, the crew goes through your whole gallery and leaves the junk in
              one neat pile for the morning. Set it up once, then forget it&apos;s there. Your
              photos never leave the phone.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={playButton}>
                Hire the night crew, free
              </a>
              <a
                href="#night"
                className="inline-flex min-h-13 items-center rounded-full border border-white/20 px-6 text-[17px] font-medium text-mist transition-colors hover:border-teal-300 hover:text-teal-300"
              >
                See one night
              </a>
            </div>
            <p className="mt-4 text-sm text-mist-faint">
              Said &ldquo;night crew&rdquo;. Needs an Android phone with 6&nbsp;GB of RAM or more.
            </p>
          </div>

          <div className="min-w-0 max-w-[440px] flex-[1_1_380px] rounded-[20px] border border-white/10 bg-night-800 p-6.5">
            <div className="mb-4.5 flex items-center justify-between gap-3">
              <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-mist-faint">
                Shift log · tonight
              </span>
              <span className="inline-flex items-center gap-2 text-[13px] text-teal-400">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-teal-400"></span>
                On duty
              </span>
            </div>
            <ol>
              {shiftLog.map((row) => (
                <li key={row.time} className="flex gap-4.5 border-t border-white/[0.07] py-3.25">
                  <span className="flex-[0_0_52px] font-mono text-sm text-lamp">{row.time}</span>
                  <span className="text-[15px] leading-normal text-[#d3e3e0]">{row.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* The night shift */}
      <section id="night" className="scroll-mt-16 border-t border-white/[0.06] bg-night-900 px-6 py-24">
        <div className="mx-auto max-w-[1160px]">
          <h2 className="max-w-[720px] text-[clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.03em] text-mist-bright">
            One setup. Then it clocks in every night without you.
          </h2>
          <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-7 gap-y-8">
            {night.map((s) => (
              <div key={s.title}>
                <NightIcon name={s.icon} />
                <p className="mt-4.5 mb-1.5 font-mono text-[13px] uppercase tracking-[0.06em] text-lamp">
                  {s.when}
                </p>
                <h3 className="mb-2 text-[21px] font-bold text-mist-bright">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#a9bfbb]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it clears / keeps */}
      <section id="clears" className="scroll-mt-16 bg-night-700 px-6 py-24">
        <div className="mx-auto max-w-[1160px]">
          <h2 className="max-w-[760px] text-[clamp(32px,4vw,50px)] leading-[1.05] font-bold tracking-[-0.03em] text-mist-bright">
            It clears out anything you&apos;d never miss. Not just screenshots.
          </h2>
          <div className="mt-12 flex flex-wrap gap-5">
            <PileCard title="Into the morning pile" titleClass="text-lamp" items={clears} mark="minus" />
            <PileCard title="Left exactly where it is" titleClass="text-teal-300" items={keeps} mark="tick" />
          </div>
          <p className="mt-5.5 text-[15px] text-[#a9bfbb]">
            Nothing is deleted without your yes, and Android keeps deleted photos in the trash for
            30 days.
          </p>
        </div>
      </section>

      {/* Under the hood: dropdowns */}
      <section className="bg-dawn-100 px-6 py-22 text-ink">
        <div className="mx-auto max-w-[820px]">
          <h2 className="mb-7 text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-0.03em]">
            Under the hood
          </h2>
          <div className="border-t border-[#cfe0db]">
            {underTheHood.map((m) => (
              <details key={m.title} className="border-b border-[#cfe0db]">
                <summary className="flex min-h-16 items-center gap-4 py-2">
                  <span className="flex-auto font-display text-xl font-bold">{m.title}</span>
                  <svg
                    className="chev h-5 w-5 flex-none transition-transform"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#0f766e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 8l5 5 5-5" />
                  </svg>
                </summary>
                <div className="space-y-3 pr-9 pb-6 text-base leading-[1.7] text-ink-soft">
                  {m.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {m.link && (
                    <p>
                      <Link href={m.link.href} className="font-semibold text-teal-700 underline">
                        {m.link.label}
                      </Link>
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ: always visible */}
      <section id="faq" className="scroll-mt-16 bg-[#fbfdfc] px-6 py-22 text-ink">
        <div className="mx-auto max-w-[820px]">
          <h2 className="mb-7 text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-0.03em]">
            Questions people ask
          </h2>
          <FaqList faqs={appFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-night-950 px-6 py-26 text-center">
        <p className={`${eyebrow} mb-4.5 text-lamp`}>Shift starts 21:00</p>
        <h2 className="mx-auto max-w-[820px] text-[clamp(38px,5.4vw,72px)] leading-none font-extrabold tracking-[-0.035em] text-mist-bright">
          Plug in. Go to bed.
          <br />
          Wake up lighter.
        </h2>
        <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={`${playButton} mt-9`}>
          Get Nytcrew on Google Play
        </a>
      </section>
    </div>
  );
}

function PileCard({
  title,
  titleClass,
  items,
  mark,
}: {
  title: string;
  titleClass: string;
  items: string[];
  mark: "minus" | "tick";
}) {
  return (
    <div className="min-w-0 flex-[1_1_420px] rounded-[20px] border border-white/[0.08] bg-night-950/50 p-7.5">
      <p className={`mb-4.5 font-mono text-[13px] uppercase tracking-[0.06em] ${titleClass}`}>{title}</p>
      <ul className="flex flex-col gap-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3.5 text-base leading-normal text-[#d3e3e0]">
            <svg
              className="mt-0.75 h-5 w-5 flex-none"
              viewBox="0 0 20 20"
              fill="none"
              stroke={mark === "minus" ? "var(--color-lamp)" : "var(--color-teal-300)"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={mark === "minus" ? "M5 10h10" : "M4 10.5l4 4 8-9"} />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NightIcon({ name }: { name: "plug" | "thermo" | "moon" | "sunrise" }) {
  const paths = {
    plug: ["M14 6v8M26 6v8", "M10 14h20v6a10 10 0 0 1-20 0z", "M20 30v5"],
    thermo: ["M17 8a3 3 0 0 1 6 0v15a6 6 0 1 1-6 0z", "M20 18v9", "M29 12h4M29 18h3"],
    moon: ["M27 24a10 10 0 0 1-11-14 10 10 0 1 0 11 14z", "M30 8v4M28 10h4"],
    sunrise: ["M6 28h28", "M11 28a9 9 0 0 1 18 0", "M20 9v4M9 14l3 3M31 14l-3 3"],
  }[name];
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="var(--color-teal-400)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
