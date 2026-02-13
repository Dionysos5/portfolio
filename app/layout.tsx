import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], weight: "400" });

const siteUrl = "https://www.denisbakhoum.xyz";

export const metadata: Metadata = {
  title: {
    default: "Denis Bakhoum — Product Engineer",
    template: "%s — Denis Bakhoum",
  },
  description:
    "Product-minded full-stack engineer building production APIs, user interfaces, and AI-powered developer tools. Based in Paris. FR/EN/DE.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Denis Bakhoum — Product Engineer",
    description:
      "Product-minded full-stack engineer building production APIs, user interfaces, and AI-powered developer tools. Based in Paris. FR/EN/DE.",
    url: siteUrl,
    siteName: "Denis Bakhoum",
    type: "website",
    images: [{ url: "/images/profile.png", width: 400, height: 400 }],
  },
  twitter: {
    card: "summary",
    title: "Denis Bakhoum — Product Engineer",
    description:
      "Product-minded full-stack engineer building production APIs, user interfaces, and AI-powered developer tools. Based in Paris. FR/EN/DE.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen flex flex-col">
            <div className="mt-10 ml-0 md:ml-52 pl-8 pr-8 md:pl-16 md:pr-16 relative flex-1 flex-grow-0 pb-8 md:pb-14 max-w-4xl">
              {children}
            </div>
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
