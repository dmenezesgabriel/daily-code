import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="cartoon-border relative overflow-hidden bg-yellow-300 p-6 text-gray-900"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className="halftone-bg absolute inset-0" aria-hidden="true" />
      <div className="container relative z-10 mx-auto text-center">
        <p className="text-xl">
          <span className="sr-only">Copyright </span>
          &copy; {year} gm.dev. Todos conhecimentos compartilhados.
        </p>
        <nav aria-label="Redes sociais" className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                href="https://github.com/dmenezesgabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-red-600 transition-colors hover:text-red-800"
                aria-label="Perfil no Github"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/dmenezesgabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-red-600 transition-colors hover:text-red-800"
                aria-label="Perfil no LinkedIn"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/dmenezesgabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-red-600 transition-colors hover:text-red-800"
                aria-label="Perfil no Twitter"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
