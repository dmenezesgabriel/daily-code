import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "./button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNavigate = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="mt-8 flex items-center justify-center space-x-4">
      {currentPage > 1 && (
        <Button
          variant="blog"
          size="sm"
          onClick={() => handleNavigate(currentPage - 1)}
        >
          Anterior
        </Button>
      )}
      <span className="text-xl font-bold">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Button
          variant="blog"
          size="sm"
          onClick={() => handleNavigate(currentPage + 1)}
        >
          Próximo
        </Button>
      )}
    </div>
  );
}
