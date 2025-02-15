import "./globals.css";

import type { Metadata } from "next";
import { Bangers, Inter } from "next/font/google";
import type React from "react";

// import { Chatbot } from "@/components/chatbot";
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
    template: "%s | gm.dev",
    default: "gm.dev",
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

        <div className="relative flex flex-grow flex-col">
          <Header />
          <div className="relative flex-grow">{children}</div>
          <Footer />
        </div>
        {/* <Chatbot /> */}
      </body>
    </html>
  );
}
