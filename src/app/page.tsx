import Link from "next/link";

import NoteCard from "@/components/note-card";
import PostGrid from "@/components/post-grid";
import { getAllFrontMatters } from "@/utils/front-matter";

export default function Home() {
  const posts = getAllFrontMatters("posts");
  const notes = getAllFrontMatters("notes");

  return (
    <div className="container relative mx-auto overflow-hidden px-4 py-12">
      <h1 className="wobble relative z-10 mb-12 text-center text-6xl font-bold text-gray-900">
        Breaking News!
      </h1>

      <PostGrid posts={posts} />

      <div className="cartoon-border subtle-card-texture relative z-10 mt-16 rounded-lg bg-green-100 p-8">
        <h2 className="wobble mb-8 text-center text-4xl font-bold text-green-800">
          Digital Garden 🌱
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {notes.slice(0, 3).map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/garden"
            className="cartoon-button inline-block transform rounded-lg bg-green-500 px-6 py-3 font-bold text-white transition-all duration-200 ease-in-out hover:scale-105 hover:bg-green-600 active:scale-95"
          >
            Explore the Garden
          </Link>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/about"
          className="cartoon-button mr-4 inline-block transform rounded-lg bg-yellow-300 px-6 py-3 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
        >
          About Me
        </Link>
        <Link
          href="/contact"
          className="cartoon-button inline-block transform rounded-lg bg-yellow-300 px-6 py-3 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
