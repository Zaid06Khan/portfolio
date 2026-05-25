import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zaid Khan — Developer Portfolio",
  description:
    "Building intelligent systems at the intersection of AI and software.",
  keywords: [
    "Zaid Khan",
    "developer",
    "AI",
    "portfolio",
    "Toronto",
    "Next.js",
    "Python",
    "React Native",
    "automation",
  ],
  authors: [{ name: "Zaid Khan" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Zaid Khan — Developer Portfolio",
    description:
      "Building intelligent systems at the intersection of AI and software.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaid Khan — Developer Portfolio",
    description:
      "Building intelligent systems at the intersection of AI and software.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
