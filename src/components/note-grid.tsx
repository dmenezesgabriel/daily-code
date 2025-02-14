"use client";
import { SproutIcon as Seedling } from "lucide-react";

import SearchBar from "@/components/search-bar";
import { useContentFilter } from "@/hooks/useContentFilter";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

import { Card } from "./card";

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

  const { visibleItems, loaderRef, hasMore } = useInfiniteScroll(filteredNotes);

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
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((note) => (
                <div key={note.id}>
                  <Card.Root variant="garden">
                    <Card.Icon category={note.category} variant="garden">
                      <Seedling className="h-6 w-6 text-white" />
                    </Card.Icon>
                    <Card.Category variant="garden">
                      {note.category}
                    </Card.Category>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Footer
                      variant="garden"
                      date={note.date}
                      id={note.id}
                    />
                  </Card.Root>
                </div>
              ))}
            </div>
            {hasMore && (
              <div ref={loaderRef} className="mt-8 flex justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-600 border-t-transparent" />
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-xl text-gray-600">
            Stop the presses! No news found. Try another scoop!
          </p>
        )}
      </div>
    </>
  );
}
