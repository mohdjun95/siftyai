import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study - Sifty AI | PM Portfolio",
  description:
    "Product management case study: How Sifty AI was designed, built, and launched — an AI-powered photo decluttering app using Gemini LLM.",
};

export default function CaseStudy() {
  return (
    <>
      {/* Hero / TL;DR */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
            PM Case Study
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Building Sifty AI: From Personal
            <br />
            <span className="text-teal-600">Frustration to Shipped Product</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            Identifying a gap in photo management, designing an AI-powered
            solution, and shipping it to the Play Store &mdash; from research
            through launch.
          </p>

          {/* TL;DR Box */}
          <div className="mt-10 bg-teal-50/60 border border-teal-100 rounded-2xl p-6 md:p-8">
            <div className="text-sm font-semibold text-teal-700 uppercase tracking-wider mb-4">
              TL;DR
            </div>
            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 shrink-0">&bull;</span>
                Personal pain point (8,000+ photos, zero motivation to sort) turned into a shipped product
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 shrink-0">&bull;</span>
                End-to-end ownership: research, strategy, design, development, and launch
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 shrink-0">&bull;</span>
                Google Gemini LLM for multimodal photo analysis with composite relevance scoring
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 shrink-0">&bull;</span>
                On-device AI descriptions power a keyword search feature no competitor offers
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 shrink-0">&bull;</span>
                Live on Google Play Store
              </li>
            </ul>
          </div>

          {/* Metadata Cards */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <MetaCard label="Status" value="Live on Play Store" />
            <MetaCard label="Stack" value="Flutter, Gemini, SQLite" />
            <MetaCard label="Platform" value="Android & iOS" />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="The Problem" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            8,000+ photos, a decade of accumulation, and zero motivation to sort
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I had over 8,000 images on my phone accumulated over nearly a decade.
              Screenshots of things I&apos;d already dealt with. Food photos I&apos;d never
              look at again. Dozens of nearly identical shots from the same moment.
              Memes. Accidental photos. Images that made sense at the time but were
              digital clutter months later.
            </p>
            <p>
              The problem wasn&apos;t that I lacked tools to delete photos. The problem
              was that deciding what to keep vs. what to delete is exhausting.
              Every photo requires a micro-decision. Multiply that by 8,000 and
              you understand why most people never start.
            </p>
            <p>
              I searched online for a solution. Every app I found &mdash; gallery
              cleaners, duplicate finders, storage managers &mdash; optimized the act
              of deletion. A better delete button. A faster swipe interface. Bulk
              select. But none of them touched the real bottleneck: the cognitive
              load of the decision itself.
            </p>
          </div>
          <InsightCallout>
            The bottleneck was never the delete button &mdash; it was the 8,000
            decisions required to reach it.
          </InsightCallout>
        </div>
      </section>

      {/* Market Landscape */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Market Landscape" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What exists and why it falls short
          </h2>
          <p className="text-gray-600 mb-10">
            I downloaded and tested over 10 photo management apps before building
            Sifty. Here&apos;s what I found.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MarketCard
              name="Google Photos"
              does="Smart storage, compression, &ldquo;Memories&rdquo; that resurface old photos"
              gap="Doesn&apos;t help you decide what to keep. Resurfaces memories but doesn&apos;t declutter."
            />
            <MarketCard
              name="Gallery Cleaner Apps"
              does="Files by Google, Cleaner for iPhone &mdash; cache/junk file removal, simple delete UI"
              gap="Still requires you to make every individual decision. The cognitive load is unchanged."
            />
            <MarketCard
              name="Duplicate Finders"
              does="Detect and remove exact or near-duplicate photos"
              gap="Solves one narrow problem. Most clutter isn&apos;t duplicates &mdash; it&apos;s photos that outlived their purpose."
            />
            <MarketCard
              name="AI Photo Organizers"
              does="Categorize and tag photos by content, faces, locations"
              gap="Categorize and tag but stop at organization. They don&apos;t reduce the collection, and their search remains basic &mdash; limited to predefined categories rather than natural language descriptions."
            />
          </div>

          <InsightCallout>
            Every existing solution shifts the UI around deletion. None of them
            reduce the cognitive load of the decision itself. That&apos;s the
            whitespace Sifty targets.
          </InsightCallout>
        </div>
      </section>

      {/* User Insights */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="User Insights" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Honest research, not fabricated data
          </h2>
          <p className="text-gray-600 mb-8">
            I didn&apos;t commission a survey or fabricate statistics. Here&apos;s what my
            research actually looked like:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="text-sm font-semibold text-teal-600 mb-2">Personal Dogfooding</div>
              <p className="text-sm text-gray-600">
                Used my own gallery of 8,000+ photos as the primary test case.
                You can&apos;t hide from your own frustrations when you&apos;re the user.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="text-sm font-semibold text-teal-600 mb-2">Friends &amp; Family</div>
              <p className="text-sm text-gray-600">
                Informal but revealing conversations. Everyone described the same
                problem. Nobody had ever tried to solve it systematically.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="text-sm font-semibold text-teal-600 mb-2">Competitive Analysis</div>
              <p className="text-sm text-gray-600">
                Downloaded and tested 10+ gallery management apps. Documented what
                each did well and where every one fell short.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="text-sm font-semibold text-teal-600 mb-2">App Store Review Mining</div>
              <p className="text-sm text-gray-600">
                Reviewed competitor app listings and user reviews. Users
                consistently appreciated the ease and speed of deletion these
                tools offered. But notably absent was the deeper frustration
                &mdash; nobody talked about how tedious it is to go through
                thousands of images. As if people didn&apos;t know this was a
                problem that could be solved.
              </p>
            </div>
          </div>

          <div className="text-sm font-semibold text-gray-900 mb-4">Key patterns observed:</div>
          <div className="space-y-4">
            <div className="border-l-2 border-teal-200 pl-4 text-sm text-gray-600 italic">
              &ldquo;Everyone I talked to said their gallery was a mess but none had
              tried to fix it.&rdquo;
            </div>
            <div className="border-l-2 border-teal-200 pl-4 text-sm text-gray-600 italic">
              &ldquo;People had emotional attachment to the idea of their photos even
              when they had no memory of what 80% of them contained.&rdquo;
            </div>
            <div className="border-l-2 border-teal-200 pl-4 text-sm text-gray-600 italic">
              &ldquo;The most common reason for not cleaning up: &lsquo;I wouldn&apos;t know
              where to start.&rsquo;&rdquo;
            </div>
            <div className="border-l-2 border-teal-200 pl-4 text-sm text-gray-600 italic">
              &ldquo;Existing apps required just as many decisions as manual sorting.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* Product Vision & Strategy */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Vision & Strategy" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Eliminate the cognitive load of photo curation
          </h2>
          <p className="text-gray-600 mb-10">
            The goal isn&apos;t maximum deletion &mdash; it&apos;s informed decisions. The AI
            should carry the weight of the decision, with the user confirming or
            overriding.
          </p>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-10">
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
              North Star Metric
            </div>
            <div className="text-xl md:text-2xl font-bold text-gray-900">
              Total images analyzed
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Not &ldquo;photos deleted.&rdquo; If users find value, they run more
              photos through the app. A single metric that captures both
              adoption and engagement.
            </p>
          </div>

          <div className="text-sm font-semibold text-gray-900 mb-6">Product Principles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <PrincipleCard
              number="01"
              title="Decide for them, not just show them"
              description="The AI should carry the weight of the decision. Users confirm or override, not start from scratch."
            />
            <PrincipleCard
              number="02"
              title="Trust is built, not assumed"
              description="The learning-then-cleaning system, transparent reasoning, and safe trash bin all exist to earn user trust gradually."
            />
            <PrincipleCard
              number="03"
              title="Personal, not generic"
              description="Every user's definition of 'worth keeping' is different. The AI must learn individual preferences, not apply generic rules."
            />
            <PrincipleCard
              number="04"
              title="Privacy by architecture"
              description="Analysis stored on-device. No cloud uploads. Privacy isn't a feature toggle — it's how the system is built."
            />
          </div>

          <div className="text-sm font-semibold text-gray-900 mb-4">How this metric tells the full story</div>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <p className="text-sm text-gray-600 leading-relaxed">
              Images analyzed is both the adoption metric and the engagement
              metric. New users analyze their first batch. Satisfied users come
              back to run more. The number only grows when the product delivers
              real value &mdash; accurate recommendations, useful descriptions,
              and reclaimed storage that users can see.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Design */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Solution Design" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A system that earns trust before it acts
          </h2>
          <p className="text-gray-600 mb-12">
            Rather than analyzing everything at once, Sifty uses a progressive
            approach: first learn the user, then clean confidently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center">
              <Image
                src="/dashboard.png"
                alt="Sifty Dashboard"
                width={240}
                height={480}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                LEARNING
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Learning &mdash; Calibrating to You
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The AI selects a random subset of photos from the gallery and
                processes them through Gemini. Each photo is analyzed and
                presented with a description and recommendation. As the user
                reviews each result &mdash; keep or delete &mdash; the system
                calibrates scoring weights specific to that user&apos;s preferences.
                This phase builds a personalized model of what matters to this
                person.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">1.</span>
                    Random subset selected from gallery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">2.</span>
                    AI presents recommendations with reasoning
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">3.</span>
                    User reviews and decides on each photo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">4.</span>
                    Scoring weights calibrate to user preferences
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                CLEANING
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cleaning &mdash; Full Gallery Analysis
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Using the calibrated weights from learning, the AI runs through
                the entire gallery. Each photo is analyzed, scored, and given a
                recommendation. During this process, rich text descriptions are
                generated for every image &mdash; these descriptions power the
                keyword search feature.
              </p>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">1.</span>
                    Custom weights applied across entire gallery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">2.</span>
                    Rich text descriptions generated for every photo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">3.</span>
                    Personalized keep/delete recommendations at scale
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">4.</span>
                    Descriptions stored locally for keyword search
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/review-keep.png"
                alt="AI Recommendation Screen"
                width={240}
                height={480}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
          </div>

          {/* Weight Calibration */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <div className="text-sm font-semibold text-teal-600 mb-3">Personalized Weight Calibration</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Each photo receives a composite relevance score &mdash; not a binary
              keep/delete flag, but a weighted continuum personalized to the user.
              The scoring model starts with baseline weights and recalibrates
              during learning based on the user&apos;s actual decisions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0 text-xs font-bold">1</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Content Analysis</div>
                  <div className="text-xs text-gray-500">What Gemini sees in the photo (people, places, objects, text)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0 text-xs font-bold">2</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Metadata Signals</div>
                  <div className="text-xs text-gray-500">When it was taken, recency, location, frequency</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0 text-xs font-bold">3</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Calibrated Weights</div>
                  <div className="text-xs text-gray-500">Adjusted during learning to match this user&apos;s preferences</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0 text-xs font-bold">4</div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Pertinent Relevance</div>
                  <div className="text-xs text-gray-500">How meaningful the photo is to this specific person right now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Trade-offs & Decisions */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Trade-offs" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The decisions that shaped the product
          </h2>
          <p className="text-gray-600 mb-10">
            Every product is a series of trade-offs. Here are the seven decisions
            that had the most impact on what Sifty became.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TradeOffCard
              title="Why two phases instead of one?"
              options="A single-pass analyzer would be simpler to build and faster for users. Why add the complexity of a learning phase?"
              decision="Learn first, then clean"
              reasoning="A single pass applies generic rules to everyone. But a food photo is trash for one person and a cherished memory for another. The learning phase calibrates weights to individual preferences before the AI touches the full gallery. This is fundamentally different from existing tools that apply one-size-fits-all rules — Sifty earns the right to decide by learning what you care about first."
              pmAngle="Progressive disclosure applied to an AI system. User effort invested early compounds into trust and accuracy later."
            />
            <TradeOffCard
              title="Choosing the right LLM"
              options="GPT-4V (strong vision, high cost), Claude (excellent reasoning), Gemini (strong multimodal, generous free tier)"
              decision="Google Gemini"
              reasoning="For a consumer app processing thousands of photos per user, API cost is existential. Gemini offered the best balance of multimodal quality and cost per image. The free tier made prototyping viable. At 2-3x the cost per image, other models would have made the free tier unsustainable."
              pmAngle="Unit economics as much as a technical decision. The relationship between AI capability and business model viability is a PM responsibility."
            />
            <TradeOffCard
              title="Why on-device, not cloud?"
              options="Cloud storage is easier to sync and scale. On-device means no cross-device access. Why accept that trade-off?"
              decision="On-device SQLite"
              reasoning="Photos are deeply personal. Storing analysis on-device eliminated privacy concerns entirely — no data leaves the phone. It also meant zero server costs and enabled offline keyword search. For a gallery app that's inherently device-specific, the sync trade-off was acceptable."
              pmAngle="Privacy as architecture, not a checkbox. The system is designed so that compromising user data isn't possible, not just unlikely."
            />
            <TradeOffCard
              title="Scoring on a spectrum, not a binary"
              options="Binary keep/delete would be simpler to present and faster to act on."
              decision="Composite relevance score"
              reasoning="Binary classification forces false certainty. A flight confirmation screenshot isn't 'keep forever' or 'delete now' — it's relevant today, irrelevant in three months. The composite score acknowledges that importance exists on a spectrum, and the calibrated weights ensure the spectrum is personal."
              pmAngle="Resisting the temptation to oversimplify. The scoring system creates room for future features (time-decay, archiving) without re-architecting."
            />
            <TradeOffCard
              title="One photo at a time"
              options="Showing a grid of 20 photos is more 'efficient' — more photos visible, batch operations possible."
              decision="Swipe interface"
              reasoning="Testing showed that seeing many photos at once increased decision fatigue — the opposite of what Sifty exists to solve. The swipe interface forces single-photo focus, matching how the AI presents its recommendation. One photo, one decision, one swipe. Cognitive load per decision drops to nearly zero."
              pmAngle="The interaction model must align with the core value proposition, even when it looks less efficient on paper."
            />
            <TradeOffCard
              title="Deliberate friction before deletion"
              options="Direct delete gives immediate space recovery and a simpler flow."
              decision="Safe trash bin"
              reasoning="Deleting photos is irreversible and emotionally charged. The trash bin adds one step of friction but eliminates the fear of making a mistake. Essential during cleaning where the AI acts autonomously — users need to know they can review and reverse before anything is permanent."
              pmAngle="Sometimes making something slightly harder makes the overall experience dramatically better. Trust is the product's most important currency."
            />
            <TradeOffCard
              title="Free at launch, monetize later"
              options="Freemium with limits, subscription, ad-supported, or completely free."
              decision="Completely free at launch"
              reasoning="Launching a consumer app in a crowded category with a paywall is a distribution problem. The priority was real usage data and word-of-mouth. Monetization is planned but gating the core experience before proving product-market fit would be premature."
              pmAngle="Sequencing decisions correctly. Monetization is a strategy question, not a launch requirement."
            />
          </div>
        </div>
      </section>

      {/* Keyword Search: The Differentiator */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Key Differentiator" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            AI-powered keyword search: find any photo by describing it
          </h2>
          <p className="text-gray-600 mb-8">
            During analysis, Gemini generates a rich text description for every
            photo. These descriptions are stored locally on the device. This
            infrastructure byproduct became a standalone feature: semantic search
            across your entire gallery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-4">Example searches:</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "passport photo",
                  "white pants at beach",
                  "sunset in Bali",
                  "receipt from dinner",
                  "cat sleeping on couch",
                  "kids at playground",
                ].map((query) => (
                  <div
                    key={query}
                    className="bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 border border-gray-100"
                  >
                    <span className="text-gray-400 mr-1">&ldquo;</span>
                    {query}
                    <span className="text-gray-400 ml-1">&rdquo;</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/ai-context.png"
                alt="AI Context and Search"
                width={240}
                height={480}
                className="rounded-[2rem] shadow-xl border border-gray-200"
              />
            </div>
          </div>

          <InsightCallout>
            The descriptions needed for relevance scoring turned out to be a
            standalone product feature. Good PMs recognize when infrastructure
            creates unexpected product value.
          </InsightCallout>

          <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div className="text-sm font-semibold text-gray-900 mb-2">
              Why this is different from Google Photos search
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Google Photos search requires cloud processing and only works with
              cloud-stored photos. Sifty&apos;s search works entirely on-device,
              across your full native gallery, with descriptions enriched by
              context the AI learned about you. No internet required. No data
              leaves your phone.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Architecture" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            High-level technical architecture
          </h2>
          <p className="text-gray-600 mb-10">
            A privacy-first architecture where all user data stays on the device.
          </p>

          {/* Architecture Diagram */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <ArchBlock name="Mobile App" desc="Flutter / Dart" />
              <Arrow />
              <ArchBlock name="Gemini API" desc="Photo analysis &amp; descriptions" />
              <Arrow />
              <ArchBlock name="On-Device SQLite" desc="User Story, scores, descriptions" />
              <Arrow />
              <ArchBlock name="Local Search" desc="Keyword matching" />
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["Flutter", "Dart", "Google Gemini", "SQLite"].map((tech) => (
              <span
                key={tech}
                className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Launch & GTM */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Launch & GTM" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            From code to Play Store
          </h2>
          <p className="text-gray-600 mb-10">
            The go-to-market was intentionally lean &mdash; prove the product
            works before investing in paid acquisition.
          </p>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-teal-200"></div>
            <div className="space-y-8">
              <TimelineItem
                label="Build"
                title="Product development"
                description="From initial prototype to production-ready app with learning and cleaning system, composite scoring, and keyword search."
              />
              <TimelineItem
                label="Marketing"
                title="siftyai.com"
                description="Launched the product site to support the app — clear storytelling, honest positioning, and direct download links."
              />
              <TimelineItem
                label="Launch"
                title="Play Store submission and ASO"
                description="Published on Google Play Store. Optimized listing with screenshots, feature descriptions, and targeted keywords."
              />
              <TimelineItem
                label="Distribution"
                title="Organic growth"
                description="Word-of-mouth, portfolio showcase, and organic discovery. No paid acquisition at this stage — the priority is proving product-market fit."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Impact */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Metrics & Impact" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Real metrics, not vanity numbers
          </h2>
          <p className="text-gray-600 mb-10">
            I&apos;m committed to sharing honest metrics. These are early-stage
            numbers that will be updated as usage grows.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <MetricCard value="High" label="Accuracy After Training" />
            <MetricCard value="1000+" label="Photos Analyzed Per Session" />
            <MetricCard value="On-Device" label="Privacy-First Architecture" />
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="text-sm font-semibold text-gray-900 mb-3">
              Personal usage results
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              In my own gallery of 8,000+ photos, Sifty helped me identify and
              remove thousands of images I&apos;d been carrying for years &mdash;
              screenshots, accidental photos, memes, and duplicates. Beyond
              decluttering, the keyword search feature became something I use
              weekly to find specific photos without scrolling.
            </p>
          </div>
        </div>
      </section>

      {/* Learnings & What's Next */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Reflections" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            What I learned and what&apos;s next
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0 text-sm font-bold">1</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">The hardest part was never the code</div>
                <p className="text-sm text-gray-600">
                  The most difficult decisions were product decisions: what to
                  build, what to cut, how to sequence, and when to ship. Getting
                  the technology to work was straightforward compared to getting
                  the product right.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0 text-sm font-bold">2</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">Dogfooding is the most honest user research</div>
                <p className="text-sm text-gray-600">
                  You can&apos;t hide from your own frustrations when you&apos;re the
                  user. Every annoyance was a feature request. Every delight was
                  validation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0 text-sm font-bold">3</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">The learning-then-cleaning system was the riskiest and most important decision</div>
                <p className="text-sm text-gray-600">
                  It would have been easier to ship a single-pass analyzer.
                  The learning-first approach took longer to build but the quality
                  difference is what makes Sifty work.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0 text-sm font-bold">4</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">Build good foundations and unexpected features reveal themselves</div>
                <p className="text-sm text-gray-600">
                  Keyword search emerged from the analysis infrastructure. The
                  descriptions needed for scoring became a product feature nobody
                  planned for.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm font-semibold text-gray-900 mb-4">What&apos;s next</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "iOS App Store launch", desc: "Expanding to Apple's ecosystem" },
              { title: "Freemium monetization", desc: "Premium search features, higher batch limits" },
              { title: "Time-decay scoring", desc: "Photos lose relevance over time — factor this into recommendations" },
              { title: "Smart albums", desc: "Auto-generated from AI descriptions and learned preferences" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Try Sifty AI yourself
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            See the product behind this case study. Download Sifty AI free and
            let the AI learn what matters to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/download"
              className="inline-flex items-center justify-center bg-white text-teal-700 px-8 py-3 rounded-full text-base font-semibold hover:bg-teal-50 transition-colors"
            >
              Download Sifty AI
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border-2 border-teal-300 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-teal-600 transition-colors"
            >
              View Other Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Helper Components ─────────────────────────────────────────────── */

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
      {label}
    </div>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-sm font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function InsightCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 bg-teal-50/60 border-l-4 border-teal-500 rounded-r-xl p-4 md:p-6">
      <p className="text-sm text-gray-700 leading-relaxed font-medium">
        {children}
      </p>
    </div>
  );
}

function MarketCard({
  name,
  does,
  gap,
}: {
  name: string;
  does: string;
  gap: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <h3 className="text-base font-semibold text-gray-900 mb-3">{name}</h3>
      <div className="mb-3">
        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">What it does</div>
        <p className="text-sm text-gray-600">{does}</p>
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Where it falls short</div>
        <p className="text-sm text-gray-600">{gap}</p>
      </div>
    </div>
  );
}

function TradeOffCard({
  title,
  options,
  decision,
  reasoning,
  pmAngle,
}: {
  title: string;
  options: string;
  decision: string;
  reasoning: string;
  pmAngle: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500 shadow-sm">
      <h3 className="text-base font-bold text-gray-900 mb-3">{title}</h3>
      <div className="mb-3">
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Options considered</div>
        <p className="text-sm text-gray-500">{options}</p>
      </div>
      <div className="mb-3">
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Decision</div>
        <p className="text-sm font-semibold text-teal-700">{decision}</p>
      </div>
      <div className="mb-3">
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1">Why</div>
        <p className="text-sm text-gray-600 leading-relaxed">{reasoning}</p>
      </div>
      <div className="bg-teal-50/60 rounded-lg p-3 mt-3">
        <div className="text-xs font-semibold text-teal-700 uppercase mb-1">PM Lens</div>
        <p className="text-xs text-gray-600 leading-relaxed">{pmAngle}</p>
      </div>
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 text-center">
      <div className="text-2xl font-bold text-teal-600">{value}</div>
      <div className="mt-1 text-sm text-gray-500">{label}</div>
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
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="text-3xl font-bold text-teal-200 mb-3">{number}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TimelineItem({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex items-start">
      <div className="absolute left-4 w-3 h-3 bg-teal-500 rounded-full -translate-x-1.5 mt-1.5 ring-4 ring-gray-50"></div>
      <div className="ml-10">
        <div className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
          {label}
        </div>
        <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ArchBlock({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center min-w-[140px]">
      <div className="text-sm font-semibold text-gray-900">{name}</div>
      <div className="text-xs text-gray-500 mt-1">{desc}</div>
    </div>
  );
}

function Arrow() {
  return (
    <svg className="w-6 h-6 text-teal-300 shrink-0 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
