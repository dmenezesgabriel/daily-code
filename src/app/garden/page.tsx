import { NoteGrid } from "@/components/note-grid";
import { getAllFrontMatters } from "@/utils/front-matter";

export default function GardenPage() {
  const notes = getAllFrontMatters("notes");

  return (
    <div className="container relative mx-auto overflow-hidden px-4 py-12">
      <h1 className="wobble relative z-10 mb-12 text-center text-6xl font-bold text-green-800">
        Jardim Digital 🌱
      </h1>
      <NoteGrid notes={notes} />
    </div>
  );
}
