import { SproutIcon as Seedling } from "lucide-react";
import Link from "next/link";

type Note = {
  id: string;
  title: string;
  date: string;
  category: string;
  type: "garden";
};

type NoteCardProps = {
  note: Note;
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="cartoon-border subtle-card-texture relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
      <div className="relative z-10 bg-white bg-opacity-90 p-6">
        <div className="cartoon-border mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-400">
          <Seedling className="h-6 w-6 text-white" />
        </div>
        <span className="mb-2 block text-sm font-semibold text-green-600">
          {note.category}
        </span>
        <h2 className="mb-2 text-xl font-bold text-gray-900">{note.title}</h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{note.date}</span>
          <Link
            href={`/garden/${note.id}`}
            className="cartoon-button transform rounded-lg bg-green-300 px-4 py-2 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-green-400 active:scale-95"
          >
            Explore Note
          </Link>
        </div>
      </div>
    </div>
  );
}
