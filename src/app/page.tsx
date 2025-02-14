import { SproutIcon as Seedling } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import PostGrid from "@/components/post-grid";
import { getAllFrontMatters } from "@/utils/front-matter";

export const metadata: Metadata = {
  title: "O código diário",
};

export default function Home() {
  const posts = getAllFrontMatters("posts");
  const notes = getAllFrontMatters("notes");

  return (
    <main className="container mx-auto overflow-hidden px-4 py-12">
      <h1 className="wobble z-10 mb-12 text-center text-6xl font-bold text-gray-900">
        Últimos artigos!
      </h1>

      <PostGrid posts={posts} />

      <div className="cartoon-border subtle-card-texture z-10 mt-16 rounded-lg bg-green-100 p-8">
        <h2 className="wobble mb-8 text-center text-4xl font-bold text-green-800">
          Jardim Digital 🌱
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {notes.slice(0, 3).map((note) => (
            <Card.Root key={note.id} variant="garden">
              <Card.Icon category={note.category} variant="garden">
                <Seedling className="h-6 w-6 text-white" />
              </Card.Icon>
              <Card.Category variant="garden">{note.category}</Card.Category>
              <Card.Title>{note.title}</Card.Title>
              <Card.Footer variant="garden" date={note.date} id={note.id} />
            </Card.Root>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/garden">
            <Button variant="garden">Explore o Jardim</Button>
          </Link>
        </div>
      </div>

      <div className="mt-12 flex flex-row items-center justify-center gap-4 text-center">
        <Link href="/about">
          <Button variant="blog">Sobre o author</Button>
        </Link>
        <Link href="/contact">
          <Button variant="blog">Entre em contato</Button>
        </Link>
      </div>
    </main>
  );
}
