import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Download - Sifty AI",
  description:
    "Download Sifty AI for free on Android and iOS. Start decluttering your photo gallery with AI-powered sorting.",
};

export default function Download() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Get Sifty AI
              </h1>
              <p className="mt-4 text-lg text-teal-100 max-w-md">
                Free to download. No account required. Your photos never leave
                your device.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* Google Play Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.mohdjun.sifty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.091 12l2.607-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-gray-300">
                      Get it on
                    </div>
                    <div className="text-lg font-semibold leading-tight">
                      Google Play
                    </div>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-gray-300">
                      Download on the
                    </div>
                    <div className="text-lg font-semibold leading-tight">
                      App Store
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 justify-center md:justify-start text-sm text-teal-200">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free to use
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No sign-up
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Private
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-[260px]">
                <div className="absolute -inset-4 bg-teal-400/20 rounded-[3rem] blur-2xl"></div>
                <Image
                  src="/splash.png"
                  alt="Sifty AI Splash Screen"
                  width={260}
                  height={520}
                  className="relative rounded-[2rem] shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* What You Get */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                AI-Powered Sorting
              </h3>
              <p className="text-sm text-gray-600">
                2-phase system that learns your preferences and sorts photos
                with increasing accuracy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Privacy First
              </h3>
              <p className="text-sm text-gray-600">
                All processing happens on your device. Your photos are never
                uploaded to any server.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Storage Freedom
              </h3>
              <p className="text-sm text-gray-600">
                Reclaim gigabytes of storage space by removing photos you no
                longer need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">
              System requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 2.237a.625.625 0 00-1.045 0l-.817 1.275a.625.625 0 01-.378.275l-1.48.376a.625.625 0 00-.323.969l.932 1.193a.625.625 0 01.129.438l-.1 1.521a.625.625 0 00.714.66l1.494-.247a.625.625 0 01.449.08l1.308.78a.625.625 0 00.862-.366l.487-1.444a.625.625 0 01.293-.345l1.374-.703a.625.625 0 00.103-1.028l-1.112-1.005a.625.625 0 01-.195-.404L20.07 2.84a.625.625 0 00-.815-.614l-1.443.487a.625.625 0 01-.451-.02l-1.838-.456z" />
                  <path d="M6 18c0-3.308 2.692-6 6-6s6 2.692 6 6v3H6v-3z" />
                  <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Android</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Android 8.0 (Oreo) or later</li>
                <li>50MB free storage for installation</li>
                <li>Camera/gallery permissions required</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">iOS</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>iOS 15.0 or later</li>
                <li>iPhone 8 or newer recommended</li>
                <li>Photo library access required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
