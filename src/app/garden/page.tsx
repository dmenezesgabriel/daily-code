import fs from "fs";
import matter from "gray-matter";
import path from "path";

import NoteCard from "@/components/note-card";

type Note = {
  id: string;
  title: string;
  date: string;
  category: string;
  type: "garden";
};

function getGardenNotes(): Note[] {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content/notes"),
    "utf-8",
  );
  const notes = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "src/content/notes", filename),
      "utf-8",
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      id: filename.replace(".mdx", ""),
      title: frontMatter.title,
      date: frontMatter.date,
      category: frontMatter.category,
      type: "garden",
    };
  });
  return notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export default function GardenPage() {
  const notes = getGardenNotes();

  return (
    <div className="container relative mx-auto overflow-hidden px-4 py-12">
      <div className="halftone-bg absolute inset-0"></div>
      <h1 className="wobble relative z-10 mb-12 text-center text-6xl font-bold text-green-800">
        Digital Garden 🌱
      </h1>
      <div className="cartoon-border subtle-card-texture relative z-10 rounded-lg bg-green-100 p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}
