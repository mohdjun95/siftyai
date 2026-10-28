import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-night-950 text-mist-dim border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-bold text-mist-bright mb-2">Nytcrew</h3>
            <p className="text-sm text-mist-faint max-w-md">
              Your photo night crew. A free Android app that tidies your gallery while you sleep, with AI that runs on your phone. Formerly Sifty.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-mist-bright uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="hover:text-teal-400 transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/how-nytcrew-decides" className="hover:text-teal-400 transition-colors">
                  How it decides
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-teal-400 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-study" className="hover:text-teal-400 transition-colors">
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-teal-400 transition-colors">
                  Other Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="text-sm font-semibold text-mist-bright uppercase tracking-wider mb-4">
              Get the App
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.mohdjun.sifty" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                  Google Play Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-mist-faint">
            &copy; {new Date().getFullYear()} Nytcrew. Made by M. Junaid, an independent developer.
          </p>
          <div className="flex gap-6 text-xs text-mist-faint">
            <a href="/privacy" className="hover:text-mist">Privacy Policy</a>
            <a href="/delete-account" className="hover:text-mist">Delete account</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
