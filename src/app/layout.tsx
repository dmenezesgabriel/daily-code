import "./globals.css";

import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import type React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
});

export const metadata: Metadata = {
  title: {
    template: "%s | o código diário",
    default: "o código diário",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${inter.variable} ${bangers.variable} flex min-h-screen flex-col font-sans`}
      >
        <div className="halftone-bg absolute inset-0" />

        <div className="flex flex-grow flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
