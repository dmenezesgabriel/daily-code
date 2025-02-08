export default function Footer() {
  return (
    <footer className="cartoon-border relative overflow-hidden bg-yellow-300 p-6 text-gray-900">
      <div className="halftone-bg absolute inset-0" />
      <div className="container relative z-10 mx-auto text-center">
        <p className="text-xl">
          &copy; 2023 The Daily Scoop. All scoops reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="#"
            className="text-lg text-red-600 transition-colors hover:text-red-800"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-lg text-red-600 transition-colors hover:text-red-800"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-lg text-red-600 transition-colors hover:text-red-800"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
