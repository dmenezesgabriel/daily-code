import type { Metadata } from "next";
import { Suspense } from "react";

import { NoteGrid } from "@/components/note-grid";
import { getAllFrontMatters } from "@/utils/front-matter";

export const metadata: Metadata = {
  title: "Jardim",
  description:
    "Explore o Jardim Digital e descubra notas e insights sobre desenvolvimento web e design.",
  keywords: ["Jardim Digital", "notas", "desenvolvimento web", "design"],
  openGraph: {
    title: "Jardim",
    description:
      "Explore o Jardim Digital e descubra notas e insights sobre desenvolvimento web e design.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dmenezesgabriel",
    title: "Jardim",
    description:
      "Explore o Jardim Digital e descubra notas e insights sobre desenvolvimento web e design.",
  },
};

export default function GardenPage() {
  const notes = getAllFrontMatters("notes");

  return (
    <main className="container mx-auto overflow-hidden px-4 py-12">
      <h1 className="wobble mb-12 text-center text-6xl font-bold text-green-800">
        Jardim Digital 🌱
      </h1>
      <Suspense>
        <NoteGrid notes={notes} />
      </Suspense>
    </main>
  );
}
