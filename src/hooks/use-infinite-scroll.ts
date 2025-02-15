"use client";
import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = <T>(items: T[], itemsPerPage: number = 6) => {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore]);

  useEffect(() => {
    const start = 0;
    const end = page * itemsPerPage;
    const newVisibleItems = items.slice(start, end);
    setVisibleItems(newVisibleItems);
    setHasMore(end < items.length);
  }, [items, page, itemsPerPage]);

  return { visibleItems, loaderRef, hasMore };
};
