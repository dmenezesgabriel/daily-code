import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mb-8 w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="cartoon-border w-full rounded-full bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 transform text-red-500 hover:text-red-600"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
}
