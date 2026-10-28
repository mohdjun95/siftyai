"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const projects = [
  {
    href: "/projects/optisolve",
    label: "OptiSolve AI",
    desc: "LP/MILP optimization solver",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const links = [
    { href: "/features", label: "How it works" },
    { href: "/how-nytcrew-decides", label: "How it decides" },
    { href: "/about", label: "About" },
    { href: "/case-study", label: "Case Study" },
    { href: "/download", label: "Download" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isProjectsActive = pathname.startsWith("/projects");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-night-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Same as the app header: 32 px mark, 10 px gap, wordmark bold and tight. */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.svg"
              alt=""
              width={32}
              height={32}
              priority
            />
            <span className="font-display text-2xl font-bold tracking-tight text-mist-bright">Nytcrew</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-teal-400"
                    : "text-mist-dim hover:text-teal-300"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Other Projects dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  isProjectsActive ? "text-teal-400" : "text-mist-dim hover:text-teal-300"
                }`}
              >
                Other Projects
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${projectsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {projectsOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-1">
                  {projects.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setProjectsOpen(false)}
                      className="block px-4 py-2.5 hover:bg-teal-50 transition-colors"
                    >
                      <span className="block text-sm font-medium text-gray-900">{p.label}</span>
                      <span className="block text-xs text-gray-500">{p.desc}</span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/projects"
                      onClick={() => setProjectsOpen(false)}
                      className="block px-4 py-2 text-xs font-medium text-teal-600 hover:bg-teal-50 transition-colors"
                    >
                      View all projects &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/download"
              className="inline-flex items-center min-h-11 bg-teal-400 text-[#04201c] px-5 rounded-full text-sm font-semibold hover:bg-teal-300 transition-colors"
            >
              Get the App
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-mist-dim"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-night-950 border-t border-white/10 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-white/5 ${
                pathname === link.href
                  ? "text-teal-400"
                  : "text-mist-dim"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile: Other Projects section */}
          <div className="py-3 border-b border-white/5">
            <p className="text-xs font-semibold text-mist-faint uppercase tracking-wider mb-2">Other Projects</p>
            {projects.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setMobileOpen(false)}
                className="block py-1.5 text-sm font-medium text-mist-dim"
              >
                {p.label}
              </Link>
            ))}
          </div>
          <Link
            href="/download"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center bg-teal-400 text-[#04201c] px-4 py-3 rounded-full text-sm font-semibold"
          >
            Get the App
          </Link>
        </div>
      )}
    </nav>
  );
}
