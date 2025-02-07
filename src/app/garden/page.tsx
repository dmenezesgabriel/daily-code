import NoteCard from "@/components/note-card";
import { getContent } from "@/utils/getContent";

export default function GardenPage() {
  const notes = getContent("notes");

  return (
    <div className="container relative mx-auto overflow-hidden px-4 py-12">
      <div className="halftone-bg absolute inset-0" />
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
