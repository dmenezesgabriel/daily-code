import { Newspaper } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center" role="main">
      <section className="px-4 text-center">
        <header>
          <h1
            className="wobble mb-4 text-6xl font-bold text-red-600"
            aria-label="Erro 404"
          >
            404
          </h1>
          <h2 className="mb-8 text-4xl font-bold text-gray-800">
            Extra! Extra! Página Não Encontrada!
          </h2>
        </header>

        <article className="cartoon-border subtle-card-texture mx-auto max-w-2xl rounded-lg bg-white p-8">
          <p className="mb-6 text-xl">
            Ah não! Parece que nosso intrépido repórter se perdeu e não
            encontrou a matéria que você procura!
          </p>
          <div className="mb-6 flex justify-center">
            <Newspaper
              size={100}
              className="animate-bounce-subtle text-gray-400"
              aria-hidden="true"
            />
          </div>
          <p className="mb-8 text-lg">
            Mas não se preocupe, temos muitas outras notícias esperando por você
            na redação!
          </p>
          <nav>
            <Link
              href="/"
              className="cartoon-button inline-block transform rounded-lg bg-yellow-400 px-6 py-3 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-500 active:scale-95"
            >
              Voltar para a Página Inicial
            </Link>
          </nav>
        </article>
      </section>
    </main>
  );
}
