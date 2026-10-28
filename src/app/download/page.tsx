import type { Metadata } from "next";
import { IOS_URL, PLAY_URL, PRIVACY_URL } from "@/lib/nytcrew";

export const metadata: Metadata = {
  title: "Download Nytcrew for Android",
  description:
    "Download Nytcrew free on Google Play. Cleans up your photo gallery overnight with an on-device AI model. Android, 6 GB RAM or more.",
  alternates: { canonical: "/download" },
};

export default function Download() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Get Nytcrew
          </h1>
          <p className="mt-4 text-lg text-teal-100">
            Free on Google Play. No ads, no subscription. Your photos never leave
            your phone.
          </p>
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex flex-col items-start bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
          >
            <span className="text-[10px] uppercase tracking-wider text-gray-300">
              Get it on
            </span>
            <span className="text-lg font-semibold leading-tight">Google Play</span>
          </a>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">What you need</h2>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>An Android phone with 6 GB of RAM or more</li>
              <li>About 1.3 GB free for the AI model, downloaded once after you allow photo access</li>
              <li>A Google or email sign-in, so your results are backed up</li>
              <li>An internet connection for scoring (photos stay on the phone)</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Good to know</h2>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>Nytcrew was called Sifty until version 2.8. If you had Sifty, just update.</li>
              <li>Scanning works best overnight while charging.</li>
              <li>Nothing is deleted without your say; deletes stay in the trash for 30 days.</li>
              <li>
                Read the{" "}
                <a href={PRIVACY_URL} className="text-teal-700 underline">privacy policy</a>.
              </li>
            </ul>
          </div>
          <p className="md:col-span-2 text-sm text-gray-500">
            On iPhone? Nytcrew isn&apos;t on iOS yet. The App Store has{" "}
            <a href={IOS_URL} target="_blank" rel="noopener noreferrer" className="underline">
              the earlier Sifty app
            </a>
            , which analyses photos in the cloud instead of on the phone.
          </p>
        </div>
      </section>
    </>
  );
}
