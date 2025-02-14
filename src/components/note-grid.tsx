"use client";
import SearchBar from "@/components/search-bar";
import { useContentFilter } from "@/hooks/useContentFilter";

import NoteCard from "./note-card";

type Note = {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  category: string;
};

type NoteGridProps = {
  notes: Note[];
};

export function NoteGrid({ notes }: NoteGridProps) {
  const {
    filter,
    setFilter,
    setSearchQuery,
    categories,
    filteredItems: filteredNotes,
  } = useContentFilter({ items: notes });

  return (
    <>
      <div className="mx-auto max-w-4xl">
        <SearchBar onSearch={setSearchQuery} variant="garden" />

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`cartoon-button rounded-full px-4 py-2 transition-colors ${
                filter === category
                  ? "bg-green-600 text-white"
                  : "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="cartoon-border subtle-card-texture rounded-lg bg-green-100 p-8">
        {filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">
            Stop the presses! No news found. Try another scoop!
          </p>
        )}
      </div>
    </>
  );
}
