import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
  // description: "",
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
              Correspondente Chefe de Risadas e Mestre dos Trocadilhos no{" "}
              <span className="font-bangers font-semibold tracking-wide">
                O Código Diário
              </span>
              . Estou aqui para trazer os temas tecnológicos mais quentes e
              hilários, com uma pitada de humor e uma dose geek!
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
            artigo de cada vez. Acredito que o riso é o melhor remédio (exceto
            por remédios reais quando você está doente), e que até o programador
            mais sério precisa de uma boa risada de vez em quando.
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
