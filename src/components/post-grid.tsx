"use client";

import { Code, Palette, Smartphone, Tag } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import SearchBar from "@/components/search-bar";

import Pagination from "./pagination";
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

const POSTS_PER_PAGE = 3;

function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "design":
      return <Palette className="h-8 w-8 text-white" />;
    case "development":
      return <Code className="h-8 w-8 text-white" />;
    case "ux":
      return <Smartphone className="h-8 w-8 text-white" />;
    default:
      return <Tag className="h-8 w-8 text-white" />;
  }
}

export default function PostGrid({ posts }: PostGridProps) {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(posts.map((post) => post.category))];
    return ["All", ...uniqueCategories];
  }, [posts]);

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

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <>
      <div className="relative z-10 mx-auto max-w-4xl">
        <SearchBar onSearch={setSearchQuery} />

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
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
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post) => (
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
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}
