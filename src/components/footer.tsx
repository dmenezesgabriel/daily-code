import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="cartoon-border relative overflow-hidden bg-yellow-300 p-6 text-gray-900">
      <div className="halftone-bg absolute inset-0" />
      <div className="container relative z-10 mx-auto text-center">
        <p className="text-xl">
          &copy; {year} O Código Diário. Todos conhecimentos compartilhados.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link
            href="#"
            target="_blank"
            className="text-lg text-red-600 transition-colors hover:text-red-800"
          >
            Github
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-lg text-red-600 transition-colors hover:text-red-800"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            target="_blank"
            className="text-lg text-red-600 transition-colors hover:text-red-800"
          >
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
