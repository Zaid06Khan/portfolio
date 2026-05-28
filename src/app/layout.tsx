import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Zaid Khan — Portfolio",
  description: "Building intelligent systems at the intersection of AI and software.",
  keywords: ["Zaid Khan", "developer", "AI", "portfolio", "Toronto", "Next.js", "Python", "React Native", "automation"],
  authors: [{ name: "Zaid Khan" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Zaid Khan — Portfolio",
    description: "Building intelligent systems at the intersection of AI and software.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaid Khan — Portfolio",
    description: "Building intelligent systems at the intersection of AI and software.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
