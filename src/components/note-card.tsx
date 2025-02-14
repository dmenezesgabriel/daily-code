import { SproutIcon as Seedling } from "lucide-react";
import Link from "next/link";

import { Button } from "./button";

type Note = {
  id: string;
  title: string;
  date: string;
  category: string;
};

type NoteCardProps = {
  note: Note;
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="cartoon-border subtle-card-texture h-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
      <div className="flex h-full flex-col bg-white bg-opacity-90 p-6">
        <div className="flex-1">
          <div className="cartoon-border mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-400">
            <Seedling className="h-6 w-6 text-white" />
          </div>
          <span className="mb-2 block text-sm font-semibold text-green-600">
            {note.category}
          </span>
          <h2 className="mb-2 text-xl font-bold text-gray-900">{note.title}</h2>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm text-gray-500">{note.date}</span>
          <Link href={`/garden/${note.id}`}>
            <Button variant="garden" size="sm">
              Explore Note
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
