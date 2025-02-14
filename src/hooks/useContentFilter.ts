import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type ContentItem = {
  title: string;
  category: string;
  excerpt?: string;
};

type UseContentFilterProps<T extends ContentItem> = {
  items: T[];
  searchInExcerpt?: boolean;
};

export function useContentFilter<T extends ContentItem>({
  items,
  searchInExcerpt = false,
}: UseContentFilterProps<T>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filter = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("q") || "";

  const setFilter = useCallback(
    (newFilter: string) => {
      const params = new URLSearchParams(searchParams);
      if (newFilter === "All") {
        params.delete("category");
      } else {
        params.set("category", newFilter);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const setSearchQuery = useCallback(
    (query: string) => {
      const params = new URLSearchParams(searchParams);
      if (query) {
        params.set("q", query);
      } else {
        params.delete("q");
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(items.map((item) => item.category))];
    return ["All", ...uniqueCategories];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesFilter = filter === "All" || item.category === filter;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (searchInExcerpt &&
          item.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, items, searchQuery, searchInExcerpt]);

  return {
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
    categories,
    filteredItems,
  };
}
