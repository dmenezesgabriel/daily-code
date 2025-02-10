import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
  // description: "",
};

export default function About() {
  return (
    <article className="container mx-auto overflow-hidden px-4 py-12">
      <div className="cartoon-border subtle-card-texture rounded-lg bg-white p-8">
        <header>
          <h1 className="wobble mb-6 text-center text-4xl font-bold">
            About Me
          </h1>
        </header>

        <section
          className="mb-8 flex flex-col items-center md:flex-row"
          aria-labelledby="profile-heading"
        >
          <Image
            src="https://github.com/dmenezesgabriel.png"
            alt="Profile picture of Gabriel Menezes"
            width={200}
            height={200}
            className="cartoon-border mb-4 rounded-full md:mb-0 md:mr-8"
          />
          <div>
            <h2 id="profile-heading" className="mb-4 text-2xl font-bold">
              Hi, I&apos;m Gabriel Menezes! 👋
            </h2>
            <p className="mb-4 text-lg">
              Chief Chuckle Correspondent and Pun-dit Extraordinaire at The
              Daily Scoop. I&apos;m here to serve you the hottest, most
              hilarious tech news, garnished with a side of wit and a sprinkle
              of geek!
            </p>
          </div>
        </section>

        <section
          className="cartoon-border mb-8 rounded-lg bg-yellow-200 p-4"
          aria-labelledby="superpower-heading"
        >
          <h2 id="superpower-heading" className="mb-2 text-3xl font-bold">
            My Superpower
          </h2>
          <p>
            I can debug code just by staring at it intensely. It works 60% of
            the time, every time!
          </p>
        </section>

        <section className="mb-8 p-4" aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="mb-4 text-3xl font-bold">
            My Mission
          </h2>
          <p>
            To make the world of web development a little bit funnier, one
            article at a time. I believe that laughter is the best medicine
            (except for actual medicine when you&apos;re sick), and that even
            the most serious coder needs a good chuckle now and then.
          </p>
        </section>

        <section
          className="cartoon-border rounded-lg bg-pink-200 p-4"
          aria-labelledby="funfact-heading"
        >
          <h2 id="funfact-heading" className="mb-2 text-3xl font-bold">
            Fun Fact!
          </h2>
          <p>
            I once wrote a function so efficient, it finished before I started
            writing it. Time travelers hate me!
          </p>
        </section>
      </div>
    </article>
  );
}
