import Link from "next/link";
import { ReactNode, useState } from "react";

type PostCardProps = {
  children: ReactNode;
};

export default function PostCard({ children }: PostCardProps) {
  return (
    <div className="cartoon-border subtle-card-texture h-full overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
      <div className="flex h-full flex-col bg-white bg-opacity-90 p-6">
        {children}
      </div>
    </div>
  );
}

export function PostCardIcon({
  category,
  children,
}: {
  category: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`cartoon-border mb-4 h-16 w-16 rounded-full ${getCategoryColor(category)} flex items-center justify-center`}
    >
      {children}
    </div>
  );
}

export function PostCardCategory({ children }: { children: ReactNode }) {
  return (
    <span className="mb-2 block text-sm font-semibold text-red-600">
      {children}
    </span>
  );
}

export function PostCardTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-2 text-2xl font-bold text-gray-900">{children}</h2>;
}

export function PostCardExcerpt({ children }: { children: ReactNode }) {
  return <p className="mb-4 flex-grow text-gray-700">{children}</p>;
}

export function PostCardFooter({
  date,
  postId,
}: {
  date: string;
  postId: string;
}) {
  return (
    <div className="mt-auto flex items-center justify-between">
      <span className="text-sm text-gray-500">{date}</span>
      <Link
        href={"/blog/" + postId}
        className="cartoon-button transform rounded-lg bg-yellow-300 px-4 py-2 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
      >
        Read More!
      </Link>
    </div>
  );
}

function getCategoryColor(category: string): string {
  switch (category.toLowerCase()) {
    case "design":
      return "bg-pink-400";
    case "development":
      return "bg-blue-400";
    case "ux":
      return "bg-green-400";
    default:
      return "bg-gray-400";
  }
}
