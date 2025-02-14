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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
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
    <div
      role="search"
      aria-label="Busca de conteúdo"
      className="mx-auto mb-8 w-full max-w-md"
    >
      <div className="relative">
        <label htmlFor="search-input" className="sr-only">
          Buscar conteúdo
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Quero saber mais sobre..."
          value={query}
          onChange={handleChange}
          className={cn(
            "cartoon-border w-full rounded-full bg-white px-4 py-2 text-gray-900 focus:outline-none",
            inputStyles,
          )}
          aria-describedby="search-description"
        />
        <Search
          size={24}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 transform",
            buttonStyles,
          )}
          aria-hidden="true"
        />
        <span id="search-description" className="sr-only">
          Digite para filtrar o conteúdo automaticamente
        </span>
      </div>
    </div>
  );
}
