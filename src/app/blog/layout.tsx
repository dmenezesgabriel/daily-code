import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="container mx-auto px-4 py-12">
      <article
        className={`cartoon-border subtle-card-texture relative z-10 rounded-lg bg-white p-8`}
      >
        <div className="halftone-bg absolute inset-0 rounded-lg" />
        <h1 className="relative z-10 mb-4 text-4xl font-bold">
          {/* {frontMatter.title} */}
        </h1>
        <p className="relative z-10 mb-4 text-gray-600">
          {/* {frontMatter.date} - {frontMatter.category} */}
        </p>
        <div className="prose relative z-10 mb-8 max-w-none">{children}</div>
        <Link
          href="/"
          className="cartoon-button relative z-10 inline-block transform rounded-lg bg-yellow-300 px-6 py-3 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
        >
          Back to Home
        </Link>
      </article>
    </div>
  );
}
