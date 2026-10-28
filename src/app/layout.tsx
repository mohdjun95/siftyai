import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, appJsonLd } from "@/lib/nytcrew";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nytcrew: the Android photo cleaner that works while you sleep",
    template: "%s | Nytcrew",
  },
  description:
    "Nytcrew (formerly Sifty) is a free Android app that tidies your photo gallery overnight with an AI model that runs on your phone. Your photos are never uploaded.",
  keywords: [
    "photo cleaner",
    "gallery cleaner",
    "on-device AI",
    "private photo organizer",
    "delete old screenshots",
    "similar photos",
    "Android",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nytcrew: your photo night crew",
    description:
      "Free Android app that tidies your photo gallery overnight with on-device AI. Your photos are never uploaded.",
    siteName: "Nytcrew",
    type: "website",
    url: "/",
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
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased font-sans`}
      >
        <JsonLd data={appJsonLd} />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
