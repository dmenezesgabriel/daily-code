import { Newspaper } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-yellow-200 to-yellow-300">
      <div className="px-4 text-center">
        <h1 className="wobble mb-4 text-6xl font-bold text-red-600">404</h1>
        <h2 className="mb-8 text-4xl font-bold text-gray-800">
          Extra! Extra! Page Not Found!
        </h2>
        <div className="cartoon-border subtle-card-texture relative z-10 mx-auto max-w-2xl rounded-lg bg-white p-8">
          <p className="mb-6 text-xl">
            Oh no! It seems our intrepid reporter has wandered off the beaten
            path and can&apos;t find the story you&apos;re looking for!
          </p>
          <div className="mb-6 flex justify-center">
            <Newspaper
              size={100}
              className="animate-bounce-subtle text-gray-400"
            />
          </div>
          <p className="mb-8 text-lg">
            But don&apos;t worry, we&apos;ve got plenty of other scoops waiting
            for you back at the newsroom!
          </p>
          <Link
            href="/"
            className="cartoon-button inline-block transform rounded-lg bg-yellow-400 px-6 py-3 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-500 active:scale-95"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
