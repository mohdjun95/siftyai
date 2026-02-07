import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features - Sifty AI",
  description:
    "Explore the 2-phase AI learning system, smart recommendations, storage recovery, and more features of Sifty AI Photo Sorter.",
};

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Features that make Sifty{" "}
            <span className="text-teal-600">smart</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A deep dive into the technology and experience behind your AI photo
            assistant.
          </p>
        </div>
      </section>

      {/* 2-Phase System Deep Dive */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              The 2-Phase Learning System
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              First the AI learns you, then it cleans for you. Simple, effective,
              and increasingly accurate.
            </p>
          </div>

          {/* Phase 1 - Learning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="flex justify-center">
              <Image
                src="/dashboard.png"
                alt="Sifty Dashboard - Ready to Start"
                width={260}
                height={520}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                PHASE 1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Learning &mdash; Understanding You
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sifty scans your entire photo library and categorizes images by
                type, content, and significance. It builds a personalized profile
                (your &ldquo;User Story&rdquo;) describing your interests, relationships,
                and the types of photos you typically keep. As you review its
                recommendations, the AI refines its Master Context &mdash; learning
                your specific patterns and exceptions.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  What happens
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">1.</span>
                    Full gallery scan and image classification
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">2.</span>
                    User Story and Master Context creation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">3.</span>
                    Initial keep/delete recommendations with reasoning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">4.</span>
                    AI learns from every decision you make
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 - Cleaning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                PHASE 2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Cleaning &mdash; High-Confidence Sorting
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                With your preferences fully understood, the AI processes
                remaining photos with high confidence. It handles edge cases,
                catches patterns, and delivers detailed storage recovery stats
                so you see exactly how much space you&apos;ve reclaimed.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  Results
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">1.</span>
                    High-accuracy automated sorting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">2.</span>
                    Storage stats: analyzed, trashed, kept
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">3.</span>
                    Safe trash bin before permanent deletion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">4.</span>
                    A clean, organized photo gallery
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/phase-complete.png"
                alt="Phase Complete with Stats"
                width={260}
                height={520}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything you need
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Thoughtfully designed features for a seamless photo management
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="Smart Recommendations"
              description="Every photo gets an AI-powered recommendation with clear reasoning. Know exactly why Sifty suggests keeping or deleting."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              title="User Profile Learning"
              description="Sifty creates a personalized user story reflecting your interests, relationships, and what photos matter most to you."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              }
              title="Phased Analysis"
              description="Two progressive phases that improve AI accuracy. Pause and resume at any time between phases."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              }
              title="Storage Recovery"
              description="Track exactly how much storage you recover. See detailed stats for analyzed, trashed, and kept content."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              }
              title="Safe Trash Bin"
              description="Deleted photos go to a safe trash bin first. Review and restore before permanent deletion. Nothing is lost by accident."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              title="Swipe to Decide"
              description="Intuitive swipe-based review interface. Keep or delete with a single tap or swipe, with real-time progress tracking."
            />
          </div>
        </div>
      </section>

      {/* App Screenshots Gallery */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">See it in action</h2>
            <p className="mt-3 text-gray-600">
              Real screenshots from the Sifty AI experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "/dashboard.png", alt: "Dashboard" },
              { src: "/review-keep.png", alt: "Review - Keep" },
              { src: "/review-delete.png", alt: "Review - Delete" },
              { src: "/phase-complete.png", alt: "Phase Complete" },
            ].map((img) => (
              <div key={img.src} className="group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={200}
                  height={400}
                  className="rounded-2xl shadow-md border border-gray-100 group-hover:shadow-lg transition-shadow w-full"
                />
                <p className="mt-2 text-xs text-center text-gray-400">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Try Sifty AI today
          </h2>
          <p className="text-teal-100 mb-8">
            Free to download. Your photos stay on your device.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center justify-center bg-white text-teal-700 px-8 py-3 rounded-full text-base font-semibold hover:bg-teal-50 transition-colors"
          >
            Get the App
          </Link>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
