import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                Available on Android &amp; iOS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your photos,
                <br />
                <span className="text-teal-600">intelligently sorted.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                Sifty AI learns what matters to you and helps you declutter your
                photo gallery. Reclaim storage, keep memories, and let AI handle
                the rest.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center bg-teal-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-teal-700 transition-colors"
                >
                  Download Free
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-base font-medium hover:border-teal-300 hover:text-teal-700 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-[260px] md:w-[280px]">
                <div className="absolute -inset-4 bg-teal-200/30 rounded-[3rem] blur-2xl"></div>
                <Image
                  src="/dashboard.png"
                  alt="Sifty AI Dashboard"
                  width={280}
                  height={560}
                  className="relative rounded-[2rem] shadow-2xl border border-gray-200"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600">Learn</div>
              <div className="mt-1 text-sm text-gray-500">Then Clean System</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">High</div>
              <div className="mt-1 text-sm text-gray-500">Accuracy After Training</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">Smart</div>
              <div className="mt-1 text-sm text-gray-500">Gallery Decluttering</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">1000+</div>
              <div className="mt-1 text-sm text-gray-500">Photos Sorted Per Session</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How Sifty Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              An intelligent system that gets smarter with every decision
              you make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Learning */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-sm font-semibold text-teal-600 mb-2">Learning</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Learning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sifty scans your gallery and builds a profile of your photo
                habits. You review AI recommendations, and with every decision
                the AI learns what matters to you &mdash; building a personalized
                User Story and Master Context.
              </p>
            </div>

            {/* Cleaning */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-sm font-semibold text-teal-600 mb-2">Cleaning</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cleaning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Armed with your preferences, the AI sorts remaining photos with
                high accuracy. It processes your gallery confidently, showing
                storage recovery stats so you see exactly how much space
                you&apos;ve reclaimed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature 1: AI Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="text-sm font-semibold text-teal-600 mb-2 uppercase tracking-wider">
                Smart Decisions
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                AI recommendations you can trust
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                For every photo, Sifty provides a clear recommendation with
                reasoning. It understands context &mdash; a random food photo vs. a
                meaningful dinner with friends. You always have the final say.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Clear keep/delete recommendation with reasoning</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Swipe-based review for fast decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Progress tracking with keep/delete/pending counts</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/review-keep.png"
                alt="AI Recommendation Screen"
                width={260}
                height={520}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
          </div>

          {/* Feature 2: AI Learning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="flex justify-center">
              <Image
                src="/ai-learning.png"
                alt="AI Learning System"
                width={260}
                height={520}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-teal-600 mb-2 uppercase tracking-wider">
                Adaptive Intelligence
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                An AI that truly learns you
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sifty builds a &ldquo;User Story&rdquo; &mdash; a profile of what you care about.
                It learns that you keep beach photos, trip memories, and important
                screenshots while deleting random clutter. The more you use it,
                the smarter it gets.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Personalized user profile built from your decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Master context evolves with each phase</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Learns exceptions and edge cases over time</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Storage Recovery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="text-sm font-semibold text-teal-600 mb-2 uppercase tracking-wider">
                Space Reclaimed
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                See exactly how much space you save
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                After each phase, Sifty shows detailed storage stats &mdash; how
                much was analyzed, moved to trash, and kept. Photos go to a safe
                trash bin first, so nothing is permanently deleted until you
                confirm.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Detailed storage stats after each phase</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Safe trash bin with undo capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Permanent deletion only when you&apos;re ready</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/phase-complete.png"
                alt="Phase Complete - Storage Stats"
                width={260}
                height={520}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
          </div>

          {/* Feature 4: Keyword Search */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
            <div className="flex justify-center">
              <Image
                src="/ai-context.png"
                alt="AI-Powered Keyword Search"
                width={260}
                height={520}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-teal-600 mb-2 uppercase tracking-wider">
                Instant Discovery
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Find any photo by describing it
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sifty&apos;s AI analysis creates a rich description for every photo
                in your gallery &mdash; stored locally on your device. Search for
                &ldquo;passport photo&rdquo;, &ldquo;white pants at beach&rdquo;,
                or &ldquo;sunset in Bali&rdquo; and find exactly what you need in seconds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Semantic search powered by AI-generated descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Works entirely on-device &mdash; fast and private</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Find photos by people, places, objects, or clothing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-700 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to declutter your gallery?
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Download Sifty AI free on Android and iOS and start reclaiming
            your storage space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center bg-white text-teal-700 px-8 py-3 rounded-full text-base font-semibold hover:bg-teal-50 transition-colors"
            >
              Download Now
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center border-2 border-teal-300 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-teal-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
