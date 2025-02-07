"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import NoteCard from "@/components/note-card";
import PostGrid from "@/components/post-grid";
import SearchBar from "@/components/search-bar";

type Note = {
  id: string;
  title: string;
  date: string;
  category: string;
  type: "garden";
};

const posts = [
  {
    id: 1,
    title: "Extra! Extra! Organic Design Takes Over!",
    excerpt:
      "City shocked as curves and squiggles invade websites everywhere...",
    date: "2023-05-15",
    category: "Design",
  },
  {
    id: 2,
    title: "Code Goes Green: Developers Plant Digital Trees",
    excerpt:
      "New trend sees programmers offsetting carbon one function at a time...",
    date: "2023-05-20",
    category: "Development",
  },
  {
    id: 3,
    title: "Color Psychology: Why Red Buttons Get All the Clicks",
    excerpt:
      "Scientists baffled by users' preference for crimson call-to-actions...",
    date: "2023-05-25",
    category: "UX",
  },
  {
    id: 4,
    title: "Fonts Gone Wild: The Rise of Comic Sans Pro Max",
    excerpt: "Designers in uproar as new font family promises 'serious fun'...",
    date: "2023-05-30",
    category: "Design",
  },
  {
    id: 5,
    title: "JavaScript Frameworks: The New Pop Bands",
    excerpt: "Teens swoon over Vue.js as Angular forms rival fan club...",
    date: "2023-06-04",
    category: "Development",
  },
  {
    id: 6,
    title: "Micro-interactions: The Tiny Robots in Your Phone",
    excerpt:
      "Users delighted by small animations, scientists concerned about AI uprising...",
    date: "2023-06-09",
    category: "UX",
  },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [gardenNotes, setGardenNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function fetchGardenNotes() {
      const response = await fetch("/api/garden-notes");
      const data = await response.json();
      setGardenNotes(data);
    }
    fetchGardenNotes();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesFilter = filter === "All" || post.category === filter;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <div className="container relative mx-auto overflow-hidden px-4 py-12">
      <div className="halftone-bg inset absolute"></div>
      <h1 className="wobble relative mb-12 text-center text-6xl font-bold text-gray-900">
        Breaking News!
      </h1>
      <div className="relative z-10 mx-auto max-w-4xl">
        <SearchBar onSearch={setSearchQuery} />

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {["All", "Design", "Development", "UX"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`cartoon-button rounded-full px-4 py-2 transition-colors ${
                filter === category
                  ? "bg-red-500 text-white"
                  : "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="cartoon-border subtle-card-texture relative z-10 rounded-lg bg-white p-8">
        {filteredPosts.length > 0 ? (
          <PostGrid posts={filteredPosts} />
        ) : (
          <p className="text-center text-xl text-gray-600">
            Stop the presses! No news found. Try another scoop!
          </p>
        )}
      </div>
      <div className="cartoon-border subtle-card-texture relative z-10 mt-16 rounded-lg bg-green-100 p-8">
        <h2 className="wobble mb-8 text-center text-4xl font-bold text-green-800">
          Digital Garden 🌱
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gardenNotes.slice(0, 3).map((note) => (
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
