import type { Metadata } from "next";
import { PLAY_URL, PRIVACY_URL } from "@/lib/nytcrew";

export const metadata: Metadata = {
  title: "How Nytcrew works: on-device AI photo cleaning for Android",
  description:
    "How Nytcrew scans your photos overnight with an on-device AI model, flags clutter, groups similar shots, makes photos searchable and learns your taste, without uploading a single photo.",
  alternates: { canonical: "/features" },
};

const sections = [
  {
    label: "Setup",
    title: "Set it up once",
    paras: [
      "Sign in, allow photo access, and Nytcrew downloads its AI model by itself (about 1.3 GB, once). One screen lists the permissions it can use, each with one button and the reason: photos (required), notifications, background scanning, your phone maker's battery switch, and one-tap delete.",
      "Nytcrew scans every folder with photos by default, and picks up new folders as they appear. You can choose your own folders in Settings.",
    ],
  },
  {
    label: "Overnight",
    title: "Scans while you sleep",
    paras: [
      "Plug in at night and Nytcrew scans while the phone charges, between 9 pm and 8 am. If you allow it, it can also do a short run on battery after midnight when the battery is above 30%, and stops at 30% or 6 am.",
      "It watches the phone's temperature: when photos start taking twice as long, it rests for ten minutes, then carries on. You can also tap Scan any time to run it in the foreground.",
    ],
  },
  {
    label: "Clutter",
    title: "Flags clutter, not memories",
    paras: [
      "Each photo gets seven scores, such as how likely it is to be a memory, a document or a screen. Screenshots, memes, chats and posts more than six months old, with no people and not an important document, are flagged. So are blurry shots and repeats. Age never makes a photo of people look like clutter.",
      "Flagged photos wait in a short Review, which you can open any time, even mid-scan.",
    ],
  },
  {
    label: "Review",
    title: "One quick review, not a project",
    paras: [
      "Keep or delete with a tap, double-tap to flip, pinch to zoom. You can also review from the notification. Deletes go through Android's own trash prompt, and Android keeps them in the trash for 30 days.",
      "With one-tap delete (Android 12+, granted in Android's settings), deletes go to the trash without the extra prompt.",
    ],
  },
  {
    label: "Similar shots",
    title: "Picks the best of a burst",
    paras: [
      "Photos taken back-to-back that look alike are grouped, and Nytcrew suggests the best one. It compares a visual fingerprint of each photo, so it groups shots that really look the same, not just ones with similar descriptions. Exact copies are grouped whenever they were saved.",
      "Once you decide on a group, that's final: new copies of those photos join your earlier choice instead of coming back as a new pair.",
    ],
  },
  {
    label: "Search",
    title: "Find any photo by typing",
    paras: [
      "Every scanned photo gets a short description, and Nytcrew reads the text inside it on the phone. Search “passport”, “receipt”, “dog on the beach” or “wifi password”. The search index stays on your phone.",
    ],
  },
  {
    label: "Learning",
    title: "Learns what you'd keep",
    paras: [
      "Your keep and delete choices are used to re-fit how Nytcrew weighs its seven scores. It only changes once it has about 40 decisions and the change is statistically supported, and it's built to shrug off the odd misclick. When it changes, photos you haven't reviewed are re-scored.",
    ],
  },
];

export default function Features() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            How Nytcrew works
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nytcrew looks at your photos with an AI model on your phone, overnight,
            and turns a cluttered gallery into a short review. Here&apos;s each part.
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((s) => (
            <div key={s.title}>
              <div className="text-sm font-semibold text-teal-600 mb-2 uppercase tracking-wider">
                {s.label}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {s.title}
              </h2>
              {s.paras.map((p) => (
                <p key={p} className="text-gray-600 leading-relaxed mt-3">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="bg-teal-50/60 border border-teal-100 rounded-2xl p-6 md:p-8">
            <div className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-2">
              Privacy
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What leaves your phone, exactly
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
              <li>
                <b>Never:</b> your photos, thumbnails or copies, the full text read
                from photos, visual fingerprints, your searches.
              </li>
              <li>
                <b>For scoring:</b> a short description of each photo, up to 25 words
                of text visible in it, and its age in days, with emails, links,
                @handles and long numbers masked. Google&apos;s Gemini scores it
                through Nytcrew&apos;s server, which doesn&apos;t store the text.
              </li>
              <li>
                <b>Backup to your account:</b> scores, the masked description, each
                photo&apos;s file name and folder, your Review choices, learned
                preferences, and night and speed statistics, so nothing is lost if you
                reinstall. Only your
                signed-in account can read it.
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Every detail is in the{" "}
              <a href={PRIVACY_URL} className="text-teal-700 underline">
                privacy policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>An Android phone with 6 GB of RAM or more</li>
              <li>About 1.3 GB free for the on-device model (downloaded once)</li>
              <li>An internet connection for scoring; photos stay offline</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Plug in tonight. Wake up to a calmer gallery.
          </h2>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-teal-700 px-8 py-3 rounded-full text-base font-semibold hover:bg-teal-50 transition-colors"
          >
            Get Nytcrew on Google Play
          </a>
        </div>
      </section>
    </>
  );
}
