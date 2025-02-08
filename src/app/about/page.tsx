import Image from "next/image";

export default function About() {
  return (
    <div className="container relative mx-auto overflow-hidden px-4 py-12">
      <div className="cartoon-border subtle-card-texture relative z-10 rounded-lg bg-white p-8">
        <h1 className="wobble mb-6 text-center text-4xl font-bold">About Me</h1>
        <div className="mb-8 flex flex-col items-center md:flex-row">
          <Image
            src="https://github.com/dmenezesgabriel.png"
            alt="Avatar"
            width={200}
            height={200}
            className="cartoon-border mb-4 rounded-full md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              Hi, I&apos;m Scoop McGoop! 👋
            </h2>
            <p className="mb-4 text-lg">
              Chief Chuckle Correspondent and Pun-dit Extraordinaire at The
              Daily Scoop. I&apos;m here to serve you the hottest, most
              hilarious tech news, garnished with a side of wit and a sprinkle
              of geek!
            </p>
          </div>
        </div>
        <div className="cartoon-border mb-8 rounded-lg bg-yellow-200 p-4">
          <h3 className="mb-2 text-xl font-bold">My Superpower</h3>
          <p>
            I can debug code just by staring at it intensely. It works 60% of
            the time, every time!
          </p>
        </div>
        <h3 className="mb-4 text-2xl font-bold">My Mission</h3>
        <p className="mb-4">
          To make the world of web development a little bit funnier, one article
          at a time. I believe that laughter is the best medicine (except for
          actual medicine when you&apos;re sick), and that even the most serious
          coder needs a good chuckle now and then.
        </p>
        <div className="cartoon-border rounded-lg bg-pink-200 p-4">
          <h3 className="mb-2 text-xl font-bold">Fun Fact!</h3>
          <p>
            I once wrote a function so efficient, it finished before I started
            writing it. Time travelers hate me!
          </p>
        </div>
      </div>
    </div>
  );
}
