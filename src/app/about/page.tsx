import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Sifty AI",
  description:
    "The product story behind Sifty AI. Learn about the problem, the process, and the product management journey that shaped this app.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            The story behind{" "}
            <span className="text-teal-600">Sifty AI</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A product built from a real problem &mdash; the endless clutter in our
            phone galleries &mdash; and the belief that AI can solve it thoughtfully.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <div className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
                The Problem
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                We all have thousands of photos we&apos;ll never look at again
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I had over 8,000 photos on my phone. Screenshots of things
                  I&apos;d already dealt with. Food photos I&apos;d never look at
                  again. Dozens of nearly identical shots from the same moment.
                  Images that made sense at the time but were digital clutter
                  months later. And I&apos;m not unusual &mdash; every friend or
                  family member I talked to described the same experience.
                </p>
                <p>
                  The result? Storage warnings, slow backups, and a gallery
                  where real memories were buried under noise. I tried existing
                  gallery cleaners and duplicate finders, but they all had the
                  same problem: they made deletion slightly easier without
                  reducing the cognitive load of deciding what to keep. The real
                  bottleneck was never the delete button &mdash; it was the
                  8,000 decisions required to reach it.
                </p>
                <p>
                  That&apos;s the gap Sifty was built to fill.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex items-center justify-center">
              <Image
                src="/dashboard-2.png"
                alt="Sifty Dashboard Overview"
                width={240}
                height={480}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Journey */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
              Product Journey
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              From insight to product
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-teal-200 md:-translate-x-px"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem
                side="left"
                label="Discovery"
                title="Identifying the pain point"
                description="It started with my own phone — 8,000+ photos accumulated over nearly a decade, and zero motivation to sort through them. Conversations with friends and family confirmed this wasn't just my problem. Everyone's gallery was a mess, and nobody had a good solution."
              />
              <TimelineItem
                side="right"
                label="Ideation"
                title="Why not let AI decide?"
                description="The key insight: photo sorting isn't one-size-fits-all. A photo of food might be trash for one person but a cherished memory for a food blogger. The AI needs to learn individual preferences, not apply generic rules."
              />
              <TimelineItem
                side="left"
                label="Design"
                title="The learning and cleaning model"
                description="Designed a streamlined learning system: the AI first learns your preferences through interactive review (Learning), then sorts the rest of your gallery with high confidence (Cleaning). Each phase reduces user effort while increasing AI accuracy."
              />
              <TimelineItem
                side="right"
                label="Build"
                title="User Story + Master Context"
                description="Built the AI to maintain two knowledge structures: a User Story (who you are, what you care about) and a Master Context (specific patterns learned from your decisions). Together, they create personalized photo intelligence."
              />
              <TimelineItem
                side="right"
                label="Discover"
                title="Keyword search emerges from analysis infrastructure"
                description="While building the AI analysis pipeline, a realization: the rich descriptions generated for scoring could power a standalone keyword search feature. A byproduct of the core system became a major differentiator — search your gallery by describing what you're looking for."
              />
              <TimelineItem
                side="left"
                label="Ship"
                title="Launch on Android & iOS"
                description="Shipped on both platforms with a focus on trust: safe trash bin, clear AI reasoning for every recommendation, and full user control. The AI suggests, but you always decide."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Decisions */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
              Key Decisions
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Product principles that shaped Sifty
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PrincipleCard
              number="01"
              title="Trust through transparency"
              description="Every AI recommendation comes with a reason. Users can see exactly why Sifty suggests deleting a photo. No black box decisions on your personal memories."
            />
            <PrincipleCard
              number="02"
              title="Progressive disclosure"
              description="Rather than overwhelming users with settings, Sifty learns through interaction. The system gradually builds accuracy without demanding upfront configuration."
            />
            <PrincipleCard
              number="03"
              title="Safety by default"
              description="Nothing is permanently deleted without explicit confirmation. The trash bin creates a safety net that gives users confidence to make faster decisions."
            />
            <PrincipleCard
              number="04"
              title="Minimal friction"
              description="Swipe or tap to decide. No complex UI, no learning curve. The interaction model was designed to feel as natural as scrolling through a social feed."
            />
          </div>
        </div>
      </section>

      {/* AI Architecture Highlight */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
                Under the Hood
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                AI that adapts, not dictates
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sifty&apos;s AI maintains a living profile of your preferences. It
                tracks patterns like &ldquo;keeps photos with people, especially on
                beaches&rdquo; and &ldquo;deletes error screenshots&rdquo; &mdash; then applies
                these learned rules with increasing confidence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When the AI encounters something new, it flags it for review
                rather than making assumptions. This human-in-the-loop approach
                ensures the AI earns trust gradually rather than demanding it
                upfront.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/ai-learning.png"
                alt="AI Learning - User Story and Master Context"
                width={260}
                height={520}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience the product
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            See these product principles in action. Download Sifty AI and let
            the AI learn what matters to you.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center justify-center bg-white text-teal-700 px-8 py-3 rounded-full text-base font-semibold hover:bg-teal-50 transition-colors"
          >
            Download Sifty AI
          </Link>
        </div>
      </section>
    </>
  );
}

function TimelineItem({
  side,
  label,
  title,
  description,
}: {
  side: "left" | "right";
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className={`relative flex flex-col md:flex-row ${
        side === "right" ? "md:flex-row-reverse" : ""
      } items-start`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-teal-500 rounded-full -translate-x-1.5 mt-1.5 ring-4 ring-teal-50"></div>

      {/* Content */}
      <div
        className={`ml-10 md:ml-0 md:w-1/2 ${
          side === "left" ? "md:pr-12 md:text-right" : "md:pl-12"
        }`}
      >
        <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
          {label}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function PrincipleCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
      <div className="text-3xl font-bold text-teal-200 mb-3">{number}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
