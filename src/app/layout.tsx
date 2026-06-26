import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.globalsolutionpartners.com";
const title =
  "Global Solution Partners | AI Lead Generation & Appointment Setting UK & USA";
const description =
  "Global Solution Partners helps businesses in the UK and USA automate lead generation, outreach, qualification, and appointment delivery using agentic AI and proven growth systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "AI lead generation agency",
    "appointment setting agency",
    "UK lead generation",
    "USA lead generation",
    "AI outreach automation",
    "qualified appointments",
    "B2B growth intelligence",
    "real estate lead generation",
    "HVAC lead generation",
    "cleaning service leads",
    "finance lead generation",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Global Solution Partners",
    images: ["/images/hero-skyline.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-skyline.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy-950 text-foreground">
        {children}
      </body>
    </html>
  );
}
