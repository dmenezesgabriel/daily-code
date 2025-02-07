"use client";

import { Code, Palette, Smartphone } from "lucide-react";
import { useMemo, useState } from "react";

import SearchBar from "@/components/search-bar";

import PostCard, {
  PostCardCategory,
  PostCardExcerpt,
  PostCardFooter,
  PostCardIcon,
  PostCardTitle,
} from "./post-card";

type Post = {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  category: string;
};

type PostGridProps = {
  posts: Post[];
};

export default function PostGrid({ posts }: PostGridProps) {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesFilter = filter === "All" || post.category === filter;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, posts, searchQuery]);

  if (posts.length === 0) {
    return (
      <p className="text-center text-xl text-gray-600">
        Stop the presses! No news found. Try another scoop!
      </p>
    );
  }

  return (
    <>
      <div className="relative z-10 mx-auto max-w-4xl">
        <SearchBar onSearch={setSearchQuery} />

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {["All", "Design", "Development", "UX"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`cartoon-button rounded-full px-4 py-2 transition-colors ${
                filter === category
                  ? "bg-red-500 text-white"
                  : "bg-yellow-300 text-gray-900 hover:bg-yellow-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="cartoon-border subtle-card-texture relative z-10 rounded-lg bg-white p-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.id} className="pop-up-hover">
                <PostCard>
                  <PostCardIcon category={post.category}>
                    {getCategoryIcon(post.category)}
                  </PostCardIcon>
                  <PostCardCategory>{post.category}</PostCardCategory>
                  <PostCardTitle>{post.title}</PostCardTitle>
                  <PostCardExcerpt>{post.excerpt}</PostCardExcerpt>
                  <PostCardFooter date={post.date} postId={post.id} />
                </PostCard>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">
            Stop the presses! No news found. Try another scoop!
          </p>
        )}
      </div>
    </>
  );
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
