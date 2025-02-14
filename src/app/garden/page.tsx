import type { Metadata } from "next";

import { NoteGrid } from "@/components/note-grid";
import { getAllFrontMatters } from "@/utils/front-matter";

export const metadata: Metadata = {
  title: "Jardim",
};

export default function GardenPage() {
  const notes = getAllFrontMatters("notes");

  return (
    <main className="container mx-auto overflow-hidden px-4 py-12">
      <h1 className="wobble mb-12 text-center text-6xl font-bold text-green-800">
        Jardim Digital 🌱
      </h1>
      <NoteGrid notes={notes} />
    </main>
  );
}
