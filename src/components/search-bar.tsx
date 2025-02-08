import { Search } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  variant?: "garden" | "blog";
}

export default function SearchBar({
  onSearch,
  variant = "blog",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const buttonStyles =
    variant === "garden"
      ? "text-green-500 hover:text-green-600"
      : "text-red-500 hover:text-red-600";

  const inputStyles =
    variant === "garden"
      ? "focus:ring-2 focus:ring-green-500 border-green-500"
      : "focus:ring-2 focus:ring-red-500 border-red-500";

  return (
    <form onSubmit={handleSubmit} className="mx-auto mb-8 w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Quero saber mais sobre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={cn(
            "cartoon-border w-full rounded-full bg-white px-4 py-2 text-gray-900 focus:outline-none",
            inputStyles,
          )}
        />
        <button
          type="submit"
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 transform",
            buttonStyles,
          )}
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
}
