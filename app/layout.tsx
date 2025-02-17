import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Denis Bakhoum",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " "}>
        <Navbar />
        <main className="min-h-screen flex flex-col">
          <div className="mt-10 ml-0 md:ml-[340px] pl-8 pr-8 md:pl-0 relative flex-1 flex-grow-0 pb-8 md:pb-14">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
