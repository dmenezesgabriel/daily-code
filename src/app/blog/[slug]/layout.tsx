import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container prose mx-auto px-4 py-12">
      <article className="cartoon-border subtle-card-texture relative z-10 rounded-lg bg-white p-8">
        {children}
        <Link
          href="/"
          className="cartoon-button inline-block transform rounded-lg bg-yellow-300 px-6 py-3 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
        >
          Back to Home
        </Link>
      </article>
    </main>
  );
}
