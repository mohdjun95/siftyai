import Link from "next/link";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { PLAY_URL, PRIVACY_URL, appFaqs, faqJsonLd } from "@/lib/nytcrew";

const features = [
  {
    title: "Cleans while you sleep",
    body: "Plug in at night and Nytcrew scans in the background. No buttons to press, no folders to sort.",
  },
  {
    title: "Flags clutter, not memories",
    body: "Screenshots, chats and memes more than six months old (with no people, and not an important document), blurry or accidental shots and repeats go to a short review. Age never counts against photos of people.",
  },
  {
    title: "Similar shots, sorted",
    body: "Took eight photos to get one good one? Nytcrew groups back-to-back look-alikes and copies, and suggests the best one to keep.",
  },
  {
    title: "Find any photo by typing",
    body: "Search “passport”, “receipt” or “wifi password”. Nytcrew reads the text inside photos too, so the screenshot you need is one word away.",
  },
  {
    title: "Learns what you’d keep",
    body: "Every keep or delete teaches Nytcrew your taste. After about 40 choices it adjusts what it flags to match you.",
  },
  {
    title: "Nothing deleted without you",
    body: "Keep or delete with a tap, or straight from the notification. Deleted photos go to your phone’s trash for 30 days.",
  },
];

const night = [
  {
    when: "Once",
    title: "Set it up in a minute",
    body: "Sign in and allow photo access. Nytcrew downloads its AI model by itself and finds every folder with photos, including new ones as they appear. One screen shows the other switches it can use, each with the reason.",
  },
  {
    when: "Every night",
    title: "It clocks in when you plug in",
    body: "Between 9 pm and 8 am, while the phone charges, Nytcrew scans on its own: no app to open, no button to press. If the phone warms up, it rests for ten minutes and carries on. Forgot to charge? It can do a short shift on battery after midnight, and stops at 30%.",
  },
  {
    when: "At bedtime",
    title: "A nudge, only when it helps",
    body: "If photos are waiting and the phone isn\u2019t plugged in, a quiet \u201cPlug in tonight?\u201d may appear between 10 and 11:30 pm. At most once every three days.",
  },
  {
    when: "Morning",
    title: "A short review, not a project",
    body: "The clutter it found waits for a keep or delete, right in the notification if you like. Every choice teaches it your taste, so it asks less over time.",
  },
  {
    when: "Always",
    title: "Keeps itself running",
    body: "It reschedules its night shifts after app updates, points you to the one battery switch your phone maker needs, and backs up its results to your account. You can forget it\u2019s there.",
  },
];

const steps = [
  {
    n: "1",
    title: "Looks at each photo on your phone",
    body: "A vision model (MiniCPM-V) running on your phone’s own processor writes a short description of each photo, like “screenshot of a train ticket”, and reads any text in it.",
  },
  {
    n: "2",
    title: "Scores the description, not the photo",
    body: "Emails, links, @handles and long numbers are masked. Only that text is sent to be scored by Google’s Gemini through Nytcrew’s server. The image never leaves your phone.",
  },
  {
    n: "3",
    title: "Decides on your phone, with your taste",
    body: "The final keep-or-review call is made on the phone, using weights learned from your own choices.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(appFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-50">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
            Free on Android &middot; formerly Sifty
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Set it up once.
            <br />
            <span className="text-teal-600">Never sort photos again.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            <strong className="text-gray-900">
              Nytcrew is your photo night crew: a free Android app that tidies
              your gallery while you sleep.
            </strong>{" "}
            Plug in at night and it goes through your photos on its own with an
            AI model on your phone. In the morning, the clutter is waiting for a
            quick yes or no. Nothing to start, nothing to remember. Your photos
            are never uploaded.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-teal-700 transition-colors"
            >
              Get it on Google Play
            </a>
            <Link
              href="/features"
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-base font-medium hover:border-teal-300 hover:text-teal-700 transition-colors"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Nytcrew is said &ldquo;night crew&rdquo;. Android phones with 6&nbsp;GB
            of RAM or more.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Facts strip */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Fact big="0" small="Photos uploaded" />
            <Fact big="Free" small="No ads, no subscription" />
            <Fact big="0" small="Buttons to press each night" />
            <Fact big="30 days" small="In the trash before anything is gone" />
          </div>
        </div>
      </section>

      {/* Fit and forget */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold text-teal-600 mb-2 uppercase tracking-wider">
            Fit and forget
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            A crew that works the night shift, so you don&apos;t have to think about it
          </h2>
          <ol className="space-y-8">
            {night.map((s) => (
              <li key={s.when} className="flex gap-5">
                <div className="w-24 shrink-0 text-sm font-semibold text-teal-700 pt-0.5">
                  {s.when}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Nytcrew does
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Set it up once. From then on it keeps what matters, sets aside the
              clutter and makes every photo easy to find.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold text-teal-600 mb-2 uppercase tracking-wider">
            Private by design
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            How Nytcrew keeps your photos on your phone
          </h2>
          <ol className="space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <div className="w-10 h-10 shrink-0 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-gray-500">
            Full details, including what&apos;s backed up to your account, are in
            the{" "}
            <a href={PRIVACY_URL} className="text-teal-700 underline">
              privacy policy
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Frequently asked questions
          </h2>
          <FaqList faqs={appFaqs} />
          <p className="mt-8 text-gray-600">
            How does it choose?{" "}
            <Link
              href="/how-nytcrew-decides"
              className="text-teal-700 underline"
            >
              How Nytcrew decides which photos are clutter
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Plug in tonight. Forget about it.
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Download Nytcrew free on Google Play and let the night crew take the
            gallery off your mind.
          </p>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-teal-700 px-8 py-3 rounded-full text-base font-semibold hover:bg-teal-50 transition-colors"
          >
            Get Nytcrew
          </a>
        </div>
      </section>
    </>
  );
}

function Fact({ big, small }: { big: string; small: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-teal-600">{big}</div>
      <div className="mt-1 text-sm text-gray-500">{small}</div>
    </div>
  );
}
