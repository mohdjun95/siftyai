import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sifty AI - Smart Photo Sorter",
  description:
    "AI-powered photo sorter that learns your preferences. Declutter your gallery, reclaim storage, and keep only the photos that matter.",
  keywords: ["photo sorter", "AI", "gallery cleaner", "storage", "photo organizer"],
  openGraph: {
    title: "Sifty AI - Smart Photo Sorter",
    description:
      "AI-powered photo sorter that learns your preferences. Declutter your gallery and reclaim storage.",
    siteName: "Sifty AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
