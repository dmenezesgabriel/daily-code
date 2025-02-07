import Link from "next/link";

export default function Header() {
  return (
    <header className="cartoon-border halftone-overlay relative overflow-hidden bg-yellow-300 p-6 text-gray-900">
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-between md:flex-row">
        <Link
          href="/"
          className="wobble mb-4 text-4xl font-bold transition-colors hover:text-red-600 md:mb-0"
        >
          The Daily Scoop
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-xl transition-colors hover:text-red-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-xl transition-colors hover:text-red-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-xl transition-colors hover:text-red-600"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/garden"
                className="text-xl transition-colors hover:text-green-600"
              >
                Garden
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
