import { Code, Palette, Smartphone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`cartoon-border halftone-overlay subtle-card-texture relative h-full overflow-hidden rounded-lg bg-white transition-all duration-300 ease-in-out ${
        isHovered ? "-translate-y-2 scale-105 transform shadow-xl" : "shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex h-full flex-col bg-white bg-opacity-90 p-6">
        <div
          className={`cartoon-border mb-4 h-16 w-16 rounded-full ${getCategoryColor(post.category)} flex items-center justify-center`}
        >
          {getCategoryIcon(post.category)}
        </div>
        <span className="mb-2 block text-sm font-semibold text-red-600">
          {post.category}
        </span>
        <h2 className="mb-2 text-2xl font-bold text-gray-900">{post.title}</h2>
        <p className="mb-4 flex-grow text-gray-700">{post.excerpt}</p>{" "}
        <div className="mt-auto flex items-center justify-between">
          {" "}
          <span className="text-sm text-gray-500">{post.date}</span>
          <Link
            href={"/blog/" + post.id}
            className="cartoon-button transform rounded-lg bg-yellow-300 px-4 py-2 font-bold text-gray-900 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-yellow-400 active:scale-95"
          >
            Read More!
          </Link>
        </div>
      </div>
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

function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "design":
      return <Palette className="h-8 w-8 text-white" />;
    case "development":
      return <Code className="h-8 w-8 text-white" />;
    case "ux":
      return <Smartphone className="h-8 w-8 text-white" />;
    default:
      return null;
  }
}
