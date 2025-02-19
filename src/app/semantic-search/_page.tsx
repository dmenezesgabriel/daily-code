import type { Metadata } from "next";

import { SemanticSearch } from "./semantic-search";

export const metadata: Metadata = {
  title: "Busca Semântica",
  description:
    "Explore a busca semântica avançada para encontrar informações relevantes de forma eficiente.",
  keywords: ["busca semântica", "pesquisa", "informação", "relevante"],
  openGraph: {
    title: "Busca Semântica",
    description:
      "Explore a busca semântica avançada para encontrar informações relevantes de forma eficiente.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dmenezesgabriel",
    title: "Busca Semântica",
    description:
      "Explore a busca semântica avançada para encontrar informações relevantes de forma eficiente.",
  },
};

export default function TestPage() {
  return (
    <div className="container mx-auto overflow-hidden px-4 py-12">
      <div className="cartoon-border subtle-card-texture rounded-lg bg-white p-8">
        <h1 className="wobble mb-6 text-center text-4xl font-bold">
          Buscador Semântico 9000
        </h1>
        <SemanticSearch />
      </div>
    </div>
  );
}
