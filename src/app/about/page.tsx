import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre - Gabriel Menezes",
  description:
    "Conheça Gabriel Menezes, Correspondente Chefe de Bugs no gm|dev. Descubra sua missão, superpoder e curiosidades.",
  keywords: [
    "Gabriel Menezes",
    "Sobre",
    "Desenvolvimento Web",
    "Humor",
    "Tecnologia",
  ],
  openGraph: {
    title: "Sobre - Gabriel Menezes",
    description:
      "Conheça Gabriel Menezes, Correspondente Chefe de Bugs no gm|dev. Descubra sua missão, superpoder e curiosidades.",
    images: [
      {
        url: "https://github.com/dmenezesgabriel.png",
        width: 800,
        height: 600,
        alt: "Foto de perfil de Gabriel Menezes",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dmenezesgabriel",
    title: "Sobre - Gabriel Menezes",
    description:
      "Conheça Gabriel Menezes, Correspondente Chefe de Bugs no gm|dev. Descubra sua missão, superpoder e curiosidades.",
    images: "https://github.com/dmenezesgabriel.png",
  },
};

export default function About() {
  return (
    <main className="container mx-auto overflow-hidden px-4 py-12">
      <article className="cartoon-border subtle-card-texture rounded-lg bg-white p-8">
        <header>
          <h1 className="wobble mb-6 text-center text-4xl font-bold">
            Sobre Mim
          </h1>
        </header>

        <section
          className="mb-8 flex flex-col items-center md:flex-row"
          aria-labelledby="profile-heading"
        >
          <Image
            src="https://github.com/dmenezesgabriel.png"
            alt="Foto de perfil de Gabriel Menezes"
            width={200}
            height={200}
            className="cartoon-border mb-4 rounded-full md:mb-0 md:mr-8"
          />
          <div>
            <h2 id="profile-heading" className="mb-4 text-2xl font-bold">
              Olá, eu sou Gabriel Menezes! 👋
            </h2>
            <p className="mb-4 text-lg">
              Engenheiro de software, caçador de bugs e barista amador no{" "}
              <span className="font-semibold">gm|dev</span>. Escrevo sobre
              tecnologia com uma boa dose de humor e um café forte o suficiente
              para compilar qualquer código na primeira tentativa (ou pelo menos
              tentar).
            </p>
          </div>
        </section>

        <section
          className="cartoon-border mb-8 rounded-lg bg-yellow-200 p-4"
          aria-labelledby="superpower-heading"
        >
          <h2 id="superpower-heading" className="mb-2 text-3xl font-bold">
            Meu Superpoder
          </h2>
          <p>
            Eu consigo depurar código apenas encarando-o intensamente. Funciona
            60% das vezes, toda vez!
          </p>
        </section>

        <section className="mb-8 p-4" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="mb-4 text-3xl font-bold">
            Minha Missão
          </h2>
          <p>
            Tornar o mundo do desenvolvimento web um pouco mais divertido, um
            artigo de cada vez. Acredito que nem só de commits e pull requests
            vive um dev — um bom bug às vezes ensina mais do que um tutorial, e
            um café bem forte é quase tão importante quanto entender o código
            que você mesmo escreveu semana passada.
          </p>
        </section>

        <section
          className="cartoon-border rounded-lg bg-pink-200 p-4"
          aria-labelledby="funfact-heading"
        >
          <h2 id="funfact-heading" className="mb-2 text-3xl font-bold">
            Curiosidade!
          </h2>
          <p>
            Uma vez escrevi uma função tão eficiente, que ela terminou antes
            mesmo de eu começar a escrevê-la. Viajantes do tempo me odeiam!
          </p>
        </section>
      </article>
    </main>
  );
}
