import type { Metadata } from "next";
import { PRIVACY_URL } from "@/lib/nytcrew";

export const metadata: Metadata = {
  title: "Delete your Nytcrew account",
  description:
    "How to delete your Nytcrew (formerly Sifty) account and the data backed up to it.",
  alternates: { canonical: "/delete-account" },
};

const EMAIL = "mohdjun95@gmail.com";
const SUBJECT = "Delete my Nytcrew account";

export default function DeleteAccount() {
  return (
    <section className="bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-gray-700 leading-relaxed">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Delete your Nytcrew account
        </h1>
        <p className="mt-6">
          Nytcrew was called Sifty until version 2.8; this works for accounts made
          with either.
        </p>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">How to ask</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            From the email address you signed in with, write to{" "}
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
              className="text-teal-700 underline"
            >
              {EMAIL}
            </a>
            .
          </li>
          <li>Use the subject &ldquo;{SUBJECT}&rdquo;.</li>
          <li>We delete everything below within 30 days and confirm by email.</li>
        </ol>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">What is deleted</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your account (email, name and user ID)</li>
          <li>Your cloud backup: scores, masked descriptions, file names and your keep/delete choices</li>
          <li>Your learned preferences and night-scan statistics</li>
          <li>The request times kept to rate-limit scoring</li>
        </ul>

        <h2 className="mt-10 mb-3 text-xl font-bold text-gray-900">What isn&apos;t affected</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your photos. They were never uploaded and stay on your phone.</li>
          <li>
            Crash reports, which aren&apos;t linked to your account and expire after
            90 days.
          </li>
        </ul>
        <p className="mt-6">
          To remove the data on your phone too, uninstall Nytcrew or clear its data
          in Android&apos;s settings. Details are in the{" "}
          <a href={PRIVACY_URL} className="text-teal-700 underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
